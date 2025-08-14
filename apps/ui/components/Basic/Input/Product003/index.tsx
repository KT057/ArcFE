import type { Size } from "../../../../styles/size";
import {
  StyledInput,
  StyledInputError,
  StyledInputField,
  StyledInputWrapper
} from "./styles";

interface InputProps {
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

export const Input003 = ({
  size = "small",
  name = "input-003",
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
      <StyledInput error={error || !!errorText} size={size}>
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
