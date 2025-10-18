import styled, { css } from "styled-components";

export type Type = "001" | "002";
export type ArrowPosition = "top" | "bottom" | "left" | "right";

type BalloonProps = {
  type: Type;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  arrowPosition: ArrowPosition;
};

type BalloonContentProps = {
  fontSize: number;
  color: string;
};

export const StyledBalloonWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledBalloon = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" &&
    prop !== "type" &&
    prop !== "borderColor" &&
    prop !== "borderWidth"
})<BalloonProps>`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ theme, borderWidth }) => theme.size.em(borderWidth)} solid ${({ borderColor }) => borderColor};
  padding: ${({ theme }) => theme.size.em(8)};

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 1;
  }

  &::after {
    background-color: ${({ borderColor }) => borderColor};
    z-index: 0;
  }

  ${({ type }) => {
    switch (type) {
      case "001":
        return css`
          border-radius: 0;
        `;
      case "002":
        return css`
          border-radius: ${({ theme }) => theme.size.em(8)};
        `;
    }
  }}

  ${({ arrowPosition, borderWidth }) => {
    switch (arrowPosition) {
      case "bottom":
        return css`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            bottom: ${({ theme }) => theme.size.em(-15)};
            width: ${({ theme }) => theme.size.em(30)};
            height: ${({ theme }) => theme.size.em(15)};
            clip-path: polygon(0 0, 100% 0, 50% 100%);
          }

          &::before {
            bottom: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
      case "top":
        return css`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            top: ${({ theme }) => theme.size.em(-15)};
            width: ${({ theme }) => theme.size.em(30)};
            height: ${({ theme }) => theme.size.em(15)};
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
          }

          &::before {
            top: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
      case "left":
        return css`
          &::before,
          &::after {
            left: ${({ theme }) => theme.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({ theme }) => theme.size.em(15)};
            height: ${({ theme }) => theme.size.em(30)};
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
          }

          &::before {
            left: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
      case "right":
        return css`
          &::before,
          &::after {
            right: ${({ theme }) => theme.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({ theme }) => theme.size.em(15)};
            height: ${({ theme }) => theme.size.em(30)};
            clip-path: polygon(0 0, 100% 50%, 0 100%);
          }

          &::before {
            right: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
    }
  }}
`;

export const StyledBalloonContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<BalloonContentProps>`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color }) => color};
`;
