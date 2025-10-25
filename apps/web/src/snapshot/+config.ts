import type { Config } from "vike/types";

export default {
  prerender: true,
  clientRouting: false,
  hydrationCanBeAborted: false,
  prefetch: false,
  prefetchStaticAssets: false,
  name: "snapshot",
  meta: {
    title: {
      env: { server: true }
    }
  }
} satisfies Config;
