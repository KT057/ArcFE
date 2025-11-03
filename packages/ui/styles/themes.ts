import { css, type RuleSet } from "styled-components";
import type { color } from "./color";
import { easing } from "./easing";
import {
  baseFontSizeForEm,
  baseFontSizeForRem,
  ebGaramond,
  em,
  lato,
  montserrat,
  notoSansJP,
  rem,
  roboto,
  zenKakuGothicNew,
  zenOldMincho
} from "./font";
import { media } from "./media";
import type { Size } from "./size";

export type Theme<C extends typeof color = typeof color> = {
  color: C;
  media: typeof media;
  size: {
    em: (px: number) => string;
    rem: (px: number) => string;
    customEm: (px: number, base: number) => string;
  };
  font: {
    baseSize: {
      em: () => RuleSet<object>;
      rem: () => RuleSet<object>;
    };
    fontFamily: {
      notoSansJP: () => RuleSet<object>;
      roboto: () => RuleSet<object>;
      zenKakuGothicNew: () => RuleSet<object>;
      lato: () => RuleSet<object>;
      montserrat: () => RuleSet<object>;
      ebGaramond: () => RuleSet<object>;
      zenOldMincho: () => RuleSet<object>;
    };
  };
  animation: {
    easing: typeof easing;
  };
  icon: {
    size: {
      large: number;
      middle: number;
      small: number;
      style: (size: Size) => RuleSet<object>;
    };
  };
};

export const themes = <C extends typeof color>(color: C): Theme<C> => ({
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
    },
    fontFamily: {
      notoSansJP: () => notoSansJP,
      roboto: () => roboto,
      zenKakuGothicNew: () => zenKakuGothicNew,
      lato: () => lato,
      montserrat: () => montserrat,
      ebGaramond: () => ebGaramond,
      zenOldMincho: () => zenOldMincho
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
});
