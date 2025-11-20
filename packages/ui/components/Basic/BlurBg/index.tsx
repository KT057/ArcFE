import type React from "react";
import { StyledMaskBg } from "./styles";

/**
 * ブラーエフェクトの方向
 * - "top": 上方向にブラー
 * - "bottom": 下方向にブラー
 * - "left": 左方向にブラー
 * - "right": 右方向にブラー
 * - "all": 全方向にブラー
 */
type Direction = "top" | "bottom" | "left" | "right" | "all";

type Props = {
  /**
   * ブラーエフェクトをかける方向
   */
  direction: Direction;
  /**
   * フェードが開始する位置（%）
   */
  fadeStart?: number;
  /**
   * 背景色
   */
  bgColor: string;
  /**
   * ブラーの強さ（px）
   */
  blurAmount?: number;
  /**
   * 表示内容
   */
  children?: React.ReactNode;
};

export const BlurBg = ({
  direction,
  fadeStart = 10,
  bgColor,
  blurAmount,
  children
}: Props) => {
  return (
    <StyledMaskBg
      direction={direction}
      fadeStart={fadeStart}
      bgColor={bgColor}
      blurAmount={blurAmount}
    >
      {children}
    </StyledMaskBg>
  );
};
