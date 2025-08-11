import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";

type ArrowButtonProps = {
  size: Size;
  iconColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverIconColor?: string;
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
};

type ArrowButtonIconWrapperProps = {
  size: Size;
};

type ArrowButtonIconProps = {
  iconColor?: string;
  iconSize?: Size;
};

const BUTTON_SIZE = {
  large: { width: 160, height: 90 },
  middle: { width: 100, height: 55 },
  small: { width: 66, height: 38 }
};

const ICON_SIZE = {
  large: 43,
  middle: 30,
  small: 20
};

export const StyledJmcArrowButtonWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledJmcArrowButtonIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor"
})<ArrowButtonIconProps>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};
  color: ${({ iconColor }) => iconColor ?? "#000"};
  width: 100%;
  height: 100%;

  &:nth-child(2) {
    transform: translateX(-100%);
  }

  &:nth-child(3) {
    transform: translateX(-200%);
  }

  &:nth-child(4) {
    transform: translateX(-300%);
  }
`;

export const StyledJmcArrowButton = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "size" &&
    prop !== "iconColor" &&
    prop !== "borderColor" &&
    prop !== "backgroundColor" &&
    prop !== "hoverIconColor" &&
    prop !== "hoverBorderColor" &&
    prop !== "hoverBackgroundColor"
})<ArrowButtonProps>`
  position: relative;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  overflow: hidden;
  display: block;
  cursor: pointer;
  transition: border-color 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};

  ${({ size }) => css`
    width: ${({ theme }) => theme.size.em(BUTTON_SIZE[size].width)};
    height: ${({ theme }) => theme.size.em(BUTTON_SIZE[size].height)};
  `}

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 105%;
    height: 105%;
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ?? "#909090"};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};
    z-index: 0;
  }

  &:hover {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor ?? "#909090"};

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }

    ${StyledJmcArrowButtonIcon} {
      transition: transform 0.6s ${({ theme }) => theme.animation.easing.easeInOutCubic};
      color: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};

      svg {
        stroke: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};
        fill: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};
      }

      &:nth-child(1) {
        transform: translateX(300%);
      }

      &:nth-child(2) {
        transform: translateX(200%);
      }

      &:nth-child(3) {
        transform: translateX(100%);
      }

      &:nth-child(4) {
        transform: translateX(0);
      }
    }
  }
`;

export const StyledJmcArrowButtonIconContainer = styled.span`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledJmcArrowButtonIconWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<ArrowButtonIconWrapperProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ size }) => css`
    width: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
    height: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
  `}
`;

export const StyledJmcArrowButtonIconInner = styled.span`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
`;
