/** biome-ignore-all lint/correctness/noUnusedImports: lint/suppressions/incorrect */
import type { Preview } from "@storybook/react";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";
import { MediaProvider } from "../context/MediaContext";
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
    },
    docs: {
      autodocs: "tag"
    }
  },
  decorators: [
    (Story) => (
      <ParallaxProvider>
        <MediaProvider>
          <ThemeProvider theme={themes}>
            <GlobalStyles />
            <div style={{ width: "100%", padding: "40px" }}>
              <Story />
            </div>
          </ThemeProvider>
        </MediaProvider>
      </ParallaxProvider>
    )
  ]
};

export default preview;
