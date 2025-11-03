import { AxiosProvider } from "@packages/context";
import { color, GlobalStyles, MediaProvider, themes } from "@packages/ui";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

// クライアントサイド専用のProviderラッパー
const ClientOnlyAxiosProvider = ({
  children,
  initialConfig
}: {
  children: React.ReactNode;
  initialConfig?: any;
}) => {
  // SSR中はAxiosProviderをスキップ
  if (typeof window === "undefined") {
    return <>{children}</>;
  }
  return (
    <AxiosProvider initialConfig={initialConfig}>{children}</AxiosProvider>
  );
};

export const Layout = ({ children }: Props) => {
  return (
    <ParallaxProvider>
      <MediaProvider>
        <ClientOnlyAxiosProvider
          initialConfig={{ baseURL: "http://localhost:3000" }}
        >
          <ThemeProvider theme={themes(color)}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </ClientOnlyAxiosProvider>
      </MediaProvider>
    </ParallaxProvider>
  );
};
