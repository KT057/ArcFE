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
  style?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
}

export const FrameNumber001 = ({
  style,
  type,
  size,
  number
}: FrameNumberProps) => {
  return (
    <StyledFrameNumberWrapper>
      <StyledFrameNumber size={size}>
        <StyledFrameNumberBackground
          type={type}
          backgroundColor={style?.backgroundColor ?? "#fff"}
          borderColor={style?.borderColor ?? "#000"}
        />
        <StyledFrameNumberInner color={style?.color ?? "#000"} size={size}>
          {number}
        </StyledFrameNumberInner>
      </StyledFrameNumber>
    </StyledFrameNumberWrapper>
  );
};
