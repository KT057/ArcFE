import styled from "styled-components";
import { hexToRgb } from "../../../../styles/color";

type CircleToggleProps = {
  color?: string;
  isHovered: boolean;
};

type CircleToggleDotProps = {
  dotColor?: string;
};

export const StyledJmcCircleToggleWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledJmcCircleToggle = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color" && prop !== "isHovered"
})<CircleToggleProps>`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  position: relative;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  border: 1px solid ${({ color, isHovered }) =>
    isHovered
      ? `rgba(${hexToRgb(color ?? "#fff")}, 0)`
      : `rgba(${hexToRgb(color ?? "#fff")}, 1)`};
  background-color: ${({ color, isHovered }) =>
    isHovered
      ? `rgba(${hexToRgb(color ?? "#fff")}, 0.3)`
      : `rgba(${hexToRgb(color ?? "#fff")}, 0)`};
  transition:
    border-color 0.3s ${({ theme }) => theme.animation.easing.easeOutCubic},
    background-color 0.3s ${({ theme }) => theme.animation.easing.easeOutCubic};
`;

export const StyledJmcCircleToggleInner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledJmcCircleToggleDotWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(4)};
`;

export const StyledJmcCircleToggleDot = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "dotColor"
})<CircleToggleDotProps>`
  width: ${({ theme }) => theme.size.em(4)};
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ dotColor }) => dotColor ?? "#fff"};
  border-radius: 50%;
`;
