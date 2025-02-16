import { Compiler } from "rust-playground";

async function setupCompiler(code: string) {

    if (!code) throw new Error("No code provided");

    const compiler = Compiler.new();

    compiler.set_source_code(code);

    return compiler;
}

export { setupCompiler };