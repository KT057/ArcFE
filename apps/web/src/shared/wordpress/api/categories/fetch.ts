import { useAxiosQuery } from "@packages/hooks";
import { WP_API_BASE_PATH, WP_API_BASE_URL } from "../base";
import type { WPCategoryResponse } from "./response";

const path = "/categories";

export const getWpCategories = async () => {
  const response = await fetch(`${WP_API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPCategoryResponse[] = await response.json();
  return data;
};

export const useWpCategories = () => {
  return useAxiosQuery<WPCategoryResponse[]>({
    url: `${WP_API_BASE_PATH}${path}`
  });
};
