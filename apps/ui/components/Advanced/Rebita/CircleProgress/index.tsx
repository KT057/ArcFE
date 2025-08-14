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
        <CircleProgress
          progress={progress}
          size={size}
          style={{
            primaryColor: style?.primaryColor,
            trackColor: style?.trackColor,
            strokeWidth: strokeWidth,
            animationDuration: style?.animationDuration
          }}
        />
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
