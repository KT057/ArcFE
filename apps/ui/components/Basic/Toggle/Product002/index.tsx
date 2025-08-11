import { useState } from "react";
import {
  StyledToggle,
  StyledToggleClose,
  StyledToggleCloseLine,
  StyledToggleCloseWrapper,
  StyledToggleInner,
  StyledToggleOpen,
  StyledToggleOpenLine,
  StyledToggleWrapper
} from "./styles";

interface ToggleProps {
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  onClick?: () => void;
  style?: {
    lineColor?: string;
  };
}

export const Toggle002 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}: ToggleProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };

  return (
    <StyledToggleWrapper>
      <StyledToggle>
        <StyledToggleInner onClick={handleClick} isOpen={isOpen}>
          <StyledToggleOpen>
            <StyledToggleOpenLine lineColor={style?.lineColor} />
            <StyledToggleOpenLine lineColor={style?.lineColor} />
            <StyledToggleOpenLine lineColor={style?.lineColor} />
          </StyledToggleOpen>
          <StyledToggleCloseWrapper>
            <StyledToggleClose>
              <StyledToggleCloseLine lineColor={style?.lineColor} />
              <StyledToggleCloseLine lineColor={style?.lineColor} />
            </StyledToggleClose>
          </StyledToggleCloseWrapper>
        </StyledToggleInner>
      </StyledToggle>
    </StyledToggleWrapper>
  );
};