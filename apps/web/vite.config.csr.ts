import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";
import { commonConfig } from "./vite.config.common";

export default defineConfig(
  mergeConfig(commonConfig, {
    root: resolve(__dirname, "src/csr"),
    plugins: [react()],
    resolve: {
      mainFields: ['module', 'main']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'axios'],
      exclude: ['@packages/ui', '@packages/hooks', '@packages/context', '@packages/utils']
    },
    build: {
      outDir: resolve(__dirname, "dist/csr"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/csr/index.html"),
          about: resolve(__dirname, "src/csr/about/index.html")
        },
        output: {
          entryFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]"
        }
      }
    }
  })
);
