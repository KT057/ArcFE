import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import type { UserConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

dotenv.config();

// 共通のReactプラグイン設定
export const reactPlugin = (ssr = false) =>
  react({
    babel: {
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            ssr,
            displayName: true,
            fileName: true
          }
        ]
      ]
    }
  });

// 共通の画像最適化プラグイン設定
export const imageOptimizerPlugin = ViteImageOptimizer({
  png: { quality: 80 },
  jpeg: { quality: 80, mozjpeg: true },
  jpg: { quality: 80 },
  webp: { quality: 80 },
  avif: { quality: 50 },
  svg: { multipass: true }
});

// 共通の環境変数定義
export const commonDefine = {
  "process.env.ENV": JSON.stringify(process.env.ENV),
  "process.env.WP_PREVIEW_BASE64": JSON.stringify(process.env.WP_PREVIEW_BASE64)
};

// 共通のresolve設定
export const commonResolve = {
  alias: {
    "@shared": resolve(__dirname, "src/shared"),
    "@packages/ui": resolve(__dirname, "../../packages/ui"),
    "@packages/context": resolve(__dirname, "../../packages/context"),
    "@packages/hooks": resolve(__dirname, "../../packages/hooks"),
    "@packages/utils": resolve(__dirname, "../../packages/utils")
  },
  dedupe: ["react", "react-dom", "styled-components"]
};

// 共通の設定
export const commonConfig: UserConfig = {
  publicDir: resolve(__dirname, "src/public"),
  define: commonDefine,
  resolve: commonResolve
};
