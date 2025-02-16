import { Compiler } from "rust-playground";

async function setupCompiler(){
    const compiler = Compiler.new();

    return compiler;
}

export { setupCompiler };