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
  /**
   * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
   */
  variant?: TextFieldVariant;
  /**
   * textarea要素のname属性
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
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * エラー状態かどうか
   */
  error?: boolean;
  /**
   * エラーメッセージテキスト
   */
  errorText?: string;
  /**
   * textarea要素のid属性
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
   * オートコンプリート属性
   */
  autoComplete?: React.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
  /**
   * textarea要素に渡す追加のHTML属性
   */
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  /**
   * 外観のカスタマイズ設定
   */
  appearance?: {
    /** フォントサイズ */
    fontSize?: number;
    /** 行の高さ */
    lineHeight?: number;
    /** テキスト色 */
    color?: string;
    /** ボーダー色 */
    borderColor?: string;
    /** 背景色 */
    backgroundColor?: string;
    /** プレースホルダー色 */
    placeholderColor?: string;
    /** フォーカス時のリング色 */
    focusRingColor?: string;
    /** エラー色 */
    errorColor?: string;
    /** エラーテキストのフォントサイズ */
    errorFontSize?: number;
    /** エラー時の背景色 */
    errorBackgroundColor?: string;
    /** エラー時のボーダー色 */
    errorBorderColor?: string;
    /** ラベルのフォントサイズ */
    labelFontSize?: number;
    /** ラベルの色 */
    labelColor?: string;
    /** ラベルのフォントウェイト */
    labelFontWeight?: number | string;
    /** ラベルの下マージン */
    labelMarginBottom?: number;
  };
}

export const TextField005 = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  (
    {
      variant = "001",
      name = "text-field-005",
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

    const backgroundColor = hasError
      ? (appearance?.errorBackgroundColor ?? "#fdd")
      : (appearance?.backgroundColor ?? "#eee");

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
            $backgroundColor={backgroundColor}
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

TextField005.displayName = "TextField005";
