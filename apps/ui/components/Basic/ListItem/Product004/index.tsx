import type React from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemIconWrapper,
  StyledListItemText,
  StyledListItemTextWrapper,
  StyledListItemWrapper
} from "./styles";

interface ListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  style?: {
    fontSize?: number;
    color?: string;
    gap?: number;
    iconColor?: string;
    animationColor?: string;
    animationDuration?: string;
    animationEase?: EasingKey;
    animationIconColor?: string;
  };
}

export const ListItem004 = ({
  icon,
  children,
  onClick,
  style
}: ListItemProps) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem
        onClick={onClick}
        animationColor={style?.animationColor}
        animationIconColor={style?.animationIconColor}
      >
        <StyledListItemIconWrapper fontSize={style?.fontSize}>
          <StyledListItemIcon
            iconColor={style?.iconColor}
            animationIconColor={style?.animationIconColor}
            animationDuration={style?.animationDuration}
            animationEase={style?.animationEase}
          >
            {icon}
          </StyledListItemIcon>
        </StyledListItemIconWrapper>
        <StyledListItemTextWrapper gap={style?.gap}>
          <StyledListItemText
            fontSize={style?.fontSize}
            color={style?.color}
            animationColor={style?.animationColor}
            animationDuration={style?.animationDuration}
            animationEase={style?.animationEase}
          >
            {children}
          </StyledListItemText>
        </StyledListItemTextWrapper>
      </StyledListItem>
    </StyledListItemWrapper>
  );
};