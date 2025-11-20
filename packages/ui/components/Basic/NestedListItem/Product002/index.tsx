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
  /**
   * 表示内容
   */
  leftIcon: React.ReactNode;
  /**
   * 表示内容
   */
  rightIcon: React.ReactNode;
  /**
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * 開いているかどうか
   */
  isOpen?: boolean;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
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
  appearance
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
          fontSize={appearance?.fontSize}
          lineHeight={appearance?.lineHeight}
        >
          <StyledNestedListItemIcon
            position="left"
            isOpen={false}
            iconColor={appearance?.leftIconColor}
          >
            {leftIcon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
        <StyledNestedListItemTextWrapper>
          <StyledNestedListItemText
            fontSize={appearance?.fontSize}
            lineHeight={appearance?.lineHeight}
            color={appearance?.color}
          >
            {children}
          </StyledNestedListItemText>
        </StyledNestedListItemTextWrapper>
        <StyledNestedListItemIconWrapper
          fontSize={appearance?.fontSize}
          lineHeight={appearance?.lineHeight}
        >
          <StyledNestedListItemIcon
            position="right"
            isOpen={isOpen}
            iconColor={appearance?.rightIconColor}
          >
            {rightIcon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
      </StyledNestedListItem>
    </StyledNestedListItemWrapper>
  );
};
