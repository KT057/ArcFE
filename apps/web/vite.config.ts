import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

dotenv.config();

const root = resolve(__dirname, "src/pages");

export default defineConfig({
  root,
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80, mozjpeg: true },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 50 },
      svg: { multipass: true }
    })
  ],
  define: {
    "process.env.ENV": JSON.stringify(process.env.ENV),
    "process.env.WP_PREVIEW_BASE64": JSON.stringify(
      process.env.WP_PREVIEW_BASE64
    )
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
