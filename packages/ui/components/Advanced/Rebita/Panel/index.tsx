import type { ReactNode } from "react";
import {
  StyledPanel,
  StyledPanelContent,
  StyledPanelContentText,
  StyledPanelContentTitle,
  StyledPanelImageContent,
  StyledPanelImageImage,
  StyledPanelImageOverlay,
  StyledPanelImageText,
  StyledPanelImageWrapper,
  StyledPanelLabel,
  StyledPanelLabelWrapper,
  StyledPanelWrapper
} from "./styles";

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

export const RebitaPanel = ({
  imageSrc = "./images/img-01.jpg",
  imageAlt = "",
  imageText = "工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生",
  title = "リノア北赤羽",
  description = "工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生",
  labels = [],
  appearance,
  onClick
}: PanelProps) => {
  return (
    <StyledPanelWrapper>
      <StyledPanel onClick={onClick}>
        <StyledPanelImageWrapper imageHeight={appearance?.imageHeight}>
          <StyledPanelImageContent>
            <StyledPanelImageImage src={imageSrc} alt={imageAlt} />
          </StyledPanelImageContent>
          <StyledPanelImageOverlay className="panel-image-overlay" />
          <StyledPanelImageText className="panel-image-text">
            {imageText}
          </StyledPanelImageText>
        </StyledPanelImageWrapper>

        <StyledPanelContent>
          <StyledPanelContentTitle>{title}</StyledPanelContentTitle>
          <StyledPanelContentText>{description}</StyledPanelContentText>
        </StyledPanelContent>

        <StyledPanelLabelWrapper>
          {labels.map((label, index) => (
            <StyledPanelLabel key={index}>
              <>{label}</>
            </StyledPanelLabel>
          ))}
        </StyledPanelLabelWrapper>
      </StyledPanel>
    </StyledPanelWrapper>
  );
};
