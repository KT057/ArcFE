import { useAxiosQuery } from "@packages/hooks";
import { DOMAIN, WP_API_CONTACT_FORM_7_PATH } from "../../base";

import type { WPContact7ContactFormsResponse } from "./response";

export const getWpContact7ContactForms = async () => {
  const previewBase64 = process.env.WP_PREVIEW_BASE64;

  const response = await fetch(`${DOMAIN()}${WP_API_CONTACT_FORM_7_PATH}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${previewBase64}`
    }
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPContact7ContactFormsResponse[] = await response.json();
  return data;
};

export const useWpContact7ContactForms = () => {
  const previewBase64 = process.env.WP_PREVIEW_BASE64;

  return useAxiosQuery<WPContact7ContactFormsResponse[]>({
    url: `${WP_API_CONTACT_FORM_7_PATH}`,
    headers: {
      Authorization: `Basic ${previewBase64}`
    }
  });
};
