import gsap from "gsap";
import { type ReactNode, useCallback, useEffect, useRef } from "react";
import {
  StyledVerticalRollingText,
  StyledVerticalRollingTextContents,
  StyledVerticalRollingTextInner,
  StyledVerticalRollingTextWrapper
} from "./styles";

interface VerticalRollingTextProps {
  children?: ReactNode;
  enableHover?: boolean;
  style?: {
    fontSize?: number;
    color?: string;
  };
}

export const VerticalRollingText = ({
  children,
  enableHover,
  style
}: VerticalRollingTextProps) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const contentsRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const onRollingText = useCallback((isHovered: boolean) => {
    const wrapperElement = wrapperRef.current;
    const contentsElement = contentsRef.current;
    const textElement = textRef.current;

    if (!wrapperElement || !contentsElement || !textElement || !isHovered) {
      return;
    }

    const textHeight = textElement.clientHeight;

    gsap.set(contentsElement, {
      transform: "translateY(0)"
    });

    gsap.to(contentsElement, {
      duration: 0.4,
      transform: `translateY(-${textHeight}px)`,
      ease: "power2.inOut"
    });
  }, []);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const contentsElement = contentsRef.current;
    const textElement = textRef.current;

    if (!wrapperElement || !contentsElement || !textElement) return;

    const setHeight = () => {
      const textHeight = textElement.clientHeight;
      wrapperElement.style.height = `${textHeight}px`;
    };

    const handleResize = () => {
      setHeight();
    };

    // Set initial height
    setHeight();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: lint/suppressions/incorrect
  useEffect(() => {
    if (enableHover !== undefined) {
      onRollingText(enableHover);
    }
  }, [enableHover]);

  return (
    <StyledVerticalRollingTextWrapper
      fontSize={style?.fontSize}
      color={style?.color}
    >
      <StyledVerticalRollingTextInner
        ref={wrapperRef}
        fontSize={style?.fontSize}
        color={style?.color}
        onMouseEnter={() => enableHover === undefined && onRollingText(true)}
        onMouseLeave={() => enableHover === undefined && onRollingText(false)}
      >
        <StyledVerticalRollingTextContents ref={contentsRef}>
          <StyledVerticalRollingText ref={textRef}>
            {children}
          </StyledVerticalRollingText>
          <StyledVerticalRollingText>{children}</StyledVerticalRollingText>
        </StyledVerticalRollingTextContents>
      </StyledVerticalRollingTextInner>
    </StyledVerticalRollingTextWrapper>
  );
};
