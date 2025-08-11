import styled from "styled-components";

type TextProps = {
  fontSize?: number;
  color?: string;
};

export const StyledText = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledTextContent = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<TextProps>`
  display: block;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
`;
