import type { ReactNode } from "react";
import { useAccordion } from "../hooks/useAccordion";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionContentText,
  StyledAccordionContentWrapper,
  StyledAccordionHeader,
  StyledAccordionHeaderInner,
  StyledAccordionIcon,
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

export const Accordion003 = ({
  headerContent,
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
          backgroundColor={appearance?.header?.backgroundColor ?? "#fff"}
          barColor={appearance?.header?.barColor ?? "#000"}
          onClick={handleClick}
        >
          <StyledAccordionHeaderInner>
            <StyledAccordionTitleWrapper>
              <StyledAccordionTitle color={appearance?.header?.color ?? "#000"}>
                {headerContent}
              </StyledAccordionTitle>
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
          <StyledAccordionContent>
            <StyledAccordionContentText
              color={appearance?.content?.color ?? "#000"}
            >
              {content}
            </StyledAccordionContentText>
          </StyledAccordionContent>
        </StyledAccordionContentWrapper>
      </StyledAccordion>
    </StyledAccordionWrapper>
  );
};
