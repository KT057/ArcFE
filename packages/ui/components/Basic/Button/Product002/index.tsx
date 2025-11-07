import { type ReactNode, useState } from "react";
import type { Size } from "../../../../styles/size";
import {
  type Animation,
  type IconDirection,
  StyledButton,
  StyledButtonWrapper,
  StyledIcon,
  StyledIconInner,
  StyledIconWrapper,
  StyledText,
  type Type
} from "./styles";

interface ButtonProps {
  as?: "button" | "a" | "span";
  type?: Type;
  size?: Size;
  href?: string;
  children: ReactNode;
  animation?: Animation;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    fontWeight?: number;
    disabledColor?: string;
    disabledBackgroundColor?: string;
    disabledBorderColor?: string;
  };
  iconDirection?: IconDirection;
  icon: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button002 = ({
  as = "button",
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  style,
  disabled,
  iconDirection = "right",
  icon,
  href
}: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean | null>(null);

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
        iconDirection={iconDirection}
        isHover={isHover}
        disabled={!!disabled}
        disabledBackgroundColor={style?.disabledBackgroundColor}
        disabledBorderColor={style?.disabledBorderColor}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <StyledText
          size={size}
          color={style?.color ?? "#000"}
          fontWeight={style?.fontWeight ?? 700}
          disabled={!!disabled}
          disabledColor={style?.disabledColor}
        >
          {children}
        </StyledText>
        <StyledIconWrapper>
          <StyledIconInner>
            <StyledIcon
              color={style?.color ?? "#000"}
              disabled={!!disabled}
              disabledColor={style?.disabledColor}
            >
              {icon}
            </StyledIcon>
            <StyledIcon
              color={style?.color ?? "#000"}
              disabled={!!disabled}
              disabledColor={style?.disabledColor}
            >
              {icon}
            </StyledIcon>
          </StyledIconInner>
        </StyledIconWrapper>
      </StyledButton>
    </StyledButtonWrapper>
  );
};
