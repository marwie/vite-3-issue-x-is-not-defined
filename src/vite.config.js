import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import * as path from 'path';

export default defineConfig({

    base: "./",
    assetsInclude: ['*'],
    build: {
        outDir: "./dist",
        emptyOutDir: false,
        keepNames: true,
    },
    plugins: [
        viteCompression({ deleteOriginFile: true }),
    ],

    esbuild: {
        keepNames: true,
    },

    resolve: {
        alias: {
            'nested-package': () => {
                const absPath = path.resolve(__dirname, 'node_modules/nested-package');
                return absPath;
            },
        }
    }
});