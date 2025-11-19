import type { ReactNode } from "react";
import { useAccordion } from "../hooks/useAccordion";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionContentWrapper,
  StyledAccordionHeader,
  StyledAccordionHeaderInner,
  StyledAccordionIcon,
  StyledAccordionTitle,
  StyledAccordionTitleWrapper,
  StyledAccordionWrapper
} from "./styles";

export type AccordionAnimation = {
  duration?: number;
  easing?: gsap.EaseString;
};

interface Props {
  headerContent: ReactNode;
  content: ReactNode;
  icon: ReactNode;
  animation?: AccordionAnimation;
  appearance?: {
    paddingSide?: number;
    paddingVertical?: number;
    iconColor?: string;
    borderColor?: string;
    header?: {
      color?: string;
    };
    content?: {
      color?: string;
    };
  };
}

export const Accordion001 = ({
  headerContent,
  content,
  icon,
  appearance,
  animation
}: Props) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });

  return (
    <StyledAccordionWrapper>
      <StyledAccordion>
        <StyledAccordionHeader
          borderColor={appearance?.borderColor ?? "#000"}
          paddingSide={appearance?.paddingSide}
          paddingVertical={appearance?.paddingVertical}
          onClick={handleClick}
        >
          <StyledAccordionHeaderInner>
            <StyledAccordionTitleWrapper>
              <StyledAccordionTitle color={appearance?.header?.color ?? "#000"}>
                {headerContent}
              </StyledAccordionTitle>
            </StyledAccordionTitleWrapper>

            <StyledAccordionIcon
              ref={iconRef}
              color={appearance?.iconColor ?? "#000"}
            >
              {icon}
            </StyledAccordionIcon>
          </StyledAccordionHeaderInner>
        </StyledAccordionHeader>

        <StyledAccordionContentWrapper ref={contentRef}>
          <StyledAccordionContent
            paddingSide={appearance?.paddingSide}
            paddingVertical={appearance?.paddingVertical}
          >
            <StyledAccordionContentText
              color={appearance?.content?.color ?? "#000"}
            >
              {content}
            </StyledAccordionContentText>
          </StyledAccordionContent>
        </StyledAccordionContentWrapper>
      </StyledAccordion>
    </StyledAccordionWrapper>
  );
};
