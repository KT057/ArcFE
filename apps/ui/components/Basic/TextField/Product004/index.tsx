import type React from "react";
import { useState } from "react";
import {
  StyledTextField,
  StyledTextFieldError,
  StyledTextFieldInput,
  StyledTextFieldWrapper
} from "./styles";

export type TextFieldType = "001" | "002";

interface TextFieldProps {
  type?: TextFieldType;
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
    backgroundColor?: string;
    placeholderColor?: string;
    errorStyle?: {
      fontSize?: number;
      color?: string;
      backgroundColor?: string;
    };
  };
}

export const TextField004 = ({
  type = "001",
  name = "text-field-004",
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
          backgroundColor={
            hasError
              ? (style?.errorStyle?.backgroundColor ?? "#fdd")
              : (style?.backgroundColor ?? "#eee")
          }
          placeholderColor={style?.placeholderColor}
          inputType={type}
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