import { MediaProvider } from "@apps/ui/context";
import { GlobalStyles, themes } from "@apps/ui/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ParallaxProvider>
      <MediaProvider>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </MediaProvider>
    </ParallaxProvider>
  );
};
