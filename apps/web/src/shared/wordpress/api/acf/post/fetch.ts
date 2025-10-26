import { useAxiosQuery } from "@packages/hooks";
import { WP_API_BASE_PATH, WP_API_BASE_URL } from "../../base";
import {
  getPaginationQuery,
  type PaginationQueryArgs
} from "../../shared/pagination/query/pagination";
import type { CategoryQueryArgs } from "../../shared/taxonomy/query/category";
import type { TagQueryArgs } from "../../shared/taxonomy/query/tags";
import type { WPPostResponse } from "./response";

type Args = {
  postType: string;
  pagination?: PaginationQueryArgs;
  category?: CategoryQueryArgs;
  tag?: TagQueryArgs;
};

type QueryParams = {
  page?: number;
  per_page?: number;
  _embed: true;
};

export const getWpAcfPosts = async ({
  pagination,
  category,
  tag,
  postType
}: Args) => {
  const response = await fetch(
    `${WP_API_BASE_URL}${postType}?_embed${getPaginationQuery(pagination)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPPostResponse[] = await response.json();
  return data;
};

export const useWpAcfPosts = (postType: string, query: QueryParams) => {
  return useAxiosQuery<WPPostResponse[], QueryParams>({
    url: `${WP_API_BASE_PATH}/${postType}`,
    query
  });
};
