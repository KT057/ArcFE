import { Layout } from "../../shared/components/Layout";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Page() {
  return (
    <Layout>
      <Header />
      <About />
      <Footer />
    </Layout>
  );
}
