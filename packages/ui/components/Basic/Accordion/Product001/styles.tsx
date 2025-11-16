import styled from "styled-components";

type AccordionHeaderProps = {
  borderColor: string;
  paddingSide: number | undefined;
  paddingVertical: number | undefined;
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

export const StyledAccordion = styled.div`
  position: relative;
`;

export const StyledAccordionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["borderColor", "paddingSide", "paddingVertical"].includes(prop)
})<AccordionHeaderProps>`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
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

export const StyledAccordionContent = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["paddingVertical", "paddingSide"].includes(prop)
})<{
  paddingVertical: number | undefined;
  paddingSide: number | undefined;
}>`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
`;

export const StyledAccordionContentText = styled.div<AccordionContentProps>`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color }) => color};
`;
