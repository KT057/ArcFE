import { useMemo, useState } from "react";
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
  appearance?: {
    lineColor?: string;
  };
}

export const Toggle002 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  appearance
}: ToggleProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean | undefined>(
    undefined
  );
  const isOpen = useMemo(() => {
    if (internalIsOpen === undefined) return undefined;

    return controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  }, [controlledIsOpen, internalIsOpen]);

  const handleClick = () => {
    const newState = !isOpen;
    setInternalIsOpen(newState);
    onChange?.(newState);
    onClick?.();
  };

  return (
    <StyledToggleWrapper>
      <StyledToggle>
        <StyledToggleInner onClick={handleClick} isOpen={isOpen}>
          <StyledToggleOpen>
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
          </StyledToggleOpen>
          <StyledToggleCloseWrapper>
            <StyledToggleClose>
              <StyledToggleCloseLine lineColor={appearance?.lineColor} />
              <StyledToggleCloseLine lineColor={appearance?.lineColor} />
            </StyledToggleClose>
          </StyledToggleCloseWrapper>
        </StyledToggleInner>
      </StyledToggle>
    </StyledToggleWrapper>
  );
};
