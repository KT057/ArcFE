import { WP_API_BASE_URL } from "../base";
import { getPaginationQuery, type Pagination } from "../shared/pagenation";
import type { WPPostResponse } from "./response";

type Args = {
  pagination?: Pagination;
};

export const getWpPosts = async ({ pagination }: Args = {}) => {
  const response = await fetch(
    `${WP_API_BASE_URL}/posts?_embed&${getPaginationQuery(pagination)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPPostResponse[] = await response.json();
  return data;
};
