import { type RenderHookOptions, type RenderHookResult } from "@testing-library/react";
export declare const testRenderHook: <Result, Props>(render: (initialProps: Props) => Result, options?: RenderHookOptions<Props>) => RenderHookResult<Result, Props>;
