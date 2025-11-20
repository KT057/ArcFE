import { useState } from "react";
import {
  StyledJmcCircleToggle,
  StyledJmcCircleToggleDot,
  StyledJmcCircleToggleDotWrapper,
  StyledJmcCircleToggleInner,
  StyledJmcCircleToggleWrapper
} from "./styles";

interface CircleToggleProps {
  /**
   * ホバー状態（外部から制御する場合に使用）
   */
  isHovered?: boolean;
  /**
   * マウスエンター時のコールバック関数
   */
  onMouseEnter?: () => void;
  /**
   * マウスリーブ時のコールバック関数
   */
  onMouseLeave?: () => void;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * サークルの色
     */
    color?: string;
    /**
     * ドット（点）の色
     */
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
