import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import storycap from "@storycap-testrun/browser/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
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
            storybookUrl: "http://localhost:6006"
          }),
          storycap({
            output: {
              file: (context) =>
                path.join(
                  context.file.replace(".stories.tsx", ""),
                  `${context.name}.png`
                )
            }
          })
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [{ browser: "chromium" }]
          },
          setupFiles: ["./.storybook/vitest.setup.ts"]
        }
      })
    ]
  }
});
