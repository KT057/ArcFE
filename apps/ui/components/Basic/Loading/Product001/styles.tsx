import styled from "styled-components";
import type { Size } from "../../../../styles/size";

export type Type = "001";

type LoadingProps = {
  type: Type;
  size: Size;
  color?: string;
};

const LOADING_SIZE: Record<Size, number> = {
  large: 52,
  middle: 44,
  small: 37
};

export const StyledLoadingWrapper = styled.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledLoading = styled.svg.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" && prop !== "size" && prop !== "color"
})<LoadingProps>`
  fill: ${({ color }) => color ?? "#000"};
  width: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
  height: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
`;
