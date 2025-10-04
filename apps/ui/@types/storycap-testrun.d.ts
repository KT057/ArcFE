import type { ScreenshotParameters } from "@storycap-testrun/browser";

// Replace it with the framework you are using.
declare module "@storybook/react" {
  interface Parameters {
    screenshot?: ScreenshotParameters;
  }
}
