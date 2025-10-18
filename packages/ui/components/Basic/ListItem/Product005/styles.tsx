import styled from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemPointWrapperProps = {
  fontSize?: number;
};

type ListItemPointProps = {
  pointSize?: number;
  pointColor?: string;
  animationPointColor?: string;
  animationDuration?: string;
  animationEase?: EasingKey;
};

type ListItemTextWrapperProps = {
  gap?: number;
};

type ListItemTextProps = {
  fontSize?: number;
  color?: string;
  animationColor?: string;
  animationDuration?: string;
  animationEase?: EasingKey;
};

type ListItemProps = {
  animationColor?: string;
  animationPointColor?: string;
};

export const StyledListItemWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledListItemPointWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})<ListItemPointWrapperProps>`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;

export const StyledListItemPoint = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "pointSize" &&
    prop !== "pointColor" &&
    prop !== "animationPointColor" &&
    prop !== "animationDuration" &&
    prop !== "animationEase"
})<ListItemPointProps>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({ pointColor }) => pointColor ?? "#000"};
  width: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  height: 1px;
  transition: background-color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;

export const StyledListItemTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<ListItemTextWrapperProps>`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;

export const StyledListItemText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" &&
    prop !== "color" &&
    prop !== "animationColor" &&
    prop !== "animationDuration" &&
    prop !== "animationEase"
})<ListItemTextProps>`
  display: block;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;

export const StyledListItem = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "animationColor" && prop !== "animationPointColor"
})<ListItemProps>`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemPoint} {
      background-color: ${({ animationPointColor }) => animationPointColor ?? "#ccc"};
    }
  }
`;
