import type React from "react";
import { forwardRef } from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledTextButton,
  StyledTextButtonIcon,
  StyledTextButtonText
} from "./styles";

export type TextButtonType = "001" | "002";
export type IconPosition = "left" | "right";

type ButtonElementProps = {
  as?: "button";
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type" | "style" | "children"
>;

type AnchorElementProps = {
  as: "a";
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "style" | "children">;

type ElementProps = ButtonElementProps | AnchorElementProps;

type TextButtonProps = ElementProps & {
  /**
   * テキストボタンのスタイルタイプ
   * - "001": 下線アニメーション
   * - "002": テキストカラー変化
   */
  type?: TextButtonType;
  /**
   * ボタンの表示内容（テキスト）
   */
  children: React.ReactNode;
  /**
   * 表示するアイコン（ReactNode）
   */
  icon?: React.ReactNode;
  /**
   * アイコンの表示位置（左側 or 右側）
   */
  iconPosition?: IconPosition;
  /**
   * ボタンの外観をカスタマイズ（ホバー色、アニメーション設定、間隔など）
   */
  appearance?: {
    /**
     * ホバー時の色
     */
    hoverColor?: string;
    /**
     * ホバーアニメーションの持続時間
     */
    hoverDuration?: string;
    /**
     * ホバーアニメーションのイージング関数
     */
    hoverEase?: EasingKey;
    /**
     * テキストとアイコンの間隔（em単位）
     */
    gap?: number;
    /**
     * アイコンの上部パディング（em単位）
     */
    paddingTop?: number;
  };
  /**
   * 追加する CSS スタイル
   */
  style?: React.CSSProperties;
};

type TextButtonElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLSpanElement;

export const TextButton001 = forwardRef<TextButtonElement, TextButtonProps>(
  (
    {
      type = "001",
      children,
      icon,
      iconPosition = "right",
      appearance,
      as = "button",
      ...rest
    },
    ref
  ) => {
    let elementProps:
      | React.ButtonHTMLAttributes<HTMLButtonElement>
      | React.AnchorHTMLAttributes<HTMLAnchorElement>
      | React.HTMLAttributes<HTMLSpanElement>;

    if (as === "a") {
      elementProps = rest as AnchorElementProps;
    } else {
      const { buttonType = "button", ...buttonRest } =
        rest as ButtonElementProps;
      elementProps = { type: buttonType, ...buttonRest };
    }

    return (
      <StyledTextButton
        ref={ref}
        as={as as any}
        $type={type}
        $hoverColor={appearance?.hoverColor}
        $hoverDuration={appearance?.hoverDuration}
        $hoverEase={appearance?.hoverEase}
        $iconPosition={icon ? iconPosition : undefined}
        $gap={appearance?.gap}
        $isCenter={!appearance?.paddingTop}
        {...elementProps}
      >
        <StyledTextButtonText>{children}</StyledTextButtonText>
        {icon && (
          <StyledTextButtonIcon $paddingTop={appearance?.paddingTop}>
            {icon}
          </StyledTextButtonIcon>
        )}
      </StyledTextButton>
    );
  }
);

TextButton001.displayName = "TextButton001";
