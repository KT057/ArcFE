import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemNumberTextProps = {
  $numberFontSize: number;
  $numberColor: string;
  $animationColor: string;
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
  $hasOnClick: boolean;
  $gap: number;
  $alignItemsCenter: boolean;
};

type ListItemNumberProps = {
  $numberPaddingTop: number;
};

export const StyledListItemNumber = styled.div<ListItemNumberProps>`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $numberPaddingTop }) => ($numberPaddingTop === 0 || $numberPaddingTop === undefined ? "0" : theme.size.em($numberPaddingTop))};
`;

export const StyledListItemNumberText = styled.span<ListItemNumberTextProps>`
  color: ${({ $numberColor }) => $numberColor};
  font-size: ${({ theme, $numberFontSize }) => theme.size.em($numberFontSize)};
  transition: color
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
  column-gap: ${({ theme, $gap }) => theme.size.em(30 + $gap)};
  align-items: ${({ $alignItemsCenter }) => ($alignItemsCenter ? "center" : "start")};

  ${({ $hasOnClick, $animationColor }) =>
    $hasOnClick &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText} {
          color: ${$animationColor};
        }

        ${StyledListItemNumberText} {
          color: ${$animationColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
