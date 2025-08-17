import type React from "react";
import { StyledText, StyledTextContent } from "./styles";

interface TextProps {
  children: React.ReactNode;
  fontSize: number;
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
