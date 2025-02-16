import './style.css';

import { setupCompiler } from "./interpeter"
import * as moncao from 'monaco-editor'

const rootElement = document.querySelector('#root') as HTMLDivElement;

console.log("root element iS::: ",)
console.log("root element iS::: ", rootElement)
console.log("root element iS::: ",)

// Vite template header with logos (assumes you have viteLogo.png and typescriptLogo.png in your public folder)
rootElement.innerHTML = `
  <div class="container">
    <header>
      <h1>Rust WASM Playground</h1>
      <p>a client-only rust compiler that runs on the browser.</p>
    </header>
    <section class="playground">
      <div id="editor"></div>
      <button id="compile-btn">Compile to WASM</button>
      <div id="logs"></div>
    </section>
  </div>
`

const editorElement = document.getElementById('editor') as HTMLDivElement;

const editor = moncao.editor.create(editorElement, {
  language: 'rust',
  theme: 'vs-dark',
  value: 'fn main() {\n    println!("Hello, world!");\n}'
});


// Set up playground functionality
const compileBtn = document.querySelector('#compile-btn') as HTMLButtonElement
const logs = document.querySelector('#logs') as HTMLDivElement

compileBtn.addEventListener('click', async () => {
  const compiler = await setupCompiler();
  const code = editor.getValue();
  try {
    const result = await compiler.Compile();
    logs.innerHTML = result;
  } catch (error) {
    logs.innerHTML = `Compilation failed: ${error}`;
  }
})

// Dummy Rust compiler function – replace with real logic as needed.
function compileRust(code: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code.trim() === '') {
        reject('No code provided.')
      } else {
        // For now, simply simulate a successful compilation.
        resolve('Compilation successful!\nWASM module loaded.')
      }
    }, 1000)
  })
}
