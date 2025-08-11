import type { SlideGuideDotType } from "./styles";
import {
  StyledSlideGuideDotContainer,
  StyledSlideGuideDotItem,
  StyledSlideGuideDotProgress,
  StyledSlideGuideDotSvg,
  StyledSlideGuideDotTrack,
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
          <StyledSlideGuideDotSvg size={size}>
            <StyledSlideGuideDotTrack
              trackColor={style?.trackColor}
              size={size}
            />
            <StyledSlideGuideDotProgress
              primaryColor={style?.primaryColor}
              size={size}
              strokeWidth={strokeWidth}
              animationDuration={style?.animationDuration}
              progress={progress}
            />
          </StyledSlideGuideDotSvg>
        )}
      </StyledSlideGuideDotContainer>
    </StyledSlideGuideDotWrapper>
  );
};
