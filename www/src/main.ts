import './style.css'

// Vite template header with logos (assumes you have viteLogo.png and typescriptLogo.png in your public folder)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <header>
      <h1>Rust WASM Playground</h1>
      <p>a client-only rust compiler that runs on the browser.</p>
    </header>
    <section class="playground">
      <textarea id="rust-code" placeholder="Enter your Rust code here"></textarea>
      <button id="compile-btn">Compile to WASM</button>
      <div id="logs"></div>
    </section>
  </div>
`

// Set up playground functionality
const compileBtn = document.querySelector('#compile-btn') as HTMLButtonElement
const logs = document.querySelector('#logs') as HTMLDivElement
const rustCodeInput = document.querySelector('#rust-code') as HTMLTextAreaElement

rustCodeInput.addEventListener('keydown', (event) => {
  if ((event.ctrlKey && event.key === 'Enter') || (event.metaKey && event.key === 'Enter')) {
    compileBtn.click(); // Simulate a click on the compile button
  }
});

compileBtn.addEventListener('click', async () => {
  logs.textContent = 'Compiling...'
  const code = rustCodeInput.value
  try {
    const result = await compileRust(code)
    logs.textContent = result
  } catch (error) {
    logs.textContent = 'Compilation failed: ' + error
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
