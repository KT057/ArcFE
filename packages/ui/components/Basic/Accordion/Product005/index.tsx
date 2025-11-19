import type { ReactNode } from "react";
import { useAccordion } from "../hooks/useAccordion";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionContentTitle,
  StyledAccordionContentWrapper,
  StyledAccordionHeader,
  StyledAccordionHeaderInner,
  StyledAccordionIcon,
  StyledAccordionText,
  StyledAccordionTitle,
  StyledAccordionTitleWrapper,
  StyledAccordionWrapper
} from "./styles";

export type AccordionAnimation = {
  duration?: number;
  easing?: gsap.EaseString;
};

interface Props {
  header: {
    title?: ReactNode;
    text: ReactNode;
  };
  content: {
    title?: ReactNode;
    text: ReactNode;
  };
  icon: ReactNode;
  animation?: AccordionAnimation;
  appearance?: {
    iconColor?: string;
    backgroundColor?: string;
    header?: {
      titleColor?: string;
      textColor?: string;
    };
    content?: {
      titleColor?: string;
      textColor?: string;
    };
  };
}

export const Accordion005 = ({
  header,
  content,
  icon,
  appearance,
  animation
}: Props) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });

  return (
    <StyledAccordionWrapper>
      <StyledAccordion backgroundColor={appearance?.backgroundColor ?? "#000"}>
        <StyledAccordionHeader onClick={handleClick}>
          <StyledAccordionHeaderInner>
            <StyledAccordionTitleWrapper>
              <StyledAccordionTitle
                titleColor={appearance?.header?.titleColor ?? "#f10707"}
              >
                {header.title ?? "Q"}
              </StyledAccordionTitle>
              <StyledAccordionText
                textColor={appearance?.header?.textColor ?? "#000"}
              >
                {header.text}
              </StyledAccordionText>
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
          <StyledAccordionContent>
            <StyledAccordionContentTitle
              titleColor={appearance?.content?.titleColor ?? "#000"}
            >
              {content.title ?? "A"}
            </StyledAccordionContentTitle>
            <StyledAccordionContentText
              textColor={appearance?.content?.textColor ?? "#000"}
            >
              {content.text}
            </StyledAccordionContentText>
          </StyledAccordionContent>
        </StyledAccordionContentWrapper>
      </StyledAccordion>
    </StyledAccordionWrapper>
  );
};
