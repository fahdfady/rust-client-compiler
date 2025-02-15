import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: '.',
    base: './',
    build: {
        target: 'esnext',
        outDir: 'dist',
        rollupOptions: {
        },
    },
});