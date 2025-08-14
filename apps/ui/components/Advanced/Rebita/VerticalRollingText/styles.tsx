import styled from "styled-components";

interface VerticalRollingTextWrapperProps {
  fontSize?: number;
  color?: string;
}

export const StyledVerticalRollingTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "color"].includes(prop)
})<VerticalRollingTextWrapperProps>`
  ${({ theme }) => theme.font.baseSize.em()}
  display: inline-block;
`;

export const StyledVerticalRollingTextInner = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "color"].includes(prop)
})<VerticalRollingTextWrapperProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ color }) => color || "#000"};
  line-height: 1.5;
  height: 1.5em;
`;

export const StyledVerticalRollingTextContents = styled.span`
  display: block;
  transform: translateY(0);
`;

export const StyledVerticalRollingText = styled.span`
  display: block;
`;
