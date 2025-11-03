import styled, { css } from "styled-components";
import type { EasingKey } from "../../../../styles/easing";

export const StyledWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledHeader = styled.header.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "height" &&
    prop !== "backgroundColor" &&
    prop !== "animationBackgroundColor" &&
    prop !== "showModal" &&
    prop !== "easing" &&
    prop !== "duration" &&
    prop !== "sidePadding"
})<{
  height: number;
  backgroundColor: string | undefined;
  animationBackgroundColor: string | undefined;
  showModal: boolean | undefined;
  easing: EasingKey | undefined;
  duration: string | undefined;
  sidePadding: number | undefined;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ height, theme }) => theme.size.em(height)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ sidePadding, theme }) => (sidePadding !== undefined ? theme.size.em(sidePadding) : theme.size.em(20))};
  z-index: 100;
  transition: background-color ${({ duration }) => duration ?? "0.3s"} ${({ theme, easing }) => theme.animation.easing[easing ?? "easeInCubic"]};

  ${({ showModal, animationBackgroundColor }) =>
    showModal &&
    css`
      background-color: ${animationBackgroundColor ?? "transparent"};
    `}
`;

export const StyledHeaderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledLeftWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{ gap: number | undefined }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;

export const StyledRightWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{ gap: number | undefined }>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;

export const StyledModalWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "showModal"
})<{
  height: number;
  showModal: boolean | undefined;
}>`
  position: fixed;
  top: ${({ height, theme }) => theme.size.em(height)};
  left: 0;
  width: 100%;
  height: calc(100% - ${({ height, theme }) => theme.size.em(height)});
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ showModal }) =>
    showModal &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
