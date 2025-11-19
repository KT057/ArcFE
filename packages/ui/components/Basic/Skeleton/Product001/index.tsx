import { StyledSkeleton } from "./styles";

export type Type = "001";

interface SkeletonProps {
  type?: Type;
  style?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  };
  className?: string;
}

export const Skeleton001 = ({
  type = "001",
  style,
  className
}: SkeletonProps) => {
  return (
    <StyledSkeleton
      type={type}
      $width={style?.width}
      $height={style?.height}
      $borderRadius={style?.borderRadius}
      className={className}
    />
  );
};
