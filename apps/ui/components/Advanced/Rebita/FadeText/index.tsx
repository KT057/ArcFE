import type { ReactNode } from "react";
import {
  StyledFadeText,
  StyledFadeTextContainer,
  StyledFadeTextWrapper
} from "./styles";

interface FadeTextProps {
  children?: ReactNode;
  progress?: number; // 0-100の値で表示の進捗を制御
  style?: {
    color?: string;
    fontSize?: number;
  };
}

export const RebitaFadeText = ({
  children,
  progress = 0,
  style
}: FadeTextProps) => {
  return (
    <StyledFadeTextWrapper
      color={style?.color}
      fontSize={style?.fontSize}
      progress={progress}
    >
      <StyledFadeTextContainer fontSize={style?.fontSize}>
        {/* 表示される部分（clip-pathで制御） */}
        <StyledFadeText
          color={style?.color}
          isFirst={true}
          progress={progress}
        >
          {children}
        </StyledFadeText>
        {/* 背景の薄いテキスト */}
        <StyledFadeText
          color={style?.color}
          isFirst={false}
        >
          {children}
        </StyledFadeText>
      </StyledFadeTextContainer>
    </StyledFadeTextWrapper>
  );
};