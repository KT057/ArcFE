import { css } from "styled-components";
import { PC_SIZE, REM_SIZE, SP_SIZE } from "./size";

export const baseFontSizeForEm = css`
   font-size: calc(${PC_SIZE}px * 10 / ${PC_SIZE});

   ${(props) =>
     props.theme.media.pcSize(css`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) =>
     props.theme.media.tabletSize(css`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) =>
     props.theme.media.spSizeLess(css`
    font-size: calc(100vw * 10 / ${SP_SIZE});
   `)}
`;

export const baseFontSizeForRem = css`
   font-size: calc(${PC_SIZE}px * ${REM_SIZE} / ${PC_SIZE});

   ${(props) =>
     props.theme.media.pcSize(css`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) =>
     props.theme.media.tabletSize(css`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) =>
     props.theme.media.spSizeLess(css`
      font-size: calc(100vw * ${REM_SIZE} / ${SP_SIZE});
    `)}
`;

export const em = (px: number) => `${px * 0.1}em`;

export const rem = (px: number) => `${px / REM_SIZE}rem`;
