use std::collections::hash_map::Entry;
use std::path::PathBuf;
use std::{
    collections::HashMap,
    ops::{BitOr, BitOrAssign},
};

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Directory {
    files: Vec<PathBuf>,
    sub_directories: Vec<Directory>,
    path: PathBuf,
}

#[derive(Debug, Serialize, Deserialize, Clone, Copy)]
pub enum NodeType {
    ClassOrInterface,
    Method,
    MethodParam,
    Field,
    Annotation,
    AnnotationValuePair,
    CallExpr,
    VarDecl,
    DeclStmt,
    Ident,
    Literal,
    BinaryExpr,
}

#[derive(Debug, Serialize, Deserialize, Clone, Copy)]
pub enum Language {
    Java,
    Cpp,
    Python,
    Go,
    #[serde(rename = "N/A")]
    Unknown,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct NodePattern {
    pub identifier: NodeType,
    pub subpatterns: Vec<NodePattern>,
    pub callback: Option<String>,
    pub essential: bool,
    pub pattern: String,
    pub auxiliary_pattern: Option<String>,
    #[serde(default = "bool::default")]
    pub transparent: bool,
    #[serde(default = "Option::default")]
    pub language: Option<Language>,
}

#[derive(Debug, Serialize, Clone)]
pub struct RessaInput {
    project_dir: Directory,
    patterns: Vec<NodePattern>,
}

#[derive(Debug, Deserialize, Clone)]
pub struct AuthzFlowInput {
    project_dir: Directory,
    service_call_patterns: Vec<NodePattern>,
    authz_rights_patterns: Vec<NodePattern>,
}

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

        for (entity, crud_op) in self.0 {
            let other_crud_op = merged.entry(entity).or_insert(crud_op);
            *other_crud_op |= crud_op;
            merged.insert(entity, crud_op);
        }

        EndpointCrudAccess(merged)
    }
}

impl BitOrAssign for EndpointCrudAccess {
    fn bitor_assign(&mut self, rhs: Self) {
        *self = *self | rhs;
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

    let services_aux = services.clone();

    for service in services.services.iter_mut() {
        for endpoint in service.endpoints.iter_mut() {
            // Go through the calls each endpoint makes to expand permissions
            let calls: Vec<_> = service
                .calls
                .iter()
                .filter(|call| call.from.contains(&endpoint.name))
                .collect();

            for call in calls {
                let service = match services_aux
                    .services
                    .iter()
                    .find(|s| service.name == call.service)
                {
                    Some(s) => s,
                    _ => continue,
                };

                let called_endpoint = service
                    .endpoints
                    .iter()
                    .find(|e| e.name == call.endpoint)
                    .expect("Missing endpoint");

                match endpoint.flow_crud_access.as_mut() {
                    Some(flow_crud_access) => {
                        // *flow_crud_access |= called_endpoint.flow_crud_access;
                    }
                    _ => endpoint.flow_crud_access = called_endpoint.flow_crud_access.clone(),
                }
            }
        }
    }
    services
}

/* services Service[]
 * visited HashMap<Endpoint, ()>
 *
 * service Service
 * endpoint Endpoint
 *
 * calls = service.calls.filter(|call| call.from.find(endpoint.path))
 * visited.insert(endpoint)
 *
 * for call in calls {
 *   called_svc = services.find(service.name)
 *   called_endpoint = called_svc.endpoints.find(call.path)
 *   if visited.get(called_endpoint).is_none() {
 *     // compute permissions
 *     recurse(services, called_svc, called_endpoint, visited)
 *   }
 *   endpoint.flow_crud_access |= called_endpoint.flow_crud_access
 * }
 */
fn visit_crud_flows(
    services: &Vec<Service>,
    visited: &mut HashMap<String, ()>, // ServiceEndpoint.name
    service: &Service,
    endpoint: &ServiceEndpoint,
) -> ServiceEndpoint {
    let calls = service
        .calls
        .iter()
        .filter(|call| call.from.contains(&endpoint.name))
        .clone();
    visited.insert(endpoint.name.clone(), ());

    let mut new_endpoint = endpoint.clone();

    for call in calls {
        let called_svc = match services.iter().find(|svc| svc.name == call.service) {
            Some(svc) => svc,
            _ => continue,
        };
        let called_endpoint = match called_svc
            .endpoints
            .iter()
            .find(|e| e.name == call.endpoint)
        {
            Some(e) => e,
            _ => continue,
        };

        let called_endpoint = if !visited.contains_key(&called_endpoint.name) {
            visit_crud_flows(services, visited, called_svc, called_endpoint)
        } else {
            called_endpoint.clone()
        };

        new_endpoint.flow_crud_access |= called_endpoint.flow_crud_access;
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
