import { type ReactNode, useState } from "react";
import type { Size } from "../../../../styles/size";
import { VerticalRollingText } from "../VerticalRollingText";
import {
  StyledTextButtonWithIcon,
  StyledTextButtonWithIconIcon,
  StyledTextButtonWithIconInner,
  StyledTextButtonWithIconWrapper
} from "./styles";

export type Direction = "left" | "right";

interface TextButtonWithIconProps {
  text?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  iconDirection?: Direction;
  style?: {
    fontSize?: number;
    color?: string;
    iconSize?: Size;
  };
}

export const RebitaTextButtonWithIcon = ({
  text = "KAIKA 東京 by THE SHARE HOTELS",
  icon,
  onClick,
  as = "div",
  href,
  iconDirection = "right",
  style
}: TextButtonWithIconProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <StyledTextButtonWithIconWrapper>
      <StyledTextButtonWithIcon
        as={as}
        onClick={onClick}
        href={href}
        direction={iconDirection}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledTextButtonWithIconInner>
          <VerticalRollingText
            enableHover={isHover}
            style={{
              fontSize: style?.fontSize,
              color: style?.color
            }}
          >
            {text}
          </VerticalRollingText>
        </StyledTextButtonWithIconInner>
        <StyledTextButtonWithIconIcon
          iconSize={style?.iconSize}
          color={style?.color}
        >
          {icon}
        </StyledTextButtonWithIconIcon>
      </StyledTextButtonWithIcon>
    </StyledTextButtonWithIconWrapper>
  );
};
