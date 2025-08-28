import styled, { css } from "styled-components";
import type { Type } from "./index";

type ListProps = {
  type: Type;
  columnGap?: number;
  rowGap?: number;
};

type ListItemProps = {
  type: Type;
  borderColor: string | undefined;
};

export const StyledListWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledList = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" && prop !== "columnGap" && prop !== "rowGap"
})<ListProps>`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ type, theme, columnGap, rowGap }) => {
    switch (type) {
      case "001":
      case "002":
        return css`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
      case "003":
        return css`
          gap: ${theme.size.em(rowGap ?? 40)};
        `;
      default:
        return css`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
    }
  }}
`;

export const StyledListItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "borderColor"
})<ListItemProps>`
  ${({ type, borderColor }) =>
    type === "002" &&
    css`
      border-bottom: 1px solid ${borderColor ?? "#000"};
      padding-bottom: ${({ theme }) => theme.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;
