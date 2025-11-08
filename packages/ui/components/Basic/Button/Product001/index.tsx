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
  as?: "button" | "a" | "span";
  href?: string;
  type?: Type;
  size?: Size;
  children: ReactNode;
  animation?: Animation;
  disabled?: boolean;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    disabledColor?: string;
    disabledBackgroundColor?: string;
    disabledBorderColor?: string;
  };
  onClick?: () => void;
}

export const Button001 = ({
  type = "001",
  size = "middle",
  as = "button",
  disabled,
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
        href={href}
        type={type}
        size={size}
        onClick={onClick}
        animation={animation}
        backgroundColor={style?.backgroundColor ?? "#fff"}
        borderColor={style?.borderColor ?? "#000"}
        paddingTop={style?.paddingTop}
        paddingRight={style?.paddingRight}
        paddingBottom={style?.paddingBottom}
        paddingLeft={style?.paddingLeft}
        disabled={!!disabled}
        disabledBackgroundColor={style?.disabledBackgroundColor}
        disabledBorderColor={style?.disabledBorderColor}
      >
        <StyledText
          size={size}
          color={style?.color ?? "#000"}
          fontWeight={style?.fontWeight ?? 700}
          disabled={!!disabled}
          disabledColor={style?.disabledColor}
          fontSize={style?.fontSize}
        >
          {children}
        </StyledText>
      </StyledButton>
    </StyledButtonWrapper>
  );
};
