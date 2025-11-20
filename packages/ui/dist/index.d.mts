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

/**
 * 背景画像のアニメーションタイプ
 * - "001": ホバー時に背景画像が拡大するシンプルなズームアニメーション
 * - "002": ホバー時に背景画像が拡大し、オーバーレイとコンテンツがフェードアウトするアニメーション
 */
type AnimationType$2 = "001" | "002";
interface BgImageContentProps {
    /**
     * 表示するコンテンツ
     */
    children: React.ReactNode;
    /**
     * 背景画像のURL
     */
    imageUrl: string;
    /**
     * コンテナの高さ（px）
     */
    height: number;
    /**
     * アニメーションのタイプ
     * - "001": ホバー時に背景画像が拡大するシンプルなズームアニメーション
     * - "002": ホバー時に背景画像が拡大し、オーバーレイとコンテンツがフェードアウトするアニメーション
     */
    animationType?: AnimationType$2;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * ホバー時のスケール値
         */
        scale?: number;
        /**
         * アニメーションの持続時間（秒）
         */
        duration?: number;
        /**
         * イージング関数
         */
        easing?: EasingKey;
    };
}
declare const BgImageContent: ({ children, imageUrl, height, animationType, appearance }: BgImageContentProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps$1 {
    /**
     * 進捗の割合（0-100）
     */
    progress: number;
    /**
     * サークルのサイズ（px）
     */
    size: number;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * プログレスバーの色
         */
        primaryColor?: string;
        /**
         * トラック（背景）の色
         */
        trackColor?: string;
        /**
         * ストロークの太さ（px）
         */
        strokeWidth?: number;
        /**
         * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
         */
        animationDuration?: string;
    };
}
declare const CircleProgress: ({ progress, size, appearance }: CircleProgressProps$1) => react_jsx_runtime.JSX.Element;

/**
 * フェードイン＆ズーム画像の各画像アイテム
 */
type FadeInAndZoomImagesImageItem = {
    /**
     * 画像のURL
     */
    src: string;
    /**
     * 画像の代替テキスト
     */
    alt?: string;
};
interface FadeInAndZoomImagesProps {
    /**
     * 表示する画像の配列
     */
    images: FadeInAndZoomImagesImageItem[];
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * フェードアニメーションの持続時間（秒）
     */
    fadeDuration?: number;
    /**
     * ズーム開始時のスケール値
     */
    scaleFrom?: number;
    /**
     * ズーム終了時のスケール値
     */
    scaleTo?: number;
    /**
     * コンテナの高さ（px）
     */
    height?: number;
    /**
     * ズームの方向（"in": ズームイン, "out": ズームアウト, "none": ズームなし）
     */
    zoomDirection?: "in" | "out" | "none";
    /**
     * 現在のインデックス状態を外部で管理する場合の設定
     */
    state?: {
        /**
         * 現在表示中の画像インデックス
         */
        currentIndex: number;
        /**
         * インデックスを更新する関数
         */
        setCurrentIndex: (index: number) => void;
    };
    /**
     * 画像が切り替わったときのコールバック関数
     */
    onImageChange?: (currentIndex: number) => void;
    /**
     * アニメーションの進捗が更新されたときのコールバック関数
     */
    onProgress?: (progress: number) => void;
    /**
     * インデックスが変更されたときのコールバック関数
     */
    onCurrentIndexChange?: () => void;
}
declare const FadeInAndZoomImages: ({ images, duration, fadeDuration, scaleFrom, scaleTo, zoomDirection, state, height, onImageChange, onProgress }: FadeInAndZoomImagesProps) => react_jsx_runtime.JSX.Element | null;

type Size = "small" | "middle" | "large";
declare const PC_SIZE = 1280;
declare const TABLET_SIZE = 768;
declare const SP_SIZE = 480;
declare const REM_SIZE = 16;

interface ArrowButtonProps {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * レンダリングするHTML要素の種類
     */
    as?: "button" | "a" | "span";
    /**
     * リンク先URL（asが"a"の場合に使用）
     */
    href?: string;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ホバー時のアイコンの色
         */
        hoverIconColor?: string;
        /**
         * ホバー時のボーダーの色
         */
        hoverBorderColor?: string;
        /**
         * ホバー時の背景色
         */
        hoverBackgroundColor?: string;
    };
}
declare const JmcArrowButton: ({ size, onClick, as, href, appearance }: ArrowButtonProps) => react_jsx_runtime.JSX.Element;

interface ButtonProps {
    /**
     * ボタンの表示内容
     */
    children: React__default.ReactNode;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * レンダリングするHTML要素の種類
     */
    as?: "button" | "a" | "span";
    /**
     * リンク先URL（asが"a"の場合に使用）
     */
    href?: string;
    /**
     * ホバー状態（外部から制御する場合に使用）
     */
    isHovered?: boolean;
    /**
     * マウスエンター時のコールバック関数
     */
    onMouseEnter?: () => void;
    /**
     * マウスリーブ時のコールバック関数
     */
    onMouseLeave?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * テキストの色
         */
        color?: string;
        /**
         * サークルトグルの色
         */
        circleToggleColor?: string;
        /**
         * サークルトグルのドット（点）の色
         */
        circleToggleDotColor?: string;
    };
}
declare const JmcButton: ({ children, onClick, as, href, isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, appearance }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleToggleProps {
    /**
     * ホバー状態（外部から制御する場合に使用）
     */
    isHovered?: boolean;
    /**
     * マウスエンター時のコールバック関数
     */
    onMouseEnter?: () => void;
    /**
     * マウスリーブ時のコールバック関数
     */
    onMouseLeave?: () => void;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * サークルの色
         */
        color?: string;
        /**
         * ドット（点）の色
         */
        dotColor?: string;
    };
}
declare const JmcCircleToggle: ({ isHovered: controlledIsHovered, onMouseEnter, onMouseLeave, onClick, appearance }: CircleToggleProps) => react_jsx_runtime.JSX.Element;

type DirectionType = "left" | "right";

interface RebitaButtonProps {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * アイコンの配置方向
     */
    direction?: DirectionType;
    /**
     * ボタンに表示するテキスト
     */
    text?: ReactNode;
    /**
     * ボタンに表示するアイコン
     */
    icon?: ReactNode;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * レンダリングするHTML要素の種類
     */
    as?: "button" | "a" | "div";
    /**
     * リンク先URL（asが"a"の場合に使用）
     */
    href?: string;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * テキストの色
         */
        textColor?: string;
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * 左側コンテンツのボーダーの色
         */
        leftContentBorderColor?: string;
    };
}
declare const RebitaButton: ({ size, direction, text, icon, onClick, as, href, appearance }: RebitaButtonProps) => react_jsx_runtime.JSX.Element;

interface CircleProgressProps {
    /**
     * 進捗の割合（0-100）
     */
    progress?: number;
    /**
     * サークル内に表示する内容
     */
    children?: ReactNode;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * プログレスバーの色
         */
        primaryColor?: string;
        /**
         * トラック（背景）の色
         */
        trackColor?: string;
        /**
         * テキストの色
         */
        textColor?: string;
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * サークルのサイズ（px）
         */
        size?: number;
        /**
         * ストロークの太さ（px）
         */
        strokeWidth?: number;
        /**
         * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
         */
        animationDuration?: string;
    };
}
declare const RebitaCircleProgress: ({ progress, children, appearance }: CircleProgressProps) => react_jsx_runtime.JSX.Element;

type SlideGuideDotType = "default" | "progress";

interface SlideGuideDotProps {
    /**
     * ドットの表示タイプ
     */
    type: SlideGuideDotType;
    /**
     * 進捗の割合（0-100）
     */
    progress: number;
    /**
     * クリック時のコールバック関数
     */
    onClick: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * プログレスバーの色
         */
        primaryColor?: string;
        /**
         * トラック（背景）の色
         */
        trackColor?: string;
        /**
         * サークルのサイズ（px）
         */
        circleSize?: number;
        /**
         * ドットのサイズ（px）
         */
        dotSize?: number;
        /**
         * ストロークの太さ（px）
         */
        strokeWidth?: number;
        /**
         * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
         */
        animationDuration?: string;
    };
}
declare const RebitaSlideGuideDot: ({ type, progress, appearance, onClick }: SlideGuideDotProps) => react_jsx_runtime.JSX.Element;

interface FadeSlideImageProps {
    /**
     * スライドショーで表示する画像の配列
     */
    images: FadeInAndZoomImagesImageItem[];
    /**
     * FadeInAndZoomImagesコンポーネントに渡すprops
     */
    fadeInAndZoomImagesProps?: Partial<ComponentProps<typeof FadeInAndZoomImages>>;
    /**
     * SlideGuideDotコンポーネントに渡すprops
     */
    slideGuideDotProps?: Partial<ComponentProps<typeof RebitaSlideGuideDot>>;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * ガイドドット間の間隔（px）
         */
        guideGap?: number;
    };
}
declare const RebitaFadeSlideImage: ({ images, fadeInAndZoomImagesProps, slideGuideDotProps, appearance }: FadeSlideImageProps) => react_jsx_runtime.JSX.Element;

interface FadeTextProps {
    /**
     * 表示するテキスト内容
     */
    children?: ReactNode;
    /**
     * 表示の進捗（0-100）
     */
    progress?: number;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * テキストの色
         */
        color?: string;
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
    };
}
declare const RebitaFadeText: ({ children, progress, appearance }: FadeTextProps) => react_jsx_runtime.JSX.Element;

interface PanelProps {
    /**
     * 画像のソースURL
     */
    imageSrc: string;
    /**
     * 画像の代替テキスト
     */
    imageAlt?: string;
    /**
     * 画像上に表示するテキスト
     */
    imageText: string;
    /**
     * パネルのタイトル
     */
    title: string;
    /**
     * パネルの説明文
     */
    description: string;
    /**
     * 表示するラベルの配列
     */
    labels: ReactNode[];
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 画像の高さ（px）
         */
        imageHeight?: number;
    };
    /**
     * クリック時のコールバック関数
     */
    onClick: () => void;
}
declare const RebitaPanel: ({ imageSrc, imageAlt, imageText, title, description, labels, appearance, onClick }: PanelProps) => react_jsx_runtime.JSX.Element;

/**
 * アイコンの配置方向
 * - "left": 左側に配置
 * - "right": 右側に配置
 */
type Direction$1 = "left" | "right";
interface TextButtonWithIconProps {
    /**
     * ボタンに表示するテキスト
     */
    text?: ReactNode;
    /**
     * ボタンに表示するアイコン
     */
    icon?: ReactNode;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * レンダリングするHTML要素の種類
     */
    as?: "button" | "a" | "div";
    /**
     * リンク先URL（asが"a"の場合に使用）
     */
    href?: string;
    /**
     * アイコンの配置方向
     */
    iconDirection?: Direction$1;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * テキストとアイコンの色
         */
        color?: string;
        /**
         * アイコンのサイズ
         */
        iconSize?: Size;
    };
}
declare const RebitaTextButtonWithIcon: ({ text, icon, onClick, as, href, iconDirection, appearance }: TextButtonWithIconProps) => react_jsx_runtime.JSX.Element;

interface ToggleProps$4 {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * 開閉状態（制御コンポーネントとして使用する場合）
     */
    isOpen?: boolean;
    /**
     * 開閉状態が変更されたときのコールバック関数
     */
    onChange?: (isOpen: boolean) => void;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ドットの色（開いている状態）
         */
        dotColor?: string;
        /**
         * ラインの色（閉じている状態）
         */
        lineColor?: string;
    };
}
declare const RebitaToggle: ({ size, isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$4) => react_jsx_runtime.JSX.Element;

interface VerticalRollingTextProps {
    /**
     * 表示するテキスト内容
     */
    children?: ReactNode;
    /**
     * ホバー状態を外部から制御するかどうか（undefinedの場合は内部のホバーイベントで制御）
     */
    enableHover?: boolean;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * テキストの色
         */
        color?: string;
    };
}
declare const VerticalRollingText: ({ children, enableHover, appearance }: VerticalRollingTextProps) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$4 = {
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数
     */
    easing?: gsap.EaseString;
};
interface Props$b {
    /**
     * 表示内容
     */
    headerContent: ReactNode;
    /**
     * 表示内容
     */
    content: ReactNode;
    /**
     * アイコン
     */
    icon: ReactNode;
    /**
     * アニメーション効果
     */
    animation?: AccordionAnimation$4;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 左右のパディング（px）
         */
        paddingSide?: number;
        /**
         * 上下のパディング（px）
         */
        paddingVertical?: number;
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * ヘッダーの外観設定
         */
        header?: {
            /**
             * テキストの色
             */
            color?: string;
        };
        /**
         * コンテンツの外観設定
         */
        content?: {
            /**
             * テキストの色
             */
            color?: string;
        };
    };
}
declare const Accordion001: ({ headerContent, content, icon, appearance, animation }: Props$b) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$3 = {
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数
     */
    easing?: gsap.EaseString;
};
interface Props$a {
    /**
     * 表示内容
     */
    headerContent: ReactNode;
    /**
     * 表示内容
     */
    content: ReactNode;
    /**
     * アイコン
     */
    icon: ReactNode;
    /**
     * アニメーション効果
     */
    animation?: AccordionAnimation$3;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ヘッダーの外観設定
         */
        header?: {
            /**
             * テキストの色
             */
            color?: string;
        };
        /**
         * コンテンツの外観設定
         */
        content?: {
            /**
             * テキストの色
             */
            color?: string;
        };
    };
}
declare const Accordion002: ({ headerContent, content, icon, appearance, animation }: Props$a) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$2 = {
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数
     */
    easing?: gsap.EaseString;
};
interface Props$9 {
    /**
     * 表示内容
     */
    headerContent: ReactNode;
    /**
     * 表示内容
     */
    content: ReactNode;
    /**
     * アイコン
     */
    icon: ReactNode;
    /**
     * アニメーション効果
     */
    animation?: AccordionAnimation$2;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ヘッダーの外観設定
         */
        header?: {
            /**
             * ヘッダーの背景色
             */
            backgroundColor?: string;
            /**
             * 左側のバー（装飾線）の色
             */
            barColor?: string;
            /**
             * テキストの色
             */
            color?: string;
        };
        /**
         * コンテンツの外観設定
         */
        content?: {
            /**
             * テキストの色
             */
            color?: string;
        };
    };
}
declare const Accordion003: ({ headerContent, content, icon, appearance, animation }: Props$9) => react_jsx_runtime.JSX.Element;

type AccordionAnimation$1 = {
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数
     */
    easing?: gsap.EaseString;
};
interface Props$8 {
    /**
     * ヘッダーの表示内容
     */
    header: {
        /**
         * タイトル
         */
        title: ReactNode;
        /**
         * 本文テキスト
         */
        text: ReactNode;
    };
    /**
     * コンテンツの表示内容
     */
    content: {
        /**
         * タイトル
         */
        title: ReactNode;
        /**
         * 本文テキスト
         */
        text: ReactNode;
    };
    /**
     * アイコン
     */
    icon: ReactNode;
    /**
     * アニメーション効果
     */
    animation?: AccordionAnimation$1;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 左右のパディング（px）
         */
        paddingSide?: number;
        /**
         * 上下のパディング（px）
         */
        paddingVertical?: number;
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * ヘッダーの外観設定
         */
        header?: {
            /**
             * タイトルの色
             */
            titleColor?: string;
            /**
             * テキストの色
             */
            textColor?: string;
        };
        /**
         * コンテンツの外観設定
         */
        content?: {
            /**
             * タイトルの色
             */
            titleColor?: string;
            /**
             * テキストの色
             */
            textColor?: string;
        };
    };
}
declare const Accordion004: ({ header, content, icon, appearance, animation }: Props$8) => react_jsx_runtime.JSX.Element;

type AccordionAnimation = {
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数
     */
    easing?: gsap.EaseString;
};
interface Props$7 {
    /**
     * ヘッダーの表示内容
     */
    header: {
        /**
         * タイトル（未指定の場合は "Q" が表示されます）
         */
        title?: ReactNode;
        /**
         * 本文テキスト
         */
        text: ReactNode;
    };
    /**
     * コンテンツの表示内容
     */
    content: {
        /**
         * タイトル（未指定の場合は "A" が表示されます）
         */
        title?: ReactNode;
        /**
         * 本文テキスト
         */
        text: ReactNode;
    };
    /**
     * アイコン
     */
    icon: ReactNode;
    /**
     * アニメーション効果
     */
    animation?: AccordionAnimation;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ヘッダーの外観設定
         */
        header?: {
            /**
             * タイトルの色
             */
            titleColor?: string;
            /**
             * テキストの色
             */
            textColor?: string;
        };
        /**
         * コンテンツの外観設定
         */
        content?: {
            /**
             * タイトルの色
             */
            titleColor?: string;
            /**
             * テキストの色
             */
            textColor?: string;
        };
    };
}
declare const Accordion005: ({ header, content, icon, appearance, animation }: Props$7) => react_jsx_runtime.JSX.Element;

type Type$a = "001" | "002";
type ArrowPosition$1 = "top" | "bottom" | "left" | "right";

interface BalloonProps$1 {
    /**
     * スタイルタイプ
     */
    type?: Type$a;
    /**
     * 表示内容
     */
    children: ReactNode;
    /**
     * arrowPosition の設定
     */
    arrowPosition?: ArrowPosition$1;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * テキストの色
         */
        color?: string;
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
    };
}
declare const Balloon001: ({ type, children, appearance, arrowPosition }: BalloonProps$1) => react_jsx_runtime.JSX.Element;

type Type$9 = "001" | "002";
type ArrowPosition = "top" | "bottom" | "left" | "right";

interface BalloonProps {
    /**
     * スタイルタイプ
     */
    type?: Type$9;
    /**
     * 表示内容
     */
    children: ReactNode;
    /**
     * arrowPosition の設定
     */
    arrowPosition?: ArrowPosition;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * ボーダーの太さ（px）
         */
        borderWidth?: number;
        /**
         * テキストの色
         */
        color?: string;
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
    };
}
declare const Balloon002: ({ type, children, appearance, arrowPosition }: BalloonProps) => react_jsx_runtime.JSX.Element;

/**
 * ブラーエフェクトの方向
 * - "top": 上方向にブラー
 * - "bottom": 下方向にブラー
 * - "left": 左方向にブラー
 * - "right": 右方向にブラー
 * - "all": 全方向にブラー
 */
type Direction = "top" | "bottom" | "left" | "right" | "all";
type Props$6 = {
    /**
     * ブラーエフェクトをかける方向
     */
    direction: Direction;
    /**
     * フェードが開始する位置（%）
     */
    fadeStart?: number;
    /**
     * 背景色
     */
    bgColor: string;
    /**
     * ブラーの強さ（px）
     */
    blurAmount?: number;
    /**
     * 表示内容
     */
    children?: React__default.ReactNode;
};
declare const BlurBg: ({ direction, fadeStart, bgColor, blurAmount, children }: Props$6) => react_jsx_runtime.JSX.Element;

/**
 * パンくずリストの各項目
 */
type BreadcrumbsItem = {
    /**
     * 表示テキスト
     */
    text: string;
    /**
     * リンク設定（指定しない場合はリンクなしのテキストとして表示）
     */
    link?: {
        /**
         * リンク先URL
         */
        href: string;
        /**
         * リンクのターゲット属性（新しいタブで開く場合は "_blank" を指定）
         */
        target?: "_blank";
    };
};
interface BreadcrumbsProps {
    /**
     * パンくずリストの項目配列
     */
    items: BreadcrumbsItem[];
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * テキストの色
         */
        color?: string;
        /**
         * フォントの太さ
         */
        fontWeight?: number;
        /**
         * フォントサイズ（px）
         */
        fontSize?: number;
        /**
         * ホバー時のテキストの色
         */
        hoverColor?: string;
        /**
         * ホバーアニメーションの持続時間（秒）
         */
        duration?: number;
        /**
         * ホバーアニメーションのイージング関数
         */
        easing?: EasingKey;
        /**
         * 区切りアイコンの色
         */
        iconColor?: string;
    };
}
declare const Breadcrumbs: ({ items, appearance }: BreadcrumbsProps) => react_jsx_runtime.JSX.Element;

type Type$8 = "001" | "002" | "003";
type AnimationType$1 = "001" | "002";
type Animation$1 = {
    /**
     * アニメーションタイプ
     */
    type: AnimationType$1;
    /**
     * アニメーションの持続時間（秒）
     */
    duration?: number;
    /**
     * イージング関数のキー
     */
    easing?: EasingKey;
    /**
     * ホバー時の背景色
     */
    backgroundColor?: string;
    /**
     * ホバー時のテキスト色
     */
    textColor?: string;
};

/**
 * ボタンの外観カスタマイズ設定
 */
interface ButtonAppearance$1 {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * 上部のパディング（em単位）
     */
    paddingTop?: number;
    /**
     * 右側のパディング（em単位）
     */
    paddingRight?: number;
    /**
     * 下部のパディング（em単位）
     */
    paddingBottom?: number;
    /**
     * 左側のパディング（em単位）
     */
    paddingLeft?: number;
    /**
     * フォントサイズ（em単位）
     */
    fontSize?: number;
    /**
     * テキストの色
     */
    color?: string;
    /**
     * フォントの太さ
     */
    fontWeight?: number;
    /**
     * 無効化時のテキストの色
     */
    disabledColor?: string;
    /**
     * 無効化時の背景色
     */
    disabledBackgroundColor?: string;
    /**
     * 無効化時のボーダーの色
     */
    disabledBorderColor?: string;
}
type BaseProps$7 = {
    /**
     * ボタンの HTML 要素タイプ。リンクとして使用する場合は "a" を指定し、href も設定してください。
     */
    as?: "button" | "a" | "span";
    /**
     * ボタンのスタイルタイプ
     * - "001": 完全に丸い角（pill型、border-radius: 30em）
     * - "002": 角丸（rounded、border-radius: 8em）
     * - "003": 角が四角（square、border-radius: 0）
     */
    type?: Type$8;
    /**
     * ボタンのサイズ (small, middle, large)
     */
    size?: Size;
    /**
     * ボタンの表示内容
     */
    children: ReactNode;
    /**
     * ホバー時のアニメーション効果
     */
    animation?: Animation$1;
    /**
     * ボタンを無効化するかどうか
     */
    disabled?: boolean;
    /**
     * ボタンの外観をカスタマイズ（背景色、ボーダー色、パディング、フォントサイズなど）
     */
    appearance?: ButtonAppearance$1;
    /**
     * ボタンを親要素の幅いっぱいに広げるかどうか
     */
    fullWidth?: boolean;
    /**
     * クリック時のコールバック関数
     */
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

/**
 * ボタンの外観カスタマイズ設定
 */
interface ButtonAppearance {
    /**
     * 上部のパディング（em単位）
     */
    paddingTop?: number;
    /**
     * 右側のパディング（em単位）
     */
    paddingRight?: number;
    /**
     * 下部のパディング（em単位）
     */
    paddingBottom?: number;
    /**
     * 左側のパディング（em単位）
     */
    paddingLeft?: number;
    /**
     * アイコンのサイズ（em単位）
     */
    iconSize?: number;
    /**
     * フォントサイズ（em単位）
     */
    fontSize?: number;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * テキストの色
     */
    color?: string;
    /**
     * フォントの太さ
     */
    fontWeight?: number;
    /**
     * 無効化時のテキストの色
     */
    disabledColor?: string;
    /**
     * 無効化時の背景色
     */
    disabledBackgroundColor?: string;
    /**
     * 無効化時のボーダーの色
     */
    disabledBorderColor?: string;
}
type BaseProps$6 = {
    /**
     * ボタンの HTML 要素タイプ。リンクとして使用する場合は "a" を指定し、href も設定してください。
     */
    as?: "button" | "a" | "span";
    /**
     * ボタンのスタイルタイプ（アイコン付きボタン）
     * - "001": 中央配置 + pill型（border-radius: 30em）
     * - "002": 中央配置 + 角丸（border-radius: 8em）
     * - "003": 中央配置 + 四角（border-radius: 0）
     * - "004": 両端配置 + pill型（border-radius: 30em）
     * - "005": 両端配置 + 角丸（border-radius: 8em）
     * - "006": 両端配置 + 四角（border-radius: 0）
     * - "007": アイコン絶対配置 + pill型（border-radius: 30em）
     * - "008": アイコン絶対配置 + 角丸（border-radius: 8em）
     * - "009": アイコン絶対配置 + 四角（border-radius: 0）
     */
    type?: Type$7;
    /**
     * ボタンのサイズ (small, middle, large)
     */
    size?: Size;
    /**
     * ボタンの表示内容（テキスト）
     */
    children: ReactNode;
    /**
     * ホバー時のアニメーション効果
     */
    animation?: Animation;
    /**
     * ボタンの外観をカスタマイズ（背景色、ボーダー色、パディング、フォントサイズ、アイコンサイズなど）
     */
    appearance?: ButtonAppearance;
    /**
     * アイコンの表示位置（左側 or 右側）
     */
    iconDirection?: IconDirection;
    /**
     * 表示するアイコン（ReactNode）
     */
    icon: ReactNode;
    /**
     * ボタンを親要素の幅いっぱいに広げるかどうか
     */
    fullWidth?: boolean;
    /**
     * ボタンを無効化するかどうか
     */
    disabled?: boolean;
    /**
     * クリック時のコールバック関数
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button002: React$1.ForwardRefExoticComponent<BaseProps$6 & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps$6> & {
    href?: string;
    target?: string;
    rel?: string;
} & React$1.RefAttributes<HTMLButtonElement>>;

type CheckBoxType = "001" | "002" | "003";
interface CheckBoxProps$1 {
    /**
     * チェックボックスの一意なID
     */
    id: string;
    /**
     * チェックボックスのタイプ ("001", "002", "003" - 形状の違い)
     */
    type: CheckBoxType;
    /**
     * サイズ (small, middle, large)
     */
    size: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * チェック状態（制御コンポーネント用）
     */
    checked?: boolean;
    /**
     * 初期チェック状態（非制御コンポーネント用）
     */
    defaultChecked?: boolean;
    /**
     * 無効化するかどうか
     */
    disabled?: boolean;
    /**
     * チェック状態変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** 背景色 */
        backgroundColor?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** チェック時の背景色 */
        checkedBackgroundColor?: string;
        /** チェックマークの色 */
        markColor?: string;
    };
}
declare const CheckBox001: ({ appearance, id, type, size, name, checked, defaultChecked, disabled, onChange }: CheckBoxProps$1) => react_jsx_runtime.JSX.Element;

type CheckBoxSize = "small" | "middle";
interface CheckBoxProps {
    /**
     * id 属性
     */
    id: string;
    /**
     * サイズ (small, middle, large)
     */
    size: CheckBoxSize;
    /**
     * name 属性
     */
    name?: string;
    /**
     * チェック状態
     */
    checked?: boolean;
    /**
     * defaultChecked の設定
     */
    defaultChecked?: boolean;
    /**
     * 無効化するかどうか
     */
    disabled?: boolean;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * チェック時の背景色
         */
        checkedBackgroundColor?: string;
        /**
         * チェックマークの色
         */
        markColor?: string;
    };
}
declare const CheckBox002: ({ appearance, id, size, name, checked, defaultChecked, disabled, onChange }: CheckBoxProps) => react_jsx_runtime.JSX.Element;

/**
 * リストアイテム（表示コンテンツを含む）
 */
interface ListItemWithContent {
    /**
     * 一意なID
     */
    id: string;
    /**
     * 表示内容
     */
    content: React__default.ReactNode;
}
/**
 * リストアイテム（IDのみ）
 */
interface ListItem$1 {
    /**
     * 一意なID
     */
    id: string;
}
interface DragAndDropProps {
    /**
     * ドラッグ&ドロップ可能なアイテムの配列
     */
    items: ListItemWithContent[];
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * アイテム間の間隔（px）
         */
        gap?: number;
    };
    /**
     * アイテムの順序が変更されたときのコールバック関数
     */
    onReorder: (items: ListItem$1[]) => void;
}
declare const DragAndDrop001: ({ items, appearance, onReorder }: DragAndDropProps) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps$1 {
    /**
     * 表示内容
     */
    detail: ReactNode;
    /**
     * 表示内容
     */
    contents: ReactNode;
    /**
     * nowrap の設定
     */
    nowrap?: boolean;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * ボーダーの角丸（px）
         */
        borderRadius?: number;
    };
}
declare const Dropdown001: ({ appearance, detail, contents, nowrap }: DropdownMenuProps$1) => react_jsx_runtime.JSX.Element;

interface DropdownMenuProps {
    /**
     * 表示内容
     */
    detail: ReactNode;
    /**
     * 表示内容
     */
    contents: ReactNode;
    /**
     * nowrap の設定
     */
    nowrap?: boolean;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
        /**
         * ボーダーの角丸（px）
         */
        borderRadius?: number;
    };
    /**
     * balloonProps の設定
     */
    balloonProps?: ComponentProps<typeof Balloon001>;
}
declare const Dropdown002: ({ appearance, detail, contents, nowrap, balloonProps }: DropdownMenuProps) => react_jsx_runtime.JSX.Element;

/**
 * フレームアイコンのスタイルタイプ
 * - "001": 基本スタイル
 * - "002": バリエーション2
 * - "003": バリエーション3
 */
type Type$6 = "001" | "002" | "003";
interface FrameIconProps {
    /**
     * アイコン
     */
    icon: React.ReactNode;
    /**
     * スタイルタイプ（フレームの形状やスタイルを変更）
     * - "001": 基本スタイル
     * - "002": バリエーション2
     * - "003": バリエーション3
     */
    type: Type$6;
    /**
     * サイズ (small, middle, large)
     */
    size: Size;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * アイコンの色
         */
        iconColor?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
    };
}
declare const FrameIcon001: ({ appearance, type, size, icon }: FrameIconProps) => react_jsx_runtime.JSX.Element;

/**
 * フレーム番号のスタイルタイプ
 * - "001": 基本スタイル
 * - "002": バリエーション2
 * - "003": バリエーション3
 */
type Type$5 = "001" | "002" | "003";
interface FrameNumberProps {
    /**
     * 表示する数値
     */
    number: number;
    /**
     * スタイルタイプ（フレームの形状やスタイルを変更）
     * - "001": 基本スタイル
     * - "002": バリエーション2
     * - "003": バリエーション3
     */
    type: Type$5;
    /**
     * サイズ (small, middle, large)
     */
    size: Size;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * 背景色
         */
        backgroundColor?: string;
        /**
         * 数値の色
         */
        color?: string;
        /**
         * ボーダーの色
         */
        borderColor?: string;
    };
}
declare const FrameNumber001: ({ appearance, type, size, number }: FrameNumberProps) => react_jsx_runtime.JSX.Element;

type Props$5 = {
    /**
     * mapId の値
     */
    mapId: string;
    /**
     * defaultCenter の値
     */
    defaultCenter?: {
        lat: number;
        lng: number;
    };
    /**
     * defaultZoom の値
     */
    defaultZoom?: number;
    /**
     * disableDefaultUI の設定
     */
    disableDefaultUI?: boolean;
    /**
     * 表示内容
     */
    children: ReactNode;
};
declare const GoogleMap: ({ defaultCenter, defaultZoom, disableDefaultUI, mapId, children }: Props$5) => react_jsx_runtime.JSX.Element;

interface Header001Props {
    /**
     * 表示内容
     */
    left?: React.ReactNode;
    /**
     * 表示内容
     */
    right?: React.ReactNode;
    /**
     * 表示内容
     */
    leftInner?: React.ReactNode;
    /**
     * 表示内容
     */
    rightInner?: React.ReactNode;
    /**
     * 表示内容
     */
    modalContent?: React.ReactNode;
    /**
     * showModal の設定
     */
    showModal?: boolean;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * pc の値
     */
    pc: {
        src: string;
    };
    /**
     * sp の値
     */
    sp: {
        src: string;
    };
    /**
     * 代替テキスト
     */
    alt: string;
    /**
     * objectFit の設定
     */
    objectFit?: boolean;
};
declare const Image: ({ pc, sp, alt, objectFit }: Props$4) => react_jsx_runtime.JSX.Element;

type InputVariant$3 = "001" | "002";
interface InputProps$5 {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: InputVariant$3;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input001: React__default.ForwardRefExoticComponent<InputProps$5 & React__default.RefAttributes<HTMLInputElement>>;

interface InputProps$4 {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input002: React__default.ForwardRefExoticComponent<InputProps$4 & React__default.RefAttributes<HTMLInputElement>>;

interface InputProps$3 {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input003: React__default.ForwardRefExoticComponent<InputProps$3 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant$2 = "001" | "002";
interface InputProps$2 {
    /**
     * バリアント ("001": ボーダーなし, "002": ボーダーあり)
     */
    variant?: InputVariant$2;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input004: React__default.ForwardRefExoticComponent<InputProps$2 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant$1 = "001" | "002";
interface InputProps$1 {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: InputVariant$1;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input005: React__default.ForwardRefExoticComponent<InputProps$1 & React__default.RefAttributes<HTMLInputElement>>;

type InputVariant = "001" | "002";
type IconPosition$3 = "left" | "right";
interface InputProps {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: InputVariant;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * アイコンの表示位置 (left: 左側, right: 右側)
     */
    iconPosition?: IconPosition$3;
    /**
     * 表示するアイコン要素
     */
    icon: React__default.ReactNode;
    /**
     * input要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLInputElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * input要素のtype属性 (text, email, password等)
     */
    inputType?: React__default.HTMLInputTypeAttribute;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
    /**
     * input要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * input要素に渡す追加のHTML属性
     */
    inputProps?: React__default.InputHTMLAttributes<HTMLInputElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
    };
}
declare const Input006: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

type Type$4 = "001" | "002" | "003";
interface LabelProps$1 {
    /**
     * スタイルタイプ
     */
    type?: Type$4;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * スタイルタイプ
     */
    type?: Type$3;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * iconPosition の設定
     */
    iconPosition?: IconPosition$2;
    /**
     * アイコン
     */
    icon: React__default.ReactNode;
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * pc の値
     */
    pc: {
        src: string;
    };
    /**
     * sp の値
     */
    sp: {
        src: string;
    };
    /**
     * 代替テキスト
     */
    alt: string;
    /**
     * objectFit の設定
     */
    objectFit?: boolean;
    /**
     * aspectRatio の設定
     */
    aspectRatio?: AspectRatio;
    /**
     * duration の値
     */
    duration?: number;
    /**
     * threshold の値
     */
    threshold?: number;
    /**
     * rootMargin の値
     */
    rootMargin?: string;
    /**
     * showPlaceholder の設定
     */
    showPlaceholder?: boolean;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * スタイルタイプ
     */
    type?: ListType;
    /**
     * listStyle の設定
     */
    listStyle?: "ul" | "ol";
    /**
     * items の設定
     */
    items: ListItem[];
    /**
     * ARIA label 属性
     */
    ariaLabel?: string;
    /**
     * 外観をカスタマイズ
     */
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
    appearance?: ListItemAppearance$5;
    /**
     * クリック時のコールバック関数
     */
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
    appearance?: ListItemAppearance$4;
    /**
     * クリック時のコールバック関数
     */
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
    appearance?: ListItemAppearance$3;
    /**
     * クリック時のコールバック関数
     */
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
    appearance?: ListItemAppearance$2;
    /**
     * クリック時のコールバック関数
     */
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
    appearance?: ListItemAppearance$1;
    /**
     * クリック時のコールバック関数
     */
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
    /**
     * HTML 要素タイプ
     */
    as?: "li" | "article";
    /**
     * 表示内容
     */
    frameNumber: ReactNode;
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
declare const ListItem006: React$1.ForwardRefExoticComponent<BaseProps & Omit<HTMLAttributes<HTMLLIElement>, keyof BaseProps> & React$1.RefAttributes<HTMLLIElement>>;

type Type$2 = "001";
interface LoadingProps$1 {
    /**
     * スタイルタイプ
     */
    type?: Type$2;
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        color?: string;
    };
}
declare const Loading001: ({ type, size, appearance }: LoadingProps$1) => react_jsx_runtime.JSX.Element;

interface LoadingProps {
    /**
     * サイズ (small, middle, large)
     */
    size?: Size;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        indicatorColor?: string;
        backgroundColor?: string;
    };
}
declare const Loading002: ({ size, appearance }: LoadingProps) => react_jsx_runtime.JSX.Element;

type Type$1 = "001";
interface MediaProps {
    /**
     * 表示内容
     */
    pc: React.ReactNode;
    /**
     * 表示内容
     */
    tablet?: React.ReactNode;
    /**
     * 表示内容
     */
    sp: React.ReactNode;
}
declare const Media: ({ pc: pcNode, tablet: tabletNode, sp: spNode }: MediaProps) => React$1.ReactNode;

type Props$2 = {
    /**
     * 表示内容
     */
    children: ReactNode;
};
declare const FooterButtons: FC<Props$2>;

type Props$1 = {
    /**
     * showModal の設定
     */
    showModal: boolean;
    /**
     * 表示内容
     */
    children: ReactNode;
    /**
     * 表示内容
     */
    footer?: ReactNode;
};
declare const Modal001: FC<Props$1>;

interface NestedListItemProps$1 {
    /**
     * アイコン
     */
    icon: React__default.ReactNode;
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 開いているかどうか
     */
    isOpen?: boolean;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * 表示内容
     */
    leftIcon: React__default.ReactNode;
    /**
     * 表示内容
     */
    rightIcon: React__default.ReactNode;
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 開いているかどうか
     */
    isOpen?: boolean;
    /**
     * 外観をカスタマイズ
     */
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
    /**
     * 表示内容
     */
    children: React.ReactNode;
    /**
     * parallaxProps の設定
     */
    parallaxProps: ParallaxProps;
}
declare const ParallaxContent: ({ children, parallaxProps }: ParallaxImageProps$1) => react_jsx_runtime.JSX.Element;

interface ParallaxImageProps {
    /**
     * layer の設定
     */
    layer: BannerLayer;
    /**
     * 高さ
     */
    height?: number;
}
declare const ParallaxImage: ({ layer, height }: ParallaxImageProps) => react_jsx_runtime.JSX.Element;

interface RadioProps extends AriaRadioProps {
    /**
     * ラジオボタンのラベル内容
     */
    children: React.ReactNode;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 選択時の背景色 */
        checkedBackgroundColor?: string;
        /** チェックマークの色 */
        markColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** ラベルとの間隔 */
        gap?: number;
    };
}
declare const Radio001: React$1.ForwardRefExoticComponent<RadioProps & React$1.RefAttributes<HTMLLabelElement>>;

type ScrollRevealAnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
type Props = {
    /**
     * 表示内容
     */
    children: ReactNode;
    /**
     * スタイルタイプ
     */
    type?: ScrollRevealAnimationType;
    /**
     * duration の値
     */
    duration?: number;
    /**
     * delay の値
     */
    delay?: number;
    /**
     * distance の値
     */
    distance?: number;
    /**
     * threshold の値
     */
    threshold?: number;
    /**
     * rootMargin の値
     */
    rootMargin?: string;
    /**
     * triggerOnce の設定
     */
    triggerOnce?: boolean;
};
declare const ScrollReveal: ({ children, type, duration, delay, distance, threshold, rootMargin, triggerOnce }: Props) => react_jsx_runtime.JSX.Element;

type SelectOption = {
    value: string;
    label: string;
};

type SelectVariant$1 = "001" | "002";
interface SelectProps$1 {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: SelectVariant$1;
    /**
     * select要素のname属性
     */
    name?: string;
    /**
     * select要素のid属性
     */
    id?: string;
    /**
     * 選択肢の配列
     */
    options: SelectOption[];
    /**
     * 選択値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期選択値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * 表示するアイコン要素
     */
    icon: React__default.ReactNode;
    /**
     * select要素に渡す追加のHTML属性
     */
    selectProps?: React__default.SelectHTMLAttributes<HTMLSelectElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** アイコンの色 */
        iconColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const Select001: React__default.ForwardRefExoticComponent<SelectProps$1 & React__default.RefAttributes<HTMLSelectElement>>;

type SelectVariant = "001" | "002";
interface SelectProps {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: SelectVariant;
    /**
     * select要素のname属性
     */
    name?: string;
    /**
     * select要素のid属性
     */
    id?: string;
    /**
     * 選択肢の配列
     */
    options: SelectOption[];
    /**
     * 選択値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期選択値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (event: React__default.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * 表示するアイコン要素
     */
    icon: React__default.ReactNode;
    /**
     * select要素に渡す追加のHTML属性
     */
    selectProps?: React__default.SelectHTMLAttributes<HTMLSelectElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** アイコンの色 */
        iconColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const Select002: React__default.ForwardRefExoticComponent<SelectProps & React__default.RefAttributes<HTMLSelectElement>>;

type Type = "001";
interface SkeletonProps {
    /**
     * スタイルタイプ
     */
    type?: Type;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        /**
         * スケルトンの幅（CSSの値、例: "100px", "50%"）
         */
        width?: string;
        /**
         * スケルトンの高さ（CSSの値、例: "20px", "100%"）
         */
        height?: string;
        /**
         * スケルトンの角丸（CSSの値、例: "4px", "50%"）
         */
        borderRadius?: string;
    };
    /**
     * 追加する CSS クラス名
     */
    className?: string;
}
declare const Skeleton001: ({ type, appearance, className }: SkeletonProps) => react_jsx_runtime.JSX.Element;

interface ArrowStyle {
    /**
     * 矢印のサイズ（px）
     */
    size?: number;
    /**
     * 矢印の位置（スライダー端からの距離、px）
     */
    position?: number;
    /**
     * 矢印の色
     */
    color?: string;
    /**
     * ホバー時の矢印の色
     */
    hoverColor?: string;
    /**
     * 無効時の透明度（0-1）
     */
    disableOpacity?: number;
}
interface AutoPlay {
    /**
     * 自動再生を有効にするかどうか
     */
    active: boolean;
    /**
     * スライド切り替えの間隔（ミリ秒）
     */
    interval?: number;
    /**
     * 自動再生の進行状況を通知するコールバック関数（0-1の値）
     */
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
    /**
     * options の設定
     */
    options?: KeenSliderOptions;
    /**
     * ローディング状態
     */
    loading?: boolean;
    /**
     * 表示内容
     */
    items: {
        key: string;
        children: React.ReactNode;
    }[];
    /**
     * state の設定
     */
    state?: State;
    /**
     * 表示内容
     */
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
    /**
     * autoPlay の設定
     */
    autoPlay?: AutoPlay;
    /**
     * dots の設定
     */
    dots?: {
        /**
         * ドットを表示するかどうか
         */
        show: boolean;
        /**
         * ドットの外観設定
         */
        appearance?: {
            /**
             * ドットのサイズ（px）
             */
            size?: number;
            /**
             * ドット間の間隔（px）
             */
            gap?: number;
            /**
             * スライダーからの上マージン（px）
             */
            marginTop?: number;
            /**
             * ドットの位置調整
             */
            position?: number;
            /**
             * ドットの背景色
             */
            backgroundColor?: string;
            /**
             * ドットのボーダー色
             */
            borderColor?: string;
            /**
             * アクティブなドットの背景色
             */
            activeBackgroundColor?: string;
            /**
             * アクティブなドットのボーダー色
             */
            activeBorderColor?: string;
        };
    };
}
declare const Slider: ({ options, items, controller, state, dots, autoPlay }: SliderProps) => react_jsx_runtime.JSX.Element;

interface TextProps {
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * fontSize の値
     */
    fontSize: number;
    /**
     * color の値
     */
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
    /**
     * テキストボタンのスタイルタイプ
     * - "001": 下線アニメーション
     * - "002": テキストカラー変化
     */
    type?: TextButtonType;
    /**
     * ボタンの表示内容（テキスト）
     */
    children: React__default.ReactNode;
    /**
     * 表示するアイコン（ReactNode）
     */
    icon?: React__default.ReactNode;
    /**
     * アイコンの表示位置（左側 or 右側）
     */
    iconPosition?: IconPosition$1;
    /**
     * ボタンの外観をカスタマイズ（ホバー色、アニメーション設定、間隔など）
     */
    appearance?: {
        /**
         * ホバー時の色
         */
        hoverColor?: string;
        /**
         * ホバーアニメーションの持続時間
         */
        hoverDuration?: string;
        /**
         * ホバーアニメーションのイージング関数
         */
        hoverEase?: EasingKey;
        /**
         * テキストとアイコンの間隔（em単位）
         */
        gap?: number;
        /**
         * アイコンの上部パディング（em単位）
         */
        paddingTop?: number;
    };
    /**
     * 追加する CSS スタイル
     */
    style?: React__default.CSSProperties;
};
type TextButtonElement = HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement;
declare const TextButton001: React__default.ForwardRefExoticComponent<TextButtonProps & React__default.RefAttributes<TextButtonElement>>;

type TextFieldVariant$2 = "001" | "002";
type TextFieldType = TextFieldVariant$2;
interface TextFieldProps$4 {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: TextFieldVariant$2;
    /**
     * textarea要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * textarea要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    /**
     * textarea要素に渡す追加のHTML属性
     */
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** 行の高さ */
        lineHeight?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const TextField001: React__default.ForwardRefExoticComponent<TextFieldProps$4 & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps$3 {
    /**
     * textarea要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * textarea要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    /**
     * textarea要素に渡す追加のHTML属性
     */
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** 行の高さ */
        lineHeight?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const TextField002: React__default.ForwardRefExoticComponent<TextFieldProps$3 & React__default.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps$2 {
    /**
     * textarea要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * textarea要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    /**
     * textarea要素に渡す追加のHTML属性
     */
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** 行の高さ */
        lineHeight?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const TextField003: React__default.ForwardRefExoticComponent<TextFieldProps$2 & React__default.RefAttributes<HTMLTextAreaElement>>;

type TextFieldVariant$1 = "001" | "002";
interface TextFieldProps$1 {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: TextFieldVariant$1;
    /**
     * textarea要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * textarea要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    /**
     * textarea要素に渡す追加のHTML属性
     */
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** 行の高さ */
        lineHeight?: number;
        /** テキスト色 */
        color?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const TextField004: React__default.ForwardRefExoticComponent<TextFieldProps$1 & React__default.RefAttributes<HTMLTextAreaElement>>;

type TextFieldVariant = "001" | "002";
interface TextFieldProps {
    /**
     * バリアント ("001": 角ばった形状, "002": 丸みのある形状)
     */
    variant?: TextFieldVariant;
    /**
     * textarea要素のname属性
     */
    name?: string;
    /**
     * プレースホルダーテキスト
     */
    placeholder?: string;
    /**
     * 入力値（制御コンポーネント用）
     */
    value?: string;
    /**
     * 初期値（非制御コンポーネント用）
     */
    defaultValue?: string;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (e: React__default.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * エラー状態かどうか
     */
    error?: boolean;
    /**
     * エラーメッセージテキスト
     */
    errorText?: string;
    /**
     * textarea要素のid属性
     */
    id?: string;
    /**
     * ラベルテキスト
     */
    label?: string;
    /**
     * aria-label属性（アクセシビリティ用）
     */
    ariaLabel?: string;
    /**
     * オートコンプリート属性
     */
    autoComplete?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"];
    /**
     * textarea要素に渡す追加のHTML属性
     */
    inputProps?: React__default.TextareaHTMLAttributes<HTMLTextAreaElement>;
    /**
     * 外観のカスタマイズ設定
     */
    appearance?: {
        /** フォントサイズ */
        fontSize?: number;
        /** 行の高さ */
        lineHeight?: number;
        /** テキスト色 */
        color?: string;
        /** ボーダー色 */
        borderColor?: string;
        /** 背景色 */
        backgroundColor?: string;
        /** プレースホルダー色 */
        placeholderColor?: string;
        /** フォーカス時のリング色 */
        focusRingColor?: string;
        /** エラー色 */
        errorColor?: string;
        /** エラーテキストのフォントサイズ */
        errorFontSize?: number;
        /** エラー時の背景色 */
        errorBackgroundColor?: string;
        /** エラー時のボーダー色 */
        errorBorderColor?: string;
        /** ラベルのフォントサイズ */
        labelFontSize?: number;
        /** ラベルの色 */
        labelColor?: string;
        /** ラベルのフォントウェイト */
        labelFontWeight?: number | string;
        /** ラベルの下マージン */
        labelMarginBottom?: number;
    };
}
declare const TextField005: React__default.ForwardRefExoticComponent<TextFieldProps & React__default.RefAttributes<HTMLTextAreaElement>>;

type IconPosition = "left" | "right";
interface TextIconProps {
    /**
     * アイコン
     */
    icon: React__default.ReactNode;
    /**
     * 表示内容
     */
    children: React__default.ReactNode;
    /**
     * iconPosition の設定
     */
    iconPosition?: IconPosition;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        gap?: number;
        paddingTop?: number;
    };
}
declare const TextIcon001: React__default.ForwardRefExoticComponent<TextIconProps & React__default.RefAttributes<HTMLDivElement>>;

interface ToggleProps$3 {
    /**
     * 開いているかどうか
     */
    isOpen?: boolean;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (isOpen: boolean) => void;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        lineColor?: string;
        animationBackgroundColorLine?: string;
        animationBackgroundColorBefore?: string;
        animationBackgroundColorAfter?: string;
    };
}
declare const Toggle001: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$3) => react_jsx_runtime.JSX.Element;

interface ToggleProps$2 {
    /**
     * 開いているかどうか
     */
    isOpen?: boolean;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (isOpen: boolean) => void;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        lineColor?: string;
    };
}
declare const Toggle002: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$2) => react_jsx_runtime.JSX.Element;

interface ToggleProps$1 {
    /**
     * 開いているかどうか
     */
    isOpen?: boolean;
    /**
     * 値変更時のコールバック関数
     */
    onChange?: (isOpen: boolean) => void;
    /**
     * クリック時のコールバック関数
     */
    onClick?: () => void;
    /**
     * 外観をカスタマイズ
     */
    appearance?: {
        lineColor?: string;
        backgroundColor?: string;
    };
}
declare const Toggle003: ({ isOpen: controlledIsOpen, onChange, onClick, appearance }: ToggleProps$1) => react_jsx_runtime.JSX.Element;

type ToggleProps = {
    /**
     * 開閉状態
     */
    isOpen: boolean;
    /**
     * 表示する内容
     */
    children: React.ReactNode;
    /**
     * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
     */
    duration?: string;
    /**
     * アニメーションのイージング関数
     */
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
