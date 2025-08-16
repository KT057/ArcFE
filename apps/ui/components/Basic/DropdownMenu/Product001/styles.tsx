import styled from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledDetailWrapper = styled.div`
  padding-top: ${({ theme }) => theme.size.em(8)};
  opacity: 0;
  pointer-events: none;
  transform: translateY(${({ theme }) => theme.size.em(-10)});
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic}, transform 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
`;

export const StyledDetail = styled.div.withConfig({
	shouldForwardProp: (prop) =>
		prop !== "borderColor" && prop !== "backgroundColor",
})<{
	borderColor: string | undefined;
	backgroundColor: string | undefined;
	borderRadius: number | undefined;
	nowrap: boolean | undefined;
}>`
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  border-radius: ${({ borderRadius, theme }) => theme.size.em(borderRadius ?? 8)};
  z-index: 1;
  transform: translate(-50%, 100%);
  padding: ${({ theme }) => theme.size.em(16)};
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  box-sizing: border-box;
  white-space: ${({ nowrap }) => (nowrap === true || nowrap === undefined ? "nowrap" : "normal")};
`;

export const StyledContentsWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledDetailWrapper} {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
`;

export const StyledContents = styled.div`
  position: relative;
`;
