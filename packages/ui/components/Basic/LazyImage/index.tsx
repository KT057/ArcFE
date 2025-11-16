import { useEffect, useMemo, useRef, useState } from "react";
import { Image } from "../Image";
import { StyledLazyImageWrapper, StyledPlaceholder } from "./styles";

type AspectRatio = "16 / 9" | "4 / 3" | "1 / 1" | "3 / 4" | "9 / 16" | "21 / 9";

interface LazyImageAppearance {
  placeholderBgColor?: string;
}

type Props = {
  pc: {
    src: string;
  };
  sp: {
    src: string;
  };
  alt: string;
  objectFit?: boolean;
  aspectRatio?: AspectRatio;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  showPlaceholder?: boolean;
  appearance?: LazyImageAppearance;
};

const defaultAppearance: Required<LazyImageAppearance> = {
  placeholderBgColor: "#f0f0f0"
};

export const LazyImage = ({
  pc,
  sp,
  alt,
  objectFit = false,
  aspectRatio = "16 / 9",
  duration = 0.6,
  threshold = 0.1,
  rootMargin = "50px",
  showPlaceholder = true,
  appearance
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const mergedAppearance = useMemo(
    () => ({ ...defaultAppearance, ...appearance }),
    [appearance]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  useEffect(() => {
    if (isVisible) {
      // 画像のプリロード
      const loadImage = (src: string) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.src = src;
        });
      };

      Promise.all([loadImage(pc.src), loadImage(sp.src)]).then(() => {
        setIsLoaded(true);
      });
    }
  }, [isVisible, pc.src, sp.src]);

  const { placeholderBgColor } = mergedAppearance;

  return (
    <StyledLazyImageWrapper
      ref={wrapperRef}
      isLoaded={isLoaded}
      duration={duration}
      aspectRatio={aspectRatio}
    >
      {isVisible ? (
        <Image pc={pc} sp={sp} alt={alt} objectFit={objectFit} />
      ) : (
        showPlaceholder && <StyledPlaceholder bgColor={placeholderBgColor} />
      )}
    </StyledLazyImageWrapper>
  );
};
