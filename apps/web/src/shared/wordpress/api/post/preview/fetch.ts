import { useAxiosQuery } from "@packages/hooks";
import { WP_API_BASE_PATH, WP_API_BASE_URL } from "../../base";

import type { WPPostResponse } from "../response";

type Args = {
  id: number;
};

const path = "/posts";

type QueryParams = {
  _embed: true;
  status: "draft";
};

export const getWpPreviewPost = async ({ id }: Args) => {
  const previewBase64 = process.env.WP_PREVIEW_BASE64;

  const response = await fetch(
    `${WP_API_BASE_URL}${path}/${id}?_embed&status=draft`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${previewBase64}`
      }
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPPostResponse = await response.json();
  return data;
};

export const useWpPreviewPost = (id: number) => {
  const previewBase64 = process.env.WP_PREVIEW_BASE64;

  return useAxiosQuery<WPPostResponse, QueryParams>({
    url: `${WP_API_BASE_PATH}${path}/{id}`,
    pathParams: { id },
    query: {
      _embed: true,
      status: "draft"
    },
    headers: {
      Authorization: `Basic ${previewBase64}`
    }
  });
};
