import type { EasingKey } from "../../../styles/easing";
import { Svg004Icon } from "../Icons";
import {
  StyledBreadcrumbs,
  StyledBreadcrumbsItem,
  StyledBreadcrumbsItemIcon,
  StyledBreadcrumbsItemLink,
  StyledBreadcrumbsItemText,
  StyledBreadcrumbsWrapper
} from "./styles";

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

export const Breadcrumbs = ({ items, appearance }: BreadcrumbsProps) => {
  return (
    <StyledBreadcrumbsWrapper>
      <StyledBreadcrumbs>
        {items.map((item, index) => (
          <StyledBreadcrumbsItem key={item.text}>
            {item.link ? (
              <StyledBreadcrumbsItemLink
                href={item.link.href}
                target={item.link.target}
                duration={appearance?.duration ?? 0.3}
                easing={appearance?.easing ?? "easeInOutSine"}
                fontSize={appearance?.fontSize ?? 16}
                color={appearance?.color ?? "#000"}
                hoverColor={appearance?.hoverColor ?? "#ccc"}
              >
                {item.text}
              </StyledBreadcrumbsItemLink>
            ) : (
              <StyledBreadcrumbsItemText
                fontSize={appearance?.fontSize ?? 16}
                color={appearance?.color ?? "#000"}
              >
                {item.text}
              </StyledBreadcrumbsItemText>
            )}
            {index !== items.length - 1 && (
              <StyledBreadcrumbsItemIcon
                color={appearance?.iconColor ?? "#000"}
              >
                <Svg004Icon />
              </StyledBreadcrumbsItemIcon>
            )}
          </StyledBreadcrumbsItem>
        ))}
      </StyledBreadcrumbs>
    </StyledBreadcrumbsWrapper>
  );
};
