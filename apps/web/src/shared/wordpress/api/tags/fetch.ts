import { useAxiosQuery } from "@packages/hooks";
import { WP_API_BASE_PATH, WP_API_BASE_URL } from "../base";
import type { WPTagResponse } from "./response";

const path = "/tags";

export const getWpTags = async () => {
  const response = await fetch(`${WP_API_BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPTagResponse[] = await response.json();
  return data;
};

export const useWpTags = () => {
  return useAxiosQuery<WPTagResponse[]>({
    url: `${WP_API_BASE_PATH}${path}`
  });
};
