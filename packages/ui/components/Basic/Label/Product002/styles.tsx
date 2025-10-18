import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { IconPosition, Type } from "./index";

type LabelProps = {
  type: Type;
  size: Size;
  iconPosition: IconPosition;
  fontSize?: number;
  backgroundColor?: string;
  borderColor?: string;
};

type LabelIconProps = {
  iconPosition: IconPosition;
  color?: string;
  size: Size;
};

type LabelTextProps = {
  iconPosition: IconPosition;
  fontSize?: number;
  color?: string;
};

export const StyledLabelWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

const defaultFontSize = (size: number | undefined) => size ?? 12;

export const StyledLabel = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" &&
    prop !== "size" &&
    prop !== "iconPosition" &&
    prop !== "fontSize" &&
    prop !== "backgroundColor" &&
    prop !== "borderColor"
})<LabelProps>`
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#000"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme, fontSize }) => theme.size.customEm(2, defaultFontSize(fontSize))};

  ${({ type, theme, fontSize }) => {
    switch (type) {
      case "001":
        return css`
          border-radius: 0;
        `;
      case "002":
        return css`
          border-radius: ${theme.size.customEm(5, defaultFontSize(fontSize))};
        `;
      case "003":
        return css`
          border-radius: ${theme.size.customEm(21, defaultFontSize(fontSize))};
        `;
      default:
        return css`
          border-radius: 0;
        `;
    }
  }}

  ${({ size, theme, fontSize }) => {
    switch (size) {
      case "small":
        return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize(fontSize))};
        `;
      case "middle":
        return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize(fontSize))};
        `;
      case "large":
        return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize(fontSize))};
        `;
      default:
        return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize(fontSize))};
        `;
    }
  }}
`;

export const StyledLabelIcon = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "iconPosition" && prop !== "color" && prop !== "size"
})<LabelIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color ?? "#fff"};

  ${({ theme, size }) => theme.icon.size.style(size)}

  ${({ iconPosition }) => {
    switch (iconPosition) {
      case "left":
        return css`
          order: 1;
        `;
      case "right":
        return css`
          order: 2;
        `;
      default:
        return css`
          order: 1;
        `;
    }
  }}
`;

export const StyledLabelText = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "iconPosition" && prop !== "fontSize" && prop !== "color"
})<LabelTextProps>`
  color: ${({ color }) => color ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize(fontSize))};
  line-height: 1;

  ${({ iconPosition }) => {
    switch (iconPosition) {
      case "left":
        return css`
          order: 2;
        `;
      case "right":
        return css`
          order: 1;
        `;
      default:
        return css`
          order: 2;
        `;
    }
  }}
`;
