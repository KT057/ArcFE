import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";

type PaginationButtonProps = {
  isActive: boolean;
  size: Size;
  activeBackgroundColor: string | undefined;
  backgroundColor: string | undefined;
  borderColor: string | undefined;
  borderRadius: number | undefined;
};

type PaginationTextProps = {
  size: Size;
  isActive: boolean;
  activeColor: string | undefined;
  color: string | undefined;
  fontWeight: number | undefined;
};

type PaginationIconProps = {
  size: Size;
};

export const StyledPagination = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(8)};
  flex-wrap: wrap;
`;

export const StyledPaginationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaginationButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "isActive" &&
    prop !== "size" &&
    prop !== "activeBackgroundColor" &&
    prop !== "backgroundColor" &&
    prop !== "borderColor" &&
    prop !== "borderRadius"
})<PaginationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#e2e8f0"};
  border-radius: ${({ borderRadius }) => borderRadius ?? 8}px;
  background-color: ${({ isActive, activeBackgroundColor, backgroundColor }) =>
    isActive
      ? (activeBackgroundColor ?? "#2563eb")
      : (backgroundColor ?? "#ffffff")};
  position: relative;
  overflow: hidden;

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          min-width: ${theme.size.em(32)};
          height: ${theme.size.em(32)};
          padding: ${theme.size.em(6)} ${theme.size.em(8)};
        `;
      case "middle":
        return css`
          min-width: ${theme.size.em(40)};
          height: ${theme.size.em(40)};
          padding: ${theme.size.em(8)} ${theme.size.em(12)};
        `;
      default:
        return css`
          min-width: ${theme.size.em(48)};
          height: ${theme.size.em(48)};
          padding: ${theme.size.em(12)} ${theme.size.em(16)};
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const StyledPaginationText = styled.span.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "isActive" &&
    prop !== "size" &&
    prop !== "activeColor" &&
    prop !== "color" &&
    prop !== "fontWeight"
})<PaginationTextProps>`
  display: block;
  font-weight: ${({ fontWeight }) => fontWeight ?? 500};
  color: ${({ isActive, activeColor, color }) =>
    isActive ? (activeColor ?? "#ffffff") : (color ?? "#374151")};
  line-height: 1;
  position: relative;
  z-index: 1;

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`font-size: ${theme.size.em(12)};`;
      case "middle":
        return css`font-size: ${theme.size.em(14)};`;
      default:
        return css`font-size: ${theme.size.em(16)};`;
    }
  }}
`;

export const StyledPaginationIcon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<PaginationIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  position: relative;
  z-index: 1;

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return css`
          width: ${theme.size.em(14)};
          height: ${theme.size.em(14)};
        `;
      case "middle":
        return css`
          width: ${theme.size.em(16)};
          height: ${theme.size.em(16)};
        `;
      default:
        return css`
          width: ${theme.size.em(18)};
          height: ${theme.size.em(18)};
        `;
    }
  }}
`;
