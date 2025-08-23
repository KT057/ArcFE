import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";
import type { AnimationType } from ".";

export const StyledBgImageContentWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledBgImageContentInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInOutSine};
`;

export const StyledBgImageContentContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "height",
      "imageUrl",
      "scale",
      "animationType",
      "duration",
      "easing"
    ].includes(prop)
})<{
  height: number | undefined;
  imageUrl: string | undefined;
  scale: number | undefined;
  animationType: AnimationType | undefined;
  duration: number | undefined;
  easing: EasingKey | undefined;
}>`
  width: 100%;
  height: ${({ theme, height }) => theme.size.em(height || 17)};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
    background-size: cover;
    z-index: 0;
    transform: scale(1);
    transition: transform ${({ duration }) => duration || 0.3}s ${({ theme, easing }) => theme.animation.easing[easing || "easeInOutSine"]};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity ${({ duration }) => duration || 0.3}s ${({ theme, easing }) => theme.animation.easing[easing || "easeInOutSine"]};
  }

  ${({ animationType, scale }) =>
    (animationType === "001" || animationType === undefined) &&
    css`
      &:hover {
        &::before {
          transform: scale(${scale || 1.1});
        }
      }
    `}

  ${({ animationType, scale }) =>
    animationType === "002" &&
    css`
      &:hover {
        &::before {
          transform: scale(${scale || 1.1});
        }

        &::after {
          opacity: 0;
        }

        ${StyledBgImageContentInner} {
          opacity: 0;
        }
      }
    `}
`;
