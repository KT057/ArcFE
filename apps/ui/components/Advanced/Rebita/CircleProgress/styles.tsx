import styled from "styled-components";

interface CircleProgressProps {
  primaryColor?: string;
  trackColor?: string;
  textColor?: string;
  fontSize?: number;
  size?: number;
  strokeWidth?: number;
  animationDuration?: string;
  progress?: number;
}

export const StyledCircleProgressWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledCircleProgressContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 100)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCircleProgressSvg = styled.svg.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 100)};
  height: ${({ theme, size }) => theme.size.em(size || 100)};
  transform: rotate(-90deg);
  overflow: visible;
`;

export const StyledCircleProgressTrack = styled.circle.withConfig({
  shouldForwardProp: (prop) => !["trackColor", "size"].includes(prop)
})<{ trackColor?: string; size?: number }>`
  cx: ${({ theme, size }) => theme.size.em((size || 100) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 100) / 2)};
  r: ${({ theme, size }) => theme.size.em(((size || 100) - 1) / 2)};
  stroke-width: 1;
  fill: none;
  stroke: ${({ trackColor }) => trackColor || "#e5e7eb"};
  stroke-linecap: round;
`;

export const StyledCircleProgressProgress = styled.circle.withConfig({
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
  cx: ${({ theme, size }) => theme.size.em((size || 100) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 100) / 2)};
  r: ${({ theme, size, strokeWidth }) => theme.size.em(((size || 100) - (strokeWidth || 3)) / 2)};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 3};
  fill: none;
  stroke: ${({ primaryColor }) => primaryColor || "#3b82f6"};
  stroke-linecap: round;
  stroke-dasharray: ${({ theme, size, strokeWidth }) => {
    const radius = ((size || 100) - (strokeWidth || 3)) / 2;
    const circumference = 2 * 3.1416 * radius;
    return theme.size.em(circumference);
  }};
  stroke-dashoffset: ${({ theme, size, strokeWidth, progress }) => {
    const radius = ((size || 100) - (strokeWidth || 3)) / 2;
    const circumference = 2 * 3.1416 * radius;
    return theme.size.em(
      circumference - (circumference * (progress || 0)) / 100
    );
  }};
`;

export const StyledCircleProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const StyledCircleProgressPercentage = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "textColor"].includes(prop)
})<{ fontSize?: number; textColor?: string }>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ textColor }) => textColor || "#1f2937"};
`;
