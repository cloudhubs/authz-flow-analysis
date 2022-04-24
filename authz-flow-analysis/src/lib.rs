use std::{
    collections::HashMap,
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

    let mut visited = HashMap::new();

    for i in 0..services.services.len() {
        let mut service = services.services[i].clone();
        for j in 0..service.endpoints.len() {
            let endpoint = service.endpoints[j].clone();
            let new_endpoint =
                visit_crud_flows(&mut services.services, &mut visited, service, endpoint);
            let endpoint = &mut services.services[i].endpoints[j];
            *endpoint = new_endpoint;
            service = services.services[i].clone();
        }
    }

    services
}

fn visit_crud_flows(
    services: &mut Vec<Service>,
    visited: &mut HashMap<String, ()>, // ServiceEndpoint.name
    service: Service,
    endpoint: ServiceEndpoint,
) -> ServiceEndpoint {
    let calls = service
        .calls
        .iter()
        .filter(|call| call.from.contains(&endpoint.name))
        .clone();
    visited.insert(endpoint.name.clone(), ());

    let mut new_endpoint = endpoint.clone();

    for call in calls {
        let mut called_svc = match services.iter_mut().find(|svc| svc.name == call.service) {
            Some(svc) => svc.clone(),
            _ => continue,
        };
        let called_endpoint = match called_svc
            .endpoints
            .iter_mut()
            .find(|e| e.name == call.endpoint)
        {
            Some(e) => e.clone(),
            _ => continue,
        };

        // Recursively populate endpoint CRUD flows
        let called_endpoint = if !visited.contains_key(&called_endpoint.name) {
            visit_crud_flows(services, visited, called_svc, called_endpoint)
        } else {
            called_endpoint.clone()
        };

        // Merge the endpoint flows
        match (
            new_endpoint.flow_crud_access.as_mut(),
            called_endpoint.flow_crud_access.clone(),
        ) {
            (Some(new_flow_crud_access), Some(flow_crud_access)) => {
                *new_flow_crud_access |= flow_crud_access;
            }
            (None, Some(flow_crud_access)) => {
                new_endpoint.flow_crud_access = Some(flow_crud_access);
            }
            _ => {}
        }
    }
    new_endpoint
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
