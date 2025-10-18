import {
  type RenderHookOptions,
  type RenderHookResult,
  renderHook
} from "@testing-library/react";

export const testRenderHook = <Result, Props>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>
): RenderHookResult<Result, Props> => {
  return renderHook(render, options);
};
