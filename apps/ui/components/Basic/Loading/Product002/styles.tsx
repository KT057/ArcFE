import styled from "styled-components";
import type { Size } from "../../../../styles/size";

type LoadingProps = {
  size: Size;
  indicatorColor?: string;
  backgroundColor?: string;
};

const LOADING_SIZE: Record<Size, number> = {
  large: 48,
  middle: 42,
  small: 36
};

export const StyledLoadingWrapper = styled.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledLoading = styled.svg.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "size" && prop !== "indicatorColor" && prop !== "backgroundColor"
})<LoadingProps>`
  width: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
  height: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
  
  .indicator {
    fill: ${({ indicatorColor }) => indicatorColor ?? "#fff"};
  }
  
  .background {
    fill: ${({ backgroundColor }) => backgroundColor ?? "#000"};
  }
`;
