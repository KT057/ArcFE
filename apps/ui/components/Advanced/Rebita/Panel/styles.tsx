import styled from "styled-components";

export const StyledPanelWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledPanel = styled.div`
  padding: ${({ theme }) => theme.size.em(15)};
  background-color: rgba(204, 204, 204, 1);
  border-radius: ${({ theme }) => theme.size.em(5)};
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  border: 1px solid #ccc;

  &:hover {
    transform: translateY(${({ theme }) => theme.size.em(-8)});
    background-color: rgba(204, 204, 204, 0);

    .panel-image-overlay {
      opacity: 0;
    }

    .panel-image-text {
      opacity: 0;
    }
  }
`;

export const StyledPanelImageWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "imageHeight"
})<{ imageHeight: number | undefined }>`
  width: 100%;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.size.em(5)};
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: ${({ imageHeight, theme }) => `${theme.size.em(imageHeight ?? 360)}`};
    opacity: 1;
  }
`;

export const StyledPanelImageOverlay = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

export const StyledPanelImageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const StyledPanelImageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledPanelImageText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 1.5;
  z-index: 2;
  color: #fff;
  padding: ${({ theme }) => theme.size.em(10)};
  font-size: ${({ theme }) => theme.size.em(16)};
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin: 0;
`;

export const StyledPanelContent = styled.div`
  margin-bottom: ${({ theme }) => theme.size.em(10)};
`;

export const StyledPanelContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.em(16)};
  font-weight: 700;
  margin: 0;
`;

export const StyledPanelContentText = styled.p`
  font-size: ${({ theme }) => theme.size.em(12)};
  line-height: 1.5;
  margin: 0;
`;

export const StyledPanelLabelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.em(5)};
`;

export const StyledPanelLabel = styled.div`
  display: inline-block;
`;
