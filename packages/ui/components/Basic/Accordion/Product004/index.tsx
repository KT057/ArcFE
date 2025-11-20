import type { ReactNode } from "react";
import { useAccordion } from "../hooks/useAccordion";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionContentTitle,
  StyledAccordionContentWrapper,
  StyledAccordionHeader,
  StyledAccordionHeaderInner,
  StyledAccordionIcon,
  StyledAccordionText,
  StyledAccordionTitle,
  StyledAccordionTitleWrapper,
  StyledAccordionWrapper
} from "./styles";

export type AccordionAnimation = {
  /**
   * アニメーションの持続時間（秒）
   */
  duration?: number;
  /**
   * イージング関数
   */
  easing?: gsap.EaseString;
};

interface Props {
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
  animation?: AccordionAnimation;
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

export const Accordion004 = ({
  header,
  content,
  icon,
  appearance,
  animation
}: Props) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });

  return (
    <StyledAccordionWrapper>
      <StyledAccordion>
        <StyledAccordionHeader
          borderColor={appearance?.borderColor ?? "#000"}
          paddingSide={appearance?.paddingSide}
          paddingVertical={appearance?.paddingVertical}
          onClick={handleClick}
        >
          <StyledAccordionHeaderInner>
            <StyledAccordionTitleWrapper>
              <StyledAccordionTitle
                titleColor={appearance?.header?.titleColor ?? "#f10707"}
              >
                {header.title}
              </StyledAccordionTitle>
              <StyledAccordionText
                textColor={appearance?.header?.textColor ?? "#000"}
              >
                {header.text}
              </StyledAccordionText>
            </StyledAccordionTitleWrapper>

            <StyledAccordionIcon
              ref={iconRef}
              color={appearance?.iconColor ?? "#000"}
            >
              {icon}
            </StyledAccordionIcon>
          </StyledAccordionHeaderInner>
        </StyledAccordionHeader>

        <StyledAccordionContentWrapper ref={contentRef}>
          <StyledAccordionContent
            paddingSide={appearance?.paddingSide}
            paddingVertical={appearance?.paddingVertical}
          >
            <StyledAccordionContentTitle
              titleColor={appearance?.content?.titleColor ?? "#000"}
            >
              {content.title}
            </StyledAccordionContentTitle>
            <StyledAccordionContentText
              textColor={appearance?.content?.textColor ?? "#000"}
            >
              {content.text}
            </StyledAccordionContentText>
          </StyledAccordionContent>
        </StyledAccordionContentWrapper>
      </StyledAccordion>
    </StyledAccordionWrapper>
  );
};
