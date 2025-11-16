import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig({
  root: __dirname,
  publicDir: resolve(__dirname, "src/public"),
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true
            }
          ]
        ]
      }
    })
  ],
  define: {
    "process.env.ENV": JSON.stringify(process.env.ENV),
    "process.env.WP_PREVIEW_BASE64": JSON.stringify(process.env.WP_PREVIEW_BASE64)
  },
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "src/shared"),
      "@packages/ui": resolve(__dirname, "../../packages/ui"),
      "@packages/context": resolve(__dirname, "../../packages/context"),
      "@packages/hooks": resolve(__dirname, "../../packages/hooks"),
      "@packages/utils": resolve(__dirname, "../../packages/utils"),
      util: "util/"
    },
    conditions: ['import', 'module', 'browser', 'default'],
    mainFields: ['module', 'main']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'axios'],
    exclude: ['@packages/ui', '@packages/hooks', '@packages/context', '@packages/utils']
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true
  }
});
