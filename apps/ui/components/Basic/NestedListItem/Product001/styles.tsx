import styled from "styled-components";

type NestedListItemIconWrapperProps = {
  fontSize?: number;
  lineHeight?: number;
};

type NestedListItemIconProps = {
  isOpen: boolean;
  iconColor?: string;
};

type NestedListItemTextWrapperProps = {
  gap?: number;
};

type NestedListItemTextProps = {
  fontSize?: number;
  lineHeight?: number;
  color?: string;
};

export const StyledNestedListItemWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledNestedListItemIconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight"
})<NestedListItemIconWrapperProps>`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * ${({ lineHeight }) => lineHeight ?? 1.25});
  position: relative;
`;

export const StyledNestedListItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "iconColor"
})<NestedListItemIconProps>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;

export const StyledNestedListItemTextWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<NestedListItemTextWrapperProps>`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 34)};
`;

export const StyledNestedListItemText = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" && prop !== "lineHeight" && prop !== "color"
})<NestedListItemTextProps>`
  display: block;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
`;

export const StyledNestedListItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;
