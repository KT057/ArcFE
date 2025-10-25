import { resolve } from "node:path";
import vike from "vike/plugin";
import { defineConfig, mergeConfig } from "vite";
import {
  commonConfig,
  imageOptimizerPlugin,
  reactPlugin
} from "./vite.config.common";

export default defineConfig(
  mergeConfig(commonConfig, {
    root: resolve(__dirname, "src/prerender"),
    plugins: [
      vike({
        prerender: true,
        redirects: {},
        includeAssetsImportedByServer: true
      }),
      reactPlugin(true),
      imageOptimizerPlugin
    ],
    build: {
      outDir: resolve(__dirname, "dist")
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
  })
);
