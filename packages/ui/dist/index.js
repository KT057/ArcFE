// components/Advanced/common/BgImageContent/styles.tsx
import styled, { css } from "styled-components";
var StyledBgImageContentWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledBgImageContentInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  transition: opacity 0.3s ${({ theme }) => theme.animation.easing.easeInOutSine};
`;
var StyledBgImageContentContainer = styled.div.withConfig({
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

// components/Advanced/common/BgImageContent/index.tsx
import { jsx } from "react/jsx-runtime";
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

// components/Advanced/common/CircleProgress/styles.tsx
import styled2 from "styled-components";
var StyledCircleProgressWrapper = styled2.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledCircleProgressContainer = styled2.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledCircleProgressSvg = styled2.svg.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  transform: rotate(-90deg);
  overflow: visible;
`;
var StyledCircleProgressTrack = styled2.circle.withConfig({
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
var StyledCircleProgressProgress = styled2.circle.withConfig({
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

// components/Advanced/common/CircleProgress/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CircleProgress = ({
  progress = 0,
  size,
  style
}) => {
  return /* @__PURE__ */ jsx2(StyledCircleProgressWrapper, { children: /* @__PURE__ */ jsx2(StyledCircleProgressContainer, { size, children: /* @__PURE__ */ jsxs(StyledCircleProgressSvg, { size, children: [
    /* @__PURE__ */ jsx2(
      StyledCircleProgressTrack,
      {
        trackColor: style?.trackColor,
        size
      }
    ),
    /* @__PURE__ */ jsx2(
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

// ../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/gsap-core.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
};
var _defaults = {
  duration: 0.5,
  overwrite: false,
  delay: 0
};
var _suppressOverwrites;
var _reverting;
var _context;
var _bigNum = 1e8;
var _tinyNum = 1 / _bigNum;
var _2PI = Math.PI * 2;
var _HALF_PI = _2PI / 4;
var _gsID = 0;
var _sqrt = Math.sqrt;
var _cos = Math.cos;
var _sin = Math.sin;
var _isString = function _isString2(value) {
  return typeof value === "string";
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isNumber = function _isNumber2(value) {
  return typeof value === "number";
};
var _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _isNotFalse = function _isNotFalse2(value) {
  return value !== false;
};
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction(value) || _isString(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
};
var _isArray = Array.isArray;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win;
var _coreInitted;
var _doc;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
};
var _missingPlugin = function _missingPlugin2(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn2(message, suppress) {
  return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal2(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc2() {
  return 0;
};
var _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
};
var _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
};
var _revertConfig = {
  suppressEvents: true
};
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness2(targets) {
  var target = targets[0], harnessPlugin, i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);
  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    i = _harnessPlugins.length;
    while (i-- && !_harnessPlugins[i].targetTest(target)) {
    }
    harnessPlugin = _harnessPlugins[i];
  }
  i = targets.length;
  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }
  return targets;
};
var _getCache = function _getCache2(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
};
var _getProperty = function _getProperty2(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
};
var _forEachName = function _forEachName2(names, func) {
  return (names = names.split(",")).forEach(func) || names;
};
var _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise2(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative2(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
  var l = toFind.length, i = 0;
  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
  }
  return i < l;
};
var _lazyRender = function _lazyRender2() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  _lazyLookup = {};
  _lazyTweens.length = 0;
  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
};
var _isRevertWorthy = function _isRevertWorthy2(animation) {
  return !!(animation._initted || animation._startAt || animation.add);
};
var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || !!(_reverting && time < 0 && _isRevertWorthy(animation)));
  _lazyTweens.length && !_reverting && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible2(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
};
var _passThrough = function _passThrough2(p) {
  return p;
};
var _setDefaults = function _setDefaults2(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
    }
  };
};
var _merge = function _merge2(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }
  return base;
};
var _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }
  return base;
};
var _copyExcluding = function _copyExcluding2(obj, excluding) {
  var copy = {}, p;
  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }
  return copy;
};
var _inheritDefaults = function _inheritDefaults2(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }
  return vars;
};
var _arraysMatch = function _arraysMatch2(a1, a2) {
  var i = a1.length, match = i === a2.length;
  while (match && i-- && a1[i] === a2[i]) {
  }
  return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = parent[lastProp], t;
  if (sortBy) {
    t = child[sortBy];
    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }
  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }
  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }
  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
};
var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = child._prev, next = child._next;
  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }
  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }
  child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
};
var _uncache = function _uncache2(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    var a = animation;
    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }
  return animation;
};
var _recacheAncestors = function _recacheAncestors2(animation) {
  var parent = animation.parent;
  while (parent && parent.parent) {
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }
  return animation;
};
var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
  var whole = Math.floor(tTime = _roundPrecise(tTime / cycleDuration));
  return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd2(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
  var parent = animation._dp;
  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    _setEnd(animation);
    parent._dirty || _uncache(parent, animation);
  }
  return animation;
};
var _postAddChecks = function _postAddChecks2(timeline2, child) {
  var t;
  if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
    t = _parentToChildTotalTime(timeline2.rawTime(), child);
    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration()) {
      t = timeline2;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline2._zTime = -_tinyNum;
  }
};
var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline2._recent = child);
  skipChecks || _postAddChecks(timeline2, child);
  timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
  return timeline2;
};
var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);
  if (!tween._initted) {
    return 1;
  }
  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);
    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat) {
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }
  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      return;
    }
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
    suppressEvents || (suppressEvents = totalTime && !prevIteration);
    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);
      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
};
var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
  var child;
  if (time > prevTime) {
    child = animation._first;
    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }
      child = child._next;
    }
  } else {
    child = animation._last;
    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }
      child = child._prev;
    }
  }
};
var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
};
var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
  if (_isString(position) && (isNaN(position) || position in labels)) {
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");
    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }
    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }
    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }
    return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }
  return position == null ? clippedDuration : +position;
};
var _createTweenType = function _createTweenType2(type, params, timeline2) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline2;
  if (type) {
    irVars = vars;
    parent = timeline2;
    while (parent && !("immediateRender" in irVars)) {
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }
    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn2(value, func) {
  return value || value === 0 ? func(value) : func;
};
var _clamp = function _clamp2(min, max, value) {
  return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit2(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp = function clamp2(min, max, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp(min, max, v);
  });
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
};
var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }
  return ar.forEach(function(value) {
    var _accumulator;
    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
};
var toArray = function toArray2(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector2(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
};
var shuffle = function shuffle2(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
};
var distribute = function distribute2(v) {
  if (_isFunction(v)) {
    return v;
  }
  var vars = _isObject(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
  if (_isString(from)) {
    ratioX = ratioY = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }
  return function(i, target, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
      if (!wrapAt) {
        max = -_bigNum;
        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
        }
        wrapAt < l && wrapAt--;
      }
      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;
      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }
      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0;
      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
};
var _roundModifier = function _roundModifier2(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
};
var snap = function snap2(snapTo, value) {
  var isArray = _isArray(snapTo), radius, is2D;
  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;
    if (snapTo.values) {
      snapTo = toArray(snapTo.values);
      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius;
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }
  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }
      if (dx < min) {
        min = dx;
        closest = i;
      }
    }
    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
};
var random = function random2(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
};
var pipe = function pipe2() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
};
var unitize = function unitize2(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
};
var normalize = function normalize2(min, max, value) {
  return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray2(a, wrapper, value) {
  return _conditionalReturn(value, function(index) {
    return a[~~wrapper(index)];
  });
};
var wrap = function wrap2(min, max, value) {
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
};
var wrapYoyo = function wrapYoyo2(min, max, value) {
  var range = max - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range ? total - value2 : value2);
  });
};
var _replaceRandom = function _replaceRandom2(value) {
  var prev = 0, s = "", i, nums, end, isArray;
  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }
  return s + value.substr(prev, value.length - prev);
};
var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
};
var interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString(start), master = {}, p, i, interpolators, l, il;
    progress === true && (mutate = 1) && (progress = null);
    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;
      for (i = 1; i < l; i++) {
        interpolators.push(interpolate2(start[i - 1], start[i]));
      }
      l--;
      func = function func2(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      };
      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }
    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }
      func = function func2(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum, p, distance, label;
  for (p in labels) {
    distance = labels[p] - fromTime;
    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }
  return label;
};
var _callback = function _callback2(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
  if (!callback) {
    return;
  }
  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender();
  context3 && (_context = context3);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
};
var _interrupt = function _interrupt2(animation) {
  _removeFromParent(animation);
  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
};
var _quickTween;
var _registerPluginQueue = [];
var _createPlugin = function _createPlugin2(config3) {
  if (!config3) return;
  config3 = !config3.name && config3["default"] || config3;
  if (_windowExists() || config3.headless) {
    var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
      this._props = [];
    } : config3, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config3 !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config3.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config3.register && config3.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config3);
  }
};
var _255 = 255;
var _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
};
var _hue = function _hue2(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
};
var splitColor = function splitColor2(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }
      if (v.length === 9) {
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);
      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1);
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }
    a = a.map(Number);
  }
  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = ~~(h + 0.5);
    a[1] = ~~(s * 100 + 0.5);
    a[2] = ~~(l * 100 + 0.5);
  }
  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
};
var _colorOrderData = function _colorOrderData2(v) {
  var values = [], c = [], i = -1;
  v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
};
var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
  var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors) {
    return s;
  }
  colors = colors.map(function(color2) {
    return (color2 = splitColor(color2, toHSL, 1)) && type + (toHSL ? color2[0] + "," + color2[1] + "%," + color2[2] + "%," + color2[3] : color2.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }
  return result + shell[l];
};
var _colorExp = (function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }
  return new RegExp(s + ")", "gi");
})();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter2(a) {
  var combined = a.join(" "), toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
    return true;
  }
};
var _tickerActive;
var _ticker = (function() {
  var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
    var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;
    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1e3;
      _self.time = time = time / 1e3;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }
    manual || (_id = _req(_tick2));
    if (dispatch) {
      for (_i = 0; _i < _listeners2.length; _i++) {
        _listeners2[_i](time, _delta, frame, v);
      }
    }
  };
  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1e3 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
          _registerPluginQueue.forEach(_createPlugin);
        }
        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity;
      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1e3 / (_fps || 240);
      _nextTime = _self.time * 1e3 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v);
        _self.remove(func);
      } : callback;
      _self.remove(callback);
      _listeners2[prioritize ? "unshift" : "push"](func);
      _wake();
      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners2.indexOf(callback)) && _listeners2.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners2
  };
  return _self;
})();
var _wake = function _wake2() {
  return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString2(value) {
  var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }
  return obj;
};
var _valueInParentheses = function _valueInParentheses2(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString2(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase2(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
};
var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  var child = timeline2._first, ease;
  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase2(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase2(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }
    child = child._next;
  }
};
var _parseEase = function _parseEase2(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut2(p) {
      return 1 - easeIn(1 - p);
    };
  }
  if (easeInOut === void 0) {
    easeInOut = function easeInOut2(p) {
      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });
  return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
};
var _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease;
};
var _configBack = function _configBack2(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut2(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache2(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ (function() {
  function Animation2(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this);
      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      this._ts || (this._pTime = _totalTime);
      _lazySafeRender(this, _totalTime, suppressEvents);
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  };
  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts;
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
    this.totalTime(_clamp(-Math.abs(this._delay), this.totalDuration(), tTime), suppressEvents !== false);
    _setEnd(this);
    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
        this._ts = this._act = 0;
      } else {
        _wake();
        this._ts = this._rts;
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp;
    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config3) {
    if (config3 === void 0) {
      config3 = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config3;
    if (_isRevertWorthy(this)) {
      this.timeline && this.timeline.revert(config3);
      this.totalTime(-0.01, config3.suppressEvents);
    }
    this.data !== "nested" && config3.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this, time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }
    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
  };
  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    this._dur || (this._zTime = -_tinyNum);
    return this;
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
        var _then = self.then;
        self.then = null;
        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation2;
})();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Timeline = /* @__PURE__ */ (function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline2.prototype;
  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  };
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime);
        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration);
          iteration = ~~prevIteration;
          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          dur = this._dur;
          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -1e-4;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          }
          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0;
      }
      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time;
        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && _isRevertWorthy(child));
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          this._start = prevStart;
          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
        if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
          if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position) {
    var _this2 = this;
    _isNumber(position) || (position = _parsePosition(this, position, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function(obj) {
          return _this2.add(obj, position);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position) : this;
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [], child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById2(id) {
    var animations = this.getChildren(1, 1, 1), i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    child.parent === this && _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };
  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);
    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
    var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  };
  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first, labels = this.labels, p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first, next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          self._lock = 1;
          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
  };
  Timeline2.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) {
        if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    }
  };
  return Timeline2;
})(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color2, endNum, chunk, startNum, hasRandom, a;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }
  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop);
    start = a[0];
    end = a[1];
  }
  startNums = start.match(_complexStringNumExp) || [];
  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);
    if (color2) {
      color2 = (color2 + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color2 = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color2 && color2 < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }
  pt.c = index < end.length ? end.substring(index, end.length) : "";
  pt.fp = funcParam;
  if (_relExp.test(end) || hasRandom) {
    pt.e = 0;
  }
  this._pt = pt;
  return pt;
};
var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
      if (pt || pt === 0) {
        end = pt;
      }
    }
  }
  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }
    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
};
var _processVars = function _processVars2(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }
  var copy = {}, p;
  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }
  return copy;
};
var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
      i = plugin._props.length;
      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }
  return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween2(tween, time, tTime) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes3 = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  tl && (!keyframes3 || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
  if (yoyoEase && tween._yoyo && !tween._repeat) {
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }
  tween._from = !tl && !!vars.runBackwards;
  if (!tl || keyframes3 && !vars.stagger) {
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop];
    cleanVars = _copyExcluding(vars, _reservedProps);
    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1);
      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
      prevStartAt._lazy = 0;
    }
    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function() {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt)));
      tween._startAt._dp = 0;
      tween._startAt._sat = tween;
      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          time && (tween._zTime = time);
          return;
        }
      }
    } else if (runBackwards && dur) {
      if (!prevStartAt) {
        time && (immediateRender = false);
        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent
          //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars);
        _removeFromParent(tween._startAt = Tween.set(targets, p));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;
        if (!immediateRender) {
          _initTween2(tween._startAt, _tinyNum, _tinyNum);
        } else if (!time) {
          return;
        }
      }
    }
    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
      index = fullTargets === targets ? i : fullTargets.indexOf(target);
      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
        plugin._props.forEach(function(name) {
          ptLookup[name] = pt;
        });
        plugin.priority && (hasPriority = 1);
      }
      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }
      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;
        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
        overwritten = !tween.parent;
        _overwritingTween = 0;
      }
      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten;
  keyframes3 && time <= 0 && tl.render(_bigNum, true, true);
};
var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;
    while (i--) {
      pt = lookup[i][property];
      if (pt && pt.d && pt.d._pt) {
        pt = pt.d._pt;
        while (pt && pt.p !== property && pt.fp !== property) {
          pt = pt._next;
        }
      }
      if (!pt) {
        _forceAllPropTweens = 1;
        tween.vars[property] = "+=0";
        _initTween(tween, time);
        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1;
      }
      ptCache.push(pt);
    }
  }
  i = ptCache.length;
  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT;
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
  }
};
var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
  if (!propertyAliases) {
    return vars;
  }
  copy = _merge({}, vars);
  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;
      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }
  return copy;
};
var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
};
var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ (function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes3 = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes3 || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i];
          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes3) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes3.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes3)) {
          keyframes3.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration();
        } else {
          copy = {};
          for (p in keyframes3) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes3[p], copy, keyframes3.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function(a2, b) {
              return a2.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0;
    }
    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes3 && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay) || 0);
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative || this._lazy) {
      time = tTime;
      timeline2 = this.timeline;
      if (this._repeat) {
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          prevIteration = _roundPrecise(tTime / cycleDuration);
          iteration = ~~prevIteration;
          if (iteration && iteration === prevIteration) {
            time = dur;
            iteration--;
          } else if (time > dur) {
            time = dur;
          }
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
          if (this.vars.repeatRefresh && !isYoyo && !this._lock && time !== cycleDuration && this._initted) {
            this._lock = force = 1;
            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0;
          return this;
        }
        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          return this;
        }
        if (dur !== this._dur) {
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (!prevTime && tTime && !suppressEvents && !prevIteration) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur);
    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1);
    }
    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      this.parent ? _interrupt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!_reverting);
      return this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
      return this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function(name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this);
    return this;
  };
  Tween2.to = function to(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  };
  Tween2.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };
  Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween2.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween2(targets, vars);
  };
  Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween2;
})(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline(), params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
var _setterPlain = function _setterPlain2(target, property, value) {
  return target[property] = value;
};
var _setterFunc = function _setterFunc2(target, property, value) {
  return target[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
  return target[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute2(target, property, value) {
  return target.setAttribute(property, value);
};
var _getSetter = function _getSetter2(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean2(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString2(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b) {
    s = data.b;
  } else if (ratio === 1 && data.e) {
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
      pt = pt._next;
    }
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens2(ratio, data) {
  var pt = data._pt;
  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
};
var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
  var pt = this._pt, next;
  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
};
var _killPropTweensOf = function _killPropTweensOf2(property) {
  var pt = this._pt, hasNonDependentRemaining, next;
  while (pt) {
    next = pt._next;
    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }
    pt = next;
  }
  return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
  var pt = parent._pt, next, pt2, first, last;
  while (pt) {
    next = pt._next;
    pt2 = first;
    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }
    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }
    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }
    pt = next;
  }
  parent._pt = first;
};
var PropTween = /* @__PURE__ */ (function() {
  function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween2.prototype;
  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set;
    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target;
    this.tween = tween;
  };
  return PropTween2;
})();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners = {};
var _emptyArray = [];
var _lastMediaTime = 0;
var _contextID = 0;
var _dispatch = function _dispatch2(type) {
  return (_listeners[type] || _emptyArray).map(function(f) {
    return f();
  });
};
var _onMediaChange = function _onMediaChange2() {
  var time = Date.now(), matches = [];
  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");
    _media.forEach(function(c) {
      var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches;
        match && (anyMatch = 1);
        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }
      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });
    _dispatch("matchMediaRevert");
    matches.forEach(function(c) {
      return c.onMatch(c, function(func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;
    _dispatch("matchMedia");
  }
};
var Context = /* @__PURE__ */ (function() {
  function Context2(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = [];
    this.isReverted = false;
    this.id = _contextID++;
    func && this.add(func);
  }
  var _proto5 = Context2.prototype;
  _proto5.add = function add(name, func, scope) {
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self = this, f = function f2() {
      var prev = _context, prevSelector = self.selector, result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };
    self.last = f;
    return name === _isFunction ? f(self, function(func2) {
      return self.add(null, func2);
    }) : name ? self[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function(e) {
      return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia2) {
    var _this4 = this;
    if (revert) {
      (function() {
        var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
        while (i2--) {
          t = _this4.data[i2];
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function(tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        }
        tweens.map(function(t2) {
          return {
            g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
            t: t2
          };
        }).sort(function(a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function(o) {
          return o.t.revert(revert);
        });
        i2 = _this4.data.length;
        while (i2--) {
          t = _this4.data[i2];
          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill();
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }
        _this4._r.forEach(function(f) {
          return f(revert, _this4);
        });
        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function(e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia2) {
      var i = _media.length;
      while (i--) {
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };
  _proto5.revert = function revert(config3) {
    this.kill(config3 || {});
  };
  return Context2;
})();
var MatchMedia = /* @__PURE__ */ (function() {
  function MatchMedia2(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }
  var _proto6 = MatchMedia2.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
    _context && !context3.selector && (context3.selector = _context.selector);
    this.contexts.push(context3);
    func = context3.add("onMatch", func);
    context3.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context3) < 0 && _media.push(context3);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context3, function(f) {
      return context3.add(null, f);
    });
    return this;
  };
  _proto6.revert = function revert(config3) {
    this.kill(config3 || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function(c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia2;
})();
var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function(config3) {
      return _createPlugin(config3);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]);
    var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target ? target : !property ? function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);
    if (target.length > 1) {
      var setters = target.map(function(t) {
        return gsap.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target = target[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin();
      _quickTween._pt = 0;
      p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p2.render(1, p2);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);
    return Plugin ? setter : function(value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _setDefaults22;
    var tween = gsap.to(target, _setDefaults((_setDefaults22 = {}, _setDefaults22[property] = "+=0.1", _setDefaults22.paused = true, _setDefaults22.stagger = 0, _setDefaults22), vars || {})), func = function func2(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config2(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function(targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars), child, next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0;
    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function(c) {
      var cond = c.conditions, found, p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context2(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
  var pt = plugin._pt;
  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }
  return pt;
};
var _addModifiers = function _addModifiers2(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers) {
    i = targets.length;
    while (i--) {
      pt = tween._ptLookup[i][p];
      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          pt = _getPluginPropTween(pt, p);
        }
        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
};
var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
  return {
    name,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init4(target, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString(vars)) {
          temp = {};
          _forEachName(vars, function(name2) {
            return temp[name2] = 1;
          });
          vars = temp;
        }
        if (modifier) {
          temp = {};
          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
};
var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v;
      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  headless: 1,
  init: function init2(target, value) {
    var i = value.length;
    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.13.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0;
var Power1 = _easeMap.Power1;
var Power2 = _easeMap.Power2;
var Power3 = _easeMap.Power3;
var Power4 = _easeMap.Power4;
var Linear = _easeMap.Linear;
var Quad = _easeMap.Quad;
var Cubic = _easeMap.Cubic;
var Quart = _easeMap.Quart;
var Quint = _easeMap.Quint;
var Strong = _easeMap.Strong;
var Elastic = _easeMap.Elastic;
var Back = _easeMap.Back;
var SteppedEase = _easeMap.SteppedEase;
var Bounce = _easeMap.Bounce;
var Sine = _easeMap.Sine;
var Expo = _easeMap.Expo;
var Circ = _easeMap.Circ;

// ../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/CSSPlugin.js
var _win2;
var _doc2;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _tempDivStyler;
var _recentSetterPlugin;
var _reverting2;
var _windowExists3 = function _windowExists4() {
  return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _atan2 = Math.atan2;
var _bigNum2 = 1e8;
var _capsExp = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
  return target.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp2(target, property, value) {
  return target.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform2(target, property, value) {
  return target._gsap[property] = value;
};
var _setterScale = function _setterScale2(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
};
var _transformProp = "transform";
var _transformOriginProp = _transformProp + "Origin";
var _saveStyle = function _saveStyle2(property, isNotCSS) {
  var _this = this;
  var target = this.target, style = target.style, cache = target._gsap;
  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};
    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function(a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function(p) {
        return _saveStyle2.call(_this, p, isNotCSS);
      });
    }
    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }
    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }
    property = _transformProp;
  }
  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
};
var _revertStyle = function _revertStyle2() {
  var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
  for (i = 0; i < props.length; i += 3) {
    if (!props[i + 1]) {
      props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    } else if (props[i + 1] === 2) {
      target[props[i]](props[i + 2]);
    } else {
      target[props[i]] = props[i + 2];
    }
  }
  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }
    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }
    i = _reverting2();
    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);
      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px";
        cache.zOrigin = 0;
        cache.renderTransform();
      }
      cache.uncache = 1;
    }
  }
};
var _getStyleSaver = function _getStyleSaver2(target, properties) {
  var saver = {
    target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || gsap.core.getCache(target);
  properties && target.style && target.nodeType && properties.split(",").forEach(function(p) {
    return saver.save(p);
  });
  return saver;
};
var _supports3D;
var _createElement = function _createElement2(type, ns) {
  var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
  return e && e.style ? e : _doc2.createElement(type);
};
var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix) {
    return property;
  }
  property = property.charAt(0).toUpperCase() + property.substr(1);
  while (i-- && !(_prefixes[i] + property in s)) {
  }
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore = function _initCore2() {
  if (_windowExists3() && window.document) {
    _win2 = window;
    _doc2 = _win2.document;
    _docElement = _doc2.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    _supports3D = !!_checkPropPrefix("perspective");
    _reverting2 = gsap.core.reverting;
    _pluginInitted = 1;
  }
};
var _getReparentedCloneBBox = function _getReparentedCloneBBox2(target) {
  var owner = target.ownerSVGElement, svg = _createElement("svg", owner && owner.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), clone = target.cloneNode(true), bbox;
  clone.style.display = "block";
  svg.appendChild(clone);
  _docElement.appendChild(svg);
  try {
    bbox = clone.getBBox();
  } catch (e) {
  }
  svg.removeChild(clone);
  _docElement.removeChild(svg);
  return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
  var i = attributesArray.length;
  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
};
var _getBBox = function _getBBox2(target) {
  var bounds, cloned;
  try {
    bounds = target.getBBox();
  } catch (error) {
    bounds = _getReparentedCloneBBox(target);
    cloned = 1;
  }
  bounds && (bounds.width || bounds.height) || cloned || (bounds = _getReparentedCloneBBox(target));
  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
};
var _isSVG = function _isSVG2(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty2(target, property) {
  if (property) {
    var style = target.style, first2Chars;
    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }
    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);
      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        property = "-" + property;
      }
      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      style.removeAttribute(property);
    }
  }
};
var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;
  plugin._props.push(property);
  return pt;
};
var _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
};
var _nonStandardLayouts = {
  grid: 1,
  flex: 1
};
var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }
  curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);
  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  }
  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = unit !== "rem" && ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }
  if (!parent || parent === _doc2 || !parent.appendChild) {
    parent = _doc2.body;
  }
  cache = parent._gsap;
  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }
    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }
  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get2(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();
  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];
    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }
  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];
    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
    }
  }
  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor");
    }
  }
  var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color2, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (end.substring(0, 6) === "var(--") {
    end = _getComputedProperty(target, end.substring(4, end.indexOf(")")));
  }
  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }
  a = [start, end];
  _colorStringFilter(a);
  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];
  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);
      if (color2) {
        color2 = (color2 + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color2 = 1;
      }
      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;
        if (!endUnit) {
          endUnit = endUnit || _config.units[prop] || startUnit;
          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }
        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        }
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color2 && color2 < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }
  _relExp.test(end) && (pt.e = 0);
  this._pt = pt;
  return pt;
};
var _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    value = x;
    x = y;
    y = value;
  }
  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
};
var _renderClearProps = function _renderClearProps2(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;
      while (--i > -1) {
        prop = props[i];
        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }
        _removeProperty(target, prop);
      }
    }
    if (clearTransforms) {
      _removeProperty(target, _transformProp);
      if (cache) {
        cache.svg && target.removeAttribute("transform");
        style.scale = style.rotate = style.translate = "none";
        _parseTransform(target, 1);
        cache.uncache = 1;
        _removeIndependentTransforms(style);
      }
    }
  }
};
var _specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;
      plugin._props.push(property);
      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
};
var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform2(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
  var matrixString = _getComputedProperty(target, _transformProp);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
};
var _getMatrix = function _getMatrix2(target, force2D) {
  var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix;
    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;
    if (!parent || !target.offsetParent && !target.getBoundingClientRect().width) {
      addedToDOM = 1;
      nextSibling = target.nextElementSibling;
      _docElement.appendChild(target);
    }
    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");
    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }
  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }
  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }
  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px";
  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }
  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform2(target, uncache) {
  var cache = target._gsap || new GSCache(target);
  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }
  var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  if (cs.translate) {
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }
    style.scale = style.rotate = style.translate = "none";
  }
  matrix = _getMatrix(target, cache.svg);
  if (cache.svg) {
    if (cache.uncache) {
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin");
    }
    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }
  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;
  if (matrix !== _identity2DMatrix) {
    a = matrix[0];
    b = matrix[1];
    c = matrix[2];
    d = matrix[3];
    x = a12 = matrix[4];
    y = a22 = matrix[5];
    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      }
    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      }
      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      }
      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }
      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }
      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }
    if (cache.svg) {
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }
  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }
  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round(scaleX);
  cache.scaleY = _round(scaleY);
  cache.rotation = _round(rotation) + deg;
  cache.rotationX = _round(rotationX) + deg;
  cache.rotationY = _round(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;
  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }
  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
};
var _firstTwoOnly = function _firstTwoOnly2(value) {
  return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate2(target, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;
  _renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }
  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }
  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }
  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }
  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }
  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }
  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }
  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }
  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }
  target.style[_transformProp] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);
  if (skewY) {
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }
  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;
    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;
      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }
    a11 = _round(a11);
    a21 = _round(a21);
    a12 = _round(a12);
    a22 = _round(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }
  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }
  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }
  if (xPercent || yPercent) {
    temp = target.getBBox();
    tx = _round(tx + xPercent / 100 * temp.width);
    ty = _round(ty + yPercent / 100 * temp.height);
  }
  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
  var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
  if (isString) {
    direction = endValue.split("_")[1];
    if (direction === "short") {
      change %= cap;
      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }
    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
    }
  }
  plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";
  plugin._props.push(property);
  return pt;
};
var _assign = function _assign2(target, source) {
  for (var p in source) {
    target[p] = source[p];
  }
  return target;
};
var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
  var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    _removeProperty(target, _transformProp);
    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }
  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];
    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;
      plugin._props.push(p);
    }
  }
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      a = props.map(function(prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init3(target, vars, tween, index, targets) {
    var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
    _pluginInitted || _initCore();
    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }
      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;
        if (!_colorExp.test(startValue)) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
        } else {
          startValue = _get(target, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps;
        if (isTransformRelated) {
          this.styles.save(p);
          if (type === "string" && endValue.substring(0, 6) === "var(--") {
            endValue = _getComputedProperty(target, endValue.substring(4, endValue.indexOf(")")));
            endNum = parseFloat(endValue);
          }
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
            transformPropTween.dep = 1;
          }
          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue);
            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0;
              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0);
          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            _missingPlugin(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : typeof target[p] === "function" ? inlineProps.push(p, 2, target[p]()) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }
    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render2(ratio, data) {
    if (data.tween._time || !_reverting2()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  _forEachName(aliases, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);

// ../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
var TweenMaxWithCSS = gsapWithCSS.core.Tween;

// components/Advanced/common/FadeInAndZoomImages/index.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// components/Advanced/common/FadeInAndZoomImages/styles.tsx
import styled3 from "styled-components";
var StyledFadeInAndZoomImagesWrapper = styled3.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeInAndZoomImagesImageInner = styled3.div.withConfig({
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
var StyledFadeInAndZoomImagesContent = styled3.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0;
`;
var StyledFadeInAndZoomImagesImage = styled3.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

// components/Advanced/common/FadeInAndZoomImages/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
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
      gsapWithCSS.to(imageElement, {
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
      gsapWithCSS.set(imageElement, {
        scale: 1,
        opacity: 1
      });
      const tween = gsapWithCSS.to(imageElement, {
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
      gsapWithCSS.killTweensOf(imageElements);
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
      gsapWithCSS.killTweensOf(imageElements);
    };
  }, [currentIndexData]);
  if (!images || images.length === 0) return null;
  return /* @__PURE__ */ jsx3(StyledFadeInAndZoomImagesWrapper, { children: /* @__PURE__ */ jsx3(StyledFadeInAndZoomImagesImageInner, { ref: wrapperRef, height, children: images.map((image, index) => /* @__PURE__ */ jsx3(
    StyledFadeInAndZoomImagesContent,
    {
      className: "fade-in-zoom-content",
      children: /* @__PURE__ */ jsx3(
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

// components/Basic/Icons/001.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Svg001 = (props) => /* @__PURE__ */ jsx4(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx4(
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

// components/Basic/Icons/002.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Svg002 = (props) => /* @__PURE__ */ jsx5(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx5(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "square",
        d: "M19 12H5m14 0-6 6m6-6-6-6"
      }
    )
  }
);

// components/Basic/Icons/003.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Svg003 = (props) => /* @__PURE__ */ jsx6(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx6(
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

// components/Basic/Icons/004.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var Svg004 = (props) => /* @__PURE__ */ jsx7(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx7(
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

// components/Basic/Icons/005.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Svg005 = (props) => /* @__PURE__ */ jsx8(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx8(
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

// components/Basic/Icons/006.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Svg006 = (props) => /* @__PURE__ */ jsx9(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx9(
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

// components/Basic/Icons/007.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Svg007 = (props) => /* @__PURE__ */ jsx10(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx10("path", { fill: "currentColor", d: "M17 12 7 19V5z" })
  }
);

// components/Basic/Icons/008.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Svg008 = (props) => /* @__PURE__ */ jsx11(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx11(
      "path",
      {
        fill: "currentColor",
        d: "M15.83 11.18a1 1 0 0 1 0 1.64l-7.257 5.079A1 1 0 0 1 7 17.079V6.921a1 1 0 0 1 1.573-.82z"
      }
    )
  }
);

// components/Basic/Icons/009.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var Svg009 = (props) => /* @__PURE__ */ jsx12(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx12(
      "path",
      {
        fill: "currentColor",
        d: "M2 14.679V9.32h10.101V5L22 12l-9.899 7v-4.321z"
      }
    )
  }
);

// components/Basic/Icons/010.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var Svg010 = (props) => /* @__PURE__ */ jsx13(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx13(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M17.5 12a.5.5 0 0 1-.213.41l-10 7A.5.5 0 0 1 6.5 19V5a.5.5 0 0 1 .787-.41l10 7 .089.08a.5.5 0 0 1 .124.33Z"
      }
    )
  }
);

// components/Basic/Icons/011.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Svg011 = (props) => /* @__PURE__ */ jsx14(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx14(
      "path",
      {
        stroke: "currentColor",
        d: "m17.287 12.41-10 7-.787.55V4.04l.787.55 10 7 .585.41z"
      }
    )
  }
);

// components/Basic/Icons/012.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Svg012 = (props) => /* @__PURE__ */ jsx15(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx15("path", { fill: "currentColor", d: "M14.832 7v4H2.043L2 13.01h12.832V17L22 12z" })
  }
);

// components/Basic/Icons/013.tsx
import { jsx as jsx16, jsxs as jsxs2 } from "react/jsx-runtime";
var Svg013 = (props) => /* @__PURE__ */ jsxs2(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx16("path", { fill: "#fff", stroke: "currentColor", d: "M5.5 6.5h16v11h-16z" }),
      /* @__PURE__ */ jsx16("path", { fill: "#fff", stroke: "currentColor", d: "M2.5 9.5h16v11h-16z" })
    ]
  }
);

// components/Basic/Icons/014.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var Svg014 = (props) => /* @__PURE__ */ jsx17(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx17(
      "path",
      {
        stroke: "currentColor",
        d: "M4 4.44h8.047M4.497 20V4.94M19.586 20v-8.032M4.997 19.5h15.089M12.71 11.312l6.757-6.772m.169 4.57V4.37h-4.73"
      }
    )
  }
);

// components/Basic/Icons/015.tsx
import { jsx as jsx18, jsxs as jsxs3 } from "react/jsx-runtime";
var Svg015 = (props) => /* @__PURE__ */ jsxs3(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx18(
        "path",
        {
          fill: "currentColor",
          d: "M15.813 7.242a.95.95 0 0 1 .953-.952.954.954 0 0 1 .954.952.95.95 0 0 1-.954.952.954.954 0 0 1-.953-.952"
        }
      ),
      /* @__PURE__ */ jsx18(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 7.48c-1.2 0-2.353.476-3.202 1.324a4.516 4.516 0 0 0 0 6.392 4.53 4.53 0 0 0 6.404 0 4.516 4.516 0 0 0 0-6.392C14.352 7.956 13.2 7.48 12 7.48M8.902 12c0-.82.326-1.607.907-2.187A3.1 3.1 0 0 1 15.098 12a3.1 3.1 0 0 1-.907 2.187A3.1 3.1 0 0 1 8.9 12",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ jsx18(
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

// components/Basic/Icons/016.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
var Svg016 = (props) => /* @__PURE__ */ jsx19(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx19(
      "path",
      {
        fill: "currentColor",
        d: "M13.522 10.775 19.48 4h-1.412l-5.172 5.883L8.765 4H4l6.247 8.896L4 20h1.412l5.461-6.212L15.236 20H20zm-1.933 2.199-.633-.886L5.92 5.04h2.168l4.064 5.688.633.886 5.283 7.393H15.9z"
      }
    )
  }
);

// components/Basic/Icons/017.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Svg017 = (props) => /* @__PURE__ */ jsx20(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx20(
      "path",
      {
        fill: "currentColor",
        d: "M21 12.023C21 7.043 16.968 3 12 3s-9 4.042-9 9.023a9.025 9.025 0 0 0 7.2 8.842v-6.136H8.4v-2.706h1.8V9.767a3.157 3.157 0 0 1 3.15-3.158h2.25v2.707h-1.8c-.495 0-.9.406-.9.902v1.805h2.7v2.706h-2.7V21c4.545-.451 8.1-4.295 8.1-8.977"
      }
    )
  }
);

// components/Basic/Icons/018.tsx
import { jsx as jsx21, jsxs as jsxs4 } from "react/jsx-runtime";
var Svg018 = (props) => /* @__PURE__ */ jsxs4(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx21("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M3 19h18V5H3z" }),
      /* @__PURE__ */ jsx21(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m3 5 9 7 9-7"
        }
      ),
      /* @__PURE__ */ jsx21(
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

// components/Basic/Icons/019.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var Svg019 = (props) => /* @__PURE__ */ jsx22(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx22(
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

// components/Basic/Icons/020.tsx
import { jsx as jsx23, jsxs as jsxs5 } from "react/jsx-runtime";
var Svg020 = (props) => /* @__PURE__ */ jsxs5(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx23(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        }
      ),
      /* @__PURE__ */ jsx23(
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

// components/Basic/Icons/021.tsx
import { jsx as jsx24, jsxs as jsxs6 } from "react/jsx-runtime";
var Svg021 = (props) => /* @__PURE__ */ jsxs6(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx24(
        "path",
        {
          fill: "currentColor",
          d: "M21 8.093v8.282c0 .67-.263 1.314-.736 1.801a2.73 2.73 0 0 1-1.806.82L18.3 19H5.7a2.74 2.74 0 0 1-1.852-.715 2.6 2.6 0 0 1-.843-1.756L3 16.375V8.093l8.5 5.51.105.058a.92.92 0 0 0 .79 0l.104-.058z"
        }
      ),
      /* @__PURE__ */ jsx24(
        "path",
        {
          fill: "currentColor",
          d: "M18.3 5c.972 0 1.824.499 2.3 1.249L12 11.822 3.4 6.25c.226-.357.536-.655.905-.871a2.76 2.76 0 0 1 1.214-.372L5.7 5z"
        }
      )
    ]
  }
);

// components/Basic/Icons/022.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var Svg022 = (props) => /* @__PURE__ */ jsx25(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx25(
      "path",
      {
        fill: "currentColor",
        d: "M7.218 10.924a13.47 13.47 0 0 0 5.858 5.858l1.955-1.955c.24-.24.596-.32.907-.214.995.33 2.07.507 3.173.507.489 0 .889.4.889.889v3.102c0 .489-.4.889-.889.889C10.764 20 4 13.236 4 4.889 4 4.4 4.4 4 4.889 4H8c.489 0 .889.4.889.889 0 1.111.178 2.178.507 3.173a.89.89 0 0 1-.223.907z"
      }
    )
  }
);

// components/Basic/Icons/023.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var Svg023 = (props) => /* @__PURE__ */ jsx26(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx26(
      "path",
      {
        stroke: "currentColor",
        d: "M8.823 4H6.286A2.286 2.286 0 0 0 4 6.286V8.57C4 14.883 9.117 20 15.429 20h2.285A2.285 2.285 0 0 0 20 17.714v-1.58a1.14 1.14 0 0 0-.632-1.02l-2.761-1.381a1.142 1.142 0 0 0-1.596.66l-.339 1.02a1.383 1.383 0 0 1-1.583.92 6.91 6.91 0 0 1-5.42-5.422 1.383 1.383 0 0 1 .918-1.583l1.267-.423a1.143 1.143 0 0 0 .747-1.36l-.67-2.68A1.14 1.14 0 0 0 8.823 4Z"
      }
    )
  }
);

// components/Basic/Icons/024.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var Svg024 = (props) => /* @__PURE__ */ jsx27(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx27(
      "path",
      {
        fill: "currentColor",
        d: "M6.667 4A2.667 2.667 0 0 0 4 6.667V8.8C4 14.986 9.014 20 15.2 20h2.133A2.667 2.667 0 0 0 20 17.333V15.86a1.6 1.6 0 0 0-.885-1.431l-2.576-1.289a1.6 1.6 0 0 0-2.234.926l-.318.953a.76.76 0 0 1-.866.502 5.92 5.92 0 0 1-4.641-4.64.76.76 0 0 1 .502-.866l1.183-.395a1.6 1.6 0 0 0 1.046-1.906l-.625-2.5A1.6 1.6 0 0 0 9.035 4z"
      }
    )
  }
);

// components/Basic/Icons/025.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var Svg025 = (props) => /* @__PURE__ */ jsx28(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx28("path", { stroke: "currentColor", d: "M6.5 3.5h14v14h-14zM3.5 5v15M3 20.5h16" })
  }
);

// components/Basic/Icons/026.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var Svg026 = (props) => /* @__PURE__ */ jsx29(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx29(
      "path",
      {
        fill: "currentColor",
        d: "M22 11.999v-.005a9.95 9.95 0 0 0-3.335-7.444l-.01-.008a.5.5 0 0 0-.084-.073h-.002A9.93 9.93 0 0 0 11.998 2a9.94 9.94 0 0 0-6.591 2.487l.01-.01a.4.4 0 0 0-.058.055A9.97 9.97 0 0 0 2 12.002a9.96 9.96 0 0 0 3.33 7.443l.01.008q.04.045.089.081l.002.001A9.93 9.93 0 0 0 11.998 22a9.94 9.94 0 0 0 6.592-2.487l-.01.01A9.95 9.95 0 0 0 22 12.005zm-3.719 6.504q-.745-.602-1.59-1.052l-.055-.027c.51-1.472.818-3.17.848-4.935v-.014h3.55a9.02 9.02 0 0 1-2.75 6.025zm-5.805-1.255a9 9 0 0 1 2.99.675l-.06-.021c-.738 1.683-1.777 2.84-2.93 3.094zm0-.953v-3.82h4.057a15.5 15.5 0 0 1-.814 4.649l.033-.11a9.7 9.7 0 0 0-3.253-.718zm0-4.773v-3.82a9.9 9.9 0 0 0 3.34-.742l-.067.024c.463 1.35.747 2.904.784 4.52v.018zm0-4.773V3.003c1.153.254 2.192 1.406 2.93 3.094a9 9 0 0 1-2.906.651zm2.378-3.333c.983.327 1.901.82 2.715 1.46l-.019-.015c-.369.29-.783.563-1.22.8l-.046.024a8.3 8.3 0 0 0-1.437-2.28l.007.008zm-3.333-.41v3.743a9 9 0 0 1-2.99-.675l.06.022c.742-1.684 1.78-2.84 2.932-3.094zM7.715 5.682a9 9 0 0 1-1.287-.839l.02.015A8.9 8.9 0 0 1 9.08 3.432l.063-.02a8.3 8.3 0 0 0-1.407 2.215zm3.808 2.02v3.82H7.466c.037-1.635.321-3.19.816-4.648l-.032.11a9.8 9.8 0 0 0 3.25.717zm0 4.773v3.82a9.9 9.9 0 0 0-3.34.742l.067-.024a15.2 15.2 0 0 1-.784-4.52v-.018zm0 4.773v3.745c-1.152-.254-2.192-1.405-2.93-3.094a9 9 0 0 1 2.906-.65zM9.148 20.58a9.1 9.1 0 0 1-2.715-1.457l.02.015c.37-.29.783-.563 1.22-.8l.047-.024c.35.833.834 1.603 1.436 2.278l-.008-.009zm7.136-2.267c.484.263.898.535 1.287.84l-.02-.016a8.9 8.9 0 0 1-2.632 1.427l-.063.02a8.3 8.3 0 0 0 1.408-2.215l.02-.054zm4.75-6.792h-3.55a16.4 16.4 0 0 0-.882-5.065l.034.115q.885-.466 1.664-1.093l-.02.015a9 9 0 0 1 2.752 6.004zM5.718 5.495c.48.39 1.02.747 1.59 1.051l.055.027c-.51 1.473-.818 3.17-.847 4.936v.013H2.964a9.02 9.02 0 0 1 2.75-6.025zm-2.753 6.98h3.55c.027 1.725.324 3.434.882 5.065l-.034-.115c-.626.333-1.164.69-1.664 1.093l.02-.015A9 9 0 0 1 2.967 12.5l-.001-.024z"
      }
    )
  }
);

// components/Basic/Icons/027.tsx
import { jsx as jsx30, jsxs as jsxs7 } from "react/jsx-runtime";
var Svg027 = (props) => /* @__PURE__ */ jsxs7(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx30(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.4 13.563c1.21 1.205 3.28 1.096 4.623-.242l3.893-3.878c1.344-1.339 1.453-3.4.244-4.606s-3.28-1.096-4.624.243L12.59 7.019"
        }
      ),
      /* @__PURE__ */ jsx30(
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

// components/Basic/Icons/028.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
var Svg028 = (props) => /* @__PURE__ */ jsx31(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx31(
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

// components/Basic/Icons/029.tsx
import { jsx as jsx32, jsxs as jsxs8 } from "react/jsx-runtime";
var Svg029 = (props) => /* @__PURE__ */ jsxs8(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx32(
        "path",
        {
          stroke: "currentColor",
          d: "M9.333 12c0 .737-.28 1.443-.78 1.964s-1.18.814-1.886.814a2.61 2.61 0 0 1-1.886-.814A2.84 2.84 0 0 1 4 12c0-.737.28-1.443.781-1.964a2.61 2.61 0 0 1 1.886-.814c.707 0 1.385.293 1.885.814s.781 1.227.781 1.964Z"
        }
      ),
      /* @__PURE__ */ jsx32(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.667 5.889 9.333 9.778m5.334 8.333-5.334-3.889"
        }
      ),
      /* @__PURE__ */ jsx32(
        "path",
        {
          stroke: "currentColor",
          d: "M20 19.222c0 .737-.28 1.444-.781 1.964-.5.521-1.178.814-1.886.814a2.61 2.61 0 0 1-1.885-.814 2.84 2.84 0 0 1-.781-1.964c0-.737.28-1.443.78-1.964s1.18-.814 1.886-.814c.708 0 1.386.293 1.886.814S20 18.485 20 19.222Zm0-14.444c0 .736-.28 1.443-.781 1.964-.5.52-1.178.814-1.886.814a2.61 2.61 0 0 1-1.885-.814 2.84 2.84 0 0 1-.781-1.964c0-.737.28-1.443.78-1.964S16.628 2 17.334 2c.708 0 1.386.293 1.886.814S20 4.04 20 4.778Z"
        }
      )
    ]
  }
);

// components/Basic/Icons/030.tsx
import { jsx as jsx33, jsxs as jsxs9 } from "react/jsx-runtime";
var Svg030 = (props) => /* @__PURE__ */ jsxs9(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx33(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2"
        }
      ),
      /* @__PURE__ */ jsx33(
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

// components/Basic/Icons/031.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var Svg031 = (props) => /* @__PURE__ */ jsx34(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx34(
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

// components/Basic/Icons/032.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
var Svg032 = (props) => /* @__PURE__ */ jsx35(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx35(
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

// components/Basic/Icons/033.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
var Svg033 = (props) => /* @__PURE__ */ jsx36(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx36(
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

// components/Basic/Icons/034.tsx
import { jsx as jsx37 } from "react/jsx-runtime";
var Svg034 = (props) => /* @__PURE__ */ jsx37(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx37("path", { fill: "currentColor", d: "M12 17 5 7h14z" })
  }
);

// components/Basic/Icons/035.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
var Svg035 = (props) => /* @__PURE__ */ jsx38(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx38(
      "path",
      {
        fill: "currentColor",
        d: "M12.82 15.83a1 1 0 0 1-1.64 0L6.102 8.573A1 1 0 0 1 6.921 7h10.158a1 1 0 0 1 .82 1.573z"
      }
    )
  }
);

// components/Basic/Icons/036.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var Svg036 = (props) => /* @__PURE__ */ jsx39(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx39(
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

// components/Basic/Icons/037.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
var Svg037 = (props) => /* @__PURE__ */ jsx40(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx40(
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

// components/Basic/Icons/038.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
var Svg038 = (props) => /* @__PURE__ */ jsx41(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx41(
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

// components/Basic/Icons/039.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
var Svg039 = (props) => /* @__PURE__ */ jsx42(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx42(
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

// components/Basic/Icons/040.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
var Svg040 = (props) => /* @__PURE__ */ jsx43(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx43(
      "path",
      {
        fill: "currentColor",
        d: "M21 10.74c0-3.994-4.037-7.24-9-7.24s-9 3.246-9 7.24c0 3.576 3.197 6.576 7.526 7.137.291.059.694.195.788.441.095.23.06.578.026.808 0 0-.103.628-.129.764-.042.221-.18.884.78.485.96-.4 5.178-3.025 7.072-5.175 1.303-1.419 1.928-2.855 1.928-4.452zM8.829 12.871c0 .093-.078.17-.172.17H6.13a.17.17 0 0 1-.172-.17V8.98c0-.093.077-.17.172-.17h.634c.094 0 .171.077.171.17v3.093H8.65c.094 0 .171.077.171.17v.629zm1.517 0c0 .093-.077.17-.172.17H9.54a.17.17 0 0 1-.171-.17V8.98c0-.093.077-.17.171-.17h.634c.095 0 .172.077.172.17zm4.345 0c0 .093-.077.17-.171.17h-.694a.1.1 0 0 1-.043-.043l-1.8-2.404v2.31c0 .094-.077.17-.172.17h-.634a.17.17 0 0 1-.171-.17v-3.89c0-.094.077-.17.171-.17h.703l.009.008.017.017 1.8 2.405V8.963c0-.093.077-.17.171-.17h.634c.095 0 .172.077.172.17v3.892zm3.48-3.263c0 .094-.077.17-.171.17h-1.714v.654H18c.094 0 .171.077.171.17v.63c0 .092-.077.169-.171.169h-1.714v.654H18c.094 0 .171.077.171.17v.629c0 .093-.077.17-.171.17h-2.529a.17.17 0 0 1-.171-.17V8.963c0-.102.077-.178.171-.178H18c.094 0 .171.076.171.17v.654"
      }
    )
  }
);

// components/Basic/Icons/041.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
var Svg041 = (props) => /* @__PURE__ */ jsx44(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: /* @__PURE__ */ jsx44(
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

// components/Basic/Icons/042.tsx
import { jsx as jsx45, jsxs as jsxs10 } from "react/jsx-runtime";
var Svg042 = (props) => /* @__PURE__ */ jsxs10(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ jsx45("path", { fill: "currentColor", d: "M4 18.545 18.545 4l1.454 1.454L5.454 20z" }),
      /* @__PURE__ */ jsx45("path", { fill: "currentColor", d: "M5.455 4 20 18.545 18.546 20 4 5.455z" })
    ]
  }
);

// components/Basic/Icons/043.tsx
import { jsx as jsx46, jsxs as jsxs11 } from "react/jsx-runtime";
var Svg043 = (props) => /* @__PURE__ */ jsxs11(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 38 38",
    ...props,
    children: [
      /* @__PURE__ */ jsx46(
        "path",
        {
          stroke: "currentColor",
          d: "M0-.5h12.398",
          transform: "scale(1.04854 .94898)rotate(45 -2.497 33.547)"
        }
      ),
      /* @__PURE__ */ jsx46(
        "path",
        {
          stroke: "currentColor",
          d: "M0-.5h12.398",
          transform: "matrix(.74143 -.67103 .74143 .67103 24.808 27)"
        }
      ),
      /* @__PURE__ */ jsx46("path", { stroke: "currentColor", d: "M4 18.5h24" })
    ]
  }
);

// components/Advanced/Jmc/ArrowButton/styles.tsx
import styled4, { css as css2 } from "styled-components";
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
var StyledJmcArrowButtonWrapper = styled4.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcArrowButtonIcon = styled4.span.withConfig({
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
var StyledJmcArrowButton = styled4.span.withConfig({
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

  ${({ size }) => css2`
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
var StyledJmcArrowButtonIconContainer = styled4.span`
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
`;
var StyledJmcArrowButtonIconWrapper = styled4.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ size }) => css2`
    width: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
    height: ${({ theme }) => theme.size.em(ICON_SIZE[size])};
  `}
`;
var StyledJmcArrowButtonIconInner = styled4.span`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: block;
`;

// components/Advanced/Jmc/ArrowButton/index.tsx
import { jsx as jsx47, jsxs as jsxs12 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx47(StyledJmcArrowButtonWrapper, { children: /* @__PURE__ */ jsx47(
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
      children: /* @__PURE__ */ jsx47(StyledJmcArrowButtonIconContainer, { children: /* @__PURE__ */ jsx47(StyledJmcArrowButtonIconWrapper, { size, children: /* @__PURE__ */ jsxs12(StyledJmcArrowButtonIconInner, { children: [
        /* @__PURE__ */ jsx47(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx47(Svg043, {}) }),
        /* @__PURE__ */ jsx47(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx47(Svg043, {}) }),
        /* @__PURE__ */ jsx47(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx47(Svg043, {}) }),
        /* @__PURE__ */ jsx47(StyledJmcArrowButtonIcon, { iconColor: style?.iconColor, children: /* @__PURE__ */ jsx47(Svg043, {}) })
      ] }) }) })
    }
  ) });
};

// components/Advanced/Jmc/Button/index.tsx
import { useState as useState3 } from "react";

// components/Advanced/Jmc/CircleToggle/index.tsx
import { useState as useState2 } from "react";

// components/Advanced/Jmc/CircleToggle/styles.tsx
import styled5 from "styled-components";

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
var StyledJmcCircleToggleWrapper = styled5.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcCircleToggle = styled5.span.withConfig({
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
var StyledJmcCircleToggleInner = styled5.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledJmcCircleToggleDotWrapper = styled5.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(4)};
`;
var StyledJmcCircleToggleDot = styled5.span.withConfig({
  shouldForwardProp: (prop) => prop !== "dotColor"
})`
  width: ${({ theme }) => theme.size.em(4)};
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ dotColor }) => dotColor ?? "#fff"};
  border-radius: 50%;
`;

// components/Advanced/Jmc/CircleToggle/index.tsx
import { jsx as jsx48, jsxs as jsxs13 } from "react/jsx-runtime";
var JmcCircleToggle = ({
  isHovered: controlledIsHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  style
}) => {
  const [internalIsHovered, setInternalIsHovered] = useState2(false);
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
  return /* @__PURE__ */ jsx48(StyledJmcCircleToggleWrapper, { children: /* @__PURE__ */ jsx48(
    StyledJmcCircleToggle,
    {
      color: style?.color,
      isHovered,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick,
      children: /* @__PURE__ */ jsx48(StyledJmcCircleToggleInner, { children: /* @__PURE__ */ jsxs13(StyledJmcCircleToggleDotWrapper, { children: [
        /* @__PURE__ */ jsx48(StyledJmcCircleToggleDot, { dotColor: style?.dotColor }),
        /* @__PURE__ */ jsx48(StyledJmcCircleToggleDot, { dotColor: style?.dotColor }),
        /* @__PURE__ */ jsx48(StyledJmcCircleToggleDot, { dotColor: style?.dotColor })
      ] }) })
    }
  ) });
};

// components/Advanced/Jmc/Button/styles.tsx
import styled6 from "styled-components";
var StyledJmcButtonWrapper = styled6.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledJmcButton = styled6.span.withConfig({
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
var StyledJmcButtonLeft = styled6.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 14)};
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#fff"};
`;

// components/Advanced/Jmc/Button/index.tsx
import { jsx as jsx49, jsxs as jsxs14 } from "react/jsx-runtime";
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
  const [internalIsHovered, setInternalIsHovered] = useState3(false);
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
  return /* @__PURE__ */ jsx49(StyledJmcButtonWrapper, { children: /* @__PURE__ */ jsxs14(
    StyledJmcButton,
    {
      as,
      backgroundColor: style?.backgroundColor,
      textColor: style?.color,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ...buttonProps,
      children: [
        /* @__PURE__ */ jsx49(StyledJmcButtonLeft, { fontSize: style?.fontSize, color: style?.color, children }),
        /* @__PURE__ */ jsx49(
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

// components/Advanced/Rebita/Button/index.tsx
import { useState as useState4 } from "react";

// components/Advanced/Rebita/VerticalRollingText/index.tsx
import { useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2 } from "react";

// components/Advanced/Rebita/VerticalRollingText/styles.tsx
import styled7 from "styled-components";
var StyledVerticalRollingTextWrapper = styled7.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "color"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
  display: inline-block;
`;
var StyledVerticalRollingTextInner = styled7.span.withConfig({
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
var StyledVerticalRollingTextContents = styled7.span`
  display: block;
  transform: translateY(0);
`;
var StyledVerticalRollingText = styled7.span`
  display: block;
`;

// components/Advanced/Rebita/VerticalRollingText/index.tsx
import { jsx as jsx50, jsxs as jsxs15 } from "react/jsx-runtime";
var VerticalRollingText = ({
  children,
  enableHover,
  style
}) => {
  const wrapperRef = useRef2(null);
  const contentsRef = useRef2(null);
  const textRef = useRef2(null);
  const onRollingText = useCallback2((isHovered) => {
    const wrapperElement = wrapperRef.current;
    const contentsElement = contentsRef.current;
    const textElement = textRef.current;
    if (!wrapperElement || !contentsElement || !textElement || !isHovered) {
      return;
    }
    const textHeight = textElement.clientHeight;
    gsapWithCSS.set(contentsElement, {
      transform: "translateY(0)"
    });
    gsapWithCSS.to(contentsElement, {
      duration: 0.4,
      transform: `translateY(-${textHeight}px)`,
      ease: "power2.inOut"
    });
  }, []);
  useEffect2(() => {
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
  useEffect2(() => {
    if (enableHover !== void 0) {
      onRollingText(enableHover);
    }
  }, [enableHover]);
  return /* @__PURE__ */ jsx50(
    StyledVerticalRollingTextWrapper,
    {
      fontSize: style?.fontSize,
      color: style?.color,
      children: /* @__PURE__ */ jsx50(
        StyledVerticalRollingTextInner,
        {
          ref: wrapperRef,
          fontSize: style?.fontSize,
          color: style?.color,
          onMouseEnter: () => enableHover === void 0 && onRollingText(true),
          onMouseLeave: () => enableHover === void 0 && onRollingText(false),
          children: /* @__PURE__ */ jsxs15(StyledVerticalRollingTextContents, { ref: contentsRef, children: [
            /* @__PURE__ */ jsx50(StyledVerticalRollingText, { ref: textRef, children }),
            /* @__PURE__ */ jsx50(StyledVerticalRollingText, { children })
          ] })
        }
      )
    }
  );
};

// components/Advanced/Rebita/Button/styles.tsx
import styled8 from "styled-components";
var StyledRebitaButtonWrapper = styled8.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledRebitaButtonInner = styled8.div.withConfig({
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
var StyledRebitaButtonLeft = styled8.div.withConfig({
  shouldForwardProp: (prop) => !["textColor", "leftContentBorderColor", "direction"].includes(prop)
})`
  color: ${({ textColor }) => textColor || "#fff"};
  padding: ${({ theme }) => `${theme.size.em(10)} ${theme.size.em(20)}`};
  height: 100%;
  flex: 1;
  border-right: ${({ direction, leftContentBorderColor }) => direction === "right" ? `1px solid ${leftContentBorderColor || "#fff"}` : "0"};
  border-left: ${({ direction, leftContentBorderColor }) => direction === "left" ? `1px solid ${leftContentBorderColor || "#fff"}` : "0"};
`;
var StyledRebitaButtonLeftInner = styled8.div.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 12)};
  font-weight: 700;
`;
var StyledRebitaButtonRight = styled8.div.withConfig({
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
var StyledRebitaButtonRightInner = styled8.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconSize" && prop !== "iconColor"
})`
  transform: translate(0);
  transition: transform 0.8s ${({ theme }) => theme.animation.easing.easeOutCubic};
  color: ${({ iconColor }) => iconColor || "#fff"};
  ${({ theme, iconSize }) => theme.icon.size.style(iconSize)}
`;

// components/Advanced/Rebita/Button/index.tsx
import { Fragment, jsx as jsx51, jsxs as jsxs16 } from "react/jsx-runtime";
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
  const [isHovered, setIsHovered] = useState4(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return /* @__PURE__ */ jsx51(StyledRebitaButtonWrapper, { children: /* @__PURE__ */ jsxs16(
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
        /* @__PURE__ */ jsx51(
          StyledRebitaButtonLeft,
          {
            textColor: style?.textColor,
            leftContentBorderColor: style?.leftContentBorderColor,
            direction,
            children: /* @__PURE__ */ jsx51(StyledRebitaButtonLeftInner, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx51(
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
        /* @__PURE__ */ jsx51(StyledRebitaButtonRight, { size, children: /* @__PURE__ */ jsx51(
          StyledRebitaButtonRightInner,
          {
            iconSize: size,
            iconColor: style?.iconColor,
            children: /* @__PURE__ */ jsx51(Fragment, { children: icon })
          }
        ) })
      ]
    }
  ) });
};

// components/Advanced/Rebita/CircleProgress/styles.tsx
import styled9 from "styled-components";
var StyledCircleProgressWrapper2 = styled9.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledCircleProgressContainer2 = styled9.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 100)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledCircleProgressContent = styled9.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
var StyledCircleProgressPercentage = styled9.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize", "textColor"].includes(prop)
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  color: ${({ textColor }) => textColor || "#1f2937"};
`;

// components/Advanced/Rebita/CircleProgress/index.tsx
import { jsx as jsx52, jsxs as jsxs17 } from "react/jsx-runtime";
var RebitaCircleProgress = ({
  progress = 0,
  children,
  style
}) => {
  const size = style?.size || 100;
  const strokeWidth = style?.strokeWidth || 3;
  return /* @__PURE__ */ jsx52(StyledCircleProgressWrapper2, { children: /* @__PURE__ */ jsxs17(StyledCircleProgressContainer2, { size, children: [
    /* @__PURE__ */ jsx52(
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
    /* @__PURE__ */ jsx52(StyledCircleProgressContent, { children: /* @__PURE__ */ jsx52(
      StyledCircleProgressPercentage,
      {
        fontSize: style?.fontSize,
        textColor: style?.textColor,
        children
      }
    ) })
  ] }) });
};

// components/Advanced/Rebita/FadeSlideImage/index.tsx
import { useState as useState5 } from "react";

// components/Advanced/Rebita/SlideGideDot/styles.tsx
import styled10 from "styled-components";
var StyledSlideGuideDotWrapper = styled10.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSlideGuideDotContainer = styled10.div.withConfig({
  shouldForwardProp: (prop) => !["size"].includes(prop)
})`
  width: ${({ theme, size }) => theme.size.em(size || 17)};
  height: ${({ theme, size }) => theme.size.em(size || 17)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledSlideGuideDotItem = styled10.span`
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

// components/Advanced/Rebita/SlideGideDot/index.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
var RebitaSlideGuideDot = ({
  type = "default",
  progress = 0,
  style,
  onClick
}) => {
  return /* @__PURE__ */ jsx53(StyledSlideGuideDotWrapper, { children: /* @__PURE__ */ jsx53(StyledSlideGuideDotContainer, { size: style?.dotSize || 17, children: type === "default" ? /* @__PURE__ */ jsx53(StyledSlideGuideDotItem, { onClick }) : /* @__PURE__ */ jsx53(
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

// components/Advanced/Rebita/FadeSlideImage/styles.tsx
import styled11 from "styled-components";
var StyledFadeSlideImageWrapper = styled11.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeSlideImageContainer = styled11.div`
  margin-bottom: ${({ theme }) => theme.size.em(14)};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.size.em(5)};
`;
var StyledFadeSlideImageGuideWrapper = styled11.div.withConfig({
  shouldForwardProp: (prop) => !["gap"].includes(prop)
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme, gap }) => theme.size.em(gap || 4)};
`;
var StyledFadeSlideImageGuideItem = styled11.div`
  display: inline-block;
`;

// components/Advanced/Rebita/FadeSlideImage/index.tsx
import { jsx as jsx54, jsxs as jsxs18 } from "react/jsx-runtime";
var RebitaFadeSlideImage = ({
  images,
  fadeInAndZoomImagesProps,
  slideGuideDotProps,
  style
}) => {
  const [currentIndex, setCurrentIndex] = useState5(0);
  const [progress, setProgress] = useState5(0);
  return /* @__PURE__ */ jsxs18(StyledFadeSlideImageWrapper, { children: [
    /* @__PURE__ */ jsx54(StyledFadeSlideImageContainer, { children: /* @__PURE__ */ jsx54(
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
    /* @__PURE__ */ jsx54(StyledFadeSlideImageGuideWrapper, { gap: style?.guideGap, children: images.map((_, index) => /* @__PURE__ */ jsx54(StyledFadeSlideImageGuideItem, { children: /* @__PURE__ */ jsx54(
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

// components/Advanced/Rebita/FadeText/styles.tsx
import styled12 from "styled-components";
var StyledFadeTextWrapper = styled12.span.withConfig({
  shouldForwardProp: (prop) => !["color", "fontSize", "progress"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFadeTextContainer = styled12.span.withConfig({
  shouldForwardProp: (prop) => !["fontSize"].includes(prop)
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize || 16)};
  line-height: 1.5;
  height: 1.5em;
  width: 100%;
  position: relative;
  display: block;
`;
var StyledFadeText = styled12.span.withConfig({
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

// components/Advanced/Rebita/FadeText/index.tsx
import { jsx as jsx55, jsxs as jsxs19 } from "react/jsx-runtime";
var RebitaFadeText = ({
  children,
  progress = 0,
  style
}) => {
  return /* @__PURE__ */ jsx55(
    StyledFadeTextWrapper,
    {
      color: style?.color,
      fontSize: style?.fontSize,
      progress,
      children: /* @__PURE__ */ jsxs19(StyledFadeTextContainer, { fontSize: style?.fontSize, children: [
        /* @__PURE__ */ jsx55(StyledFadeText, { color: style?.color, isFirst: true, progress, children }),
        /* @__PURE__ */ jsx55(StyledFadeText, { color: style?.color, isFirst: false, children })
      ] })
    }
  );
};

// components/Advanced/Rebita/Panel/styles.tsx
import styled13 from "styled-components";
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

// components/Advanced/Rebita/Panel/index.tsx
import { Fragment as Fragment2, jsx as jsx56, jsxs as jsxs20 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx56(StyledPanelWrapper, { children: /* @__PURE__ */ jsxs20(StyledPanel, { onClick, children: [
    /* @__PURE__ */ jsxs20(StyledPanelImageWrapper, { imageHeight: style?.imageHeight, children: [
      /* @__PURE__ */ jsx56(StyledPanelImageContent, { children: /* @__PURE__ */ jsx56(StyledPanelImageImage, { src: imageSrc, alt: imageAlt }) }),
      /* @__PURE__ */ jsx56(StyledPanelImageOverlay, { className: "panel-image-overlay" }),
      /* @__PURE__ */ jsx56(StyledPanelImageText, { className: "panel-image-text", children: imageText })
    ] }),
    /* @__PURE__ */ jsxs20(StyledPanelContent, { children: [
      /* @__PURE__ */ jsx56(StyledPanelContentTitle, { children: title }),
      /* @__PURE__ */ jsx56(StyledPanelContentText, { children: description })
    ] }),
    /* @__PURE__ */ jsx56(StyledPanelLabelWrapper, { children: labels.map((label, index) => /* @__PURE__ */ jsx56(StyledPanelLabel, { children: /* @__PURE__ */ jsx56(Fragment2, { children: label }) }, index)) })
  ] }) });
};

// components/Advanced/Rebita/TextButtonWithIcon/index.tsx
import { useState as useState6 } from "react";

// components/Advanced/Rebita/TextButtonWithIcon/styles.tsx
import styled14, { css as css3 } from "styled-components";
var StyledTextButtonWithIconWrapper = styled14.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextButtonWithIcon = styled14.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.size.em(8)};
  cursor: pointer;
  line-height: 0;

  ${({ direction }) => direction === "left" && css3`
      flex-direction: row-reverse;
    `}
  ${({ direction }) => direction === "right" && css3`
      flex-direction: row;
    `}
`;
var StyledTextButtonWithIconInner = styled14.span`
  display: block;
`;
var StyledTextButtonWithIconIcon = styled14.span`
  display: block;
  color: ${({ color: color2 }) => color2 || "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize || "middle")}
`;

// components/Advanced/Rebita/TextButtonWithIcon/index.tsx
import { Fragment as Fragment3, jsx as jsx57, jsxs as jsxs21 } from "react/jsx-runtime";
var RebitaTextButtonWithIcon = ({
  text = "KAIKA \u6771\u4EAC by THE SHARE HOTELS",
  icon,
  onClick,
  as = "div",
  href,
  iconDirection = "right",
  style
}) => {
  const [isHover, setIsHover] = useState6(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return /* @__PURE__ */ jsx57(StyledTextButtonWithIconWrapper, { children: /* @__PURE__ */ jsxs21(
    StyledTextButtonWithIcon,
    {
      as,
      onClick,
      href,
      direction: iconDirection,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx57(StyledTextButtonWithIconInner, { children: /* @__PURE__ */ jsx57(
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
        /* @__PURE__ */ jsx57(
          StyledTextButtonWithIconIcon,
          {
            iconSize: style?.iconSize,
            color: style?.color,
            children: /* @__PURE__ */ jsx57(Fragment3, { children: icon })
          }
        )
      ]
    }
  ) });
};

// components/Advanced/Rebita/Toggle/index.tsx
import { useState as useState7 } from "react";

// components/Advanced/Rebita/Toggle/styles.tsx
import styled15 from "styled-components";
var StyledToggleWrapper = styled15.div.withConfig({
  shouldForwardProp: (prop) => !["backgroundColor", "dotColor", "lineColor", "isOpen"].includes(prop)
})`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggleInner = styled15.div.withConfig({
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
var StyledToggleDotWrapper = styled15.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop)
})`
  display: ${({ isOpen }) => isOpen ? "none" : "flex"};
  align-items: center;
  justify-content: center;
`;
var StyledToggleDot = styled15.span.withConfig({
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
var StyledToggleCloseWrapper = styled15.div.withConfig({
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
var StyledToggleLineWrapper = styled15.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledToggleLine = styled15.span.withConfig({
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

// components/Advanced/Rebita/Toggle/index.tsx
import { jsx as jsx58, jsxs as jsxs22 } from "react/jsx-runtime";
var RebitaToggle = ({
  size = "middle",
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState7(false);
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx58(
    StyledToggleWrapper,
    {
      backgroundColor: style?.backgroundColor,
      dotColor: style?.dotColor,
      lineColor: style?.lineColor,
      isOpen,
      children: /* @__PURE__ */ jsxs22(
        StyledToggleInner,
        {
          size,
          backgroundColor: style?.backgroundColor,
          onClick: handleClick,
          children: [
            /* @__PURE__ */ jsxs22(StyledToggleDotWrapper, { isOpen, children: [
              /* @__PURE__ */ jsx58(StyledToggleDot, { dotColor: style?.dotColor }),
              /* @__PURE__ */ jsx58(StyledToggleDot, { dotColor: style?.dotColor }),
              /* @__PURE__ */ jsx58(StyledToggleDot, { dotColor: style?.dotColor })
            ] }),
            /* @__PURE__ */ jsx58(StyledToggleCloseWrapper, { isOpen, children: /* @__PURE__ */ jsxs22(StyledToggleLineWrapper, { children: [
              /* @__PURE__ */ jsx58(StyledToggleLine, { lineColor: style?.lineColor }),
              /* @__PURE__ */ jsx58(StyledToggleLine, { lineColor: style?.lineColor })
            ] }) })
          ]
        }
      )
    }
  );
};

// components/Basic/Accordion/hooks/useAccordion.ts
import { useCallback as useCallback3, useRef as useRef3, useState as useState8 } from "react";
var useAccordion = ({ animation }) => {
  const [isOpen, setIsOpen] = useState8(false);
  const contentRef = useRef3(null);
  const iconRef = useRef3(null);
  const handleClick = useCallback3(() => {
    setIsOpen(!isOpen);
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;
    gsapWithCSS.to(content, {
      height: isOpen ? 0 : "auto",
      duration: animation?.duration ?? 0.3,
      ease: animation?.easing ?? "power2.inOut"
    });
    gsapWithCSS.to(icon, {
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

// components/Basic/Accordion/Product001/styles.tsx
import styled16 from "styled-components";
var StyledAccordionWrapper = styled16.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion = styled16.div`
  position: relative;
`;
var StyledAccordionHeader = styled16.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor"
})`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;
var StyledAccordionHeaderInner = styled16.div`
  position: relative;
`;
var StyledAccordionTitleWrapper = styled16.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle = styled16.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon = styled16.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper = styled16.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent = styled16.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
`;
var StyledAccordionContentText = styled16.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;

// components/Basic/Accordion/Product001/index.tsx
import { jsx as jsx59, jsxs as jsxs23 } from "react/jsx-runtime";
var Accordion001 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx59(StyledAccordionWrapper, { children: /* @__PURE__ */ jsxs23(StyledAccordion, { children: [
    /* @__PURE__ */ jsx59(
      StyledAccordionHeader,
      {
        borderColor: style?.borderColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs23(StyledAccordionHeaderInner, { children: [
          /* @__PURE__ */ jsx59(StyledAccordionTitleWrapper, { children: /* @__PURE__ */ jsx59(StyledAccordionTitle, { color: style?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx59(
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
    /* @__PURE__ */ jsx59(StyledAccordionContentWrapper, { ref: contentRef, children: /* @__PURE__ */ jsx59(StyledAccordionContent, { children: /* @__PURE__ */ jsx59(StyledAccordionContentText, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};

// components/Basic/Accordion/Product002/styles.tsx
import styled17 from "styled-components";
var StyledAccordionWrapper2 = styled17.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion2 = styled17.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
var StyledAccordionHeader2 = styled17.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
`;
var StyledAccordionHeaderInner2 = styled17.div`
  position: relative;
`;
var StyledAccordionTitleWrapper2 = styled17.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle2 = styled17.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon2 = styled17.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper2 = styled17.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent2 = styled17.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
`;
var StyledAccordionContentText2 = styled17.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;

// components/Basic/Accordion/Product002/index.tsx
import { jsx as jsx60, jsxs as jsxs24 } from "react/jsx-runtime";
var Accordion002 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx60(StyledAccordionWrapper2, { children: /* @__PURE__ */ jsxs24(StyledAccordion2, { backgroundColor: style?.backgroundColor ?? "#fff", children: [
    /* @__PURE__ */ jsx60(StyledAccordionHeader2, { onClick: handleClick, children: /* @__PURE__ */ jsxs24(StyledAccordionHeaderInner2, { children: [
      /* @__PURE__ */ jsx60(StyledAccordionTitleWrapper2, { children: /* @__PURE__ */ jsx60(StyledAccordionTitle2, { color: style?.header?.color ?? "#000", children: headerContent }) }),
      /* @__PURE__ */ jsx60(
        StyledAccordionIcon2,
        {
          ref: iconRef,
          color: style?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx60(StyledAccordionContentWrapper2, { ref: contentRef, children: /* @__PURE__ */ jsx60(StyledAccordionContent2, { children: /* @__PURE__ */ jsx60(StyledAccordionContentText2, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};

// components/Basic/Accordion/Product003/styles.tsx
import styled18 from "styled-components";
var StyledAccordionWrapper3 = styled18.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion3 = styled18.div`
  position: relative;
`;
var StyledAccordionHeader3 = styled18.div.withConfig({
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
var StyledAccordionHeaderInner3 = styled18.div`
  position: relative;
`;
var StyledAccordionTitleWrapper3 = styled18.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
`;
var StyledAccordionTitle3 = styled18.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ color: color2 }) => color2};
`;
var StyledAccordionIcon3 = styled18.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper3 = styled18.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent3 = styled18.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)} ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(20)};
`;
var StyledAccordionContentText3 = styled18.div`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ color: color2 }) => color2};
`;

// components/Basic/Accordion/Product003/index.tsx
import { jsx as jsx61, jsxs as jsxs25 } from "react/jsx-runtime";
var Accordion003 = ({
  headerContent,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx61(StyledAccordionWrapper3, { children: /* @__PURE__ */ jsxs25(StyledAccordion3, { children: [
    /* @__PURE__ */ jsx61(
      StyledAccordionHeader3,
      {
        backgroundColor: style?.header?.backgroundColor ?? "#fff",
        barColor: style?.header?.barColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs25(StyledAccordionHeaderInner3, { children: [
          /* @__PURE__ */ jsx61(StyledAccordionTitleWrapper3, { children: /* @__PURE__ */ jsx61(StyledAccordionTitle3, { color: style?.header?.color ?? "#000", children: headerContent }) }),
          /* @__PURE__ */ jsx61(
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
    /* @__PURE__ */ jsx61(StyledAccordionContentWrapper3, { ref: contentRef, children: /* @__PURE__ */ jsx61(StyledAccordionContent3, { children: /* @__PURE__ */ jsx61(StyledAccordionContentText3, { color: style?.content?.color ?? "#000", children: content }) }) })
  ] }) });
};

// components/Basic/Accordion/Product004/styles.tsx
import styled19 from "styled-components";
var StyledAccordionWrapper4 = styled19.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion4 = styled19.div`
  position: relative;
`;
var StyledAccordionHeader4 = styled19.div.withConfig({
  shouldForwardProp: (prop) => prop !== "borderColor"
})`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;
var StyledAccordionHeaderInner4 = styled19.div`
  position: relative;
`;
var StyledAccordionTitleWrapper4 = styled19.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionTitle4 = styled19.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionText = styled19.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ textColor }) => textColor};
`;
var StyledAccordionIcon4 = styled19.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper4 = styled19.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent4 = styled19.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  display: flex;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionContentTitle = styled19.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionContentText4 = styled19.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ textColor }) => textColor};
`;

// components/Basic/Accordion/Product004/index.tsx
import { jsx as jsx62, jsxs as jsxs26 } from "react/jsx-runtime";
var Accordion004 = ({
  header,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx62(StyledAccordionWrapper4, { children: /* @__PURE__ */ jsxs26(StyledAccordion4, { children: [
    /* @__PURE__ */ jsx62(
      StyledAccordionHeader4,
      {
        borderColor: style?.borderColor ?? "#000",
        onClick: handleClick,
        children: /* @__PURE__ */ jsxs26(StyledAccordionHeaderInner4, { children: [
          /* @__PURE__ */ jsxs26(StyledAccordionTitleWrapper4, { children: [
            /* @__PURE__ */ jsx62(
              StyledAccordionTitle4,
              {
                titleColor: style?.header?.titleColor ?? "#f10707",
                children: header.title
              }
            ),
            /* @__PURE__ */ jsx62(
              StyledAccordionText,
              {
                textColor: style?.header?.textColor ?? "#000",
                children: header.text
              }
            )
          ] }),
          /* @__PURE__ */ jsx62(
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
    /* @__PURE__ */ jsx62(StyledAccordionContentWrapper4, { ref: contentRef, children: /* @__PURE__ */ jsxs26(StyledAccordionContent4, { children: [
      /* @__PURE__ */ jsx62(
        StyledAccordionContentTitle,
        {
          titleColor: style?.content?.titleColor ?? "#000",
          children: content.title
        }
      ),
      /* @__PURE__ */ jsx62(
        StyledAccordionContentText4,
        {
          textColor: style?.content?.textColor ?? "#000",
          children: content.text
        }
      )
    ] }) })
  ] }) });
};

// components/Basic/Accordion/Product005/styles.tsx
import styled20 from "styled-components";
var StyledAccordionWrapper5 = styled20.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledAccordion5 = styled20.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
`;
var StyledAccordionHeader5 = styled20.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  cursor: pointer;
  position: relative;
`;
var StyledAccordionHeaderInner5 = styled20.div`
  position: relative;
`;
var StyledAccordionTitleWrapper5 = styled20.div`
  padding-right: ${({ theme }) => theme.size.em(30)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionTitle5 = styled20.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionText2 = styled20.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  color: ${({ textColor }) => textColor};
`;
var StyledAccordionIcon5 = styled20.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
`;
var StyledAccordionContentWrapper5 = styled20.div`
  overflow: hidden;
  height: 0;
`;
var StyledAccordionContent5 = styled20.div`
  padding: ${({ theme }) => theme.size.em(10)} ${({ theme }) => theme.size.em(15)};
  display: flex;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledAccordionContentTitle2 = styled20.div.withConfig({
  shouldForwardProp: (prop) => prop !== "titleColor"
})`
  max-width: 1em;
  min-width: 1em;
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 700;
  text-align: center;
  color: ${({ titleColor }) => titleColor};
`;
var StyledAccordionContentText5 = styled20.div.withConfig({
  shouldForwardProp: (prop) => prop !== "textColor"
})`
  font-size: ${({ theme }) => theme.size.em(18)};
  font-weight: 400;
  color: ${({ textColor }) => textColor};
`;

// components/Basic/Accordion/Product005/index.tsx
import { jsx as jsx63, jsxs as jsxs27 } from "react/jsx-runtime";
var Accordion005 = ({
  header,
  content,
  icon,
  style,
  animation
}) => {
  const { handleClick, contentRef, iconRef } = useAccordion({ animation });
  return /* @__PURE__ */ jsx63(StyledAccordionWrapper5, { children: /* @__PURE__ */ jsxs27(StyledAccordion5, { backgroundColor: style?.backgroundColor ?? "#000", children: [
    /* @__PURE__ */ jsx63(StyledAccordionHeader5, { onClick: handleClick, children: /* @__PURE__ */ jsxs27(StyledAccordionHeaderInner5, { children: [
      /* @__PURE__ */ jsxs27(StyledAccordionTitleWrapper5, { children: [
        /* @__PURE__ */ jsx63(
          StyledAccordionTitle5,
          {
            titleColor: style?.header?.titleColor ?? "#f10707",
            children: header.title ?? "Q"
          }
        ),
        /* @__PURE__ */ jsx63(
          StyledAccordionText2,
          {
            textColor: style?.header?.textColor ?? "#000",
            children: header.text
          }
        )
      ] }),
      /* @__PURE__ */ jsx63(
        StyledAccordionIcon5,
        {
          ref: iconRef,
          color: style?.iconColor ?? "#000",
          children: icon
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx63(StyledAccordionContentWrapper5, { ref: contentRef, children: /* @__PURE__ */ jsxs27(StyledAccordionContent5, { children: [
      /* @__PURE__ */ jsx63(
        StyledAccordionContentTitle2,
        {
          titleColor: style?.content?.titleColor ?? "#000",
          children: content.title ?? "A"
        }
      ),
      /* @__PURE__ */ jsx63(
        StyledAccordionContentText5,
        {
          textColor: style?.content?.textColor ?? "#000",
          children: content.text
        }
      )
    ] }) })
  ] }) });
};

// components/Basic/Balloon/Product001/styles.tsx
import styled21, { css as css4 } from "styled-components";
var StyledBalloonWrapper = styled21.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBalloon = styled21.div.withConfig({
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
      return css4`
          border-radius: 0;
        `;
    case "002":
      return css4`
          border-radius: ${({ theme }) => theme.size.em(8)};
        `;
  }
}}
`;
var StyledBalloonContent = styled21.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;
var StyledBalloonArrow = styled21.div.withConfig({
  shouldForwardProp: (prop) => prop !== "arrowPosition" && prop !== "backgroundColor"
})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ arrowPosition, backgroundColor }) => {
  switch (arrowPosition) {
    case "bottom":
      return css4`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: ${backgroundColor} transparent transparent transparent;
        `;
    case "top":
      return css4`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent ${backgroundColor};
        `;
    case "left":
      return css4`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)} 0;
          border-color: transparent ${backgroundColor} transparent transparent;
        `;
    case "right":
      return css4`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border-width: ${({ theme }) => theme.size.em(8)} 0 ${({ theme }) => theme.size.em(8)} ${({ theme }) => theme.size.em(8)};
          border-color: transparent transparent transparent ${backgroundColor};
        `;
  }
}}
`;

// components/Basic/Balloon/Product001/index.tsx
import { jsx as jsx64, jsxs as jsxs28 } from "react/jsx-runtime";
var Balloon001 = ({
  type = "001",
  children,
  style,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx64(StyledBalloonWrapper, { children: /* @__PURE__ */ jsxs28(
    StyledBalloon,
    {
      type,
      backgroundColor: style?.backgroundColor ?? "#ccc",
      children: [
        /* @__PURE__ */ jsx64(
          StyledBalloonContent,
          {
            fontSize: style?.fontSize ?? 16,
            color: style?.color ?? "#000",
            children
          }
        ),
        /* @__PURE__ */ jsx64(
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

// components/Basic/Balloon/Product002/styles.tsx
import styled22, { css as css5 } from "styled-components";
var StyledBalloonWrapper2 = styled22.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBalloon2 = styled22.div.withConfig({
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
      return css5`
          border-radius: 0;
        `;
    case "002":
      return css5`
          border-radius: ${({ theme }) => theme.size.em(8)};
        `;
  }
}}

  ${({ arrowPosition, borderWidth }) => {
  switch (arrowPosition) {
    case "bottom":
      return css5`
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
      return css5`
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
      return css5`
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
      return css5`
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
var StyledBalloonContent2 = styled22.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;

// components/Basic/Balloon/Product002/index.tsx
import { jsx as jsx65 } from "react/jsx-runtime";
var Balloon002 = ({
  type = "001",
  children,
  style,
  arrowPosition
}) => {
  return /* @__PURE__ */ jsx65(StyledBalloonWrapper2, { children: /* @__PURE__ */ jsx65(
    StyledBalloon2,
    {
      type,
      borderColor: style?.borderColor ?? "#000",
      borderWidth: style?.borderWidth ?? 1,
      arrowPosition: arrowPosition ?? "bottom",
      backgroundColor: style?.backgroundColor ?? "#fff",
      children: /* @__PURE__ */ jsx65(
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

// components/Basic/Breadcrumbs/styles.tsx
import styled23 from "styled-components";
var StyledBreadcrumbsWrapper = styled23.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledBreadcrumbs = styled23.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledBreadcrumbsItem = styled23.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.size.em(10)};
`;
var StyledBreadcrumbsItemText = styled23.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
`;
var StyledBreadcrumbsItemLink = styled23.a.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "duration" && prop !== "easing" && prop !== "hoverColor"
})`
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize)};
  color: ${({ color: color2 }) => color2};
  transition: color ${({ duration }) => duration}s ${({ theme, easing: easing2 }) => theme.animation.easing[easing2]};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
var StyledBreadcrumbsItemIcon = styled23.div.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  color: ${({ color: color2 }) => color2};
  width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
  height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
`;

// components/Basic/Breadcrumbs/index.tsx
import { jsx as jsx66, jsxs as jsxs29 } from "react/jsx-runtime";
var Breadcrumbs = ({ items, style }) => {
  return /* @__PURE__ */ jsx66(StyledBreadcrumbsWrapper, { children: /* @__PURE__ */ jsx66(StyledBreadcrumbs, { children: items.map((item, index) => /* @__PURE__ */ jsxs29(StyledBreadcrumbsItem, { children: [
    item.link ? /* @__PURE__ */ jsx66(
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
    ) : /* @__PURE__ */ jsx66(
      StyledBreadcrumbsItemText,
      {
        fontSize: style?.fontSize ?? 16,
        color: style?.color ?? "#000",
        children: item.text
      }
    ),
    index !== items.length - 1 && /* @__PURE__ */ jsx66(StyledBreadcrumbsItemIcon, { color: style?.iconColor ?? "#000", children: /* @__PURE__ */ jsx66(Svg004, {}) })
  ] }, item.text)) }) });
};

// components/Basic/Button/Product001/styles.tsx
import styled24, { css as css6 } from "styled-components";
var StyledButtonWrapper = styled24.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledButton = styled24.span.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "animation" && prop !== "size"
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
      return css6`border-radius: ${theme.size.em(30)};`;
    case "002":
      return css6`border-radius: ${theme.size.em(8)};`;
    default:
      return css6`border-radius: 0;`;
  }
}}

  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css6`padding: ${theme.size.em(7)} ${theme.size.em(13)};`;
    case "middle":
      return css6`padding: ${theme.size.em(15)} ${theme.size.em(28)};`;
    default:
      return css6`padding: ${theme.size.em(25)} ${theme.size.em(45)};`;
  }
}}

  ${({ animation, theme }) => {
  switch (animation?.type ?? "001") {
    case "001":
      return css6`
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
      return css6`
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
`;
var StyledText = styled24.span`
  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css6`font-size: ${theme.size.em(12)};`;
    case "middle":
      return css6`font-size: ${theme.size.em(16)};`;
    default:
      return css6`font-size: ${theme.size.em(18)};`;
  }
}}

  display: block;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color: color2 }) => color2};
  position: relative;
  z-index: 1;
`;

// components/Basic/Button/Product001/index.tsx
import { jsx as jsx67 } from "react/jsx-runtime";
var Button001 = ({
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  href,
  style
}) => {
  return /* @__PURE__ */ jsx67(StyledButtonWrapper, { children: /* @__PURE__ */ jsx67(
    StyledButton,
    {
      as: href ? "a" : "button",
      href,
      type,
      size,
      onClick,
      animation,
      backgroundColor: style?.backgroundColor ?? "#fff",
      borderColor: style?.borderColor ?? "#000",
      children: /* @__PURE__ */ jsx67(
        StyledText,
        {
          size,
          color: style?.color ?? "#000",
          fontWeight: style?.fontWeight ?? 700,
          children
        }
      )
    }
  ) });
};

// components/Basic/Button/Product002/index.tsx
import { useState as useState9 } from "react";

// components/Basic/Button/Product002/styles.tsx
import styled25, { css as css7, keyframes } from "styled-components";
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
var StyledButtonWrapper2 = styled25.span`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
  width: 100%;
`;
var StyledButton2 = styled25.span.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "animation" && prop !== "size" && prop !== "iconDirection" && prop !== "isHover"
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
      return css7`border-radius: ${theme.size.em(30)};`;
    case "002":
    case "005":
    case "008":
      return css7`border-radius: ${theme.size.em(8)};`;
    default:
      return css7`border-radius: 0;`;
  }
}}

  ${({ type, iconDirection, theme }) => {
  switch (type) {
    case "001":
    case "002":
    case "003":
      return css7`
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${theme.size.em(8)};
          `;
    case "004":
    case "005":
    case "006":
      return css7`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `;
    case "007":
    case "008":
    case "009":
      return css7`
            text-align: center;

            ${StyledText2} {
              padding: 0 ${theme.size.em(14)};
            }

            ${StyledIconWrapper} {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 1;

              ${iconDirection === "left" && css7`
                  left: ${theme.size.em(24)};
                `}

              ${iconDirection === "right" && css7`
                  right: ${theme.size.em(24)};
                `}
            }
          `;
    default:
      return css7`
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
      return css7`
          flex-direction: row-reverse;
        `;
    case "right":
      return css7`
          flex-direction: row;
        `;
  }
}}

  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css7`
          padding: ${theme.size.em(7)} ${theme.size.em(13)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(theme.icon.size.small)};
            height: ${theme.size.em(theme.icon.size.small)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(12)};
          }
        `;
    case "middle":
      return css7`
          padding: ${theme.size.em(15)} ${theme.size.em(28)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(theme.icon.size.middle)};
            height: ${theme.size.em(theme.icon.size.middle)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(16)};
          }
        `;
    case "large":
      return css7`
          padding: ${theme.size.em(25)} ${theme.size.em(45)};

          ${StyledIconWrapper} {
            width: ${theme.size.em(theme.icon.size.large)};
            height: ${theme.size.em(theme.icon.size.large)};
          }

          ${StyledText2} {
            font-size: ${theme.size.em(18)};
          }
        `;
    default:
      return css7`
          padding: ${theme.size.em(25)} ${theme.size.em(45)};
        `;
  }
}}

  ${({ animation, theme, isHover }) => {
  switch (animation?.type ?? "001") {
    case "001":
      return css7`
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
      return css7`
          ${StyledIcon}:nth-child(1) {
            ${isHover === true && css7`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${isHover === false && css7`
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }

          ${StyledIcon}:nth-child(2) {
            ${isHover === true && css7`  
                animation: ${ArrowShow} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}

            ${isHover === false && css7`
                animation: ${ArrowHide} ${animation?.duration ?? 0.25}s ${theme.animation.easing[animation?.easing ?? "easeOutCubic"]} forwards;
              `}
          }
        `;
    }
    case "003": {
      return css7`
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
      return css7`
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
`;
var StyledIconWrapper = styled25.span`
  display: block;
`;
var StyledIconInner = styled25.span`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: block;
`;
var StyledIcon = styled25.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
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
`;
var StyledText2 = styled25.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "color" && prop !== "fontWeight"
})`
  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css7`font-size: ${theme.size.em(12)};`;
    case "middle":
      return css7`font-size: ${theme.size.em(16)};`;
    default:
      return css7`font-size: ${theme.size.em(18)};`;
  }
}}

  display: block;
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color: color2 }) => color2};
  position: relative;
  z-index: 1;
`;

// components/Basic/Button/Product002/index.tsx
import { jsx as jsx68, jsxs as jsxs30 } from "react/jsx-runtime";
var Button002 = ({
  type = "001",
  size = "middle",
  animation,
  onClick,
  children,
  style,
  iconDirection = "right",
  icon,
  href
}) => {
  const [isHover, setIsHover] = useState9(null);
  return /* @__PURE__ */ jsx68(StyledButtonWrapper2, { children: /* @__PURE__ */ jsxs30(
    StyledButton2,
    {
      as: href ? "a" : "button",
      href,
      type,
      size,
      onClick,
      animation,
      backgroundColor: style?.backgroundColor ?? "#fff",
      borderColor: style?.borderColor ?? "#000",
      iconDirection,
      isHover,
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
      children: [
        /* @__PURE__ */ jsx68(
          StyledText2,
          {
            size,
            color: style?.color ?? "#000",
            fontWeight: style?.fontWeight ?? 700,
            children
          }
        ),
        /* @__PURE__ */ jsx68(StyledIconWrapper, { children: /* @__PURE__ */ jsxs30(StyledIconInner, { children: [
          /* @__PURE__ */ jsx68(StyledIcon, { color: style?.color ?? "#000", children: icon }),
          /* @__PURE__ */ jsx68(StyledIcon, { color: style?.color ?? "#000", children: icon })
        ] }) })
      ]
    }
  ) });
};

// components/Basic/CheckBox/Product001/index.tsx
import { useState as useState10 } from "react";

// components/Basic/CheckBox/Product001/styles.tsx
import styled26, { css as css8 } from "styled-components";
var StyledCheckBoxWrapper = styled26.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledCheckBox = styled26.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;
  
  
  ${({ size, theme }) => theme.icon.size.style(size)}
`;
var StyledCheckBoxBackground = styled26.div.withConfig({
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
      return css8`
          border-radius: 0;
        `;
    case "002":
      return css8`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    case "003":
      return css8`
          border-radius: 50%;
        `;
    default:
      return css8`
          border-radius: 0;
        `;
  }
}}
`;
var StyledCheckBoxCheckmark = styled26.div.withConfig({
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
      return css8`
          width: ${({ theme }) => theme.size.em(theme.icon.size.small)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.small)};
        `;
    case "middle":
      return css8`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;
    default:
      return css8`
          width: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
          height: ${({ theme }) => theme.size.em(theme.icon.size.middle)};
        `;
  }
}}
`;
var StyledCheckBoxInput = styled26.input.withConfig({
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

// components/Basic/CheckBox/Product001/index.tsx
import { jsx as jsx69, jsxs as jsxs31 } from "react/jsx-runtime";
var CheckBox001 = ({ style, id, type, size }) => {
  const [checked, setChecked] = useState10(false);
  return /* @__PURE__ */ jsx69(StyledCheckBoxWrapper, { children: /* @__PURE__ */ jsxs31(StyledCheckBox, { size, children: [
    /* @__PURE__ */ jsx69(
      StyledCheckBoxInput,
      {
        id,
        name: id,
        type: "checkbox",
        checked,
        checkedBackgroundColor: style?.checkedBackgroundColor ?? "#000",
        onClick: () => setChecked(!checked)
      }
    ),
    /* @__PURE__ */ jsx69(
      StyledCheckBoxBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx69(
      StyledCheckBoxCheckmark,
      {
        size,
        markColor: style?.markColor ?? "#000",
        children: /* @__PURE__ */ jsx69(Svg031, {})
      }
    )
  ] }) });
};

// components/Basic/CheckBox/Product002/index.tsx
import { useState as useState11 } from "react";

// components/Basic/CheckBox/Product002/styles.tsx
import styled27, { css as css9 } from "styled-components";
var StyledCheckBoxWrapper2 = styled27.div`
  ${({ theme }) => theme.font.baseSize.em()};

  display: block;
`;
var StyledCheckBox2 = styled27.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;
  
  ${({ size }) => {
  switch (size) {
    case "small":
      return css9`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
    case "middle":
      return css9`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    default:
      return css9`
          width: ${({ theme }) => theme.size.em(18)};
          height: ${({ theme }) => theme.size.em(18)};
        `;
  }
}}
`;
var StyledCheckBoxBackground2 = styled27.div.withConfig({
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
var StyledCheckBoxCheckmark2 = styled27.div.withConfig({
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
      return css9`
          width: ${({ theme }) => theme.size.em(10)};
          height: ${({ theme }) => theme.size.em(10)};
        `;
    case "middle":
      return css9`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
    default:
      return css9`
          width: ${({ theme }) => theme.size.em(22)};
          height: ${({ theme }) => theme.size.em(22)};
        `;
  }
}}
`;
var StyledCheckBoxInput2 = styled27.input.withConfig({
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

// components/Basic/CheckBox/Product002/index.tsx
import { jsx as jsx70, jsxs as jsxs32 } from "react/jsx-runtime";
var CheckBox002 = ({ style, id, size }) => {
  const [checked, setChecked] = useState11(false);
  return /* @__PURE__ */ jsx70(StyledCheckBoxWrapper2, { children: /* @__PURE__ */ jsxs32(StyledCheckBox2, { size, children: [
    /* @__PURE__ */ jsx70(
      StyledCheckBoxInput2,
      {
        id,
        name: id,
        type: "checkbox",
        checked,
        checkedBackgroundColor: style?.checkedBackgroundColor ?? "#000",
        onClick: () => setChecked(!checked)
      }
    ),
    /* @__PURE__ */ jsx70(
      StyledCheckBoxBackground2,
      {
        backgroundColor: style?.backgroundColor ?? "#fff"
      }
    ),
    /* @__PURE__ */ jsx70(
      StyledCheckBoxCheckmark2,
      {
        markColor: style?.markColor ?? "#000",
        size
      }
    )
  ] }) });
};

// components/Basic/FrameIcon/Product001/styles.tsx
import styled28, { css as css10 } from "styled-components";
var StyledFrameIconWrapper = styled28.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFrameIcon = styled28.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;

  ${({ size }) => {
  switch (size) {
    case "small":
      return css10`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    case "middle":
      return css10`
          width: ${({ theme }) => theme.size.em(35)};
          height: ${({ theme }) => theme.size.em(35)};
        `;
    case "large":
      return css10`
          width: ${({ theme }) => theme.size.em(40)};
          height: ${({ theme }) => theme.size.em(40)};
        `;
    default:
      return css10`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
  }
}}
`;
var StyledFrameIconBackground = styled28.div.withConfig({
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
      return css10`
          border-radius: 50%;
        `;
    case "002":
      return css10`
          border-radius: 0;
        `;
    case "003":
      return css10`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    default:
      return css10`
          border-radius: 50%;
        `;
  }
}}
`;
var StyledFrameIconInner = styled28.div.withConfig({
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
var StyledFrameIconContent = styled28.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  ${({ theme, size }) => theme.icon.size.style(size)}
`;

// components/Basic/FrameIcon/Product001/index.tsx
import { jsx as jsx71, jsxs as jsxs33 } from "react/jsx-runtime";
var FrameIcon001 = ({ style, type, size, icon }) => {
  return /* @__PURE__ */ jsx71(StyledFrameIconWrapper, { children: /* @__PURE__ */ jsxs33(StyledFrameIcon, { size, children: [
    /* @__PURE__ */ jsx71(
      StyledFrameIconBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx71(StyledFrameIconInner, { iconColor: style?.iconColor ?? "#000", children: /* @__PURE__ */ jsx71(StyledFrameIconContent, { size, children: icon }) })
  ] }) });
};

// components/Basic/FrameNumber/Product001/styles.tsx
import styled29, { css as css11 } from "styled-components";
var StyledFrameNumberWrapper = styled29.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledFrameNumber = styled29.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  position: relative;

  ${({ size }) => {
  switch (size) {
    case "small":
      return css11`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
    case "middle":
      return css11`
          width: ${({ theme }) => theme.size.em(35)};
          height: ${({ theme }) => theme.size.em(35)};
        `;
    case "large":
      return css11`
          width: ${({ theme }) => theme.size.em(40)};
          height: ${({ theme }) => theme.size.em(40)};
        `;
    default:
      return css11`
          width: ${({ theme }) => theme.size.em(30)};
          height: ${({ theme }) => theme.size.em(30)};
        `;
  }
}}
`;
var StyledFrameNumberBackground = styled29.div.withConfig({
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
      return css11`
          border-radius: 50%;
        `;
    case "002":
      return css11`
          border-radius: 0;
        `;
    case "003":
      return css11`
          border-radius: ${({ theme }) => theme.size.em(4)};
        `;
    default:
      return css11`
          border-radius: 50%;
        `;
  }
}}
`;
var StyledFrameNumberInner = styled29.div.withConfig({
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
      return css11`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
    case "middle":
      return css11`
          font-size: ${({ theme }) => theme.size.em(18)};
        `;
    case "large":
      return css11`
          font-size: ${({ theme }) => theme.size.em(24)};
        `;
    default:
      return css11`
          font-size: ${({ theme }) => theme.size.em(14)};
        `;
  }
}}
`;

// components/Basic/FrameNumber/Product001/index.tsx
import { jsx as jsx72, jsxs as jsxs34 } from "react/jsx-runtime";
var FrameNumber001 = ({
  style,
  type,
  size,
  number
}) => {
  return /* @__PURE__ */ jsx72(StyledFrameNumberWrapper, { children: /* @__PURE__ */ jsxs34(StyledFrameNumber, { size, children: [
    /* @__PURE__ */ jsx72(
      StyledFrameNumberBackground,
      {
        type,
        backgroundColor: style?.backgroundColor ?? "#fff",
        borderColor: style?.borderColor ?? "#000"
      }
    ),
    /* @__PURE__ */ jsx72(StyledFrameNumberInner, { color: style?.color ?? "#000", size, children: number })
  ] }) });
};

// components/Basic/Header/Product001/styles.tsx
import styled30, { css as css12 } from "styled-components";
var StyledWrapper = styled30.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledHeader = styled30.header.withConfig({
  shouldForwardProp: (prop) => prop !== "height" && prop !== "backgroundColor" && prop !== "animationBackgroundColor" && prop !== "showModal" && prop !== "easing" && prop !== "duration"
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
  padding: 0 ${({ theme }) => theme.size.em(20)};
  z-index: 100;
  transition: background-color ${({ duration }) => duration ?? "0.3s"} ${({ theme, easing: easing2 }) => theme.animation.easing[easing2 ?? "easeInCubic"]};

  ${({ showModal, animationBackgroundColor }) => showModal && css12`
      background-color: ${animationBackgroundColor ?? "transparent"};
    `}
`;
var StyledHeaderInner = styled30.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledLeftWrapper = styled30.div.withConfig({
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
var StyledRightWrapper = styled30.div.withConfig({
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
var StyledModalWrapper = styled30.div.withConfig({
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

  ${({ showModal }) => showModal && css12`
      opacity: 1;
      pointer-events: auto;
    `}
`;

// components/Basic/Header/Product001/index.tsx
import { jsx as jsx73, jsxs as jsxs35 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs35(StyledWrapper, { children: [
    /* @__PURE__ */ jsx73(
      StyledHeader,
      {
        height: style?.header?.height ?? HEIGHT,
        backgroundColor: style?.header?.backgroundColor,
        animationBackgroundColor: style?.header?.animation?.backgroundColor,
        easing: style?.header?.animation?.easing,
        duration: style?.header?.animation?.duration,
        showModal,
        children: /* @__PURE__ */ jsxs35(StyledHeaderInner, { children: [
          /* @__PURE__ */ jsxs35(StyledLeftWrapper, { gap: style?.leftGap, children: [
            left,
            leftInner
          ] }),
          /* @__PURE__ */ jsxs35(StyledRightWrapper, { gap: style?.rightGap, children: [
            rightInner,
            right
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx73(
      StyledModalWrapper,
      {
        height: style?.header?.height ?? HEIGHT,
        showModal,
        children: modalContent
      }
    )
  ] });
};

// components/Basic/Input/Product001/styles.tsx
import styled31, { css as css13 } from "styled-components";
var StyledInputWrapper = styled31.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize = (size) => size ?? 18;
var StyledInputField = styled31.input.withConfig({
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
      return css13`
          padding-top: ${theme.size.customEm(5, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize(fontSize))};
        `;
    case "middle":
      return css13`
          padding-top: ${theme.size.customEm(10, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize(fontSize))};
        `;
    case "large":
      return css13`
          padding-top: ${theme.size.customEm(15, defaultFontSize(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize(fontSize))};
        `;
    default:
      return css13`
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
  }
}}
`;
var StyledInput = styled31.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css13`
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
      return css13`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
    case "002":
      return css13`
          ${StyledInputField} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css13`
          ${StyledInputField} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError = styled31.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product001/index.tsx
import { jsx as jsx74, jsxs as jsxs36 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx74(StyledInputWrapper, { children: /* @__PURE__ */ jsxs36(StyledInput, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx74(
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
    errorText && /* @__PURE__ */ jsx74(
      StyledInputError,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Input/Product002/styles.tsx
import styled32, { css as css14 } from "styled-components";
var StyledInputWrapper2 = styled32.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize2 = (size) => size ?? 18;
var StyledInputField2 = styled32.input.withConfig({
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
      return css14`
          padding-top: ${theme.size.customEm(3, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(3, defaultFontSize2(fontSize))};
        `;
    case "middle":
      return css14`
          padding-top: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
        `;
    case "large":
      return css14`
          padding-top: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(7, defaultFontSize2(fontSize))};
        `;
    default:
      return css14`
          padding-top: ${theme.size.customEm(5, defaultFontSize2(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize2(fontSize))};
        `;
  }
}}
`;
var StyledInput2 = styled32.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css14`
    ${StyledInputField2} {
      border-bottom-color: #f00;
    }

    ${StyledInputError2} {
      display: block;
    }
  `}
`;
var StyledInputError2 = styled32.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product002/index.tsx
import { jsx as jsx75, jsxs as jsxs37 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx75(StyledInputWrapper2, { children: /* @__PURE__ */ jsxs37(StyledInput2, { error: error || !!errorText, size, children: [
    /* @__PURE__ */ jsx75(
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
    errorText && /* @__PURE__ */ jsx75(
      StyledInputError2,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Input/Product003/styles.tsx
import styled33, { css as css15 } from "styled-components";
var StyledInputWrapper3 = styled33.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize3 = (size) => size ?? 18;
var StyledInputField3 = styled33.input.withConfig({
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
      return css15`
          padding-top: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
        `;
    case "middle":
      return css15`
          padding-top: ${theme.size.customEm(10, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize3(fontSize))};
        `;
    case "large":
      return css15`
          padding-top: ${theme.size.customEm(15, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize3(fontSize))};
        `;
    default:
      return css15`
          padding-top: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize3(fontSize))};
        `;
  }
}}
`;
var StyledInput3 = styled33.div.withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css15`
    ${StyledInputField3} {
      background-color: #fdd;
    }

    ${StyledInputError3} {
      display: block;
    }
  `}
`;
var StyledInputError3 = styled33.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product003/index.tsx
import { jsx as jsx76, jsxs as jsxs38 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx76(StyledInputWrapper3, { children: /* @__PURE__ */ jsxs38(StyledInput3, { error: error || !!errorText, size, children: [
    /* @__PURE__ */ jsx76(
      StyledInputField3,
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
    errorText && /* @__PURE__ */ jsx76(
      StyledInputError3,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Input/Product004/styles.tsx
import styled34, { css as css16 } from "styled-components";
var StyledInputWrapper4 = styled34.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize4 = (size) => size ?? 18;
var StyledInputField4 = styled34.input.withConfig({
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
      return css16`
          padding-top: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
        `;
    case "middle":
      return css16`
          padding-top: ${theme.size.customEm(10, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize4(fontSize))};
        `;
    case "large":
      return css16`
          padding-top: ${theme.size.customEm(15, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize4(fontSize))};
        `;
    default:
      return css16`
          padding-top: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize4(fontSize))};
        `;
  }
}}
`;
var StyledInput4 = styled34.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css16`
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
      return css16`
          ${StyledInputField4} {
            border-radius: 0;
          }
        `;
    case "002":
      return css16`
          ${StyledInputField4} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css16`
          ${StyledInputField4} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError4 = styled34.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product004/index.tsx
import { jsx as jsx77, jsxs as jsxs39 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx77(StyledInputWrapper4, { children: /* @__PURE__ */ jsxs39(StyledInput4, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx77(
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
    errorText && /* @__PURE__ */ jsx77(
      StyledInputError4,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Input/Product005/styles.tsx
import styled35, { css as css17 } from "styled-components";
var StyledInputWrapper5 = styled35.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize5 = (size) => size ?? 18;
var StyledInputField5 = styled35.input.withConfig({
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
      return css17`  
          padding-top: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
        `;
    case "middle":
      return css17`
          padding-top: ${theme.size.customEm(10, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize5(fontSize))};
        `;
    case "large":
      return css17`
          padding-top: ${theme.size.customEm(15, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize5(fontSize))};
        `;
    default:
      return css17`
          padding-top: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize5(fontSize))};
        `;
  }
}}
`;
var StyledInput5 = styled35.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css17`
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
      return css17`
          ${StyledInputField5} {
            border-radius: 0;
          }
        `;
    case "002":
      return css17`
          ${StyledInputField5} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css17`
          ${StyledInputField5} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError5 = styled35.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product005/index.tsx
import { jsx as jsx78, jsxs as jsxs40 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx78(StyledInputWrapper5, { children: /* @__PURE__ */ jsxs40(StyledInput5, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsx78(
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
    errorText && /* @__PURE__ */ jsx78(
      StyledInputError5,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Input/Product006/styles.tsx
import styled36, { css as css18 } from "styled-components";
var StyledInputWrapper6 = styled36.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledInputFieldWrapper = styled36.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "borderColor" && prop !== "backgroundColor" && prop !== "errorBorderColor"
})`
  position: relative;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#000"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#fff"};

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css18`
          padding-right: ${theme.size.em(40)};
        `;
    case "left":
      return css18`
          padding-left: ${theme.size.em(40)};
        `;
    default:
      return css18`
          padding-right: ${theme.size.em(40)};
        `;
  }
}}
`;
var defaultFontSize6 = (size) => size ?? 18;
var StyledInputField6 = styled36.input.withConfig({
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
      return css18`
          padding-top: ${theme.size.customEm(5, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize6(fontSize))};
        `;
    case "middle":
      return css18`
          padding-top: ${theme.size.customEm(10, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize6(fontSize))};
        `;
    case "large":
      return css18`
          padding-top: ${theme.size.customEm(15, defaultFontSize6(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize6(fontSize))};
        `;
    default:
      return css18`
          padding-top: ${theme.size.em(5)};
          padding-bottom: ${theme.size.em(5)};
        `;
  }
}}

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css18`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
    case "left":
      return css18`
          padding-left: 0;
          padding-right: ${theme.size.em(10)};
        `;
    default:
      return css18`
          padding-left: ${theme.size.em(10)};
          padding-right: 0;
        `;
  }
}}
`;
var StyledInputIcon = styled36.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition"
})`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme, size }) => theme.icon.size.style(size)}

  ${({ iconPosition, theme }) => {
  switch (iconPosition) {
    case "right":
      return css18`
          right: ${theme.size.em(5)};
        `;
    case "left":
      return css18`
          left: ${theme.size.em(5)};
        `;
    default:
      return css18`
          right: ${theme.size.em(5)};
        `;
  }
}}
`;
var StyledInput6 = styled36.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css18`
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
      return css18`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: 0;
          }
        `;
    case "002":
      return css18`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: ${theme.size.em(4)};
          }
        `;
    default:
      return css18`
          ${StyledInputFieldWrapper},
          ${StyledInputField6} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledInputError6 = styled36.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Input/Product006/index.tsx
import { jsx as jsx79, jsxs as jsxs41 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx79(StyledInputWrapper6, { children: /* @__PURE__ */ jsxs41(StyledInput6, { error: error || !!errorText, type, size, children: [
    /* @__PURE__ */ jsxs41(
      StyledInputFieldWrapper,
      {
        iconPosition,
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        errorBorderColor: style?.errorBorderColor,
        children: [
          /* @__PURE__ */ jsx79(
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
          /* @__PURE__ */ jsx79(StyledInputIcon, { iconPosition, size, children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx79(
      StyledInputError6,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Label/Product001/styles.tsx
import styled37, { css as css19 } from "styled-components";
var StyledLabelWrapper = styled37.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize7 = (size) => size ?? 12;
var StyledLabel = styled37.div.withConfig({
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
      return css19`
          border-radius: 0;
        `;
    case "002":
      return css19`
          border-radius: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
        `;
    case "003":
      return css19`
          border-radius: ${theme.size.customEm(21, defaultFontSize7(fontSize))};
        `;
    default:
      return css19`
          border-radius: 0;
        `;
  }
}}

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css19`
          padding-top: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize7(fontSize))};
        `;
    case "middle":
      return css19`
          padding-top: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
        `;
    case "large":
      return css19`
          padding-top: ${theme.size.customEm(15, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize7(fontSize))};
        `;
    default:
      return css19`
          padding-top: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize7(fontSize))};
        `;
  }
}}
`;

// components/Basic/Label/Product001/index.tsx
import { jsx as jsx80 } from "react/jsx-runtime";
var Label001 = ({
  type = "001",
  size = "middle",
  children,
  style
}) => {
  return /* @__PURE__ */ jsx80(StyledLabelWrapper, { children: /* @__PURE__ */ jsx80(
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

// components/Basic/Label/Product002/styles.tsx
import styled38, { css as css20 } from "styled-components";
var StyledLabelWrapper2 = styled38.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var defaultFontSize8 = (size) => size ?? 12;
var StyledLabel2 = styled38.div.withConfig({
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
      return css20`
          border-radius: 0;
        `;
    case "002":
      return css20`
          border-radius: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
        `;
    case "003":
      return css20`
          border-radius: ${theme.size.customEm(21, defaultFontSize8(fontSize))};
        `;
    default:
      return css20`
          border-radius: 0;
        `;
  }
}}

  ${({ size, theme, fontSize }) => {
  switch (size) {
    case "small":
      return css20`
          padding-top: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(5, defaultFontSize8(fontSize))};
        `;
    case "middle":
      return css20`
          padding-top: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
        `;
    case "large":
      return css20`
          padding-top: ${theme.size.customEm(15, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(15, defaultFontSize8(fontSize))};
        `;
    default:
      return css20`
          padding-top: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
          padding-bottom: ${theme.size.customEm(10, defaultFontSize8(fontSize))};
        `;
  }
}}
`;
var StyledLabelIcon = styled38.div.withConfig({
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
      return css20`
          order: 1;
        `;
    case "right":
      return css20`
          order: 2;
        `;
    default:
      return css20`
          order: 1;
        `;
  }
}}
`;
var StyledLabelText = styled38.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(defaultFontSize8(fontSize))};
  line-height: 1;

  ${({ iconPosition }) => {
  switch (iconPosition) {
    case "left":
      return css20`
          order: 2;
        `;
    case "right":
      return css20`
          order: 1;
        `;
    default:
      return css20`
          order: 2;
        `;
  }
}}
`;

// components/Basic/Label/Product002/index.tsx
import { jsx as jsx81, jsxs as jsxs42 } from "react/jsx-runtime";
var Label002 = ({
  type = "001",
  size = "middle",
  iconPosition = "left",
  icon,
  children,
  style
}) => {
  return /* @__PURE__ */ jsx81(StyledLabelWrapper2, { children: /* @__PURE__ */ jsxs42(
    StyledLabel2,
    {
      type,
      size,
      iconPosition,
      fontSize: style?.fontSize,
      backgroundColor: style?.backgroundColor,
      borderColor: style?.borderColor,
      children: [
        /* @__PURE__ */ jsx81(
          StyledLabelIcon,
          {
            iconPosition,
            color: style?.iconColor,
            size,
            children: icon
          }
        ),
        /* @__PURE__ */ jsx81(
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

// components/Basic/List/Product001/styles.tsx
import styled39, { css as css21 } from "styled-components";
var StyledListWrapper = styled39.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledList = styled39.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "columnGap" && prop !== "rowGap"
})`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ type, theme, columnGap, rowGap }) => {
  switch (type) {
    case "001":
    case "002":
      return css21`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
    case "003":
      return css21`
          gap: ${theme.size.em(rowGap ?? 40)};
        `;
    default:
      return css21`
          flex-direction: column;
          gap: ${theme.size.em(columnGap ?? 10)};
        `;
  }
}}
`;
var StyledListItem = styled39.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "borderColor"
})`
  ${({ type, borderColor }) => type === "002" && css21`
      border-bottom: 1px solid ${borderColor ?? "#000"};
      padding-bottom: ${({ theme }) => theme.size.em(8)};

      &:last-child {
        border-bottom: 0;
      }
    `}
`;

// components/Basic/List/Product001/index.tsx
import { jsx as jsx82 } from "react/jsx-runtime";
var List001 = ({ type = "001", items, style }) => {
  return /* @__PURE__ */ jsx82(StyledListWrapper, { children: /* @__PURE__ */ jsx82(
    StyledList,
    {
      as: "ul",
      type,
      columnGap: style?.columnGap,
      rowGap: style?.rowGap,
      children: items.map((item) => /* @__PURE__ */ jsx82(
        StyledListItem,
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

// components/Basic/ListItem/Product001/styles.tsx
import styled40 from "styled-components";
var StyledListItemWrapper = styled40.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemNumber = styled40.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemNumberText = styled40.span.withConfig({
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
var StyledListItemTextWrapper = styled40.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(30 + (gap ?? 10))};
`;
var StyledListItemText = styled40.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem2 = styled40.span.withConfig({
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

// components/Basic/ListItem/Product001/index.tsx
import { jsx as jsx83, jsxs as jsxs43 } from "react/jsx-runtime";
var ListItem001 = ({
  number,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx83(StyledListItemWrapper, { children: /* @__PURE__ */ jsxs43(StyledListItem2, { onClick, animationColor: style?.animationColor, children: [
    /* @__PURE__ */ jsx83(StyledListItemNumber, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx83(
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
    /* @__PURE__ */ jsx83(StyledListItemTextWrapper, { gap: style?.gap, children: /* @__PURE__ */ jsx83(
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

// components/Basic/ListItem/Product002/styles.tsx
import styled41 from "styled-components";
var StyledListItemWrapper2 = styled41.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper = styled41.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint = styled41.span.withConfig({
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
var StyledListItemTextWrapper2 = styled41.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText2 = styled41.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem3 = styled41.span.withConfig({
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

// components/Basic/ListItem/Product002/index.tsx
import { jsx as jsx84, jsxs as jsxs44 } from "react/jsx-runtime";
var ListItem002 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx84(StyledListItemWrapper2, { children: /* @__PURE__ */ jsxs44(
    StyledListItem3,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx84(StyledListItemPointWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx84(
          StyledListItemPoint,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx84(StyledListItemTextWrapper2, { gap: style?.gap, children: /* @__PURE__ */ jsx84(
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

// components/Basic/ListItem/Product003/styles.tsx
import styled42 from "styled-components";
var StyledListItemWrapper3 = styled42.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper2 = styled42.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint2 = styled42.span.withConfig({
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
var StyledListItemTextWrapper3 = styled42.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText3 = styled42.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem4 = styled42.span.withConfig({
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

// components/Basic/ListItem/Product003/index.tsx
import { jsx as jsx85, jsxs as jsxs45 } from "react/jsx-runtime";
var ListItem003 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx85(StyledListItemWrapper3, { children: /* @__PURE__ */ jsxs45(
    StyledListItem4,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx85(StyledListItemPointWrapper2, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx85(
          StyledListItemPoint2,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx85(StyledListItemTextWrapper3, { gap: style?.gap, children: /* @__PURE__ */ jsx85(
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

// components/Basic/ListItem/Product004/styles.tsx
import styled43 from "styled-components";
var StyledListItemWrapper4 = styled43.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemIconWrapper = styled43.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemIcon = styled43.span.withConfig({
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
var StyledListItemTextWrapper4 = styled43.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em((gap ?? 8) + 24)};
`;
var StyledListItemText4 = styled43.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem5 = styled43.span.withConfig({
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

// components/Basic/ListItem/Product004/index.tsx
import { jsx as jsx86, jsxs as jsxs46 } from "react/jsx-runtime";
var ListItem004 = ({
  icon,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx86(StyledListItemWrapper4, { children: /* @__PURE__ */ jsxs46(
    StyledListItem5,
    {
      onClick,
      animationColor: style?.animationColor,
      animationIconColor: style?.animationIconColor,
      children: [
        /* @__PURE__ */ jsx86(StyledListItemIconWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx86(
          StyledListItemIcon,
          {
            iconColor: style?.iconColor,
            animationIconColor: style?.animationIconColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase,
            children: icon
          }
        ) }),
        /* @__PURE__ */ jsx86(StyledListItemTextWrapper4, { gap: style?.gap, children: /* @__PURE__ */ jsx86(
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

// components/Basic/ListItem/Product005/styles.tsx
import styled44 from "styled-components";
var StyledListItemWrapper5 = styled44.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemPointWrapper3 = styled44.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemPoint3 = styled44.span.withConfig({
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
var StyledListItemTextWrapper5 = styled44.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 24)};
`;
var StyledListItemText5 = styled44.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color" && prop !== "animationColor" && prop !== "animationDuration" && prop !== "animationEase"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
  transition: color ${({ animationDuration }) => animationDuration ?? "0.25s"} ${({ animationEase, theme }) => theme.animation.easing[animationEase ?? "easeInOutCubic"]};
`;
var StyledListItem6 = styled44.span.withConfig({
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

// components/Basic/ListItem/Product005/index.tsx
import { jsx as jsx87, jsxs as jsxs47 } from "react/jsx-runtime";
var ListItem005 = ({ children, onClick, style }) => {
  return /* @__PURE__ */ jsx87(StyledListItemWrapper5, { children: /* @__PURE__ */ jsxs47(
    StyledListItem6,
    {
      onClick,
      animationColor: style?.animationColor,
      animationPointColor: style?.animationPointColor,
      children: [
        /* @__PURE__ */ jsx87(StyledListItemPointWrapper3, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx87(
          StyledListItemPoint3,
          {
            pointSize: style?.pointSize,
            pointColor: style?.pointColor,
            animationPointColor: style?.animationPointColor,
            animationDuration: style?.animationDuration,
            animationEase: style?.animationEase
          }
        ) }),
        /* @__PURE__ */ jsx87(StyledListItemTextWrapper5, { gap: style?.gap, children: /* @__PURE__ */ jsx87(
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

// components/Basic/ListItem/Product006/styles.tsx
import styled45 from "styled-components";
var StyledListItemWrapper6 = styled45.span`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledListItemFrameNumberWrapper = styled45.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * 1.5);
  position: relative;
`;
var StyledListItemFrameNumber = styled45.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
var StyledListItemTextWrapper6 = styled45.span.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 44)};
`;
var StyledListItemText6 = styled45.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: 1.5;
`;
var StyledListItem7 = styled45.span.withConfig({
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

// components/Basic/ListItem/Product006/index.tsx
import { jsx as jsx88, jsxs as jsxs48 } from "react/jsx-runtime";
var ListItem006 = ({
  frameNumber,
  children,
  onClick,
  style
}) => {
  return /* @__PURE__ */ jsx88(StyledListItemWrapper6, { children: /* @__PURE__ */ jsxs48(
    StyledListItem7,
    {
      onClick,
      animationOpacity: style?.animationOpacity,
      animationDuration: style?.animationDuration,
      animationEase: style?.animationEase,
      children: [
        /* @__PURE__ */ jsx88(StyledListItemFrameNumberWrapper, { fontSize: style?.fontSize, children: /* @__PURE__ */ jsx88(StyledListItemFrameNumber, { children: frameNumber }) }),
        /* @__PURE__ */ jsx88(StyledListItemTextWrapper6, { gap: style?.gap, children: /* @__PURE__ */ jsx88(StyledListItemText6, { fontSize: style?.fontSize, color: style?.color, children }) })
      ]
    }
  ) });
};

// components/Basic/Loading/Product001/styles.tsx
import styled46 from "styled-components";
var LOADING_SIZE = {
  large: 52,
  middle: 44,
  small: 37
};
var StyledLoadingWrapper = styled46.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledLoading = styled46.svg.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "size" && prop !== "color"
})`
  fill: ${({ color: color2 }) => color2 ?? "#000"};
  width: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
  height: ${({ theme, size }) => theme.size.em(LOADING_SIZE[size])};
`;

// components/Basic/Loading/Product001/index.tsx
import { jsx as jsx89, jsxs as jsxs49 } from "react/jsx-runtime";
var Loading001 = ({
  type = "001",
  size = "large",
  style
}) => {
  return /* @__PURE__ */ jsx89(StyledLoadingWrapper, { children: /* @__PURE__ */ jsxs49(
    StyledLoading,
    {
      type,
      size,
      color: style?.color,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(45 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(90 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(135 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(180 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(225 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(270 12 12)", children: /* @__PURE__ */ jsx89(
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
        /* @__PURE__ */ jsx89("circle", { cx: "12", cy: "2", r: "2", opacity: ".1", transform: "rotate(315 12 12)", children: /* @__PURE__ */ jsx89(
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

// components/Basic/Loading/Product002/styles.tsx
import styled47 from "styled-components";
var LOADING_SIZE2 = {
  large: 48,
  middle: 42,
  small: 36
};
var StyledLoadingWrapper2 = styled47.span`
  display: inline-block;
  line-height: 0;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledLoading2 = styled47.svg.withConfig({
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

// components/Basic/Loading/Product002/index.tsx
import { jsx as jsx90, jsxs as jsxs50 } from "react/jsx-runtime";
var Loading002 = ({ size = "large", style }) => {
  return /* @__PURE__ */ jsx90(StyledLoadingWrapper2, { children: /* @__PURE__ */ jsxs50(
    StyledLoading2,
    {
      size,
      indicatorColor: style?.indicatorColor,
      backgroundColor: style?.backgroundColor,
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx90(
          "path",
          {
            className: "background",
            d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0m0 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9"
          }
        ),
        /* @__PURE__ */ jsx90(
          "path",
          {
            className: "indicator",
            d: "M12 0c6.6 0 12 5.4 12 12h-3c0-5-4-9-9-9V0Z",
            children: /* @__PURE__ */ jsx90(
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

// components/Basic/Modal/Footer/Buttons/styles.tsx
import styled48 from "styled-components";
var StyledContentFooter = styled48.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(10)};
`;

// components/Basic/Modal/Footer/Buttons/index.tsx
import { jsx as jsx91 } from "react/jsx-runtime";
var FooterButtons = ({ children }) => {
  return /* @__PURE__ */ jsx91(StyledContentFooter, { children });
};

// components/Basic/Modal/Product001/styles.tsx
import styled49 from "styled-components";
var StyledContainerWrapper = styled49.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;
var StyledContainer = styled49.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
var StyledContainerInner = styled49.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledContentWrapper = styled49.div`
  width: 100%;
  max-width: 500px;
  padding: 25px 0;
`;
var StyledContent = styled49.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 22px 13px 0 rgba(0,0,0,0.08), 0 14px 26px 6px rgba(0,0,0,0.12);
  position: relative;
  padding: 25px 40px;
  box-sizing: border-box;
`;
var StyledCloseIconWrapper = styled49.button`
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
var StyledContentFooter2 = styled49.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(15)};
`;

// components/Basic/Modal/Product001/index.tsx
import { jsx as jsx92, jsxs as jsxs51 } from "react/jsx-runtime";
var Modal001 = ({ showModal, children, footer }) => {
  if (!showModal) {
    return null;
  }
  return /* @__PURE__ */ jsx92(StyledContainerWrapper, { children: /* @__PURE__ */ jsx92(StyledContainer, { children: /* @__PURE__ */ jsx92(StyledContainerInner, { children: /* @__PURE__ */ jsx92(StyledContentWrapper, { children: /* @__PURE__ */ jsxs51(StyledContent, { children: [
    /* @__PURE__ */ jsx92(StyledCloseIconWrapper, { children: /* @__PURE__ */ jsx92(Svg042, {}) }),
    children,
    footer
  ] }) }) }) }) });
};

// components/Basic/NestedListItem/Product001/index.tsx
import { useState as useState12 } from "react";

// components/Basic/NestedListItem/Product001/styles.tsx
import styled50 from "styled-components";
var StyledNestedListItemWrapper = styled50.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledNestedListItemIconWrapper = styled50.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * ${({ lineHeight }) => lineHeight ?? 1.25});
  position: relative;
`;
var StyledNestedListItemIcon = styled50.div.withConfig({
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
var StyledNestedListItemTextWrapper = styled50.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})`
  width: 100%;
  padding-left: ${({ theme, gap }) => theme.size.em(gap ?? 34)};
`;
var StyledNestedListItemText = styled50.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
`;
var StyledNestedListItem = styled50.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;

// components/Basic/NestedListItem/Product001/index.tsx
import { jsx as jsx93, jsxs as jsxs52 } from "react/jsx-runtime";
var NestedListItem001 = ({
  icon,
  children,
  onClick,
  isOpen: controlledIsOpen,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState12(
    controlledIsOpen ?? false
  );
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsx93(StyledNestedListItemWrapper, { children: /* @__PURE__ */ jsxs52(StyledNestedListItem, { onClick: handleClick, children: [
    /* @__PURE__ */ jsx93(
      StyledNestedListItemIconWrapper,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx93(
          StyledNestedListItemIcon,
          {
            isOpen,
            iconColor: style?.iconColor,
            children: icon
          }
        )
      }
    ),
    /* @__PURE__ */ jsx93(StyledNestedListItemTextWrapper, { gap: style?.gap, children: /* @__PURE__ */ jsx93(
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

// components/Basic/NestedListItem/Product002/index.tsx
import { useState as useState13 } from "react";

// components/Basic/NestedListItem/Product002/styles.tsx
import styled51 from "styled-components";
var StyledNestedListItemWrapper2 = styled51.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledNestedListItemIconWrapper2 = styled51.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight"
})`
  height: calc(${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)} * ${({ lineHeight }) => lineHeight ?? 1.25});
  position: relative;
`;
var StyledNestedListItemIcon2 = styled51.div.withConfig({
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
var StyledNestedListItemTextWrapper2 = styled51.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.size.em(24)} 0 ${({ theme }) => theme.size.em(34)};
`;
var StyledNestedListItemText2 = styled51.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "lineHeight" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  overflow-wrap: break-word;
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
`;
var StyledNestedListItem2 = styled51.div`
  cursor: pointer;
  display: flex;
  justify-content: left;
`;

// components/Basic/NestedListItem/Product002/index.tsx
import { jsx as jsx94, jsxs as jsxs53 } from "react/jsx-runtime";
var NestedListItem002 = ({
  leftIcon,
  rightIcon,
  children,
  onClick,
  isOpen: controlledIsOpen,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState13(
    controlledIsOpen ?? false
  );
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(!internalIsOpen);
    }
    onClick?.();
  };
  return /* @__PURE__ */ jsx94(StyledNestedListItemWrapper2, { children: /* @__PURE__ */ jsxs53(StyledNestedListItem2, { onClick: handleClick, children: [
    /* @__PURE__ */ jsx94(
      StyledNestedListItemIconWrapper2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx94(
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
    /* @__PURE__ */ jsx94(StyledNestedListItemTextWrapper2, { children: /* @__PURE__ */ jsx94(
      StyledNestedListItemText2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        color: style?.color,
        children
      }
    ) }),
    /* @__PURE__ */ jsx94(
      StyledNestedListItemIconWrapper2,
      {
        fontSize: style?.fontSize,
        lineHeight: style?.lineHeight,
        children: /* @__PURE__ */ jsx94(
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

// components/Basic/Pagination/hooks/usePagination.ts
import { useCallback as useCallback4, useMemo as useMemo2 } from "react";
var usePagination = ({
  currentPage,
  totalPages,
  maxVisiblePages,
  onPageChange
}) => {
  const visiblePages = useMemo2(() => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1).filter(
        (i) => i !== 1 && i !== totalPages
      );
    }
    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) {
      if (i === 1 || i === totalPages) {
        continue;
      }
      pages.push(i);
    }
    return pages;
  }, [totalPages, maxVisiblePages, currentPage]);
  const showStartEllipsis = useMemo2(() => visiblePages[0] > 2, [visiblePages]);
  const showEndEllipsis = useMemo2(
    () => visiblePages[visiblePages.length - 1] < totalPages - 1,
    [visiblePages, totalPages]
  );
  const handlePageClick = useCallback4(
    (page) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page);
      }
    },
    [totalPages, currentPage, onPageChange]
  );
  return {
    visiblePages,
    showStartEllipsis,
    showEndEllipsis,
    handlePageClick
  };
};

// components/Basic/Pagination/Product001/styles.tsx
import styled52, { css as css22 } from "styled-components";
var StyledPagination = styled52.div`
  ${({ theme }) => theme.font.baseSize.em()};
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.size.em(8)};
  flex-wrap: wrap;
`;
var StyledPaginationItem = styled52.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
var StyledPaginationButton = styled52.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "size" && prop !== "activeBackgroundColor" && prop !== "backgroundColor" && prop !== "borderColor" && prop !== "borderRadius"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ borderColor }) => borderColor ?? "#e2e8f0"};
  border-radius: ${({ borderRadius }) => borderRadius ?? 8}px;
  background-color: ${({ isActive, activeBackgroundColor, backgroundColor }) => isActive ? activeBackgroundColor ?? "#2563eb" : backgroundColor ?? "#ffffff"};
  position: relative;
  overflow: hidden;

  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css22`
          min-width: ${theme.size.em(32)};
          height: ${theme.size.em(32)};
          padding: ${theme.size.em(6)} ${theme.size.em(8)};
        `;
    case "middle":
      return css22`
          min-width: ${theme.size.em(40)};
          height: ${theme.size.em(40)};
          padding: ${theme.size.em(8)} ${theme.size.em(12)};
        `;
    default:
      return css22`
          min-width: ${theme.size.em(48)};
          height: ${theme.size.em(48)};
          padding: ${theme.size.em(12)} ${theme.size.em(16)};
        `;
  }
}}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;
var StyledPaginationText = styled52.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "size" && prop !== "activeColor" && prop !== "color" && prop !== "fontWeight"
})`
  display: block;
  font-weight: ${({ fontWeight }) => fontWeight ?? 500};
  color: ${({ isActive, activeColor, color: color2 }) => isActive ? activeColor ?? "#ffffff" : color2 ?? "#374151"};
  line-height: 1;
  position: relative;
  z-index: 1;

  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css22`font-size: ${theme.size.em(12)};`;
    case "middle":
      return css22`font-size: ${theme.size.em(14)};`;
    default:
      return css22`font-size: ${theme.size.em(16)};`;
  }
}}
`;
var StyledPaginationIcon = styled52.span.withConfig({
  shouldForwardProp: (prop) => prop !== "size"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  position: relative;
  z-index: 1;

  ${({ size, theme }) => {
  switch (size) {
    case "small":
      return css22`
          width: ${theme.size.em(14)};
          height: ${theme.size.em(14)};
        `;
    case "middle":
      return css22`
          width: ${theme.size.em(16)};
          height: ${theme.size.em(16)};
        `;
    default:
      return css22`
          width: ${theme.size.em(18)};
          height: ${theme.size.em(18)};
        `;
  }
}}
`;

// components/Basic/Pagination/Product001/index.tsx
import { jsx as jsx95, jsxs as jsxs54 } from "react/jsx-runtime";
var Pagination001 = ({
  currentPage,
  totalPages,
  size = "middle",
  maxVisiblePages = 5,
  onPageChange,
  style
}) => {
  const { visiblePages, showStartEllipsis, showEndEllipsis, handlePageClick } = usePagination({
    currentPage,
    totalPages,
    maxVisiblePages,
    onPageChange
  });
  return /* @__PURE__ */ jsxs54(StyledPagination, { children: [
    currentPage > 1 && /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationButton,
      {
        onClick: () => handlePageClick(currentPage - 1),
        size,
        isActive: currentPage === 1,
        activeBackgroundColor: style?.activeBackgroundColor,
        backgroundColor: style?.backgroundColor,
        borderColor: style?.borderColor,
        borderRadius: style?.borderRadius,
        children: /* @__PURE__ */ jsx95(StyledPaginationIcon, { size, children: /* @__PURE__ */ jsx95(Svg001, { style: { transform: "rotate(180deg)" } }) })
      }
    ) }),
    /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationButton,
      {
        onClick: () => handlePageClick(1),
        size,
        isActive: currentPage === 1,
        activeBackgroundColor: style?.activeBackgroundColor,
        backgroundColor: style?.backgroundColor,
        borderColor: style?.borderColor,
        borderRadius: style?.borderRadius,
        children: /* @__PURE__ */ jsx95(
          StyledPaginationText,
          {
            size,
            activeColor: style?.activeColor,
            color: style?.color,
            fontWeight: style?.fontWeight,
            isActive: currentPage === 1,
            children: "1"
          }
        )
      }
    ) }),
    showStartEllipsis && /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationText,
      {
        size,
        activeColor: style?.activeColor,
        color: style?.color,
        fontWeight: style?.fontWeight,
        isActive: false,
        children: "..."
      }
    ) }),
    visiblePages.map((page) => /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationButton,
      {
        onClick: () => handlePageClick(page),
        isActive: page === currentPage,
        size,
        activeBackgroundColor: style?.activeBackgroundColor,
        backgroundColor: style?.backgroundColor,
        borderColor: style?.borderColor,
        borderRadius: style?.borderRadius,
        children: /* @__PURE__ */ jsx95(
          StyledPaginationText,
          {
            size,
            isActive: page === currentPage,
            activeColor: style?.activeColor,
            color: style?.color,
            fontWeight: style?.fontWeight,
            children: page
          }
        )
      }
    ) }, page)),
    showEndEllipsis && /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationText,
      {
        size,
        activeColor: style?.activeColor,
        color: style?.color,
        fontWeight: style?.fontWeight,
        isActive: false,
        children: "..."
      }
    ) }),
    totalPages > 1 && /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationButton,
      {
        activeBackgroundColor: style?.activeBackgroundColor,
        backgroundColor: style?.backgroundColor,
        borderColor: style?.borderColor,
        onClick: () => handlePageClick(totalPages),
        size,
        isActive: currentPage === totalPages,
        borderRadius: style?.borderRadius,
        children: /* @__PURE__ */ jsx95(
          StyledPaginationText,
          {
            activeColor: style?.activeColor,
            color: style?.color,
            fontWeight: style?.fontWeight,
            size,
            isActive: currentPage === totalPages,
            children: totalPages
          }
        )
      }
    ) }),
    currentPage < totalPages && /* @__PURE__ */ jsx95(StyledPaginationItem, { children: /* @__PURE__ */ jsx95(
      StyledPaginationButton,
      {
        activeBackgroundColor: style?.activeBackgroundColor,
        backgroundColor: style?.backgroundColor,
        borderColor: style?.borderColor,
        onClick: () => handlePageClick(currentPage + 1),
        size,
        isActive: currentPage === totalPages,
        borderRadius: style?.borderRadius,
        children: /* @__PURE__ */ jsx95(StyledPaginationIcon, { size, children: /* @__PURE__ */ jsx95(Svg001, {}) })
      }
    ) })
  ] });
};

// components/Basic/Radio/Product001/styles.tsx
import styled53 from "styled-components";
var StyledRadioWrapper = styled53.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledRadio = styled53.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundColor"
})`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  display: flex;
  align-items: center;
`;
var StyledRadioCheckBox = styled53.div`
  display: flex;
  align-items: center;
`;
var StyledRadioText = styled53.label.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  padding-left: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 18) * 10)};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 18)};
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  line-height: 1;
  cursor: pointer;
`;

// components/Basic/Radio/Product001/index.tsx
import { jsx as jsx96, jsxs as jsxs55 } from "react/jsx-runtime";
var Radio001 = ({
  id,
  name = id,
  children,
  checkboxType = "003",
  checkboxSize = "small",
  style
}) => {
  return /* @__PURE__ */ jsx96(StyledRadioWrapper, { children: /* @__PURE__ */ jsxs55(StyledRadio, { backgroundColor: style?.backgroundColor, children: [
    /* @__PURE__ */ jsx96(StyledRadioCheckBox, { children: /* @__PURE__ */ jsx96(
      CheckBox001,
      {
        id,
        type: checkboxType,
        size: checkboxSize,
        style: style?.checkboxStyle
      }
    ) }),
    /* @__PURE__ */ jsx96(
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

// components/Basic/Select/Product001/styles.tsx
import styled54, { css as css23 } from "styled-components";
var StyledSelectWrapper = styled54.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelectInner = styled54.div.withConfig({
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
var StyledSelectField = styled54.select.withConfig({
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
var StyledSelectIcon = styled54.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ color: color2 }) => color2 ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelect = styled54.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css23`
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
      return css23`
          ${StyledSelectInner} {
            border-radius: 0;
          }
        `;
    case "002":
      return css23`
          ${StyledSelectInner} {
            border-radius: ${theme.size.em(5)};
          }
        `;
    default:
      return css23`
          ${StyledSelectInner} {
            border-radius: 0;
          }
        `;
  }
}}
`;
var StyledSelectError = styled54.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Select/Product001/index.tsx
import { jsx as jsx97, jsxs as jsxs56 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx97(StyledSelectWrapper, { children: /* @__PURE__ */ jsxs56(StyledSelect, { error: error || !!errorText, type, children: [
    /* @__PURE__ */ jsxs56(
      StyledSelectInner,
      {
        borderColor: style?.borderColor,
        backgroundColor: style?.backgroundColor,
        errorBorderColor: style?.errorBorderColor,
        children: [
          /* @__PURE__ */ jsxs56(
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
                placeholder && /* @__PURE__ */ jsx97("option", { value: "", disabled: true, children: placeholder }),
                options.map((option) => /* @__PURE__ */ jsx97("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          /* @__PURE__ */ jsx97(StyledSelectIcon, { color: style?.iconColor ?? "#000", children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx97(
      StyledSelectError,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Select/Product002/styles.tsx
import styled55, { css as css24 } from "styled-components";
var StyledSelectWrapper2 = styled55.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledSelectInner2 = styled55.div.withConfig({
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
var StyledSelectField2 = styled55.select.withConfig({
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
var StyledSelectIcon2 = styled55.span.withConfig({
  shouldForwardProp: (prop) => prop !== "color"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ color: color2 }) => color2 ?? "#000"};

  ${({ theme }) => theme.icon.size.style("large")}
`;
var StyledSelect2 = styled55.div.withConfig({
  shouldForwardProp: (prop) => prop !== "error"
})`
  position: relative;
  width: 100%;

  ${({ error }) => error && css24`
    ${StyledSelectInner2} {
      border-bottom-color: #f00;
    }

    ${StyledSelectError2} {
      display: block;
    }
  `}
`;
var StyledSelectError2 = styled55.p.withConfig({
  shouldForwardProp: (prop) => prop !== "errorColor" && prop !== "errorFontSize"
})`
  display: none;
  color: ${({ errorColor }) => errorColor ?? "#f00"};
  font-size: ${({ theme, errorFontSize }) => theme.size.em(errorFontSize ?? 16)};
  margin: ${({ theme }) => theme.size.em(5)} 0 0;
  line-height: 1;
`;

// components/Basic/Select/Product002/index.tsx
import { jsx as jsx98, jsxs as jsxs57 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx98(StyledSelectWrapper2, { children: /* @__PURE__ */ jsxs57(StyledSelect2, { error: error || !!errorText, children: [
    /* @__PURE__ */ jsxs57(
      StyledSelectInner2,
      {
        borderColor: style?.borderColor,
        errorBorderColor: style?.errorBorderColor,
        backgroundColor: style?.backgroundColor,
        children: [
          /* @__PURE__ */ jsxs57(
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
                placeholder && /* @__PURE__ */ jsx98("option", { value: "", disabled: true, children: placeholder }),
                options.map((option) => /* @__PURE__ */ jsx98("option", { value: option.value, children: option.label }, option.value))
              ]
            }
          ),
          /* @__PURE__ */ jsx98(StyledSelectIcon2, { color: style?.iconColor ?? "#000", children: icon })
        ]
      }
    ),
    errorText && /* @__PURE__ */ jsx98(
      StyledSelectError2,
      {
        errorColor: style?.errorColor ?? "#f00",
        errorFontSize: style?.errorFontSize ?? 16,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/Text/styles.tsx
import styled56 from "styled-components";
var StyledText3 = styled56.span`
  ${({ theme }) => theme.font.baseSize.em()}

  display: block;
`;
var StyledTextContent = styled56.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
`;

// components/Basic/Text/index.tsx
import { jsx as jsx99 } from "react/jsx-runtime";
var Text = ({ children, fontSize, color: color2 }) => {
  return /* @__PURE__ */ jsx99(StyledText3, { children: /* @__PURE__ */ jsx99(StyledTextContent, { fontSize, color: color2, children }) });
};

// components/Basic/TextButton/Product001/styles.tsx
import styled57, { css as css25 } from "styled-components";
var StyledTextButtonWrapper = styled57.span`
  display: block;
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextButton = styled57.span.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "color" && prop !== "fontSize" && prop !== "hoverColor" && prop !== "hoverDuration" && prop !== "hoverEase"
})`
  display: ${({ type }) => type === "002" ? "inline-block" : "block"};
  color: ${({ color: color2 }) => color2 ?? "#fff"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 12)};
  transition: color ${({ hoverDuration }) => hoverDuration ?? "0.3s"} ${({ hoverEase, theme }) => theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
  cursor: pointer;
  
  ${({ type, color: color2, hoverDuration, hoverEase, theme }) => type === "002" && css25`
      border-bottom: 1px solid ${color2 ?? "#fff"};
      transition: 
        border-color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]},
        color ${hoverDuration ?? "0.3s"} ${theme.animation.easing[hoverEase ?? "easeInOutCubic"]};
    `}

  &:hover {
    color: ${({ hoverColor }) => hoverColor ?? "#000"};
    
    ${({ type, hoverColor }) => type === "002" && css25`
        border-color: ${hoverColor ?? "#000"};
      `}
  }
`;

// components/Basic/TextButton/Product001/index.tsx
import { jsx as jsx100 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx100(StyledTextButtonWrapper, { children: /* @__PURE__ */ jsx100(
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

// components/Basic/TextField/Product001/index.tsx
import { useState as useState14 } from "react";

// components/Basic/TextField/Product001/styles.tsx
import styled58, { css as css26 } from "styled-components";
var StyledTextFieldWrapper = styled58.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField = styled58.div.withConfig({
  shouldForwardProp: (prop) => prop !== "type" && prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput = styled58.textarea.withConfig({
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

  ${({ inputType }) => inputType === "001" && css26`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css26`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError = styled58.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;

// components/Basic/TextField/Product001/index.tsx
import { jsx as jsx101, jsxs as jsxs58 } from "react/jsx-runtime";
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
  const [internalValue, setInternalValue] = useState14("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx101(StyledTextFieldWrapper, { children: /* @__PURE__ */ jsxs58(StyledTextField, { type, hasError, children: [
    /* @__PURE__ */ jsx101(
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
    errorText && /* @__PURE__ */ jsx101(
      StyledTextFieldError,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/TextField/Product002/index.tsx
import { useState as useState15 } from "react";

// components/Basic/TextField/Product002/styles.tsx
import styled59 from "styled-components";
var StyledTextFieldWrapper2 = styled59.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField2 = styled59.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput2 = styled59.textarea.withConfig({
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
var StyledTextFieldError2 = styled59.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;

// components/Basic/TextField/Product002/index.tsx
import { jsx as jsx102, jsxs as jsxs59 } from "react/jsx-runtime";
var TextField002 = ({
  name = "text-field-002",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState15("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx102(StyledTextFieldWrapper2, { children: /* @__PURE__ */ jsxs59(StyledTextField2, { hasError, children: [
    /* @__PURE__ */ jsx102(
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
    errorText && /* @__PURE__ */ jsx102(
      StyledTextFieldError2,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/TextField/Product003/index.tsx
import { useState as useState16 } from "react";

// components/Basic/TextField/Product003/styles.tsx
import styled60 from "styled-components";
var StyledTextFieldWrapper3 = styled60.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField3 = styled60.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput3 = styled60.textarea.withConfig({
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
var StyledTextFieldError3 = styled60.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;

// components/Basic/TextField/Product003/index.tsx
import { jsx as jsx103, jsxs as jsxs60 } from "react/jsx-runtime";
var TextField003 = ({
  name = "text-field-003",
  placeholder = "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
  value,
  onChange,
  error = false,
  errorText,
  style
}) => {
  const [internalValue, setInternalValue] = useState16("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx103(StyledTextFieldWrapper3, { children: /* @__PURE__ */ jsxs60(StyledTextField3, { hasError, children: [
    /* @__PURE__ */ jsx103(
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
    errorText && /* @__PURE__ */ jsx103(
      StyledTextFieldError3,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/TextField/Product004/index.tsx
import { useState as useState17 } from "react";

// components/Basic/TextField/Product004/styles.tsx
import styled61, { css as css27 } from "styled-components";
var StyledTextFieldWrapper4 = styled61.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField4 = styled61.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput4 = styled61.textarea.withConfig({
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

  ${({ inputType }) => inputType === "001" && css27`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css27`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError4 = styled61.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;

// components/Basic/TextField/Product004/index.tsx
import { jsx as jsx104, jsxs as jsxs61 } from "react/jsx-runtime";
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
  const [internalValue, setInternalValue] = useState17("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx104(StyledTextFieldWrapper4, { children: /* @__PURE__ */ jsxs61(StyledTextField4, { hasError, children: [
    /* @__PURE__ */ jsx104(
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
    errorText && /* @__PURE__ */ jsx104(
      StyledTextFieldError4,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/TextField/Product005/index.tsx
import { useState as useState18 } from "react";

// components/Basic/TextField/Product005/styles.tsx
import styled62, { css as css28 } from "styled-components";
var StyledTextFieldWrapper5 = styled62.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextField5 = styled62.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})`
  position: relative;
  width: 100%;
`;
var StyledTextFieldInput5 = styled62.textarea.withConfig({
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

  ${({ inputType }) => inputType === "001" && css28`
      border-radius: 0;
    `}

  ${({ inputType }) => inputType === "002" && css28`
      border-radius: ${({ theme }) => theme.size.em(4)};
    `}
`;
var StyledTextFieldError5 = styled62.p.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  color: ${({ color: color2 }) => color2 ?? "#f00"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 16)};
  margin: ${({ theme, fontSize }) => theme.size.em(5 / (fontSize ?? 16) * 10)} 0 0;
  line-height: 1;
`;

// components/Basic/TextField/Product005/index.tsx
import { jsx as jsx105, jsxs as jsxs62 } from "react/jsx-runtime";
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
  const [internalValue, setInternalValue] = useState18("");
  const currentValue = value !== void 0 ? value : internalValue;
  const handleChange = (e) => {
    if (value === void 0) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };
  const hasError = error || !!errorText;
  return /* @__PURE__ */ jsx105(StyledTextFieldWrapper5, { children: /* @__PURE__ */ jsxs62(StyledTextField5, { hasError, children: [
    /* @__PURE__ */ jsx105(
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
    errorText && /* @__PURE__ */ jsx105(
      StyledTextFieldError5,
      {
        fontSize: style?.errorStyle?.fontSize,
        color: style?.errorStyle?.color,
        children: errorText
      }
    )
  ] }) });
};

// components/Basic/TextIcon/Product001/styles.tsx
import styled63 from "styled-components";
var StyledTextIconWrapper = styled63.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledTextIcon = styled63.div.withConfig({
  shouldForwardProp: (prop) => prop !== "iconPosition" && prop !== "gap"
})`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 4)};
  flex-direction: ${({ iconPosition }) => iconPosition === "left" ? "row-reverse" : "row"};
`;
var StyledTextIconText = styled63.span.withConfig({
  shouldForwardProp: (prop) => prop !== "fontSize" && prop !== "color"
})`
  display: block;
  color: ${({ color: color2 }) => color2 ?? "#000"};
  font-size: ${({ theme, fontSize }) => theme.size.em(fontSize ?? 24)};
  line-height: 1;
`;
var StyledTextIconIcon = styled63.span.withConfig({
  shouldForwardProp: (prop) => prop !== "iconColor" && prop !== "iconSize"
})`
  color: ${({ iconColor }) => iconColor ?? "#000"};

  ${({ theme, iconSize }) => theme.icon.size.style(iconSize ?? "large")}
`;

// components/Basic/TextIcon/Product001/index.tsx
import { jsx as jsx106, jsxs as jsxs63 } from "react/jsx-runtime";
var TextIcon001 = ({
  icon,
  children,
  iconPosition = "right",
  iconSize,
  style
}) => {
  return /* @__PURE__ */ jsx106(StyledTextIconWrapper, { children: /* @__PURE__ */ jsxs63(StyledTextIcon, { iconPosition, gap: style?.gap, children: [
    /* @__PURE__ */ jsx106(StyledTextIconText, { fontSize: style?.fontSize, color: style?.color, children }),
    /* @__PURE__ */ jsx106(StyledTextIconIcon, { iconColor: style?.iconColor, iconSize, children: icon })
  ] }) });
};

// components/Basic/Toggle/Product001/index.tsx
import { useState as useState19 } from "react";

// components/Basic/Toggle/Product001/styles.tsx
import styled64 from "styled-components";
var StyledToggleWrapper2 = styled64.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggleOpen = styled64.div.withConfig({
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
var StyledToggleOpenInner = styled64.div`
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
var StyledToggleOpenLine = styled64.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  width: 100%;
  height: ${({ theme }) => theme.size.em(4)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
`;
var StyledToggleClose = styled64.div`
  width: ${({ theme }) => theme.size.em(80)};
  height: ${({ theme }) => theme.size.em(80)};
  cursor: pointer;
  display: block;
  position: relative;
`;
var StyledToggleCloseInner = styled64.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
var StyledToggleCloseContainer = styled64.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleCloseLineWrapper = styled64.div`
  position: relative;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
`;
var StyledToggleCloseLine = styled64.span.withConfig({
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

// components/Basic/Toggle/Product001/index.tsx
import { jsx as jsx107, jsxs as jsxs64 } from "react/jsx-runtime";
var Toggle001 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState19(false);
  const isOpen = controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  const handleClick = () => {
    const newState = !isOpen;
    if (controlledIsOpen === void 0) {
      setInternalIsOpen(newState);
    }
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx107(StyledToggleWrapper2, { children: isOpen ? /* @__PURE__ */ jsx107(StyledToggleClose, { onClick: handleClick, children: /* @__PURE__ */ jsx107(StyledToggleCloseInner, { children: /* @__PURE__ */ jsx107(StyledToggleCloseContainer, { children: /* @__PURE__ */ jsxs64(StyledToggleCloseLineWrapper, { children: [
    /* @__PURE__ */ jsx107(
      StyledToggleCloseLine,
      {
        lineColor: style?.lineColor,
        animationBackgroundColorLine: style?.animationBackgroundColorLine
      }
    ),
    /* @__PURE__ */ jsx107(
      StyledToggleCloseLine,
      {
        lineColor: style?.lineColor,
        animationBackgroundColorLine: style?.animationBackgroundColorLine
      }
    )
  ] }) }) }) }) : /* @__PURE__ */ jsx107(
    StyledToggleOpen,
    {
      onClick: handleClick,
      animationBackgroundColorBefore: style?.animationBackgroundColorBefore,
      animationBackgroundColorAfter: style?.animationBackgroundColorAfter,
      children: /* @__PURE__ */ jsxs64(StyledToggleOpenInner, { children: [
        /* @__PURE__ */ jsx107(StyledToggleOpenLine, { lineColor: style?.lineColor }),
        /* @__PURE__ */ jsx107(StyledToggleOpenLine, { lineColor: style?.lineColor }),
        /* @__PURE__ */ jsx107(StyledToggleOpenLine, { lineColor: style?.lineColor })
      ] })
    }
  ) });
};

// components/Basic/Toggle/Product002/index.tsx
import { useMemo as useMemo3, useState as useState20 } from "react";

// components/Basic/Toggle/Product002/styles.tsx
import styled65, { css as css29, keyframes as keyframes2 } from "styled-components";
var scaleOut = keyframes2`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
`;
var scaleIn = keyframes2`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;
var StyledToggleWrapper3 = styled65.div`
  ${({ theme }) => theme.font.baseSize.em()}
`;
var StyledToggle = styled65.div`
  display: block;
`;
var StyledToggleInner2 = styled65.div.withConfig({
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

  ${({ isOpen }) => isOpen && css29`
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

  ${({ isOpen }) => isOpen === false && css29`
      ${StyledToggleCloseLine2}::after {
        animation: ${scaleOut} 0.15s ease forwards;
      }

      ${StyledToggleOpenLine2} {
        transform: scaleX(0);
        animation: ${scaleIn} 0.15s 0.15s ease forwards;
      }
    `}
`;
var StyledToggleOpen2 = styled65.div`
  width: ${({ theme }) => theme.size.em(28)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.em(3)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleOpenLine2 = styled65.span.withConfig({
  shouldForwardProp: (prop) => prop !== "lineColor"
})`
  width: 100%;
  height: ${({ theme }) => theme.size.em(2)};
  background-color: ${({ lineColor }) => lineColor ?? "#000"};
  transform-origin: left;
  transition: transform 0.2s ${({ theme }) => theme.animation.easing.easeInSine};
`;
var StyledToggleCloseWrapper2 = styled65.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
var StyledToggleClose2 = styled65.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
var StyledToggleCloseLine2 = styled65.span.withConfig({
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

// components/Basic/Toggle/Product002/index.tsx
import { jsx as jsx108, jsxs as jsxs65 } from "react/jsx-runtime";
var Toggle002 = ({
  isOpen: controlledIsOpen,
  onChange,
  onClick,
  style
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState20(
    void 0
  );
  const isOpen = useMemo3(() => {
    if (internalIsOpen === void 0) return void 0;
    return controlledIsOpen !== void 0 ? controlledIsOpen : internalIsOpen;
  }, [controlledIsOpen, internalIsOpen]);
  const handleClick = () => {
    const newState = !isOpen;
    setInternalIsOpen(newState);
    onChange?.(newState);
    onClick?.();
  };
  return /* @__PURE__ */ jsx108(StyledToggleWrapper3, { children: /* @__PURE__ */ jsx108(StyledToggle, { children: /* @__PURE__ */ jsxs65(StyledToggleInner2, { onClick: handleClick, isOpen, children: [
    /* @__PURE__ */ jsxs65(StyledToggleOpen2, { children: [
      /* @__PURE__ */ jsx108(StyledToggleOpenLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx108(StyledToggleOpenLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx108(StyledToggleOpenLine2, { lineColor: style?.lineColor })
    ] }),
    /* @__PURE__ */ jsx108(StyledToggleCloseWrapper2, { children: /* @__PURE__ */ jsxs65(StyledToggleClose2, { children: [
      /* @__PURE__ */ jsx108(StyledToggleCloseLine2, { lineColor: style?.lineColor }),
      /* @__PURE__ */ jsx108(StyledToggleCloseLine2, { lineColor: style?.lineColor })
    ] }) })
  ] }) }) });
};

// components/Basic/ToggleSomething/Product001/styles.tsx
import styled66, { css as css30 } from "styled-components";
var StyledToggleContent = styled66.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "duration" && prop !== "easing"
})`
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ duration }) => duration ?? "0.3s"} ${({ easing: easing2, theme }) => theme.animation.easing[easing2 ?? "easeInSine"]};  

  ${({ isOpen }) => isOpen && css30`
      opacity: 1;
      pointer-events: auto;
    `}
`;

// components/Basic/ToggleSomething/Product001/index.tsx
import { jsx as jsx109 } from "react/jsx-runtime";
var ToggleSomething001 = ({
  isOpen,
  children,
  duration,
  easing: easing2,
  ...props
}) => {
  return /* @__PURE__ */ jsx109(
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

// context/MediaContext.tsx
import { createContext, useEffect as useEffect3, useState as useState21 } from "react";

// styles/font.ts
import { css as css31 } from "styled-components";

// styles/size.ts
var PC_SIZE = 1280;
var TABLET_SIZE = 768;
var SP_SIZE = 480;
var REM_SIZE = 16;

// styles/font.ts
var baseFontSizeForEm = css31`
   font-size: calc(${PC_SIZE}px * 10 / ${PC_SIZE});

   ${(props) => props.theme.media.pcSize(css31`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) => props.theme.media.tabletSize(css31`
    font-size: calc(100vw * 10 / ${PC_SIZE});
   `)}

   ${(props) => props.theme.media.spSizeLess(css31`
    font-size: calc(100vw * 10 / ${SP_SIZE});
   `)}
`;
var baseFontSizeForRem = css31`
   font-size: calc(${PC_SIZE}px * ${REM_SIZE} / ${PC_SIZE});

   ${(props) => props.theme.media.pcSize(css31`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) => props.theme.media.tabletSize(css31`
      font-size: calc(100vw * ${REM_SIZE} / ${PC_SIZE});
    `)}

   ${(props) => props.theme.media.spSizeLess(css31`
      font-size: calc(100vw * ${REM_SIZE} / ${SP_SIZE});
    `)}
`;
var notoSansJP = css31`
   font-family: "Noto Sans JP", sans-serif;
`;
var roboto = css31`
   font-family: "Roboto", sans-serif;
`;
var zenKakuGothicNew = css31`
   font-family: "Zen Kaku Gothic New", sans-serif;
`;
var lato = css31`
   font-family: "Lato", sans-serif;
`;
var montserrat = css31`
   font-family: "Montserrat", sans-serif;
`;
var ebGaramond = css31`
   font-family: "EB Garamond", serif;
`;
var zenOldMincho = css31`
   font-family: "Zen Old Mincho", serif;
`;
var em = (px) => `${px * 0.1}em`;
var rem = (px) => `${px / REM_SIZE}rem`;

// styles/global-style.ts
import { createGlobalStyle } from "styled-components";
var GlobalStyles = createGlobalStyle`
  html {
    ${({ theme }) => theme.font.baseSize.rem()}
  }

  body {
    ${({ theme }) => theme.font.fontFamily.notoSansJP()}

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

// styles/media.ts
import { css as css32 } from "styled-components";
var media = {
  pcSizeOver: (...args) => css32`
      @media (min-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSize: (...args) => css32`
      @media (min-width: ${TABLET_SIZE + 1}px) and (max-width: ${PC_SIZE}px) {
        ${args}
      }
    `,
  pcSizeLess: (...args) => css32`
      @media (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeOver: (...args) => css32`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSize: (...args) => css32`
      @media (min-width: ${SP_SIZE + 1}px) and (max-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `,
  tabletSizeLess: (...args) => css32`
      @media (max-width: ${SP_SIZE - 1}px) {
        ${args}
      }
    `,
  spSizeLess: (...args) => css32`
      @media (max-width: ${SP_SIZE}px) {
        ${args}
      }
    `,
  spSizeOver: (...args) => css32`
      @media (min-width: ${TABLET_SIZE}px) {
        ${args}
      }
    `
};

// styles/themes.ts
import { css as css34 } from "styled-components";

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

// styles/figma-fonts.ts
import { css as css33 } from "styled-components";
var font = {
  em: {
    noto_sans_jp_700_36: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_20: css33`
    font-family: "Roboto";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_14: css33`
    font-family: "Roboto";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_14: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_42: css33`
    font-family: "Roboto";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_14: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_24: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_10: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_12: css33`
    font-family: "Roboto";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_8: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_48: css33`
    font-family: "Roboto";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_28: css33`
    font-family: "Roboto";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_16: css33`
    font-family: "Lato";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_10: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_16: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_42: css33`
    font-family: "Lato";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_16: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_20: css33`
    font-family: "Lato";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_36: css33`
    font-family: "Roboto";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_14: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_8: css33`
    font-family: "Roboto";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_14: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_10: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_8: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_14: css33`
    font-family: "Lato";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_36: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_8: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_12: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_48: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_24: css33`
    font-family: "Montserrat";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_10: css33`
    font-family: "Roboto";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_28: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_48: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_16: css33`
    font-family: "Montserrat";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_42: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_18: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_42: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_14: css33`
    font-family: "Roboto";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_10: css33`
    font-family: "Athelas";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_48: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_28: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_42: css33`
    font-family: "Lato";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_48: css33`
    font-family: "EB Garamond";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_16: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_12: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_12: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_20: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_28: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_16: css33`
    font-family: "Roboto";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_24: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_10: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_42: css33`
    font-family: "Roboto";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_20: css33`
    font-family: "Montserrat";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_28: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_18: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_10: css33`
    font-family: "Roboto";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_18: css33`
    font-family: "Roboto";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_16: css33`
    font-family: "EB Garamond";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_14: css33`
    font-family: "Montserrat";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_8: css33`
    font-family: "Lato";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_36: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_16: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_10: css33`
    font-family: "Lato";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_42: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_8: css33`
    font-family: "EB Garamond";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_16: css33`
    font-family: "Montserrat";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_24: css33`
    font-family: "Roboto";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_48: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_10: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_8: css33`
    font-family: "Montserrat";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_10: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_8: css33`
    font-family: "Montserrat";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_20: css33`
    font-family: "Roboto";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_14: css33`
    font-family: "Montserrat";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_42: css33`
    font-family: "Montserrat";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_24: css33`
    font-family: "Lato";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_20: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_48: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_36: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_8: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_28: css33`
    font-family: "Lato";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_36: css33`
    font-family: "Roboto";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_20: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_8: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_8: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_20: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_10: css33`
    font-family: "Lato";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_48: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_12: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_18: css33`
    font-family: "Montserrat";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_48: css33`
    font-family: "Lato";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_18: css33`
    font-family: "Lato";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_42: css33`
    font-family: "EB Garamond";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_18: css33`
    font-family: "Roboto";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_24: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_10: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_36: css33`
    font-family: "Montserrat";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_28: css33`
    font-family: "Montserrat";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_42: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_36: css33`
    font-family: "Lato";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_10: css33`
    font-family: "EB Garamond";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_42: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_10: css33`
    font-family: "Montserrat";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_14: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_42: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_28: css33`
    font-family: "Lato";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_12: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_20: css33`
    font-family: "EB Garamond";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_20: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_18: css33`
    font-family: "Athelas";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_42: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_48: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_36: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_8: css33`
    font-family: "Lato";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_24: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_8: css33`
    font-family: "Roboto";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_36: css33`
    font-family: "Lato";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_8: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_18: css33`
    font-family: "Lato";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_20: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_12: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_48: css33`
    font-family: "Roboto";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_8: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_28: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_24: css33`
    font-family: "Lato";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_48: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_24: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_48: css33`
    font-family: "Lato";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_18: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_16: css33`
    font-family: "Roboto";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_28: css33`
    font-family: "Montserrat";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_20: css33`
    font-family: "Montserrat";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_24: css33`
    font-family: "Montserrat";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_12: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_18: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_56: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_36: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_36: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_18: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_24: css33`
    font-family: "Athelas";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_16: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_24: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_42: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_14: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_14: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_20: css33`
    font-family: "Lato";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_48: css33`
    font-family: "Montserrat";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_24: css33`
    font-family: "Roboto";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_48: css33`
    font-family: "Montserrat";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_12: css33`
    font-family: "Roboto";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_16: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_28: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_14: css33`
    font-family: "EB Garamond";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_18: css33`
    font-family: "Montserrat";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_28: css33`
    font-family: "Roboto";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_8: css33`
    font-family: "EB Garamond";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_24: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_12: css33`
    font-family: "Lato";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_18: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_14: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_12: css33`
    font-family: "Montserrat";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_18: css33`
    font-family: "Athelas";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_28: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_42: css33`
    font-family: "Athelas";
    font-size: ${em(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_12: css33`
    font-family: "Montserrat";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_18: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_12: css33`
    font-family: "EB Garamond";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_16: css33`
    font-family: "Athelas";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_14: css33`
    font-family: "Lato";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_48: css33`
    font-family: "Athelas";
    font-size: ${em(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_16: css33`
    font-family: "EB Garamond";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_10: css33`
    font-family: "Athelas";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_14: css33`
    font-family: "EB Garamond";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_18: css33`
    font-family: "EB Garamond";
    font-size: ${em(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_14: css33`
    font-family: "Athelas";
    font-size: ${em(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_36: css33`
    font-family: "Montserrat";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_16: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_28: css33`
    font-family: "Athelas";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_20: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_20: css33`
    font-family: "Athelas";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_16: css33`
    font-family: "Lato";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_42: css33`
    font-family: "Athelas";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_10: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_12: css33`
    font-family: "Athelas";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_12: css33`
    font-family: "Athelas";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_24: css33`
    font-family: "EB Garamond";
    font-size: ${em(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_48: css33`
    font-family: "EB Garamond";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_8: css33`
    font-family: "Athelas";
    font-size: ${em(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_16: css33`
    font-family: "Athelas";
    font-size: ${em(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_36: css33`
    font-family: "EB Garamond";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_20: css33`
    font-family: "EB Garamond";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_36: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_10: css33`
    font-family: "Montserrat";
    font-size: ${em(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_28: css33`
    font-family: "EB Garamond";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_24: css33`
    font-family: "Athelas";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_10: css33`
    font-family: "EB Garamond";
    font-size: ${em(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_36: css33`
    font-family: "Athelas";
    font-size: ${em(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_24: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_14: css33`
    font-family: "Athelas";
    font-size: ${em(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_28: css33`
    font-family: "Athelas";
    font-size: ${em(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_48: css33`
    font-family: "Athelas";
    font-size: ${em(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_12: css33`
    font-family: "Lato";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_12: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_42: css33`
    font-family: "Montserrat";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_36: css33`
    font-family: "EB Garamond";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_36: css33`
    font-family: "Athelas";
    font-size: ${em(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_24: css33`
    font-family: "EB Garamond";
    font-size: ${em(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_42: css33`
    font-family: "EB Garamond";
    font-size: ${em(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_28: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_8: css33`
    font-family: "Athelas";
    font-size: ${em(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_12: css33`
    font-family: "EB Garamond";
    font-size: ${em(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_20: css33`
    font-family: "Athelas";
    font-size: ${em(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_28: css33`
    font-family: "EB Garamond";
    font-size: ${em(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_16: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_20: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_18: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_18: css33`
    font-family: "EB Garamond";
    font-size: ${em(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_56: css33`
    font-family: "Lato";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_56: css33`
    font-family: "Roboto";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_56: css33`
    font-family: "Roboto";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_56: css33`
    font-family: "Montserrat";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_56: css33`
    font-family: "Montserrat";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_56: css33`
    font-family: "EB Garamond";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_56: css33`
    font-family: "EB Garamond";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_62: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_56: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_56: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_56: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_56: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_56: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_56: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_56: css33`
    font-family: "Lato";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_56: css33`
    font-family: "Athelas";
    font-size: ${em(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_56: css33`
    font-family: "Athelas";
    font-size: ${em(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_62: css33`
    font-family: "Roboto";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_62: css33`
    font-family: "Montserrat";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_62: css33`
    font-family: "EB Garamond";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_62: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_62: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_62: css33`
    font-family: "Roboto";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_62: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_62: css33`
    font-family: "Montserrat";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_62: css33`
    font-family: "Athelas";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_62: css33`
    font-family: "Noto Sans JP";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_62: css33`
    font-family: "Lato";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_62: css33`
    font-family: "Zen Old Mincho";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_62: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_62: css33`
    font-family: "Noto Serif JP";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_62: css33`
    font-family: "Lato";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_62: css33`
    font-family: "EB Garamond";
    font-size: ${em(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_62: css33`
    font-family: "Athelas";
    font-size: ${em(62)};
    font-weight: 400;
    line-height: 1.50;
  `
  },
  rem: {
    noto_sans_jp_700_36: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_20: css33`
    font-family: "Roboto";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_14: css33`
    font-family: "Roboto";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_14: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_42: css33`
    font-family: "Roboto";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_14: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_24: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_10: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_12: css33`
    font-family: "Roboto";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_8: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_48: css33`
    font-family: "Roboto";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_28: css33`
    font-family: "Roboto";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_16: css33`
    font-family: "Lato";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_10: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_16: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_42: css33`
    font-family: "Lato";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_16: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_20: css33`
    font-family: "Lato";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_36: css33`
    font-family: "Roboto";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_14: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_8: css33`
    font-family: "Roboto";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_14: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_10: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_8: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_14: css33`
    font-family: "Lato";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_36: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_8: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_12: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_48: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_24: css33`
    font-family: "Montserrat";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_10: css33`
    font-family: "Roboto";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_28: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_48: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_16: css33`
    font-family: "Montserrat";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_42: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_18: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_42: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_14: css33`
    font-family: "Roboto";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_10: css33`
    font-family: "Athelas";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_48: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_28: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_42: css33`
    font-family: "Lato";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_48: css33`
    font-family: "EB Garamond";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_16: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_12: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_12: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_20: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_28: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_16: css33`
    font-family: "Roboto";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_24: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_10: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_42: css33`
    font-family: "Roboto";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_20: css33`
    font-family: "Montserrat";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_28: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_18: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_10: css33`
    font-family: "Roboto";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_18: css33`
    font-family: "Roboto";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_16: css33`
    font-family: "EB Garamond";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_14: css33`
    font-family: "Montserrat";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_8: css33`
    font-family: "Lato";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_36: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_16: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_10: css33`
    font-family: "Lato";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_42: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_8: css33`
    font-family: "EB Garamond";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_16: css33`
    font-family: "Montserrat";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_24: css33`
    font-family: "Roboto";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_48: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_10: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_8: css33`
    font-family: "Montserrat";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_10: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_8: css33`
    font-family: "Montserrat";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_20: css33`
    font-family: "Roboto";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_14: css33`
    font-family: "Montserrat";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_42: css33`
    font-family: "Montserrat";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_24: css33`
    font-family: "Lato";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_20: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_48: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_36: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_8: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_28: css33`
    font-family: "Lato";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_36: css33`
    font-family: "Roboto";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_20: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_8: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_8: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_20: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_10: css33`
    font-family: "Lato";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_48: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_12: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_18: css33`
    font-family: "Montserrat";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_48: css33`
    font-family: "Lato";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_18: css33`
    font-family: "Lato";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_42: css33`
    font-family: "EB Garamond";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_18: css33`
    font-family: "Roboto";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_24: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_10: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_36: css33`
    font-family: "Montserrat";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_28: css33`
    font-family: "Montserrat";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_42: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_36: css33`
    font-family: "Lato";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_10: css33`
    font-family: "EB Garamond";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_42: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_10: css33`
    font-family: "Montserrat";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_14: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_42: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_28: css33`
    font-family: "Lato";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_12: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_20: css33`
    font-family: "EB Garamond";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_20: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_18: css33`
    font-family: "Athelas";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_42: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_48: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_400_36: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_8: css33`
    font-family: "Lato";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_24: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_8: css33`
    font-family: "Roboto";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_36: css33`
    font-family: "Lato";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_8: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_18: css33`
    font-family: "Lato";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_20: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_12: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_48: css33`
    font-family: "Roboto";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_8: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_28: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_24: css33`
    font-family: "Lato";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_48: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_24: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_48: css33`
    font-family: "Lato";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_700_18: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_16: css33`
    font-family: "Roboto";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_28: css33`
    font-family: "Montserrat";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_20: css33`
    font-family: "Montserrat";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_24: css33`
    font-family: "Montserrat";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_12: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_400_18: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_56: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_36: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_36: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_18: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_24: css33`
    font-family: "Athelas";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_16: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_24: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_42: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_14: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_14: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_20: css33`
    font-family: "Lato";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_48: css33`
    font-family: "Montserrat";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_400_24: css33`
    font-family: "Roboto";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_48: css33`
    font-family: "Montserrat";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_12: css33`
    font-family: "Roboto";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_16: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_28: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_14: css33`
    font-family: "EB Garamond";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_18: css33`
    font-family: "Montserrat";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_28: css33`
    font-family: "Roboto";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_8: css33`
    font-family: "EB Garamond";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_24: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_12: css33`
    font-family: "Lato";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_18: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_14: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_12: css33`
    font-family: "Montserrat";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_18: css33`
    font-family: "Athelas";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_28: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_42: css33`
    font-family: "Athelas";
    font-size: ${rem(42)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_700_12: css33`
    font-family: "Montserrat";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_18: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_12: css33`
    font-family: "EB Garamond";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_16: css33`
    font-family: "Athelas";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_14: css33`
    font-family: "Lato";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_48: css33`
    font-family: "Athelas";
    font-size: ${rem(48)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_16: css33`
    font-family: "EB Garamond";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_10: css33`
    font-family: "Athelas";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_14: css33`
    font-family: "EB Garamond";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_18: css33`
    font-family: "EB Garamond";
    font-size: ${rem(18)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_14: css33`
    font-family: "Athelas";
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_36: css33`
    font-family: "Montserrat";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_16: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_28: css33`
    font-family: "Athelas";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_20: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_20: css33`
    font-family: "Athelas";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_700_16: css33`
    font-family: "Lato";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_42: css33`
    font-family: "Athelas";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_10: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_12: css33`
    font-family: "Athelas";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_12: css33`
    font-family: "Athelas";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_24: css33`
    font-family: "EB Garamond";
    font-size: ${rem(24)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_48: css33`
    font-family: "EB Garamond";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_8: css33`
    font-family: "Athelas";
    font-size: ${rem(8)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_16: css33`
    font-family: "Athelas";
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_36: css33`
    font-family: "EB Garamond";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_20: css33`
    font-family: "EB Garamond";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_36: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_10: css33`
    font-family: "Montserrat";
    font-size: ${rem(10)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_28: css33`
    font-family: "EB Garamond";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_24: css33`
    font-family: "Athelas";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_10: css33`
    font-family: "EB Garamond";
    font-size: ${rem(10)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_36: css33`
    font-family: "Athelas";
    font-size: ${rem(36)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_24: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_14: css33`
    font-family: "Athelas";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_28: css33`
    font-family: "Athelas";
    font-size: ${rem(28)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_48: css33`
    font-family: "Athelas";
    font-size: ${rem(48)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_12: css33`
    font-family: "Lato";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_12: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_42: css33`
    font-family: "Montserrat";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_36: css33`
    font-family: "EB Garamond";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_36: css33`
    font-family: "Athelas";
    font-size: ${rem(36)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_24: css33`
    font-family: "EB Garamond";
    font-size: ${rem(24)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_42: css33`
    font-family: "EB Garamond";
    font-size: ${rem(42)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_400_28: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_400_8: css33`
    font-family: "Athelas";
    font-size: ${rem(8)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_700_12: css33`
    font-family: "EB Garamond";
    font-size: ${rem(12)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_20: css33`
    font-family: "Athelas";
    font-size: ${rem(20)};
    font-weight: 400;
    line-height: 1.50;
  `,
    eb_garamond_400_28: css33`
    font-family: "EB Garamond";
    font-size: ${rem(28)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_16: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(16)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_20: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(20)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_18: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_18: css33`
    font-family: "EB Garamond";
    font-size: ${rem(18)};
    font-weight: 700;
    line-height: 1.50;
  `,
    lato_400_56: css33`
    font-family: "Lato";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_56: css33`
    font-family: "Roboto";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_700_56: css33`
    font-family: "Roboto";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    montserrat_400_56: css33`
    font-family: "Montserrat";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_56: css33`
    font-family: "Montserrat";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_56: css33`
    font-family: "EB Garamond";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_56: css33`
    font-family: "EB Garamond";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_sans_jp_700_62: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_56: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_56: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_56: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    noto_serif_jp_700_56: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_700_56: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_56: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_56: css33`
    font-family: "Lato";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_700_56: css33`
    font-family: "Athelas";
    font-size: ${rem(56)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_56: css33`
    font-family: "Athelas";
    font-size: ${rem(56)};
    font-weight: 400;
    line-height: 1.50;
  `,
    roboto_400_62: css33`
    font-family: "Roboto";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_700_62: css33`
    font-family: "Montserrat";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_400_62: css33`
    font-family: "EB Garamond";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_400_62: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_kaku_gothic_700_62: css33`
    font-family: "Zen Kaku Gothic New";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    roboto_700_62: css33`
    font-family: "Roboto";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    zen_old_mincho_400_62: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    montserrat_400_62: css33`
    font-family: "Montserrat";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    athelas_700_62: css33`
    font-family: "Athelas";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_sans_jp_400_62: css33`
    font-family: "Noto Sans JP";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_400_62: css33`
    font-family: "Lato";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    zen_old_mincho_700_62: css33`
    font-family: "Zen Old Mincho";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_700_62: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    noto_serif_jp_400_62: css33`
    font-family: "Noto Serif JP";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `,
    lato_700_62: css33`
    font-family: "Lato";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    eb_garamond_700_62: css33`
    font-family: "EB Garamond";
    font-size: ${rem(62)};
    font-weight: 700;
    line-height: 1.50;
  `,
    athelas_400_62: css33`
    font-family: "Athelas";
    font-size: ${rem(62)};
    font-weight: 400;
    line-height: 1.50;
  `
  }
};

// styles/themes.ts
var themes = {
  color,
  media,
  size: {
    em: (px) => em(px),
    rem: (px) => rem(px),
    customEm: (px, base) => `${px / base}em`
  },
  font: {
    ...font,
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
            return css34`
              width: ${em(24)};
              height: ${em(24)};
            `;
          case "middle":
            return css34`
              width: ${em(20)};
              height: ${em(20)};
            `;
          case "small":
            return css34`
              width: ${em(18)};
              height: ${em(18)};
            `;
          default:
            return css34`
              width: ${em(24)};
              height: ${em(24)};
            `;
        }
      }
    }
  }
};

// context/MediaContext.tsx
import { jsx as jsx110 } from "react/jsx-runtime";
var MediaContext = createContext("pc");
var MediaProvider = ({ children }) => {
  const [media2, setMedia] = useState21("pc");
  const handleCheckWindowSize = () => {
    if (window.innerWidth > SP_SIZE && window.innerWidth <= TABLET_SIZE) {
      setMedia("tablet");
    } else if (window.innerWidth <= SP_SIZE) {
      setMedia("sp");
    } else {
      setMedia("pc");
    }
  };
  useEffect3(() => {
    handleCheckWindowSize();
    window.addEventListener("resize", handleCheckWindowSize);
    return () => {
      window.removeEventListener("resize", handleCheckWindowSize);
    };
  }, []);
  return /* @__PURE__ */ jsx110(MediaContext.Provider, { value: media2, children });
};
export {
  Accordion001,
  Accordion002,
  Accordion003,
  Accordion004,
  Accordion005,
  Balloon001,
  Balloon002,
  BgImageContent,
  Breadcrumbs,
  Button001,
  Button002,
  CheckBox001,
  CheckBox002,
  CircleProgress,
  FadeInAndZoomImages,
  FooterButtons,
  FrameIcon001,
  FrameNumber001,
  GlobalStyles,
  Header001,
  Input001,
  Input002,
  Input003,
  Input004,
  Input005,
  Input006,
  JmcArrowButton,
  JmcButton,
  JmcCircleToggle,
  Label001,
  Label002,
  List001,
  ListItem001,
  ListItem002,
  ListItem003,
  ListItem004,
  ListItem005,
  ListItem006,
  Loading001,
  Loading002,
  MediaContext,
  MediaProvider,
  Modal001,
  NestedListItem001,
  NestedListItem002,
  PC_SIZE,
  Pagination001,
  REM_SIZE,
  Radio001,
  RebitaButton,
  RebitaCircleProgress,
  RebitaFadeSlideImage,
  RebitaFadeText,
  RebitaPanel,
  RebitaSlideGuideDot,
  RebitaTextButtonWithIcon,
  RebitaToggle,
  SP_SIZE,
  Select001,
  Select002,
  Svg001 as Svg001Icon,
  Svg002 as Svg002Icon,
  Svg003 as Svg003Icon,
  Svg004 as Svg004Icon,
  Svg005 as Svg005Icon,
  Svg006 as Svg006Icon,
  Svg007 as Svg007Icon,
  Svg008 as Svg008Icon,
  Svg009 as Svg009Icon,
  Svg010 as Svg010Icon,
  Svg011 as Svg011Icon,
  Svg012 as Svg012Icon,
  Svg013 as Svg013Icon,
  Svg014 as Svg014Icon,
  Svg015 as Svg015Icon,
  Svg016 as Svg016Icon,
  Svg017 as Svg017Icon,
  Svg018 as Svg018Icon,
  Svg019 as Svg019Icon,
  Svg020 as Svg020Icon,
  Svg021 as Svg021Icon,
  Svg022 as Svg022Icon,
  Svg023 as Svg023Icon,
  Svg024 as Svg024Icon,
  Svg025 as Svg025Icon,
  Svg026 as Svg026Icon,
  Svg027 as Svg027Icon,
  Svg028 as Svg028Icon,
  Svg029 as Svg029Icon,
  Svg030 as Svg030Icon,
  Svg031 as Svg031Icon,
  Svg032 as Svg032Icon,
  Svg033 as Svg033Icon,
  Svg034 as Svg034Icon,
  Svg035 as Svg035Icon,
  Svg036 as Svg036Icon,
  Svg037 as Svg037Icon,
  Svg038 as Svg038Icon,
  Svg039 as Svg039Icon,
  Svg040 as Svg040Icon,
  Svg041 as Svg041Icon,
  Svg042 as Svg042Icon,
  Svg043 as Svg043Icon,
  TABLET_SIZE,
  Text,
  TextButton001,
  TextField001,
  TextField002,
  TextField003,
  TextField004,
  TextField005,
  TextIcon001,
  Toggle001,
  Toggle002,
  ToggleSomething001,
  VerticalRollingText,
  baseFontSizeForEm,
  baseFontSizeForRem,
  color,
  ebGaramond,
  em,
  hexToRgb,
  lato,
  media,
  montserrat,
  notoSansJP,
  rem,
  roboto,
  themes,
  zenKakuGothicNew,
  zenOldMincho
};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map