import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

export type TextButtonType = "001" | "002";

type TextButtonProps = {
  type: TextButtonType;
  color?: string;
  fontSize?: number;
  hoverColor?: string;
  hoverDuration?: string;
  hoverEase?: EasingKey;
};

export const StyledTextButtonWrapper = styled.span`
  display: block;
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextButton = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "color" &&
    prop !== "fontSize" &&
    prop !== "hoverColor" &&
    prop !== "hoverDuration" &&
    prop !== "hoverEase"
})<TextButtonProps>`
  display: ${({ type }) => (type === "002" ? "inline-block" : "block")};
  color: ${({ color }) => color ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 12)};
  transition: color ${({ hoverDuration }) => hoverDuration ?? "0.3s"} ${({ hoverEase, theme }) => theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
  cursor: pointer;
  
  ${({ type, color, hoverDuration, hoverEase, theme }) =>
    type === "002" &&
    css`
      border-bottom: 1px solid ${color ?? "#fff"};
      transition: 
        border-color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]},
        color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
    `}

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#000"};
    
    ${({ type, hoverColor }) =>
      type === "002" &&
      css`
        border-color: ${hoverColor ?? "#000"};
      `}
  }
`;
