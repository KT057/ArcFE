import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig, mergeConfig } from "vite";
import {
  commonConfig,
  DIR_FOLDER_NAME,
  imageOptimizerPlugin,
  reactPlugin,
  SSR_NO_EXTERNAL
} from "./vite.config.common";

const isWp = process.env.BUILD_TYPE === "wp";

export default defineConfig(
  mergeConfig(commonConfig, {
    root: resolve(__dirname, isWp ? "src/snapshot" : "src/prerender"),
    plugins: [
      vike({
        prerender: true,
        redirects: {},
        includeAssetsImportedByServer: !isWp
      }),
      isWp ? react() : reactPlugin(true),
      imageOptimizerPlugin
    ],
    build: {
      outDir: resolve(__dirname, DIR_FOLDER_NAME)
    },
    ssr: {
      noExternal: SSR_NO_EXTERNAL,
      external: ["@packages/context", "axios"]
    }
  })
);
