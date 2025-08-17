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
  left?: React.ReactNode;
  right?: React.ReactNode;
  leftInner?: React.ReactNode;
  rightInner?: React.ReactNode;
  modalContent?: React.ReactNode;
  showModal?: boolean;
  style?: {
    leftGap?: number;
    rightGap?: number;
    header?: {
      height?: number;
      backgroundColor?: string;
    };
  };
}

export const Header001 = ({
  left,
  right,
  leftInner,
  rightInner,
  modalContent,
  style,
  showModal
}: Header001Props) => {
  return (
    <StyledWrapper>
      <StyledHeader
        height={style?.header?.height ?? HEIGHT}
        backgroundColor={style?.header?.backgroundColor}
      >
        <StyledHeaderInner>
          <StyledLeftWrapper gap={style?.leftGap}>
            {left}
            {leftInner}
          </StyledLeftWrapper>
          <StyledRightWrapper gap={style?.rightGap}>
            {rightInner}
            {right}
          </StyledRightWrapper>
        </StyledHeaderInner>
      </StyledHeader>
      <StyledModalWrapper
        height={style?.header?.height ?? HEIGHT}
        backgroundColor={style?.header?.backgroundColor}
        showModal={showModal}
      >
        {modalContent}
      </StyledModalWrapper>
    </StyledWrapper>
  );
};
