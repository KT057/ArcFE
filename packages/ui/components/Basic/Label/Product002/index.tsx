import type React from "react";
import type { Size } from "../../../../styles/size";
import {
  StyledLabel,
  StyledLabelIcon,
  StyledLabelText,
  StyledLabelWrapper
} from "./styles";

export type Type = "001" | "002" | "003";
export type IconPosition = "left" | "right";

interface LabelProps {
  /**
   * スタイルタイプ
   */
  type?: Type;
  /**
   * サイズ (small, middle, large)
   */
  size?: Size;
  /**
   * iconPosition の設定
   */
  iconPosition?: IconPosition;
  /**
   * アイコン
   */
  icon: React.ReactNode;
  /**
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    fontSize?: number;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    iconColor?: string;
  };
}

export const Label002 = ({
  type = "001",
  size = "middle",
  iconPosition = "left",
  icon,
  children,
  appearance
}: LabelProps) => {
  return (
    <StyledLabelWrapper>
      <StyledLabel
        type={type}
        size={size}
        iconPosition={iconPosition}
        fontSize={appearance?.fontSize}
        backgroundColor={appearance?.backgroundColor}
        borderColor={appearance?.borderColor}
      >
        <StyledLabelIcon
          iconPosition={iconPosition}
          color={appearance?.iconColor}
          size={size}
        >
          {icon}
        </StyledLabelIcon>
        <StyledLabelText
          iconPosition={iconPosition}
          fontSize={appearance?.fontSize}
          color={appearance?.color}
        >
          {children}
        </StyledLabelText>
      </StyledLabel>
    </StyledLabelWrapper>
  );
};
