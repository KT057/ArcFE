import { HttpResponse, http } from "msw";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiTestHandlers = [
  http.get("/test/users/:id", async ({ params, request }) => {
    const url = new URL(request.url);
    const { id } = params;
    const withPosts = url.searchParams.get("withPosts");
    const token = request.headers.get("authorization");

    await sleep(100);

    return HttpResponse.json({
      id: Number(id),
      name: `User ${id}`,
      email: `user${id}@example.com`,
      header: `header: ${token}`,
      withPosts: withPosts === "true"
    });
  }),

  http.get("/test/users/:id/posts", async ({ params, request }) => {
    const url = new URL(request.url);
    const withPosts = url.searchParams.get("withPosts");

    await sleep(100);

    return HttpResponse.json([
      {
        id: 1,
        title: `Post 1 for user ${params.id}`,
        withPosts: withPosts === "true"
      },
      {
        id: 2,
        title: `Post 2 for user ${params.id}`,
        withPosts: withPosts === "true"
      }
    ]);
  }),

  http.post("/test/posts/", async ({ request }) => {
    const body = (await request.json()) as any;
    const token = request.headers.get("authorization");

    await sleep(100);

    return HttpResponse.json({
      id: 101,
      ...body,
      ...(token && { header: `header: ${token}` })
    });
  }),

  http.post("/test/users/:id", async ({ params, request }) => {
    const body = (await request.json()) as any;
    const { id } = params;

    await sleep(100);

    return HttpResponse.json({
      id: Number(id),
      ...body
    });
  }),

  http.post("/test/users/:id/posts", async ({ params, request }) => {
    const body = (await request.json()) as any;
    const { id } = params;
    const token = request.headers.get("authorization");

    await sleep(100);

    return HttpResponse.json({
      id: Number(id),
      ...body,
      ...(token && { header: `header: ${token}` })
    });
  }),

  http.put("/test/posts/:id", async ({ params, request }) => {
    const body = (await request.json()) as any;

    await sleep(100);

    return HttpResponse.json(body);
  }),

  http.delete("/test/posts/:id", async ({ params }) => {
    await sleep(100);

    return HttpResponse.json({
      id: Number(params.id),
      deleted: true
    });
  }),

  http.get("/test/bad", async () => {
    await sleep(100);

    return new HttpResponse(null, {
      status: 400,
      statusText: "Bad Request"
    });
  }),

  http.post("/test/bad", async () => {
    await sleep(100);

    return new HttpResponse(null, {
      status: 400,
      statusText: "Bad Request"
    });
  })
];
