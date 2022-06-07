/* eslint @typescript-eslint/no-empty-interface: "off" */
import "styled-components";

import { themeDark, themeLight } from "./theme";

export type Theme = typeof themeDark;
export type Theme = typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
