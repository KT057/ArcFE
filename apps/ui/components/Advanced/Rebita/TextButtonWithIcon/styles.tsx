import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { Direction } from ".";

export const StyledTextButtonWithIconWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextButtonWithIcon = styled.div<{
  direction?: Direction;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.size.em(8)};
  cursor: pointer;
  line-height: 0;

  ${({ direction }) =>
    direction === "left" &&
    css`
      flex-direction: row-reverse;
    `}
  ${({ direction }) =>
    direction === "right" &&
    css`
      flex-direction: row;
    `}
`;

export const StyledTextButtonWithIconInner = styled.span`
  display: block;
`;

export const StyledTextButtonWithIconIcon = styled.span<{
  iconSize?: Size;
  color?: string;
}>`
  display: block;
  color: ${({ color }) => color || "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize || "middle")}
`;
