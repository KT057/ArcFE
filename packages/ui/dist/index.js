import styled13, { css, keyframes, createGlobalStyle } from 'styled-components';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import gsap, { gsap as gsap$1 } from 'gsap';
import React4, { forwardRef, useMemo, useRef, useCallback, useState, createContext, useImperativeHandle, Children, useEffect, useId, useContext, memo, cloneElement, useReducer, useLayoutEffect as useLayoutEffect$1, isValidElement } from 'react';
import { useButton } from '@react-aria/button';
import { mergeProps, useObjectRef, getOwnerDocument as getOwnerDocument$1, filterDOMProps, useFormReset, getOwnerWindow, useGlobalListeners, useEffectEvent, nodeContains, getEventTarget, isVirtualPointerEvent, focusWithoutScrolling, useLayoutEffect, getActiveElement, isVirtualClick, useSyncRef, isIOS, openLink, chain, isMac, isFocusable, runAfterTransition } from '@react-aria/utils';
import { createPortal, unstable_batchedUpdates } from 'react-dom';
import { useTextField } from '@react-aria/textfield';
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
  "../../node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js"(exports$1, module) {
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
  "../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js"(exports$1, module) {
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(StyledBgImageContentWrapper, { children: /* @__PURE__ */ jsx(
    StyledBgImageContentContainer,
    {
      height,
      imageUrl,
      animationType,
      scale: appearance?.scale,
      duration: appearance?.duration,
      easing: appearance?.easing,
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(StyledCircleProgressWrapper, { children: /* @__PURE__ */ jsx(StyledCircleProgressContainer, { size, children: /* @__PURE__ */ jsxs(StyledCircleProgressSvg, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCircleProgressTrack,
      {
        trackColor: appearance?.trackColor,
        size
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCircleProgressProgress,
      {
        primaryColor: appearance?.primaryColor,
        size,
        strokeWidth: appearance?.strokeWidth,
        animationDuration: appearance?.animationDuration,
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
  scaleFrom = 1,
  scaleTo = 1.2,
  zoomDirection = "in",
  state,
  height,
  onImageChange,
  onProgress
}) => {
  const wrapperRef = useRef(null);
  const [isFirstAnimation, setIsFirstAnimation] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(state?.currentIndex ?? 0);
  const shouldAnimate = images.length > 1;
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
      const fromScale = zoomDirection === "out" ? scaleTo : zoomDirection === "none" ? scaleFrom : scaleFrom;
      const toScale = zoomDirection === "out" ? scaleFrom : zoomDirection === "none" ? scaleFrom : scaleTo;
      gsap.set(imageElement, {
        scale: fromScale,
        opacity: 1
      });
      const tween = gsap.to(imageElement, {
        scale: toScale,
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
      scaleFrom,
      onImageChange,
      onNextIndex,
      onProgress,
      scaleTo,
      zoomDirection
    ]
  );
  const switchToIndex = useCallback(
    (index) => {
      if (!wrapperRef.current || !shouldAnimate) return;
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
      isFirstAnimation,
      shouldAnimate
    ]
  );
  useEffect(() => {
    if (!shouldAnimate) return;
    switchToIndex(currentIndexData);
    return () => {
      const imageElements = getImageElements();
      gsap.killTweensOf(imageElements);
    };
  }, [currentIndexData, shouldAnimate]);
  if (!images || images.length === 0) return null;
  return /* @__PURE__ */ jsx(StyledFadeInAndZoomImagesWrapper, { children: /* @__PURE__ */ jsx(StyledFadeInAndZoomImagesImageInner, { ref: wrapperRef, height, children: images.map((image, index) => /* @__PURE__ */ jsx(
    StyledFadeInAndZoomImagesContent,
    {
      className: "fade-in-zoom-content",
      style: !shouldAnimate && index === 0 ? {
        opacity: 1,
        zIndex: 1
      } : void 0,
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
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19 12L5 12M19 12L13 18M19 12L13 6",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg002 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19 12L5 12M19 12L13 18M19 12L13 6",
        stroke: "currentColor",
        strokeLinecap: "square"
      }
    )
  }
);
var Svg003 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8 19L16 12L8 5",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg004 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8 19L16 12L8 5",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg005 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 19L12 12L5 5",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 19L19 12L12 5",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg006 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 19L12 12L5 5",
          stroke: "currentColor",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12 19L19 12L12 5",
          stroke: "currentColor",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg007 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx("path", { d: "M17 12L7 19V5L17 12Z", fill: "currentColor" })
  }
);
var Svg008 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M15.8297 11.1808C16.3984 11.5789 16.3984 12.4211 15.8297 12.8192L8.57346 17.8986C7.91069 18.3625 7 17.8884 7 17.0793V6.92066C7 6.11163 7.91068 5.63748 8.57346 6.10142L15.8297 11.1808Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg009 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2 14.6786V9.32143H12.101V5L22 12L12.101 19V14.6786H2Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg010 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17.5 12C17.5 12.163 17.4205 12.3156 17.2871 12.4092L7.28711 19.4092C7.13446 19.516 6.93484 19.5293 6.76953 19.4434C6.60416 19.3573 6.5 19.1864 6.5 19L6.5 5C6.5 4.81356 6.60416 4.64274 6.76953 4.55664C6.93484 4.47071 7.13446 4.48397 7.28711 4.59082L17.2871 11.5908L17.376 11.6709C17.4549 11.7611 17.5 11.8775 17.5 12Z",
        stroke: "currentColor",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg011 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M17.2871 12.4092L7.28711 19.4092L6.5 19.96L6.5 4.04004L7.28711 4.59082L17.2871 11.5908L17.8721 12L17.2871 12.4092Z",
        stroke: "currentColor"
      }
    )
  }
);
var Svg012 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M14.8315 7V11H2.04301L2 13.01H14.8315V17L22 12L14.8315 7Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg013 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: 5.5,
          y: 6.5,
          width: 16,
          height: 11,
          fill: "white",
          stroke: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: 2.5,
          y: 9.5,
          width: 16,
          height: 11,
          fill: "white",
          stroke: "currentColor"
        }
      )
    ]
  }
);
var Svg014 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("line", { x1: 4, y1: 4.43964, x2: 12.0471, y2: 4.43964, stroke: "currentColor" }),
      /* @__PURE__ */ jsx("line", { x1: 4.49744, y1: 20, x2: 4.49744, y2: 4.9396, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        "line",
        {
          x1: 19.5858,
          y1: 20,
          x2: 19.5858,
          y2: 11.9678,
          stroke: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 4.99744, y1: 19.5, x2: 20.0858, y2: 19.5, stroke: "currentColor" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M12.7109 11.3116L19.4666 4.53952M19.6355 9.11067L19.6355 4.37022L14.9065 4.37022",
          stroke: "currentColor"
        }
      )
    ]
  }
);
var Svg015 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15.813 7.24186C15.813 6.98947 15.9134 6.74742 16.0922 6.56895C16.271 6.39048 16.5134 6.29022 16.7662 6.29022C17.0191 6.29022 17.2615 6.39048 17.4403 6.56895C17.6191 6.74742 17.7195 6.98947 17.7195 7.24186C17.7195 7.49425 17.6191 7.7363 17.4403 7.91477C17.2615 8.09324 17.0191 8.1935 16.7662 8.1935C16.5134 8.1935 16.271 8.09324 16.0922 7.91477C15.9134 7.7363 15.813 7.49425 15.813 7.24186Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 7.47974C10.7991 7.47974 9.64739 7.95598 8.79824 8.8037C7.94909 9.65141 7.47205 10.8012 7.47205 12C7.47205 13.1989 7.94909 14.3486 8.79824 15.1963C9.64739 16.0441 10.7991 16.5203 12 16.5203C13.2008 16.5203 14.3525 16.0441 15.2017 15.1963C16.0508 14.3486 16.5279 13.1989 16.5279 12C16.5279 10.8012 16.0508 9.65141 15.2017 8.8037C14.3525 7.95598 13.2008 7.47974 12 7.47974ZM8.90192 12C8.90192 11.1797 9.22832 10.3931 9.80931 9.81306C10.3903 9.23304 11.1783 8.90719 12 8.90719C12.8216 8.90719 13.6096 9.23304 14.1906 9.81306C14.7716 10.3931 15.098 11.1797 15.098 12C15.098 12.8203 14.7716 13.607 14.1906 14.187C13.6096 14.767 12.8216 15.0928 12 15.0928C11.1783 15.0928 10.3903 14.767 9.80931 14.187C9.22832 13.607 8.90192 12.8203 8.90192 12Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M17.0122 3.27662C13.6809 2.90779 10.3191 2.90779 6.98783 3.27662C5.0699 3.49074 3.52087 4.99909 3.29591 6.9233C2.90136 10.2965 2.90136 13.7041 3.29591 17.0773C3.52087 19.0015 5.06894 20.5098 6.98783 20.724C10.3191 21.092 13.6809 21.092 17.0122 20.724C18.9301 20.5098 20.4791 19.0015 20.7041 17.0773C21.0986 13.7041 21.0986 10.2965 20.7041 6.9233C20.4791 4.99909 18.9311 3.49074 17.0122 3.27662ZM7.14607 4.69457C10.3721 4.33742 13.6279 4.33742 16.8539 4.69457C18.1217 4.83731 19.137 5.83558 19.2847 7.08984C19.6671 10.3523 19.6671 13.6482 19.2847 16.9107C19.2083 17.5246 18.9268 18.0948 18.4857 18.5292C18.0447 18.9637 17.4698 19.237 16.8539 19.3051C13.6279 19.6622 10.3721 19.6622 7.14607 19.3051C6.53022 19.237 5.95532 18.9637 5.51426 18.5292C5.07319 18.0948 4.79171 17.5246 4.71529 16.9107C4.3329 13.6482 4.3329 10.3523 4.71529 7.08984C4.79171 6.47599 5.07319 5.90579 5.51426 5.47134C5.95532 5.03689 6.53022 4.76261 7.14607 4.69457Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
var Svg016 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M13.5222 10.775L19.4785 4H18.0669L12.8952 9.8825L8.76444 4H4L10.2466 12.8955L4 20H5.4116L10.8733 13.7879L15.2356 20H20L13.5218 10.775H13.5222ZM11.5889 12.9738L10.9559 12.088L5.92016 5.03975H8.08827L12.152 10.728L12.7849 11.6137L18.0676 19.0075H15.8997L11.5889 12.9741V12.9738Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg017 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 12.0226C21 7.04211 16.968 3 12 3C7.032 3 3 7.04211 3 12.0226C3 16.3895 6.096 20.0256 10.2 20.8647V14.7293H8.4V12.0226H10.2V9.76692C10.2 8.02556 11.613 6.60902 13.35 6.60902H15.6V9.31579H13.8C13.305 9.31579 12.9 9.7218 12.9 10.218V12.0226H15.6V14.7293H12.9V21C17.445 20.5489 21 16.7053 21 12.0226Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg018 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("path", { d: "M3 19H21V5H3V19Z", stroke: "currentColor", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 5L12 12L21 5",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 12V5H12H21V12",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg019 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 6.17715L12 14.0522L21 6.17719V19H3.00004L3 6.17715ZM19.6546 5L12 11.6973L4.34536 5H19.6546Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg020 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 7L12 13L21 7",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg021 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21 8.09314V16.375C21 17.0446 20.7369 17.6888 20.2644 18.176C19.792 18.6631 19.1459 18.9564 18.4584 18.9956L18.3 19H5.7C5.01131 19.0001 4.34864 18.7442 3.84757 18.2849C3.34649 17.8256 3.0449 17.1974 3.0045 16.529L3 16.375V8.09314L11.5005 13.603L11.6049 13.6608C11.7279 13.7192 11.8631 13.7496 12 13.7496C12.1369 13.7496 12.2721 13.7192 12.3951 13.6608L12.4995 13.603L21 8.09314Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18.3 5C19.272 5 20.1243 5.49875 20.5995 6.24863L12 11.8224L3.40051 6.24863C3.62623 5.89235 3.93627 5.59369 4.30481 5.37755C4.67334 5.16142 5.08968 5.03407 5.51911 5.00612L5.70001 5H18.3Z",
          fill: "currentColor"
        }
      )
    ]
  }
);
var Svg022 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M7.21778 10.9244C8.49778 13.44 10.56 15.4933 13.0756 16.7822L15.0311 14.8267C15.2711 14.5867 15.6267 14.5067 15.9378 14.6133C16.9333 14.9422 18.0089 15.12 19.1111 15.12C19.6 15.12 20 15.52 20 16.0089V19.1111C20 19.6 19.6 20 19.1111 20C10.7644 20 4 13.2356 4 4.88889C4 4.4 4.4 4 4.88889 4H8C8.48889 4 8.88889 4.4 8.88889 4.88889C8.88889 6 9.06667 7.06667 9.39556 8.06222C9.49333 8.37333 9.42222 8.72 9.17333 8.96889L7.21778 10.9244Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg023 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.82286 4H6.28571C5.67951 4 5.09812 4.24082 4.66947 4.66947C4.24082 5.09812 4 5.67951 4 6.28571V8.57143C4 14.8834 9.11657 20 15.4286 20H17.7143C18.3205 20 18.9019 19.7592 19.3305 19.3305C19.7592 18.9019 20 18.3205 20 17.7143V16.1349C19.9999 15.9227 19.9407 15.7147 19.8291 15.5343C19.7175 15.3538 19.5578 15.208 19.368 15.1131L16.6069 13.7326C16.4604 13.6593 16.2999 13.6184 16.1363 13.6126C15.9727 13.6067 15.8097 13.6361 15.6584 13.6988C15.5071 13.7614 15.371 13.8558 15.2594 13.9756C15.1478 14.0954 15.0632 14.2378 15.0114 14.3931L14.672 15.4137C14.5654 15.7335 14.3458 16.0033 14.0543 16.1725C13.7629 16.3417 13.4196 16.3986 13.0891 16.3326C11.7515 16.0644 10.5231 15.4066 9.5586 14.4418C8.59405 13.477 7.93645 12.2485 7.66857 10.9109C7.60254 10.5804 7.65948 10.2371 7.82868 9.94567C7.99788 9.6542 8.26769 9.43455 8.58743 9.328L9.85371 8.90514C10.1266 8.81412 10.3551 8.62354 10.4936 8.37145C10.6322 8.11936 10.6706 7.82429 10.6011 7.54514L9.93143 4.86514C9.86952 4.618 9.7268 4.39864 9.52595 4.24189C9.3251 4.08515 9.07763 4.00001 8.82286 4Z",
        stroke: "currentColor"
      }
    )
  }
);
var Svg024 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667L4 8.8C4 14.9856 9.0144 20 15.2 20H17.3333C18.0406 20 18.7189 19.719 19.219 19.219C19.719 18.7189 20 18.0406 20 17.3333V15.8592C20 15.5619 19.9171 15.2705 19.7608 15.0176C19.6044 14.7648 19.3807 14.5605 19.1147 14.4277L16.5387 13.1392C16.3336 13.0367 16.1088 12.9794 15.8797 12.9713C15.6505 12.9632 15.4223 13.0045 15.2105 13.0923C14.9987 13.1801 14.8082 13.3124 14.652 13.4802C14.4958 13.6481 14.3775 13.8475 14.3051 14.0651L13.9872 15.0176C13.9287 15.1924 13.8085 15.3399 13.649 15.4324C13.4896 15.5249 13.3018 15.556 13.1211 15.52C11.9761 15.2905 10.9245 14.7276 10.0987 13.902C9.27292 13.0763 8.70972 12.0249 8.48 10.88C8.44399 10.6992 8.47515 10.5115 8.56764 10.3521C8.66013 10.1926 8.8076 10.0724 8.9824 10.0139L10.1653 9.6192C10.5476 9.49154 10.8676 9.22432 11.0614 8.87093C11.2552 8.51755 11.3085 8.10404 11.2107 7.71307L10.5856 5.2128C10.4993 4.86669 10.2998 4.55935 10.0188 4.33961C9.73776 4.11987 9.39138 4.00034 9.03467 4H6.66667Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg025 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx("rect", { x: 6.50012, y: 3.5, width: 14, height: 14, stroke: "currentColor" }),
      /* @__PURE__ */ jsx("line", { x1: 3.5, y1: 5, x2: 3.5, y2: 20, stroke: "currentColor" }),
      /* @__PURE__ */ jsx("line", { x1: 3, y1: 20.5, x2: 19, y2: 20.5, stroke: "currentColor" })
    ]
  }
);
var Svg026 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21.9991 11.9987V11.9938C21.9991 9.03471 20.7109 6.37733 18.6651 4.54991L18.6551 4.54157C18.6298 4.51436 18.6016 4.49004 18.5709 4.46908L18.5693 4.46824C16.7522 2.87312 14.4158 1.99554 11.9979 2.00002C9.47135 2.00002 7.16478 2.93831 5.40652 4.48658L5.41735 4.47741C5.39623 4.49356 5.37669 4.5117 5.35902 4.53157C4.30205 5.46756 3.456 6.61827 2.87692 7.90587C2.29784 9.19348 1.99893 10.5894 2 12.0013C2 14.9595 3.28661 17.6168 5.33069 19.4451L5.34069 19.4534C5.36728 19.4833 5.39688 19.5104 5.42902 19.5343L5.43069 19.5351C7.24714 21.1281 9.58191 22.0044 11.9979 22C14.4252 22.0037 16.77 21.1193 18.5901 19.5134L18.5793 19.5226C19.6546 18.5877 20.5166 17.4327 21.1069 16.1358C21.6972 14.8389 22.002 13.4303 22.0008 12.0054V11.9996L21.9991 11.9987ZM18.281 18.5026C17.7854 18.1022 17.2527 17.7501 16.6902 17.451L16.636 17.4243C17.1468 15.9519 17.4543 14.2545 17.4835 12.4887V12.4754H21.0342C20.9148 14.7599 19.9315 16.9136 18.2835 18.5001L18.281 18.5026ZM12.4762 17.2485C13.5453 17.306 14.5445 17.541 15.4661 17.9235L15.4061 17.9018C14.6678 19.5851 13.6287 20.7417 12.4762 20.9959V17.2485ZM12.4762 16.2952V12.4754H16.5327C16.5004 14.0572 16.2262 15.6247 15.7194 17.1235L15.7519 17.0144C14.7175 16.5885 13.6171 16.3455 12.4995 16.2961L12.477 16.2952H12.4762ZM12.4762 11.5221V7.70227C13.6238 7.65006 14.7536 7.39884 15.8152 6.9598L15.7494 6.98397C16.2119 8.33308 16.496 9.88801 16.5327 11.5046V11.5221H12.4762ZM12.4762 6.74898V3.00331C13.6287 3.25746 14.6678 4.40908 15.4061 6.09734C14.5445 6.45566 13.5453 6.68981 12.5004 6.74814L12.4762 6.74898ZM14.8544 3.41579C15.8366 3.74268 16.7551 4.23657 17.5693 4.87573L17.5502 4.86073C17.181 5.15071 16.7669 5.42404 16.3302 5.66153L16.2836 5.68486C15.9316 4.85169 15.4464 4.08137 14.8469 3.40412L14.8544 3.41329V3.41579ZM11.5213 3.00581V6.74898C10.4934 6.69661 9.48208 6.46831 8.53139 6.07401L8.59138 6.09567C9.33302 4.41241 10.3705 3.25663 11.5229 3.00247L11.5213 3.00581ZM7.71475 5.68236C7.26316 5.43914 6.83278 5.15844 6.42814 4.84323L6.44814 4.85823C7.23867 4.23779 8.12839 3.75546 9.0797 3.43162L9.14303 3.41246C8.55984 4.07179 8.0848 4.81936 7.73559 5.62736L7.71475 5.68236ZM11.5229 7.70144V11.5213H7.46643C7.5031 9.88718 7.78725 8.33224 8.28223 6.87397L8.24973 6.98313C9.28415 7.40688 10.3837 7.64957 11.5004 7.7006L11.5229 7.70144ZM11.5229 12.4746V16.2944C10.3753 16.3466 9.2455 16.5978 8.1839 17.0369L8.24973 17.0127C7.78725 15.6644 7.5031 14.1087 7.46643 12.4921V12.4746H11.5229ZM11.5229 17.2477V20.9934C10.3705 20.7392 9.33135 19.5876 8.59305 17.8993C9.45468 17.541 10.4538 17.3077 11.4988 17.2494L11.5229 17.2477ZM9.14803 20.5809C8.16672 20.2535 7.24855 19.7609 6.43314 19.1243L6.45314 19.1393C6.82229 18.8493 7.23644 18.576 7.67309 18.3385L7.71975 18.3151C8.06905 19.1485 8.55424 19.9181 9.15553 20.5925L9.14803 20.5842V20.5809ZM16.2844 18.3143C16.7677 18.5768 17.1818 18.8493 17.571 19.1534L17.551 19.1384C16.7605 19.7589 15.8708 20.2412 14.9194 20.565L14.8561 20.5842C15.4392 19.9251 15.9143 19.1778 16.2636 18.3701L16.2844 18.316V18.3143ZM21.0342 11.5221H17.4835C17.4574 9.79802 17.1599 8.0888 16.6019 6.45732L16.636 6.57232C17.2246 6.26231 17.7819 5.89618 18.3001 5.47903L18.2801 5.49403C19.9253 7.07418 20.9091 9.22014 21.0325 11.4979L21.0342 11.5221ZM5.71817 5.49487C6.19815 5.88485 6.7373 6.24233 7.30894 6.54649L7.3631 6.57315C6.85229 8.04559 6.54481 9.74301 6.51564 11.5088V11.5221H2.96413C3.08354 9.23762 4.06684 7.08394 5.71484 5.49737L5.71817 5.49487ZM2.96496 12.4754H6.51564C6.5417 14.1995 6.83922 15.9087 7.39727 17.5402L7.3631 17.4252C6.7373 17.7577 6.19899 18.1152 5.69901 18.5185L5.71901 18.5035C4.0738 16.9233 3.09002 14.7774 2.96663 12.4996L2.96579 12.4762L2.96496 12.4754Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg027 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M10.4 13.563C11.6096 14.7678 13.68 14.659 15.0233 13.3207L18.9161 9.44253C20.2601 8.10423 20.3689 6.04277 19.1601 4.83725C17.9513 3.63174 15.8801 3.74133 14.536 5.07964L12.5896 7.0187",
          stroke: "currentColor",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M13.6001 10.4369C12.3905 9.2322 10.32 9.34099 8.97682 10.6793L7.03039 12.6184L5.08396 14.5574C3.73993 15.8957 3.63113 17.9572 4.83995 19.1627C6.04877 20.3682 8.12001 20.2586 9.46403 18.9203L11.4105 16.9813",
          stroke: "currentColor",
          strokeLinecap: "round"
        }
      )
    ]
  }
);
var Svg028 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M8.99805 15.0033L15.0041 8.99772M6.74513 11.2494L5.24389 12.7506C4.84953 13.1449 4.5367 13.613 4.32328 14.1283C4.10985 14.6435 4 15.1957 4 15.7534C4 16.3111 4.10985 16.8633 4.32328 17.3785C4.5367 17.8937 4.84953 18.3619 5.24389 18.7562C5.63825 19.1505 6.10642 19.4633 6.62168 19.6767C7.13694 19.8902 7.68919 20 8.2469 20C8.80461 20 9.35686 19.8902 9.87212 19.6767C10.3874 19.4633 10.8555 19.1505 11.2499 18.7562L12.749 17.2551M11.2488 6.74495L12.7501 5.24381C13.1445 4.84947 13.6126 4.53667 14.1279 4.32325C14.6431 4.10984 15.1954 4 15.7531 4C16.3108 4 16.8631 4.10984 17.3783 4.32325C17.8936 4.53667 18.3618 4.84947 18.7561 5.24381C19.1505 5.63814 19.4633 6.10628 19.6767 6.62151C19.8902 7.13673 20 7.68894 20 8.24662C20 8.80429 19.8902 9.35651 19.6767 9.87173C19.4633 10.387 19.1505 10.8551 18.7561 11.2494L17.2549 12.7506",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg029 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.33333 11.9999C9.33333 12.7367 9.05238 13.4432 8.55229 13.9641C8.05219 14.4851 7.37391 14.7777 6.66667 14.7777C5.95942 14.7777 5.28115 14.4851 4.78105 13.9641C4.28095 13.4432 4 12.7367 4 11.9999C4 11.2632 4.28095 10.5567 4.78105 10.0358C5.28115 9.51483 5.95942 9.22217 6.66667 9.22217C7.37391 9.22217 8.05219 9.51483 8.55229 10.0358C9.05238 10.5567 9.33333 11.2632 9.33333 11.9999Z",
          stroke: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M14.6667 5.88892L9.33337 9.77781M14.6667 18.1111L9.33337 14.2223",
          stroke: "currentColor",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20.0001 19.2222C20.0001 19.9589 19.7191 20.6655 19.219 21.1864C18.7189 21.7073 18.0407 22 17.3334 22C16.6262 22 15.9479 21.7073 15.4478 21.1864C14.9477 20.6655 14.6667 19.9589 14.6667 19.2222C14.6667 18.4855 14.9477 17.779 15.4478 17.258C15.9479 16.7371 16.6262 16.4444 17.3334 16.4444C18.0407 16.4444 18.7189 16.7371 19.219 17.258C19.7191 17.779 20.0001 18.4855 20.0001 19.2222ZM20.0001 4.77778C20.0001 5.51449 19.7191 6.22103 19.219 6.74196C18.7189 7.2629 18.0407 7.55556 17.3334 7.55556C16.6262 7.55556 15.9479 7.2629 15.4478 6.74196C14.9477 6.22103 14.6667 5.51449 14.6667 4.77778C14.6667 4.04107 14.9477 3.33453 15.4478 2.81359C15.9479 2.29266 16.6262 2 17.3334 2C18.0407 2 18.7189 2.29266 19.219 2.81359C19.7191 3.33453 20.0001 4.04107 20.0001 4.77778Z",
          stroke: "currentColor"
        }
      )
    ]
  }
);
var Svg030 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8.342C20 8.07556 19.9467 7.81181 19.8433 7.56624C19.7399 7.32068 19.5885 7.09824 19.398 6.912L14.958 2.57C14.5844 2.20466 14.0826 2.00007 13.56 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4Z",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20",
          stroke: "currentColor",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg031 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19.5 7L9.5 17L4.5 12",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg032 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M19.5 7L9.5 17L4.5 12",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg033 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg034 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12 16.9999L5 6.99988L19 6.99988L12 16.9999Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg035 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297L6.10142 8.57346C5.63748 7.91069 6.11163 7 6.92066 7L17.0793 7C17.8884 7 18.3625 7.91068 17.8986 8.57346L12.8192 15.8297Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg036 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5 8L12 16L19 8",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg037 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M5 8L12 16L19 8",
        stroke: "currentColor",
        strokeLinecap: "square",
        strokeLinejoin: "round"
      }
    )
  }
);
var Svg038 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 5L12 12L19 5",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 12L12 19L19 12",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg039 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 5L12 12L19 5",
          stroke: "currentColor",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5 12L12 19L19 12",
          stroke: "currentColor",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
var Svg040 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M21 10.7393C21 6.74577 16.9629 3.5 12 3.5C7.03714 3.5 3 6.74577 3 10.7393C3 14.3164 6.19714 17.3158 10.5257 17.8766C10.8171 17.936 11.22 18.072 11.3143 18.3184C11.4086 18.5478 11.3743 18.8962 11.34 19.1256C11.34 19.1256 11.2371 19.7543 11.2114 19.8903C11.1686 20.1112 11.0314 20.774 11.9914 20.3746C12.9514 19.9753 17.1686 17.3498 19.0629 15.2001C20.3657 13.7811 20.9914 12.3451 20.9914 10.7478L21 10.7393ZM8.82857 12.872C8.82857 12.9654 8.75143 13.0419 8.65714 13.0419H6.12857C6.03429 13.0419 5.95714 12.9654 5.95714 12.872V8.98042C5.95714 8.88696 6.03429 8.81049 6.12857 8.81049H6.76286C6.85714 8.81049 6.93429 8.88696 6.93429 8.98042V12.0733H8.64857C8.74286 12.0733 8.82 12.1497 8.82 12.2432V12.872H8.82857ZM10.3457 12.872C10.3457 12.9654 10.2686 13.0419 10.1743 13.0419H9.54C9.44571 13.0419 9.36857 12.9654 9.36857 12.872V8.98042C9.36857 8.88696 9.44571 8.81049 9.54 8.81049H10.1743C10.2686 8.81049 10.3457 8.88696 10.3457 8.98042V12.872ZM14.6914 12.872C14.6914 12.9654 14.6143 13.0419 14.52 13.0419H13.8857C13.8857 13.0419 13.8514 13.0419 13.8429 13.0419C13.8429 13.0419 13.8429 13.0419 13.8343 13.0419C13.8343 13.0419 13.8343 13.0419 13.8257 13.0419C13.8086 13.0334 13.7914 13.0164 13.7829 12.9994L11.9829 10.5948V12.9059C11.9829 12.9994 11.9057 13.0759 11.8114 13.0759H11.1771C11.0829 13.0759 11.0057 12.9994 11.0057 12.9059V9.01441C11.0057 8.92095 11.0829 8.84448 11.1771 8.84448H11.8114C11.8114 8.84448 11.8114 8.84448 11.82 8.84448C11.82 8.84448 11.82 8.84448 11.8286 8.84448C11.8286 8.84448 11.8286 8.84448 11.8371 8.84448C11.8371 8.84448 11.8371 8.84448 11.8457 8.84448C11.8457 8.84448 11.8457 8.84448 11.8543 8.84448C11.8543 8.84448 11.8543 8.84448 11.8629 8.84448C11.8629 8.84448 11.8629 8.84448 11.8714 8.84448C11.8714 8.84448 11.8714 8.84448 11.88 8.84448C11.88 8.84448 11.88 8.84448 11.8886 8.85297C11.8886 8.85297 11.8971 8.86147 11.9057 8.86997L13.7057 11.2746V8.96343C13.7057 8.86997 13.7829 8.7935 13.8771 8.7935H14.5114C14.6057 8.7935 14.6829 8.86997 14.6829 8.96343V12.855L14.6914 12.872ZM18.1714 9.60919C18.1714 9.70265 18.0943 9.77912 18 9.77912H16.2857V10.4334H18C18.0943 10.4334 18.1714 10.5098 18.1714 10.6033V11.2321C18.1714 11.3255 18.0943 11.402 18 11.402H16.2857V12.0563H18C18.0943 12.0563 18.1714 12.1327 18.1714 12.2262V12.855C18.1714 12.9484 18.0943 13.0249 18 13.0249H15.4714C15.3771 13.0249 15.3 12.9484 15.3 12.855V8.96343C15.3 8.86147 15.3771 8.785 15.4714 8.785H18C18.0943 8.785 18.1714 8.86147 18.1714 8.95493V9.5837V9.60919Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg041 = (props) => /* @__PURE__ */ jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.9737 14.6206L20 18.6549L18.6585 20L14.6361 15.9695C13.295 16.9815 11.6211 17.447 9.95124 17.2723C8.28141 17.0976 6.7396 16.2957 5.63607 15.0279C4.53254 13.7601 3.94921 12.1205 4.00347 10.4391C4.05773 8.75773 4.74555 7.15935 5.92851 5.96562C7.11147 4.77189 8.70177 4.07141 10.3794 4.00517C12.057 3.93892 13.6974 4.51181 14.9704 5.60855C16.2435 6.7053 17.0547 8.24449 17.2408 9.91637C17.427 11.5883 16.9742 13.2687 15.9737 14.6196V14.6206ZM15.3836 10.6547C15.3836 9.39415 14.8839 8.18521 13.9943 7.29386C13.1047 6.4025 11.8982 5.90174 10.6401 5.90174C9.38209 5.90174 8.17556 6.4025 7.28598 7.29386C6.3964 8.18521 5.89664 9.39415 5.89664 10.6547C5.89664 11.9153 6.3964 13.1242 7.28598 14.0156C8.17556 14.9069 9.38209 15.4077 10.6401 15.4077C11.8982 15.4077 13.1047 14.9069 13.9943 14.0156C14.8839 13.1242 15.3836 11.9153 15.3836 10.6547Z",
        fill: "currentColor"
      }
    )
  }
);
var Svg042 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: 4,
          y: 18.5454,
          width: 20.5703,
          height: 2.05703,
          transform: "rotate(-45 4 18.5454)",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "rect",
        {
          x: 5.45459,
          y: 4,
          width: 20.5703,
          height: 2.05703,
          transform: "rotate(45 5.45459 4)",
          fill: "currentColor"
        }
      )
    ]
  }
);
var Svg043 = (props) => /* @__PURE__ */ jsxs(
  "svg",
  {
    viewBox: "0 0 38 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      /* @__PURE__ */ jsx(
        "line",
        {
          y1: -0.5,
          x2: 12.3982,
          y2: -0.5,
          transform: "matrix(0.74143 0.671031 -0.74143 0.671031 24.1056 11)",
          stroke: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx(
        "line",
        {
          y1: -0.5,
          x2: 12.3982,
          y2: -0.5,
          transform: "matrix(0.74143 -0.671031 0.74143 0.671031 24.8076 27)",
          stroke: "currentColor"
        }
      ),
      /* @__PURE__ */ jsx("line", { x1: 4, y1: 18.5, x2: 28, y2: 18.5, stroke: "currentColor" })
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
  appearance
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
      iconColor: appearance?.iconColor,
      borderColor: appearance?.borderColor,
      backgroundColor: appearance?.backgroundColor,
      hoverIconColor: appearance?.hoverIconColor,
      hoverBorderColor: appearance?.hoverBorderColor,
      hoverBackgroundColor: appearance?.hoverBackgroundColor,
      ...buttonProps,
      children: /* @__PURE__ */ jsx(StyledJmcArrowButtonIconContainer, { children: /* @__PURE__ */ jsx(StyledJmcArrowButtonIconWrapper, { size, children: /* @__PURE__ */ jsxs(StyledJmcArrowButtonIconInner, { children: [
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: appearance?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: appearance?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: appearance?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) }),
        /* @__PURE__ */ jsx(StyledJmcArrowButtonIcon, { iconColor: appearance?.iconColor, children: /* @__PURE__ */ jsx(Svg043, {}) })
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
  appearance
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
      color: appearance?.color,
      isHovered,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick,
      children: /* @__PURE__ */ jsx(StyledJmcCircleToggleInner, { children: /* @__PURE__ */ jsxs(StyledJmcCircleToggleDotWrapper, { children: [
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: appearance?.dotColor }),
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: appearance?.dotColor }),
        /* @__PURE__ */ jsx(StyledJmcCircleToggleDot, { dotColor: appearance?.dotColor })
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
  appearance
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
      backgroundColor: appearance?.backgroundColor,
      textColor: appearance?.color,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...buttonProps,
      children: [
        /* @__PURE__ */ jsx(StyledJmcButtonLeft, { fontSize: appearance?.fontSize, color: appearance?.color, children }),
        /* @__PURE__ */ jsx(
          JmcCircleToggle,
          {
            isHovered,
            appearance: {
              color: appearance?.circleToggleColor || appearance?.color,
              dotColor: appearance?.circleToggleDotColor || appearance?.color
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
  appearance
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
      fontSize: appearance?.fontSize,
      color: appearance?.color,
      children: /* @__PURE__ */ jsx(
        StyledVerticalRollingTextInner,
        {
          ref: wrapperRef,
          fontSize: appearance?.fontSize,
          color: appearance?.color,
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
  appearance
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
      backgroundColor: appearance?.backgroundColor,
      borderColor: appearance?.borderColor,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx(
          StyledRebitaButtonLeft,
          {
            textColor: appearance?.textColor,
            leftContentBorderColor: appearance?.leftContentBorderColor,
            direction,
            children: /* @__PURE__ */ jsx(StyledRebitaButtonLeftInner, { fontSize: appearance?.fontSize, children: /* @__PURE__ */ jsx(
              VerticalRollingText,
              {
                appearance: {
                  fontSize: appearance?.fontSize,
                  color: appearance?.textColor || "#fff"
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
            iconColor: appearance?.iconColor,
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
  appearance
}) => {
  const size = appearance?.size || 100;
  const strokeWidth = appearance?.strokeWidth || 3;
  return /* @__PURE__ */ jsx(StyledCircleProgressWrapper2, { children: /* @__PURE__ */ jsxs(StyledCircleProgressContainer2, { size, children: [
    /* @__PURE__ */ jsx(
      CircleProgress,
      {
        progress,
        size,
        appearance: {
          primaryColor: appearance?.primaryColor,
          trackColor: appearance?.trackColor,
          strokeWidth,
          animationDuration: appearance?.animationDuration
        }
      }
    ),
    /* @__PURE__ */ jsx(StyledCircleProgressContent, { children: /* @__PURE__ */ jsx(
      StyledCircleProgressPercentage,
      {
        fontSize: appearance?.fontSize,
        textColor: appearance?.textColor,
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
  appearance,
  onClick
}) => {
  return /* @__PURE__ */ jsx(StyledSlideGuideDotWrapper, { children: /* @__PURE__ */ jsx(StyledSlideGuideDotContainer, { size: appearance?.dotSize || 17, children: type === "default" ? /* @__PURE__ */ jsx(StyledSlideGuideDotItem, { onClick }) : /* @__PURE__ */ jsx(
    CircleProgress,
    {
      progress,
      size: appearance?.circleSize || 17,
      appearance: {
        primaryColor: appearance?.primaryColor,
        trackColor: appearance?.trackColor,
        strokeWidth: appearance?.strokeWidth || 2,
        animationDuration: appearance?.animationDuration
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
  appearance
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
    /* @__PURE__ */ jsx(StyledFadeSlideImageGuideWrapper, { gap: appearance?.guideGap, children: images.map((_, index) => /* @__PURE__ */ jsx(StyledFadeSlideImageGuideItem, { children: /* @__PURE__ */ jsx(
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(
    StyledFadeTextWrapper,
    {
      color: appearance?.color,
      fontSize: appearance?.fontSize,
      progress,
      children: /* @__PURE__ */ jsxs(StyledFadeTextContainer, { fontSize: appearance?.fontSize, children: [
        /* @__PURE__ */ jsx(StyledFadeText, { color: appearance?.color, isFirst: true, progress, children }),
        /* @__PURE__ */ jsx(StyledFadeText, { color: appearance?.color, isFirst: false, children })
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
  appearance,
  onClick
}) => {
  return /* @__PURE__ */ jsx(StyledPanelWrapper, { children: /* @__PURE__ */ jsxs(StyledPanel, { onClick, children: [
    /* @__PURE__ */ jsxs(StyledPanelImageWrapper, { imageHeight: appearance?.imageHeight, children: [
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
  appearance
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
            appearance: {
              fontSize: appearance?.fontSize,
              color: appearance?.color
            },
            children: text
          }
        ) }),
        /* @__PURE__ */ jsx(
          StyledTextButtonWithIconIcon,
          {
            iconSize: appearance?.iconSize,
            color: appearance?.color,
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
  appearance
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
      backgroundColor: appearance?.backgroundColor,
      dotColor: appearance?.dotColor,
      lineColor: appearance?.lineColor,
      isOpen,
      children: /* @__PURE__ */ jsxs(
        StyledToggleInner,
        {
          size,
          backgroundColor: appearance?.backgroundColor,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsxs(StyledToggleDotWrapper, { isOpen, children: [
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: appearance?.dotColor }),
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: appearance?.dotColor }),
              /* @__PURE__ */ jsx(StyledToggleDot, { dotColor: appearance?.dotColor })
            ] }),
            /* @__PURE__ */ jsx(StyledToggleCloseWrapper, { isOpen, children: /* @__PURE__ */ jsxs(StyledToggleLineWrapper, { children: [
              /* @__PURE__ */ jsx(StyledToggleLine, { lineColor: appearance?.lineColor }),
              /* @__PURE__ */ jsx(StyledToggleLine, { lineColor: appearance?.lineColor })
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
  shouldForwardProp: (prop) => !["borderColor", "paddingSide", "paddingVertical"].includes(prop)
})`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
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
var StyledAccordionContent = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["paddingVertical", "paddingSide"].includes(prop)
})`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
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
  appearance,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper, { children: /* @__PURE__ */ jsxs(StyledAccordion, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader,
      {
        borderColor: appearance?.borderColor ?? "#000",
        paddingSide: appearance?.paddingSide,
        paddingVertical: appearance?.paddingVertical,
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner, { children: [
          /* @__PURE__ */ jsx(StyledAccordionTitleWrapper, { children: /* @__PURE__ */ jsx(StyledAccordionTitle, { color: appearance?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon,
            {
              ref: iconRef,
              color: appearance?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper, { ref: contentRef, children: /* @__PURE__ */ jsx(
      StyledAccordionContent,
      {
        paddingSide: appearance?.paddingSide,
        paddingVertical: appearance?.paddingVertical,
        children: /* @__PURE__ */ jsx(StyledAccordionContentText, { color: appearance?.content?.color ?? "#000", children: content })
      }
    ) })
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
  appearance,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper2, { children: /* @__PURE__ */ jsxs(StyledAccordion2, { backgroundColor: appearance?.backgroundColor ?? "#fff", children: [
    /* @__PURE__ */ jsx(StyledAccordionHeader2, { onClick: handleClick, children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner2, { children: [
      /* @__PURE__ */ jsx(StyledAccordionTitleWrapper2, { children: /* @__PURE__ */ jsx(StyledAccordionTitle2, { color: appearance?.header?.color ?? "#000", children: headerContent }) }),
      /* @__PURE__ */ jsx(
        StyledAccordionIcon2,
        {
          ref: iconRef,
          color: appearance?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper2, { ref: contentRef, children: /* @__PURE__ */ jsx(StyledAccordionContent2, { children: /* @__PURE__ */ jsx(StyledAccordionContentText2, { color: appearance?.content?.color ?? "#000", children: content }) }) })
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
  appearance,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper3, { children: /* @__PURE__ */ jsxs(StyledAccordion3, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader3,
      {
        backgroundColor: appearance?.header?.backgroundColor ?? "#fff",
        barColor: appearance?.header?.barColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner3, { children: [
          /* @__PURE__ */ jsx(StyledAccordionTitleWrapper3, { children: /* @__PURE__ */ jsx(StyledAccordionTitle3, { color: appearance?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon3,
            {
              ref: iconRef,
              color: appearance?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper3, { ref: contentRef, children: /* @__PURE__ */ jsx(StyledAccordionContent3, { children: /* @__PURE__ */ jsx(StyledAccordionContentText3, { color: appearance?.content?.color ?? "#000", children: content }) }) })
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
  shouldForwardProp: (prop) => !["borderColor", "paddingSide", "paddingVertical"].includes(prop)
})`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
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
var StyledAccordionContent4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["paddingVertical", "paddingSide"].includes(prop)
})`
  padding: ${({ theme, paddingVertical }) => theme.size.em(paddingVertical ?? 10)} ${({ theme, paddingSide }) => theme.size.em(paddingSide ?? 15)};
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
  appearance,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper4, { children: /* @__PURE__ */ jsxs(StyledAccordion4, { children: [
    /* @__PURE__ */ jsx(
      StyledAccordionHeader4,
      {
        borderColor: appearance?.borderColor ?? "#000",
        paddingSide: appearance?.paddingSide,
        paddingVertical: appearance?.paddingVertical,
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner4, { children: [
          /* @__PURE__ */ jsxs(StyledAccordionTitleWrapper4, { children: [
            /* @__PURE__ */ jsx(
              StyledAccordionTitle4,
              {
                titleColor: appearance?.header?.titleColor ?? "#f10707",
                children: header.title
              }
            ),
            /* @__PURE__ */ jsx(
              StyledAccordionText,
              {
                textColor: appearance?.header?.textColor ?? "#000",
                children: header.text
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            StyledAccordionIcon4,
            {
              ref: iconRef,
              color: appearance?.iconColor ?? "#000",
              children: icon
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper4, { ref: contentRef, children: /* @__PURE__ */ jsxs(
      StyledAccordionContent4,
      {
        paddingSide: appearance?.paddingSide,
        paddingVertical: appearance?.paddingVertical,
        children: [
          /* @__PURE__ */ jsx(
            StyledAccordionContentTitle,
            {
              titleColor: appearance?.content?.titleColor ?? "#000",
              children: content.title
            }
          ),
          /* @__PURE__ */ jsx(
            StyledAccordionContentText4,
            {
              textColor: appearance?.content?.textColor ?? "#000",
              children: content.text
            }
          )
        ]
      }
    ) })
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
  appearance,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx(StyledAccordionWrapper5, { children: /* @__PURE__ */ jsxs(StyledAccordion5, { backgroundColor: appearance?.backgroundColor ?? "#000", children: [
    /* @__PURE__ */ jsx(StyledAccordionHeader5, { onClick: handleClick, children: /* @__PURE__ */ jsxs(StyledAccordionHeaderInner5, { children: [
      /* @__PURE__ */ jsxs(StyledAccordionTitleWrapper5, { children: [
        /* @__PURE__ */ jsx(
          StyledAccordionTitle5,
          {
            titleColor: appearance?.header?.titleColor ?? "#f10707",
            children: header.title ?? "Q"
          }
        ),
        /* @__PURE__ */ jsx(
          StyledAccordionText2,
          {
            textColor: appearance?.header?.textColor ?? "#000",
            children: header.text
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        StyledAccordionIcon5,
        {
          ref: iconRef,
          color: appearance?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(StyledAccordionContentWrapper5, { ref: contentRef, children: /* @__PURE__ */ jsxs(StyledAccordionContent5, { children: [
      /* @__PURE__ */ jsx(
        StyledAccordionContentTitle2,
        {
          titleColor: appearance?.content?.titleColor ?? "#000",
          children: content.title ?? "A"
        }
      ),
      /* @__PURE__ */ jsx(
        StyledAccordionContentText5,
        {
          textColor: appearance?.content?.textColor ?? "#000",
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
  appearance,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx(StyledBalloonWrapper, { children: /* @__PURE__ */ jsxs(
    StyledBalloon,
    {
      type,
      backgroundColor: appearance?.backgroundColor ?? "#ccc",
      children: [
        /* @__PURE__ */ jsx(
          StyledBalloonContent,
          {
            fontSize: appearance?.fontSize ?? 16,
            color: appearance?.color ?? "#000",
            children
          }
        ),
        /* @__PURE__ */ jsx(
          StyledBalloonArrow,
          {
            arrowPosition: arrowPosition ?? "bottom",
            backgroundColor: appearance?.backgroundColor ?? "#ccc"
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
  appearance,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx(StyledBalloonWrapper2, { children: /* @__PURE__ */ jsx(
    StyledBalloon2,
    {
      type,
      borderColor: appearance?.borderColor ?? "#000",
      borderWidth: appearance?.borderWidth ?? 1,
      arrowPosition: arrowPosition ?? "bottom",
      backgroundColor: appearance?.backgroundColor ?? "#fff",
      children: /* @__PURE__ */ jsx(
        StyledBalloonContent2,
        {
          fontSize: appearance?.fontSize ?? 16,
          color: appearance?.color ?? "#000",
          children
        }
      )
    }
  ) });
};
var generateMaskImage = (direction, fadeStart) => {
  if (direction === "all") {
    return `radial-gradient(circle, white ${fadeStart}%, transparent 100%)`;
  }
  const oppositeDirection = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
    all: "bottom"
  };
  const gradientDirection = oppositeDirection[direction];
  return `linear-gradient(to ${gradientDirection}, transparent 0%, white ${fadeStart}%)`;
};
var StyledMaskBg = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "fadeStart", "bgColor", "blurAmount"].includes(prop)
})`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: ${({ bgColor }) => bgColor};
  mask-image: ${({ direction, fadeStart }) => generateMaskImage(direction, fadeStart)};
  -webkit-mask-image: ${({ direction, fadeStart }) => generateMaskImage(direction, fadeStart)};
  ${({ blurAmount }) => blurAmount && `filter: blur(${blurAmount}px);`}
`;
var BlurBg = ({
  direction,
  fadeStart = 10,
  bgColor,
  blurAmount,
  children
}) => {
  return /* @__PURE__ */ jsx(
    StyledMaskBg,
    {
      direction,
      fadeStart,
      bgColor,
      blurAmount,
      children
    }
  );
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
var Breadcrumbs = ({ items, appearance }) => {
  return /* @__PURE__ */ jsx(StyledBreadcrumbsWrapper, { children: /* @__PURE__ */ jsx(StyledBreadcrumbs, { children: items.map((item, index) => /* @__PURE__ */ jsxs(StyledBreadcrumbsItem, { children: [
    item.link ? /* @__PURE__ */ jsx(
      StyledBreadcrumbsItemLink,
      {
        href: item.link.href,
        target: item.link.target,
        duration: appearance?.duration ?? 0.3,
        easing: appearance?.easing ?? "easeInOutSine",
        fontSize: appearance?.fontSize ?? 16,
        color: appearance?.color ?? "#000",
        hoverColor: appearance?.hoverColor ?? "#ccc",
        children: item.text
      }
    ) : /* @__PURE__ */ jsx(
      StyledBreadcrumbsItemText,
      {
        fontSize: appearance?.fontSize ?? 16,
        color: appearance?.color ?? "#000",
        children: item.text
      }
    ),
    index !== items.length - 1 && /* @__PURE__ */ jsx(StyledBreadcrumbsItemIcon, { color: appearance?.iconColor ?? "#000", children: /* @__PURE__ */ jsx(Svg004, {}) })
  ] }, item.text)) }) });
};
var StyledButton = styled13.button`
  ${({ theme }) => theme.font.baseSize.em()};

  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ $borderColor }) => $borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    z-index: 0;
  }

  ${({ $type, theme }) => {
  switch ($type) {
    case "001":
      return css`border-radius: ${theme.size.em(30)};`;
    case "002":
      return css`border-radius: ${theme.size.em(8)};`;
    default:
      return css`border-radius: 0;`;
  }
}}

  ${({
  $size,
  $paddingTop,
  $paddingRight,
  $paddingBottom,
  $paddingLeft,
  theme
}) => {
  switch ($size) {
    case "small":
      return css`padding: ${theme.size.em($paddingTop ?? 7)} ${theme.size.em($paddingRight ?? 13)} ${theme.size.em($paddingBottom ?? 7)} ${theme.size.em($paddingLeft ?? 13)};`;
    case "middle":
      return css`padding: ${theme.size.em($paddingTop ?? 15)} ${theme.size.em($paddingRight ?? 28)} ${theme.size.em($paddingBottom ?? 15)} ${theme.size.em($paddingLeft ?? 28)};`;
    default:
      return css`padding: ${theme.size.em($paddingTop ?? 25)} ${theme.size.em($paddingRight ?? 45)} ${theme.size.em($paddingBottom ?? 25)} ${theme.size.em($paddingLeft ?? 45)};`;
  }
}}

  ${({ $animation, theme }) => {
  switch ($animation?.type ?? "001") {
    case "001":
      return css`
          &::after {
            transition: background-color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${$animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${$animation?.backgroundColor ?? "#000"};
            }
          }
        `;
    case "002":
      return css`
          &::after {
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
            background-color: ${$animation?.backgroundColor ?? "#fff"};
          }

          ${StyledText} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
          }

          &:hover {
            ${StyledText} {
              color: ${$animation?.textColor ?? "#fff"};
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
  $isDisabled,
  $disabledBackgroundColor,
  $backgroundColor,
  $disabledBorderColor,
  $borderColor
}) => $isDisabled && css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${$disabledBackgroundColor ?? `${hexToRgb($backgroundColor)}, 0.5`};
    border-color: ${$disabledBorderColor ?? `${hexToRgb($borderColor)}, 0.5`};
  `}
`;
var StyledText = styled13.span`
  ${({ $size, $fontSize, theme }) => {
  switch ($size) {
    case "small":
      return css`font-size: ${theme.size.em($fontSize ?? 12)};`;
    case "middle":
      return css`font-size: ${theme.size.em($fontSize ?? 16)};`;
    default:
      return css`font-size: ${theme.size.em($fontSize ?? 18)};`;
  }
}}

  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color};
  position: relative;
  z-index: 1;

  ${({ $disabled, $disabledColor, $color }) => $disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    color: ${$disabledColor ?? `${hexToRgb($color)}, 0.5`};
  `}
`;
var defaultAppearance = {
  backgroundColor: "#fff",
  borderColor: "#000",
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  fontSize: 0,
  color: "#000",
  fontWeight: 700,
  disabledColor: "#999",
  disabledBackgroundColor: "#e0e0e0",
  disabledBorderColor: "#ccc"
};
var Button001 = forwardRef(
  ({
    type = "001",
    size = "middle",
    as = "button",
    disabled = false,
    animation,
    onClick,
    children,
    appearance,
    fullWidth = true,
    ...rest
  }, ref) => {
    const { href, target, rel, ...domProps } = rest;
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        isDisabled: disabled,
        href,
        target,
        rel,
        onClick: handleAriaClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedButtonProps = mergeProps(buttonProps, domProps);
    const {
      backgroundColor,
      borderColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontSize,
      color: color2,
      fontWeight,
      disabledColor,
      disabledBackgroundColor,
      disabledBorderColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsx(
      StyledButton,
      {
        ...mergedButtonProps,
        ref: handleRef,
        as,
        $type: type,
        $size: size,
        $animation: animation,
        $backgroundColor: backgroundColor,
        $borderColor: borderColor,
        $paddingTop: paddingTop || void 0,
        $paddingRight: paddingRight || void 0,
        $paddingBottom: paddingBottom || void 0,
        $paddingLeft: paddingLeft || void 0,
        $disabledBackgroundColor: disabledBackgroundColor,
        $disabledBorderColor: disabledBorderColor,
        $fullWidth: fullWidth,
        $isDisabled: disabled,
        children: /* @__PURE__ */ jsx(
          StyledText,
          {
            $size: size,
            $color: color2,
            $fontWeight: fontWeight,
            $disabled: disabled,
            $disabledColor: disabledColor,
            $fontSize: fontSize || void 0,
            children
          }
        )
      }
    );
  }
);
Button001.displayName = "Button001";
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
var StyledButton2 = styled13.span`
  ${({ theme }) => theme.font.baseSize.em()};

  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};
  text-align: center;
  cursor: pointer;
  display: block;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ $borderColor }) => $borderColor};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    z-index: 0;
  }

  ${({ $type, theme }) => {
  switch ($type) {
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

  ${({ $type, $iconDirection, theme }) => {
  switch ($type) {
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

              ${$iconDirection === "left" && css`
                  left: ${theme.size.em(24)};
                `}

              ${$iconDirection === "right" && css`
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

  ${({ $iconDirection }) => {
  switch ($iconDirection) {
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
  $size,
  $iconSize,
  $fontSize,
  $paddingTop,
  $paddingRight,
  $paddingBottom,
  $paddingLeft,
  theme
}) => {
  switch ($size) {
    case "small":
      return css`
          padding: ${theme.size.em($paddingTop ?? 7)} ${theme.size.em($paddingRight ?? 13)} ${theme.size.em($paddingBottom ?? 7)} ${theme.size.em($paddingLeft ?? 13)};

          ${StyledIconWrapper} {
            width: ${theme.size.em($iconSize ?? theme.icon.size.small)};
            height: ${theme.size.em($iconSize ?? theme.icon.size.small)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(12)};
          }
        `;
    case "middle":
      return css`
          padding: ${theme.size.em($paddingTop ?? 15)} ${theme.size.em($paddingRight ?? 28)} ${theme.size.em($paddingBottom ?? 15)} ${theme.size.em($paddingLeft ?? 28)};

          ${StyledIconWrapper} {
            width: ${theme.size.em($iconSize ?? theme.icon.size.middle)};
            height: ${theme.size.em($iconSize ?? theme.icon.size.middle)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em($fontSize ?? 16)};
          }
        `;
    case "large":
      return css`
          padding: ${theme.size.em($paddingTop ?? 25)} ${theme.size.em($paddingRight ?? 45)} ${theme.size.em($paddingBottom ?? 25)} ${theme.size.em($paddingLeft ?? 45)};

          ${StyledIconWrapper} {
            width: ${theme.size.em($iconSize ?? theme.icon.size.large)};
            height: ${theme.size.em($iconSize ?? theme.icon.size.large)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em($fontSize ?? 18)};
          }
        `;
    default:
      return css`
          padding: ${theme.size.em($paddingTop ?? 25)} ${theme.size.em($paddingRight ?? 45)} ${theme.size.em($paddingBottom ?? 25)} ${theme.size.em($paddingLeft ?? 45)};
        `;
  }
}}

  ${({ $animation, theme, $isHover }) => {
  switch ($animation?.type ?? "001") {
    case "001":
      return css`
          &::after {
            transition: background-color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledText2} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          ${StyledIcon} {
            transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeInOutCubic"]};
          }

          &:hover {
            ${StyledText2} {
              color: ${$animation?.textColor ?? "#fff"};
            }

            ${StyledIcon} {
              color: ${$animation?.textColor ?? "#fff"};
            }

            &::after {
              background-color: ${$animation?.backgroundColor ?? "#000"};
            }
          }
        `;
    case "002": {
      return css`
          ${StyledIcon}:nth-child(1) {
            ${$isHover === true && css`
                animation: ${ArrowHide} ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${$isHover === false && css`
                animation: ${ArrowShow} ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }

          ${StyledIcon}:nth-child(2) {
            ${$isHover === true && css`
                animation: ${ArrowShow} ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${$isHover === false && css`
                animation: ${ArrowHide} ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }
        `;
    }
    case "003": {
      return css`
          ${StyledIcon}:nth-child(1) {
            transform: translateX(-100%);
            transition: transform ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
          }

          ${StyledIcon}:nth-child(2) {
            transform: translateX(0);
            transition: transform ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
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
              transition: transform ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
              background-color: ${$animation?.backgroundColor ?? "#fff"};
            }

            ${StyledText2} {
              transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
            }

            ${StyledIcon} {
              transition: color ${$animation?.duration ?? 0.25}s ${theme.animation.easing[$animation?.easing ?? "easeOutCubic"]};
            }

            &:hover {
              ${StyledText2} {
                color: ${$animation?.textColor ?? "#fff"};
              }

              ${StyledIcon} {
                color: ${$animation?.textColor ?? "#fff"};
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
  $disabled,
  $disabledBackgroundColor,
  $backgroundColor,
  $disabledBorderColor,
  $borderColor
}) => $disabled && css`
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${$disabledBackgroundColor ?? `rgba(${hexToRgb($backgroundColor)}, 0.5)`};
    border-color: ${$disabledBorderColor ?? `rgba(${hexToRgb($borderColor)}, 0.5)`};
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
var StyledIcon = styled13.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${({ $color }) => $color};

  &:nth-child(1) {
    transform: translateX(0);
  }

  &:nth-child(2) {
    transform: translateX(100%);
  }

  ${({ $disabled, $disabledColor, $color }) => $disabled && css`
    color: ${$disabledColor ?? `rgba(${hexToRgb($color)}, 0.5)`};
  `}
`;
var StyledText2 = styled13.span`
  ${({ $size, theme }) => {
  switch ($size) {
    case "small":
      return css`font-size: ${theme.size.em(12)};`;
    case "middle":
      return css`font-size: ${theme.size.em(16)};`;
    default:
      return css`font-size: ${theme.size.em(18)};`;
  }
}}

  display: block;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  color: ${({ $color }) => $color};
  position: relative;
  z-index: 1;

  ${({ $disabled, $disabledColor, $color }) => $disabled && css`
    color: ${$disabledColor ?? `rgba(${hexToRgb($color)}, 0.5)`};
  `}
`;
var defaultAppearance2 = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  iconSize: 0,
  fontSize: 0,
  backgroundColor: "#fff",
  borderColor: "#000",
  color: "#000",
  fontWeight: 700,
  disabledColor: "#999",
  disabledBackgroundColor: "#e0e0e0",
  disabledBorderColor: "#ccc"
};
var Button002 = forwardRef(
  ({
    as = "button",
    type = "001",
    size = "middle",
    animation,
    onClick,
    children,
    appearance,
    disabled = false,
    iconDirection = "right",
    icon,
    fullWidth = true,
    ...rest
  }, ref) => {
    const { href, target, rel, ...domProps } = rest;
    const [isHover, setIsHover] = useState(null);
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance2, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        isDisabled: disabled,
        href,
        target,
        rel,
        onClick: handleAriaClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedButtonProps = mergeProps(buttonProps, domProps, {
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false)
    });
    const {
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      iconSize,
      fontSize,
      backgroundColor,
      borderColor,
      color: color2,
      fontWeight,
      disabledColor,
      disabledBackgroundColor,
      disabledBorderColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledButton2,
      {
        ...mergedButtonProps,
        ref: handleRef,
        as,
        $type: type,
        $size: size,
        $animation: animation,
        $backgroundColor: backgroundColor,
        $borderColor: borderColor,
        $iconDirection: iconDirection,
        $isHover: isHover,
        $disabledBackgroundColor: disabledBackgroundColor,
        $disabledBorderColor: disabledBorderColor,
        $paddingTop: paddingTop || void 0,
        $paddingRight: paddingRight || void 0,
        $paddingBottom: paddingBottom || void 0,
        $paddingLeft: paddingLeft || void 0,
        $iconSize: iconSize || void 0,
        $fontSize: fontSize || void 0,
        $disabled: disabled,
        $fullWidth: fullWidth,
        children: [
          /* @__PURE__ */ jsx(
            StyledText2,
            {
              $size: size,
              $color: color2,
              $fontWeight: fontWeight,
              $disabled: disabled,
              $disabledColor: disabledColor,
              children
            }
          ),
          /* @__PURE__ */ jsx(StyledIconWrapper, { children: /* @__PURE__ */ jsxs(StyledIconInner, { children: [
            /* @__PURE__ */ jsx(
              StyledIcon,
              {
                $color: color2,
                $disabled: disabled,
                $disabledColor: disabledColor,
                children: icon
              }
            ),
            /* @__PURE__ */ jsx(
              StyledIcon,
              {
                $color: color2,
                $disabled: disabled,
                $disabledColor: disabledColor,
                children: icon
              }
            )
          ] }) })
        ]
      }
    );
  }
);
Button002.displayName = "Button002";
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
  shouldForwardProp: (prop) => prop !== "checkedBackgroundColor"
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
  &:disabled {
    cursor: not-allowed;
  }
  

  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark} {
    display: block;
  }
`;
var CheckBox001 = ({
  appearance,
  id: id2,
  type,
  size,
  name,
  checked,
  defaultChecked,
  disabled,
  onChange
}) => {
  const inputName = name ?? id2;
  const uncontrolledDefaultChecked = checked === void 0 ? defaultChecked : void 0;
  return /* @__PURE__ */ jsx(StyledCheckBoxWrapper, { children: /* @__PURE__ */ jsxs(StyledCheckBox, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCheckBoxInput,
      {
        id: id2,
        name: inputName,
        type: "checkbox",
        checked: checked ?? false,
        defaultChecked: uncontrolledDefaultChecked,
        disabled,
        checkedBackgroundColor: appearance?.checkedBackgroundColor ?? "#000",
        onChange
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxBackground,
      {
        type,
        backgroundColor: appearance?.backgroundColor ?? "#fff",
        borderColor: appearance?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxCheckmark,
      {
        size,
        markColor: appearance?.markColor ?? "#000",
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
  shouldForwardProp: (prop) => prop !== "checkedBackgroundColor"
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
  &:disabled {
    cursor: not-allowed;
  }


  &[type="checkbox"]:checked ~ ${StyledCheckBoxBackground2} {
    background-color: ${({ checkedBackgroundColor }) => checkedBackgroundColor};
  }

  &[type="checkbox"]:checked ~ ${StyledCheckBoxCheckmark2} {
    display: block;
  }
`;
var CheckBox002 = ({
  appearance,
  id: id2,
  size,
  name,
  checked,
  defaultChecked,
  disabled,
  onChange
}) => {
  const inputName = name ?? id2;
  const uncontrolledDefaultChecked = checked === void 0 ? defaultChecked : void 0;
  return /* @__PURE__ */ jsx(StyledCheckBoxWrapper2, { children: /* @__PURE__ */ jsxs(StyledCheckBox2, { size, children: [
    /* @__PURE__ */ jsx(
      StyledCheckBoxInput2,
      {
        id: id2,
        name: inputName,
        type: "checkbox",
        checked: checked ?? false,
        defaultChecked: uncontrolledDefaultChecked,
        disabled,
        checkedBackgroundColor: appearance?.checkedBackgroundColor ?? "#000",
        onChange
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxBackground2,
      {
        backgroundColor: appearance?.backgroundColor ?? "#fff"
      }
    ),
    /* @__PURE__ */ jsx(
      StyledCheckBoxCheckmark2,
      {
        markColor: appearance?.markColor ?? "#000",
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
var useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect$1 : useEffect;
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
    KeyboardEvent: KeyboardEvent2
  } = getWindow(event.target);
  return KeyboardEvent2 && event instanceof KeyboardEvent2;
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
      MutationObserver: MutationObserver2
    } = window;
    return new MutationObserver2(handleMutations);
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
  appearance,
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
          children: /* @__PURE__ */ jsx(StyledList, { as: "ul", gap: appearance?.gap, children: items.map((item) => /* @__PURE__ */ jsx(SortableItem, { id: item.id, children: item.content }, item.id)) })
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
  appearance,
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
        borderColor: appearance?.borderColor,
        backgroundColor: appearance?.backgroundColor,
        borderRadius: appearance?.borderRadius,
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
  appearance,
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
        appearance: {
          ...balloonProps?.appearance,
          backgroundColor: appearance?.backgroundColor
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
var FrameIcon001 = ({ appearance, type, size, icon }) => {
  return /* @__PURE__ */ jsx(StyledFrameIconWrapper, { children: /* @__PURE__ */ jsxs(StyledFrameIcon, { size, children: [
    /* @__PURE__ */ jsx(
      StyledFrameIconBackground,
      {
        type,
        backgroundColor: appearance?.backgroundColor ?? "#fff",
        borderColor: appearance?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(StyledFrameIconInner, { iconColor: appearance?.iconColor ?? "#000", children: /* @__PURE__ */ jsx(StyledFrameIconContent, { size, children: icon }) })
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
  appearance,
  type,
  size,
  number
}) => {
  return /* @__PURE__ */ jsx(StyledFrameNumberWrapper, { children: /* @__PURE__ */ jsxs(StyledFrameNumber, { size, children: [
    /* @__PURE__ */ jsx(
      StyledFrameNumberBackground,
      {
        type,
        backgroundColor: appearance?.backgroundColor ?? "#fff",
        borderColor: appearance?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx(StyledFrameNumberInner, { color: appearance?.color ?? "#000", size, children: number })
  ] }) });
};

// ../../node_modules/.pnpm/@vis.gl+react-google-maps@1.7.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs
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
  useLayoutEffect$1(() => {
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
  useLayoutEffect$1(() => {
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
  useLayoutEffect$1(() => {
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
  appearance,
  showModal
}) => {
  return /* @__PURE__ */ jsxs(StyledWrapper3, { children: [
    /* @__PURE__ */ jsx(
      StyledHeader,
      {
        height: appearance?.header?.height ?? HEIGHT,
        backgroundColor: appearance?.header?.backgroundColor,
        animationBackgroundColor: appearance?.header?.animation?.backgroundColor,
        easing: appearance?.header?.animation?.easing,
        duration: appearance?.header?.animation?.duration,
        sidePadding: appearance?.header?.sidePadding,
        showModal,
        children: /* @__PURE__ */ jsxs(StyledHeaderInner, { children: [
          /* @__PURE__ */ jsxs(StyledLeftWrapper, { gap: appearance?.leftGap, children: [
            left,
            leftInner
          ] }),
          /* @__PURE__ */ jsxs(StyledRightWrapper, { gap: appearance?.rightGap, children: [
            rightInner,
            right
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      StyledModalWrapper,
      {
        height: appearance?.header?.height ?? HEIGHT,
        showModal,
        children: modalContent
      }
    )
  ] });
};

// styles/size.ts
var PC_SIZE = 1280;
var TABLET_SIZE = 768;
var SP_SIZE = 480;
var REM_SIZE = 16;
var StyledPicture = styled13.picture.withConfig({
  shouldForwardProp: (prop) => prop !== "objectFit"
})`
  display: block;
  width: 100%;
  height: ${({ objectFit }) => objectFit ? "100%" : "auto"};
`;
var StyledImg = styled13.img.withConfig({
  shouldForwardProp: (prop) => prop !== "objectFit"
})`
  width: 100%;
  display: block;
  object-fit: ${({ objectFit }) => objectFit ? "cover" : "contain"};
  height: ${({ objectFit }) => objectFit ? "100%" : "auto"};
`;
var Image = ({ pc, sp, alt, objectFit = false }) => {
  return /* @__PURE__ */ jsxs(StyledPicture, { objectFit, children: [
    /* @__PURE__ */ jsx("source", { srcSet: sp.src, media: `(max-width: ${SP_SIZE}px)` }),
    /* @__PURE__ */ jsx(StyledImg, { src: pc.src, alt, objectFit })
  ] });
};
var StyledInputWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize = (size) => size ?? 18;
var StyledInputField = styled13.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize($fontSize))};
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputField} {
      border-color: #f00;
    }
  `}

  ${({ $variant, theme }) => {
  switch ($variant) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input001 = forwardRef(
  ({
    variant = "001",
    size = "small",
    name = "input-001",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper, { children: /* @__PURE__ */ jsxs(StyledInput, { $error: hasError, $variant: variant, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledInputField,
        {
          ...mergedInputProps,
          ref: inputRef,
          $fontSize: appearance?.fontSize,
          $color: appearance?.color,
          $borderColor: appearance?.borderColor,
          $placeholderColor: appearance?.placeholderColor,
          $focusRingColor: appearance?.focusRingColor,
          $size: size
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input001.displayName = "Input001";
var StyledInputWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel2 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize2 = (size) => size ?? 18;
var StyledInputField2 = styled13.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize2($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize2($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize2($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: border-bottom-width 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    border-bottom-width: ${({ theme }) => theme.size.em(0.125)};
    border-bottom-color: ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(3, defaultFontSize2($fontSize))};
          padding-bottom: ${theme.size.customEm(3, defaultFontSize2($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize2($fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(7, defaultFontSize2($fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2($fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize2($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize2($fontSize))};
        `;
  }
}}
`;
var StyledInput2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputField2} {
      border-bottom-color: #f00;
    }
  `}
`;
var StyledInputError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input002 = forwardRef(
  ({
    size = "small",
    name = "input-002",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper2, { children: /* @__PURE__ */ jsxs(StyledInput2, { $error: hasError, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel2,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledInputField2,
        {
          ...mergedInputProps,
          ref: inputRef,
          $fontSize: appearance?.fontSize,
          $color: appearance?.color,
          $borderColor: appearance?.borderColor,
          $placeholderColor: appearance?.placeholderColor,
          $focusRingColor: appearance?.focusRingColor,
          $size: size
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError2,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input002.displayName = "Input002";
var StyledInputWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel3 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize3 = (size) => size ?? 18;
var StyledInputField3 = styled13.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize3($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize3($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize3($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: border-bottom-width 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    border-bottom-width: ${({ theme }) => theme.size.em(0.125)};
    border-bottom-color: ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize3($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize3($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize3($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize3($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize3($fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize3($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3($fontSize))};
        `;
  }
}}
`;
var StyledInput3 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputField3} {
      background-color: #fdd;
    }
  `}
`;
var StyledInputError3 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input003 = forwardRef(
  ({
    size = "small",
    name = "input-003",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper3, { children: /* @__PURE__ */ jsxs(StyledInput3, { $error: hasError, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel3,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledInputField3,
        {
          ...mergedInputProps,
          ref: inputRef,
          $fontSize: appearance?.fontSize,
          $color: appearance?.color,
          $borderColor: appearance?.borderColor,
          $backgroundColor: appearance?.backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $errorBackgroundColor: appearance?.errorBackgroundColor,
          $focusRingColor: appearance?.focusRingColor,
          $size: size
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError3,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input003.displayName = "Input003";
var StyledInputWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel4 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize4 = (size) => size ?? 18;
var StyledInputField4 = styled13.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize4($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize4($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize4($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize4($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize4($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize4($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize4($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize4($fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize4($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4($fontSize))};
        `;
  }
}}
`;
var StyledInput4 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputField4} {
      background-color: #fdd;
    }
  `}

  ${({ $variant, theme }) => {
  switch ($variant) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input004 = forwardRef(
  ({
    variant = "001",
    size = "small",
    name = "input-004",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper4, { children: /* @__PURE__ */ jsxs(StyledInput4, { $error: hasError, $variant: variant, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel4,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledInputField4,
        {
          ...mergedInputProps,
          ref: inputRef,
          $fontSize: appearance?.fontSize,
          $color: appearance?.color,
          $backgroundColor: appearance?.backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $errorBackgroundColor: appearance?.errorBackgroundColor,
          $focusRingColor: appearance?.focusRingColor,
          $size: size
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError4,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input004.displayName = "Input004";
var StyledInputWrapper5 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel5 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize5 = (size) => size ?? 18;
var StyledInputField5 = styled13.input.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize5($fontSize))};
  padding-left: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize5($fontSize))};
  padding-right: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize5($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: 1;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize5($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize5($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize5($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize5($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize5($fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize5($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5($fontSize))};
        `;
  }
}}
`;
var StyledInput5 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputField5} {
      background-color: #fdd;
    }
  `}

  ${({ $variant, theme }) => {
  switch ($variant) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input005 = forwardRef(
  ({
    variant = "001",
    size = "small",
    name = "input-005",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper5, { children: /* @__PURE__ */ jsxs(StyledInput5, { $error: hasError, $variant: variant, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel5,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledInputField5,
        {
          ...mergedInputProps,
          ref: inputRef,
          $fontSize: appearance?.fontSize,
          $color: appearance?.color,
          $borderColor: appearance?.borderColor,
          $backgroundColor: appearance?.backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $errorBackgroundColor: appearance?.errorBackgroundColor,
          $focusRingColor: appearance?.focusRingColor,
          $size: size
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError5,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input005.displayName = "Input005";
var StyledInputWrapper6 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputLabel6 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var StyledInputFieldWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  transition: box-shadow 0.2s ease-in-out;

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $iconPosition, theme }) => {
  switch ($iconPosition) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$") && prop !== "size"
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize6($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  box-sizing: border-box;
  line-height: 1;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  ${({ $size, theme, $fontSize }) => {
  switch ($size) {
    case "small":
      return css`
          padding-top: ${theme.size.customEm(5, defaultFontSize6($fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize6($fontSize))};
        `;
    case "middle":
      return css`
          padding-top: ${theme.size.customEm(10, defaultFontSize6($fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize6($fontSize))};
        `;
    case "large":
      return css`
          padding-top: ${theme.size.customEm(15, defaultFontSize6($fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize6($fontSize))};
        `;
    default:
      return css`
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
  }
}}

  ${({ $iconPosition, theme }) => {
  switch ($iconPosition) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme, $size }) => theme.icon.size.style($size)}

  ${({ $iconPosition, theme }) => {
  switch ($iconPosition) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  position: relative;
  width: 100%;

  ${({ $error }) => $error && css`
    ${StyledInputFieldWrapper} {
      border-color: #f00;
    }
  `}

  ${({ $variant, theme }) => {
  switch ($variant) {
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
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Input006 = forwardRef(
  ({
    variant = "001",
    size = "small",
    iconPosition = "right",
    icon,
    name = "input-006",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    inputType = "text",
    autoComplete,
    id: id2,
    label,
    ariaLabel,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const inputId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const inputRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: inputId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "input",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      inputRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: inputId,
      name,
      type: inputType,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    return /* @__PURE__ */ jsx(StyledInputWrapper6, { children: /* @__PURE__ */ jsxs(StyledInput6, { $error: hasError, $variant: variant, $size: size, children: [
      label && /* @__PURE__ */ jsx(
        StyledInputLabel6,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsxs(
        StyledInputFieldWrapper,
        {
          $iconPosition: iconPosition,
          $borderColor: appearance?.borderColor,
          $backgroundColor: appearance?.backgroundColor,
          $errorBorderColor: appearance?.errorBorderColor,
          $focusRingColor: appearance?.focusRingColor,
          children: [
            /* @__PURE__ */ jsx(
              StyledInputField6,
              {
                ...mergedInputProps,
                ref: inputRef,
                $fontSize: appearance?.fontSize,
                $color: appearance?.color,
                $backgroundColor: appearance?.backgroundColor,
                $placeholderColor: appearance?.placeholderColor,
                $size: size,
                $iconPosition: iconPosition
              }
            ),
            /* @__PURE__ */ jsx(StyledInputIcon, { $iconPosition: iconPosition, $size: size, children: icon })
          ]
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledInputError6,
        {
          ...errorMessageProps,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
Input006.displayName = "Input006";
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(StyledLabelWrapper, { children: /* @__PURE__ */ jsx(
    StyledLabel,
    {
      type,
      size,
      fontSize: appearance?.fontSize,
      backgroundColor: appearance?.backgroundColor,
      color: appearance?.color,
      borderColor: appearance?.borderColor,
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(StyledLabelWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledLabel2,
    {
      type,
      size,
      iconPosition,
      fontSize: appearance?.fontSize,
      backgroundColor: appearance?.backgroundColor,
      borderColor: appearance?.borderColor,
      children: [
        /* @__PURE__ */ jsx(
          StyledLabelIcon,
          {
            iconPosition,
            color: appearance?.iconColor,
            size,
            children: icon
          }
        ),
        /* @__PURE__ */ jsx(
          StyledLabelText,
          {
            iconPosition,
            fontSize: appearance?.fontSize,
            color: appearance?.color,
            children
          }
        )
      ]
    }
  ) });
};
var fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
var StyledLazyImageWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["isLoaded", "duration", "aspectRatio"].includes(prop)
})`
  position: relative;
  width: 100%;
  height: auto;
  opacity: 0;
  ${({ aspectRatio }) => aspectRatio && `aspect-ratio: ${aspectRatio};`}

  ${({ isLoaded, duration }) => isLoaded && css`
      animation: ${fadeIn} ${duration}s ease-in-out forwards;
    `}
`;
var StyledPlaceholder = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["bgColor"].includes(prop)
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor || "#f0f0f0"};
`;
var defaultAppearance3 = {
  placeholderBgColor: "#f0f0f0"
};
var LazyImage = ({
  pc,
  sp,
  alt,
  objectFit = false,
  aspectRatio = "16 / 9",
  duration = 0.6,
  threshold = 0.1,
  rootMargin = "50px",
  showPlaceholder = true,
  appearance
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef(null);
  const mergedAppearance = useMemo(
    () => ({ ...defaultAppearance3, ...appearance }),
    [appearance]
  );
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);
  useEffect(() => {
    if (isVisible) {
      const loadImage = (src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.src = src;
        });
      };
      Promise.all([loadImage(pc.src), loadImage(sp.src)]).then(() => {
        setIsLoaded(true);
      });
    }
  }, [isVisible, pc.src, sp.src]);
  const { placeholderBgColor } = mergedAppearance;
  return /* @__PURE__ */ jsx(
    StyledLazyImageWrapper,
    {
      ref: wrapperRef,
      isLoaded,
      duration,
      aspectRatio,
      children: isVisible ? /* @__PURE__ */ jsx(Image, { pc, sp, alt, objectFit }) : showPlaceholder && /* @__PURE__ */ jsx(StyledPlaceholder, { bgColor: placeholderBgColor })
    }
  );
};
var StyledList2 = styled13.ul`
  ${({ theme }) => theme.font.baseSize.em()}
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: ${({ $isAlignItemsCenter }) => $isAlignItemsCenter ? "center" : "flex-start"};

  ${({ $type, theme, $columnGap, $rowGap }) => {
  switch ($type) {
    case "001":
    case "002":
      return css`
          flex-direction: column;
          gap: ${theme.size.em($columnGap ?? 10)};
        `;
    case "003":
      return css`
          gap: ${theme.size.em($rowGap ?? 40)};
        `;
    default:
      return css`
          flex-direction: column;
          gap: ${theme.size.em($columnGap ?? 10)};
        `;
  }
}}
`;
var StyledListItem2 = styled13.li`
  ${({ $type, $borderColor }) => $type === "002" && css`
      border-bottom: 1px solid ${$borderColor ?? "#000"};
      padding-bottom: ${({ theme }) => theme.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;
var isListItemElement = (node) => {
  if (!isValidElement(node)) return false;
  if (node.type === "li") return true;
  if (typeof node.type === "object" && node.type !== null) {
    const displayName = node.type.displayName;
    if (displayName && typeof displayName === "string" && displayName.includes("ListItem")) {
      return true;
    }
  }
  if (typeof node.type === "function") {
    const displayName = node.type.displayName;
    if (displayName && typeof displayName === "string" && displayName.includes("ListItem")) {
      return true;
    }
  }
  return false;
};
var List001 = ({
  type = "001",
  listStyle = "ul",
  items,
  ariaLabel,
  appearance
}) => {
  const listProps = {
    as: listStyle,
    $type: type,
    $listStyle: listStyle,
    $columnGap: appearance?.columnGap,
    $rowGap: appearance?.rowGap,
    $isAlignItemsCenter: appearance?.isAlignItemsCenter,
    role: "list",
    "aria-label": ariaLabel,
    ...type === "003" && { "aria-orientation": "horizontal" }
  };
  return /* @__PURE__ */ jsx(StyledList2, { ...listProps, children: items.map((item) => {
    const itemProps = {
      "aria-current": item.ariaCurrent,
      "aria-selected": item.ariaSelected
    };
    if (isListItemElement(item.content)) {
      return cloneElement(item.content, {
        key: item.id,
        ...itemProps,
        $type: type,
        $borderColor: appearance?.borderColor
      });
    }
    return /* @__PURE__ */ jsx(
      StyledListItem2,
      {
        ...itemProps,
        $type: type,
        $borderColor: appearance?.borderColor,
        children: item.content
      },
      item.id
    );
  }) });
};
var StyledListItemNumber = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $numberPaddingTop }) => $numberPaddingTop === 0 || $numberPaddingTop === void 0 ? "0" : theme.size.em($numberPaddingTop)};
`;
var StyledListItemNumberText = styled13.span`
  color: ${({ $numberColor }) => $numberColor};
  font-size: ${({ theme, $numberFontSize }) => theme.size.em($numberFontSize)};
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItemTextWrapper = styled13.div`
  display: block;
`;
var StyledListItemText = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem3 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em(30 + $gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({ $hasOnClick, $animationColor }) => $hasOnClick && css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText} {
          color: ${$animationColor};
        }

        ${StyledListItemNumberText} {
          color: ${$animationColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance4 = {
  color: "#000",
  gap: 10,
  numberFontSize: 24,
  numberColor: "#000",
  numberPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic"
};
var ListItem001 = forwardRef(
  ({ as = "li", number, children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance4, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      numberFontSize,
      numberColor,
      numberPaddingTop,
      animationColor,
      animationDuration,
      animationEase
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem3,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationColor: animationColor,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: numberPaddingTop === 0,
        "aria-label": `Step ${number}`,
        children: [
          /* @__PURE__ */ jsx(StyledListItemNumber, { $numberPaddingTop: numberPaddingTop, children: /* @__PURE__ */ jsx(
            StyledListItemNumberText,
            {
              $numberFontSize: numberFontSize,
              $numberColor: numberColor,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              "aria-hidden": "true",
              children: number
            }
          ) }),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper, { children: /* @__PURE__ */ jsx(
            StyledListItemText,
            {
              $color: color2,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem001.displayName = "ListItem001";
var StyledListItemPointWrapper = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $pointPaddingTop }) => $pointPaddingTop === 0 || $pointPaddingTop === void 0 ? "0" : theme.size.em($pointPaddingTop ?? 0)};
`;
var StyledListItemPoint = styled13.span`
  background-color: ${({ $pointColor }) => $pointColor};
  width: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  height: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  border-radius: 50%;
  transition: background-color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItemTextWrapper2 = styled13.div`
  display: block;
`;
var StyledListItemText2 = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem4 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({ $hasOnClick, $animationColor, $animationPointColor }) => $hasOnClick && css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText2} {
          color: ${$animationColor};
        }

        ${StyledListItemPoint} {
          background-color: ${$animationPointColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance5 = {
  color: "#000",
  gap: 24,
  pointSize: 8,
  pointColor: "#000",
  pointPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationPointColor: "#ccc"
};
var ListItem002 = forwardRef(
  ({ as = "li", children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance5, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      pointSize,
      pointColor,
      pointPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationPointColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem4,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationColor: animationColor,
        $animationPointColor: animationPointColor,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: pointPaddingTop === 0,
        "aria-label": "List item",
        children: [
          /* @__PURE__ */ jsx(StyledListItemPointWrapper, { $pointPaddingTop: pointPaddingTop, children: /* @__PURE__ */ jsx(
            StyledListItemPoint,
            {
              $pointSize: pointSize,
              $pointColor: pointColor,
              $animationPointColor: animationPointColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper2, { children: /* @__PURE__ */ jsx(
            StyledListItemText2,
            {
              $color: color2,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem002.displayName = "ListItem002";
var StyledListItemPointWrapper2 = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $pointPaddingTop }) => $pointPaddingTop === 0 || $pointPaddingTop === void 0 ? "0" : theme.size.em($pointPaddingTop ?? 0)};
`;
var StyledListItemPoint2 = styled13.span`
  background-color: ${({ $pointColor }) => $pointColor};
  width: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  height: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  border-radius: 50%;
  transition: background-color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItemTextWrapper3 = styled13.div`
  display: block;
`;
var StyledListItemText3 = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem5 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({ $hasOnClick, $animationColor, $animationPointColor }) => $hasOnClick && css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText3} {
          color: ${$animationColor};
        }

        ${StyledListItemPoint2} {
          background-color: ${$animationPointColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance6 = {
  color: "#000",
  gap: 24,
  pointSize: 8,
  pointColor: "#000",
  pointPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationPointColor: "#ccc"
};
var ListItem003 = forwardRef(
  ({ as = "li", children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance6, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      pointSize,
      pointColor,
      pointPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationPointColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem5,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationColor: animationColor,
        $animationPointColor: animationPointColor,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: pointPaddingTop === 0,
        "aria-label": "List item",
        children: [
          /* @__PURE__ */ jsx(StyledListItemPointWrapper2, { $pointPaddingTop: pointPaddingTop, children: /* @__PURE__ */ jsx(
            StyledListItemPoint2,
            {
              $pointSize: pointSize,
              $pointColor: pointColor,
              $animationPointColor: animationPointColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper3, { children: /* @__PURE__ */ jsx(
            StyledListItemText3,
            {
              $color: color2,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem003.displayName = "ListItem003";
var StyledListItemIconWrapper = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $iconPaddingTop }) => $iconPaddingTop === 0 || $iconPaddingTop === void 0 ? "0" : theme.size.em($iconPaddingTop ?? 0)};
`;
var StyledListItemIcon = styled13.span`
  color: ${({ $iconColor }) => $iconColor};
  ${({ theme }) => theme.icon.size.style("large")}
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItemTextWrapper4 = styled13.div`
  display: block;
`;
var StyledListItemText4 = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem6 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({ $hasOnClick, $animationColor, $animationIconColor }) => $hasOnClick && css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText4} {
          color: ${$animationColor};
        }

        ${StyledListItemIcon} {
          color: ${$animationIconColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance7 = {
  color: "#000",
  gap: 8,
  iconColor: "#000",
  iconPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationIconColor: "#ccc"
};
var ListItem004 = forwardRef(
  ({ as = "li", icon, children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance7, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      iconColor,
      iconPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationIconColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem6,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationColor: animationColor,
        $animationIconColor: animationIconColor,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: iconPaddingTop === 0,
        "aria-label": "List item",
        children: [
          /* @__PURE__ */ jsx(StyledListItemIconWrapper, { $iconPaddingTop: iconPaddingTop, children: /* @__PURE__ */ jsx(
            StyledListItemIcon,
            {
              $iconColor: iconColor,
              $animationIconColor: animationIconColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              "aria-hidden": "true",
              children: icon
            }
          ) }),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper4, { children: /* @__PURE__ */ jsx(
            StyledListItemText4,
            {
              $color: color2,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem004.displayName = "ListItem004";
var StyledListItemPointWrapper3 = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $pointPaddingTop }) => $pointPaddingTop === 0 || $pointPaddingTop === void 0 ? "0" : theme.size.em($pointPaddingTop ?? 0)};
`;
var StyledListItemPoint3 = styled13.span`
  background-color: ${({ $pointColor }) => $pointColor};
  width: ${({ theme, $pointSize }) => theme.size.em($pointSize)};
  height: 1px;
  transition: background-color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItemTextWrapper5 = styled13.div`
  display: block;
`;
var StyledListItemText5 = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: color
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem7 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({ $hasOnClick, $animationColor, $animationPointColor }) => $hasOnClick && css`
      cursor: pointer;

      &:hover {
        ${StyledListItemText5} {
          color: ${$animationColor};
        }

        ${StyledListItemPoint3} {
          background-color: ${$animationPointColor};
        }
      }

      &:focus-visible {
        outline: 2px solid ${$animationColor};
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance8 = {
  color: "#000",
  gap: 24,
  pointSize: 8,
  pointColor: "#000",
  pointPaddingTop: 0,
  animationColor: "#ccc",
  animationDuration: 0.25,
  animationEase: "easeInOutCubic",
  animationPointColor: "#ccc"
};
var ListItem005 = forwardRef(
  ({ as = "li", children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance8, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      pointSize,
      pointColor,
      pointPaddingTop,
      animationColor,
      animationDuration,
      animationEase,
      animationPointColor
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem7,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationColor: animationColor,
        $animationPointColor: animationPointColor,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: pointPaddingTop === 0,
        "aria-label": "List item",
        children: [
          /* @__PURE__ */ jsx(StyledListItemPointWrapper3, { $pointPaddingTop: pointPaddingTop, children: /* @__PURE__ */ jsx(
            StyledListItemPoint3,
            {
              $pointSize: pointSize,
              $pointColor: pointColor,
              $animationPointColor: animationPointColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper5, { children: /* @__PURE__ */ jsx(
            StyledListItemText5,
            {
              $color: color2,
              $animationColor: animationColor,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem005.displayName = "ListItem005";
var StyledListItemFrameNumberWrapper = styled13.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme, $frameNumberPaddingTop }) => $frameNumberPaddingTop === 0 || $frameNumberPaddingTop === void 0 ? "0" : theme.size.em($frameNumberPaddingTop)};
`;
var StyledListItemFrameNumber = styled13.span`
  display: block;
`;
var StyledListItemTextWrapper6 = styled13.div`
  display: block;
`;
var StyledListItemText6 = styled13.div`
  display: block;
  color: ${({ $color }) => $color};
  overflow-wrap: break-word;
  line-height: 1.5;
  margin: 0;
  transition: opacity
    ${({ $animationDuration }) => $animationDuration}s
    ${({ $animationEase, theme }) => theme.animation.easing[$animationEase]};
`;
var StyledListItem8 = styled13.li`
  ${({ theme }) => theme.font.baseSize.em()};
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: ${({ theme, $gap }) => theme.size.em($gap)};
  align-items: ${({ $alignItemsCenter }) => $alignItemsCenter ? "center" : "start"};

  ${({
  $hasOnClick,
  $animationOpacity,
  $animationDuration,
  $animationEase,
  theme
}) => $hasOnClick && css`
      cursor: pointer;
      transition: opacity ${$animationDuration}s
        ${theme.animation.easing[$animationEase]};

      &:hover {
        opacity: ${$animationOpacity};
      }

      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }
    `}
`;
var defaultAppearance9 = {
  color: "#000",
  gap: 44,
  frameNumberPaddingTop: 0,
  animationOpacity: 0.5,
  animationDuration: 0.25,
  animationEase: "easeInOutCubic"
};
var ListItem006 = forwardRef(
  ({ as = "li", frameNumber, children, appearance, onClick, ...rest }, ref) => {
    const mergedAppearance = useMemo(
      () => ({ ...defaultAppearance9, ...appearance }),
      [appearance]
    );
    const localRef = useRef(null);
    const handleAriaClick = useCallback(
      (event) => {
        onClick?.(event);
      },
      [onClick]
    );
    const { buttonProps } = useButton(
      {
        elementType: as,
        onClick: handleAriaClick,
        isDisabled: !onClick
      },
      localRef
    );
    const handleRef = useCallback(
      (node) => {
        localRef.current = node;
        if (!ref) {
          return;
        }
        if (typeof ref === "function") {
          ref(node);
        } else {
          ref.current = node;
        }
      },
      [ref]
    );
    const mergedProps = onClick ? mergeProps(buttonProps, rest) : rest;
    const {
      color: color2,
      gap,
      frameNumberPaddingTop,
      animationOpacity,
      animationDuration,
      animationEase
    } = mergedAppearance;
    return /* @__PURE__ */ jsxs(
      StyledListItem8,
      {
        ...mergedProps,
        ref: handleRef,
        as,
        $animationOpacity: animationOpacity,
        $animationDuration: animationDuration,
        $animationEase: animationEase,
        $hasOnClick: !!onClick,
        $gap: gap,
        $alignItemsCenter: frameNumberPaddingTop === 0,
        "aria-label": typeof frameNumber === "string" ? `Frame ${frameNumber}` : void 0,
        children: [
          /* @__PURE__ */ jsx(
            StyledListItemFrameNumberWrapper,
            {
              $frameNumberPaddingTop: frameNumberPaddingTop,
              children: /* @__PURE__ */ jsx(StyledListItemFrameNumber, { "aria-hidden": "true", children: frameNumber })
            }
          ),
          /* @__PURE__ */ jsx(StyledListItemTextWrapper6, { children: /* @__PURE__ */ jsx(
            StyledListItemText6,
            {
              $color: color2,
              $animationOpacity: animationOpacity,
              $animationDuration: animationDuration,
              $animationEase: animationEase,
              children
            }
          ) })
        ]
      }
    );
  }
);
ListItem006.displayName = "ListItem006";
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
  appearance
}) => {
  return /* @__PURE__ */ jsx(StyledLoadingWrapper, { children: /* @__PURE__ */ jsxs(
    StyledLoading,
    {
      type,
      size,
      color: appearance?.color,
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
var Loading002 = ({ size = "large", appearance }) => {
  return /* @__PURE__ */ jsx(StyledLoadingWrapper2, { children: /* @__PURE__ */ jsxs(
    StyledLoading2,
    {
      size,
      indicatorColor: appearance?.indicatorColor,
      backgroundColor: appearance?.backgroundColor,
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
var getInitialMedia = () => {
  if (typeof window === "undefined") {
    return "pc";
  }
  if (window.innerWidth > SP_SIZE && window.innerWidth <= TABLET_SIZE) {
    return "tablet";
  }
  if (window.innerWidth <= SP_SIZE) {
    return "sp";
  }
  return "pc";
};
var MediaProvider = ({ children }) => {
  const [media2, setMedia] = useState(getInitialMedia);
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
  appearance
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
        fontSize: appearance?.fontSize,
        lineHeight: appearance?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon,
          {
            isOpen,
            iconColor: appearance?.iconColor,
            children: icon
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(StyledNestedListItemTextWrapper, { gap: appearance?.gap, children: /* @__PURE__ */ jsx(
      StyledNestedListItemText,
      {
        fontSize: appearance?.fontSize,
        lineHeight: appearance?.lineHeight,
        color: appearance?.color,
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
  appearance
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
        fontSize: appearance?.fontSize,
        lineHeight: appearance?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon2,
          {
            position: "left",
            isOpen: false,
            iconColor: appearance?.leftIconColor,
            children: leftIcon
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(StyledNestedListItemTextWrapper2, { children: /* @__PURE__ */ jsx(
      StyledNestedListItemText2,
      {
        fontSize: appearance?.fontSize,
        lineHeight: appearance?.lineHeight,
        color: appearance?.color,
        children
      }
    ) }),
    /* @__PURE__ */ jsx(
      StyledNestedListItemIconWrapper2,
      {
        fontSize: appearance?.fontSize,
        lineHeight: appearance?.lineHeight,
        children: /* @__PURE__ */ jsx(
          StyledNestedListItemIcon2,
          {
            position: "right",
            isOpen,
            iconColor: appearance?.rightIconColor,
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
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (useRef)({
    isFocused: false,
    observer: null
  });
  (useLayoutEffect)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (useEffectEvent)((e) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  });
  return (useCallback)((e) => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e.target;
      let onBlurHandler = (e2) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e2);
          dispatchBlur(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
  while (target && !(isFocusable)(target)) target = target.parentElement;
  let window2 = (getOwnerWindow)(target);
  let activeElement = window2.document.activeElement;
  if (!activeElement || activeElement === target) return;
  $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
  let isRefocusing = false;
  let onBlur = (e) => {
    if (e.target === activeElement || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusOut = (e) => {
    if (e.target === activeElement || isRefocusing) {
      e.stopImmediatePropagation();
      if (!target && !isRefocusing) {
        isRefocusing = true;
        (focusWithoutScrolling)(activeElement);
        cleanup();
      }
    }
  };
  let onFocus = (e) => {
    if (e.target === target || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusIn = (e) => {
    if (e.target === target || isRefocusing) {
      e.stopImmediatePropagation();
      if (!isRefocusing) {
        isRefocusing = true;
        (focusWithoutScrolling)(activeElement);
        cleanup();
      }
    }
  };
  window2.addEventListener("blur", onBlur, true);
  window2.addEventListener("focusout", onFocusOut, true);
  window2.addEventListener("focusin", onFocusIn, true);
  window2.addEventListener("focus", onFocus, true);
  let cleanup = () => {
    cancelAnimationFrame(raf);
    window2.removeEventListener("blur", onBlur, true);
    window2.removeEventListener("focusout", onFocusOut, true);
    window2.removeEventListener("focusin", onFocusIn, true);
    window2.removeEventListener("focus", onFocus, true);
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
    isRefocusing = false;
  };
  let raf = requestAnimationFrame(cleanup);
  return cleanup;
}
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((isIOS)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (getOwnerDocument$1)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
    target.style[property] = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((isIOS)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (runAfterTransition)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (getOwnerDocument$1)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
      if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (React4).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// ../../node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (useContext)(($ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (mergeProps)(contextProps, props);
    register();
  }
  (useSyncRef)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (_class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (_class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (_class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x, y = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x = clientX - rect.left;
        y = clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x;
    this.y = y;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
var $f6c31cce2adf654f$var$STYLE_ID = "react-aria-pressable-style";
var $f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (useState)(false);
  let ref = (useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null,
    disposables: []
  });
  let { addGlobalListener, removeAllGlobalListeners } = (useGlobalListeners)();
  let triggerPressStart = (useEffectEvent)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (useEffectEvent)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (useEffectEvent)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (useEffectEvent)((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    }
  });
  let cancelOnPointerExit = (useEffectEvent)((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  });
  let triggerClick = (useEffectEvent)((e) => {
    if (isDisabled) return;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  });
  let triggerSyntheticClick = (useEffectEvent)((e, target) => {
    if (isDisabled) return;
    if (onClick) {
      let event = new MouseEvent("click", e);
      ($8a9cb279dc87e130$export$c2b7abe5d61ec696)(event, target);
      onClick(($8a9cb279dc87e130$export$525bc4921d56d4a)(event));
    }
  });
  let pressProps = (useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent))) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((getEventTarget)(e.nativeEvent), e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            state.pointerType = "keyboard";
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && (nodeContains)(originalTarget, (getEventTarget)(e2)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e2), "keyboard");
            };
            addGlobalListener((getOwnerDocument$1)(e.currentTarget), "keyup", (chain)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && (isMac)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !(nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent))) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !(openLink).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (isVirtualClick)(e.nativeEvent))) {
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            triggerClick(e);
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          } else if (state.isPressed && state.pointerType !== "keyboard") {
            let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
            let stopPressUp = triggerPressUp($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType);
            let stopPressEnd = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType, true);
            shouldStopPropagation = stopPressUp && stopPressEnd;
            state.isOverTarget = false;
            triggerClick(e);
            cancel(e);
          }
          state.ignoreEmulatedMouseEvents = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((getEventTarget)(e), e.key)) e.preventDefault();
        let target = (getEventTarget)(e);
        let wasPressed = (nodeContains)(state.target, (getEventTarget)(e));
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", wasPressed);
        if (wasPressed) triggerSyntheticClick(e, state.target);
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && (nodeContains)(state.target, target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (openLink)(state.target, e, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
      } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events2 = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events2.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !(nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent))) return;
        if ((isVirtualPointerEvent)(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          let target = (getEventTarget)(e.nativeEvent);
          if ("releasePointerCapture" in target) target.releasePointerCapture(e.pointerId);
          addGlobalListener((getOwnerDocument$1)(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((getOwnerDocument$1)(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!(nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent))) return;
        if (e.button === 0) {
          if (preventFocusOnPress) {
            let dispose = ($8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
            if (dispose) state.disposables.push(dispose);
          }
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!(nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent)) || state.pointerType === "virtual") return;
        if (e.button === 0 && !state.isPressed) triggerPressUp(e, state.pointerType || e.pointerType);
      };
      pressProps2.onPointerEnter = (e) => {
        if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = true;
          triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
        }
      };
      pressProps2.onPointerLeave = (e) => {
        if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ((nodeContains)(state.target, (getEventTarget)(e)) && state.pointerType != null) {
            let clicked = false;
            let timeout = setTimeout(() => {
              if (state.isPressed && state.target instanceof HTMLElement) {
                if (clicked) cancel(e);
                else {
                  (focusWithoutScrolling)(state.target);
                  state.target.click();
                }
              }
            }, 80);
            addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
            state.disposables.push(() => clearTimeout(timeout));
          } else cancel(e);
          state.isOverTarget = false;
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!(nodeContains)(e.currentTarget, (getEventTarget)(e.nativeEvent))) return;
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp,
    triggerClick,
    triggerSyntheticClick
  ]);
  (useEffect)(() => {
    if (!domRef || false) return;
    const ownerDocument = (getOwnerDocument$1)(domRef.current);
    if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($f6c31cce2adf654f$var$STYLE_ID)) return;
    const style = ownerDocument.createElement("style");
    style.id = $f6c31cce2adf654f$var$STYLE_ID;
    style.textContent = `
@layer {
  [${$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
    ownerDocument.head.prepend(style);
  }, [
    domRef
  ]);
  (useEffect)(() => {
    let state = ref.current;
    return () => {
      var _state_target;
      if (!allowTextSelectionOnPress) ($14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : void 0);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (mergeProps)(domProps, pressProps, {
      [$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE]: true
    })
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (getOwnerWindow)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (getOwnerWindow)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !(isMac)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ((isVirtualClick)(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document || ($8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e.isTrusted) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  if ($8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((getOwnerWindow)(element))) return;
  const windowObject = (getOwnerWindow)(element);
  const documentObject = (getOwnerDocument$1)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (getOwnerWindow)(element);
  const documentObject = (getOwnerDocument$1)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (getOwnerDocument$1)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
  $507fabe10e71c6fb$var$currentModality = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  let document1 = (getOwnerDocument$1)(e === null || e === void 0 ? void 0 : e.target);
  const IHTMLInputElement = typeof window !== "undefined" ? (getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (getOwnerWindow)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (useEffect)(() => {
    let handler = (modality, e) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
  const ownerDocument = (getOwnerDocument$1)(element);
  const activeElement = (getActiveElement)(ownerDocument);
  if (($507fabe10e71c6fb$export$630ff653c5ada6a9)() === "virtual") {
    let lastFocusedElement = activeElement;
    (runAfterTransition)(() => {
      if ((getActiveElement)(ownerDocument) === lastFocusedElement && element.isConnected) (focusWithoutScrolling)(element);
    });
  } else (focusWithoutScrolling)(element);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (useCallback)((e) => {
    if (e.target === e.currentTarget) {
      if (onBlurProp) onBlurProp(e);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (useCallback)((e) => {
    const ownerDocument = (getOwnerDocument$1)(e.target);
    const activeElement = ownerDocument ? (getActiveElement)(ownerDocument) : (getActiveElement)();
    if (e.target === e.currentTarget && activeElement === (getEventTarget)(e.nativeEvent)) {
      if (onFocusProp) onFocusProp(e);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// ../../node_modules/.pnpm/@react-aria+interactions@3.25.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@react-aria/interactions/dist/createEventHandler.mjs
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler) return void 0;
  let shouldStopPropagation = true;
  return (e) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        if (shouldStopPropagation && true) console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
        else shouldStopPropagation = true;
      },
      continuePropagation() {
        shouldStopPropagation = false;
      },
      isPropagationStopped() {
        return shouldStopPropagation;
      }
    };
    handler(event);
    if (shouldStopPropagation) e.stopPropagation();
  };
}

// ../../node_modules/.pnpm/@react-aria+interactions@3.25.6_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@react-aria/interactions/dist/useKeyboard.mjs
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
      onKeyUp: ($93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
    }
  };
}
var $f645667febf57a63$export$f9762fab77588ecb = /* @__PURE__ */ (React4).createContext(null);
function $f645667febf57a63$var$useFocusableContext(ref) {
  let context = (useContext)($f645667febf57a63$export$f9762fab77588ecb) || {};
  (useSyncRef)(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $f645667febf57a63$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
  let { keyboardProps } = ($46d819fcbaf35654$export$8f71654801c2f7cd)(props);
  let interactions = (mergeProps)(focusProps, keyboardProps);
  let domProps = $f645667febf57a63$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = (useRef)(props.autoFocus);
  (useEffect)(() => {
    if (autoFocusRef.current && domRef.current) ($3ad3f6e1647bc98d$export$80f3e147d781571c)(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  let tabIndex = props.excludeFromTabOrder ? -1 : 0;
  if (props.isDisabled) tabIndex = void 0;
  return {
    focusableProps: (mergeProps)({
      ...interactions,
      tabIndex
    }, interactionProps)
  };
}
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (useRef)({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = (useGlobalListeners)();
  let onBlur = (useCallback)((e) => {
    if (!e.currentTarget.contains(e.target)) return;
    if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (useCallback)((e) => {
    if (!e.currentTarget.contains(e.target)) return;
    const ownerDocument = (getOwnerDocument$1)(e.target);
    const activeElement = (getActiveElement)(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === (getEventTarget)(e.nativeEvent)) {
      if (onFocusWithin) onFocusWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e);
      let currentTarget = e.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e2) => {
        if (state.current.isFocusWithin && !(nodeContains)(currentTarget, e2.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e2.target
          });
          ($8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
          let event = ($8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || ($507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  ($507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// ../../node_modules/.pnpm/@react-aria+radio@3.12.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@react-aria/radio/dist/utils.mjs
var $884aeceb3d67f00f$export$37b65e5b5444d35c = /* @__PURE__ */ new WeakMap();
function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  (useLayoutEffect)(() => {
    if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.disabled) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title")) ref.current.title = "";
      if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
    }
  });
  let isIgnoredReset = (useRef)(false);
  let onReset = (useEffectEvent)(() => {
    if (!isIgnoredReset.current) state.resetValidation();
  });
  let onInvalid = (useEffectEvent)((e) => {
    var _ref_current;
    if (!state.displayValidation.isInvalid) state.commitValidation();
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
      var _ref_current1;
      if (focus) focus();
      else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
      ($507fabe10e71c6fb$export$8397ddfc504fdb9a)("keyboard");
    }
    e.preventDefault();
  });
  let onChange = (useEffectEvent)(() => {
    state.commitValidation();
  });
  (useEffect)(() => {
    let input = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!input) return;
    let form = input.form;
    let reset = form === null || form === void 0 ? void 0 : form.reset;
    if (form)
      form.reset = () => {
        isIgnoredReset.current = !window.event || window.event.type === "message" && window.event.target instanceof MessagePort;
        reset === null || reset === void 0 ? void 0 : reset.call(form);
        isIgnoredReset.current = false;
      };
    input.addEventListener("invalid", onInvalid);
    input.addEventListener("change", onChange);
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
    return () => {
      input.removeEventListener("invalid", onInvalid);
      input.removeEventListener("change", onChange);
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
      if (form)
        form.reset = reset;
    };
  }, [
    ref,
    onInvalid,
    onChange,
    onReset,
    validationBehavior
  ]);
}
function $e93e671b31057976$var$getValidity(input) {
  let validity = input.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $e93e671b31057976$var$getNativeValidity(input) {
  return {
    isInvalid: !input.validity.valid,
    validationDetails: $e93e671b31057976$var$getValidity(input),
    validationErrors: input.validationMessage ? [
      input.validationMessage
    ] : []
  };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (!element.validity.valid) return element;
  }
  return null;
}

// ../../node_modules/.pnpm/@react-aria+radio@3.12.2_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@react-aria/radio/dist/useRadio.mjs
function $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, ref) {
  let { value, children, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, onPressStart, onPressEnd, onPressChange, onPress, onPressUp, onClick } = props;
  const isDisabled = props.isDisabled || state.isDisabled;
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel && true) console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let checked = state.selectedValue === value;
  let onChange = (e) => {
    e.stopPropagation();
    state.setSelectedValue(value);
  };
  let { pressProps, isPressed } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    onPressUp,
    onClick,
    isDisabled
  });
  let { pressProps: labelProps, isPressed: isLabelPressed } = ($f6c31cce2adf654f$export$45712eceda6fad21)({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    onClick,
    isDisabled,
    onPress(e) {
      var _ref_current;
      onPress === null || onPress === void 0 ? void 0 : onPress(e);
      state.setSelectedValue(value);
      (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.focus();
    }
  });
  let { focusableProps } = ($f645667febf57a63$export$4c014de7c8940b4c)((mergeProps)(props, {
    onFocus: () => state.setLastFocusedValue(value)
  }), ref);
  let interactions = (mergeProps)(pressProps, focusableProps);
  let domProps = (filterDOMProps)(props, {
    labelable: true
  });
  let tabIndex = -1;
  if (state.selectedValue != null) {
    if (state.selectedValue === value) tabIndex = 0;
  } else if (state.lastFocusedValue === value || state.lastFocusedValue == null) tabIndex = 0;
  if (isDisabled) tabIndex = void 0;
  let { name, form, descriptionId, errorMessageId, validationBehavior } = ($884aeceb3d67f00f$export$37b65e5b5444d35c).get(state);
  (useFormReset)(ref, state.defaultSelectedValue, state.setSelectedValue);
  ($e93e671b31057976$export$b8473d3665f3a75a)({
    validationBehavior
  }, state, ref);
  return {
    labelProps: (mergeProps)(labelProps, (useMemo)(() => ({
      onClick: (e) => e.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (e) => e.preventDefault()
    }), [])),
    inputProps: (mergeProps)(domProps, {
      ...interactions,
      type: "radio",
      name,
      form,
      tabIndex,
      disabled: isDisabled,
      required: state.isRequired && validationBehavior === "native",
      checked,
      value,
      onChange,
      "aria-describedby": [
        props["aria-describedby"],
        state.isInvalid ? errorMessageId : null,
        descriptionId
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled,
    isSelected: checked,
    isPressed: isPressed || isLabelPressed
  };
}
var $5c3e21d68f1c4674$var$styles = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
  let { style, isFocusable } = props;
  let [isFocused, setFocused] = (useState)(false);
  let { focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !isFocusable,
    onFocusWithinChange: (val) => setFocused(val)
  });
  let combinedStyles = (useMemo)(() => {
    if (isFocused) return style;
    else if (style) return {
      ...$5c3e21d68f1c4674$var$styles,
      ...style
    };
    else return $5c3e21d68f1c4674$var$styles;
  }, [
    isFocused
  ]);
  return {
    visuallyHiddenProps: {
      ...focusWithinProps,
      style: combinedStyles
    }
  };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
  let { children, elementType: Element3 = "div", isFocusable, style, ...otherProps } = props;
  let { visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
  return /* @__PURE__ */ (React4).createElement(Element3, (mergeProps)(otherProps, visuallyHiddenProps), children);
}
var RadioContext = createContext(
  {}
);
var StyledRadio = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  ${({ theme }) => theme.font.baseSize.em()}
  background-color: ${({ $backgroundColor }) => $backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  gap: ${({ theme, $gap }) => theme.size.em($gap ?? 8)};
  cursor: ${({ $isDisabled }) => $isDisabled ? "not-allowed" : "pointer"};
  opacity: ${({ $isDisabled }) => $isDisabled ? 0.5 : 1};
`;
var StyledRadioInput = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: ${({ theme }) => theme.size.em(20)};
  height: ${({ theme }) => theme.size.em(20)};
  border: 2px solid
    ${({ $borderColor, $isSelected, $checkedBackgroundColor }) => $isSelected ? $checkedBackgroundColor ?? "#000" : $borderColor ?? "#000"};
  border-radius: 50%;
  background-color: ${({ $isSelected, $checkedBackgroundColor }) => $isSelected ? $checkedBackgroundColor ?? "#000" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s ease;
  box-sizing: border-box;
  pointer-events: ${({ $isDisabled }) => $isDisabled ? "none" : "auto"};

  ${({ $isFocusVisible, $focusRingColor, $isDisabled }) => $isFocusVisible && !$isDisabled && `
    box-shadow: 0 0 0 0.25em ${$focusRingColor ?? "rgba(0, 0, 0, 0.25)"};
  `}
`;
var StyledRadioMark = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: ${({ theme }) => theme.size.em(8)};
  height: ${({ theme }) => theme.size.em(8)};
  border-radius: 50%;
  background-color: ${({ $markColor }) => $markColor ?? "#fff"};
`;
var StyledRadioLabel = styled13.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  color: ${({ $color }) => $color ?? "#000"};
  line-height: 0;
  display: block;
`;
var Radio001 = forwardRef(
  ({ children, appearance, ...props }, ref) => {
    const state = useContext(RadioContext);
    const inputRef = useRef(null);
    const { inputProps } = $0d5c49892c1215da$export$37b0961d2f4751e2(props, state, inputRef);
    const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
    const isSelected = state.selectedValue === props.value;
    const isDisabled = props.isDisabled || state.isDisabled;
    return /* @__PURE__ */ jsxs(
      StyledRadio,
      {
        ref,
        $backgroundColor: appearance?.backgroundColor,
        $gap: appearance?.gap,
        $isDisabled: isDisabled,
        children: [
          /* @__PURE__ */ jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: /* @__PURE__ */ jsx("input", { ...inputProps, ...focusProps, ref: inputRef }) }),
          /* @__PURE__ */ jsx(
            StyledRadioInput,
            {
              $borderColor: appearance?.borderColor,
              $checkedBackgroundColor: appearance?.checkedBackgroundColor,
              $focusRingColor: appearance?.focusRingColor,
              $isSelected: isSelected,
              $isFocusVisible: isFocusVisible,
              $isDisabled: isDisabled,
              children: isSelected && /* @__PURE__ */ jsx(StyledRadioMark, { $markColor: appearance?.markColor })
            }
          ),
          /* @__PURE__ */ jsx(
            StyledRadioLabel,
            {
              $fontSize: appearance?.fontSize,
              $color: appearance?.color,
              $isDisabled: isDisabled,
              children
            }
          )
        ]
      }
    );
  }
);
Radio001.displayName = "Radio001";
var getInitialTransform = (type, distance) => {
  switch (type) {
    case "fadeUp":
      return `translateY(${distance}px)`;
    case "fadeIn":
      return "none";
    case "slideLeft":
      return `translateX(${distance}px)`;
    case "slideRight":
      return `translateX(-${distance}px)`;
    default:
      return "none";
  }
};
var StyledScrollRevealWrapper = styled13.div.withConfig({
  shouldForwardProp: (prop) => !["$isVisible", "$type", "$duration", "$delay", "$distance"].includes(prop)
})`
  opacity: 0;
  transform: ${({ $type, $distance }) => getInitialTransform($type, $distance)};
  transition: opacity ${({ $duration }) => $duration}s ease-out,
    transform ${({ $duration }) => $duration}s ease-out;
  transition-delay: ${({ $delay }) => $delay}s;

  ${({ $isVisible }) => $isVisible && css`
      opacity: 1;
      transform: translateY(0) translateX(0);
    `}
`;
var ScrollReveal = ({
  children,
  type = "fadeUp",
  duration = 0.6,
  delay = 0,
  distance = 40,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);
  return /* @__PURE__ */ jsx(
    StyledScrollRevealWrapper,
    {
      ref: wrapperRef,
      $isVisible: isVisible,
      $type: type,
      $duration: duration,
      $delay: delay,
      $distance: distance,
      children
    }
  );
};
var StyledSelectWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelect = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledSelectLabel = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var StyledSelectInner = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
  border-radius: ${({ $variant, theme }) => $variant === "002" ? theme.size.em(5) : 0};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:focus-within {
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "rgba(0, 0, 0, 0.25)"};
  }
`;
var defaultFontSize9 = (size) => size ?? 18;
var StyledSelectField = styled13.select.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ $color, $hasPlaceholder, $placeholderColor }) => $hasPlaceholder ? $placeholderColor ?? "#909090" : $color ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize9($fontSize))};
  padding: ${({ theme, $fontSize }) => `${theme.size.customEm(12, defaultFontSize9($fontSize))} ${theme.size.customEm(16, defaultFontSize9($fontSize))}`};
  appearance: none;
  outline: none;
`;
var StyledSelectIcon = styled13.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $color }) => $color ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelectError = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Select001 = forwardRef(
  ({
    variant = "001",
    name = "select-001",
    id: id2,
    options,
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    placeholder,
    label,
    ariaLabel,
    icon,
    appearance,
    selectProps
  }, ref) => {
    const generatedId = useId();
    const selectId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const selectRef = useObjectRef(ref);
    const errorId = `${selectId}-error`;
    const baseSelectProps = {
      id: selectId,
      name
    };
    if (value !== void 0) {
      baseSelectProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseSelectProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseSelectProps.onChange = onChange;
    }
    const ariaProps = {
      "aria-invalid": hasError ? "true" : void 0,
      "aria-describedby": hasError && errorText ? errorId : void 0,
      "aria-label": label ? void 0 : ariaLabel
    };
    const mergedSelectProps = mergeProps(
      baseSelectProps,
      selectProps || {},
      ariaProps
    );
    const getIsPlaceholder = useCallback(
      (current) => {
        if (!placeholder) {
          return false;
        }
        if (Array.isArray(current)) {
          return current.length === 0 || current.every((item) => item === "");
        }
        return current === "" || current === void 0;
      },
      [placeholder]
    );
    const [isPlaceholderSelected, setIsPlaceholderSelected] = useState(
      () => getIsPlaceholder(
        mergedSelectProps.value ?? value ?? mergedSelectProps.defaultValue ?? defaultValue2 ?? selectProps?.value ?? selectProps?.defaultValue
      )
    );
    useEffect(() => {
      const currentValue = value ?? defaultValue2 ?? selectRef.current?.value;
      if (currentValue !== void 0) {
        setIsPlaceholderSelected(getIsPlaceholder(currentValue));
      }
    }, [value, defaultValue2]);
    const { onChange: mergedOnChange, ...restSelectProps } = mergedSelectProps;
    const handleSelectChange = (event) => {
      setIsPlaceholderSelected(getIsPlaceholder(event.target.value));
      mergedOnChange?.(event);
    };
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    return /* @__PURE__ */ jsx(StyledSelectWrapper, { children: /* @__PURE__ */ jsxs(StyledSelect, { children: [
      label && /* @__PURE__ */ jsx(
        StyledSelectLabel,
        {
          htmlFor: selectId,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsxs(
        StyledSelectInner,
        {
          $variant: variant,
          $borderColor: borderColor,
          $backgroundColor: appearance?.backgroundColor,
          $focusRingColor: appearance?.focusRingColor,
          onMouseDown: (event) => {
            const element = selectRef.current;
            if (!element) {
              return;
            }
            if (element.contains(event.target)) {
              return;
            }
            event.preventDefault();
            element.focus();
            if ("showPicker" in element) {
              try {
                element.showPicker();
                return;
              } catch {
              }
            }
            element.click();
          },
          children: [
            /* @__PURE__ */ jsxs(
              StyledSelectField,
              {
                ...restSelectProps,
                ref: selectRef,
                $fontSize: appearance?.fontSize,
                $color: appearance?.color,
                $placeholderColor: appearance?.placeholderColor,
                $hasPlaceholder: isPlaceholderSelected,
                onChange: handleSelectChange,
                children: [
                  placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: placeholder }),
                  options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
                ]
              }
            ),
            /* @__PURE__ */ jsx(StyledSelectIcon, { $color: appearance?.iconColor ?? "#000", children: icon })
          ]
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledSelectError,
        {
          id: errorId,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText
        }
      )
    ] }) });
  }
);
Select001.displayName = "Select001";
var StyledSelectWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelect2 = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledSelectLabel2 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var StyledSelectInner2 = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#fff"};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: ${({ theme }) => theme.size.em(16)};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:focus-within {
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "rgba(0, 0, 0, 0.25)"};
  }
`;
var defaultFontSize10 = (size) => size ?? 18;
var StyledSelectField2 = styled13.select.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${({ $color, $hasPlaceholder, $placeholderColor }) => $hasPlaceholder ? $placeholderColor ?? "#909090" : $color ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize10($fontSize))};
  padding: ${({ theme, $fontSize }) => `${theme.size.customEm(12, defaultFontSize10($fontSize))} ${theme.size.customEm(16, defaultFontSize10($fontSize))}`};
  appearance: none;
  outline: none;
`;
var StyledSelectIcon2 = styled13.span.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $color }) => $color ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelectError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $errorColor }) => $errorColor ?? "#f00"};
  font-size: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $errorFontSize }) => theme.size.em($errorFontSize ?? 16)};
  line-height: 1.2;
`;
var Select002 = forwardRef(
  ({
    variant = "001",
    name = "select-002",
    id: id2,
    options,
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    placeholder,
    label,
    ariaLabel,
    icon,
    appearance,
    selectProps
  }, ref) => {
    const generatedId = useId();
    const selectId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const selectRef = useObjectRef(ref);
    const errorId = `${selectId}-error`;
    const baseSelectProps = {
      id: selectId,
      name
    };
    if (value !== void 0) {
      baseSelectProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseSelectProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseSelectProps.onChange = onChange;
    }
    const ariaProps = {
      "aria-invalid": hasError ? "true" : void 0,
      "aria-describedby": hasError && errorText ? errorId : void 0,
      "aria-label": label ? void 0 : ariaLabel
    };
    const mergedSelectProps = mergeProps(
      baseSelectProps,
      selectProps || {},
      ariaProps
    );
    const getIsPlaceholder = useCallback(
      (current) => {
        if (!placeholder) {
          return false;
        }
        if (Array.isArray(current)) {
          return current.length === 0 || current.every((item) => item === "");
        }
        return current === "" || current === void 0;
      },
      [placeholder]
    );
    const [isPlaceholderSelected, setIsPlaceholderSelected] = useState(
      () => getIsPlaceholder(
        mergedSelectProps.value ?? value ?? mergedSelectProps.defaultValue ?? defaultValue2 ?? selectProps?.value ?? selectProps?.defaultValue
      )
    );
    useEffect(() => {
      const currentValue = value ?? defaultValue2 ?? selectRef.current?.value;
      if (currentValue !== void 0) {
        setIsPlaceholderSelected(getIsPlaceholder(currentValue));
      }
    }, [value, defaultValue2, getIsPlaceholder]);
    const { onChange: mergedOnChange, ...restSelectProps } = mergedSelectProps;
    const handleSelectChange = (event) => {
      setIsPlaceholderSelected(getIsPlaceholder(event.target.value));
      mergedOnChange?.(event);
    };
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    return /* @__PURE__ */ jsx(StyledSelectWrapper2, { children: /* @__PURE__ */ jsxs(StyledSelect2, { children: [
      label && /* @__PURE__ */ jsx(
        StyledSelectLabel2,
        {
          htmlFor: selectId,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsxs(
        StyledSelectInner2,
        {
          $variant: variant,
          $borderColor: borderColor,
          $backgroundColor: appearance?.backgroundColor,
          $focusRingColor: appearance?.focusRingColor,
          onMouseDown: (event) => {
            const element = selectRef.current;
            if (!element) {
              return;
            }
            if (element.contains(event.target)) {
              return;
            }
            event.preventDefault();
            element.focus();
            if ("showPicker" in element) {
              try {
                element.showPicker();
                return;
              } catch {
              }
            }
            element.click();
          },
          children: [
            /* @__PURE__ */ jsxs(
              StyledSelectField2,
              {
                ...restSelectProps,
                ref: selectRef,
                $fontSize: appearance?.fontSize,
                $color: appearance?.color,
                $placeholderColor: appearance?.placeholderColor,
                $hasPlaceholder: isPlaceholderSelected,
                onChange: handleSelectChange,
                children: [
                  placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: placeholder }),
                  options.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
                ]
              }
            ),
            /* @__PURE__ */ jsx(StyledSelectIcon2, { $color: appearance?.iconColor ?? "#000", children: icon })
          ]
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledSelectError2,
        {
          id: errorId,
          $errorColor: appearance?.errorColor ?? "#f00",
          $errorFontSize: appearance?.errorFontSize ?? 16,
          "aria-live": "polite",
          children: errorText
        }
      )
    ] }) });
  }
);
Select002.displayName = "Select002";
var shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
var StyledSkeleton = styled13.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "$width" && prop !== "$height" && prop !== "$borderRadius"
})`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "4px"};
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
`;
var Skeleton001 = ({
  type = "001",
  style,
  className
}) => {
  return /* @__PURE__ */ jsx(
    StyledSkeleton,
    {
      type,
      $width: style?.width,
      $height: style?.height,
      $borderRadius: style?.borderRadius,
      className
    }
  );
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
        size: controller.left.appearance?.size,
        position: controller.left.appearance?.position,
        color: controller.left.appearance?.color,
        hoverColor: controller.left.appearance?.hoverColor,
        disableOpacity: controller.left.appearance?.disableOpacity,
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
        size: controller.right.appearance?.size,
        position: controller.right.appearance?.position,
        color: controller.right.appearance?.color,
        hoverColor: controller.right.appearance?.hoverColor,
        disableOpacity: controller.right.appearance?.disableOpacity,
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
        gap: dots.appearance?.gap,
        marginTop: dots.appearance?.marginTop,
        children: [...Array(instanceRef.current.track.details.maxIdx + 1).keys()].map(
          (idx) => {
            return /* @__PURE__ */ jsx(
              StyledDot,
              {
                size: dots.appearance?.size,
                backgroundColor: dots.appearance?.backgroundColor,
                borderColor: dots.appearance?.borderColor,
                activeBackgroundColor: dots.appearance?.activeBackgroundColor,
                activeBorderColor: dots.appearance?.activeBorderColor,
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
var StyledTextButton = styled13.button.withConfig({
  shouldForwardProp: (prop) => ![
    "$type",
    "$hoverColor",
    "$hoverDuration",
    "$hoverEase",
    "$iconPosition",
    "$gap",
    "$isCenter"
  ].includes(prop)
})`
  all: unset;
  width: auto;
  display: ${({ $iconPosition }) => $iconPosition ? "inline-flex" : "inline-block"};
  align-items: ${({ $isCenter, $iconPosition }) => $iconPosition && $isCenter ? "center" : "flex-start"};
  gap: ${({ theme, $gap, $iconPosition }) => $iconPosition ? theme.size.rem($gap ?? 4) : 0};
  flex-direction: ${({ $iconPosition }) => $iconPosition === "left" ? "row-reverse" : "row"};
  transition: color ${({ $hoverDuration }) => $hoverDuration ?? "0.3s"} ${({ $hoverEase, theme }) => theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
  cursor: pointer;

  ${({ $type, $color, $hoverDuration, $hoverEase, theme }) => $type === "002" && css`
      border-bottom: 1px solid ${$color ?? "#fff"};
      transition:
        border-color ${$hoverDuration ?? "0.3s"} ${theme.animation.easing[$hoverEase ?? "easeInOutCubic"]},
        color ${$hoverDuration ?? "0.3s"} ${theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
    `}

  &:hover {
    color: ${({ $hoverColor }) => $hoverColor ?? "#000"} !important;

    svg {
      color: ${({ $hoverColor }) => $hoverColor ?? "#000"} !important;
      transition:
        color ${({ $hoverDuration }) => $hoverDuration ?? "0.3s"} ${({ $hoverEase, theme }) => theme.animation.easing[$hoverEase ?? "easeInOutCubic"]};
    }

    ${({ $type, $hoverColor }) => $type === "002" && css`
        border-color: ${$hoverColor ?? "#000"};
      `}
  }
`;
var StyledTextButtonText = styled13.span`
  display: block;
  line-height: 1.2;
`;
var StyledTextButtonIcon = styled13.div`
  display: block;
  line-height: 0;
  padding-top: ${({ theme, $paddingTop }) => $paddingTop !== void 0 ? theme.size.rem($paddingTop) : 0};
`;
var TextButton001 = forwardRef(
  ({
    type = "001",
    children,
    icon,
    iconPosition = "right",
    appearance,
    as = "button",
    ...rest
  }, ref) => {
    let elementProps;
    if (as === "a") {
      elementProps = rest;
    } else {
      const { buttonType = "button", ...buttonRest } = rest;
      elementProps = { type: buttonType, ...buttonRest };
    }
    return /* @__PURE__ */ jsxs(
      StyledTextButton,
      {
        ref,
        as,
        $type: type,
        $hoverColor: appearance?.hoverColor,
        $hoverDuration: appearance?.hoverDuration,
        $hoverEase: appearance?.hoverEase,
        $iconPosition: icon ? iconPosition : void 0,
        $gap: appearance?.gap,
        $isCenter: !appearance?.paddingTop,
        ...elementProps,
        children: [
          /* @__PURE__ */ jsx(StyledTextButtonText, { children }),
          icon && /* @__PURE__ */ jsx(StyledTextButtonIcon, { $paddingTop: appearance?.paddingTop, children: icon })
        ]
      }
    );
  }
);
TextButton001.displayName = "TextButton001";
var StyledTextFieldWrapper = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledTextFieldLabel = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize11 = (size) => size ?? 18;
var defaultLineHeight = (lineHeight) => lineHeight ?? 1.5;
var StyledTextFieldInput = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize11($fontSize))};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize11($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize11($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize11($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize11($fontSize))} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $variant }) => $variant === "001" && css`
      border-radius: 0;
    `}

  ${({ $variant, theme }) => $variant === "002" && css`
      border-radius: ${theme.size.em(4)};
    `}
`;
var StyledTextFieldError = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
var TextField001 = forwardRef(
  ({
    variant = "001",
    name = "text-field-001",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    id: id2,
    label,
    ariaLabel,
    autoComplete,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const fieldId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    return /* @__PURE__ */ jsx(StyledTextFieldWrapper, { children: /* @__PURE__ */ jsxs(StyledTextField, { children: [
      label && /* @__PURE__ */ jsx(
        StyledTextFieldLabel,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledTextFieldInput,
        {
          ...mergedInputProps,
          ref: textareaRef,
          $fontSize: appearance?.fontSize,
          $lineHeight: appearance?.lineHeight,
          $color: appearance?.color,
          $borderColor: borderColor,
          $placeholderColor: appearance?.placeholderColor,
          $variant: variant,
          $focusRingColor: appearance?.focusRingColor
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledTextFieldError,
        {
          ...errorMessageProps,
          $fontSize: appearance?.errorFontSize,
          $color: appearance?.errorColor,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
TextField001.displayName = "TextField001";
var StyledTextFieldWrapper2 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField2 = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledTextFieldLabel2 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize12 = (size) => size ?? 18;
var defaultLineHeight2 = (lineHeight) => lineHeight ?? 1.5;
var StyledTextFieldInput2 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize12($fontSize))};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize12($fontSize))} ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize12($fontSize))} ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize12($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight2($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight2($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize12($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight2($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize12($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight2($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(5, defaultFontSize12($fontSize))} * 2);
  resize: vertical;
  background: transparent;
  transition: border-bottom-width 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    border-bottom-width: ${({ theme }) => theme.size.em(0.125)};
    border-bottom-color: ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }
`;
var StyledTextFieldError2 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
var TextField002 = forwardRef(
  ({
    name = "text-field-002",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    id: id2,
    label,
    ariaLabel,
    autoComplete,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const fieldId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    return /* @__PURE__ */ jsx(StyledTextFieldWrapper2, { children: /* @__PURE__ */ jsxs(StyledTextField2, { children: [
      label && /* @__PURE__ */ jsx(
        StyledTextFieldLabel2,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledTextFieldInput2,
        {
          ...mergedInputProps,
          ref: textareaRef,
          $fontSize: appearance?.fontSize,
          $lineHeight: appearance?.lineHeight,
          $color: appearance?.color,
          $borderColor: borderColor,
          $placeholderColor: appearance?.placeholderColor,
          $focusRingColor: appearance?.focusRingColor
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledTextFieldError2,
        {
          ...errorMessageProps,
          $fontSize: appearance?.errorFontSize,
          $color: appearance?.errorColor,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
TextField002.displayName = "TextField002";
var StyledTextFieldWrapper3 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField3 = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledTextFieldLabel3 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize13 = (size) => size ?? 18;
var defaultLineHeight3 = (lineHeight) => lineHeight ?? 1.5;
var StyledTextFieldInput3 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  display: block;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize13($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize13($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight3($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight3($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize13($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight3($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize13($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight3($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize13($fontSize))} * 2);
  resize: vertical;
  transition: border-bottom-width 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    border-bottom-width: ${({ theme }) => theme.size.em(0.125)};
    border-bottom-color: ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }
`;
var StyledTextFieldError3 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
var TextField003 = forwardRef(
  ({
    name = "text-field-003",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    id: id2,
    label,
    ariaLabel,
    autoComplete,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const fieldId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    const backgroundColor = hasError ? appearance?.errorBackgroundColor ?? "#fdd" : appearance?.backgroundColor ?? "#eee";
    return /* @__PURE__ */ jsx(StyledTextFieldWrapper3, { children: /* @__PURE__ */ jsxs(StyledTextField3, { children: [
      label && /* @__PURE__ */ jsx(
        StyledTextFieldLabel3,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledTextFieldInput3,
        {
          ...mergedInputProps,
          ref: textareaRef,
          $fontSize: appearance?.fontSize,
          $lineHeight: appearance?.lineHeight,
          $color: appearance?.color,
          $borderColor: borderColor,
          $backgroundColor: backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $focusRingColor: appearance?.focusRingColor
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledTextFieldError3,
        {
          ...errorMessageProps,
          $fontSize: appearance?.errorFontSize,
          $color: appearance?.errorColor,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
TextField003.displayName = "TextField003";
var StyledTextFieldWrapper4 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField4 = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledTextFieldLabel4 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize14 = (size) => size ?? 18;
var defaultLineHeight4 = (lineHeight) => lineHeight ?? 1.5;
var StyledTextFieldInput4 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  display: block;
  border: 0;
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize14($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize14($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight4($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight4($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize14($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight4($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize14($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight4($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize14($fontSize))} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $variant }) => $variant === "001" && css`
      border-radius: 0;
    `}

  ${({ $variant, theme }) => $variant === "002" && css`
      border-radius: ${theme.size.em(4)};
    `}
`;
var StyledTextFieldError4 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
var TextField004 = forwardRef(
  ({
    variant = "001",
    name = "text-field-004",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    id: id2,
    label,
    ariaLabel,
    autoComplete,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const fieldId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    const backgroundColor = hasError ? appearance?.errorBackgroundColor ?? "#fdd" : appearance?.backgroundColor ?? "#eee";
    return /* @__PURE__ */ jsx(StyledTextFieldWrapper4, { children: /* @__PURE__ */ jsxs(StyledTextField4, { children: [
      label && /* @__PURE__ */ jsx(
        StyledTextFieldLabel4,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledTextFieldInput4,
        {
          ...mergedInputProps,
          ref: textareaRef,
          $fontSize: appearance?.fontSize,
          $lineHeight: appearance?.lineHeight,
          $color: appearance?.color,
          $backgroundColor: backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $variant: variant,
          $focusRingColor: appearance?.focusRingColor
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledTextFieldError4,
        {
          ...errorMessageProps,
          $fontSize: appearance?.errorFontSize,
          $color: appearance?.errorColor,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
TextField004.displayName = "TextField004";
var StyledTextFieldWrapper5 = styled13.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField5 = styled13.div`
  position: relative;
  width: 100%;
`;
var StyledTextFieldLabel5 = styled13.label.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: block;
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin-bottom: ${({ theme, $marginBottom }) => theme.size.em($marginBottom ?? 5)};
  color: ${({ $color }) => $color ?? "#000"};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? "normal"};
`;
var defaultFontSize15 = (size) => size ?? 18;
var defaultLineHeight5 = (lineHeight) => lineHeight ?? 1.5;
var StyledTextFieldInput5 = styled13.textarea.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  width: 100%;
  display: block;
  border: 1px solid ${({ $borderColor }) => $borderColor ?? "#000"};
  font-size: ${({ theme, $fontSize }) => theme.size.em(defaultFontSize15($fontSize))};
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#eee"};
  padding: ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize15($fontSize))};
  color: ${({ $color }) => $color ?? "#000"};
  box-sizing: border-box;
  line-height: ${({ $lineHeight }) => defaultLineHeight5($lineHeight)};
  height: calc((${({ $lineHeight }) => defaultLineHeight5($lineHeight)} * 5em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize15($fontSize))} * 2);
  min-height: calc((${({ $lineHeight }) => defaultLineHeight5($lineHeight)} * 3em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize15($fontSize))} * 2);
  max-height: calc((${({ $lineHeight }) => defaultLineHeight5($lineHeight)} * 15em) + ${({ theme, $fontSize }) => theme.size.customEm(10, defaultFontSize15($fontSize))} * 2);
  resize: vertical;

  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor ?? "#909090"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 ${({ theme }) => theme.size.em(0.25)} ${({ $focusRingColor }) => $focusRingColor ?? "#007bff"};
  }

  ${({ $variant }) => $variant === "001" && css`
      border-radius: 0;
    `}

  ${({ $variant, theme }) => $variant === "002" && css`
      border-radius: ${theme.size.em(4)};
    `}
`;
var StyledTextFieldError5 = styled13.p.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  color: ${({ $color }) => $color ?? "#f00"};
  font-size: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  min-height: ${({ theme, $fontSize }) => theme.size.em($fontSize ?? 16)};
  line-height: 1.2;
`;
var TextField005 = forwardRef(
  ({
    variant = "001",
    name = "text-field-005",
    placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
    value,
    defaultValue: defaultValue2,
    onChange,
    error = false,
    errorText,
    id: id2,
    label,
    ariaLabel,
    autoComplete,
    appearance,
    inputProps
  }, ref) => {
    const generatedId = useId();
    const fieldId = id2 ?? generatedId;
    const hasError = error || !!errorText;
    const textareaRef = useObjectRef(ref);
    const {
      labelProps,
      inputProps: ariaInputProps,
      errorMessageProps
    } = useTextField(
      {
        id: fieldId,
        label,
        "aria-label": label ? void 0 : ariaLabel,
        validationState: hasError ? "invalid" : void 0,
        errorMessage: errorText,
        inputElementType: "textarea",
        isDisabled: inputProps?.disabled,
        isRequired: inputProps?.required,
        isReadOnly: inputProps?.readOnly
      },
      textareaRef
    );
    const {
      value: _ariaValue,
      defaultValue: _ariaDefaultValue,
      onChange: _ariaOnChange,
      ...restAriaInputProps
    } = ariaInputProps;
    const baseInputProps = {
      id: fieldId,
      name,
      placeholder,
      autoComplete
    };
    if (value !== void 0) {
      baseInputProps.value = value;
    }
    if (defaultValue2 !== void 0) {
      baseInputProps.defaultValue = defaultValue2;
    }
    if (onChange) {
      baseInputProps.onChange = onChange;
    }
    const mergedInputProps = mergeProps(
      restAriaInputProps,
      baseInputProps,
      inputProps || {}
    );
    const borderColor = hasError ? appearance?.errorBorderColor ?? "#f00" : appearance?.borderColor ?? "#000";
    const backgroundColor = hasError ? appearance?.errorBackgroundColor ?? "#fdd" : appearance?.backgroundColor ?? "#eee";
    return /* @__PURE__ */ jsx(StyledTextFieldWrapper5, { children: /* @__PURE__ */ jsxs(StyledTextField5, { children: [
      label && /* @__PURE__ */ jsx(
        StyledTextFieldLabel5,
        {
          ...labelProps,
          $fontSize: appearance?.labelFontSize,
          $color: appearance?.labelColor,
          $fontWeight: appearance?.labelFontWeight,
          $marginBottom: appearance?.labelMarginBottom,
          children: label
        }
      ),
      /* @__PURE__ */ jsx(
        StyledTextFieldInput5,
        {
          ...mergedInputProps,
          ref: textareaRef,
          $fontSize: appearance?.fontSize,
          $lineHeight: appearance?.lineHeight,
          $color: appearance?.color,
          $borderColor: borderColor,
          $backgroundColor: backgroundColor,
          $placeholderColor: appearance?.placeholderColor,
          $variant: variant,
          $focusRingColor: appearance?.focusRingColor
        }
      ),
      errorText && /* @__PURE__ */ jsx(
        StyledTextFieldError5,
        {
          ...errorMessageProps,
          $fontSize: appearance?.errorFontSize,
          $color: appearance?.errorColor,
          "aria-live": "polite",
          children: errorText || ""
        }
      )
    ] }) });
  }
);
TextField005.displayName = "TextField005";
var StyledTextIcon = styled13.div.withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$")
})`
  display: flex;
  align-items: ${({ $isCenter }) => $isCenter ? "center" : "flex-start"};
  justify-content: left;
  gap: ${({ theme, $gap }) => theme.size.rem($gap ?? 4)};
  flex-direction: ${({ $iconPosition }) => $iconPosition === "left" ? "row-reverse" : "row"};
`;
var StyledTextIconText = styled13.span`
  display: block;
  line-height: 1;
`;
var StyledTextIconIcon = styled13.div`
  display: block;
  line-height: 0;
  padding-top: ${({ theme, $paddingTop }) => $paddingTop !== void 0 ? theme.size.rem($paddingTop) : 0};
`;
var TextIcon001 = forwardRef(
  ({ icon, children, iconPosition = "right", appearance }, ref) => {
    return /* @__PURE__ */ jsxs(
      StyledTextIcon,
      {
        ref,
        $iconPosition: iconPosition,
        $gap: appearance?.gap,
        $isCenter: !appearance?.paddingTop,
        children: [
          /* @__PURE__ */ jsx(StyledTextIconText, { children }),
          /* @__PURE__ */ jsx(StyledTextIconIcon, { $paddingTop: appearance?.paddingTop, children: icon })
        ]
      }
    );
  }
);
TextIcon001.displayName = "TextIcon001";
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
  appearance
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
        lineColor: appearance?.lineColor,
        animationBackgroundColorLine: appearance?.animationBackgroundColorLine
      }
    ),
    /* @__PURE__ */ jsx(
      StyledToggleCloseLine,
      {
        lineColor: appearance?.lineColor,
        animationBackgroundColorLine: appearance?.animationBackgroundColorLine
      }
    )
  ] }) }) }) }) : /* @__PURE__ */ jsx(
    StyledToggleOpen,
    {
      onClick: handleClick,
      animationBackgroundColorBefore: appearance?.animationBackgroundColorBefore,
      animationBackgroundColorAfter: appearance?.animationBackgroundColorAfter,
      children: /* @__PURE__ */ jsxs(StyledToggleOpenInner, { children: [
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: appearance?.lineColor }),
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: appearance?.lineColor }),
        /* @__PURE__ */ jsx(StyledToggleOpenLine, { lineColor: appearance?.lineColor })
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
  appearance
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
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: appearance?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: appearance?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleOpenLine2, { lineColor: appearance?.lineColor })
    ] }),
    /* @__PURE__ */ jsx(StyledToggleCloseWrapper2, { children: /* @__PURE__ */ jsxs(StyledToggleClose2, { children: [
      /* @__PURE__ */ jsx(StyledToggleCloseLine2, { lineColor: appearance?.lineColor }),
      /* @__PURE__ */ jsx(StyledToggleCloseLine2, { lineColor: appearance?.lineColor })
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
  appearance
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
      backgroundColor: appearance?.backgroundColor,
      children: /* @__PURE__ */ jsx(StyledToggleInner3, { children: isOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(StyledToggleOpenLineWrapper, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: openLine1Ref,
            lineColor: appearance?.lineColor
          }
        ) }),
        /* @__PURE__ */ jsx(StyledToggleOpenLineWrapper, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: openLine2Ref,
            lineColor: appearance?.lineColor
          }
        ) })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(StyledToggleCloseLineWrapper2, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: closeLine1Ref,
            lineColor: appearance?.lineColor
          }
        ) }),
        /* @__PURE__ */ jsx(StyledToggleCloseLineWrapper2, { children: /* @__PURE__ */ jsx(
          StyledToggleLine2,
          {
            ref: closeLine2Ref,
            lineColor: appearance?.lineColor
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

export { Accordion001, Accordion002, Accordion003, Accordion004, Accordion005, Balloon001, Balloon002, BgImageContent, BlurBg, Breadcrumbs, Button001, Button002, CheckBox001, CheckBox002, CircleProgress, DragAndDrop001, Dropdown001, Dropdown002, FadeInAndZoomImages, FooterButtons, FrameIcon001, FrameNumber001, GlobalStyles, GoogleMap, Header001, Image, Input001, Input002, Input003, Input004, Input005, Input006, JmcArrowButton, JmcButton, JmcCircleToggle, Label001, Label002, LazyImage, List001, ListItem001, ListItem002, ListItem003, ListItem004, ListItem005, ListItem006, Loading001, Loading002, Media, MediaContext, MediaProvider, Modal001, NestedListItem001, NestedListItem002, PC_SIZE, ParallaxContent, ParallaxImage, REM_SIZE, Radio001, RebitaButton, RebitaCircleProgress, RebitaFadeSlideImage, RebitaFadeText, RebitaPanel, RebitaSlideGuideDot, RebitaTextButtonWithIcon, RebitaToggle, SP_SIZE, ScrollReveal, Select001, Select002, Skeleton001, Slider, Svg001 as Svg001Icon, Svg002 as Svg002Icon, Svg003 as Svg003Icon, Svg004 as Svg004Icon, Svg005 as Svg005Icon, Svg006 as Svg006Icon, Svg007 as Svg007Icon, Svg008 as Svg008Icon, Svg009 as Svg009Icon, Svg010 as Svg010Icon, Svg011 as Svg011Icon, Svg012 as Svg012Icon, Svg013 as Svg013Icon, Svg014 as Svg014Icon, Svg015 as Svg015Icon, Svg016 as Svg016Icon, Svg017 as Svg017Icon, Svg018 as Svg018Icon, Svg019 as Svg019Icon, Svg020 as Svg020Icon, Svg021 as Svg021Icon, Svg022 as Svg022Icon, Svg023 as Svg023Icon, Svg024 as Svg024Icon, Svg025 as Svg025Icon, Svg026 as Svg026Icon, Svg027 as Svg027Icon, Svg028 as Svg028Icon, Svg029 as Svg029Icon, Svg030 as Svg030Icon, Svg031 as Svg031Icon, Svg032 as Svg032Icon, Svg033 as Svg033Icon, Svg034 as Svg034Icon, Svg035 as Svg035Icon, Svg036 as Svg036Icon, Svg037 as Svg037Icon, Svg038 as Svg038Icon, Svg039 as Svg039Icon, Svg040 as Svg040Icon, Svg041 as Svg041Icon, Svg042 as Svg042Icon, Svg043 as Svg043Icon, TABLET_SIZE, Text, TextButton001, TextField001, TextField002, TextField003, TextField004, TextField005, TextIcon001, Toggle001, Toggle002, Toggle003, ToggleSomething001, VerticalRollingText, baseFontSizeForEm, baseFontSizeForRem, color, ebGaramond, em, hexToRgb, lato, media, montserrat, notoSansJP, rem, roboto, themes, zenKakuGothicNew, zenOldMincho };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map