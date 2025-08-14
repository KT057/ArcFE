import styled, { css, keyframes } from "styled-components";

type ToggleInnerProps = {
  isOpen: boolean;
};

type ToggleLineProps = {
  lineColor?: string;
};

const scaleOut = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const StyledToggleWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledToggle = styled.div`
  display: block;
`;

export const StyledToggleInner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen"
})<ToggleInnerProps>`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  position: relative;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      ${StyledToggleOpenLine} {
        &:nth-child(1) {
          animation: ${scaleOut} 0.15s ease forwards;
        }
        &:nth-child(2) {
          animation: ${scaleOut} 0.15s 0.15s ease forwards;
        }
        &:nth-child(3) {
          animation: ${scaleOut} 0.15s 0.3s ease forwards;
        }
      }

      ${StyledToggleCloseLine}::after {
        animation: ${scaleIn} 0.15s 0.45s ease forwards;
      }
    `}

  ${({ isOpen }) =>
    !isOpen &&
    css`
      ${StyledToggleCloseLine}::after {
        animation: ${scaleOut} 0.15s ease forwards;
      }

      ${StyledToggleOpenLine} {
        transform: scaleX(0);
        animation: ${scaleIn} 0.15s 0.15s ease forwards;
      }
    `}
`;

export const StyledToggleOpen = styled.div`
  width: ${({ theme }) => theme.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.em(3)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledToggleOpenLine = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})<ToggleLineProps>`
  width: 100%;
  height: ${({ theme }) => theme.size.em(2)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
  transform-origin: left;
`;

export const StyledToggleCloseWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledToggleClose = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledToggleCloseLine = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})<ToggleLineProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ theme }) => theme.size.em(28)};
  height: ${({ theme }) => theme.size.em(2)};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ lineColor }) => lineColor ?? "#000"};
    transform: scale(0);
  }

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);

    &::after {
      transform-origin: right;
    }
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);

    &::after {
      transform-origin: left;
    }
  }
`;
