import { StyledSkeleton } from "./styles";

export type Type = "001";

interface SkeletonProps {
  type?: Type;
  appearance?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  };
  className?: string;
}

export const Skeleton001 = ({
  type = "001",
  appearance,
  className
}: SkeletonProps) => {
  return (
    <StyledSkeleton
      type={type}
      $width={appearance?.width}
      $height={appearance?.height}
      $borderRadius={appearance?.borderRadius}
      className={className}
    />
  );
};
