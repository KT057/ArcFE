import React from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { OnRenderHtmlAsync } from "vike/types";
import { DataProvider } from "./context/data";

export const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext
): ReturnType<OnRenderHtmlAsync> => {
  const { Page, config } = pageContext;

  if (!Page) {
    throw new Error("Page component is required");
  }

  const pageHtml = ReactDOMServer.renderToString(
    <React.StrictMode>
      <DataProvider data={pageContext.data}>
        {React.createElement(Page)}
      </DataProvider>
    </React.StrictMode>
  );

  const title = (config as any)?.title || "My App";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {}
  };
};
