import * as moncao from 'monaco-editor'

const initEditor = (): moncao.editor.IStandaloneCodeEditor => {

    const editorElement = document.getElementById('editor') as HTMLTextAreaElement

    const editor = moncao.editor.create(editorElement, {
        language: 'rust',
        theme: 'vs-dark',
        value: 'fn main() {\n    println!("Hello, world!");\n}'
    });

    return editor
}

export { initEditor }