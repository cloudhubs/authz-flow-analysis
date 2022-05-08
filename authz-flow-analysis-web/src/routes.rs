use super::error::Error;
use super::model::{AuthzFlowInput, RessaInput};
use super::utils::execute_ressa;
use authz_flow_analysis::{EndpointCrudAccessResult, ServiceCallGraph};
use axum::{routing::post, Json, Router};

pub fn routes() -> Router {
    Router::new()
        .route("/crudflow/analyze", post(analyze_crudflow))
        .route("/crudflow2", post(analyze_crudflow2))
}

pub async fn analyze_crudflow(
    Json(input): Json<AuthzFlowInput>,
) -> Result<Json<ServiceCallGraph>, Error> {
    let call_graph_ressa = RessaInput {
        project_dir: input.project_dir.clone(),
        patterns: input.service_call_patterns,
    };

    let crud_roles_ressa = RessaInput {
        project_dir: input.project_dir.clone(),
        patterns: input.authz_rights_patterns,
    };

    let (call_graph, crud_roles) = tokio::join!(
        execute_ressa::<ServiceCallGraph>(call_graph_ressa),
        execute_ressa::<EndpointCrudAccessResult>(crud_roles_ressa)
    );

    Ok(Json(authz_flow_analysis::infer_crud_flows(
        call_graph?,
        crud_roles?,
    )))
}

pub async fn analyze_crudflow2(
    Json(input): Json<authz_flow_analysis::DebugInput>,
) -> Result<Json<ServiceCallGraph>, Error> {
    Ok(Json(authz_flow_analysis::infer_crud_flows(
        input.graph,
        input.eca,
    )))
}
