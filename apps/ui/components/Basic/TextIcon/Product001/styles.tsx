import styled from "styled-components";
import type { Size } from "../../../../styles/size";

export type IconPosition = "left" | "right";

type TextIconProps = {
  iconPosition: IconPosition;
  gap?: number;
};

type TextIconTextProps = {
  fontSize?: number;
  color?: string;
};

type TextIconIconProps = {
  iconColor?: string;
  iconSize?: Size;
};

export const StyledTextIconWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "gap"
})<TextIconProps>`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 4)};
  flex-direction: ${({ iconPosition }) => (iconPosition === "left" ? "row-reverse" : "row")};
`;

export const StyledTextIconText = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<TextIconTextProps>`
  display: block;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  line-height: 1;
`;

export const StyledTextIconIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor" && prop !== "iconSize"
})<TextIconIconProps>`
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize ?? "large")}
`;
