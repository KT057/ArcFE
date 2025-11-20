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
  /**
   * 開いているかどうか
   */
  isOpen?: boolean;
  /**
   * 値変更時のコールバック関数
   */
  onChange?: (isOpen: boolean) => void;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
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
    <StyledToggleWrapper>
      {isOpen ? (
        <StyledToggleClose onClick={handleClick}>
          <StyledToggleCloseInner>
            <StyledToggleCloseContainer>
              <StyledToggleCloseLineWrapper>
                <StyledToggleCloseLine
                  lineColor={appearance?.lineColor}
                  animationBackgroundColorLine={
                    appearance?.animationBackgroundColorLine
                  }
                />
                <StyledToggleCloseLine
                  lineColor={appearance?.lineColor}
                  animationBackgroundColorLine={
                    appearance?.animationBackgroundColorLine
                  }
                />
              </StyledToggleCloseLineWrapper>
            </StyledToggleCloseContainer>
          </StyledToggleCloseInner>
        </StyledToggleClose>
      ) : (
        <StyledToggleOpen
          onClick={handleClick}
          animationBackgroundColorBefore={
            appearance?.animationBackgroundColorBefore
          }
          animationBackgroundColorAfter={
            appearance?.animationBackgroundColorAfter
          }
        >
          <StyledToggleOpenInner>
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
            <StyledToggleOpenLine lineColor={appearance?.lineColor} />
          </StyledToggleOpenInner>
        </StyledToggleOpen>
      )}
    </StyledToggleWrapper>
  );
};
