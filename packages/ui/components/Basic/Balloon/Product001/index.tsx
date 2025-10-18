import type { ReactNode } from "react";
import {
  type ArrowPosition,
  StyledBalloon,
  StyledBalloonArrow,
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
    color?: string;
    fontSize?: number;
  };
}

export const Balloon001 = ({
  type = "001",
  children,
  style,
  arrowPosition
}: BalloonProps) => {
  return (
    <StyledBalloonWrapper>
      <StyledBalloon
        type={type}
        backgroundColor={style?.backgroundColor ?? "#ccc"}
      >
        <StyledBalloonContent
          fontSize={style?.fontSize ?? 16}
          color={style?.color ?? "#000"}
        >
          {children}
        </StyledBalloonContent>
        <StyledBalloonArrow
          arrowPosition={arrowPosition ?? "bottom"}
          backgroundColor={style?.backgroundColor ?? "#ccc"}
        />
      </StyledBalloon>
    </StyledBalloonWrapper>
  );
};
