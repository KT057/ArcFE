import type { Size } from "../../../../styles/size";
import { Svg001Icon } from "../../Icons";
import { usePagination } from "../hooks/usePagination";
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationIcon,
  StyledPaginationItem,
  StyledPaginationText
} from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  size?: Size;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
  style?: {
    backgroundColor?: string;
    activeBackgroundColor?: string;
    borderColor?: string;
    color?: string;
    activeColor?: string;
    fontWeight?: number;
    borderRadius?: number;
  };
}

export const Pagination001 = ({
  currentPage,
  totalPages,
  size = "middle",
  maxVisiblePages = 5,
  onPageChange,
  style
}: PaginationProps) => {
  const { visiblePages, showStartEllipsis, showEndEllipsis, handlePageClick } =
    usePagination({
      currentPage,
      totalPages,
      maxVisiblePages,
      onPageChange
    });

  return (
    <StyledPagination>
      {/* Previous button */}
      {currentPage > 1 && (
        <StyledPaginationItem>
          <StyledPaginationButton
            onClick={() => handlePageClick(currentPage - 1)}
            size={size}
            isActive={currentPage === 1}
            activeBackgroundColor={style?.activeBackgroundColor}
            backgroundColor={style?.backgroundColor}
            borderColor={style?.borderColor}
            borderRadius={style?.borderRadius}
          >
            <StyledPaginationIcon size={size}>
              <Svg001Icon style={{ transform: "rotate(180deg)" }} />
            </StyledPaginationIcon>
          </StyledPaginationButton>
        </StyledPaginationItem>
      )}

      <StyledPaginationItem>
        <StyledPaginationButton
          onClick={() => handlePageClick(1)}
          size={size}
          isActive={currentPage === 1}
          activeBackgroundColor={style?.activeBackgroundColor}
          backgroundColor={style?.backgroundColor}
          borderColor={style?.borderColor}
          borderRadius={style?.borderRadius}
        >
          <StyledPaginationText
            size={size}
            activeColor={style?.activeColor}
            color={style?.color}
            fontWeight={style?.fontWeight}
            isActive={currentPage === 1}
          >
            1
          </StyledPaginationText>
        </StyledPaginationButton>
      </StyledPaginationItem>

      {/* Start ellipsis */}
      {showStartEllipsis && (
        <StyledPaginationItem>
          <StyledPaginationText
            size={size}
            activeColor={style?.activeColor}
            color={style?.color}
            fontWeight={style?.fontWeight}
            isActive={false}
          >
            ...
          </StyledPaginationText>
        </StyledPaginationItem>
      )}

      {/* Visible page numbers */}
      {visiblePages.map((page) => (
        <StyledPaginationItem key={page}>
          <StyledPaginationButton
            onClick={() => handlePageClick(page)}
            isActive={page === currentPage}
            size={size}
            activeBackgroundColor={style?.activeBackgroundColor}
            backgroundColor={style?.backgroundColor}
            borderColor={style?.borderColor}
            borderRadius={style?.borderRadius}
          >
            <StyledPaginationText
              size={size}
              isActive={page === currentPage}
              activeColor={style?.activeColor}
              color={style?.color}
              fontWeight={style?.fontWeight}
            >
              {page}
            </StyledPaginationText>
          </StyledPaginationButton>
        </StyledPaginationItem>
      ))}

      {/* End ellipsis */}
      {showEndEllipsis && (
        <StyledPaginationItem>
          <StyledPaginationText
            size={size}
            activeColor={style?.activeColor}
            color={style?.color}
            fontWeight={style?.fontWeight}
            isActive={false}
          >
            ...
          </StyledPaginationText>
        </StyledPaginationItem>
      )}

      {/* Last page button */}
      {totalPages > 1 && (
        <StyledPaginationItem>
          <StyledPaginationButton
            activeBackgroundColor={style?.activeBackgroundColor}
            backgroundColor={style?.backgroundColor}
            borderColor={style?.borderColor}
            onClick={() => handlePageClick(totalPages)}
            size={size}
            isActive={currentPage === totalPages}
            borderRadius={style?.borderRadius}
          >
            <StyledPaginationText
              activeColor={style?.activeColor}
              color={style?.color}
              fontWeight={style?.fontWeight}
              size={size}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </StyledPaginationText>
          </StyledPaginationButton>
        </StyledPaginationItem>
      )}

      {/* Next button */}
      {currentPage < totalPages && (
        <StyledPaginationItem>
          <StyledPaginationButton
            activeBackgroundColor={style?.activeBackgroundColor}
            backgroundColor={style?.backgroundColor}
            borderColor={style?.borderColor}
            onClick={() => handlePageClick(currentPage + 1)}
            size={size}
            isActive={currentPage === totalPages}
            borderRadius={style?.borderRadius}
          >
            <StyledPaginationIcon size={size}>
              <Svg001Icon />
            </StyledPaginationIcon>
          </StyledPaginationButton>
        </StyledPaginationItem>
      )}
    </StyledPagination>
  );
};
