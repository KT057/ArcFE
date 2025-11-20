import type { ReactNode } from "react";
import {
  type ArrowPosition,
  StyledBalloon,
  StyledBalloonArrow,
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
     * テキストの色
     */
    color?: string;
    /**
     * フォントサイズ（px）
     */
    fontSize?: number;
  };
}

export const Balloon001 = ({
  type = "001",
  children,
  appearance,
  arrowPosition
}: BalloonProps) => {
  return (
    <StyledBalloonWrapper>
      <StyledBalloon
        type={type}
        backgroundColor={appearance?.backgroundColor ?? "#ccc"}
      >
        <StyledBalloonContent
          fontSize={appearance?.fontSize ?? 16}
          color={appearance?.color ?? "#000"}
        >
          {children}
        </StyledBalloonContent>
        <StyledBalloonArrow
          arrowPosition={arrowPosition ?? "bottom"}
          backgroundColor={appearance?.backgroundColor ?? "#ccc"}
        />
      </StyledBalloon>
    </StyledBalloonWrapper>
  );
};
