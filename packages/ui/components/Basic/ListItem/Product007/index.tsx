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
import { StyledListItem, StyledListItemText } from "./styles";

interface ListItemAppearance {
  color?: string;
  animationColor?: string;
  animationDuration?: number;
  animationEase?: EasingKey;
}

type BaseProps = {
  /**
   * HTML 要素タイプ
   */
  as?: "li" | "article";
  /**
   * 表示内容
   */
  children: ReactNode;
  /**
   * 外観をカスタマイズ
   */
  appearance?: ListItemAppearance;
  /**
   * クリック時のコールバック関数
   */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};

type ListItemProps = BaseProps &
  Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps>;

type UseButtonOnClick = NonNullable<Parameters<typeof useButton>[0]["onClick"]>;
type AriaClickEvent = Parameters<UseButtonOnClick>[0];

const defaultAppearance: Required<ListItemAppearance> = {
  color: "#000",
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic"
};

export const ListItem007 = forwardRef<HTMLLIElement, ListItemProps>(
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

    const { color, animationColor, animationDuration, animationEase } =
      mergedAppearance;

    return (
      <StyledListItem
        {...mergedProps}
        ref={handleRef}
        as={as as any}
        $animationColor={animationColor}
        $hasOnClick={!!onClick}
        aria-label="List item"
      >
        <StyledListItemText
          $color={color}
          $animationColor={animationColor}
          $animationDuration={animationDuration}
          $animationEase={animationEase}
        >
          {children}
        </StyledListItemText>
      </StyledListItem>
    );
  }
);

ListItem007.displayName = "ListItem007";
