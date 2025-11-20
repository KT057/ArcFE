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
  /**
   * balloonProps の設定
   */
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
