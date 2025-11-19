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
  appearance?: {
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
  appearance,
  arrowPosition
}: BalloonProps) => {
  return (
    <StyledBalloonWrapper>
      <StyledBalloon
        type={type}
        borderColor={appearance?.borderColor ?? "#000"}
        borderWidth={appearance?.borderWidth ?? 1}
        arrowPosition={arrowPosition ?? "bottom"}
        backgroundColor={appearance?.backgroundColor ?? "#fff"}
      >
        <StyledBalloonContent
          fontSize={appearance?.fontSize ?? 16}
          color={appearance?.color ?? "#000"}
        >
          {children}
        </StyledBalloonContent>
      </StyledBalloon>
    </StyledBalloonWrapper>
  );
};
