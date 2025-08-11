import type { Size } from "../../../../styles/size";
import {
  StyledInput,
  StyledInputError,
  StyledInputField,
  StyledInputWrapper
} from "./styles";

export type Type = "001" | "002";

interface InputProps {
  type: Type;
  size: Size;
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
    errorBackgroundColor?: string;
  };
}

export const Input005 = ({
  type = "001",
  size = "small",
  name = "input-005",
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
        <StyledInputField
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fontSize={style?.fontSize}
          color={style?.color}
          borderColor={style?.borderColor}
          backgroundColor={style?.backgroundColor}
          placeholderColor={style?.placeholderColor}
          errorBackgroundColor={style?.errorBackgroundColor}
          {...inputProps}
          size={size}
        />
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