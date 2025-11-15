import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

type ListItemIconProps = {
  $iconColor: string;
  $animationIconColor: string;
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
  $animationIconColor: string;
  $hasOnClick: boolean;
  $gap: number;
  $alignItemsCenter: boolean;
};

type ListItemIconWrapperProps = {
  $iconPaddingTop: number;
};

export const StyledListItemIconWrapper = styled.div<ListItemIconWrapperProps>`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $iconPaddingTop }) => ($iconPaddingTop === 0 || $iconPaddingTop === undefined ? "0" : theme.size.em($iconPaddingTop ?? 0))};
`;

export const StyledListItemIcon = styled.span<ListItemIconProps>`
  color: ${({ $iconColor }) => $iconColor};
  ${({ theme }) => theme.icon.size.style("large")}
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
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => ($alignItemsCenter ? "center" : "start")};

  ${({ $hasOnClick, $animationColor, $animationIconColor }) =>
    $hasOnClick &&
    css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText} {
          color: ${$animationColor};
        }

        ${StyledListItemIcon} {
          color: ${$animationIconColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
