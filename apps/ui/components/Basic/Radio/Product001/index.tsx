import type React from "react";
import type { Size } from "../../../../styles/size";
import { CheckBox001, type CheckBoxType } from "../../CheckBox/Product001";
import {
  StyledRadio,
  StyledRadioCheckBox,
  StyledRadioText,
  StyledRadioWrapper
} from "./styles";

interface RadioProps {
  id: string;
  name?: string;
  children: React.ReactNode;
  checkboxType?: CheckBoxType;
  checkboxSize?: Size;
  style?: {
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
    checkboxStyle?: {
      backgroundColor?: string;
      borderColor?: string;
      checkedBackgroundColor?: string;
      markColor?: string;
    };
  };
}

export const Radio001 = ({
  id,
  name = id,
  children,
  checkboxType = "003",
  checkboxSize = "small",
  style
}: RadioProps) => {
  return (
    <StyledRadioWrapper>
      <StyledRadio backgroundColor={style?.backgroundColor}>
        <StyledRadioCheckBox>
          <CheckBox001
            id={id}
            type={checkboxType}
            size={checkboxSize}
            style={style?.checkboxStyle}
          />
        </StyledRadioCheckBox>
        <StyledRadioText
          htmlFor={name}
          fontSize={style?.fontSize}
          color={style?.color}
        >
          {children}
        </StyledRadioText>
      </StyledRadio>
    </StyledRadioWrapper>
  );
};
