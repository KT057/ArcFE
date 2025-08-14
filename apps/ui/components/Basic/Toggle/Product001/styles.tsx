import styled from "styled-components";

type ToggleOpenProps = {
  animationBackgroundColorBefore?: string;
  animationBackgroundColorAfter?: string;
};

type ToggleLineProps = {
  lineColor?: string;
};

type ToggleCloseLineProps = {
  lineColor?: string;
  animationBackgroundColorLine?: string;
};

export const StyledToggleWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

// Open State (Hamburger Menu)
export const StyledToggleOpen = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "animationBackgroundColorBefore" &&
    prop !== "animationBackgroundColorAfter"
})<ToggleOpenProps>`
  position: relative;
  width: ${({ theme }) => theme.size.em(80)};
  height: ${({ theme }) => theme.size.em(80)};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ animationBackgroundColorBefore }) => animationBackgroundColorBefore ?? "#d9d9d9"};
    opacity: 0;
    transform: scale(1.2);
    transition:
      opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ animationBackgroundColorAfter }) => animationBackgroundColorAfter ?? "#fff"};
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    backface-visibility: hidden;
  }

  &:hover {
    &::before {
      opacity: 0.8;
      transform: scale(1);
    }

    &::after {
      transform: scale(0.8);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
    }
  }
`;

export const StyledToggleOpenInner = styled.div`
  width: ${({ theme }) => theme.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.em(5)};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledToggleOpenLine = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})<ToggleLineProps>`
  width: 100%;
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
`;

// Close State (X Mark)
export const StyledToggleClose = styled.div`
  width: ${({ theme }) => theme.size.em(80)};
  height: ${({ theme }) => theme.size.em(80)};
  cursor: pointer;
  display: block;
  position: relative;
`;

export const StyledToggleCloseInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledToggleCloseContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledToggleCloseLineWrapper = styled.div`
  position: relative;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
`;

export const StyledToggleCloseLine = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "lineColor" && prop !== "animationBackgroundColorLine"
})<ToggleCloseLineProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: ${({ theme }) => theme.size.em(28)};
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ animationBackgroundColorLine }) => animationBackgroundColorLine ?? "#ccc"};
    transform: scale(0);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${StyledToggleCloseInner}:hover & {
    &::after {
      transform: scale(1);
    }
  }
`;
