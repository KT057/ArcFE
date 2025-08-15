import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { StyledArrow, StyledSliderWrapper } from "./styles";

interface SliderProps {
  options: KeenSliderOptions;
  loading?: boolean;
  items: {
    key: string;
    children: React.ReactNode;
  }[];
  controller?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

export const Slider = ({
  options,
  items,
  loading = false,
  controller
}: SliderProps) => {
  const [sliderRef, instanceRef] = useKeenSlider(options);

  return (
    <StyledSliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item) => (
          <div key={item.key} className="keen-slider__slide">
            {item.children}
          </div>
        ))}
      </div>
      {!loading && controller?.left && (
        <StyledArrow
          direction="left"
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
        >
          {controller.left}
        </StyledArrow>
      )}
      {!loading && controller?.right && (
        <StyledArrow
          direction="right"
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
        >
          {controller.right}
        </StyledArrow>
      )}
    </StyledSliderWrapper>
  );
};
