import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

export const StyledToggleContent = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "isOpen" && prop !== "duration" && prop !== "easing"
})<{
  isOpen: boolean;
  duration: string | undefined;
  easing: EasingKey | undefined;
}>`
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ duration }) => duration ?? "0.3s"} ${({ easing, theme }) => theme.animation.easing[easing ?? "easeInSine"]};  

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
