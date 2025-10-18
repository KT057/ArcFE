import { useState } from "react";
import type { Size } from "../../../../styles/size";
import { Svg031Icon } from "../../Icons";
import {
  StyledCheckBox,
  StyledCheckBoxBackground,
  StyledCheckBoxCheckmark,
  StyledCheckBoxInput,
  StyledCheckBoxWrapper
} from "./styles";

export type CheckBoxType = "001" | "002" | "003";

interface CheckBoxProps {
  id: string;
  type: CheckBoxType;
  size: Size;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    checkedBackgroundColor?: string;
    markColor?: string;
  };
}

export const CheckBox001 = ({ style, id, type, size }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox size={size}>
        <StyledCheckBoxInput
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          checkedBackgroundColor={style?.checkedBackgroundColor ?? "#000"}
          onClick={() => setChecked(!checked)}
        />
        <StyledCheckBoxBackground
          type={type}
          backgroundColor={style?.backgroundColor ?? "#fff"}
          borderColor={style?.borderColor ?? "#000"}
        />
        <StyledCheckBoxCheckmark
          size={size}
          markColor={style?.markColor ?? "#000"}
        >
          <Svg031Icon />
        </StyledCheckBoxCheckmark>
      </StyledCheckBox>
    </StyledCheckBoxWrapper>
  );
};
