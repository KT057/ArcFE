import { gsap } from "gsap";
import { useMemo, useRef, useState } from "react";
import {
  StyledToggle,
  StyledToggleCloseLineWrapper,
  StyledToggleInner,
  StyledToggleLine,
  StyledToggleOpenLineWrapper,
  StyledToggleWrapper
} from "./styles";

interface ToggleProps {
  /**
   * 開いているかどうか
   */
  isOpen?: boolean;
  /**
   * 値変更時のコールバック関数
   */
  onChange?: (isOpen: boolean) => void;
  /**
   * クリック時のコールバック関数
   */
  onClick?: () => void;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    lineColor?: string;
    backgroundColor?: string;
  };
}

export const Toggle003 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  appearance
}: ToggleProps) => {
  const openLine1Ref = useRef<HTMLSpanElement>(null);
  const openLine2Ref = useRef<HTMLSpanElement>(null);
  const closeLine1Ref = useRef<HTMLSpanElement>(null);
  const closeLine2Ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef(false);

  const [internalIsOpen, setInternalIsOpen] = useState<boolean | undefined>(
    controlledIsOpen
  );

  const isOpen = useMemo(() => {
    if (internalIsOpen === undefined) return undefined;

    return controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  }, [controlledIsOpen, internalIsOpen]);

  const handleClick = () => {
    const newState = !isOpen;
    animationRef.current = false;
    setInternalIsOpen(newState);
    onChange?.(newState);
    onClick?.();
  };

  const handleMouseEnter = () => {
    if (animationRef.current) return;

    animationRef.current = true;

    if (isOpen) {
      gsap.to([openLine1Ref.current, openLine2Ref.current], {
        x: "100%",
        ease: "power2.inOut",
        duration: 0.3,
        onComplete: () => {
          if (!openLine1Ref.current || !openLine2Ref.current) return;

          gsap.set([openLine1Ref.current, openLine2Ref.current], {
            x: "-100%"
          });

          gsap.to([openLine1Ref.current, openLine2Ref.current], {
            x: "0",
            ease: "power2.inOut",
            duration: 0.3,
            onComplete: () => {
              animationRef.current = false;
            }
          });
        }
      });

      return;
    }

    gsap.to([closeLine1Ref.current, closeLine2Ref.current], {
      x: "100%",
      ease: "power2.inOut",
      duration: 0.3,
      onComplete: () => {
        if (!closeLine1Ref.current || !closeLine2Ref.current) return;

        gsap.set([closeLine1Ref.current, closeLine2Ref.current], {
          x: "-100%"
        });

        gsap.to([closeLine1Ref.current, closeLine2Ref.current], {
          x: "0",
          ease: "power2.inOut",
          duration: 0.3,
          onComplete: () => {
            animationRef.current = false;
          }
        });
      }
    });
  };

  return (
    <StyledToggleWrapper>
      <StyledToggle
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        backgroundColor={appearance?.backgroundColor}
      >
        <StyledToggleInner>
          {isOpen ? (
            <>
              <StyledToggleOpenLineWrapper>
                <StyledToggleLine
                  ref={openLine1Ref}
                  lineColor={appearance?.lineColor}
                />
              </StyledToggleOpenLineWrapper>
              <StyledToggleOpenLineWrapper>
                <StyledToggleLine
                  ref={openLine2Ref}
                  lineColor={appearance?.lineColor}
                />
              </StyledToggleOpenLineWrapper>
            </>
          ) : (
            <>
              <StyledToggleCloseLineWrapper>
                <StyledToggleLine
                  ref={closeLine1Ref}
                  lineColor={appearance?.lineColor}
                />
              </StyledToggleCloseLineWrapper>
              <StyledToggleCloseLineWrapper>
                <StyledToggleLine
                  ref={closeLine2Ref}
                  lineColor={appearance?.lineColor}
                />
              </StyledToggleCloseLineWrapper>
            </>
          )}
        </StyledToggleInner>
      </StyledToggle>
    </StyledToggleWrapper>
  );
};
