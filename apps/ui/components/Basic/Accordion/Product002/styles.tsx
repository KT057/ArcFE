import styled from "styled-components";

type AccordionProps = {
  backgroundColor: string;
};

type AccordionTitleProps = {
  color: string;
};

type AccordionIconProps = {
  color: string;
};

type AccordionContentProps = {
  color: string;
};

export const StyledAccordionWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledAccordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})<AccordionProps>`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledAccordionHeader = styled.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
`;

export const StyledAccordionHeaderInner = styled.div`
  position: relative;
`;

export const StyledAccordionTitleWrapper = styled.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;

export const StyledAccordionTitle = styled.div<AccordionTitleProps>`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const StyledAccordionIcon = styled.div<AccordionIconProps>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color }) => color};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;

export const StyledAccordionContentWrapper = styled.div`
  overflow: hidden;
  height: 0;
`;

export const StyledAccordionContent = styled.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
`;

export const StyledAccordionContentText = styled.div<AccordionContentProps>`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color }) => color};
`;
