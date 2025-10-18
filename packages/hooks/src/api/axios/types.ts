import type { AxiosError } from "axios";

type PathParams = Record<string, string | number | undefined>;
export type DefaultQueryParams = {
  page?: number;
  per_page?: number;
  query?: string;
  order?: "name_asc" | "name_desc" | "updated_at_asc" | "updated_at_desc";
};
export type DefaultRequestHeaders = Record<string, string>;
export type DefaultResponseHeadersForQuery =  Record<string, string>;
export type DefaultResponseHeadersForMutation = Record<string, string>;

type BaseApiOptions<TResponse, TRequestHeaders> = {
  /** 例: '/users/{id}/posts' */
  url: string;
  /** URL の {id} などを埋める */
  pathParams?: PathParams;
  /** リクエストヘッダー */
  headers?: TRequestHeaders;
  /** 成功時フック */
  onSuccess?: (response: TResponse) => void;
  /** 失敗時フック */
  onError?: (error: AxiosError) => void;
};

type Result<TResponseData, TResponseHeaders> =
  | {
      isError: false;
      data: TResponseData;
      headers: TResponseHeaders;
    }
  | {
      isError: true;
      error: AxiosError;
    };

export type QueryOptions<
  TResponse,
  TQueryParams = DefaultQueryParams,
  TRequestHeaders = DefaultRequestHeaders,
> = BaseApiOptions<TResponse, TRequestHeaders> & {
  /** マウント時に自動実行をスキップするか（既定 false） */
  skip?: boolean;
  /** クエリ ?key=value */
  query?: TQueryParams;
};

export type MutationOptions<
  TResponse,
  TRequestHeaders = DefaultRequestHeaders,
> = BaseApiOptions<TResponse, TRequestHeaders> & {
  method: "POST" | "PUT" | "PATCH" | "DELETE";
};

export type OverrideQueryOptions<
  TResponse,
  TQueryParams = DefaultQueryParams,
  TRequestHeaders = DefaultRequestHeaders,
> = Pick<
  Partial<QueryOptions<TResponse, TQueryParams, TRequestHeaders>>,
  "pathParams" | "headers" | "query"
>;

export type QueryResult<
  TResponse,
  TQueryParams = DefaultQueryParams,
  TRequestHeaders = DefaultRequestHeaders,
  TResponseHeaders = DefaultResponseHeadersForQuery,
> = {
  data: TResponse | null;
  error: AxiosError | null;
  loading: boolean;
  headers: TResponseHeaders | null;
  run: (
    override?: Partial<QueryOptions<TResponse, TQueryParams, TRequestHeaders>>,
  ) => Promise<Result<TResponse, TResponseHeaders>>;
};

export type MutationArgs<TBody, TRequestHeaders = DefaultRequestHeaders> = {
  body: TBody;
  headers?: TRequestHeaders;
};

export type MutationResult<
  TBody,
  TResponse,
  TRequestHeaders = DefaultRequestHeaders,
  TResponseHeaders = DefaultResponseHeadersForMutation,
> = {
  mutate: (
    params: MutationArgs<TBody, TRequestHeaders>,
  ) => Promise<Result<TResponse, TResponseHeaders>>;
  loading: boolean;
  error: AxiosError | null;
};

export const isAxiosError = (error: unknown): error is AxiosError => {
  if (!error) {
    return false;
  }

  if (typeof error !== "object") {
    return false;
  }

  if (!("isAxiosError" in error)) {
    return false;
  }

  return (error as AxiosError).isAxiosError;
};
