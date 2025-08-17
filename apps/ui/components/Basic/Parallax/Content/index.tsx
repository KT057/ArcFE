import { type ParallaxProps, useParallax } from "react-scroll-parallax";

interface ParallaxImageProps {
  children: React.ReactNode;
  parallaxProps: ParallaxProps;
}

export const ParallaxContent = ({
  children,
  parallaxProps
}: ParallaxImageProps) => {
  const parallax = useParallax(parallaxProps);

  return (
    <div
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};
