import type { Size } from "../../../../styles/size";
import {
  StyledLoading,
  StyledLoadingWrapper
} from "./styles";

interface LoadingProps {
  size?: Size;
  style?: {
    indicatorColor?: string;
    backgroundColor?: string;
  };
}

export const Loading002 = ({
  size = "large",
  style
}: LoadingProps) => {
  return (
    <StyledLoadingWrapper>
      <StyledLoading
        size={size}
        indicatorColor={style?.indicatorColor}
        backgroundColor={style?.backgroundColor}
        viewBox="0 0 24 24"
      >
        <path
          className="background"
          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0m0 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9"
        />
        <path
          className="indicator"
          d="M12 0c6.6 0 12 5.4 12 12h-3c0-5-4-9-9-9V0Z"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            from="0 12 12"
            to="360 12 12"
            type="rotate"
            repeatCount="indefinite"
          />
        </path>
      </StyledLoading>
    </StyledLoadingWrapper>
  );
};