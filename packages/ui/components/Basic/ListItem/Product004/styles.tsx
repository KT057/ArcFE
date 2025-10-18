import styled from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemIconWrapperProps = {
  fontSize?: number;
};

type ListItemIconProps = {
  iconColor?: string;
  animationIconColor?: string;
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
  animationIconColor?: string;
};

export const StyledListItemWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledListItemIconWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})<ListItemIconWrapperProps>`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;

export const StyledListItemIcon = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "iconColor" &&
    prop !== "animationIconColor" &&
    prop !== "animationDuration" &&
    prop !== "animationEase"
})<ListItemIconProps>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
  color: ${({ iconColor }) => iconColor ?? "#000"};
  ${({ theme }) => theme.icon.size.style("large")}
`;

export const StyledListItemTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<ListItemTextWrapperProps>`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em((gap ?? 8) + 24)};
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
    prop !== "animationColor" && prop !== "animationIconColor"
})<ListItemProps>`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemIcon} {
      color: ${({ animationIconColor }) => animationIconColor ?? "#ccc"};
    }
  }
`;
