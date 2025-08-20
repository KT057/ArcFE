import gsap from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  StyledFadeInAndZoomImagesContent,
  StyledFadeInAndZoomImagesImage,
  StyledFadeInAndZoomImagesImageInner,
  StyledFadeInAndZoomImagesWrapper
} from "./styles";

export type FadeInAndZoomImagesImageItem = {
  src: string;
  alt?: string;
};

interface FadeInAndZoomImagesProps {
  images: FadeInAndZoomImagesImageItem[];
  duration?: number;
  fadeDuration?: number;
  scaleTo?: number;
  height?: number;
  state?: {
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
  };
  onImageChange?: (currentIndex: number) => void;
  onProgress?: (progress: number) => void;
  onCurrentIndexChange?: () => void;
}

export const FadeInAndZoomImages = ({
  images,
  duration = 4,
  fadeDuration = 2,
  scaleTo = 1.2,
  state,
  height,
  onImageChange,
  onProgress
}: FadeInAndZoomImagesProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(state?.currentIndex ?? 0);

  const getImageElements = useCallback(() => {
    if (!wrapperRef.current) return [];

    const imageElements = Array.from(
      wrapperRef.current.querySelectorAll<HTMLDivElement>(
        ".fade-in-zoom-content"
      )
    );

    return imageElements;
  }, []);

  const currentIndexData = useMemo(() => {
    return state?.currentIndex ?? currentIndex;
  }, [state?.currentIndex, currentIndex]);

  const onChangeCurrentIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      state?.setCurrentIndex?.(index);
    },
    [state]
  );

  const onNextIndex = useCallback(() => {
    let nextIndex = currentIndexData;
    const maxIndexes = images.length - 1;
    if (nextIndex >= maxIndexes) {
      nextIndex = 0;
      onChangeCurrentIndex(nextIndex);
    } else {
      nextIndex++;
      onChangeCurrentIndex(nextIndex);
    }
    return nextIndex;
  }, [currentIndexData, images.length, onChangeCurrentIndex]);

  const completeAnimation = useCallback(
    ({ imageElement }: { imageElement: HTMLDivElement }) => {
      imageElement.style.zIndex = "1";
      gsap.to(imageElement, {
        opacity: 0,
        duration: fadeDuration,
        ease: "power2.out",
        onComplete: () => {
          onImageChange?.(currentIndexData);
          imageElement.style.zIndex = "0";
        }
      });
    },
    [currentIndexData, fadeDuration, onImageChange]
  );

  const fadeInAndZoomImagesAnimation = useCallback(
    ({ imageElement }: { imageElement: HTMLDivElement }) => {
      gsap.set(imageElement, {
        scale: 1,
        opacity: 1
      });

      const tween = gsap.to(imageElement, {
        scale: scaleTo,
        opacity: 1,
        duration: duration,
        ease: "power2.out",
        onComplete: () => {
          onImageChange?.(currentIndexData);
          onNextIndex();
        },
        onUpdate: () => {
          const progress = Math.floor(tween.progress() * 100);
          onProgress?.(progress);
        }
      });
    },
    [
      currentIndexData,
      duration,
      onImageChange,
      onNextIndex,
      onProgress,
      scaleTo
    ]
  );

  const switchToIndex = useCallback(
    (index: number) => {
      if (!wrapperRef.current || images.length <= 1) return;

      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
      const otherImageElements = imageElements.filter(
        (_, elementIndex) => elementIndex !== index
      );

      for (const imageElement of otherImageElements) {
        completeAnimation({
          imageElement
        });
      }

      if (imageElements.length > 0) {
        const imageElement = imageElements[index];
        if (imageElement) {
          if (!isFirstAnimation) {
            setIsFirstAnimation(true);
            imageElement.style.zIndex = "1";
            imageElement.style.opacity = "1";
          } else {
            imageElement.style.zIndex = "0";
          }

          fadeInAndZoomImagesAnimation({
            imageElement
          });
        }
      }
    },
    [
      completeAnimation,
      fadeInAndZoomImagesAnimation,
      getImageElements,
      images.length,
      isFirstAnimation
    ]
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: lint/suppressions/incorrect
  useEffect(() => {
    switchToIndex(currentIndexData);

    return () => {
      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
    };
  }, [currentIndexData]);

  if (!images || images.length === 0) return null;

  return (
    <StyledFadeInAndZoomImagesWrapper>
      <StyledFadeInAndZoomImagesImageInner ref={wrapperRef} height={height}>
        {images.map((image, index) => (
          <StyledFadeInAndZoomImagesContent
            key={image.src}
            className="fade-in-zoom-content"
          >
            <StyledFadeInAndZoomImagesImage
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
            />
          </StyledFadeInAndZoomImagesContent>
        ))}
      </StyledFadeInAndZoomImagesImageInner>
    </StyledFadeInAndZoomImagesWrapper>
  );
};
