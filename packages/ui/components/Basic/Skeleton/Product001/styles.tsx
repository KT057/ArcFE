import styled, { keyframes } from "styled-components";

export type Type = "001";

type SkeletonProps = {
  type: Type;
  $width?: string;
  $height?: string;
  $borderRadius?: string;
};

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const StyledSkeleton = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "$width" &&
    prop !== "$height" &&
    prop !== "$borderRadius"
})<SkeletonProps>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "4px"};
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;
