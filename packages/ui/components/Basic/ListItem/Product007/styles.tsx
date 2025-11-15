import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemProps = {
  $animationColor: string;
  $hasOnClick: boolean;
};

type ListItemTextProps = {
  $color: string;
  $animationColor: string;
  $animationDuration: number;
  $animationEase: EasingKey;
};

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

  ${({ $hasOnClick, $animationColor }) =>
    $hasOnClick &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText} {
          color: ${$animationColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
