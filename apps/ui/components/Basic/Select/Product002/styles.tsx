import styled, { css } from "styled-components";

type SelectProps = {
  error: boolean;
};

type SelectInnerProps = {
  borderColor?: string;
  errorBorderColor?: string;
  backgroundColor?: string;
};

type SelectFieldProps = {
  fontSize?: number;
  color?: string;
  placeholderColor?: string;
  hasPlaceholder?: boolean;
};

type SelectIconProps = {
  color: string;
};

type SelectErrorProps = {
  errorColor: string;
  errorFontSize: number;
};

export const StyledSelectWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledSelectInner = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "borderColor" &&
    prop !== "errorBorderColor" &&
    prop !== "backgroundColor"
})<SelectInnerProps>`
  width: 100%;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
`;

const defaultFontSize = (size: number | undefined) => size ?? 24;

export const StyledSelectField = styled.select.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" &&
    prop !== "color" &&
    prop !== "placeholderColor" &&
    prop !== "hasPlaceholder"
})<SelectFieldProps>`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ color, placeholderColor, hasPlaceholder }) =>
    hasPlaceholder ? (placeholderColor ?? "#909090") : (color ?? "#000")};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize(fontSize))};
  padding: ${({ theme, fontSize }) =>
    `${theme.size.customEm(20, defaultFontSize(fontSize))} ${theme.size.customEm(20, defaultFontSize(fontSize))} ${theme.size.customEm(20, defaultFontSize(fontSize))} ${theme.size.customEm(10, defaultFontSize(fontSize))}`};
  appearance: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const StyledSelectIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})<SelectIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ color }) => color ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;

export const StyledSelect = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error"
})<SelectProps>`
  position: relative;
  width: 100%;

  ${({ error }) =>
    error &&
    css`
    ${StyledSelectInner} {
      border-bottom-color: #f00;
    }

    ${StyledSelectError} {
      display: block;
    }
  `}
`;

export const StyledSelectError = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})<SelectErrorProps>`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
