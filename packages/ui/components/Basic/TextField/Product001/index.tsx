import { useTextField } from "@react-aria/textfield";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import type React from "react";
import { forwardRef, useId } from "react";
import {
  StyledTextField,
  StyledTextFieldError,
  StyledTextFieldInput,
  StyledTextFieldLabel,
  StyledTextFieldWrapper
} from "./styles";

export type TextFieldVariant = "001" | "002";
export type TextFieldType = TextFieldVariant;

interface TextFieldProps {
  variant?: TextFieldVariant;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  errorText?: string;
  id?: string;
  label?: string;
  ariaLabel?: string;
  autoComplete?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  appearance?: {
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    borderColor?: string;
    placeholderColor?: string;
    focusRingColor?: string;
    errorColor?: string;
    errorFontSize?: number;
    errorBorderColor?: string;
    labelFontSize?: number;
    labelColor?: string;
    labelFontWeight?: number | string;
    labelMarginBottom?: number;
  };
}

export const TextField001 = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      variant = "001",
      name = "text-field-001",
      placeholder = "入力してください",
      value,
      defaultValue,
      onChange,
      error = false,
      errorText,
      id,
      label,
      ariaLabel,
      autoComplete,
      appearance,
      inputProps
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);

    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? undefined : ariaLabel,
        validationState: hasError ? "invalid" : undefined,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );

    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;

    const baseInputProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };

    if (value !== undefined) {
      baseInputProps.value = value;
    }

    if (defaultValue !== undefined) {
      baseInputProps.defaultValue = defaultValue;
    }

    if (onChange) {
      baseInputProps.onChange = onChange;
    }

    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );

    const borderColor = hasError
      ? (appearance?.errorBorderColor ?? "#f00")
      : (appearance?.borderColor ?? "#000");

    return (
      <StyledTextFieldWrapper>
        <StyledTextField>
          {label && (
            <StyledTextFieldLabel
              {...labelProps}
              $fontSize={appearance?.labelFontSize}
              $color={appearance?.labelColor}
              $fontWeight={appearance?.labelFontWeight}
              $marginBottom={appearance?.labelMarginBottom}
            >
              {label}
            </StyledTextFieldLabel>
          )}
          <StyledTextFieldInput
            {...mergedInputProps}
            ref={textareaRef}
            $fontSize={appearance?.fontSize}
            $lineHeight={appearance?.lineHeight}
            $color={appearance?.color}
            $borderColor={borderColor}
            $placeholderColor={appearance?.placeholderColor}
            $variant={variant}
            $focusRingColor={appearance?.focusRingColor}
          />
          {errorText && (
            <StyledTextFieldError
              {...errorMessageProps}
              $fontSize={appearance?.errorFontSize}
              $color={appearance?.errorColor}
              aria-live="polite"
            >
              {errorText || ""}
            </StyledTextFieldError>
          )}
        </StyledTextField>
      </StyledTextFieldWrapper>
    );
  }
);

TextField001.displayName = "TextField001";
