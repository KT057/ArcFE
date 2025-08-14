import styled, { css } from "styled-components";

export type Type = "001" | "002";
export type ArrowPosition = "top" | "bottom" | "left" | "right";

type BalloonProps = {
  type: Type;
  backgroundColor: string;
};

type BalloonArrowProps = {
  arrowPosition: ArrowPosition;
  backgroundColor: string;
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
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "type"
})<BalloonProps>`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ theme }) => theme.size.em(8)};

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
`;

export const StyledBalloonContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<BalloonContentProps>`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color }) => color};
`;

export const StyledBalloonArrow = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "arrowPosition" && prop !== "backgroundColor"
})<BalloonArrowProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ arrowPosition, backgroundColor }) => {
    switch (arrowPosition) {
      case "bottom":
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: ${backgroundColor} transparent transparent transparent;
        `;
      case "top":
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent ${backgroundColor};
        `;
      case "left":
        return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: transparent ${backgroundColor} transparent transparent;
        `;
      case "right":
        return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent transparent ${backgroundColor};
        `;
    }
  }}
`;
