import type React from "react";
import { cloneElement, isValidElement, type ReactElement } from "react";
import { StyledList, StyledListItem } from "./styles";

export type ListType = "001" | "002" | "003";

interface ListItem {
  id: string;
  content: React.ReactNode;
  href?: string;
  ariaCurrent?: "page" | "step" | "location" | "date" | "time" | boolean;
  ariaSelected?: boolean;
}

interface ListProps {
  /**
   * スタイルタイプ
   */
  type?: ListType;
  /**
   * listStyle の設定
   */
  listStyle?: "ul" | "ol";
  /**
   * items の設定
   */
  items: ListItem[];
  /**
   * ARIA label 属性
   */
  ariaLabel?: string;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    columnGap?: number;
    rowGap?: number;
    borderColor?: string;
    isAlignItemsCenter?: boolean;
  };
}

const isListItemElement = (node: React.ReactNode): node is ReactElement => {
  if (!isValidElement(node)) return false;

  // Check if it's a native li element
  if (node.type === "li") return true;

  // Check for forwardRef components with displayName
  if (typeof node.type === "object" && node.type !== null) {
    const displayName = (node.type as any).displayName;
    if (
      displayName &&
      typeof displayName === "string" &&
      displayName.includes("ListItem")
    ) {
      return true;
    }
  }

  // Check for regular function components with displayName
  if (typeof node.type === "function") {
    const displayName = (node.type as any).displayName;
    if (
      displayName &&
      typeof displayName === "string" &&
      displayName.includes("ListItem")
    ) {
      return true;
    }
  }

  return false;
};

export const List001 = ({
  type = "001",
  listStyle = "ul",
  items,
  ariaLabel,
  appearance
}: ListProps) => {
  const listProps = {
    as: listStyle,
    $type: type,
    $listStyle: listStyle,
    $columnGap: appearance?.columnGap,
    $rowGap: appearance?.rowGap,
    $isAlignItemsCenter: appearance?.isAlignItemsCenter,
    role: "list",
    "aria-label": ariaLabel,
    ...(type === "003" && { "aria-orientation": "horizontal" as const })
  };

  return (
    <StyledList {...listProps}>
      {items.map((item) => {
        const itemProps = {
          "aria-current": item.ariaCurrent,
          "aria-selected": item.ariaSelected
        };

        // If content is already a list item element, clone it with additional props
        if (isListItemElement(item.content)) {
          return cloneElement(item.content, {
            key: item.id,
            ...itemProps,
            $type: type,
            $borderColor: appearance?.borderColor
          } as any);
        }

        // Otherwise, wrap in StyledListItem
        return (
          <StyledListItem
            key={item.id}
            {...itemProps}
            $type={type}
            $borderColor={appearance?.borderColor}
          >
            {item.content}
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};
