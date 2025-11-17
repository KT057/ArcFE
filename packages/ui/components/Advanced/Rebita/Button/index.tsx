import { type ReactNode, useState } from "react";
import type { Size } from "../../../../styles/size";
import { VerticalRollingText } from "../VerticalRollingText";
import {
  type DirectionType,
  StyledRebitaButtonInner,
  StyledRebitaButtonLeft,
  StyledRebitaButtonLeftInner,
  StyledRebitaButtonRight,
  StyledRebitaButtonRightInner,
  StyledRebitaButtonWrapper
} from "./styles";

interface RebitaButtonProps {
  size?: Size;
  direction?: DirectionType;
  text?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  as?: "button" | "a" | "div";
  href?: string;
  appearance?: {
    fontSize?: number;
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
    borderColor?: string;
    leftContentBorderColor?: string;
  };
}

export const RebitaButton = ({
  size = "middle",
  direction = "right",
  text = "ボタン",
  icon,
  onClick,
  as = "a",
  href,
  appearance
}: RebitaButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledRebitaButtonWrapper>
      <StyledRebitaButtonInner
        as={as}
        direction={direction}
        onClick={onClick}
        href={href}
        backgroundColor={appearance?.backgroundColor}
        borderColor={appearance?.borderColor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledRebitaButtonLeft
          textColor={appearance?.textColor}
          leftContentBorderColor={appearance?.leftContentBorderColor}
          direction={direction}
        >
          <StyledRebitaButtonLeftInner fontSize={appearance?.fontSize}>
            <VerticalRollingText
              appearance={{
                fontSize: appearance?.fontSize,
                color: appearance?.textColor || "#fff"
              }}
              enableHover={isHovered}
            >
              {text}
            </VerticalRollingText>
          </StyledRebitaButtonLeftInner>
        </StyledRebitaButtonLeft>
        <StyledRebitaButtonRight size={size}>
          <StyledRebitaButtonRightInner
            iconSize={size}
            iconColor={appearance?.iconColor}
          >
            <>{icon}</>
          </StyledRebitaButtonRightInner>
        </StyledRebitaButtonRight>
      </StyledRebitaButtonInner>
    </StyledRebitaButtonWrapper>
  );
};
