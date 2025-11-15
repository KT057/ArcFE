import type { KeenSliderOptions } from "keen-slider/react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import type { AutoPlay, InstanceRef } from "..";

type Args = {
  instanceRef: InstanceRef;
  autoPlay: AutoPlay | undefined;
  options: KeenSliderOptions | undefined;
};

export const useAutoSlide = ({ autoPlay, instanceRef, options }: Args) => {
  const raf = useRef<number>(0);
  const start = useRef<number>(0);
  const mouseOver = useRef<boolean>(false);

  const interval = useMemo(() => {
    return autoPlay?.interval || 2000;
  }, [autoPlay?.interval]);

  const setProgress = useCallback(
    (p: number) => {
      if (!autoPlay) return;
      const clamped = Math.floor(Math.max(0, Math.min(100, p)));
      autoPlay.onProgress?.(clamped);
    },
    [autoPlay]
  );

  const tick = useCallback(
    (now: number) => {
      if (!instanceRef.current) return;

      if (!mouseOver.current && !instanceRef.current.options.disabled) {
        const elapsed = now - start.current;
        const percent = (elapsed / interval) * 100;
        setProgress(percent);
        if (elapsed >= interval) {
          setProgress(100);
          if (
            instanceRef.current.track.details.abs ===
              instanceRef.current.track.details.maxIdx &&
            !options?.loop
          ) {
            instanceRef.current.moveToIdx(0);
          } else {
            instanceRef.current.next();
          }
          start.current = now;
          setProgress(0);
        }
      }
      raf.current = requestAnimationFrame(tick);
    },
    [instanceRef, setProgress, options?.loop, interval]
  );

  const startLoop = useCallback(() => {
    start.current = performance.now();
    setProgress(0);
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  }, [setProgress, tick]);

  const stopLoop = useCallback(() => {
    cancelAnimationFrame(raf.current);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 依存関係を最小限にするため
  const mouseOverHandler = useCallback(() => {
    mouseOver.current = true;
    stopLoop();
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 依存関係を最小限にするため
  const mouseOutHandler = useCallback(() => {
    mouseOver.current = false;
    startLoop();
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: 依存関係を最小限にするため
  useEffect(() => {
    if (!autoPlay || !instanceRef.current) return;

    instanceRef.current.container.removeEventListener(
      "mouseover",
      mouseOverHandler
    );
    instanceRef.current.container.removeEventListener(
      "mouseout",
      mouseOutHandler
    );

    if (!autoPlay.active) {
      stopLoop();
      return;
    }

    instanceRef.current.container.addEventListener(
      "mouseover",
      mouseOverHandler
    );
    instanceRef.current.container.addEventListener("mouseout", mouseOutHandler);
    startLoop();

    return () => {
      if (!instanceRef.current) return;

      instanceRef.current.container.removeEventListener(
        "mouseover",
        mouseOverHandler
      );
      instanceRef.current.container.removeEventListener(
        "mouseout",
        mouseOutHandler
      );
    };
  }, [autoPlay?.active, instanceRef]);
};
