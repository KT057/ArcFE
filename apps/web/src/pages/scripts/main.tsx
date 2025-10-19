import { createRoot } from "react-dom/client";
import { Page } from "./Page";

const app = document.getElementById("app");
if (app) {
  createRoot(app).render(<Page />);
}
