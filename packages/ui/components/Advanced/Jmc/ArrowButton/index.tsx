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
  style?: {
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
  style
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
        iconColor={style?.iconColor}
        borderColor={style?.borderColor}
        backgroundColor={style?.backgroundColor}
        hoverIconColor={style?.hoverIconColor}
        hoverBorderColor={style?.hoverBorderColor}
        hoverBackgroundColor={style?.hoverBackgroundColor}
        {...buttonProps}
      >
        <StyledJmcArrowButtonIconContainer>
          <StyledJmcArrowButtonIconWrapper size={size}>
            <StyledJmcArrowButtonIconInner>
              <StyledJmcArrowButtonIcon iconColor={style?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={style?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={style?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
              <StyledJmcArrowButtonIcon iconColor={style?.iconColor}>
                <Svg043Icon />
              </StyledJmcArrowButtonIcon>
            </StyledJmcArrowButtonIconInner>
          </StyledJmcArrowButtonIconWrapper>
        </StyledJmcArrowButtonIconContainer>
      </StyledJmcArrowButton>
    </StyledJmcArrowButtonWrapper>
  );
};
