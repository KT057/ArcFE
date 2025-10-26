import { useAxiosQuery } from "@packages/hooks";
import { WP_API_BASE_PATH, WP_API_BASE_URL } from "../base";
import {
  getPaginationQuery,
  type PaginationQueryArgs
} from "../shared/pagination/query/pagination";
import {
  type CategoryQueryArgs,
  getCategoryQuery
} from "../shared/taxonomy/query/category";
import { getTagQuery, type TagQueryArgs } from "../shared/taxonomy/query/tags";
import type { WPPostResponse } from "./response";

type Args = {
  pagination?: PaginationQueryArgs;
  category?: CategoryQueryArgs;
  tag?: TagQueryArgs;
};

type QueryParams = {
  page?: number;
  per_page?: number;
  _embed: true;
  category?: number;
  tag?: number;
};

const path = "/posts";

export const getWpPosts = async ({ pagination, category, tag }: Args = {}) => {
  const response = await fetch(
    `${WP_API_BASE_URL}${path}?_embed${getPaginationQuery(pagination)}${getCategoryQuery(category)}${getTagQuery(tag)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPPostResponse[] = await response.json();
  return data;
};

export const useWpPosts = (query: QueryParams) => {
  return useAxiosQuery<WPPostResponse[], QueryParams>({
    url: `${WP_API_BASE_PATH}${path}`,
    query
  });
};
