import type { StorybookConfig } from "@storybook/react-vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  staticDirs: ["../public"],
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
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
      SC_DISABLE_SPEEDY: true
    };

    return config;
  }
};

export default config;
