import styled from "styled-components";

type RadioProps = {
  backgroundColor?: string;
};

type RadioTextProps = {
  fontSize?: number;
  color?: string;
};

export const StyledRadioWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;

export const StyledRadio = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})<RadioProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  display: flex;
  align-items: center;
`;

export const StyledRadioCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRadioText = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})<RadioTextProps>`
  padding-left: ${({ theme, fontSize }) => theme.size.em((5 / (fontSize ?? 18)) * 10)};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  color: ${({ color }) => color ?? "#fff"};
  line-height: 1;
  cursor: pointer;
`;
