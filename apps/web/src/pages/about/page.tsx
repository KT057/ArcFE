import { Layout } from "../../shared/components/Layout";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const AboutPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Footer />
    </Layout>
  );
};
