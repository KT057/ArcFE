import { RenderHookOptions, RenderHookResult } from '@testing-library/react';

declare const testRenderHook: <Result, Props>(render: (initialProps: Props) => Result, options?: RenderHookOptions<Props>) => RenderHookResult<Result, Props>;

export { testRenderHook };
