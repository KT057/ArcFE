import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";

type InputProps = {
  size: Size;
  error: boolean;
};

type InputFieldProps = {
  size: Size;
  fontSize?: number;
  color?: string;
  borderColor?: string;
  placeholderColor?: string;
};

type InputErrorProps = {
  errorColor: string;
  errorFontSize: number;
};

export const StyledInputWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

const defaultFontSize = (size: number | undefined) => size ?? 18;

export const StyledInputField = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "size" &&
    prop !== "fontSize" &&
    prop !== "color" &&
    prop !== "borderColor" &&
    prop !== "placeholderColor"
})<InputFieldProps>`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize(fontSize))};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize(fontSize))};
  color: ${({ color }) => color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
    switch (size) {
      case "small":
        return css`
          padding-top: ${theme.size.customEm(3, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(3, defaultFontSize(fontSize))};
        `;
      case "middle":
        return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize(fontSize))};
        `;
      case "large":
        return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize(fontSize))};
        `;
      default:
        return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize(fontSize))};
        `;
    }
  }}
`;

export const StyledInput = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "error"
})<InputProps>`
  position: relative;
  width: 100%;

  ${({ error }) =>
    error &&
    css`
    ${StyledInputField} {
      border-bottom-color: #f00;
    }

    ${StyledInputError} {
      display: block;
    }
  `}
`;

export const StyledInputError = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})<InputErrorProps>`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
