import { type ReactNode, useEffect, useRef, useState } from "react";
import { StyledScrollRevealWrapper } from "./styles";

export type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

type Props = {
  children: ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  distance?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const ScrollReveal = ({
  children,
  type = "fadeUp",
  duration = 0.6,
  delay = 0,
  distance = 40,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
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
  }, [threshold, rootMargin, triggerOnce]);

  return (
    <StyledScrollRevealWrapper
      ref={wrapperRef}
      $isVisible={isVisible}
      $type={type}
      $duration={duration}
      $delay={delay}
      $distance={distance}
    >
      {children}
    </StyledScrollRevealWrapper>
  );
};
