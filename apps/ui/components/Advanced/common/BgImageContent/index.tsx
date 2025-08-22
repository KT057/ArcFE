import {
  StyledBgImageContentContainer,
  StyledBgImageContentInner,
  StyledBgImageContentWrapper
} from "./styles";

interface BgImageContentProps {
  children: React.ReactNode;
  imageUrl: string;
  height: number;
}

export const BgImageContent = ({
  children,
  imageUrl,
  height
}: BgImageContentProps) => {
  return (
    <StyledBgImageContentWrapper>
      <StyledBgImageContentContainer height={height} imageUrl={imageUrl}>
        <StyledBgImageContentInner>{children}</StyledBgImageContentInner>
      </StyledBgImageContentContainer>
    </StyledBgImageContentWrapper>
  );
};
