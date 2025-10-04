import { setProjectAnnotations } from "@storybook/react-vite";
import { screenshot } from "@storycap-testrun/browser";
import { page } from "@vitest/browser/context";
import { afterEach } from "vitest";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([projectAnnotations]);

afterEach(async (context) => {
  await screenshot(page, context);
});
