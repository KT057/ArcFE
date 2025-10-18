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
  style?: {
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
  style
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
        backgroundColor={style?.backgroundColor}
        borderColor={style?.borderColor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledRebitaButtonLeft
          textColor={style?.textColor}
          leftContentBorderColor={style?.leftContentBorderColor}
          direction={direction}
        >
          <StyledRebitaButtonLeftInner fontSize={style?.fontSize}>
            <VerticalRollingText
              style={{
                fontSize: style?.fontSize,
                color: style?.textColor || "#fff"
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
            iconColor={style?.iconColor}
          >
            <>{icon}</>
          </StyledRebitaButtonRightInner>
        </StyledRebitaButtonRight>
      </StyledRebitaButtonInner>
    </StyledRebitaButtonWrapper>
  );
};
