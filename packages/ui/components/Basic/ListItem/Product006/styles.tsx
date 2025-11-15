import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemFrameNumberWrapperProps = {
  $frameNumberPaddingTop: number;
};

type ListItemTextProps = {
  $color: string;
  $animationOpacity: number;
  $animationDuration: number;
  $animationEase: EasingKey;
};

type ListItemProps = {
  $animationOpacity: number;
  $animationDuration: number;
  $animationEase: EasingKey;
  $hasOnClick: boolean;
  $gap: number;
  $alignItemsCenter: boolean;
};

export const StyledListItemFrameNumberWrapper = styled.div<ListItemFrameNumberWrapperProps>`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $frameNumberPaddingTop }) => ($frameNumberPaddingTop === 0 || $frameNumberPaddingTop === undefined ? "0" : theme.size.em($frameNumberPaddingTop))};
`;

export const StyledListItemFrameNumber = styled.span`
  display: block;
`;

export const StyledListItemTextWrapper = styled.div`
  display: block;
`;

export const StyledListItemText = styled.div<ListItemTextProps>`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: opacity
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;

export const StyledListItem = styled.li<ListItemProps>`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => ($alignItemsCenter ? "center" : "start")};

  ${({ $hasOnClick, $animationOpacity, $animationDuration, $animationEase, theme }) =>
    $hasOnClick &&
    css`
      cursor: pointer;
      transition: opacity ${$animationDuration}s
        ${theme.animation.easing[$animationEase]};

      &:hover {
        opacity: ${$animationOpacity};
      }

      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }
    `}
`;
