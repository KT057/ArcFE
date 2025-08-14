import { css } from "styled-components";
import { color } from "./color";
import { easing } from "./easing";
import { baseFontSizeForEm, baseFontSizeForRem, em, rem } from "./font";
import { media } from "./media";
import type { Size } from "./size";

export const themes = {
  color,
  media,
  size: {
    em: (px: number) => em(px),
    rem: (px: number) => rem(px),
    customEm: (px: number, base: number) => `${px / base}em`
  },
  font: {
    baseSize: {
      em: () => baseFontSizeForEm,
      rem: () => baseFontSizeForRem
    }
  },
  animation: {
    easing
  },
  icon: {
    size: {
      large: 24,
      middle: 20,
      small: 18,
      style: (size: Size) => {
        switch (size) {
          case "large":
            return css`
              width: ${em(24)};
              height: ${em(24)};
            `;
          case "middle":
            return css`
              width: ${em(20)};
              height: ${em(20)};
            `;
          case "small":
            return css`
              width: ${em(18)};
              height: ${em(18)};
            `;
          default:
            return css`
              width: ${em(24)};
              height: ${em(24)};
            `;
        }
      }
    }
  }
};
