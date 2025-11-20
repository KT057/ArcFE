import type { Size } from "../../../../styles/size";
import { Svg043Icon } from "../../../Basic/Icons";
import {
  StyledJmcArrowButton,
  StyledJmcArrowButtonIcon,
  StyledJmcArrowButtonIconContainer,
  StyledJmcArrowButtonIconInner,
  StyledJmcArrowButtonIconWrapper,
  StyledJmcArrowButtonWrapper
} from "./styles";

interface ArrowButtonProps {
  /**
   * サイズ (small, middle, large)
   */
  size?: Size;
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
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * アイコンの色
     */
    iconColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ホバー時のアイコンの色
     */
    hoverIconColor?: string;
    /**
     * ホバー時のボーダーの色
     */
    hoverBorderColor?: string;
    /**
     * ホバー時の背景色
     */
    hoverBackgroundColor?: string;
  };
}

export const JmcArrowButton = ({
  size = "middle",
  onClick,
  as = "span",
  href,
  appearance
}: ArrowButtonProps) => {
  const buttonProps = {
    ...(as === "a" && href ? { href } : {}),
    ...(onClick ? { onClick } : {})
  };

  return (
    <StyledJmcArrowButtonWrapper>
      <StyledJmcArrowButton
        as={as}
        size={size}
        iconColor={appearance?.iconColor}
        borderColor={appearance?.borderColor}
        backgroundColor={appearance?.backgroundColor}
        hoverIconColor={appearance?.hoverIconColor}
        hoverBorderColor={appearance?.hoverBorderColor}
        hoverBackgroundColor={appearance?.hoverBackgroundColor}
        {...buttonProps}
      >
        <StyledJmcArrowButtonIconContainer>
          <StyledJmcArrowButtonIconWrapper size={size}>
            <StyledJmcArrowButtonIconInner>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
            </StyledJmcArrowButtonIconInner>
          </StyledJmcArrowButtonIconWrapper>
        </StyledJmcArrowButtonIconContainer>
      </StyledJmcArrowButton>
    </StyledJmcArrowButtonWrapper>
  );
};
