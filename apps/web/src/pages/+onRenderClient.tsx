import React from "react";
import ReactDOM from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import type { OnRenderClientAsync } from "vike/types";

export const onRenderClient: OnRenderClientAsync = async (
  pageContext
): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext;

  if (!Page) {
    throw new Error("Page component is required");
  }

  const container = document.getElementById("app");

  if (!container) {
    throw new Error("DOM element #app not found");
  }

  const PageElement = (
    <StyleSheetManager enableVendorPrefixes shouldForwardProp={() => true}>
      {React.createElement(Page as React.ComponentType)}
    </StyleSheetManager>
  );

  // Check if we're doing SSR hydration or client-side rendering
  if (container.innerHTML !== "") {
    // Hydrate SSR content
    ReactDOM.hydrateRoot(container, PageElement);
  } else {
    // Client-side only rendering (dev mode)
    const root = ReactDOM.createRoot(container);
    root.render(PageElement);
  }
};
