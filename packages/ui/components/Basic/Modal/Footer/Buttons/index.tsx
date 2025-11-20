import type { FC, ReactNode } from "react";
import { StyledContentFooter } from "./styles";

type Props = {
  /**
   * 表示内容
   */
  children: ReactNode;
};

export const FooterButtons: FC<Props> = ({ children }) => {
  return <StyledContentFooter>{children}</StyledContentFooter>;
};
