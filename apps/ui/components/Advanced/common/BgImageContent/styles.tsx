import styled from "styled-components";

export const StyledBgImageContentWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledBgImageContentContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["height", "imageUrl"].includes(prop)
})<{ height?: number; imageUrl?: string }>`
  width: 100%;
  height: ${({ theme, height }) => theme.size.em(height || 17)};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
    background-size: cover;
    z-index: 0;
  }

  &:hover {
    &::before {
      transform: scale(1.1);
    }
  }
`;

export const StyledBgImageContentInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
