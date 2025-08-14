import styled, { css } from "styled-components";

export type TextFieldType = "001" | "002";

type TextFieldProps = {
  hasError: boolean;
};

type TextFieldInputProps = {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  placeholderColor?: string;
  inputType: TextFieldType;
};

type TextFieldErrorProps = {
  fontSize?: number;
  color?: string;
};

export const StyledTextFieldWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextField = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})<TextFieldProps>`
  position: relative;
  width: 100%;
`;

export const StyledTextFieldInput = styled.textarea.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" &&
    prop !== "lineHeight" &&
    prop !== "color" &&
    prop !== "borderColor" &&
    prop !== "backgroundColor" &&
    prop !== "placeholderColor" &&
    prop !== "inputType"
})<TextFieldInputProps>`
  width: 100%;
  display: block;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  padding: ${({ theme, fontSize }) => theme.size.em((10 / (fontSize ?? 18)) * 10)};
  color: ${({ color }) => color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em((10 / (fontSize ?? 18)) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em((10 / (fontSize ?? 18)) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em((10 / (fontSize ?? 18)) * 10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }

  ${({ inputType }) =>
    inputType === "001" &&
    css`
      border-radius: 0;
    `}

  ${({ inputType }) =>
    inputType === "002" &&
    css`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;

export const StyledTextFieldError = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<TextFieldErrorProps>`
  color: ${({ color }) => color ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 16)) * 10)} 0 0;
  line-height: 1;
`;
