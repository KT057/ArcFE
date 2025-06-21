import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    process.env.NODE_ENV === "development"
      ? "../development/**/*.stories.js"
      : "../dist/**/*.stories.js"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    // getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-designs"),
    getAbsolutePath("@storybook/addon-interactions")
  ],
  framework: "@storybook/html-vite",
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: false,
        lazyCompilation: false
      }
    }
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
      exclude: /node_modules/
    });
    return config;
  }
};

export default config;
