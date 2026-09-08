use axum::{ extract::State, routing::get, Router };
use sqlx::{ postgres::PgPoolOptions, PgPool };
use std::env;

#[derive(Clone)]
struct AppState {
    db: PgPool,
}

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE url must be set");
    println!("database url: {:?}", database_url);
    let db = PgPoolOptions::new()
                .max_connections(5)
                .connect(&database_url)
                .await
                .expect("Failed to connect to postgres");
    let state = AppState { db };

    let app = Router::new()
                .route("/", get(root))
                .route("/health", get(health))
                .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    println!("server is running on port 3000");

    axum::serve(listener, app).await.unwrap();
}


async fn root() -> &'static str {
    "hello rust server"
}


async fn health(State(state): State<AppState>) -> &'static str {
    sqlx::query("SELECT 1")
        .execute(&state.db)
        .await
        .expect("database query failed");

    "databse connected successfully"
}