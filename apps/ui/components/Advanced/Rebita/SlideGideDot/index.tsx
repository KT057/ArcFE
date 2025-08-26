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
  style?: {
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
  style,
  onClick
}: SlideGuideDotProps) => {
  return (
    <StyledSlideGuideDotWrapper>
      <StyledSlideGuideDotContainer size={style?.dotSize || 17}>
        {type === "default" ? (
          <StyledSlideGuideDotItem onClick={onClick} />
        ) : (
          <CircleProgress
            progress={progress}
            size={style?.circleSize || 17}
            style={{
              primaryColor: style?.primaryColor,
              trackColor: style?.trackColor,
              strokeWidth: style?.strokeWidth || 2,
              animationDuration: style?.animationDuration
            }}
          />
        )}
      </StyledSlideGuideDotContainer>
    </StyledSlideGuideDotWrapper>
  );
};
