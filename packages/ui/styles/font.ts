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

export const notoSansJP = css`
   font-family: "Noto Sans JP", sans-serif;
`;

export const roboto = css`
   font-family: "Roboto", sans-serif;
`;

export const zenKakuGothicNew = css`
   font-family: "Zen Kaku Gothic New", sans-serif;
`;

export const lato = css`
   font-family: "Lato", sans-serif;
`;

export const montserrat = css`
   font-family: "Montserrat", sans-serif;
`;

export const ebGaramond = css`
   font-family: "EB Garamond", serif;
`;

export const zenOldMincho = css`
   font-family: "Zen Old Mincho", serif;
`;

export const em = (px: number) => `${px * 0.1}em`;

export const rem = (px: number) => `${px / REM_SIZE}rem`;
