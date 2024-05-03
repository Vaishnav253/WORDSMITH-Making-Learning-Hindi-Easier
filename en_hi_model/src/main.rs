use std::sync::Arc;
use tower_http::cors::{Any, CorsLayer};
use axum::{
    extract::State,
    routing::{ post},
    Json, Router,
};
use rust_bert::pipelines::{
    common::ModelType,
    translation::{Language, TranslationModel, TranslationModelBuilder},
};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

#[derive(Serialize, Deserialize)]
struct TranslatedData {
    data: String,
}

#[derive(Serialize, Deserialize)]
struct ToTranslate {
    data: String,
}


async fn translate(
    State(state): State<Arc<Mutex<TranslationModel>>>,
    Json(data): Json<ToTranslate>,
) -> Json<TranslatedData> {

    println!("Hi");

    let model = state.lock().await;

    let output = model
        .translate(&[data.data], Language::English, Language::Hindi)
        .unwrap();

    Json(TranslatedData {
        data: output[0].to_string(),
    })
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {

    let run_model = tokio::task::spawn_blocking(|| {

        let model = Arc::new(Mutex::new(
            TranslationModelBuilder::new()
                .with_source_languages(vec![Language::English])
                .with_target_languages(vec![Language::Hindi])
                .with_model_type(ModelType::M2M100)
                .create_model()
                .unwrap(),
        ));

        return model;
    });

    
    let  model = run_model.await.unwrap();


    let cors = CorsLayer::new()
                .allow_origin(Any)
                .allow_headers(Any)
                .allow_methods(Any);

    let app = Router::new()
        .route("/translate", post(translate))
        .with_state(Arc::clone(&model))
        .layer(cors);

    // run it with hyper on localhost:3000
    axum::Server::bind(&"0.0.0.0:5000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();

    Ok(())


}
