import styled from "styled-components";

export const StyledContainerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const StyledContainerInner = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 25px 0;
`;

export const StyledContent = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 22px 13px 0 rgba(0,0,0,0.08), 0 14px 26px 6px rgba(0,0,0,0.12);
  position: relative;
  padding: 25px 40px;
  box-sizing: border-box;
`;

export const StyledCloseIconWrapper = styled.button`
  width: ${({ theme }) => theme.size.em(16)};
  position: absolute;
  top: ${({ theme }) => theme.size.em(10)};
  right: ${({ theme }) => theme.size.em(10)};
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  color: #333;
  opacity: 1;
  transition: opacity 0.2s ${({ theme }) => theme.animation.easing.easeInCubic};

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledContentFooter = styled.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(15)};
`;
