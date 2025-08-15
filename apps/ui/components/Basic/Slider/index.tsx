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
  dots
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

  const [sliderRefOfComponent, instanceRefOfComponent] = useKeenSlider({
    ...(options || {}),
    slideChanged: (slider) => {
      setCurrentIndex(slider.track.details.abs);
      options?.slideChanged?.(slider);
    }
  });

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
