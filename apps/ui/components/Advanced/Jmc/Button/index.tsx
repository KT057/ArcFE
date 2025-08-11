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
  style?: {
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
  style
}: ButtonProps) => {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = controlledIsHovered !== undefined ? controlledIsHovered : internalIsHovered;

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
        backgroundColor={style?.backgroundColor}
        textColor={style?.color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...buttonProps}
      >
        <StyledJmcButtonLeft
          fontSize={style?.fontSize}
          color={style?.color}
        >
          {children}
        </StyledJmcButtonLeft>
        <JmcCircleToggle
          isHovered={isHovered}
          style={{
            color: style?.circleToggleColor || style?.color,
            dotColor: style?.circleToggleDotColor || style?.color
          }}
        />
      </StyledJmcButton>
    </StyledJmcButtonWrapper>
  );
};