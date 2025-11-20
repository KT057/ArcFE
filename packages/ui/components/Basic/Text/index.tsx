import type React from "react";
import { StyledText, StyledTextContent } from "./styles";

interface TextProps {
  /**
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * fontSize の値
   */
  fontSize: number;
  /**
   * color の値
   */
  color?: string;
}

export const Text = ({ children, fontSize, color }: TextProps) => {
  return (
    <StyledText>
      <StyledTextContent fontSize={fontSize} color={color}>
        {children}
      </StyledTextContent>
    </StyledText>
  );
};
