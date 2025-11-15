import styled from "styled-components";

type RadioProps = {
  $backgroundColor?: string;
  $gap?: number;
  $isDisabled?: boolean;
};

type RadioInputProps = {
  $borderColor?: string;
  $checkedBackgroundColor?: string;
  $focusRingColor?: string;
  $isSelected?: boolean;
  $isFocusVisible?: boolean;
  $isDisabled?: boolean;
};

type RadioLabelProps = {
  $fontSize?: number;
  $color?: string;
  $isDisabled?: boolean;
};

type RadioMarkProps = {
  $markColor?: string;
};

export const StyledRadio = styled.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioProps>`
  ${({ theme }) => theme.font.baseSize.em()}
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  gap: ${({ theme, $gap }) => theme.size.em($gap ?? 8)};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
`;

export const StyledRadioInput = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioInputProps>`
  width: ${({ theme }) => theme.size.em(20)};
  height: ${({ theme }) => theme.size.em(20)};
  border: 2px solid
    ${({ $borderColor, $isSelected, $checkedBackgroundColor }) =>
      $isSelected
        ? ($checkedBackgroundColor ?? "#000")
        : ($borderColor ?? "#000")};
  border-radius: 50%;
  background-color: ${({ $isSelected, $checkedBackgroundColor }) =>
    $isSelected ? ($checkedBackgroundColor ?? "#000") : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
  box-sizing: border-box;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "auto")};

  ${({ $isFocusVisible, $focusRingColor, $isDisabled }) =>
    $isFocusVisible &&
    !$isDisabled &&
    `
    box-shadow: 0 0 0 0.25em ${$focusRingColor ?? "rgba(0, 0, 0, 0.25)"};
  `}
`;

export const StyledRadioMark = styled.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioMarkProps>`
  width: ${({ theme }) => theme.size.em(8)};
  height: ${({ theme }) => theme.size.em(8)};
  border-radius: 50%;
  background-color: ${({ $markColor }) => $markColor ?? "#fff"};
`;

export const StyledRadioLabel = styled.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})<RadioLabelProps>`
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  color: ${({ $color }) => $color ?? "#000"};
  line-height: 0;
  display: block;
`;
