export type PaginationQueryArgs = {
  page: number;
  perPage: number;
};

export const getPaginationQuery = (args?: PaginationQueryArgs) => {
  if (!args) {
    return "";
  }
  return `&page=${args.page}&per_page=${args.perPage}`;
};
