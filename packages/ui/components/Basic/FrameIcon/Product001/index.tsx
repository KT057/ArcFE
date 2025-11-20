import type { Size } from "../../../../styles/size";
import {
  StyledFrameIcon,
  StyledFrameIconBackground,
  StyledFrameIconContent,
  StyledFrameIconInner,
  StyledFrameIconWrapper
} from "./styles";

/**
 * フレームアイコンのスタイルタイプ
 * - "001": 基本スタイル
 * - "002": バリエーション2
 * - "003": バリエーション3
 */
export type Type = "001" | "002" | "003";

interface FrameIconProps {
  /**
   * アイコン
   */
  icon: React.ReactNode;
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
     * アイコンの色
     */
    iconColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
  };
}

export const FrameIcon001 = ({
  appearance,
  type,
  size,
  icon
}: FrameIconProps) => {
  return (
    <StyledFrameIconWrapper>
      <StyledFrameIcon size={size}>
        <StyledFrameIconBackground
          type={type}
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
          borderColor={appearance?.borderColor ?? "#000"}
        />
        <StyledFrameIconInner iconColor={appearance?.iconColor ?? "#000"}>
          <StyledFrameIconContent size={size}>{icon}</StyledFrameIconContent>
        </StyledFrameIconInner>
      </StyledFrameIcon>
    </StyledFrameIconWrapper>
  );
};
