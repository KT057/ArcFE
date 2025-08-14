import type { ReactNode } from "react";
import type { Size } from "../../../../styles/size";
import {
  type Animation,
  StyledButton,
  StyledButtonWrapper,
  StyledText,
  type Type
} from "./styles";

interface ButtonProps {
  as?: "button" | "a";
  href?: string;
  type?: Type;
  size?: Size;
  children: ReactNode;
  animation?: Animation;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    fontWeight?: number;
  };
  onClick?: () => void;
}

export const Button001 = ({
  as = "button",
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  href,
  style
}: ButtonProps) => {
  return (
    <StyledButtonWrapper>
      <StyledButton
        as={as}
        href={as === "a" ? href : undefined}
        type={type}
        size={size}
        onClick={onClick}
        animation={animation}
        backgroundColor={style?.backgroundColor ?? "#fff"}
        borderColor={style?.borderColor ?? "#000"}
      >
        <StyledText
          size={size}
          color={style?.color ?? "#000"}
          fontWeight={style?.fontWeight ?? 700}
        >
          {children}
        </StyledText>
      </StyledButton>
    </StyledButtonWrapper>
  );
};
