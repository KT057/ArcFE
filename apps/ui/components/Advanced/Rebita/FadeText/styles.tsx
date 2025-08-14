import styled from "styled-components";

interface FadeTextProps {
  color?: string;
  fontSize?: number;
  progress?: number;
}

export const StyledFadeTextWrapper = styled.span.withConfig({
  shouldForwardProp: (prop) => !["color", "fontSize", "progress"].includes(prop)
})<FadeTextProps>`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFadeTextContainer = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})<{ fontSize?: number }>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  line-height: 1.5;
  height: 1.5em;
  width: 100%;
  position: relative;
  display: block;
`;

export const StyledFadeText = styled.span.withConfig({
  shouldForwardProp: (prop) => !["color", "isFirst", "progress"].includes(prop)
})<{ color?: string; isFirst?: boolean; progress?: number }>`
  color: ${({ color }) => color || "#3b82f6"};
  position: absolute;
  top: 0;
  left: 0;

  ${({ isFirst, progress }) =>
    isFirst
      ? `
        clip-path: inset(0 ${100 - (progress || 0)}% 0 0);
        opacity: 1;
      `
      : `
        opacity: 0.2;
      `}
`;
