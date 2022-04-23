use crate::model::RessaInput;
use reqwest::{Client, Error};
use serde::de::DeserializeOwned;
use serde_json::json;

pub async fn execute_ressa<T: DeserializeOwned>(ressa: RessaInput) -> Result<T, Error> {
    let resp = Client::new()
        .post("http://localhost:8080/ressa")
        .json(&json!(ressa))
        .send()
        .await?;

    resp.json().await
}
