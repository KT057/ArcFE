import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { KeenSliderHooks, KeenSliderInstance } from "keen-slider";
import { useMemo, useState } from "react";
import {
  StyledArrow,
  StyledDot,
  StyledDotsWrapper,
  StyledSliderWrapper
} from "./styles";

interface ArrowStyle {
  size?: number;
  position?: number;
  color?: string;
  hoverColor?: string;
  disableOpacity?: number;
}

interface SliderProps {
  options?: KeenSliderOptions;
  loading?: boolean;
  items: {
    key: string;
    children: React.ReactNode;
  }[];
  state?: {
    currentIndex?: number;
    slideRef?: (node: HTMLElement | null) => void;
    instanceRef?: React.MutableRefObject<KeenSliderInstance<
      {},
      {},
      KeenSliderHooks
    > | null>;
    setCurrentIndex?: (index: number) => void;
  };
  controller?: {
    left?: {
      children: React.ReactNode;
      style?: ArrowStyle;
    };
    right?: {
      children: React.ReactNode;
      style?: ArrowStyle;
    };
  };
  autoPlay?: {
    active: boolean;
    interval?: number;
    onProgress?: (progress: number) => void;
  };
  dots?: {
    show: boolean;
    style?: {
      size?: number;
      gap?: number;
      marginTop?: number;
      position?: number;
      backgroundColor?: string;
      borderColor?: string;
      activeBackgroundColor?: string;
      activeBorderColor?: string;
    };
  };
}

export const Slider = ({
  options,
  items,
  loading = false,
  controller,
  state,
  dots,
  autoPlay
}: SliderProps) => {
  const [currentIndexOfComponent, setCurrentIndexOfComponent] = useState(
    state?.currentIndex || 0
  );

  const currentIndex = useMemo(() => {
    return state?.currentIndex || currentIndexOfComponent;
  }, [state?.currentIndex, currentIndexOfComponent]);

  const setCurrentIndex = useMemo(() => {
    return state?.setCurrentIndex || setCurrentIndexOfComponent;
  }, [state?.setCurrentIndex]);

  const [sliderRefOfComponent, instanceRefOfComponent] = useKeenSlider(
    {
      ...(options || {}),
      slideChanged: (slider) => {
        setCurrentIndex(slider.track.details.abs);
        options?.slideChanged?.(slider);
      }
    },
    autoPlay
      ? [
          (slider) => {
            if (!autoPlay?.active) return;

            const interval = autoPlay.interval || 2000;
            let timeout: ReturnType<typeof setTimeout>;
            let raf = 0;
            let mouseOver = false;
            let start = 0;
            let running = false;

            const setProgress = (p: number) => {
              const clamped = Math.floor(Math.max(0, Math.min(100, p)));
              autoPlay.onProgress?.(clamped);
            };

            const clearNextTimeout = () => clearTimeout(timeout);

            const tick = (now: number) => {
              if (!running) return;
              if (!mouseOver && !slider.options.disabled) {
                const elapsed = now - start;
                const percent = (elapsed / interval) * 100;
                setProgress(percent);
                if (elapsed >= interval) {
                  setProgress(100);
                  if (
                    slider.track.details.abs === slider.track.details.maxIdx &&
                    !options?.loop
                  ) {
                    slider.moveToIdx(0);
                  } else {
                    slider.next();
                  }
                  start = now;
                  setProgress(0);
                }
              }
              raf = requestAnimationFrame(tick);
            };

            const startLoop = () => {
              running = true;
              start = performance.now();
              setProgress(0);
              cancelAnimationFrame(raf);
              raf = requestAnimationFrame(tick);
              clearNextTimeout();
              timeout = setTimeout(() => slider.next(), interval); // 保険
            };

            const stopLoop = () => {
              running = false;
              cancelAnimationFrame(raf);
              clearNextTimeout();
            };

            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                stopLoop();
              });
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                startLoop();
              });
              startLoop();
            });

            slider.on("dragStarted", () => stopLoop());
            slider.on("animationEnded", () => startLoop());
            slider.on("updated", () => startLoop());
            slider.on("destroyed", () => stopLoop());
          }
        ]
      : []
  );

  const sliderRef = useMemo(() => {
    return state?.slideRef || sliderRefOfComponent;
  }, [state?.slideRef, sliderRefOfComponent]);

  const instanceRef = useMemo(() => {
    return state?.instanceRef || instanceRefOfComponent;
  }, [state?.instanceRef, instanceRefOfComponent]);

  return (
    <StyledSliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item) => (
          <div key={item.key} className="keen-slider__slide">
            {item.children}
          </div>
        ))}
      </div>
      {!loading && instanceRef.current && controller?.left && (
        <StyledArrow
          direction="left"
          size={controller.left.style?.size}
          position={controller.left.style?.position}
          color={controller.left.style?.color}
          hoverColor={controller.left.style?.hoverColor}
          disableOpacity={controller.left.style?.disableOpacity}
          disabled={currentIndex === 0}
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
        >
          {controller.left.children}
        </StyledArrow>
      )}
      {!loading && instanceRef.current && controller?.right && (
        <StyledArrow
          direction="right"
          size={controller.right.style?.size}
          position={controller.right.style?.position}
          color={controller.right.style?.color}
          hoverColor={controller.right.style?.hoverColor}
          disableOpacity={controller.right.style?.disableOpacity}
          disabled={currentIndex === instanceRef.current.track.details.maxIdx}
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
        >
          {controller.right.children}
        </StyledArrow>
      )}
      {dots?.show && instanceRef.current && (
        <StyledDotsWrapper
          gap={dots.style?.gap}
          marginTop={dots.style?.marginTop}
        >
          {[...Array(instanceRef.current.track.details.maxIdx + 1).keys()].map(
            (idx) => {
              return (
                <StyledDot
                  key={idx}
                  size={dots.style?.size}
                  backgroundColor={dots.style?.backgroundColor}
                  borderColor={dots.style?.borderColor}
                  activeBackgroundColor={dots.style?.activeBackgroundColor}
                  activeBorderColor={dots.style?.activeBorderColor}
                  active={idx === currentIndex}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                />
              );
            }
          )}
        </StyledDotsWrapper>
      )}
    </StyledSliderWrapper>
  );
};
