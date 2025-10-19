import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

dotenv.config();

export default defineConfig({
  publicDir: resolve(__dirname, "src/pages/public"),
  plugins: [
    vike({
      prerender: true,
      redirects: {},
      includeAssetsImportedByServer: true
    }),
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              ssr: true,
              displayName: true,
              fileName: true
            }
          ]
        ]
      }
    }),
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
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          // Vikeのサーバーエントリーは元の場所に配置
          if (chunkInfo.name === "entry") {
            return "[name].js";
          }
          return "assets/[name].js";
        },
        chunkFileNames: "assets/[name].js"
      }
    }
  },
  resolve: {
    dedupe: ["react", "react-dom", "styled-components"]
  },
  ssr: {
    noExternal: [
      "styled-components",
      "@packages/ui",
      "@packages/context",
      "@packages/hooks",
      "@packages/utils"
    ]
  }
});
