import type React from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledInput,
  StyledInputError,
  StyledInputField,
  StyledInputFieldWrapper,
  StyledInputIcon,
  StyledInputWrapper
} from "./styles";

export type Type = "001" | "002";
export type IconPosition = "left" | "right";

interface InputProps {
  type: Type;
  size: Size;
  iconPosition?: IconPosition;
  icon: React.ReactNode;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  style?: {
    fontSize?: number;
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
    placeholderColor?: string;
    errorColor?: string;
    errorFontSize?: number;
    errorBorderColor?: string;
  };
}

export const Input006 = ({
  type = "001",
  size = "small",
  iconPosition = "right",
  icon,
  name = "input-006",
  placeholder = "入力してください",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledInput error={error || !!errorText} type={type} size={size}>
        <StyledInputFieldWrapper
          iconPosition={iconPosition}
          borderColor={style?.borderColor}
          backgroundColor={style?.backgroundColor}
          errorBorderColor={style?.errorBorderColor}
        >
          <StyledInputField
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            fontSize={style?.fontSize}
            color={style?.color}
            backgroundColor={style?.backgroundColor}
            placeholderColor={style?.placeholderColor}
            {...inputProps}
            size={size}
            iconPosition={iconPosition}
          />
          <StyledInputIcon iconPosition={iconPosition} size={size}>
            {icon}
          </StyledInputIcon>
        </StyledInputFieldWrapper>
        {errorText && (
          <StyledInputError
            errorColor={style?.errorColor ?? "#f00"}
            errorFontSize={style?.errorFontSize ?? 16}
          >
            {errorText}
          </StyledInputError>
        )}
      </StyledInput>
    </StyledInputWrapper>
  );
};
