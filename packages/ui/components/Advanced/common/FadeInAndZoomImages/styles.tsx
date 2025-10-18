import styled from "styled-components";

export const StyledFadeInAndZoomImagesWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFadeInAndZoomImagesImageInner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height"
})<{
  height: number | undefined;
}>`
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-top: ${({ height, theme }) => theme.size.em(height ?? 200)};
  }
`;

export const StyledFadeInAndZoomImagesContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0;
`;

export const StyledFadeInAndZoomImagesImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
