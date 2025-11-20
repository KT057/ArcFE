import { useButton } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";
import {
  type ButtonHTMLAttributes,
  forwardRef,
  type MouseEvent,
  type MutableRefObject,
  type ReactNode,
  useCallback,
  useMemo,
  useRef
} from "react";
import type { Size } from "../../../../styles/size";
import { type Animation, StyledButton, StyledText, type Type } from "./styles";

/**
 * ボタンの外観カスタマイズ設定
 */
interface ButtonAppearance {
  /**
   * 背景色
   */
  backgroundColor?: string;
  /**
   * ボーダーの色
   */
  borderColor?: string;
  /**
   * 上部のパディング（em単位）
   */
  paddingTop?: number;
  /**
   * 右側のパディング（em単位）
   */
  paddingRight?: number;
  /**
   * 下部のパディング（em単位）
   */
  paddingBottom?: number;
  /**
   * 左側のパディング（em単位）
   */
  paddingLeft?: number;
  /**
   * フォントサイズ（em単位）
   */
  fontSize?: number;
  /**
   * テキストの色
   */
  color?: string;
  /**
   * フォントの太さ
   */
  fontWeight?: number;
  /**
   * 無効化時のテキストの色
   */
  disabledColor?: string;
  /**
   * 無効化時の背景色
   */
  disabledBackgroundColor?: string;
  /**
   * 無効化時のボーダーの色
   */
  disabledBorderColor?: string;
}

type BaseProps = {
  /**
   * ボタンの HTML 要素タイプ。リンクとして使用する場合は "a" を指定し、href も設定してください。
   */
  as?: "button" | "a" | "span";
  /**
   * ボタンのスタイルタイプ
   * - "001": 完全に丸い角（pill型、border-radius: 30em）
   * - "002": 角丸（rounded、border-radius: 8em）
   * - "003": 角が四角（square、border-radius: 0）
   */
  type?: Type;
  /**
   * ボタンのサイズ (small, middle, large)
   */
  size?: Size;
  /**
   * ボタンの表示内容
   */
  children: ReactNode;
  /**
   * ホバー時のアニメーション効果
   */
  animation?: Animation;
  /**
   * ボタンを無効化するかどうか
   */
  disabled?: boolean;
  /**
   * ボタンの外観をカスタマイズ（背景色、ボーダー色、パディング、フォントサイズなど）
   */
  appearance?: ButtonAppearance;
  /**
   * ボタンを親要素の幅いっぱいに広げるかどうか
   */
  fullWidth?: boolean;
  /**
   * クリック時のコールバック関数
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | "type"> & {
    href?: string;
    target?: string;
    rel?: string;
  };

type UseButtonOnClick = NonNullable<Parameters<typeof useButton>[0]["onClick"]>;
type AriaClickEvent = Parameters<UseButtonOnClick>[0];

const defaultAppearance: Required<ButtonAppearance> = {
  backgroundColor: "#fff",
  borderColor: "#000",
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  fontSize: 0,
  color: "#000",
  fontWeight: 700,
  disabledColor: "#999",
  disabledBackgroundColor: "#e0e0e0",
  disabledBorderColor: "#ccc"
};

export const Button001 = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "001",
      size = "middle",
      as = "button",
      disabled = false,
      animation,
      onClick,
      children,
      appearance,
      fullWidth = true,
      ...rest
    },
    ref
  ) => {
    const { href, target, rel, ...domProps } = rest;
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance, ...appearance }),
      [appearance]
    );
    const localRef = useRef<
      HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement | null
    >(null);
    const handleAriaClick = useCallback(
      (event: AriaClickEvent) => {
        onClick?.(event as MouseEvent<HTMLButtonElement>);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        isDisabled: disabled,
        href,
        target,
        rel,
        onClick: handleAriaClick
      },
      localRef
    );
    const handleRef = useCallback(
      (
        node: HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement | null
      ) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node as HTMLButtonElement | null);
        } else {
          (ref as MutableRefObject<HTMLButtonElement | null>).current =
            node as HTMLButtonElement | null;
        }
      },
      [ref]
    );
    const mergedButtonProps = mergeProps(buttonProps, domProps);

    const {
      backgroundColor,
      borderColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontSize,
      color,
      fontWeight,
      disabledColor,
      disabledBackgroundColor,
      disabledBorderColor
    } = mergedAppearance;

    return (
      <StyledButton
        {...mergedButtonProps}
        ref={handleRef}
        as={as as any}
        $type={type}
        $size={size}
        $animation={animation}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $paddingTop={paddingTop || undefined}
        $paddingRight={paddingRight || undefined}
        $paddingBottom={paddingBottom || undefined}
        $paddingLeft={paddingLeft || undefined}
        $disabledBackgroundColor={disabledBackgroundColor}
        $disabledBorderColor={disabledBorderColor}
        $fullWidth={fullWidth}
        $isDisabled={disabled}
      >
        <StyledText
          $size={size}
          $color={color}
          $fontWeight={fontWeight}
          $disabled={disabled}
          $disabledColor={disabledColor}
          $fontSize={fontSize || undefined}
        >
          {children}
        </StyledText>
      </StyledButton>
    );
  }
);

Button001.displayName = "Button001";
