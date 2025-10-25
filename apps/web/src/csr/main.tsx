import { createRoot } from "react-dom/client";
import { IndexPage } from "../pages/index/page";

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(<IndexPage />);
