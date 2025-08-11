import type React from "react";
import { StyledText, StyledTextContent } from "./styles";

interface TextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  fontSize: number;
  color?: string;
}

export const Text = ({ children, as = "p", fontSize, color }: TextProps) => {
  return (
    <StyledText as={as}>
      <StyledTextContent fontSize={fontSize} color={color}>
        {children}
      </StyledTextContent>
    </StyledText>
  );
};
