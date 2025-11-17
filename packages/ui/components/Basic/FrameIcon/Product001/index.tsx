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
  appearance?: {
    backgroundColor?: string;
    iconColor?: string;
    borderColor?: string;
  };
}

export const FrameIcon001 = ({ appearance, type, size, icon }: FrameIconProps) => {
  return (
    <StyledFrameIconWrapper>
      <StyledFrameIcon size={size}>
        <StyledFrameIconBackground
          type={type}
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
          borderColor={appearance?.borderColor ?? "#000"}
        />
        <StyledFrameIconInner iconColor={appearance?.iconColor ?? "#000"}>
          <StyledFrameIconContent size={size}>{icon}</StyledFrameIconContent>
        </StyledFrameIconInner>
      </StyledFrameIcon>
    </StyledFrameIconWrapper>
  );
};
