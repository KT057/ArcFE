import "styled-components";
import type { themes } from "../../../packages/ui/styles";

type Theme = typeof themes;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
