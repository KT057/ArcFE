import type { Size } from "../../../../styles/size";
import { StyledLoading, StyledLoadingWrapper } from "./styles";

export type Type = "001";

interface LoadingProps {
  type?: Type;
  size?: Size;
  style?: {
    color?: string;
  };
}

export const Loading001 = ({
  type = "001",
  size = "large",
  style
}: LoadingProps) => {
  return (
    <StyledLoadingWrapper>
      <StyledLoading
        type={type}
        size={size}
        color={style?.color}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="2" r="2" opacity=".1">
          <animate
            attributeName="opacity"
            begin="0"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(45 12 12)">
          <animate
            attributeName="opacity"
            begin=".125s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(90 12 12)">
          <animate
            attributeName="opacity"
            begin=".25s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(135 12 12)">
          <animate
            attributeName="opacity"
            begin=".375s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(180 12 12)">
          <animate
            attributeName="opacity"
            begin=".5s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(225 12 12)">
          <animate
            attributeName="opacity"
            begin=".625s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(270 12 12)">
          <animate
            attributeName="opacity"
            begin=".75s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="12" cy="2" r="2" opacity=".1" transform="rotate(315 12 12)">
          <animate
            attributeName="opacity"
            begin=".875s"
            dur="1s"
            from="1"
            to=".1"
            repeatCount="indefinite"
          />
        </circle>
      </StyledLoading>
    </StyledLoadingWrapper>
  );
};
