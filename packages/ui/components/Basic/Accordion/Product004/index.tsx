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
    title: ReactNode;
    text: ReactNode;
  };
  content: {
    title: ReactNode;
    text: ReactNode;
  };
  icon: ReactNode;
  animation?: AccordionAnimation;
  style?: {
    iconColor?: string;
    borderColor?: string;
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

export const Accordion004 = ({
  header,
  content,
  icon,
  style,
  animation
}: Props) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });

  return (
    <StyledAccordionWrapper>
      <StyledAccordion>
        <StyledAccordionHeader
          borderColor={style?.borderColor ?? "#000"}
          onClick={handleClick}
        >
          <StyledAccordionHeaderInner>
            <StyledAccordionTitleWrapper>
              <StyledAccordionTitle
                titleColor={style?.header?.titleColor ?? "#f10707"}
              >
                {header.title}
              </StyledAccordionTitle>
              <StyledAccordionText
                textColor={style?.header?.textColor ?? "#000"}
              >
                {header.text}
              </StyledAccordionText>
            </StyledAccordionTitleWrapper>

            <StyledAccordionIcon
              ref={iconRef}
              color={style?.iconColor ?? "#000"}
            >
              {icon}
            </StyledAccordionIcon>
          </StyledAccordionHeaderInner>
        </StyledAccordionHeader>

        <StyledAccordionContentWrapper ref={contentRef}>
          <StyledAccordionContent>
            <StyledAccordionContentTitle
              titleColor={style?.content?.titleColor ?? "#000"}
            >
              {content.title}
            </StyledAccordionContentTitle>
            <StyledAccordionContentText
              textColor={style?.content?.textColor ?? "#000"}
            >
              {content.text}
            </StyledAccordionContentText>
          </StyledAccordionContent>
        </StyledAccordionContentWrapper>
      </StyledAccordion>
    </StyledAccordionWrapper>
  );
};
