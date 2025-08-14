import { useState } from "react";
import {
  StyledCheckBox,
  StyledCheckBoxBackground,
  StyledCheckBoxCheckmark,
  StyledCheckBoxInput,
  StyledCheckBoxWrapper
} from "./styles";

export type CheckBoxSize = "small" | "middle";

interface CheckBoxProps {
  id: string;
  size: CheckBoxSize;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    checkedBackgroundColor?: string;
    markColor?: string;
  };
}

export const CheckBox002 = ({ style, id, size }: CheckBoxProps) => {
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
          backgroundColor={style?.backgroundColor ?? "#fff"}
        />
        <StyledCheckBoxCheckmark
          markColor={style?.markColor ?? "#000"}
          size={size}
        />
      </StyledCheckBox>
    </StyledCheckBoxWrapper>
  );
};
