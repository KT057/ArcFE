import { CircleProgress } from "../../common/CircleProgress";
import type { SlideGuideDotType } from "./styles";
import {
  StyledSlideGuideDotContainer,
  StyledSlideGuideDotItem,
  StyledSlideGuideDotWrapper
} from "./styles";

interface SlideGuideDotProps {
  /**
   * ドットの表示タイプ
   */
  type: SlideGuideDotType;
  /**
   * 進捗の割合（0-100）
   */
  progress: number;
  /**
   * クリック時のコールバック関数
   */
  onClick: () => void;
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
     * サークルのサイズ（px）
     */
    circleSize?: number;
    /**
     * ドットのサイズ（px）
     */
    dotSize?: number;
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
