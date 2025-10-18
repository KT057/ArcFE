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
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  isOpen?: boolean;
  style?: {
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    leftIconColor?: string;
    rightIconColor?: string;
  };
}

export const NestedListItem002 = ({
  leftIcon,
  rightIcon,
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
            position="left"
            isOpen={false}
            iconColor={style?.leftIconColor}
          >
            {leftIcon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
        <StyledNestedListItemTextWrapper>
          <StyledNestedListItemText
            fontSize={style?.fontSize}
            lineHeight={style?.lineHeight}
            color={style?.color}
          >
            {children}
          </StyledNestedListItemText>
        </StyledNestedListItemTextWrapper>
        <StyledNestedListItemIconWrapper
          fontSize={style?.fontSize}
          lineHeight={style?.lineHeight}
        >
          <StyledNestedListItemIcon
            position="right"
            isOpen={isOpen}
            iconColor={style?.rightIconColor}
          >
            {rightIcon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
      </StyledNestedListItem>
    </StyledNestedListItemWrapper>
  );
};
