import {
  StyledCircleProgressContainer,
  StyledCircleProgressProgress,
  StyledCircleProgressSvg,
  StyledCircleProgressTrack,
  StyledCircleProgressWrapper
} from "./styles";

interface CircleProgressProps {
  progress: number;
  size: number;
  style?: {
    primaryColor?: string;
    trackColor?: string;
    strokeWidth?: number;
    animationDuration?: string;
  };
}

export const CircleProgress = ({
  progress = 0,
  size,
  style
}: CircleProgressProps) => {
  return (
    <StyledCircleProgressWrapper>
      <StyledCircleProgressContainer size={size}>
        <StyledCircleProgressSvg size={size}>
          <StyledCircleProgressTrack
            trackColor={style?.trackColor}
            size={size}
          />
          <StyledCircleProgressProgress
            primaryColor={style?.primaryColor}
            size={size}
            strokeWidth={style?.strokeWidth}
            animationDuration={style?.animationDuration}
            progress={progress}
          />
        </StyledCircleProgressSvg>
      </StyledCircleProgressContainer>
    </StyledCircleProgressWrapper>
  );
};
