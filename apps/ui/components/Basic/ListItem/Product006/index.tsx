import type React from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledListItem,
  StyledListItemFrameNumber,
  StyledListItemFrameNumberWrapper,
  StyledListItemText,
  StyledListItemTextWrapper,
  StyledListItemWrapper
} from "./styles";

interface ListItemProps {
  frameNumber: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  style?: {
    fontSize?: number;
    color?: string;
    gap?: number;
    animationOpacity?: number;
    animationDuration?: string;
    animationEase?: EasingKey;
  };
}

export const ListItem006 = ({
  frameNumber,
  children,
  onClick,
  style
}: ListItemProps) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem
        onClick={onClick}
        animationOpacity={style?.animationOpacity}
        animationDuration={style?.animationDuration}
        animationEase={style?.animationEase}
      >
        <StyledListItemFrameNumberWrapper fontSize={style?.fontSize}>
          <StyledListItemFrameNumber>{frameNumber}</StyledListItemFrameNumber>
        </StyledListItemFrameNumberWrapper>
        <StyledListItemTextWrapper gap={style?.gap}>
          <StyledListItemText fontSize={style?.fontSize} color={style?.color}>
            {children}
          </StyledListItemText>
        </StyledListItemTextWrapper>
      </StyledListItem>
    </StyledListItemWrapper>
  );
};
