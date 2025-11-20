import type { FC, ReactNode } from "react";
import { Svg042Icon } from "../../Icons";
import {
  StyledCloseIconWrapper,
  StyledContainer,
  StyledContainerInner,
  StyledContainerWrapper,
  StyledContent,
  StyledContentWrapper
} from "./styles";

type Props = {
  /**
   * showModal の設定
   */
  showModal: boolean;
  /**
   * 表示内容
   */
  children: ReactNode;
  /**
   * 表示内容
   */
  footer?: ReactNode;
};

export const Modal001: FC<Props> = ({ showModal, children, footer }) => {
  if (!showModal) {
    return null;
  }

  return (
    <StyledContainerWrapper>
      <StyledContainer>
        <StyledContainerInner>
          <StyledContentWrapper>
            <StyledContent>
              <StyledCloseIconWrapper>
                <Svg042Icon />
              </StyledCloseIconWrapper>
              {children}
              {footer}
            </StyledContent>
          </StyledContentWrapper>
        </StyledContainerInner>
      </StyledContainer>
    </StyledContainerWrapper>
  );
};
