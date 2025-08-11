import { useState } from "react";
import {
  StyledJmcCircleToggle,
  StyledJmcCircleToggleDot,
  StyledJmcCircleToggleDotWrapper,
  StyledJmcCircleToggleInner,
  StyledJmcCircleToggleWrapper
} from "./styles";

interface CircleToggleProps {
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  style?: {
    color?: string;
    dotColor?: string;
  };
}

export const JmcCircleToggle = ({
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style
}: CircleToggleProps) => {
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

  return (
    <StyledJmcCircleToggleWrapper>
      <StyledJmcCircleToggle
        color={style?.color}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <StyledJmcCircleToggleInner>
          <StyledJmcCircleToggleDotWrapper>
            <StyledJmcCircleToggleDot dotColor={style?.dotColor} />
            <StyledJmcCircleToggleDot dotColor={style?.dotColor} />
            <StyledJmcCircleToggleDot dotColor={style?.dotColor} />
          </StyledJmcCircleToggleDotWrapper>
        </StyledJmcCircleToggleInner>
      </StyledJmcCircleToggle>
    </StyledJmcCircleToggleWrapper>
  );
};