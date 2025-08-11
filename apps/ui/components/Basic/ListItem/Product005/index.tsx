import type React from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledListItem,
  StyledListItemPoint,
  StyledListItemPointWrapper,
  StyledListItemText,
  StyledListItemTextWrapper,
  StyledListItemWrapper
} from "./styles";

interface ListItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: {
    fontSize?: number;
    color?: string;
    gap?: number;
    pointSize?: number;
    pointColor?: string;
    animationColor?: string;
    animationDuration?: string;
    animationEase?: EasingKey;
    animationPointColor?: string;
  };
}

export const ListItem005 = ({
  children,
  onClick,
  style
}: ListItemProps) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem
        onClick={onClick}
        animationColor={style?.animationColor}
        animationPointColor={style?.animationPointColor}
      >
        <StyledListItemPointWrapper fontSize={style?.fontSize}>
          <StyledListItemPoint
            pointSize={style?.pointSize}
            pointColor={style?.pointColor}
            animationPointColor={style?.animationPointColor}
            animationDuration={style?.animationDuration}
            animationEase={style?.animationEase}
          />
        </StyledListItemPointWrapper>
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