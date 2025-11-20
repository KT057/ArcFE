import { type ParallaxProps, useParallax } from "react-scroll-parallax";

interface ParallaxImageProps {
  /**
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * parallaxProps の設定
   */
  parallaxProps: ParallaxProps;
}

export const ParallaxContent = ({
  children,
  parallaxProps
}: ParallaxImageProps) => {
  const parallax = useParallax({
    ...parallaxProps,
    onProgressChange: (progress) => {
      const clamped = Math.floor(Math.max(0, Math.min(100, progress * 100)));
      parallaxProps.onProgressChange?.(clamped);
    }
  });

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};
