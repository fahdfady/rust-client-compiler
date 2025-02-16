import './style.css';

import { setupCompiler } from "./interpeter"
import { initEditor } from './editor';

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

const editor = initEditor();

// Set up playground functionality
const compileBtn = document.querySelector('#compile-btn') as HTMLButtonElement
const logs = document.querySelector('#logs') as HTMLDivElement

compileBtn.addEventListener('click', async () => {
  const code = editor.getValue();
  const compiler = await setupCompiler(code);
  try {
    const result = await compiler.compile();
    logs.innerHTML = result;
  } catch (error) {
    logs.innerHTML = `Compilation failed: ${error}`;
  }
})
