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
  scaleFrom?: number;
  scaleTo?: number;
  height?: number;
  zoomDirection?: "in" | "out" | "none";
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
  scaleFrom = 1,
  scaleTo = 1.2,
  zoomDirection = "in",
  state,
  height,
  onImageChange,
  onProgress
}: FadeInAndZoomImagesProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(state?.currentIndex ?? 0);

  const shouldAnimate = images.length > 1;

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
      const fromScale =
        zoomDirection === "out"
          ? scaleTo
          : zoomDirection === "none"
            ? scaleFrom
            : scaleFrom;
      const toScale =
        zoomDirection === "out"
          ? scaleFrom
          : zoomDirection === "none"
            ? scaleFrom
            : scaleTo;

      gsap.set(imageElement, {
        scale: fromScale,
        opacity: 1
      });

      const tween = gsap.to(imageElement, {
        scale: toScale,
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
      scaleFrom,
      onImageChange,
      onNextIndex,
      onProgress,
      scaleTo,
      zoomDirection
    ]
  );

  const switchToIndex = useCallback(
    (index: number) => {
      if (!wrapperRef.current || !shouldAnimate) return;

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
      isFirstAnimation,
      shouldAnimate
    ]
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: lint/suppressions/incorrect
  useEffect(() => {
    if (!shouldAnimate) return;

    switchToIndex(currentIndexData);

    return () => {
      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
    };
  }, [currentIndexData, shouldAnimate]);

  if (!images || images.length === 0) return null;

  return (
    <StyledFadeInAndZoomImagesWrapper>
      <StyledFadeInAndZoomImagesImageInner ref={wrapperRef} height={height}>
        {images.map((image, index) => (
          <StyledFadeInAndZoomImagesContent
            key={image.src}
            className="fade-in-zoom-content"
            style={
              !shouldAnimate && index === 0
                ? {
                    opacity: 1,
                    zIndex: 1
                  }
                : undefined
            }
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
