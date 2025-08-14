import type React from "react";
import { useState } from "react";
import {
  StyledTextField,
  StyledTextFieldError,
  StyledTextFieldInput,
  StyledTextFieldWrapper
} from "./styles";

interface TextFieldProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorText?: string;
  style?: {
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    borderColor?: string;
    placeholderColor?: string;
    errorStyle?: {
      fontSize?: number;
      color?: string;
      borderColor?: string;
    };
  };
}

export const TextField002 = ({
  name = "text-field-002",
  placeholder = "入力してください",
  value,
  onChange,
  error = false,
  errorText,
  style
}: TextFieldProps) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const hasError = error || !!errorText;

  return (
    <StyledTextFieldWrapper>
      <StyledTextField hasError={hasError}>
        <StyledTextFieldInput
          name={name}
          placeholder={placeholder}
          value={currentValue}
          onChange={handleChange}
          fontSize={style?.fontSize}
          lineHeight={style?.lineHeight}
          color={style?.color}
          borderColor={
            hasError
              ? (style?.errorStyle?.borderColor ?? "#f00")
              : (style?.borderColor ?? "#000")
          }
          placeholderColor={style?.placeholderColor}
        />
        {errorText && (
          <StyledTextFieldError
            fontSize={style?.errorStyle?.fontSize}
            color={style?.errorStyle?.color}
          >
            {errorText}
          </StyledTextFieldError>
        )}
      </StyledTextField>
    </StyledTextFieldWrapper>
  );
};
