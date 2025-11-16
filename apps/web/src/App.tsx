import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/about/page";
import { IndexPage } from "./pages/index/page";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
