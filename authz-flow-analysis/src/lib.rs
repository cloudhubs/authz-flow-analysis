use std::{
    collections::{HashMap, HashSet},
    ops::{BitOr, BitOrAssign},
};

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct ServiceCallGraph {
    pub services: Vec<Service>,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default, PartialEq)]
pub struct Service {
    pub name: String,
    pub calls: Vec<ServiceCall>,
    pub endpoints: Vec<ServiceEndpoint>,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default, PartialEq)]
pub struct ServiceCall {
    pub endpoint: String,
    /// The name of the service being called
    pub service: String,
    pub method: String,
    pub r#type: String,
    /// The endpoint paths the service is called from
    pub from: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone, Default, PartialEq)]
pub struct ServiceEndpoint {
    /// The path of the endpoint
    pub name: String,
    /// The code method of the endpoint
    pub code_mapping: String,
    /// The return type of the endpoint
    pub return_type: String,
    /// The HTTP method
    pub method: String,
    pub r#type: String,

    #[serde(default = "Option::default")]
    pub flow_crud_access: Option<EndpointCrudAccess>,
}

/// Map of endpoint method (source code) name to its accesses
#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct EndpointCrudAccessResult(HashMap<String, EndpointCrudAccess>);

/// Map of entity names to its crud operations
#[derive(Debug, Serialize, Deserialize, Clone, PartialEq)]
pub struct EndpointCrudAccess(HashMap<String, CrudOp>);

impl BitOr for EndpointCrudAccess {
    type Output = EndpointCrudAccess;

    fn bitor(self, rhs: Self) -> Self::Output {
        let mut merged = self.0.clone();

        for (entity, crud_op) in self.0.into_iter().chain(rhs.0.into_iter()) {
            let other_crud_op = merged.entry(entity.clone()).or_insert(crud_op);
            *other_crud_op |= crud_op;
        }

        EndpointCrudAccess(merged)
    }
}

impl BitOrAssign for EndpointCrudAccess {
    fn bitor_assign(&mut self, rhs: Self) {
        *self = self.clone() | rhs.clone();
    }
}

#[derive(Debug, Serialize, Deserialize, Clone, Copy, Default, Eq, PartialEq, Hash)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
pub struct CrudOp {
    #[serde(default = "bool::default")]
    read: bool,
    #[serde(default = "bool::default")]
    delete: bool,
    #[serde(default = "bool::default")]
    create: bool,
    #[serde(default = "bool::default")]
    update: bool,
}

impl BitOr for CrudOp {
    type Output = CrudOp;

    fn bitor(self, rhs: Self) -> Self::Output {
        let read = self.read || rhs.read;
        let delete = self.delete || rhs.delete;
        let create = self.create || rhs.create;
        let update = self.update || rhs.update;
        let result = CrudOp {
            read,
            delete,
            create,
            update,
        };
        result
    }
}

impl BitOrAssign for CrudOp {
    fn bitor_assign(&mut self, rhs: Self) {
        *self = *self | rhs;
    }
}

pub fn infer_crud_flows(
    mut services: ServiceCallGraph,
    eca: EndpointCrudAccessResult,
) -> ServiceCallGraph {
    // Populate the initial level of CRUD permissions
    let mut endpoints = 0;
    for service in services.services.iter_mut() {
        for endpoint in service.endpoints.iter_mut() {
            endpoints += 1;
            let access = match eca.0.get(&endpoint.code_mapping) {
                Some(access) => access,
                _ => continue,
            };

            endpoint.flow_crud_access = Some(access.clone());
        }
    }

    let mut visited = HashSet::new();

    let mut permissions_changed = false;
    for _ in 0..endpoints {
        for service_ndx in 0..services.services.len() {
            let service = services.services[service_ndx].clone();
            for endpoint_ndx in 0..service.endpoints.len() {
                permissions_changed = visit_crud_flows(
                    &mut services.services,
                    &mut visited,
                    service_ndx,
                    endpoint_ndx,
                ) || permissions_changed;
            }
        }
        if !permissions_changed {
            break;
        }
    }

    services
}

fn visit_crud_flows(
    services: &mut Vec<Service>,
    visited: &mut HashSet<String>, // ServiceEndpoint.name
    service_ndx: usize,
    endpoint_ndx: usize,
) -> bool {
    let service = services[service_ndx].clone();
    let endpoint = service.endpoints[endpoint_ndx].clone();
    let calls = service
        .calls
        .iter()
        .filter(|call| call.from.contains(&endpoint.name))
        .clone();
    visited.insert(endpoint.name.clone());

    let mut permissions_changed = false;

    for call in calls {
        let called_svc = match services.iter_mut().position(|svc| svc.name == call.service) {
            Some(svc) => svc,
            _ => continue,
        };
        let called_endpoint = match services[called_svc]
            .endpoints
            .iter_mut()
            .position(|e| e.name == call.endpoint)
        {
            Some(e) => e,
            _ => continue,
        };

        // I know this is extremely ugly. The purpose of this is to extract
        // two mutable references from the same mutable slice safely.
        //
        // To do this, we need to split the services slice in two so the compiler
        // can tell it is safe to pull out two mutable references
        let (target_endpoint, called_endpoint) = if called_svc != service_ndx {
            let (called_svc, target_svc) = if called_svc < service_ndx {
                split_and_get(services, called_svc, service_ndx).unwrap()
            } else {
                let (target_svc, called_svc) =
                    split_and_get(services, service_ndx, called_svc).unwrap();
                (called_svc, target_svc)
            };

            let called_endpoint = &mut called_svc.endpoints[called_endpoint];
            let target_endpoint = &mut target_svc.endpoints[endpoint_ndx];
            (target_endpoint, called_endpoint)
        } else {
            // If the same service is being accessed then we need to split the endpoints
            // slice that it contains and then pull the references from the split endpoints slice.
            let service = &mut services[service_ndx];
            if called_endpoint < endpoint_ndx {
                let (called_endpoint, target_endpoint) =
                    split_and_get(&mut service.endpoints, called_endpoint, endpoint_ndx).unwrap();
                (target_endpoint, called_endpoint)
            } else if called_endpoint > endpoint_ndx {
                split_and_get(&mut service.endpoints, endpoint_ndx, called_endpoint).unwrap()
            } else {
                // If the service endpoint is calling itself (same service AND same endpoint)
                // then we don't need to do anything because it already has the CRUD permissions
                // populated.
                continue;
            }
        };

        // Merge the endpoint flows
        let change = match (
            target_endpoint.flow_crud_access.as_mut(),
            called_endpoint.flow_crud_access.clone(),
        ) {
            (Some(new_flow_crud_access), Some(flow_crud_access)) => {
                let old = new_flow_crud_access.clone();
                *new_flow_crud_access |= flow_crud_access;
                *new_flow_crud_access != old
            }
            (None, Some(flow_crud_access)) => {
                target_endpoint.flow_crud_access = Some(flow_crud_access);
                true
            }
            _ => false,
        };
        permissions_changed = permissions_changed || change;
    }

    permissions_changed
}

fn split_and_get<T>(
    slice: &mut [T],
    first_ndx: usize,
    second_ndx: usize,
) -> Option<(&mut T, &mut T)> {
    if slice.len() > 1 && first_ndx < second_ndx {
        let (first, second) = slice.split_at_mut(first_ndx + 1);
        let offset = first.len();
        let first = first.last_mut().unwrap();
        let second_ndx = second_ndx - offset;
        let second = &mut second[second_ndx];
        Some((first, second))
    } else {
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn split_and_get_one() {
        let mut s = [1];
        assert_eq!(split_and_get(&mut s, 0, 1), None);
    }

    #[test]
    fn split_and_get_two() {
        let mut s = [1, 2];
        assert_eq!(split_and_get(&mut s, 0, 1), Some((&mut 1, &mut 2)));
    }

    #[test]
    fn split_and_get_three() {
        let mut s = [1, 2, 3];
        assert_eq!(split_and_get(&mut s, 0, 2), Some((&mut 1, &mut 3)));
        assert_eq!(split_and_get(&mut s, 0, 1), Some((&mut 1, &mut 2)));
        assert_eq!(split_and_get(&mut s, 1, 2), Some((&mut 2, &mut 3)));
    }

    fn get_simple_test_input() -> (ServiceCallGraph, EndpointCrudAccessResult) {
        let services = ServiceCallGraph {
            services: vec![
                Service {
                    name: "one".into(),
                    endpoints: vec![
                        ServiceEndpoint {
                            name: "a".into(),
                            code_mapping: "a".into(),
                            ..Default::default()
                        },
                        ServiceEndpoint {
                            name: "b".into(),
                            code_mapping: "b".into(),
                            ..Default::default()
                        },
                    ],
                    calls: vec![
                        ServiceCall {
                            service: "one".into(),
                            endpoint: "b".into(),
                            from: vec!["a".into()],
                            ..Default::default()
                        },
                        ServiceCall {
                            service: "two".into(),
                            endpoint: "c".into(),
                            from: vec!["a".into()],
                            ..Default::default()
                        },
                    ],
                },
                Service {
                    name: "two".into(),
                    endpoints: vec![ServiceEndpoint {
                        name: "c".into(),
                        code_mapping: "c".into(),
                        ..Default::default()
                    }],
                    calls: vec![
                        ServiceCall {
                            service: "one".into(),
                            endpoint: "b".into(),
                            from: vec!["c".into()],
                            ..Default::default()
                        },
                        ServiceCall {
                            service: "three".into(),
                            endpoint: "d".into(),
                            from: vec!["c".into()],
                            ..Default::default()
                        },
                    ],
                },
                Service {
                    name: "three".into(),
                    endpoints: vec![ServiceEndpoint {
                        name: "d".into(),
                        code_mapping: "d".into(),
                        ..Default::default()
                    }],
                    calls: vec![ServiceCall {
                        service: "one".into(),
                        endpoint: "a".into(),
                        from: vec!["d".into()],
                        ..Default::default()
                    }],
                },
            ],
        };

        let mut eca = HashMap::new();

        let mut a = HashMap::new();
        a.insert(
            "Something".into(),
            CrudOp {
                read: true,
                ..Default::default()
            },
        );

        let mut b = HashMap::new();
        b.insert(
            "User".into(),
            CrudOp {
                read: false,
                delete: true,
                create: true,
                update: true,
            },
        );

        let mut c = HashMap::new();
        c.insert(
            "User".into(),
            CrudOp {
                read: true,
                ..Default::default()
            },
        );

        let mut d = HashMap::new();
        d.insert(
            "Something".into(),
            CrudOp {
                read: true,
                delete: true,
                create: true,
                update: true,
            },
        );

        eca.insert("a".to_string(), EndpointCrudAccess(a));
        eca.insert("b".into(), EndpointCrudAccess(b));
        eca.insert("c".into(), EndpointCrudAccess(c));
        eca.insert("d".into(), EndpointCrudAccess(d));

        let eca = EndpointCrudAccessResult(eca);
        (services, eca)
    }

    fn get_simple_test_expected() -> ServiceCallGraph {
        let all_perms = CrudOp {
            read: true,
            delete: true,
            create: true,
            update: true,
        };
        let mut a = HashMap::new();

        a.insert("User".to_string(), all_perms);
        a.insert("Something".into(), all_perms);

        let mut b = HashMap::new();
        b.insert(
            "User".to_string(),
            CrudOp {
                read: false,
                ..all_perms.clone()
            },
        );

        let mut c = HashMap::new();
        c.insert("User".to_string(), all_perms);
        c.insert("Something".into(), all_perms);

        let mut d = HashMap::new();
        d.insert("User".to_string(), all_perms);
        d.insert("Something".to_string(), all_perms);

        ServiceCallGraph {
            services: vec![
                Service {
                    name: "one".into(),
                    endpoints: vec![
                        ServiceEndpoint {
                            name: "a".into(),
                            code_mapping: "a".into(),
                            flow_crud_access: Some(EndpointCrudAccess(a)),
                            ..Default::default()
                        },
                        ServiceEndpoint {
                            name: "b".into(),
                            code_mapping: "b".into(),
                            flow_crud_access: Some(EndpointCrudAccess(b)),
                            ..Default::default()
                        },
                    ],
                    calls: vec![
                        ServiceCall {
                            service: "one".into(),
                            endpoint: "b".into(),
                            from: vec!["a".into()],
                            ..Default::default()
                        },
                        ServiceCall {
                            service: "two".into(),
                            endpoint: "c".into(),
                            from: vec!["a".into()],
                            ..Default::default()
                        },
                    ],
                },
                Service {
                    name: "two".into(),
                    endpoints: vec![ServiceEndpoint {
                        name: "c".into(),
                        code_mapping: "c".into(),
                        flow_crud_access: Some(EndpointCrudAccess(c)),
                        ..Default::default()
                    }],
                    calls: vec![
                        ServiceCall {
                            service: "one".into(),
                            endpoint: "b".into(),
                            from: vec!["c".into()],
                            ..Default::default()
                        },
                        ServiceCall {
                            service: "three".into(),
                            endpoint: "d".into(),
                            from: vec!["c".into()],
                            ..Default::default()
                        },
                    ],
                },
                Service {
                    name: "three".into(),
                    endpoints: vec![ServiceEndpoint {
                        name: "d".into(),
                        code_mapping: "d".into(),
                        flow_crud_access: Some(EndpointCrudAccess(d)),
                        ..Default::default()
                    }],
                    calls: vec![ServiceCall {
                        service: "one".into(),
                        endpoint: "a".into(),
                        from: vec!["d".into()],
                        ..Default::default()
                    }],
                },
            ],
        }
    }

    /*
     *     |-----------------
     *     v                |
     *     a  -----> b      |
     *      \        ^      |
     *       \       |      |
     *        -----> c ---> d
     *
     * Service One: { a, b }
     * Service Two: { c }
     * Service Three: { d }
     *
     * ------ Individual permissions ------
     * --- User ---
     *      GET   DELETE   CREATE_UPDATE
     * a:
     * b:           x           x
     * c:    x
     * d:
     *
     * --- Something ---
     *      GET   DELETE   CREATE_UPDATE
     * a:    x
     * b:
     * c:
     * d:    x      x           x
     *
     * ------ Flow permissions ------
     * --- User ---
     *      GET   DELETE   CREATE_UPDATE
     * a:    x      x           x
     * b:           x           x
     * c:    x      x           x
     * d:    x      x           x
     *
     * d's permissions on User are empty because of the cycle with "a"
     *
     * --- Something ---
     *      GET   DELETE   CREATE_UPDATE
     * a:    x      x           x
     * b:
     * c:    x      x           x
     * d:    x      x           x
     *
     */
    #[test]
    fn test_infer_crud_flows_simple() {
        let (services, eca) = get_simple_test_input();
        let services_expected = get_simple_test_expected().services;
        let services_result = infer_crud_flows(services, eca).services;

        for (svc, svc_expected) in services_result.iter().zip(services_expected.iter()) {
            for (endpoint, endpoint_expected) in
                svc.endpoints.iter().zip(svc_expected.endpoints.iter())
            {
                assert_eq!(endpoint, endpoint_expected);
            }
        }
    }
}
