import styled from "styled-components";

export const StyledCircleProgressWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledCircleProgressContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})<{ size?: number }>`
  width: ${({ theme, size }) => theme.size.em(size || 100)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCircleProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const StyledCircleProgressPercentage = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "textColor"].includes(prop)
})<{ fontSize?: number; textColor?: string }>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ textColor }) => textColor || "#1f2937"};
`;
