import {
  type ButtonHTMLAttributes,
  forwardRef,
  type MouseEvent,
  type ReactNode,
  useMemo
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
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | "type"> & {
    href?: string;
    target?: string;
    rel?: string;
  };

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
      ...rest
    },
    ref
  ) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance, ...appearance }),
      [appearance]
    );

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
        ref={ref}
        as={as as any}
        $type={type}
        $size={size}
        onClick={onClick}
        $animation={animation}
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $paddingTop={paddingTop || undefined}
        $paddingRight={paddingRight || undefined}
        $paddingBottom={paddingBottom || undefined}
        $paddingLeft={paddingLeft || undefined}
        disabled={disabled}
        $disabledBackgroundColor={disabledBackgroundColor}
        $disabledBorderColor={disabledBorderColor}
        {...rest}
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
