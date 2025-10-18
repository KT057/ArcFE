import { AxiosProvider } from "@packages/context";
import { MediaProvider } from "@packages/ui/context";
import { GlobalStyles, themes } from "@packages/ui/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ParallaxProvider>
      <MediaProvider>
        <AxiosProvider initialConfig={{ baseURL: "http://localhost:3000" }}>
          <ThemeProvider theme={themes}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </AxiosProvider>
      </MediaProvider>
    </ParallaxProvider>
  );
};
