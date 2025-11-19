import { useState } from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledToggleCloseWrapper,
  StyledToggleDot,
  StyledToggleDotWrapper,
  StyledToggleInner,
  StyledToggleLine,
  StyledToggleLineWrapper,
  StyledToggleWrapper
} from "./styles";

interface ToggleProps {
  size?: Size;
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  onClick?: () => void;
  appearance?: {
    backgroundColor?: string;
    dotColor?: string;
    lineColor?: string;
  };
}

export const RebitaToggle = ({
  size = "middle",
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  appearance
}: ToggleProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };

  return (
    <StyledToggleWrapper
      backgroundColor={appearance?.backgroundColor}
      dotColor={appearance?.dotColor}
      lineColor={appearance?.lineColor}
      isOpen={isOpen}
    >
      <StyledToggleInner
        size={size}
        backgroundColor={appearance?.backgroundColor}
        onClick={handleClick}
      >
        {/* Dots (open state) */}
        <StyledToggleDotWrapper isOpen={isOpen}>
          <StyledToggleDot dotColor={appearance?.dotColor} />
          <StyledToggleDot dotColor={appearance?.dotColor} />
          <StyledToggleDot dotColor={appearance?.dotColor} />
        </StyledToggleDotWrapper>

        {/* Close lines (close state) */}
        <StyledToggleCloseWrapper isOpen={isOpen}>
          <StyledToggleLineWrapper>
            <StyledToggleLine lineColor={appearance?.lineColor} />
            <StyledToggleLine lineColor={appearance?.lineColor} />
          </StyledToggleLineWrapper>
        </StyledToggleCloseWrapper>
      </StyledToggleInner>
    </StyledToggleWrapper>
  );
};
