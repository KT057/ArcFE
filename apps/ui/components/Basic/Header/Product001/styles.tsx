import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledHeader = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "backgroundColor"
})<{ height: number; backgroundColor: string | undefined }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ height, theme }) => theme.size.em(height)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.size.em(20)};
  z-index: 100;
`;

export const StyledHeaderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledLeftWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{ gap: number | undefined }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;

export const StyledRightWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{ gap: number | undefined }>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;

export const StyledModalWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "backgroundColor"
})<{
  height: number;
  backgroundColor: string | undefined;
  showModal: boolean | undefined;
}>`
  position: fixed;
  top: ${({ height, theme }) => theme.size.em(height)};
  left: 0;
  width: 100%;
  height: calc(100% - ${({ height, theme }) => theme.size.em(height)});
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ showModal }) =>
    showModal &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
