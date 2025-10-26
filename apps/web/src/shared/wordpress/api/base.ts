export const DOMAIN = () => {
  if (process.env.ENV === "production") {
    return "https://www.rebita.jp";
  }

  return "http://localhost:9000";
};

export const WP_API_BASE_DOMAIN = `${DOMAIN()}`;
export const WP_API_BASE_PATH = "/wp-json/wp/v2";
export const WP_API_BASE_URL = `${WP_API_BASE_DOMAIN}${WP_API_BASE_PATH}`;
export const WP_API_CONTACT_FORM_7_PATH =
  "/wp-json/contact-form-7/v1/contact-forms";
