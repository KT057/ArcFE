import type React from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledTextIcon,
  StyledTextIconIcon,
  StyledTextIconText,
  StyledTextIconWrapper
} from "./styles";

export type IconPosition = "left" | "right";

interface TextIconProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  iconPosition?: IconPosition;
  iconSize?: Size;
  style?: {
    fontSize?: number;
    color?: string;
    iconColor?: string;
    gap?: number;
  };
}

export const TextIcon001 = ({
  icon,
  children,
  iconPosition = "right",
  iconSize,
  style
}: TextIconProps) => {
  return (
    <StyledTextIconWrapper>
      <StyledTextIcon iconPosition={iconPosition} gap={style?.gap}>
        <StyledTextIconText fontSize={style?.fontSize} color={style?.color}>
          {children}
        </StyledTextIconText>
        <StyledTextIconIcon iconColor={style?.iconColor} iconSize={iconSize}>
          {icon}
        </StyledTextIconIcon>
      </StyledTextIcon>
    </StyledTextIconWrapper>
  );
};
