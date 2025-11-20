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
  /**
   * サイズ (small, middle, large)
   */
  size?: Size;
  /**
   * 開閉状態（制御コンポーネントとして使用する場合）
   */
  isOpen?: boolean;
  /**
   * 開閉状態が変更されたときのコールバック関数
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
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ドットの色（開いている状態）
     */
    dotColor?: string;
    /**
     * ラインの色（閉じている状態）
     */
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
