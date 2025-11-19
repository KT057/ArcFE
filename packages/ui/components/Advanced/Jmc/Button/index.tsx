import type React from "react";
import { useState } from "react";
import { JmcCircleToggle } from "../CircleToggle";
import {
  StyledJmcButton,
  StyledJmcButtonLeft,
  StyledJmcButtonWrapper
} from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  as?: "button" | "a" | "span";
  href?: string;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  appearance?: {
    fontSize?: number;
    backgroundColor?: string;
    color?: string;
    circleToggleColor?: string;
    circleToggleDotColor?: string;
  };
}

export const JmcButton = ({
  children,
  onClick,
  as = "span",
  href,
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  appearance
}: ButtonProps) => {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered =
    controlledIsHovered !== undefined ? controlledIsHovered : internalIsHovered;

  const handleMouseEnter = () => {
    if (controlledIsHovered === undefined) {
      setInternalIsHovered(true);
    }
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    if (controlledIsHovered === undefined) {
      setInternalIsHovered(false);
    }
    onMouseLeave?.();
  };

  const buttonProps = {
    ...(as === "a" && href ? { href } : {}),
    ...(onClick ? { onClick } : {})
  };

  return (
    <StyledJmcButtonWrapper>
      <StyledJmcButton
        as={as}
        backgroundColor={appearance?.backgroundColor}
        textColor={appearance?.color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...buttonProps}
      >
        <StyledJmcButtonLeft
          fontSize={appearance?.fontSize}
          color={appearance?.color}
        >
          {children}
        </StyledJmcButtonLeft>
        <JmcCircleToggle
          isHovered={isHovered}
          appearance={{
            color: appearance?.circleToggleColor || appearance?.color,
            dotColor: appearance?.circleToggleDotColor || appearance?.color
          }}
        />
      </StyledJmcButton>
    </StyledJmcButtonWrapper>
  );
};
