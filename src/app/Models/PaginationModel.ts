export interface PaginationModel {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageClick: (page: number) => void;
}
