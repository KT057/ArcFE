import type React from "react";
import { StyledList, StyledListItem, StyledListWrapper } from "./styles";

export type Type = "001" | "002" | "003";

interface ListItem {
  id: string;
  content: React.ReactNode;
}

interface ListProps {
  type?: Type;
  items: ListItem[];
  style?: {
    columnGap?: number;
    rowGap?: number;
    borderColor?: string;
    isAlignItemsCenter?: boolean;
  };
}

export const List001 = ({ type = "001", items, style }: ListProps) => {
  return (
    <StyledListWrapper>
      <StyledList
        as="ul"
        type={type}
        columnGap={style?.columnGap}
        rowGap={style?.rowGap}
        isAlignItemsCenter={style?.isAlignItemsCenter}
      >
        {items.map((item) => (
          <StyledListItem
            key={item.id}
            type={type}
            borderColor={style?.borderColor}
          >
            {item.content}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListWrapper>
  );
};
