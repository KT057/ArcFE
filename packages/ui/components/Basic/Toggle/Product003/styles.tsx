import styled from "styled-components";

type ToggleLineProps = {
  lineColor?: string;
};

export const StyledToggleWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledToggle = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})<{ backgroundColor?: string }>`
  width: ${({ theme }) => theme.size.em(60)};
  height: ${({ theme }) => theme.size.em(60)};
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "transparent"};
`;

export const StyledToggleInner = styled.span`
  width: ${({ theme }) => theme.size.em(50)};
  height: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
`;

export const StyledToggleOpenLineWrapper = styled.span`
  width: 100%;
  height: 1px;
  transition: opacity 0.2s ${({ theme }) => theme.animation.easing.easeInSine};
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  display: block;

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const StyledToggleCloseLineWrapper = styled.span`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;

  &:nth-child(1) {
    transform: translate(-50%, calc(-50% + ${({ theme }) => theme.size.em(5)}));
  }

  &:nth-child(2) {
    transform: translate(-50%, calc(-50% + ${({ theme }) => theme.size.em(-5)}));
  }
`;

export const StyledToggleLine = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})<ToggleLineProps>`
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
`;
