import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

type AspectRatio = "16 / 9" | "4 / 3" | "1 / 1" | "3 / 4" | "9 / 16" | "21 / 9";

type StyledLazyImageWrapperProps = {
  isLoaded: boolean;
  duration: number;
  aspectRatio?: AspectRatio;
};

export const StyledLazyImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isLoaded", "duration", "aspectRatio"].includes(prop)
})<StyledLazyImageWrapperProps>`
  position: relative;
  width: 100%;
  height: auto;
  opacity: 0;
  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`}

  ${({ isLoaded, duration }) =>
    isLoaded &&
    css`
      animation: ${fadeIn} ${duration}s ease-in-out forwards;
    `}
`;

type StyledPlaceholderProps = {
  bgColor?: string;
};

export const StyledPlaceholder = styled.div.withConfig({
  shouldForwardProp: (prop) => !["bgColor"].includes(prop)
})<StyledPlaceholderProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor || "#f0f0f0"};
`;
