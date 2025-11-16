import { AxiosProvider } from "@packages/context";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { WP_API_BASE_DOMAIN } from "./shared/wordpress/api/base";

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(
  <AxiosProvider initialConfig={{ baseURL: WP_API_BASE_DOMAIN }}>
    <App />
  </AxiosProvider>
);
