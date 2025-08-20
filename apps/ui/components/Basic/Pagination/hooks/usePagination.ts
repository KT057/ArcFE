import { useCallback, useMemo } from "react";

interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
  maxVisiblePages: number;
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  currentPage,
  totalPages,
  maxVisiblePages,
  onPageChange
}: UsePaginationProps) => {
  const visiblePages = useMemo(() => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).filter(
        (i) => i !== 1 && i !== totalPages
      );
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      if (i === 1 || i === totalPages) {
        continue;
      }
      pages.push(i);
    }

    return pages;
  }, [totalPages, maxVisiblePages, currentPage]);

  const showStartEllipsis = useMemo(() => visiblePages[0] > 2, [visiblePages]);
  const showEndEllipsis = useMemo(
    () => visiblePages[visiblePages.length - 1] < totalPages - 1,
    [visiblePages, totalPages]
  );

  const handlePageClick = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page);
      }
    },
    [totalPages, currentPage, onPageChange]
  );

  return {
    visiblePages,
    showStartEllipsis,
    showEndEllipsis,
    handlePageClick
  };
};
