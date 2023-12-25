mod utils;

use wasm_bindgen::prelude::*;
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}
#[allow(dead_code)]
#[wasm_bindgen]
pub fn greet() {
    alert("Hello, chess!");
}

#[wasm_bindgen]
pub fn hello(msg: String) -> String {
    format!("Hello, {}!", msg)
}
