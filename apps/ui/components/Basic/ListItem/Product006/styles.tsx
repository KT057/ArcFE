import styled from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemFrameNumberWrapperProps = {
  fontSize?: number;
};

type ListItemTextWrapperProps = {
  gap?: number;
};

type ListItemTextProps = {
  fontSize?: number;
  color?: string;
};

type ListItemProps = {
  animationOpacity?: number;
  animationDuration?: string;
  animationEase?: EasingKey;
};

export const StyledListItemWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledListItemFrameNumberWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})<ListItemFrameNumberWrapperProps>`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;

export const StyledListItemFrameNumber = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const StyledListItemTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<ListItemTextWrapperProps>`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 44)};
`;

export const StyledListItemText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" &&
    prop !== "color"
})<ListItemTextProps>`
  display: block;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
`;

export const StyledListItem = styled.span.withConfig({
  shouldForwardProp: (prop) => 
    prop !== "animationOpacity" && 
    prop !== "animationDuration" && 
    prop !== "animationEase"
})<ListItemProps>`
  cursor: pointer;
  display: flex;
  justify-content: left;
  transition: opacity ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};

  &:hover {
    opacity: ${({ animationOpacity }) => animationOpacity ?? 0.5};
  }
`;