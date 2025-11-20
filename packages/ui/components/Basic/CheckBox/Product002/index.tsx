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
  /**
   * id 属性
   */
  id: string;
  /**
   * サイズ (small, middle, large)
   */
  size: CheckBoxSize;
  /**
   * name 属性
   */
  name?: string;
  /**
   * チェック状態
   */
  checked?: boolean;
  /**
   * defaultChecked の設定
   */
  defaultChecked?: boolean;
  /**
   * 無効化するかどうか
   */
  disabled?: boolean;
  /**
   * 値変更時のコールバック関数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * チェック時の背景色
     */
    checkedBackgroundColor?: string;
    /**
     * チェックマークの色
     */
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
