import styled from "styled-components";

type RadioGroupProps = {
  $orientation?: "vertical" | "horizontal";
  $gap?: number;
};

type RadioGroupLabelProps = {
  $fontSize?: number;
  $color?: string;
  $fontWeight?: number | string;
  $marginBottom?: number;
  $orientation?: "vertical" | "horizontal";
};

export const StyledRadioGroup = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioGroupProps>`
  ${({ theme }) => theme.font.baseSize.em()}
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === "horizontal" ? "row" : "column")};
  flex-wrap: ${({ $orientation }) => ($orientation === "horizontal" ? "wrap" : "nowrap")};
  align-items: ${({ $orientation }) => ($orientation === "horizontal" ? "center" : "stretch")};
  gap: ${({ theme, $gap }) => theme.size.em($gap ?? 8)};
`;

export const StyledRadioGroupLabel = styled.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioGroupLabelProps>`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) =>
    theme.size.em($marginBottom ?? 8)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "bold"};
  width: ${({ $orientation }) => ($orientation === "horizontal" ? "100%" : "auto")};
`;
