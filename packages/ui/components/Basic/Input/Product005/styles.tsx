import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { InputVariant } from "./index";

type InputProps = {
  $variant: InputVariant;
  $size: Size;
  $error: boolean;
};

type InputFieldProps = {
  $size: Size;
  $fontSize?: number;
  $color?: string;
  $borderColor?: string;
  $backgroundColor?: string;
  $placeholderColor?: string;
  $errorBackgroundColor?: string;
  $focusRingColor?: string;
};

type InputErrorProps = {
  $errorColor: string;
  $errorFontSize: number;
};

export const StyledInputWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

type InputLabelProps = {
  $fontSize?: number;
  $color?: string;
  $fontWeight?: number | string;
  $marginBottom?: number;
};

export const StyledInputLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<InputLabelProps>`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;

const defaultFontSize = (size: number | undefined) => size ?? 18;

export const StyledInputField = styled.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})<InputFieldProps>`
  width: 100%;
  display: block;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
    switch ($size) {
      case "small":
        return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize($fontSize))};
        `;
      case "middle":
        return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize($fontSize))};
        `;
      case "large":
        return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize($fontSize))};
        `;
      default:
        return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize($fontSize))};
        `;
    }
  }}
`;

export const StyledInput = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<InputProps>`
  position: relative;
  width: 100%;

  ${({ $error }) =>
    $error &&
    css`
    ${StyledInputField} {
      background-color: #fdd;
    }
  `}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "001":
        return css`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
      case "002":
        return css`
          ${StyledInputField} {
            border-radius: ${theme.size.em(4)};
          }
        `;
      default:
        return css`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
    }
  }}
`;

export const StyledInputError = styled.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<InputErrorProps>`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
