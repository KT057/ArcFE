import styled, { css } from "styled-components";
import { hexToRgb } from "../../../../styles/color";
import type { EasingKey } from "../../../../styles/easing";
import type { Size } from "../../../../styles/size";

export type Type = "001" | "002" | "003";
export type AnimationType = "001" | "002";

export type Animation = {
  /**
   * アニメーションタイプ
   */
  type: AnimationType;
  /**
   * アニメーションの持続時間（秒）
   */
  duration?: number;
  /**
   * イージング関数のキー
   */
  easing?: EasingKey;
  /**
   * ホバー時の背景色
   */
  backgroundColor?: string;
  /**
   * ホバー時のテキスト色
   */
  textColor?: string;
};

export const StyledButton = styled.button<{
  /**
   * ボタンのスタイルタイプ（角丸の種類）
   */
  $type?: Type;
  /**
   * 背景色
   */
  $backgroundColor: string;
  /**
   * ボーダーの色
   */
  $borderColor: string;
  /**
   * 親要素の幅いっぱいに広げるかどうか
   */
  $fullWidth: boolean;
  /**
   * アニメーション設定
   */
  $animation?: Animation;
  /**
   * ボタンのサイズ
   */
  $size: Size;
  /**
   * 無効化時の背景色
   */
  $disabledBackgroundColor: string | undefined;
  /**
   * 無効化時のボーダー色
   */
  $disabledBorderColor: string | undefined;
  /**
   * 上部のパディング（em単位）
   */
  $paddingTop: number | undefined;
  /**
   * 右側のパディング（em単位）
   */
  $paddingRight: number | undefined;
  /**
   * 下部のパディング（em単位）
   */
  $paddingBottom: number | undefined;
  /**
   * 左側のパディング（em単位）
   */
  $paddingLeft: number | undefined;
  /**
   * 無効化状態かどうか
   */
  $isDisabled: boolean;
}>`
  ${({ theme }) => theme.font.baseSize.em()};

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ $borderColor }) => $borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    z-index: 0;
  }

  ${({ $type, theme }) => {
    switch ($type) {
      case "001":
        return css`border-radius: ${theme.size.em(30)};`;
      case "002":
        return css`border-radius: ${theme.size.em(8)};`;
      default:
        return css`border-radius: 0;`;
    }
  }}

  ${({
    $size,
    $paddingTop,
    $paddingRight,
    $paddingBottom,
    $paddingLeft,
    theme
  }) => {
    switch ($size) {
      case "small":
        return css`padding: ${theme.size.em($paddingTop ?? 7)} ${theme.size.em($paddingRight ?? 13)} ${theme.size.em($paddingBottom ?? 7)} ${theme.size.em($paddingLeft ?? 13)};`;
      case "middle":
        return css`padding: ${theme.size.em($paddingTop ?? 15)} ${theme.size.em($paddingRight ?? 28)} ${theme.size.em($paddingBottom ?? 15)} ${theme.size.em($paddingLeft ?? 28)};`;
      default:
        return css`padding: ${theme.size.em($paddingTop ?? 25)} ${theme.size.em($paddingRight ?? 45)} ${theme.size.em($paddingBottom ?? 25)} ${theme.size.em($paddingLeft ?? 45)};`;
    }
  }}

  ${({ $animation, theme }) => {
    switch ($animation?.type ?? "001") {
      case "001":
        return css`
          &::after {
            transition: background-color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${$animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${$animation?.backgroundColor ?? "#000"};
            }
          }
        `;

      case "002":
        return css`
          &::after {
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
            background-color: ${$animation?.backgroundColor ?? "#fff"};
          }

          ${StyledText} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${$animation?.textColor ?? "#fff"};
            }

            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        `;
    }
  }}

  ${({
    $isDisabled,
    $disabledBackgroundColor,
    $backgroundColor,
    $disabledBorderColor,
    $borderColor
  }) =>
    $isDisabled &&
    css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${$disabledBackgroundColor ?? `${hexToRgb($backgroundColor)}, 0.5`};
    border-color: ${$disabledBorderColor ?? `${hexToRgb($borderColor)}, 0.5`};
  `}
`;

export const StyledText = styled.span<{
  /**
   * テキストのサイズ
   */
  $size: Size;
  /**
   * テキストの色
   */
  $color: string;
  /**
   * フォントの太さ
   */
  $fontWeight: number;
  /**
   * 無効化状態かどうか
   */
  $disabled: boolean;
  /**
   * 無効化時のテキスト色
   */
  $disabledColor: string | undefined;
  /**
   * フォントサイズ（em単位）
   */
  $fontSize: number | undefined;
}>`
  ${({ $size, $fontSize, theme }) => {
    switch ($size) {
      case "small":
        return css`font-size: ${theme.size.em($fontSize ?? 12)};`;
      case "middle":
        return css`font-size: ${theme.size.em($fontSize ?? 16)};`;
      default:
        return css`font-size: ${theme.size.em($fontSize ?? 18)};`;
    }
  }}

  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color};
  position: relative;
  z-index: 1;

  ${({ $disabled, $disabledColor, $color }) =>
    $disabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
    color: ${$disabledColor ?? `${hexToRgb($color)}, 0.5`};
  `}
`;
