import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactNode, ComponentProps, MouseEvent, ButtonHTMLAttributes, SVGProps, HTMLAttributes, FC } from 'react';
import { ParallaxProps, BannerLayer } from 'react-scroll-parallax';
import { AriaRadioProps } from '@react-types/radio';
import { KeenSliderOptions } from 'keen-slider/react';
import { KeenSliderInstance, KeenSliderHooks } from 'keen-slider';
import * as styled_components from 'styled-components';
import { css, RuleSet } from 'styled-components';

declare const easing: {
    easeInSine: string;
    easeOutSine: string;
    easeInOutSine: string;
    easeInQuad: string;
    easeOutQuad: string;
    easeInOutQuad: string;
    easeInCubic: string;
    easeOutCubic: string;
    easeInOutCubic: string;
    easeInQuart: string;
    easeOutQuart: string;
    easeInOutQuart: string;
    easeInQuint: string;
    easeOutQuint: string;
    easeInOutQuint: string;
    easeInExpo: string;
    easeOutExpo: string;
    easeInOutExpo: string;
    easeInCirc: string;
    easeOutCirc: string;
    easeInOutCirc: string;
    easeInBack: string;
    easeOutBack: string;
    easeInOutBack: string;
    easeInOutFast: string;
    authenticMotion: string;
};
type EasingKey = keyof typeof easing;

type AnimationType$2 = "001" | "002";
interface BgImageContentProps {
    children: React.ReactNode;
    imageUrl: string;
    height: number;
    animationType?: AnimationType$2;
    appearance?: {
        scale?: number;
        duration?: number;
        easing?: EasingKey;
    };
}
declare const BgImageContent: ({ children, imageUrl, height, animationType, appearance }: BgImageContentProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps$1 {
    progress: number;
    size: number;
    appearance?: {
        primaryColor?: string;
        trackColor?: string;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const CircleProgress: ({ progress, size, appearance }: CircleProgressProps$1) => react_jsx_runtime.JSX.Element;

type FadeInAndZoomImagesImageItem = {
    src: string;
    alt?: string;
};
interface FadeInAndZoomImagesProps {
    images: FadeInAndZoomImagesImageItem[];
    duration?: number;
    fadeDuration?: number;
    scaleFrom?: number;
    scaleTo?: number;
    height?: number;
    zoomDirection?: "in" | "out" | "none";
    state?: {
        currentIndex: number;
        setCurrentIndex: (index: number) => void;
    };
    onImageChange?: (currentIndex: number) => void;
    onProgress?: (progress: number) => void;
    onCurrentIndexChange?: () => void;
}
declare const FadeInAndZoomImages: ({ images, duration, fadeDuration, scaleFrom, scaleTo, zoomDirection, state, height, onImageChange, onProgress }: FadeInAndZoomImagesProps) => react_jsx_runtime.JSX.Element | null;

type Size = "small" | "middle" | "large";
declare const PC_SIZE = 1280;
declare const TABLET_SIZE = 768;
declare const SP_SIZE = 480;
declare const REM_SIZE = 16;

interface ArrowButtonProps {
    size?: Size;
    onClick?: () => void;
    as?: "button" | "a" | "span";
    href?: string;
    appearance?: {
        iconColor?: string;
        borderColor?: string;
        backgroundColor?: string;
        hoverIconColor?: string;
        hoverBorderColor?: string;
        hoverBackgroundColor?: string;
    };
}
declare const JmcArrowButton: ({ size, onClick, as, href, appearance }: ArrowButtonProps) => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    children: React__default.ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "span";
    href?: string;
    isHovered?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    appearance?: {
        fontSize?: number;
        backgroundColor?: string;
        color?: string;
        circleToggleColor?: string;
        circleToggleDotColor?: string;
    };
}
declare const JmcButton: ({ children, onClick, as, href, isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, appearance }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleToggleProps {
    isHovered?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    appearance?: {
        color?: string;
        dotColor?: string;
    };
}
declare const JmcCircleToggle: ({ isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, onClick, appearance }: CircleToggleProps) => react_jsx_runtime.JSX.Element;

type DirectionType = "left" | "right";

interface RebitaButtonProps {
    size?: Size;
    direction?: DirectionType;
    text?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "div";
    href?: string;
    appearance?: {
        fontSize?: number;
        backgroundColor?: string;
        textColor?: string;
        iconColor?: string;
        borderColor?: string;
        leftContentBorderColor?: string;
    };
}
declare const RebitaButton: ({ size, direction, text, icon, onClick, as, href, appearance }: RebitaButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps {
    progress?: number;
    children?: ReactNode;
    appearance?: {
        primaryColor?: string;
        trackColor?: string;
        textColor?: string;
        fontSize?: number;
        size?: number;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const RebitaCircleProgress: ({ progress, children, appearance }: CircleProgressProps) => react_jsx_runtime.JSX.Element;

type SlideGuideDotType = "default" | "progress";

interface SlideGuideDotProps {
    type: SlideGuideDotType;
    progress: number;
    onClick: () => void;
    appearance?: {
        primaryColor?: string;
        trackColor?: string;
        circleSize?: number;
        dotSize?: number;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const RebitaSlideGuideDot: ({ type, progress, appearance, onClick }: SlideGuideDotProps) => react_jsx_runtime.JSX.Element;

interface FadeSlideImageProps {
    images: FadeInAndZoomImagesImageItem[];
    fadeInAndZoomImagesProps?: Partial<ComponentProps<typeof FadeInAndZoomImages>>;
    slideGuideDotProps?: Partial<ComponentProps<typeof RebitaSlideGuideDot>>;
    appearance?: {
        guideGap?: number;
    };
}
declare const RebitaFadeSlideImage: ({ images, fadeInAndZoomImagesProps, slideGuideDotProps, appearance }: FadeSlideImageProps) => react_jsx_runtime.JSX.Element;

interface FadeTextProps {
    children?: ReactNode;
    progress?: number;
    appearance?: {
        color?: string;
        fontSize?: number;
    };
}
declare const RebitaFadeText: ({ children, progress, appearance }: FadeTextProps) => react_jsx_runtime.JSX.Element;

interface PanelProps {
    imageSrc: string;
    imageAlt?: string;
    imageText: string;
    title: string;
    description: string;
    labels: ReactNode[];
    appearance?: {
        imageHeight?: number;
    };
    onClick: () => void;
}
declare const RebitaPanel: ({ imageSrc, imageAlt, imageText, title, description, labels, appearance, onClick }: PanelProps) => react_jsx_runtime.JSX.Element;

type Direction$1 = "left" | "right";
interface TextButtonWithIconProps {
    text?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "div";
    href?: string;
    iconDirection?: Direction$1;
    appearance?: {
        fontSize?: number;
        color?: string;
        iconSize?: Size;
    };
}
declare const RebitaTextButtonWithIcon: ({ text, icon, onClick, as, href, iconDirection, appearance }: TextButtonWithIconProps) => react_jsx_runtime.JSX.Element;

interface ToggleProps$4 {
    size?: Size;
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    appearance?: {
        backgroundColor?: string;
        dotColor?: string;
        lineColor?: string;
    };
}
declare const RebitaToggle: ({ size, isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$4) => react_jsx_runtime.JSX.Element;

interface VerticalRollingTextProps {
    children?: ReactNode;
    enableHover?: boolean;
    appearance?: {
        fontSize?: number;
        color?: string;
    };
}
declare const VerticalRollingText: ({ children, enableHover, appearance }: VerticalRollingTextProps) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$4 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$b {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$4;
    appearance?: {
        paddingSide?: number;
        paddingVertical?: number;
        iconColor?: string;
        borderColor?: string;
        header?: {
            color?: string;
        };
        content?: {
            color?: string;
        };
    };
}
declare const Accordion001: ({ headerContent, content, icon, appearance, animation }: Props$b) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$3 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$a {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$3;
    appearance?: {
        iconColor?: string;
        backgroundColor?: string;
        header?: {
            color?: string;
        };
        content?: {
            color?: string;
        };
    };
}
declare const Accordion002: ({ headerContent, content, icon, appearance, animation }: Props$a) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$2 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$9 {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$2;
    appearance?: {
        iconColor?: string;
        backgroundColor?: string;
        header?: {
            backgroundColor?: string;
            barColor?: string;
            color?: string;
        };
        content?: {
            color?: string;
        };
    };
}
declare const Accordion003: ({ headerContent, content, icon, appearance, animation }: Props$9) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$1 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$8 {
    header: {
        title: ReactNode;
        text: ReactNode;
    };
    content: {
        title: ReactNode;
        text: ReactNode;
    };
    icon: ReactNode;
    animation?: AccordionAnimation$1;
    appearance?: {
        paddingSide?: number;
        paddingVertical?: number;
        iconColor?: string;
        borderColor?: string;
        header?: {
            titleColor?: string;
            textColor?: string;
        };
        content?: {
            titleColor?: string;
            textColor?: string;
        };
    };
}
declare const Accordion004: ({ header, content, icon, appearance, animation }: Props$8) => react_jsx_runtime.JSX.Element;

type AccordionAnimation = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$7 {
    header: {
        title?: ReactNode;
        text: ReactNode;
    };
    content: {
        title?: ReactNode;
        text: ReactNode;
    };
    icon: ReactNode;
    animation?: AccordionAnimation;
    appearance?: {
        iconColor?: string;
        backgroundColor?: string;
        header?: {
            titleColor?: string;
            textColor?: string;
        };
        content?: {
            titleColor?: string;
            textColor?: string;
        };
    };
}
declare const Accordion005: ({ header, content, icon, appearance, animation }: Props$7) => react_jsx_runtime.JSX.Element;

type Type$a = "001" | "002";
type ArrowPosition$1 = "top" | "bottom" | "left" | "right";

interface BalloonProps$1 {
    type?: Type$a;
    children: ReactNode;
    arrowPosition?: ArrowPosition$1;
    appearance?: {
        backgroundColor?: string;
        color?: string;
        fontSize?: number;
    };
}
declare const Balloon001: ({ type, children, appearance, arrowPosition }: BalloonProps$1) => react_jsx_runtime.JSX.Element;

type Type$9 = "001" | "002";
type ArrowPosition = "top" | "bottom" | "left" | "right";

interface BalloonProps {
    type?: Type$9;
    children: ReactNode;
    arrowPosition?: ArrowPosition;
    appearance?: {
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        fontSize?: number;
    };
}
declare const Balloon002: ({ type, children, appearance, arrowPosition }: BalloonProps) => react_jsx_runtime.JSX.Element;

type Direction = "top" | "bottom" | "left" | "right" | "all";
type Props$6 = {
    direction: Direction;
    fadeStart?: number;
    bgColor: string;
    blurAmount?: number;
    children?: React__default.ReactNode;
};
declare const BlurBg: ({ direction, fadeStart, bgColor, blurAmount, children }: Props$6) => react_jsx_runtime.JSX.Element;

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
declare const Breadcrumbs: ({ items, appearance }: BreadcrumbsProps) => react_jsx_runtime.JSX.Element;

type Type$8 = "001" | "002" | "003";
type AnimationType$1 = "001" | "002";
type Animation$1 = {
    type: AnimationType$1;
    duration?: number;
    easing?: EasingKey;
    backgroundColor?: string;
    textColor?: string;
};

interface ButtonAppearance$1 {
    backgroundColor?: string;
    borderColor?: string;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    fontSize?: number;
    color?: string;
    fontWeight?: number;
    disabledColor?: string;
    disabledBackgroundColor?: string;
    disabledBorderColor?: string;
}
type BaseProps$7 = {
    as?: "button" | "a" | "span";
    type?: Type$8;
    size?: Size;
    children: ReactNode;
    animation?: Animation$1;
    disabled?: boolean;
    appearance?: ButtonAppearance$1;
    fullWidth?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button001: React$1.ForwardRefExoticComponent<BaseProps$7 & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps$7> & {
    href?: string;
    target?: string;
    rel?: string;
} & React$1.RefAttributes<HTMLButtonElement>>;

type Type$7 = "001" | "002" | "003" | "004" | "005" | "006" | "007" | "008" | "009";
type AnimationType = "001" | "002" | "003" | "004";
type IconDirection = "left" | "right";
type Animation = {
    type: AnimationType;
    duration?: number;
    easing?: EasingKey;
    backgroundColor?: string;
    textColor?: string;
};

interface ButtonAppearance {
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    iconSize?: number;
    fontSize?: number;
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    fontWeight?: number;
    disabledColor?: string;
    disabledBackgroundColor?: string;
    disabledBorderColor?: string;
}
type BaseProps$6 = {
    as?: "button" | "a" | "span";
    type?: Type$7;
    size?: Size;
    children: ReactNode;
    animation?: Animation;
    appearance?: ButtonAppearance;
    iconDirection?: IconDirection;
    icon: ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button002: React$1.ForwardRefExoticComponent<BaseProps$6 & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps$6> & {
    href?: string;
    target?: string;
    rel?: string;
} & React$1.RefAttributes<HTMLButtonElement>>;

type CheckBoxType = "001" | "002" | "003";
interface CheckBoxProps$1 {
    id: string;
    type: CheckBoxType;
    size: Size;
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    appearance?: {
        backgroundColor?: string;
        borderColor?: string;
        checkedBackgroundColor?: string;
        markColor?: string;
    };
}
declare const CheckBox001: ({ appearance, id, type, size, name, checked, defaultChecked, disabled, onChange }: CheckBoxProps$1) => react_jsx_runtime.JSX.Element;

type CheckBoxSize = "small" | "middle";
interface CheckBoxProps {
    id: string;
    size: CheckBoxSize;
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    appearance?: {
        backgroundColor?: string;
        borderColor?: string;
        checkedBackgroundColor?: string;
        markColor?: string;
    };
}
declare const CheckBox002: ({ appearance, id, size, name, checked, defaultChecked, disabled, onChange }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface ListItemWithContent {
    id: string;
    content: React__default.ReactNode;
}
interface ListItem$1 {
    id: string;
}
interface DragAndDropProps {
    items: ListItemWithContent[];
    appearance?: {
        gap?: number;
    };
    onReorder: (items: ListItem$1[]) => void;
}
declare const DragAndDrop001: ({ items, appearance, onReorder }: DragAndDropProps) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps$1 {
    detail: ReactNode;
    contents: ReactNode;
    nowrap?: boolean;
    appearance?: {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number;
    };
}
declare const Dropdown001: ({ appearance, detail, contents, nowrap }: DropdownMenuProps$1) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps {
    detail: ReactNode;
    contents: ReactNode;
    nowrap?: boolean;
    appearance?: {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number;
    };
    balloonProps?: ComponentProps<typeof Balloon001>;
}
declare const Dropdown002: ({ appearance, detail, contents, nowrap, balloonProps }: DropdownMenuProps) => react_jsx_runtime.JSX.Element;

type Type$6 = "001" | "002" | "003";
interface FrameIconProps {
    icon: React.ReactNode;
    type: Type$6;
    size: Size;
    appearance?: {
        backgroundColor?: string;
        iconColor?: string;
        borderColor?: string;
    };
}
declare const FrameIcon001: ({ appearance, type, size, icon }: FrameIconProps) => react_jsx_runtime.JSX.Element;

type Type$5 = "001" | "002" | "003";
interface FrameNumberProps {
    number: number;
    type: Type$5;
    size: Size;
    appearance?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
}
declare const FrameNumber001: ({ appearance, type, size, number }: FrameNumberProps) => react_jsx_runtime.JSX.Element;

type Props$5 = {
    mapId: string;
    defaultCenter?: {
        lat: number;
        lng: number;
    };
    defaultZoom?: number;
    disableDefaultUI?: boolean;
    children: ReactNode;
};
declare const GoogleMap: ({ defaultCenter, defaultZoom, disableDefaultUI, mapId, children }: Props$5) => react_jsx_runtime.JSX.Element;

interface Header001Props {
    left?: React.ReactNode;
    right?: React.ReactNode;
    leftInner?: React.ReactNode;
    rightInner?: React.ReactNode;
    modalContent?: React.ReactNode;
    showModal?: boolean;
    appearance?: {
        leftGap?: number;
        rightGap?: number;
        header?: {
            sidePadding?: number;
            height?: number;
            backgroundColor?: string;
            animation?: {
                backgroundColor?: string;
                duration?: string;
                easing?: EasingKey;
            };
        };
    };
}
declare const Header001: ({ left, right, leftInner, rightInner, modalContent, appearance, showModal }: Header001Props) => react_jsx_runtime.JSX.Element;

declare const Svg001: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg002: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg003: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg004: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg005: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg006: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg007: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg008: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg009: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg010: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg011: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg012: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg013: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg014: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg015: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg016: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg017: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg018: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg019: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg020: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg021: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg022: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg023: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg024: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg025: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg026: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg027: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg028: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg029: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg030: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg031: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg032: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg033: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg034: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg035: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg036: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg037: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg038: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg039: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg040: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg041: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg042: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const Svg043: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

type Props$4 = {
    pc: {
        src: string;
    };
    sp: {
        src: string;
    };
    alt: string;
    objectFit?: boolean;
};
declare const Image: ({ pc, sp, alt, objectFit }: Props$4) => react_jsx_runtime.JSX.Element;

type InputVariant$3 = "001" | "002";
interface InputProps$5 {
    variant?: InputVariant$3;
    size?: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input001: React__default.ForwardRefExoticComponent<InputProps$5 & React__default.RefAttributes<HTMLInputElement>>;

interface InputProps$4 {
    size?: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input002: React__default.ForwardRefExoticComponent<InputProps$4 & React__default.RefAttributes<HTMLInputElement>>;

interface InputProps$3 {
    size?: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input003: React__default.ForwardRefExoticComponent<InputProps$3 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant$2 = "001" | "002";
interface InputProps$2 {
    variant?: InputVariant$2;
    size?: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input004: React__default.ForwardRefExoticComponent<InputProps$2 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant$1 = "001" | "002";
interface InputProps$1 {
    variant?: InputVariant$1;
    size?: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input005: React__default.ForwardRefExoticComponent<InputProps$1 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant = "001" | "002";
type IconPosition$3 = "left" | "right";
interface InputProps {
    variant?: InputVariant;
    size?: Size;
    iconPosition?: IconPosition$3;
    icon: React__default.ReactNode;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputType?: React__default.HTMLInputTypeAttribute;
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    id?: string;
    label?: string;
    ariaLabel?: string;
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
        focusRingColor?: string;
    };
}
declare const Input006: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

type Type$4 = "001" | "002" | "003";
interface LabelProps$1 {
    type?: Type$4;
    size?: Size;
    children: React__default.ReactNode;
    appearance?: {
        fontSize?: number;
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
}
declare const Label001: ({ type, size, children, appearance }: LabelProps$1) => react_jsx_runtime.JSX.Element;

type Type$3 = "001" | "002" | "003";
type IconPosition$2 = "left" | "right";
interface LabelProps {
    type?: Type$3;
    size?: Size;
    iconPosition?: IconPosition$2;
    icon: React__default.ReactNode;
    children: React__default.ReactNode;
    appearance?: {
        fontSize?: number;
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
        iconColor?: string;
    };
}
declare const Label002: ({ type, size, iconPosition, icon, children, appearance }: LabelProps) => react_jsx_runtime.JSX.Element;

type AspectRatio = "16 / 9" | "4 / 3" | "1 / 1" | "3 / 4" | "9 / 16" | "21 / 9";
interface LazyImageAppearance {
    placeholderBgColor?: string;
}
type Props$3 = {
    pc: {
        src: string;
    };
    sp: {
        src: string;
    };
    alt: string;
    objectFit?: boolean;
    aspectRatio?: AspectRatio;
    duration?: number;
    threshold?: number;
    rootMargin?: string;
    showPlaceholder?: boolean;
    appearance?: LazyImageAppearance;
};
declare const LazyImage: ({ pc, sp, alt, objectFit, aspectRatio, duration, threshold, rootMargin, showPlaceholder, appearance }: Props$3) => react_jsx_runtime.JSX.Element;

type ListType = "001" | "002" | "003";
interface ListItem {
    id: string;
    content: React__default.ReactNode;
    href?: string;
    ariaCurrent?: "page" | "step" | "location" | "date" | "time" | boolean;
    ariaSelected?: boolean;
}
interface ListProps {
    type?: ListType;
    listStyle?: "ul" | "ol";
    items: ListItem[];
    ariaLabel?: string;
    appearance?: {
        columnGap?: number;
        rowGap?: number;
        borderColor?: string;
        isAlignItemsCenter?: boolean;
    };
}
declare const List001: ({ type, listStyle, items, ariaLabel, appearance }: ListProps) => react_jsx_runtime.JSX.Element;

interface ListItemAppearance$5 {
    color?: string;
    gap?: number;
    numberFontSize?: number;
    numberColor?: string;
    numberPaddingTop?: number;
    animationColor?: string;
    animationDuration?: number;
    animationEase?: EasingKey;
}
type BaseProps$5 = {
    as?: "li" | "article";
    number: string;
    children: ReactNode;
    appearance?: ListItemAppearance$5;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};
declare const ListItem001: React$1.ForwardRefExoticComponent<BaseProps$5 & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps$5> & React$1.RefAttributes<HTMLLIElement>>;

interface ListItemAppearance$4 {
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
type BaseProps$4 = {
    as?: "li" | "article";
    children: ReactNode;
    appearance?: ListItemAppearance$4;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};
declare const ListItem002: React$1.ForwardRefExoticComponent<BaseProps$4 & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps$4> & React$1.RefAttributes<HTMLLIElement>>;

interface ListItemAppearance$3 {
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
type BaseProps$3 = {
    as?: "li" | "article";
    children: ReactNode;
    appearance?: ListItemAppearance$3;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};
declare const ListItem003: React$1.ForwardRefExoticComponent<BaseProps$3 & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps$3> & React$1.RefAttributes<HTMLLIElement>>;

interface ListItemAppearance$2 {
    color?: string;
    gap?: number;
    iconColor?: string;
    iconPaddingTop?: number;
    animationColor?: string;
    animationDuration?: number;
    animationEase?: EasingKey;
    animationIconColor?: string;
}
type BaseProps$2 = {
    as?: "li" | "article";
    icon: ReactNode;
    children: ReactNode;
    appearance?: ListItemAppearance$2;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};
declare const ListItem004: React$1.ForwardRefExoticComponent<BaseProps$2 & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps$2> & React$1.RefAttributes<HTMLLIElement>>;

interface ListItemAppearance$1 {
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
type BaseProps$1 = {
    as?: "li" | "article";
    children: ReactNode;
    appearance?: ListItemAppearance$1;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};
declare const ListItem005: React$1.ForwardRefExoticComponent<BaseProps$1 & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps$1> & React$1.RefAttributes<HTMLLIElement>>;

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
declare const ListItem006: React$1.ForwardRefExoticComponent<BaseProps & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps> & React$1.RefAttributes<HTMLLIElement>>;

type Type$2 = "001";
interface LoadingProps$1 {
    type?: Type$2;
    size?: Size;
    appearance?: {
        color?: string;
    };
}
declare const Loading001: ({ type, size, appearance }: LoadingProps$1) => react_jsx_runtime.JSX.Element;

interface LoadingProps {
    size?: Size;
    appearance?: {
        indicatorColor?: string;
        backgroundColor?: string;
    };
}
declare const Loading002: ({ size, appearance }: LoadingProps) => react_jsx_runtime.JSX.Element;

type Type$1 = "001";
interface MediaProps {
    pc: React.ReactNode;
    tablet?: React.ReactNode;
    sp: React.ReactNode;
}
declare const Media: ({ pc: pcNode, tablet: tabletNode, sp: spNode }: MediaProps) => React$1.ReactNode;

type Props$2 = {
    children: ReactNode;
};
declare const FooterButtons: FC<Props$2>;

type Props$1 = {
    showModal: boolean;
    children: ReactNode;
    footer?: ReactNode;
};
declare const Modal001: FC<Props$1>;

interface NestedListItemProps$1 {
    icon: React__default.ReactNode;
    children: React__default.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        gap?: number;
        iconColor?: string;
    };
}
declare const NestedListItem001: ({ icon, children, onClick, isOpen: controlledIsOpen, appearance }: NestedListItemProps$1) => react_jsx_runtime.JSX.Element;

interface NestedListItemProps {
    leftIcon: React__default.ReactNode;
    rightIcon: React__default.ReactNode;
    children: React__default.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        leftIconColor?: string;
        rightIconColor?: string;
    };
}
declare const NestedListItem002: ({ leftIcon, rightIcon, children, onClick, isOpen: controlledIsOpen, appearance }: NestedListItemProps) => react_jsx_runtime.JSX.Element;

interface ParallaxImageProps$1 {
    children: React.ReactNode;
    parallaxProps: ParallaxProps;
}
declare const ParallaxContent: ({ children, parallaxProps }: ParallaxImageProps$1) => react_jsx_runtime.JSX.Element;

interface ParallaxImageProps {
    layer: BannerLayer;
    height?: number;
}
declare const ParallaxImage: ({ layer, height }: ParallaxImageProps) => react_jsx_runtime.JSX.Element;

interface RadioProps extends AriaRadioProps {
    children: React.ReactNode;
    appearance?: {
        fontSize?: number;
        color?: string;
        backgroundColor?: string;
        borderColor?: string;
        checkedBackgroundColor?: string;
        markColor?: string;
        focusRingColor?: string;
        gap?: number;
    };
}
declare const Radio001: React$1.ForwardRefExoticComponent<RadioProps & React$1.RefAttributes<HTMLLabelElement>>;

type ScrollRevealAnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
type Props = {
    children: ReactNode;
    type?: ScrollRevealAnimationType;
    duration?: number;
    delay?: number;
    distance?: number;
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
};
declare const ScrollReveal: ({ children, type, duration, delay, distance, threshold, rootMargin, triggerOnce }: Props) => react_jsx_runtime.JSX.Element;

type SelectOption = {
    value: string;
    label: string;
};

type SelectVariant$1 = "001" | "002";
interface SelectProps$1 {
    variant?: SelectVariant$1;
    name?: string;
    id?: string;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLSelectElement>) => void;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    label?: string;
    ariaLabel?: string;
    icon: React__default.ReactNode;
    selectProps?: React__default.SelectHTMLAttributes<HTMLSelectElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        iconColor?: string;
        focusRingColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const Select001: React__default.ForwardRefExoticComponent<SelectProps$1 & React__default.RefAttributes<HTMLSelectElement>>;

type SelectVariant = "001" | "002";
interface SelectProps {
    variant?: SelectVariant;
    name?: string;
    id?: string;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (event: React__default.ChangeEvent<HTMLSelectElement>) => void;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    label?: string;
    ariaLabel?: string;
    icon: React__default.ReactNode;
    selectProps?: React__default.SelectHTMLAttributes<HTMLSelectElement>;
    appearance?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        iconColor?: string;
        focusRingColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const Select002: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

type Type = "001";
interface SkeletonProps {
    type?: Type;
    style?: {
        width?: string;
        height?: string;
        borderRadius?: string;
    };
    className?: string;
}
declare const Skeleton001: ({ type, style, className }: SkeletonProps) => react_jsx_runtime.JSX.Element;

interface ArrowStyle {
    size?: number;
    position?: number;
    color?: string;
    hoverColor?: string;
    disableOpacity?: number;
}
interface AutoPlay {
    active: boolean;
    interval?: number;
    onProgress?: (progress: number) => void;
}
type InstanceRef = React.MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>;
interface State {
    currentIndex?: number;
    loading?: boolean;
    slideRef?: (node: HTMLElement | null) => void;
    instanceRef?: InstanceRef;
    setCurrentIndex?: (index: number) => void;
    setLoading?: (loading: boolean) => void;
}
interface SliderProps {
    options?: KeenSliderOptions;
    loading?: boolean;
    items: {
        key: string;
        children: React.ReactNode;
    }[];
    state?: State;
    controller?: {
        left?: {
            children: React.ReactNode;
            appearance?: ArrowStyle;
        };
        right?: {
            children: React.ReactNode;
            appearance?: ArrowStyle;
        };
    };
    autoPlay?: AutoPlay;
    dots?: {
        show: boolean;
        appearance?: {
            size?: number;
            gap?: number;
            marginTop?: number;
            position?: number;
            backgroundColor?: string;
            borderColor?: string;
            activeBackgroundColor?: string;
            activeBorderColor?: string;
        };
    };
}
declare const Slider: ({ options, items, controller, state, dots, autoPlay }: SliderProps) => react_jsx_runtime.JSX.Element;

interface TextProps {
    children: React__default.ReactNode;
    fontSize: number;
    color?: string;
}
declare const Text: ({ children, fontSize, color }: TextProps) => react_jsx_runtime.JSX.Element;

type TextButtonType = "001" | "002";
type IconPosition$1 = "left" | "right";
type ButtonElementProps = {
    as?: "button";
    buttonType?: React__default.ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "style" | "children">;
type AnchorElementProps = {
    as: "a";
} & Omit<React__default.AnchorHTMLAttributes<HTMLAnchorElement>, "style" | "children">;
type ElementProps = ButtonElementProps | AnchorElementProps;
type TextButtonProps = ElementProps & {
    type?: TextButtonType;
    children: React__default.ReactNode;
    icon?: React__default.ReactNode;
    iconPosition?: IconPosition$1;
    appearance?: {
        hoverColor?: string;
        hoverDuration?: string;
        hoverEase?: EasingKey;
        gap?: number;
        paddingTop?: number;
    };
    style?: React__default.CSSProperties;
};
type TextButtonElement = HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement;
declare const TextButton001: React__default.ForwardRefExoticComponent<TextButtonProps & React__default.RefAttributes<TextButtonElement>>;

type TextFieldVariant$2 = "001" | "002";
type TextFieldType = TextFieldVariant$2;
interface TextFieldProps$4 {
    variant?: TextFieldVariant$2;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    id?: string;
    label?: string;
    ariaLabel?: string;
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        focusRingColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const TextField001: React__default.ForwardRefExoticComponent<TextFieldProps$4 & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps$3 {
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    id?: string;
    label?: string;
    ariaLabel?: string;
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        focusRingColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const TextField002: React__default.ForwardRefExoticComponent<TextFieldProps$3 & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps$2 {
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    id?: string;
    label?: string;
    ariaLabel?: string;
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        focusRingColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        errorBorderColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const TextField003: React__default.ForwardRefExoticComponent<TextFieldProps$2 & React__default.RefAttributes<HTMLTextAreaElement>>;

type TextFieldVariant$1 = "001" | "002";
interface TextFieldProps$1 {
    variant?: TextFieldVariant$1;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    id?: string;
    label?: string;
    ariaLabel?: string;
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        focusRingColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const TextField004: React__default.ForwardRefExoticComponent<TextFieldProps$1 & React__default.RefAttributes<HTMLTextAreaElement>>;

type TextFieldVariant = "001" | "002";
interface TextFieldProps {
    variant?: TextFieldVariant;
    name?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    id?: string;
    label?: string;
    ariaLabel?: string;
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    appearance?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        focusRingColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
        errorBorderColor?: string;
        labelFontSize?: number;
        labelColor?: string;
        labelFontWeight?: number | string;
        labelMarginBottom?: number;
    };
}
declare const TextField005: React__default.ForwardRefExoticComponent<TextFieldProps & React__default.RefAttributes<HTMLTextAreaElement>>;

type IconPosition = "left" | "right";
interface TextIconProps {
    icon: React__default.ReactNode;
    children: React__default.ReactNode;
    iconPosition?: IconPosition;
    appearance?: {
        gap?: number;
        paddingTop?: number;
    };
}
declare const TextIcon001: React__default.ForwardRefExoticComponent<TextIconProps & React__default.RefAttributes<HTMLDivElement>>;

interface ToggleProps$3 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    appearance?: {
        lineColor?: string;
        animationBackgroundColorLine?: string;
        animationBackgroundColorBefore?: string;
        animationBackgroundColorAfter?: string;
    };
}
declare const Toggle001: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$3) => react_jsx_runtime.JSX.Element;

interface ToggleProps$2 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    appearance?: {
        lineColor?: string;
    };
}
declare const Toggle002: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$2) => react_jsx_runtime.JSX.Element;

interface ToggleProps$1 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    appearance?: {
        lineColor?: string;
        backgroundColor?: string;
    };
}
declare const Toggle003: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$1) => react_jsx_runtime.JSX.Element;

type ToggleProps = {
    isOpen: boolean;
    children: React.ReactNode;
    duration?: string;
    easing?: EasingKey;
} & React.HTMLAttributes<HTMLDivElement>;
declare const ToggleSomething001: ({ isOpen, children, duration, easing, ...props }: ToggleProps) => react_jsx_runtime.JSX.Element;

type MediaContextType = "sp" | "tablet" | "pc";
declare const MediaContext: React$1.Context<MediaContextType>;
declare const MediaProvider: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const color: {
    primary: string;
    secondary: string;
};
declare const hexToRgb: (hex: string) => string;

declare const baseFontSizeForEm: styled_components.RuleSet<object>;
declare const baseFontSizeForRem: styled_components.RuleSet<object>;
declare const notoSansJP: styled_components.RuleSet<object>;
declare const roboto: styled_components.RuleSet<object>;
declare const zenKakuGothicNew: styled_components.RuleSet<object>;
declare const lato: styled_components.RuleSet<object>;
declare const montserrat: styled_components.RuleSet<object>;
declare const ebGaramond: styled_components.RuleSet<object>;
declare const zenOldMincho: styled_components.RuleSet<object>;
declare const em: (px: number) => string;
declare const rem: (px: number) => string;

declare const media: {
    pcSizeOver: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    pcSize: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    pcSizeLess: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    tabletSizeOver: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    tabletSize: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    tabletSizeLess: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    spSizeLess: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
    spSizeOver: (...args: ReturnType<typeof css>) => styled_components.RuleSet<object>;
};

type Theme<C extends {
    [key: string]: string;
} = typeof color> = {
    color: C;
    media: typeof media;
    size: {
        em: (px: number) => string;
        rem: (px: number) => string;
        customEm: (px: number, base: number) => string;
    };
    font: {
        baseSize: {
            em: () => RuleSet<object>;
            rem: () => RuleSet<object>;
        };
        fontFamily: {
            notoSansJP: () => RuleSet<object>;
            roboto: () => RuleSet<object>;
            zenKakuGothicNew: () => RuleSet<object>;
            lato: () => RuleSet<object>;
            montserrat: () => RuleSet<object>;
            ebGaramond: () => RuleSet<object>;
            zenOldMincho: () => RuleSet<object>;
        };
    };
    animation: {
        easing: typeof easing;
    };
    icon: {
        size: {
            large: number;
            middle: number;
            small: number;
            style: (size: Size) => RuleSet<object>;
        };
    };
};
declare const themes: <C extends {
    [key: string]: string;
} = typeof color>(color: C) => Theme<C>;

declare const GlobalStyles: ({ fontFamily }: {
    fontFamily: keyof Theme["font"]["fontFamily"];
}) => React$1.NamedExoticComponent<styled_components.ExecutionProps & object>;

export { Accordion001, Accordion002, Accordion003, Accordion004, Accordion005, type AccordionAnimation$4 as AccordionAnimation, type AnimationType$2 as AnimationType, type AutoPlay, Balloon001, Balloon002, BgImageContent, BlurBg, Breadcrumbs, Button001, Button002, CheckBox001, CheckBox002, CircleProgress, type Direction$1 as Direction, DragAndDrop001, Dropdown001, Dropdown002, FadeInAndZoomImages, type FadeInAndZoomImagesImageItem, FooterButtons, FrameIcon001, FrameNumber001, GlobalStyles, GoogleMap, Header001, Image, Input001, Input002, Input003, Input004, Input005, Input006, type InstanceRef, JmcArrowButton, JmcButton, JmcCircleToggle, Label001, Label002, LazyImage, List001, ListItem001, ListItem002, ListItem003, ListItem004, ListItem005, ListItem006, Loading001, Loading002, Media, MediaContext, MediaProvider, Modal001, NestedListItem001, NestedListItem002, PC_SIZE, ParallaxContent, ParallaxImage, REM_SIZE, Radio001, RebitaButton, RebitaCircleProgress, RebitaFadeSlideImage, RebitaFadeText, RebitaPanel, RebitaSlideGuideDot, RebitaTextButtonWithIcon, RebitaToggle, SP_SIZE, ScrollReveal, type ScrollRevealAnimationType, Select001, Select002, type SelectOption, type Size, Skeleton001, Slider, type State, Svg001 as Svg001Icon, Svg002 as Svg002Icon, Svg003 as Svg003Icon, Svg004 as Svg004Icon, Svg005 as Svg005Icon, Svg006 as Svg006Icon, Svg007 as Svg007Icon, Svg008 as Svg008Icon, Svg009 as Svg009Icon, Svg010 as Svg010Icon, Svg011 as Svg011Icon, Svg012 as Svg012Icon, Svg013 as Svg013Icon, Svg014 as Svg014Icon, Svg015 as Svg015Icon, Svg016 as Svg016Icon, Svg017 as Svg017Icon, Svg018 as Svg018Icon, Svg019 as Svg019Icon, Svg020 as Svg020Icon, Svg021 as Svg021Icon, Svg022 as Svg022Icon, Svg023 as Svg023Icon, Svg024 as Svg024Icon, Svg025 as Svg025Icon, Svg026 as Svg026Icon, Svg027 as Svg027Icon, Svg028 as Svg028Icon, Svg029 as Svg029Icon, Svg030 as Svg030Icon, Svg031 as Svg031Icon, Svg032 as Svg032Icon, Svg033 as Svg033Icon, Svg034 as Svg034Icon, Svg035 as Svg035Icon, Svg036 as Svg036Icon, Svg037 as Svg037Icon, Svg038 as Svg038Icon, Svg039 as Svg039Icon, Svg040 as Svg040Icon, Svg041 as Svg041Icon, Svg042 as Svg042Icon, Svg043 as Svg043Icon, TABLET_SIZE, Text, TextButton001, TextField001, TextField002, TextField003, TextField004, TextField005, type TextFieldType, TextIcon001, type Theme, Toggle001, Toggle002, Toggle003, ToggleSomething001, type Type$1 as Type, VerticalRollingText, baseFontSizeForEm, baseFontSizeForRem, color, ebGaramond, em, hexToRgb, lato, media, montserrat, notoSansJP, rem, roboto, themes, zenKakuGothicNew, zenOldMincho };
