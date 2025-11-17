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
