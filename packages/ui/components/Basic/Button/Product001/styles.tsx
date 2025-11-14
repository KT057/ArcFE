import styled, { css } from "styled-components";
import { hexToRgb } from "../../../../styles/color";
import type { EasingKey } from "../../../../styles/easing";
import type { Size } from "../../../../styles/size";

export type Type = "001" | "002" | "003";
export type AnimationType = "001" | "002";

export type Animation = {
  type: AnimationType;
  duration?: number;
  easing?: EasingKey;
  backgroundColor?: string;
  textColor?: string;
};

export const StyledButton = styled.button<{
  $type?: Type;
  $backgroundColor: string;
  $borderColor: string;
  $fullWidth: boolean;
  $animation?: Animation;
  $size: Size;
  $disabledBackgroundColor: string | undefined;
  $disabledBorderColor: string | undefined;
  $paddingTop: number | undefined;
  $paddingRight: number | undefined;
  $paddingBottom: number | undefined;
  $paddingLeft: number | undefined;
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
  $size: Size;
  $color: string;
  $fontWeight: number;
  $disabled: boolean;
  $disabledColor: string | undefined;
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
