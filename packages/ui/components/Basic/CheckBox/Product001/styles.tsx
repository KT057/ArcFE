import styled, { css } from "styled-components";
import type { Size } from "../../../../styles/size";
import type { CheckBoxType } from ".";

export type CheckBoxProps = {
  size: Size;
};

type CheckBoxBackgroundProps = {
  backgroundColor: string;
  borderColor: string;
  type: CheckBoxType;
};

type CheckBoxInputProps = {
  checkedBackgroundColor: string;
};

type CheckBoxCheckmarkProps = {
  size: Size;
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
  
  
  ${({ size, theme }) => theme.icon.size.style(size)}
`;

export const StyledCheckBoxBackground = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "borderColor" && prop !== "type"
})<CheckBoxBackgroundProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  z-index: 0;
  box-sizing: border-box;

  ${({ type }) => {
    switch (type) {
      case "001":
        return css`
          border-radius: 0;
        `;
      case "002":
        return css`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
      case "003":
        return css`
          border-radius: 50%;
        `;
      default:
        return css`
          border-radius: 0;
        `;
    }
  }}
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
  color: ${({ markColor }) => markColor};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
        `;
      case "middle":
        return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;

      default:
        return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;
    }
  }}
`;

export const StyledCheckBoxInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "checkedBackgroundColor"
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
  &:disabled {
    cursor: not-allowed;
  }
  

  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark} {
    display: block;
  }
`;
