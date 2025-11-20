import type { EasingKey } from "../../../../styles/easing";
import { StyledToggleContent } from "./styles";

type ToggleProps = {
  /**
   * 開閉状態
   */
  isOpen: boolean;
  /**
   * 表示する内容
   */
  children: React.ReactNode;
  /**
   * アニメーションの持続時間（CSS時間単位: "0.5s", "500ms" など）
   */
  duration?: string;
  /**
   * アニメーションのイージング関数
   */
  easing?: EasingKey;
} & React.HTMLAttributes<HTMLDivElement>;

export const ToggleSomething001 = ({
  isOpen,
  children,
  duration,
  easing,
  ...props
}: ToggleProps) => {
  return (
    <StyledToggleContent
      isOpen={isOpen}
      duration={duration}
      easing={easing}
      {...props}
    >
      {children}
    </StyledToggleContent>
  );
};
