import { useAxiosMutation } from "@packages/hooks";
import { DOMAIN, WP_API_CONTACT_FORM_7_PATH } from "../../base";

import type { WPContact7FeedbackResponse } from "./response";

type Args = {
  id: string;
};

export const postWpContact7Feedback = async ({ id }: Args) => {
  const bodyFormData = new FormData();

  bodyFormData.append("_wpcf7", String(id));
  bodyFormData.append("_wpcf7_version", "5.9.8");
  bodyFormData.append("_wpcf7_locale", "ja");
  bodyFormData.append("_wpcf7_unit_tag", `wpcf7-f${id}-o1`);
  bodyFormData.append("_wpcf7_container_post", "0");

  bodyFormData.append("your-name", "test");
  bodyFormData.append("your-email", "test@test.com");
  bodyFormData.append("your-subject", "test");
  bodyFormData.append("your-message", "test");
  bodyFormData.append("checkbox-154", "選択肢 1");
  bodyFormData.append("radio-43", "選択肢 2");
  bodyFormData.append("date-45", "2025-08-30");

  const response = await fetch(
    `${DOMAIN}${WP_API_CONTACT_FORM_7_PATH}/${id}/feedback`,
    {
      method: "POST",
      body: bodyFormData
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data: WPContact7FeedbackResponse = await response.json();
  return data;
};

export const useWpContact7Feedback = (id: string) => {
  return useAxiosMutation<FormData, WPContact7FeedbackResponse>({
    url: `${WP_API_CONTACT_FORM_7_PATH}/{id}/feedback`,
    pathParams: { id },
    method: "POST"
  });
};
