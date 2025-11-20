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
