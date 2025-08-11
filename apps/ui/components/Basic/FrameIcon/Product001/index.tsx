import type { Size } from "../../../../styles/size";
import {
  StyledFrameIcon,
  StyledFrameIconBackground,
  StyledFrameIconContent,
  StyledFrameIconInner,
  StyledFrameIconWrapper
} from "./styles";

export type Type = "001" | "002" | "003";

interface FrameIconProps {
  icon: React.ReactNode;
  type: Type;
  size: Size;
  style?: {
    backgroundColor?: string;
    iconColor?: string;
    borderColor?: string;
  };
}

export const FrameIcon001 = ({ style, type, size, icon }: FrameIconProps) => {
  return (
    <StyledFrameIconWrapper>
      <StyledFrameIcon size={size}>
        <StyledFrameIconBackground
          type={type}
          backgroundColor={style?.backgroundColor ?? "#fff"}
          borderColor={style?.borderColor ?? "#000"}
        />
        <StyledFrameIconInner iconColor={style?.iconColor ?? "#000"}>
          <StyledFrameIconContent size={size}>{icon}</StyledFrameIconContent>
        </StyledFrameIconInner>
      </StyledFrameIcon>
    </StyledFrameIconWrapper>
  );
};
