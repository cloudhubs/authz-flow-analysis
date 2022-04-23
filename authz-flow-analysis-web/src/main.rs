use axum::Server;
use std::net::SocketAddr;
use tower_http::trace::TraceLayer;

mod error;
mod model;
mod routes;
mod utils;

#[tokio::main]
async fn main() {
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "authz_flow_analyziz_web=debug,tower_http=debug");
    }
    tracing_subscriber::fmt::init();
    let routes = routes::routes().layer(TraceLayer::new_for_http());
    let addr = SocketAddr::from(([127, 0, 0, 1], 8081));
    Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();
}
