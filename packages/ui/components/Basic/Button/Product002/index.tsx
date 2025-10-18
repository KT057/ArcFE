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
  };
  iconDirection?: IconDirection;
  icon: ReactNode;
  onClick?: () => void;
}

export const Button002 = ({
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  style,
  iconDirection = "right",
  icon,
  href
}: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean | null>(null);

  return (
    <StyledButtonWrapper>
      <StyledButton
        as={href ? "a" : "button"}
        href={href}
        type={type}
        size={size}
        onClick={onClick}
        animation={animation}
        backgroundColor={style?.backgroundColor ?? "#fff"}
        borderColor={style?.borderColor ?? "#000"}
        iconDirection={iconDirection}
        isHover={isHover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <StyledText
          size={size}
          color={style?.color ?? "#000"}
          fontWeight={style?.fontWeight ?? 700}
        >
          {children}
        </StyledText>
        <StyledIconWrapper>
          <StyledIconInner>
            <StyledIcon color={style?.color ?? "#000"}>{icon}</StyledIcon>
            <StyledIcon color={style?.color ?? "#000"}>{icon}</StyledIcon>
          </StyledIconInner>
        </StyledIconWrapper>
      </StyledButton>
    </StyledButtonWrapper>
  );
};
