import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src/pages");

export default defineConfig({
  root,
  plugins: [react()],
  define: {
    'process.env.ENV': JSON.stringify(process.env.ENV)
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html")
        // about: resolve(__dirname, "src/pages/about/index.html")
      }
    },
    outDir: resolve(__dirname, "dist")
  },
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"]
  }
});
