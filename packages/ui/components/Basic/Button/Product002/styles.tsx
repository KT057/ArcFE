import styled, { css, keyframes } from "styled-components";
import { hexToRgb } from "../../../../styles/color";
import type { EasingKey } from "../../../../styles/easing";
import type { Size } from "../../../../styles/size";

export type Type =
  | "001"
  | "002"
  | "003"
  | "004"
  | "005"
  | "006"
  | "007"
  | "008"
  | "009";
export type AnimationType = "001" | "002" | "003" | "004";
export type IconDirection = "left" | "right";

export type Animation = {
  type: AnimationType;
  duration?: number;
  easing?: EasingKey;
  backgroundColor?: string;
  textColor?: string;
};

const ArrowHide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

const ArrowShow = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export const StyledButtonWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
  width: 100%;
`;

export const StyledButton = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "backgroundColor" &&
    prop !== "borderColor" &&
    prop !== "animation" &&
    prop !== "size" &&
    prop !== "iconSize" &&
    prop !== "fontSize" &&
    prop !== "iconDirection" &&
    prop !== "isHover" &&
    prop !== "disabledBackgroundColor" &&
    prop !== "disabledBorderColor" &&
    prop !== "paddingTop" &&
    prop !== "paddingRight" &&
    prop !== "paddingBottom" &&
    prop !== "paddingLeft"
})<{
  type: Type;
  backgroundColor: string;
  borderColor: string;
  animation?: Animation;
  size: Size;
  iconDirection: IconDirection;
  isHover: boolean | null;
  iconSize: number | undefined;
  fontSize: number | undefined;
  disabled: boolean;
  disabledBackgroundColor: string | undefined;
  disabledBorderColor: string | undefined;
  paddingTop: number | undefined;
  paddingRight: number | undefined;
  paddingBottom: number | undefined;
  paddingLeft: number | undefined;
}>`
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
      case "004":
      case "007":
        return css`border-radius: ${theme.size.em(30)};`;
      case "002":
      case "005":
      case "008":
        return css`border-radius: ${theme.size.em(8)};`;
      default:
        return css`border-radius: 0;`;
    }
  }}

  ${({ type, iconDirection, theme }) => {
    switch (type) {
      case "001":
      case "002":
      case "003":
        return css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${theme.size.em(8)};
          `;
      case "004":
      case "005":
      case "006":
        return css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;
      case "007":
      case "008":
      case "009":
        return css`
            text-align: center;

            ${StyledText} {
              padding: 0 ${theme.size.em(14)};
            }

            ${StyledIconWrapper} {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 1;

              ${
                iconDirection === "left" &&
                css`
                  left: ${theme.size.em(24)};
                `
              }

              ${
                iconDirection === "right" &&
                css`
                  right: ${theme.size.em(24)};
                `
              }
            }
          `;
      default:
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${theme.size.em(8)};
        `;
    }
  }}

  ${({ iconDirection }) => {
    switch (iconDirection) {
      case "left":
        return css`
          flex-direction: row-reverse;
        `;
      case "right":
        return css`
          flex-direction: row;
        `;
    }
  }}

  ${({
    size,
    iconSize,
    fontSize,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    theme
  }) => {
    switch (size) {
      case "small":
        return css`
          padding: ${theme.size.em(paddingTop ?? 7)} ${theme.size.em(paddingRight ?? 13)} ${theme.size.em(paddingBottom ?? 7)} ${theme.size.em(paddingLeft ?? 13)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.small)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.small)};
          }

          ${StyledText} {
            font-size: ${theme.size.em(12)};
          }
        `;
      case "middle":
        return css`
          padding: ${theme.size.em(paddingTop ?? 15)} ${theme.size.em(paddingRight ?? 28)} ${theme.size.em(paddingBottom ?? 15)} ${theme.size.em(paddingLeft ?? 28)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.middle)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.middle)};
          }

          ${StyledText} {
            font-size: ${theme.size.em(fontSize ?? 16)};
          }
        `;
      case "large":
        return css`
          padding: ${theme.size.em(paddingTop ?? 25)} ${theme.size.em(paddingRight ?? 45)} ${theme.size.em(paddingBottom ?? 25)} ${theme.size.em(paddingLeft ?? 45)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.large)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.large)};
          }

          ${StyledText} {
            font-size: ${theme.size.em(fontSize ?? 18)};
          }
        `;
      default:
        return css`
          padding: ${theme.size.em(paddingTop ?? 25)} ${theme.size.em(paddingRight ?? 45)} ${theme.size.em(paddingBottom ?? 25)} ${theme.size.em(paddingLeft ?? 45)};
        `;
    }
  }}

  ${({ animation, theme, isHover }) => {
    switch (animation?.type ?? "001") {
      case "001":
        return css`
          &::after {
            transition: background-color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledIcon} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${animation?.textColor ?? "#fff"};
            }

            ${StyledIcon} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${animation?.backgroundColor ?? "#000"};
            }
          }
        `;

      case "002": {
        return css`
          ${StyledIcon}:nth-child(1) {
            ${
              isHover === true &&
              css`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `
            }

            ${
              isHover === false &&
              css`
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `
            }
          }

          ${StyledIcon}:nth-child(2) {
            ${
              isHover === true &&
              css`  
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `
            }

            ${
              isHover === false &&
              css`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `
            }
          }
        `;
      }

      case "003": {
        return css`
          ${StyledIcon}:nth-child(1) {
            transform: translateX(-100%);
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          ${StyledIcon}:nth-child(2) {
            transform: translateX(0);
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledIcon}:nth-child(1) {
              transform: translateX(0);
            }

            ${StyledIcon}:nth-child(2) {
              transform: translateX(100%);
            }
          }
        `;
      }

      case "004": {
        return css`
            &::after {
              transform: scaleX(0);
              transform-origin: right bottom;
              transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
              background-color: ${animation?.backgroundColor ?? "#fff"};
            }

            ${StyledText} {
              transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            }

            ${StyledIcon} {
              transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            }

            &:hover {
              ${StyledText} {
                color: ${animation?.textColor ?? "#fff"};
              }

              ${StyledIcon} {
                color: ${animation?.textColor ?? "#fff"};
              }

              &::after {
                transform: scaleX(1);
                transform-origin: left bottom;
              }
            }
          `;
      }
    }
  }}

  ${({
    disabled,
    disabledBackgroundColor,
    backgroundColor,
    disabledBorderColor,
    borderColor
  }) =>
    disabled &&
    css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${disabledBackgroundColor ?? `rgba(${hexToRgb(backgroundColor)}, 0.5)`};
    border-color: ${disabledBorderColor ?? `rgba(${hexToRgb(borderColor)}, 0.5)`};
  `}
`;

export const StyledIconWrapper = styled.span`
  display: block;
`;

export const StyledIconInner = styled.span`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: block;
`;

export const StyledIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "disabled" && prop !== "disabledColor"
})<{
  color: string;
  disabled: boolean;
  disabledColor: string | undefined;
}>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ color }) => color};

  &:nth-child(1) {
    transform: translateX(0);
  }

  &:nth-child(2) {
    transform: translateX(100%);
  }

  ${({ disabled, disabledColor, color }) =>
    disabled &&
    css`
    color: ${disabledColor ?? `rgba(${hexToRgb(color)}, 0.5)`};
  `}
`;

export const StyledText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "size" &&
    prop !== "color" &&
    prop !== "fontWeight" &&
    prop !== "disabled" &&
    prop !== "disabledColor"
})<{
  size: Size;
  color: string;
  fontWeight: number;
  disabled: boolean;
  disabledColor: string | undefined;
}>`
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

  ${({ disabled, disabledColor, color }) =>
    disabled &&
    css`
    color: ${disabledColor ?? `rgba(${hexToRgb(color)}, 0.5)`};
  `}
`;
