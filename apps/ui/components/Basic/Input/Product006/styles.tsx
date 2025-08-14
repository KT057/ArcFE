import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { IconPosition, Type } from "./index";

type InputProps = {
  type: Type;
  size: Size;
  error: boolean;
};

type InputFieldWrapperProps = {
  iconPosition: IconPosition;
  borderColor?: string;
  backgroundColor?: string;
  errorBorderColor?: string;
};

type InputFieldProps = {
  size: Size;
  iconPosition: IconPosition;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  placeholderColor?: string;
};

type InputIconProps = {
  size: Size;
  iconPosition: IconPosition;
};

type InputErrorProps = {
  errorColor: string;
  errorFontSize: number;
};

export const StyledInputWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledInputFieldWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "iconPosition" &&
    prop !== "borderColor" &&
    prop !== "backgroundColor" &&
    prop !== "errorBorderColor"
})<InputFieldWrapperProps>`
  position: relative;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};

  ${({ iconPosition, theme }) => {
    switch (iconPosition) {
      case "right":
        return css`
          padding-right: ${theme.size.em(40)};
        `;
      case "left":
        return css`
          padding-left: ${theme.size.em(40)};
        `;
      default:
        return css`
          padding-right: ${theme.size.em(40)};
        `;
    }
  }}
`;

const defaultFontSize = (size: number | undefined) => size ?? 18;

export const StyledInputField = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "size" &&
    prop !== "iconPosition" &&
    prop !== "fontSize" &&
    prop !== "color" &&
    prop !== "backgroundColor" &&
    prop !== "placeholderColor"
})<InputFieldProps>`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize(fontSize))};
  color: ${({ color }) => color ?? "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

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
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
    }
  }}

  ${({ iconPosition, theme }) => {
    switch (iconPosition) {
      case "right":
        return css`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
      case "left":
        return css`
          padding-left: 0;
          padding-right: ${theme.size.em(10)};
        `;
      default:
        return css`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
    }
  }}
`;

export const StyledInputIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition"
})<InputIconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme, size }) => theme.icon.size.style(size)}

  ${({ iconPosition, theme }) => {
    switch (iconPosition) {
      case "right":
        return css`
          right: ${theme.size.em(5)};
        `;
      case "left":
        return css`
          left: ${theme.size.em(5)};
        `;
      default:
        return css`
          right: ${theme.size.em(5)};
        `;
    }
  }}
`;

export const StyledInput = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "type" && prop !== "size" && prop !== "error"
})<InputProps>`
  position: relative;
  width: 100%;

  ${({ error }) =>
    error &&
    css`
    ${StyledInputFieldWrapper} {
      border-color: #f00;
    }

    ${StyledInputError} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
    switch (type) {
      case "001":
        return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
      case "002":
        return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField} {
            border-radius: ${theme.size.em(4)};
          }
        `;
      default:
        return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
    }
  }}
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
