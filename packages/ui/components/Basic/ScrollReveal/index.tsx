import { type ReactNode, useEffect, useRef, useState } from "react";
import { StyledScrollRevealWrapper } from "./styles";

export type ScrollRevealAnimationType =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight";

type Props = {
  /**
   * 表示内容
   */
  children: ReactNode;
  /**
   * スタイルタイプ
   */
  type?: ScrollRevealAnimationType;
  /**
   * duration の値
   */
  duration?: number;
  /**
   * delay の値
   */
  delay?: number;
  /**
   * distance の値
   */
  distance?: number;
  /**
   * threshold の値
   */
  threshold?: number;
  /**
   * rootMargin の値
   */
  rootMargin?: string;
  /**
   * triggerOnce の設定
   */
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
