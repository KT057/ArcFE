import type { EasingKey } from "../../../../styles/easing";
import {
  StyledBgImageContentContainer,
  StyledBgImageContentInner,
  StyledBgImageContentWrapper
} from "./styles";

/**
 * 背景画像のアニメーションタイプ
 * - "001": ホバー時に背景画像が拡大するシンプルなズームアニメーション
 * - "002": ホバー時に背景画像が拡大し、オーバーレイとコンテンツがフェードアウトするアニメーション
 */
export type AnimationType = "001" | "002";

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
  animationType?: AnimationType;
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

export const BgImageContent = ({
  children,
  imageUrl,
  height,
  animationType,
  appearance
}: BgImageContentProps) => {
  return (
    <StyledBgImageContentWrapper>
      <StyledBgImageContentContainer
        height={height}
        imageUrl={imageUrl}
        animationType={animationType}
        scale={appearance?.scale}
        duration={appearance?.duration}
        easing={appearance?.easing}
      >
        <StyledBgImageContentInner>{children}</StyledBgImageContentInner>
      </StyledBgImageContentContainer>
    </StyledBgImageContentWrapper>
  );
};
