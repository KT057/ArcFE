
import { http, HttpResponse } from "msw";

export const axiosHandlers = [
  http.get("/axios/test", ({ request }) => {
    const authHeader = request.headers.get("authorization");
    return HttpResponse.json({
      message: "success",
      hasAuth: !!authHeader,
      authHeader: authHeader || null,
    });
  }),

  http.get("/axios/users", ({ request }) => {
    const url = new URL(request.url);
    const tags = url.searchParams.getAll("tags");
    const categories = url.searchParams.getAll("categories");

    return HttpResponse.json({
      tags,
      categories,
      queryString: url.search,
    });
  }),

  http.post("/axios/posts", async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;
    const authHeader = request.headers.get("authorization");

    return HttpResponse.json({
      ...body,
      id: 1,
      hasAuth: !!authHeader,
      authHeader: authHeader || null,
    });
  }),

  http.get("/axios/error", () => {
    return new HttpResponse("Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }),

  http.post("/axios/upload", async ({ request }) => {
    const authHeader = request.headers.get("authorization");
    const formData = await request.formData();

    return HttpResponse.json({
      hasAuth: !!authHeader,
      authHeader: authHeader || null,
      title: formData.get("title"),
      hasFile: formData.has("file"),
    });
  }),
];
