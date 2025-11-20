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
  /**
   * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
   */
  variant?: SelectVariant;
  /**
   * select要素のname属性
   */
  name?: string;
  /**
   * select要素のid属性
   */
  id?: string;
  /**
   * 選択肢の配列
   */
  options: SelectOption[];
  /**
   * 選択値（制御コンポーネント用）
   */
  value?: string;
  /**
   * 初期選択値（非制御コンポーネント用）
   */
  defaultValue?: string;
  /**
   * 値変更時のコールバック関数
   */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * エラー状態かどうか
   */
  error?: boolean;
  /**
   * エラーメッセージテキスト
   */
  errorText?: string;
  /**
   * プレースホルダーテキスト
   */
  placeholder?: string;
  /**
   * ラベルテキスト
   */
  label?: string;
  /**
   * aria-label属性（アクセシビリティ用）
   */
  ariaLabel?: string;
  /**
   * 表示するアイコン要素
   */
  icon: React.ReactNode;
  /**
   * select要素に渡す追加のHTML属性
   */
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  /**
   * 外観のカスタマイズ設定
   */
  appearance?: {
    /** フォントサイズ */
    fontSize?: number;
    /** テキスト色 */
    color?: string;
    /** ボーダー色 */
    borderColor?: string;
    /** 背景色 */
    backgroundColor?: string;
    /** プレースホルダー色 */
    placeholderColor?: string;
    /** エラー色 */
    errorColor?: string;
    /** エラーテキストのフォントサイズ */
    errorFontSize?: number;
    /** エラー時のボーダー色 */
    errorBorderColor?: string;
    /** アイコンの色 */
    iconColor?: string;
    /** フォーカス時のリング色 */
    focusRingColor?: string;
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

export const Select001 = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "001",
      name = "select-001",
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
    }, [value, defaultValue]);

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

Select001.displayName = "Select001";
