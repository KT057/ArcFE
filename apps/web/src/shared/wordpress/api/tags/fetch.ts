import { WP_API_BASE_URL } from "../base";
import type { WPTagResponse } from "./response";

export const getWpTags = async () => {
  const response = await fetch(`${WP_API_BASE_URL}/tags`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPTagResponse[] = await response.json();
  return data;
};
