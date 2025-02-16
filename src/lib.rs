use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Compiler {
    // state management for the compiler. maintains memory safety
    compilation_state: Rc<RefCell<CompilationState>>,
}

struct CompilationState {
    source_code: String,
    output: Option<String>,
    last_error: Option<String>,
}

#[derive(Debug)]
pub enum CompilerError {
    SourceCodeError(String),
    CompilationError(String),
    ExceutionError,
}

#[wasm_bindgen]
impl Compiler {
    pub fn new() -> Self {
        let state = CompilationState {
            source_code: String::new(),
            output: None,
            last_error: None,
        };

        Self {
            compilation_state: Rc::new(RefCell::new(state)),
        }
    }

    pub fn set_source_code(&mut self, source_code: &str) -> Result<(), JsValue> {
        let mut state = self.compilation_state.borrow_mut();

        state.source_code = source_code.to_string();
        state.last_error = None;
        state.output = None;

        Ok(())
    }

    pub async fn compile(&mut self) -> Result<JsValue, JsValue> {
        let state = self.compilation_state.borrow();

        let res = format!("Compilation done for source code: {}", state.source_code);

        Ok(JsValue::from_str(&res))
    }
}
