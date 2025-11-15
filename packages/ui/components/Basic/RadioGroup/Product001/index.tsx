import { useRadioGroup } from "@react-aria/radio";
import { useRadioGroupState } from "@react-stately/radio";
import type { AriaRadioGroupProps } from "@react-types/radio";
import type React from "react";
import { forwardRef, useId } from "react";
import { RadioContext } from "../../Radio/Product001/radio-context";
import { StyledRadioGroup, StyledRadioGroupLabel } from "./styles";

interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  children: React.ReactNode;
  label?: string;
  appearance?: {
    labelFontSize?: number;
    labelColor?: string;
    labelFontWeight?: number | string;
    labelMarginBottom?: number;
    orientation?: "vertical" | "horizontal";
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
