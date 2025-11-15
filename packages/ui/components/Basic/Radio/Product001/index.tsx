import { useFocusRing } from "@react-aria/focus";
import { useRadio } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import type { AriaRadioProps } from "@react-types/radio";
import { forwardRef, useContext, useRef } from "react";
import { RadioContext } from "./radio-context";
import {
  StyledRadio,
  StyledRadioInput,
  StyledRadioLabel,
  StyledRadioMark
} from "./styles";

interface RadioProps extends AriaRadioProps {
  children: React.ReactNode;
  appearance?: {
    fontSize?: number;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    checkedBackgroundColor?: string;
    markColor?: string;
    focusRingColor?: string;
    gap?: number;
  };
}

export const Radio001 = forwardRef<HTMLLabelElement, RadioProps>(
  ({ children, appearance, ...props }, ref) => {
    const state = useContext(RadioContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const { inputProps } = useRadio(props, state, inputRef);
    const { isFocusVisible, focusProps } = useFocusRing();

    const isSelected = state.selectedValue === props.value;
    const isDisabled = props.isDisabled || state.isDisabled;

    return (
      <StyledRadio
        ref={ref}
        $backgroundColor={appearance?.backgroundColor}
        $gap={appearance?.gap}
        $isDisabled={isDisabled}
      >
        <VisuallyHidden>
          <input {...inputProps} {...focusProps} ref={inputRef} />
        </VisuallyHidden>
        <StyledRadioInput
          $borderColor={appearance?.borderColor}
          $checkedBackgroundColor={appearance?.checkedBackgroundColor}
          $focusRingColor={appearance?.focusRingColor}
          $isSelected={isSelected}
          $isFocusVisible={isFocusVisible}
          $isDisabled={isDisabled}
        >
          {isSelected && (
            <StyledRadioMark $markColor={appearance?.markColor} />
          )}
        </StyledRadioInput>
        <StyledRadioLabel
          $fontSize={appearance?.fontSize}
          $color={appearance?.color}
          $isDisabled={isDisabled}
        >
          {children}
        </StyledRadioLabel>
      </StyledRadio>
    );
  }
);

Radio001.displayName = "Radio001";
