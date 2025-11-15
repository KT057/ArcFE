import { useTextField } from "@react-aria/textfield";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import type React from "react";
import { forwardRef, useId } from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledInput,
  StyledInputError,
  StyledInputField,
  StyledInputLabel,
  StyledInputWrapper
} from "./styles";

interface InputProps {
  size?: Size;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
  inputType?: React.HTMLInputTypeAttribute;
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  id?: string;
  label?: string;
  ariaLabel?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  appearance?: {
    fontSize?: number;
    color?: string;
    borderColor?: string;
    placeholderColor?: string;
    errorColor?: string;
    errorFontSize?: number;
    labelFontSize?: number;
    labelColor?: string;
    labelFontWeight?: number | string;
    labelMarginBottom?: number;
    focusRingColor?: string;
  };
}

export const Input002 = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "small",
      name = "input-002",
      placeholder = "入力してください",
      value,
      defaultValue,
      onChange,
      error = false,
      errorText,
      inputType = "text",
      autoComplete,
      id,
      label,
      ariaLabel,
      appearance,
      inputProps
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);

    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? undefined : ariaLabel,
        validationState: hasError ? "invalid" : undefined,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );

    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;

    const baseInputProps: React.InputHTMLAttributes<HTMLInputElement> = {
      id: inputId,
      name,
      type: inputType,
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

    return (
      <StyledInputWrapper>
        <StyledInput $error={hasError} $size={size}>
          {label && (
            <StyledInputLabel
              {...labelProps}
              $fontSize={appearance?.labelFontSize}
              $color={appearance?.labelColor}
              $fontWeight={appearance?.labelFontWeight}
              $marginBottom={appearance?.labelMarginBottom}
            >
              {label}
            </StyledInputLabel>
          )}
          <StyledInputField
            {...mergedInputProps}
            ref={inputRef}
            $fontSize={appearance?.fontSize}
            $color={appearance?.color}
            $borderColor={appearance?.borderColor}
            $placeholderColor={appearance?.placeholderColor}
            $focusRingColor={appearance?.focusRingColor}
            $size={size}
          />
          {errorText && (
            <StyledInputError
              {...errorMessageProps}
              $errorColor={appearance?.errorColor ?? "#f00"}
              $errorFontSize={appearance?.errorFontSize ?? 16}
              aria-live="polite"
            >
              {errorText || ""}
            </StyledInputError>
          )}
        </StyledInput>
      </StyledInputWrapper>
    );
  }
);

Input002.displayName = "Input002";
