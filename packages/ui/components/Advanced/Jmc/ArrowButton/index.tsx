import type { Size } from "../../../../styles/size";
import { Svg043Icon } from "../../../Basic/Icons";
import {
  StyledJmcArrowButton,
  StyledJmcArrowButtonIcon,
  StyledJmcArrowButtonIconContainer,
  StyledJmcArrowButtonIconInner,
  StyledJmcArrowButtonIconWrapper,
  StyledJmcArrowButtonWrapper
} from "./styles";

interface ArrowButtonProps {
  size?: Size;
  onClick?: () => void;
  as?: "button" | "a" | "span";
  href?: string;
  appearance?: {
    iconColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    hoverIconColor?: string;
    hoverBorderColor?: string;
    hoverBackgroundColor?: string;
  };
}

export const JmcArrowButton = ({
  size = "middle",
  onClick,
  as = "span",
  href,
  appearance
}: ArrowButtonProps) => {
  const buttonProps = {
    ...(as === "a" && href ? { href } : {}),
    ...(onClick ? { onClick } : {})
  };

  return (
    <StyledJmcArrowButtonWrapper>
      <StyledJmcArrowButton
        as={as}
        size={size}
        iconColor={appearance?.iconColor}
        borderColor={appearance?.borderColor}
        backgroundColor={appearance?.backgroundColor}
        hoverIconColor={appearance?.hoverIconColor}
        hoverBorderColor={appearance?.hoverBorderColor}
        hoverBackgroundColor={appearance?.hoverBackgroundColor}
        {...buttonProps}
      >
        <StyledJmcArrowButtonIconContainer>
          <StyledJmcArrowButtonIconWrapper size={size}>
            <StyledJmcArrowButtonIconInner>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={appearance?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
            </StyledJmcArrowButtonIconInner>
          </StyledJmcArrowButtonIconWrapper>
        </StyledJmcArrowButtonIconContainer>
      </StyledJmcArrowButton>
    </StyledJmcArrowButtonWrapper>
  );
};
