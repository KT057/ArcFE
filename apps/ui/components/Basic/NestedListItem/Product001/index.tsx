import type React from "react";
import { useState } from "react";
import {
  StyledNestedListItem,
  StyledNestedListItemIcon,
  StyledNestedListItemIconWrapper,
  StyledNestedListItemText,
  StyledNestedListItemTextWrapper,
  StyledNestedListItemWrapper
} from "./styles";

interface NestedListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
  style?: {
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    gap?: number;
    iconColor?: string;
  };
}

export const NestedListItem001 = ({
  icon,
  children,
  onClick,
  isOpen: controlledIsOpen,
  style
}: NestedListItemProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(
    controlledIsOpen ?? false
  );
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClick = () => {
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };

  return (
    <StyledNestedListItemWrapper>
      <StyledNestedListItem onClick={handleClick}>
        <StyledNestedListItemIconWrapper
          fontSize={style?.fontSize}
          lineHeight={style?.lineHeight}
        >
          <StyledNestedListItemIcon
            isOpen={isOpen}
            iconColor={style?.iconColor}
          >
            {icon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
        <StyledNestedListItemTextWrapper gap={style?.gap}>
          <StyledNestedListItemText
            fontSize={style?.fontSize}
            lineHeight={style?.lineHeight}
            color={style?.color}
          >
            {children}
          </StyledNestedListItemText>
        </StyledNestedListItemTextWrapper>
      </StyledNestedListItem>
    </StyledNestedListItemWrapper>
  );
};
