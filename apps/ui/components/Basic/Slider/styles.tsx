import styled, { css } from "styled-components";

export const StyledSliderWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  position: relative;
`;

export const StyledArrow = styled.div<{
  direction: "left" | "right";
}>`
  position: relative;
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  ${({ direction }) =>
    direction === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;
