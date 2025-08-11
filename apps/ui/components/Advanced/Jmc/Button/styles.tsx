import styled from "styled-components";

type ButtonProps = {
  backgroundColor?: string;
  textColor?: string;
};

type ButtonLeftProps = {
  fontSize?: number;
  color?: string;
};

export const StyledJmcButtonWrapper = styled.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledJmcButton = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "textColor"
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(16)};
  border-radius: ${({ theme }) => theme.size.em(30)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#909090"};
  gap: ${({ theme }) => theme.size.em(25)};
  cursor: pointer;
`;

export const StyledJmcButtonLeft = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<ButtonLeftProps>`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 14)};
  display: block;
  color: ${({ color }) => color ?? "#fff"};
`;