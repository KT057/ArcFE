import type React from "react";
import { StyledMaskBg } from "./styles";

type Direction = "top" | "bottom" | "left" | "right" | "all";

type Props = {
  direction: Direction;
  fadeStart?: number;
  bgColor: string;
  blurAmount?: number;
  children?: React.ReactNode;
};

export const BlurBg = ({
  direction,
  fadeStart = 10,
  bgColor,
  blurAmount,
  children
}: Props) => {
  return (
    <StyledMaskBg
      direction={direction}
      fadeStart={fadeStart}
      bgColor={bgColor}
      blurAmount={blurAmount}
    >
      {children}
    </StyledMaskBg>
  );
};
