import styled from "styled-components";

export type SlideGuideDotType = "default" | "progress";

export const StyledSlideGuideDotWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledSlideGuideDotContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSlideGuideDotItem = styled.span`
  width: ${({ theme }) => theme.size.em(10)};
  height: ${({ theme }) => theme.size.em(10)};
  display: block;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSlideGuideDotSvg = styled.svg.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  transform: rotate(-90deg);
  overflow: visible;
`;

export const StyledSlideGuideDotTrack = styled.circle.withConfig({
  shouldForwardProp: (prop) => !["trackColor", "size"].includes(prop)
})<{ trackColor?: string; size?: number }>`
  cx: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  r: ${({ theme, size }) => theme.size.em(((size || 17) - 1) / 2)};
  stroke-width: 1;
  fill: none;
  stroke: ${({ trackColor }) => trackColor || "#e5e7eb"};
  stroke-linecap: round;
`;

export const StyledSlideGuideDotProgress = styled.circle.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "primaryColor",
      "size",
      "strokeWidth",
      "animationDuration",
      "progress"
    ].includes(prop)
})<{
  primaryColor?: string;
  size?: number;
  strokeWidth?: number;
  animationDuration?: string;
  progress?: number;
}>`
  cx: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  r: ${({ theme, size, strokeWidth }) => theme.size.em(((size || 17) - (strokeWidth || 2)) / 2)};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 2};
  fill: none;
  stroke: ${({ primaryColor }) => primaryColor || "#3b82f6"};
  stroke-linecap: round;
  stroke-dasharray: ${({ theme, size, strokeWidth }) => {
    const radius = ((size || 17) - (strokeWidth || 2)) / 2;
    const circumference = 2 * 3.1416 * radius;
    return theme.size.em(circumference);
  }};
  stroke-dashoffset: ${({ theme, size, strokeWidth, progress }) => {
    const radius = ((size || 17) - (strokeWidth || 2)) / 2;
    const circumference = 2 * 3.1416 * radius;
    return theme.size.em(
      circumference - (circumference * (progress || 0)) / 100
    );
  }};
`;
