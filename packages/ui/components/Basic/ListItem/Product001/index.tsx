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
  StyledListItemNumber,
  StyledListItemNumberText,
  StyledListItemText,
  StyledListItemTextWrapper
} from "./styles";

interface ListItemAppearance {
  color?: string;
  gap?: number;
  numberFontSize?: number;
  numberColor?: string;
  numberPaddingTop?: number;
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
   * リストアイテムの番号（文字列）
   */
  number: string;
  /**
   * リストアイテムの表示内容
   */
  children: ReactNode;
  /**
   * リストアイテムの外観をカスタマイズ（色、間隔、フォントサイズ、アニメーションなど）
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
  gap: 10,
  numberFontSize: 24,
  numberColor: "#000",
  numberPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic"
};

export const ListItem001 = forwardRef<HTMLLIElement, ListItemProps>(
  ({ as = "li", number, children, appearance, onClick, ...rest }, ref) => {
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
      numberFontSize,
      numberColor,
      numberPaddingTop,
      animationColor,
      animationDuration,
      animationEase
    } = mergedAppearance;

    return (
      <StyledListItem
        {...mergedProps}
        ref={handleRef}
        as={as as any}
        $animationColor={animationColor}
        $hasOnClick={!!onClick}
        $gap={gap}
        $alignItemsCenter={numberPaddingTop === 0}
        aria-label={`Step ${number}`}
      >
        <StyledListItemNumber $numberPaddingTop={numberPaddingTop}>
          <StyledListItemNumberText
            $numberFontSize={numberFontSize}
            $numberColor={numberColor}
            $animationColor={animationColor}
            $animationDuration={animationDuration}
            $animationEase={animationEase}
            aria-hidden="true"
          >
            {number}
          </StyledListItemNumberText>
        </StyledListItemNumber>
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

ListItem001.displayName = "ListItem001";
