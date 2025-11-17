import type { Size } from "../../../../styles/size";
import {
  StyledFrameNumber,
  StyledFrameNumberBackground,
  StyledFrameNumberInner,
  StyledFrameNumberWrapper
} from "./styles";

export type Type = "001" | "002" | "003";

interface FrameNumberProps {
  number: number;
  type: Type;
  size: Size;
  appearance?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
}

export const FrameNumber001 = ({
  appearance,
  type,
  size,
  number
}: FrameNumberProps) => {
  return (
    <StyledFrameNumberWrapper>
      <StyledFrameNumber size={size}>
        <StyledFrameNumberBackground
          type={type}
          backgroundColor={appearance?.backgroundColor ?? "#fff"}
          borderColor={appearance?.borderColor ?? "#000"}
        />
        <StyledFrameNumberInner color={appearance?.color ?? "#000"} size={size}>
          {number}
        </StyledFrameNumberInner>
      </StyledFrameNumber>
    </StyledFrameNumberWrapper>
  );
};
