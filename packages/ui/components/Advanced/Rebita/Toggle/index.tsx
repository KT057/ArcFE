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
  style?: {
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
  style
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
      backgroundColor={style?.backgroundColor}
      dotColor={style?.dotColor}
      lineColor={style?.lineColor}
      isOpen={isOpen}
    >
      <StyledToggleInner
        size={size}
        backgroundColor={style?.backgroundColor}
        onClick={handleClick}
      >
        {/* Dots (open state) */}
        <StyledToggleDotWrapper isOpen={isOpen}>
          <StyledToggleDot dotColor={style?.dotColor} />
          <StyledToggleDot dotColor={style?.dotColor} />
          <StyledToggleDot dotColor={style?.dotColor} />
        </StyledToggleDotWrapper>

        {/* Close lines (close state) */}
        <StyledToggleCloseWrapper isOpen={isOpen}>
          <StyledToggleLineWrapper>
            <StyledToggleLine lineColor={style?.lineColor} />
            <StyledToggleLine lineColor={style?.lineColor} />
          </StyledToggleLineWrapper>
        </StyledToggleCloseWrapper>
      </StyledToggleInner>
    </StyledToggleWrapper>
  );
};
