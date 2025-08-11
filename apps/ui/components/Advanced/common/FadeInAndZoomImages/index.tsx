import gsap from "gsap";
import { useEffect, useRef } from "react";
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
  onImageChange?: (currentIndex: number) => void;
  onProgress?: (progress: number) => void;
}

export const FadeInAndZoomImages = ({
  images,
  duration = 4,
  fadeDuration = 2,
  scaleTo = 1.2,
  onImageChange,
  onProgress
}: FadeInAndZoomImagesProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  const fadeInAndZoomImagesAnimation = ({
    nextIndex,
    imageElements,
    imageElement
  }: {
    nextIndex: () => number;
    imageElements: HTMLDivElement[];
    imageElement: HTMLDivElement;
  }) => {
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
        const index = nextIndex();
        const nextImage = imageElements[index];
        imageElement.style.zIndex = "1";
        gsap.to(imageElement, {
          opacity: 0,
          duration: fadeDuration,
          ease: "power2.out",
          onComplete: () => {
            imageElement.style.zIndex = "0";
          }
        });
        onImageChange?.(index);
        fadeInAndZoomImagesAnimation({
          nextIndex,
          imageElements,
          imageElement: nextImage
        });
      },
      onUpdate: () => {
        const progress = Math.floor(tween.progress() * 100);
        onProgress?.(progress);
      }
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!wrapperRef.current || images.length <= 1) return;

    const imageElements = Array.from(
      wrapperRef.current.querySelectorAll<HTMLDivElement>(
        ".fade-in-zoom-content"
      )
    );

    const maxIndexes = imageElements.length - 1;

    const nextIndex = () => {
      if (currentIndexRef.current >= maxIndexes) {
        currentIndexRef.current = 0;
      } else {
        currentIndexRef.current++;
      }
      return currentIndexRef.current;
    };

    if (imageElements.length > 0) {
      const firstImage = imageElements[0];
      if (firstImage) {
        firstImage.style.zIndex = "1";
        fadeInAndZoomImagesAnimation({
          nextIndex,
          imageElements,
          imageElement: firstImage
        });
      }
    }

    return () => {
      gsap.killTweensOf(imageElements);
    };
  }, [images, duration, fadeDuration, scaleTo]);

  if (!images || images.length === 0) return null;

  return (
    <StyledFadeInAndZoomImagesWrapper>
      <StyledFadeInAndZoomImagesImageInner ref={wrapperRef}>
        {images.map((image, index) => (
          <StyledFadeInAndZoomImagesContent
            key={index}
            className="fade-in-zoom-content"
            style={{
              zIndex: index === 0 ? 1 : 0,
              opacity: index === 0 ? 1 : 0
            }}
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
