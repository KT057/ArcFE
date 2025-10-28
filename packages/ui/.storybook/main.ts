import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  viteFinal: async (config) => {
    // styled-componentsの設定
    config.define = {
      ...config.define,
      "process.env": "{}",
      "process.env.STORYBOOK_BASE": JSON.stringify(process.env.STORYBOOK_BASE),
      "process.env.GOOGLE_MAP_ID": JSON.stringify(process.env.GOOGLE_MAP_ID),
      "process.env.GOOGLE_MAPS_API_KEY": JSON.stringify(
        process.env.GOOGLE_MAPS_API_KEY
      ),
      SC_DISABLE_SPEEDY: true
    };

    config.resolve = {
      ...(config.resolve ?? {}),
      alias: {
        ...(config.resolve?.alias ?? {}),
        "@utils": fileURLToPath(new URL("../utils", import.meta.url))
      }
    };

    return config;
  }
};

export default config;
