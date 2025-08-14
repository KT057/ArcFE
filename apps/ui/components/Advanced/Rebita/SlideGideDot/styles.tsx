import styled from "styled-components";

export type SlideGuideDotType = "default" | "progress";

export const StyledSlideGuideDotWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledSlideGuideDotContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSlideGuideDotItem = styled.span`
  width: ${({ theme }) => theme.size.em(10)};
  height: ${({ theme }) => theme.size.em(10)};
  display: block;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
