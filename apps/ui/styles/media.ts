import { css } from "styled-components";
import { PC_SIZE, SP_SIZE, TABLET_SIZE } from "./size";

export const media = {
  pcSizeOver: (...args: ReturnType<typeof css>) => css`
      @media (min-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSize: (...args: ReturnType<typeof css>) => css`
      @media (min-width: ${TABLET_SIZE + 1}px) and (max-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSizeLess: (...args: ReturnType<typeof css>) => css`
      @media (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeOver: (...args: ReturnType<typeof css>) => css`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSize: (...args: ReturnType<typeof css>) => css`
      @media (min-width: ${SP_SIZE + 1}px) and (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeLess: (...args: ReturnType<typeof css>) => css`
      @media (max-width: ${SP_SIZE - 1}px) {
        ${args}
      }
    `,
  spSizeLess: (...args: ReturnType<typeof css>) => css`
      @media (max-width: ${SP_SIZE}px) {
        ${args}
      }
    `,
  spSizeOver: (...args: ReturnType<typeof css>) => css`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `
};
