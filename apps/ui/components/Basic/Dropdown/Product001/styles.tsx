import styled from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledDetailWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding-top: ${({ theme }) => theme.size.em(8)};
  opacity: 0;
  transform: translate(-50%, 100%);
  pointer-events: none;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
`;

export const StyledDetail = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "borderColor" && prop !== "backgroundColor"
})<{
  borderColor: string | undefined;
  backgroundColor: string | undefined;
  borderRadius: number | undefined;
  nowrap: boolean | undefined;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  border-radius: ${({ borderRadius, theme }) => theme.size.em(borderRadius ?? 8)};
  z-index: 1;
  transform: translateY(${({ theme }) => theme.size.em(5)});
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  padding: ${({ theme }) => theme.size.em(16)};
  box-sizing: border-box;
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

export const StyledContents = styled.div`
  position: relative;
`;
