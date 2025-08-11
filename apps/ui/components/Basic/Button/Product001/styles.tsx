import styled, { css } from "styled-components";
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

type ButtonProps = {
  type?: Type;
  backgroundColor: string;
  borderColor: string;
  animation?: Animation;
  size: Size;
};

type TextProps = {
  size: Size;
  color: string;
  fontWeight: number;
};

export const StyledButtonWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledButton = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "backgroundColor" &&
    prop !== "borderColor" &&
    prop !== "animation" &&
    prop !== "size"
})<ButtonProps>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ borderColor }) => borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 0;
  }

  ${({ type, theme }) => {
    switch (type) {
      case "001":
        return css`border-radius: ${theme.size.em(30)};`;
      case "002":
        return css`border-radius: ${theme.size.em(8)};`;
      default:
        return css`border-radius: 0;`;
    }
  }}

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`padding: ${theme.size.em(7)} ${theme.size.em(13)};`;
      case "middle":
        return css`padding: ${theme.size.em(15)} ${theme.size.em(28)};`;
      default:
        return css`padding: ${theme.size.em(25)} ${theme.size.em(45)};`;
    }
  }}

  ${({ animation, theme }) => {
    switch (animation?.type ?? "001") {
      case "001":
        return css`
          &::after {
            transition: background-color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${animation?.backgroundColor ?? "#000"};
            }
          }
        `;

      case "002":
        return css`
          &::after {
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            background-color: ${animation?.backgroundColor ?? "#fff"};
          }

          ${StyledText} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        `;
    }
  }}
`;

export const StyledText = styled.span<TextProps>`
  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`font-size: ${theme.size.em(12)};`;
      case "middle":
        return css`font-size: ${theme.size.em(16)};`;
      default:
        return css`font-size: ${theme.size.em(18)};`;
    }
  }}

  display: block;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  position: relative;
  z-index: 1;
`;
