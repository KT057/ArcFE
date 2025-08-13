import { WP_API_BASE_URL } from "../base";
import { type Category, getCategoryQuery } from "../shared/category";
import { getPaginationQuery, type Pagination } from "../shared/pagenation";
import { getTagQuery, type Tag } from "../shared/tags";
import type { WPPostResponse } from "./response";

type Args = {
  pagination?: Pagination;
  category?: Category;
  tag?: Tag;
};

export const getWpPosts = async ({ pagination, category, tag }: Args = {}) => {
  const response = await fetch(
    `${WP_API_BASE_URL}/posts?_embed${getPaginationQuery(pagination)}${getCategoryQuery(category)}${getTagQuery(tag)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPPostResponse[] = await response.json();
  return data;
};
