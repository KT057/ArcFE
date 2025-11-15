import styled from "styled-components";

type TextFieldInputProps = {
  $fontSize?: number;
  $lineHeight?: number;
  $color?: string;
  $borderColor?: string;
  $placeholderColor?: string;
  $focusRingColor?: string;
};

type TextFieldErrorProps = {
  $fontSize?: number;
  $color?: string;
};

type TextFieldLabelProps = {
  $fontSize?: number;
  $color?: string;
  $fontWeight?: number | string;
  $marginBottom?: number;
};

export const StyledTextFieldWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextField = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTextFieldLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<TextFieldLabelProps>`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;

const defaultFontSize = (size: number | undefined) => size ?? 18;
const defaultLineHeight = (lineHeight: number | undefined) => lineHeight ?? 1.5;

export const StyledTextFieldInput = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<TextFieldInputProps>`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize($fontSize))};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize($fontSize))} ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize($fontSize))} ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize($fontSize))} * 2);
  resize: vertical;
  background: transparent;
  transition: border-bottom-width 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    border-bottom-width: ${({ theme }) => theme.size.em(0.125)};
    border-bottom-color: ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }
`;

export const StyledTextFieldError = styled.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<TextFieldErrorProps>`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
