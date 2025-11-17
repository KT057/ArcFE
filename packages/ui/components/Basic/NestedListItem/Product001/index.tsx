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
  appearance?: {
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
            isOpen={isOpen}
            iconColor={appearance?.iconColor}
          >
            {icon}
          </StyledNestedListItemIcon>
        </StyledNestedListItemIconWrapper>
        <StyledNestedListItemTextWrapper gap={appearance?.gap}>
          <StyledNestedListItemText
            fontSize={appearance?.fontSize}
            lineHeight={appearance?.lineHeight}
            color={appearance?.color}
          >
            {children}
          </StyledNestedListItemText>
        </StyledNestedListItemTextWrapper>
      </StyledNestedListItem>
    </StyledNestedListItemWrapper>
  );
};
