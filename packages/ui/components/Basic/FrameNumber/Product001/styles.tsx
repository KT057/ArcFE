import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { Type } from "./index";

type FrameNumberBackground = {
  type: Type;
  backgroundColor: string;
  borderColor: string;
};

type FrameNumber = {
  size: Size;
};

type FrameNumberInner = {
  color: string;
  size: Size;
};

export const StyledFrameNumberWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFrameNumber = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<FrameNumber>`
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

export const StyledFrameNumberBackground = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "borderColor"
})<FrameNumberBackground>`
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

export const StyledFrameNumberInner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color" && prop !== "size"
})<FrameNumberInner>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({ color }) => color};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
      case "middle":
        return css`
          font-size: ${({ theme }) => theme.size.em(18)};
        `;
      case "large":
        return css`
          font-size: ${({ theme }) => theme.size.em(24)};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
    }
  }}
`;
