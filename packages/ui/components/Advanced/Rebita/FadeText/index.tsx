import type { ReactNode } from "react";
import {
  StyledFadeText,
  StyledFadeTextContainer,
  StyledFadeTextWrapper
} from "./styles";

interface FadeTextProps {
  children?: ReactNode;
  progress?: number; // 0-100の値で表示の進捗を制御
  appearance?: {
    color?: string;
    fontSize?: number;
  };
}

export const RebitaFadeText = ({
  children,
  progress = 0,
  appearance
}: FadeTextProps) => {
  return (
    <StyledFadeTextWrapper
      color={appearance?.color}
      fontSize={appearance?.fontSize}
      progress={progress}
    >
      <StyledFadeTextContainer fontSize={appearance?.fontSize}>
        {/* 表示される部分（clip-pathで制御） */}
        <StyledFadeText color={appearance?.color} isFirst={true} progress={progress}>
          {children}
        </StyledFadeText>
        {/* 背景の薄いテキスト */}
        <StyledFadeText color={appearance?.color} isFirst={false}>
          {children}
        </StyledFadeText>
      </StyledFadeTextContainer>
    </StyledFadeTextWrapper>
  );
};
