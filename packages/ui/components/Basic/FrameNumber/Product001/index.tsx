import type { Size } from "../../../../styles/size";
import {
  StyledFrameNumber,
  StyledFrameNumberBackground,
  StyledFrameNumberInner,
  StyledFrameNumberWrapper
} from "./styles";

/**
 * フレーム番号のスタイルタイプ
 * - "001": 基本スタイル
 * - "002": バリエーション2
 * - "003": バリエーション3
 */
export type Type = "001" | "002" | "003";

interface FrameNumberProps {
  /**
   * 表示する数値
   */
  number: number;
  /**
   * スタイルタイプ（フレームの形状やスタイルを変更）
   * - "001": 基本スタイル
   * - "002": バリエーション2
   * - "003": バリエーション3
   */
  type: Type;
  /**
   * サイズ (small, middle, large)
   */
  size: Size;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * 数値の色
     */
    color?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
  };
}

export const FrameNumber001 = ({
  appearance,
  type,
  size,
  number
}: FrameNumberProps) => {
  return (
    <StyledFrameNumberWrapper>
      <StyledFrameNumber size={size}>
        <StyledFrameNumberBackground
          type={type}
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
          borderColor={appearance?.borderColor ?? "#000"}
        />
        <StyledFrameNumberInner color={appearance?.color ?? "#000"} size={size}>
          {number}
        </StyledFrameNumberInner>
      </StyledFrameNumber>
    </StyledFrameNumberWrapper>
  );
};
