/** biome-ignore-all lint/correctness/noUnusedImports: <explanation> */

import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-style";
import { themes } from "../styles/themes";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <div style={{ width: "100%", padding: "40px" }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
};

export default preview;
