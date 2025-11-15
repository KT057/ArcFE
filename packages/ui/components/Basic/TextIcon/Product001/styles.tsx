import styled from "styled-components";

export type IconPosition = "left" | "right";

type TextIconProps = {
  $iconPosition: IconPosition;
  $gap?: number;
  $isCenter?: boolean;
};

export const StyledTextIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<TextIconProps>`
  display: flex;
  align-items: ${({ $isCenter }) => ($isCenter ? "center" : "flex-start")};
  justify-content: left;
  gap: ${({ theme, $gap }) => theme.size.rem($gap ?? 4)};
  flex-direction: ${({ $iconPosition }) => ($iconPosition === "left" ? "row-reverse" : "row")};
`;

export const StyledTextIconText = styled.span`
  display: block;
  line-height: 1;
`;

export const StyledTextIconIcon = styled.div<{ $paddingTop?: number }>`
  display: block;
  line-height: 0;
  padding-top: ${({ theme, $paddingTop }) => ($paddingTop !== undefined ? theme.size.rem($paddingTop) : 0)};
`;
