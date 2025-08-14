import { GlobalStyles, themes } from "@apps/ui/styles";
import { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
