import { describe, it, expect } from "vitest";
import { expandPath } from "./expandPath";

describe("expandPath", () => {
  it("埋め込みがない場合はそのまま返す", () => {
    expect(expandPath("/users", undefined)).toBe("/users");
  });

  it("単一のパスパラメータを展開する", () => {
    expect(expandPath("/test/users/{id}", { id: 123 })).toBe("/test/users/123");
  });

  it("複数のパスパラメータを展開する", () => {
    const url = expandPath("/test/users/{id}/posts/{postId}", { id: 1, postId: 99 });
    expect(url).toBe("/test/users/1/posts/99");
  });

  it("URLエンコードされる", () => {
    const url = expandPath("/tags/{name}", { name: "a b/c" });
    expect(url).toBe("/tags/a%20b%2Fc");
  });

  it("未指定キーがあるとエラー", () => {
    expect(() => expandPath("/test/users/{id}", {} as any)).toThrowError(
      /Missing path param: id/
    );
  });

  it("パラメータを渡していないかつ、未指定キーがあるとエラー", () => {
    expect(() => expandPath("/test/users/{id}")).toThrowError(
      /Missing path param: id/
    );
  });
});