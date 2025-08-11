import styled from "styled-components";

export const StyledFadeInAndZoomImagesWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFadeInAndZoomImagesImageInner = styled.div`
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-top: 50%;
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

  &:nth-child(1) {
    z-index: 1;
    opacity: 1;
  }
`;

export const StyledFadeInAndZoomImagesImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;