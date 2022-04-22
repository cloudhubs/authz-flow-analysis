use std::path::PathBuf;
use std::{collections::HashMap, ops::BitOr};

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
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct EndpointCrudAccess(HashMap<String, CrudOp>);

#[derive(Debug, Serialize, Deserialize, Clone, Copy, Default)]
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

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
