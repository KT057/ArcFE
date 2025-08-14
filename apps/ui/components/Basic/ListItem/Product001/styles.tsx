import styled from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemNumberProps = {
  fontSize?: number;
};

type ListItemNumberTextProps = {
  numberFontSize?: number;
  numberColor?: string;
  animationColor?: string;
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
};

export const StyledListItemWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledListItemNumber = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})<ListItemNumberProps>`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;

export const StyledListItemNumberText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "numberFontSize" &&
    prop !== "numberColor" &&
    prop !== "animationDuration" &&
    prop !== "animationEase"
})<ListItemNumberTextProps>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${({ numberColor }) => numberColor ?? "#000"};
  font-size: ${({ theme, numberFontSize }) => theme.size.em(numberFontSize ?? 24)};
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;

export const StyledListItemTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<ListItemTextWrapperProps>`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(30 + (gap ?? 10))};
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
  shouldForwardProp: (prop) => prop !== "animationColor"
})<ListItemProps>`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemNumberText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }
  }
`;
