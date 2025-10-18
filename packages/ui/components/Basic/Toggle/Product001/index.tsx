import { useState } from "react";
import {
  StyledToggleClose,
  StyledToggleCloseContainer,
  StyledToggleCloseInner,
  StyledToggleCloseLine,
  StyledToggleCloseLineWrapper,
  StyledToggleOpen,
  StyledToggleOpenInner,
  StyledToggleOpenLine,
  StyledToggleWrapper
} from "./styles";

interface ToggleProps {
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  onClick?: () => void;
  style?: {
    lineColor?: string;
    animationBackgroundColorLine?: string;
    animationBackgroundColorBefore?: string;
    animationBackgroundColorAfter?: string;
  };
}

export const Toggle001 = ({
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
    <StyledToggleWrapper>
      {isOpen ? (
        <StyledToggleClose onClick={handleClick}>
          <StyledToggleCloseInner>
            <StyledToggleCloseContainer>
              <StyledToggleCloseLineWrapper>
                <StyledToggleCloseLine
                  lineColor={style?.lineColor}
                  animationBackgroundColorLine={
                    style?.animationBackgroundColorLine
                  }
                />
                <StyledToggleCloseLine
                  lineColor={style?.lineColor}
                  animationBackgroundColorLine={
                    style?.animationBackgroundColorLine
                  }
                />
              </StyledToggleCloseLineWrapper>
            </StyledToggleCloseContainer>
          </StyledToggleCloseInner>
        </StyledToggleClose>
      ) : (
        <StyledToggleOpen
          onClick={handleClick}
          animationBackgroundColorBefore={style?.animationBackgroundColorBefore}
          animationBackgroundColorAfter={style?.animationBackgroundColorAfter}
        >
          <StyledToggleOpenInner>
            <StyledToggleOpenLine lineColor={style?.lineColor} />
            <StyledToggleOpenLine lineColor={style?.lineColor} />
            <StyledToggleOpenLine lineColor={style?.lineColor} />
          </StyledToggleOpenInner>
        </StyledToggleOpen>
      )}
    </StyledToggleWrapper>
  );
};
