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
  appearance?: {
    primaryColor?: string;
    trackColor?: string;
    strokeWidth?: number;
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
