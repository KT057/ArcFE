import type { EasingKey } from "../../../../styles/easing";
import { StyledToggleContent } from "./styles";

type ToggleProps = {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: string;
  easing?: EasingKey;
} & React.HTMLAttributes<HTMLDivElement>;

export const ToggleContent001 = ({
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
