import type React from "react";
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
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  appearance?: {
    backgroundColor?: string;
    borderColor?: string;
    checkedBackgroundColor?: string;
    markColor?: string;
  };
}

export const CheckBox002 = ({
  appearance,
  id,
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
          checkedBackgroundColor={appearance?.checkedBackgroundColor ?? "#000"}
          onChange={onChange}
        />
        <StyledCheckBoxBackground
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
        />
        <StyledCheckBoxCheckmark
          markColor={appearance?.markColor ?? "#000"}
          size={size}
        />
      </StyledCheckBox>
    </StyledCheckBoxWrapper>
  );
};
