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
  StyledListItemFrameNumber,
  StyledListItemFrameNumberWrapper,
  StyledListItemText,
  StyledListItemTextWrapper
} from "./styles";

interface ListItemAppearance {
  color?: string;
  gap?: number;
  frameNumberPaddingTop?: number;
  animationOpacity?: number;
  animationDuration?: number;
  animationEase?: EasingKey;
}

type BaseProps = {
  as?: "li" | "article";
  frameNumber: ReactNode;
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
  gap: 44,
  frameNumberPaddingTop: 0,
  animationOpacity: 0.5,
  animationDuration: 0.25,
  animationEase: "easeInOutCubic"
};

export const ListItem006 = forwardRef<HTMLLIElement, ListItemProps>(
  ({ as = "li", frameNumber, children, appearance, onClick, ...rest }, ref) => {
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
      frameNumberPaddingTop,
      animationOpacity,
      animationDuration,
      animationEase
    } = mergedAppearance;

    return (
      <StyledListItem
        {...mergedProps}
        ref={handleRef}
        as={as as any}
        $animationOpacity={animationOpacity}
        $animationDuration={animationDuration}
        $animationEase={animationEase}
        $hasOnClick={!!onClick}
        $gap={gap}
        $alignItemsCenter={frameNumberPaddingTop === 0}
        aria-label={
          typeof frameNumber === "string" ? `Frame ${frameNumber}` : undefined
        }
      >
        <StyledListItemFrameNumberWrapper
          $frameNumberPaddingTop={frameNumberPaddingTop}
        >
          <StyledListItemFrameNumber aria-hidden="true">
            {frameNumber}
          </StyledListItemFrameNumber>
        </StyledListItemFrameNumberWrapper>
        <StyledListItemTextWrapper>
          <StyledListItemText
            $color={color}
            $animationOpacity={animationOpacity}
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

ListItem006.displayName = "ListItem006";
