import type { ReactNode } from "react";
import {
  StyledCircleProgressContainer,
  StyledCircleProgressContent,
  StyledCircleProgressPercentage,
  StyledCircleProgressProgress,
  StyledCircleProgressSvg,
  StyledCircleProgressTrack,
  StyledCircleProgressWrapper
} from "./styles";

interface CircleProgressProps {
  progress?: number;
  children?: ReactNode;
  style?: {
    primaryColor?: string;
    trackColor?: string;
    textColor?: string;
    fontSize?: number;
    size?: number;
    strokeWidth?: number;
    animationDuration?: string;
  };
}

export const RebitaCircleProgress = ({
  progress = 0,
  children,
  style
}: CircleProgressProps) => {
  const size = style?.size || 100;
  const strokeWidth = style?.strokeWidth || 3;

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
            strokeWidth={strokeWidth}
            animationDuration={style?.animationDuration}
            progress={progress}
          />
        </StyledCircleProgressSvg>
        <StyledCircleProgressContent>
          <StyledCircleProgressPercentage
            fontSize={style?.fontSize}
            textColor={style?.textColor}
          >
            {children}
          </StyledCircleProgressPercentage>
        </StyledCircleProgressContent>
      </StyledCircleProgressContainer>
    </StyledCircleProgressWrapper>
  );
};
