export type Pagination = {
  page: number;
  perPage: number;
};

export const getPaginationQuery = (pagination?: Pagination) => {
  if (!pagination) {
    return "";
  }
  return `&page=${pagination.page}&per_page=${pagination.perPage}`;
};
