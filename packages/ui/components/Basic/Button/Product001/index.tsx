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

interface ButtonAppearance {
  backgroundColor?: string;
  borderColor?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  disabledColor?: string;
  disabledBackgroundColor?: string;
  disabledBorderColor?: string;
}

type BaseProps = {
  as?: "button" | "a" | "span";
  type?: Type;
  size?: Size;
  children: ReactNode;
  animation?: Animation;
  disabled?: boolean;
  appearance?: ButtonAppearance;
  fullWidth?: boolean;
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
