import { SP_SIZE } from "../../../styles/size";
import { StyledImg, StyledPicture } from "./styles";

type Props = {
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

export const Image = ({ pc, sp, alt, objectFit = false }: Props) => {
  return (
    <StyledPicture objectFit={objectFit}>
      <source srcSet={sp.src} media={`(max-width: ${SP_SIZE}px)`} />
      <StyledImg src={pc.src} alt={alt} objectFit={objectFit} />
    </StyledPicture>
  );
};
