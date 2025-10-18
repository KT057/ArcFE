import { AxiosProvider } from "@packages/context";
import { testRenderHook } from "@packages/tests";
import { act, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAxiosMutation } from "./useAxiosMutation";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <AxiosProvider initialConfig={{ baseURL: "http://localhost:3000" }}>
      {children}
    </AxiosProvider>
  );
}

describe("useAxiosMutation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("POST requests", () => {
    it("正常系: POSTリクエストが成功し、意図したデータが反映される", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const requestBody = {
        title: "Test Post",
        body: "This is a test post",
        userId: 1
      };

      const expectedData = {
        id: 101,
        ...requestBody,
        header: "header: token"
      };

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/posts/",
            headers: { authorization: "token" },
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      expect(result.current.loading).toBe(false);

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: requestBody,
          headers: { authorization: "token" }
        })
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
        expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
        expect(mockOnError).toHaveBeenCalledTimes(0);
        expect(mutateResult).toEqual({
          isError: false,
          data: expectedData,
          headers: expect.objectContaining({
            "content-type": "application/json"
          })
        });
      });
    });

    it("正常系: パスパラメータ付きPOSTリクエスト", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const requestBody = {
        name: "Updated User",
        email: "updated@example.com"
      };

      const expectedData = {
        id: 123,
        ...requestBody
      };

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/users/{id}",
            pathParams: { id: 123 },
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: requestBody
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
        expect(mutateResult).toEqual({
          isError: false,
          data: expectedData,
          headers: expect.objectContaining({
            "content-type": "application/json"
          })
        });
      });
    });
  });

  describe("PUT requests", () => {
    it("正常系: PUTリクエストが成功する", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const requestBody = {
        id: 1,
        title: "Updated Post",
        body: "This is an updated post",
        userId: 1
      };

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "PUT",
            url: "/test/posts/{id}",
            pathParams: { id: 1 },
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: requestBody
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledWith(requestBody);
        expect(mutateResult).toEqual({
          isError: false,
          data: requestBody,
          headers: expect.objectContaining({
            "content-type": "application/json"
          })
        });
      });
    });
  });

  describe("DELETE requests", () => {
    it("正常系: DELETEリクエストが成功する", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "DELETE",
            url: "/test/posts/{id}",
            pathParams: { id: 1 },
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: undefined
        })
      );

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
        expect(mutateResult).toEqual({
          isError: false,
          data: expect.any(Object),
          headers: expect.objectContaining({
            "content-type": "application/json"
          })
        });
      });
    });
  });

  describe("Headers override", () => {
    it("正常系: mutate関数でヘッダーを上書きできる", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const requestBody = {
        title: "Test Post",
        userId: 1
      };

      const expectedData = {
        id: 101,
        ...requestBody,
        header: "header: override-token"
      };

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/posts/",
            headers: { authorization: "token" },
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: requestBody,
          headers: { authorization: "override-token" }
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledWith(expectedData);
        expect(mutateResult).toEqual({
          isError: false,
          data: expectedData,
          headers: expect.objectContaining({
            "content-type": "application/json"
          })
        });
      });
    });
  });

  describe("Error handling", () => {
    it("異常系: パスパラメータが指定されていない場合、エラーが返る", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const expectedErrorMessage = "Missing path param: id";

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/users/{id}/posts",
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: { title: "Test" }
        })
      );

      await waitFor(() => {
        expect(result.current.error).toEqual(
          expect.objectContaining({
            message: expectedErrorMessage
          })
        );
        expect(result.current.loading).toBe(false);
        expect(mockOnError).toHaveBeenCalledTimes(1);
        expect(mockOnError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: expectedErrorMessage
          })
        );
        expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        expect(mutateResult).toEqual({
          isError: true,
          error: expect.objectContaining({
            message: expectedErrorMessage
          })
        });
      });
    });

    it("異常系: APIリクエストが失敗した場合、エラーが返る", async () => {
      const mockOnSuccess = vi.fn();
      const mockOnError = vi.fn();

      const expectedErrorMessage = "Request failed with status code 400";

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/bad",
            onSuccess: mockOnSuccess,
            onError: mockOnError
          }),
        { wrapper: Wrapper }
      );

      const mutateResult = await act(async () =>
        result.current.mutate({
          body: { title: "Test" }
        })
      );

      await waitFor(() => {
        expect(result.current.error).toEqual(
          expect.objectContaining({
            message: expectedErrorMessage
          })
        );
        expect(result.current.loading).toBe(false);
        expect(mockOnError).toHaveBeenCalledTimes(1);
        expect(mockOnError).toHaveBeenCalledWith(
          expect.objectContaining({
            message: expectedErrorMessage
          })
        );
        expect(mockOnSuccess).toHaveBeenCalledTimes(0);
        expect(mutateResult).toEqual({
          isError: true,
          error: expect.objectContaining({
            message: expectedErrorMessage
          })
        });
      });
    });
  });

  describe("Multiple mutations", () => {
    it("正常系: 複数回のmutationが順次実行される", async () => {
      const mockOnSuccess = vi.fn();

      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/posts/",
            onSuccess: mockOnSuccess
          }),
        { wrapper: Wrapper }
      );

      // 1回目のmutation
      await act(async () =>
        result.current.mutate({
          body: { title: "First Post", userId: 1 }
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(1);
      });

      // 2回目のmutation
      await act(async () =>
        result.current.mutate({
          body: { title: "Second Post", userId: 1 }
        })
      );

      await waitFor(() => {
        expect(mockOnSuccess).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe("Loading states", () => {
    it("正常系: mutation中はloadingがtrueになる", async () => {
      const { result } = await testRenderHook(
        () =>
          useAxiosMutation({
            method: "POST",
            url: "/test/posts/"
          }),
        { wrapper: Wrapper }
      );

      // 初期状態
      expect(result.current.loading).toBe(false);

      // mutation開始（awaitせずに実行）
      const mutatePromise = act(async () =>
        result.current.mutate({
          body: { title: "Test Post", userId: 1 }
        })
      );

      // 完了を待つ
      await mutatePromise;

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });
    });
  });
});
