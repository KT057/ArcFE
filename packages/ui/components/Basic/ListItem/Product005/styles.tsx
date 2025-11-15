import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemPointProps = {
  $pointSize: number;
  $pointColor: string;
  $animationPointColor: string;
  $animationDuration: number;
  $animationEase: EasingKey;
};

type ListItemTextProps = {
  $color: string;
  $animationColor: string;
  $animationDuration: number;
  $animationEase: EasingKey;
};

type ListItemProps = {
  $animationColor: string;
  $animationPointColor: string;
  $hasOnClick: boolean;
  $gap: number;
  $alignItemsCenter: boolean;
};

type ListItemPointWrapperProps = {
  $pointPaddingTop: number;
};

export const StyledListItemPointWrapper = styled.div<ListItemPointWrapperProps>`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $pointPaddingTop }) => ($pointPaddingTop === 0 || $pointPaddingTop === undefined ? "0" : theme.size.em($pointPaddingTop ?? 0))};
`;

export const StyledListItemPoint = styled.span<ListItemPointProps>`
  background-color: ${({ $pointColor }) => $pointColor};
  width: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  height: 1px;
  transition: background-color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
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
  transition: color
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

  ${({ $hasOnClick, $animationColor, $animationPointColor }) =>
    $hasOnClick &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText} {
          color: ${$animationColor};
        }

        ${StyledListItemPoint} {
          background-color: ${$animationPointColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
