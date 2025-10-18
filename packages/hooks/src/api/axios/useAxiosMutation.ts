import { useAxiosContext } from "@packages/context";
import { expandPath } from "@packages/utils";
import type { AxiosError } from "axios";
import { useCallback, useState } from "react";
import {
  type DefaultRequestHeaders,
  type DefaultResponseHeadersForMutation,
  isAxiosError,
  type MutationArgs,
  type MutationOptions,
  type MutationResult
} from "./types";

export function useAxiosMutation<
  TBody,
  TResponse,
  TRequestHeaders = DefaultRequestHeaders,
  TResponseHeaders = DefaultResponseHeadersForMutation
>({
  url,
  pathParams,
  method,
  headers,
  onSuccess,
  onError
}: MutationOptions<TResponse, TRequestHeaders>): MutationResult<
  TBody,
  TResponse,
  TRequestHeaders,
  TResponseHeaders
> {
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);
  const { client } = useAxiosContext();

  const mutate = useCallback(
    async ({
      body,
      headers: overrideHeaders
    }: MutationArgs<TBody, TRequestHeaders>) => {
      setLoading(true);
      setError(null);

      try {
        const newUrl = expandPath(url, pathParams);
        const newHeaders = overrideHeaders ?? headers;

        const res = await client.request<
          TResponse,
          {
            data: TResponse;
            headers: TResponseHeaders;
          }
        >({
          method,
          url: newUrl,
          data: body,
          headers: newHeaders ? newHeaders : undefined
        });

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
    [client, url, pathParams, headers, method, onSuccess, onError]
  );

  return { mutate, error, loading };
}
