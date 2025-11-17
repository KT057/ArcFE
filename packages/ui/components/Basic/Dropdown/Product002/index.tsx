import type { ComponentProps, ReactNode } from "react";
import { Balloon001 } from "../../Balloon";
import {
  StyledContents,
  StyledContentsWrapper,
  StyledDetail,
  StyledDetailInner,
  StyledDetailWrapper,
  StyledWrapper
} from "./styles";

interface DropdownMenuProps {
  detail: ReactNode;
  contents: ReactNode;
  nowrap?: boolean;
  appearance?: {
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
  };
  balloonProps?: ComponentProps<typeof Balloon001>;
}

export const Dropdown002 = ({
  appearance,
  detail,
  contents,
  nowrap,
  balloonProps
}: DropdownMenuProps) => {
  return (
    <StyledWrapper>
      <StyledContentsWrapper>
        <StyledContents>{contents}</StyledContents>
        <StyledDetailWrapper>
          <StyledDetail nowrap={nowrap}>
            <Balloon001
              {...balloonProps}
              appearance={{
                ...balloonProps?.appearance,
                backgroundColor: appearance?.backgroundColor
              }}
              type="001"
              arrowPosition="top"
            >
              <StyledDetailInner>{detail}</StyledDetailInner>
            </Balloon001>
          </StyledDetail>
        </StyledDetailWrapper>
      </StyledContentsWrapper>
    </StyledWrapper>
  );
};
