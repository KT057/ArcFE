import type { FC, ReactNode } from "react";
import { StyledContentFooter } from "./styles";

type Props = {
  children: ReactNode;
};

export const FooterButtons: FC<Props> = ({ children }) => {
  return <StyledContentFooter>{children}</StyledContentFooter>;
};
