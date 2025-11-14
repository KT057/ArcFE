import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default, { ReactNode, ComponentProps, MouseEvent, ButtonHTMLAttributes, SVGProps, FC } from 'react';
import { ParallaxProps, BannerLayer } from 'react-scroll-parallax';
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
    style?: {
        scale?: number;
        duration?: number;
        easing?: EasingKey;
    };
}
declare const BgImageContent: ({ children, imageUrl, height, animationType, style }: BgImageContentProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps$1 {
    progress: number;
    size: number;
    style?: {
        primaryColor?: string;
        trackColor?: string;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const CircleProgress: ({ progress, size, style }: CircleProgressProps$1) => react_jsx_runtime.JSX.Element;

type FadeInAndZoomImagesImageItem = {
    src: string;
    alt?: string;
};
interface FadeInAndZoomImagesProps {
    images: FadeInAndZoomImagesImageItem[];
    duration?: number;
    fadeDuration?: number;
    scaleTo?: number;
    height?: number;
    state?: {
        currentIndex: number;
        setCurrentIndex: (index: number) => void;
    };
    onImageChange?: (currentIndex: number) => void;
    onProgress?: (progress: number) => void;
    onCurrentIndexChange?: () => void;
}
declare const FadeInAndZoomImages: ({ images, duration, fadeDuration, scaleTo, state, height, onImageChange, onProgress }: FadeInAndZoomImagesProps) => react_jsx_runtime.JSX.Element | null;

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
    style?: {
        iconColor?: string;
        borderColor?: string;
        backgroundColor?: string;
        hoverIconColor?: string;
        hoverBorderColor?: string;
        hoverBackgroundColor?: string;
    };
}
declare const JmcArrowButton: ({ size, onClick, as, href, style }: ArrowButtonProps) => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    children: react__default.ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "span";
    href?: string;
    isHovered?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    style?: {
        fontSize?: number;
        backgroundColor?: string;
        color?: string;
        circleToggleColor?: string;
        circleToggleDotColor?: string;
    };
}
declare const JmcButton: ({ children, onClick, as, href, isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, style }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleToggleProps {
    isHovered?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    style?: {
        color?: string;
        dotColor?: string;
    };
}
declare const JmcCircleToggle: ({ isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, onClick, style }: CircleToggleProps) => react_jsx_runtime.JSX.Element;

type DirectionType = "left" | "right";

interface RebitaButtonProps {
    size?: Size;
    direction?: DirectionType;
    text?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "div";
    href?: string;
    style?: {
        fontSize?: number;
        backgroundColor?: string;
        textColor?: string;
        iconColor?: string;
        borderColor?: string;
        leftContentBorderColor?: string;
    };
}
declare const RebitaButton: ({ size, direction, text, icon, onClick, as, href, style }: RebitaButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps {
    progress?: number;
    children?: ReactNode;
    style?: {
        primaryColor?: string;
        trackColor?: string;
        textColor?: string;
        fontSize?: number;
        size?: number;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const RebitaCircleProgress: ({ progress, children, style }: CircleProgressProps) => react_jsx_runtime.JSX.Element;

type SlideGuideDotType = "default" | "progress";

interface SlideGuideDotProps {
    type: SlideGuideDotType;
    progress: number;
    onClick: () => void;
    style?: {
        primaryColor?: string;
        trackColor?: string;
        circleSize?: number;
        dotSize?: number;
        strokeWidth?: number;
        animationDuration?: string;
    };
}
declare const RebitaSlideGuideDot: ({ type, progress, style, onClick }: SlideGuideDotProps) => react_jsx_runtime.JSX.Element;

interface FadeSlideImageProps {
    images: FadeInAndZoomImagesImageItem[];
    fadeInAndZoomImagesProps?: Partial<ComponentProps<typeof FadeInAndZoomImages>>;
    slideGuideDotProps?: Partial<ComponentProps<typeof RebitaSlideGuideDot>>;
    style?: {
        guideGap?: number;
    };
}
declare const RebitaFadeSlideImage: ({ images, fadeInAndZoomImagesProps, slideGuideDotProps, style }: FadeSlideImageProps) => react_jsx_runtime.JSX.Element;

interface FadeTextProps {
    children?: ReactNode;
    progress?: number;
    style?: {
        color?: string;
        fontSize?: number;
    };
}
declare const RebitaFadeText: ({ children, progress, style }: FadeTextProps) => react_jsx_runtime.JSX.Element;

interface PanelProps {
    imageSrc: string;
    imageAlt?: string;
    imageText: string;
    title: string;
    description: string;
    labels: ReactNode[];
    style?: {
        imageHeight?: number;
    };
    onClick: () => void;
}
declare const RebitaPanel: ({ imageSrc, imageAlt, imageText, title, description, labels, style, onClick }: PanelProps) => react_jsx_runtime.JSX.Element;

type Direction = "left" | "right";
interface TextButtonWithIconProps {
    text?: ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "div";
    href?: string;
    iconDirection?: Direction;
    style?: {
        fontSize?: number;
        color?: string;
        iconSize?: Size;
    };
}
declare const RebitaTextButtonWithIcon: ({ text, icon, onClick, as, href, iconDirection, style }: TextButtonWithIconProps) => react_jsx_runtime.JSX.Element;

interface ToggleProps$4 {
    size?: Size;
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    style?: {
        backgroundColor?: string;
        dotColor?: string;
        lineColor?: string;
    };
}
declare const RebitaToggle: ({ size, isOpen: controlledIsOpen, onChange, onClick, style }: ToggleProps$4) => react_jsx_runtime.JSX.Element;

interface VerticalRollingTextProps {
    children?: ReactNode;
    enableHover?: boolean;
    style?: {
        fontSize?: number;
        color?: string;
    };
}
declare const VerticalRollingText: ({ children, enableHover, style }: VerticalRollingTextProps) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$4 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$7 {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$4;
    style?: {
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
declare const Accordion001: ({ headerContent, content, icon, style, animation }: Props$7) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$3 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$6 {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$3;
    style?: {
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
declare const Accordion002: ({ headerContent, content, icon, style, animation }: Props$6) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$2 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$5 {
    headerContent: ReactNode;
    content: ReactNode;
    icon: ReactNode;
    animation?: AccordionAnimation$2;
    style?: {
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
declare const Accordion003: ({ headerContent, content, icon, style, animation }: Props$5) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$1 = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$4 {
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
    style?: {
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
declare const Accordion004: ({ header, content, icon, style, animation }: Props$4) => react_jsx_runtime.JSX.Element;

type AccordionAnimation = {
    duration?: number;
    easing?: gsap.EaseString;
};
interface Props$3 {
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
    style?: {
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
declare const Accordion005: ({ header, content, icon, style, animation }: Props$3) => react_jsx_runtime.JSX.Element;

type Type$f = "001" | "002";
type ArrowPosition$1 = "top" | "bottom" | "left" | "right";

interface BalloonProps$1 {
    type?: Type$f;
    children: ReactNode;
    arrowPosition?: ArrowPosition$1;
    style?: {
        backgroundColor?: string;
        color?: string;
        fontSize?: number;
    };
}
declare const Balloon001: ({ type, children, style, arrowPosition }: BalloonProps$1) => react_jsx_runtime.JSX.Element;

type Type$e = "001" | "002";
type ArrowPosition = "top" | "bottom" | "left" | "right";

interface BalloonProps {
    type?: Type$e;
    children: ReactNode;
    arrowPosition?: ArrowPosition;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        color?: string;
        fontSize?: number;
    };
}
declare const Balloon002: ({ type, children, style, arrowPosition }: BalloonProps) => react_jsx_runtime.JSX.Element;

type BreadcrumbsItem = {
    text: string;
    link?: {
        href: string;
        target?: "_blank";
    };
};
interface BreadcrumbsProps {
    items: BreadcrumbsItem[];
    style?: {
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
declare const Breadcrumbs: ({ items, style }: BreadcrumbsProps) => react_jsx_runtime.JSX.Element;

type Type$d = "001" | "002" | "003";
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
type BaseProps$1 = {
    as?: "button" | "a" | "span";
    type?: Type$d;
    size?: Size;
    children: ReactNode;
    animation?: Animation$1;
    disabled?: boolean;
    appearance?: ButtonAppearance$1;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button001: react.ForwardRefExoticComponent<BaseProps$1 & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps$1> & {
    href?: string;
    target?: string;
    rel?: string;
} & react.RefAttributes<HTMLButtonElement>>;

type Type$c = "001" | "002" | "003" | "004" | "005" | "006" | "007" | "008" | "009";
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
type BaseProps = {
    as?: "button" | "a" | "span";
    type?: Type$c;
    size?: Size;
    children: ReactNode;
    animation?: Animation;
    appearance?: ButtonAppearance;
    iconDirection?: IconDirection;
    icon: ReactNode;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button002: react.ForwardRefExoticComponent<BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: string;
    target?: string;
    rel?: string;
} & react.RefAttributes<HTMLButtonElement>>;

type CheckBoxType = "001" | "002" | "003";
interface CheckBoxProps$1 {
    id: string;
    type: CheckBoxType;
    size: Size;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        checkedBackgroundColor?: string;
        markColor?: string;
    };
}
declare const CheckBox001: ({ style, id, type, size }: CheckBoxProps$1) => react_jsx_runtime.JSX.Element;

type CheckBoxSize = "small" | "middle";
interface CheckBoxProps {
    id: string;
    size: CheckBoxSize;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        checkedBackgroundColor?: string;
        markColor?: string;
    };
}
declare const CheckBox002: ({ style, id, size }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

interface ListItemWithContent {
    id: string;
    content: react__default.ReactNode;
}
interface ListItem$1 {
    id: string;
}
interface DragAndDropProps {
    items: ListItemWithContent[];
    style?: {
        gap?: number;
    };
    onReorder: (items: ListItem$1[]) => void;
}
declare const DragAndDrop001: ({ items, style, onReorder }: DragAndDropProps) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps$1 {
    detail: ReactNode;
    contents: ReactNode;
    nowrap?: boolean;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number;
    };
}
declare const Dropdown001: ({ style, detail, contents, nowrap }: DropdownMenuProps$1) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps {
    detail: ReactNode;
    contents: ReactNode;
    nowrap?: boolean;
    style?: {
        backgroundColor?: string;
        borderColor?: string;
        borderRadius?: number;
    };
    balloonProps?: ComponentProps<typeof Balloon001>;
}
declare const Dropdown002: ({ style, detail, contents, nowrap, balloonProps }: DropdownMenuProps) => react_jsx_runtime.JSX.Element;

type Type$b = "001" | "002" | "003";
interface FrameIconProps {
    icon: React.ReactNode;
    type: Type$b;
    size: Size;
    style?: {
        backgroundColor?: string;
        iconColor?: string;
        borderColor?: string;
    };
}
declare const FrameIcon001: ({ style, type, size, icon }: FrameIconProps) => react_jsx_runtime.JSX.Element;

type Type$a = "001" | "002" | "003";
interface FrameNumberProps {
    number: number;
    type: Type$a;
    size: Size;
    style?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
}
declare const FrameNumber001: ({ style, type, size, number }: FrameNumberProps) => react_jsx_runtime.JSX.Element;

type Props$2 = {
    mapId: string;
    defaultCenter?: {
        lat: number;
        lng: number;
    };
    defaultZoom?: number;
    disableDefaultUI?: boolean;
    children: ReactNode;
};
declare const GoogleMap: ({ defaultCenter, defaultZoom, disableDefaultUI, mapId, children }: Props$2) => react_jsx_runtime.JSX.Element;

interface Header001Props {
    left?: React.ReactNode;
    right?: React.ReactNode;
    leftInner?: React.ReactNode;
    rightInner?: React.ReactNode;
    modalContent?: React.ReactNode;
    showModal?: boolean;
    style?: {
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
declare const Header001: ({ left, right, leftInner, rightInner, modalContent, style, showModal }: Header001Props) => react_jsx_runtime.JSX.Element;

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

type Type$9 = "001" | "002";
interface InputProps$5 {
    type: Type$9;
    size: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
    };
}
declare const Input001: ({ type, size, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps$5) => react_jsx_runtime.JSX.Element;

interface InputProps$4 {
    size: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
    };
}
declare const Input002: ({ size, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps$4) => react_jsx_runtime.JSX.Element;

interface InputProps$3 {
    size: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
    };
}
declare const Input003: ({ size, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps$3) => react_jsx_runtime.JSX.Element;

type Type$8 = "001" | "002";
interface InputProps$2 {
    type: Type$8;
    size: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
    };
}
declare const Input004: ({ type, size, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps$2) => react_jsx_runtime.JSX.Element;

type Type$7 = "001" | "002";
interface InputProps$1 {
    type: Type$7;
    size: Size;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBackgroundColor?: string;
    };
}
declare const Input005: ({ type, size, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps$1) => react_jsx_runtime.JSX.Element;

type Type$6 = "001" | "002";
type IconPosition$2 = "left" | "right";
interface InputProps {
    type: Type$6;
    size: Size;
    iconPosition?: IconPosition$2;
    icon: react__default.ReactNode;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: react__default.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    errorText?: string;
    inputProps?: react__default.InputHTMLAttributes<HTMLInputElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
    };
}
declare const Input006: ({ type, size, iconPosition, icon, name, placeholder, value, onChange, error, errorText, style, inputProps }: InputProps) => react_jsx_runtime.JSX.Element;

type Type$5 = "001" | "002" | "003";
interface LabelProps$1 {
    type?: Type$5;
    size?: Size;
    children: react__default.ReactNode;
    style?: {
        fontSize?: number;
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
    };
}
declare const Label001: ({ type, size, children, style }: LabelProps$1) => react_jsx_runtime.JSX.Element;

type Type$4 = "001" | "002" | "003";
type IconPosition$1 = "left" | "right";
interface LabelProps {
    type?: Type$4;
    size?: Size;
    iconPosition?: IconPosition$1;
    icon: react__default.ReactNode;
    children: react__default.ReactNode;
    style?: {
        fontSize?: number;
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
        iconColor?: string;
    };
}
declare const Label002: ({ type, size, iconPosition, icon, children, style }: LabelProps) => react_jsx_runtime.JSX.Element;

type Type$3 = "001" | "002" | "003";
interface ListItem {
    id: string;
    content: react__default.ReactNode;
}
interface ListProps {
    type?: Type$3;
    items: ListItem[];
    style?: {
        columnGap?: number;
        rowGap?: number;
        borderColor?: string;
        isAlignItemsCenter?: boolean;
    };
}
declare const List001: ({ type, items, style }: ListProps) => react_jsx_runtime.JSX.Element;

interface ListItemProps$5 {
    number: string;
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        numberFontSize?: number;
        numberColor?: string;
        animationColor?: string;
        animationDuration?: string;
        animationEase?: EasingKey;
    };
}
declare const ListItem001: ({ number, children, onClick, style }: ListItemProps$5) => react_jsx_runtime.JSX.Element;

interface ListItemProps$4 {
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        pointSize?: number;
        pointColor?: string;
        animationColor?: string;
        animationDuration?: string;
        animationEase?: EasingKey;
        animationPointColor?: string;
    };
}
declare const ListItem002: ({ children, onClick, style }: ListItemProps$4) => react_jsx_runtime.JSX.Element;

interface ListItemProps$3 {
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        pointSize?: number;
        pointColor?: string;
        animationColor?: string;
        animationDuration?: string;
        animationEase?: EasingKey;
        animationPointColor?: string;
    };
}
declare const ListItem003: ({ children, onClick, style }: ListItemProps$3) => react_jsx_runtime.JSX.Element;

interface ListItemProps$2 {
    icon: react__default.ReactNode;
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        iconColor?: string;
        animationColor?: string;
        animationDuration?: string;
        animationEase?: EasingKey;
        animationIconColor?: string;
    };
}
declare const ListItem004: ({ icon, children, onClick, style }: ListItemProps$2) => react_jsx_runtime.JSX.Element;

interface ListItemProps$1 {
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        pointSize?: number;
        pointColor?: string;
        animationColor?: string;
        animationDuration?: string;
        animationEase?: EasingKey;
        animationPointColor?: string;
    };
}
declare const ListItem005: ({ children, onClick, style }: ListItemProps$1) => react_jsx_runtime.JSX.Element;

interface ListItemProps {
    frameNumber: react__default.ReactNode;
    children: react__default.ReactNode;
    onClick?: () => void;
    style?: {
        fontSize?: number;
        color?: string;
        gap?: number;
        animationOpacity?: number;
        animationDuration?: string;
        animationEase?: EasingKey;
    };
}
declare const ListItem006: ({ frameNumber, children, onClick, style }: ListItemProps) => react_jsx_runtime.JSX.Element;

type Type$2 = "001";
interface LoadingProps$1 {
    type?: Type$2;
    size?: Size;
    style?: {
        color?: string;
    };
}
declare const Loading001: ({ type, size, style }: LoadingProps$1) => react_jsx_runtime.JSX.Element;

interface LoadingProps {
    size?: Size;
    style?: {
        indicatorColor?: string;
        backgroundColor?: string;
    };
}
declare const Loading002: ({ size, style }: LoadingProps) => react_jsx_runtime.JSX.Element;

type Type$1 = "001";
interface MediaProps {
    pc: React.ReactNode;
    tablet?: React.ReactNode;
    sp: React.ReactNode;
}
declare const Media: ({ pc: pcNode, tablet: tabletNode, sp: spNode }: MediaProps) => react.ReactNode;

type Props$1 = {
    children: ReactNode;
};
declare const FooterButtons: FC<Props$1>;

type Props = {
    showModal: boolean;
    children: ReactNode;
    footer?: ReactNode;
};
declare const Modal001: FC<Props>;

interface NestedListItemProps$1 {
    icon: react__default.ReactNode;
    children: react__default.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        gap?: number;
        iconColor?: string;
    };
}
declare const NestedListItem001: ({ icon, children, onClick, isOpen: controlledIsOpen, style }: NestedListItemProps$1) => react_jsx_runtime.JSX.Element;

interface NestedListItemProps {
    leftIcon: react__default.ReactNode;
    rightIcon: react__default.ReactNode;
    children: react__default.ReactNode;
    onClick?: () => void;
    isOpen?: boolean;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        leftIconColor?: string;
        rightIconColor?: string;
    };
}
declare const NestedListItem002: ({ leftIcon, rightIcon, children, onClick, isOpen: controlledIsOpen, style }: NestedListItemProps) => react_jsx_runtime.JSX.Element;

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

interface RadioProps {
    id: string;
    name?: string;
    children: react__default.ReactNode;
    checkboxType?: CheckBoxType;
    checkboxSize?: Size;
    style?: {
        fontSize?: number;
        color?: string;
        backgroundColor?: string;
        checkboxStyle?: {
            backgroundColor?: string;
            borderColor?: string;
            checkedBackgroundColor?: string;
            markColor?: string;
        };
    };
}
declare const Radio001: ({ id, name, children, checkboxType, checkboxSize, style }: RadioProps) => react_jsx_runtime.JSX.Element;

type SelectOption = {
    value: string;
    label: string;
};

type Type = "001" | "002";
interface SelectProps$1 {
    type?: Type;
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (event: react__default.ChangeEvent<HTMLSelectElement>) => void;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    icon: react__default.ReactNode;
    selectProps?: react__default.SelectHTMLAttributes<HTMLSelectElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        iconColor?: string;
    };
}
declare const Select001: ({ type, name, options, value, onChange, error, errorText, placeholder, icon, style, selectProps }: SelectProps$1) => react_jsx_runtime.JSX.Element;

interface SelectProps {
    name?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (event: react__default.ChangeEvent<HTMLSelectElement>) => void;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    icon: react__default.ReactNode;
    selectProps?: react__default.SelectHTMLAttributes<HTMLSelectElement>;
    style?: {
        fontSize?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        backgroundColor?: string;
        errorColor?: string;
        errorFontSize?: number;
        errorBorderColor?: string;
        iconColor?: string;
    };
}
declare const Select002: ({ name, options, value, onChange, error, errorText, placeholder, icon, style, selectProps }: SelectProps) => react_jsx_runtime.JSX.Element;

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
            style?: ArrowStyle;
        };
        right?: {
            children: React.ReactNode;
            style?: ArrowStyle;
        };
    };
    autoPlay?: AutoPlay;
    dots?: {
        show: boolean;
        style?: {
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
    children: react__default.ReactNode;
    fontSize: number;
    color?: string;
}
declare const Text: ({ children, fontSize, color }: TextProps) => react_jsx_runtime.JSX.Element;

type TextButtonType = "001" | "002";
interface TextButtonProps {
    type?: TextButtonType;
    children: react__default.ReactNode;
    onClick?: () => void;
    as?: "button" | "a" | "span";
    href?: string;
    style?: {
        color?: string;
        fontSize?: number;
        hoverColor?: string;
        hoverDuration?: string;
        hoverEase?: EasingKey;
    };
}
declare const TextButton001: ({ type, children, onClick, as, href, style }: TextButtonProps) => react_jsx_runtime.JSX.Element;

type TextFieldType$2 = "001" | "002";
interface TextFieldProps$4 {
    type?: TextFieldType$2;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorStyle?: {
            fontSize?: number;
            color?: string;
            borderColor?: string;
        };
    };
}
declare const TextField001: ({ type, name, placeholder, value, onChange, error, errorText, style }: TextFieldProps$4) => react_jsx_runtime.JSX.Element;

interface TextFieldProps$3 {
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        placeholderColor?: string;
        errorStyle?: {
            fontSize?: number;
            color?: string;
            borderColor?: string;
        };
    };
}
declare const TextField002: ({ name, placeholder, value, onChange, error, errorText, style }: TextFieldProps$3) => react_jsx_runtime.JSX.Element;

interface TextFieldProps$2 {
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorStyle?: {
            fontSize?: number;
            color?: string;
            backgroundColor?: string;
        };
    };
}
declare const TextField003: ({ name, placeholder, value, onChange, error, errorText, style }: TextFieldProps$2) => react_jsx_runtime.JSX.Element;

type TextFieldType$1 = "001" | "002";
interface TextFieldProps$1 {
    type?: TextFieldType$1;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorStyle?: {
            fontSize?: number;
            color?: string;
            backgroundColor?: string;
        };
    };
}
declare const TextField004: ({ type, name, placeholder, value, onChange, error, errorText, style }: TextFieldProps$1) => react_jsx_runtime.JSX.Element;

type TextFieldType = "001" | "002";
interface TextFieldProps {
    type?: TextFieldType;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: react__default.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    errorText?: string;
    style?: {
        fontSize?: number;
        lineHeight?: number;
        color?: string;
        borderColor?: string;
        backgroundColor?: string;
        placeholderColor?: string;
        errorStyle?: {
            fontSize?: number;
            color?: string;
            backgroundColor?: string;
        };
    };
}
declare const TextField005: ({ type, name, placeholder, value, onChange, error, errorText, style }: TextFieldProps) => react_jsx_runtime.JSX.Element;

type IconPosition = "left" | "right";
interface TextIconProps {
    icon: react__default.ReactNode;
    children: react__default.ReactNode;
    iconPosition?: IconPosition;
    iconSize?: Size;
    style?: {
        fontSize?: number;
        color?: string;
        iconColor?: string;
        gap?: number;
    };
}
declare const TextIcon001: ({ icon, children, iconPosition, iconSize, style }: TextIconProps) => react_jsx_runtime.JSX.Element;

interface ToggleProps$3 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    style?: {
        lineColor?: string;
        animationBackgroundColorLine?: string;
        animationBackgroundColorBefore?: string;
        animationBackgroundColorAfter?: string;
    };
}
declare const Toggle001: ({ isOpen: controlledIsOpen, onChange, onClick, style }: ToggleProps$3) => react_jsx_runtime.JSX.Element;

interface ToggleProps$2 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    style?: {
        lineColor?: string;
    };
}
declare const Toggle002: ({ isOpen: controlledIsOpen, onChange, onClick, style }: ToggleProps$2) => react_jsx_runtime.JSX.Element;

interface ToggleProps$1 {
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    onClick?: () => void;
    style?: {
        lineColor?: string;
        backgroundColor?: string;
    };
}
declare const Toggle003: ({ isOpen: controlledIsOpen, onChange, onClick, style }: ToggleProps$1) => react_jsx_runtime.JSX.Element;

type ToggleProps = {
    isOpen: boolean;
    children: React.ReactNode;
    duration?: string;
    easing?: EasingKey;
} & React.HTMLAttributes<HTMLDivElement>;
declare const ToggleSomething001: ({ isOpen, children, duration, easing, ...props }: ToggleProps) => react_jsx_runtime.JSX.Element;

type MediaContextType = "sp" | "tablet" | "pc";
declare const MediaContext: react.Context<MediaContextType>;
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
}) => react.NamedExoticComponent<styled_components.ExecutionProps & object>;

export { Accordion001, Accordion002, Accordion003, Accordion004, Accordion005, type AccordionAnimation$4 as AccordionAnimation, type AnimationType$2 as AnimationType, type AutoPlay, Balloon001, Balloon002, BgImageContent, Breadcrumbs, Button001, Button002, CheckBox001, CheckBox002, CircleProgress, type Direction, DragAndDrop001, Dropdown001, Dropdown002, FadeInAndZoomImages, type FadeInAndZoomImagesImageItem, FooterButtons, FrameIcon001, FrameNumber001, GlobalStyles, GoogleMap, Header001, Input001, Input002, Input003, Input004, Input005, Input006, type InstanceRef, JmcArrowButton, JmcButton, JmcCircleToggle, Label001, Label002, List001, ListItem001, ListItem002, ListItem003, ListItem004, ListItem005, ListItem006, Loading001, Loading002, Media, MediaContext, MediaProvider, Modal001, NestedListItem001, NestedListItem002, PC_SIZE, ParallaxContent, ParallaxImage, REM_SIZE, Radio001, RebitaButton, RebitaCircleProgress, RebitaFadeSlideImage, RebitaFadeText, RebitaPanel, RebitaSlideGuideDot, RebitaTextButtonWithIcon, RebitaToggle, SP_SIZE, Select001, Select002, type SelectOption, type Size, Slider, type State, Svg001 as Svg001Icon, Svg002 as Svg002Icon, Svg003 as Svg003Icon, Svg004 as Svg004Icon, Svg005 as Svg005Icon, Svg006 as Svg006Icon, Svg007 as Svg007Icon, Svg008 as Svg008Icon, Svg009 as Svg009Icon, Svg010 as Svg010Icon, Svg011 as Svg011Icon, Svg012 as Svg012Icon, Svg013 as Svg013Icon, Svg014 as Svg014Icon, Svg015 as Svg015Icon, Svg016 as Svg016Icon, Svg017 as Svg017Icon, Svg018 as Svg018Icon, Svg019 as Svg019Icon, Svg020 as Svg020Icon, Svg021 as Svg021Icon, Svg022 as Svg022Icon, Svg023 as Svg023Icon, Svg024 as Svg024Icon, Svg025 as Svg025Icon, Svg026 as Svg026Icon, Svg027 as Svg027Icon, Svg028 as Svg028Icon, Svg029 as Svg029Icon, Svg030 as Svg030Icon, Svg031 as Svg031Icon, Svg032 as Svg032Icon, Svg033 as Svg033Icon, Svg034 as Svg034Icon, Svg035 as Svg035Icon, Svg036 as Svg036Icon, Svg037 as Svg037Icon, Svg038 as Svg038Icon, Svg039 as Svg039Icon, Svg040 as Svg040Icon, Svg041 as Svg041Icon, Svg042 as Svg042Icon, Svg043 as Svg043Icon, TABLET_SIZE, Text, TextButton001, TextField001, TextField002, TextField003, TextField004, TextField005, type TextFieldType$2 as TextFieldType, TextIcon001, type Theme, Toggle001, Toggle002, Toggle003, ToggleSomething001, type Type$1 as Type, VerticalRollingText, baseFontSizeForEm, baseFontSizeForRem, color, ebGaramond, em, hexToRgb, lato, media, montserrat, notoSansJP, rem, roboto, themes, zenKakuGothicNew, zenOldMincho };
