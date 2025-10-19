import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { OnRenderHtmlAsync } from "vike/types";

export const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, config } = pageContext;

  if (!Page) {
    throw new Error("Page component is required");
  }

  const sheet = new ServerStyleSheet();

  try {
    const PageElement = React.createElement(Page as React.ComponentType);
    const pageHtml = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <React.StrictMode>{PageElement}</React.StrictMode>
      )
    );
    const styleTags = sheet.getStyleTags();

    const title = (config as any)?.title || "My App";

    const documentHtml = escapeInject`<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
          ${dangerouslySkipEscape(styleTags)}
        </head>
        <body>
          <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
        </body>
      </html>`;

    return {
      documentHtml,
      pageContext: {}
    };
  } finally {
    sheet.seal();
  }
};
