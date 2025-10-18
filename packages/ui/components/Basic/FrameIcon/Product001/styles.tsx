import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { Type } from "./index";

type FrameIconBackground = {
  type: Type;
  backgroundColor: string;
  borderColor: string;
};

type FrameIcon = {
  size: Size;
};

type FrameIconInner = {
  iconColor: string;
};

type FrameIconContent = {
  size: Size;
};

export const StyledFrameIconWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFrameIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<FrameIcon>`
  position: relative;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
      case "middle":
        return css`
          width: ${({ theme }) => theme.size.em(35)};
          height: ${({ theme }) => theme.size.em(35)};
        `;
      case "large":
        return css`
          width: ${({ theme }) => theme.size.em(40)};
          height: ${({ theme }) => theme.size.em(40)};
        `;
      default:
        return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    }
  }}
`;

export const StyledFrameIconBackground = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "borderColor"
})<FrameIconBackground>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  z-index: 0;

  ${({ type }) => {
    switch (type) {
      case "001":
        return css`
          border-radius: 50%;
        `;
      case "002":
        return css`
          border-radius: 0;
        `;
      case "003":
        return css`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
      default:
        return css`
          border-radius: 50%;
        `;
    }
  }}
`;

export const StyledFrameIconInner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor"
})<FrameIconInner>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({ iconColor }) => iconColor};
`;

export const StyledFrameIconContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<FrameIconContent>`
  ${({ theme, size }) => theme.icon.size.style(size)}
`;
