use serde::{Deserialize, Serialize};
use std::path::PathBuf;

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
    identifier: NodeType,
    subpatterns: Vec<NodePattern>,
    callback: Option<String>,
    essential: bool,
    pattern: String,
    auxiliary_pattern: Option<String>,
    #[serde(default = "bool::default")]
    transparent: bool,
    #[serde(default = "Option::default")]
    language: Option<Language>,
}

#[derive(Debug, Serialize, Clone)]
pub struct RessaInput {
    pub project_dir: Directory,
    pub patterns: Vec<NodePattern>,
}

#[derive(Debug, Deserialize, Clone)]
pub struct AuthzFlowInput {
    pub project_dir: Directory,
    pub service_call_patterns: Vec<NodePattern>,
    pub authz_rights_patterns: Vec<NodePattern>,
}
