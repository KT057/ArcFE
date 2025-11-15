import { mergeProps, useObjectRef } from "@react-aria/utils";
import type React from "react";
import { forwardRef, useCallback, useEffect, useId, useState } from "react";
import type { SelectOption } from "../types";
import {
  StyledSelect,
  StyledSelectError,
  StyledSelectField,
  StyledSelectIcon,
  StyledSelectInner,
  StyledSelectLabel,
  StyledSelectWrapper
} from "./styles";

export type SelectVariant = "001" | "002";
export type Type = SelectVariant;

interface SelectProps {
  variant?: SelectVariant;
  name?: string;
  id?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  label?: string;
  ariaLabel?: string;
  icon: React.ReactNode;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  appearance?: {
    fontSize?: number;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
    errorColor?: string;
    errorFontSize?: number;
    errorBorderColor?: string;
    iconColor?: string;
    focusRingColor?: string;
    labelFontSize?: number;
    labelColor?: string;
    labelFontWeight?: number | string;
    labelMarginBottom?: number;
  };
}

export const Select002 = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "001",
      name = "select-002",
      id,
      options,
      value,
      defaultValue,
      onChange,
      error = false,
      errorText,
      placeholder,
      label,
      ariaLabel,
      icon,
      appearance,
      selectProps
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const hasError = error || !!errorText;
    const selectRef = useObjectRef(ref);
    const errorId = `${selectId}-error`;

    const baseSelectProps: React.SelectHTMLAttributes<HTMLSelectElement> = {
      id: selectId,
      name
    };

    if (value !== undefined) {
      baseSelectProps.value = value;
    }

    if (defaultValue !== undefined) {
      baseSelectProps.defaultValue = defaultValue;
    }

    if (onChange) {
      baseSelectProps.onChange = onChange;
    }

    const ariaProps: React.SelectHTMLAttributes<HTMLSelectElement> = {
      "aria-invalid": hasError ? ("true" as const) : undefined,
      "aria-describedby": hasError && errorText ? errorId : undefined,
      "aria-label": label ? undefined : ariaLabel
    };

    const mergedSelectProps = mergeProps(
      baseSelectProps,
      selectProps || {},
      ariaProps
    );

    const getIsPlaceholder = useCallback(
      (current: unknown) => {
        if (!placeholder) {
          return false;
        }
        if (Array.isArray(current)) {
          return current.length === 0 || current.every((item) => item === "");
        }
        return current === "" || current === undefined;
      },
      [placeholder]
    );

    const [isPlaceholderSelected, setIsPlaceholderSelected] = useState(() =>
      getIsPlaceholder(
        mergedSelectProps.value ??
          value ??
          mergedSelectProps.defaultValue ??
          defaultValue ??
          selectProps?.value ??
          selectProps?.defaultValue
      )
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: placeholderは変更しない
    useEffect(() => {
      const currentValue = value ?? defaultValue ?? selectRef.current?.value;
      if (currentValue !== undefined) {
        setIsPlaceholderSelected(getIsPlaceholder(currentValue));
      }
    }, [value, defaultValue, getIsPlaceholder]);

    const { onChange: mergedOnChange, ...restSelectProps } = mergedSelectProps;

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setIsPlaceholderSelected(getIsPlaceholder(event.target.value));
      mergedOnChange?.(event);
    };

    const borderColor = hasError
      ? (appearance?.errorBorderColor ?? "#f00")
      : (appearance?.borderColor ?? "#000");

    return (
      <StyledSelectWrapper>
        <StyledSelect>
          {label && (
            <StyledSelectLabel
              htmlFor={selectId}
              $fontSize={appearance?.labelFontSize}
              $color={appearance?.labelColor}
              $fontWeight={appearance?.labelFontWeight}
              $marginBottom={appearance?.labelMarginBottom}
            >
              {label}
            </StyledSelectLabel>
          )}
          <StyledSelectInner
            $variant={variant}
            $borderColor={borderColor}
            $backgroundColor={appearance?.backgroundColor}
            $focusRingColor={appearance?.focusRingColor}
            onMouseDown={(event) => {
              const element = selectRef.current;
              if (!element) {
                return;
              }

              if (element.contains(event.target as Node)) {
                return;
              }

              event.preventDefault();
              element.focus();

              if ("showPicker" in element) {
                try {
                  (
                    element as HTMLSelectElement & { showPicker: () => void }
                  ).showPicker();
                  return;
                } catch {
                  // fall through to click below
                }
              }

              element.click();
            }}
          >
            <StyledSelectField
              {...restSelectProps}
              ref={selectRef}
              $fontSize={appearance?.fontSize}
              $color={appearance?.color}
              $placeholderColor={appearance?.placeholderColor}
              $hasPlaceholder={isPlaceholderSelected}
              onChange={handleSelectChange}
            >
              {placeholder && (
                <option value="" disabled hidden>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </StyledSelectField>
            <StyledSelectIcon $color={appearance?.iconColor ?? "#000"}>
              {icon}
            </StyledSelectIcon>
          </StyledSelectInner>
          {errorText && (
            <StyledSelectError
              id={errorId}
              $errorColor={appearance?.errorColor ?? "#f00"}
              $errorFontSize={appearance?.errorFontSize ?? 16}
              aria-live="polite"
            >
              {errorText}
            </StyledSelectError>
          )}
        </StyledSelect>
      </StyledSelectWrapper>
    );
  }
);

Select002.displayName = "Select002";
