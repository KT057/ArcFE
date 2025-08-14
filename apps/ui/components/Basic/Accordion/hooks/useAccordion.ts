import { gsap } from "gsap";
import { useCallback, useRef, useState } from "react";
import type { AccordionAnimation } from "..";

type Props = {
  animation: AccordionAnimation | undefined;
};

export const useAccordion = ({ animation }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);

    const content = contentRef.current;
    const icon = iconRef.current;

    if (!content || !icon) return;

    gsap.to(content, {
      height: isOpen ? 0 : "auto",
      duration: animation?.duration ?? 0.3,
      ease: animation?.easing ?? "power2.inOut"
    });

    gsap.to(icon, {
      rotate: isOpen ? 0 : 180,
      duration: animation?.duration ?? 0.1,
      ease: animation?.easing ?? "power2.inOut"
    });
  }, [isOpen, animation]);

  return {
    contentRef,
    iconRef,
    handleClick
  };
};
