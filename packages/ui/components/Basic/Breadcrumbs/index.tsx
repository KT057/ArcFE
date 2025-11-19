import type { EasingKey } from "../../../styles/easing";
import { Svg004Icon } from "../Icons";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsItem,
  StyledBreadcrumbsItemIcon,
  StyledBreadcrumbsItemLink,
  StyledBreadcrumbsItemText,
  StyledBreadcrumbsWrapper
} from "./styles";

type BreadcrumbsItem = {
  text: string;
  link?: {
    href: string;
    target?: "_blank";
  };
};

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
  appearance?: {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    fontWeight?: number;
    fontSize?: number;
    hoverColor?: string;
    duration?: number;
    easing?: EasingKey;
    iconColor?: string;
  };
}

export const Breadcrumbs = ({ items, appearance }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbsWrapper>
      <StyledBreadcrumbs>
        {items.map((item, index) => (
          <StyledBreadcrumbsItem key={item.text}>
            {item.link ? (
              <StyledBreadcrumbsItemLink
                href={item.link.href}
                target={item.link.target}
                duration={appearance?.duration ?? 0.3}
                easing={appearance?.easing ?? "easeInOutSine"}
                fontSize={appearance?.fontSize ?? 16}
                color={appearance?.color ?? "#000"}
                hoverColor={appearance?.hoverColor ?? "#ccc"}
              >
                {item.text}
              </StyledBreadcrumbsItemLink>
            ) : (
              <StyledBreadcrumbsItemText
                fontSize={appearance?.fontSize ?? 16}
                color={appearance?.color ?? "#000"}
              >
                {item.text}
              </StyledBreadcrumbsItemText>
            )}
            {index !== items.length - 1 && (
              <StyledBreadcrumbsItemIcon
                color={appearance?.iconColor ?? "#000"}
              >
                <Svg004Icon />
              </StyledBreadcrumbsItemIcon>
            )}
          </StyledBreadcrumbsItem>
        ))}
      </StyledBreadcrumbs>
    </StyledBreadcrumbsWrapper>
  );
};
