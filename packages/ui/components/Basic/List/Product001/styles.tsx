import styled, { css } from "styled-components";
import type { ListType } from "./index";

type ListProps = {
  $type: ListType;
  $listStyle: "ul" | "ol";
  $columnGap?: number;
  $rowGap?: number;
  $isAlignItemsCenter?: boolean;
};

type ListItemProps = {
  $type: ListType;
  $borderColor?: string;
};

export const StyledList = styled.ul<ListProps>`
  ${({ theme }) => theme.font.baseSize.em()}
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${({ $isAlignItemsCenter }) => ($isAlignItemsCenter ? "center" : "flex-start")};

  ${({ $type, theme, $columnGap, $rowGap }) => {
    switch ($type) {
      case "001":
      case "002":
        return css`
          flex-direction: column;
          gap: ${theme.size.em($columnGap ?? 10)};
        `;
      case "003":
        return css`
          gap: ${theme.size.em($rowGap ?? 40)};
        `;
      default:
        return css`
          flex-direction: column;
          gap: ${theme.size.em($columnGap ?? 10)};
        `;
    }
  }}
`;

export const StyledListItem = styled.li<ListItemProps>`
  ${({ $type, $borderColor }) =>
    $type === "002" &&
    css`
      border-bottom: 1px solid ${$borderColor ?? "#000"};
      padding-bottom: ${({ theme }) => theme.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;
