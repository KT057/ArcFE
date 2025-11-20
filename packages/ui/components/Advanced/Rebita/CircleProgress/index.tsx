import type { ReactNode } from "react";
import { CircleProgress } from "../../common/CircleProgress";
import {
  StyledCircleProgressContainer,
  StyledCircleProgressContent,
  StyledCircleProgressPercentage,
  StyledCircleProgressWrapper
} from "./styles";

interface CircleProgressProps {
  /**
   * 進捗の割合（0-100）
   */
  progress?: number;
  /**
   * サークル内に表示する内容
   */
  children?: ReactNode;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * プログレスバーの色
     */
    primaryColor?: string;
    /**
     * トラック（背景）の色
     */
    trackColor?: string;
    /**
     * テキストの色
     */
    textColor?: string;
    /**
     * フォントサイズ（px）
     */
    fontSize?: number;
    /**
     * サークルのサイズ（px）
     */
    size?: number;
    /**
     * ストロークの太さ（px）
     */
    strokeWidth?: number;
    /**
     * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
     */
    animationDuration?: string;
  };
}

export const RebitaCircleProgress = ({
  progress = 0,
  children,
  appearance
}: CircleProgressProps) => {
  const size = appearance?.size || 100;
  const strokeWidth = appearance?.strokeWidth || 3;

  return (
    <StyledCircleProgressWrapper>
      <StyledCircleProgressContainer size={size}>
        <CircleProgress
          progress={progress}
          size={size}
          appearance={{
            primaryColor: appearance?.primaryColor,
            trackColor: appearance?.trackColor,
            strokeWidth: strokeWidth,
            animationDuration: appearance?.animationDuration
          }}
        />
        <StyledCircleProgressContent>
          <StyledCircleProgressPercentage
            fontSize={appearance?.fontSize}
            textColor={appearance?.textColor}
          >
            {children}
          </StyledCircleProgressPercentage>
        </StyledCircleProgressContent>
      </StyledCircleProgressContainer>
    </StyledCircleProgressWrapper>
  );
};
