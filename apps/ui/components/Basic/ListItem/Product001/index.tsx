import type React from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledListItem,
  StyledListItemNumber,
  StyledListItemNumberText,
  StyledListItemText,
  StyledListItemTextWrapper,
  StyledListItemWrapper
} from "./styles";

interface ListItemProps {
  number: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: {
    fontSize?: number;
    color?: string;
    gap?: number;
    numberFontSize?: number;
    numberColor?: string;
    animationColor?: string;
    animationDuration?: string;
    animationEase?: EasingKey;
  };
}

export const ListItem001 = ({
  number,
  children,
  onClick,
  style
}: ListItemProps) => {
  return (
    <StyledListItemWrapper>
      <StyledListItem onClick={onClick} animationColor={style?.animationColor}>
        <StyledListItemNumber fontSize={style?.fontSize}>
          <StyledListItemNumberText
            numberFontSize={style?.numberFontSize}
            numberColor={style?.numberColor}
            animationColor={style?.animationColor}
            animationDuration={style?.animationDuration}
            animationEase={style?.animationEase}
          >
            {number}
          </StyledListItemNumberText>
        </StyledListItemNumber>
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
