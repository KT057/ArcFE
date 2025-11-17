import type { ReactNode } from "react";
import { CircleProgress } from "../../common/CircleProgress";
import {
  StyledCircleProgressContainer,
  StyledCircleProgressContent,
  StyledCircleProgressPercentage,
  StyledCircleProgressWrapper
} from "./styles";

interface CircleProgressProps {
  progress?: number;
  children?: ReactNode;
  appearance?: {
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
