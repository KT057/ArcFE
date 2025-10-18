import { useAxiosContext } from "@packages/context";
import { expandPath } from "@packages/utils";
import type { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  type DefaultQueryParams,
  type DefaultRequestHeaders,
  type DefaultResponseHeadersForQuery,
  isAxiosError,
  type OverrideQueryOptions,
  type QueryOptions,
  type QueryResult
} from "./types";

export type {
  DefaultQueryParams,
  DefaultResponseHeadersForQuery
} from "./types";

export function useAxiosQuery<
  TResponse,
  TQueryParams = DefaultQueryParams,
  TRequestHeaders = DefaultRequestHeaders,
  TResponseHeaders = DefaultResponseHeadersForQuery
>({
  url,
  pathParams,
  query,
  skip,
  headers,
  onSuccess,
  onError
}: QueryOptions<TResponse, TQueryParams, TRequestHeaders>): QueryResult<
  TResponse,
  TQueryParams,
  TRequestHeaders,
  TResponseHeaders
> {
  const { client } = useAxiosContext();

  const [data, setData] = useState<TResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [responseHeaders, setResponseHeaders] =
    useState<TResponseHeaders | null>(null);

  const run = useCallback(
    async (
      override?: OverrideQueryOptions<TResponse, TQueryParams, TRequestHeaders>
    ) => {
      setLoading(true);
      setError(null);

      try {
        const newUrl = expandPath(url, override?.pathParams ?? pathParams);
        const newQuery = override?.query ?? query;
        const newHeaders = override?.headers ?? headers;

        const res = await client.request<
          TResponse,
          {
            data: TResponse;
            headers: TResponseHeaders;
          }
        >({
          method: "GET", // 取得系なのでGETを固定
          url: newUrl,
          params: newQuery,
          headers: newHeaders ? newHeaders : undefined
        });

        setData(res.data);
        setResponseHeaders(res.headers);
        onSuccess?.(res.data);
        return {
          isError: false as const,
          data: res.data,
          headers: res.headers
        };
      } catch (e) {
        if (isAxiosError(e)) {
          setError(e);
          onError?.(e);

          return {
            isError: true as const,
            error: e
          };
        }
        const error: AxiosError = {
          message: e instanceof Error ? e.message : "Unknown error",
          name: "AxiosError",
          isAxiosError: true,
          status: 500,
          toJSON: () => ({})
        };

        setError(error);
        onError?.(error);

        return {
          isError: true as const,
          error
        };
      } finally {
        setLoading(false);
      }
    },
    [url, pathParams, query, headers, onSuccess, onError, client]
  );

  // 発火に依存して欲しいのはskipのみなので、biomeのルールを無効化
  // biome-ignore lint/correctness/useExhaustiveDependencies: skipのみを依存配列に含める
  useEffect(() => {
    if (!skip) {
      // Unhandled Promise Rejectionになるのでcatchをつける
      run().catch(() => void 0);
    }
  }, [skip]);

  return { data, error, loading, headers: responseHeaders, run };
}
