import styled from "styled-components";

type Direction = "top" | "bottom" | "left" | "right" | "all";

type StyledMaskBgProps = {
  direction: Direction;
  fadeStart: number;
  bgColor: string;
  blurAmount?: number;
};

const generateMaskImage = (direction: Direction, fadeStart: number): string => {
  if (direction === "all") {
    return `radial-gradient(circle, white ${fadeStart}%, transparent 100%)`;
  }

  const oppositeDirection: Record<Direction, Direction> = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
    all: "bottom"
  };

  const gradientDirection = oppositeDirection[direction];
  return `linear-gradient(to ${gradientDirection}, transparent 0%, white ${fadeStart}%)`;
};

export const StyledMaskBg = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "fadeStart", "bgColor", "blurAmount"].includes(prop)
})<StyledMaskBgProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: ${({ bgColor }) => bgColor};
  mask-image: ${({ direction, fadeStart }) => generateMaskImage(direction, fadeStart)};
  -webkit-mask-image: ${({ direction, fadeStart }) => generateMaskImage(direction, fadeStart)};
  ${({ blurAmount }) => blurAmount && `filter: blur(${blurAmount}px);`}
`;
