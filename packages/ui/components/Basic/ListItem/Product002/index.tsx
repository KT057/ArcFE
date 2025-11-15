import { useButton } from "@react-aria/button";
import { mergeProps } from "@react-aria/utils";
import {
  forwardRef,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  useCallback,
  useMemo,
  useRef
} from "react";
import type { EasingKey } from "../../../../styles/easing";
import {
  StyledListItem,
  StyledListItemPoint,
  StyledListItemPointWrapper,
  StyledListItemText,
  StyledListItemTextWrapper
} from "./styles";

interface ListItemAppearance {
  color?: string;
  gap?: number;
  pointSize?: number;
  pointColor?: string;
  pointPaddingTop?: number;
  animationColor?: string;
  animationDuration?: number;
  animationEase?: EasingKey;
  animationPointColor?: string;
}

type BaseProps = {
  as?: "li" | "article";
  children: ReactNode;
  appearance?: ListItemAppearance;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

type ListItemProps = BaseProps &
  Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps>;

type UseButtonOnClick = NonNullable<Parameters<typeof useButton>[0]["onClick"]>;
type AriaClickEvent = Parameters<UseButtonOnClick>[0];

const defaultAppearance: Required<ListItemAppearance> = {
  color: "#000",
  gap: 24,
  pointSize: 8,
  pointColor: "#000",
  pointPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationPointColor: "#ccc"
};

export const ListItem002 = forwardRef<HTMLLIElement, ListItemProps>(
  ({ as = "li", children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance, ...appearance }),
      [appearance]
    );

    const localRef = useRef<HTMLLIElement | HTMLElement | null>(null);

    const handleAriaClick = useCallback(
      (event: AriaClickEvent) => {
        onClick?.(event as MouseEvent<HTMLElement>);
      },
      [onClick]
    );

    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );

    const handleRef = useCallback(
      (node: HTMLLIElement | HTMLElement | null) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node as HTMLLIElement | null);
        } else {
          (ref as RefObject<HTMLLIElement | null>).current =
            node as HTMLLIElement | null;
        }
      },
      [ref]
    );

    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;

    const {
      color,
      gap,
      pointSize,
      pointColor,
      pointPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationPointColor
    } = mergedAppearance;

    return (
      <StyledListItem
        {...mergedProps}
        ref={handleRef}
        as={as as any}
        $animationColor={animationColor}
        $animationPointColor={animationPointColor}
        $hasOnClick={!!onClick}
        $gap={gap}
        $alignItemsCenter={pointPaddingTop === 0}
        aria-label="List item"
      >
        <StyledListItemPointWrapper $pointPaddingTop={pointPaddingTop}>
          <StyledListItemPoint
            $pointSize={pointSize}
            $pointColor={pointColor}
            $animationPointColor={animationPointColor}
            $animationDuration={animationDuration}
            $animationEase={animationEase}
            aria-hidden="true"
          />
        </StyledListItemPointWrapper>
        <StyledListItemTextWrapper>
          <StyledListItemText
            $color={color}
            $animationColor={animationColor}
            $animationDuration={animationDuration}
            $animationEase={animationEase}
          >
            {children}
          </StyledListItemText>
        </StyledListItemTextWrapper>
      </StyledListItem>
    );
  }
);

ListItem002.displayName = "ListItem002";
