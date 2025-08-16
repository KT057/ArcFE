import styled from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledDetailWrapper = styled.div`
  padding-top: ${({ theme }) => theme.size.em(4)};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
`;

export const StyledDetail = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "nowrap"
})<{
  nowrap: boolean | undefined;
}>`
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  transform: translateY(${({ theme }) => theme.size.em(5)});
  white-space: ${({ nowrap }) => (nowrap === true || nowrap === undefined ? "nowrap" : "normal")};
`;

export const StyledContentsWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledDetailWrapper} {
      opacity: 1;
      pointer-events: auto;
    }

    ${StyledDetail} {
      transform: translateY(${({ theme }) => theme.size.em(10)});
    }
  }
`;

export const StyledDetailInner = styled.div`
  padding: ${({ theme }) => theme.size.em(10)};
`;

export const StyledContents = styled.div`
  position: relative;
`;
