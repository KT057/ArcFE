import styled from "styled-components";
import type { Size } from "../../../../styles/size";

export type DirectionType = "left" | "right";

interface RebitaButtonWrapperProps {
  fontSize?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  leftContentBorderColor?: string;
}

interface RebitaButtonInnerProps {
  size: Size;
  direction: DirectionType;
}

export const StyledRebitaButtonWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledRebitaButtonInner = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["direction", "backgroundColor", "borderColor"].includes(prop)
})<{
  direction: DirectionType;
  backgroundColor?: string;
  borderColor?: string;
}>`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  border: 1px solid ${({ borderColor }) => borderColor || "#000"};
  cursor: pointer;
  flex-direction: ${({ direction }) => (direction === "left" ? "row-reverse" : "row")};
`;

export const StyledRebitaButtonLeft = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["textColor", "leftContentBorderColor", "direction"].includes(prop)
})<{
  textColor?: string;
  leftContentBorderColor?: string;
  direction: DirectionType;
}>`
  color: ${({ textColor }) => textColor || "#fff"};
  padding: ${({ theme }) => `${theme.size.em(10)} ${theme.size.em(20)}`};
  height: 100%;
  flex: 1;
  border-right: ${({ direction, leftContentBorderColor }) =>
    direction === "right"
      ? `1px solid ${leftContentBorderColor || "#fff"}`
      : "0"};
  border-left: ${({ direction, leftContentBorderColor }) =>
    direction === "left"
      ? `1px solid ${leftContentBorderColor || "#fff"}`
      : "0"};
`;

export const StyledRebitaButtonLeftInner = styled.div.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})<{ fontSize?: number }>`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 12)};
  font-weight: 700;
`;

export const StyledRebitaButtonRight = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size: Size }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: ${({ theme, size }) => {
    switch (size) {
      case "large":
        return theme.size.em(56);
      case "middle":
        return theme.size.em(47);
      case "small":
        return theme.size.em(37);
      default:
        return theme.size.em(47);
    }
  }};
  max-width: ${({ theme, size }) => {
    switch (size) {
      case "large":
        return theme.size.em(56);
      case "middle":
        return theme.size.em(47);
      case "small":
        return theme.size.em(37);
      default:
        return theme.size.em(47);
    }
  }};
`;

export const StyledRebitaButtonRightInner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconSize" && prop !== "iconColor"
})<{ iconSize: Size; iconColor?: string }>`
  transform: translate(0);
  transition: transform 0.8s ${({ theme }) => theme.animation.easing.easeOutCubic};
  color: ${({ iconColor }) => iconColor || "#fff"};
  ${({ theme, iconSize }) => theme.icon.size.style(iconSize)}
`;
