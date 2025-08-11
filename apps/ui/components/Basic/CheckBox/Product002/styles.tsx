import styled, { css } from "styled-components";
import type { CheckBoxSize } from ".";

export type CheckBoxProps = {
  size: CheckBoxSize;
};

type CheckBoxBackgroundProps = {
  backgroundColor: string;
};

type CheckBoxInputProps = {
  checked: boolean;
  checkedBackgroundColor: string;
};

type CheckBoxCheckmarkProps = {
  size: CheckBoxSize;
  markColor: string;
};

export const StyledCheckBoxWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;

export const StyledCheckBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})<CheckBoxProps>`
  position: relative;
  
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
      case "middle":
        return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
      default:
        return css`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
    }
  }}
`;

export const StyledCheckBoxBackground = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})<CheckBoxBackgroundProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 0;
  box-sizing: border-box;
  border-radius: 50%;
`;

export const StyledCheckBoxCheckmark = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "markColor"
})<CheckBoxCheckmarkProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  border-radius: 50%;
  background-color: ${({ markColor }) => markColor};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: ${({ theme }) => theme.size.em(10)};
          height: ${({ theme }) => theme.size.em(10)};
        `;
      case "middle":
        return css`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
      default:
        return css`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
    }
  }}
`;

export const StyledCheckBoxInput = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "checked" && prop !== "checkedBackgroundColor"
})<CheckBoxInputProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  

  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark} {
    display: block;
  }
`;
