export const DOMAIN = () => {
  if (process.env.ENV === "production") {
    return "https://www.rebita.jp";
  }

  return "http://localhost:9000";
};
export const WP_API_BASE_URL = `${DOMAIN()}/wp-json/wp/v2`;
