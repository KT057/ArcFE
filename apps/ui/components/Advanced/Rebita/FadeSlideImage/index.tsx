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
  images: FadeInAndZoomImagesImageItem[];
  fadeInAndZoomImagesProps?: Partial<
    ComponentProps<typeof FadeInAndZoomImages>
  >;
  slideGuideDotProps?: Partial<ComponentProps<typeof RebitaSlideGuideDot>>;
  style?: {
    guideGap?: number;
  };
}

export const RebitaFadeSlideImage = ({
  images,
  fadeInAndZoomImagesProps,
  slideGuideDotProps,
  style
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

      <StyledFadeSlideImageGuideWrapper gap={style?.guideGap}>
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
