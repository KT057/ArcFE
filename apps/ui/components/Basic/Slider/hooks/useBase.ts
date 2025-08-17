import { type KeenSliderOptions, useKeenSlider } from "keen-slider/react";
import { useMemo, useState } from "react";
import type { State } from "..";

type Args = {
  state: State | undefined;
  options: KeenSliderOptions | undefined;
};

export const useBase = ({ state, options }: Args) => {
  const [currentIndexOfComponent, setCurrentIndexOfComponent] = useState(
    state?.currentIndex || 0
  );
  const [loadingOfComponent, setLoadingOfComponent] = useState(true);

  const currentIndex = useMemo(() => {
    return state?.currentIndex || currentIndexOfComponent;
  }, [state?.currentIndex, currentIndexOfComponent]);

  const loading = useMemo(() => {
    return state?.loading || loadingOfComponent;
  }, [state?.loading, loadingOfComponent]);

  const setCurrentIndex = useMemo(() => {
    return state?.setCurrentIndex || setCurrentIndexOfComponent;
  }, [state?.setCurrentIndex]);

  const setLoading = useMemo(() => {
    return state?.setLoading || setLoadingOfComponent;
  }, [state?.setLoading]);

  const [sliderRefOfComponent, instanceRefOfComponent] = useKeenSlider({
    ...(options || {}),
    slideChanged: (slider) => {
      setCurrentIndex(slider.track.details.abs);
      options?.slideChanged?.(slider);
    },
    created(s) {
      setLoading(false);
      options?.created?.(s);
    }
  });

  const sliderRef = useMemo(() => {
    return state?.slideRef || sliderRefOfComponent;
  }, [state?.slideRef, sliderRefOfComponent]);

  const instanceRef = useMemo(() => {
    return state?.instanceRef || instanceRefOfComponent;
  }, [state?.instanceRef, instanceRefOfComponent]);

  return {
    sliderRef,
    instanceRef,
    loading,
    currentIndex
  };
};
