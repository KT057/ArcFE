import styled from "styled-components";

export const StyledFadeSlideImageWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledFadeSlideImageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.size.em(14)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.size.em(5)};
`;

export const StyledFadeSlideImageGuideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(4)};
`;

export const StyledFadeSlideImageGuideItem = styled.div`
  display: inline-block;
`;
