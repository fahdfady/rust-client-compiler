import * as moncao from 'monaco-editor'

const editorElement = document.getElementById('editor') as HTMLTextAreaElement

const editor = moncao.editor.create(editorElement, {
    language: 'rust',
    theme: 'vs-dark',
    value: 'fn main() {\n    println!("Hello, world!");\n}'
});


export default editor