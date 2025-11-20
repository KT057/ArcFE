import type { ReactNode } from "react";
import {
  StyledContents,
  StyledContentsWrapper,
  StyledDetail,
  StyledDetailWrapper,
  StyledWrapper
} from "./styles";

interface DropdownMenuProps {
  /**
   * 表示内容
   */
  detail: ReactNode;
  /**
   * 表示内容
   */
  contents: ReactNode;
  /**
   * nowrap の設定
   */
  nowrap?: boolean;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * ボーダーの色
     */
    borderColor?: string;
    /**
     * ボーダーの角丸（px）
     */
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
