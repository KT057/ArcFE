import type { EasingKey } from "../../../../styles/easing";
import {
  StyledBgImageContentContainer,
  StyledBgImageContentInner,
  StyledBgImageContentWrapper
} from "./styles";

export type AnimationType = "001" | "002";

interface BgImageContentProps {
  children: React.ReactNode;
  imageUrl: string;
  height: number;
  animationType?: AnimationType;
  style?: {
    scale?: number;
    duration?: number;
    easing?: EasingKey;
  };
}

export const BgImageContent = ({
  children,
  imageUrl,
  height,
  animationType,
  style
}: BgImageContentProps) => {
  return (
    <StyledBgImageContentWrapper>
      <StyledBgImageContentContainer
        height={height}
        imageUrl={imageUrl}
        animationType={animationType}
        scale={style?.scale}
        duration={style?.duration}
        easing={style?.easing}
      >
        <StyledBgImageContentInner>{children}</StyledBgImageContentInner>
      </StyledBgImageContentContainer>
    </StyledBgImageContentWrapper>
  );
};
