import styled from "styled-components";

type TextFieldProps = {
  hasError: boolean;
};

type TextFieldInputProps = {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  borderColor?: string;
  placeholderColor?: string;
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
    prop !== "placeholderColor"
})<TextFieldInputProps>`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding: ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)} ${({ theme, fontSize }) => theme.size.em((10 / (fontSize ?? 18)) * 10)} ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)};
  color: ${({ color }) => color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)} * 2);
  resize: vertical;
  background: transparent;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledTextFieldError = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<TextFieldErrorProps>`
  color: ${({ color }) => color ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 16)) * 10)} 0 0;
  line-height: 1;
`;
