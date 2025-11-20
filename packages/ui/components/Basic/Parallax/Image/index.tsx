import { type BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import { em } from "../../../../styles";
import { StyledWrapper } from "./styles";

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

export const ParallaxImage = ({ layer, height }: ParallaxImageProps) => {
  return (
    <StyledWrapper>
      <ParallaxBanner
        layers={[layer]}
        style={{ height: `${em(height ?? 300)}`, width: "100%" }}
      />
    </StyledWrapper>
  );
};
