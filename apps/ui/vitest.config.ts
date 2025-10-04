import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { defineConfig, defineProject } from "vitest/config";

// ESM で __dirname を再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    projects: [
      defineProject({
        plugins: [
          storybookTest({
            configDir: path.join(__dirname, ".storybook"),
            storybookScript: "pnpm storybook --ci"
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            provider: "playwright",
            headless: true,
            instances: [{ browser: "chromium" }]
          },
          setupFiles: ["./.storybook/vitest.setup.ts"]
        }
      })
    ]
  }
});
