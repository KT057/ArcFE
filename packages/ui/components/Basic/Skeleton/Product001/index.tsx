import { StyledSkeleton } from "./styles";

export type Type = "001";

interface SkeletonProps {
  /**
   * スタイルタイプ
   */
  type?: Type;
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * スケルトンの幅（CSSの値、例: "100px", "50%"）
     */
    width?: string;
    /**
     * スケルトンの高さ（CSSの値、例: "20px", "100%"）
     */
    height?: string;
    /**
     * スケルトンの角丸（CSSの値、例: "4px", "50%"）
     */
    borderRadius?: string;
  };
  /**
   * 追加する CSS クラス名
   */
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
