import styled, { css } from "styled-components";
import type { ScrollRevealAnimationType } from "./index";

type StyledScrollRevealWrapperProps = {
  $isVisible: boolean;
  $type: ScrollRevealAnimationType;
  $duration: number;
  $delay: number;
  $distance: number;
};

const getInitialTransform = (type: ScrollRevealAnimationType, distance: number): string => {
  switch (type) {
    case "fadeUp":
      return `translateY(${distance}px)`;
    case "fadeIn":
      return "none";
    case "slideLeft":
      return `translateX(${distance}px)`;
    case "slideRight":
      return `translateX(-${distance}px)`;
    default:
      return "none";
  }
};

export const StyledScrollRevealWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["$isVisible", "$type", "$duration", "$delay", "$distance"].includes(prop)
})<StyledScrollRevealWrapperProps>`
  opacity: 0;
  transform: ${({ $type, $distance }) => getInitialTransform($type, $distance)};
  transition: opacity ${({ $duration }) => $duration}s ease-out,
    transform ${({ $duration }) => $duration}s ease-out;
  transition-delay: ${({ $delay }) => $delay}s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0) translateX(0);
    `}
`;
