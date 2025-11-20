import type { ReactNode } from "react";
import {
  type ArrowPosition,
  StyledBalloon,
  StyledBalloonContent,
  StyledBalloonWrapper,
  type Type
} from "./styles";

interface BalloonProps {
  /**
   * スタイルタイプ
   */
  type?: Type;
  /**
   * 表示内容
   */
  children: ReactNode;
  /**
   * arrowPosition の設定
   */
  arrowPosition?: ArrowPosition;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * ボーダーの太さ（px）
     */
    borderWidth?: number;
    /**
     * テキストの色
     */
    color?: string;
    /**
     * フォントサイズ（px）
     */
    fontSize?: number;
  };
}

export const Balloon002 = ({
  type = "001",
  children,
  appearance,
  arrowPosition
}: BalloonProps) => {
  return (
    <StyledBalloonWrapper>
      <StyledBalloon
        type={type}
        borderColor={appearance?.borderColor ?? "#000"}
        borderWidth={appearance?.borderWidth ?? 1}
        arrowPosition={arrowPosition ?? "bottom"}
        backgroundColor={appearance?.backgroundColor ?? "#fff"}
      >
        <StyledBalloonContent
          fontSize={appearance?.fontSize ?? 16}
          color={appearance?.color ?? "#000"}
        >
          {children}
        </StyledBalloonContent>
      </StyledBalloon>
    </StyledBalloonWrapper>
  );
};
