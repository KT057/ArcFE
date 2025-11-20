import { useRadioGroup } from "@react-aria/radio";
import { useRadioGroupState } from "@react-stately/radio";
import type { AriaRadioGroupProps } from "@react-types/radio";
import type React from "react";
import { forwardRef, useId } from "react";
import { RadioContext } from "../../Radio/Product001/radio-context";
import { StyledRadioGroup, StyledRadioGroupLabel } from "./styles";

interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  /**
   * ラジオボタングループの子要素（Radio コンポーネント）
   */
  children: React.ReactNode;
  /**
   * グループのラベルテキスト
   */
  label?: string;
  /**
   * 外観のカスタマイズ設定
   */
  appearance?: {
    /** ラベルのフォントサイズ */
    labelFontSize?: number;
    /** ラベルの色 */
    labelColor?: string;
    /** ラベルのフォントウェイト */
    labelFontWeight?: number | string;
    /** ラベルの下マージン */
    labelMarginBottom?: number;
    /** 配置方向 (vertical: 縦並び, horizontal: 横並び) */
    orientation?: "vertical" | "horizontal";
    /** ラジオボタン間の間隔 */
    gap?: number;
  };
}

export const RadioGroup001 = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, label, appearance, ...props }, ref) => {
    const generatedId = useId();
    const groupId = props.id ?? generatedId;

    const state = useRadioGroupState(props);
    const { radioGroupProps, labelProps } = useRadioGroup(
      { ...props, label },
      state
    );

    return (
      <StyledRadioGroup
        {...radioGroupProps}
        ref={ref}
        id={groupId}
        $orientation={appearance?.orientation}
        $gap={appearance?.gap}
      >
        {label && (
          <StyledRadioGroupLabel
            {...labelProps}
            $fontSize={appearance?.labelFontSize}
            $color={appearance?.labelColor}
            $fontWeight={appearance?.labelFontWeight}
            $marginBottom={appearance?.labelMarginBottom}
            $orientation={appearance?.orientation}
          >
            {label}
          </StyledRadioGroupLabel>
        )}
        <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      </StyledRadioGroup>
    );
  }
);

RadioGroup001.displayName = "RadioGroup001";
