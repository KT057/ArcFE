import {
  type ButtonHTMLAttributes,
  forwardRef,
  type MouseEvent,
  type ReactNode,
  useMemo,
  useState
} from "react";
import type { Size } from "../../../../styles/size";
import {
  type Animation,
  type IconDirection,
  StyledButton,
  StyledIcon,
  StyledIconInner,
  StyledIconWrapper,
  StyledText,
  type Type
} from "./styles";

interface ButtonAppearance {
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  iconSize?: number;
  fontSize?: number;
  backgroundColor?: string;
  borderColor?: string;
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
  appearance?: ButtonAppearance;
  iconDirection?: IconDirection;
  icon: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps | "type"> & {
    href?: string;
    target?: string;
    rel?: string;
  };

const defaultAppearance: Required<ButtonAppearance> = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  iconSize: 0,
  fontSize: 0,
  backgroundColor: "#fff",
  borderColor: "#000",
  color: "#000",
  fontWeight: 700,
  disabledColor: "#999",
  disabledBackgroundColor: "#e0e0e0",
  disabledBorderColor: "#ccc"
};

export const Button002 = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
      type = "001",
      size = "middle",
      animation,
      onClick,
      children,
      appearance,
      disabled = false,
      iconDirection = "right",
      icon,
      fullWidth = true,
      ...rest
    },
    ref
  ) => {
    const [isHover, setIsHover] = useState<boolean | null>(null);

    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance, ...appearance }),
      [appearance]
    );

    const {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      iconSize,
      fontSize,
      backgroundColor,
      borderColor,
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
        $iconDirection={iconDirection}
        $isHover={isHover}
        $disabledBackgroundColor={disabledBackgroundColor}
        $disabledBorderColor={disabledBorderColor}
        $paddingTop={paddingTop || undefined}
        $paddingRight={paddingRight || undefined}
        $paddingBottom={paddingBottom || undefined}
        $paddingLeft={paddingLeft || undefined}
        $iconSize={iconSize || undefined}
        $fontSize={fontSize || undefined}
        $disabled={disabled}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        $fullWidth={fullWidth}
        {...rest}
      >
        <StyledText
          $size={size}
          $color={color}
          $fontWeight={fontWeight}
          $disabled={disabled}
          $disabledColor={disabledColor}
        >
          {children}
        </StyledText>
        <StyledIconWrapper>
          <StyledIconInner>
            <StyledIcon
              $color={color}
              $disabled={disabled}
              $disabledColor={disabledColor}
            >
              {icon}
            </StyledIcon>
            <StyledIcon
              $color={color}
              $disabled={disabled}
              $disabledColor={disabledColor}
            >
              {icon}
            </StyledIcon>
          </StyledIconInner>
        </StyledIconWrapper>
      </StyledButton>
    );
  }
);

Button002.displayName = "Button002";
