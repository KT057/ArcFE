import {
  StyledCircleProgressContainer,
  StyledCircleProgressProgress,
  StyledCircleProgressSvg,
  StyledCircleProgressTrack,
  StyledCircleProgressWrapper
} from "./styles";

interface CircleProgressProps {
  /**
   * 進捗の割合（0-100）
   */
  progress: number;
  /**
   * サークルのサイズ（px）
   */
  size: number;
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
     * ストロークの太さ（px）
     */
    strokeWidth?: number;
    /**
     * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
     */
    animationDuration?: string;
  };
}

export const CircleProgress = ({
  progress = 0,
  size,
  appearance
}: CircleProgressProps) => {
  return (
    <StyledCircleProgressWrapper>
      <StyledCircleProgressContainer size={size}>
        <StyledCircleProgressSvg size={size}>
          <StyledCircleProgressTrack
            trackColor={appearance?.trackColor}
            size={size}
          />
          <StyledCircleProgressProgress
            primaryColor={appearance?.primaryColor}
            size={size}
            strokeWidth={appearance?.strokeWidth}
            animationDuration={appearance?.animationDuration}
            progress={progress}
          />
        </StyledCircleProgressSvg>
      </StyledCircleProgressContainer>
    </StyledCircleProgressWrapper>
  );
};
