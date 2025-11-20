import { type ComponentProps, useState } from "react";
import {
  FadeInAndZoomImages,
  type FadeInAndZoomImagesImageItem
} from "../../common/FadeInAndZoomImages";
import { RebitaSlideGuideDot } from "../SlideGideDot";
import {
  StyledFadeSlideImageContainer,
  StyledFadeSlideImageGuideItem,
  StyledFadeSlideImageGuideWrapper,
  StyledFadeSlideImageWrapper
} from "./styles";

interface FadeSlideImageProps {
  /**
   * スライドショーで表示する画像の配列
   */
  images: FadeInAndZoomImagesImageItem[];
  /**
   * FadeInAndZoomImagesコンポーネントに渡すprops
   */
  fadeInAndZoomImagesProps?: Partial<
    ComponentProps<typeof FadeInAndZoomImages>
  >;
  /**
   * SlideGuideDotコンポーネントに渡すprops
   */
  slideGuideDotProps?: Partial<ComponentProps<typeof RebitaSlideGuideDot>>;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * ガイドドット間の間隔（px）
     */
    guideGap?: number;
  };
}

export const RebitaFadeSlideImage = ({
  images,
  fadeInAndZoomImagesProps,
  slideGuideDotProps,
  appearance
}: FadeSlideImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <StyledFadeSlideImageWrapper>
      <StyledFadeSlideImageContainer>
        <FadeInAndZoomImages
          images={images}
          state={{
            currentIndex,
            setCurrentIndex
          }}
          onProgress={(progress) => {
            setProgress(progress);
          }}
          {...fadeInAndZoomImagesProps}
        />
      </StyledFadeSlideImageContainer>

      <StyledFadeSlideImageGuideWrapper gap={appearance?.guideGap}>
        {images.map((_, index) => (
          <StyledFadeSlideImageGuideItem key={index}>
            <RebitaSlideGuideDot
              type={index === currentIndex ? "progress" : "default"}
              progress={index === currentIndex ? progress : 0}
              onClick={() => {
                setCurrentIndex(index);
              }}
              {...slideGuideDotProps}
            />
          </StyledFadeSlideImageGuideItem>
        ))}
      </StyledFadeSlideImageGuideWrapper>
    </StyledFadeSlideImageWrapper>
  );
};
