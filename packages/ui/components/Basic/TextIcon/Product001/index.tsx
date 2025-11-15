import type React from "react";
import { forwardRef } from "react";
import {
  StyledTextIcon,
  StyledTextIconIcon,
  StyledTextIconText
} from "./styles";

export type IconPosition = "left" | "right";

interface TextIconProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  iconPosition?: IconPosition;
  appearance?: {
    gap?: number;
    paddingTop?: number;
  };
}

export const TextIcon001 = forwardRef<HTMLDivElement, TextIconProps>(
  ({ icon, children, iconPosition = "right", appearance }, ref) => {
    return (
      <StyledTextIcon
        ref={ref}
        $iconPosition={iconPosition}
        $gap={appearance?.gap}
        $isCenter={!appearance?.paddingTop}
      >
        <StyledTextIconText>{children}</StyledTextIconText>
        <StyledTextIconIcon $paddingTop={appearance?.paddingTop}>
          {icon}
        </StyledTextIconIcon>
      </StyledTextIcon>
    );
  }
);

TextIcon001.displayName = "TextIcon001";
