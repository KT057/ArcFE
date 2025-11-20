import { type ReactNode, useState } from "react";
import type { Size } from "../../../../styles/size";
import { VerticalRollingText } from "../VerticalRollingText";
import {
  type DirectionType,
  StyledRebitaButtonInner,
  StyledRebitaButtonLeft,
  StyledRebitaButtonLeftInner,
  StyledRebitaButtonRight,
  StyledRebitaButtonRightInner,
  StyledRebitaButtonWrapper
} from "./styles";

interface RebitaButtonProps {
  /**
   * サイズ (small, middle, large)
   */
  size?: Size;
  /**
   * アイコンの配置方向
   */
  direction?: DirectionType;
  /**
   * ボタンに表示するテキスト
   */
  text?: ReactNode;
  /**
   * ボタンに表示するアイコン
   */
  icon?: ReactNode;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * レンダリングするHTML要素の種類
   */
  as?: "button" | "a" | "div";
  /**
   * リンク先URL（asが"a"の場合に使用）
   */
  href?: string;
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
    textColor?: string;
    /**
     * アイコンの色
     */
    iconColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * 左側コンテンツのボーダーの色
     */
    leftContentBorderColor?: string;
  };
}

export const RebitaButton = ({
  size = "middle",
  direction = "right",
  text = "ボタン",
  icon,
  onClick,
  as = "a",
  href,
  appearance
}: RebitaButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledRebitaButtonWrapper>
      <StyledRebitaButtonInner
        as={as}
        direction={direction}
        onClick={onClick}
        href={href}
        backgroundColor={appearance?.backgroundColor}
        borderColor={appearance?.borderColor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledRebitaButtonLeft
          textColor={appearance?.textColor}
          leftContentBorderColor={appearance?.leftContentBorderColor}
          direction={direction}
        >
          <StyledRebitaButtonLeftInner fontSize={appearance?.fontSize}>
            <VerticalRollingText
              appearance={{
                fontSize: appearance?.fontSize,
                color: appearance?.textColor || "#fff"
              }}
              enableHover={isHovered}
            >
              {text}
            </VerticalRollingText>
          </StyledRebitaButtonLeftInner>
        </StyledRebitaButtonLeft>
        <StyledRebitaButtonRight size={size}>
          <StyledRebitaButtonRightInner
            iconSize={size}
            iconColor={appearance?.iconColor}
          >
            <>{icon}</>
          </StyledRebitaButtonRightInner>
        </StyledRebitaButtonRight>
      </StyledRebitaButtonInner>
    </StyledRebitaButtonWrapper>
  );
};
