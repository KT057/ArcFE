import styled from "styled-components";
import type { Size } from "../../../../styles/size";

interface ToggleProps {
  backgroundColor?: string;
  dotColor?: string;
  lineColor?: string;
  isOpen?: boolean;
}

interface ToggleInnerProps {
  size?: Size;
}

export const StyledToggleWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["backgroundColor", "dotColor", "lineColor", "isOpen"].includes(prop)
})<ToggleProps>`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledToggleInner = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size", "backgroundColor"].includes(prop)
})<ToggleInnerProps & { backgroundColor?: string }>`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  border-radius: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const StyledToggleDotWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop)
})<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => isOpen ? "none" : "flex"};
  align-items: center;
  justify-content: center;
`;

export const StyledToggleDot = styled.span.withConfig({
  shouldForwardProp: (prop) => !["dotColor"].includes(prop)
})<{ dotColor?: string }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  display: block;
  background-color: ${({ dotColor }) => dotColor || "#fff"};

  &:nth-child(2) {
    margin: 0 ${({ theme }) => theme.size.em(2)};
  }
`;

export const StyledToggleCloseWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop)
})<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.size.em(16)};
  height: ${({ theme }) => theme.size.em(16)};
`;

export const StyledToggleLineWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledToggleLine = styled.span.withConfig({
  shouldForwardProp: (prop) => !["lineColor"].includes(prop)
})<{ lineColor?: string }>`
  width: 100%;
  height: ${({ theme }) => theme.size.em(2)};
  display: block;
  background-color: ${({ lineColor }) => lineColor || "#fff"};
  transform-origin: center center;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: ${({ theme }) => theme.size.em(2)};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;