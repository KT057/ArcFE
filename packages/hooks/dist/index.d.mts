import { AxiosError } from 'axios';

type PathParams = Record<string, string | number | undefined>;
type DefaultQueryParams = {
    page?: number;
    per_page?: number;
    query?: string;
    order?: "name_asc" | "name_desc" | "updated_at_asc" | "updated_at_desc";
};
type DefaultRequestHeaders = Record<string, string>;
type DefaultResponseHeadersForQuery = Record<string, string>;
type DefaultResponseHeadersForMutation = Record<string, string>;
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
type Result<TResponseData, TResponseHeaders> = {
    isError: false;
    data: TResponseData;
    headers: TResponseHeaders;
} | {
    isError: true;
    error: AxiosError;
};
type QueryOptions<TResponse, TQueryParams = DefaultQueryParams, TRequestHeaders = DefaultRequestHeaders> = BaseApiOptions<TResponse, TRequestHeaders> & {
    /** マウント時に自動実行をスキップするか（既定 false） */
    skip?: boolean;
    /** クエリ ?key=value */
    query?: TQueryParams;
};
type MutationOptions<TResponse, TRequestHeaders = DefaultRequestHeaders> = BaseApiOptions<TResponse, TRequestHeaders> & {
    method: "POST" | "PUT" | "PATCH" | "DELETE";
};
type QueryResult<TResponse, TQueryParams = DefaultQueryParams, TRequestHeaders = DefaultRequestHeaders, TResponseHeaders = DefaultResponseHeadersForQuery> = {
    data: TResponse | null;
    error: AxiosError | null;
    loading: boolean;
    headers: TResponseHeaders | null;
    run: (override?: Partial<QueryOptions<TResponse, TQueryParams, TRequestHeaders>>) => Promise<Result<TResponse, TResponseHeaders>>;
};
type MutationArgs<TBody, TRequestHeaders = DefaultRequestHeaders> = {
    body: TBody;
    headers?: TRequestHeaders;
};
type MutationResult<TBody, TResponse, TRequestHeaders = DefaultRequestHeaders, TResponseHeaders = DefaultResponseHeadersForMutation> = {
    mutate: (params: MutationArgs<TBody, TRequestHeaders>) => Promise<Result<TResponse, TResponseHeaders>>;
    loading: boolean;
    error: AxiosError | null;
};

declare function useAxiosMutation<TBody, TResponse, TRequestHeaders = DefaultRequestHeaders, TResponseHeaders = DefaultResponseHeadersForMutation>({ url, pathParams, method, headers, onSuccess, onError }: MutationOptions<TResponse, TRequestHeaders>): MutationResult<TBody, TResponse, TRequestHeaders, TResponseHeaders>;

declare function useAxiosQuery<TResponse, TQueryParams = DefaultQueryParams, TRequestHeaders = DefaultRequestHeaders, TResponseHeaders = DefaultResponseHeadersForQuery>({ url, pathParams, query, skip, headers, onSuccess, onError }: QueryOptions<TResponse, TQueryParams, TRequestHeaders>): QueryResult<TResponse, TQueryParams, TRequestHeaders, TResponseHeaders>;

export { type DefaultQueryParams, type DefaultResponseHeadersForQuery, useAxiosMutation, useAxiosQuery };
