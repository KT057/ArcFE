import type React from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledLabel,
  StyledLabelWrapper
} from "./styles";

export type Type = "001" | "002" | "003";

interface LabelProps {
  type?: Type;
  size?: Size;
  children: React.ReactNode;
  style?: {
    fontSize?: number;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
}

export const Label001 = ({
  type = "001",
  size = "middle",
  children,
  style
}: LabelProps) => {
  return (
    <StyledLabelWrapper>
      <StyledLabel
        type={type}
        size={size}
        fontSize={style?.fontSize}
        backgroundColor={style?.backgroundColor}
        color={style?.color}
        borderColor={style?.borderColor}
      >
        {children}
      </StyledLabel>
    </StyledLabelWrapper>
  );
};