import styled from "styled-components";
import type { SelectVariant } from "./index";

type SelectInnerProps = {
  $variant: SelectVariant;
  $borderColor: string;
  $backgroundColor?: string;
  $focusRingColor?: string;
  $placeholderColor?: string;
};

type SelectFieldProps = {
  $fontSize?: number;
  $color?: string;
  $placeholderColor?: string;
  $hasPlaceholder?: boolean;
};

type SelectIconProps = {
  $color: string;
};

type SelectErrorProps = {
  $errorColor: string;
  $errorFontSize: number;
};

type SelectLabelProps = {
  $fontSize?: number;
  $color?: string;
  $fontWeight?: number | string;
  $marginBottom?: number;
};

export const StyledSelectWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledSelect = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelectLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<SelectLabelProps>`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;

export const StyledSelectInner = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<SelectInnerProps>`
  width: 100%;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:focus-within {
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "rgba(0, 0, 0, 0.25)"};
  }
`;

const defaultFontSize = (size: number | undefined) => size ?? 18;

export const StyledSelectField = styled.select.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<SelectFieldProps>`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ $color, $hasPlaceholder, $placeholderColor }) => ($hasPlaceholder ? ($placeholderColor ?? "#909090") : ($color ?? "#000"))};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize($fontSize))};
  padding: ${({ theme, $fontSize }) => `${theme.size.customEm(12, defaultFontSize($fontSize))} ${theme.size.customEm(16, defaultFontSize($fontSize))}`};
  appearance: none;
  outline: none;
`;

export const StyledSelectIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<SelectIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $color }) => $color ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;

export const StyledSelectError = styled.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<SelectErrorProps>`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
