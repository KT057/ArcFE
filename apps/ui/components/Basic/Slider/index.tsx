import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface SliderProps {
  options?: KeenSliderOptions;
  items: React.ReactNode[];
}

export const Slider = ({ options, items }: SliderProps) => {
  const [sliderRef] = useKeenSlider(
    options
      ? {
          ...options
        }
      : undefined
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          {item}
        </div>
      ))}
    </div>
  );
};
