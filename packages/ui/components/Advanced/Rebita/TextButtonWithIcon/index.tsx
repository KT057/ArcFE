import { type ReactNode, useState } from "react";
import type { Size } from "../../../../styles/size";
import { VerticalRollingText } from "../VerticalRollingText";
import {
  StyledTextButtonWithIcon,
  StyledTextButtonWithIconIcon,
  StyledTextButtonWithIconInner,
  StyledTextButtonWithIconWrapper
} from "./styles";

/**
 * アイコンの配置方向
 * - "left": 左側に配置
 * - "right": 右側に配置
 */
export type Direction = "left" | "right";

interface TextButtonWithIconProps {
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
   * アイコンの配置方向
   */
  iconDirection?: Direction;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * フォントサイズ（px）
     */
    fontSize?: number;
    /**
     * テキストとアイコンの色
     */
    color?: string;
    /**
     * アイコンのサイズ
     */
    iconSize?: Size;
  };
}

export const RebitaTextButtonWithIcon = ({
  text = "KAIKA 東京 by THE SHARE HOTELS",
  icon,
  onClick,
  as = "div",
  href,
  iconDirection = "right",
  appearance
}: TextButtonWithIconProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <StyledTextButtonWithIconWrapper>
      <StyledTextButtonWithIcon
        as={as}
        onClick={onClick}
        href={href}
        direction={iconDirection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledTextButtonWithIconInner>
          <VerticalRollingText
            enableHover={isHover}
            appearance={{
              fontSize: appearance?.fontSize,
              color: appearance?.color
            }}
          >
            {text}
          </VerticalRollingText>
        </StyledTextButtonWithIconInner>
        <StyledTextButtonWithIconIcon
          iconSize={appearance?.iconSize}
          color={appearance?.color}
        >
          <>{icon}</>
        </StyledTextButtonWithIconIcon>
      </StyledTextButtonWithIcon>
    </StyledTextButtonWithIconWrapper>
  );
};
