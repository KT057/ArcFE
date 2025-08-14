import styled from "styled-components";

type AccordionProps = {
  backgroundColor: string;
};

type AccordionHeaderTitleProps = {
  titleColor: string;
};

type AccordionHeaderTextProps = {
  textColor: string;
};

type AccordionIconProps = {
  color: string;
};

type AccordionContentTitleProps = {
  titleColor: string;
};

type AccordionContentTextProps = {
  textColor: string;
};

export const StyledAccordionWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledAccordion = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})<AccordionProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`;

export const StyledAccordionHeader = styled.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
  position: relative;
`;

export const StyledAccordionHeaderInner = styled.div`
  position: relative;
`;

export const StyledAccordionTitleWrapper = styled.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;

export const StyledAccordionTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})<AccordionHeaderTitleProps>`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;

export const StyledAccordionText = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})<AccordionHeaderTextProps>`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ textColor }) => textColor};
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
  display: flex;
  gap: ${({ theme }) => theme.size.em(10)};
`;

export const StyledAccordionContentTitle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})<AccordionContentTitleProps>`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;

export const StyledAccordionContentText = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})<AccordionContentTextProps>`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ textColor }) => textColor};
`;
