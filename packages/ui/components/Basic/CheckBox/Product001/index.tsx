import type React from "react";
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
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    checkedBackgroundColor?: string;
    markColor?: string;
  };
}

export const CheckBox001 = ({
  style,
  id,
  type,
  size,
  name,
  checked,
  defaultChecked,
  disabled,
  onChange
}: CheckBoxProps) => {
  const inputName = name ?? id;
  const uncontrolledDefaultChecked =
    checked === undefined ? defaultChecked : undefined;

  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBox size={size}>
        <StyledCheckBoxInput
          id={id}
          name={inputName}
          type="checkbox"
          checked={checked ?? false}
          defaultChecked={uncontrolledDefaultChecked}
          disabled={disabled}
          checkedBackgroundColor={style?.checkedBackgroundColor ?? "#000"}
          onChange={onChange}
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
