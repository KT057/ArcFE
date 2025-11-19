import type { ReactNode } from "react";
import {
  StyledContents,
  StyledContentsWrapper,
  StyledDetail,
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
}

export const Dropdown001 = ({
  appearance,
  detail,
  contents,
  nowrap
}: DropdownMenuProps) => {
  return (
    <StyledWrapper>
      <StyledContentsWrapper>
        <StyledContents>{contents}</StyledContents>
        <StyledDetailWrapper>
          <StyledDetail
            nowrap={nowrap}
            borderColor={appearance?.borderColor}
            backgroundColor={appearance?.backgroundColor}
            borderRadius={appearance?.borderRadius}
          >
            {detail}
          </StyledDetail>
        </StyledDetailWrapper>
      </StyledContentsWrapper>
    </StyledWrapper>
  );
};
