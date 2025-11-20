import type React from "react";
import type { Size } from "../../../../styles/size";
import { StyledLabel, StyledLabelWrapper } from "./styles";

export type Type = "001" | "002" | "003";

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
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    fontSize?: number;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
}

export const Label001 = ({
  type = "001",
  size = "middle",
  children,
  appearance
}: LabelProps) => {
  return (
    <StyledLabelWrapper>
      <StyledLabel
        type={type}
        size={size}
        fontSize={appearance?.fontSize}
        backgroundColor={appearance?.backgroundColor}
        color={appearance?.color}
        borderColor={appearance?.borderColor}
      >
        {children}
      </StyledLabel>
    </StyledLabelWrapper>
  );
};
