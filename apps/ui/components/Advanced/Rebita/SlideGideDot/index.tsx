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
    size?: number;
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
  const size = style?.size || 17;
  const strokeWidth = style?.strokeWidth || 2;

  return (
    <StyledSlideGuideDotWrapper>
      <StyledSlideGuideDotContainer size={size}>
        {type === "default" ? (
          <StyledSlideGuideDotItem onClick={onClick} />
        ) : (
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
        )}
      </StyledSlideGuideDotContainer>
    </StyledSlideGuideDotWrapper>
  );
};
