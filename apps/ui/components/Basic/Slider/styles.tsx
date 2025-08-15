import styled, { css } from "styled-components";

export const StyledSliderWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  position: relative;
`;

export const StyledArrow = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "direction" &&
    prop !== "disabled" &&
    prop !== "size" &&
    prop !== "position"
})<{
  direction: "left" | "right";
  disabled: boolean;
  size: number | undefined;
  position: number | undefined;
  color: string | undefined;
  hoverColor: string | undefined;
  disableOpacity: number | undefined;
}>`
  position: relative;
  width: ${({ theme, size }) => theme.size.em(size ?? 40)};
  height: ${({ theme, size }) => theme.size.em(size ?? 40)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color }) => color ?? "#fff"};
  cursor: pointer;
  transition: color 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  ${({ direction, position }) =>
    direction === "left"
      ? css`
          left: ${({ theme }) => theme.size.em(position ?? 0)};
        `
      : css`
          right: ${({ theme }) => theme.size.em(position ?? 0)};
        `}

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#000"};
  }

  ${({ disabled, disableOpacity = 0.5 }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: ${disableOpacity};
      pointer-events: none;
    `}
`;

export const StyledDotsWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{
  gap: number | undefined;
  marginTop: number | undefined;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 10)};
  margin-top: ${({ theme, marginTop }) => theme.size.em(marginTop ?? 20)};
`;

export const StyledDot = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "active" &&
    prop !== "size" &&
    prop !== "backgroundColor" &&
    prop !== "borderColor" &&
    prop !== "activeBackgroundColor" &&
    prop !== "activeBorderColor"
})<{
  active: boolean;
  size: number | undefined;
  backgroundColor: string | undefined;
  borderColor: string | undefined;
  activeBackgroundColor: string | undefined;
  activeBorderColor: string | undefined;
}>`
  width: ${({ theme, size }) => theme.size.em(size ?? 10)};
  height: ${({ theme, size }) => theme.size.em(size ?? 10)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  cursor: pointer;
  border-radius: 50%;

  ${({ active, activeBackgroundColor, activeBorderColor }) =>
    active &&
    css`
      background-color: ${activeBackgroundColor ?? "#000"};
      border-color: ${activeBorderColor ?? "#000"};
    `}
`;
