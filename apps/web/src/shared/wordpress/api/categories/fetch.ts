import { WP_API_BASE_URL } from "../base";
import type { WPCategoryResponse } from "./response";

export const getWpCategories = async () => {
  const response = await fetch(`${WP_API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPCategoryResponse[] = await response.json();
  return data;
};
