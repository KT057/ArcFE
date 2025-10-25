import { createRoot } from "react-dom/client";
import { AboutPage } from "../../pages/about/page";

const root = createRoot(document.getElementById("root") ?? document.body);
root.render(<AboutPage />);
