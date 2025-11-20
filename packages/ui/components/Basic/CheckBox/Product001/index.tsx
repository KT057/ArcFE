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
  /**
   * チェックボックスの一意なID
   */
  id: string;
  /**
   * チェックボックスのタイプ ("001", "002", "003" - 形状の違い)
   */
  type: CheckBoxType;
  /**
   * サイズ (small, middle, large)
   */
  size: Size;
  /**
   * input要素のname属性
   */
  name?: string;
  /**
   * チェック状態（制御コンポーネント用）
   */
  checked?: boolean;
  /**
   * 初期チェック状態（非制御コンポーネント用）
   */
  defaultChecked?: boolean;
  /**
   * 無効化するかどうか
   */
  disabled?: boolean;
  /**
   * チェック状態変更時のコールバック関数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * 外観のカスタマイズ設定
   */
  appearance?: {
    /** 背景色 */
    backgroundColor?: string;
    /** ボーダー色 */
    borderColor?: string;
    /** チェック時の背景色 */
    checkedBackgroundColor?: string;
    /** チェックマークの色 */
    markColor?: string;
  };
}

export const CheckBox001 = ({
  appearance,
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
          checkedBackgroundColor={appearance?.checkedBackgroundColor ?? "#000"}
          onChange={onChange}
        />
        <StyledCheckBoxBackground
          type={type}
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
          borderColor={appearance?.borderColor ?? "#000"}
        />
        <StyledCheckBoxCheckmark
          size={size}
          markColor={appearance?.markColor ?? "#000"}
        >
          <Svg031Icon />
        </StyledCheckBoxCheckmark>
      </StyledCheckBox>
    </StyledCheckBoxWrapper>
  );
};
