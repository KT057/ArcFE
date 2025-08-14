import styled from "styled-components";
import type { EasingKey } from "../../../styles/easing";

type BreadcrumbsItemLinkProps = {
  duration: number;
  easing: EasingKey;
  fontSize: number;
  color: string;
  hoverColor: string;
};

type BreadcrumbsTextProps = {
  fontSize: number;
  color: string;
};

type BreadcrumbsItemIconProps = {
  color: string;
};

export const StyledBreadcrumbsWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledBreadcrumbs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;

export const StyledBreadcrumbsItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;

export const StyledBreadcrumbsItemText = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<BreadcrumbsTextProps>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color }) => color};
`;

export const StyledBreadcrumbsItemLink = styled.a.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "fontSize" &&
    prop !== "color" &&
    prop !== "duration" &&
    prop !== "easing" &&
    prop !== "hoverColor"
})<BreadcrumbsItemLinkProps>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color }) => color};
  transition: color ${({ duration }) => duration}s ${({ theme, easing }) => theme.animation.easing[easing]};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

export const StyledBreadcrumbsItemIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})<BreadcrumbsItemIconProps>`
  color: ${({ color }) => color};
  width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
`;
