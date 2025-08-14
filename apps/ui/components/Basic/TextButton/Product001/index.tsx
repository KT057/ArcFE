import type React from "react";
import type { EasingKey } from "../../../../styles/easing";
import { StyledTextButton, StyledTextButtonWrapper } from "./styles";

export type TextButtonType = "001" | "002";

interface TextButtonProps {
  type?: TextButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  as?: "button" | "a" | "span";
  href?: string;
  style?: {
    color?: string;
    fontSize?: number;
    hoverColor?: string;
    hoverDuration?: string;
    hoverEase?: EasingKey;
  };
}

export const TextButton001 = ({
  type = "001",
  children,
  onClick,
  as = "span",
  href,
  style
}: TextButtonProps) => {
  const buttonProps = {
    ...(as === "a" && href ? { href } : {}),
    ...(onClick ? { onClick } : {})
  };

  return (
    <StyledTextButtonWrapper>
      <StyledTextButton
        as={as}
        type={type}
        color={style?.color}
        fontSize={style?.fontSize}
        hoverColor={style?.hoverColor}
        hoverDuration={style?.hoverDuration}
        hoverEase={style?.hoverEase}
        {...buttonProps}
      >
        {children}
      </StyledTextButton>
    </StyledTextButtonWrapper>
  );
};
