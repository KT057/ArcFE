import type { ReactNode } from "react";
import {
  type ArrowPosition,
  StyledBalloon,
  StyledBalloonContent,
  StyledBalloonWrapper,
  type Type
} from "./styles";

interface BalloonProps {
  type?: Type;
  children: ReactNode;
  arrowPosition?: ArrowPosition;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    color?: string;
    fontSize?: number;
  };
}

export const Balloon002 = ({
  type = "001",
  children,
  style,
  arrowPosition
}: BalloonProps) => {
  return (
    <StyledBalloonWrapper>
      <StyledBalloon
        type={type}
        borderColor={style?.borderColor ?? "#000"}
        borderWidth={style?.borderWidth ?? 1}
        arrowPosition={arrowPosition ?? "bottom"}
        backgroundColor={style?.backgroundColor ?? "#fff"}
      >
        <StyledBalloonContent
          fontSize={style?.fontSize ?? 16}
          color={style?.color ?? "#000"}
        >
          {children}
        </StyledBalloonContent>
      </StyledBalloon>
    </StyledBalloonWrapper>
  );
};
