import styled from "styled-components";

type StyledPictureProps = {
  objectFit: boolean;
};

type StyledImgProps = {
  objectFit: boolean;
};

export const StyledPicture = styled.picture.withConfig({
  shouldForwardProp: (prop) => prop !== "objectFit"
})<StyledPictureProps>`
  display: block;
  width: 100%;
  height: ${({ objectFit }) => (objectFit ? "100%" : "auto")};
`;

export const StyledImg = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "objectFit"
})<StyledImgProps>`
  width: 100%;
  display: block;
  object-fit: ${({ objectFit }) => (objectFit ? "cover" : "contain")};
  height: ${({ objectFit }) => (objectFit ? "100%" : "auto")};
`;
