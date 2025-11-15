import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

export type TextButtonType = "001" | "002";
export type IconPosition = "left" | "right";

type TextButtonProps = {
  $type: TextButtonType;
  $color?: string;
  $fontSize?: number;
  $hoverColor?: string;
  $hoverDuration?: string;
  $hoverEase?: EasingKey;
  $iconPosition?: IconPosition;
  $gap?: number;
  $isCenter?: boolean;
};

export const StyledTextButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "$type",
      "$hoverColor",
      "$hoverDuration",
      "$hoverEase",
      "$iconPosition",
      "$gap",
      "$isCenter"
    ].includes(prop)
})<TextButtonProps>`
  all: unset;
  width: auto;
  display: ${({ $iconPosition }) => ($iconPosition ? "inline-flex" : "inline-block")};
  align-items: ${({ $isCenter, $iconPosition }) => ($iconPosition && $isCenter ? "center" : "flex-start")};
  gap: ${({ theme, $gap, $iconPosition }) => ($iconPosition ? theme.size.rem($gap ?? 4) : 0)};
  flex-direction: ${({ $iconPosition }) => ($iconPosition === "left" ? "row-reverse" : "row")};
  transition: color ${({ $hoverDuration }) => $hoverDuration ?? "0.3s"} ${({ $hoverEase, theme }) => theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
  cursor: pointer;

  ${({ $type, $color, $hoverDuration, $hoverEase, theme }) =>
    $type === "002" &&
    css`
      border-bottom: 1px solid ${$color ?? "#fff"};
      transition:
        border-color ${$hoverDuration ?? "0.3s"} ${theme.animation.easing[$hoverEase ?? "easeInOutCubic"]},
        color ${$hoverDuration ?? "0.3s"} ${theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
    `}

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor ?? "#000"} !important;

    svg {
      color: ${({ $hoverColor }) => $hoverColor ?? "#000"} !important;
      transition:
        color ${({ $hoverDuration }) => $hoverDuration ?? "0.3s"} ${({ $hoverEase, theme }) => theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
    }

    ${({ $type, $hoverColor }) =>
      $type === "002" &&
      css`
        border-color: ${$hoverColor ?? "#000"};
      `}
  }
`;

export const StyledTextButtonText = styled.span`
  display: block;
  line-height: 1.2;
`;

export const StyledTextButtonIcon = styled.div<{ $paddingTop?: number }>`
  display: block;
  line-height: 0;
  padding-top: ${({ theme, $paddingTop }) => ($paddingTop !== undefined ? theme.size.rem($paddingTop) : 0)};
`;
