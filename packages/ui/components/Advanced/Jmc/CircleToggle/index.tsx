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
  appearance?: {
    color?: string;
    dotColor?: string;
  };
}

export const JmcCircleToggle = ({
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  appearance
}: CircleToggleProps) => {
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

  return (
    <StyledJmcCircleToggleWrapper>
      <StyledJmcCircleToggle
        color={appearance?.color}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <StyledJmcCircleToggleInner>
          <StyledJmcCircleToggleDotWrapper>
            <StyledJmcCircleToggleDot dotColor={appearance?.dotColor} />
            <StyledJmcCircleToggleDot dotColor={appearance?.dotColor} />
            <StyledJmcCircleToggleDot dotColor={appearance?.dotColor} />
          </StyledJmcCircleToggleDotWrapper>
        </StyledJmcCircleToggleInner>
      </StyledJmcCircleToggle>
    </StyledJmcCircleToggleWrapper>
  );
};
