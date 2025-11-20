import type React from "react";
import { useState } from "react";
import { JmcCircleToggle } from "../CircleToggle";
import {
  StyledJmcButton,
  StyledJmcButtonLeft,
  StyledJmcButtonWrapper
} from "./styles";

interface ButtonProps {
  /**
   * ボタンの表示内容
   */
  children: React.ReactNode;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * レンダリングするHTML要素の種類
   */
  as?: "button" | "a" | "span";
  /**
   * リンク先URL（asが"a"の場合に使用）
   */
  href?: string;
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
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * フォントサイズ（px）
     */
    fontSize?: number;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * テキストの色
     */
    color?: string;
    /**
     * サークルトグルの色
     */
    circleToggleColor?: string;
    /**
     * サークルトグルのドット（点）の色
     */
    circleToggleDotColor?: string;
  };
}

export const JmcButton = ({
  children,
  onClick,
  as = "span",
  href,
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  appearance
}: ButtonProps) => {
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

  const buttonProps = {
    ...(as === "a" && href ? { href } : {}),
    ...(onClick ? { onClick } : {})
  };

  return (
    <StyledJmcButtonWrapper>
      <StyledJmcButton
        as={as}
        backgroundColor={appearance?.backgroundColor}
        textColor={appearance?.color}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...buttonProps}
      >
        <StyledJmcButtonLeft
          fontSize={appearance?.fontSize}
          color={appearance?.color}
        >
          {children}
        </StyledJmcButtonLeft>
        <JmcCircleToggle
          isHovered={isHovered}
          appearance={{
            color: appearance?.circleToggleColor || appearance?.color,
            dotColor: appearance?.circleToggleDotColor || appearance?.color
          }}
        />
      </StyledJmcButton>
    </StyledJmcButtonWrapper>
  );
};
