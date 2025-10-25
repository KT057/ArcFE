import { resolve } from "node:path";
import { defineConfig, mergeConfig } from "vite";
import { commonConfig, reactPlugin } from "./vite.config.common";

export default defineConfig(
  mergeConfig(commonConfig, {
    root: resolve(__dirname, "src/csr"),
    plugins: [reactPlugin(false)],
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
          chunkFileNames: "assets/[name].js",
          assetFileNames: "assets/[name].[ext]"
        }
      }
    }
  })
);
