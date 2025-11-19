import { CircleProgress } from "../../common/CircleProgress";
import type { SlideGuideDotType } from "./styles";
import {
  StyledSlideGuideDotContainer,
  StyledSlideGuideDotItem,
  StyledSlideGuideDotWrapper
} from "./styles";

interface SlideGuideDotProps {
  type: SlideGuideDotType;
  progress: number; // 0-100の値で進捗を制御
  onClick: () => void;
  appearance?: {
    primaryColor?: string;
    trackColor?: string;
    circleSize?: number;
    dotSize?: number;
    strokeWidth?: number;
    animationDuration?: string;
  };
}

export const RebitaSlideGuideDot = ({
  type = "default",
  progress = 0,
  appearance,
  onClick
}: SlideGuideDotProps) => {
  return (
    <StyledSlideGuideDotWrapper>
      <StyledSlideGuideDotContainer size={appearance?.dotSize || 17}>
        {type === "default" ? (
          <StyledSlideGuideDotItem onClick={onClick} />
        ) : (
          <CircleProgress
            progress={progress}
            size={appearance?.circleSize || 17}
            appearance={{
              primaryColor: appearance?.primaryColor,
              trackColor: appearance?.trackColor,
              strokeWidth: appearance?.strokeWidth || 2,
              animationDuration: appearance?.animationDuration
            }}
          />
        )}
      </StyledSlideGuideDotContainer>
    </StyledSlideGuideDotWrapper>
  );
};
