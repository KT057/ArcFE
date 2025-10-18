import { AxiosProvider } from "@packages/context";
import { testRenderHook } from "@packages/tests";
import { waitFor } from "@testing-library/react";
import { act, type ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAxiosQuery } from "./useAxiosQuery";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <AxiosProvider initialConfig={{ baseURL: "http://localhost:3000" }}>
      {children}
    </AxiosProvider>
  );
}

describe("useAxiosQuery", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("正常系: 即時APIを実行して、意図したデータが反映される", async () => {
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();

    const expectedData = {
      id: 123,
      name: "User 123",
      email: "user123@example.com",
      header: "header: token",
      withPosts: true
    };

    const { result } = await testRenderHook(
      () =>
        useAxiosQuery({
          url: "/test/users/{id}",
          pathParams: { id: 123 },
          query: { withPosts: true },
          headers: { authorization: "token" },
          onSuccess: mockOnSuccess,
          onError: mockOnError
        }),
      { wrapper: Wrapper }
    );

    expect(result.current.loading).toBe(true);
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);

    await waitFor(() => {
      expect(result.current.data).toEqual(expectedData);
      expect(result.current.loading).toBe(false);
      expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
      expect(mockOnError).toHaveBeenCalledTimes(0);
    });
  });

  it("正常系: 配列のデータが返ってくる場合意図したデータが返ってくる", async () => {
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();

    const expectedData = [
      {
        id: 1,
        title: "Post 1 for user 123",
        withPosts: true
      },
      {
        id: 2,
        title: "Post 2 for user 123",
        withPosts: true
      }
    ];

    const { result } = await testRenderHook(
      () =>
        useAxiosQuery({
          url: "/test/users/{id}/posts",
          pathParams: { id: 123 },
          query: { withPosts: true },
          onSuccess: mockOnSuccess,
          onError: mockOnError
        }),
      { wrapper: Wrapper }
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);

    await waitFor(() => {
      expect(result.current.data).toEqual(expectedData);
      expect(result.current.loading).toBe(false);
      expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
      expect(mockOnError).toHaveBeenCalledTimes(0);
    });
  });

  it("正常系: run関数を呼び出すとクエリを上書きして再コールができる", async () => {
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();

    const expectedData = {
      id: 123,
      name: "User 123",
      email: "user123@example.com",
      header: "header: token",
      withPosts: true
    };

    const overrideExpectedData = {
      id: 345,
      name: "User 345",
      email: "user345@example.com",
      header: "header: override-token",
      withPosts: false
    };

    const { result } = await testRenderHook(
      () =>
        useAxiosQuery({
          url: "/test/users/{id}",
          pathParams: { id: 123 },
          query: { withPosts: true },
          headers: { authorization: "token" },
          onSuccess: mockOnSuccess,
          onError: mockOnError
        }),
      { wrapper: Wrapper }
    );

    expect(result.current.loading).toBe(true);
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
    expect(mockOnError).toHaveBeenCalledTimes(0);

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
      expect(mockOnError).toHaveBeenCalledTimes(0);
      expect(result.current.data).toEqual(expectedData);
      expect(result.current.loading).toBe(false);
    });

    const runResult = await act(async () =>
      result.current.run({
        pathParams: { id: 345 },
        query: { withPosts: false },
        headers: { authorization: "override-token" }
      })
    );

    expect(runResult).toEqual(
      expect.objectContaining({
        isError: false,
        data: overrideExpectedData
      })
    );

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledTimes(2);
      expect(mockOnError).toHaveBeenCalledTimes(0);
      expect(mockOnSuccess).toHaveBeenCalledWith(overrideExpectedData);
      expect(result.current.data).toEqual(overrideExpectedData);
      expect(result.current.loading).toBe(false);
    });
  });

  it("異常系: パスパラメータが指定されていない場合エラーが返る", async () => {
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();

    const expectedData = {
      message: "Missing path param: id"
    };

    const { result } = await testRenderHook(
      () =>
        useAxiosQuery({
          url: "/test/users/{id}/posts",
          query: { withPosts: true },
          onSuccess: mockOnSuccess,
          onError: mockOnError
        }),
      { wrapper: Wrapper }
    );

    await waitFor(() => {
      expect(result.current.error).toEqual(
        expect.objectContaining(expectedData)
      );
      expect(result.current.loading).toBe(false);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnError).toHaveBeenCalledWith(
        expect.objectContaining(expectedData)
      );
      expect(mockOnSuccess).toHaveBeenCalledTimes(0);
    });
  });

  it("異常系: APIの実行が失敗した場合意図した挙動になる", async () => {
    const mockOnSuccess = vi.fn();
    const mockOnError = vi.fn();

    const expectedData = {
      message: "Request failed with status code 400"
    };

    const { result } = await testRenderHook(
      () =>
        useAxiosQuery({
          url: "/test/bad",
          onError: mockOnError,
          onSuccess: mockOnSuccess
        }),
      { wrapper: Wrapper }
    );

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledTimes(0);
      expect(mockOnError).toHaveBeenCalledTimes(1);
      expect(mockOnError).toHaveBeenCalledWith(
        expect.objectContaining(expectedData)
      );
      expect(result.current.error).toEqual(
        expect.objectContaining(expectedData)
      );
      expect(result.current.loading).toBe(false);
    });
  });

  describe("skipがtrueの場合", () => {
    it("正常系: APIが実行されない", async () => {
      const { result } = await testRenderHook(
        () =>
          useAxiosQuery({
            url: "/test/users/{id}",
            pathParams: { id: 123 },
            query: { withPosts: true },
            skip: true
          }),
        { wrapper: Wrapper }
      );

      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBeNull();
    });

    it("正常系: run関数を呼び出すとApiがコールされる", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const expectedData = {
        id: 123,
        name: "User 123",
        email: "user123@example.com",
        header: "header: token",
        withPosts: true
      };

      const { result } = await testRenderHook(
        () =>
          useAxiosQuery({
            url: "/test/users/{id}",
            pathParams: { id: 123 },
            query: { withPosts: true },
            headers: { authorization: "token" },
            skip: true,
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        expect(mockOnError).toHaveBeenCalledTimes(0);
        expect(result.current.loading).toBe(false);
      });

      const runResult = await act(async () => result.current.run());

      expect(runResult).toEqual(
        expect.objectContaining({
          isError: false,
          data: expectedData
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
        expect(mockOnError).toHaveBeenCalledTimes(0);
        expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
        expect(result.current.data).toEqual(expectedData);
        expect(result.current.loading).toBe(false);
      });
    });

    it("異常系:APIの実行が失敗した場合意図した挙動になる", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const expectedData = expect.objectContaining({
        message: "Request failed with status code 400"
      });

      const { result } = await testRenderHook(
        () =>
          useAxiosQuery({
            url: "/test/bad",
            pathParams: { id: 123 },
            query: { withPosts: true },
            skip: true,
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        expect(mockOnError).toHaveBeenCalledTimes(0);
        expect(result.current.loading).toBe(false);
      });

      const runResult = await act(async () => result.current.run());

      expect(runResult).toEqual({
        isError: true,
        error: expectedData
      });

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        expect(mockOnError).toHaveBeenCalledTimes(1);
        expect(mockOnError).toHaveBeenCalledWith(expectedData);
        expect(result.current.error).toEqual(expectedData);
        expect(result.current.loading).toBe(false);
      });
    });
  });
});
