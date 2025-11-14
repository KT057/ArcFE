import styled13, { css, keyframes, createGlobalStyle } from 'styled-components';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import gsap, { gsap as gsap$1 } from 'gsap';
import React4, { createContext, forwardRef, useMemo, useImperativeHandle, useState, Children, useEffect, useContext, useRef, useCallback, memo, useReducer, useLayoutEffect } from 'react';
import { createPortal, unstable_batchedUpdates } from 'react-dom';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports, module) {
    module.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js
var require_src = __commonJS({
  "../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js"(exports, module) {
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 1e-3;
    var SUBDIVISION_PRECISION = 1e-7;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    var float32ArraySupported = typeof Float32Array === "function";
    function A(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function LinearEasing(x) {
      return x;
    }
    module.exports = function bezier2(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      }
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function BezierEasing(x) {
        if (x === 0) {
          return 0;
        }
        if (x === 1) {
          return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
  }
});
var StyledBgImageContentWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledBgImageContentInner = styled13.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInOutSine};
`;
var StyledBgImageContentContainer = styled13.div.withConfig({
  shouldForwardProp: (prop) => ![
    "height",
    "imageUrl",
    "scale",
    "animationType",
    "duration",
    "easing"
  ].includes(prop)
})`
  width: 100%;
  height: ${({ theme, height }) => theme.size.em(height || 17)};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
    background-size: cover;
    z-index: 0;
    transform: scale(1);
    transition: transform ${({ duration }) => duration || 0.3}s ${({ theme, easing: easing2 }) => theme.animation.easing[easing2 || "easeInOutSine"]};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: opacity ${({ duration }) => duration || 0.3}s ${({ theme, easing: easing2 }) => theme.animation.easing[easing2 || "easeInOutSine"]};
  }

  ${({ animationType, scale }) => (animationType === "001" || animationType === void 0) && css`
      &:hover {
        &::before {
          transform: scale(${scale || 1.1});
        }
      }
    `}

  ${({ animationType, scale }) => animationType === "002" && css`
      &:hover {
        &::before {
          transform: scale(${scale || 1.1});
        }

        &::after {
          opacity: 0;
        }

        ${StyledBgImageContentInner} {
          opacity: 0;
        }
      }
    `}
`;
var BgImageContent = ({
  children,
  imageUrl,
  height,
  animationType,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledBgImageContentWrapper, { children: /* @__PURE__ */ jsx(
    StyledBgImageContentContainer,
    {
      height,
      imageUrl,
      animationType,
      scale: style?.scale,
      duration: style?.duration,
      easing: style?.easing,
      children: /* @__PURE__ */ jsx(StyledBgImageContentInner, { children })
    }
  ) });
};
var StyledCircleProgressWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledCircleProgressContainer = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledCircleProgressSvg = styled13.svg.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  transform: rotate(-90deg);
  overflow: visible;
`;
var StyledCircleProgressTrack = styled13.circle.withConfig({
  shouldForwardProp: (prop) => !["trackColor", "size"].includes(prop)
})`
  cx: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  r: ${({ theme, size }) => theme.size.em(((size || 17) - 1) / 2)};
  stroke-width: 1;
  fill: none;
  stroke: ${({ trackColor }) => trackColor || "#e5e7eb"};
  stroke-linecap: round;
`;
var StyledCircleProgressProgress = styled13.circle.withConfig({
  shouldForwardProp: (prop) => ![
    "primaryColor",
    "size",
    "strokeWidth",
    "animationDuration",
    "progress"
  ].includes(prop)
})`
  cx: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  cy: ${({ theme, size }) => theme.size.em((size || 17) / 2)};
  r: ${({ theme, size, strokeWidth }) => theme.size.em(((size || 17) - (strokeWidth || 2)) / 2)};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 2};
  fill: none;
  stroke: ${({ primaryColor }) => primaryColor || "#3b82f6"};
  stroke-linecap: round;
  stroke-dasharray: ${({ theme, size, strokeWidth }) => {
  const radius = ((size || 17) - (strokeWidth || 2)) / 2;
  const circumference = 2 * 3.1416 * radius;
  return theme.size.em(circumference);
}};
  stroke-dashoffset: ${({ theme, size, strokeWidth, progress }) => {
  const radius = ((size || 17) - (strokeWidth || 2)) / 2;
  const circumference = 2 * 3.1416 * radius;
  return theme.size.em(
    circumference - circumference * (progress || 0) / 100
  );
}};
`;
var CircleProgress = ({
  progress = 0,
  size,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledCircleProgressWrapper, { children: /* @__PURE__ */ jsx(StyledCircleProgressContainer, { size, children: /* @__PURE__ */ jsxs(StyledCircleProgressSvg, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCircleProgressTrack,
      {
        trackColor: style?.trackColor,
        size
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCircleProgressProgress,
      {
        primaryColor: style?.primaryColor,
        size,
        strokeWidth: style?.strokeWidth,
        animationDuration: style?.animationDuration,
        progress
      }
    )
  ] }) }) });
};
var StyledFadeInAndZoomImagesWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeInAndZoomImagesImageInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height"
})`
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-top: ${({ height, theme }) => theme.size.em(height ?? 200)};
  }
`;
var StyledFadeInAndZoomImagesContent = styled13.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0;
`;
var StyledFadeInAndZoomImagesImage = styled13.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
var FadeInAndZoomImages = ({
  images,
  duration = 4,
  fadeDuration = 2,
  scaleTo = 1.2,
  state,
  height,
  onImageChange,
  onProgress
}) => {
  const wrapperRef = useRef(null);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(state?.currentIndex ?? 0);
  const getImageElements = useCallback(() => {
    if (!wrapperRef.current) return [];
    const imageElements = Array.from(
      wrapperRef.current.querySelectorAll(
        ".fade-in-zoom-content"
      )
    );
    return imageElements;
  }, []);
  const currentIndexData = useMemo(() => {
    return state?.currentIndex ?? currentIndex;
  }, [state?.currentIndex, currentIndex]);
  const onChangeCurrentIndex = useCallback(
    (index) => {
      setCurrentIndex(index);
      state?.setCurrentIndex?.(index);
    },
    [state]
  );
  const onNextIndex = useCallback(() => {
    let nextIndex = currentIndexData;
    const maxIndexes = images.length - 1;
    if (nextIndex >= maxIndexes) {
      nextIndex = 0;
      onChangeCurrentIndex(nextIndex);
    } else {
      nextIndex++;
      onChangeCurrentIndex(nextIndex);
    }
    return nextIndex;
  }, [currentIndexData, images.length, onChangeCurrentIndex]);
  const completeAnimation = useCallback(
    ({ imageElement }) => {
      imageElement.style.zIndex = "1";
      gsap.to(imageElement, {
        opacity: 0,
        duration: fadeDuration,
        ease: "power2.out",
        onComplete: () => {
          onImageChange?.(currentIndexData);
          imageElement.style.zIndex = "0";
        }
      });
    },
    [currentIndexData, fadeDuration, onImageChange]
  );
  const fadeInAndZoomImagesAnimation = useCallback(
    ({ imageElement }) => {
      gsap.set(imageElement, {
        scale: 1,
        opacity: 1
      });
      const tween = gsap.to(imageElement, {
        scale: scaleTo,
        opacity: 1,
        duration,
        ease: "power2.out",
        onComplete: () => {
          onImageChange?.(currentIndexData);
          onNextIndex();
        },
        onUpdate: () => {
          const progress = Math.floor(tween.progress() * 100);
          onProgress?.(progress);
        }
      });
    },
    [
      currentIndexData,
      duration,
      onImageChange,
      onNextIndex,
      onProgress,
      scaleTo
    ]
  );
  const switchToIndex = useCallback(
    (index) => {
      if (!wrapperRef.current || images.length <= 1) return;
      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
      const otherImageElements = imageElements.filter(
        (_, elementIndex) => elementIndex !== index
      );
      for (const imageElement of otherImageElements) {
        completeAnimation({
          imageElement
        });
      }
      if (imageElements.length > 0) {
        const imageElement = imageElements[index];
        if (imageElement) {
          if (!isFirstAnimation) {
            setIsFirstAnimation(true);
            imageElement.style.zIndex = "1";
            imageElement.style.opacity = "1";
          } else {
            imageElement.style.zIndex = "0";
          }
          fadeInAndZoomImagesAnimation({
            imageElement
          });
        }
      }
    },
    [
      completeAnimation,
      fadeInAndZoomImagesAnimation,
      getImageElements,
      images.length,
      isFirstAnimation
    ]
  );
  useEffect(() => {
    switchToIndex(currentIndexData);
    return () => {
      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
    };
  }, [currentIndexData]);
  if (!images || images.length === 0) return null;
  return /* @__PURE__ */ jsx(StyledFadeInAndZoomImagesWrapper, { children: /* @__PURE__ */ jsx(StyledFadeInAndZoomImagesImageInner, { ref: wrapperRef, height, children: images.map((image, index) => /* @__PURE__ */ jsx(
    StyledFadeInAndZoomImagesContent,
    {
      className: "fade-in-zoom-content",
      children: /* @__PURE__ */ jsx(
        StyledFadeInAndZoomImagesImage,
        {
          src: image.src,
          alt: image.alt || `Image ${index + 1}`
        }
      )
    },
    image.src
  )) }) });
};
var Svg001 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19 12H5m14 0-6 6m6-6-6-6"
      }
    )
  }
);
var Svg002 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        d: "M19 12H5m14 0-6 6m6-6-6-6"
      }
    )
  }
);
var Svg003 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m8 19 8-7-8-7"
      }
    )
  }
);
var Svg004 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        d: "m8 19 8-7-8-7"
      }
    )
  }
);
var Svg005 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m5 19 7-7-7-7M12 19l7-7-7-7"
      }
    )
  }
);
var Svg006 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        d: "m5 19 7-7-7-7M12 19l7-7-7-7"
      }
    )
  }
);
var Svg007 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M17 12 7 19V5z" })
  }
);
var Svg008 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M15.83 11.18a1 1 0 0 1 0 1.64l-7.257 5.079A1 1 0 0 1 7 17.079V6.921a1 1 0 0 1 1.573-.82z"
      }
    )
  }
);
var Svg009 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M2 14.679V9.32h10.101V5L22 12l-9.899 7v-4.321z"
      }
    )
  }
);
var Svg010 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M17.5 12a.5.5 0 0 1-.213.41l-10 7A.5.5 0 0 1 6.5 19V5a.5.5 0 0 1 .787-.41l10 7 .089.08a.5.5 0 0 1 .124.33Z"
      }
    )
  }
);
var Svg011 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        d: "m17.287 12.41-10 7-.787.55V4.04l.787.55 10 7 .585.41z"
      }
    )
  }
);
var Svg012 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M14.832 7v4H2.043L2 13.01h12.832V17L22 12z" })
  }
);
var Svg013 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "#fff", stroke: "currentColor", d: "M5.5 6.5h16v11h-16z" }),
      /* @__PURE__ */ jsx("path", { fill: "#fff", stroke: "currentColor", d: "M2.5 9.5h16v11h-16z" })
    ]
  }
);
var Svg014 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        d: "M4 4.44h8.047M4.497 20V4.94M19.586 20v-8.032M4.997 19.5h15.089M12.71 11.312l6.757-6.772m.169 4.57V4.37h-4.73"
      }
    )
  }
);
var Svg015 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M15.813 7.242a.95.95 0 0 1 .953-.952.954.954 0 0 1 .954.952.95.95 0 0 1-.954.952.954.954 0 0 1-.953-.952"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 7.48c-1.2 0-2.353.476-3.202 1.324a4.516 4.516 0 0 0 0 6.392 4.53 4.53 0 0 0 6.404 0 4.516 4.516 0 0 0 0-6.392C14.352 7.956 13.2 7.48 12 7.48M8.902 12c0-.82.326-1.607.907-2.187A3.1 3.1 0 0 1 15.098 12a3.1 3.1 0 0 1-.907 2.187A3.1 3.1 0 0 1 8.9 12",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M17.012 3.277a45.6 45.6 0 0 0-10.024 0C5.07 3.49 3.52 4.999 3.296 6.923a43.7 43.7 0 0 0 0 10.154c.225 1.924 1.773 3.433 3.692 3.647 3.331.368 6.693.368 10.024 0 1.918-.214 3.467-1.723 3.692-3.647.395-3.373.395-6.78 0-10.154C20.48 5 18.931 3.491 17.012 3.277M7.146 4.695a44 44 0 0 1 9.708 0c1.268.142 2.283 1.14 2.43 2.395a42.2 42.2 0 0 1 0 9.82 2.75 2.75 0 0 1-2.43 2.395 44 44 0 0 1-9.708 0 2.76 2.76 0 0 1-2.43-2.394 42.2 42.2 0 0 1 0-9.821 2.758 2.758 0 0 1 2.43-2.395",
          clipRule: "evenodd"
        }
      )
    ]
  }
);
var Svg016 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M13.522 10.775 19.48 4h-1.412l-5.172 5.883L8.765 4H4l6.247 8.896L4 20h1.412l5.461-6.212L15.236 20H20zm-1.933 2.199-.633-.886L5.92 5.04h2.168l4.064 5.688.633.886 5.283 7.393H15.9z"
      }
    )
  }
);
var Svg017 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M21 12.023C21 7.043 16.968 3 12 3s-9 4.042-9 9.023a9.025 9.025 0 0 0 7.2 8.842v-6.136H8.4v-2.706h1.8V9.767a3.157 3.157 0 0 1 3.15-3.158h2.25v2.707h-1.8c-.495 0-.9.406-.9.902v1.805h2.7v2.706h-2.7V21c4.545-.451 8.1-4.295 8.1-8.977"
      }
    )
  }
);
var Svg018 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M3 19h18V5H3z" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m3 5 9 7 9-7"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 12V5h18v7"
        }
      )
    ]
  }
);
var Svg019 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m3 6.177 9 7.875 9-7.875V19H3zM19.655 5 12 11.697 4.345 5z",
        clipRule: "evenodd"
      }
    )
  }
);
var Svg020 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m3 7 9 6 9-6"
        }
      )
    ]
  }
);
var Svg021 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21 8.093v8.282c0 .67-.263 1.314-.736 1.801a2.73 2.73 0 0 1-1.806.82L18.3 19H5.7a2.74 2.74 0 0 1-1.852-.715 2.6 2.6 0 0 1-.843-1.756L3 16.375V8.093l8.5 5.51.105.058a.92.92 0 0 0 .79 0l.104-.058z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M18.3 5c.972 0 1.824.499 2.3 1.249L12 11.822 3.4 6.25c.226-.357.536-.655.905-.871a2.76 2.76 0 0 1 1.214-.372L5.7 5z"
        }
      )
    ]
  }
);
var Svg022 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M7.218 10.924a13.47 13.47 0 0 0 5.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214.995.33 2.07.507 3.173.507.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C10.764 20 4 13.236 4 4.889 4 4.4 4.4 4 4.889 4H8c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.89.89 0 0 1-.223.907z"
      }
    )
  }
);
var Svg023 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        d: "M8.823 4H6.286A2.286 2.286 0 0 0 4 6.286V8.57C4 14.883 9.117 20 15.429 20h2.285A2.285 2.285 0 0 0 20 17.714v-1.58a1.14 1.14 0 0 0-.632-1.02l-2.761-1.381a1.142 1.142 0 0 0-1.596.66l-.339 1.02a1.383 1.383 0 0 1-1.583.92 6.91 6.91 0 0 1-5.42-5.422 1.383 1.383 0 0 1 .918-1.583l1.267-.423a1.143 1.143 0 0 0 .747-1.36l-.67-2.68A1.14 1.14 0 0 0 8.823 4Z"
      }
    )
  }
);
var Svg024 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M6.667 4A2.667 2.667 0 0 0 4 6.667V8.8C4 14.986 9.014 20 15.2 20h2.133A2.667 2.667 0 0 0 20 17.333V15.86a1.6 1.6 0 0 0-.885-1.431l-2.576-1.289a1.6 1.6 0 0 0-2.234.926l-.318.953a.76.76 0 0 1-.866.502 5.92 5.92 0 0 1-4.641-4.64.76.76 0 0 1 .502-.866l1.183-.395a1.6 1.6 0 0 0 1.046-1.906l-.625-2.5A1.6 1.6 0 0 0 9.035 4z"
      }
    )
  }
);
var Svg025 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx("path", { stroke: "currentColor", d: "M6.5 3.5h14v14h-14zM3.5 5v15M3 20.5h16" })
  }
);
var Svg026 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M22 11.999v-.005a9.95 9.95 0 0 0-3.335-7.444l-.01-.008a.5.5 0 0 0-.084-.073h-.002A9.93 9.93 0 0 0 11.998 2a9.94 9.94 0 0 0-6.591 2.487l.01-.01a.4.4 0 0 0-.058.055A9.97 9.97 0 0 0 2 12.002a9.96 9.96 0 0 0 3.33 7.443l.01.008q.04.045.089.081l.002.001A9.93 9.93 0 0 0 11.998 22a9.94 9.94 0 0 0 6.592-2.487l-.01.01A9.95 9.95 0 0 0 22 12.005zm-3.719 6.504q-.745-.602-1.59-1.052l-.055-.027c.51-1.472.818-3.17.848-4.935v-.014h3.55a9.02 9.02 0 0 1-2.75 6.025zm-5.805-1.255a9 9 0 0 1 2.99.675l-.06-.021c-.738 1.683-1.777 2.84-2.93 3.094zm0-.953v-3.82h4.057a15.5 15.5 0 0 1-.814 4.649l.033-.11a9.7 9.7 0 0 0-3.253-.718zm0-4.773v-3.82a9.9 9.9 0 0 0 3.34-.742l-.067.024c.463 1.35.747 2.904.784 4.52v.018zm0-4.773V3.003c1.153.254 2.192 1.406 2.93 3.094a9 9 0 0 1-2.906.651zm2.378-3.333c.983.327 1.901.82 2.715 1.46l-.019-.015c-.369.29-.783.563-1.22.8l-.046.024a8.3 8.3 0 0 0-1.437-2.28l.007.008zm-3.333-.41v3.743a9 9 0 0 1-2.99-.675l.06.022c.742-1.684 1.78-2.84 2.932-3.094zM7.715 5.682a9 9 0 0 1-1.287-.839l.02.015A8.9 8.9 0 0 1 9.08 3.432l.063-.02a8.3 8.3 0 0 0-1.407 2.215zm3.808 2.02v3.82H7.466c.037-1.635.321-3.19.816-4.648l-.032.11a9.8 9.8 0 0 0 3.25.717zm0 4.773v3.82a9.9 9.9 0 0 0-3.34.742l.067-.024a15.2 15.2 0 0 1-.784-4.52v-.018zm0 4.773v3.745c-1.152-.254-2.192-1.405-2.93-3.094a9 9 0 0 1 2.906-.65zM9.148 20.58a9.1 9.1 0 0 1-2.715-1.457l.02.015c.37-.29.783-.563 1.22-.8l.047-.024c.35.833.834 1.603 1.436 2.278l-.008-.009zm7.136-2.267c.484.263.898.535 1.287.84l-.02-.016a8.9 8.9 0 0 1-2.632 1.427l-.063.02a8.3 8.3 0 0 0 1.408-2.215l.02-.054zm4.75-6.792h-3.55a16.4 16.4 0 0 0-.882-5.065l.034.115q.885-.466 1.664-1.093l-.02.015a9 9 0 0 1 2.752 6.004zM5.718 5.495c.48.39 1.02.747 1.59 1.051l.055.027c-.51 1.473-.818 3.17-.847 4.936v.013H2.964a9.02 9.02 0 0 1 2.75-6.025zm-2.753 6.98h3.55c.027 1.725.324 3.434.882 5.065l-.034-.115c-.626.333-1.164.69-1.664 1.093l.02-.015A9 9 0 0 1 2.967 12.5l-.001-.024z"
      }
    )
  }
);
var Svg027 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.4 13.563c1.21 1.205 3.28 1.096 4.623-.242l3.893-3.878c1.344-1.339 1.453-3.4.244-4.606s-3.28-1.096-4.624.243L12.59 7.019"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13.6 10.437c-1.21-1.205-3.28-1.096-4.623.242L7.03 12.62l-1.946 1.938c-1.344 1.339-1.453 3.4-.244 4.606s3.28 1.096 4.624-.243l1.947-1.939"
        }
      )
    ]
  }
);
var Svg028 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m8.998 15.003 6.006-6.005m-8.259 2.251-1.501 1.502a4.245 4.245 0 0 0 4.628 6.926 4.25 4.25 0 0 0 1.378-.92l1.499-1.502m-1.5-10.51 1.501-1.501a4.247 4.247 0 0 1 6.006 6.005l-1.501 1.502"
      }
    )
  }
);
var Svg029 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          d: "M9.333 12c0 .737-.28 1.443-.78 1.964s-1.18.814-1.886.814a2.61 2.61 0 0 1-1.886-.814A2.84 2.84 0 0 1 4 12c0-.737.28-1.443.781-1.964a2.61 2.61 0 0 1 1.886-.814c.707 0 1.385.293 1.885.814s.781 1.227.781 1.964Z"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.667 5.889 9.333 9.778m5.334 8.333-5.334-3.889"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          d: "M20 19.222c0 .737-.28 1.444-.781 1.964-.5.521-1.178.814-1.886.814a2.61 2.61 0 0 1-1.885-.814 2.84 2.84 0 0 1-.781-1.964c0-.737.28-1.443.78-1.964s1.18-.814 1.886-.814c.708 0 1.386.293 1.886.814S20 18.485 20 19.222Zm0-14.444c0 .736-.28 1.443-.781 1.964-.5.52-1.178.814-1.886.814a2.61 2.61 0 0 1-1.885-.814 2.84 2.84 0 0 1-.781-1.964c0-.737.28-1.443.78-1.964S16.628 2 17.334 2c.708 0 1.386.293 1.886.814S20 4.04 20 4.778Z"
        }
      )
    ]
  }
);
var Svg030 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 2v4a2 2 0 0 0 2 2h4"
        }
      )
    ]
  }
);
var Svg031 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m19.5 7-10 10-5-5"
      }
    )
  }
);
var Svg032 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m19.5 7-10 10-5-5"
      }
    )
  }
);
var Svg033 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-.232-5.36 5-6-1.536-1.28-4.3 5.159-2.225-2.226-1.414 1.414 3 3 .774.774z",
        clipRule: "evenodd"
      }
    )
  }
);
var Svg034 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12 17 5 7h14z" })
  }
);
var Svg035 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.82 15.83a1 1 0 0 1-1.64 0L6.102 8.573A1 1 0 0 1 6.921 7h10.158a1 1 0 0 1 .82 1.573z"
      }
    )
  }
);
var Svg036 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m5 8 7 8 7-8"
      }
    )
  }
);
var Svg037 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        d: "m5 8 7 8 7-8"
      }
    )
  }
);
var Svg038 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m5 5 7 7 7-7M5 12l7 7 7-7"
      }
    )
  }
);
var Svg039 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        d: "m5 5 7 7 7-7M5 12l7 7 7-7"
      }
    )
  }
);
var Svg040 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        d: "M21 10.74c0-3.994-4.037-7.24-9-7.24s-9 3.246-9 7.24c0 3.576 3.197 6.576 7.526 7.137.291.059.694.195.788.441.095.23.06.578.026.808 0 0-.103.628-.129.764-.042.221-.18.884.78.485.96-.4 5.178-3.025 7.072-5.175 1.303-1.419 1.928-2.855 1.928-4.452zM8.829 12.871c0 .093-.078.17-.172.17H6.13a.17.17 0 0 1-.172-.17V8.98c0-.093.077-.17.172-.17h.634c.094 0 .171.077.171.17v3.093H8.65c.094 0 .171.077.171.17v.629zm1.517 0c0 .093-.077.17-.172.17H9.54a.17.17 0 0 1-.171-.17V8.98c0-.093.077-.17.171-.17h.634c.095 0 .172.077.172.17zm4.345 0c0 .093-.077.17-.171.17h-.694a.1.1 0 0 1-.043-.043l-1.8-2.404v2.31c0 .094-.077.17-.172.17h-.634a.17.17 0 0 1-.171-.17v-3.89c0-.094.077-.17.171-.17h.703l.009.008.017.017 1.8 2.405V8.963c0-.093.077-.17.171-.17h.634c.095 0 .172.077.172.17v3.892zm3.48-3.263c0 .094-.077.17-.171.17h-1.714v.654H18c.094 0 .171.077.171.17v.63c0 .092-.077.169-.171.169h-1.714v.654H18c.094 0 .171.077.171.17v.629c0 .093-.077.17-.171.17h-2.529a.17.17 0 0 1-.171-.17V8.963c0-.102.077-.178.171-.178H18c.094 0 .171.076.171.17v.654"
      }
    )
  }
);
var Svg041 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.974 14.62 20 18.656 18.659 20l-4.023-4.03a6.63 6.63 0 0 1-9-.942 6.66 6.66 0 0 1 .293-9.062 6.635 6.635 0 0 1 9.041-.357 6.664 6.664 0 0 1 1.003 9.011m-.59-3.965c0-1.26-.5-2.47-1.39-3.361a4.74 4.74 0 0 0-6.708 0 4.76 4.76 0 0 0 0 6.722 4.74 4.74 0 0 0 6.708 0c.89-.892 1.39-2.1 1.39-3.361",
        clipRule: "evenodd"
      }
    )
  }
);
var Svg042 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M4 18.545 18.545 4l1.454 1.454L5.454 20z" }),
      /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M5.455 4 20 18.545 18.546 20 4 5.455z" })
    ]
  }
);
var Svg043 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 38 38",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          d: "M0-.5h12.398",
          transform: "scale(1.04854 .94898)rotate(45 -2.497 33.547)"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          stroke: "currentColor",
          d: "M0-.5h12.398",
          transform: "matrix(.74143 -.67103 .74143 .67103 24.808 27)"
        }
      ),
      /* @__PURE__ */ jsx("path", { stroke: "currentColor", d: "M4 18.5h24" })
    ]
  }
);
var BUTTON_SIZE = {
  large: { width: 160, height: 90 },
  middle: { width: 100, height: 55 },
  small: { width: 66, height: 38 }
};
var ICON_SIZE = {
  large: 43,
  middle: 30,
  small: 20
};
var StyledJmcArrowButtonWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcArrowButtonIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor"
})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};
  color: ${({ iconColor }) => iconColor ?? "#000"};
  width: 100%;
  height: 100%;

  &:nth-child(2) {
    transform: translateX(-100%);
  }

  &:nth-child(3) {
    transform: translateX(-200%);
  }

  &:nth-child(4) {
    transform: translateX(-300%);
  }
`;
var StyledJmcArrowButton = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "iconColor" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "hoverIconColor" && prop !== "hoverBorderColor" && prop !== "hoverBackgroundColor"
})`
  position: relative;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  overflow: hidden;
  display: block;
  cursor: pointer;
  transition: border-color 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};

  ${({ size }) => css`
    width: ${({ theme }) => theme.size.em(BUTTON_SIZE[size].width)};
    height: ${({ theme }) => theme.size.em(BUTTON_SIZE[size].height)};
  `}

  &::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    width: 105%;
    height: 105%;
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ?? "#909090"};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInOutCubic};
    z-index: 0;
  }

  &:hover {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor ?? "#909090"};

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }

    ${StyledJmcArrowButtonIcon} {
      transition: transform 0.6s ${({ theme }) => theme.animation.easing.easeInOutCubic};
      color: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};

      svg {
        stroke: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};
        fill: ${({ hoverIconColor }) => hoverIconColor ?? "#fff"};
      }

      &:nth-child(1) {
        transform: translateX(300%);
      }

      &:nth-child(2) {
        transform: translateX(200%);
      }

      &:nth-child(3) {
        transform: translateX(100%);
      }

      &:nth-child(4) {
        transform: translateX(0);
      }
    }
  }
`;
var StyledJmcArrowButtonIconContainer = styled13.span`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
`;
var StyledJmcArrowButtonIconWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ size }) => css`
    width: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
    height: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
  `}
`;
var StyledJmcArrowButtonIconInner = styled13.span`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
`;
var JmcArrowButton = ({
  size = "middle",
  onClick,
  as = "span",
  href,
  style
}) => {
  const buttonProps = {
    ...as === "a" && href ? { href } : {},
    ...onClick ? { onClick } : {}
  };
  return /* @__PURE__ */ jsx(StyledJmcArrowButtonWrapper, { children: /* @__PURE__ */ jsx(
    StyledJmcArrowButton,
    {
      as,
      size,
      iconColor: style?.iconColor,
      borderColor: style?.borderColor,
      backgroundColor: style?.backgroundColor,
      hoverIconColor: style?.hoverIconColor,
      hoverBorderColor: style?.hoverBorderColor,
      hoverBackgroundColor: style?.hoverBackgroundColor,
      ...buttonProps,
      children: /* @__PURE__ */ jsx(StyledJmcArrowButtonIconContainer, { children: /* @__PURE__ */ jsx(StyledJmcArrowButtonIconWrapper, { size, children: /* @__PURE__ */ jsxs(StyledJmcArrowButtonIconInner, { children: [
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) })
      ] }) }) })
    }
  ) });
};

// styles/color.ts
var color = {
  primary: "#000",
  secondary: "#fff"
};
var hexToRgb = (hex) => {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map((char) => char + char).join("");
  }
  cleanHex = cleanHex.padEnd(6, "0");
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
};

// components/Advanced/Jmc/CircleToggle/styles.tsx
var StyledJmcCircleToggleWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcCircleToggle = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color" && prop !== "isHovered"
})`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  position: relative;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  border: 1px solid ${({ color: color2, isHovered }) => isHovered ? `rgba(${hexToRgb(color2 ?? "#fff")}, 0)` : `rgba(${hexToRgb(color2 ?? "#fff")}, 1)`};
  background-color: ${({ color: color2, isHovered }) => isHovered ? `rgba(${hexToRgb(color2 ?? "#fff")}, 0.3)` : `rgba(${hexToRgb(color2 ?? "#fff")}, 0)`};
  transition:
    border-color 0.3s ${({ theme }) => theme.animation.easing.easeOutCubic},
    background-color 0.3s ${({ theme }) => theme.animation.easing.easeOutCubic};
`;
var StyledJmcCircleToggleInner = styled13.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledJmcCircleToggleDotWrapper = styled13.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(4)};
`;
var StyledJmcCircleToggleDot = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "dotColor"
})`
  width: ${({ theme }) => theme.size.em(4)};
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ dotColor }) => dotColor ?? "#fff"};
  border-radius: 50%;
`;
var JmcCircleToggle = ({
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style
}) => {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = controlledIsHovered !== void 0 ? controlledIsHovered : internalIsHovered;
  const handleMouseEnter = () => {
    if (controlledIsHovered === void 0) {
      setInternalIsHovered(true);
    }
    onMouseEnter?.();
  };
  const handleMouseLeave = () => {
    if (controlledIsHovered === void 0) {
      setInternalIsHovered(false);
    }
    onMouseLeave?.();
  };
  return /* @__PURE__ */ jsx(StyledJmcCircleToggleWrapper, { children: /* @__PURE__ */ jsx(
    StyledJmcCircleToggle,
    {
      color: style?.color,
      isHovered,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick,
      children: /* @__PURE__ */ jsx(StyledJmcCircleToggleInner, { children: /* @__PURE__ */ jsxs(StyledJmcCircleToggleDotWrapper, { children: [
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: style?.dotColor }),
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: style?.dotColor }),
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: style?.dotColor })
      ] }) })
    }
  ) });
};
var StyledJmcButtonWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcButton = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "textColor"
})`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(16)};
  border-radius: ${({ theme }) => theme.size.em(30)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#909090"};
  gap: ${({ theme }) => theme.size.em(25)};
  cursor: pointer;
`;
var StyledJmcButtonLeft = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 14)};
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#fff"};
`;
var JmcButton = ({
  children,
  onClick,
  as = "span",
  href,
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  style
}) => {
  const [internalIsHovered, setInternalIsHovered] = useState(false);
  const isHovered = controlledIsHovered !== void 0 ? controlledIsHovered : internalIsHovered;
  const handleMouseEnter = () => {
    if (controlledIsHovered === void 0) {
      setInternalIsHovered(true);
    }
    onMouseEnter?.();
  };
  const handleMouseLeave = () => {
    if (controlledIsHovered === void 0) {
      setInternalIsHovered(false);
    }
    onMouseLeave?.();
  };
  const buttonProps = {
    ...as === "a" && href ? { href } : {},
    ...onClick ? { onClick } : {}
  };
  return /* @__PURE__ */ jsx(StyledJmcButtonWrapper, { children: /* @__PURE__ */ jsxs(
    StyledJmcButton,
    {
      as,
      backgroundColor: style?.backgroundColor,
      textColor: style?.color,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...buttonProps,
      children: [
        /* @__PURE__ */ jsx(StyledJmcButtonLeft, { fontSize: style?.fontSize, color: style?.color, children }),
        /* @__PURE__ */ jsx(
          JmcCircleToggle,
          {
            isHovered,
            style: {
              color: style?.circleToggleColor || style?.color,
              dotColor: style?.circleToggleDotColor || style?.color
            }
          }
        )
      ]
    }
  ) });
};
var StyledVerticalRollingTextWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "color"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
  display: inline-block;
`;
var StyledVerticalRollingTextInner = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "color"].includes(prop)
})`
  position: relative;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ color: color2 }) => color2 || "#000"};
  line-height: 1.5;
  height: 1.5em;
`;
var StyledVerticalRollingTextContents = styled13.span`
  display: block;
  transform: translateY(0);
`;
var StyledVerticalRollingText = styled13.span`
  display: block;
`;
var VerticalRollingText = ({
  children,
  enableHover,
  style
}) => {
  const wrapperRef = useRef(null);
  const contentsRef = useRef(null);
  const textRef = useRef(null);
  const onRollingText = useCallback((isHovered) => {
    const wrapperElement = wrapperRef.current;
    const contentsElement = contentsRef.current;
    const textElement = textRef.current;
    if (!wrapperElement || !contentsElement || !textElement || !isHovered) {
      return;
    }
    const textHeight = textElement.clientHeight;
    gsap.set(contentsElement, {
      transform: "translateY(0)"
    });
    gsap.to(contentsElement, {
      duration: 0.4,
      transform: `translateY(-${textHeight}px)`,
      ease: "power2.inOut"
    });
  }, []);
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const contentsElement = contentsRef.current;
    const textElement = textRef.current;
    if (!wrapperElement || !contentsElement || !textElement) return;
    const setHeight = () => {
      const textHeight = textElement.clientHeight;
      wrapperElement.style.height = `${textHeight}px`;
    };
    const handleResize = () => {
      setHeight();
    };
    setHeight();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (enableHover !== void 0) {
      onRollingText(enableHover);
    }
  }, [enableHover]);
  return /* @__PURE__ */ jsx(
    StyledVerticalRollingTextWrapper,
    {
      fontSize: style?.fontSize,
      color: style?.color,
      children: /* @__PURE__ */ jsx(
        StyledVerticalRollingTextInner,
        {
          ref: wrapperRef,
          fontSize: style?.fontSize,
          color: style?.color,
          onMouseEnter: () => enableHover === void 0 && onRollingText(true),
          onMouseLeave: () => enableHover === void 0 && onRollingText(false),
          children: /* @__PURE__ */ jsxs(StyledVerticalRollingTextContents, { ref: contentsRef, children: [
            /* @__PURE__ */ jsx(StyledVerticalRollingText, { ref: textRef, children }),
            /* @__PURE__ */ jsx(StyledVerticalRollingText, { children })
          ] })
        }
      )
    }
  );
};
var StyledRebitaButtonWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledRebitaButtonInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "backgroundColor", "borderColor"].includes(prop)
})`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  border: 1px solid ${({ borderColor }) => borderColor || "#000"};
  cursor: pointer;
  flex-direction: ${({ direction }) => direction === "left" ? "row-reverse" : "row"};
`;
var StyledRebitaButtonLeft = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["textColor", "leftContentBorderColor", "direction"].includes(prop)
})`
  color: ${({ textColor }) => textColor || "#fff"};
  padding: ${({ theme }) => `${theme.size.em(10)} ${theme.size.em(20)}`};
  height: 100%;
  flex: 1;
  border-right: ${({ direction, leftContentBorderColor }) => direction === "right" ? `1px solid ${leftContentBorderColor || "#fff"}` : "0"};
  border-left: ${({ direction, leftContentBorderColor }) => direction === "left" ? `1px solid ${leftContentBorderColor || "#fff"}` : "0"};
`;
var StyledRebitaButtonLeftInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 12)};
  font-weight: 700;
`;
var StyledRebitaButtonRight = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: ${({ theme, size }) => {
  switch (size) {
    case "large":
      return theme.size.em(56);
    case "middle":
      return theme.size.em(47);
    case "small":
      return theme.size.em(37);
    default:
      return theme.size.em(47);
  }
}};
  max-width: ${({ theme, size }) => {
  switch (size) {
    case "large":
      return theme.size.em(56);
    case "middle":
      return theme.size.em(47);
    case "small":
      return theme.size.em(37);
    default:
      return theme.size.em(47);
  }
}};
`;
var StyledRebitaButtonRightInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconSize" && prop !== "iconColor"
})`
  transform: translate(0);
  transition: transform 0.8s ${({ theme }) => theme.animation.easing.easeOutCubic};
  color: ${({ iconColor }) => iconColor || "#fff"};
  ${({ theme, iconSize }) => theme.icon.size.style(iconSize)}
`;
var RebitaButton = ({
  size = "middle",
  direction = "right",
  text = "\u30DC\u30BF\u30F3",
  icon,
  onClick,
  as = "a",
  href,
  style
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return /* @__PURE__ */ jsx(StyledRebitaButtonWrapper, { children: /* @__PURE__ */ jsxs(
    StyledRebitaButtonInner,
    {
      as,
      direction,
      onClick,
      href,
      backgroundColor: style?.backgroundColor,
      borderColor: style?.borderColor,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx(
          StyledRebitaButtonLeft,
          {
            textColor: style?.textColor,
            leftContentBorderColor: style?.leftContentBorderColor,
            direction,
            children: /* @__PURE__ */ jsx(StyledRebitaButtonLeftInner, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
              VerticalRollingText,
              {
                style: {
                  fontSize: style?.fontSize,
                  color: style?.textColor || "#fff"
                },
                enableHover: isHovered,
                children: text
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx(StyledRebitaButtonRight, { size, children: /* @__PURE__ */ jsx(
          StyledRebitaButtonRightInner,
          {
            iconSize: size,
            iconColor: style?.iconColor,
            children: /* @__PURE__ */ jsx(Fragment, { children: icon })
          }
        ) })
      ]
    }
  ) });
};
var StyledCircleProgressWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledCircleProgressContainer2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 100)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledCircleProgressContent = styled13.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
var StyledCircleProgressPercentage = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "textColor"].includes(prop)
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ textColor }) => textColor || "#1f2937"};
`;
var RebitaCircleProgress = ({
  progress = 0,
  children,
  style
}) => {
  const size = style?.size || 100;
  const strokeWidth = style?.strokeWidth || 3;
  return /* @__PURE__ */ jsx(StyledCircleProgressWrapper2, { children: /* @__PURE__ */ jsxs(StyledCircleProgressContainer2, { size, children: [
    /* @__PURE__ */ jsx(
      CircleProgress,
      {
        progress,
        size,
        style: {
          primaryColor: style?.primaryColor,
          trackColor: style?.trackColor,
          strokeWidth,
          animationDuration: style?.animationDuration
        }
      }
    ),
    /* @__PURE__ */ jsx(StyledCircleProgressContent, { children: /* @__PURE__ */ jsx(
      StyledCircleProgressPercentage,
      {
        fontSize: style?.fontSize,
        textColor: style?.textColor,
        children
      }
    ) })
  ] }) });
};
var StyledSlideGuideDotWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSlideGuideDotContainer = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledSlideGuideDotItem = styled13.span`
  width: 100%;
  height: 100%;
  display: block;
  background-color: #ccc;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var RebitaSlideGuideDot = ({
  type = "default",
  progress = 0,
  style,
  onClick
}) => {
  return /* @__PURE__ */ jsx(StyledSlideGuideDotWrapper, { children: /* @__PURE__ */ jsx(StyledSlideGuideDotContainer, { size: style?.dotSize || 17, children: type === "default" ? /* @__PURE__ */ jsx(StyledSlideGuideDotItem, { onClick }) : /* @__PURE__ */ jsx(
    CircleProgress,
    {
      progress,
      size: style?.circleSize || 17,
      style: {
        primaryColor: style?.primaryColor,
        trackColor: style?.trackColor,
        strokeWidth: style?.strokeWidth || 2,
        animationDuration: style?.animationDuration
      }
    }
  ) }) });
};
var StyledFadeSlideImageWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeSlideImageContainer = styled13.div`
  margin-bottom: ${({ theme }) => theme.size.em(14)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.size.em(5)};
`;
var StyledFadeSlideImageGuideWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["gap"].includes(prop)
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, gap }) => theme.size.em(gap || 4)};
`;
var StyledFadeSlideImageGuideItem = styled13.div`
  display: inline-block;
`;
var RebitaFadeSlideImage = ({
  images,
  fadeInAndZoomImagesProps,
  slideGuideDotProps,
  style
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  return /* @__PURE__ */ jsxs(StyledFadeSlideImageWrapper, { children: [
    /* @__PURE__ */ jsx(StyledFadeSlideImageContainer, { children: /* @__PURE__ */ jsx(
      FadeInAndZoomImages,
      {
        images,
        state: {
          currentIndex,
          setCurrentIndex
        },
        onProgress: (progress2) => {
          setProgress(progress2);
        },
        ...fadeInAndZoomImagesProps
      }
    ) }),
    /* @__PURE__ */ jsx(StyledFadeSlideImageGuideWrapper, { gap: style?.guideGap, children: images.map((_, index) => /* @__PURE__ */ jsx(StyledFadeSlideImageGuideItem, { children: /* @__PURE__ */ jsx(
      RebitaSlideGuideDot,
      {
        type: index === currentIndex ? "progress" : "default",
        progress: index === currentIndex ? progress : 0,
        onClick: () => {
          setCurrentIndex(index);
        },
        ...slideGuideDotProps
      }
    ) }, index)) })
  ] });
};
var StyledFadeTextWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["color", "fontSize", "progress"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeTextContainer = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  line-height: 1.5;
  height: 1.5em;
  width: 100%;
  position: relative;
  display: block;
`;
var StyledFadeText = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["color", "isFirst", "progress"].includes(prop)
})`
  color: ${({ color: color2 }) => color2 || "#3b82f6"};
  position: absolute;
  top: 0;
  left: 0;

  ${({ isFirst, progress }) => isFirst ? `
        clip-path: inset(0 ${100 - (progress || 0)}% 0 0);
        opacity: 1;
      ` : `
        opacity: 0.2;
      `}
`;
var RebitaFadeText = ({
  children,
  progress = 0,
  style
}) => {
  return /* @__PURE__ */ jsx(
    StyledFadeTextWrapper,
    {
      color: style?.color,
      fontSize: style?.fontSize,
      progress,
      children: /* @__PURE__ */ jsxs(StyledFadeTextContainer, { fontSize: style?.fontSize, children: [
        /* @__PURE__ */ jsx(StyledFadeText, { color: style?.color, isFirst: true, progress, children }),
        /* @__PURE__ */ jsx(StyledFadeText, { color: style?.color, isFirst: false, children })
      ] })
    }
  );
};
var StyledPanelWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledPanel = styled13.div`
  padding: ${({ theme }) => theme.size.em(15)};
  background-color: rgba(204, 204, 204, 1);
  border-radius: ${({ theme }) => theme.size.em(5)};
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  border: 1px solid #ccc;

  &:hover {
    transform: translateY(${({ theme }) => theme.size.em(-8)});
    background-color: rgba(204, 204, 204, 0);

    .panel-image-overlay {
      opacity: 0;
    }

    .panel-image-text {
      opacity: 0;
    }
  }
`;
var StyledPanelImageWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "imageHeight"
})`
  width: 100%;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.size.em(5)};
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: ${({ imageHeight, theme }) => `${theme.size.em(imageHeight ?? 360)}`};
    opacity: 1;
  }
`;
var StyledPanelImageOverlay = styled13.div`
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 1;
  transition: opacity 0.3s ease;
`;
var StyledPanelImageContent = styled13.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
var StyledPanelImageImage = styled13.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
var StyledPanelImageText = styled13.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 1.5;
  z-index: 2;
  color: #fff;
  padding: ${({ theme }) => theme.size.em(10)};
  font-size: ${({ theme }) => theme.size.em(16)};
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.3s ease;
  margin: 0;
`;
var StyledPanelContent = styled13.div`
  margin-bottom: ${({ theme }) => theme.size.em(10)};
`;
var StyledPanelContentTitle = styled13.h2`
  font-size: ${({ theme }) => theme.size.em(16)};
  font-weight: 700;
  margin: 0;
`;
var StyledPanelContentText = styled13.p`
  font-size: ${({ theme }) => theme.size.em(12)};
  line-height: 1.5;
  margin: 0;
`;
var StyledPanelLabelWrapper = styled13.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.em(5)};
`;
var StyledPanelLabel = styled13.div`
  display: inline-block;
`;
var RebitaPanel = ({
  imageSrc = "./images/img-01.jpg",
  imageAlt = "",
  imageText = "\u5DE5\u696D\u5730\u57DF\u306B\u5EFA\u3064\u5143\u4F01\u696D\u793E\u5B85\u3092\u5730\u57DF\u306B\u958B\u3044\u305F\u30B7\u30A7\u30A2\u30B9\u30DA\u30FC\u30B9\u4ED8\u304D\u5206\u8B72\u30DE\u30F3\u30B7\u30E7\u30F3\u3068\u3057\u3066\u518D\u751F",
  title = "\u30EA\u30CE\u30A2\u5317\u8D64\u7FBD",
  description = "\u5DE5\u696D\u5730\u57DF\u306B\u5EFA\u3064\u5143\u4F01\u696D\u793E\u5B85\u3092\u5730\u57DF\u306B\u958B\u3044\u305F\u30B7\u30A7\u30A2\u30B9\u30DA\u30FC\u30B9\u4ED8\u304D\u5206\u8B72\u30DE\u30F3\u30B7\u30E7\u30F3\u3068\u3057\u3066\u518D\u751F",
  labels = [],
  style,
  onClick
}) => {
  return /* @__PURE__ */ jsx(StyledPanelWrapper, { children: /* @__PURE__ */ jsxs(StyledPanel, { onClick, children: [
    /* @__PURE__ */ jsxs(StyledPanelImageWrapper, { imageHeight: style?.imageHeight, children: [
      /* @__PURE__ */ jsx(StyledPanelImageContent, { children: /* @__PURE__ */ jsx(StyledPanelImageImage, { src: imageSrc, alt: imageAlt }) }),
      /* @__PURE__ */ jsx(StyledPanelImageOverlay, { className: "panel-image-overlay" }),
      /* @__PURE__ */ jsx(StyledPanelImageText, { className: "panel-image-text", children: imageText })
    ] }),
    /* @__PURE__ */ jsxs(StyledPanelContent, { children: [
      /* @__PURE__ */ jsx(StyledPanelContentTitle, { children: title }),
      /* @__PURE__ */ jsx(StyledPanelContentText, { children: description })
    ] }),
    /* @__PURE__ */ jsx(StyledPanelLabelWrapper, { children: labels.map((label, index) => /* @__PURE__ */ jsx(StyledPanelLabel, { children: /* @__PURE__ */ jsx(Fragment, { children: label }) }, index)) })
  ] }) });
};
var StyledTextButtonWithIconWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextButtonWithIcon = styled13.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.size.em(8)};
  cursor: pointer;
  line-height: 0;

  ${({ direction }) => direction === "left" && css`
      flex-direction: row-reverse;
    `}
  ${({ direction }) => direction === "right" && css`
      flex-direction: row;
    `}
`;
var StyledTextButtonWithIconInner = styled13.span`
  display: block;
`;
var StyledTextButtonWithIconIcon = styled13.span`
  display: block;
  color: ${({ color: color2 }) => color2 || "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize || "middle")}
`;
var RebitaTextButtonWithIcon = ({
  text = "KAIKA \u6771\u4EAC by THE SHARE HOTELS",
  icon,
  onClick,
  as = "div",
  href,
  iconDirection = "right",
  style
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return /* @__PURE__ */ jsx(StyledTextButtonWithIconWrapper, { children: /* @__PURE__ */ jsxs(
    StyledTextButtonWithIcon,
    {
      as,
      onClick,
      href,
      direction: iconDirection,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx(StyledTextButtonWithIconInner, { children: /* @__PURE__ */ jsx(
          VerticalRollingText,
          {
            enableHover: isHover,
            style: {
              fontSize: style?.fontSize,
              color: style?.color
            },
            children: text
          }
        ) }),
        /* @__PURE__ */ jsx(
          StyledTextButtonWithIconIcon,
          {
            iconSize: style?.iconSize,
            color: style?.color,
            children: /* @__PURE__ */ jsx(Fragment, { children: icon })
          }
        )
      ]
    }
  ) });
};
var StyledToggleWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["backgroundColor", "dotColor", "lineColor", "isOpen"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggleInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["size", "backgroundColor"].includes(prop)
})`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  border-radius: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#000"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;
var StyledToggleDotWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop)
})`
  display: ${({ isOpen }) => isOpen ? "none" : "flex"};
  align-items: center;
  justify-content: center;
`;
var StyledToggleDot = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["dotColor"].includes(prop)
})`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  display: block;
  background-color: ${({ dotColor }) => dotColor || "#fff"};

  &:nth-child(2) {
    margin: 0 ${({ theme }) => theme.size.em(2)};
  }
`;
var StyledToggleCloseWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop)
})`
  display: ${({ isOpen }) => isOpen ? "block" : "none"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.size.em(16)};
  height: ${({ theme }) => theme.size.em(16)};
`;
var StyledToggleLineWrapper = styled13.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledToggleLine = styled13.span.withConfig({
  shouldForwardProp: (prop) => !["lineColor"].includes(prop)
})`
  width: 100%;
  height: ${({ theme }) => theme.size.em(2)};
  display: block;
  background-color: ${({ lineColor }) => lineColor || "#fff"};
  transform-origin: center center;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: ${({ theme }) => theme.size.em(2)};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
var RebitaToggle = ({
  size = "middle",
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx(
    StyledToggleWrapper,
    {
      backgroundColor: style?.backgroundColor,
      dotColor: style?.dotColor,
      lineColor: style?.lineColor,
      isOpen,
      children: /* @__PURE__ */ jsxs(
        StyledToggleInner,
        {
          size,
          backgroundColor: style?.backgroundColor,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsxs(StyledToggleDotWrapper, { isOpen, children: [
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: style?.dotColor }),
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: style?.dotColor }),
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: style?.dotColor })
            ] }),
            /* @__PURE__ */ jsx(StyledToggleCloseWrapper, { isOpen, children: /* @__PURE__ */ jsxs(StyledToggleLineWrapper, { children: [
              /* @__PURE__ */ jsx(StyledToggleLine, { lineColor: style?.lineColor }),
              /* @__PURE__ */ jsx(StyledToggleLine, { lineColor: style?.lineColor })
            ] }) })
          ]
        }
      )
    }
  );
};
var useAccordion = ({ animation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;
    gsap$1.to(content, {
      height: isOpen ? 0 : "auto",
      duration: animation?.duration ?? 0.3,
      ease: animation?.easing ?? "power2.inOut"
    });
    gsap$1.to(icon, {
      rotate: isOpen ? 0 : 180,
      duration: animation?.duration ?? 0.1,
      ease: animation?.easing ?? "power2.inOut"
    });
  }, [isOpen, animation]);
  return {
    contentRef,
    iconRef,
    handleClick
  };
};
var StyledAccordionWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion = styled13.div`
  position: relative;
`;
var StyledAccordionHeader = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor"
})`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;
var StyledAccordionHeaderInner = styled13.div`
  position: relative;
`;
var StyledAccordionTitleWrapper = styled13.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon = styled13.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper = styled13.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
`;
var StyledAccordionContentText = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;
var Accordion001 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper, { children: /* @__PURE__ */ jsxs(StyledAccordion, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader,
      {
        borderColor: style?.borderColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner, { children: [
          /* @__PURE__ */ jsx(StyledAccordionTitleWrapper, { children: /* @__PURE__ */ jsx(StyledAccordionTitle, { color: style?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon,
            {
              ref: iconRef,
              color: style?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper, { ref: contentRef, children: /* @__PURE__ */ jsx(StyledAccordionContent, { children: /* @__PURE__ */ jsx(StyledAccordionContentText, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};
var StyledAccordionWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
var StyledAccordionHeader2 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
`;
var StyledAccordionHeaderInner2 = styled13.div`
  position: relative;
`;
var StyledAccordionTitleWrapper2 = styled13.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle2 = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon2 = styled13.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper2 = styled13.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent2 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
`;
var StyledAccordionContentText2 = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;
var Accordion002 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper2, { children: /* @__PURE__ */ jsxs(StyledAccordion2, { backgroundColor: style?.backgroundColor ?? "#fff", children: [
    /* @__PURE__ */ jsx(StyledAccordionHeader2, { onClick: handleClick, children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner2, { children: [
      /* @__PURE__ */ jsx(StyledAccordionTitleWrapper2, { children: /* @__PURE__ */ jsx(StyledAccordionTitle2, { color: style?.header?.color ?? "#000", children: headerContent }) }),
      /* @__PURE__ */ jsx(
        StyledAccordionIcon2,
        {
          ref: iconRef,
          color: style?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper2, { ref: contentRef, children: /* @__PURE__ */ jsx(StyledAccordionContent2, { children: /* @__PURE__ */ jsx(StyledAccordionContentText2, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};
var StyledAccordionWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion3 = styled13.div`
  position: relative;
`;
var StyledAccordionHeader3 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "barColor"
})`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)} ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(20)};
  cursor: pointer;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ theme }) => theme.size.em(5)};
    height: 100%;
    background-color: ${({ barColor }) => barColor};
  }
`;
var StyledAccordionHeaderInner3 = styled13.div`
  position: relative;
`;
var StyledAccordionTitleWrapper3 = styled13.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle3 = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon3 = styled13.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper3 = styled13.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent3 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)} ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(20)};
`;
var StyledAccordionContentText3 = styled13.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;
var Accordion003 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper3, { children: /* @__PURE__ */ jsxs(StyledAccordion3, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader3,
      {
        backgroundColor: style?.header?.backgroundColor ?? "#fff",
        barColor: style?.header?.barColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner3, { children: [
          /* @__PURE__ */ jsx(StyledAccordionTitleWrapper3, { children: /* @__PURE__ */ jsx(StyledAccordionTitle3, { color: style?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon3,
            {
              ref: iconRef,
              color: style?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper3, { ref: contentRef, children: /* @__PURE__ */ jsx(StyledAccordionContent3, { children: /* @__PURE__ */ jsx(StyledAccordionContentText3, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};
var StyledAccordionWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion4 = styled13.div`
  position: relative;
`;
var StyledAccordionHeader4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor"
})`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;
var StyledAccordionHeaderInner4 = styled13.div`
  position: relative;
`;
var StyledAccordionTitleWrapper4 = styled13.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionTitle4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionText = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ textColor }) => textColor};
`;
var StyledAccordionIcon4 = styled13.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper4 = styled13.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent4 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  display: flex;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionContentTitle = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionContentText4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ textColor }) => textColor};
`;
var Accordion004 = ({
  header,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper4, { children: /* @__PURE__ */ jsxs(StyledAccordion4, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader4,
      {
        borderColor: style?.borderColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner4, { children: [
          /* @__PURE__ */ jsxs(StyledAccordionTitleWrapper4, { children: [
            /* @__PURE__ */ jsx(
              StyledAccordionTitle4,
              {
                titleColor: style?.header?.titleColor ?? "#f10707",
                children: header.title
              }
            ),
            /* @__PURE__ */ jsx(
              StyledAccordionText,
              {
                textColor: style?.header?.textColor ?? "#000",
                children: header.text
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon4,
            {
              ref: iconRef,
              color: style?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper4, { ref: contentRef, children: /* @__PURE__ */ jsxs(StyledAccordionContent4, { children: [
      /* @__PURE__ */ jsx(
        StyledAccordionContentTitle,
        {
          titleColor: style?.content?.titleColor ?? "#000",
          children: content.title
        }
      ),
      /* @__PURE__ */ jsx(
        StyledAccordionContentText4,
        {
          textColor: style?.content?.textColor ?? "#000",
          children: content.text
        }
      )
    ] }) })
  ] }) });
};
var StyledAccordionWrapper5 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`;
var StyledAccordionHeader5 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
  position: relative;
`;
var StyledAccordionHeaderInner5 = styled13.div`
  position: relative;
`;
var StyledAccordionTitleWrapper5 = styled13.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionTitle5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionText2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ textColor }) => textColor};
`;
var StyledAccordionIcon5 = styled13.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper5 = styled13.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent5 = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  display: flex;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionContentTitle2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionContentText5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ textColor }) => textColor};
`;
var Accordion005 = ({
  header,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper5, { children: /* @__PURE__ */ jsxs(StyledAccordion5, { backgroundColor: style?.backgroundColor ?? "#000", children: [
    /* @__PURE__ */ jsx(StyledAccordionHeader5, { onClick: handleClick, children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner5, { children: [
      /* @__PURE__ */ jsxs(StyledAccordionTitleWrapper5, { children: [
        /* @__PURE__ */ jsx(
          StyledAccordionTitle5,
          {
            titleColor: style?.header?.titleColor ?? "#f10707",
            children: header.title ?? "Q"
          }
        ),
        /* @__PURE__ */ jsx(
          StyledAccordionText2,
          {
            textColor: style?.header?.textColor ?? "#000",
            children: header.text
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        StyledAccordionIcon5,
        {
          ref: iconRef,
          color: style?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper5, { ref: contentRef, children: /* @__PURE__ */ jsxs(StyledAccordionContent5, { children: [
      /* @__PURE__ */ jsx(
        StyledAccordionContentTitle2,
        {
          titleColor: style?.content?.titleColor ?? "#000",
          children: content.title ?? "A"
        }
      ),
      /* @__PURE__ */ jsx(
        StyledAccordionContentText5,
        {
          textColor: style?.content?.textColor ?? "#000",
          children: content.text
        }
      )
    ] }) })
  ] }) });
};
var StyledBalloonWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBalloon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "type"
})`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ theme }) => theme.size.em(8)};

  ${({ type }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 0;
        `;
    case "002":
      return css`
          border-radius: ${({ theme }) => theme.size.em(8)};
        `;
  }
}}
`;
var StyledBalloonContent = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;
var StyledBalloonArrow = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "arrowPosition" && prop !== "backgroundColor"
})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ arrowPosition, backgroundColor }) => {
  switch (arrowPosition) {
    case "bottom":
      return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: ${backgroundColor} transparent transparent transparent;
        `;
    case "top":
      return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent ${backgroundColor};
        `;
    case "left":
      return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: transparent ${backgroundColor} transparent transparent;
        `;
    case "right":
      return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent transparent ${backgroundColor};
        `;
  }
}}
`;
var Balloon001 = ({
  type = "001",
  children,
  style,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx(StyledBalloonWrapper, { children: /* @__PURE__ */ jsxs(
    StyledBalloon,
    {
      type,
      backgroundColor: style?.backgroundColor ?? "#ccc",
      children: [
        /* @__PURE__ */ jsx(
          StyledBalloonContent,
          {
            fontSize: style?.fontSize ?? 16,
            color: style?.color ?? "#000",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          StyledBalloonArrow,
          {
            arrowPosition: arrowPosition ?? "bottom",
            backgroundColor: style?.backgroundColor ?? "#ccc"
          }
        )
      ]
    }
  ) });
};
var StyledBalloonWrapper2 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBalloon2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "type" && prop !== "borderColor" && prop !== "borderWidth"
})`
  max-width: 100%;
  width: fit-content;
  position: relative;
  display: block;
  word-break: break-all;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ theme, borderWidth }) => theme.size.em(borderWidth)} solid ${({ borderColor }) => borderColor};
  padding: ${({ theme }) => theme.size.em(8)};

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 1;
  }

  &::after {
    background-color: ${({ borderColor }) => borderColor};
    z-index: 0;
  }

  ${({ type }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 0;
        `;
    case "002":
      return css`
          border-radius: ${({ theme }) => theme.size.em(8)};
        `;
  }
}}

  ${({ arrowPosition, borderWidth }) => {
  switch (arrowPosition) {
    case "bottom":
      return css`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            bottom: ${({ theme }) => theme.size.em(-15)};
            width: ${({ theme }) => theme.size.em(30)};
            height: ${({ theme }) => theme.size.em(15)};
            clip-path: polygon(0 0, 100% 0, 50% 100%);
          }

          &::before {
            bottom: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
    case "top":
      return css`
          &::before,
          &::after {
            left: 50%;
            transform: translateX(-50%);
            top: ${({ theme }) => theme.size.em(-15)};
            width: ${({ theme }) => theme.size.em(30)};
            height: ${({ theme }) => theme.size.em(15)};
            clip-path: polygon(50% 0, 0 100%, 100% 100%);
          }

          &::before {
            top: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
    case "left":
      return css`
          &::before,
          &::after {
            left: ${({ theme }) => theme.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({ theme }) => theme.size.em(15)};
            height: ${({ theme }) => theme.size.em(30)};
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
          }

          &::before {
            left: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
    case "right":
      return css`
          &::before,
          &::after {
            right: ${({ theme }) => theme.size.em(-15)};
            transform: translateY(-50%);
            top: 50%;
            width: ${({ theme }) => theme.size.em(15)};
            height: ${({ theme }) => theme.size.em(30)};
            clip-path: polygon(0 0, 100% 50%, 0 100%);
          }

          &::before {
            right: ${({ theme }) => theme.size.em(-15 + borderWidth)};
          }
        `;
  }
}}
`;
var StyledBalloonContent2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;
var Balloon002 = ({
  type = "001",
  children,
  style,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx(StyledBalloonWrapper2, { children: /* @__PURE__ */ jsx(
    StyledBalloon2,
    {
      type,
      borderColor: style?.borderColor ?? "#000",
      borderWidth: style?.borderWidth ?? 1,
      arrowPosition: arrowPosition ?? "bottom",
      backgroundColor: style?.backgroundColor ?? "#fff",
      children: /* @__PURE__ */ jsx(
        StyledBalloonContent2,
        {
          fontSize: style?.fontSize ?? 16,
          color: style?.color ?? "#000",
          children
        }
      )
    }
  ) });
};
var StyledBreadcrumbsWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBreadcrumbs = styled13.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledBreadcrumbsItem = styled13.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledBreadcrumbsItemText = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;
var StyledBreadcrumbsItemLink = styled13.a.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "duration" && prop !== "easing" && prop !== "hoverColor"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
  transition: color ${({ duration }) => duration}s ${({ theme, easing: easing2 }) => theme.animation.easing[easing2]};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
var StyledBreadcrumbsItemIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
`;
var Breadcrumbs = ({ items, style }) => {
  return /* @__PURE__ */ jsx(StyledBreadcrumbsWrapper, { children: /* @__PURE__ */ jsx(StyledBreadcrumbs, { children: items.map((item, index) => /* @__PURE__ */ jsxs(StyledBreadcrumbsItem, { children: [
    item.link ? /* @__PURE__ */ jsx(
      StyledBreadcrumbsItemLink,
      {
        href: item.link.href,
        target: item.link.target,
        duration: style?.duration ?? 0.3,
        easing: style?.easing ?? "easeInOutSine",
        fontSize: style?.fontSize ?? 16,
        color: style?.color ?? "#000",
        hoverColor: style?.hoverColor ?? "#ccc",
        children: item.text
      }
    ) : /* @__PURE__ */ jsx(
      StyledBreadcrumbsItemText,
      {
        fontSize: style?.fontSize ?? 16,
        color: style?.color ?? "#000",
        children: item.text
      }
    ),
    index !== items.length - 1 && /* @__PURE__ */ jsx(StyledBreadcrumbsItemIcon, { color: style?.iconColor ?? "#000", children: /* @__PURE__ */ jsx(Svg004, {}) })
  ] }, item.text)) }) });
};
var StyledButtonWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledButton = styled13.button.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "animation" && prop !== "size" && prop !== "disabledBackgroundColor" && prop !== "disabledBorderColor" && prop !== "paddingTop" && prop !== "paddingRight" && prop !== "paddingBottom" && prop !== "paddingLeft"
})`
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ borderColor }) => borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 0;
  }

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`border-radius: ${theme.size.em(30)};`;
    case "002":
      return css`border-radius: ${theme.size.em(8)};`;
    default:
      return css`border-radius: 0;`;
  }
}}

  ${({ size, paddingTop, paddingRight, paddingBottom, paddingLeft, theme }) => {
  switch (size) {
    case "small":
      return css`padding: ${theme.size.em(paddingTop ?? 7)} ${theme.size.em(paddingRight ?? 13)} ${theme.size.em(paddingBottom ?? 7)} ${theme.size.em(paddingLeft ?? 13)};`;
    case "middle":
      return css`padding: ${theme.size.em(paddingTop ?? 15)} ${theme.size.em(paddingRight ?? 28)} ${theme.size.em(paddingBottom ?? 15)} ${theme.size.em(paddingLeft ?? 28)};`;
    default:
      return css`padding: ${theme.size.em(paddingTop ?? 25)} ${theme.size.em(paddingRight ?? 45)} ${theme.size.em(paddingBottom ?? 25)} ${theme.size.em(paddingLeft ?? 45)};`;
  }
}}

  ${({ animation, theme }) => {
  switch (animation?.type ?? "001") {
    case "001":
      return css`
          &::after {
            transition: background-color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${animation?.backgroundColor ?? "#000"};
            }
          }
        `;
    case "002":
      return css`
          &::after {
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            background-color: ${animation?.backgroundColor ?? "#fff"};
          }

          ${StyledText} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              transform: scaleX(1);
              transform-origin: bottom left;
            }
          }
        `;
  }
}}

  ${({
  disabled,
  disabledBackgroundColor,
  backgroundColor,
  disabledBorderColor,
  borderColor
}) => disabled && css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${disabledBackgroundColor ?? `${hexToRgb(backgroundColor)}, 0.5`};
    border-color: ${disabledBorderColor ?? `${hexToRgb(borderColor)}, 0.5`};
  `}
`;
var StyledText = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color" && prop !== "fontWeight" && prop !== "disabled" && prop !== "disabledColor" && prop !== "fontSize"
})`
  ${({ size, fontSize, theme }) => {
  switch (size) {
    case "small":
      return css`font-size: ${theme.size.em(fontSize ?? 12)};`;
    case "middle":
      return css`font-size: ${theme.size.em(fontSize ?? 16)};`;
    default:
      return css`font-size: ${theme.size.em(fontSize ?? 18)};`;
  }
}}

  display: block;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color: color2 }) => color2};
  position: relative;
  z-index: 1;

  ${({ disabled, disabledColor, color: color2 }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    color: ${disabledColor ?? `${hexToRgb(color2)}, 0.5`};
  `}
`;
var Button001 = ({
  type = "001",
  size = "middle",
  as = "button",
  disabled,
  animation,
  onClick,
  children,
  href,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledButtonWrapper, { children: /* @__PURE__ */ jsx(
    StyledButton,
    {
      as,
      href,
      type,
      size,
      onClick,
      animation,
      backgroundColor: style?.backgroundColor ?? "#fff",
      borderColor: style?.borderColor ?? "#000",
      paddingTop: style?.paddingTop,
      paddingRight: style?.paddingRight,
      paddingBottom: style?.paddingBottom,
      paddingLeft: style?.paddingLeft,
      disabled: !!disabled,
      disabledBackgroundColor: style?.disabledBackgroundColor,
      disabledBorderColor: style?.disabledBorderColor,
      children: /* @__PURE__ */ jsx(
        StyledText,
        {
          size,
          color: style?.color ?? "#000",
          fontWeight: style?.fontWeight ?? 700,
          disabled: !!disabled,
          disabledColor: style?.disabledColor,
          fontSize: style?.fontSize,
          children
        }
      )
    }
  ) });
};
var ArrowHide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;
var ArrowShow = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;
var StyledButtonWrapper2 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
  width: 100%;
`;
var StyledButton2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "animation" && prop !== "size" && prop !== "iconSize" && prop !== "fontSize" && prop !== "iconDirection" && prop !== "isHover" && prop !== "disabledBackgroundColor" && prop !== "disabledBorderColor" && prop !== "paddingTop" && prop !== "paddingRight" && prop !== "paddingBottom" && prop !== "paddingLeft"
})`
  width: 100%;
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ borderColor }) => borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    z-index: 0;
  }

  ${({ type, theme }) => {
  switch (type) {
    case "001":
    case "004":
    case "007":
      return css`border-radius: ${theme.size.em(30)};`;
    case "002":
    case "005":
    case "008":
      return css`border-radius: ${theme.size.em(8)};`;
    default:
      return css`border-radius: 0;`;
  }
}}

  ${({ type, iconDirection, theme }) => {
  switch (type) {
    case "001":
    case "002":
    case "003":
      return css`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${theme.size.em(8)};
          `;
    case "004":
    case "005":
    case "006":
      return css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;
    case "007":
    case "008":
    case "009":
      return css`
            text-align: center;

            ${StyledText2} {
              padding: 0 ${theme.size.em(14)};
            }

            ${StyledIconWrapper} {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 1;

              ${iconDirection === "left" && css`
                  left: ${theme.size.em(24)};
                `}

              ${iconDirection === "right" && css`
                  right: ${theme.size.em(24)};
                `}
            }
          `;
    default:
      return css`
          display: flex;
          align-items: center;
          justify-content: center;
          gap: ${theme.size.em(8)};
        `;
  }
}}

  ${({ iconDirection }) => {
  switch (iconDirection) {
    case "left":
      return css`
          flex-direction: row-reverse;
        `;
    case "right":
      return css`
          flex-direction: row;
        `;
  }
}}

  ${({
  size,
  iconSize,
  fontSize,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  theme
}) => {
  switch (size) {
    case "small":
      return css`
          padding: ${theme.size.em(paddingTop ?? 7)} ${theme.size.em(paddingRight ?? 13)} ${theme.size.em(paddingBottom ?? 7)} ${theme.size.em(paddingLeft ?? 13)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.small)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.small)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(12)};
          }
        `;
    case "middle":
      return css`
          padding: ${theme.size.em(paddingTop ?? 15)} ${theme.size.em(paddingRight ?? 28)} ${theme.size.em(paddingBottom ?? 15)} ${theme.size.em(paddingLeft ?? 28)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.middle)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.middle)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(fontSize ?? 16)};
          }
        `;
    case "large":
      return css`
          padding: ${theme.size.em(paddingTop ?? 25)} ${theme.size.em(paddingRight ?? 45)} ${theme.size.em(paddingBottom ?? 25)} ${theme.size.em(paddingLeft ?? 45)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(iconSize ?? theme.icon.size.large)};
            height: ${theme.size.em(iconSize ?? theme.icon.size.large)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(fontSize ?? 18)};
          }
        `;
    default:
      return css`
          padding: ${theme.size.em(paddingTop ?? 25)} ${theme.size.em(paddingRight ?? 45)} ${theme.size.em(paddingBottom ?? 25)} ${theme.size.em(paddingLeft ?? 45)};
        `;
  }
}}

  ${({ animation, theme, isHover }) => {
  switch (animation?.type ?? "001") {
    case "001":
      return css`
          &::after {
            transition: background-color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText2} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledIcon} {
            transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText2} {
              color: ${animation?.textColor ?? "#fff"};
            }

            ${StyledIcon} {
              color: ${animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${animation?.backgroundColor ?? "#000"};
            }
          }
        `;
    case "002": {
      return css`
          ${StyledIcon}:nth-child(1) {
            ${isHover === true && css`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${isHover === false && css`
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }

          ${StyledIcon}:nth-child(2) {
            ${isHover === true && css`  
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${isHover === false && css`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }
        `;
    }
    case "003": {
      return css`
          ${StyledIcon}:nth-child(1) {
            transform: translateX(-100%);
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          ${StyledIcon}:nth-child(2) {
            transform: translateX(0);
            transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledIcon}:nth-child(1) {
              transform: translateX(0);
            }

            ${StyledIcon}:nth-child(2) {
              transform: translateX(100%);
            }
          }
        `;
    }
    case "004": {
      return css`
            &::after {
              transform: scaleX(0);
              transform-origin: right bottom;
              transition: transform ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
              background-color: ${animation?.backgroundColor ?? "#fff"};
            }

            ${StyledText2} {
              transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            }

            ${StyledIcon} {
              transition: color ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]};
            }

            &:hover {
              ${StyledText2} {
                color: ${animation?.textColor ?? "#fff"};
              }

              ${StyledIcon} {
                color: ${animation?.textColor ?? "#fff"};
              }

              &::after {
                transform: scaleX(1);
                transform-origin: left bottom;
              }
            }
          `;
    }
  }
}}

  ${({
  disabled,
  disabledBackgroundColor,
  backgroundColor,
  disabledBorderColor,
  borderColor
}) => disabled && css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${disabledBackgroundColor ?? `rgba(${hexToRgb(backgroundColor)}, 0.5)`};
    border-color: ${disabledBorderColor ?? `rgba(${hexToRgb(borderColor)}, 0.5)`};
  `}
`;
var StyledIconWrapper = styled13.span`
  display: block;
`;
var StyledIconInner = styled13.span`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: block;
`;
var StyledIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color" && prop !== "disabled" && prop !== "disabledColor"
})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ color: color2 }) => color2};

  &:nth-child(1) {
    transform: translateX(0);
  }

  &:nth-child(2) {
    transform: translateX(100%);
  }

  ${({ disabled, disabledColor, color: color2 }) => disabled && css`
    color: ${disabledColor ?? `rgba(${hexToRgb(color2)}, 0.5)`};
  `}
`;
var StyledText2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color" && prop !== "fontWeight" && prop !== "disabled" && prop !== "disabledColor"
})`
  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css`font-size: ${theme.size.em(12)};`;
    case "middle":
      return css`font-size: ${theme.size.em(16)};`;
    default:
      return css`font-size: ${theme.size.em(18)};`;
  }
}}

  display: block;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color: color2 }) => color2};
  position: relative;
  z-index: 1;

  ${({ disabled, disabledColor, color: color2 }) => disabled && css`
    color: ${disabledColor ?? `rgba(${hexToRgb(color2)}, 0.5)`};
  `}
`;
var Button002 = ({
  as = "button",
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  style,
  disabled,
  iconDirection = "right",
  icon,
  href
}) => {
  const [isHover, setIsHover] = useState(null);
  return /* @__PURE__ */ jsx(StyledButtonWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledButton2,
    {
      as,
      href,
      type,
      size,
      onClick,
      animation,
      backgroundColor: style?.backgroundColor ?? "#fff",
      borderColor: style?.borderColor ?? "#000",
      iconDirection,
      isHover,
      disabled: !!disabled,
      disabledBackgroundColor: style?.disabledBackgroundColor,
      disabledBorderColor: style?.disabledBorderColor,
      paddingTop: style?.paddingTop,
      paddingRight: style?.paddingRight,
      paddingBottom: style?.paddingBottom,
      paddingLeft: style?.paddingLeft,
      iconSize: style?.iconSize,
      fontSize: style?.fontSize,
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
      children: [
        /* @__PURE__ */ jsx(
          StyledText2,
          {
            size,
            color: style?.color ?? "#000",
            fontWeight: style?.fontWeight ?? 700,
            disabled: !!disabled,
            disabledColor: style?.disabledColor,
            children
          }
        ),
        /* @__PURE__ */ jsx(StyledIconWrapper, { children: /* @__PURE__ */ jsxs(StyledIconInner, { children: [
          /* @__PURE__ */ jsx(
            StyledIcon,
            {
              color: style?.color ?? "#000",
              disabled: !!disabled,
              disabledColor: style?.disabledColor,
              children: icon
            }
          ),
          /* @__PURE__ */ jsx(
            StyledIcon,
            {
              color: style?.color ?? "#000",
              disabled: !!disabled,
              disabledColor: style?.disabledColor,
              children: icon
            }
          )
        ] }) })
      ]
    }
  ) });
};
var StyledCheckBoxWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledCheckBox = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;
  
  
  ${({ size, theme }) => theme.icon.size.style(size)}
`;
var StyledCheckBoxBackground = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "borderColor" && prop !== "type"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  z-index: 0;
  box-sizing: border-box;

  ${({ type }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 0;
        `;
    case "002":
      return css`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    case "003":
      return css`
          border-radius: 50%;
        `;
    default:
      return css`
          border-radius: 0;
        `;
  }
}}
`;
var StyledCheckBoxCheckmark = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "markColor"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  color: ${({ markColor }) => markColor};

  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
        `;
    case "middle":
      return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;
    default:
      return css`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;
  }
}}
`;
var StyledCheckBoxInput = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "checked" && prop !== "checkedBackgroundColor"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  

  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark} {
    display: block;
  }
`;
var CheckBox001 = ({ style, id: id2, type, size }) => {
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ jsx(StyledCheckBoxWrapper, { children: /* @__PURE__ */ jsxs(StyledCheckBox, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCheckBoxInput,
      {
        id: id2,
        name: id2,
        type: "checkbox",
        checked,
        checkedBackgroundColor: style?.checkedBackgroundColor ?? "#000",
        onClick: () => setChecked(!checked)
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxCheckmark,
      {
        size,
        markColor: style?.markColor ?? "#000",
        children: /* @__PURE__ */ jsx(Svg031, {})
      }
    )
  ] }) });
};
var StyledCheckBoxWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledCheckBox2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;
  
  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
    case "middle":
      return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    default:
      return css`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
  }
}}
`;
var StyledCheckBoxBackground2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 0;
  box-sizing: border-box;
  border-radius: 50%;
`;
var StyledCheckBoxCheckmark2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "markColor"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  border-radius: 50%;
  background-color: ${({ markColor }) => markColor};

  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          width: ${({ theme }) => theme.size.em(10)};
          height: ${({ theme }) => theme.size.em(10)};
        `;
    case "middle":
      return css`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
    default:
      return css`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
  }
}}
`;
var StyledCheckBoxInput2 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "checked" && prop !== "checkedBackgroundColor"
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  

  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground2} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark2} {
    display: block;
  }
`;
var CheckBox002 = ({ style, id: id2, size }) => {
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ jsx(StyledCheckBoxWrapper2, { children: /* @__PURE__ */ jsxs(StyledCheckBox2, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCheckBoxInput2,
      {
        id: id2,
        name: id2,
        type: "checkbox",
        checked,
        checkedBackgroundColor: style?.checkedBackgroundColor ?? "#000",
        onClick: () => setChecked(!checked)
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxBackground2,
      {
        backgroundColor: style?.backgroundColor ?? "#fff"
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxCheckmark2,
      {
        markColor: style?.markColor ?? "#000",
        size
      }
    )
  ] }) });
};
function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return useMemo(
    () => (node) => {
      refs.forEach((ref) => ref(node));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
  elementString === "[object global]";
}
function isNode(node) {
  return "nodeType" in node;
}
function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;
  if (!target) {
    return window;
  }
  if (isWindow(target)) {
    return target;
  }
  if (!isNode(target)) {
    return window;
  }
  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}
function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }
  return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
  if (!target) {
    return document;
  }
  if (isWindow(target)) {
    return target.document;
  }
  if (!isNode(target)) {
    return document;
  }
  if (isDocument(target)) {
    return target;
  }
  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }
  return document;
}
var useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
function useEvent(handler) {
  const handlerRef = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}
function useInterval() {
  const intervalRef = useRef(null);
  const set = useCallback((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}
function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }
  const valueRef = useRef(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}
function useLazyMemo(callback, dependencies) {
  const valueRef = useRef();
  return useMemo(
    () => {
      const newValue = callback(valueRef.current);
      valueRef.current = newValue;
      return newValue;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...dependencies]
  );
}
function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = useRef(null);
  const setNodeRef = useCallback(
    (element) => {
      if (element !== node.current) {
        onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
      }
      node.current = element;
    },
    //eslint-disable-next-line
    []
  );
  return [node, setNodeRef];
}
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var ids = {};
function useUniqueId(prefix, value) {
  return useMemo(() => {
    if (value) {
      return value;
    }
    const id2 = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id2;
    return prefix + "-" + id2;
  }, [prefix, value]);
}
function createAdjustmentFn(modifier) {
  return function(object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);
      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];
        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }
      return accumulator;
    }, {
      ...object
    });
  };
}
var add = /* @__PURE__ */ createAdjustmentFn(1);
var subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
  return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }
  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
  if (!event) {
    return false;
  }
  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}
function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }
  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return null;
}
var CSS = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }
  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }
      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
    }
  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing: easing2
      } = _ref;
      return property + " " + duration + "ms " + easing2;
    }
  }
});
var SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }
  return element.querySelector(SELECTOR);
}
var hiddenStyles = {
  display: "none"
};
function HiddenText(_ref) {
  let {
    id: id2,
    value
  } = _ref;
  return React4.createElement("div", {
    id: id2,
    style: hiddenStyles
  }, value);
}
function LiveRegion(_ref) {
  let {
    id: id2,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  const visuallyHidden = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return React4.createElement("div", {
    id: id2,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}
function useAnnouncement() {
  const [announcement, setAnnouncement] = useState("");
  const announce = useCallback((value) => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}

// ../../node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@dnd-kit/core/dist/core.esm.js
var DndMonitorContext = /* @__PURE__ */ createContext(null);
function useDndMonitor(listener) {
  const registerListener = useContext(DndMonitorContext);
  useEffect(() => {
    if (!registerListener) {
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    }
    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}
function useDndMonitorProvider() {
  const [listeners] = useState(() => /* @__PURE__ */ new Set());
  const registerListener = useCallback((listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = useCallback((_ref) => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach((listener) => {
      var _listener$type;
      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}
var defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
var defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },
  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;
    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }
    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },
  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;
    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }
    return "Draggable item " + active.id + " was dropped.";
  },
  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }
};
function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = useUniqueId("DndLiveRegion");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useDndMonitor(useMemo(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },
    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;
      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },
    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },
    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },
    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }
  }), [announce, announcements]));
  if (!mounted) {
    return null;
  }
  const markup = React4.createElement(React4.Fragment, null, React4.createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), React4.createElement(LiveRegion, {
    id: liveRegionId,
    announcement
  }));
  return container ? createPortal(markup, container) : markup;
}
var Action;
(function(Action2) {
  Action2["DragStart"] = "dragStart";
  Action2["DragMove"] = "dragMove";
  Action2["DragEnd"] = "dragEnd";
  Action2["DragCancel"] = "dragCancel";
  Action2["DragOver"] = "dragOver";
  Action2["RegisterDroppable"] = "registerDroppable";
  Action2["SetDroppableDisabled"] = "setDroppableDisabled";
  Action2["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {
}
function useSensor(sensor, options) {
  return useMemo(
    () => ({
      sensor,
      options: options != null ? options : {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sensor, options]
  );
}
function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }
  return useMemo(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...sensors]
  );
}
var defaultCoordinates = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }
  const [firstCollision] = collisions;
  return firstCollision[property] ;
}
function centerOfRectangle(rect, left, top) {
  if (left === void 0) {
    left = rect.left;
  }
  if (top === void 0) {
    top = rect.top;
  }
  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
var closestCenter = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id: id2
    } = droppableContainer;
    const rect = droppableRects.get(id2);
    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
      collisions.push({
        id: id2,
        data: {
          droppableContainer,
          value: distBetween
        }
      });
    }
  }
  return collisions.sort(sortCollisionsAsc);
};
var closestCorners = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id: id2
    } = droppableContainer;
    const rect = droppableRects.get(id2);
    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id: id2,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }
  return collisions.sort(sortCollisionsAsc);
};
function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
}
var rectIntersection = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id: id2
    } = droppableContainer;
    const rect = droppableRects.get(id2);
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id: id2,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
  return {
    ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}
function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((acc, adjustment) => ({
      ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), {
      ...rect
    });
  };
}
var getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(transform) {
  if (transform.startsWith("matrix3d(")) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith("matrix(")) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }
  return null;
}
function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);
  if (!parsedTransform) {
    return rect;
  }
  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}
var defaultOptions = {
  ignoreTransform: false
};
function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  let rect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = getWindow(element).getComputedStyle(element);
    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }
  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}
function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}
function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(node).getComputedStyle(node);
  }
  return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(element).getComputedStyle(element);
  }
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties2 = ["overflow", "overflowX", "overflowY"];
  return properties2.some((property) => {
    const value = computedStyle[property];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}
function getScrollableAncestors(element, limit) {
  const scrollParents = [];
  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }
    if (!node) {
      return scrollParents;
    }
    if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }
    if (!isHTMLElement(node) || isSVGElement(node)) {
      return scrollParents;
    }
    if (scrollParents.includes(node)) {
      return scrollParents;
    }
    const computedStyle = getWindow(element).getComputedStyle(node);
    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }
    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }
    return findScrollableAncestors(node.parentNode);
  }
  if (!element) {
    return scrollParents;
  }
  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
  if (!canUseDOM || !element) {
    return null;
  }
  if (isWindow(element)) {
    return element;
  }
  if (!isNode(element)) {
    return null;
  }
  if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) {
    return window;
  }
  if (isHTMLElement(element)) {
    return element;
  }
  return null;
}
function getScrollXCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollX;
  }
  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollY;
  }
  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
  if (!canUseDOM || !element) {
    return false;
  }
  return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}
var defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;
  if (acceleration === void 0) {
    acceleration = 10;
  }
  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };
  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }
  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }
  return {
    direction,
    speed
  };
}
function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }
  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  if (!element) {
    return;
  }
  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);
  if (!firstScrollableAncestor) {
    return;
  }
  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: "center",
      inline: "center"
    });
  }
}
var properties = [["x", ["left", "right"], getScrollXOffset], ["y", ["top", "bottom"], getScrollYOffset]];
var Rect = class {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = {
      ...rect
    };
    this.width = rect.width;
    this.height = rect.height;
    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }
    Object.defineProperty(this, "rect", {
      enumerable: false
    });
  }
};
var Listeners = class {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach((listener) => {
        var _this$target;
        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };
    this.target = target;
  }
  add(eventName, handler, options) {
    var _this$target2;
    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }
};
function getEventListenerTarget(target) {
  const {
    EventTarget
  } = getWindow(target);
  return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);
  if (typeof measurement === "number") {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }
  if ("x" in measurement && "y" in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }
  if ("x" in measurement) {
    return dx > measurement.x;
  }
  if ("y" in measurement) {
    return dy > measurement.y;
  }
  return false;
}
var EventName;
(function(EventName2) {
  EventName2["Click"] = "click";
  EventName2["DragStart"] = "dragstart";
  EventName2["Keydown"] = "keydown";
  EventName2["ContextMenu"] = "contextmenu";
  EventName2["Resize"] = "resize";
  EventName2["SelectionChange"] = "selectionchange";
  EventName2["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode2) {
  KeyboardCode2["Space"] = "Space";
  KeyboardCode2["Down"] = "ArrowDown";
  KeyboardCode2["Right"] = "ArrowRight";
  KeyboardCode2["Left"] = "ArrowLeft";
  KeyboardCode2["Up"] = "ArrowUp";
  KeyboardCode2["Esc"] = "Escape";
  KeyboardCode2["Enter"] = "Enter";
  KeyboardCode2["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
var defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
var defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;
  switch (event.code) {
    case KeyboardCode.Right:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x + 25
      };
    case KeyboardCode.Left:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x - 25
      };
    case KeyboardCode.Down:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y + 25
      };
    case KeyboardCode.Up:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }
  return void 0;
};
var KeyboardSensor = class {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;
    if (node) {
      scrollIntoViewIfNeeded(node);
    }
    onStart(defaultCoordinates);
  }
  handleKeyDown(event) {
    if (isKeyboardEvent(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = "smooth"
      } = options;
      const {
        code
      } = event;
      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }
      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }
      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;
      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }
      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });
      if (newCoordinates) {
        const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;
        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }
            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }
            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }
            break;
          }
        }
        this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }
  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }
  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }
  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
};
KeyboardSensor.activators = [{
  eventName: "onKeyDown",
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;
    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;
      if (activator && event.target !== activator) {
        return false;
      }
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }
    return false;
  }
}];
function isDistanceConstraint(constraint) {
  return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
  return Boolean(constraint && "delay" in constraint);
}
var AbstractPointerSensor = class {
  constructor(props, events2, listenerTarget) {
    var _getEventCoordinates;
    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }
    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events2;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events2;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    const {
      events: events2,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events2.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events2.end.name, this.handleEnd);
    if (events2.cancel) {
      this.listeners.add(events2.cancel.name, this.handleCancel);
    }
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);
    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }
      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }
      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  handlePending(constraint, offset) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }
  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;
    if (initialCoordinates) {
      this.activated = true;
      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      });
      this.removeTextSelection();
      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }
  handleMove(event) {
    var _getEventCoordinates2;
    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;
    if (!initialCoordinates) {
      return;
    }
    const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = subtract(initialCoordinates, coordinates);
    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }
      this.handlePending(activationConstraint, delta);
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    onMove(coordinates);
  }
  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onEnd();
  }
  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onCancel();
  }
  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }
  removeTextSelection() {
    var _this$document$getSel;
    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }
};
var events = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
var PointerSensor = class extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props;
    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }
};
PointerSensor.activators = [{
  eventName: "onPointerDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var events$1 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
var MouseSensor = class extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }
};
MouseSensor.activators = [{
  eventName: "onMouseDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (event.button === MouseButton.RightClick) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var events$2 = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
var TouchSensor = class extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }
  static setup() {
    window.addEventListener(events$2.move.name, noop2, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop2);
    };
    function noop2() {
    }
  }
};
TouchSensor.activators = [{
  eventName: "onTouchStart",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;
    if (touches.length > 1) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var AutoScrollActivator;
(function(AutoScrollActivator2) {
  AutoScrollActivator2[AutoScrollActivator2["Pointer"] = 0] = "Pointer";
  AutoScrollActivator2[AutoScrollActivator2["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder2) {
  TraversalOrder2[TraversalOrder2["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder2[TraversalOrder2["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = useRef({
    x: 0,
    y: 0
  });
  const scrollDirection = useRef({
    x: 0,
    y: 0
  });
  const rect = useMemo(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;
      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = useRef(null);
  const autoScroll = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = useMemo(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  useEffect(
    () => {
      if (!enabled || !scrollableAncestors.length || !rect) {
        clearAutoScrollInterval();
        return;
      }
      for (const scrollContainer of sortedScrollableAncestors) {
        if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
          continue;
        }
        const index = scrollableAncestors.indexOf(scrollContainer);
        const scrollContainerRect = scrollableAncestorRects[index];
        if (!scrollContainerRect) {
          continue;
        }
        const {
          direction,
          speed
        } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
        for (const axis of ["x", "y"]) {
          if (!scrollIntent[axis][direction[axis]]) {
            speed[axis] = 0;
            direction[axis] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          clearAutoScrollInterval();
          scrollContainerRef.current = scrollContainer;
          setAutoScrollInterval(autoScroll, interval);
          scrollSpeed.current = speed;
          scrollDirection.current = direction;
          return;
        }
      }
      scrollSpeed.current = {
        x: 0,
        y: 0
      };
      scrollDirection.current = {
        x: 0,
        y: 0
      };
      clearAutoScrollInterval();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      acceleration,
      autoScroll,
      canScroll,
      clearAutoScrollInterval,
      enabled,
      interval,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(rect),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(scrollIntent),
      setAutoScrollInterval,
      scrollableAncestors,
      sortedScrollableAncestors,
      scrollableAncestorRects,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(threshold)
    ]
  );
}
var defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};
function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = usePrevious(delta);
  return useLazyMemo((previousIntent) => {
    if (disabled || !previousDelta || !previousIntent) {
      return defaultScrollIntent;
    }
    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    };
    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}
function useCachedNode(draggableNodes, id2) {
  const draggableNode = id2 != null ? draggableNodes.get(id2) : void 0;
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo((cachedNode) => {
    var _ref;
    if (id2 == null) {
      return null;
    }
    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id2]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
  return useMemo(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map((activator) => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy2) {
  MeasuringStrategy2[MeasuringStrategy2["Always"] = 0] = "Always";
  MeasuringStrategy2[MeasuringStrategy2["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy2[MeasuringStrategy2["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency2) {
  MeasuringFrequency2["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
var defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = useState(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = useRef(containers);
  const disabled = isDisabled();
  const disabledRef = useLatestValue(disabled);
  const measureDroppableContainers = useCallback(function(ids2) {
    if (ids2 === void 0) {
      ids2 = [];
    }
    if (disabledRef.current) {
      return;
    }
    setQueue((value) => {
      if (value === null) {
        return ids2;
      }
      return value.concat(ids2.filter((id2) => !value.includes(id2)));
    });
  }, [disabledRef]);
  const timeoutId = useRef(null);
  const droppableRects = useLazyMemo((previousValue) => {
    if (disabled && !dragging) {
      return defaultValue;
    }
    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = /* @__PURE__ */ new Map();
      for (let container of containers) {
        if (!container) {
          continue;
        }
        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          map.set(container.id, container.rect.current);
          continue;
        }
        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;
        if (rect) {
          map.set(container.id, rect);
        }
      }
      return map;
    }
    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  useEffect(() => {
    containersRef.current = containers;
  }, [containers]);
  useEffect(
    () => {
      if (disabled) {
        return;
      }
      measureDroppableContainers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dragging, disabled]
  );
  useEffect(
    () => {
      if (queue && queue.length > 0) {
        setQueue(null);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(queue)]
  );
  useEffect(
    () => {
      if (disabled || typeof frequency !== "number" || timeoutId.current !== null) {
        return;
      }
      timeoutId.current = setTimeout(() => {
        measureDroppableContainers();
        timeoutId.current = null;
      }, frequency);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frequency, disabled, measureDroppableContainers, ...dependencies]
  );
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };
  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;
      case MeasuringStrategy.BeforeDragging:
        return dragging;
      default:
        return !dragging;
    }
  }
}
function useInitialValue(value, computeFn) {
  return useLazyMemo((previousValue) => {
    if (!value) {
      return null;
    }
    if (previousValue) {
      return previousValue;
    }
    return typeof computeFn === "function" ? computeFn(value) : value;
  }, [computeFn, value]);
}
function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}
function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = useEvent(callback);
  const mutationObserver = useMemo(() => {
    if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") {
      return void 0;
    }
    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  useEffect(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}
function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = useEvent(callback);
  const resizeObserver = useMemo(
    () => {
      if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") {
        return void 0;
      }
      const {
        ResizeObserver: ResizeObserver2
      } = window;
      return new ResizeObserver2(handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled]
  );
  useEffect(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}
function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }
  const [rect, setRect] = useState(null);
  function measureRect() {
    setRect((currentRect) => {
      if (!element) {
        return null;
      }
      if (element.isConnected === false) {
        var _ref;
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }
      const newRect = measure(element);
      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }
      return newRect;
    });
  }
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }
      for (const record of records) {
        const {
          type,
          target
        } = record;
        if (type === "childList" && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }
  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  useIsomorphicLayoutEffect(() => {
    measureRect();
    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}
function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}
var defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = useRef(node);
  const ancestors = useLazyMemo((previousValue) => {
    if (!node) {
      return defaultValue$1;
    }
    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }
    return getScrollableAncestors(node);
  }, [node]);
  useEffect(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}
function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = useState(null);
  const prevElements = useRef(elements);
  const handleScroll = useCallback((event) => {
    const scrollingElement = getScrollableElement(event.target);
    if (!scrollingElement) {
      return;
    }
    setScrollCoordinates((scrollCoordinates2) => {
      if (!scrollCoordinates2) {
        return null;
      }
      scrollCoordinates2.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates2);
    });
  }, []);
  useEffect(() => {
    const previousElements = prevElements.current;
    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map((element) => {
        const scrollableElement = getScrollableElement(element);
        if (scrollableElement) {
          scrollableElement.addEventListener("scroll", handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }
        return null;
      }).filter((entry) => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }
    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };
    function cleanup(elements2) {
      elements2.forEach((element) => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener("scroll", handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return useMemo(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }
    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }
  const initialScrollOffsets = useRef(null);
  useEffect(
    () => {
      initialScrollOffsets.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  useEffect(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }
    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
  useEffect(
    () => {
      if (!canUseDOM) {
        return;
      }
      const teardownFns = sensors.map((_ref) => {
        let {
          sensor
        } = _ref;
        return sensor.setup == null ? void 0 : sensor.setup();
      });
      return () => {
        for (const teardown of teardownFns) {
          teardown == null ? void 0 : teardown();
        }
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map((_ref2) => {
      let {
        sensor
      } = _ref2;
      return sensor;
    })
  );
}
function useSyntheticListeners(listeners, id2) {
  return useMemo(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;
      acc[eventName] = (event) => {
        handler(event, id2);
      };
      return acc;
    }, {});
  }, [listeners, id2]);
}
function useWindowRect(element) {
  return useMemo(() => element ? getWindowClientRect(element) : null, [element]);
}
var defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
  const [rects, setRects] = useState(defaultValue$2);
  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }
      return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
    });
  }
  const resizeObserver = useResizeObserver({
    callback: measureRects
  });
  useIsomorphicLayoutEffect(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    measureRects();
    elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  }, [elements]);
  return rects;
}
function getMeasurableNode(node) {
  if (!node) {
    return null;
  }
  if (node.children.length > 1) {
    return node;
  }
  const firstChild = node.children[0];
  return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = useState(null);
  const handleResize = useCallback((entries) => {
    for (const {
      target
    } of entries) {
      if (isHTMLElement(target)) {
        setRect((rect2) => {
          const newRect = measure(target);
          return rect2 ? {
            ...rect2,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = useCallback((element) => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }
    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = useNodeRef(handleNodeChange);
  return useMemo(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}
var defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
var defaultData = {
  current: {}
};
var defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};
var DroppableContainersMap = class extends Map {
  get(id2) {
    var _super$get;
    return id2 != null ? (_super$get = super.get(id2)) != null ? _super$get : void 0 : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((_ref) => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }
  getNodeFor(id2) {
    var _this$get$node$curren, _this$get;
    return (_this$get$node$curren = (_this$get = this.get(id2)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
  }
};
var defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
var defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: noop,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: noop
};
var InternalContext = /* @__PURE__ */ createContext(defaultInternalContext);
var PublicContext = /* @__PURE__ */ createContext(defaultPublicContext);
function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };
    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }
      return {
        ...state,
        draggable: {
          ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };
    case Action.DragEnd:
    case Action.DragCancel:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Action.RegisterDroppable: {
      const {
        element
      } = action;
      const {
        id: id2
      } = element;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id2, element);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.SetDroppableDisabled: {
      const {
        id: id2,
        key,
        disabled
      } = action;
      const element = state.droppable.containers.get(id2);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id2, {
        ...element,
        disabled
      });
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.UnregisterDroppable: {
      const {
        id: id2,
        key
      } = action;
      const element = state.droppable.containers.get(id2);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.delete(id2);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    default: {
      return state;
    }
  }
}
function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = useContext(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active == null ? void 0 : active.id);
  useEffect(() => {
    if (disabled) {
      return;
    }
    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!isKeyboardEvent(previousActivatorEvent)) {
        return;
      }
      if (document.activeElement === previousActivatorEvent.target) {
        return;
      }
      const draggableNode = draggableNodes.get(previousActiveId);
      if (!draggableNode) {
        return;
      }
      const {
        activatorNode,
        node
      } = draggableNode;
      if (!activatorNode.current && !node.current) {
        return;
      }
      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }
          const focusableNode = findFirstFocusableNode(element);
          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}
function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}
function useMeasuringConfiguration(config) {
  return useMemo(
    () => ({
      draggable: {
        ...defaultMeasuringConfiguration.draggable,
        ...config == null ? void 0 : config.draggable
      },
      droppable: {
        ...defaultMeasuringConfiguration.droppable,
        ...config == null ? void 0 : config.droppable
      },
      dragOverlay: {
        ...defaultMeasuringConfiguration.dragOverlay,
        ...config == null ? void 0 : config.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]
  );
}
function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = useRef(false);
  const {
    x,
    y
  } = typeof config === "boolean" ? {
    x: config,
    y: config
  } : config;
  useIsomorphicLayoutEffect(() => {
    const disabled = !x && !y;
    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }
    if (initialized.current || !initialRect) {
      return;
    }
    const node = activeNode == null ? void 0 : activeNode.node.current;
    if (!node || node.isConnected === false) {
      return;
    }
    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);
    if (!x) {
      rectDelta.x = 0;
    }
    if (!y) {
      rectDelta.y = 0;
    }
    initialized.current = true;
    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);
      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}
var ActiveDraggableContext = /* @__PURE__ */ createContext({
  ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;
(function(Status2) {
  Status2[Status2["Uninitialized"] = 0] = "Uninitialized";
  Status2[Status2["Initializing"] = 1] = "Initializing";
  Status2[Status2["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
var DndContext = /* @__PURE__ */ memo(function DndContext2(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
  let {
    id: id2,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = useReducer(reducer, void 0, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = useState(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = useRef({
    initial: null,
    translated: null
  });
  const active = useMemo(() => {
    var _node$data;
    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = useRef(null);
  const [activeSensor, setActiveSensor] = useState(null);
  const [activatorEvent, setActivatorEvent] = useState(null);
  const latestProps = useLatestValue(props, Object.values(props));
  const draggableDescribedById = useUniqueId("DndDescribedBy", id2);
  const enabledDroppableContainers = useMemo(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = useMemo(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = useRef({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  });
  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
  const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors);
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors);
  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, "id");
  const [over, setOver] = useState(null);
  const appliedTranslate = usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = useRef(null);
  const instantiateSensor = useCallback(
    (event, _ref2) => {
      let {
        sensor: Sensor,
        options
      } = _ref2;
      if (activeRef.current == null) {
        return;
      }
      const activeNode2 = draggableNodes.get(activeRef.current);
      if (!activeNode2) {
        return;
      }
      const activatorEvent2 = event.nativeEvent;
      const sensorInstance = new Sensor({
        active: activeRef.current,
        activeNode: activeNode2,
        event: activatorEvent2,
        options,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: sensorContext,
        onAbort(id3) {
          const draggableNode = draggableNodes.get(id3);
          if (!draggableNode) {
            return;
          }
          const {
            onDragAbort
          } = latestProps.current;
          const event2 = {
            id: id3
          };
          onDragAbort == null ? void 0 : onDragAbort(event2);
          dispatchMonitorEvent({
            type: "onDragAbort",
            event: event2
          });
        },
        onPending(id3, constraint, initialCoordinates, offset) {
          const draggableNode = draggableNodes.get(id3);
          if (!draggableNode) {
            return;
          }
          const {
            onDragPending
          } = latestProps.current;
          const event2 = {
            id: id3,
            constraint,
            initialCoordinates,
            offset
          };
          onDragPending == null ? void 0 : onDragPending(event2);
          dispatchMonitorEvent({
            type: "onDragPending",
            event: event2
          });
        },
        onStart(initialCoordinates) {
          const id3 = activeRef.current;
          if (id3 == null) {
            return;
          }
          const draggableNode = draggableNodes.get(id3);
          if (!draggableNode) {
            return;
          }
          const {
            onDragStart
          } = latestProps.current;
          const event2 = {
            activatorEvent: activatorEvent2,
            active: {
              id: id3,
              data: draggableNode.data,
              rect: activeRects
            }
          };
          unstable_batchedUpdates(() => {
            onDragStart == null ? void 0 : onDragStart(event2);
            setStatus(Status.Initializing);
            dispatch({
              type: Action.DragStart,
              initialCoordinates,
              active: id3
            });
            dispatchMonitorEvent({
              type: "onDragStart",
              event: event2
            });
            setActiveSensor(activeSensorRef.current);
            setActivatorEvent(activatorEvent2);
          });
        },
        onMove(coordinates) {
          dispatch({
            type: Action.DragMove,
            coordinates
          });
        },
        onEnd: createHandler(Action.DragEnd),
        onCancel: createHandler(Action.DragCancel)
      });
      activeSensorRef.current = sensorInstance;
      function createHandler(type) {
        return async function handler() {
          const {
            active: active2,
            collisions: collisions2,
            over: over2,
            scrollAdjustedTranslate: scrollAdjustedTranslate2
          } = sensorContext.current;
          let event2 = null;
          if (active2 && scrollAdjustedTranslate2) {
            const {
              cancelDrop
            } = latestProps.current;
            event2 = {
              activatorEvent: activatorEvent2,
              active: active2,
              collisions: collisions2,
              delta: scrollAdjustedTranslate2,
              over: over2
            };
            if (type === Action.DragEnd && typeof cancelDrop === "function") {
              const shouldCancel = await Promise.resolve(cancelDrop(event2));
              if (shouldCancel) {
                type = Action.DragCancel;
              }
            }
          }
          activeRef.current = null;
          unstable_batchedUpdates(() => {
            dispatch({
              type
            });
            setStatus(Status.Uninitialized);
            setOver(null);
            setActiveSensor(null);
            setActivatorEvent(null);
            activeSensorRef.current = null;
            const eventName = type === Action.DragEnd ? "onDragEnd" : "onDragCancel";
            if (event2) {
              const handler2 = latestProps.current[eventName];
              handler2 == null ? void 0 : handler2(event2);
              dispatchMonitorEvent({
                type: eventName,
                event: event2
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes]
  );
  const bindActivatorToSensorInstantiator = useCallback((handler, sensor) => {
    return (event, active2) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active2);
      if (
        // Another sensor is already instantiating
        activeRef.current !== null || // No active draggable
        !activeDraggableNode || // Event has already been captured
        nativeEvent.dndKit || nativeEvent.defaultPrevented
      ) {
        return;
      }
      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);
      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active2;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  useEffect(
    () => {
      const {
        onDragMove
      } = latestProps.current;
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        over: over2
      } = sensorContext.current;
      if (!active2 || !activatorEvent2) {
        return;
      }
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate.x,
          y: scrollAdjustedTranslate.y
        },
        over: over2
      };
      unstable_batchedUpdates(() => {
        onDragMove == null ? void 0 : onDragMove(event);
        dispatchMonitorEvent({
          type: "onDragMove",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]
  );
  useEffect(
    () => {
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        droppableContainers: droppableContainers2,
        scrollAdjustedTranslate: scrollAdjustedTranslate2
      } = sensorContext.current;
      if (!active2 || activeRef.current == null || !activatorEvent2 || !scrollAdjustedTranslate2) {
        return;
      }
      const {
        onDragOver
      } = latestProps.current;
      const overContainer = droppableContainers2.get(overId);
      const over2 = overContainer && overContainer.rect.current ? {
        id: overContainer.id,
        rect: overContainer.rect.current,
        data: overContainer.data,
        disabled: overContainer.disabled
      } : null;
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate2.x,
          y: scrollAdjustedTranslate2.y
        },
        over: over2
      };
      unstable_batchedUpdates(() => {
        setOver(over2);
        onDragOver == null ? void 0 : onDragOver(event);
        dispatchMonitorEvent({
          type: "onDragOver",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [overId]
  );
  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({
    ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = useMemo(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = useMemo(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return React4.createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, React4.createElement(InternalContext.Provider, {
    value: internalContext
  }, React4.createElement(PublicContext.Provider, {
    value: publicContext
  }, React4.createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), React4.createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), React4.createElement(Accessibility, {
    ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));
  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
    if (typeof autoScroll === "object") {
      return {
        ...autoScroll,
        enabled
      };
    }
    return {
      enabled
    };
  }
});
var NullContext = /* @__PURE__ */ createContext(null);
var defaultRole = "button";
var ID_PREFIX = "Draggable";
function useDraggable(_ref) {
  let {
    id: id2,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = useUniqueId(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = useContext(InternalContext);
  const {
    role = defaultRole,
    roleDescription = "draggable",
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id2;
  const transform = useContext(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id2);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(
    () => {
      draggableNodes.set(id2, {
        id: id2,
        key,
        node,
        activatorNode,
        data: dataRef
      });
      return () => {
        const node2 = draggableNodes.get(id2);
        if (node2 && node2.key === key) {
          draggableNodes.delete(id2);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes, id2]
  );
  const memoizedAttributes = useMemo(() => ({
    role,
    tabIndex,
    "aria-disabled": disabled,
    "aria-pressed": isDragging && role === defaultRole ? true : void 0,
    "aria-roledescription": roleDescription,
    "aria-describedby": ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? void 0 : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}
function useDndContext() {
  return useContext(PublicContext);
}
var ID_PREFIX$1 = "Droppable";
var defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id: id2,
    resizeObserverConfig
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = useContext(InternalContext);
  const previous = useRef({
    disabled
  });
  const resizeObserverConnected = useRef(false);
  const rect = useRef(null);
  const callbackId = useRef(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = {
    ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids2 = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id2);
  const handleResize = useCallback(
    () => {
      if (!resizeObserverConnected.current) {
        resizeObserverConnected.current = true;
        return;
      }
      if (callbackId.current != null) {
        clearTimeout(callbackId.current);
      }
      callbackId.current = setTimeout(() => {
        measureDroppableContainers(Array.isArray(ids2.current) ? ids2.current : [ids2.current]);
        callbackId.current = null;
      }, resizeObserverTimeout);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [resizeObserverTimeout]
  );
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = useCallback((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }
    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }
    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = useNodeRef(handleNodeChange);
  const dataRef = useLatestValue(data);
  useEffect(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }
    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  useEffect(
    () => {
      dispatch({
        type: Action.RegisterDroppable,
        element: {
          id: id2,
          key,
          disabled,
          node: nodeRef,
          rect,
          data: dataRef
        }
      });
      return () => dispatch({
        type: Action.UnregisterDroppable,
        key,
        id: id2
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id2]
  );
  useEffect(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id: id2,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id2, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id2,
    node: nodeRef,
    over,
    setNodeRef
  };
}
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}
function getSortedRects(items, rects) {
  return items.reduce((accumulator, id2, index) => {
    const rect = rects.get(id2);
    if (rect) {
      accumulator[index] = rect;
    }
    return accumulator;
  }, Array(items.length));
}
function isValidIndex(index) {
  return index !== null && index >= 0;
}
function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function normalizeDisabled(disabled) {
  if (typeof disabled === "boolean") {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }
  return disabled;
}
var rectSortingStrategy = (_ref) => {
  let {
    rects,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index];
  const newRect = newRects[index];
  if (!newRect || !oldRect) {
    return null;
  }
  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};
var defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
var verticalListSortingStrategy = (_ref) => {
  var _rects$activeIndex;
  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;
  if (!activeNodeRect) {
    return null;
  }
  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];
    if (!overIndexRect) {
      return null;
    }
    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }
  const itemGap = getItemGap$1(rects, index, activeIndex);
  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }
  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }
  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};
function getItemGap$1(clientRects, index, activeIndex) {
  const currentRect = clientRects[index];
  const previousRect = clientRects[index - 1];
  const nextRect = clientRects[index + 1];
  if (!currentRect) {
    return 0;
  }
  if (activeIndex < index) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }
  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}
var ID_PREFIX2 = "Sortable";
var Context = /* @__PURE__ */ React4.createContext({
  activeIndex: -1,
  containerId: ID_PREFIX2,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id: id2,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = useDndContext();
  const containerId = useUniqueId(ID_PREFIX2, id2);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = useMemo(() => userDefinedItems.map((item) => typeof item === "object" && "id" in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = useRef(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  useEffect(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = useMemo(
    () => ({
      activeIndex,
      containerId,
      disabled,
      disableTransforms,
      items,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(items, droppableRects),
      strategy
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]
  );
  return React4.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
var defaultNewIndexGetter = (_ref) => {
  let {
    id: id2,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id2);
};
var defaultAnimateLayoutChanges = (_ref2) => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;
  if (!transition || !wasDragging) {
    return false;
  }
  if (previousItems !== items && index === newIndex) {
    return false;
  }
  if (isSorting) {
    return true;
  }
  return newIndex !== index && containerId === previousContainerId;
};
var defaultTransition = {
  duration: 200,
  easing: "ease"
};
var transitionProperty = "transform";
var disabledTransition = /* @__PURE__ */ CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: "linear"
});
var defaultAttributes = {
  roleDescription: "sortable"
};
function useDerivedTransform(_ref) {
  let {
    disabled,
    index,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = useState(null);
  const previousIndex = useRef(index);
  useIsomorphicLayoutEffect(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;
      if (initial) {
        const current = getClientRect(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };
        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }
    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  useEffect(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}
function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id: id2,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = useContext(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index = items.indexOf(id2);
  const data = useMemo(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const itemsAfterCurrentSortable = useMemo(() => items.slice(items.indexOf(id2)), [items, id2]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id: id2,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = useDraggable({
    id: id2,
    data,
    attributes: {
      ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id: id2,
    items,
    activeIndex,
    overIndex
  }) : index;
  const activeId = active == null ? void 0 : active.id;
  const previous = useRef({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id: id2,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  useEffect(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }
    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }
    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  useEffect(() => {
    if (activeId === previous.current.activeId) {
      return;
    }
    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }
    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };
  function getTransition() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
      itemsHaveChanged && previous.current.newIndex === index
    ) {
      return disabledTransition;
    }
    if (shouldDisplaceDragSource && !isKeyboardEvent(activatorEvent) || !transition) {
      return void 0;
    }
    if (isSorting || shouldAnimateLayoutChanges) {
      return CSS.Transition.toString({
        ...transition,
        property: transitionProperty
      });
    }
    return void 0;
  }
}
function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;
  if (typeof localDisabled === "boolean") {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }
  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}
function hasSortableData(entry) {
  if (!entry) {
    return false;
  }
  const data = entry.data.current;
  if (data && "sortable" in data && typeof data.sortable === "object" && "containerId" in data.sortable && "items" in data.sortable && "index" in data.sortable) {
    return true;
  }
  return false;
}
var directions = [KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];
var sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;
  if (directions.includes(event.code)) {
    event.preventDefault();
    if (!active || !collisionRect) {
      return;
    }
    const filteredContainers = [];
    droppableContainers.getEnabled().forEach((entry) => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }
      const rect = droppableRects.get(entry.id);
      if (!rect) {
        return;
      }
      switch (event.code) {
        case KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }
          break;
        case KeyboardCode.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }
          break;
      }
    });
    const collisions = closestCorners({
      collisionRect,
      droppableRects,
      droppableContainers: filteredContainers});
    let closestId = getFirstCollision(collisions, "id");
    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }
    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;
      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = getScrollableAncestors(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset.x && offset.y ? rectCoordinates : subtract(rectCoordinates, offset);
        return newCoordinates;
      }
    }
  }
  return void 0;
};
function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }
  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}
function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }
  if (!isSameContainer(a, b)) {
    return false;
  }
  return a.data.current.sortable.index < b.data.current.sortable.index;
}
var StyledListWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  width: 100%;
`;
var StyledList = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 0)};
  list-style: none;
  margin: 0;
  padding: 0;
`;
var StyledListItem = styled13.li.withConfig({
  shouldForwardProp: (prop) => prop !== "isDragging"
}).attrs((props) => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px)`,
    transition: `${props.transition}, opacity 0.2s ${props.theme.animation.easing.easeInOutSine}`
  }
}))`
  cursor: grab;
  opacity: ${(props) => props.isDragging ? 0.5 : 1};

  &:active {
    cursor: grabbing;
  }
`;
var SortableItem = ({ id: id2, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: id2 });
  return /* @__PURE__ */ jsx(
    StyledListItem,
    {
      ref: setNodeRef,
      ...attributes,
      ...listeners,
      isDragging,
      x: transform?.x ?? 0,
      y: transform?.y ?? 0,
      transition: transition ?? "none",
      children
    }
  );
};
var DragAndDrop001 = ({
  items,
  style,
  onReorder
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const dependencies = useMemo(
    () => items.map((item) => ({ id: item.id })),
    [items]
  );
  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (active.id !== over?.id) {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);
        onReorder(newItems.map((item) => ({ id: item.id })));
      }
    },
    [dependencies]
  );
  return /* @__PURE__ */ jsx(StyledListWrapper, { children: /* @__PURE__ */ jsx(
    DndContext,
    {
      sensors,
      collisionDetection: closestCenter,
      onDragEnd: handleDragEnd,
      children: /* @__PURE__ */ jsx(
        SortableContext,
        {
          items: items.map((item) => item.id),
          strategy: verticalListSortingStrategy,
          children: /* @__PURE__ */ jsx(StyledList, { as: "ul", gap: style?.gap, children: items.map((item) => /* @__PURE__ */ jsx(SortableItem, { id: item.id, children: item.content }, item.id)) })
        }
      )
    }
  ) });
};
var StyledWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledDetailWrapper = styled13.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  padding-top: ${({ theme }) => theme.size.em(8)};
  opacity: 0;
  transform: translate(-50%, 100%);
  pointer-events: none;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
`;
var StyledDetail = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor" && prop !== "backgroundColor"
})`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  border-radius: ${({ borderRadius, theme }) => theme.size.em(borderRadius ?? 8)};
  z-index: 1;
  transform: translateY(${({ theme }) => theme.size.em(5)});
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  padding: ${({ theme }) => theme.size.em(16)};
  box-sizing: border-box;
  white-space: ${({ nowrap }) => nowrap === true || nowrap === void 0 ? "nowrap" : "normal"};
`;
var StyledContentsWrapper = styled13.div`
  position: relative;

  &:hover {
    ${StyledDetailWrapper} {
      opacity: 1;
      pointer-events: auto;
    }

    ${StyledDetail} {
      transform: translateY(${({ theme }) => theme.size.em(10)});
    }

  }
`;
var StyledContents = styled13.div`
  position: relative;
`;
var Dropdown001 = ({
  style,
  detail,
  contents,
  nowrap
}) => {
  return /* @__PURE__ */ jsx(StyledWrapper, { children: /* @__PURE__ */ jsxs(StyledContentsWrapper, { children: [
    /* @__PURE__ */ jsx(StyledContents, { children: contents }),
    /* @__PURE__ */ jsx(StyledDetailWrapper, { children: /* @__PURE__ */ jsx(
      StyledDetail,
      {
        nowrap,
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        borderRadius: style?.borderRadius,
        children: detail
      }
    ) })
  ] }) });
};
var StyledWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledDetailWrapper2 = styled13.div`
  padding-top: ${({ theme }) => theme.size.em(4)};
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
`;
var StyledDetail2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "nowrap"
})`
  transition: transform 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  transform: translateY(${({ theme }) => theme.size.em(5)});
  white-space: ${({ nowrap }) => nowrap === true || nowrap === void 0 ? "nowrap" : "normal"};
`;
var StyledContentsWrapper2 = styled13.div`
  position: relative;

  &:hover {
    ${StyledDetailWrapper2} {
      opacity: 1;
      pointer-events: auto;
    }

    ${StyledDetail2} {
      transform: translateY(${({ theme }) => theme.size.em(10)});
    }
  }
`;
var StyledDetailInner = styled13.div`
  padding: ${({ theme }) => theme.size.em(10)};
`;
var StyledContents2 = styled13.div`
  position: relative;
`;
var Dropdown002 = ({
  style,
  detail,
  contents,
  nowrap,
  balloonProps
}) => {
  return /* @__PURE__ */ jsx(StyledWrapper2, { children: /* @__PURE__ */ jsxs(StyledContentsWrapper2, { children: [
    /* @__PURE__ */ jsx(StyledContents2, { children: contents }),
    /* @__PURE__ */ jsx(StyledDetailWrapper2, { children: /* @__PURE__ */ jsx(StyledDetail2, { nowrap, children: /* @__PURE__ */ jsx(
      Balloon001,
      {
        ...balloonProps,
        style: {
          ...balloonProps?.style,
          backgroundColor: style?.backgroundColor
        },
        type: "001",
        arrowPosition: "top",
        children: /* @__PURE__ */ jsx(StyledDetailInner, { children: detail })
      }
    ) }) })
  ] }) });
};
var StyledFrameIconWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFrameIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;

  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    case "middle":
      return css`
          width: ${({ theme }) => theme.size.em(35)};
          height: ${({ theme }) => theme.size.em(35)};
        `;
    case "large":
      return css`
          width: ${({ theme }) => theme.size.em(40)};
          height: ${({ theme }) => theme.size.em(40)};
        `;
    default:
      return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
  }
}}
`;
var StyledFrameIconBackground = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "borderColor"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  z-index: 0;

  ${({ type }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 50%;
        `;
    case "002":
      return css`
          border-radius: 0;
        `;
    case "003":
      return css`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    default:
      return css`
          border-radius: 50%;
        `;
  }
}}
`;
var StyledFrameIconInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor"
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({ iconColor }) => iconColor};
`;
var StyledFrameIconContent = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  ${({ theme, size }) => theme.icon.size.style(size)}
`;
var FrameIcon001 = ({ style, type, size, icon }) => {
  return /* @__PURE__ */ jsx(StyledFrameIconWrapper, { children: /* @__PURE__ */ jsxs(StyledFrameIcon, { size, children: [
    /* @__PURE__ */ jsx(
      StyledFrameIconBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(StyledFrameIconInner, { iconColor: style?.iconColor ?? "#000", children: /* @__PURE__ */ jsx(StyledFrameIconContent, { size, children: icon }) })
  ] }) });
};
var StyledFrameNumberWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFrameNumber = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;

  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    case "middle":
      return css`
          width: ${({ theme }) => theme.size.em(35)};
          height: ${({ theme }) => theme.size.em(35)};
        `;
    case "large":
      return css`
          width: ${({ theme }) => theme.size.em(40)};
          height: ${({ theme }) => theme.size.em(40)};
        `;
    default:
      return css`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
  }
}}
`;
var StyledFrameNumberBackground = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor" && prop !== "borderColor"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  z-index: 0;

  ${({ type }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 50%;
        `;
    case "002":
      return css`
          border-radius: 0;
        `;
    case "003":
      return css`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    default:
      return css`
          border-radius: 50%;
        `;
  }
}}
`;
var StyledFrameNumberInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color" && prop !== "size"
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  color: ${({ color: color2 }) => color2};

  ${({ size }) => {
  switch (size) {
    case "small":
      return css`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
    case "middle":
      return css`
          font-size: ${({ theme }) => theme.size.em(18)};
        `;
    case "large":
      return css`
          font-size: ${({ theme }) => theme.size.em(24)};
        `;
    default:
      return css`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
  }
}}
`;
var FrameNumber001 = ({
  style,
  type,
  size,
  number
}) => {
  return /* @__PURE__ */ jsx(StyledFrameNumberWrapper, { children: /* @__PURE__ */ jsxs(StyledFrameNumber, { size, children: [
    /* @__PURE__ */ jsx(
      StyledFrameNumberBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(StyledFrameNumberInner, { color: style?.color ?? "#000", size, children: number })
  ] }) });
};

// ../../node_modules/.pnpm/@vis.gl+react-google-maps@1.7.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var APILoadingStatus = {
  NOT_LOADED: "NOT_LOADED",
  LOADED: "LOADED",
  AUTH_FAILURE: "AUTH_FAILURE"
};
var APIProviderContext = React4.createContext(null);
function useMapEvents(map, props) {
  for (const propName of eventPropNames) {
    const handler = props[propName];
    const eventType = propNameToEventType[propName];
    useEffect(() => {
      if (!map)
        return;
      if (!handler)
        return;
      const listener = google.maps.event.addListener(map, eventType, (ev) => {
        handler(createMapEvent(eventType, map, ev));
      });
      return () => listener.remove();
    }, [map, eventType, handler]);
  }
}
function createMapEvent(type, map, srcEvent) {
  var _a;
  const ev = {
    type,
    map,
    detail: {},
    stoppable: false,
    stop: () => {
    }
  };
  if (cameraEventTypes.includes(type)) {
    const camEvent = ev;
    const center = map.getCenter();
    const zoom = map.getZoom();
    const heading = map.getHeading() || 0;
    const tilt = map.getTilt() || 0;
    const bounds = map.getBounds();
    if (!center || !bounds || !Number.isFinite(zoom)) {
      console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new");
    }
    camEvent.detail = {
      center: (center === null || center === void 0 ? void 0 : center.toJSON()) || { lat: 0, lng: 0 },
      zoom: zoom || 0,
      heading,
      tilt,
      bounds: (bounds === null || bounds === void 0 ? void 0 : bounds.toJSON()) || {
        north: 90,
        east: 180,
        south: -90,
        west: -180
      }
    };
    return camEvent;
  } else if (mouseEventTypes.includes(type)) {
    if (!srcEvent)
      throw new Error("[createEvent] mouse events must provide a srcEvent");
    const mouseEvent = ev;
    mouseEvent.domEvent = srcEvent.domEvent;
    mouseEvent.stoppable = true;
    mouseEvent.stop = () => srcEvent.stop();
    mouseEvent.detail = {
      latLng: ((_a = srcEvent.latLng) === null || _a === void 0 ? void 0 : _a.toJSON()) || null,
      placeId: srcEvent.placeId
    };
    return mouseEvent;
  }
  return ev;
}
var propNameToEventType = {
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onContextmenu: "contextmenu",
  onDblclick: "dblclick",
  onDrag: "drag",
  onDragend: "dragend",
  onDragstart: "dragstart",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onIsFractionalZoomEnabledChanged: "isfractionalzoomenabled_changed",
  onMapCapabilitiesChanged: "mapcapabilities_changed",
  onMapTypeIdChanged: "maptypeid_changed",
  onMousemove: "mousemove",
  onMouseout: "mouseout",
  onMouseover: "mouseover",
  onProjectionChanged: "projection_changed",
  onRenderingTypeChanged: "renderingtype_changed",
  onTilesLoaded: "tilesloaded",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed",
  // note: onCameraChanged is an alias for the bounds_changed event,
  // since that is going to be fired in every situation where the camera is
  // updated.
  onCameraChanged: "bounds_changed"
};
var cameraEventTypes = [
  "bounds_changed",
  "center_changed",
  "heading_changed",
  "tilt_changed",
  "zoom_changed"
];
var mouseEventTypes = [
  "click",
  "contextmenu",
  "dblclick",
  "mousemove",
  "mouseout",
  "mouseover"
];
var eventPropNames = Object.keys(propNameToEventType);
function usePrevious2(value) {
  const ref = useRef(void 0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
function useMemoized(value, isEqual) {
  const previous = usePrevious2(value);
  return useMemo(() => {
    if (previous && isEqual(previous, value)) {
      return previous;
    }
    return value;
  }, [value, previous, isEqual]);
}
function useCustomCompareEffect(effect, dependencies, isEqual) {
  useEffect(effect, [useMemoized(dependencies, isEqual)]);
}
function useDeepCompareEffect(effect, dependencies) {
  useCustomCompareEffect(effect, dependencies, import_fast_deep_equal.default);
}
var mapOptionKeys = /* @__PURE__ */ new Set([
  "backgroundColor",
  "clickableIcons",
  "controlSize",
  "disableDefaultUI",
  "disableDoubleClickZoom",
  "draggable",
  "draggableCursor",
  "draggingCursor",
  "fullscreenControl",
  "fullscreenControlOptions",
  "gestureHandling",
  "headingInteractionEnabled",
  "isFractionalZoomEnabled",
  "keyboardShortcuts",
  "mapTypeControl",
  "mapTypeControlOptions",
  "mapTypeId",
  "maxZoom",
  "minZoom",
  "noClear",
  "panControl",
  "panControlOptions",
  "restriction",
  "rotateControl",
  "rotateControlOptions",
  "scaleControl",
  "scaleControlOptions",
  "scrollwheel",
  "streetView",
  "streetViewControl",
  "streetViewControlOptions",
  "styles",
  "tiltInteractionEnabled",
  "zoomControl",
  "zoomControlOptions"
]);
function useMapOptions(map, mapProps) {
  const mapOptions = {};
  const keys = Object.keys(mapProps);
  for (const key of keys) {
    if (!mapOptionKeys.has(key))
      continue;
    mapOptions[key] = mapProps[key];
  }
  useDeepCompareEffect(() => {
    if (!map)
      return;
    map.setOptions(mapOptions);
  }, [mapOptions]);
}
function useApiLoadingStatus() {
  var _a;
  return ((_a = useContext(APIProviderContext)) === null || _a === void 0 ? void 0 : _a.status) || APILoadingStatus.NOT_LOADED;
}
function useDeckGLCameraUpdate(map, props) {
  const { viewport, viewState } = props;
  const isDeckGlControlled = !!viewport;
  useLayoutEffect(() => {
    if (!map || !viewState)
      return;
    const { latitude, longitude, bearing: heading, pitch: tilt, zoom } = viewState;
    map.moveCamera({
      center: { lat: latitude, lng: longitude },
      heading,
      tilt,
      zoom: zoom + 1
    });
  }, [map, viewState]);
  return isDeckGlControlled;
}
function isLatLngLiteral(obj) {
  if (!obj || typeof obj !== "object")
    return false;
  if (!("lat" in obj && "lng" in obj))
    return false;
  return Number.isFinite(obj.lat) && Number.isFinite(obj.lng);
}
function toLatLngLiteral(obj) {
  if (isLatLngLiteral(obj))
    return obj;
  return obj.toJSON();
}
function useMapCameraParams(map, cameraStateRef, mapProps) {
  const center = mapProps.center ? toLatLngLiteral(mapProps.center) : null;
  let lat = null;
  let lng = null;
  if (center && Number.isFinite(center.lat) && Number.isFinite(center.lng)) {
    lat = center.lat;
    lng = center.lng;
  }
  const zoom = Number.isFinite(mapProps.zoom) ? mapProps.zoom : null;
  const heading = Number.isFinite(mapProps.heading) ? mapProps.heading : null;
  const tilt = Number.isFinite(mapProps.tilt) ? mapProps.tilt : null;
  useLayoutEffect(() => {
    if (!map)
      return;
    const nextCamera = {};
    let needsUpdate = false;
    if (lat !== null && lng !== null && (cameraStateRef.current.center.lat !== lat || cameraStateRef.current.center.lng !== lng)) {
      nextCamera.center = { lat, lng };
      needsUpdate = true;
    }
    if (zoom !== null && cameraStateRef.current.zoom !== zoom) {
      nextCamera.zoom = zoom;
      needsUpdate = true;
    }
    if (heading !== null && cameraStateRef.current.heading !== heading) {
      nextCamera.heading = heading;
      needsUpdate = true;
    }
    if (tilt !== null && cameraStateRef.current.tilt !== tilt) {
      nextCamera.tilt = tilt;
      needsUpdate = true;
    }
    if (needsUpdate) {
      map.moveCamera(nextCamera);
    }
  });
}
var AuthFailureMessage = () => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    flexFlow: "column nowrap",
    textAlign: "center",
    justifyContent: "center",
    fontSize: ".8rem",
    color: "rgba(0,0,0,0.6)",
    background: "#dddddd",
    padding: "1rem 1.5rem"
  };
  return React4.createElement(
    "div",
    { style },
    React4.createElement("h2", null, "Error: AuthFailure"),
    React4.createElement(
      "p",
      null,
      "A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",
      React4.createElement("code", null, "APIProvider.apiKey"),
      " prop is correct. Check the error-message in the console for further details."
    )
  );
};
function useCallbackRef() {
  const [el, setEl] = useState(null);
  const ref = useCallback((value) => setEl(value), [setEl]);
  return [el, ref];
}
function useApiIsLoaded() {
  const status = useApiLoadingStatus();
  return status === APILoadingStatus.LOADED;
}
function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}
function handleBoundsChange(map, ref) {
  const center = map.getCenter();
  const zoom = map.getZoom();
  const heading = map.getHeading() || 0;
  const tilt = map.getTilt() || 0;
  const bounds = map.getBounds();
  if (!center || !bounds || !Number.isFinite(zoom)) {
    console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new");
  }
  Object.assign(ref.current, {
    center: (center === null || center === void 0 ? void 0 : center.toJSON()) || { lat: 0, lng: 0 },
    zoom: zoom || 0,
    heading,
    tilt
  });
}
function useTrackedCameraStateRef(map) {
  const forceUpdate = useForceUpdate();
  const ref = useRef({
    center: { lat: 0, lng: 0 },
    heading: 0,
    tilt: 0,
    zoom: 0
  });
  useEffect(() => {
    if (!map)
      return;
    const listener = google.maps.event.addListener(map, "bounds_changed", () => {
      handleBoundsChange(map, ref);
      forceUpdate();
    });
    return () => listener.remove();
  }, [map, forceUpdate]);
  return ref;
}
var CachedMapStack = class {
  static has(key) {
    return this.entries[key] && this.entries[key].length > 0;
  }
  static pop(key) {
    if (!this.entries[key])
      return null;
    return this.entries[key].pop() || null;
  }
  static push(key, value) {
    if (!this.entries[key])
      this.entries[key] = [];
    this.entries[key].push(value);
  }
};
CachedMapStack.entries = {};
function useMapInstance(props, context) {
  const apiIsLoaded = useApiIsLoaded();
  const [map, setMap] = useState(null);
  const [container, containerRef] = useCallbackRef();
  const cameraStateRef = useTrackedCameraStateRef(map);
  const { id: id2, defaultBounds, defaultCenter, defaultZoom, defaultHeading, defaultTilt, reuseMaps, renderingType, colorScheme } = props, mapOptions = __rest(props, ["id", "defaultBounds", "defaultCenter", "defaultZoom", "defaultHeading", "defaultTilt", "reuseMaps", "renderingType", "colorScheme"]);
  const hasZoom = props.zoom !== void 0 || props.defaultZoom !== void 0;
  const hasCenter = props.center !== void 0 || props.defaultCenter !== void 0;
  if (!defaultBounds && (!hasZoom || !hasCenter)) {
    console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required");
  }
  if (!mapOptions.center && defaultCenter)
    mapOptions.center = defaultCenter;
  if (!mapOptions.zoom && Number.isFinite(defaultZoom))
    mapOptions.zoom = defaultZoom;
  if (!mapOptions.heading && Number.isFinite(defaultHeading))
    mapOptions.heading = defaultHeading;
  if (!mapOptions.tilt && Number.isFinite(defaultTilt))
    mapOptions.tilt = defaultTilt;
  const customIds = mapOptions.internalUsageAttributionIds;
  if (customIds == null) {
    mapOptions.internalUsageAttributionIds = context.internalUsageAttributionIds;
  } else {
    mapOptions.internalUsageAttributionIds = [
      ...context.internalUsageAttributionIds || [],
      ...customIds
    ];
  }
  for (const key of Object.keys(mapOptions))
    if (mapOptions[key] === void 0)
      delete mapOptions[key];
  const savedMapStateRef = useRef(void 0);
  useEffect(
    () => {
      if (!container || !apiIsLoaded)
        return;
      const { addMapInstance, removeMapInstance } = context;
      const { mapId } = props;
      const cacheKey = `${mapId || "default"}:${renderingType || "default"}:${colorScheme || "LIGHT"}`;
      let mapDiv;
      let map2;
      if (reuseMaps && CachedMapStack.has(cacheKey)) {
        map2 = CachedMapStack.pop(cacheKey);
        mapDiv = map2.getDiv();
        container.appendChild(mapDiv);
        map2.setOptions(mapOptions);
        setTimeout(() => map2.setCenter(map2.getCenter()), 0);
      } else {
        mapDiv = document.createElement("div");
        mapDiv.style.height = "100%";
        container.appendChild(mapDiv);
        map2 = new google.maps.Map(mapDiv, Object.assign(Object.assign(Object.assign({}, mapOptions), renderingType ? { renderingType } : {}), colorScheme ? { colorScheme } : {}));
      }
      setMap(map2);
      addMapInstance(map2, id2);
      if (defaultBounds) {
        const { padding } = defaultBounds, defBounds = __rest(defaultBounds, ["padding"]);
        map2.fitBounds(defBounds, padding);
      } else if (!hasZoom || !hasCenter) {
        map2.fitBounds({ east: 180, west: -180, south: -90, north: 90 });
      }
      if (savedMapStateRef.current) {
        const { mapId: savedMapId, cameraState: savedCameraState } = savedMapStateRef.current;
        if (savedMapId !== mapId) {
          map2.setOptions(savedCameraState);
        }
      }
      return () => {
        savedMapStateRef.current = {
          mapId,
          // eslint-disable-next-line react-hooks/exhaustive-deps
          cameraState: cameraStateRef.current
        };
        mapDiv.remove();
        if (reuseMaps) {
          CachedMapStack.push(cacheKey, map2);
        } else {
          google.maps.event.clearInstanceListeners(map2);
        }
        setMap(null);
        removeMapInstance(id2);
      };
    },
    // some dependencies are ignored in the list below:
    //  - defaultBounds and the default* camera props will only be used once, and
    //    changes should be ignored
    //  - mapOptions has special hooks that take care of updating the options
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      container,
      apiIsLoaded,
      id2,
      // these props can't be changed after initialization and require a new
      // instance to be created
      props.mapId,
      props.renderingType,
      props.colorScheme
    ]
  );
  return [map, containerRef, cameraStateRef];
}
var GoogleMapsContext = React4.createContext(null);
var Map2 = (props) => {
  const { children, id: id2, className, style } = props;
  const context = useContext(APIProviderContext);
  const loadingStatus = useApiLoadingStatus();
  if (!context) {
    throw new Error("<Map> can only be used inside an <ApiProvider> component.");
  }
  const [map, mapRef, cameraStateRef] = useMapInstance(props, context);
  useMapCameraParams(map, cameraStateRef, props);
  useMapEvents(map, props);
  useMapOptions(map, props);
  const isDeckGlControlled = useDeckGLCameraUpdate(map, props);
  const isControlledExternally = !!props.controlled;
  useEffect(() => {
    if (!map)
      return;
    if (isDeckGlControlled) {
      map.setOptions({ disableDefaultUI: true });
    }
    if (isDeckGlControlled || isControlledExternally) {
      map.setOptions({
        gestureHandling: "none",
        keyboardShortcuts: false
      });
    }
    return () => {
      map.setOptions({
        gestureHandling: props.gestureHandling,
        keyboardShortcuts: props.keyboardShortcuts
      });
    };
  }, [
    map,
    isDeckGlControlled,
    isControlledExternally,
    props.gestureHandling,
    props.keyboardShortcuts
  ]);
  const center = props.center ? toLatLngLiteral(props.center) : null;
  let lat = null;
  let lng = null;
  if (center && Number.isFinite(center.lat) && Number.isFinite(center.lng)) {
    lat = center.lat;
    lng = center.lng;
  }
  const cameraOptions = useMemo(() => {
    var _a, _b, _c;
    return {
      center: { lat: lat !== null && lat !== void 0 ? lat : 0, lng: lng !== null && lng !== void 0 ? lng : 0 },
      zoom: (_a = props.zoom) !== null && _a !== void 0 ? _a : 0,
      heading: (_b = props.heading) !== null && _b !== void 0 ? _b : 0,
      tilt: (_c = props.tilt) !== null && _c !== void 0 ? _c : 0
    };
  }, [lat, lng, props.zoom, props.heading, props.tilt]);
  useLayoutEffect(() => {
    if (!map || !isControlledExternally)
      return;
    map.moveCamera(cameraOptions);
    const listener = map.addListener("bounds_changed", () => {
      map.moveCamera(cameraOptions);
    });
    return () => listener.remove();
  }, [map, isControlledExternally, cameraOptions]);
  const combinedStyle = useMemo(() => Object.assign({
    width: "100%",
    height: "100%",
    position: "relative",
    // when using deckgl, the map should be sent to the back
    zIndex: isDeckGlControlled ? -1 : 0
  }, style), [style, isDeckGlControlled]);
  const contextValue = useMemo(() => ({ map }), [map]);
  if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
    return React4.createElement(
      "div",
      { style: Object.assign({ position: "relative" }, className ? {} : combinedStyle), className },
      React4.createElement(AuthFailureMessage, null)
    );
  }
  return React4.createElement("div", Object.assign({ ref: mapRef, "data-testid": "map", style: className ? void 0 : combinedStyle, className }, id2 ? { id: id2 } : {}), map ? React4.createElement(GoogleMapsContext.Provider, { value: contextValue }, children) : null);
};
Map2.deckGLViewProps = true;
var shownMessages = /* @__PURE__ */ new Set();
function logErrorOnce(...args) {
  const key = JSON.stringify(args);
  if (!shownMessages.has(key)) {
    shownMessages.add(key);
    console.error(...args);
  }
}
var useMap = (id2 = null) => {
  const ctx = useContext(APIProviderContext);
  const { map } = useContext(GoogleMapsContext) || {};
  if (ctx === null) {
    logErrorOnce("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>.");
    return null;
  }
  const { mapInstances } = ctx;
  if (id2 !== null)
    return mapInstances[id2] || null;
  if (map)
    return map;
  return mapInstances["default"] || null;
};
function useMapsLibrary(name) {
  const apiIsLoaded = useApiIsLoaded();
  const ctx = useContext(APIProviderContext);
  useEffect(() => {
    if (!apiIsLoaded || !ctx)
      return;
    void ctx.importLibrary(name);
  }, [apiIsLoaded, ctx, name]);
  return (ctx === null || ctx === void 0 ? void 0 : ctx.loadedLibraries[name]) || null;
}
function useMapsEventListener(target, name, callback) {
  useEffect(() => {
    if (!target || !name || !callback)
      return;
    const listener = google.maps.event.addListener(target, name, callback);
    return () => listener.remove();
  }, [target, name, callback]);
}
function usePropBinding(object, prop, value) {
  useEffect(() => {
    if (!object)
      return;
    object[prop] = value;
  }, [object, prop, value]);
}
function useDomEventListener(target, name, callback) {
  useEffect(() => {
    if (!target || !name || !callback)
      return;
    target.addEventListener(name, callback);
    return () => target.removeEventListener(name, callback);
  }, [target, name, callback]);
}
var GlobalStyleManager = class {
  constructor() {
    this.renderedStyles = /* @__PURE__ */ new Set();
    this.styleElement = null;
  }
  getStyleElement() {
    if (!this.styleElement) {
      this.styleElement = document.createElement("style");
      this.styleElement.setAttribute("data-rgm-anchor-styles", "");
      document.head.appendChild(this.styleElement);
    }
    return this.styleElement;
  }
  addAdvancedMarkerPointerEventsOverwrite() {
    if (this.renderedStyles.has("marker-pointer-events")) {
      return;
    }
    const styleElement = this.getStyleElement();
    styleElement.textContent += `
      gmp-advanced-marker[data-origin='rgm'] {
        pointer-events: none !important;
      }
    `;
    this.renderedStyles.add("marker-pointer-events");
  }
  cleanup() {
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
      this.renderedStyles.clear();
    }
  }
};
var globalStyleManager = new GlobalStyleManager();
function isVersionGreaterEqual(major, minor) {
  var _a;
  if (!((_a = google === null || google === void 0 ? void 0 : google.maps) === null || _a === void 0 ? void 0 : _a.version))
    return void 0;
  const version = google.maps.version.split(".");
  const currentMajor = parseInt(version[0], 10);
  const currentMinor = parseInt(version[1], 10);
  return currentMajor > major || currentMajor === major && currentMinor >= minor;
}
var AdvancedMarkerContext = React4.createContext(null);
var AdvancedMarkerAnchorPoint = {
  BOTTOM: ["50%", "100%"]};
var AdvancedMarker = forwardRef((props, ref) => {
  const { children, style, className, anchorPoint } = props;
  const [marker, contentContainer] = useAdvancedMarker(props);
  const advancedMarkerContextValue = useMemo(() => marker ? { marker } : null, [marker]);
  useImperativeHandle(ref, () => marker, [marker]);
  if (!contentContainer)
    return null;
  return React4.createElement(AdvancedMarkerContext.Provider, { value: advancedMarkerContextValue }, createPortal(React4.createElement(MarkerContent, { anchorPoint, styles: style, className }, children), contentContainer));
});
AdvancedMarker.displayName = "AdvancedMarker";
function isElementNode(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
var MarkerContent = ({ children, styles, className }) => {
  return React4.createElement("div", { className, style: styles }, children);
};
function useAdvancedMarker(props) {
  const [marker, setMarker] = useState(null);
  const [contentContainer, setContentContainer] = useState(null);
  const map = useMap();
  const markerLibrary = useMapsLibrary("marker");
  const { children, onClick, className, onMouseEnter, onMouseLeave, onDrag, onDragStart, onDragEnd, collisionBehavior, clickable, draggable, position, title, zIndex, anchorPoint, anchorLeft, anchorTop } = props;
  const numChildren = Children.count(children);
  useEffect(() => {
    if (!map || !markerLibrary)
      return;
    const newMarker = new markerLibrary.AdvancedMarkerElement();
    newMarker.map = map;
    setMarker(newMarker);
    let contentElement = null;
    if (numChildren > 0) {
      contentElement = document.createElement("div");
      newMarker.content = contentElement;
      setContentContainer(contentElement);
    }
    return () => {
      newMarker.map = null;
      contentElement === null || contentElement === void 0 ? void 0 : contentElement.remove();
      setMarker(null);
      setContentContainer(null);
    };
  }, [map, markerLibrary, numChildren]);
  useEffect(() => {
    if (!(marker === null || marker === void 0 ? void 0 : marker.content) || !isElementNode(marker.content) || numChildren > 0)
      return;
    marker.content.className = className !== null && className !== void 0 ? className : "";
  }, [marker, className, numChildren]);
  useAdvancedMarkerAnchoring(marker, anchorPoint, anchorLeft, anchorTop, numChildren > 0);
  usePropBinding(marker, "position", position);
  usePropBinding(marker, "title", title !== null && title !== void 0 ? title : "");
  usePropBinding(marker, "zIndex", zIndex);
  usePropBinding(marker, "collisionBehavior", collisionBehavior);
  useEffect(() => {
    if (!marker)
      return;
    if (draggable !== void 0)
      marker.gmpDraggable = draggable;
    else if (onDrag || onDragStart || onDragEnd)
      marker.gmpDraggable = true;
    else
      marker.gmpDraggable = false;
  }, [marker, draggable, onDrag, onDragEnd, onDragStart]);
  useEffect(() => {
    if (!marker)
      return;
    const gmpClickable = clickable !== void 0 || Boolean(onClick) || Boolean(onMouseEnter) || Boolean(onMouseLeave);
    marker.gmpClickable = gmpClickable;
    if (gmpClickable && (marker === null || marker === void 0 ? void 0 : marker.content) && isElementNode(marker.content)) {
      marker.content.style.pointerEvents = "all";
      if (onClick) {
        marker.content.style.cursor = "pointer";
      }
    }
  }, [marker, clickable, onClick, onMouseEnter, onMouseLeave]);
  useMapsEventListener(marker, "click", onClick);
  useMapsEventListener(marker, "drag", onDrag);
  useMapsEventListener(marker, "dragstart", onDragStart);
  useMapsEventListener(marker, "dragend", onDragEnd);
  useDomEventListener(marker === null || marker === void 0 ? void 0 : marker.element, "mouseenter", onMouseEnter);
  useDomEventListener(marker === null || marker === void 0 ? void 0 : marker.element, "mouseleave", onMouseLeave);
  return [marker, contentContainer];
}
function useAdvancedMarkerAnchoring(marker, anchorPoint, anchorLeft, anchorTop, hasChildren) {
  useEffect(() => {
    if (!marker || !hasChildren)
      return;
    const anchorOptionsSupported = isVersionGreaterEqual(3, 62);
    const contentElement = marker.content;
    if (!contentElement || !isElementNode(contentElement))
      return;
    if (anchorLeft !== void 0 || anchorTop !== void 0) {
      if (!anchorOptionsSupported) {
        console.warn(`AdvancedMarker: The anchorLeft and anchorTop props are only supported in Google Maps API version 3.62 and above. The current version is ${google.maps.version}.`);
      }
      marker.anchorLeft = anchorLeft;
      marker.anchorTop = anchorTop;
      if (anchorPoint !== void 0) {
        console.warn("AdvancedMarker: the anchorPoint prop is ignored when anchorLeft and/or anchorTop are set.");
      }
      return;
    }
    if (anchorPoint !== void 0) {
      const [x, y] = anchorPoint !== null && anchorPoint !== void 0 ? anchorPoint : AdvancedMarkerAnchorPoint["BOTTOM"];
      const translateX = `calc(-1 * ${x})`;
      const translateY = `calc(-1 * ${y})`;
      if (anchorOptionsSupported) {
        marker.anchorLeft = translateX;
        marker.anchorTop = translateY;
        contentElement.style.transform = "";
      } else {
        contentElement.style.transform = `translate(50%, 100%) translate(${translateX}, ${translateY})`;
        marker.dataset.origin = "rgm";
        globalStyleManager.addAdvancedMarkerPointerEventsOverwrite();
      }
    }
  }, [marker, anchorPoint, anchorLeft, anchorTop, hasChildren]);
}
function useMarker(props) {
  const [marker, setMarker] = useState(null);
  const map = useMap();
  const { onClick, onDrag, onDragStart, onDragEnd, onMouseOver, onMouseOut } = props, markerOptions = __rest(props, ["onClick", "onDrag", "onDragStart", "onDragEnd", "onMouseOver", "onMouseOut"]);
  const { position, draggable } = markerOptions;
  useEffect(() => {
    if (!map) {
      if (map === void 0)
        console.error("<Marker> has to be inside a Map component.");
      return;
    }
    const newMarker = new google.maps.Marker(markerOptions);
    newMarker.setMap(map);
    setMarker(newMarker);
    return () => {
      newMarker.setMap(null);
      setMarker(null);
    };
  }, [map]);
  useEffect(() => {
    if (!marker)
      return;
    const m = marker;
    const gme = google.maps.event;
    if (onClick)
      gme.addListener(m, "click", onClick);
    if (onDrag)
      gme.addListener(m, "drag", onDrag);
    if (onDragStart)
      gme.addListener(m, "dragstart", onDragStart);
    if (onDragEnd)
      gme.addListener(m, "dragend", onDragEnd);
    if (onMouseOver)
      gme.addListener(m, "mouseover", onMouseOver);
    if (onMouseOut)
      gme.addListener(m, "mouseout", onMouseOut);
    marker.setDraggable(Boolean(draggable));
    return () => {
      gme.clearInstanceListeners(m);
    };
  }, [
    marker,
    draggable,
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    onMouseOver,
    onMouseOut
  ]);
  useEffect(() => {
    if (!marker)
      return;
    if (markerOptions)
      marker.setOptions(markerOptions);
  }, [marker, markerOptions]);
  useEffect(() => {
    if (draggable || !position || !marker)
      return;
    marker.setPosition(position);
  }, [draggable, position, marker]);
  return marker;
}
var Marker = forwardRef((props, ref) => {
  const marker = useMarker(props);
  useImperativeHandle(ref, () => marker, [marker]);
  return React4.createElement(React4.Fragment, null);
});
Marker.displayName = "Marker";
var GoogleMap = ({
  defaultCenter,
  defaultZoom,
  disableDefaultUI,
  mapId,
  children
}) => {
  return /* @__PURE__ */ jsx(
    Map2,
    {
      defaultCenter,
      defaultZoom,
      style: { width: "100%", height: "100%" },
      disableDefaultUI,
      mapId,
      gestureHandling: "greedy",
      children
    }
  );
};
var StyledWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledHeader = styled13.header.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "backgroundColor" && prop !== "animationBackgroundColor" && prop !== "showModal" && prop !== "easing" && prop !== "duration" && prop !== "sidePadding"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ height, theme }) => theme.size.em(height)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ sidePadding, theme }) => sidePadding !== void 0 ? theme.size.em(sidePadding) : theme.size.em(20)};
  z-index: 100;
  transition: background-color ${({ duration }) => duration ?? "0.3s"} ${({ theme, easing: easing2 }) => theme.animation.easing[easing2 ?? "easeInCubic"]};

  ${({ showModal, animationBackgroundColor }) => showModal && css`
      background-color: ${animationBackgroundColor ?? "transparent"};
    `}
`;
var StyledHeaderInner = styled13.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledLeftWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;
var StyledRightWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: ${({ gap, theme }) => theme.size.em(gap ?? 10)};
`;
var StyledModalWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "showModal"
})`
  position: fixed;
  top: ${({ height, theme }) => theme.size.em(height)};
  left: 0;
  width: 100%;
  height: calc(100% - ${({ height, theme }) => theme.size.em(height)});
  z-index: 99;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ showModal }) => showModal && css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
var HEIGHT = 80;
var Header001 = ({
  left,
  right,
  leftInner,
  rightInner,
  modalContent,
  style,
  showModal
}) => {
  return /* @__PURE__ */ jsxs(StyledWrapper3, { children: [
    /* @__PURE__ */ jsx(
      StyledHeader,
      {
        height: style?.header?.height ?? HEIGHT,
        backgroundColor: style?.header?.backgroundColor,
        animationBackgroundColor: style?.header?.animation?.backgroundColor,
        easing: style?.header?.animation?.easing,
        duration: style?.header?.animation?.duration,
        sidePadding: style?.header?.sidePadding,
        showModal,
        children: /* @__PURE__ */ jsxs(StyledHeaderInner, { children: [
          /* @__PURE__ */ jsxs(StyledLeftWrapper, { gap: style?.leftGap, children: [
            left,
            leftInner
          ] }),
          /* @__PURE__ */ jsxs(StyledRightWrapper, { gap: style?.rightGap, children: [
            rightInner,
            right
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      StyledModalWrapper,
      {
        height: style?.header?.height ?? HEIGHT,
        showModal,
        children: modalContent
      }
    )
  ] });
};
var StyledInputWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize = (size) => size ?? 18;
var StyledInputField = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "style"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize(fontSize))};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize(fontSize))};
  color: ${({ style }) => style?.color || "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
  }
}}
`;
var StyledInput = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputField} {
      border-color: #f00;
    }

    ${StyledInputError} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
    case "002":
      return css`
          ${StyledInputField} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input001 = ({
  type = "001",
  size = "small",
  name = "input-001",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper, { children: /* @__PURE__ */ jsxs(StyledInput, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx(
      StyledInputField,
      {
        name,
        type: "text",
        placeholder,
        value,
        onChange,
        fontSize: style?.fontSize,
        color: style?.color,
        borderColor: style?.borderColor,
        placeholderColor: style?.placeholderColor,
        ...inputProps,
        size
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledInputWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize2 = (size) => size ?? 18;
var StyledInputField2 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "fontSize" && prop !== "color" && prop !== "borderColor" && prop !== "placeholderColor"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize2(fontSize))};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize2(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize2(fontSize))};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(3, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(3, defaultFontSize2(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize2(fontSize))};
        `;
  }
}}
`;
var StyledInput2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputField2} {
      border-bottom-color: #f00;
    }

    ${StyledInputError2} {
      display: block;
    }
  `}
`;
var StyledInputError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input002 = ({
  size = "small",
  name = "input-002",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper2, { children: /* @__PURE__ */ jsxs(StyledInput2, { error: error || !!errorText, size, children: [
    /* @__PURE__ */ jsx(
      StyledInputField2,
      {
        name,
        type: "text",
        placeholder,
        value,
        onChange,
        fontSize: style?.fontSize,
        color: style?.color,
        borderColor: style?.borderColor,
        placeholderColor: style?.placeholderColor,
        ...inputProps,
        size
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError2,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledInputWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize3 = (size) => size ?? 18;
var StyledInputField3 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "fontSize" && prop !== "color" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "placeholderColor" && prop !== "errorBackgroundColor"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize3(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize3(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize3(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize3(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
        `;
  }
}}
`;
var StyledInput3 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputField3} {
      background-color: #fdd;
    }

    ${StyledInputError3} {
      display: block;
    }
  `}
`;
var StyledInputError3 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input003 = ({
  size = "small",
  name = "input-003",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper3, { children: /* @__PURE__ */ jsxs(StyledInput3, { error: error || !!errorText, size, children: [
    /* @__PURE__ */ jsx(
      StyledInputField3,
      {
        id: name,
        name,
        autoComplete: name,
        type: "text",
        placeholder,
        value,
        onChange,
        fontSize: style?.fontSize,
        color: style?.color,
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        placeholderColor: style?.placeholderColor,
        errorBackgroundColor: style?.errorBackgroundColor,
        ...inputProps,
        size
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError3,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledInputWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize4 = (size) => size ?? 18;
var StyledInputField4 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "fontSize" && prop !== "color" && prop !== "backgroundColor" && prop !== "placeholderColor" && prop !== "errorBackgroundColor"
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize4(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize4(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize4(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize4(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
        `;
  }
}}
`;
var StyledInput4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputField4} {
      background-color: #fdd;
    }

    ${StyledInputError4} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`
          ${StyledInputField4} {
            border-radius: 0;
          }
        `;
    case "002":
      return css`
          ${StyledInputField4} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css`
          ${StyledInputField4} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError4 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input004 = ({
  type = "001",
  size = "small",
  name = "input-004",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper4, { children: /* @__PURE__ */ jsxs(StyledInput4, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx(
      StyledInputField4,
      {
        name,
        type: "text",
        placeholder,
        value,
        onChange,
        fontSize: style?.fontSize,
        color: style?.color,
        backgroundColor: style?.backgroundColor,
        placeholderColor: style?.placeholderColor,
        errorBackgroundColor: style?.errorBackgroundColor,
        ...inputProps,
        size
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError4,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledInputWrapper5 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize5 = (size) => size ?? 18;
var StyledInputField5 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "fontSize" && prop !== "color" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "placeholderColor" && prop !== "errorBackgroundColor"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize5(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(10, defaultFontSize5(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`  
          padding-top: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize5(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize5(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
        `;
  }
}}
`;
var StyledInput5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputField5} {
      background-color: #fdd;
    }

    ${StyledInputError5} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`
          ${StyledInputField5} {
            border-radius: 0;
          }
        `;
    case "002":
      return css`
          ${StyledInputField5} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css`
          ${StyledInputField5} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError5 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input005 = ({
  type = "001",
  size = "small",
  name = "input-005",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper5, { children: /* @__PURE__ */ jsxs(StyledInput5, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx(
      StyledInputField5,
      {
        name,
        type: "text",
        placeholder,
        value,
        onChange,
        fontSize: style?.fontSize,
        color: style?.color,
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        placeholderColor: style?.placeholderColor,
        errorBackgroundColor: style?.errorBackgroundColor,
        ...inputProps,
        size
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError5,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledInputWrapper6 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputFieldWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "errorBorderColor"
})`
  position: relative;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css`
          padding-right: ${theme.size.em(40)};
        `;
    case "left":
      return css`
          padding-left: ${theme.size.em(40)};
        `;
    default:
      return css`
          padding-right: ${theme.size.em(40)};
        `;
  }
}}
`;
var defaultFontSize6 = (size) => size ?? 18;
var StyledInputField6 = styled13.input.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "iconPosition" && prop !== "fontSize" && prop !== "color" && prop !== "backgroundColor" && prop !== "placeholderColor"
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize6(fontSize))};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  box-sizing: border-box;
  line-height: 1;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize6(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize6(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize6(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
  }
}}

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
    case "left":
      return css`
          padding-left: 0;
          padding-right: ${theme.size.em(10)};
        `;
    default:
      return css`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
  }
}}
`;
var StyledInputIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition"
})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme, size }) => theme.icon.size.style(size)}

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css`
          right: ${theme.size.em(5)};
        `;
    case "left":
      return css`
          left: ${theme.size.em(5)};
        `;
    default:
      return css`
          right: ${theme.size.em(5)};
        `;
  }
}}
`;
var StyledInput6 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledInputFieldWrapper} {
      border-color: #f00;
    }

    ${StyledInputError6} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: 0;
          }
        `;
    case "002":
      return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError6 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Input006 = ({
  type = "001",
  size = "small",
  iconPosition = "right",
  icon,
  name = "input-006",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style,
  inputProps
}) => {
  return /* @__PURE__ */ jsx(StyledInputWrapper6, { children: /* @__PURE__ */ jsxs(StyledInput6, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsxs(
      StyledInputFieldWrapper,
      {
        iconPosition,
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        errorBorderColor: style?.errorBorderColor,
        children: [
          /* @__PURE__ */ jsx(
            StyledInputField6,
            {
              name,
              type: "text",
              placeholder,
              value,
              onChange,
              fontSize: style?.fontSize,
              color: style?.color,
              backgroundColor: style?.backgroundColor,
              placeholderColor: style?.placeholderColor,
              ...inputProps,
              size,
              iconPosition
            }
          ),
          /* @__PURE__ */ jsx(StyledInputIcon, { iconPosition, size, children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledInputError6,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledLabelWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize7 = (size) => size ?? 12;
var StyledLabel = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "fontSize" && prop !== "backgroundColor" && prop !== "color" && prop !== "borderColor"
})`
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize7(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize7(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#000"};
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize7(fontSize))};
  display: inline-block;
  white-space: nowrap;
  line-height: 1;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};

  ${({ type, theme, fontSize }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 0;
        `;
    case "002":
      return css`
          border-radius: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
        `;
    case "003":
      return css`
          border-radius: ${theme.size.customEm(21, defaultFontSize7(fontSize))};
        `;
    default:
      return css`
          border-radius: 0;
        `;
  }
}}

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize7(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
        `;
  }
}}
`;
var Label001 = ({
  type = "001",
  size = "middle",
  children,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledLabelWrapper, { children: /* @__PURE__ */ jsx(
    StyledLabel,
    {
      type,
      size,
      fontSize: style?.fontSize,
      backgroundColor: style?.backgroundColor,
      color: style?.color,
      borderColor: style?.borderColor,
      children
    }
  ) });
};
var StyledLabelWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize8 = (size) => size ?? 12;
var StyledLabel2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "iconPosition" && prop !== "fontSize" && prop !== "backgroundColor" && prop !== "borderColor"
})`
  padding-left: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize8(fontSize))};
  padding-right: ${({ theme, fontSize }) => theme.size.customEm(12, defaultFontSize8(fontSize))};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#000"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme, fontSize }) => theme.size.customEm(2, defaultFontSize8(fontSize))};

  ${({ type, theme, fontSize }) => {
  switch (type) {
    case "001":
      return css`
          border-radius: 0;
        `;
    case "002":
      return css`
          border-radius: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
        `;
    case "003":
      return css`
          border-radius: ${theme.size.customEm(21, defaultFontSize8(fontSize))};
        `;
    default:
      return css`
          border-radius: 0;
        `;
  }
}}

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize8(fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
        `;
  }
}}
`;
var StyledLabelIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "color" && prop !== "size"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color: color2 }) => color2 ?? "#fff"};

  ${({ theme, size }) => theme.icon.size.style(size)}

  ${({ iconPosition }) => {
  switch (iconPosition) {
    case "left":
      return css`
          order: 1;
        `;
    case "right":
      return css`
          order: 2;
        `;
    default:
      return css`
          order: 1;
        `;
  }
}}
`;
var StyledLabelText = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize8(fontSize))};
  line-height: 1;

  ${({ iconPosition }) => {
  switch (iconPosition) {
    case "left":
      return css`
          order: 2;
        `;
    case "right":
      return css`
          order: 1;
        `;
    default:
      return css`
          order: 2;
        `;
  }
}}
`;
var Label002 = ({
  type = "001",
  size = "middle",
  iconPosition = "left",
  icon,
  children,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledLabelWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledLabel2,
    {
      type,
      size,
      iconPosition,
      fontSize: style?.fontSize,
      backgroundColor: style?.backgroundColor,
      borderColor: style?.borderColor,
      children: [
        /* @__PURE__ */ jsx(
          StyledLabelIcon,
          {
            iconPosition,
            color: style?.iconColor,
            size,
            children: icon
          }
        ),
        /* @__PURE__ */ jsx(
          StyledLabelText,
          {
            iconPosition,
            fontSize: style?.fontSize,
            color: style?.color,
            children
          }
        )
      ]
    }
  ) });
};
var StyledListWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledList2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "columnGap" && prop !== "rowGap" && prop !== "isAlignItemsCenter"
})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${({ isAlignItemsCenter }) => isAlignItemsCenter ? "center" : "flex-start"};

  ${({ type, theme, columnGap, rowGap }) => {
  switch (type) {
    case "001":
    case "002":
      return css`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
    case "003":
      return css`
          gap: ${theme.size.em(rowGap ?? 40)};
        `;
    default:
      return css`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
  }
}}
`;
var StyledListItem2 = styled13.li.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "borderColor"
})`
  ${({ type, borderColor }) => type === "002" && css`
      border-bottom: 1px solid ${borderColor ?? "#000"};
      padding-bottom: ${({ theme }) => theme.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;
var List001 = ({ type = "001", items, style }) => {
  return /* @__PURE__ */ jsx(StyledListWrapper2, { children: /* @__PURE__ */ jsx(
    StyledList2,
    {
      as: "ul",
      type,
      columnGap: style?.columnGap,
      rowGap: style?.rowGap,
      isAlignItemsCenter: style?.isAlignItemsCenter,
      children: items.map((item) => /* @__PURE__ */ jsx(
        StyledListItem2,
        {
          type,
          borderColor: style?.borderColor,
          children: item.content
        },
        item.id
      ))
    }
  ) });
};
var StyledListItemWrapper = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemNumber = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemNumberText = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "numberFontSize" && prop !== "numberColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${({ numberColor }) => numberColor ?? "#000"};
  font-size: ${({ theme, numberFontSize }) => theme.size.em(numberFontSize ?? 24)};
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItemTextWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(30 + (gap ?? 10))};
`;
var StyledListItemText = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem3 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationColor"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemNumberText} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }
  }
`;
var ListItem001 = ({
  number,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper, { children: /* @__PURE__ */ jsxs(StyledListItem3, { onClick, animationColor: style?.animationColor, children: [
    /* @__PURE__ */ jsx(StyledListItemNumber, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
      StyledListItemNumberText,
      {
        numberFontSize: style?.numberFontSize,
        numberColor: style?.numberColor,
        animationColor: style?.animationColor,
        animationDuration: style?.animationDuration,
        animationEase: style?.animationEase,
        children: number
      }
    ) }),
    /* @__PURE__ */ jsx(StyledListItemTextWrapper, { gap: style?.gap, children: /* @__PURE__ */ jsx(
      StyledListItemText,
      {
        fontSize: style?.fontSize,
        color: style?.color,
        animationColor: style?.animationColor,
        animationDuration: style?.animationDuration,
        animationEase: style?.animationEase,
        children
      }
    ) })
  ] }) });
};
var StyledListItemWrapper2 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "pointSize" && prop !== "pointColor" && prop !== "animationPointColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({ pointColor }) => pointColor ?? "#000"};
  width: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  height: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  border-radius: 50%;
  transition: background-color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItemTextWrapper2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem4 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationColor" && prop !== "animationPointColor"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText2} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemPoint} {
      background-color: ${({ animationPointColor }) => animationPointColor ?? "#ccc"};
    }
  }
`;
var ListItem002 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledListItem4,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx(StyledListItemPointWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
          StyledListItemPoint,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx(StyledListItemTextWrapper2, { gap: style?.gap, children: /* @__PURE__ */ jsx(
          StyledListItemText2,
          {
            fontSize: style?.fontSize,
            color: style?.color,
            animationColor: style?.animationColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children
          }
        ) })
      ]
    }
  ) });
};
var StyledListItemWrapper3 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "pointSize" && prop !== "pointColor" && prop !== "animationPointColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({ pointColor }) => pointColor ?? "#000"};
  width: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  height: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  transition: background-color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItemTextWrapper3 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText3 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem5 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationColor" && prop !== "animationPointColor"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText3} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemPoint2} {
      background-color: ${({ animationPointColor }) => animationPointColor ?? "#ccc"};
    }
  }
`;
var ListItem003 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper3, { children: /* @__PURE__ */ jsxs(
    StyledListItem5,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx(StyledListItemPointWrapper2, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
          StyledListItemPoint2,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx(StyledListItemTextWrapper3, { gap: style?.gap, children: /* @__PURE__ */ jsx(
          StyledListItemText3,
          {
            fontSize: style?.fontSize,
            color: style?.color,
            animationColor: style?.animationColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children
          }
        ) })
      ]
    }
  ) });
};
var StyledListItemWrapper4 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemIconWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor" && prop !== "animationIconColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
  color: ${({ iconColor }) => iconColor ?? "#000"};
  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledListItemTextWrapper4 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em((gap ?? 8) + 24)};
`;
var StyledListItemText4 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem6 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationColor" && prop !== "animationIconColor"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText4} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemIcon} {
      color: ${({ animationIconColor }) => animationIconColor ?? "#ccc"};
    }
  }
`;
var ListItem004 = ({
  icon,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper4, { children: /* @__PURE__ */ jsxs(
    StyledListItem6,
    {
      onClick,
      animationColor: style?.animationColor,
      animationIconColor: style?.animationIconColor,
      children: [
        /* @__PURE__ */ jsx(StyledListItemIconWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
          StyledListItemIcon,
          {
            iconColor: style?.iconColor,
            animationIconColor: style?.animationIconColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children: icon
          }
        ) }),
        /* @__PURE__ */ jsx(StyledListItemTextWrapper4, { gap: style?.gap, children: /* @__PURE__ */ jsx(
          StyledListItemText4,
          {
            fontSize: style?.fontSize,
            color: style?.color,
            animationColor: style?.animationColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children
          }
        ) })
      ]
    }
  ) });
};
var StyledListItemWrapper5 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper3 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint3 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "pointSize" && prop !== "pointColor" && prop !== "animationPointColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: ${({ pointColor }) => pointColor ?? "#000"};
  width: ${({ theme, pointSize }) => theme.size.em(pointSize ?? 8)};
  height: 1px;
  transition: background-color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItemTextWrapper5 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText5 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem7 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationColor" && prop !== "animationPointColor"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;

  &:hover {
    ${StyledListItemText5} {
      color: ${({ animationColor }) => animationColor ?? "#ccc"};
    }

    ${StyledListItemPoint3} {
      background-color: ${({ animationPointColor }) => animationPointColor ?? "#ccc"};
    }
  }
`;
var ListItem005 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper5, { children: /* @__PURE__ */ jsxs(
    StyledListItem7,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx(StyledListItemPointWrapper3, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(
          StyledListItemPoint3,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx(StyledListItemTextWrapper5, { gap: style?.gap, children: /* @__PURE__ */ jsx(
          StyledListItemText5,
          {
            fontSize: style?.fontSize,
            color: style?.color,
            animationColor: style?.animationColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children
          }
        ) })
      ]
    }
  ) });
};
var StyledListItemWrapper6 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemFrameNumberWrapper = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemFrameNumber = styled13.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
var StyledListItemTextWrapper6 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 44)};
`;
var StyledListItemText6 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
`;
var StyledListItem8 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "animationOpacity" && prop !== "animationDuration" && prop !== "animationEase"
})`
  cursor: pointer;
  display: flex;
  justify-content: left;
  transition: opacity ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};

  &:hover {
    opacity: ${({ animationOpacity }) => animationOpacity ?? 0.5};
  }
`;
var ListItem006 = ({
  frameNumber,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledListItemWrapper6, { children: /* @__PURE__ */ jsxs(
    StyledListItem8,
    {
      onClick,
      animationOpacity: style?.animationOpacity,
      animationDuration: style?.animationDuration,
      animationEase: style?.animationEase,
      children: [
        /* @__PURE__ */ jsx(StyledListItemFrameNumberWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx(StyledListItemFrameNumber, { children: frameNumber }) }),
        /* @__PURE__ */ jsx(StyledListItemTextWrapper6, { gap: style?.gap, children: /* @__PURE__ */ jsx(StyledListItemText6, { fontSize: style?.fontSize, color: style?.color, children }) })
      ]
    }
  ) });
};
var LOADING_SIZE = {
  large: 52,
  middle: 44,
  small: 37
};
var StyledLoadingWrapper = styled13.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledLoading = styled13.svg.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "color"
})`
  fill: ${({ color: color2 }) => color2 ?? "#000"};
  width: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
  height: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
`;
var Loading001 = ({
  type = "001",
  size = "large",
  style
}) => {
  return /* @__PURE__ */ jsx(StyledLoadingWrapper, { children: /* @__PURE__ */ jsxs(
    StyledLoading,
    {
      type,
      size,
      color: style?.color,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: "0",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(45 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".125s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(90 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".25s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(135 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".375s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(180 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".5s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(225 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".625s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(270 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".75s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) }),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(315 12 12)", children: /* @__PURE__ */ jsx(
          "animate",
          {
            attributeName: "opacity",
            begin: ".875s",
            dur: "1s",
            from: "1",
            to: ".1",
            repeatCount: "indefinite"
          }
        ) })
      ]
    }
  ) });
};
var LOADING_SIZE2 = {
  large: 48,
  middle: 42,
  small: 36
};
var StyledLoadingWrapper2 = styled13.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledLoading2 = styled13.svg.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "indicatorColor" && prop !== "backgroundColor"
})`
  width: ${({ theme, size }) => theme.size.em(LOADING_SIZE2[size])};
  height: ${({ theme, size }) => theme.size.em(LOADING_SIZE2[size])};
  
  .indicator {
    fill: ${({ indicatorColor }) => indicatorColor ?? "#fff"};
  }
  
  .background {
    fill: ${({ backgroundColor }) => backgroundColor ?? "#000"};
  }
`;
var Loading002 = ({ size = "large", style }) => {
  return /* @__PURE__ */ jsx(StyledLoadingWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledLoading2,
    {
      size,
      indicatorColor: style?.indicatorColor,
      backgroundColor: style?.backgroundColor,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "background",
            d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0m0 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: "indicator",
            d: "M12 0c6.6 0 12 5.4 12 12h-3c0-5-4-9-9-9V0Z",
            children: /* @__PURE__ */ jsx(
              "animateTransform",
              {
                attributeName: "transform",
                dur: "1s",
                from: "0 12 12",
                to: "360 12 12",
                type: "rotate",
                repeatCount: "indefinite"
              }
            )
          }
        )
      ]
    }
  ) });
};

// styles/size.ts
var PC_SIZE = 1280;
var TABLET_SIZE = 768;
var SP_SIZE = 480;
var REM_SIZE = 16;

// styles/font.ts
var baseFontSizeForEm = css`
   font-size: calc(${PC_SIZE}px * 10 / ${PC_SIZE});

   ${(props) => props.theme.media.pcSize(css`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) => props.theme.media.tabletSize(css`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) => props.theme.media.spSizeLess(css`
    font-size: calc(100vw * 10 / ${SP_SIZE});
   `)}
`;
var baseFontSizeForRem = css`
   font-size: calc(${PC_SIZE}px * ${REM_SIZE} / ${PC_SIZE});

   ${(props) => props.theme.media.pcSize(css`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) => props.theme.media.tabletSize(css`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) => props.theme.media.spSizeLess(css`
      font-size: calc(100vw * ${REM_SIZE} / ${SP_SIZE});
    `)}
`;
var notoSansJP = css`
   font-family: "Noto Sans JP", sans-serif;
`;
var roboto = css`
   font-family: "Roboto", sans-serif;
`;
var zenKakuGothicNew = css`
   font-family: "Zen Kaku Gothic New", sans-serif;
`;
var lato = css`
   font-family: "Lato", sans-serif;
`;
var montserrat = css`
   font-family: "Montserrat", sans-serif;
`;
var ebGaramond = css`
   font-family: "EB Garamond", serif;
`;
var zenOldMincho = css`
   font-family: "Zen Old Mincho", serif;
`;
var em = (px) => `${px * 0.1}em`;
var rem = (px) => `${px / REM_SIZE}rem`;
var GlobalStyles = ({
  fontFamily
}) => createGlobalStyle`
  html {
    ${({ theme }) => theme.font.baseSize.rem()}
  }

  body {
    ${({ theme }) => theme.font.fontFamily[fontFamily]()}

    margin: 0;
    font-weight: 400;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat; /* Set background-repeat: no-repeat to all elements and pseudo elements */
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
    vertical-align: inherit;
  }

  /* # =================================================================
    # General elements
    # ================================================================= */

  hr {
    overflow: visible; /* Show the overflow in Edge and IE */
    height: 0; /* Add the correct box sizing in Firefox */
    color: inherit; /* Correct border color in Firefox. */
  }

  details,
  main {
    display: block; /* Render the main element consistently in IE. */
  }

  button {
    padding: 0;
    width: 100%;
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    overflow: visible; /* Address overflow set to hidden in IE 8/9/10/11 */
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  summary {
    display: list-item; /* Add the correct display in all browsers */
  }

  small {
    font-size: 80%; /* Set font-size to 80% in small elements */
  }

  [hidden] {
    display: none; /* Add the correct display in IE */
  }

  abbr[title] {
    border-bottom: none; /* Remove the bottom border in Chrome 57 */

    /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  a {
    display: block;
    text-decoration: none;
    background-color: transparent; /* Remove the gray background on active links in IE 10 */
  }

  a:active,
  a:hover {
    outline-width: 0; /* Remove the outline when hovering in all browsers */
  }

  input[type="checkbox"] {
    border-radius: 0;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace; /* Specify the font family of code elements */
  }

  pre {
    font-size: 1em; /* Correct the odd em font sizing in all browsers */
  }

  b,
  strong {
    font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
  }

  /* https://gist.github.com/unruthless/413930 */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    border-color: inherit; /* Correct border color in all Chrome, Edge, and Safari. */
    text-indent: 0; /* Remove text indentation in Chrome, Edge, and Safari */
  }

  /* # =================================================================
    # Forms
    # ================================================================= */

  input {
    border-radius: 0;
  }

  /* Replace pointer cursor in disabled elements */
  [disabled] {
    cursor: default;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
  }

  [type="search"] {
    appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
    outline-offset: -2px; /* Correct the outline style in Safari */
  }

  [type="search"]::-webkit-search-decoration {
    appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
  }

  textarea {
    overflow: auto; /* Internet Explorer 11+ */
    resize: vertical; /* Specify textarea resizability */
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit; /* Specify font inheritance of form elements */
  }

  optgroup {
    font-weight: bold; /* Restore the font weight unset by the previous rule */
  }

  button,
  select {
    text-transform: none; /* Firefox 40+, Internet Explorer 11- */
  }

  /* Remove inner padding and border in Firefox 4+ */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /* Replace focus style removed in the border reset above */
  button:-moz-focusring,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    outline: 1px dotted ButtonText;
  }

  button,
  html [type='button'], /* Prevent a WebKit bug where (2) destroys native audio and video controls in Android 4 */
  [type='reset'],
  [type='submit'] {
    appearance: auto; /* Correct the inability to style clickable types in iOS */
  }

  a:focus,
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline-width: 0;
  }

  /* Style select like a standard input */
  select {
    appearance: none; /* Firefox 36+ */
  }

  select::-ms-expand {
    display: none; /* Internet Explorer 11+ */
  }

  select::-ms-value {
    color: currentcolor; /* Internet Explorer 11+ */
  }

  legend {
    border: 0; /* Correct color not being inherited in IE 8/9/10/11 */
    color: inherit; /* Correct the color inheritance from fieldset elements in IE */
    display: table; /* Correct the text wrapping in Edge and IE */
    max-width: 100%; /* Correct the text wrapping in Edge and IE */
    white-space: normal; /* Correct the text wrapping in Edge and IE */
  }

  ::-webkit-file-upload-button {
    /* Correct the inability to style clickable types in iOS and Safari */
    appearance: auto;
    color: inherit;
    font: inherit; /* Change font properties to inherit in Chrome and Safari */
  }

  /* # =================================================================
    # Specify media element style
    # ================================================================= */

  img {
    border-style: none; /* Remove border when inside a element in IE 8/9/10 */
  }

  /* Add the correct vertical alignment in Chrome, Firefox, and Opera */
  progress {
    vertical-align: baseline;
  }

  /* # =================================================================
    # Accessibility
    # ================================================================= */

  /* Specify the progress cursor of updating elements */
  [aria-busy="true"] {
    cursor: progress;
  }

  /* Specify the pointer cursor of trigger elements */
  [aria-controls] {
    cursor: pointer;
  }

  /* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
  [aria-disabled="true"] {
    cursor: default;
  }
`;
var media = {
  pcSizeOver: (...args) => css`
      @media (min-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSize: (...args) => css`
      @media (min-width: ${TABLET_SIZE + 1}px) and (max-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSizeLess: (...args) => css`
      @media (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeOver: (...args) => css`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSize: (...args) => css`
      @media (min-width: ${SP_SIZE + 1}px) and (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeLess: (...args) => css`
      @media (max-width: ${SP_SIZE - 1}px) {
        ${args}
      }
    `,
  spSizeLess: (...args) => css`
      @media (max-width: ${SP_SIZE}px) {
        ${args}
      }
    `,
  spSizeOver: (...args) => css`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `
};

// styles/easing.ts
var easing = {
  easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
  easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  easeInOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
  easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeInOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  easeInOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  easeInOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeInOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  easeInOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  easeInOutFast: "cubic-bezier(1, 0, 0, 1)",
  authenticMotion: "cubic-bezier(0.4, 0, 0.2, 1)"
};

// styles/themes.ts
var themes = (color2) => ({
  color: color2,
  media,
  size: {
    em: (px) => em(px),
    rem: (px) => rem(px),
    customEm: (px, base) => `${px / base}em`
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
      style: (size) => {
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
var MediaContext = createContext("pc");
var MediaProvider = ({ children }) => {
  const [media2, setMedia] = useState("pc");
  const handleCheckWindowSize = () => {
    if (window.innerWidth > SP_SIZE && window.innerWidth <= TABLET_SIZE) {
      setMedia("tablet");
    } else if (window.innerWidth <= SP_SIZE) {
      setMedia("sp");
    } else {
      setMedia("pc");
    }
  };
  useEffect(() => {
    handleCheckWindowSize();
    window.addEventListener("resize", handleCheckWindowSize);
    return () => {
      window.removeEventListener("resize", handleCheckWindowSize);
    };
  }, []);
  return /* @__PURE__ */ jsx(MediaContext.Provider, { value: media2, children });
};

// components/Basic/Media/index.tsx
var Media = ({
  pc: pcNode,
  tablet: tabletNode,
  sp: spNode
}) => {
  const media2 = useContext(MediaContext);
  if (media2 === "tablet") {
    return tabletNode ? tabletNode : pcNode;
  }
  if (media2 === "sp") {
    return spNode;
  }
  return pcNode;
};
var StyledContentFooter = styled13.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var FooterButtons = ({ children }) => {
  return /* @__PURE__ */ jsx(StyledContentFooter, { children });
};
var StyledContainerWrapper = styled13.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;
var StyledContainer = styled13.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
var StyledContainerInner = styled13.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledContentWrapper = styled13.div`
  width: 100%;
  max-width: 500px;
  padding: 25px 0;
`;
var StyledContent = styled13.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 22px 13px 0 rgba(0,0,0,0.08), 0 14px 26px 6px rgba(0,0,0,0.12);
  position: relative;
  padding: 25px 40px;
  box-sizing: border-box;
`;
var StyledCloseIconWrapper = styled13.button`
  width: ${({ theme }) => theme.size.em(16)};
  position: absolute;
  top: ${({ theme }) => theme.size.em(10)};
  right: ${({ theme }) => theme.size.em(10)};
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  color: #333;
  opacity: 1;
  transition: opacity 0.2s ${({ theme }) => theme.animation.easing.easeInCubic};

  &:hover {
    opacity: 0.7;
  }
`;
styled13.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(15)};
`;
var Modal001 = ({ showModal, children, footer }) => {
  if (!showModal) {
    return null;
  }
  return /* @__PURE__ */ jsx(StyledContainerWrapper, { children: /* @__PURE__ */ jsx(StyledContainer, { children: /* @__PURE__ */ jsx(StyledContainerInner, { children: /* @__PURE__ */ jsx(StyledContentWrapper, { children: /* @__PURE__ */ jsxs(StyledContent, { children: [
    /* @__PURE__ */ jsx(StyledCloseIconWrapper, { children: /* @__PURE__ */ jsx(Svg042, {}) }),
    children,
    footer
  ] }) }) }) }) });
};
var StyledNestedListItemWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledNestedListItemIconWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * ${({ lineHeight }) => lineHeight ?? 1.25});
  position: relative;
`;
var StyledNestedListItemIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "iconColor"
})`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(${({ isOpen }) => isOpen ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledNestedListItemTextWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 34)};
`;
var StyledNestedListItemText = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
`;
var StyledNestedListItem = styled13.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;
var NestedListItem001 = ({
  icon,
  children,
  onClick,
  isOpen: controlledIsOpen,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(
    controlledIsOpen ?? false
  );
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsx(StyledNestedListItemWrapper, { children: /* @__PURE__ */ jsxs(StyledNestedListItem, { onClick: handleClick, children: [
    /* @__PURE__ */ jsx(
      StyledNestedListItemIconWrapper,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon,
          {
            isOpen,
            iconColor: style?.iconColor,
            children: icon
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(StyledNestedListItemTextWrapper, { gap: style?.gap, children: /* @__PURE__ */ jsx(
      StyledNestedListItemText,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        children
      }
    ) })
  ] }) });
};
var StyledNestedListItemWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledNestedListItemIconWrapper2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * ${({ lineHeight }) => lineHeight ?? 1.25});
  position: relative;
`;
var StyledNestedListItemIcon2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "position" && prop !== "isOpen" && prop !== "iconColor"
})`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 0;
  transform: translateY(-50%) rotate(${({ isOpen }) => isOpen ? "180deg" : "0deg"});
  transition: transform 0.3s ease;
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledNestedListItemTextWrapper2 = styled13.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.size.em(24)} 0 ${({ theme }) => theme.size.em(34)};
`;
var StyledNestedListItemText2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
`;
var StyledNestedListItem2 = styled13.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;
var NestedListItem002 = ({
  leftIcon,
  rightIcon,
  children,
  onClick,
  isOpen: controlledIsOpen,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(
    controlledIsOpen ?? false
  );
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsx(StyledNestedListItemWrapper2, { children: /* @__PURE__ */ jsxs(StyledNestedListItem2, { onClick: handleClick, children: [
    /* @__PURE__ */ jsx(
      StyledNestedListItemIconWrapper2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon2,
          {
            position: "left",
            isOpen: false,
            iconColor: style?.leftIconColor,
            children: leftIcon
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(StyledNestedListItemTextWrapper2, { children: /* @__PURE__ */ jsx(
      StyledNestedListItemText2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        children
      }
    ) }),
    /* @__PURE__ */ jsx(
      StyledNestedListItemIconWrapper2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon2,
          {
            position: "right",
            isOpen,
            iconColor: style?.rightIconColor,
            children: rightIcon
          }
        )
      }
    )
  ] }) });
};

// ../../node_modules/.pnpm/parallax-controller@1.7.1/node_modules/parallax-controller/dist/parallax-controller.esm.js
var import_bezier_easing = __toESM(require_src());
var Limits = function Limits2(properties2) {
  this.startX = properties2.startX;
  this.startY = properties2.startY;
  this.endX = properties2.endX;
  this.endY = properties2.endY;
  this.totalX = this.endX - this.startX;
  this.totalY = this.endY - this.startY;
  this.startMultiplierX = properties2.startMultiplierX || 1;
  this.endMultiplierX = properties2.endMultiplierX || 1;
  this.startMultiplierY = properties2.startMultiplierY || 1;
  this.endMultiplierY = properties2.endMultiplierY || 1;
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var ValidCSSEffects;
(function(ValidCSSEffects2) {
  ValidCSSEffects2["speed"] = "speed";
  ValidCSSEffects2["translateX"] = "translateX";
  ValidCSSEffects2["translateY"] = "translateY";
  ValidCSSEffects2["rotate"] = "rotate";
  ValidCSSEffects2["rotateX"] = "rotateX";
  ValidCSSEffects2["rotateY"] = "rotateY";
  ValidCSSEffects2["rotateZ"] = "rotateZ";
  ValidCSSEffects2["scale"] = "scale";
  ValidCSSEffects2["scaleX"] = "scaleX";
  ValidCSSEffects2["scaleY"] = "scaleY";
  ValidCSSEffects2["scaleZ"] = "scaleZ";
  ValidCSSEffects2["opacity"] = "opacity";
})(ValidCSSEffects || (ValidCSSEffects = {}));
var Units;
(function(Units2) {
  Units2["px"] = "px";
  Units2["%"] = "%";
  Units2["vh"] = "vh";
  Units2["vw"] = "vw";
})(Units || (Units = {}));
var RotationUnits;
(function(RotationUnits2) {
  RotationUnits2["deg"] = "deg";
  RotationUnits2["turn"] = "turn";
  RotationUnits2["rad"] = "rad";
})(RotationUnits || (RotationUnits = {}));
var ScaleUnits;
(function(ScaleUnits2) {
  ScaleUnits2[""] = "";
})(ScaleUnits || (ScaleUnits = {}));
var ScrollAxis;
(function(ScrollAxis2) {
  ScrollAxis2["vertical"] = "vertical";
  ScrollAxis2["horizontal"] = "horizontal";
})(ScrollAxis || (ScrollAxis = {}));
var EasingPreset;
(function(EasingPreset2) {
  EasingPreset2["ease"] = "ease";
  EasingPreset2["easeIn"] = "easeIn";
  EasingPreset2["easeOut"] = "easeOut";
  EasingPreset2["easeInOut"] = "easeInOut";
  EasingPreset2["easeInQuad"] = "easeInQuad";
  EasingPreset2["easeInCubic"] = "easeInCubic";
  EasingPreset2["easeInQuart"] = "easeInQuart";
  EasingPreset2["easeInQuint"] = "easeInQuint";
  EasingPreset2["easeInSine"] = "easeInSine";
  EasingPreset2["easeInExpo"] = "easeInExpo";
  EasingPreset2["easeInCirc"] = "easeInCirc";
  EasingPreset2["easeOutQuad"] = "easeOutQuad";
  EasingPreset2["easeOutCubic"] = "easeOutCubic";
  EasingPreset2["easeOutQuart"] = "easeOutQuart";
  EasingPreset2["easeOutQuint"] = "easeOutQuint";
  EasingPreset2["easeOutSine"] = "easeOutSine";
  EasingPreset2["easeOutExpo"] = "easeOutExpo";
  EasingPreset2["easeOutCirc"] = "easeOutCirc";
  EasingPreset2["easeInOutQuad"] = "easeInOutQuad";
  EasingPreset2["easeInOutCubic"] = "easeInOutCubic";
  EasingPreset2["easeInOutQuart"] = "easeInOutQuart";
  EasingPreset2["easeInOutQuint"] = "easeInOutQuint";
  EasingPreset2["easeInOutSine"] = "easeInOutSine";
  EasingPreset2["easeInOutExpo"] = "easeInOutExpo";
  EasingPreset2["easeInOutCirc"] = "easeInOutCirc";
  EasingPreset2["easeInBack"] = "easeInBack";
  EasingPreset2["easeOutBack"] = "easeOutBack";
  EasingPreset2["easeInOutBack"] = "easeInOutBack";
})(EasingPreset || (EasingPreset = {}));
var id = 0;
function createId() {
  ++id;
  return id;
}
var Rect2 = /* @__PURE__ */ (function() {
  function Rect3(options) {
    var rect = options.el.getBoundingClientRect();
    if (options.view.scrollContainer) {
      var scrollRect = options.view.scrollContainer.getBoundingClientRect();
      rect = _extends({}, rect, {
        top: rect.top - scrollRect.top,
        right: rect.right - scrollRect.left,
        bottom: rect.bottom - scrollRect.top,
        left: rect.left - scrollRect.left
      });
    }
    this.height = options.el.offsetHeight;
    this.width = options.el.offsetWidth;
    this.left = rect.left;
    this.right = rect.right;
    this.top = rect.top;
    this.bottom = rect.bottom;
    if (options.rootMargin) {
      this._setRectWithRootMargin(options.rootMargin);
    }
  }
  var _proto = Rect3.prototype;
  _proto._setRectWithRootMargin = function _setRectWithRootMargin(rootMargin) {
    var totalRootY = rootMargin.top + rootMargin.bottom;
    var totalRootX = rootMargin.left + rootMargin.right;
    this.top -= rootMargin.top;
    this.right += rootMargin.right;
    this.bottom += rootMargin.bottom;
    this.left -= rootMargin.left;
    this.height += totalRootY;
    this.width += totalRootX;
  };
  return Rect3;
})();
var VALID_UNITS = [ScaleUnits[""], Units.px, Units["%"], Units["vh"], Units["vw"], RotationUnits.deg, RotationUnits.turn, RotationUnits.rad];
function parseValueAndUnit(str, defaultUnit) {
  if (defaultUnit === void 0) {
    defaultUnit = Units["%"];
  }
  var out = {
    value: 0,
    unit: defaultUnit
  };
  if (typeof str === "undefined") return out;
  var isValid = typeof str === "number" || typeof str === "string";
  if (!isValid) {
    throw new Error("Invalid value provided. Must provide a value as a string or number");
  }
  str = String(str);
  out.value = parseFloat(str);
  out.unit = str.match(/[\d.\-+]*\s*(.*)/)[1] || defaultUnit;
  var isValidUnit = VALID_UNITS.includes(out.unit);
  if (!isValidUnit) {
    throw new Error("Invalid unit provided.");
  }
  return out;
}
var easingPresets = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  /* Ease IN curves */
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  /* Ease Out Curves */
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  /* Ease IN Out Curves */
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  /* Ease Bounce Curves */
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
};
function createEasingFunction(easing2) {
  if (Array.isArray(easing2)) {
    return (0, import_bezier_easing.default)(easing2[0], easing2[1], easing2[2], easing2[3]);
  }
  if (typeof easing2 === "string" && typeof easingPresets[easing2] !== "undefined") {
    var params = easingPresets[easing2];
    return (0, import_bezier_easing.default)(params[0], params[1], params[2], params[3]);
  }
  return;
}
var PARALLAX_EFFECTS = /* @__PURE__ */ Object.values(ValidCSSEffects);
var MAP_EFFECT_TO_DEFAULT_UNIT = {
  speed: "px",
  translateX: "%",
  translateY: "%",
  rotate: "deg",
  rotateX: "deg",
  rotateY: "deg",
  rotateZ: "deg",
  scale: "",
  scaleX: "",
  scaleY: "",
  scaleZ: "",
  opacity: ""
};
function parseElementTransitionEffects(props, scrollAxis) {
  var parsedEffects = {};
  PARALLAX_EFFECTS.forEach(function(key) {
    var defaultValue2 = MAP_EFFECT_TO_DEFAULT_UNIT[key];
    if (typeof (props == null ? void 0 : props[key]) === "number") {
      var value = props == null ? void 0 : props[key];
      var startSpeed = (value || 0) * 10 + "px";
      var endSpeed = (value || 0) * -10 + "px";
      var startParsed = parseValueAndUnit(startSpeed);
      var endParsed = parseValueAndUnit(endSpeed);
      var speedConfig = {
        start: startParsed.value,
        end: endParsed.value,
        unit: startParsed.unit
      };
      if (scrollAxis === ScrollAxis.vertical) {
        parsedEffects.translateY = speedConfig;
      }
      if (scrollAxis === ScrollAxis.horizontal) {
        parsedEffects.translateX = speedConfig;
      }
    }
    if (Array.isArray(props == null ? void 0 : props[key])) {
      var _value = props == null ? void 0 : props[key];
      if (typeof _value[0] !== "undefined" && typeof _value[1] !== "undefined") {
        var _startParsed = parseValueAndUnit(_value == null ? void 0 : _value[0], defaultValue2);
        var _endParsed = parseValueAndUnit(_value == null ? void 0 : _value[1], defaultValue2);
        var easing2 = createEasingFunction(_value == null ? void 0 : _value[2]);
        parsedEffects[key] = {
          start: _startParsed.value,
          end: _endParsed.value,
          unit: _startParsed.unit,
          easing: easing2
        };
        if (_startParsed.unit !== _endParsed.unit) {
          throw new Error("Must provide matching units for the min and max offset values of each axis.");
        }
      }
    }
  });
  return parsedEffects;
}
function getProgressAmount(start, totalDist, currentScroll, easing2) {
  var startAdjustedScroll = currentScroll - start;
  var amount = startAdjustedScroll / totalDist;
  if (easing2) {
    amount = easing2(amount);
  }
  return amount;
}
function isElementInView(start, end, scroll) {
  var isInView = scroll >= start && scroll <= end;
  return isInView;
}
function scaleBetween(value, newMin, newMax, oldMin, oldMax) {
  return (newMax - newMin) * (value - oldMin) / (oldMax - oldMin) + newMin;
}
function scaleEffectByProgress(effect, progress) {
  var value = scaleBetween(typeof effect.easing === "function" ? effect.easing(progress) : progress, (effect == null ? void 0 : effect.start) || 0, (effect == null ? void 0 : effect.end) || 0, 0, 1);
  return {
    value,
    unit: effect == null ? void 0 : effect.unit
  };
}
var TRANSFORM_EFFECTS = /* @__PURE__ */ Object.values(ValidCSSEffects).filter(function(v) {
  return v !== "opacity";
});
function setWillChangeStyles(el, effects) {
  var keys = Object.keys(effects);
  var hasOpacity = keys.includes("opacity");
  var willChange = "transform" + (hasOpacity ? ",opacity" : "");
  el.style.willChange = willChange;
}
function setElementStyles(effects, progress, el) {
  if (!el) return;
  var transform = getTransformStyles(effects, progress);
  var opacity = getOpacityStyles(effects, progress);
  el.style.transform = transform;
  el.style.opacity = opacity;
}
function getOpacityStyles(effects, progress) {
  var scaledOpacity = effects["opacity"] && scaleEffectByProgress(effects["opacity"], progress);
  if (typeof scaledOpacity === "undefined" || typeof scaledOpacity.value === "undefined" || typeof scaledOpacity.unit === "undefined") {
    return "";
  }
  var styleStr = "" + scaledOpacity.value;
  return styleStr;
}
function getTransformStyles(effects, progress) {
  var transform = TRANSFORM_EFFECTS.reduce(function(acc, key) {
    var scaledEffect = (
      // @ts-expect-error
      effects[key] && scaleEffectByProgress(effects[key], progress)
    );
    if (typeof scaledEffect === "undefined" || typeof scaledEffect.value === "undefined" || typeof scaledEffect.unit === "undefined") {
      return acc;
    }
    var styleStr = key + "(" + scaledEffect.value + scaledEffect.unit + ")";
    return acc + styleStr;
  }, "");
  return transform;
}
function resetStyles(element) {
  var el = element.el;
  if (!el) return;
  el.style.transform = "";
  el.style.opacity = "";
}
function createLimitsForRelativeElements(rect, view, scroll, shouldAlwaysCompleteAnimation) {
  var startY = rect.top - view.height;
  var startX = rect.left - view.width;
  var endY = rect.bottom;
  var endX = rect.right;
  startX += scroll.x;
  endX += scroll.x;
  startY += scroll.y;
  endY += scroll.y;
  if (shouldAlwaysCompleteAnimation) {
    if (scroll.y + rect.top < view.height) {
      startY = 0;
    }
    if (scroll.x + rect.left < view.width) {
      startX = 0;
    }
    if (endY > view.scrollHeight - view.height) {
      endY = view.scrollHeight - view.height;
    }
    if (endX > view.scrollWidth - view.width) {
      endX = view.scrollWidth - view.width;
    }
  }
  var limits = new Limits({
    startX,
    startY,
    endX,
    endY
  });
  return limits;
}
function getTranslateScalar(startTranslatePx, endTranslatePx, totalDist) {
  var slow = endTranslatePx > startTranslatePx;
  var totalAbsOff = (Math.abs(startTranslatePx) + Math.abs(endTranslatePx)) * (slow ? -1 : 1);
  var totalDistTrue = totalDist + totalAbsOff;
  var scale = Math.max(totalDist / totalDistTrue, 1);
  return scale;
}
function getStartEndValueInPx(translate, elementSize) {
  var start = translate.start, end = translate.end, unit = translate.unit;
  if (unit === "%") {
    var scale = elementSize / 100;
    start = start * scale;
    end = end * scale;
  }
  if (unit === "vw") {
    var startScale = start / 100;
    var endScale = end / 100;
    start = window.innerWidth * startScale;
    end = window.innerWidth * endScale;
  }
  if (unit === "vh") {
    var _startScale = start / 100;
    var _endScale = end / 100;
    start = window.innerHeight * _startScale;
    end = window.innerHeight * _endScale;
  }
  return {
    start,
    end
  };
}
var DEFAULT_VALUE = {
  start: 0,
  end: 0,
  unit: ""
};
function createLimitsWithTranslationsForRelativeElements(rect, view, effects, scroll, scrollAxis, shouldAlwaysCompleteAnimation) {
  var translateX = effects.translateX || DEFAULT_VALUE;
  var translateY = effects.translateY || DEFAULT_VALUE;
  var _getStartEndValueInPx = getStartEndValueInPx(translateX, rect.width), startTranslateXPx = _getStartEndValueInPx.start, endTranslateXPx = _getStartEndValueInPx.end;
  var _getStartEndValueInPx2 = getStartEndValueInPx(translateY, rect.height), startTranslateYPx = _getStartEndValueInPx2.start, endTranslateYPx = _getStartEndValueInPx2.end;
  var startY = rect.top - view.height;
  var startX = rect.left - view.width;
  var endY = rect.bottom;
  var endX = rect.right;
  var startMultiplierY = 1;
  var endMultiplierY = 1;
  if (scrollAxis === ScrollAxis.vertical) {
    startMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, view.height + rect.height);
    endMultiplierY = startMultiplierY;
  }
  var startMultiplierX = 1;
  var endMultiplierX = 1;
  if (scrollAxis === ScrollAxis.horizontal) {
    startMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, view.width + rect.width);
    endMultiplierX = startMultiplierX;
  }
  if (startTranslateYPx < 0) {
    startY = startY + startTranslateYPx * startMultiplierY;
  }
  if (endTranslateYPx > 0) {
    endY = endY + endTranslateYPx * endMultiplierY;
  }
  if (startTranslateXPx < 0) {
    startX = startX + startTranslateXPx * startMultiplierX;
  }
  if (endTranslateXPx > 0) {
    endX = endX + endTranslateXPx * endMultiplierX;
  }
  startX += scroll.x;
  endX += scroll.x;
  startY += scroll.y;
  endY += scroll.y;
  if (shouldAlwaysCompleteAnimation) {
    var topBeginsInView = scroll.y + rect.top < view.height;
    var leftBeginsInView = scroll.x + rect.left < view.width;
    var bottomEndsInView = scroll.y + rect.bottom > view.scrollHeight - view.height;
    var rightEndsInView = scroll.x + rect.right > view.scrollWidth - view.height;
    if (topBeginsInView && bottomEndsInView) {
      startMultiplierY = 1;
      endMultiplierY = 1;
      startY = 0;
      endY = view.scrollHeight - view.height;
    }
    if (leftBeginsInView && rightEndsInView) {
      startMultiplierX = 1;
      endMultiplierX = 1;
      startX = 0;
      endX = view.scrollWidth - view.width;
    }
    if (!topBeginsInView && bottomEndsInView) {
      startY = rect.top - view.height + scroll.y;
      endY = view.scrollHeight - view.height;
      var totalDist = endY - startY;
      startMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, totalDist);
      endMultiplierY = 1;
      if (startTranslateYPx < 0) {
        startY = startY + startTranslateYPx * startMultiplierY;
      }
    }
    if (!leftBeginsInView && rightEndsInView) {
      startX = rect.left - view.width + scroll.x;
      endX = view.scrollWidth - view.width;
      var _totalDist = endX - startX;
      startMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, _totalDist);
      endMultiplierX = 1;
      if (startTranslateXPx < 0) {
        startX = startX + startTranslateXPx * startMultiplierX;
      }
    }
    if (topBeginsInView && !bottomEndsInView) {
      startY = 0;
      endY = rect.bottom + scroll.y;
      var _totalDist2 = endY - startY;
      startMultiplierY = 1;
      endMultiplierY = getTranslateScalar(startTranslateYPx, endTranslateYPx, _totalDist2);
      if (endTranslateYPx > 0) {
        endY = endY + endTranslateYPx * endMultiplierY;
      }
    }
    if (leftBeginsInView && !rightEndsInView) {
      startX = 0;
      endX = rect.right + scroll.x;
      var _totalDist3 = endX - startX;
      startMultiplierX = 1;
      endMultiplierX = getTranslateScalar(startTranslateXPx, endTranslateXPx, _totalDist3);
      if (endTranslateXPx > 0) {
        endX = endX + endTranslateXPx * endMultiplierX;
      }
    }
  }
  var limits = new Limits({
    startX,
    startY,
    endX,
    endY,
    startMultiplierX,
    endMultiplierX,
    startMultiplierY,
    endMultiplierY
  });
  return limits;
}
function scaleTranslateEffectsForSlowerScroll(effects, limits) {
  var effectsCopy = _extends({}, effects);
  if (effectsCopy.translateX) {
    effectsCopy.translateX = _extends({}, effects.translateX, {
      start: effectsCopy.translateX.start * limits.startMultiplierX,
      end: effectsCopy.translateX.end * limits.endMultiplierX
    });
  }
  if (effectsCopy.translateY) {
    effectsCopy.translateY = _extends({}, effects.translateY, {
      start: effectsCopy.translateY.start * limits.startMultiplierY,
      end: effectsCopy.translateY.end * limits.endMultiplierY
    });
  }
  return effectsCopy;
}
function getShouldScaleTranslateEffects(props, effects, scrollAxis) {
  if (props.rootMargin || props.targetElement || props.shouldDisableScalingTranslations) {
    return false;
  }
  if (!!effects.translateX && scrollAxis === ScrollAxis.horizontal || !!effects.translateY && scrollAxis === ScrollAxis.vertical) {
    return true;
  }
  return false;
}
var clamp = function clamp2(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
var Element2 = /* @__PURE__ */ (function() {
  function Element3(options) {
    this.el = options.el;
    this.props = options.props;
    this.scrollAxis = options.scrollAxis;
    this.disabledParallaxController = options.disabledParallaxController || false;
    this.id = createId();
    this.effects = parseElementTransitionEffects(this.props, this.scrollAxis);
    this.isInView = null;
    this.progress = 0;
    this._setElementEasing(options.props.easing);
    setWillChangeStyles(options.el, this.effects);
  }
  var _proto = Element3.prototype;
  _proto.updateProps = function updateProps(nextProps) {
    this.props = _extends({}, this.props, nextProps);
    this.effects = parseElementTransitionEffects(nextProps, this.scrollAxis);
    this._setElementEasing(nextProps.easing);
    return this;
  };
  _proto.setCachedAttributes = function setCachedAttributes(view, scroll) {
    resetStyles(this);
    this.rect = new Rect2({
      el: this.props.targetElement || this.el,
      rootMargin: this.props.rootMargin,
      view
    });
    var shouldScaleTranslateEffects = getShouldScaleTranslateEffects(this.props, this.effects, this.scrollAxis);
    if (typeof this.props.startScroll === "number" && typeof this.props.endScroll === "number") {
      this.limits = new Limits({
        startX: this.props.startScroll,
        startY: this.props.startScroll,
        endX: this.props.endScroll,
        endY: this.props.endScroll
      });
      this._setElementStyles();
      return this;
    }
    if (shouldScaleTranslateEffects) {
      this.limits = createLimitsWithTranslationsForRelativeElements(this.rect, view, this.effects, scroll, this.scrollAxis, this.props.shouldAlwaysCompleteAnimation);
      this.scaledEffects = scaleTranslateEffectsForSlowerScroll(this.effects, this.limits);
    } else {
      this.limits = createLimitsForRelativeElements(this.rect, view, scroll, this.props.shouldAlwaysCompleteAnimation);
    }
    this._setElementStyles();
    return this;
  };
  _proto._updateElementIsInView = function _updateElementIsInView(nextIsInView) {
    var isFirstChange = this.isInView === null;
    if (nextIsInView !== this.isInView) {
      if (nextIsInView) {
        this.props.onEnter && this.props.onEnter(this);
      } else if (!isFirstChange) {
        this._setFinalProgress();
        this._setElementStyles();
        this.props.onExit && this.props.onExit(this);
      }
    }
    this.isInView = nextIsInView;
  };
  _proto._setFinalProgress = function _setFinalProgress() {
    var finalProgress = clamp(Math.round(this.progress), 0, 1);
    this._updateElementProgress(finalProgress);
  };
  _proto._setElementStyles = function _setElementStyles() {
    if (this.props.disabled || this.disabledParallaxController) return;
    var effects = this.scaledEffects || this.effects;
    setElementStyles(effects, this.progress, this.el);
  };
  _proto._updateElementProgress = function _updateElementProgress(nextProgress) {
    this.progress = nextProgress;
    this.props.onProgressChange && this.props.onProgressChange(this.progress);
    this.props.onChange && this.props.onChange(this);
  };
  _proto._setElementEasing = function _setElementEasing(easing2) {
    this.easing = createEasingFunction(easing2);
  };
  _proto.updateElementOptions = function updateElementOptions(options) {
    this.scrollAxis = options.scrollAxis;
    this.disabledParallaxController = options.disabledParallaxController || false;
  };
  _proto.updatePosition = function updatePosition(scroll) {
    if (!this.limits) return this;
    var isVertical = this.scrollAxis === ScrollAxis.vertical;
    var isFirstChange = this.isInView === null;
    var start = isVertical ? this.limits.startY : this.limits.startX;
    var end = isVertical ? this.limits.endY : this.limits.endX;
    var total = isVertical ? this.limits.totalY : this.limits.totalX;
    var s = isVertical ? scroll.y : scroll.x;
    var nextIsInView = isElementInView(start, end, s);
    this._updateElementIsInView(nextIsInView);
    if (nextIsInView) {
      var nextProgress = getProgressAmount(start, total, s, this.easing);
      this._updateElementProgress(nextProgress);
      this._setElementStyles();
    } else if (isFirstChange) {
      this.progress = clamp(Math.round(getProgressAmount(start, total, s, this.easing)), 0, 1);
      this._setElementStyles();
    }
    return this;
  };
  return Element3;
})();
var View = /* @__PURE__ */ (function() {
  function View2(config) {
    this.scrollContainer = config.scrollContainer;
    this.width = config.width;
    this.height = config.height;
    this.scrollHeight = config.scrollHeight;
    this.scrollWidth = config.scrollWidth;
  }
  var _proto = View2.prototype;
  _proto.hasChanged = function hasChanged(params) {
    if (params.width !== this.width || params.height !== this.height || params.scrollWidth !== this.scrollWidth || params.scrollHeight !== this.scrollHeight) {
      return true;
    }
    return false;
  };
  _proto.setSize = function setSize(params) {
    this.width = params.width;
    this.height = params.height;
    this.scrollHeight = params.scrollHeight;
    this.scrollWidth = params.scrollWidth;
    return this;
  };
  return View2;
})();
var Scroll = /* @__PURE__ */ (function() {
  function Scroll2(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
  }
  var _proto = Scroll2.prototype;
  _proto.setScroll = function setScroll(x, y) {
    this.dx = x - this.x;
    this.dy = y - this.y;
    this.x = x;
    this.y = y;
    return this;
  };
  return Scroll2;
})();
function testForPassiveScroll() {
  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassiveOption = true;
        return true;
      }
    });
    window.addEventListener("test", null, opts);
    window.removeEventListener("test", null, opts);
  } catch (e) {
  }
  return supportsPassiveOption;
}
var ParallaxController = /* @__PURE__ */ (function() {
  function ParallaxController2(_ref) {
    var _ref$scrollAxis = _ref.scrollAxis, scrollAxis = _ref$scrollAxis === void 0 ? ScrollAxis.vertical : _ref$scrollAxis, scrollContainer = _ref.scrollContainer, _ref$disabled = _ref.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled;
    this.disabled = disabled;
    this.scrollAxis = scrollAxis;
    this.elements = [];
    this._hasScrollContainer = !!scrollContainer;
    this.viewEl = scrollContainer != null ? scrollContainer : window;
    var _this$_getScrollPosit = this._getScrollPosition(), x = _this$_getScrollPosit[0], y = _this$_getScrollPosit[1];
    this.scroll = new Scroll(x, y);
    this.view = new View({
      width: 0,
      height: 0,
      scrollWidth: 0,
      scrollHeight: 0,
      scrollContainer: this._hasScrollContainer ? scrollContainer : void 0
    });
    this._ticking = false;
    this._supportsPassive = testForPassiveScroll();
    this._bindAllMethods();
    if (this.disabled) return;
    this._addListeners(this.viewEl);
    this._addResizeObserver();
    this._setViewSize();
  }
  ParallaxController2.init = function init(options) {
    var hasWindow = typeof window !== "undefined";
    if (!hasWindow) {
      throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
    }
    return new ParallaxController2(options);
  };
  var _proto = ParallaxController2.prototype;
  _proto._bindAllMethods = function _bindAllMethods() {
    var _this = this;
    ["_addListeners", "_removeListeners", "_getScrollPosition", "_handleScroll", "_handleUpdateCache", "_updateAllElements", "_updateElementPosition", "_setViewSize", "_addResizeObserver", "_checkIfViewHasChanged", "_getViewParams", "getElements", "createElement", "removeElementById", "resetElementStyles", "updateElementPropsById", "update", "updateScrollContainer", "destroy"].forEach(function(method) {
      _this[method] = _this[method].bind(_this);
    });
  };
  _proto._addListeners = function _addListeners(el) {
    el.addEventListener("scroll", this._handleScroll, this._supportsPassive ? {
      passive: true
    } : false);
    window.addEventListener("resize", this._handleUpdateCache, false);
    window.addEventListener("blur", this._handleUpdateCache, false);
    window.addEventListener("focus", this._handleUpdateCache, false);
    window.addEventListener("load", this._handleUpdateCache, false);
  };
  _proto._removeListeners = function _removeListeners(el) {
    var _this$_resizeObserver;
    el.removeEventListener("scroll", this._handleScroll, false);
    window.removeEventListener("resize", this._handleUpdateCache, false);
    window.removeEventListener("blur", this._handleUpdateCache, false);
    window.removeEventListener("focus", this._handleUpdateCache, false);
    window.removeEventListener("load", this._handleUpdateCache, false);
    (_this$_resizeObserver = this._resizeObserver) == null ? void 0 : _this$_resizeObserver.disconnect();
  };
  _proto._addResizeObserver = function _addResizeObserver() {
    var _this2 = this;
    try {
      var observedEl = this._hasScrollContainer ? this.viewEl : document.documentElement;
      this._resizeObserver = new ResizeObserver(function() {
        return _this2.update();
      });
      this._resizeObserver.observe(observedEl);
    } catch (e) {
      console.warn("Failed to create the resize observer in the ParallaxContoller");
    }
  };
  _proto._getScrollPosition = function _getScrollPosition() {
    var nx = this._hasScrollContainer ? (
      // @ts-expect-error
      this.viewEl.scrollLeft
    ) : window.pageXOffset;
    var ny = this._hasScrollContainer ? (
      // @ts-expect-error
      this.viewEl.scrollTop
    ) : window.pageYOffset;
    return [nx, ny];
  };
  _proto._handleScroll = function _handleScroll() {
    var _this$elements;
    var _this$_getScrollPosit2 = this._getScrollPosition(), nx = _this$_getScrollPosit2[0], ny = _this$_getScrollPosit2[1];
    this.scroll.setScroll(nx, ny);
    if (!this._ticking && ((_this$elements = this.elements) == null ? void 0 : _this$elements.length) > 0) {
      this._ticking = true;
      window.requestAnimationFrame(this._updateAllElements);
    }
  };
  _proto._handleUpdateCache = function _handleUpdateCache() {
    this._setViewSize();
    this._updateAllElements({
      updateCache: true
    });
  };
  _proto._updateAllElements = function _updateAllElements(_temp) {
    var _this3 = this;
    var _ref2 = _temp === void 0 ? {} : _temp, updateCache = _ref2.updateCache;
    if (this.elements) {
      this.elements.forEach(function(element) {
        if (updateCache) {
          element.setCachedAttributes(_this3.view, _this3.scroll);
        }
        _this3._updateElementPosition(element);
      });
    }
    this._ticking = false;
  };
  _proto._updateElementPosition = function _updateElementPosition(element) {
    if (element.props.disabled || this.disabled) return;
    element.updatePosition(this.scroll);
  };
  _proto._getViewParams = function _getViewParams() {
    if (this._hasScrollContainer) {
      var _width = this.viewEl.offsetWidth;
      var _height = this.viewEl.offsetHeight;
      var _scrollHeight = this.viewEl.scrollHeight;
      var _scrollWidth = this.viewEl.scrollWidth;
      return this.view.setSize({
        width: _width,
        height: _height,
        scrollHeight: _scrollHeight,
        scrollWidth: _scrollWidth
      });
    }
    var html = document.documentElement;
    var width = window.innerWidth || html.clientWidth;
    var height = window.innerHeight || html.clientHeight;
    var scrollHeight = html.scrollHeight;
    var scrollWidth = html.scrollWidth;
    return {
      width,
      height,
      scrollHeight,
      scrollWidth
    };
  };
  _proto._setViewSize = function _setViewSize() {
    return this.view.setSize(this._getViewParams());
  };
  _proto._checkIfViewHasChanged = function _checkIfViewHasChanged() {
    return this.view.hasChanged(this._getViewParams());
  };
  _proto.getElements = function getElements() {
    return this.elements;
  };
  _proto.createElement = function createElement(options) {
    var newElement = new Element2(_extends({}, options, {
      scrollAxis: this.scrollAxis,
      disabledParallaxController: this.disabled
    }));
    newElement.setCachedAttributes(this.view, this.scroll);
    this.elements = this.elements ? [].concat(this.elements, [newElement]) : [newElement];
    this._updateElementPosition(newElement);
    if (this._checkIfViewHasChanged()) {
      this.update();
    }
    return newElement;
  };
  _proto.removeElementById = function removeElementById(id2) {
    if (!this.elements) return;
    this.elements = this.elements.filter(function(el) {
      return el.id !== id2;
    });
  };
  _proto.updateElementPropsById = function updateElementPropsById(id2, props) {
    if (this.elements) {
      this.elements = this.elements.map(function(el) {
        if (el.id === id2) {
          return el.updateProps(props);
        }
        return el;
      });
    }
    this.update();
  };
  _proto.resetElementStyles = function resetElementStyles(element) {
    resetStyles(element);
  };
  _proto.update = function update() {
    var _this$_getScrollPosit3 = this._getScrollPosition(), nx = _this$_getScrollPosit3[0], ny = _this$_getScrollPosit3[1];
    this.scroll.setScroll(nx, ny);
    this._setViewSize();
    this._updateAllElements({
      updateCache: true
    });
  };
  _proto.updateScrollContainer = function updateScrollContainer(el) {
    this._removeListeners(this.viewEl);
    this.viewEl = el;
    this._hasScrollContainer = !!el;
    this.view = new View({
      width: 0,
      height: 0,
      scrollWidth: 0,
      scrollHeight: 0,
      scrollContainer: el
    });
    this._setViewSize();
    this._addListeners(this.viewEl);
    this._updateAllElements({
      updateCache: true
    });
  };
  _proto.disableParallaxController = function disableParallaxController() {
    this.disabled = true;
    this._removeListeners(this.viewEl);
    if (this.elements) {
      this.elements.forEach(function(element) {
        return resetStyles(element);
      });
    }
  };
  _proto.enableParallaxController = function enableParallaxController() {
    var _this4 = this;
    this.disabled = false;
    if (this.elements) {
      this.elements.forEach(function(element) {
        return element.updateElementOptions({
          disabledParallaxController: false,
          scrollAxis: _this4.scrollAxis
        });
      });
    }
    this._addListeners(this.viewEl);
    this._addResizeObserver();
    this._setViewSize();
  };
  _proto.disableAllElements = function disableAllElements() {
    console.warn("deprecated: use disableParallaxController() instead");
    if (this.elements) {
      this.elements = this.elements.map(function(el) {
        return el.updateProps({
          disabled: true
        });
      });
    }
    this.update();
  };
  _proto.enableAllElements = function enableAllElements() {
    console.warn("deprecated: use enableParallaxController() instead");
    if (this.elements) {
      this.elements = this.elements.map(function(el) {
        return el.updateProps({
          disabled: false
        });
      });
    }
    this.update();
  };
  _proto.destroy = function destroy() {
    this._removeListeners(this.viewEl);
    if (this.elements) {
      this.elements.forEach(function(element) {
        return resetStyles(element);
      });
    }
    this.elements = void 0;
  };
  return ParallaxController2;
})();
function removeUndefinedObjectKeys(obj) {
  Object.keys(obj).forEach((key) => obj[key] === void 0 && delete obj[key]);
  return obj;
}
function getIsolatedParallaxProps(props) {
  const { disabled, easing: easing2, endScroll, onChange, onEnter, onExit, onProgressChange, opacity, rootMargin, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, shouldAlwaysCompleteAnimation, shouldDisableScalingTranslations, speed, startScroll, targetElement, translateX, translateY, ...rest } = props;
  return {
    parallaxProps: removeUndefinedObjectKeys({
      disabled,
      easing: easing2,
      endScroll,
      onChange,
      onEnter,
      onExit,
      onProgressChange,
      opacity,
      rootMargin,
      rotate,
      rotateX,
      rotateY,
      rotateZ,
      scale,
      scaleX,
      scaleY,
      scaleZ,
      shouldAlwaysCompleteAnimation,
      shouldDisableScalingTranslations,
      speed,
      startScroll,
      targetElement,
      translateX,
      translateY
    }),
    rest
  };
}
function useVerifyController(controller) {
  useEffect(() => {
    const isServer = typeof window === "undefined";
    const isInstance = controller instanceof ParallaxController;
    if (!isServer && !controller && !isInstance) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
  }, [controller]);
}
var ParallaxContext = React4.createContext(null);
function useParallaxController() {
  const parallaxController = useContext(ParallaxContext);
  if (typeof window === "undefined") return null;
  if (!parallaxController) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
  return parallaxController;
}
function useParallax(props) {
  const controller = useParallaxController();
  const ref = useRef(null);
  const { parallaxProps } = getIsolatedParallaxProps(props);
  useVerifyController(controller);
  const [element, setElement] = useState();
  useEffect(() => {
    let newElement;
    if (ref.current instanceof HTMLElement) {
      const options = {
        el: ref.current,
        props: parallaxProps
      };
      newElement = controller === null || controller === void 0 ? void 0 : controller.createElement(options);
      setElement(newElement);
    } else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");
    return () => {
      if (newElement) controller === null || controller === void 0 || controller.removeElementById(newElement.id);
    };
  }, []);
  useEffect(() => {
    if (element) if (props.disabled) {
      controller === null || controller === void 0 || controller.resetElementStyles(element);
      controller === null || controller === void 0 || controller.updateElementPropsById(element.id, parallaxProps);
    } else controller === null || controller === void 0 || controller.updateElementPropsById(element.id, parallaxProps);
  }, [
    props.disabled,
    props.easing,
    props.endScroll,
    props.onChange,
    props.onEnter,
    props.onExit,
    props.onProgressChange,
    props.opacity,
    props.rootMargin,
    props.rotate,
    props.rotateX,
    props.rotateY,
    props.rotateZ,
    props.scale,
    props.scaleX,
    props.scaleY,
    props.scaleZ,
    props.shouldAlwaysCompleteAnimation,
    props.shouldDisableScalingTranslations,
    props.speed,
    props.startScroll,
    props.targetElement,
    props.translateX,
    props.translateY
  ]);
  return {
    ref,
    controller,
    element
  };
}
var FALLBACK_RECT = { height: 0 };
function getExpandedStyle(layer) {
  if (Array.isArray(layer.translateY)) {
    const translateYStart = parseValueAndUnit(layer.translateY[0]);
    const translateYEnd = parseValueAndUnit(layer.translateY[1]);
    if (translateYStart.unit === "px" && translateYEnd.unit === "px") return {
      top: `${Math.abs(translateYEnd.value) * -1}px`,
      bottom: `${Math.abs(translateYStart.value) * -1}px`
    };
    if (translateYStart.unit === "%" && translateYEnd.unit === "%") {
      var _layer$targetElement$, _layer$targetElement;
      const clientRect = (_layer$targetElement$ = (_layer$targetElement = layer.targetElement) === null || _layer$targetElement === void 0 ? void 0 : _layer$targetElement.getBoundingClientRect()) !== null && _layer$targetElement$ !== void 0 ? _layer$targetElement$ : FALLBACK_RECT;
      const top = Math.abs(clientRect.height * 0.01 * translateYEnd.value) * -1;
      const bottom = Math.abs(clientRect.height * 0.01 * translateYStart.value) * -1;
      return {
        top: `${top}px`,
        bottom: `${bottom}px`
      };
    }
  }
  if (layer.speed) {
    const speed = layer.speed || 0;
    const absSpeed = Math.abs(speed) * 10 * -1;
    return {
      top: `${absSpeed}px`,
      bottom: `${absSpeed}px`
    };
  }
  return {};
}
function getImageStyle(layer) {
  return layer.image ? {
    backgroundImage: `url(${layer.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  } : {};
}
var absoluteStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var ParallaxBannerLayer = (props) => {
  const { parallaxProps, rest } = getIsolatedParallaxProps(props);
  const { children, disabled, style, expanded = true, image, testId, ...divProps } = rest;
  const imageStyle = getImageStyle(props);
  const expandedStyle = expanded ? getExpandedStyle(props) : {};
  const parallax = useParallax({
    targetElement: props.targetElement,
    shouldDisableScalingTranslations: true,
    ...parallaxProps
  });
  return /* @__PURE__ */ React4.createElement("div", {
    "data-testid": testId,
    ref: parallax.ref,
    style: {
      ...imageStyle,
      ...absoluteStyle,
      ...expandedStyle,
      ...style
    },
    ...divProps
  }, rest.children);
};
var containerStyle = {
  position: "relative",
  overflow: "hidden",
  width: "100%"
};
var ParallaxBanner = (props) => {
  const [targetElement, setTargetElement] = useState(null);
  const containerRef = useRef(null);
  useEffect(() => {
    setTargetElement(containerRef.current);
  }, []);
  const { disabled: disableAllLayers, style: rootStyle, layers = [], ...rootRest } = props;
  function renderLayers() {
    if (targetElement) {
      if (layers && layers.length > 0) return layers.map((layer, i) => /* @__PURE__ */ React4.createElement(ParallaxBannerLayer, {
        ...layer,
        targetElement,
        key: `layer-${i}`,
        testId: `layer-${i}`
      }));
    }
    return null;
  }
  function renderChildren() {
    if (targetElement) return React4.Children.map(props.children, (child) => {
      const item = child;
      if ((item === null || item === void 0 ? void 0 : item.type) === ParallaxBannerLayer) return React4.cloneElement(item, { targetElement });
      return child;
    });
    return null;
  }
  return /* @__PURE__ */ React4.createElement("div", {
    ref: containerRef,
    style: {
      ...containerStyle,
      ...rootStyle
    },
    ...rootRest
  }, renderLayers(), renderChildren());
};
var ParallaxContent = ({
  children,
  parallaxProps
}) => {
  const parallax = useParallax({
    ...parallaxProps,
    onProgressChange: (progress) => {
      const clamped = Math.floor(Math.max(0, Math.min(100, progress * 100)));
      parallaxProps.onProgressChange?.(clamped);
    }
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: parallax.ref,
      style: { width: "100%" },
      children
    }
  );
};
var StyledWrapper4 = styled13.div`
  width: 100%;
  
  ${({ theme }) => theme.font.baseSize.em()}
`;
var ParallaxImage = ({ layer, height }) => {
  return /* @__PURE__ */ jsx(StyledWrapper4, { children: /* @__PURE__ */ jsx(
    ParallaxBanner,
    {
      layers: [layer],
      style: { height: `${em(height ?? 300)}`, width: "100%" }
    }
  ) });
};
var StyledRadioWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledRadio = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  display: flex;
  align-items: center;
`;
var StyledRadioCheckBox = styled13.div`
  display: flex;
  align-items: center;
`;
var StyledRadioText = styled13.label.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  padding-left: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  line-height: 1;
  cursor: pointer;
`;
var Radio001 = ({
  id: id2,
  name = id2,
  children,
  checkboxType = "003",
  checkboxSize = "small",
  style
}) => {
  return /* @__PURE__ */ jsx(StyledRadioWrapper, { children: /* @__PURE__ */ jsxs(StyledRadio, { backgroundColor: style?.backgroundColor, children: [
    /* @__PURE__ */ jsx(StyledRadioCheckBox, { children: /* @__PURE__ */ jsx(
      CheckBox001,
      {
        id: id2,
        type: checkboxType,
        size: checkboxSize,
        style: style?.checkboxStyle
      }
    ) }),
    /* @__PURE__ */ jsx(
      StyledRadioText,
      {
        htmlFor: name,
        fontSize: style?.fontSize,
        color: style?.color,
        children
      }
    )
  ] }) });
};
var StyledSelectWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelectInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor" && prop !== "backgroundColor" && prop !== "errorBorderColor"
})`
  width: 100%;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
`;
var defaultFontSize9 = (size) => size ?? 24;
var StyledSelectField = styled13.select.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "placeholderColor" && prop !== "hasPlaceholder"
})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ color: color2, placeholderColor, hasPlaceholder }) => hasPlaceholder ? placeholderColor ?? "#909090" : color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize9(fontSize))};
  padding: ${({ theme, fontSize }) => `${theme.size.customEm(20, defaultFontSize9(fontSize))} ${theme.size.customEm(20, defaultFontSize9(fontSize))} ${theme.size.customEm(20, defaultFontSize9(fontSize))} ${theme.size.customEm(10, defaultFontSize9(fontSize))}`};
  appearance: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;
var StyledSelectIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ color: color2 }) => color2 ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelect = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledSelectInner} {
      border-color: #f00;
    }

    ${StyledSelectError} {
      display: block;
    }
  `}

  ${({ type, theme }) => {
  switch (type) {
    case "001":
      return css`
          ${StyledSelectInner} {
            border-radius: 0;
          }
        `;
    case "002":
      return css`
          ${StyledSelectInner} {
            border-radius: ${theme.size.em(5)};
          }
        `;
    default:
      return css`
          ${StyledSelectInner} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledSelectError = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Select001 = ({
  type = "001",
  name = "select-001",
  options,
  value,
  onChange,
  error = false,
  errorText,
  placeholder,
  icon,
  style,
  selectProps
}) => {
  return /* @__PURE__ */ jsx(StyledSelectWrapper, { children: /* @__PURE__ */ jsxs(StyledSelect, { error: error || !!errorText, type, children: [
    /* @__PURE__ */ jsxs(
      StyledSelectInner,
      {
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        errorBorderColor: style?.errorBorderColor,
        children: [
          /* @__PURE__ */ jsxs(
            StyledSelectField,
            {
              name,
              value,
              onChange,
              fontSize: style?.fontSize,
              color: style?.color,
              placeholderColor: style?.placeholderColor,
              hasPlaceholder: !value || value === "",
              ...selectProps,
              children: [
                placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
                options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          /* @__PURE__ */ jsx(StyledSelectIcon, { color: style?.iconColor ?? "#000", children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledSelectError,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var StyledSelectWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelectInner2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor" && prop !== "errorBorderColor" && prop !== "backgroundColor"
})`
  width: 100%;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
`;
var defaultFontSize10 = (size) => size ?? 24;
var StyledSelectField2 = styled13.select.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "placeholderColor" && prop !== "hasPlaceholder"
})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ color: color2, placeholderColor, hasPlaceholder }) => hasPlaceholder ? placeholderColor ?? "#909090" : color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize10(fontSize))};
  padding: ${({ theme, fontSize }) => `${theme.size.customEm(20, defaultFontSize10(fontSize))} ${theme.size.customEm(20, defaultFontSize10(fontSize))} ${theme.size.customEm(20, defaultFontSize10(fontSize))} ${theme.size.customEm(10, defaultFontSize10(fontSize))}`};
  appearance: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;
var StyledSelectIcon2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ color: color2 }) => color2 ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelect2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css`
    ${StyledSelectInner2} {
      border-bottom-color: #f00;
    }

    ${StyledSelectError2} {
      display: block;
    }
  `}
`;
var StyledSelectError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;
var Select002 = ({
  name = "select-002",
  options,
  value,
  onChange,
  error = false,
  errorText,
  placeholder,
  icon,
  style,
  selectProps
}) => {
  return /* @__PURE__ */ jsx(StyledSelectWrapper2, { children: /* @__PURE__ */ jsxs(StyledSelect2, { error: error || !!errorText, children: [
    /* @__PURE__ */ jsxs(
      StyledSelectInner2,
      {
        borderColor: style?.borderColor,
        errorBorderColor: style?.errorBorderColor,
        backgroundColor: style?.backgroundColor,
        children: [
          /* @__PURE__ */ jsxs(
            StyledSelectField2,
            {
              name,
              value,
              onChange,
              fontSize: style?.fontSize,
              color: style?.color,
              placeholderColor: style?.placeholderColor,
              hasPlaceholder: !value || value === "",
              ...selectProps,
              children: [
                placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
                options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          /* @__PURE__ */ jsx(StyledSelectIcon2, { color: style?.iconColor ?? "#000", children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledSelectError2,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};
var useAutoSlide = ({ autoPlay, instanceRef, options }) => {
  const raf = useRef(0);
  const start = useRef(0);
  const mouseOver = useRef(false);
  const interval = useMemo(() => {
    return autoPlay?.interval || 2e3;
  }, [autoPlay?.interval]);
  const setProgress = useCallback(
    (p) => {
      if (!autoPlay) return;
      const clamped = Math.floor(Math.max(0, Math.min(100, p)));
      autoPlay.onProgress?.(clamped);
    },
    [autoPlay]
  );
  const tick = useCallback(
    (now) => {
      if (!instanceRef.current) return;
      if (!mouseOver.current && !instanceRef.current.options.disabled) {
        const elapsed = now - start.current;
        const percent = elapsed / interval * 100;
        setProgress(percent);
        if (elapsed >= interval) {
          setProgress(100);
          if (instanceRef.current.track.details.abs === instanceRef.current.track.details.maxIdx && !options?.loop) {
            instanceRef.current.moveToIdx(0);
          } else {
            instanceRef.current.next();
          }
          start.current = now;
          setProgress(0);
        }
      }
      raf.current = requestAnimationFrame(tick);
    },
    [instanceRef, setProgress, options?.loop, interval]
  );
  const startLoop = useCallback(() => {
    start.current = performance.now();
    setProgress(0);
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  }, [setProgress, tick]);
  const stopLoop = useCallback(() => {
    cancelAnimationFrame(raf.current);
  }, []);
  const mouseOverHandler = useCallback(() => {
    mouseOver.current = true;
    stopLoop();
  }, []);
  const mouseOutHandler = useCallback(() => {
    mouseOver.current = false;
    startLoop();
  }, []);
  useEffect(() => {
    if (!autoPlay || !instanceRef.current) return;
    instanceRef.current.container.removeEventListener(
      "mouseover",
      mouseOverHandler
    );
    instanceRef.current.container.removeEventListener(
      "mouseout",
      mouseOutHandler
    );
    if (!autoPlay.active) {
      stopLoop();
      return;
    }
    instanceRef.current.container.addEventListener(
      "mouseover",
      mouseOverHandler
    );
    instanceRef.current.container.addEventListener("mouseout", mouseOutHandler);
    startLoop();
    return () => {
      if (!instanceRef.current) return;
      instanceRef.current.container.removeEventListener(
        "mouseover",
        mouseOverHandler
      );
      instanceRef.current.container.removeEventListener(
        "mouseout",
        mouseOutHandler
      );
    };
  }, [autoPlay?.active, instanceRef]);
};
var useBase = ({ state, options }) => {
  const [currentIndexOfComponent, setCurrentIndexOfComponent] = useState(
    state?.currentIndex || 0
  );
  const [loadingOfComponent, setLoadingOfComponent] = useState(true);
  const currentIndex = useMemo(() => {
    return state?.currentIndex || currentIndexOfComponent;
  }, [state?.currentIndex, currentIndexOfComponent]);
  const loading = useMemo(() => {
    return state?.loading || loadingOfComponent;
  }, [state?.loading, loadingOfComponent]);
  const setCurrentIndex = useMemo(() => {
    return state?.setCurrentIndex || setCurrentIndexOfComponent;
  }, [state?.setCurrentIndex]);
  const setLoading = useMemo(() => {
    return state?.setLoading || setLoadingOfComponent;
  }, [state?.setLoading]);
  const [sliderRefOfComponent, instanceRefOfComponent] = useKeenSlider({
    ...options || {},
    slideChanged: (slider) => {
      setCurrentIndex(slider.track.details.abs);
      options?.slideChanged?.(slider);
    },
    created(s) {
      setLoading(false);
      options?.created?.(s);
    }
  });
  const sliderRef = useMemo(() => {
    return state?.slideRef || sliderRefOfComponent;
  }, [state?.slideRef, sliderRefOfComponent]);
  const instanceRef = useMemo(() => {
    return state?.instanceRef || instanceRefOfComponent;
  }, [state?.instanceRef, instanceRefOfComponent]);
  return {
    sliderRef,
    instanceRef,
    loading,
    currentIndex
  };
};
var StyledSliderWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()};

  position: relative;
`;
var StyledArrow = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "direction" && prop !== "disabled" && prop !== "size" && prop !== "position" && prop !== "color" && prop !== "hoverColor" && prop !== "disableOpacity"
})`
  position: relative;
  width: ${({ theme, size }) => theme.size.em(size ?? 40)};
  height: ${({ theme, size }) => theme.size.em(size ?? 40)};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  cursor: pointer;
  transition: color 0.3s ${({ theme }) => theme.animation.easing.easeInCubic};
  ${({ direction, position }) => direction === "left" ? css`
          left: ${({ theme }) => theme.size.em(position ?? 0)};
        ` : css`
          right: ${({ theme }) => theme.size.em(position ?? 0)};
        `}

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#000"};
  }

  ${({ disabled, disableOpacity = 0.5 }) => disabled && css`
      cursor: not-allowed;
      opacity: ${disableOpacity};
      pointer-events: none;
    `}
`;
var StyledDotsWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 10)};
  margin-top: ${({ theme, marginTop }) => theme.size.em(marginTop ?? 20)};
`;
var StyledDot = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "size" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "activeBackgroundColor" && prop !== "activeBorderColor"
})`
  width: ${({ theme, size }) => theme.size.em(size ?? 10)};
  height: ${({ theme, size }) => theme.size.em(size ?? 10)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  cursor: pointer;
  border-radius: 50%;

  ${({ active, activeBackgroundColor, activeBorderColor }) => active && css`
      background-color: ${activeBackgroundColor ?? "#000"};
      border-color: ${activeBorderColor ?? "#000"};
    `}
`;
var Slider = ({
  options,
  items,
  controller,
  state,
  dots,
  autoPlay
}) => {
  const { sliderRef, instanceRef, loading, currentIndex } = useBase({
    state,
    options
  });
  useAutoSlide({ autoPlay, instanceRef, options });
  return /* @__PURE__ */ jsxs(StyledSliderWrapper, { children: [
    /* @__PURE__ */ jsx("div", { ref: sliderRef, className: "keen-slider", children: items.map((item) => /* @__PURE__ */ jsx("div", { className: "keen-slider__slide", children: item.children }, item.key)) }),
    !loading && instanceRef.current && controller?.left && /* @__PURE__ */ jsx(
      StyledArrow,
      {
        direction: "left",
        size: controller.left.style?.size,
        position: controller.left.style?.position,
        color: controller.left.style?.color,
        hoverColor: controller.left.style?.hoverColor,
        disableOpacity: controller.left.style?.disableOpacity,
        disabled: currentIndex === 0,
        onClick: (e) => {
          e.stopPropagation();
          instanceRef.current?.prev();
        },
        children: controller.left.children
      }
    ),
    !loading && instanceRef.current && controller?.right && /* @__PURE__ */ jsx(
      StyledArrow,
      {
        direction: "right",
        size: controller.right.style?.size,
        position: controller.right.style?.position,
        color: controller.right.style?.color,
        hoverColor: controller.right.style?.hoverColor,
        disableOpacity: controller.right.style?.disableOpacity,
        disabled: currentIndex === instanceRef.current.track.details.maxIdx,
        onClick: (e) => {
          e.stopPropagation();
          instanceRef.current?.next();
        },
        children: controller.right.children
      }
    ),
    dots?.show && instanceRef.current && /* @__PURE__ */ jsx(
      StyledDotsWrapper,
      {
        gap: dots.style?.gap,
        marginTop: dots.style?.marginTop,
        children: [...Array(instanceRef.current.track.details.maxIdx + 1).keys()].map(
          (idx) => {
            return /* @__PURE__ */ jsx(
              StyledDot,
              {
                size: dots.style?.size,
                backgroundColor: dots.style?.backgroundColor,
                borderColor: dots.style?.borderColor,
                activeBackgroundColor: dots.style?.activeBackgroundColor,
                activeBorderColor: dots.style?.activeBorderColor,
                active: idx === currentIndex,
                onClick: () => {
                  instanceRef.current?.moveToIdx(idx);
                }
              },
              idx
            );
          }
        )
      }
    )
  ] });
};
var StyledText3 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()}

  display: block;
`;
var StyledTextContent = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
`;
var Text = ({ children, fontSize, color: color2 }) => {
  return /* @__PURE__ */ jsx(StyledText3, { children: /* @__PURE__ */ jsx(StyledTextContent, { fontSize, color: color2, children }) });
};
var StyledTextButtonWrapper = styled13.span`
  display: block;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextButton = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "color" && prop !== "fontSize" && prop !== "hoverColor" && prop !== "hoverDuration" && prop !== "hoverEase"
})`
  display: ${({ type }) => type === "002" ? "inline-block" : "block"};
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 12)};
  transition: color ${({ hoverDuration }) => hoverDuration ?? "0.3s"} ${({ hoverEase, theme }) => theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
  cursor: pointer;
  
  ${({ type, color: color2, hoverDuration, hoverEase, theme }) => type === "002" && css`
      border-bottom: 1px solid ${color2 ?? "#fff"};
      transition: 
        border-color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]},
        color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
    `}

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#000"};
    
    ${({ type, hoverColor }) => type === "002" && css`
        border-color: ${hoverColor ?? "#000"};
      `}
  }
`;
var TextButton001 = ({
  type = "001",
  children,
  onClick,
  as = "span",
  href,
  style
}) => {
  const buttonProps = {
    ...as === "a" && href ? { href } : {},
    ...onClick ? { onClick } : {}
  };
  return /* @__PURE__ */ jsx(StyledTextButtonWrapper, { children: /* @__PURE__ */ jsx(
    StyledTextButton,
    {
      as,
      type,
      color: style?.color,
      fontSize: style?.fontSize,
      hoverColor: style?.hoverColor,
      hoverDuration: style?.hoverDuration,
      hoverEase: style?.hoverEase,
      ...buttonProps,
      children
    }
  ) });
};
var StyledTextFieldWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color" && prop !== "borderColor" && prop !== "placeholderColor" && prop !== "inputType"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding: ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  ${({ inputType }) => inputType === "001" && css`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;
var TextField001 = ({
  type = "001",
  name = "text-field-001",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx(StyledTextFieldWrapper, { children: /* @__PURE__ */ jsxs(StyledTextField, { type, hasError, children: [
    /* @__PURE__ */ jsx(
      StyledTextFieldInput,
      {
        name,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        borderColor: hasError ? style?.errorStyle?.borderColor ?? "#f00" : style?.borderColor ?? "#000",
        placeholderColor: style?.placeholderColor,
        inputType: type
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledTextFieldError,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};
var StyledTextFieldWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput2 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color" && prop !== "borderColor" && prop !== "placeholderColor"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  padding: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)} ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)} * 2);
  resize: vertical;
  background: transparent;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }
`;
var StyledTextFieldError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;
var TextField002 = ({
  name = "text-field-002",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx(StyledTextFieldWrapper2, { children: /* @__PURE__ */ jsxs(StyledTextField2, { hasError, children: [
    /* @__PURE__ */ jsx(
      StyledTextFieldInput2,
      {
        name,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        borderColor: hasError ? style?.errorStyle?.borderColor ?? "#f00" : style?.borderColor ?? "#000",
        placeholderColor: style?.placeholderColor
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledTextFieldError2,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};
var StyledTextFieldWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField3 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput3 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "placeholderColor"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  padding: ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }
`;
var StyledTextFieldError3 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;
var TextField003 = ({
  name = "text-field-003",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx(StyledTextFieldWrapper3, { children: /* @__PURE__ */ jsxs(StyledTextField3, { hasError, children: [
    /* @__PURE__ */ jsx(
      StyledTextFieldInput3,
      {
        name,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        borderColor: style?.borderColor,
        backgroundColor: hasError ? style?.errorStyle?.backgroundColor ?? "#fdd" : style?.backgroundColor ?? "#eee",
        placeholderColor: style?.placeholderColor
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledTextFieldError3,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};
var StyledTextFieldWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput4 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color" && prop !== "backgroundColor" && prop !== "placeholderColor" && prop !== "inputType"
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  padding: ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }

  ${({ inputType }) => inputType === "001" && css`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError4 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;
var TextField004 = ({
  type = "001",
  name = "text-field-004",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx(StyledTextFieldWrapper4, { children: /* @__PURE__ */ jsxs(StyledTextField4, { hasError, children: [
    /* @__PURE__ */ jsx(
      StyledTextFieldInput4,
      {
        name,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        backgroundColor: hasError ? style?.errorStyle?.backgroundColor ?? "#fdd" : style?.backgroundColor ?? "#eee",
        placeholderColor: style?.placeholderColor,
        inputType: type
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledTextFieldError4,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};
var StyledTextFieldWrapper5 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput5 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "placeholderColor" && prop !== "inputType"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#eee"};
  padding: ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)};
  color: ${({ color: color2 }) => color2 ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 5em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  min-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 3em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  max-height: calc((${({ lineHeight }) => lineHeight ?? 1.5} * 15em) + ${({ theme, fontSize }) => theme.size.em(10 / (fontSize ?? 18) * 10)} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor ?? "#909090"};
  }

  &:focus {
    outline: none;
  }

  ${({ inputType }) => inputType === "001" && css`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError5 = styled13.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;
var TextField005 = ({
  type = "001",
  name = "text-field-005",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx(StyledTextFieldWrapper5, { children: /* @__PURE__ */ jsxs(StyledTextField5, { hasError, children: [
    /* @__PURE__ */ jsx(
      StyledTextFieldInput5,
      {
        name,
        placeholder,
        value: currentValue,
        onChange: handleChange,
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        borderColor: style?.borderColor,
        backgroundColor: hasError ? style?.errorStyle?.backgroundColor ?? "#fdd" : style?.backgroundColor ?? "#eee",
        placeholderColor: style?.placeholderColor,
        inputType: type
      }
    ),
    errorText && /* @__PURE__ */ jsx(
      StyledTextFieldError5,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};
var StyledTextIconWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "gap"
})`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 4)};
  flex-direction: ${({ iconPosition }) => iconPosition === "left" ? "row-reverse" : "row"};
`;
var StyledTextIconText = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  line-height: 1;
`;
var StyledTextIconIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor" && prop !== "iconSize"
})`
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize ?? "large")}
`;
var TextIcon001 = ({
  icon,
  children,
  iconPosition = "right",
  iconSize,
  style
}) => {
  return /* @__PURE__ */ jsx(StyledTextIconWrapper, { children: /* @__PURE__ */ jsxs(StyledTextIcon, { iconPosition, gap: style?.gap, children: [
    /* @__PURE__ */ jsx(StyledTextIconText, { fontSize: style?.fontSize, color: style?.color, children }),
    /* @__PURE__ */ jsx(StyledTextIconIcon, { iconColor: style?.iconColor, iconSize, children: icon })
  ] }) });
};
var StyledToggleWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggleOpen = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "animationBackgroundColorBefore" && prop !== "animationBackgroundColorAfter"
})`
  position: relative;
  width: ${({ theme }) => theme.size.em(80)};
  height: ${({ theme }) => theme.size.em(80)};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ animationBackgroundColorBefore }) => animationBackgroundColorBefore ?? "#d9d9d9"};
    opacity: 0;
    transform: scale(1.2);
    transition:
      opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ animationBackgroundColorAfter }) => animationBackgroundColorAfter ?? "#fff"};
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    backface-visibility: hidden;
  }

  &:hover {
    &::before {
      opacity: 0.8;
      transform: scale(1);
    }

    &::after {
      transform: scale(0.8);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
    }
  }
`;
var StyledToggleOpenInner = styled13.div`
  width: ${({ theme }) => theme.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.em(5)};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleOpenLine = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  width: 100%;
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
`;
var StyledToggleClose = styled13.div`
  width: ${({ theme }) => theme.size.em(80)};
  height: ${({ theme }) => theme.size.em(80)};
  cursor: pointer;
  display: block;
  position: relative;
`;
var StyledToggleCloseInner = styled13.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledToggleCloseContainer = styled13.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleCloseLineWrapper = styled13.div`
  position: relative;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
`;
var StyledToggleCloseLine = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor" && prop !== "animationBackgroundColorLine"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: ${({ theme }) => theme.size.em(28)};
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ animationBackgroundColorLine }) => animationBackgroundColorLine ?? "#ccc"};
    transform: scale(0);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ${StyledToggleCloseInner}:hover & {
    &::after {
      transform: scale(1);
    }
  }
`;
var Toggle001 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx(StyledToggleWrapper2, { children: isOpen ? /* @__PURE__ */ jsx(StyledToggleClose, { onClick: handleClick, children: /* @__PURE__ */ jsx(StyledToggleCloseInner, { children: /* @__PURE__ */ jsx(StyledToggleCloseContainer, { children: /* @__PURE__ */ jsxs(StyledToggleCloseLineWrapper, { children: [
    /* @__PURE__ */ jsx(
      StyledToggleCloseLine,
      {
        lineColor: style?.lineColor,
        animationBackgroundColorLine: style?.animationBackgroundColorLine
      }
    ),
    /* @__PURE__ */ jsx(
      StyledToggleCloseLine,
      {
        lineColor: style?.lineColor,
        animationBackgroundColorLine: style?.animationBackgroundColorLine
      }
    )
  ] }) }) }) }) : /* @__PURE__ */ jsx(
    StyledToggleOpen,
    {
      onClick: handleClick,
      animationBackgroundColorBefore: style?.animationBackgroundColorBefore,
      animationBackgroundColorAfter: style?.animationBackgroundColorAfter,
      children: /* @__PURE__ */ jsxs(StyledToggleOpenInner, { children: [
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: style?.lineColor }),
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: style?.lineColor }),
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: style?.lineColor })
      ] })
    }
  ) });
};
var scaleOut = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;
var scaleIn = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;
var StyledToggleWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggle = styled13.div`
  display: block;
`;
var StyledToggleInner2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen"
})`
  width: ${({ theme }) => theme.size.em(40)};
  height: ${({ theme }) => theme.size.em(40)};
  position: relative;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  ${({ isOpen }) => isOpen && css`
      ${StyledToggleOpenLine2} {
        &:nth-child(1) {
          animation: ${scaleOut} 0.15s ease forwards;
        }
        &:nth-child(2) {
          animation: ${scaleOut} 0.15s 0.15s ease forwards;
        }
        &:nth-child(3) {
          animation: ${scaleOut} 0.15s 0.3s ease forwards;
        }
      }

      ${StyledToggleCloseLine2}::after {
        animation: ${scaleIn} 0.15s 0.45s ease forwards;
      }
    `}

  ${({ isOpen }) => isOpen === false && css`
      ${StyledToggleCloseLine2}::after {
        animation: ${scaleOut} 0.15s ease forwards;
      }

      ${StyledToggleOpenLine2} {
        transform: scaleX(0);
        animation: ${scaleIn} 0.15s 0.15s ease forwards;
      }
    `}
`;
var StyledToggleOpen2 = styled13.div`
  width: ${({ theme }) => theme.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.em(3)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleOpenLine2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  width: 100%;
  height: ${({ theme }) => theme.size.em(2)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
  transform-origin: left;
  transition: transform 0.2s ${({ theme }) => theme.animation.easing.easeInSine};
`;
var StyledToggleCloseWrapper2 = styled13.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleClose2 = styled13.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
var StyledToggleCloseLine2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ theme }) => theme.size.em(28)};
  height: ${({ theme }) => theme.size.em(2)};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ lineColor }) => lineColor ?? "#000"};
    transform: scale(0);
    transition: transform 0.2s ${({ theme }) => theme.animation.easing.easeInSine};
  }

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);

    &::after {
      transform-origin: right;
    }
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);

    &::after {
      transform-origin: left;
    }
  }
`;
var Toggle002 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(
    void 0
  );
  const isOpen = useMemo(() => {
    if (internalIsOpen === void 0) return void 0;
    return controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  }, [controlledIsOpen, internalIsOpen]);
  const handleClick = () => {
    const newState = !isOpen;
    setInternalIsOpen(newState);
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx(StyledToggleWrapper3, { children: /* @__PURE__ */ jsx(StyledToggle, { children: /* @__PURE__ */ jsxs(StyledToggleInner2, { onClick: handleClick, isOpen, children: [
    /* @__PURE__ */ jsxs(StyledToggleOpen2, { children: [
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: style?.lineColor })
    ] }),
    /* @__PURE__ */ jsx(StyledToggleCloseWrapper2, { children: /* @__PURE__ */ jsxs(StyledToggleClose2, { children: [
      /* @__PURE__ */ jsx(StyledToggleCloseLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleCloseLine2, { lineColor: style?.lineColor })
    ] }) })
  ] }) }) });
};
var StyledToggleWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggle2 = styled13.button.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  width: ${({ theme }) => theme.size.em(60)};
  height: ${({ theme }) => theme.size.em(60)};
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "transparent"};
`;
var StyledToggleInner3 = styled13.span`
  width: ${({ theme }) => theme.size.em(50)};
  height: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
`;
var StyledToggleOpenLineWrapper = styled13.span`
  width: 100%;
  height: 1px;
  transition: opacity 0.2s ${({ theme }) => theme.animation.easing.easeInSine};
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  display: block;

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
var StyledToggleCloseLineWrapper2 = styled13.span`
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;

  &:nth-child(1) {
    transform: translate(-50%, calc(-50% + ${({ theme }) => theme.size.em(5)}));
  }

  &:nth-child(2) {
    transform: translate(-50%, calc(-50% + ${({ theme }) => theme.size.em(-5)}));
  }
`;
var StyledToggleLine2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
`;
var Toggle003 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const openLine1Ref = useRef(null);
  const openLine2Ref = useRef(null);
  const closeLine1Ref = useRef(null);
  const closeLine2Ref = useRef(null);
  const animationRef = useRef(false);
  const [internalIsOpen, setInternalIsOpen] = useState(
    controlledIsOpen
  );
  const isOpen = useMemo(() => {
    if (internalIsOpen === void 0) return void 0;
    return controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  }, [controlledIsOpen, internalIsOpen]);
  const handleClick = () => {
    const newState = !isOpen;
    animationRef.current = false;
    setInternalIsOpen(newState);
    onChange?.(newState);
    onClick?.();
  };
  const handleMouseEnter = () => {
    if (animationRef.current) return;
    animationRef.current = true;
    if (isOpen) {
      gsap$1.to([openLine1Ref.current, openLine2Ref.current], {
        x: "100%",
        ease: "power2.inOut",
        duration: 0.3,
        onComplete: () => {
          if (!openLine1Ref.current || !openLine2Ref.current) return;
          gsap$1.set([openLine1Ref.current, openLine2Ref.current], {
            x: "-100%"
          });
          gsap$1.to([openLine1Ref.current, openLine2Ref.current], {
            x: "0",
            ease: "power2.inOut",
            duration: 0.3,
            onComplete: () => {
              animationRef.current = false;
            }
          });
        }
      });
      return;
    }
    gsap$1.to([closeLine1Ref.current, closeLine2Ref.current], {
      x: "100%",
      ease: "power2.inOut",
      duration: 0.3,
      onComplete: () => {
        if (!closeLine1Ref.current || !closeLine2Ref.current) return;
        gsap$1.set([closeLine1Ref.current, closeLine2Ref.current], {
          x: "-100%"
        });
        gsap$1.to([closeLine1Ref.current, closeLine2Ref.current], {
          x: "0",
          ease: "power2.inOut",
          duration: 0.3,
          onComplete: () => {
            animationRef.current = false;
          }
        });
      }
    });
  };
  return /* @__PURE__ */ jsx(StyledToggleWrapper4, { children: /* @__PURE__ */ jsx(
    StyledToggle2,
    {
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      backgroundColor: style?.backgroundColor,
      children: /* @__PURE__ */ jsx(StyledToggleInner3, { children: isOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(StyledToggleOpenLineWrapper, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: openLine1Ref,
            lineColor: style?.lineColor
          }
        ) }),
        /* @__PURE__ */ jsx(StyledToggleOpenLineWrapper, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: openLine2Ref,
            lineColor: style?.lineColor
          }
        ) })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(StyledToggleCloseLineWrapper2, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: closeLine1Ref,
            lineColor: style?.lineColor
          }
        ) }),
        /* @__PURE__ */ jsx(StyledToggleCloseLineWrapper2, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: closeLine2Ref,
            lineColor: style?.lineColor
          }
        ) })
      ] }) })
    }
  ) });
};
var StyledToggleContent = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "duration" && prop !== "easing"
})`
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ duration }) => duration ?? "0.3s"} ${({ easing: easing2, theme }) => theme.animation.easing[easing2 ?? "easeInSine"]};  

  ${({ isOpen }) => isOpen && css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
var ToggleSomething001 = ({
  isOpen,
  children,
  duration,
  easing: easing2,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    StyledToggleContent,
    {
      isOpen,
      duration,
      easing: easing2,
      ...props,
      children
    }
  );
};

export { Accordion001, Accordion002, Accordion003, Accordion004, Accordion005, Balloon001, Balloon002, BgImageContent, Breadcrumbs, Button001, Button002, CheckBox001, CheckBox002, CircleProgress, DragAndDrop001, Dropdown001, Dropdown002, FadeInAndZoomImages, FooterButtons, FrameIcon001, FrameNumber001, GlobalStyles, GoogleMap, Header001, Input001, Input002, Input003, Input004, Input005, Input006, JmcArrowButton, JmcButton, JmcCircleToggle, Label001, Label002, List001, ListItem001, ListItem002, ListItem003, ListItem004, ListItem005, ListItem006, Loading001, Loading002, Media, MediaContext, MediaProvider, Modal001, NestedListItem001, NestedListItem002, PC_SIZE, ParallaxContent, ParallaxImage, REM_SIZE, Radio001, RebitaButton, RebitaCircleProgress, RebitaFadeSlideImage, RebitaFadeText, RebitaPanel, RebitaSlideGuideDot, RebitaTextButtonWithIcon, RebitaToggle, SP_SIZE, Select001, Select002, Slider, Svg001 as Svg001Icon, Svg002 as Svg002Icon, Svg003 as Svg003Icon, Svg004 as Svg004Icon, Svg005 as Svg005Icon, Svg006 as Svg006Icon, Svg007 as Svg007Icon, Svg008 as Svg008Icon, Svg009 as Svg009Icon, Svg010 as Svg010Icon, Svg011 as Svg011Icon, Svg012 as Svg012Icon, Svg013 as Svg013Icon, Svg014 as Svg014Icon, Svg015 as Svg015Icon, Svg016 as Svg016Icon, Svg017 as Svg017Icon, Svg018 as Svg018Icon, Svg019 as Svg019Icon, Svg020 as Svg020Icon, Svg021 as Svg021Icon, Svg022 as Svg022Icon, Svg023 as Svg023Icon, Svg024 as Svg024Icon, Svg025 as Svg025Icon, Svg026 as Svg026Icon, Svg027 as Svg027Icon, Svg028 as Svg028Icon, Svg029 as Svg029Icon, Svg030 as Svg030Icon, Svg031 as Svg031Icon, Svg032 as Svg032Icon, Svg033 as Svg033Icon, Svg034 as Svg034Icon, Svg035 as Svg035Icon, Svg036 as Svg036Icon, Svg037 as Svg037Icon, Svg038 as Svg038Icon, Svg039 as Svg039Icon, Svg040 as Svg040Icon, Svg041 as Svg041Icon, Svg042 as Svg042Icon, Svg043 as Svg043Icon, TABLET_SIZE, Text, TextButton001, TextField001, TextField002, TextField003, TextField004, TextField005, TextIcon001, Toggle001, Toggle002, Toggle003, ToggleSomething001, VerticalRollingText, baseFontSizeForEm, baseFontSizeForRem, color, ebGaramond, em, hexToRgb, lato, media, montserrat, notoSansJP, rem, roboto, themes, zenKakuGothicNew, zenOldMincho };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map