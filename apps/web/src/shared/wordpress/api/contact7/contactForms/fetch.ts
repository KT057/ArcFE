import { DOMAIN } from "../../base";

import type { WPContact7ContactFormsResponse } from "./response";

export const getWpContact7ContactForms = async () => {
  const previewBase64 = process.env.WP_PREVIEW_BASE64;

  const response = await fetch(
    `${DOMAIN()}/wp-json/contact-form-7/v1/contact-forms`,
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
  const data: WPContact7ContactFormsResponse[] = await response.json();
  return data;
};
