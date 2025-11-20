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
  StyledListItemIcon,
  StyledListItemIconWrapper,
  StyledListItemText,
  StyledListItemTextWrapper
} from "./styles";

interface ListItemAppearance {
  color?: string;
  gap?: number;
  iconColor?: string;
  iconPaddingTop?: number;
  animationColor?: string;
  animationDuration?: number;
  animationEase?: EasingKey;
  animationIconColor?: string;
}

type BaseProps = {
  /**
   * HTML 要素タイプ
   */
  as?: "li" | "article";
  /**
   * アイコン
   */
  icon: ReactNode;
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
  gap: 8,
  iconColor: "#000",
  iconPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationIconColor: "#ccc"
};

export const ListItem004 = forwardRef<HTMLLIElement, ListItemProps>(
  ({ as = "li", icon, children, appearance, onClick, ...rest }, ref) => {
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
      iconColor,
      iconPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationIconColor
    } = mergedAppearance;

    return (
      <StyledListItem
        {...mergedProps}
        ref={handleRef}
        as={as as any}
        $animationColor={animationColor}
        $animationIconColor={animationIconColor}
        $hasOnClick={!!onClick}
        $gap={gap}
        $alignItemsCenter={iconPaddingTop === 0}
        aria-label="List item"
      >
        <StyledListItemIconWrapper $iconPaddingTop={iconPaddingTop}>
          <StyledListItemIcon
            $iconColor={iconColor}
            $animationIconColor={animationIconColor}
            $animationDuration={animationDuration}
            $animationEase={animationEase}
            aria-hidden="true"
          >
            {icon}
          </StyledListItemIcon>
        </StyledListItemIconWrapper>
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

ListItem004.displayName = "ListItem004";
