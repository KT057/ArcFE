import { GlobOptions } from 'glob';

export type HtmlOption = {
  entry: string;
  data: { [key: string]: any };
  noSharedItems?: boolean;
  option: GlobOptions;
};

export type CssOption = {
  entry: string;
  noSharedItems?: boolean;
  option: GlobOptions;
};

export type tsOption = {
  entry: string;
  option: GlobOptions;
  noSharedItems?: boolean;
};

export type JsOption = {
  entry: string;
  option: GlobOptions;
};
