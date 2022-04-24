use std::{
    collections::{HashMap, HashSet},
    ops::{BitOr, BitOrAssign},
};

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ServiceCallGraph {
    pub services: Vec<Service>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Service {
    pub name: String,
    pub calls: Vec<ServiceCall>,
    pub endpoints: Vec<ServiceEndpoint>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ServiceCall {
    pub endpoint: String,
    /// The name of the service being called
    pub service: String,
    pub method: String,
    pub r#type: String,
    /// The endpoint paths the service is called from
    pub from: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
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
#[derive(Debug, Serialize, Deserialize, Clone)]
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
            merged.insert(entity, crud_op);
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
    get: bool,
    #[serde(default = "bool::default")]
    delete: bool,
    #[serde(default = "bool::default")]
    create_update: bool,
}

impl BitOr for CrudOp {
    type Output = CrudOp;

    fn bitor(self, rhs: Self) -> Self::Output {
        let get = self.get || rhs.get;
        let delete = self.delete || rhs.delete;
        let create_update = self.create_update || rhs.create_update;
        CrudOp {
            get,
            delete,
            create_update,
        }
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
    for service in services.services.iter_mut() {
        for endpoint in service.endpoints.iter_mut() {
            let access = match eca.0.get(&endpoint.code_mapping) {
                Some(access) => access,
                _ => continue,
            };

            endpoint.flow_crud_access = Some(access.clone());
        }
    }

    let mut visited = HashSet::new();

    for service_ndx in 0..services.services.len() {
        let service = services.services[service_ndx].clone();
        for endpoint_ndx in 0..service.endpoints.len() {
            visit_crud_flows(
                &mut services.services,
                &mut visited,
                service_ndx,
                endpoint_ndx,
            );
        }
    }

    services
}

fn visit_crud_flows(
    services: &mut Vec<Service>,
    visited: &mut HashSet<String>, // ServiceEndpoint.name
    service_ndx: usize,
    endpoint_ndx: usize,
) {
    let service = services[service_ndx].clone();
    let endpoint = service.endpoints[endpoint_ndx].clone();
    let calls = service
        .calls
        .iter()
        .filter(|call| call.from.contains(&endpoint.name))
        .clone();
    visited.insert(endpoint.name.clone());

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

        let called_endpoint_name = services[called_svc].endpoints[called_endpoint].name.clone();

        // Recursively populate endpoint CRUD flows
        if !visited.contains(&called_endpoint_name) {
            visit_crud_flows(services, visited, called_svc, called_endpoint);
        }

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
                split_and_get(&mut service.endpoints, called_endpoint, endpoint_ndx).unwrap()
            } else if called_endpoint > endpoint_ndx {
                let (target_endpoint, called_endpoint) =
                    split_and_get(&mut service.endpoints, endpoint_ndx, called_endpoint).unwrap();
                (target_endpoint, called_endpoint)
            } else {
                // If the service endpoint is calling itself (same service AND same endpoint)
                // then we don't need to do anything because it already has the CRUD permissions
                // populated.
                continue;
            }
        };

        // Merge the endpoint flows
        match (
            target_endpoint.flow_crud_access.as_mut(),
            called_endpoint.flow_crud_access.clone(),
        ) {
            (Some(new_flow_crud_access), Some(flow_crud_access)) => {
                *new_flow_crud_access |= flow_crud_access;
            }
            (None, Some(flow_crud_access)) => {
                target_endpoint.flow_crud_access = Some(flow_crud_access);
            }
            _ => {}
        }
    }
}

fn split_and_get<T>(
    slice: &mut [T],
    first_ndx: usize,
    second_ndx: usize,
) -> Option<(&mut T, &mut T)> {
    if first_ndx < second_ndx {
        let (first, second) = slice.split_at_mut(first_ndx);
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
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
