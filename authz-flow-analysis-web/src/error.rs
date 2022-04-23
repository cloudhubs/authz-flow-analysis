use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("Failed to execute request: {0}")]
    Client(#[from] reqwest::Error),
}

impl IntoResponse for Error {
    fn into_response(self) -> Response {
        let body = Json(json!({
            "message": format!("{}", self),
        }));

        (StatusCode::INTERNAL_SERVER_ERROR, body).into_response()
    }
}
