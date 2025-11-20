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

export type InputVariant = "001" | "002";

interface InputProps {
  /**
   * バリアント ("001": ボーダーなし, "002": ボーダーあり)
   */
  variant?: InputVariant;
  /**
   * サイズ (small, middle, large)
   */
  size?: Size;
  /**
   * input要素のname属性
   */
  name?: string;
  /**
   * プレースホルダーテキスト
   */
  placeholder?: string;
  /**
   * 入力値（制御コンポーネント用）
   */
  value?: string;
  /**
   * 初期値（非制御コンポーネント用）
   */
  defaultValue?: string;
  /**
   * 値変更時のコールバック関数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * エラー状態かどうか
   */
  error?: boolean;
  /**
   * エラーメッセージテキスト
   */
  errorText?: string;
  /**
   * input要素のtype属性 (text, email, password等)
   */
  inputType?: React.HTMLInputTypeAttribute;
  /**
   * オートコンプリート属性
   */
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  /**
   * input要素のid属性
   */
  id?: string;
  /**
   * ラベルテキスト
   */
  label?: string;
  /**
   * aria-label属性（アクセシビリティ用）
   */
  ariaLabel?: string;
  /**
   * input要素に渡す追加のHTML属性
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * 外観のカスタマイズ設定
   */
  appearance?: {
    /** フォントサイズ */
    fontSize?: number;
    /** テキスト色 */
    color?: string;
    /** 背景色 */
    backgroundColor?: string;
    /** プレースホルダー色 */
    placeholderColor?: string;
    /** エラー色 */
    errorColor?: string;
    /** エラーテキストのフォントサイズ */
    errorFontSize?: number;
    /** エラー時の背景色 */
    errorBackgroundColor?: string;
    /** ラベルのフォントサイズ */
    labelFontSize?: number;
    /** ラベルの色 */
    labelColor?: string;
    /** ラベルのフォントウェイト */
    labelFontWeight?: number | string;
    /** ラベルの下マージン */
    labelMarginBottom?: number;
    /** フォーカス時のリング色 */
    focusRingColor?: string;
  };
}

export const Input004 = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "001",
      size = "small",
      name = "input-004",
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
        <StyledInput $error={hasError} $variant={variant} $size={size}>
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
            $backgroundColor={appearance?.backgroundColor}
            $placeholderColor={appearance?.placeholderColor}
            $errorBackgroundColor={appearance?.errorBackgroundColor}
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

Input004.displayName = "Input004";
