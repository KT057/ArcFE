import type React from "react";
import type { SelectOption } from "../types";
import {
  StyledSelect,
  StyledSelectError,
  StyledSelectField,
  StyledSelectIcon,
  StyledSelectInner,
  StyledSelectWrapper
} from "./styles";

interface SelectProps {
  name?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  icon: React.ReactNode;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  style?: {
    fontSize?: number;
    color?: string;
    borderColor?: string;
    placeholderColor?: string;
    backgroundColor?: string;
    errorColor?: string;
    errorFontSize?: number;
    errorBorderColor?: string;
    iconColor?: string;
  };
}

export const Select002 = ({
  name = "select-002",
  options,
  value,
  onChange,
  error = false,
  errorText,
  placeholder,
  icon,
  style,
  selectProps
}: SelectProps) => {
  return (
    <StyledSelectWrapper>
      <StyledSelect error={error || !!errorText}>
        <StyledSelectInner
          borderColor={style?.borderColor}
          errorBorderColor={style?.errorBorderColor}
          backgroundColor={style?.backgroundColor}
        >
          <StyledSelectField
            name={name}
            value={value}
            onChange={onChange}
            fontSize={style?.fontSize}
            color={style?.color}
            placeholderColor={style?.placeholderColor}
            hasPlaceholder={!value || value === ""}
            {...selectProps}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledSelectField>
          <StyledSelectIcon color={style?.iconColor ?? "#000"}>
            {icon}
          </StyledSelectIcon>
        </StyledSelectInner>
        {errorText && (
          <StyledSelectError
            errorColor={style?.errorColor ?? "#f00"}
            errorFontSize={style?.errorFontSize ?? 16}
          >
            {errorText}
          </StyledSelectError>
        )}
      </StyledSelect>
    </StyledSelectWrapper>
  );
};
