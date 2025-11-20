import type { EasingKey } from "../../../../styles/easing";
import {
  StyledHeader,
  StyledHeaderInner,
  StyledLeftWrapper,
  StyledModalWrapper,
  StyledRightWrapper,
  StyledWrapper
} from "./styles";

const HEIGHT = 80;

interface Header001Props {
  /**
   * 表示内容
   */
  left?: React.ReactNode;
  /**
   * 表示内容
   */
  right?: React.ReactNode;
  /**
   * 表示内容
   */
  leftInner?: React.ReactNode;
  /**
   * 表示内容
   */
  rightInner?: React.ReactNode;
  /**
   * 表示内容
   */
  modalContent?: React.ReactNode;
  /**
   * showModal の設定
   */
  showModal?: boolean;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    leftGap?: number;
    rightGap?: number;
    header?: {
      sidePadding?: number;
      height?: number;
      backgroundColor?: string;
      animation?: {
        backgroundColor?: string;
        duration?: string;
        easing?: EasingKey;
      };
    };
  };
}

export const Header001 = ({
  left,
  right,
  leftInner,
  rightInner,
  modalContent,
  appearance,
  showModal
}: Header001Props) => {
  return (
    <StyledWrapper>
      <StyledHeader
        height={appearance?.header?.height ?? HEIGHT}
        backgroundColor={appearance?.header?.backgroundColor}
        animationBackgroundColor={
          appearance?.header?.animation?.backgroundColor
        }
        easing={appearance?.header?.animation?.easing}
        duration={appearance?.header?.animation?.duration}
        sidePadding={appearance?.header?.sidePadding}
        showModal={showModal}
      >
        <StyledHeaderInner>
          <StyledLeftWrapper gap={appearance?.leftGap}>
            {left}
            {leftInner}
          </StyledLeftWrapper>
          <StyledRightWrapper gap={appearance?.rightGap}>
            {rightInner}
            {right}
          </StyledRightWrapper>
        </StyledHeaderInner>
      </StyledHeader>
      <StyledModalWrapper
        height={appearance?.header?.height ?? HEIGHT}
        showModal={showModal}
      >
        {modalContent}
      </StyledModalWrapper>
    </StyledWrapper>
  );
};
