/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(540);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function noop() {}
var Internals = {
    d: {
      f: noop,
      r: function () {
        throw Error(formatProdErrorMessage(522));
      },
      D: noop,
      C: noop,
      L: noop,
      m: noop,
      X: noop,
      S: noop,
      M: noop
    },
    p: 0,
    findDOMNode: null
  },
  REACT_PORTAL_TYPE = Symbol.for("react.portal");
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
var ReactSharedInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function getCrossOriginStringAs(as, input) {
  if ("font" === as) return "";
  if ("string" === typeof input)
    return "use-credentials" === input ? input : "";
}
exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  Internals;
exports.createPortal = function (children, container) {
  var key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (
    !container ||
    (1 !== container.nodeType &&
      9 !== container.nodeType &&
      11 !== container.nodeType)
  )
    throw Error(formatProdErrorMessage(299));
  return createPortal$1(children, container, null, key);
};
exports.flushSync = function (fn) {
  var previousTransition = ReactSharedInternals.T,
    previousUpdatePriority = Internals.p;
  try {
    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
  } finally {
    (ReactSharedInternals.T = previousTransition),
      (Internals.p = previousUpdatePriority),
      Internals.d.f();
  }
};
exports.preconnect = function (href, options) {
  "string" === typeof href &&
    (options
      ? ((options = options.crossOrigin),
        (options =
          "string" === typeof options
            ? "use-credentials" === options
              ? options
              : ""
            : void 0))
      : (options = null),
    Internals.d.C(href, options));
};
exports.prefetchDNS = function (href) {
  "string" === typeof href && Internals.d.D(href);
};
exports.preinit = function (href, options) {
  if ("string" === typeof href && options && "string" === typeof options.as) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      integrity =
        "string" === typeof options.integrity ? options.integrity : void 0,
      fetchPriority =
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0;
    "style" === as
      ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin: crossOrigin,
            integrity: integrity,
            fetchPriority: fetchPriority
          }
        )
      : "script" === as &&
        Internals.d.X(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
  }
};
exports.preinitModule = function (href, options) {
  if ("string" === typeof href)
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        Internals.d.M(href, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    } else null == options && Internals.d.M(href);
};
exports.preload = function (href, options) {
  if (
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    Internals.d.L(href, as, {
      crossOrigin: crossOrigin,
      integrity:
        "string" === typeof options.integrity ? options.integrity : void 0,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      type: "string" === typeof options.type ? options.type : void 0,
      fetchPriority:
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0,
      referrerPolicy:
        "string" === typeof options.referrerPolicy
          ? options.referrerPolicy
          : void 0,
      imageSrcSet:
        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      imageSizes:
        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
      media: "string" === typeof options.media ? options.media : void 0
    });
  }
};
exports.preloadModule = function (href, options) {
  if ("string" === typeof href)
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      Internals.d.m(href, {
        as:
          "string" === typeof options.as && "script" !== options.as
            ? options.as
            : void 0,
        crossOrigin: crossOrigin,
        integrity:
          "string" === typeof options.integrity ? options.integrity : void 0
      });
    } else Internals.d.m(href);
};
exports.requestFormReset = function (form) {
  Internals.d.r(form);
};
exports.unstable_batchedUpdates = function (fn, a) {
  return fn(a);
};
exports.useFormState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
};
exports.useFormStatus = function () {
  return ReactSharedInternals.H.useHostTransitionStatus();
};
exports.version = "19.1.1";


/***/ }),

/***/ 247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/

var Scheduler = __webpack_require__(982),
  React = __webpack_require__(540),
  ReactDOM = __webpack_require__(961);
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
  );
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var assign = Object.assign,
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy");
Symbol.for("react.scope");
var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_ACTIVITY_TYPE:
      return "Activity";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_PORTAL_TYPE:
        return "Portal";
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Provider";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
var isArrayImpl = Array.isArray,
  ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ReactDOMSharedInternals =
    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  sharedNotPendingObject = {
    pending: !1,
    data: null,
    method: null,
    action: null
  },
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var contextStackCursor = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null),
  hostTransitionProviderCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  switch (nextRootInstance.nodeType) {
    case 9:
    case 11:
      fiber = (fiber = nextRootInstance.documentElement)
        ? (fiber = fiber.namespaceURI)
          ? getOwnHostContext(fiber)
          : 0
        : 0;
      break;
    default:
      if (
        ((fiber = nextRootInstance.tagName),
        (nextRootInstance = nextRootInstance.namespaceURI))
      )
        (nextRootInstance = getOwnHostContext(nextRootInstance)),
          (fiber = getChildHostContextProd(nextRootInstance, fiber));
      else
        switch (fiber) {
          case "svg":
            fiber = 1;
            break;
          case "math":
            fiber = 2;
            break;
          default:
            fiber = 0;
        }
  }
  pop(contextStackCursor);
  push(contextStackCursor, fiber);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  var context = contextStackCursor.current;
  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue = sharedNotPendingObject));
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler.unstable_cancelCallback,
  shouldYield = Scheduler.unstable_shouldYield,
  requestPaint = Scheduler.unstable_requestPaint,
  now = Scheduler.unstable_now,
  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler.unstable_NormalPriority,
  LowPriority = Scheduler.unstable_LowPriority,
  IdlePriority = Scheduler.unstable_IdlePriority,
  log$1 = Scheduler.log,
  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
  rendererID = null,
  injectedHook = null;
function setIsStrictModeForDevtools(newIsStrictMode) {
  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {}
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var nextTransitionLane = 256,
  nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  var pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return lanes & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes, rootHasPendingCommit) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes;
  root = root.warmLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : ((pingedLanes &= nonIdlePendingLanes),
          0 !== pingedLanes
            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
            : rootHasPendingCommit ||
              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
              0 !== rootHasPendingCommit &&
                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
      0 !== nonIdlePendingLanes
        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
        : 0 !== pingedLanes
          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
          : rootHasPendingCommit ||
            ((rootHasPendingCommit = pendingLanes & ~root),
            0 !== rootHasPendingCommit &&
              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
  return 0 === nextLanes
    ? 0
    : 0 !== wipLanes &&
        wipLanes !== nextLanes &&
        0 === (wipLanes & suspendedLanes) &&
        ((suspendedLanes = nextLanes & -nextLanes),
        (rootHasPendingCommit = wipLanes & -wipLanes),
        suspendedLanes >= rootHasPendingCommit ||
          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
      ? wipLanes
      : nextLanes;
}
function checkIfRootIsPrerendering(root, renderLanes) {
  return (
    0 ===
    (root.pendingLanes &
      ~(root.suspendedLanes & ~root.pingedLanes) &
      renderLanes)
  );
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return currentTime + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return currentTime + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function claimNextTransitionLane() {
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;
  0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
  return lane;
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated$1(root, updateLane) {
  root.pendingLanes |= updateLane;
  268435456 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
}
function markRootFinished(
  root,
  finishedLanes,
  remainingLanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  var previouslyPendingLanes = root.pendingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.warmLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  var entanglements = root.entanglements,
    expirationTimes = root.expirationTimes,
    hiddenUpdates = root.hiddenUpdates;
  for (
    remainingLanes = previouslyPendingLanes & ~remainingLanes;
    0 < remainingLanes;

  ) {
    var index$5 = 31 - clz32(remainingLanes),
      lane = 1 << index$5;
    entanglements[index$5] = 0;
    expirationTimes[index$5] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$5];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$5] = null, index$5 = 0;
        index$5 < hiddenUpdatesForLane.length;
        index$5++
      ) {
        var update = hiddenUpdatesForLane[index$5];
        null !== update && (update.lane &= -536870913);
      }
    remainingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
  0 !== suspendedRetryLanes &&
    0 === updatedLanes &&
    0 !== root.tag &&
    (root.suspendedLanes |=
      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 4194090);
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$6 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$6;
    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
      (root[index$6] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function getBumpedLaneForHydrationByLane(lane) {
  switch (lane) {
    case 2:
      lane = 1;
      break;
    case 8:
      lane = 4;
      break;
    case 32:
      lane = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      lane = 128;
      break;
    case 268435456:
      lane = 134217728;
      break;
    default:
      lane = 0;
  }
  return lane;
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
function resolveUpdatePriority() {
  var updatePriority = ReactDOMSharedInternals.p;
  if (0 !== updatePriority) return updatePriority;
  updatePriority = window.event;
  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
}
function runWithPriority(priority, fn) {
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    return (ReactDOMSharedInternals.p = priority), fn();
  } finally {
    ReactDOMSharedInternals.p = previousPriority;
  }
}
var randomKey = Math.random().toString(36).slice(2),
  internalInstanceKey = "__reactFiber$" + randomKey,
  internalPropsKey = "__reactProps$" + randomKey,
  internalContainerInstanceKey = "__reactContainer$" + randomKey,
  internalEventHandlersKey = "__reactEvents$" + randomKey,
  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
  internalHoistableMarker = "__reactMarker$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentSuspenseInstance(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentSuspenseInstance(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (
    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
  ) {
    var tag = node.tag;
    if (
      5 === tag ||
      6 === tag ||
      13 === tag ||
      26 === tag ||
      27 === tag ||
      3 === tag
    )
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  var tag = inst.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getResourcesFromRoot(root) {
  var resources = root[internalRootNodeResourcesKey];
  resources ||
    (resources = root[internalRootNodeResourcesKey] =
      { hoistableStyles: new Map(), hoistableScripts: new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = !0;
}
var allNativeEvents = new Set(),
  registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  illegalAttributeNameCache = {},
  validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (null === value) node.removeAttribute(name);
    else {
      switch (typeof value) {
        case "undefined":
        case "function":
        case "symbol":
          node.removeAttribute(name);
          return;
        case "boolean":
          var prefix$8 = name.toLowerCase().slice(0, 5);
          if ("data-" !== prefix$8 && "aria-" !== prefix$8) {
            node.removeAttribute(name);
            return;
          }
      }
      node.setAttribute(name, "" + value);
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttribute(name, "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttributeNS(namespace, name, "" + value);
  }
}
var prefix, suffix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
      suffix =
        -1 < x.stack.indexOf("\n    at")
          ? " (<anonymous>)"
          : -1 < x.stack.indexOf("@")
            ? "@unknown:0:0"
            : "";
    }
  return "\n" + prefix + name + suffix;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var RunInRootFrame = {
      DetermineComponentFrameRoot: function () {
        try {
          if (construct) {
            var Fake = function () {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function () {
                throw Error();
              }
            });
            if ("object" === typeof Reflect && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                var control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x$9) {
                control = x$9;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x$10) {
              control = x$10;
            }
            (Fake = fn()) &&
              "function" === typeof Fake.catch &&
              Fake.catch(function () {});
          }
        } catch (sample) {
          if (sample && control && "string" === typeof sample.stack)
            return [sample.stack, control.stack];
        }
        return [null, null];
      }
    };
    RunInRootFrame.DetermineComponentFrameRoot.displayName =
      "DetermineComponentFrameRoot";
    var namePropDescriptor = Object.getOwnPropertyDescriptor(
      RunInRootFrame.DetermineComponentFrameRoot,
      "name"
    );
    namePropDescriptor &&
      namePropDescriptor.configurable &&
      Object.defineProperty(
        RunInRootFrame.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
      sampleStack = _RunInRootFrame$Deter[0],
      controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"),
        controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
            namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                var frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 15:
      return describeNativeComponentFrame(fiber.type, !1);
    case 11:
      return describeNativeComponentFrame(fiber.type.render, !1);
    case 1:
      return describeNativeComponentFrame(fiber.type, !0);
    case 31:
      return describeBuiltInComponentFrame("Activity");
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = "";
    do
      (info += describeFiber(workInProgress)),
        (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
function getToStringValue(value) {
  switch (typeof value) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return value;
    case "object":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (
    (elem = elem.nodeName) &&
    "input" === elem.toLowerCase() &&
    ("checkbox" === type || "radio" === type)
  );
}
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? "checked" : "value",
    descriptor = Object.getOwnPropertyDescriptor(
      node.constructor.prototype,
      valueField
    ),
    currentValue = "" + node[valueField];
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    "function" === typeof descriptor.get &&
    "function" === typeof descriptor.set
  ) {
    var get = descriptor.get,
      set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function () {
        return get.call(this);
      },
      set: function (value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = "" + value;
      },
      stopTracking: function () {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  var tracker = node._valueTracker;
  if (!tracker) return !0;
  var lastValue = tracker.getValue();
  var value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    function (ch) {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(
  element,
  value,
  defaultValue,
  lastDefaultValue,
  checked,
  defaultChecked,
  type,
  name
) {
  element.name = "";
  null != type &&
  "function" !== typeof type &&
  "symbol" !== typeof type &&
  "boolean" !== typeof type
    ? (element.type = type)
    : element.removeAttribute("type");
  if (null != value)
    if ("number" === type) {
      if ((0 === value && "" === element.value) || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) &&
        (element.value = "" + getToStringValue(value));
  else
    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
  null != value
    ? setDefaultValue(element, type, getToStringValue(value))
    : null != defaultValue
      ? setDefaultValue(element, type, getToStringValue(defaultValue))
      : null != lastDefaultValue && element.removeAttribute("value");
  null == checked &&
    null != defaultChecked &&
    (element.defaultChecked = !!defaultChecked);
  null != checked &&
    (element.checked =
      checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name &&
  "function" !== typeof name &&
  "symbol" !== typeof name &&
  "boolean" !== typeof name
    ? (element.name = "" + getToStringValue(name))
    : element.removeAttribute("name");
}
function initInput(
  element,
  value,
  defaultValue,
  checked,
  defaultChecked,
  type,
  name,
  isHydrating
) {
  null != type &&
    "function" !== typeof type &&
    "symbol" !== typeof type &&
    "boolean" !== typeof type &&
    (element.type = type);
  if (null != value || null != defaultValue) {
    if (
      !(
        ("submit" !== type && "reset" !== type) ||
        (void 0 !== value && null !== value)
      )
    )
      return;
    defaultValue =
      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    value = null != value ? "" + getToStringValue(value) : defaultValue;
    isHydrating || value === element.value || (element.value = value);
    element.defaultValue = value;
  }
  checked = null != checked ? checked : defaultChecked;
  checked =
    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
  element.checked = isHydrating ? element.checked : !!checked;
  element.defaultChecked = !!checked;
  null != name &&
    "function" !== typeof name &&
    "symbol" !== typeof name &&
    "boolean" !== typeof name &&
    (element.name = name);
}
function setDefaultValue(node, type, value) {
  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
    node.defaultValue === "" + value ||
    (node.defaultValue = "" + value);
}
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
        node[propValue].selected !== i && (node[propValue].selected = i),
        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (
    null != value &&
    ((value = "" + getToStringValue(value)),
    value !== element.value && (element.value = value),
    null == defaultValue)
  ) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue =
    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (null == value) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    null == defaultValue && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue &&
    "" !== children &&
    null !== children &&
    (element.value = children);
}
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      3 === firstChild.nodeType
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style, styleName, value) {
  var isCustomProperty = 0 === styleName.indexOf("--");
  null == value || "boolean" === typeof value || "" === value
    ? isCustomProperty
      ? style.setProperty(styleName, "")
      : "float" === styleName
        ? (style.cssFloat = "")
        : (style[styleName] = "")
    : isCustomProperty
      ? style.setProperty(styleName, value)
      : "number" !== typeof value ||
          0 === value ||
          unitlessNumbers.has(styleName)
        ? "float" === styleName
          ? (style.cssFloat = value)
          : (style[styleName] = ("" + value).trim())
        : (style[styleName] = value + "px");
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) ||
        (null != styles && styles.hasOwnProperty(styleName)) ||
        (0 === styleName.indexOf("--")
          ? node.setProperty(styleName, "")
          : "float" === styleName
            ? (node.cssFloat = "")
            : (node[styleName] = ""));
    for (var styleName$16 in styles)
      (styleName = styles[styleName$16]),
        styles.hasOwnProperty(styleName$16) &&
          prevStyles[styleName$16] !== styleName &&
          setValueForStyle(node, styleName$16, styleName);
  } else
    for (var styleName$17 in styles)
      styles.hasOwnProperty(styleName$17) &&
        setValueForStyle(node, styleName$17, styles[styleName$17]);
}
function isCustomElement(tagName) {
  if (-1 === tagName.indexOf("-")) return !1;
  switch (tagName) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var aliases = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]),
  isJavaScriptProtocol =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : url;
}
var currentReplayingEvent = null;
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreTarget = null,
  restoreQueue = null;
function restoreStateOfTarget(target) {
  var internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    var props = target[internalPropsKey] || null;
    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
      case "input":
        updateInput(
          target,
          props.value,
          props.defaultValue,
          props.defaultValue,
          props.checked,
          props.defaultChecked,
          props.type,
          props.name
        );
        internalInstance = props.name;
        if ("radio" === props.type && null != internalInstance) {
          for (props = target; props.parentNode; ) props = props.parentNode;
          props = props.querySelectorAll(
            'input[name="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                "" + internalInstance
              ) +
              '"][type="radio"]'
          );
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          ) {
            var otherNode = props[internalInstance];
            if (otherNode !== target && otherNode.form === target.form) {
              var otherProps = otherNode[internalPropsKey] || null;
              if (!otherProps) throw Error(formatProdErrorMessage(90));
              updateInput(
                otherNode,
                otherProps.value,
                otherProps.defaultValue,
                otherProps.defaultValue,
                otherProps.checked,
                otherProps.defaultChecked,
                otherProps.type,
                otherProps.name
              );
            }
          }
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          )
            (otherNode = props[internalInstance]),
              otherNode.form === target.form && updateValueIfChanged(otherNode);
        }
        break a;
      case "textarea":
        updateTextarea(target, props.value, props.defaultValue);
        break a;
      case "select":
        (internalInstance = props.value),
          null != internalInstance &&
            updateOptions(target, !!props.multiple, internalInstance, !1);
    }
  }
}
var isInsideEventHandler = !1;
function batchedUpdates$1(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = !0;
  try {
    var JSCompiler_inline_result = fn(a);
    return JSCompiler_inline_result;
  } finally {
    if (
      ((isInsideEventHandler = !1),
      null !== restoreTarget || null !== restoreQueue)
    )
      if (
        (flushSyncWork$1(),
        restoreTarget &&
          ((a = restoreTarget),
          (fn = restoreQueue),
          (restoreQueue = restoreTarget = null),
          restoreStateOfTarget(a),
          fn))
      )
        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
  }
}
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = stateNode[internalPropsKey] || null;
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          "button" === inst ||
          "input" === inst ||
          "select" === inst ||
          "textarea" === inst
        )));
      inst = !props;
      break a;
    default:
      inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var canUseDOM = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function () {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }
var root = null,
  startText = null,
  fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start,
    startValue = startText,
    startLength = startValue.length,
    end,
    endValue = "value" in root ? root.value : root.textContent,
    endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  var minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (
      null != nativeEvent.defaultPrevented
        ? nativeEvent.defaultPrevented
        : !1 === nativeEvent.returnValue
    )
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function () {
      var event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function () {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  SyntheticEvent = createSyntheticEvent(EventInterface),
  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
  lastMovementX,
  lastMovementY,
  lastMouseEvent,
  MouseEventInterface = assign({}, UIEventInterface, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function (event) {
      return void 0 === event.relatedTarget
        ? event.fromElement === event.srcElement
          ? event.toElement
          : event.fromElement
        : event.relatedTarget;
    },
    movementX: function (event) {
      if ("movementX" in event) return event.movementX;
      event !== lastMouseEvent &&
        (lastMouseEvent && "mousemove" === event.type
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
            (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
      return lastMovementX;
    },
    movementY: function (event) {
      return "movementY" in event ? event.movementY : lastMovementY;
    }
  }),
  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
  AnimationEventInterface = assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
  ClipboardEventInterface = assign({}, EventInterface, {
    clipboardData: function (event) {
      return "clipboardData" in event
        ? event.clipboardData
        : window.clipboardData;
    }
  }),
  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
  normalizeKey = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  translateToKey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  modifierKeyToProp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
      ? !!nativeEvent[keyArg]
      : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = assign({}, UIEventInterface, {
    key: function (nativeEvent) {
      if (nativeEvent.key) {
        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
        if ("Unidentified" !== key) return key;
      }
      return "keypress" === nativeEvent.type
        ? ((nativeEvent = getEventCharCode(nativeEvent)),
          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: getEventModifierState,
    charCode: function (event) {
      return "keypress" === event.type ? getEventCharCode(event) : 0;
    },
    keyCode: function (event) {
      return "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    },
    which: function (event) {
      return "keypress" === event.type
        ? getEventCharCode(event)
        : "keydown" === event.type || "keyup" === event.type
          ? event.keyCode
          : 0;
    }
  }),
  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
  PointerEventInterface = assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
  TouchEventInterface = assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  }),
  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
  TransitionEventInterface = assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
  WheelEventInterface = assign({}, MouseEventInterface, {
    deltaX: function (event) {
      return "deltaX" in event
        ? event.deltaX
        : "wheelDeltaX" in event
          ? -event.wheelDeltaX
          : 0;
    },
    deltaY: function (event) {
      return "deltaY" in event
        ? event.deltaY
        : "wheelDeltaY" in event
          ? -event.wheelDeltaY
          : "wheelDelta" in event
            ? -event.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
  ToggleEventInterface = assign({}, EventInterface, {
    newState: 0,
    oldState: 0
  }),
  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
  END_KEYCODES = [9, 13, 27, 32],
  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
  documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
  useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode)),
  SPACEBAR_CHAR = String.fromCharCode(32),
  hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
var isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = !0;
      return SPACEBAR_CHAR;
    case "textInput":
      return (
        (domEventName = nativeEvent.data),
        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
      );
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
        (fallbackText = startText = root = null),
        (isComposing = !1),
        domEventName)
      : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
      ) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale
        ? null
        : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName
    ? !!supportedInputTypes[elem.type]
    : "textarea" === nodeName
      ? !0
      : !1;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement$1 = null,
  activeElementInst$1 = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = !1;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$282;
  if (canUseDOM) {
    var isSupported$jscomp$inline_417 = "oninput" in document;
    if (!isSupported$jscomp$inline_417) {
      var element$jscomp$inline_418 = document.createElement("div");
      element$jscomp$inline_418.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_417 =
        "function" === typeof element$jscomp$inline_418.oninput;
    }
    JSCompiler_inline_result$jscomp$282 = isSupported$jscomp$inline_417;
  } else JSCompiler_inline_result$jscomp$282 = !1;
  isInputEventSupported =
    JSCompiler_inline_result$jscomp$282 &&
    (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement$1 &&
    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst$1 = activeElement$1 = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    "value" === nativeEvent.propertyName &&
    getInstIfValueChanged(activeElementInst$1)
  ) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates$1(runEventInBatch, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName
    ? (stopWatchingForValueChange(),
      (activeElement$1 = target),
      (activeElementInst$1 = targetInst),
      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
    : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    "selectionchange" === domEventName ||
    "keyup" === domEventName ||
    "keydown" === domEventName
  )
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && 3 === outerNode.nodeType
        ? !1
        : innerNode && 3 === innerNode.nodeType
          ? containsNode(outerNode, innerNode.parentNode)
          : "contains" in outerNode
            ? outerNode.contains(innerNode)
            : outerNode.compareDocumentPosition
              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
              : !1
    : !1;
}
function getActiveElementDeep(containerInfo) {
  containerInfo =
    null != containerInfo &&
    null != containerInfo.ownerDocument &&
    null != containerInfo.ownerDocument.defaultView
      ? containerInfo.ownerDocument.defaultView
      : window;
  for (
    var element = getActiveElement(containerInfo.document);
    element instanceof containerInfo.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
    else break;
    element = getActiveElement(containerInfo.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    (("input" === nodeName &&
      ("text" === elem.type ||
        "search" === elem.type ||
        "tel" === elem.type ||
        "url" === elem.type ||
        "password" === elem.type)) ||
      "textarea" === nodeName ||
      "true" === elem.contentEditable)
  );
}
var skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
  activeElement = null,
  activeElementInst = null,
  lastSelection = null,
  mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : 9 === nativeEventTarget.nodeType
        ? nativeEventTarget
        : nativeEventTarget.ownerDocument;
  mouseDown ||
    null == activeElement ||
    activeElement !== getActiveElement(doc) ||
    ((doc = activeElement),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement))));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
    animationstart: makePrefixMap("Animation", "AnimationStart"),
    transitionrun: makePrefixMap("Transition", "TransitionRun"),
    transitionstart: makePrefixMap("Transition", "TransitionStart"),
    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  },
  prefixedEventNames = {},
  style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName],
    styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"),
  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
  topLevelEventsToReactNames = new Map(),
  simpleEventPluginEvents =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
simpleEventPluginEvents.push("scrollEnd");
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
var CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var existing = CapturedStacks.get(value);
    if (void 0 !== existing) return existing;
    source = {
      value: value,
      source: source,
      stack: getStackByFiberInDevAndProd(source)
    };
    CapturedStacks.set(value, source);
    return source;
  }
  return {
    value: value,
    source: source,
    stack: getStackByFiberInDevAndProd(source)
  };
}
var concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  return 3 === sourceFiber.tag
    ? ((parent = sourceFiber.stateNode),
      isHidden &&
        null !== update &&
        ((isHidden = 31 - clz32(lane)),
        (sourceFiber = parent.hiddenUpdates),
        (alternate = sourceFiber[isHidden]),
        null === alternate
          ? (sourceFiber[isHidden] = [update])
          : alternate.push(update),
        (update.lane = lane | 536870912)),
      parent)
    : null;
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      Error(formatProdErrorMessage(185)))
    );
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var emptyContextObject = {};
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiberImplClass(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null));
  workInProgress.flags = current.flags & 65011712;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 65011714;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 0;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type)
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor.current
    )
      ? 26
      : "html" === type || "head" === type || "body" === type
        ? 27
        : 5;
  else
    a: switch (type) {
      case REACT_ACTIVITY_TYPE:
        return (
          (type = createFiberImplClass(31, pendingProps, key, mode)),
          (type.elementType = REACT_ACTIVITY_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 24;
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiberImplClass(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiberImplClass(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
            case REACT_CONTEXT_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONSUMER_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        fiberTag = 29;
        pendingProps = Error(
          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
        );
        owner = null;
    }
  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiberImplClass(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiberImplClass(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiberImplClass(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
var forkStack = [],
  forkStackIndex = 0,
  treeForkProvider = null,
  treeForkCount = 0,
  idStack = [],
  idStackIndex = 0,
  treeContextProvider = null,
  treeContextId = 1,
  treeContextOverflow = "";
function pushTreeFork(workInProgress, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress, totalChildren, index) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress;
  var baseIdWithLeadingBit = treeContextId;
  workInProgress = treeContextOverflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - (baseLength % 5);
    length = (
      baseIdWithLeadingBit &
      ((1 << numberOfOverflowBits) - 1)
    ).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId =
      (1 << (32 - clz32(totalChildren) + baseLength)) |
      (index << baseLength) |
      baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress;
  } else
    (treeContextId =
      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
      (treeContextOverflow = workInProgress);
}
function pushMaterializedTreeId(workInProgress) {
  null !== workInProgress.return &&
    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
}
function popTreeContext(workInProgress) {
  for (; workInProgress === treeForkProvider; )
    (treeForkProvider = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null),
      (treeForkCount = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null);
  for (; workInProgress === treeContextProvider; )
    (treeContextProvider = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextOverflow = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextId = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null);
}
var hydrationParentFiber = null,
  nextHydratableInstance = null,
  isHydrating = !1,
  hydrationErrors = null,
  rootOrSingletonContext = !1,
  HydrationMismatchException = Error(formatProdErrorMessage(519));
function throwOnHydrationMismatch(fiber) {
  var error = Error(formatProdErrorMessage(418, ""));
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}
function prepareToHydrateHostInstance(fiber) {
  var instance = fiber.stateNode,
    type = fiber.type,
    props = fiber.memoizedProps;
  instance[internalInstanceKey] = fiber;
  instance[internalPropsKey] = props;
  switch (type) {
    case "dialog":
      listenToNonDelegatedEvent("cancel", instance);
      listenToNonDelegatedEvent("close", instance);
      break;
    case "iframe":
    case "object":
    case "embed":
      listenToNonDelegatedEvent("load", instance);
      break;
    case "video":
    case "audio":
      for (type = 0; type < mediaEventTypes.length; type++)
        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
      break;
    case "source":
      listenToNonDelegatedEvent("error", instance);
      break;
    case "img":
    case "image":
    case "link":
      listenToNonDelegatedEvent("error", instance);
      listenToNonDelegatedEvent("load", instance);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", instance);
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", instance);
      initInput(
        instance,
        props.value,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name,
        !0
      );
      track(instance);
      break;
    case "select":
      listenToNonDelegatedEvent("invalid", instance);
      break;
    case "textarea":
      listenToNonDelegatedEvent("invalid", instance),
        initTextarea(instance, props.value, props.defaultValue, props.children),
        track(instance);
  }
  type = props.children;
  ("string" !== typeof type &&
    "number" !== typeof type &&
    "bigint" !== typeof type) ||
  instance.textContent === "" + type ||
  !0 === props.suppressHydrationWarning ||
  checkForUnmatchedText(instance.textContent, type)
    ? (null != props.popover &&
        (listenToNonDelegatedEvent("beforetoggle", instance),
        listenToNonDelegatedEvent("toggle", instance)),
      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
      null != props.onScrollEnd &&
        listenToNonDelegatedEvent("scrollend", instance),
      null != props.onClick && (instance.onclick = noop$1),
      (instance = !0))
    : (instance = !1);
  instance || throwOnHydrationMismatch(fiber);
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
      case 5:
      case 13:
        rootOrSingletonContext = !1;
        return;
      case 27:
      case 3:
        rootOrSingletonContext = !0;
        return;
      default:
        hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  var tag = fiber.tag,
    JSCompiler_temp;
  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
    if ((JSCompiler_temp = 5 === tag))
      (JSCompiler_temp = fiber.type),
        (JSCompiler_temp =
          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
          shouldSetTextContent(fiber.type, fiber.memoizedProps));
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
  popToNextHostParent(fiber);
  if (13 === tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    a: {
      fiber = fiber.nextSibling;
      for (tag = 0; fiber; ) {
        if (8 === fiber.nodeType)
          if (((JSCompiler_temp = fiber.data), "/$" === JSCompiler_temp)) {
            if (0 === tag) {
              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
              break a;
            }
            tag--;
          } else
            ("$" !== JSCompiler_temp &&
              "$!" !== JSCompiler_temp &&
              "$?" !== JSCompiler_temp) ||
              tag++;
        fiber = fiber.nextSibling;
      }
      nextHydratableInstance = null;
    }
  } else
    27 === tag
      ? ((tag = nextHydratableInstance),
        isSingletonScope(fiber.type)
          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
            (previousHydratableOnEnteringScopedSingleton = null),
            (nextHydratableInstance = fiber))
          : (nextHydratableInstance = tag))
      : (nextHydratableInstance = hydrationParentFiber
          ? getNextHydratable(fiber.stateNode.nextSibling)
          : null);
  return !0;
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
function upgradeHydrationErrorsToRecoverable() {
  var queuedErrors = hydrationErrors;
  null !== queuedErrors &&
    (null === workInProgressRootRecoverableErrors
      ? (workInProgressRootRecoverableErrors = queuedErrors)
      : workInProgressRootRecoverableErrors.push.apply(
          workInProgressRootRecoverableErrors,
          queuedErrors
        ),
    (hydrationErrors = null));
  return queuedErrors;
}
function queueHydrationError(error) {
  null === hydrationErrors
    ? (hydrationErrors = [error])
    : hydrationErrors.push(error);
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber$1 = null,
  lastContextDependency = null;
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  context._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  var fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      list = list.firstContext;
      a: for (; null !== list; ) {
        var dependency = list;
        list = fiber;
        for (var i = 0; i < contexts.length; i++)
          if (dependency.context === contexts[i]) {
            list.lanes |= renderLanes;
            dependency = list.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleContextWorkOnParentPath(
              list.return,
              renderLanes,
              workInProgress
            );
            forcePropagateEntireTree || (nextFiber = null);
            break a;
          }
        list = dependency.next;
      }
    } else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = null;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  current = null;
  for (
    var parent = workInProgress, isInsidePropagationBailout = !1;
    null !== parent;

  ) {
    if (!isInsidePropagationBailout)
      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
      else if (0 !== (parent.flags & 262144)) break;
    if (10 === parent.tag) {
      var currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent = currentParent.memoizedProps;
      if (null !== currentParent) {
        var context = parent.type;
        objectIs(parent.pendingProps.value, currentParent.value) ||
          (null !== current ? current.push(context) : (current = [context]));
      }
    } else if (parent === hostTransitionProviderCursor.current) {
      currentParent = parent.alternate;
      if (null === currentParent) throw Error(formatProdErrorMessage(387));
      currentParent.memoizedState.memoizedState !==
        parent.memoizedState.memoizedState &&
        (null !== current
          ? current.push(HostTransitionContext)
          : (current = [HostTransitionContext]));
    }
    parent = parent.return;
  }
  null !== current &&
    propagateContextChanges(
      workInProgress,
      current,
      renderLanes,
      forcePropagateEntireTree
    );
  workInProgress.flags |= 262144;
}
function checkIfContextChanged(currentDependencies) {
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress) {
  currentlyRenderingFiber$1 = workInProgress;
  lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress && (workInProgress.firstContext = null);
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber$1, context);
}
function readContextDuringReconciliation(consumer, context) {
  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  var value = context._currentValue;
  context = { context: context, memoizedValue: value, next: null };
  if (null === lastContextDependency) {
    if (null === consumer) throw Error(formatProdErrorMessage(308));
    lastContextDependency = context;
    consumer.dependencies = { lanes: 0, firstContext: context };
    consumer.flags |= 524288;
  } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
  NormalPriority = Scheduler.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$2(NormalPriority, function () {
      cache.controller.abort();
    });
}
var currentEntangledListeners = null,
  currentEntangledPendingCount = 0,
  currentEntangledLane = 0,
  currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    0 === --currentEntangledPendingCount &&
    null !== currentEntangledListeners
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [],
    thenableWithOverride = {
      status: "pending",
      value: null,
      reason: null,
      then: function (resolve) {
        listeners.push(resolve);
      }
    };
  thenable.then(
    function () {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function (error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function (transition, returnValue) {
  "object" === typeof returnValue &&
    null !== returnValue &&
    "function" === typeof returnValue.then &&
    entangleAsyncAction(transition, returnValue);
  null !== prevOnStartTransitionFinish &&
    prevOnStartTransitionFinish(transition, returnValue);
};
var resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
var SuspenseException = Error(formatProdErrorMessage(460)),
  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
  SuspenseActionException = Error(formatProdErrorMessage(542)),
  noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function noop$3() {}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop$3, noop$3), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw (
        ((thenableState = thenable.reason),
        checkIfUseWrappedInAsyncCatch(thenableState),
        thenableState)
      );
    default:
      if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
      else {
        thenableState = workInProgressRoot;
        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
          throw Error(formatProdErrorMessage(482));
        thenableState = thenable;
        thenableState.status = "pending";
        thenableState.then(
          function (fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function (error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw (
            ((thenableState = thenable.reason),
            checkIfUseWrappedInAsyncCatch(thenableState),
            thenableState)
          );
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (
    rejectedReason === SuspenseException ||
    rejectedReason === SuspenseActionException
  )
    throw Error(formatProdErrorMessage(483));
}
var hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
var currentTreeHiddenStackCursor = createCursor(null),
  prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var renderLanes = 0,
  currentlyRenderingFiber = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  localIdCounter = 0,
  thenableIndexCounter$1 = 0,
  thenableState$1 = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactSharedInternals.H =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  nextRenderLanes = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (nextRenderLanes = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter$1 = 0;
  thenableState$1 = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  null === current ||
    didReceiveUpdate ||
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber = workInProgress;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
    thenableIndexCounter$1 = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    if (null != workInProgress.updateQueue) {
      var children = workInProgress.updateQueue;
      children.lastEffect = null;
      children.events = null;
      children.stores = null;
      null != children.memoCache && (children.memoCache.index = 0);
    }
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var dispatcher = ReactSharedInternals.H,
    maybeThenable = dispatcher.useState()[0];
  maybeThenable =
    "function" === typeof maybeThenable.then
      ? useThenable(maybeThenable)
      : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
    (currentlyRenderingFiber.flags |= 1024);
  return maybeThenable;
}
function checkDidRenderIdHook() {
  var didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      var queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter$1 = localIdCounter = 0;
  thenableState$1 = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber.alternate)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
function createFunctionComponentUpdateQueue() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function useThenable(thenable) {
  var index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  thenable = trackUsedThenable(thenableState$1, thenable, index);
  index = currentlyRenderingFiber;
  null ===
    (null === workInProgressHook
      ? index.memoizedState
      : workInProgressHook.next) &&
    ((index = index.alternate),
    (ReactSharedInternals.H =
      null === index || null === index.memoizedState
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate));
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  var memoCache = null,
    updateQueue = currentlyRenderingFiber.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: current.data.map(function (array) {
              return array.slice();
            }),
            index: 0
          })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = current,
      didReadFromEntangledAsyncAction$32 = !1;
    do {
      var updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
            updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$32 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$32 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
            null === newBaseQueueLast
              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
                (baseFirst = pendingQueue))
              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
            (currentlyRenderingFiber.lanes |= revertLane),
            (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
          null === newBaseQueueLast
            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
              (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
          (currentlyRenderingFiber.lanes |= updateLane),
          (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$32 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var fiber = currentlyRenderingFiber,
    hook = updateWorkInProgressHook(),
    isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  var create = subscribeToStore.bind(null, fiber, hook, subscribe);
  updateEffectImpl(2048, 8, create, [subscribe]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushSimpleEffect(
      9,
      createEffectInstance(),
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      null
    );
    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 ||
      0 !== (renderLanes & 124) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    if (shouldDoubleInvokeUserFnsInHooksDEV) {
      setIsStrictModeForDevtools(!0);
      try {
        initialStateInitializer();
      } finally {
        setIsStrictModeForDevtools(!1);
      }
    }
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchActionState(
  fiber,
  actionQueue,
  setPendingState,
  setState,
  payload
) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.action;
  if (null !== fiber) {
    var actionNode = {
      payload: payload,
      action: fiber,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (listener) {
        actionNode.listeners.push(listener);
      }
    };
    null !== ReactSharedInternals.T
      ? setPendingState(!0)
      : (actionNode.isTransition = !1);
    setState(actionNode);
    setPendingState = actionQueue.pending;
    null === setPendingState
      ? ((actionNode.next = actionQueue.pending = actionNode),
        runActionStateAction(actionQueue, actionNode))
      : ((actionNode.next = setPendingState.next),
        (actionQueue.pending = setPendingState.next = actionNode));
  }
}
function runActionStateAction(actionQueue, node) {
  var action = node.action,
    payload = node.payload,
    prevState = actionQueue.state;
  if (node.isTransition) {
    var prevTransition = ReactSharedInternals.T,
      currentTransition = {};
    ReactSharedInternals.T = currentTransition;
    try {
      var returnValue = action(prevState, payload),
        onStartTransitionFinish = ReactSharedInternals.S;
      null !== onStartTransitionFinish &&
        onStartTransitionFinish(currentTransition, returnValue);
      handleActionReturnValue(actionQueue, node, returnValue);
    } catch (error) {
      onActionError(actionQueue, node, error);
    } finally {
      ReactSharedInternals.T = prevTransition;
    }
  } else
    try {
      (prevTransition = action(prevState, payload)),
        handleActionReturnValue(actionQueue, node, prevTransition);
    } catch (error$38) {
      onActionError(actionQueue, node, error$38);
    }
}
function handleActionReturnValue(actionQueue, node, returnValue) {
  null !== returnValue &&
  "object" === typeof returnValue &&
  "function" === typeof returnValue.then
    ? returnValue.then(
        function (nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function (error) {
          return onActionError(actionQueue, node, error);
        }
      )
    : onActionSuccess(actionQueue, node, returnValue);
}
function onActionSuccess(actionQueue, actionNode, nextState) {
  actionNode.status = "fulfilled";
  actionNode.value = nextState;
  notifyActionListeners(actionNode);
  actionQueue.state = nextState;
  actionNode = actionQueue.pending;
  null !== actionNode &&
    ((nextState = actionNode.next),
    nextState === actionNode
      ? (actionQueue.pending = null)
      : ((nextState = nextState.next),
        (actionNode.next = nextState),
        runActionStateAction(actionQueue, nextState)));
}
function onActionError(actionQueue, actionNode, error) {
  var last = actionQueue.pending;
  actionQueue.pending = null;
  if (null !== last) {
    last = last.next;
    do
      (actionNode.status = "rejected"),
        (actionNode.reason = error),
        notifyActionListeners(actionNode),
        (actionNode = actionNode.next);
    while (actionNode !== last);
  }
  actionQueue.action = null;
}
function notifyActionListeners(actionNode) {
  actionNode = actionNode.listeners;
  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        var JSCompiler_inline_result = currentlyRenderingFiber;
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
              for (
                var inRootOrSingleton = rootOrSingletonContext;
                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

              ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                  JSCompiler_inline_result$jscomp$0.nextSibling
                );
                if (null === JSCompiler_inline_result$jscomp$0) {
                  JSCompiler_inline_result$jscomp$0 = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
              JSCompiler_inline_result$jscomp$0 =
                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
                  ? JSCompiler_inline_result$jscomp$0
                  : null;
            }
            if (JSCompiler_inline_result$jscomp$0) {
              nextHydratableInstance = getNextHydratable(
                JSCompiler_inline_result$jscomp$0.nextSibling
              );
              JSCompiler_inline_result =
                "F!" === JSCompiler_inline_result$jscomp$0.data;
              break a;
            }
          }
          throwOnHydrationMismatch(JSCompiler_inline_result);
        }
        JSCompiler_inline_result = !1;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountStateImpl(!1);
  inRootOrSingleton = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    !1,
    JSCompiler_inline_result.queue
  );
  JSCompiler_inline_result = mountWorkInProgressHook();
  JSCompiler_inline_result$jscomp$0 = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
  ssrFormState = dispatchActionState.bind(
    null,
    currentlyRenderingFiber,
    JSCompiler_inline_result$jscomp$0,
    inRootOrSingleton,
    ssrFormState
  );
  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState, !1];
}
function updateActionState(action) {
  var stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  if (
    "object" === typeof currentStateHook &&
    null !== currentStateHook &&
    "function" === typeof currentStateHook.then
  )
    try {
      var state = useThenable(currentStateHook);
    } catch (x) {
      if (x === SuspenseException) throw SuspenseActionException;
      throw x;
    }
  else state = currentStateHook;
  currentStateHook = updateWorkInProgressHook();
  var actionQueue = currentStateHook.queue,
    dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState &&
    ((currentlyRenderingFiber.flags |= 2048),
    pushSimpleEffect(
      9,
      createEffectInstance(),
      actionStateActionEffect.bind(null, actionQueue, action),
      null
    ));
  return [state, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  var stateHook = updateWorkInProgressHook(),
    currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, !1];
}
function pushSimpleEffect(tag, inst, create, createDeps) {
  tag = { tag: tag, create: create, deps: createDeps, inst: inst, next: null };
  inst = currentlyRenderingFiber.updateQueue;
  null === inst &&
    ((inst = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber.updateQueue = inst));
  create = inst.lastEffect;
  null === create
    ? (inst.lastEffect = tag.next = tag)
    : ((createDeps = create.next),
      (create.next = tag),
      (tag.next = createDeps),
      (inst.lastEffect = tag));
  return tag;
}
function createEffectInstance() {
  return { destroy: void 0, resource: void 0 };
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
  var hook = mountWorkInProgressHook();
  createDeps = void 0 === createDeps ? null : createDeps;
  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    1 | hookFlags,
    createEffectInstance(),
    create,
    createDeps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
    : ((currentlyRenderingFiber.flags |= fiberFlags),
      (hook.memoizedState = pushSimpleEffect(
        1 | hookFlags,
        inst,
        create,
        deps
      )));
}
function mountEffect(create, createDeps) {
  mountEffectImpl(8390656, 8, create, createDeps);
}
function updateEffect(create, createDeps) {
  updateEffectImpl(2048, 8, create, createDeps);
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref) {
    create = create();
    var refCleanup = ref(create);
    return function () {
      "function" === typeof refCleanup ? refCleanup() : ref(null);
    };
  }
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  if (shouldDoubleInvokeUserFnsInHooksDEV) {
    setIsStrictModeForDevtools(!0);
    try {
      nextCreate();
    } finally {
      setIsStrictModeForDevtools(!1);
    }
  }
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
    return (hook.memoizedState = value);
  hook.memoizedState = initialValue;
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return initialValue;
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook = mountDeferredValueImpl(hook, value, initialValue)),
      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
      hook
    );
  if (0 === (renderLanes & 42))
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  hook = requestDeferredLane();
  currentlyRenderingFiber.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(fiber, queue, pendingState, finishedState, callback) {
  var previousPriority = ReactDOMSharedInternals.p;
  ReactDOMSharedInternals.p =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  try {
    var returnValue = callback(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    if (
      null !== returnValue &&
      "object" === typeof returnValue &&
      "function" === typeof returnValue.then
    ) {
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetStateInternal(
        fiber,
        queue,
        thenableForFinishedState,
        requestUpdateLane(fiber)
      );
    } else
      dispatchSetStateInternal(
        fiber,
        queue,
        finishedState,
        requestUpdateLane(fiber)
      );
  } catch (error) {
    dispatchSetStateInternal(
      fiber,
      queue,
      { then: function () {}, status: "rejected", reason: error },
      requestUpdateLane()
    );
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function noop$2() {}
function startHostTransition(formFiber, pendingState, action, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  var queue = ensureFormComponentIsStateful(formFiber).queue;
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    null === action
      ? noop$2
      : function () {
          requestFormReset$1(formFiber);
          return action(formData);
        }
  );
}
function ensureFormComponentIsStateful(formFiber) {
  var existingStateHook = formFiber.memoizedState;
  if (null !== existingStateHook) return existingStateHook;
  existingStateHook = {
    memoizedState: sharedNotPendingObject,
    baseState: sharedNotPendingObject,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    },
    next: null
  };
  var initialResetState = {};
  existingStateHook.next = {
    memoizedState: initialResetState,
    baseState: initialResetState,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: initialResetState
    },
    next: null
  };
  formFiber.memoizedState = existingStateHook;
  formFiber = formFiber.alternate;
  null !== formFiber && (formFiber.memoizedState = existingStateHook);
  return existingStateHook;
}
function requestFormReset$1(formFiber) {
  var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
  dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
}
function useHostTransitionStatus() {
  return readContext(HostTransitionContext);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane();
        fiber = createUpdate(lane);
        var root$41 = enqueueUpdate(provider, fiber, lane);
        null !== root$41 &&
          (scheduleUpdateOnFiber(root$41, provider, lane),
          entangleTransitions(root$41, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane();
  action = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
      null !== action &&
        (scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane();
  dispatchSetStateInternal(fiber, queue, action, lane);
}
function dispatchSetStateInternal(fiber, queue, action, lane) {
  var update = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState))
          return (
            enqueueUpdate$1(fiber, queue, update, 0),
            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
            !1
          );
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    if (null !== action)
      return (
        scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane),
        !0
      );
  }
  return !1;
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
      null !== throwIfDuringRender &&
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber ||
    (null !== alternate && alternate === currentlyRenderingFiber)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194048)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
    readContext: readContext,
    use: use,
    useCallback: throwInvalidHookError,
    useContext: throwInvalidHookError,
    useEffect: throwInvalidHookError,
    useImperativeHandle: throwInvalidHookError,
    useLayoutEffect: throwInvalidHookError,
    useInsertionEffect: throwInvalidHookError,
    useMemo: throwInvalidHookError,
    useReducer: throwInvalidHookError,
    useRef: throwInvalidHookError,
    useState: throwInvalidHookError,
    useDebugValue: throwInvalidHookError,
    useDeferredValue: throwInvalidHookError,
    useTransition: throwInvalidHookError,
    useSyncExternalStore: throwInvalidHookError,
    useId: throwInvalidHookError,
    useHostTransitionStatus: throwInvalidHookError,
    useFormState: throwInvalidHookError,
    useActionState: throwInvalidHookError,
    useOptimistic: throwInvalidHookError,
    useMemoCache: throwInvalidHookError,
    useCacheRefresh: throwInvalidHookError
  },
  HooksDispatcherOnMount = {
    readContext: readContext,
    use: use,
    useCallback: function (callback, deps) {
      mountWorkInProgressHook().memoizedState = [
        callback,
        void 0 === deps ? null : deps
      ];
      return callback;
    },
    useContext: readContext,
    useEffect: mountEffect,
    useImperativeHandle: function (ref, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
      mountEffectImpl(
        4194308,
        4,
        imperativeHandleEffect.bind(null, create, ref),
        deps
      );
    },
    useLayoutEffect: function (create, deps) {
      return mountEffectImpl(4194308, 4, create, deps);
    },
    useInsertionEffect: function (create, deps) {
      mountEffectImpl(4, 2, create, deps);
    },
    useMemo: function (nextCreate, deps) {
      var hook = mountWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var nextValue = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(!0);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(!1);
        }
      }
      hook.memoizedState = [nextValue, deps];
      return nextValue;
    },
    useReducer: function (reducer, initialArg, init) {
      var hook = mountWorkInProgressHook();
      if (void 0 !== init) {
        var initialState = init(initialArg);
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(!0);
          try {
            init(initialArg);
          } finally {
            setIsStrictModeForDevtools(!1);
          }
        }
      } else initialState = initialArg;
      hook.memoizedState = hook.baseState = initialState;
      reducer = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: reducer,
        lastRenderedState: initialState
      };
      hook.queue = reducer;
      reducer = reducer.dispatch = dispatchReducerAction.bind(
        null,
        currentlyRenderingFiber,
        reducer
      );
      return [hook.memoizedState, reducer];
    },
    useRef: function (initialValue) {
      var hook = mountWorkInProgressHook();
      initialValue = { current: initialValue };
      return (hook.memoizedState = initialValue);
    },
    useState: function (initialState) {
      initialState = mountStateImpl(initialState);
      var queue = initialState.queue,
        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
      queue.dispatch = dispatch;
      return [initialState.memoizedState, dispatch];
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = mountWorkInProgressHook();
      return mountDeferredValueImpl(hook, value, initialValue);
    },
    useTransition: function () {
      var stateHook = mountStateImpl(!1);
      stateHook = startTransition.bind(
        null,
        currentlyRenderingFiber,
        stateHook.queue,
        !0,
        !1
      );
      mountWorkInProgressHook().memoizedState = stateHook;
      return [!1, stateHook];
    },
    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber,
        hook = mountWorkInProgressHook();
      if (isHydrating) {
        if (void 0 === getServerSnapshot)
          throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else {
        getServerSnapshot = getSnapshot();
        if (null === workInProgressRoot)
          throw Error(formatProdErrorMessage(349));
        0 !== (workInProgressRootRenderLanes & 124) ||
          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      hook.memoizedState = getServerSnapshot;
      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
      hook.queue = inst;
      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
        subscribe
      ]);
      fiber.flags |= 2048;
      pushSimpleEffect(
        9,
        createEffectInstance(),
        updateStoreInstance.bind(
          null,
          fiber,
          inst,
          getServerSnapshot,
          getSnapshot
        ),
        null
      );
      return getServerSnapshot;
    },
    useId: function () {
      var hook = mountWorkInProgressHook(),
        identifierPrefix = workInProgressRoot.identifierPrefix;
      if (isHydrating) {
        var JSCompiler_inline_result = treeContextOverflow;
        var idWithLeadingBit = treeContextId;
        JSCompiler_inline_result =
          (
            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
          ).toString(32) + JSCompiler_inline_result;
        identifierPrefix =
          "\u00ab" + identifierPrefix + "R" + JSCompiler_inline_result;
        JSCompiler_inline_result = localIdCounter++;
        0 < JSCompiler_inline_result &&
          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
        identifierPrefix += "\u00bb";
      } else
        (JSCompiler_inline_result = globalClientIdCounter++),
          (identifierPrefix =
            "\u00ab" +
            identifierPrefix +
            "r" +
            JSCompiler_inline_result.toString(32) +
            "\u00bb");
      return (hook.memoizedState = identifierPrefix);
    },
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: mountActionState,
    useActionState: mountActionState,
    useOptimistic: function (passthrough) {
      var hook = mountWorkInProgressHook();
      hook.memoizedState = hook.baseState = passthrough;
      var queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      hook.queue = queue;
      hook = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber,
        !0,
        queue
      );
      queue.dispatch = hook;
      return [passthrough, hook];
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: function () {
      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
        null,
        currentlyRenderingFiber
      ));
    }
  },
  HooksDispatcherOnUpdate = {
    readContext: readContext,
    use: use,
    useCallback: updateCallback,
    useContext: readContext,
    useEffect: updateEffect,
    useImperativeHandle: updateImperativeHandle,
    useInsertionEffect: updateInsertionEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: updateReducer,
    useRef: updateRef,
    useState: function () {
      return updateReducer(basicStateReducer);
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = updateWorkInProgressHook();
      return updateDeferredValueImpl(
        hook,
        currentHook.memoizedState,
        value,
        initialValue
      );
    },
    useTransition: function () {
      var booleanOrThenable = updateReducer(basicStateReducer)[0],
        start = updateWorkInProgressHook().memoizedState;
      return [
        "boolean" === typeof booleanOrThenable
          ? booleanOrThenable
          : useThenable(booleanOrThenable),
        start
      ];
    },
    useSyncExternalStore: updateSyncExternalStore,
    useId: updateId,
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: updateActionState,
    useActionState: updateActionState,
    useOptimistic: function (passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: updateRefresh
  },
  HooksDispatcherOnRerender = {
    readContext: readContext,
    use: use,
    useCallback: updateCallback,
    useContext: readContext,
    useEffect: updateEffect,
    useImperativeHandle: updateImperativeHandle,
    useInsertionEffect: updateInsertionEffect,
    useLayoutEffect: updateLayoutEffect,
    useMemo: updateMemo,
    useReducer: rerenderReducer,
    useRef: updateRef,
    useState: function () {
      return rerenderReducer(basicStateReducer);
    },
    useDebugValue: mountDebugValue,
    useDeferredValue: function (value, initialValue) {
      var hook = updateWorkInProgressHook();
      return null === currentHook
        ? mountDeferredValueImpl(hook, value, initialValue)
        : updateDeferredValueImpl(
            hook,
            currentHook.memoizedState,
            value,
            initialValue
          );
    },
    useTransition: function () {
      var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
        start = updateWorkInProgressHook().memoizedState;
      return [
        "boolean" === typeof booleanOrThenable
          ? booleanOrThenable
          : useThenable(booleanOrThenable),
        start
      ];
    },
    useSyncExternalStore: updateSyncExternalStore,
    useId: updateId,
    useHostTransitionStatus: useHostTransitionStatus,
    useFormState: rerenderActionState,
    useActionState: rerenderActionState,
    useOptimistic: function (passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      if (null !== currentHook)
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      hook.baseState = passthrough;
      return [passthrough, hook.queue.dispatch];
    },
    useMemoCache: useMemoCache,
    useCacheRefresh: updateRefresh
  },
  thenableState = null,
  thenableIndexCounter = 0;
function unwrapThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  return trackUsedThenable(thenableState, thenable, index);
}
function coerceRef(workInProgress, element) {
  element = element.props.ref;
  workInProgress.ref = void 0 !== element ? element : null;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(formatProdErrorMessage(525));
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      "[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber
    )
  );
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
        : existingChildren.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 67108866;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 67108866);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (current = useFiber(current, element.props)),
        coerceRef(current, element),
        (current.return = returnFiber),
        current
      );
    current = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(current, element);
    current.return = returnFiber;
    return current;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(lanes, newChild),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return createChild(returnFiber, newChild, lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            (newChild = key(newChild._payload)),
            updateSlot(returnFiber, oldFiber, newChild, lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            newChild,
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    if (null == newChildren) throw Error(formatProdErrorMessage(151));
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildren.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildren.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildren.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (resultingFirstChild = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      !step.done;
      newIdx++, step = newChildren.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (resultingFirstChild = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (var key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === currentFirstChild.tag) {
                    deleteRemainingChildren(
                      returnFiber,
                      currentFirstChild.sibling
                    );
                    lanes = useFiber(
                      currentFirstChild,
                      newChild.props.children
                    );
                    lanes.return = returnFiber;
                    returnFiber = lanes;
                    break a;
                  }
                } else if (
                  currentFirstChild.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === currentFirstChild.type)
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.props);
                  coerceRef(lanes, newChild);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                }
                deleteRemainingChildren(returnFiber, currentFirstChild);
                break;
              } else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (lanes.return = returnFiber),
                (returnFiber = lanes))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                coerceRef(lanes, newChild),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (key = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === key)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  lanes = useFiber(currentFirstChild, newChild.children || []);
                  lanes.return = returnFiber;
                  returnFiber = lanes;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
            lanes.return = returnFiber;
            returnFiber = lanes;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            (newChild = key(newChild._payload)),
            reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        key = getIteratorFn(newChild);
        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
        newChild = key.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (lanes = useFiber(currentFirstChild, newChild)),
            (lanes.return = returnFiber),
            (returnFiber = lanes))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
            (lanes.return = returnFiber),
            (returnFiber = lanes)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    try {
      thenableIndexCounter = 0;
      var firstChildFiber = reconcileChildFibersImpl(
        returnFiber,
        currentFirstChild,
        newChild,
        lanes
      );
      thenableState = null;
      return firstChildFiber;
    } catch (x) {
      if (x === SuspenseException || x === SuspenseActionException) throw x;
      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
      fiber.lanes = lanes;
      fiber.return = returnFiber;
      return fiber;
    } finally {
    }
  };
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary &&
    (null === current || null !== currentTreeHiddenStackCursor.current
      ? (shellBoundary = handler)
      : null !== current.memoizedState && (shellBoundary = handler));
}
function pushOffscreenSuspenseHandler(fiber) {
  if (22 === fiber.tag) {
    if (
      (push(suspenseStackCursor, suspenseStackCursor.current),
      push(suspenseHandlerStackCursor, fiber),
      null === shellBoundary)
    ) {
      var current = fiber.alternate;
      null !== current &&
        null !== current.memoizedState &&
        (shellBoundary = fiber);
    }
  } else reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        null === state ||
          "$?" === state.data ||
          isSuspenseInstanceFallback(state))
      )
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(),
      update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
      : !0;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function resolveClassComponentProps(Component, baseProps) {
  var newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (var propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if ((Component = Component.defaultProps)) {
    newProps === baseProps && (newProps = assign({}, newProps));
    for (var propName$73 in Component)
      void 0 === newProps[propName$73] &&
        (newProps[propName$73] = Component[propName$73]);
  }
  return newProps;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root, errorInfo) {
  try {
    var onUncaughtError = root.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e$74) {
    setTimeout(function () {
      throw e$74;
    });
  }
}
function logCaughtError(root, boundary, errorInfo) {
  try {
    var onCaughtError = root.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
    });
  } catch (e$75) {
    setTimeout(function () {
      throw e$75;
    });
  }
}
function createRootErrorUpdate(root, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function () {
    logUncaughtError(root, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromError(error);
    };
    update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  if (
    null !== value &&
    "object" === typeof value &&
    "function" === typeof value.then
  ) {
    returnFiber = sourceFiber.alternate;
    null !== returnFiber &&
      propagateParentContextChanges(
        returnFiber,
        sourceFiber,
        rootRenderLanes,
        !0
      );
    sourceFiber = suspenseHandlerStackCursor.current;
    if (null !== sourceFiber) {
      switch (sourceFiber.tag) {
        case 13:
          return (
            null === shellBoundary
              ? renderDidSuspendDelayIfPossible()
              : null === sourceFiber.alternate &&
                0 === workInProgressRootExitStatus &&
                (workInProgressRootExitStatus = 3),
            (sourceFiber.flags &= -257),
            (sourceFiber.flags |= 65536),
            (sourceFiber.lanes = rootRenderLanes),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? (sourceFiber.updateQueue = new Set([value]))
                  : returnFiber.add(value),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
        case 22:
          return (
            (sourceFiber.flags |= 65536),
            value === noopSuspenseyCommitThenable
              ? (sourceFiber.flags |= 16384)
              : ((returnFiber = sourceFiber.updateQueue),
                null === returnFiber
                  ? ((returnFiber = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([value])
                    }),
                    (sourceFiber.updateQueue = returnFiber))
                  : ((sourceFiber = returnFiber.retryQueue),
                    null === sourceFiber
                      ? (returnFiber.retryQueue = new Set([value]))
                      : sourceFiber.add(value)),
                attachPingListener(root, value, rootRenderLanes)),
            !1
          );
      }
      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
    }
    attachPingListener(root, value, rootRenderLanes);
    renderDidSuspendDelayIfPossible();
    return !1;
  }
  if (isHydrating)
    return (
      (returnFiber = suspenseHandlerStackCursor.current),
      null !== returnFiber
        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
          (returnFiber.flags |= 65536),
          (returnFiber.lanes = rootRenderLanes),
          value !== HydrationMismatchException &&
            ((root = Error(formatProdErrorMessage(422), { cause: value })),
            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
        : (value !== HydrationMismatchException &&
            ((returnFiber = Error(formatProdErrorMessage(423), {
              cause: value
            })),
            queueHydrationError(
              createCapturedValueAtFiber(returnFiber, sourceFiber)
            )),
          (root = root.current.alternate),
          (root.flags |= 65536),
          (rootRenderLanes &= -rootRenderLanes),
          (root.lanes |= rootRenderLanes),
          (value = createCapturedValueAtFiber(value, sourceFiber)),
          (rootRenderLanes = createRootErrorUpdate(
            root.stateNode,
            value,
            rootRenderLanes
          )),
          enqueueCapturedUpdate(root, rootRenderLanes),
          4 !== workInProgressRootExitStatus &&
            (workInProgressRootExitStatus = 2)),
      !1
    );
  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
  null === workInProgressRootConcurrentErrors
    ? (workInProgressRootConcurrentErrors = [wrapperError])
    : workInProgressRootConcurrentErrors.push(wrapperError);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (null === returnFiber) return !0;
  value = createCapturedValueAtFiber(value, sourceFiber);
  sourceFiber = returnFiber;
  do {
    switch (sourceFiber.tag) {
      case 3:
        return (
          (sourceFiber.flags |= 65536),
          (root = rootRenderLanes & -rootRenderLanes),
          (sourceFiber.lanes |= root),
          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
          enqueueCapturedUpdate(sourceFiber, root),
          !1
        );
      case 1:
        if (
          ((returnFiber = sourceFiber.type),
          (wrapperError = sourceFiber.stateNode),
          0 === (sourceFiber.flags & 128) &&
            ("function" === typeof returnFiber.getDerivedStateFromError ||
              (null !== wrapperError &&
                "function" === typeof wrapperError.componentDidCatch &&
                (null === legacyErrorBoundariesThatAlreadyFailed ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
        )
          return (
            (sourceFiber.flags |= 65536),
            (rootRenderLanes &= -rootRenderLanes),
            (sourceFiber.lanes |= rootRenderLanes),
            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
            initializeClassErrorUpdate(
              rootRenderLanes,
              root,
              sourceFiber,
              value
            ),
            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
            !1
          );
    }
    sourceFiber = sourceFiber.return;
  } while (null !== sourceFiber);
  return !1;
}
var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    propsWithoutRef,
    ref,
    renderLanes
  );
  key = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && key && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        checkScheduledUpdateOrContext(current, renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    prevState = null !== current ? current.memoizedState : null;
  if ("hidden" === nextProps.mode) {
    if (0 !== (workInProgress.flags & 128)) {
      nextProps =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        nextChildren = workInProgress.child = current.child;
        for (prevState = 0; null !== nextChildren; )
          (prevState =
            prevState | nextChildren.lanes | nextChildren.childLanes),
            (nextChildren = nextChildren.sibling);
        workInProgress.childLanes = prevState & ~nextProps;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        nextProps,
        renderLanes
      );
    }
    if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
          renderLanes
        )
      );
  } else
    null !== prevState
      ? (pushTransition(workInProgress, prevState.cachePool),
        pushHiddenContext(workInProgress, prevState),
        reuseSuspenseHandlerOnStack(workInProgress),
        (workInProgress.memoizedState = null))
      : (null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        reuseSuspenseHandlerOnStack(workInProgress));
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function deferHiddenOffscreenComponent(
  current,
  workInProgress,
  nextBaseLanes,
  renderLanes
) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  null !== current &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
  return null;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (null === ref)
    null !== current &&
      null !== current.ref &&
      (workInProgress.flags |= 4194816);
  else {
    if ("function" !== typeof ref && "object" !== typeof ref)
      throw Error(formatProdErrorMessage(284));
    if (null === current || current.ref !== ref)
      workInProgress.flags |= 4194816;
  }
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    void 0,
    renderLanes
  );
  nextProps = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  workInProgress.updateQueue = null;
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component = checkDidRenderIdHook();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  prepareToReadContext(workInProgress);
  if (null === workInProgress.stateNode) {
    var context = emptyContextObject,
      contextType = Component.contextType;
    "object" === typeof contextType &&
      null !== contextType &&
      (context = readContext(contextType));
    context = new Component(nextProps, context);
    workInProgress.memoizedState =
      null !== context.state && void 0 !== context.state ? context.state : null;
    context.updater = classComponentUpdater;
    workInProgress.stateNode = context;
    context._reactInternals = workInProgress;
    context = workInProgress.stateNode;
    context.props = nextProps;
    context.state = workInProgress.memoizedState;
    context.refs = {};
    initializeUpdateQueue(workInProgress);
    contextType = Component.contextType;
    context.context =
      "object" === typeof contextType && null !== contextType
        ? readContext(contextType)
        : emptyContextObject;
    context.state = workInProgress.memoizedState;
    contextType = Component.getDerivedStateFromProps;
    "function" === typeof contextType &&
      (applyDerivedStateFromProps(
        workInProgress,
        Component,
        contextType,
        nextProps
      ),
      (context.state = workInProgress.memoizedState));
    "function" === typeof Component.getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate ||
      ("function" !== typeof context.UNSAFE_componentWillMount &&
        "function" !== typeof context.componentWillMount) ||
      ((contextType = context.state),
      "function" === typeof context.componentWillMount &&
        context.componentWillMount(),
      "function" === typeof context.UNSAFE_componentWillMount &&
        context.UNSAFE_componentWillMount(),
      contextType !== context.state &&
        classComponentUpdater.enqueueReplaceState(context, context.state, null),
      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
      suspendIfUpdateReadFromEntangledAsyncAction(),
      (context.state = workInProgress.memoizedState));
    "function" === typeof context.componentDidMount &&
      (workInProgress.flags |= 4194308);
    nextProps = !0;
  } else if (null === current) {
    context = workInProgress.stateNode;
    var unresolvedOldProps = workInProgress.memoizedProps,
      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
    context.props = oldProps;
    var oldContext = context.context,
      contextType$jscomp$0 = Component.contextType;
    contextType = emptyContextObject;
    "object" === typeof contextType$jscomp$0 &&
      null !== contextType$jscomp$0 &&
      (contextType = readContext(contextType$jscomp$0));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
    contextType$jscomp$0 =
      "function" === typeof getDerivedStateFromProps ||
      "function" === typeof context.getSnapshotBeforeUpdate;
    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
    contextType$jscomp$0 ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((unresolvedOldProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (contextType$jscomp$0 ||
              ("function" !== typeof context.UNSAFE_componentWillMount &&
                "function" !== typeof context.componentWillMount) ||
              ("function" === typeof context.componentWillMount &&
                context.componentWillMount(),
              "function" === typeof context.UNSAFE_componentWillMount &&
                context.UNSAFE_componentWillMount()),
            "function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof context.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (context.props = nextProps),
        (context.state = oldContext),
        (context.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof context.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    context = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    contextType = workInProgress.memoizedProps;
    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
    context.props = contextType$jscomp$0;
    getDerivedStateFromProps = workInProgress.pendingProps;
    oldState = context.context;
    oldContext = Component.contextType;
    oldProps = emptyContextObject;
    "object" === typeof oldContext &&
      null !== oldContext &&
      (oldProps = readContext(oldContext));
    unresolvedOldProps = Component.getDerivedStateFromProps;
    (oldContext =
      "function" === typeof unresolvedOldProps ||
      "function" === typeof context.getSnapshotBeforeUpdate) ||
      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof context.componentWillReceiveProps) ||
      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
        callComponentWillReceiveProps(
          workInProgress,
          context,
          nextProps,
          oldProps
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    context.state = oldState;
    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress.memoizedState;
    contextType !== getDerivedStateFromProps ||
    oldState !== newState ||
    hasForceUpdate ||
    (null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? ("function" === typeof unresolvedOldProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            unresolvedOldProps,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType$jscomp$0 =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType$jscomp$0,
            nextProps,
            oldState,
            newState,
            oldProps
          ) ||
          (null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
          ? (oldContext ||
              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
                "function" !== typeof context.componentWillUpdate) ||
              ("function" === typeof context.componentWillUpdate &&
                context.componentWillUpdate(nextProps, newState, oldProps),
              "function" === typeof context.UNSAFE_componentWillUpdate &&
                context.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldProps
                )),
            "function" === typeof context.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof context.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof context.componentDidUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof context.getSnapshotBeforeUpdate ||
              (contextType === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (context.props = nextProps),
        (context.state = newState),
        (context.context = oldProps),
        (nextProps = contextType$jscomp$0))
      : ("function" !== typeof context.componentDidUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof context.getSnapshotBeforeUpdate ||
          (contextType === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  context = nextProps;
  markRef(current, workInProgress);
  nextProps = 0 !== (workInProgress.flags & 128);
  context || nextProps
    ? ((context = workInProgress.stateNode),
      (Component =
        nextProps && "function" !== typeof Component.getDerivedStateFromError
          ? null
          : context.render()),
      (workInProgress.flags |= 1),
      null !== current && nextProps
        ? ((workInProgress.child = reconcileChildFibers(
            workInProgress,
            current.child,
            null,
            renderLanes
          )),
          (workInProgress.child = reconcileChildFibers(
            workInProgress,
            null,
            Component,
            renderLanes
          )))
        : reconcileChildren(current, workInProgress, Component, renderLanes),
      (workInProgress.memoizedState = context.state),
      (current = workInProgress.child))
    : (current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress,
        renderLanes
      ));
  return current;
}
function mountHostRootWithoutHydrating(
  current,
  workInProgress,
  nextChildren,
  renderLanes
) {
  resetHydrationState();
  workInProgress.flags |= 256;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
var SUSPENDED_MARKER = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null
};
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (null === current) {
    if (isHydrating) {
      showFallback
        ? pushPrimaryTreeSuspenseHandler(workInProgress)
        : reuseSuspenseHandlerOnStack(workInProgress);
      if (isHydrating) {
        var nextInstance = nextHydratableInstance,
          JSCompiler_temp$jscomp$0;
        if ((JSCompiler_temp$jscomp$0 = nextInstance)) {
          c: {
            JSCompiler_temp$jscomp$0 = nextInstance;
            for (
              nextInstance = rootOrSingletonContext;
              8 !== JSCompiler_temp$jscomp$0.nodeType;

            ) {
              if (!nextInstance) {
                nextInstance = null;
                break c;
              }
              JSCompiler_temp$jscomp$0 = getNextHydratable(
                JSCompiler_temp$jscomp$0.nextSibling
              );
              if (null === JSCompiler_temp$jscomp$0) {
                nextInstance = null;
                break c;
              }
            }
            nextInstance = JSCompiler_temp$jscomp$0;
          }
          null !== nextInstance
            ? ((workInProgress.memoizedState = {
                dehydrated: nextInstance,
                treeContext:
                  null !== treeContextProvider
                    ? { id: treeContextId, overflow: treeContextOverflow }
                    : null,
                retryLane: 536870912,
                hydrationErrors: null
              }),
              (JSCompiler_temp$jscomp$0 = createFiberImplClass(
                18,
                null,
                null,
                0
              )),
              (JSCompiler_temp$jscomp$0.stateNode = nextInstance),
              (JSCompiler_temp$jscomp$0.return = workInProgress),
              (workInProgress.child = JSCompiler_temp$jscomp$0),
              (hydrationParentFiber = workInProgress),
              (nextHydratableInstance = null),
              (JSCompiler_temp$jscomp$0 = !0))
            : (JSCompiler_temp$jscomp$0 = !1);
        }
        JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress);
      }
      nextInstance = workInProgress.memoizedState;
      if (
        null !== nextInstance &&
        ((nextInstance = nextInstance.dehydrated), null !== nextInstance)
      )
        return (
          isSuspenseInstanceFallback(nextInstance)
            ? (workInProgress.lanes = 32)
            : (workInProgress.lanes = 536870912),
          null
        );
      popSuspenseHandler(workInProgress);
    }
    nextInstance = nextProps.children;
    nextProps = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (showFallback = workInProgress.mode),
        (nextInstance = mountWorkInProgressOffscreenFiber(
          { mode: "hidden", children: nextInstance },
          showFallback
        )),
        (nextProps = createFiberFromFragment(
          nextProps,
          showFallback,
          renderLanes,
          null
        )),
        (nextInstance.return = workInProgress),
        (nextProps.return = workInProgress),
        (nextInstance.sibling = nextProps),
        (workInProgress.child = nextInstance),
        (showFallback = workInProgress.child),
        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        nextProps
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, nextInstance);
  }
  JSCompiler_temp$jscomp$0 = current.memoizedState;
  if (
    null !== JSCompiler_temp$jscomp$0 &&
    ((nextInstance = JSCompiler_temp$jscomp$0.dehydrated),
    null !== nextInstance)
  ) {
    if (didSuspend)
      workInProgress.flags & 256
        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
          (workInProgress.flags &= -257),
          (workInProgress = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress,
            renderLanes
          )))
        : null !== workInProgress.memoizedState
          ? (reuseSuspenseHandlerOnStack(workInProgress),
            (workInProgress.child = current.child),
            (workInProgress.flags |= 128),
            (workInProgress = null))
          : (reuseSuspenseHandlerOnStack(workInProgress),
            (showFallback = nextProps.fallback),
            (nextInstance = workInProgress.mode),
            (nextProps = mountWorkInProgressOffscreenFiber(
              { mode: "visible", children: nextProps.children },
              nextInstance
            )),
            (showFallback = createFiberFromFragment(
              showFallback,
              nextInstance,
              renderLanes,
              null
            )),
            (showFallback.flags |= 2),
            (nextProps.return = workInProgress),
            (showFallback.return = workInProgress),
            (nextProps.sibling = showFallback),
            (workInProgress.child = nextProps),
            reconcileChildFibers(
              workInProgress,
              current.child,
              null,
              renderLanes
            ),
            (nextProps = workInProgress.child),
            (nextProps.memoizedState =
              mountSuspenseOffscreenState(renderLanes)),
            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
              current,
              JSCompiler_temp,
              renderLanes
            )),
            (workInProgress.memoizedState = SUSPENDED_MARKER),
            (workInProgress = showFallback));
    else if (
      (pushPrimaryTreeSuspenseHandler(workInProgress),
      isSuspenseInstanceFallback(nextInstance))
    ) {
      JSCompiler_temp =
        nextInstance.nextSibling && nextInstance.nextSibling.dataset;
      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
      JSCompiler_temp = digest;
      nextProps = Error(formatProdErrorMessage(419));
      nextProps.stack = "";
      nextProps.digest = JSCompiler_temp;
      queueHydrationError({ value: nextProps, source: null, stack: null });
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else if (
      (didReceiveUpdate ||
        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || JSCompiler_temp)
    ) {
      JSCompiler_temp = workInProgressRoot;
      if (
        null !== JSCompiler_temp &&
        ((nextProps = renderLanes & -renderLanes),
        (nextProps =
          0 !== (nextProps & 42)
            ? 1
            : getBumpedLaneForHydrationByLane(nextProps)),
        (nextProps =
          0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes))
            ? 0
            : nextProps),
        0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
      )
        throw (
          ((JSCompiler_temp$jscomp$0.retryLane = nextProps),
          enqueueConcurrentRenderForLane(current, nextProps),
          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
          SelectiveHydrationException)
        );
      "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      "$?" === nextInstance.data
        ? ((workInProgress.flags |= 192),
          (workInProgress.child = current.child),
          (workInProgress = null))
        : ((current = JSCompiler_temp$jscomp$0.treeContext),
          (nextHydratableInstance = getNextHydratable(
            nextInstance.nextSibling
          )),
          (hydrationParentFiber = workInProgress),
          (isHydrating = !0),
          (hydrationErrors = null),
          (rootOrSingletonContext = !1),
          null !== current &&
            ((idStack[idStackIndex++] = treeContextId),
            (idStack[idStackIndex++] = treeContextOverflow),
            (idStack[idStackIndex++] = treeContextProvider),
            (treeContextId = current.id),
            (treeContextOverflow = current.overflow),
            (treeContextProvider = workInProgress)),
          (workInProgress = mountSuspensePrimaryChildren(
            workInProgress,
            nextProps.children
          )),
          (workInProgress.flags |= 4096));
    return workInProgress;
  }
  if (showFallback)
    return (
      reuseSuspenseHandlerOnStack(workInProgress),
      (showFallback = nextProps.fallback),
      (nextInstance = workInProgress.mode),
      (JSCompiler_temp$jscomp$0 = current.child),
      (digest = JSCompiler_temp$jscomp$0.sibling),
      (nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
        mode: "hidden",
        children: nextProps.children
      })),
      (nextProps.subtreeFlags =
        JSCompiler_temp$jscomp$0.subtreeFlags & 65011712),
      null !== digest
        ? (showFallback = createWorkInProgress(digest, showFallback))
        : ((showFallback = createFiberFromFragment(
            showFallback,
            nextInstance,
            renderLanes,
            null
          )),
          (showFallback.flags |= 2)),
      (showFallback.return = workInProgress),
      (nextProps.return = workInProgress),
      (nextProps.sibling = showFallback),
      (workInProgress.child = nextProps),
      (nextProps = showFallback),
      (showFallback = workInProgress.child),
      (nextInstance = current.child.memoizedState),
      null === nextInstance
        ? (nextInstance = mountSuspenseOffscreenState(renderLanes))
        : ((JSCompiler_temp$jscomp$0 = nextInstance.cachePool),
          null !== JSCompiler_temp$jscomp$0
            ? ((digest = CacheContext._currentValue),
              (JSCompiler_temp$jscomp$0 =
                JSCompiler_temp$jscomp$0.parent !== digest
                  ? { parent: digest, pool: digest }
                  : JSCompiler_temp$jscomp$0))
            : (JSCompiler_temp$jscomp$0 = getSuspendedCache()),
          (nextInstance = {
            baseLanes: nextInstance.baseLanes | renderLanes,
            cachePool: JSCompiler_temp$jscomp$0
          })),
      (showFallback.memoizedState = nextInstance),
      (showFallback.childLanes = getRemainingWorkInPrimaryTree(
        current,
        JSCompiler_temp,
        renderLanes
      )),
      (workInProgress.memoizedState = SUSPENDED_MARKER),
      nextProps
    );
  pushPrimaryTreeSuspenseHandler(workInProgress);
  renderLanes = current.child;
  current = renderLanes.sibling;
  renderLanes = createWorkInProgress(renderLanes, {
    mode: "visible",
    children: nextProps.children
  });
  renderLanes.return = workInProgress;
  renderLanes.sibling = null;
  null !== current &&
    ((JSCompiler_temp = workInProgress.deletions),
    null === JSCompiler_temp
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : JSCompiler_temp.push(current));
  workInProgress.child = renderLanes;
  workInProgress.memoizedState = null;
  return renderLanes;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = mountWorkInProgressOffscreenFiber(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
  offscreenProps.lanes = 0;
  offscreenProps.stateNode = {
    _visibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null
  };
  return offscreenProps;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (19 === current.tag)
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  switch (revealOrder) {
    case "forwards":
      renderLanes = workInProgress.child;
      for (revealOrder = null; null !== renderLanes; )
        (current = renderLanes.alternate),
          null !== current &&
            null === findFirstSuspended(current) &&
            (revealOrder = renderLanes),
          (renderLanes = renderLanes.sibling);
      renderLanes = revealOrder;
      null === renderLanes
        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
      initSuspenseListRenderState(
        workInProgress,
        !1,
        revealOrder,
        renderLanes,
        tailMode
      );
      break;
    case "backwards":
      renderLanes = null;
      revealOrder = workInProgress.child;
      for (workInProgress.child = null; null !== revealOrder; ) {
        current = revealOrder.alternate;
        if (null !== current && null === findFirstSuspended(current)) {
          workInProgress.child = revealOrder;
          break;
        }
        current = revealOrder.sibling;
        revealOrder.sibling = renderLanes;
        renderLanes = revealOrder;
        revealOrder = current;
      }
      initSuspenseListRenderState(
        workInProgress,
        !0,
        renderLanes,
        null,
        tailMode
      );
      break;
    case "together":
      initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
      break;
    default:
      workInProgress.memoizedState = null;
  }
  return workInProgress.child;
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes))
    if (null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        0 === (renderLanes & workInProgress.childLanes))
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function checkScheduledUpdateOrContext(current, renderLanes) {
  if (0 !== (current.lanes & renderLanes)) return !0;
  current = current.dependencies;
  return null !== current && checkIfContextChanged(current) ? !0 : !1;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      resetHydrationState();
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        workInProgress.type,
        workInProgress.memoizedProps.value
      );
      break;
    case 13:
      var state = workInProgress.memoizedState;
      if (null !== state) {
        if (null !== state.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      var didSuspendBefore = 0 !== (current.flags & 128);
      state = 0 !== (renderLanes & workInProgress.childLanes);
      state ||
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (state = 0 !== (renderLanes & workInProgress.childLanes)));
      if (didSuspendBefore) {
        if (state)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      didSuspendBefore = workInProgress.memoizedState;
      null !== didSuspendBefore &&
        ((didSuspendBefore.rendering = null),
        (didSuspendBefore.tail = null),
        (didSuspendBefore.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (state) break;
      else return null;
    case 22:
    case 23:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(current, workInProgress, renderLanes)
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
function beginWork(current, workInProgress, renderLanes) {
  if (null !== current)
    if (current.memoizedProps !== workInProgress.pendingProps)
      didReceiveUpdate = !0;
    else {
      if (
        !checkScheduledUpdateOrContext(current, renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else
    (didReceiveUpdate = !1),
      isHydrating &&
        0 !== (workInProgress.flags & 1048576) &&
        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 16:
      a: {
        current = workInProgress.pendingProps;
        var lazyComponent = workInProgress.elementType,
          init = lazyComponent._init;
        lazyComponent = init(lazyComponent._payload);
        workInProgress.type = lazyComponent;
        if ("function" === typeof lazyComponent)
          shouldConstruct(lazyComponent)
            ? ((current = resolveClassComponentProps(lazyComponent, current)),
              (workInProgress.tag = 1),
              (workInProgress = updateClassComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              )))
            : ((workInProgress.tag = 0),
              (workInProgress = updateFunctionComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              )));
        else {
          if (void 0 !== lazyComponent && null !== lazyComponent)
            if (
              ((init = lazyComponent.$$typeof), init === REACT_FORWARD_REF_TYPE)
            ) {
              workInProgress.tag = 11;
              workInProgress = updateForwardRef(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              );
              break a;
            } else if (init === REACT_MEMO_TYPE) {
              workInProgress.tag = 14;
              workInProgress = updateMemoComponent(
                null,
                workInProgress,
                lazyComponent,
                current,
                renderLanes
              );
              break a;
            }
          workInProgress =
            getComponentNameFromType(lazyComponent) || lazyComponent;
          throw Error(formatProdErrorMessage(306, workInProgress, ""));
        }
      }
      return workInProgress;
    case 0:
      return updateFunctionComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 1:
      return (
        (lazyComponent = workInProgress.type),
        (init = resolveClassComponentProps(
          lazyComponent,
          workInProgress.pendingProps
        )),
        updateClassComponent(
          current,
          workInProgress,
          lazyComponent,
          init,
          renderLanes
        )
      );
    case 3:
      a: {
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        );
        if (null === current) throw Error(formatProdErrorMessage(387));
        lazyComponent = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        init = prevState.element;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, lazyComponent, null, renderLanes);
        var nextState = workInProgress.memoizedState;
        lazyComponent = nextState.cache;
        pushProvider(workInProgress, CacheContext, lazyComponent);
        lazyComponent !== prevState.cache &&
          propagateContextChanges(
            workInProgress,
            [CacheContext],
            renderLanes,
            !0
          );
        suspendIfUpdateReadFromEntangledAsyncAction();
        lazyComponent = nextState.element;
        if (prevState.isDehydrated)
          if (
            ((prevState = {
              element: lazyComponent,
              isDehydrated: !1,
              cache: nextState.cache
            }),
            (workInProgress.updateQueue.baseState = prevState),
            (workInProgress.memoizedState = prevState),
            workInProgress.flags & 256)
          ) {
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            );
            break a;
          } else if (lazyComponent !== init) {
            init = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(424)),
              workInProgress
            );
            queueHydrationError(init);
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            );
            break a;
          } else {
            current = workInProgress.stateNode.containerInfo;
            switch (current.nodeType) {
              case 9:
                current = current.body;
                break;
              default:
                current =
                  "HTML" === current.nodeName
                    ? current.ownerDocument.body
                    : current;
            }
            nextHydratableInstance = getNextHydratable(current.firstChild);
            hydrationParentFiber = workInProgress;
            isHydrating = !0;
            hydrationErrors = null;
            rootOrSingletonContext = !0;
            renderLanes = mountChildFibers(
              workInProgress,
              null,
              lazyComponent,
              renderLanes
            );
            for (workInProgress.child = renderLanes; renderLanes; )
              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
                (renderLanes = renderLanes.sibling);
          }
        else {
          resetHydrationState();
          if (lazyComponent === init) {
            workInProgress = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress,
              renderLanes
            );
            break a;
          }
          reconcileChildren(
            current,
            workInProgress,
            lazyComponent,
            renderLanes
          );
        }
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 26:
      return (
        markRef(current, workInProgress),
        null === current
          ? (renderLanes = getResource(
              workInProgress.type,
              null,
              workInProgress.pendingProps,
              null
            ))
            ? (workInProgress.memoizedState = renderLanes)
            : isHydrating ||
              ((renderLanes = workInProgress.type),
              (current = workInProgress.pendingProps),
              (lazyComponent = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              ).createElement(renderLanes)),
              (lazyComponent[internalInstanceKey] = workInProgress),
              (lazyComponent[internalPropsKey] = current),
              setInitialProperties(lazyComponent, renderLanes, current),
              markNodeAsHoistable(lazyComponent),
              (workInProgress.stateNode = lazyComponent))
          : (workInProgress.memoizedState = getResource(
              workInProgress.type,
              current.memoizedProps,
              workInProgress.pendingProps,
              current.memoizedState
            )),
        null
      );
    case 27:
      return (
        pushHostContext(workInProgress),
        null === current &&
          isHydrating &&
          ((lazyComponent = workInProgress.stateNode =
            resolveSingletonInstance(
              workInProgress.type,
              workInProgress.pendingProps,
              rootInstanceStackCursor.current
            )),
          (hydrationParentFiber = workInProgress),
          (rootOrSingletonContext = !0),
          (init = nextHydratableInstance),
          isSingletonScope(workInProgress.type)
            ? ((previousHydratableOnEnteringScopedSingleton = init),
              (nextHydratableInstance = getNextHydratable(
                lazyComponent.firstChild
              )))
            : (nextHydratableInstance = init)),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        markRef(current, workInProgress),
        null === current && (workInProgress.flags |= 4194304),
        workInProgress.child
      );
    case 5:
      if (null === current && isHydrating) {
        if ((init = lazyComponent = nextHydratableInstance))
          (lazyComponent = canHydrateInstance(
            lazyComponent,
            workInProgress.type,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== lazyComponent
              ? ((workInProgress.stateNode = lazyComponent),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = getNextHydratable(
                  lazyComponent.firstChild
                )),
                (rootOrSingletonContext = !1),
                (init = !0))
              : (init = !1);
        init || throwOnHydrationMismatch(workInProgress);
      }
      pushHostContext(workInProgress);
      init = workInProgress.type;
      prevState = workInProgress.pendingProps;
      nextState = null !== current ? current.memoizedProps : null;
      lazyComponent = prevState.children;
      shouldSetTextContent(init, prevState)
        ? (lazyComponent = null)
        : null !== nextState &&
          shouldSetTextContent(init, nextState) &&
          (workInProgress.flags |= 32);
      null !== workInProgress.memoizedState &&
        ((init = renderWithHooks(
          current,
          workInProgress,
          TransitionAwareHostComponent,
          null,
          null,
          renderLanes
        )),
        (HostTransitionContext._currentValue = init));
      markRef(current, workInProgress);
      reconcileChildren(current, workInProgress, lazyComponent, renderLanes);
      return workInProgress.child;
    case 6:
      if (null === current && isHydrating) {
        if ((current = renderLanes = nextHydratableInstance))
          (renderLanes = canHydrateTextInstance(
            renderLanes,
            workInProgress.pendingProps,
            rootOrSingletonContext
          )),
            null !== renderLanes
              ? ((workInProgress.stateNode = renderLanes),
                (hydrationParentFiber = workInProgress),
                (nextHydratableInstance = null),
                (current = !0))
              : (current = !1);
        current || throwOnHydrationMismatch(workInProgress);
      }
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (lazyComponent = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              lazyComponent,
              renderLanes
            ))
          : reconcileChildren(
              current,
              workInProgress,
              lazyComponent,
              renderLanes
            ),
        workInProgress.child
      );
    case 11:
      return updateForwardRef(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      return (
        (lazyComponent = workInProgress.pendingProps),
        pushProvider(workInProgress, workInProgress.type, lazyComponent.value),
        reconcileChildren(
          current,
          workInProgress,
          lazyComponent.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 9:
      return (
        (init = workInProgress.type._context),
        (lazyComponent = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress),
        (init = readContext(init)),
        (lazyComponent = lazyComponent(init)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, lazyComponent, renderLanes),
        workInProgress.child
      );
    case 14:
      return updateMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 31:
      return (
        (lazyComponent = workInProgress.pendingProps),
        (renderLanes = workInProgress.mode),
        (lazyComponent = {
          mode: lazyComponent.mode,
          children: lazyComponent.children
        }),
        null === current
          ? ((renderLanes = mountWorkInProgressOffscreenFiber(
              lazyComponent,
              renderLanes
            )),
            (renderLanes.ref = workInProgress.ref),
            (workInProgress.child = renderLanes),
            (renderLanes.return = workInProgress),
            (workInProgress = renderLanes))
          : ((renderLanes = createWorkInProgress(current.child, lazyComponent)),
            (renderLanes.ref = workInProgress.ref),
            (workInProgress.child = renderLanes),
            (renderLanes.return = workInProgress),
            (workInProgress = renderLanes)),
        workInProgress
      );
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        prepareToReadContext(workInProgress),
        (lazyComponent = readContext(CacheContext)),
        null === current
          ? ((init = peekCacheFromPool()),
            null === init &&
              ((init = workInProgressRoot),
              (prevState = createCache()),
              (init.pooledCache = prevState),
              prevState.refCount++,
              null !== prevState && (init.pooledCacheLanes |= renderLanes),
              (init = prevState)),
            (workInProgress.memoizedState = {
              parent: lazyComponent,
              cache: init
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, init))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
            (init = current.memoizedState),
            (prevState = workInProgress.memoizedState),
            init.parent !== lazyComponent
              ? ((init = { parent: lazyComponent, cache: lazyComponent }),
                (workInProgress.memoizedState = init),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      init),
                pushProvider(workInProgress, CacheContext, lazyComponent))
              : ((lazyComponent = prevState.cache),
                pushProvider(workInProgress, CacheContext, lazyComponent),
                lazyComponent !== init.cache &&
                  propagateContextChanges(
                    workInProgress,
                    [CacheContext],
                    renderLanes,
                    !0
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 29:
      throw workInProgress.pendingProps;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function markUpdate(workInProgress) {
  workInProgress.flags |= 4;
}
function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress.flags &= -16777217;
  else if (((workInProgress.flags |= 16777216), !preloadResource(resource))) {
    resource = suspenseHandlerStackCursor.current;
    if (
      null !== resource &&
      ((workInProgressRootRenderLanes & 4194048) ===
      workInProgressRootRenderLanes
        ? null !== shellBoundary
        : ((workInProgressRootRenderLanes & 62914560) !==
            workInProgressRootRenderLanes &&
            0 === (workInProgressRootRenderLanes & 536870912)) ||
          resource !== shellBoundary)
    )
      throw (
        ((suspendedThenable = noopSuspenseyCommitThenable),
        SuspenseyCommitException)
      );
    workInProgress.flags |= 8192;
  }
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue && (workInProgress.flags |= 4);
  workInProgress.flags & 16384 &&
    ((retryQueue =
      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
    (workInProgress.lanes |= retryQueue),
    (workInProgressSuspendedRetryLanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
        null === lastTailNode
          ? (renderState.tail = null)
          : (lastTailNode.sibling = null);
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$113 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$113 = lastTailNode),
            (lastTailNode = lastTailNode.sibling);
        null === lastTailNode$113
          ? hasRenderedATailFallback || null === renderState.tail
            ? (renderState.tail = null)
            : (renderState.tail.sibling = null)
          : (lastTailNode$113.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$114 = completedWork.child; null !== child$114; )
      (newChildLanes |= child$114.lanes | child$114.childLanes),
        (subtreeFlags |= child$114.subtreeFlags & 65011712),
        (subtreeFlags |= child$114.flags & 65011712),
        (child$114.return = completedWork),
        (child$114 = child$114.sibling);
  else
    for (child$114 = completedWork.child; null !== child$114; )
      (newChildLanes |= child$114.lanes | child$114.childLanes),
        (subtreeFlags |= child$114.subtreeFlags),
        (subtreeFlags |= child$114.flags),
        (child$114.return = completedWork),
        (child$114 = child$114.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return bubbleProperties(workInProgress), null;
    case 3:
      renderLanes = workInProgress.stateNode;
      newProps = null;
      null !== current && (newProps = current.memoizedState.cache);
      workInProgress.memoizedState.cache !== newProps &&
        (workInProgress.flags |= 2048);
      popProvider(CacheContext);
      popHostContainer();
      renderLanes.pendingContext &&
        ((renderLanes.context = renderLanes.pendingContext),
        (renderLanes.pendingContext = null));
      if (null === current || null === current.child)
        popHydrationState(workInProgress)
          ? markUpdate(workInProgress)
          : null === current ||
            (current.memoizedState.isDehydrated &&
              0 === (workInProgress.flags & 256)) ||
            ((workInProgress.flags |= 1024),
            upgradeHydrationErrorsToRecoverable());
      bubbleProperties(workInProgress);
      return null;
    case 26:
      return (
        (renderLanes = workInProgress.memoizedState),
        null === current
          ? (markUpdate(workInProgress),
            null !== renderLanes
              ? (bubbleProperties(workInProgress),
                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
              : (bubbleProperties(workInProgress),
                (workInProgress.flags &= -16777217)))
          : renderLanes
            ? renderLanes !== current.memoizedState
              ? (markUpdate(workInProgress),
                bubbleProperties(workInProgress),
                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
              : (bubbleProperties(workInProgress),
                (workInProgress.flags &= -16777217))
            : (current.memoizedProps !== newProps && markUpdate(workInProgress),
              bubbleProperties(workInProgress),
              (workInProgress.flags &= -16777217)),
        null
      );
    case 27:
      popHostContext(workInProgress);
      renderLanes = rootInstanceStackCursor.current;
      var type = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor.current;
        popHydrationState(workInProgress)
          ? prepareToHydrateHostInstance(workInProgress, current)
          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
            (workInProgress.stateNode = current),
            markUpdate(workInProgress));
      }
      bubbleProperties(workInProgress);
      return null;
    case 5:
      popHostContext(workInProgress);
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor.current;
        if (popHydrationState(workInProgress))
          prepareToHydrateHostInstance(workInProgress, current);
        else {
          type = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          );
          switch (current) {
            case 1:
              current = type.createElementNS(
                "http://www.w3.org/2000/svg",
                renderLanes
              );
              break;
            case 2:
              current = type.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                renderLanes
              );
              break;
            default:
              switch (renderLanes) {
                case "svg":
                  current = type.createElementNS(
                    "http://www.w3.org/2000/svg",
                    renderLanes
                  );
                  break;
                case "math":
                  current = type.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    renderLanes
                  );
                  break;
                case "script":
                  current = type.createElement("div");
                  current.innerHTML = "<script>\x3c/script>";
                  current = current.removeChild(current.firstChild);
                  break;
                case "select":
                  current =
                    "string" === typeof newProps.is
                      ? type.createElement("select", { is: newProps.is })
                      : type.createElement("select");
                  newProps.multiple
                    ? (current.multiple = !0)
                    : newProps.size && (current.size = newProps.size);
                  break;
                default:
                  current =
                    "string" === typeof newProps.is
                      ? type.createElement(renderLanes, { is: newProps.is })
                      : type.createElement(renderLanes);
              }
          }
          current[internalInstanceKey] = workInProgress;
          current[internalPropsKey] = newProps;
          a: for (type = workInProgress.child; null !== type; ) {
            if (5 === type.tag || 6 === type.tag)
              current.appendChild(type.stateNode);
            else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
              type.child.return = type;
              type = type.child;
              continue;
            }
            if (type === workInProgress) break a;
            for (; null === type.sibling; ) {
              if (null === type.return || type.return === workInProgress)
                break a;
              type = type.return;
            }
            type.sibling.return = type.return;
            type = type.sibling;
          }
          workInProgress.stateNode = current;
          a: switch (
            (setInitialProperties(current, renderLanes, newProps), renderLanes)
          ) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              current = !!newProps.autoFocus;
              break a;
            case "img":
              current = !0;
              break a;
            default:
              current = !1;
          }
          current && markUpdate(workInProgress);
        }
      }
      bubbleProperties(workInProgress);
      workInProgress.flags &= -16777217;
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(formatProdErrorMessage(166));
        current = rootInstanceStackCursor.current;
        if (popHydrationState(workInProgress)) {
          current = workInProgress.stateNode;
          renderLanes = workInProgress.memoizedProps;
          newProps = null;
          type = hydrationParentFiber;
          if (null !== type)
            switch (type.tag) {
              case 27:
              case 5:
                newProps = type.memoizedProps;
            }
          current[internalInstanceKey] = workInProgress;
          current =
            current.nodeValue === renderLanes ||
            (null !== newProps && !0 === newProps.suppressHydrationWarning) ||
            checkForUnmatchedText(current.nodeValue, renderLanes)
              ? !0
              : !1;
          current || throwOnHydrationMismatch(workInProgress);
        } else
          (current =
            getOwnerDocumentFromRootContainer(current).createTextNode(
              newProps
            )),
            (current[internalInstanceKey] = workInProgress),
            (workInProgress.stateNode = current);
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        type = popHydrationState(workInProgress);
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            if (!type) throw Error(formatProdErrorMessage(318));
            type = workInProgress.memoizedState;
            type = null !== type ? type.dehydrated : null;
            if (!type) throw Error(formatProdErrorMessage(317));
            type[internalInstanceKey] = workInProgress;
          } else
            resetHydrationState(),
              0 === (workInProgress.flags & 128) &&
                (workInProgress.memoizedState = null),
              (workInProgress.flags |= 4);
          bubbleProperties(workInProgress);
          type = !1;
        } else
          (type = upgradeHydrationErrorsToRecoverable()),
            null !== current &&
              null !== current.memoizedState &&
              (current.memoizedState.hydrationErrors = type),
            (type = !0);
        if (!type) {
          if (workInProgress.flags & 256)
            return popSuspenseHandler(workInProgress), workInProgress;
          popSuspenseHandler(workInProgress);
          return null;
        }
      }
      popSuspenseHandler(workInProgress);
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      if (renderLanes) {
        newProps = workInProgress.child;
        type = null;
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (type = newProps.alternate.memoizedState.cachePool.pool);
        var cache$127 = null;
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (cache$127 = newProps.memoizedState.cachePool.pool);
        cache$127 !== type && (newProps.flags |= 2048);
      }
      renderLanes !== current &&
        renderLanes &&
        (workInProgress.child.flags |= 8192);
      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return (
        popHostContainer(),
        null === current &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
      );
    case 19:
      pop(suspenseStackCursor);
      type = workInProgress.memoizedState;
      if (null === type) return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      cache$127 = type.rendering;
      if (null === cache$127)
        if (newProps) cutOffTailIfNeeded(type, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              cache$127 = findFirstSuspended(current);
              if (null !== cache$127) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(type, !1);
                current = cache$127.updateQueue;
                workInProgress.updateQueue = current;
                scheduleRetryEffect(workInProgress, current);
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== type.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(type, !1),
            (workInProgress.lanes = 4194304));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(cache$127)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              (workInProgress.updateQueue = current),
              scheduleRetryEffect(workInProgress, current),
              cutOffTailIfNeeded(type, !0),
              null === type.tail &&
                "hidden" === type.tailMode &&
                !cache$127.alternate &&
                !isHydrating)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - type.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(type, !1),
              (workInProgress.lanes = 4194304));
        type.isBackwards
          ? ((cache$127.sibling = workInProgress.child),
            (workInProgress.child = cache$127))
          : ((current = type.last),
            null !== current
              ? (current.sibling = cache$127)
              : (workInProgress.child = cache$127),
            (type.last = cache$127));
      }
      if (null !== type.tail)
        return (
          (workInProgress = type.tail),
          (type.rendering = workInProgress),
          (type.tail = workInProgress.sibling),
          (type.renderingStartTime = now()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        null !== current
          ? (null !== current.memoizedState) !== newProps &&
            (workInProgress.flags |= 8192)
          : newProps && (workInProgress.flags |= 8192),
        newProps
          ? 0 !== (renderLanes & 536870912) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        (renderLanes = workInProgress.updateQueue),
        null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        null !== current && pop(resumedCache),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(current, workInProgress) {
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 1:
      return (
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        popHostContainer(),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (null !== current && null !== current.dehydrated) {
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type), null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        null !== current && pop(resumedCache),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          lastEffect = void 0;
          var create = updateQueue.create,
            inst = updateQueue.inst;
          lastEffect = create();
          inst.destroy = lastEffect;
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor$jscomp$0
) {
  try {
    var updateQueue = finishedWork.updateQueue,
      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
    if (null !== lastEffect) {
      var firstEffect = lastEffect.next;
      updateQueue = firstEffect;
      do {
        if ((updateQueue.tag & flags) === flags) {
          var inst = updateQueue.inst,
            destroy = inst.destroy;
          if (void 0 !== destroy) {
            inst.destroy = void 0;
            lastEffect = finishedWork;
            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
              destroy_ = destroy;
            try {
              destroy_();
            } catch (error) {
              captureCommitPhaseError(
                lastEffect,
                nearestMountedAncestor,
                error
              );
            }
          }
        }
        updateQueue = updateQueue.next;
      } while (updateQueue !== firstEffect);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function safelyCallComponentWillUnmount(
  current,
  nearestMountedAncestor,
  instance
) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps
  );
  instance.state = current.memoizedState;
  try {
    instance.componentWillUnmount();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = current.stateNode;
          break;
        case 30:
          instanceToUse = current.stateNode;
          break;
        default:
          instanceToUse = current.stateNode;
      }
      "function" === typeof ref
        ? (current.refCleanup = ref(instanceToUse))
        : (ref.current = instanceToUse);
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        ref(null);
      } catch (error$143) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$143);
      }
    else ref.current = null;
}
function commitHostMount(finishedWork) {
  var type = finishedWork.type,
    props = finishedWork.memoizedProps,
    instance = finishedWork.stateNode;
  try {
    a: switch (type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        props.autoFocus && instance.focus();
        break a;
      case "img":
        props.src
          ? (instance.src = props.src)
          : props.srcSet && (instance.srcset = props.srcSet);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    var domElement = finishedWork.stateNode;
    updateProperties(domElement, finishedWork.type, oldProps, newProps);
    domElement[internalPropsKey] = newProps;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function isHostParent(fiber) {
  return (
    5 === fiber.tag ||
    3 === fiber.tag ||
    26 === fiber.tag ||
    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
    4 === fiber.tag
  );
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before
        ? (9 === parent.nodeType
            ? parent.body
            : "HTML" === parent.nodeName
              ? parent.ownerDocument.body
              : parent
          ).insertBefore(node, before)
        : ((before =
            9 === parent.nodeType
              ? parent.body
              : "HTML" === parent.nodeName
                ? parent.ownerDocument.body
                : parent),
          before.appendChild(node),
          (parent = parent._reactRootContainer),
          (null !== parent && void 0 !== parent) ||
            null !== before.onclick ||
            (before.onclick = noop$1));
  else if (
    4 !== tag &&
    (27 === tag &&
      isSingletonScope(node.type) &&
      ((parent = node.stateNode), (before = null)),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (
    4 !== tag &&
    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
    (node = node.child),
    null !== node)
  )
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
function commitHostSingletonAcquisition(finishedWork) {
  var singleton = finishedWork.stateNode,
    props = finishedWork.memoizedProps;
  try {
    for (
      var type = finishedWork.type, attributes = singleton.attributes;
      attributes.length;

    )
      singleton.removeAttributeNode(attributes[0]);
    setInitialProperties(singleton, type, props);
    singleton[internalInstanceKey] = finishedWork;
    singleton[internalPropsKey] = props;
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  needsFormReset = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function commitBeforeMutationEffects(root, firstChild) {
  root = root.containerInfo;
  eventsEnabled = _enabled;
  root = getActiveElementDeep(root);
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        var selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset,
            focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$20) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0,
            start = -1,
            end = -1,
            indexWithinAnchor = 0,
            indexWithinFocus = 0,
            node = root,
            parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            -1 === start || -1 === end ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  _enabled = !1;
  for (nextEffect = firstChild; null !== nextEffect; )
    if (
      ((firstChild = nextEffect),
      (root = firstChild.child),
      0 !== (firstChild.subtreeFlags & 1024) && null !== root)
    )
      (root.return = firstChild), (nextEffect = root);
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        focusNode = firstChild.alternate;
        root = firstChild.flags;
        switch (firstChild.tag) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (0 !== (root & 1024) && null !== focusNode) {
              root = void 0;
              JSCompiler_temp = firstChild;
              anchorOffset = focusNode.memoizedProps;
              focusNode = focusNode.memoizedState;
              selection = JSCompiler_temp.stateNode;
              try {
                var resolvedPrevProps = resolveClassComponentProps(
                  JSCompiler_temp.type,
                  anchorOffset,
                  JSCompiler_temp.elementType === JSCompiler_temp.type
                );
                root = selection.getSnapshotBeforeUpdate(
                  resolvedPrevProps,
                  focusNode
                );
                selection.__reactInternalSnapshotBeforeUpdate = root;
              } catch (error) {
                captureCommitPhaseError(
                  JSCompiler_temp,
                  JSCompiler_temp.return,
                  error
                );
              }
            }
            break;
          case 3:
            if (0 !== (root & 1024))
              if (
                ((root = firstChild.stateNode.containerInfo),
                (JSCompiler_temp = root.nodeType),
                9 === JSCompiler_temp)
              )
                clearContainerSparingly(root);
              else if (1 === JSCompiler_temp)
                switch (root.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    clearContainerSparingly(root);
                    break;
                  default:
                    root.textContent = "";
                }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
        }
        root = firstChild.sibling;
        if (null !== root) {
          root.return = firstChild.return;
          nextEffect = root;
          break;
        }
        nextEffect = firstChild.return;
      }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookEffectListMount(5, finishedWork);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        else {
          var prevProps = resolveClassComponentProps(
            finishedWork.type,
            current.memoizedProps
          );
          current = current.memoizedState;
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$142) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$142
            );
          }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (
        flags & 64 &&
        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
      ) {
        current = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              current = finishedWork.child.stateNode;
              break;
            case 1:
              current = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(finishedRoot, current);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 27:
      null === current &&
        flags & 4 &&
        commitHostSingletonAcquisition(finishedWork);
    case 26:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      null === current && flags & 4 && commitHostMount(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      flags & 64 &&
        ((finishedRoot = finishedWork.memoizedState),
        null !== finishedRoot &&
          ((finishedRoot = finishedRoot.dehydrated),
          null !== finishedRoot &&
            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
              null,
              finishedWork
            )),
            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
      break;
    case 22:
      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
      if (!flags) {
        current =
          (null !== current && null !== current.memoizedState) ||
          offscreenSubtreeWasHidden;
        prevProps = offscreenSubtreeIsHidden;
        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = flags;
        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
          ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            )
          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
        offscreenSubtreeIsHidden = prevProps;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      }
      break;
    case 30:
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  5 === fiber.tag &&
    ((alternate = fiber.stateNode),
    null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
var hostParent = null,
  hostParentIsContainer = !1;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber.memoizedState
        ? deletedFiber.memoizedState.count--
        : deletedFiber.stateNode &&
          ((deletedFiber = deletedFiber.stateNode),
          deletedFiber.parentNode.removeChild(deletedFiber));
      break;
    case 27:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      var prevHostParent = hostParent,
        prevHostParentIsContainer = hostParentIsContainer;
      isSingletonScope(deletedFiber.type) &&
        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = !1));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      releaseSingletonInstance(deletedFiber.stateNode);
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      if (null !== hostParent)
        if (hostParentIsContainer)
          try {
            (9 === hostParent.nodeType
              ? hostParent.body
              : "HTML" === hostParent.nodeName
                ? hostParent.ownerDocument.body
                : hostParent
            ).removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
        else
          try {
            hostParent.removeChild(deletedFiber.stateNode);
          } catch (error) {
            captureCommitPhaseError(
              deletedFiber,
              nearestMountedAncestor,
              error
            );
          }
      break;
    case 18:
      null !== hostParent &&
        (hostParentIsContainer
          ? ((finishedRoot = hostParent),
            clearSuspenseBoundary(
              9 === finishedRoot.nodeType
                ? finishedRoot.body
                : "HTML" === finishedRoot.nodeName
                  ? finishedRoot.ownerDocument.body
                  : finishedRoot,
              deletedFiber.stateNode
            ),
            retryIfBlockedOn(finishedRoot))
          : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
      break;
    case 4:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode.containerInfo;
      hostParentIsContainer = !0;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      offscreenSubtreeWasHidden ||
        commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
      offscreenSubtreeWasHidden ||
        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      offscreenSubtreeWasHidden ||
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      offscreenSubtreeWasHidden =
        (prevHostParent = offscreenSubtreeWasHidden) ||
        null !== deletedFiber.memoizedState;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      offscreenSubtreeWasHidden = prevHostParent;
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (
    null === finishedWork.memoizedState &&
    ((finishedRoot = finishedWork.alternate),
    null !== finishedRoot &&
      ((finishedRoot = finishedRoot.memoizedState),
      null !== finishedRoot &&
        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
  )
    try {
      retryIfBlockedOn(finishedRoot);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
    retryCache.has(wakeable) ||
      (retryCache.add(wakeable), wakeable.then(retry, retry));
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i],
        root = root$jscomp$0,
        returnFiber = parentFiber,
        parent = returnFiber;
      a: for (; null !== parent; ) {
        switch (parent.tag) {
          case 27:
            if (isSingletonScope(parent.type)) {
              hostParent = parent.stateNode;
              hostParentIsContainer = !1;
              break a;
            }
            break;
          case 5:
            hostParent = parent.stateNode;
            hostParentIsContainer = !1;
            break a;
          case 3:
          case 4:
            hostParent = parent.stateNode.containerInfo;
            hostParentIsContainer = !0;
            break a;
        }
        parent = parent.return;
      }
      if (null === hostParent) throw Error(formatProdErrorMessage(160));
      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
      hostParent = null;
      hostParentIsContainer = !1;
      root = childToDelete.alternate;
      null !== root && (root.return = null);
      childToDelete.return = null;
    }
  if (parentFiber.subtreeFlags & 13878)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
var currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
        commitHookEffectListMount(3, finishedWork),
        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((flags = finishedWork.callbacks),
          null !== flags &&
            ((current = finishedWork.shared.hiddenCallbacks),
            (finishedWork.shared.hiddenCallbacks =
              null === current ? flags : current.concat(flags)))));
      break;
    case 26:
      var hoistableRoot = currentHoistableRoot;
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (flags & 4) {
        var currentResource = null !== current ? current.memoizedState : null;
        flags = finishedWork.memoizedState;
        if (null === current)
          if (null === flags)
            if (null === finishedWork.stateNode) {
              a: {
                flags = finishedWork.type;
                current = finishedWork.memoizedProps;
                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                b: switch (flags) {
                  case "title":
                    currentResource =
                      hoistableRoot.getElementsByTagName("title")[0];
                    if (
                      !currentResource ||
                      currentResource[internalHoistableMarker] ||
                      currentResource[internalInstanceKey] ||
                      "http://www.w3.org/2000/svg" ===
                        currentResource.namespaceURI ||
                      currentResource.hasAttribute("itemprop")
                    )
                      (currentResource = hoistableRoot.createElement(flags)),
                        hoistableRoot.head.insertBefore(
                          currentResource,
                          hoistableRoot.querySelector("head > title")
                        );
                    setInitialProperties(currentResource, flags, current);
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                    break a;
                  case "link":
                    var maybeNodes = getHydratableHoistableCache(
                      "link",
                      "href",
                      hoistableRoot
                    ).get(flags + (current.href || ""));
                    if (maybeNodes)
                      for (var i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("href") ===
                            (null == current.href || "" === current.href
                              ? null
                              : current.href) &&
                            currentResource.getAttribute("rel") ===
                              (null == current.rel ? null : current.rel) &&
                            currentResource.getAttribute("title") ===
                              (null == current.title ? null : current.title) &&
                            currentResource.getAttribute("crossorigin") ===
                              (null == current.crossOrigin
                                ? null
                                : current.crossOrigin))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  case "meta":
                    if (
                      (maybeNodes = getHydratableHoistableCache(
                        "meta",
                        "content",
                        hoistableRoot
                      ).get(flags + (current.content || "")))
                    )
                      for (i = 0; i < maybeNodes.length; i++)
                        if (
                          ((currentResource = maybeNodes[i]),
                          currentResource.getAttribute("content") ===
                            (null == current.content
                              ? null
                              : "" + current.content) &&
                            currentResource.getAttribute("name") ===
                              (null == current.name ? null : current.name) &&
                            currentResource.getAttribute("property") ===
                              (null == current.property
                                ? null
                                : current.property) &&
                            currentResource.getAttribute("http-equiv") ===
                              (null == current.httpEquiv
                                ? null
                                : current.httpEquiv) &&
                            currentResource.getAttribute("charset") ===
                              (null == current.charSet
                                ? null
                                : current.charSet))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    currentResource = hoistableRoot.createElement(flags);
                    setInitialProperties(currentResource, flags, current);
                    hoistableRoot.head.appendChild(currentResource);
                    break;
                  default:
                    throw Error(formatProdErrorMessage(468, flags));
                }
                currentResource[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(currentResource);
                flags = currentResource;
              }
              finishedWork.stateNode = flags;
            } else
              mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              );
          else
            finishedWork.stateNode = acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            );
        else
          currentResource !== flags
            ? (null === currentResource
                ? null !== current.stateNode &&
                  ((current = current.stateNode),
                  current.parentNode.removeChild(current))
                : currentResource.count--,
              null === flags
                ? mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  )
                : acquireResource(
                    hoistableRoot,
                    flags,
                    finishedWork.memoizedProps
                  ))
            : null === flags &&
              null !== finishedWork.stateNode &&
              commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
      }
      break;
    case 27:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      null !== current &&
        flags & 4 &&
        commitHostUpdate(
          finishedWork,
          finishedWork.memoizedProps,
          current.memoizedProps
        );
      break;
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (offscreenSubtreeWasHidden ||
          null === current ||
          safelyDetachRef(current, current.return));
      if (finishedWork.flags & 32) {
        hoistableRoot = finishedWork.stateNode;
        try {
          setTextContent(hoistableRoot, "");
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      flags & 4 &&
        null != finishedWork.stateNode &&
        ((hoistableRoot = finishedWork.memoizedProps),
        commitHostUpdate(
          finishedWork,
          hoistableRoot,
          null !== current ? current.memoizedProps : hoistableRoot
        ));
      flags & 1024 && (needsFormReset = !0);
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(formatProdErrorMessage(162));
        flags = finishedWork.memoizedProps;
        current = finishedWork.stateNode;
        try {
          current.nodeValue = flags;
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 3:
      tagCaches = null;
      hoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(root.containerInfo);
      recursivelyTraverseMutationEffects(root, finishedWork);
      currentHoistableRoot = hoistableRoot;
      commitReconciliationEffects(finishedWork);
      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
        try {
          retryIfBlockedOn(root.containerInfo);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      needsFormReset &&
        ((needsFormReset = !1), recursivelyResetForms(finishedWork));
      break;
    case 4:
      flags = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(
        finishedWork.stateNode.containerInfo
      );
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      currentHoistableRoot = flags;
      break;
    case 12:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 &&
        (null !== finishedWork.memoizedState) !==
          (null !== current && null !== current.memoizedState) &&
        (globalMostRecentFallbackTime = now());
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      hoistableRoot = null !== finishedWork.memoizedState;
      var wasHidden = null !== current && null !== current.memoizedState,
        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
      recursivelyTraverseMutationEffects(root, finishedWork);
      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      commitReconciliationEffects(finishedWork);
      if (flags & 8192)
        a: for (
          root = finishedWork.stateNode,
            root._visibility = hoistableRoot
              ? root._visibility & -2
              : root._visibility | 1,
            hoistableRoot &&
              (null === current ||
                wasHidden ||
                offscreenSubtreeIsHidden ||
                offscreenSubtreeWasHidden ||
                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
            current = null,
            root = finishedWork;
          ;

        ) {
          if (5 === root.tag || 26 === root.tag) {
            if (null === current) {
              wasHidden = current = root;
              try {
                if (((currentResource = wasHidden.stateNode), hoistableRoot))
                  (maybeNodes = currentResource.style),
                    "function" === typeof maybeNodes.setProperty
                      ? maybeNodes.setProperty("display", "none", "important")
                      : (maybeNodes.display = "none");
                else {
                  i = wasHidden.stateNode;
                  var styleProp = wasHidden.memoizedProps.style,
                    display =
                      void 0 !== styleProp &&
                      null !== styleProp &&
                      styleProp.hasOwnProperty("display")
                        ? styleProp.display
                        : null;
                  i.style.display =
                    null == display || "boolean" === typeof display
                      ? ""
                      : ("" + display).trim();
                }
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (6 === root.tag) {
            if (null === current) {
              wasHidden = root;
              try {
                wasHidden.stateNode.nodeValue = hoistableRoot
                  ? ""
                  : wasHidden.memoizedProps;
              } catch (error) {
                captureCommitPhaseError(wasHidden, wasHidden.return, error);
              }
            }
          } else if (
            ((22 !== root.tag && 23 !== root.tag) ||
              null === root.memoizedState ||
              root === finishedWork) &&
            null !== root.child
          ) {
            root.child.return = root;
            root = root.child;
            continue;
          }
          if (root === finishedWork) break a;
          for (; null === root.sibling; ) {
            if (null === root.return || root.return === finishedWork) break a;
            current === root && (current = null);
            root = root.return;
          }
          current === root && (current = null);
          root.sibling.return = root.return;
          root = root.sibling;
        }
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((current = flags.retryQueue),
          null !== current &&
            ((flags.retryQueue = null),
            attachSuspenseRetryListeners(finishedWork, current))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      for (
        var hostParentFiber, parentFiber = finishedWork.return;
        null !== parentFiber;

      ) {
        if (isHostParent(parentFiber)) {
          hostParentFiber = parentFiber;
          break;
        }
        parentFiber = parentFiber.return;
      }
      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
      switch (hostParentFiber.tag) {
        case 27:
          var parent = hostParentFiber.stateNode,
            before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent);
          break;
        case 5:
          var parent$144 = hostParentFiber.stateNode;
          hostParentFiber.flags & 32 &&
            (setTextContent(parent$144, ""), (hostParentFiber.flags &= -33));
          var before$145 = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before$145, parent$144);
          break;
        case 3:
        case 4:
          var parent$146 = hostParentFiber.stateNode.containerInfo,
            before$147 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$147,
            parent$146
          );
          break;
        default:
          throw Error(formatProdErrorMessage(161));
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyResetForms(parentFiber) {
  if (parentFiber.subtreeFlags & 1024)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var fiber = parentFiber;
      recursivelyResetForms(fiber);
      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
      parentFiber = parentFiber.sibling;
    }
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        "function" === typeof instance.componentWillUnmount &&
          safelyCallComponentWillUnmount(
            finishedWork,
            finishedWork.return,
            instance
          );
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 27:
        releaseSingletonInstance(finishedWork.stateNode);
      case 26:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 30:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate,
      finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(4, finishedWork);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        current = finishedWork;
        finishedRoot = current.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        current = finishedWork;
        finishedRoot = current.updateQueue;
        if (null !== finishedRoot) {
          var instance = current.stateNode;
          try {
            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
            if (null !== hiddenCallbacks)
              for (
                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
                finishedRoot < hiddenCallbacks.length;
                finishedRoot++
              )
                callCallback(hiddenCallbacks[finishedRoot], instance);
          } catch (error) {
            captureCommitPhaseError(current, current.return, error);
          }
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 27:
        commitHostSingletonAcquisition(finishedWork);
      case 26:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          null === current &&
          flags & 4 &&
          commitHostMount(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 30:
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookEffectListMount(9, finishedWork);
      break;
    case 1:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        ((finishedRoot = null),
        null !== finishedWork.alternate &&
          (finishedRoot = finishedWork.alternate.memoizedState.cache),
        (finishedWork = finishedWork.memoizedState.cache),
        finishedWork !== finishedRoot &&
          (finishedWork.refCount++,
          null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 12:
      if (flags & 2048) {
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
        finishedRoot = finishedWork.stateNode;
        try {
          var _finishedWork$memoize2 = finishedWork.memoizedProps,
            id = _finishedWork$memoize2.id,
            onPostCommit = _finishedWork$memoize2.onPostCommit;
          "function" === typeof onPostCommit &&
            onPostCommit(
              id,
              null === finishedWork.alternate ? "mount" : "update",
              finishedRoot.passiveEffectDuration,
              -0
            );
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      } else
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
      break;
    case 13:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      break;
    case 23:
      break;
    case 22:
      _finishedWork$memoize2 = finishedWork.stateNode;
      id = finishedWork.alternate;
      null !== finishedWork.memoizedState
        ? _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
        : _finishedWork$memoize2._visibility & 2
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : ((_finishedWork$memoize2._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              0 !== (finishedWork.subtreeFlags & 10256)
            ));
      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookEffectListMount(8, finishedWork);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance._visibility & 2
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
          : ((instance._visibility |= 2),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(fiber) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(fiber);
      fiber.flags & suspenseyCommitFlag &&
        null !== fiber.memoizedState &&
        suspendResource(
          currentHoistableRoot,
          fiber.memoizedState,
          fiber.memoizedProps
        );
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(fiber);
      break;
    case 3:
    case 4:
      var previousHoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
      recursivelyAccumulateSuspenseyCommit(fiber);
      currentHoistableRoot = previousHoistableRoot;
      break;
    case 22:
      null === fiber.memoizedState &&
        ((previousHoistableRoot = fiber.alternate),
        null !== previousHoistableRoot &&
        null !== previousHoistableRoot.memoizedState
          ? ((previousHoistableRoot = suspenseyCommitFlag),
            (suspenseyCommitFlag = 16777216),
            recursivelyAccumulateSuspenseyCommit(fiber),
            (suspenseyCommitFlag = previousHoistableRoot))
          : recursivelyAccumulateSuspenseyCommit(fiber));
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(fiber);
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 12:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 2 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, deletions, deletions.return);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 2 &&
          ((i._visibility &= -3),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
        break;
      case 23:
      case 22:
        if (
          null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool
        ) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling,
          returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultAsyncDispatcher = {
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    }
  },
  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidSkipSuspendedSiblings = !1,
  workInProgressRootIsPrerendering = !1,
  workInProgressRootDidAttachPingListener = !1,
  entangledRenderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressDeferredLane = 0,
  workInProgressSuspendedRetryLanes = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  pendingEffectsStatus = 0,
  pendingEffectsRoot = null,
  pendingFinishedWork = null,
  pendingEffectsLanes = 0,
  pendingEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  pendingRecoverableErrors = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null;
function requestUpdateLane() {
  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (null !== ReactSharedInternals.T) {
    var actionScopeLane = currentEntangledLane;
    return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
  }
  return resolveUpdatePriority();
}
function requestDeferredLane() {
  0 === workInProgressDeferredLane &&
    (workInProgressDeferredLane =
      0 === (workInProgressRootRenderLanes & 536870912) || isHydrating
        ? claimNextTransitionLane()
        : 536870912);
  var suspenseHandler = suspenseHandlerStackCursor.current;
  null !== suspenseHandler && (suspenseHandler.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
      markRootSuspended(
        root,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        !1
      );
  markRootUpdated$1(root, lane);
  if (0 === (executionContext & 2) || root !== workInProgressRoot)
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          !1
        )),
      ensureRootIsScheduled(root);
}
function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var shouldTimeSlice =
      (!forceSync &&
        0 === (lanes & 124) &&
        0 === (lanes & root$jscomp$0.expiredLanes)) ||
      checkIfRootIsPrerendering(root$jscomp$0, lanes),
    exitStatus = shouldTimeSlice
      ? renderRootConcurrent(root$jscomp$0, lanes)
      : renderRootSync(root$jscomp$0, lanes, !0),
    renderWasConcurrent = shouldTimeSlice;
  do {
    if (0 === exitStatus) {
      workInProgressRootIsPrerendering &&
        !shouldTimeSlice &&
        markRootSuspended(root$jscomp$0, lanes, 0, !1);
      break;
    } else {
      forceSync = root$jscomp$0.current.alternate;
      if (
        renderWasConcurrent &&
        !isRenderConsistentWithExternalStores(forceSync)
      ) {
        exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
        renderWasConcurrent = !1;
        continue;
      }
      if (2 === exitStatus) {
        renderWasConcurrent = lanes;
        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
          var JSCompiler_inline_result = 0;
        else
          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
            (JSCompiler_inline_result =
              0 !== JSCompiler_inline_result
                ? JSCompiler_inline_result
                : JSCompiler_inline_result & 536870912
                  ? 536870912
                  : 0);
        if (0 !== JSCompiler_inline_result) {
          lanes = JSCompiler_inline_result;
          a: {
            var root = root$jscomp$0;
            exitStatus = workInProgressRootConcurrentErrors;
            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
            wasRootDehydrated &&
              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
            JSCompiler_inline_result = renderRootSync(
              root,
              JSCompiler_inline_result,
              !1
            );
            if (2 !== JSCompiler_inline_result) {
              if (
                workInProgressRootDidAttachPingListener &&
                !wasRootDehydrated
              ) {
                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
                workInProgressRootInterleavedUpdatedLanes |=
                  renderWasConcurrent;
                exitStatus = 4;
                break a;
              }
              renderWasConcurrent = workInProgressRootRecoverableErrors;
              workInProgressRootRecoverableErrors = exitStatus;
              null !== renderWasConcurrent &&
                (null === workInProgressRootRecoverableErrors
                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
                  : workInProgressRootRecoverableErrors.push.apply(
                      workInProgressRootRecoverableErrors,
                      renderWasConcurrent
                    ));
            }
            exitStatus = JSCompiler_inline_result;
          }
          renderWasConcurrent = !1;
          if (2 !== exitStatus) continue;
        }
      }
      if (1 === exitStatus) {
        prepareFreshStack(root$jscomp$0, 0);
        markRootSuspended(root$jscomp$0, lanes, 0, !0);
        break;
      }
      a: {
        shouldTimeSlice = root$jscomp$0;
        renderWasConcurrent = exitStatus;
        switch (renderWasConcurrent) {
          case 0:
          case 1:
            throw Error(formatProdErrorMessage(345));
          case 4:
            if ((lanes & 4194048) !== lanes) break;
          case 6:
            markRootSuspended(
              shouldTimeSlice,
              lanes,
              workInProgressDeferredLane,
              !workInProgressRootDidSkipSuspendedSiblings
            );
            break a;
          case 2:
            workInProgressRootRecoverableErrors = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(formatProdErrorMessage(329));
        }
        if (
          (lanes & 62914560) === lanes &&
          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
          10 < exitStatus)
        ) {
          markRootSuspended(
            shouldTimeSlice,
            lanes,
            workInProgressDeferredLane,
            !workInProgressRootDidSkipSuspendedSiblings
          );
          if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
          shouldTimeSlice.timeoutHandle = scheduleTimeout(
            commitRootWhenReady.bind(
              null,
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              renderWasConcurrent,
              2,
              -0,
              0
            ),
            exitStatus
          );
          break a;
        }
        commitRootWhenReady(
          shouldTimeSlice,
          forceSync,
          workInProgressRootRecoverableErrors,
          workInProgressTransitions,
          workInProgressRootDidIncludeRecursiveRenderUpdate,
          lanes,
          workInProgressDeferredLane,
          workInProgressRootInterleavedUpdatedLanes,
          workInProgressSuspendedRetryLanes,
          workInProgressRootDidSkipSuspendedSiblings,
          renderWasConcurrent,
          0,
          -0,
          0
        );
      }
    }
    break;
  } while (1);
  ensureRootIsScheduled(root$jscomp$0);
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes,
  didSkipSuspendedSiblings,
  exitStatus,
  suspendedCommitReason,
  completedRenderStartTime,
  completedRenderEndTime
) {
  root.timeoutHandle = -1;
  suspendedCommitReason = finishedWork.subtreeFlags;
  if (
    suspendedCommitReason & 8192 ||
    16785408 === (suspendedCommitReason & 16785408)
  )
    if (
      ((suspendedState = { stylesheets: null, count: 0, unsuspend: noop }),
      accumulateSuspenseyCommitOnFiber(finishedWork),
      (suspendedCommitReason = waitForCommitToBeReady()),
      null !== suspendedCommitReason)
    ) {
      root.cancelPendingCommit = suspendedCommitReason(
        commitRoot.bind(
          null,
          root,
          finishedWork,
          lanes,
          recoverableErrors,
          transitions,
          didIncludeRenderPhaseUpdate,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          exitStatus,
          1,
          completedRenderStartTime,
          completedRenderEndTime
        )
      );
      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
      return;
    }
  commitRoot(
    root,
    finishedWork,
    lanes,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane,
    updatedLanes,
    suspendedRetryLanes
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    var tag = node.tag;
    if (
      (0 === tag || 11 === tag || 15 === tag) &&
      node.flags & 16384 &&
      ((tag = node.updateQueue),
      null !== tag && ((tag = tag.stores), null !== tag))
    )
      for (var i = 0; i < tag.length; i++) {
        var check = tag[i],
          getSnapshot = check.getSnapshot;
        check = check.value;
        try {
          if (!objectIs(getSnapshot(), check)) return !1;
        } catch (error) {
          return !1;
        }
      }
    tag = node.child;
    if (node.subtreeFlags & 16384 && null !== tag)
      (tag.return = node), (node = tag);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootSuspended(
  root,
  suspendedLanes,
  spawnedLane,
  didAttemptEntireTree
) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
  didAttemptEntireTree = root.expirationTimes;
  for (var lanes = suspendedLanes; 0 < lanes; ) {
    var index$4 = 31 - clz32(lanes),
      lane = 1 << index$4;
    didAttemptEntireTree[index$4] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function flushSyncWork$1() {
  return 0 === (executionContext & 6)
    ? (flushSyncWorkAcrossRoots_impl(0, !1), !1)
    : !0;
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
        (lastContextDependency = currentlyRenderingFiber$1 = null),
        resetHooksOnUnwind(interruptedWork),
        (thenableState = null),
        (thenableIndexCounter = 0),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  timeoutHandle = root.cancelPendingCommit;
  null !== timeoutHandle &&
    ((root.cancelPendingCommit = null), timeoutHandle());
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidSkipSuspendedSiblings = !1;
  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
  workInProgressRootDidAttachPingListener = !1;
  workInProgressSuspendedRetryLanes =
    workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
    workInProgressRootExitStatus =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root.entangledLanes;
  if (0 !== allEntangledLanes)
    for (
      root = root.entanglements, allEntangledLanes &= lanes;
      0 < allEntangledLanes;

    ) {
      var index$2 = 31 - clz32(allEntangledLanes),
        lane = 1 << index$2;
      lanes |= root[index$2];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  thrownValue === SuspenseException || thrownValue === SuspenseActionException
    ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason = 3))
    : thrownValue === SuspenseyCommitException
      ? ((thrownValue = getSuspendedThenable()),
        (workInProgressSuspendedReason = 4))
      : (workInProgressSuspendedReason =
          thrownValue === SelectiveHydrationException
            ? 8
            : null !== thrownValue &&
                "object" === typeof thrownValue &&
                "function" === typeof thrownValue.then
              ? 6
              : 1);
  workInProgressThrownValue = thrownValue;
  null === workInProgress &&
    ((workInProgressRootExitStatus = 1),
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    ));
}
function pushDispatcher() {
  var prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  var prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  workInProgressRootDidSkipSuspendedSiblings ||
    ((workInProgressRootRenderLanes & 4194048) !==
      workInProgressRootRenderLanes &&
      null !== suspenseHandlerStackCursor.current) ||
    (workInProgressRootIsPrerendering = !0);
  (0 === (workInProgressRootSkippedLanes & 134217727) &&
    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
    null === workInProgressRoot ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane,
      !1
    );
}
function renderRootSync(root, lanes, shouldYieldForPrerendering) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
  lanes = !1;
  var exitStatus = workInProgressRootExitStatus;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        var unitOfWork = workInProgress,
          thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            exitStatus = 6;
            break a;
          case 3:
          case 2:
          case 9:
          case 6:
            null === suspenseHandlerStackCursor.current && (lanes = !0);
            var reason = workInProgressSuspendedReason;
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
            if (
              shouldYieldForPrerendering &&
              workInProgressRootIsPrerendering
            ) {
              exitStatus = 0;
              break a;
            }
            break;
          default:
            (reason = workInProgressSuspendedReason),
              (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
        }
      }
      workLoopSync();
      exitStatus = workInProgressRootExitStatus;
      break;
    } catch (thrownValue$167) {
      handleThrow(root, thrownValue$167);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  lastContextDependency = currentlyRenderingFiber$1 = null;
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  null === workInProgress &&
    ((workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0),
    finishQueueingConcurrentUpdates());
  return exitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
    ? ((workInProgressTransitions = null),
      (workInProgressRootRenderTargetTime = now() + 500),
      prepareFreshStack(root, lanes))
    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root,
        lanes
      ));
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        b: switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
            break;
          case 2:
          case 9:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              (2 !== workInProgressSuspendedReason &&
                9 !== workInProgressSuspendedReason) ||
                workInProgressRoot !== root ||
                (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root);
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(thrownValue)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
            break;
          case 5:
            var resource = null;
            switch (workInProgress.tag) {
              case 26:
                resource = workInProgress.memoizedState;
              case 5:
              case 27:
                var hostFiber = workInProgress;
                if (resource ? preloadResource(resource) : 1) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  var sibling = hostFiber.sibling;
                  if (null !== sibling) workInProgress = sibling;
                  else {
                    var returnFiber = hostFiber.return;
                    null !== returnFiber
                      ? ((workInProgress = returnFiber),
                        completeUnitOfWork(returnFiber))
                      : (workInProgress = null);
                  }
                  break b;
                }
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error(formatProdErrorMessage(462));
        }
      }
      workLoopConcurrentByScheduler();
      break;
    } catch (thrownValue$169) {
      handleThrow(root, thrownValue$169);
    }
  while (1);
  lastContextDependency = currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrentByScheduler() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var next = unitOfWork;
  var current = next.alternate;
  switch (next.tag) {
    case 15:
    case 0:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type,
        void 0,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      next = replayFunctionComponent(
        current,
        next,
        next.pendingProps,
        next.type.render,
        next.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(next);
    default:
      unwindInterruptedWork(current, next),
        (next = workInProgress =
          resetWorkInProgress(next, entangledRenderLanes)),
        (next = beginWork(current, next, entangledRenderLanes));
  }
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function throwAndUnwindWorkLoop(
  root,
  unitOfWork,
  thrownValue,
  suspendedReason
) {
  lastContextDependency = currentlyRenderingFiber$1 = null;
  resetHooksOnUnwind(unitOfWork);
  thenableState = null;
  thenableIndexCounter = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root,
        createCapturedValueAtFiber(thrownValue, root.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768) {
    if (isHydrating || 1 === suspendedReason) root = !0;
    else if (
      workInProgressRootIsPrerendering ||
      0 !== (workInProgressRootRenderLanes & 536870912)
    )
      root = !1;
    else if (
      ((workInProgressRootDidSkipSuspendedSiblings = root = !0),
      2 === suspendedReason ||
        9 === suspendedReason ||
        3 === suspendedReason ||
        6 === suspendedReason)
    )
      (suspendedReason = suspenseHandlerStackCursor.current),
        null !== suspendedReason &&
          13 === suspendedReason.tag &&
          (suspendedReason.flags |= 16384);
    unwindUnitOfWork(unitOfWork, root);
  } else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    if (0 !== (completedWork.flags & 32768)) {
      unwindUnitOfWork(
        completedWork,
        workInProgressRootDidSkipSuspendedSiblings
      );
      return;
    }
    unitOfWork = completedWork.return;
    var next = completeWork(
      completedWork.alternate,
      completedWork,
      entangledRenderLanes
    );
    if (null !== next) {
      workInProgress = next;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function unwindUnitOfWork(unitOfWork, skipSiblings) {
  do {
    var next = unwindWork(unitOfWork.alternate, unitOfWork);
    if (null !== next) {
      next.flags &= 32767;
      workInProgress = next;
      return;
    }
    next = unitOfWork.return;
    null !== next &&
      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
    if (
      !skipSiblings &&
      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
    ) {
      workInProgress = unitOfWork;
      return;
    }
    workInProgress = unitOfWork = next;
  } while (null !== unitOfWork);
  workInProgressRootExitStatus = 6;
  workInProgress = null;
}
function commitRoot(
  root,
  finishedWork,
  lanes,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane,
  updatedLanes,
  suspendedRetryLanes
) {
  root.cancelPendingCommit = null;
  do flushPendingEffects();
  while (0 !== pendingEffectsStatus);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  if (null !== finishedWork) {
    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
    markRootFinished(
      root,
      lanes,
      didIncludeRenderPhaseUpdate,
      spawnedLane,
      updatedLanes,
      suspendedRetryLanes
    );
    root === workInProgressRoot &&
      ((workInProgress = workInProgressRoot = null),
      (workInProgressRootRenderLanes = 0));
    pendingFinishedWork = finishedWork;
    pendingEffectsRoot = root;
    pendingEffectsLanes = lanes;
    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
    pendingPassiveTransitions = transitions;
    pendingRecoverableErrors = recoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? ((root.callbackNode = null),
        (root.callbackPriority = 0),
        scheduleCallback$1(NormalPriority$1, function () {
          flushPassiveEffects(!0);
          return null;
        }))
      : ((root.callbackNode = null), (root.callbackPriority = 0));
    recoverableErrors = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
      recoverableErrors = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      transitions = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      spawnedLane = executionContext;
      executionContext |= 4;
      try {
        commitBeforeMutationEffects(root, finishedWork, lanes);
      } finally {
        (executionContext = spawnedLane),
          (ReactDOMSharedInternals.p = transitions),
          (ReactSharedInternals.T = recoverableErrors);
      }
    }
    pendingEffectsStatus = 1;
    flushMutationEffects();
    flushLayoutEffects();
    flushSpawnedWork();
  }
}
function flushMutationEffects() {
  if (1 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
      rootMutationHasEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitMutationEffectsOnFiber(finishedWork, root);
        var priorSelectionInformation = selectionInformation,
          curFocusedElem = getActiveElementDeep(root.containerInfo),
          priorFocusedElem = priorSelectionInformation.focusedElem,
          priorSelectionRange = priorSelectionInformation.selectionRange;
        if (
          curFocusedElem !== priorFocusedElem &&
          priorFocusedElem &&
          priorFocusedElem.ownerDocument &&
          containsNode(
            priorFocusedElem.ownerDocument.documentElement,
            priorFocusedElem
          )
        ) {
          if (
            null !== priorSelectionRange &&
            hasSelectionCapabilities(priorFocusedElem)
          ) {
            var start = priorSelectionRange.start,
              end = priorSelectionRange.end;
            void 0 === end && (end = start);
            if ("selectionStart" in priorFocusedElem)
              (priorFocusedElem.selectionStart = start),
                (priorFocusedElem.selectionEnd = Math.min(
                  end,
                  priorFocusedElem.value.length
                ));
            else {
              var doc = priorFocusedElem.ownerDocument || document,
                win = (doc && doc.defaultView) || window;
              if (win.getSelection) {
                var selection = win.getSelection(),
                  length = priorFocusedElem.textContent.length,
                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
                  end$jscomp$0 =
                    void 0 === priorSelectionRange.end
                      ? start$jscomp$0
                      : Math.min(priorSelectionRange.end, length);
                !selection.extend &&
                  start$jscomp$0 > end$jscomp$0 &&
                  ((curFocusedElem = end$jscomp$0),
                  (end$jscomp$0 = start$jscomp$0),
                  (start$jscomp$0 = curFocusedElem));
                var startMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    start$jscomp$0
                  ),
                  endMarker = getNodeForCharacterOffset(
                    priorFocusedElem,
                    end$jscomp$0
                  );
                if (
                  startMarker &&
                  endMarker &&
                  (1 !== selection.rangeCount ||
                    selection.anchorNode !== startMarker.node ||
                    selection.anchorOffset !== startMarker.offset ||
                    selection.focusNode !== endMarker.node ||
                    selection.focusOffset !== endMarker.offset)
                ) {
                  var range = doc.createRange();
                  range.setStart(startMarker.node, startMarker.offset);
                  selection.removeAllRanges();
                  start$jscomp$0 > end$jscomp$0
                    ? (selection.addRange(range),
                      selection.extend(endMarker.node, endMarker.offset))
                    : (range.setEnd(endMarker.node, endMarker.offset),
                      selection.addRange(range));
                }
              }
            }
          }
          doc = [];
          for (
            selection = priorFocusedElem;
            (selection = selection.parentNode);

          )
            1 === selection.nodeType &&
              doc.push({
                element: selection,
                left: selection.scrollLeft,
                top: selection.scrollTop
              });
          "function" === typeof priorFocusedElem.focus &&
            priorFocusedElem.focus();
          for (
            priorFocusedElem = 0;
            priorFocusedElem < doc.length;
            priorFocusedElem++
          ) {
            var info = doc[priorFocusedElem];
            info.element.scrollLeft = info.left;
            info.element.scrollTop = info.top;
          }
        }
        _enabled = !!eventsEnabled;
        selectionInformation = eventsEnabled = null;
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootMutationHasEffect);
      }
    }
    root.current = finishedWork;
    pendingEffectsStatus = 2;
  }
}
function flushLayoutEffects() {
  if (2 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
      rootHasLayoutEffect = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      var prevExecutionContext = executionContext;
      executionContext |= 4;
      try {
        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
      } finally {
        (executionContext = prevExecutionContext),
          (ReactDOMSharedInternals.p = previousPriority),
          (ReactSharedInternals.T = rootHasLayoutEffect);
      }
    }
    pendingEffectsStatus = 3;
  }
}
function flushSpawnedWork() {
  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
    pendingEffectsStatus = 0;
    requestPaint();
    var root = pendingEffectsRoot,
      finishedWork = pendingFinishedWork,
      lanes = pendingEffectsLanes,
      recoverableErrors = pendingRecoverableErrors;
    0 !== (finishedWork.subtreeFlags & 10256) ||
    0 !== (finishedWork.flags & 10256)
      ? (pendingEffectsStatus = 5)
      : ((pendingEffectsStatus = 0),
        (pendingFinishedWork = pendingEffectsRoot = null),
        releaseRootPooledCache(root, root.pendingLanes));
    var remainingLanes = root.pendingLanes;
    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
    lanesToEventPriority(lanes);
    finishedWork = finishedWork.stateNode;
    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
      try {
        injectedHook.onCommitFiberRoot(
          rendererID,
          finishedWork,
          void 0,
          128 === (finishedWork.current.flags & 128)
        );
      } catch (err) {}
    if (null !== recoverableErrors) {
      finishedWork = ReactSharedInternals.T;
      remainingLanes = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 2;
      ReactSharedInternals.T = null;
      try {
        for (
          var onRecoverableError = root.onRecoverableError, i = 0;
          i < recoverableErrors.length;
          i++
        ) {
          var recoverableError = recoverableErrors[i];
          onRecoverableError(recoverableError.value, {
            componentStack: recoverableError.stack
          });
        }
      } finally {
        (ReactSharedInternals.T = finishedWork),
          (ReactDOMSharedInternals.p = remainingLanes);
      }
    }
    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
    ensureRootIsScheduled(root);
    remainingLanes = root.pendingLanes;
    0 !== (lanes & 4194090) && 0 !== (remainingLanes & 42)
      ? root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
      : (nestedUpdateCount = 0);
    flushSyncWorkAcrossRoots_impl(0, !1);
  }
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPendingEffects(wasDelayedCommit) {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects(wasDelayedCommit);
}
function flushPassiveEffects() {
  if (5 !== pendingEffectsStatus) return !1;
  var root = pendingEffectsRoot,
    remainingLanes = pendingEffectsRemainingLanes;
  pendingEffectsRemainingLanes = 0;
  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
    prevTransition = ReactSharedInternals.T,
    previousPriority = ReactDOMSharedInternals.p;
  try {
    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
    ReactSharedInternals.T = null;
    renderPriority = pendingPassiveTransitions;
    pendingPassiveTransitions = null;
    var root$jscomp$0 = pendingEffectsRoot,
      lanes = pendingEffectsLanes;
    pendingEffectsStatus = 0;
    pendingFinishedWork = pendingEffectsRoot = null;
    pendingEffectsLanes = 0;
    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    commitPassiveUnmountOnFiber(root$jscomp$0.current);
    commitPassiveMountOnFiber(
      root$jscomp$0,
      root$jscomp$0.current,
      lanes,
      renderPriority
    );
    executionContext = prevExecutionContext;
    flushSyncWorkAcrossRoots_impl(0, !1);
    if (
      injectedHook &&
      "function" === typeof injectedHook.onPostCommitFiberRoot
    )
      try {
        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
      } catch (err) {}
    return !0;
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition),
      releaseRootPooledCache(root, remainingLanes);
  }
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance &&
            (initializeClassErrorUpdate(
              error,
              instance,
              nearestMountedAncestor,
              sourceFiber
            ),
            markRootUpdated$1(instance, 2),
            ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    wakeable.then(root, root));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  root.warmLanes &= ~pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes),
    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
      (workInProgressSuspendedRetryLanes = 0));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane && (retryLane = claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated$1(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function scheduleCallback$1(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
var firstScheduledRoot = null,
  lastScheduledRoot = null,
  didScheduleMicrotask = !1,
  mightHavePendingSyncWork = !1,
  isFlushingWork = !1,
  currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    null === root.next &&
    (null === lastScheduledRoot
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
}
function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (var root$174 = firstScheduledRoot; null !== root$174; ) {
        if (!onlyLegacy)
          if (0 !== syncTransitionLanes) {
            var pendingLanes = root$174.pendingLanes;
            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
            else {
              var suspendedLanes = root$174.suspendedLanes,
                pingedLanes = root$174.pingedLanes;
              JSCompiler_inline_result =
                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
              JSCompiler_inline_result &=
                pendingLanes & ~(suspendedLanes & ~pingedLanes);
              JSCompiler_inline_result =
                JSCompiler_inline_result & 201326741
                  ? (JSCompiler_inline_result & 201326741) | 1
                  : JSCompiler_inline_result
                    ? JSCompiler_inline_result | 2
                    : 0;
            }
            0 !== JSCompiler_inline_result &&
              ((didPerformSomeWork = !0),
              performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
          } else
            (JSCompiler_inline_result = workInProgressRootRenderLanes),
              (JSCompiler_inline_result = getNextLanes(
                root$174,
                root$174 === workInProgressRoot ? JSCompiler_inline_result : 0,
                null !== root$174.cancelPendingCommit ||
                  -1 !== root$174.timeoutHandle
              )),
              0 === (JSCompiler_inline_result & 3) ||
                checkIfRootIsPrerendering(root$174, JSCompiler_inline_result) ||
                ((didPerformSomeWork = !0),
                performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
        root$174 = root$174.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
  }
}
function processRootScheduleInImmediateTask() {
  processRootScheduleInMicrotask();
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  var syncTransitionLanes = 0;
  0 !== currentEventTransitionLane &&
    (shouldAttemptEagerTransition() &&
      (syncTransitionLanes = currentEventTransitionLane),
    (currentEventTransitionLane = 0));
  for (
    var currentTime = now(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    var next = root.next,
      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
    if (0 === nextLanes)
      (root.next = null),
        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
        null === next && (lastScheduledRoot = prev);
    else if (
      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
    )
      mightHavePendingSyncWork = !0;
    root = next;
  }
  flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  for (
    var suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes & -62914561;
    0 < lanes;

  ) {
    var index$3 = 31 - clz32(lanes),
      lane = 1 << index$3,
      expirationTime = expirationTimes[index$3];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  pingedLanes = root.callbackNode;
  if (
    0 === suspendedLanes ||
    (root === currentTime &&
      (2 === workInProgressSuspendedReason ||
        9 === workInProgressSuspendedReason)) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (
    0 === (suspendedLanes & 3) ||
    checkIfRootIsPrerendering(root, suspendedLanes)
  ) {
    currentTime = suspendedLanes & -suspendedLanes;
    if (currentTime === root.callbackPriority) return currentTime;
    null !== pingedLanes && cancelCallback$1(pingedLanes);
    switch (lanesToEventPriority(suspendedLanes)) {
      case 2:
      case 8:
        suspendedLanes = UserBlockingPriority;
        break;
      case 32:
        suspendedLanes = NormalPriority$1;
        break;
      case 268435456:
        suspendedLanes = IdlePriority;
        break;
      default:
        suspendedLanes = NormalPriority$1;
    }
    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
    root.callbackPriority = currentTime;
    root.callbackNode = suspendedLanes;
    return currentTime;
  }
  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
  root.callbackPriority = 2;
  root.callbackNode = null;
  return 2;
}
function performWorkOnRootViaSchedulerTask(root, didTimeout) {
  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
    return (root.callbackNode = null), (root.callbackPriority = 0), null;
  var originalCallbackNode = root.callbackNode;
  if (flushPendingEffects(!0) && root.callbackNode !== originalCallbackNode)
    return null;
  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
  );
  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
  scheduleTaskForRootDuringMicrotask(root, now());
  return null != root.callbackNode && root.callbackNode === originalCallbackNode
    ? performWorkOnRootViaSchedulerTask.bind(null, root)
    : null;
}
function performSyncWorkOnRoot(root, lanes) {
  if (flushPendingEffects()) return null;
  performWorkOnRoot(root, lanes, !0);
}
function scheduleImmediateRootScheduleTask() {
  scheduleMicrotask(function () {
    0 !== (executionContext & 6)
      ? scheduleCallback$3(
          ImmediatePriority,
          processRootScheduleInImmediateTask
        )
      : processRootScheduleInMicrotask();
  });
}
function requestTransitionLane() {
  0 === currentEventTransitionLane &&
    (currentEventTransitionLane = claimNextTransitionLane());
  return currentEventTransitionLane;
}
function coerceFormActionProp(actionProp) {
  return null == actionProp ||
    "symbol" === typeof actionProp ||
    "boolean" === typeof actionProp
    ? null
    : "function" === typeof actionProp
      ? actionProp
      : sanitizeURL("" + actionProp);
}
function createFormDataWithSubmitter(form, submitter) {
  var temp = submitter.ownerDocument.createElement("input");
  temp.name = submitter.name;
  temp.value = submitter.value;
  form.id && temp.setAttribute("form", form.id);
  submitter.parentNode.insertBefore(temp, submitter);
  form = new FormData(form);
  temp.parentNode.removeChild(temp);
  return form;
}
function extractEvents$1(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (
    "submit" === domEventName &&
    maybeTargetInst &&
    maybeTargetInst.stateNode === nativeEventTarget
  ) {
    var action = coerceFormActionProp(
        (nativeEventTarget[internalPropsKey] || null).action
      ),
      submitter = nativeEvent.submitter;
    submitter &&
      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
        ? coerceFormActionProp(domEventName.formAction)
        : submitter.getAttribute("formAction")),
      null !== domEventName && ((action = domEventName), (submitter = null)));
    var event = new SyntheticEvent(
      "action",
      "action",
      null,
      nativeEvent,
      nativeEventTarget
    );
    dispatchQueue.push({
      event: event,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (nativeEvent.defaultPrevented) {
              if (0 !== currentEventTransitionLane) {
                var formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  null,
                  formData
                );
              }
            } else
              "function" === typeof action &&
                (event.preventDefault(),
                (formData = submitter
                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
                  : new FormData(nativeEventTarget)),
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  action,
                  formData
                ));
          },
          currentTarget: nativeEventTarget
        }
      ]
    });
  }
}
for (
  var i$jscomp$inline_1528 = 0;
  i$jscomp$inline_1528 < simpleEventPluginEvents.length;
  i$jscomp$inline_1528++
) {
  var eventName$jscomp$inline_1529 =
      simpleEventPluginEvents[i$jscomp$inline_1528],
    domEventName$jscomp$inline_1530 =
      eventName$jscomp$inline_1529.toLowerCase(),
    capitalizedEvent$jscomp$inline_1531 =
      eventName$jscomp$inline_1529[0].toUpperCase() +
      eventName$jscomp$inline_1529.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_1530,
    "on" + capitalizedEvent$jscomp$inline_1531
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
registerSimpleEvent(TRANSITION_START, "onTransitionStart");
registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nonDelegatedEvents = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(mediaEventTypes)
  );
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
      event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
            instance = _dispatchListeners$i.instance,
            currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          previousInstance = _dispatchListeners$i;
          event.currentTarget = currentTarget;
          try {
            previousInstance(event);
          } catch (error) {
            reportGlobalError(error);
          }
          event.currentTarget = null;
          previousInstance = instance;
        }
    }
  }
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
  void 0 === JSCompiler_inline_result &&
    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
      new Set());
  var listenerSetKey = domEventName + "__bubble";
  JSCompiler_inline_result.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    JSCompiler_inline_result.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach(function (domEventName) {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    var ownerDocument =
      9 === rootContainerElement.nodeType
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    null === ownerDocument ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener
) {
  switch (getEventPriority(domEventName)) {
    case 2:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 8:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  eventSystemFlags = listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
  listenerWrapper = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (listenerWrapper = !0);
  isCapturePhaseListener
    ? void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          capture: !0,
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !0)
    : void 0 !== listenerWrapper
      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
          passive: listenerWrapper
        })
      : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  var ancestorInst = targetInst$jscomp$0;
  if (
    0 === (eventSystemFlags & 1) &&
    0 === (eventSystemFlags & 2) &&
    null !== targetInst$jscomp$0
  )
    a: for (;;) {
      if (null === targetInst$jscomp$0) return;
      var nodeTag = targetInst$jscomp$0.tag;
      if (3 === nodeTag || 4 === nodeTag) {
        var container = targetInst$jscomp$0.stateNode.containerInfo;
        if (container === targetContainer) break;
        if (4 === nodeTag)
          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
            var grandTag = nodeTag.tag;
            if (
              (3 === grandTag || 4 === grandTag) &&
              nodeTag.stateNode.containerInfo === targetContainer
            )
              return;
            nodeTag = nodeTag.return;
          }
        for (; null !== container; ) {
          nodeTag = getClosestInstanceFromNode(container);
          if (null === nodeTag) return;
          grandTag = nodeTag.tag;
          if (
            5 === grandTag ||
            6 === grandTag ||
            26 === grandTag ||
            27 === grandTag
          ) {
            targetInst$jscomp$0 = ancestorInst = nodeTag;
            continue a;
          }
          container = container.parentNode;
        }
      }
      targetInst$jscomp$0 = targetInst$jscomp$0.return;
    }
  batchedUpdates$1(function () {
    var targetInst = ancestorInst,
      nativeEventTarget = getEventTarget(nativeEvent),
      dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent,
          reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
          case "scrollend":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
            break;
          case "toggle":
          case "beforetoggle":
            SyntheticEventCtor = SyntheticToggleEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4),
          accumulateTargetOnly =
            !inCapturePhase &&
            ("scroll" === domEventName || "scrollend" === domEventName),
          reactEventName = inCapturePhase
            ? null !== reactName
              ? reactName + "Capture"
              : null
            : reactName;
        inCapturePhase = [];
        for (
          var instance = targetInst, lastHostComponent;
          null !== instance;

        ) {
          var _instance = instance;
          lastHostComponent = _instance.stateNode;
          _instance = _instance.tag;
          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
            null === lastHostComponent ||
            null === reactEventName ||
            ((_instance = getListener(instance, reactEventName)),
            null != _instance &&
              inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
          if (accumulateTargetOnly) break;
          instance = instance.return;
        }
        0 < inCapturePhase.length &&
          ((reactName = new SyntheticEventCtor(
            reactName,
            reactEventType,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName =
          "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor =
          "mouseout" === domEventName || "pointerout" === domEventName;
        if (
          reactName &&
          nativeEvent !== currentReplayingEvent &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (reactName = nativeEventTarget.ownerDocument)
                ? reactName.defaultView || reactName.parentWindow
                : window;
          if (SyntheticEventCtor) {
            if (
              ((reactEventType =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (SyntheticEventCtor = targetInst),
              (reactEventType = reactEventType
                ? getClosestInstanceFromNode(reactEventType)
                : null),
              null !== reactEventType &&
                ((accumulateTargetOnly =
                  getNearestMountedFiber(reactEventType)),
                (inCapturePhase = reactEventType.tag),
                reactEventType !== accumulateTargetOnly ||
                  (5 !== inCapturePhase &&
                    27 !== inCapturePhase &&
                    6 !== inCapturePhase)))
            )
              reactEventType = null;
          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
          if (SyntheticEventCtor !== reactEventType) {
            inCapturePhase = SyntheticMouseEvent;
            _instance = "onMouseLeave";
            reactEventName = "onMouseEnter";
            instance = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              (inCapturePhase = SyntheticPointerEvent),
                (_instance = "onPointerLeave"),
                (reactEventName = "onPointerEnter"),
                (instance = "pointer");
            accumulateTargetOnly =
              null == SyntheticEventCtor
                ? reactName
                : getNodeFromInstance(SyntheticEventCtor);
            lastHostComponent =
              null == reactEventType
                ? reactName
                : getNodeFromInstance(reactEventType);
            reactName = new inCapturePhase(
              _instance,
              instance + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = accumulateTargetOnly;
            reactName.relatedTarget = lastHostComponent;
            _instance = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((inCapturePhase = new inCapturePhase(
                reactEventName,
                instance + "enter",
                reactEventType,
                nativeEvent,
                nativeEventTarget
              )),
              (inCapturePhase.target = lastHostComponent),
              (inCapturePhase.relatedTarget = accumulateTargetOnly),
              (_instance = inCapturePhase));
            accumulateTargetOnly = _instance;
            if (SyntheticEventCtor && reactEventType)
              b: {
                inCapturePhase = SyntheticEventCtor;
                reactEventName = reactEventType;
                instance = 0;
                for (
                  lastHostComponent = inCapturePhase;
                  lastHostComponent;
                  lastHostComponent = getParent(lastHostComponent)
                )
                  instance++;
                lastHostComponent = 0;
                for (
                  _instance = reactEventName;
                  _instance;
                  _instance = getParent(_instance)
                )
                  lastHostComponent++;
                for (; 0 < instance - lastHostComponent; )
                  (inCapturePhase = getParent(inCapturePhase)), instance--;
                for (; 0 < lastHostComponent - instance; )
                  (reactEventName = getParent(reactEventName)),
                    lastHostComponent--;
                for (; instance--; ) {
                  if (
                    inCapturePhase === reactEventName ||
                    (null !== reactEventName &&
                      inCapturePhase === reactEventName.alternate)
                  )
                    break b;
                  inCapturePhase = getParent(inCapturePhase);
                  reactEventName = getParent(reactEventName);
                }
                inCapturePhase = null;
              }
            else inCapturePhase = null;
            null !== SyntheticEventCtor &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactName,
                SyntheticEventCtor,
                inCapturePhase,
                !1
              );
            null !== reactEventType &&
              null !== accumulateTargetOnly &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                accumulateTargetOnly,
                reactEventType,
                inCapturePhase,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          "select" === SyntheticEventCtor ||
          ("input" === SyntheticEventCtor && "file" === reactName.type)
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName),
            !SyntheticEventCtor ||
            "input" !== SyntheticEventCtor.toLowerCase() ||
            ("checkbox" !== reactName.type && "radio" !== reactName.type)
              ? targetInst &&
                isCustomElement(targetInst.elementType) &&
                (getTargetInstFunc = getTargetInstForChangeEvent)
              : (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName &&
          targetInst &&
          "number" === reactName.type &&
          null != targetInst.memoizedProps.value &&
          setDefaultValue(reactName, "number", reactName.value);
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (
            isTextInputElement(handleEventFunc) ||
            "true" === handleEventFunc.contentEditable
          )
            (activeElement = handleEventFunc),
              (activeElementInst = targetInst),
              (lastSelection = null);
          break;
        case "focusout":
          lastSelection = activeElementInst = activeElement = null;
          break;
        case "mousedown":
          mouseDown = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = !1;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : "keydown" === domEventName &&
            229 === nativeEvent.keyCode &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? "onCompositionEnd" === eventType &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
              (startText = "value" in root ? root.value : root.textContent),
              (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
              null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
          0 < eventType.length &&
            ((handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }),
            (handleEventFunc.data = fallbackData));
      extractEvents$1(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    var captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    var _instance2 = targetFiber,
      stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
      null === stateNode ||
      ((_instance2 = getListener(targetFiber, captureName)),
      null != _instance2 &&
        listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ),
      (_instance2 = getListener(targetFiber, reactName)),
      null != _instance2 &&
        listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
    if (3 === targetFiber.tag) return listeners;
    targetFiber = targetFiber.return;
  }
  return [];
}
function getParent(inst) {
  if (null === inst) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    var _instance3 = target,
      alternate = _instance3.alternate,
      stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
      null === stateNode ||
      ((alternate = stateNode),
      inCapturePhase
        ? ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.unshift(
              createDispatchListener(target, stateNode, alternate)
            ))
        : inCapturePhase ||
          ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.push(
              createDispatchListener(target, stateNode, alternate)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return ("string" === typeof markup ? markup : "" + markup)
    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function checkForUnmatchedText(serverText, clientText) {
  clientText = normalizeMarkupForTextOrAttribute(clientText);
  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
}
function noop$1() {}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "children":
      "string" === typeof value
        ? "body" === tag ||
          ("textarea" === tag && "" === value) ||
          setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          "body" !== tag &&
          setTextContent(domElement, "" + value);
      break;
    case "className":
      setValueForKnownAttribute(domElement, "class", value);
      break;
    case "tabIndex":
      setValueForKnownAttribute(domElement, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      setValueForKnownAttribute(domElement, key, value);
      break;
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "data":
      if ("object" !== tag) {
        setValueForKnownAttribute(domElement, "data", value);
        break;
      }
    case "src":
    case "href":
      if ("" === value && ("a" !== tag || "href" !== key)) {
        domElement.removeAttribute(key);
        break;
      }
      if (
        null == value ||
        "function" === typeof value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof value) {
        domElement.setAttribute(
          key,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        "function" === typeof prevValue &&
          ("formAction" === key
            ? ("input" !== tag &&
                setProp(domElement, tag, "name", props.name, props, null),
              setProp(
                domElement,
                tag,
                "formEncType",
                props.formEncType,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formMethod",
                props.formMethod,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formTarget",
                props.formTarget,
                props,
                null
              ))
            : (setProp(domElement, tag, "encType", props.encType, props, null),
              setProp(domElement, tag, "method", props.method, props, null),
              setProp(domElement, tag, "target", props.target, props, null)));
      if (
        null == value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL("" + value);
      domElement.setAttribute(key, value);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "multiple":
      domElement.multiple =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "muted":
      domElement.muted =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        null == value ||
        "function" === typeof value ||
        "boolean" === typeof value ||
        "symbol" === typeof value
      ) {
        domElement.removeAttribute("xlink:href");
        break;
      }
      key = sanitizeURL("" + value);
      domElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        key
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "" + value)
        : domElement.removeAttribute(key);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "")
        : domElement.removeAttribute(key);
      break;
    case "capture":
    case "download":
      !0 === value
        ? domElement.setAttribute(key, "")
        : !1 !== value &&
            null != value &&
            "function" !== typeof value &&
            "symbol" !== typeof value
          ? domElement.setAttribute(key, value)
          : domElement.removeAttribute(key);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != value &&
      "function" !== typeof value &&
      "symbol" !== typeof value &&
      !isNaN(value) &&
      1 <= value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
      break;
    case "rowSpan":
    case "start":
      null == value ||
      "function" === typeof value ||
      "symbol" === typeof value ||
      isNaN(value)
        ? domElement.removeAttribute(key)
        : domElement.setAttribute(key, value);
      break;
    case "popover":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      setValueForAttribute(domElement, "popover", value);
      break;
    case "xlinkActuate":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        value
      );
      break;
    case "xlinkArcrole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        value
      );
      break;
    case "xlinkRole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        value
      );
      break;
    case "xlinkShow":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        value
      );
      break;
    case "xlinkTitle":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        value
      );
      break;
    case "xlinkType":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        value
      );
      break;
    case "xmlBase":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        value
      );
      break;
    case "xmlLang":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        value
      );
      break;
    case "xmlSpace":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        value
      );
      break;
    case "is":
      setValueForAttribute(domElement, "is", value);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (
        !(2 < key.length) ||
        ("o" !== key[0] && "O" !== key[0]) ||
        ("n" !== key[1] && "N" !== key[1])
      )
        (key = aliases.get(key) || key),
          setValueForAttribute(domElement, key, value);
  }
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          domElement.innerHTML = key;
        }
      }
      break;
    case "children":
      "string" === typeof value
        ? setTextContent(domElement, value)
        : ("number" === typeof value || "bigint" === typeof value) &&
          setTextContent(domElement, "" + value);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!registrationNameDependencies.hasOwnProperty(key))
        a: {
          if (
            "o" === key[0] &&
            "n" === key[1] &&
            ((props = key.endsWith("Capture")),
            (tag = key.slice(2, props ? key.length - 7 : void 0)),
            (prevValue = domElement[internalPropsKey] || null),
            (prevValue = null != prevValue ? prevValue[key] : null),
            "function" === typeof prevValue &&
              domElement.removeEventListener(tag, prevValue, props),
            "function" === typeof value)
          ) {
            "function" !== typeof prevValue &&
              null !== prevValue &&
              (key in domElement
                ? (domElement[key] = null)
                : domElement.hasAttribute(key) &&
                  domElement.removeAttribute(key));
            domElement.addEventListener(tag, value, props);
            break a;
          }
          key in domElement
            ? (domElement[key] = value)
            : !0 === value
              ? domElement.setAttribute(key, "")
              : setValueForAttribute(domElement, key, value);
        }
  }
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      var hasSrc = !1,
        hasSrcSet = !1,
        propKey;
      for (propKey in props)
        if (props.hasOwnProperty(propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "src":
                hasSrc = !0;
                break;
              case "srcSet":
                hasSrcSet = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(formatProdErrorMessage(137, tag));
              default:
                setProp(domElement, tag, propKey, propValue, props, null);
            }
        }
      hasSrcSet &&
        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
      return;
    case "input":
      listenToNonDelegatedEvent("invalid", domElement);
      var defaultValue = (propKey = propValue = hasSrcSet = null),
        checked = null,
        defaultChecked = null;
      for (hasSrc in props)
        if (props.hasOwnProperty(hasSrc)) {
          var propValue$188 = props[hasSrc];
          if (null != propValue$188)
            switch (hasSrc) {
              case "name":
                hasSrcSet = propValue$188;
                break;
              case "type":
                propValue = propValue$188;
                break;
              case "checked":
                checked = propValue$188;
                break;
              case "defaultChecked":
                defaultChecked = propValue$188;
                break;
              case "value":
                propKey = propValue$188;
                break;
              case "defaultValue":
                defaultValue = propValue$188;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != propValue$188)
                  throw Error(formatProdErrorMessage(137, tag));
                break;
              default:
                setProp(domElement, tag, hasSrc, propValue$188, props, null);
            }
        }
      initInput(
        domElement,
        propKey,
        defaultValue,
        checked,
        defaultChecked,
        propValue,
        hasSrcSet,
        !1
      );
      track(domElement);
      return;
    case "select":
      listenToNonDelegatedEvent("invalid", domElement);
      hasSrc = propValue = propKey = null;
      for (hasSrcSet in props)
        if (
          props.hasOwnProperty(hasSrcSet) &&
          ((defaultValue = props[hasSrcSet]), null != defaultValue)
        )
          switch (hasSrcSet) {
            case "value":
              propKey = defaultValue;
              break;
            case "defaultValue":
              propValue = defaultValue;
              break;
            case "multiple":
              hasSrc = defaultValue;
            default:
              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
          }
      tag = propKey;
      props = propValue;
      domElement.multiple = !!hasSrc;
      null != tag
        ? updateOptions(domElement, !!hasSrc, tag, !1)
        : null != props && updateOptions(domElement, !!hasSrc, props, !0);
      return;
    case "textarea":
      listenToNonDelegatedEvent("invalid", domElement);
      propKey = hasSrcSet = hasSrc = null;
      for (propValue in props)
        if (
          props.hasOwnProperty(propValue) &&
          ((defaultValue = props[propValue]), null != defaultValue)
        )
          switch (propValue) {
            case "value":
              hasSrc = defaultValue;
              break;
            case "defaultValue":
              hasSrcSet = defaultValue;
              break;
            case "children":
              propKey = defaultValue;
              break;
            case "dangerouslySetInnerHTML":
              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
              break;
            default:
              setProp(domElement, tag, propValue, defaultValue, props, null);
          }
      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
      track(domElement);
      return;
    case "option":
      for (checked in props)
        if (
          props.hasOwnProperty(checked) &&
          ((hasSrc = props[checked]), null != hasSrc)
        )
          switch (checked) {
            case "selected":
              domElement.selected =
                hasSrc &&
                "function" !== typeof hasSrc &&
                "symbol" !== typeof hasSrc;
              break;
            default:
              setProp(domElement, tag, checked, hasSrc, props, null);
          }
      return;
    case "dialog":
      listenToNonDelegatedEvent("beforetoggle", domElement);
      listenToNonDelegatedEvent("toggle", domElement);
      listenToNonDelegatedEvent("cancel", domElement);
      listenToNonDelegatedEvent("close", domElement);
      break;
    case "iframe":
    case "object":
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "video":
    case "audio":
      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
      break;
    case "image":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", domElement);
      break;
    case "embed":
    case "source":
    case "link":
      listenToNonDelegatedEvent("error", domElement),
        listenToNonDelegatedEvent("load", domElement);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (defaultChecked in props)
        if (
          props.hasOwnProperty(defaultChecked) &&
          ((hasSrc = props[defaultChecked]), null != hasSrc)
        )
          switch (defaultChecked) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(formatProdErrorMessage(137, tag));
            default:
              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (propValue$188 in props)
          props.hasOwnProperty(propValue$188) &&
            ((hasSrc = props[propValue$188]),
            void 0 !== hasSrc &&
              setPropOnCustomElement(
                domElement,
                tag,
                propValue$188,
                hasSrc,
                props,
                void 0
              ));
        return;
      }
  }
  for (defaultValue in props)
    props.hasOwnProperty(defaultValue) &&
      ((hasSrc = props[defaultValue]),
      null != hasSrc &&
        setProp(domElement, tag, defaultValue, hasSrc, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var name = null,
        type = null,
        value = null,
        defaultValue = null,
        lastDefaultValue = null,
        checked = null,
        defaultChecked = null;
      for (propKey in lastProps) {
        var lastProp = lastProps[propKey];
        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
          switch (propKey) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              lastDefaultValue = lastProp;
            default:
              nextProps.hasOwnProperty(propKey) ||
                setProp(domElement, tag, propKey, null, nextProps, lastProp);
          }
      }
      for (var propKey$205 in nextProps) {
        var propKey = nextProps[propKey$205];
        lastProp = lastProps[propKey$205];
        if (
          nextProps.hasOwnProperty(propKey$205) &&
          (null != propKey || null != lastProp)
        )
          switch (propKey$205) {
            case "type":
              type = propKey;
              break;
            case "name":
              name = propKey;
              break;
            case "checked":
              checked = propKey;
              break;
            case "defaultChecked":
              defaultChecked = propKey;
              break;
            case "value":
              value = propKey;
              break;
            case "defaultValue":
              defaultValue = propKey;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              propKey !== lastProp &&
                setProp(
                  domElement,
                  tag,
                  propKey$205,
                  propKey,
                  nextProps,
                  lastProp
                );
          }
      }
      updateInput(
        domElement,
        value,
        defaultValue,
        lastDefaultValue,
        checked,
        defaultChecked,
        type,
        name
      );
      return;
    case "select":
      propKey = value = defaultValue = propKey$205 = null;
      for (type in lastProps)
        if (
          ((lastDefaultValue = lastProps[type]),
          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
        )
          switch (type) {
            case "value":
              break;
            case "multiple":
              propKey = lastDefaultValue;
            default:
              nextProps.hasOwnProperty(type) ||
                setProp(
                  domElement,
                  tag,
                  type,
                  null,
                  nextProps,
                  lastDefaultValue
                );
          }
      for (name in nextProps)
        if (
          ((type = nextProps[name]),
          (lastDefaultValue = lastProps[name]),
          nextProps.hasOwnProperty(name) &&
            (null != type || null != lastDefaultValue))
        )
          switch (name) {
            case "value":
              propKey$205 = type;
              break;
            case "defaultValue":
              defaultValue = type;
              break;
            case "multiple":
              value = type;
            default:
              type !== lastDefaultValue &&
                setProp(
                  domElement,
                  tag,
                  name,
                  type,
                  nextProps,
                  lastDefaultValue
                );
          }
      tag = defaultValue;
      lastProps = value;
      nextProps = propKey;
      null != propKey$205
        ? updateOptions(domElement, !!lastProps, propKey$205, !1)
        : !!nextProps !== !!lastProps &&
          (null != tag
            ? updateOptions(domElement, !!lastProps, tag, !0)
            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
      return;
    case "textarea":
      propKey = propKey$205 = null;
      for (defaultValue in lastProps)
        if (
          ((name = lastProps[defaultValue]),
          lastProps.hasOwnProperty(defaultValue) &&
            null != name &&
            !nextProps.hasOwnProperty(defaultValue))
        )
          switch (defaultValue) {
            case "value":
              break;
            case "children":
              break;
            default:
              setProp(domElement, tag, defaultValue, null, nextProps, name);
          }
      for (value in nextProps)
        if (
          ((name = nextProps[value]),
          (type = lastProps[value]),
          nextProps.hasOwnProperty(value) && (null != name || null != type))
        )
          switch (value) {
            case "value":
              propKey$205 = name;
              break;
            case "defaultValue":
              propKey = name;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != name) throw Error(formatProdErrorMessage(91));
              break;
            default:
              name !== type &&
                setProp(domElement, tag, value, name, nextProps, type);
          }
      updateTextarea(domElement, propKey$205, propKey);
      return;
    case "option":
      for (var propKey$221 in lastProps)
        if (
          ((propKey$205 = lastProps[propKey$221]),
          lastProps.hasOwnProperty(propKey$221) &&
            null != propKey$205 &&
            !nextProps.hasOwnProperty(propKey$221))
        )
          switch (propKey$221) {
            case "selected":
              domElement.selected = !1;
              break;
            default:
              setProp(
                domElement,
                tag,
                propKey$221,
                null,
                nextProps,
                propKey$205
              );
          }
      for (lastDefaultValue in nextProps)
        if (
          ((propKey$205 = nextProps[lastDefaultValue]),
          (propKey = lastProps[lastDefaultValue]),
          nextProps.hasOwnProperty(lastDefaultValue) &&
            propKey$205 !== propKey &&
            (null != propKey$205 || null != propKey))
        )
          switch (lastDefaultValue) {
            case "selected":
              domElement.selected =
                propKey$205 &&
                "function" !== typeof propKey$205 &&
                "symbol" !== typeof propKey$205;
              break;
            default:
              setProp(
                domElement,
                tag,
                lastDefaultValue,
                propKey$205,
                nextProps,
                propKey
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var propKey$226 in lastProps)
        (propKey$205 = lastProps[propKey$226]),
          lastProps.hasOwnProperty(propKey$226) &&
            null != propKey$205 &&
            !nextProps.hasOwnProperty(propKey$226) &&
            setProp(domElement, tag, propKey$226, null, nextProps, propKey$205);
      for (checked in nextProps)
        if (
          ((propKey$205 = nextProps[checked]),
          (propKey = lastProps[checked]),
          nextProps.hasOwnProperty(checked) &&
            propKey$205 !== propKey &&
            (null != propKey$205 || null != propKey))
        )
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey$205)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              setProp(
                domElement,
                tag,
                checked,
                propKey$205,
                nextProps,
                propKey
              );
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (var propKey$231 in lastProps)
          (propKey$205 = lastProps[propKey$231]),
            lastProps.hasOwnProperty(propKey$231) &&
              void 0 !== propKey$205 &&
              !nextProps.hasOwnProperty(propKey$231) &&
              setPropOnCustomElement(
                domElement,
                tag,
                propKey$231,
                void 0,
                nextProps,
                propKey$205
              );
        for (defaultChecked in nextProps)
          (propKey$205 = nextProps[defaultChecked]),
            (propKey = lastProps[defaultChecked]),
            !nextProps.hasOwnProperty(defaultChecked) ||
              propKey$205 === propKey ||
              (void 0 === propKey$205 && void 0 === propKey) ||
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$205,
                nextProps,
                propKey
              );
        return;
      }
  }
  for (var propKey$236 in lastProps)
    (propKey$205 = lastProps[propKey$236]),
      lastProps.hasOwnProperty(propKey$236) &&
        null != propKey$205 &&
        !nextProps.hasOwnProperty(propKey$236) &&
        setProp(domElement, tag, propKey$236, null, nextProps, propKey$205);
  for (lastProp in nextProps)
    (propKey$205 = nextProps[lastProp]),
      (propKey = lastProps[lastProp]),
      !nextProps.hasOwnProperty(lastProp) ||
        propKey$205 === propKey ||
        (null == propKey$205 && null == propKey) ||
        setProp(domElement, tag, lastProp, propKey$205, nextProps, propKey);
}
var eventsEnabled = null,
  selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return 9 === rootContainerElement.nodeType
    ? rootContainerElement
    : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (0 === parentNamespace)
    switch (type) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === parentNamespace && "foreignObject" === type
    ? 0
    : parentNamespace;
}
function shouldSetTextContent(type, props) {
  return (
    "textarea" === type ||
    "noscript" === type ||
    "string" === typeof props.children ||
    "number" === typeof props.children ||
    "bigint" === typeof props.children ||
    ("object" === typeof props.dangerouslySetInnerHTML &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
var currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  var event = window.event;
  if (event && "popstate" === event.type) {
    if (event === currentPopstateTransitionEvent) return !1;
    currentPopstateTransitionEvent = event;
    return !0;
  }
  currentPopstateTransitionEvent = null;
  return !1;
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
  localPromise = "function" === typeof Promise ? Promise : void 0,
  scheduleMicrotask =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof localPromise
        ? function (callback) {
            return localPromise
              .resolve(null)
              .then(callback)
              .catch(handleErrorInNextTick);
          }
        : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function () {
    throw error;
  });
}
function isSingletonScope(type) {
  return "head" === type;
}
function clearSuspenseBoundary(parentInstance, suspenseInstance) {
  var node = suspenseInstance,
    possiblePreambleContribution = 0,
    depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node)) {
        if (
          0 < possiblePreambleContribution &&
          8 > possiblePreambleContribution
        ) {
          node = possiblePreambleContribution;
          var ownerDocument = parentInstance.ownerDocument;
          node & 1 && releaseSingletonInstance(ownerDocument.documentElement);
          node & 2 && releaseSingletonInstance(ownerDocument.body);
          if (node & 4)
            for (
              node = ownerDocument.head,
                releaseSingletonInstance(node),
                ownerDocument = node.firstChild;
              ownerDocument;

            ) {
              var nextNode$jscomp$0 = ownerDocument.nextSibling,
                nodeName = ownerDocument.nodeName;
              ownerDocument[internalHoistableMarker] ||
                "SCRIPT" === nodeName ||
                "STYLE" === nodeName ||
                ("LINK" === nodeName &&
                  "stylesheet" === ownerDocument.rel.toLowerCase()) ||
                node.removeChild(ownerDocument);
              ownerDocument = nextNode$jscomp$0;
            }
        }
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(suspenseInstance);
          return;
        }
        depth--;
      } else
        "$" === node || "$?" === node || "$!" === node
          ? depth++
          : (possiblePreambleContribution = node.charCodeAt(0) - 48);
    else possiblePreambleContribution = 0;
    node = nextNode;
  } while (node);
  retryIfBlockedOn(suspenseInstance);
}
function clearContainerSparingly(container) {
  var nextNode = container.firstChild;
  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    var node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        clearContainerSparingly(node);
        detachDeletedInstance(node);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === node.rel.toLowerCase()) continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; 1 === instance.nodeType; ) {
    var anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (
        !inRootOrSingleton &&
        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
      )
        break;
    } else if (!inRootOrSingleton)
      if ("input" === type && "hidden" === instance.type) {
        var name = null == anyProps.name ? null : "" + anyProps.name;
        if (
          "hidden" === anyProps.type &&
          instance.getAttribute("name") === name
        )
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
        case "meta":
          if (!instance.hasAttribute("itemprop")) break;
          return instance;
        case "link":
          name = instance.getAttribute("rel");
          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
            break;
          else if (
            name !== anyProps.rel ||
            instance.getAttribute("href") !==
              (null == anyProps.href || "" === anyProps.href
                ? null
                : anyProps.href) ||
            instance.getAttribute("crossorigin") !==
              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
            instance.getAttribute("title") !==
              (null == anyProps.title ? null : anyProps.title)
          )
            break;
          return instance;
        case "style":
          if (instance.hasAttribute("data-precedence")) break;
          return instance;
        case "script":
          name = instance.getAttribute("src");
          if (
            (name !== (null == anyProps.src ? null : anyProps.src) ||
              instance.getAttribute("type") !==
                (null == anyProps.type ? null : anyProps.type) ||
              instance.getAttribute("crossorigin") !==
                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
            name &&
            instance.hasAttribute("async") &&
            !instance.hasAttribute("itemprop")
          )
            break;
          return instance;
        default:
          return instance;
      }
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if ("" === text) return null;
  for (; 3 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratable(instance.nextSibling);
    if (null === instance) return null;
  }
  return instance;
}
function isSuspenseInstanceFallback(instance) {
  return (
    "$!" === instance.data ||
    ("$?" === instance.data && "complete" === instance.ownerDocument.readyState)
  );
}
function registerSuspenseInstanceRetry(instance, callback) {
  var ownerDocument = instance.ownerDocument;
  if ("$?" !== instance.data || "complete" === ownerDocument.readyState)
    callback();
  else {
    var listener = function () {
      callback();
      ownerDocument.removeEventListener("DOMContentLoaded", listener);
    };
    ownerDocument.addEventListener("DOMContentLoaded", listener);
    instance._reactRetry = listener;
  }
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (8 === nodeType) {
      nodeType = node.data;
      if (
        "$" === nodeType ||
        "$!" === nodeType ||
        "$?" === nodeType ||
        "F!" === nodeType ||
        "F" === nodeType
      )
        break;
      if ("/$" === nodeType) return null;
    }
  }
  return node;
}
var previousHydratableOnEnteringScopedSingleton = null;
function getParentSuspenseInstance(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if ("$" === data || "$!" === data || "$?" === data) {
        if (0 === depth) return targetInstance;
        depth--;
      } else "/$" === data && depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
    case "html":
      type = props.documentElement;
      if (!type) throw Error(formatProdErrorMessage(452));
      return type;
    case "head":
      type = props.head;
      if (!type) throw Error(formatProdErrorMessage(453));
      return type;
    case "body":
      type = props.body;
      if (!type) throw Error(formatProdErrorMessage(454));
      return type;
    default:
      throw Error(formatProdErrorMessage(451));
  }
}
function releaseSingletonInstance(instance) {
  for (var attributes = instance.attributes; attributes.length; )
    instance.removeAttributeNode(attributes[0]);
  detachDeletedInstance(instance);
}
var preloadPropsMap = new Map(),
  preconnectsSet = new Set();
function getHoistableRoot(container) {
  return "function" === typeof container.getRootNode
    ? container.getRootNode()
    : 9 === container.nodeType
      ? container
      : container.ownerDocument;
}
var previousDispatcher = ReactDOMSharedInternals.d;
ReactDOMSharedInternals.d = {
  f: flushSyncWork,
  r: requestFormReset,
  D: prefetchDNS,
  C: preconnect,
  L: preload,
  m: preloadModule,
  X: preinitScript,
  S: preinitStyle,
  M: preinitModuleScript
};
function flushSyncWork() {
  var previousWasRendering = previousDispatcher.f(),
    wasRendering = flushSyncWork$1();
  return previousWasRendering || wasRendering;
}
function requestFormReset(form) {
  var formInst = getInstanceFromNode(form);
  null !== formInst && 5 === formInst.tag && "form" === formInst.type
    ? requestFormReset$1(formInst)
    : previousDispatcher.r(form);
}
var globalDocument = "undefined" === typeof document ? null : document;
function preconnectAs(rel, href, crossOrigin) {
  var ownerDocument = globalDocument;
  if (ownerDocument && "string" === typeof href && href) {
    var limitedEscapedHref =
      escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref =
      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    "string" === typeof crossOrigin &&
      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) ||
      (preconnectsSet.add(limitedEscapedHref),
      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
      null === ownerDocument.querySelector(limitedEscapedHref) &&
        ((href = ownerDocument.createElement("link")),
        setInitialProperties(href, "link", rel),
        markNodeAsHoistable(href),
        ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS(href) {
  previousDispatcher.D(href);
  preconnectAs("dns-prefetch", href, null);
}
function preconnect(href, crossOrigin) {
  previousDispatcher.C(href, crossOrigin);
  preconnectAs("preconnect", href, crossOrigin);
}
function preload(href, as, options) {
  previousDispatcher.L(href, as, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href && as) {
    var preloadSelector =
      'link[rel="preload"][as="' +
      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
      '"]';
    "image" === as
      ? options && options.imageSrcSet
        ? ((preloadSelector +=
            '[imagesrcset="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(
              options.imageSrcSet
            ) +
            '"]'),
          "string" === typeof options.imageSizes &&
            (preloadSelector +=
              '[imagesizes="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                options.imageSizes
              ) +
              '"]'))
        : (preloadSelector +=
            '[href="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
            '"]')
      : (preloadSelector +=
          '[href="' +
          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
          '"]');
    var key = preloadSelector;
    switch (as) {
      case "style":
        key = getStyleKey(href);
        break;
      case "script":
        key = getScriptKey(href);
    }
    preloadPropsMap.has(key) ||
      ((href = assign(
        {
          rel: "preload",
          href:
            "image" === as && options && options.imageSrcSet ? void 0 : href,
          as: as
        },
        options
      )),
      preloadPropsMap.set(key, href),
      null !== ownerDocument.querySelector(preloadSelector) ||
        ("style" === as &&
          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
        ("script" === as &&
          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
        ((as = ownerDocument.createElement("link")),
        setInitialProperties(as, "link", href),
        markNodeAsHoistable(as),
        ownerDocument.head.appendChild(as)));
  }
}
function preloadModule(href, options) {
  previousDispatcher.m(href, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var as = options && "string" === typeof options.as ? options.as : "script",
      preloadSelector =
        'link[rel="modulepreload"][as="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
        '"][href="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
        '"]',
      key = preloadSelector;
    switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        key = getScriptKey(href);
    }
    if (
      !preloadPropsMap.has(key) &&
      ((href = assign({ rel: "modulepreload", href: href }, options)),
      preloadPropsMap.set(key, href),
      null === ownerDocument.querySelector(preloadSelector))
    ) {
      switch (as) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
            return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  previousDispatcher.S(href, precedence, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && href) {
    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
      key = getStyleKey(href);
    precedence = precedence || "default";
    var resource = styles.get(key);
    if (!resource) {
      var state = { loading: 0, preload: null };
      if (
        (resource = ownerDocument.querySelector(
          getStylesheetSelectorFromKey(key)
        ))
      )
        state.loading = 5;
      else {
        href = assign(
          { rel: "stylesheet", href: href, "data-precedence": precedence },
          options
        );
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForStylesheet(href, options);
        var link = (resource = ownerDocument.createElement("link"));
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise(function (resolve, reject) {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", function () {
          state.loading |= 1;
        });
        link.addEventListener("error", function () {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state: state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  previousDispatcher.X(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0 }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  previousDispatcher.M(src, options);
  var ownerDocument = globalDocument;
  if (ownerDocument && src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0, type: "module" }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps, currentResource) {
  var JSCompiler_inline_result = (JSCompiler_inline_result =
    rootInstanceStackCursor.current)
    ? getHoistableRoot(JSCompiler_inline_result)
    : null;
  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
  switch (type) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof pendingProps.precedence &&
        "string" === typeof pendingProps.href
        ? ((currentProps = getStyleKey(pendingProps.href)),
          (pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles),
          (currentResource = pendingProps.get(currentProps)),
          currentResource ||
            ((currentResource = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            }),
            pendingProps.set(currentProps, currentResource)),
          currentResource)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        "stylesheet" === pendingProps.rel &&
        "string" === typeof pendingProps.href &&
        "string" === typeof pendingProps.precedence
      ) {
        type = getStyleKey(pendingProps.href);
        var styles$244 = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles,
          resource$245 = styles$244.get(type);
        resource$245 ||
          ((JSCompiler_inline_result =
            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
          (resource$245 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }),
          styles$244.set(type, resource$245),
          (styles$244 = JSCompiler_inline_result.querySelector(
            getStylesheetSelectorFromKey(type)
          )) &&
            !styles$244._p &&
            ((resource$245.instance = styles$244),
            (resource$245.state.loading = 5)),
          preloadPropsMap.has(type) ||
            ((pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }),
            preloadPropsMap.set(type, pendingProps),
            styles$244 ||
              preloadStylesheet(
                JSCompiler_inline_result,
                type,
                pendingProps,
                resource$245.state
              )));
        if (currentProps && null === currentResource)
          throw Error(formatProdErrorMessage(528, ""));
        return resource$245;
      }
      if (currentProps && null !== currentResource)
        throw Error(formatProdErrorMessage(529, ""));
      return null;
    case "script":
      return (
        (currentProps = pendingProps.async),
        (pendingProps = pendingProps.src),
        "string" === typeof pendingProps &&
        currentProps &&
        "function" !== typeof currentProps &&
        "symbol" !== typeof currentProps
          ? ((currentProps = getScriptKey(pendingProps)),
            (pendingProps = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableScripts),
            (currentResource = pendingProps.get(currentProps)),
            currentResource ||
              ((currentResource = {
                type: "script",
                instance: null,
                count: 0,
                state: null
              }),
              pendingProps.set(currentProps, currentResource)),
            currentResource)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return assign({}, rawProps, {
    "data-precedence": rawProps.precedence,
    precedence: null
  });
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
    ? (state.loading = 1)
    : ((key = ownerDocument.createElement("link")),
      (state.preload = key),
      key.addEventListener("load", function () {
        return (state.loading |= 1);
      }),
      key.addEventListener("error", function () {
        return (state.loading |= 2);
      }),
      setInitialProperties(key, "link", preloadProps),
      markNodeAsHoistable(key),
      ownerDocument.head.appendChild(key));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (null === resource.instance)
    switch (resource.type) {
      case "style":
        var instance = hoistableRoot.querySelector(
          'style[data-href~="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
            '"]'
        );
        if (instance)
          return (
            (resource.instance = instance),
            markNodeAsHoistable(instance),
            instance
          );
        var styleProps = assign({}, props, {
          "data-href": props.href,
          "data-precedence": props.precedence,
          href: null,
          precedence: null
        });
        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
          "style"
        );
        markNodeAsHoistable(instance);
        setInitialProperties(instance, "style", styleProps);
        insertStylesheet(instance, props.precedence, hoistableRoot);
        return (resource.instance = instance);
      case "stylesheet":
        styleProps = getStyleKey(props.href);
        var instance$250 = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(styleProps)
        );
        if (instance$250)
          return (
            (resource.state.loading |= 4),
            (resource.instance = instance$250),
            markNodeAsHoistable(instance$250),
            instance$250
          );
        instance = stylesheetPropsFromRawProps(props);
        (styleProps = preloadPropsMap.get(styleProps)) &&
          adoptPreloadPropsForStylesheet(instance, styleProps);
        instance$250 = (
          hoistableRoot.ownerDocument || hoistableRoot
        ).createElement("link");
        markNodeAsHoistable(instance$250);
        var linkInstance = instance$250;
        linkInstance._p = new Promise(function (resolve, reject) {
          linkInstance.onload = resolve;
          linkInstance.onerror = reject;
        });
        setInitialProperties(instance$250, "link", instance);
        resource.state.loading |= 4;
        insertStylesheet(instance$250, props.precedence, hoistableRoot);
        return (resource.instance = instance$250);
      case "script":
        instance$250 = getScriptKey(props.src);
        if (
          (styleProps = hoistableRoot.querySelector(
            getScriptSelectorFromKey(instance$250)
          ))
        )
          return (
            (resource.instance = styleProps),
            markNodeAsHoistable(styleProps),
            styleProps
          );
        instance = props;
        if ((styleProps = preloadPropsMap.get(instance$250)))
          (instance = assign({}, props)),
            adoptPreloadPropsForScript(instance, styleProps);
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        styleProps = hoistableRoot.createElement("script");
        markNodeAsHoistable(styleProps);
        setInitialProperties(styleProps, "link", instance);
        hoistableRoot.head.appendChild(styleProps);
        return (resource.instance = styleProps);
      case "void":
        return null;
      default:
        throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    "stylesheet" === resource.type &&
      0 === (resource.state.loading & 4) &&
      ((instance = resource.instance),
      (resource.state.loading |= 4),
      insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root) {
  for (
    var nodes = root.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      last = nodes.length ? nodes[nodes.length - 1] : null,
      prior = last,
      i = 0;
    i < nodes.length;
    i++
  ) {
    var node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior
    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
    : ((precedence = 9 === root.nodeType ? root.head : root),
      precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  null == stylesheetProps.crossOrigin &&
    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  null == stylesheetProps.referrerPolicy &&
    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  null == scriptProps.crossOrigin &&
    (scriptProps.crossOrigin = preloadProps.crossOrigin);
  null == scriptProps.referrerPolicy &&
    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  null == scriptProps.integrity &&
    (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (null === tagCaches) {
    var cache = new Map();
    var caches = (tagCaches = new Map());
    caches.set(ownerDocument, cache);
  } else
    (caches = tagCaches),
      (cache = caches.get(ownerDocument)),
      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    var node = ownerDocument[caches];
    if (
      !(
        node[internalHoistableMarker] ||
        node[internalInstanceKey] ||
        ("link" === type && "stylesheet" === node.getAttribute("rel"))
      ) &&
      "http://www.w3.org/2000/svg" !== node.namespaceURI
    ) {
      var nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      var existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    "title" === type ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (1 === hostContext || null != props.itemProp) return !1;
  switch (type) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        "string" !== typeof props.precedence ||
        "string" !== typeof props.href ||
        "" === props.href
      )
        break;
      return !0;
    case "link":
      if (
        "string" !== typeof props.rel ||
        "string" !== typeof props.href ||
        "" === props.href ||
        props.onLoad ||
        props.onError
      )
        break;
      switch (props.rel) {
        case "stylesheet":
          return (
            (type = props.disabled),
            "string" === typeof props.precedence && null == type
          );
        default:
          return !0;
      }
    case "script":
      if (
        props.async &&
        "function" !== typeof props.async &&
        "symbol" !== typeof props.async &&
        !props.onLoad &&
        !props.onError &&
        props.src &&
        "string" === typeof props.src
      )
        return !0;
  }
  return !1;
}
function preloadResource(resource) {
  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
    ? !1
    : !0;
}
var suspendedState = null;
function noop() {}
function suspendResource(hoistableRoot, resource, props) {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  if (
    "stylesheet" === resource.type &&
    ("string" !== typeof props.media ||
      !1 !== matchMedia(props.media).matches) &&
    0 === (resource.state.loading & 4)
  ) {
    if (null === resource.instance) {
      var key = getStyleKey(props.href),
        instance = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(key)
        );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot &&
          "object" === typeof hoistableRoot &&
          "function" === typeof hoistableRoot.then &&
          (state.count++,
          (state = onUnsuspend.bind(state)),
          hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) &&
        adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      var linkInstance = instance;
      linkInstance._p = new Promise(function (resolve, reject) {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    null === state.stylesheets && (state.stylesheets = new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) &&
      0 === (resource.state.loading & 3) &&
      (state.count++,
      (resource = onUnsuspend.bind(state)),
      hoistableRoot.addEventListener("load", resource),
      hoistableRoot.addEventListener("error", resource));
  }
}
function waitForCommitToBeReady() {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  state.stylesheets &&
    0 === state.count &&
    insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count
    ? function (commit) {
        var stylesheetTimer = setTimeout(function () {
          state.stylesheets &&
            insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4);
        state.unsuspend = commit;
        return function () {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
        };
      }
    : null;
}
function onUnsuspend() {
  this.count--;
  if (0 === this.count)
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      var unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
}
var precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend &&
    (state.count++,
    (precedencesByRoot = new Map()),
    resources.forEach(insertStylesheetIntoRoot, state),
    (precedencesByRoot = null),
    onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root, resource) {
  if (!(resource.state.loading & 4)) {
    var precedences = precedencesByRoot.get(root);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = new Map();
      precedencesByRoot.set(root, precedences);
      for (
        var nodes = root.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < nodes.length;
        i++
      ) {
        var node = nodes[i];
        if (
          "LINK" === node.nodeName ||
          "not all" !== node.getAttribute("media")
        )
          precedences.set(node.dataset.precedence, node), (last = node);
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i
      ? i.parentNode.insertBefore(nodes, i.nextSibling)
      : ((root = 9 === root.nodeType ? root.head : root),
        root.insertBefore(nodes, root.firstChild));
    resource.state.loading |= 4;
  }
}
var HostTransitionContext = {
  $$typeof: REACT_CONTEXT_TYPE,
  Provider: null,
  Consumer: null,
  _currentValue: sharedNotPendingObject,
  _currentValue2: sharedNotPendingObject,
  _threadCount: 0
};
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  formState
) {
  this.tag = 1;
  this.containerInfo = containerInfo;
  this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.expiredLanes =
    this.warmLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  transitionCallbacks,
  formState
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    formState
  );
  tag = 1;
  !0 === isStrictMode && (tag |= 24);
  isStrictMode = createFiberImplClass(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  tag = createCache();
  tag.refCount++;
  containerInfo.pooledCache = tag;
  tag.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: tag
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = emptyContextObject;
  return parentComponent;
}
function updateContainerImpl(
  rootFiber,
  lane,
  element,
  container,
  parentComponent,
  callback
) {
  parentComponent = getContextForSubtree(parentComponent);
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(rootFiber, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, rootFiber, lane),
    entangleTransitions(element, rootFiber, lane));
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (13 === fiber.tag) {
    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
var _enabled = !0;
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 2),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var prevTransition = ReactSharedInternals.T;
  ReactSharedInternals.T = null;
  var previousPriority = ReactDOMSharedInternals.p;
  try {
    (ReactDOMSharedInternals.p = 8),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (ReactDOMSharedInternals.p = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    var blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (null === blockedOn)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ),
        clearIfContinuousEvent(domEventName, nativeEvent);
    else if (
      queueIfContinuousEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    )
      nativeEvent.stopPropagation();
    else if (
      (clearIfContinuousEvent(domEventName, nativeEvent),
      eventSystemFlags & 4 &&
        -1 < discreteReplayableEvents.indexOf(domEventName))
    ) {
      for (; null !== blockedOn; ) {
        var fiber = getInstanceFromNode(blockedOn);
        if (null !== fiber)
          switch (fiber.tag) {
            case 3:
              fiber = fiber.stateNode;
              if (fiber.current.memoizedState.isDehydrated) {
                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                if (0 !== lanes) {
                  var root = fiber;
                  root.pendingLanes |= 2;
                  for (root.entangledLanes |= 2; lanes; ) {
                    var lane = 1 << (31 - clz32(lanes));
                    root.entanglements[1] |= lane;
                    lanes &= ~lane;
                  }
                  ensureRootIsScheduled(fiber);
                  0 === (executionContext & 6) &&
                    ((workInProgressRootRenderTargetTime = now() + 500),
                    flushSyncWorkAcrossRoots_impl(0, !1));
                }
              }
              break;
            case 13:
              (root = enqueueConcurrentRenderForLane(fiber, 2)),
                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
                flushSyncWork$1(),
                markRetryLaneIfNotHydrated(fiber, 2);
          }
        fiber = findInstanceBlockingEvent(nativeEvent);
        null === fiber &&
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    var nearestMounted = getNearestMountedFiber(targetNode);
    if (null === nearestMounted) targetNode = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return 3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (getCurrentPriorityLevel()) {
        case ImmediatePriority:
          return 2;
        case UserBlockingPriority:
          return 8;
        case NormalPriority$1:
        case LowPriority:
          return 32;
        case IdlePriority:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var hasScheduledReplayAttempt = !1,
  queuedFocus = null,
  queuedDrag = null,
  queuedMouse = null,
  queuedPointers = new Map(),
  queuedPointerCaptures = new Map(),
  queuedExplicitHydrationTargets = [],
  discreteReplayableEvents =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    null === existingQueuedEvent ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = {
        blockedOn: blockedOn,
        domEventName: domEventName,
        eventSystemFlags: eventSystemFlags,
        nativeEvent: nativeEvent,
        targetContainers: [targetContainer]
      }),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    -1 === blockedOn.indexOf(targetContainer) &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
    case "focusin":
      return (
        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedFocus,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "dragenter":
      return (
        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedDrag,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "mouseover":
      return (
        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedMouse,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return !0;
    case "gotpointercapture":
      return (
        (pointerId = nativeEvent.pointerId),
        queuedPointerCaptures.set(
          pointerId,
          accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedPointerCaptures.get(pointerId) || null,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          )
        ),
        !0
      );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function () {
            if (13 === nearestMounted.tag) {
              var lane = requestUpdateLane();
              lane = getBumpedLaneForHydrationByLane(lane);
              var root = enqueueConcurrentRenderForLane(nearestMounted, lane);
              null !== root &&
                scheduleUpdateOnFiber(root, nearestMounted, lane);
              markRetryLaneIfNotHydrated(nearestMounted, lane);
            }
          });
          return;
        }
      } else if (
        3 === targetInst &&
        nearestMounted.stateNode.current.memoizedState.isDehydrated
      ) {
        queuedTarget.blockedOn =
          3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    var targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (null === nextBlockedOn) {
      nextBlockedOn = queuedEvent.nativeEvent;
      var nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return (
        (targetContainers = getInstanceFromNode(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = !1;
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
var lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue &&
    ((lastScheduledReplayQueue = formReplayingQueue),
    Scheduler.unstable_scheduleCallback(
      Scheduler.unstable_NormalPriority,
      function () {
        lastScheduledReplayQueue === formReplayingQueue &&
          (lastScheduledReplayQueue = null);
        for (var i = 0; i < formReplayingQueue.length; i += 3) {
          var form = formReplayingQueue[i],
            submitterOrAction = formReplayingQueue[i + 1],
            formData = formReplayingQueue[i + 2];
          if ("function" !== typeof submitterOrAction)
            if (null === findInstanceBlockingTarget(submitterOrAction || form))
              continue;
            else break;
          var formInst = getInstanceFromNode(form);
          null !== formInst &&
            (formReplayingQueue.splice(i, 3),
            (i -= 3),
            startHostTransition(
              formInst,
              {
                pending: !0,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
        }
      }
    ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

  )
    attemptExplicitHydrationTarget(i),
      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      var form = i[queuedTarget],
        submitterOrAction = i[queuedTarget + 1],
        formProps = form[internalPropsKey] || null;
      if ("function" === typeof submitterOrAction)
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        var action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (
            ((form = submitterOrAction),
            (formProps = submitterOrAction[internalPropsKey] || null))
          )
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        "function" === typeof action
          ? (i[queuedTarget + 1] = action)
          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children) {
    var root = this._internalRoot;
    if (null === root) throw Error(formatProdErrorMessage(409));
    var current = root.current,
      lane = requestUpdateLane();
    updateContainerImpl(current, lane, children, root, null, null);
  };
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
  function () {
    var root = this._internalRoot;
    if (null !== root) {
      this._internalRoot = null;
      var container = root.containerInfo;
      updateContainerImpl(root.current, 2, null, root, null, null);
      flushSyncWork$1();
      container[internalContainerInstanceKey] = null;
    }
  };
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
  if (target) {
    var updatePriority = resolveUpdatePriority();
    target = { blockedOn: null, target: target, priority: updatePriority };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      0 !== updatePriority &&
      updatePriority < queuedExplicitHydrationTargets[i].priority;
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
var isomorphicReactPackageVersion$jscomp$inline_1785 = React.version;
if (
  "19.1.1" !==
  isomorphicReactPackageVersion$jscomp$inline_1785
)
  throw Error(
    formatProdErrorMessage(
      527,
      isomorphicReactPackageVersion$jscomp$inline_1785,
      "19.1.1"
    )
  );
ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
  var fiber = componentOrElement._reactInternals;
  if (void 0 === fiber) {
    if ("function" === typeof componentOrElement.render)
      throw Error(formatProdErrorMessage(188));
    componentOrElement = Object.keys(componentOrElement).join(",");
    throw Error(formatProdErrorMessage(268, componentOrElement));
  }
  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
  componentOrElement =
    null !== componentOrElement
      ? findCurrentHostFiberImpl(componentOrElement)
      : null;
  componentOrElement =
    null === componentOrElement ? null : componentOrElement.stateNode;
  return componentOrElement;
};
var internals$jscomp$inline_2256 = {
  bundleType: 0,
  version: "19.1.1",
  rendererPackageName: "react-dom",
  currentDispatcherRef: ReactSharedInternals,
  reconcilerVersion: "19.1.1"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_2257 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_2257.isDisabled &&
    hook$jscomp$inline_2257.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_2257.inject(
        internals$jscomp$inline_2256
      )),
        (injectedHook = hook$jscomp$inline_2257);
    } catch (err) {}
}
exports.createRoot = function (container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks));
  options = createFiberRoot(
    container,
    1,
    !1,
    null,
    null,
    isStrictMode,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    transitionCallbacks,
    null
  );
  container[internalContainerInstanceKey] = options.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMRoot(options);
};
exports.hydrateRoot = function (container, initialChildren, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    identifierPrefix = "",
    onUncaughtError = defaultOnUncaughtError,
    onCaughtError = defaultOnCaughtError,
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null,
    formState = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onUncaughtError &&
      (onUncaughtError = options.onUncaughtError),
    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks),
    void 0 !== options.formState && (formState = options.formState));
  initialChildren = createFiberRoot(
    container,
    1,
    !0,
    initialChildren,
    null != options ? options : null,
    isStrictMode,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    transitionCallbacks,
    formState
  );
  initialChildren.context = getContextForSubtree(null);
  options = initialChildren.current;
  isStrictMode = requestUpdateLane();
  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
  identifierPrefix = createUpdate(isStrictMode);
  identifierPrefix.callback = null;
  enqueueUpdate(options, identifierPrefix, isStrictMode);
  options = isStrictMode;
  initialChildren.current.lanes = options;
  markRootUpdated$1(initialChildren, options);
  ensureRootIsScheduled(initialChildren);
  container[internalContainerInstanceKey] = initialChildren.current;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
exports.version = "19.1.1";


/***/ }),

/***/ 338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(247);
} else // removed by dead control flow
{}


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  a: for (; 0 < index; ) {
    var parentIndex = (index - 1) >>> 1,
      parent = heap[parentIndex];
    if (0 < compare(parent, node))
      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
    else break a;
  }
}
function peek(heap) {
  return 0 === heap.length ? null : heap[0];
}
function pop(heap) {
  if (0 === heap.length) return null;
  var first = heap[0],
    last = heap.pop();
  if (last !== first) {
    heap[0] = last;
    a: for (
      var index = 0, length = heap.length, halfLength = length >>> 1;
      index < halfLength;

    ) {
      var leftIndex = 2 * (index + 1) - 1,
        left = heap[leftIndex],
        rightIndex = leftIndex + 1,
        right = heap[rightIndex];
      if (0 > compare(left, last))
        rightIndex < length && 0 > compare(right, left)
          ? ((heap[index] = right),
            (heap[rightIndex] = last),
            (index = rightIndex))
          : ((heap[index] = left),
            (heap[leftIndex] = last),
            (index = leftIndex));
      else if (rightIndex < length && 0 > compare(right, last))
        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
      else break a;
    }
  }
  return first;
}
function compare(a, b) {
  var diff = a.sortIndex - b.sortIndex;
  return 0 !== diff ? diff : a.id - b.id;
}
exports.unstable_now = void 0;
if ("object" === typeof performance && "function" === typeof performance.now) {
  var localPerformance = performance;
  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date,
    initialTime = localDate.now();
  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
}
var taskQueue = [],
  timerQueue = [],
  taskIdCounter = 1,
  currentTask = null,
  currentPriorityLevel = 3,
  isPerformingWork = !1,
  isHostCallbackScheduled = !1,
  isHostTimeoutScheduled = !1,
  needsPaint = !1,
  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
function advanceTimers(currentTime) {
  for (var timer = peek(timerQueue); null !== timer; ) {
    if (null === timer.callback) pop(timerQueue);
    else if (timer.startTime <= currentTime)
      pop(timerQueue),
        (timer.sortIndex = timer.expirationTime),
        push(taskQueue, timer);
    else break;
    timer = peek(timerQueue);
  }
}
function handleTimeout(currentTime) {
  isHostTimeoutScheduled = !1;
  advanceTimers(currentTime);
  if (!isHostCallbackScheduled)
    if (null !== peek(taskQueue))
      (isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline());
    else {
      var firstTimer = peek(timerQueue);
      null !== firstTimer &&
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }
}
var isMessageLoopRunning = !1,
  taskTimeoutID = -1,
  frameInterval = 5,
  startTime = -1;
function shouldYieldToHost() {
  return needsPaint
    ? !0
    : exports.unstable_now() - startTime < frameInterval
      ? !1
      : !0;
}
function performWorkUntilDeadline() {
  needsPaint = !1;
  if (isMessageLoopRunning) {
    var currentTime = exports.unstable_now();
    startTime = currentTime;
    var hasMoreWork = !0;
    try {
      a: {
        isHostCallbackScheduled = !1;
        isHostTimeoutScheduled &&
          ((isHostTimeoutScheduled = !1),
          localClearTimeout(taskTimeoutID),
          (taskTimeoutID = -1));
        isPerformingWork = !0;
        var previousPriorityLevel = currentPriorityLevel;
        try {
          b: {
            advanceTimers(currentTime);
            for (
              currentTask = peek(taskQueue);
              null !== currentTask &&
              !(
                currentTask.expirationTime > currentTime && shouldYieldToHost()
              );

            ) {
              var callback = currentTask.callback;
              if ("function" === typeof callback) {
                currentTask.callback = null;
                currentPriorityLevel = currentTask.priorityLevel;
                var continuationCallback = callback(
                  currentTask.expirationTime <= currentTime
                );
                currentTime = exports.unstable_now();
                if ("function" === typeof continuationCallback) {
                  currentTask.callback = continuationCallback;
                  advanceTimers(currentTime);
                  hasMoreWork = !0;
                  break b;
                }
                currentTask === peek(taskQueue) && pop(taskQueue);
                advanceTimers(currentTime);
              } else pop(taskQueue);
              currentTask = peek(taskQueue);
            }
            if (null !== currentTask) hasMoreWork = !0;
            else {
              var firstTimer = peek(timerQueue);
              null !== firstTimer &&
                requestHostTimeout(
                  handleTimeout,
                  firstTimer.startTime - currentTime
                );
              hasMoreWork = !1;
            }
          }
          break a;
        } finally {
          (currentTask = null),
            (currentPriorityLevel = previousPriorityLevel),
            (isPerformingWork = !1);
        }
        hasMoreWork = void 0;
      }
    } finally {
      hasMoreWork
        ? schedulePerformWorkUntilDeadline()
        : (isMessageLoopRunning = !1);
    }
  }
}
var schedulePerformWorkUntilDeadline;
if ("function" === typeof localSetImmediate)
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
else if ("undefined" !== typeof MessageChannel) {
  var channel = new MessageChannel(),
    port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (task) {
  task.callback = null;
};
exports.unstable_forceFrameRate = function (fps) {
  0 > fps || 125 < fps
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
};
exports.unstable_getCurrentPriorityLevel = function () {
  return currentPriorityLevel;
};
exports.unstable_next = function (eventHandler) {
  switch (currentPriorityLevel) {
    case 1:
    case 2:
    case 3:
      var priorityLevel = 3;
      break;
    default:
      priorityLevel = currentPriorityLevel;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_requestPaint = function () {
  needsPaint = !0;
};
exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      priorityLevel = 3;
  }
  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;
  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
};
exports.unstable_scheduleCallback = function (
  priorityLevel,
  callback,
  options
) {
  var currentTime = exports.unstable_now();
  "object" === typeof options && null !== options
    ? ((options = options.delay),
      (options =
        "number" === typeof options && 0 < options
          ? currentTime + options
          : currentTime))
    : (options = currentTime);
  switch (priorityLevel) {
    case 1:
      var timeout = -1;
      break;
    case 2:
      timeout = 250;
      break;
    case 5:
      timeout = 1073741823;
      break;
    case 4:
      timeout = 1e4;
      break;
    default:
      timeout = 5e3;
  }
  timeout = options + timeout;
  priorityLevel = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: options,
    expirationTime: timeout,
    sortIndex: -1
  };
  options > currentTime
    ? ((priorityLevel.sortIndex = options),
      push(timerQueue, priorityLevel),
      null === peek(taskQueue) &&
        priorityLevel === peek(timerQueue) &&
        (isHostTimeoutScheduled
          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
          : (isHostTimeoutScheduled = !0),
        requestHostTimeout(handleTimeout, options - currentTime)))
    : ((priorityLevel.sortIndex = timeout),
      push(taskQueue, priorityLevel),
      isHostCallbackScheduled ||
        isPerformingWork ||
        ((isHostCallbackScheduled = !0),
        isMessageLoopRunning ||
          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline())));
  return priorityLevel;
};
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = function (callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;
    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
};


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(869);
} else // removed by dead control flow
{}


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var ReactNoopUpdateQueue = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  assign = Object.assign,
  emptyObject = {};
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
Component.prototype.isReactComponent = {};
Component.prototype.setState = function (partialState, callback) {
  if (
    "object" !== typeof partialState &&
    "function" !== typeof partialState &&
    null != partialState
  )
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, partialState, callback, "setState");
};
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
};
function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}
var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = !0;
var isArrayImpl = Array.isArray,
  ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null },
  hasOwnProperty = Object.prototype.hasOwnProperty;
function ReactElement(type, key, self, source, owner, props) {
  self = props.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== self ? self : null,
    props: props
  };
}
function cloneAndReplaceKey(oldElement, newKey) {
  return ReactElement(
    oldElement.type,
    newKey,
    void 0,
    void 0,
    void 0,
    oldElement.props
  );
}
function isValidElement(object) {
  return (
    "object" === typeof object &&
    null !== object &&
    object.$$typeof === REACT_ELEMENT_TYPE
  );
}
function escape(key) {
  var escaperLookup = { "=": "=0", ":": "=2" };
  return (
    "$" +
    key.replace(/[=:]/g, function (match) {
      return escaperLookup[match];
    })
  );
}
var userProvidedKeyEscapeRegex = /\/+/g;
function getElementKey(element, index) {
  return "object" === typeof element && null !== element && null != element.key
    ? escape("" + element.key)
    : index.toString(36);
}
function noop$1() {}
function resolveThenable(thenable) {
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      switch (
        ("string" === typeof thenable.status
          ? thenable.then(noop$1, noop$1)
          : ((thenable.status = "pending"),
            thenable.then(
              function (fulfilledValue) {
                "pending" === thenable.status &&
                  ((thenable.status = "fulfilled"),
                  (thenable.value = fulfilledValue));
              },
              function (error) {
                "pending" === thenable.status &&
                  ((thenable.status = "rejected"), (thenable.reason = error));
              }
            )),
        thenable.status)
      ) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
  }
  throw thenable;
}
function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;
  if ("undefined" === type || "boolean" === type) children = null;
  var invokeCallback = !1;
  if (null === children) invokeCallback = !0;
  else
    switch (type) {
      case "bigint":
      case "string":
      case "number":
        invokeCallback = !0;
        break;
      case "object":
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = !0;
            break;
          case REACT_LAZY_TYPE:
            return (
              (invokeCallback = children._init),
              mapIntoArray(
                invokeCallback(children._payload),
                array,
                escapedPrefix,
                nameSoFar,
                callback
              )
            );
        }
    }
  if (invokeCallback)
    return (
      (callback = callback(children)),
      (invokeCallback =
        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
      isArrayImpl(callback)
        ? ((escapedPrefix = ""),
          null != invokeCallback &&
            (escapedPrefix =
              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
            return c;
          }))
        : null != callback &&
          (isValidElement(callback) &&
            (callback = cloneAndReplaceKey(
              callback,
              escapedPrefix +
                (null == callback.key ||
                (children && children.key === callback.key)
                  ? ""
                  : ("" + callback.key).replace(
                      userProvidedKeyEscapeRegex,
                      "$&/"
                    ) + "/") +
                invokeCallback
            )),
          array.push(callback)),
      1
    );
  invokeCallback = 0;
  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
  if (isArrayImpl(children))
    for (var i = 0; i < children.length; i++)
      (nameSoFar = children[i]),
        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if (((i = getIteratorFn(children)), "function" === typeof i))
    for (
      children = i.call(children), i = 0;
      !(nameSoFar = children.next()).done;

    )
      (nameSoFar = nameSoFar.value),
        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
        (invokeCallback += mapIntoArray(
          nameSoFar,
          array,
          escapedPrefix,
          type,
          callback
        ));
  else if ("object" === type) {
    if ("function" === typeof children.then)
      return mapIntoArray(
        resolveThenable(children),
        array,
        escapedPrefix,
        nameSoFar,
        callback
      );
    array = String(children);
    throw Error(
      "Objects are not valid as a React child (found: " +
        ("[object Object]" === array
          ? "object with keys {" + Object.keys(children).join(", ") + "}"
          : array) +
        "). If you meant to render a collection of children, use an array instead."
    );
  }
  return invokeCallback;
}
function mapChildren(children, func, context) {
  if (null == children) return children;
  var result = [],
    count = 0;
  mapIntoArray(children, result, "", "", function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
function lazyInitializer(payload) {
  if (-1 === payload._status) {
    var ctor = payload._result;
    ctor = ctor();
    ctor.then(
      function (moduleObject) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 1), (payload._result = moduleObject);
      },
      function (error) {
        if (0 === payload._status || -1 === payload._status)
          (payload._status = 2), (payload._result = error);
      }
    );
    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
  }
  if (1 === payload._status) return payload._result.default;
  throw payload._result;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function noop() {}
exports.Children = {
  map: mapChildren,
  forEach: function (children, forEachFunc, forEachContext) {
    mapChildren(
      children,
      function () {
        forEachFunc.apply(this, arguments);
      },
      forEachContext
    );
  },
  count: function (children) {
    var n = 0;
    mapChildren(children, function () {
      n++;
    });
    return n;
  },
  toArray: function (children) {
    return (
      mapChildren(children, function (child) {
        return child;
      }) || []
    );
  },
  only: function (children) {
    if (!isValidElement(children))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return children;
  }
};
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
  ReactSharedInternals;
exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (size) {
    return ReactSharedInternals.H.useMemoCache(size);
  }
};
exports.cache = function (fn) {
  return function () {
    return fn.apply(null, arguments);
  };
};
exports.cloneElement = function (element, config, children) {
  if (null === element || void 0 === element)
    throw Error(
      "The argument must be a React element, but you passed " + element + "."
    );
  var props = assign({}, element.props),
    key = element.key,
    owner = void 0;
  if (null != config)
    for (propName in (void 0 !== config.ref && (owner = void 0),
    void 0 !== config.key && (key = "" + config.key),
    config))
      !hasOwnProperty.call(config, propName) ||
        "key" === propName ||
        "__self" === propName ||
        "__source" === propName ||
        ("ref" === propName && void 0 === config.ref) ||
        (props[propName] = config[propName]);
  var propName = arguments.length - 2;
  if (1 === propName) props.children = children;
  else if (1 < propName) {
    for (var childArray = Array(propName), i = 0; i < propName; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  return ReactElement(element.type, key, void 0, void 0, owner, props);
};
exports.createContext = function (defaultValue) {
  defaultValue = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  defaultValue.Provider = defaultValue;
  defaultValue.Consumer = {
    $$typeof: REACT_CONSUMER_TYPE,
    _context: defaultValue
  };
  return defaultValue;
};
exports.createElement = function (type, config, children) {
  var propName,
    props = {},
    key = null;
  if (null != config)
    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
      hasOwnProperty.call(config, propName) &&
        "key" !== propName &&
        "__self" !== propName &&
        "__source" !== propName &&
        (props[propName] = config[propName]);
  var childrenLength = arguments.length - 2;
  if (1 === childrenLength) props.children = children;
  else if (1 < childrenLength) {
    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
      childArray[i] = arguments[i + 2];
    props.children = childArray;
  }
  if (type && type.defaultProps)
    for (propName in ((childrenLength = type.defaultProps), childrenLength))
      void 0 === props[propName] &&
        (props[propName] = childrenLength[propName]);
  return ReactElement(type, key, void 0, void 0, null, props);
};
exports.createRef = function () {
  return { current: null };
};
exports.forwardRef = function (render) {
  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
};
exports.isValidElement = isValidElement;
exports.lazy = function (ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: { _status: -1, _result: ctor },
    _init: lazyInitializer
  };
};
exports.memo = function (type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: void 0 === compare ? null : compare
  };
};
exports.startTransition = function (scope) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  try {
    var returnValue = scope(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    "object" === typeof returnValue &&
      null !== returnValue &&
      "function" === typeof returnValue.then &&
      returnValue.then(noop, reportGlobalError);
  } catch (error) {
    reportGlobalError(error);
  } finally {
    ReactSharedInternals.T = prevTransition;
  }
};
exports.unstable_useCacheRefresh = function () {
  return ReactSharedInternals.H.useCacheRefresh();
};
exports.use = function (usable) {
  return ReactSharedInternals.H.use(usable);
};
exports.useActionState = function (action, initialState, permalink) {
  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
};
exports.useCallback = function (callback, deps) {
  return ReactSharedInternals.H.useCallback(callback, deps);
};
exports.useContext = function (Context) {
  return ReactSharedInternals.H.useContext(Context);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (value, initialValue) {
  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
};
exports.useEffect = function (create, createDeps, update) {
  var dispatcher = ReactSharedInternals.H;
  if ("function" === typeof update)
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return dispatcher.useEffect(create, createDeps);
};
exports.useId = function () {
  return ReactSharedInternals.H.useId();
};
exports.useImperativeHandle = function (ref, create, deps) {
  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
};
exports.useInsertionEffect = function (create, deps) {
  return ReactSharedInternals.H.useInsertionEffect(create, deps);
};
exports.useLayoutEffect = function (create, deps) {
  return ReactSharedInternals.H.useLayoutEffect(create, deps);
};
exports.useMemo = function (create, deps) {
  return ReactSharedInternals.H.useMemo(create, deps);
};
exports.useOptimistic = function (passthrough, reducer) {
  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
};
exports.useReducer = function (reducer, initialArg, init) {
  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
};
exports.useRef = function (initialValue) {
  return ReactSharedInternals.H.useRef(initialValue);
};
exports.useState = function (initialState) {
  return ReactSharedInternals.H.useState(initialState);
};
exports.useSyncExternalStore = function (
  subscribe,
  getSnapshot,
  getServerSnapshot
) {
  return ReactSharedInternals.H.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
};
exports.useTransition = function () {
  return ReactSharedInternals.H.useTransition();
};
exports.version = "19.1.1";


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(221);
} else // removed by dead control flow
{}


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(477);
} else // removed by dead control flow
{}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
;// ./src/components/Label/Label.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_module = ({"labelWrapper":"PfqZ7Zd2guQ1owV6lygB","labelLeftBorder":"aIo_llnyalq5YDswtRII","labelText":"_5bQLXgJe9G2muUUE5hg"});
;// ./src/components/Label/Label.tsx


var Label = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'Исторические даты' : _b;
    return (react.createElement("div", { className: Label_module.labelWrapper },
        react.createElement("div", { className: Label_module.labelLeftBorder }),
        react.createElement("div", { className: Label_module.labelText }, text)));
};
/* harmony default export */ const Label_Label = (Label);

;// ./src/components/Label/index.ts

/* harmony default export */ const components_Label = (Label_Label);

;// ./src/hooks/useAnimatedDateDisplay/useAnimatedDateDisplay.ts

var useAnimatedDateDisplay = function (inputValue, speed) {
    var _a = (0,react.useState)(inputValue), currentValue = _a[0], setCurrentValue = _a[1];
    (0,react.useEffect)(function () {
        var setTimeOutID;
        if (currentValue !== inputValue && currentValue < inputValue) {
            setTimeOutID = setTimeout(setCurrentValue, speed, currentValue + 1);
        }
        if (currentValue !== inputValue && currentValue > inputValue) {
            setTimeOutID = setTimeout(setCurrentValue, speed, currentValue - 1);
        }
        return function () { return clearTimeout(setTimeOutID); };
    }, [inputValue, currentValue, speed]);
    return {
        currentValue: currentValue,
    };
};

;// ./src/components/AnimatedDateDisplay/AnimatedDateDisplay.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const AnimatedDateDisplay_module = ({"displayWrapper":"Ai3w1AV3APsitsgE4BFx","startYear":"XXR7jRYh9FFXm3g4HFpN","endYear":"PqoqjiRUfz0pkjg58xEr"});
;// ./src/components/AnimatedDateDisplay/AnimatedDateDisplay.tsx



var AnimatedDateDisplay = function (_a) {
    var startYear = _a.startYear, endYear = _a.endYear;
    var startYearValue = useAnimatedDateDisplay(startYear, 50).currentValue;
    var endYearValue = useAnimatedDateDisplay(endYear, 50).currentValue;
    return (react.createElement("div", { className: AnimatedDateDisplay_module.displayWrapper },
        react.createElement("span", { className: AnimatedDateDisplay_module.startYear }, startYearValue),
        react.createElement("span", { className: AnimatedDateDisplay_module.endYear }, endYearValue)));
};
/* harmony default export */ const AnimatedDateDisplay_AnimatedDateDisplay = (AnimatedDateDisplay);

;// ./src/components/AnimatedDateDisplay/index.ts

/* harmony default export */ const components_AnimatedDateDisplay = (AnimatedDateDisplay_AnimatedDateDisplay);

;// ./src/components/SvgIcon/icons/RevoltSwitcher/arrowLeft.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 14,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    stroke: "#42567A",
    strokeWidth: 2,
    d: "M8.5.75 2.25 7l6.25 6.25"
  })));
};

/* harmony default export */ const arrowLeft = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNDk5ODggMC43NTAwMDFMMi4yNDk4OCA3TDguNDk5ODggMTMuMjUiIHN0cm9rZT0iIzQyNTY3QSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgoK");
;// ./src/components/SvgIcon/icons/RevoltSwitcher/arrowRight.svg
var arrowRight_path;
function arrowRight_extends() { return arrowRight_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, arrowRight_extends.apply(null, arguments); }

var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/react.createElement("svg", arrowRight_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 14,
    fill: "none"
  }, props), arrowRight_path || (arrowRight_path = /*#__PURE__*/react.createElement("path", {
    stroke: "#42567A",
    strokeWidth: 2,
    d: "M1.5.75 7.75 7 1.5 13.25"
  })));
};

/* harmony default export */ const arrowRight = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xLjUwMDEyIDAuNzUwMDAxTDcuNzUwMTIgN0wxLjUwMDEyIDEzLjI1IiBzdHJva2U9IiM0MjU2N0EiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K");
;// ./src/components/SvgIcon/SvgIcon.tsx



var SvgIcon = function (_a) {
    var icon = _a.icon;
    switch (icon) {
        case 'arrowRight': {
            return react.createElement(SvgArrowRight, null);
        }
        case 'arrowLeft': {
            return react.createElement(SvgArrowLeft, null);
        }
        default: {
            return null;
        }
    }
};
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);

;// ./src/components/SvgIcon/index.ts

/* harmony default export */ const components_SvgIcon = (SvgIcon_SvgIcon);

;// ./src/components/ButtonPad/ButtonPad.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const ButtonPad_module = ({"revoltSwitcherButtonsPadWrapper":"SxQVwZMVTLQiZUCum_oZ","revoltSwitcherCounter":"GPL8ehVmL2jCIQRewvgl","revoltSwitcherButtonsWrapper":"L6S6QAMy_GoyHznXhFbp","revoltSwitcherButton":"Cg0RI7fd2okf8atLRhOL"});
;// ./src/components/ButtonPad/ButtonPad.tsx



var ButtonPad = function (_a) {
    var currentIndex = _a.currentIndex, inputDataArrayLength = _a.inputDataArrayLength, previousItem = _a.previousItem, nextItem = _a.nextItem;
    var formatValue = function (value) { return String(value).padStart(2, '0'); };
    return (react.createElement("div", { className: ButtonPad_module.revoltSwitcherButtonsPadWrapper },
        react.createElement("span", { className: ButtonPad_module.revoltSwitcherCounter }, "".concat(formatValue(currentIndex + 1), "/").concat(formatValue(inputDataArrayLength))),
        react.createElement("div", { className: ButtonPad_module.revoltSwitcherButtonsWrapper },
            react.createElement("button", { className: ButtonPad_module.revoltSwitcherButton, onClick: previousItem, disabled: currentIndex + 1 === 1, "aria-label": "previous period" },
                react.createElement(components_SvgIcon, { icon: 'arrowLeft' })),
            react.createElement("button", { className: ButtonPad_module.revoltSwitcherButton, onClick: nextItem, disabled: currentIndex + 1 === inputDataArrayLength, "aria-label": "next period" },
                react.createElement(components_SvgIcon, { icon: 'arrowRight' })))));
};
/* harmony default export */ const ButtonPad_ButtonPad = (ButtonPad);

;// ./src/components/ButtonPad/index.ts

/* harmony default export */ const components_ButtonPad = (ButtonPad_ButtonPad);

;// ./src/components/RevoltSwitcher/RevoltSwitcher.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const RevoltSwitcher_module = ({"revoltSwitcherWrapper":"hREpsJYjnE8OiP35CWVM","revoltSwitcher":"e32UhQeSue9Q13_JWsBf","revoltSwitcherItem":"SebCzIgYdUkOZLVUwIzd","revoltSwitcherItemText":"SfKJvmdgkCVxi51c_PQw","revoltSwitcherItemDot":"bWoL15znogHZB5dS8OaB","revoltSwitcherItemDotNotActive":"cjFcDnvr8T64m8HLby7P","transitionOut":"jPNsCkRVPv1NWycQBBlJ","revoltSwitcherItemDotActive":"dUQujZ6P45fMRL627ooL","transitionIn":"D7lz5cpCUkNev8TCXNgw"});
;// ./src/components/RevoltSwitcher/RevoltSwitcher.tsx




var RevoltSwitcher = function (_a) {
    var currentIndex = _a.currentIndex, inputDataArrayLength = _a.inputDataArrayLength, currentPeriod = _a.currentPeriod, nextItem = _a.nextItem, previousItem = _a.previousItem, generateRevoltSwitcherItems = _a.generateRevoltSwitcherItems;
    return (react.createElement("div", { className: RevoltSwitcher_module.revoltSwitcherWrapper },
        react.createElement("div", { className: RevoltSwitcher_module.revoltSwitcher, style: {
                transition: 'transform 0.5s ease-in',
                transform: "rotate(".concat((-360 / inputDataArrayLength) * currentIndex, "deg)"),
            } }, generateRevoltSwitcherItems()),
        react.createElement(components_AnimatedDateDisplay, { startYear: currentPeriod[0], endYear: currentPeriod[1] }),
        react.createElement(components_ButtonPad, { currentIndex: currentIndex, inputDataArrayLength: inputDataArrayLength, previousItem: previousItem, nextItem: nextItem })));
};
/* harmony default export */ const RevoltSwitcher_RevoltSwitcher = (RevoltSwitcher);

;// ./src/components/RevoltSwitcher/index.ts

/* harmony default export */ const components_RevoltSwitcher = (RevoltSwitcher_RevoltSwitcher);

;// ./src/hooks/useMediaQuery/useMediaQuery.ts

var useMediaQuery = function (query) {
    var _a = (0,react.useState)(true), matches = _a[0], setMatches = _a[1];
    (0,react.useEffect)(function () {
        var media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        var listener = function () { return setMatches(media.matches); };
        media.addEventListener('change', listener);
        return function () { return media.removeEventListener('change', listener); };
    }, [matches, query]);
    return matches;
};
/* harmony default export */ const useMediaQuery_useMediaQuery = (useMediaQuery);

;// ./node_modules/nanoid/url-alphabet/index.js
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

;// ./node_modules/nanoid/index.browser.js
/* @ts-self-types="./index.d.ts" */


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << Math.log2(alphabet.length - 1)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step | 0
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length >= size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size | 0, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array((size |= 0)))
  while (size--) {
    id += urlAlphabet[bytes[size] & 63]
  }
  return id
}

;// ./node_modules/swiper/shared/ssr-window.esm.mjs
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function ssr_window_esm_isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function ssr_window_esm_getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function ssr_window_esm_getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}



;// ./node_modules/swiper/shared/utils.mjs


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function utils_nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function utils_now() {
  return Date.now();
}
function utils_getComputedStyle(el) {
  const window = ssr_window_esm_getWindow();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function utils_getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = ssr_window_esm_getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function utils_extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function utils_setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = ssr_window_esm_getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function utils_getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function utils_elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function utils_createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
  return el;
}
function utils_elementOffset(el) {
  const window = getWindow();
  const document = getDocument();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = ssr_window_esm_getWindow();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function utils_elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function utils_elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function utils_elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = ssr_window_esm_getWindow();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}



;// ./node_modules/swiper/modules/virtual.mjs



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = getDocument();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = createElement('swiper-slide');
    } else {
      slideEl = createElement('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update();
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}



;// ./node_modules/swiper/modules/keyboard.mjs



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  const window = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = elementOffset(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}



;// ./node_modules/swiper/modules/mousewheel.mjs



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = nextTick(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}



;// ./node_modules/swiper/shared/create-element-if-not-defined.mjs


function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = utils_createElement('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}



;// ./node_modules/swiper/modules/navigation.mjs


function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}



;// ./node_modules/swiper/shared/classes-to-selector.mjs
function classes_to_selector_classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}



;// ./node_modules/swiper/modules/pagination.mjs




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const realIndex = swiper.realIndex;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      const loopFix = dir => {
        const indexBeforeLoopFix = swiper.activeIndex;
        swiper.loopFix({
          direction: dir,
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
        const indexAfterFix = swiper.activeIndex;
        if (indexBeforeLoopFix === indexAfterFix) {
          swiper.slideToLoop(realIndex, 0, false, true);
        }
      };
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        loopFix(newSlideIndex > currentSlideIndex ? 'next' : 'prev');
      } else if (swiper.params.centeredSlides) {
        const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (newSlideIndex < Math.floor(slidesPerView / 2)) {
          loopFix('prev');
        }
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = utils_elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if (utils_elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}



;// ./node_modules/swiper/modules/scrollbar.mjs




function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = createElement('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}



;// ./node_modules/swiper/modules/parallax.mjs


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = elementChildren(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...elementChildren(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}



;// ./node_modules/swiper/modules/zoom.mjs



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
      image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
      offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}



;// ./node_modules/swiper/modules/controller.mjs


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }
        elementTransitionEnd(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}



;// ./node_modules/swiper/modules/a11y.mjs



function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
        }
      }
      if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = createElement('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}



;// ./node_modules/swiper/modules/history.mjs


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = getWindow();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = getWindow();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = getWindow();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}



;// ./node_modules/swiper/modules/hash-navigation.mjs



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = getDocument();
  const window = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}



;// ./node_modules/swiper/modules/autoplay.mjs


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = getDocument();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = getDocument();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = new Date().getTime();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}



;// ./node_modules/swiper/modules/thumbs.mjs



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}



;// ./node_modules/swiper/modules/free-mode.mjs


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: now()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}



;// ./node_modules/swiper/shared/effect-target.mjs


function effect_target_effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}



;// ./node_modules/swiper/shared/effect-virtual-transition-end.mjs


function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}



;// ./node_modules/swiper/modules/effect-fade.mjs





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-cube.mjs



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = createElement('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = createElement('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}



;// ./node_modules/swiper/shared/create-shadow.mjs


function create_shadow_createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = createElement('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}



;// ./node_modules/swiper/modules/effect-flip.mjs






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-coverflow.mjs





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}



;// ./node_modules/swiper/modules/effect-creative.mjs






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = createShadow('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/effect-cards.mjs






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = createShadow('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}



;// ./node_modules/swiper/modules/index.mjs























;// ./node_modules/swiper/shared/swiper-core.mjs



let support;
function calcSupport() {
  const window = ssr_window_esm_getWindow();
  const document = ssr_window_esm_getDocument();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = ssr_window_esm_getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = ssr_window_esm_getWindow();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = ssr_window_esm_getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = ssr_window_esm_getWindow();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = utils_elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    utils_setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
    utils_setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }
    if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    utils_setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    utils_setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);

    // Next Slide
    let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    // Prev Slide
    let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = utils_getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        utils_nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      utils_nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute('data-swiper-slide-index', index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  // prepend last slides before start
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const window = ssr_window_esm_getWindow();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = utils_now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = ssr_window_esm_getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = utils_now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.swipeDirection === 'next' && swiper.allowSlideNext || swiper.swipeDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    // need another loop fix
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(event.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = utils_now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = utils_now();
  utils_nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method) => {
  const document = ssr_window_esm_getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  utils_extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = ssr_window_esm_getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    utils_extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;
    const document = ssr_window_esm_getDocument();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = utils_extend({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = utils_elementIndex(slides[0]);
    return utils_elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return utils_elementChildren(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = utils_createElement('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);



;// ./node_modules/swiper/shared/update-swiper.mjs
/* underscore in name -> watch for changes */
const paramsList = ['eventsPrefix', 'injectStyles', 'injectStylesUrls', 'modules', 'init', '_direction', 'oneWayMovement', 'touchEventsTarget', 'initialSlide', '_speed', 'cssMode', 'updateOnWindowResize', 'resizeObserver', 'nested', 'focusableElements', '_enabled', '_width', '_height', 'preventInteractionOnTransition', 'userAgent', 'url', '_edgeSwipeDetection', '_edgeSwipeThreshold', '_freeMode', '_autoHeight', 'setWrapperSize', 'virtualTranslate', '_effect', 'breakpoints', 'breakpointsBase', '_spaceBetween', '_slidesPerView', 'maxBackfaceHiddenSlides', '_grid', '_slidesPerGroup', '_slidesPerGroupSkip', '_slidesPerGroupAuto', '_centeredSlides', '_centeredSlidesBounds', '_slidesOffsetBefore', '_slidesOffsetAfter', 'normalizeSlideIndex', '_centerInsufficientSlides', '_watchOverflow', 'roundLengths', 'touchRatio', 'touchAngle', 'simulateTouch', '_shortSwipes', '_longSwipes', 'longSwipesRatio', 'longSwipesMs', '_followFinger', 'allowTouchMove', '_threshold', 'touchMoveStopPropagation', 'touchStartPreventDefault', 'touchStartForcePreventDefault', 'touchReleaseOnEdges', 'uniqueNavElements', '_resistance', '_resistanceRatio', '_watchSlidesProgress', '_grabCursor', 'preventClicks', 'preventClicksPropagation', '_slideToClickedSlide', '_loop', 'loopedSlides', 'loopPreventsSliding', '_rewind', '_allowSlidePrev', '_allowSlideNext', '_swipeHandler', '_noSwiping', 'noSwipingClass', 'noSwipingSelector', 'passiveListeners', 'containerModifierClass', 'slideClass', 'slideActiveClass', 'slideVisibleClass', 'slideNextClass', 'slidePrevClass', 'wrapperClass', 'lazyPreloaderClass', 'lazyPreloadPrevNext', 'runCallbacksOnInit', 'observer', 'observeParents', 'observeSlideChildren',
// modules
'a11y', '_autoplay', '_controller', 'coverflowEffect', 'cubeEffect', 'fadeEffect', 'flipEffect', 'creativeEffect', 'cardsEffect', 'hashNavigation', 'history', 'keyboard', 'mousewheel', '_navigation', '_pagination', 'parallax', '_scrollbar', '_thumbs', 'virtual', 'zoom', 'control'];

function update_swiper_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object' && !o.__swiper__;
}
function update_swiper_extend(target, src) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (update_swiper_isObject(src[key]) && update_swiper_isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];else update_swiper_extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === 'undefined' && typeof params.navigation.prevEl === 'undefined';
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === 'undefined';
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === 'undefined';
}
function uniqueClasses(classNames) {
  if (classNames === void 0) {
    classNames = '';
  }
  const classes = classNames.split(' ').map(c => c.trim()).filter(c => !!c);
  const unique = [];
  classes.forEach(c => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(' ');
}
function attrToProp(attrName) {
  if (attrName === void 0) {
    attrName = '';
  }
  return attrName.replace(/-[a-z]/g, l => l.toUpperCase().replace('-', ''));
}
function wrapperClass(className) {
  if (className === void 0) {
    className = '';
  }
  if (!className) return 'swiper-wrapper';
  if (!className.includes('swiper-wrapper')) return `swiper-wrapper ${className}`;
  return className;
}

function updateSwiper(_ref) {
  let {
    swiper,
    slides,
    passedParams,
    changedParams,
    nextEl,
    prevEl,
    scrollbarEl,
    paginationEl
  } = _ref;
  const updateParams = changedParams.filter(key => key !== 'children' && key !== 'direction' && key !== 'wrapperClass');
  const {
    params: currentParams,
    pagination,
    navigation,
    scrollbar,
    virtual,
    thumbs
  } = swiper;
  let needThumbsInit;
  let needControllerInit;
  let needPaginationInit;
  let needScrollbarInit;
  let needNavigationInit;
  let loopNeedDestroy;
  let loopNeedEnable;
  let loopNeedReloop;
  if (changedParams.includes('thumbs') && passedParams.thumbs && passedParams.thumbs.swiper && currentParams.thumbs && !currentParams.thumbs.swiper) {
    needThumbsInit = true;
  }
  if (changedParams.includes('controller') && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
    needControllerInit = true;
  }
  if (changedParams.includes('pagination') && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
    needPaginationInit = true;
  }
  if (changedParams.includes('scrollbar') && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
    needScrollbarInit = true;
  }
  if (changedParams.includes('navigation') && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
    needNavigationInit = true;
  }
  const destroyModule = mod => {
    if (!swiper[mod]) return;
    swiper[mod].destroy();
    if (mod === 'navigation') {
      if (swiper.isElement) {
        swiper[mod].prevEl.remove();
        swiper[mod].nextEl.remove();
      }
      currentParams[mod].prevEl = undefined;
      currentParams[mod].nextEl = undefined;
      swiper[mod].prevEl = undefined;
      swiper[mod].nextEl = undefined;
    } else {
      if (swiper.isElement) {
        swiper[mod].el.remove();
      }
      currentParams[mod].el = undefined;
      swiper[mod].el = undefined;
    }
  };
  if (changedParams.includes('loop') && swiper.isElement) {
    if (currentParams.loop && !passedParams.loop) {
      loopNeedDestroy = true;
    } else if (!currentParams.loop && passedParams.loop) {
      loopNeedEnable = true;
    } else {
      loopNeedReloop = true;
    }
  }
  updateParams.forEach(key => {
    if (update_swiper_isObject(currentParams[key]) && update_swiper_isObject(passedParams[key])) {
      update_swiper_extend(currentParams[key], passedParams[key]);
      if ((key === 'navigation' || key === 'pagination' || key === 'scrollbar') && 'enabled' in passedParams[key] && !passedParams[key].enabled) {
        destroyModule(key);
      }
    } else {
      const newValue = passedParams[key];
      if ((newValue === true || newValue === false) && (key === 'navigation' || key === 'pagination' || key === 'scrollbar')) {
        if (newValue === false) {
          destroyModule(key);
        }
      } else {
        currentParams[key] = passedParams[key];
      }
    }
  });
  if (updateParams.includes('controller') && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (changedParams.includes('children') && slides && virtual && currentParams.virtual.enabled) {
    virtual.slides = slides;
    virtual.update(true);
  }
  if (changedParams.includes('children') && slides && currentParams.loop) {
    loopNeedReloop = true;
  }
  if (needThumbsInit) {
    const initialized = thumbs.init();
    if (initialized) thumbs.update(true);
  }
  if (needControllerInit) {
    swiper.controller.control = currentParams.controller.control;
  }
  if (needPaginationInit) {
    if (swiper.isElement && (!paginationEl || typeof paginationEl === 'string')) {
      paginationEl = document.createElement('div');
      paginationEl.classList.add('swiper-pagination');
      paginationEl.part.add('pagination');
      swiper.el.appendChild(paginationEl);
    }
    if (paginationEl) currentParams.pagination.el = paginationEl;
    pagination.init();
    pagination.render();
    pagination.update();
  }
  if (needScrollbarInit) {
    if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === 'string')) {
      scrollbarEl = document.createElement('div');
      scrollbarEl.classList.add('swiper-scrollbar');
      scrollbarEl.part.add('scrollbar');
      swiper.el.appendChild(scrollbarEl);
    }
    if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
    scrollbar.init();
    scrollbar.updateSize();
    scrollbar.setTranslate();
  }
  if (needNavigationInit) {
    if (swiper.isElement) {
      if (!nextEl || typeof nextEl === 'string') {
        nextEl = document.createElement('div');
        nextEl.classList.add('swiper-button-next');
        nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg;
        nextEl.part.add('button-next');
        swiper.el.appendChild(nextEl);
      }
      if (!prevEl || typeof prevEl === 'string') {
        prevEl = document.createElement('div');
        prevEl.classList.add('swiper-button-prev');
        prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg;
        prevEl.part.add('button-prev');
        swiper.el.appendChild(prevEl);
      }
    }
    if (nextEl) currentParams.navigation.nextEl = nextEl;
    if (prevEl) currentParams.navigation.prevEl = prevEl;
    navigation.init();
    navigation.update();
  }
  if (changedParams.includes('allowSlideNext')) {
    swiper.allowSlideNext = passedParams.allowSlideNext;
  }
  if (changedParams.includes('allowSlidePrev')) {
    swiper.allowSlidePrev = passedParams.allowSlidePrev;
  }
  if (changedParams.includes('direction')) {
    swiper.changeDirection(passedParams.direction, false);
  }
  if (loopNeedDestroy || loopNeedReloop) {
    swiper.loopDestroy();
  }
  if (loopNeedEnable || loopNeedReloop) {
    swiper.loopCreate();
  }
  swiper.update();
}



;// ./node_modules/swiper/shared/update-on-virtual-data.mjs



function getParams(obj, splitEvents) {
  if (obj === void 0) {
    obj = {};
  }
  if (splitEvents === void 0) {
    splitEvents = true;
  }
  const params = {
    on: {}
  };
  const events = {};
  const passedParams = {};
  update_swiper_extend(params, defaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map(key => key.replace(/_/, ''));
  const plainObj = Object.assign({}, obj);
  Object.keys(plainObj).forEach(key => {
    if (typeof obj[key] === 'undefined') return;
    if (allowedParams.indexOf(key) >= 0) {
      if (update_swiper_isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        update_swiper_extend(params[key], obj[key]);
        update_swiper_extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === 'function') {
      if (splitEvents) {
        events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      } else {
        params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
      }
    } else {
      rest[key] = obj[key];
    }
  });
  ['navigation', 'pagination', 'scrollbar'].forEach(key => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest,
    events
  };
}

function mountSwiper(_ref, swiperParams) {
  let {
    el,
    nextEl,
    prevEl,
    paginationEl,
    scrollbarEl,
    swiper
  } = _ref;
  if (needsNavigation(swiperParams) && nextEl && prevEl) {
    swiper.params.navigation.nextEl = nextEl;
    swiper.originalParams.navigation.nextEl = nextEl;
    swiper.params.navigation.prevEl = prevEl;
    swiper.originalParams.navigation.prevEl = prevEl;
  }
  if (needsPagination(swiperParams) && paginationEl) {
    swiper.params.pagination.el = paginationEl;
    swiper.originalParams.pagination.el = paginationEl;
  }
  if (needsScrollbar(swiperParams) && scrollbarEl) {
    swiper.params.scrollbar.el = scrollbarEl;
    swiper.originalParams.scrollbar.el = scrollbarEl;
  }
  swiper.init(el);
}

function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
  const keys = [];
  if (!oldParams) return keys;
  const addKey = key => {
    if (keys.indexOf(key) < 0) keys.push(key);
  };
  if (children && oldChildren) {
    const oldChildrenKeys = oldChildren.map(getKey);
    const childrenKeys = children.map(getKey);
    if (oldChildrenKeys.join('') !== childrenKeys.join('')) addKey('children');
    if (oldChildren.length !== children.length) addKey('children');
  }
  const watchParams = paramsList.filter(key => key[0] === '_').map(key => key.replace(/_/, ''));
  watchParams.forEach(key => {
    if (key in swiperParams && key in oldParams) {
      if (update_swiper_isObject(swiperParams[key]) && update_swiper_isObject(oldParams[key])) {
        const newKeys = Object.keys(swiperParams[key]);
        const oldKeys = Object.keys(oldParams[key]);
        if (newKeys.length !== oldKeys.length) {
          addKey(key);
        } else {
          newKeys.forEach(newKey => {
            if (swiperParams[key][newKey] !== oldParams[key][newKey]) {
              addKey(key);
            }
          });
          oldKeys.forEach(oldKey => {
            if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
          });
        }
      } else if (swiperParams[key] !== oldParams[key]) {
        addKey(key);
      }
    }
  });
  return keys;
}

const updateOnVirtualData = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) {
    swiper.parallax.setTranslate();
  }
};



;// ./node_modules/swiper/swiper-react.mjs
/**
 * Swiper React 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */






function swiper_react_extends() {
  swiper_react_extends = Object.assign ? Object.assign.bind() : function (target) {
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
  return swiper_react_extends.apply(this, arguments);
}

function isChildSwiperSlide(child) {
  return child.type && child.type.displayName && child.type.displayName.includes('SwiperSlide');
}
function processChildren(c) {
  const slides = [];
  react.Children.toArray(c).forEach(child => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.children) {
      processChildren(child.props.children).forEach(slide => slides.push(slide));
    }
  });
  return slides;
}
function getChildren(c) {
  const slides = [];
  const slots = {
    'container-start': [],
    'container-end': [],
    'wrapper-start': [],
    'wrapper-end': []
  };
  react.Children.toArray(c).forEach(child => {
    if (isChildSwiperSlide(child)) {
      slides.push(child);
    } else if (child.props && child.props.slot && slots[child.props.slot]) {
      slots[child.props.slot].push(child);
    } else if (child.props && child.props.children) {
      const foundSlides = processChildren(child.props.children);
      if (foundSlides.length > 0) {
        foundSlides.forEach(slide => slides.push(slide));
      } else {
        slots['container-end'].push(child);
      }
    } else {
      slots['container-end'].push(child);
    }
  });
  return {
    slides,
    slots
  };
}

function renderVirtual(swiper, slides, virtualData) {
  if (!virtualData) return null;
  const getSlideIndex = index => {
    let slideIndex = index;
    if (index < 0) {
      slideIndex = slides.length + index;
    } else if (slideIndex >= slides.length) {
      // eslint-disable-next-line
      slideIndex = slideIndex - slides.length;
    }
    return slideIndex;
  };
  const style = swiper.isHorizontal() ? {
    [swiper.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`
  } : {
    top: `${virtualData.offset}px`
  };
  const {
    from,
    to
  } = virtualData;
  const loopFrom = swiper.params.loop ? -slides.length : 0;
  const loopTo = swiper.params.loop ? slides.length * 2 : slides.length;
  const slidesToRender = [];
  for (let i = loopFrom; i < loopTo; i += 1) {
    if (i >= from && i <= to) {
      slidesToRender.push(slides[getSlideIndex(i)]);
    }
  }
  return slidesToRender.map((child, index) => {
    return /*#__PURE__*/react.cloneElement(child, {
      swiper,
      style,
      key: `slide-${index}`
    });
  });
}

function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === 'undefined') return (0,react.useEffect)(callback, deps);
  return (0,react.useLayoutEffect)(callback, deps);
}

const SwiperSlideContext = /*#__PURE__*/(0,react.createContext)(null);
const useSwiperSlide = () => {
  return useContext(SwiperSlideContext);
};
const SwiperContext = /*#__PURE__*/(0,react.createContext)(null);
const useSwiper = () => {
  return useContext(SwiperContext);
};

const swiper_react_Swiper = /*#__PURE__*/(0,react.forwardRef)(function (_temp, externalElRef) {
  let {
    className,
    tag: Tag = 'div',
    wrapperTag: WrapperTag = 'div',
    children,
    onSwiper,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  let eventsAssigned = false;
  const [containerClasses, setContainerClasses] = (0,react.useState)('swiper');
  const [virtualData, setVirtualData] = (0,react.useState)(null);
  const [breakpointChanged, setBreakpointChanged] = (0,react.useState)(false);
  const initializedRef = (0,react.useRef)(false);
  const swiperElRef = (0,react.useRef)(null);
  const swiperRef = (0,react.useRef)(null);
  const oldPassedParamsRef = (0,react.useRef)(null);
  const oldSlides = (0,react.useRef)(null);
  const nextElRef = (0,react.useRef)(null);
  const prevElRef = (0,react.useRef)(null);
  const paginationElRef = (0,react.useRef)(null);
  const scrollbarElRef = (0,react.useRef)(null);
  const {
    params: swiperParams,
    passedParams,
    rest: restProps,
    events
  } = getParams(rest);
  const {
    slides,
    slots
  } = getChildren(children);
  const onBeforeBreakpoint = () => {
    setBreakpointChanged(!breakpointChanged);
  };
  Object.assign(swiperParams.on, {
    _containerClasses(swiper, classes) {
      setContainerClasses(classes);
    }
  });
  const initSwiper = () => {
    // init swiper
    Object.assign(swiperParams.on, events);
    eventsAssigned = true;
    const passParams = {
      ...swiperParams
    };
    delete passParams.wrapperClass;
    swiperRef.current = new Swiper(passParams);
    if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
      swiperRef.current.virtual.slides = slides;
      const extendWith = {
        cache: false,
        slides,
        renderExternal: setVirtualData,
        renderExternalUpdate: false
      };
      update_swiper_extend(swiperRef.current.params.virtual, extendWith);
      update_swiper_extend(swiperRef.current.originalParams.virtual, extendWith);
    }
  };
  if (!swiperElRef.current) {
    initSwiper();
  }

  // Listen for breakpoints change
  if (swiperRef.current) {
    swiperRef.current.on('_beforeBreakpoint', onBeforeBreakpoint);
  }
  const attachEvents = () => {
    if (eventsAssigned || !events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.on(eventName, events[eventName]);
    });
  };
  const detachEvents = () => {
    if (!events || !swiperRef.current) return;
    Object.keys(events).forEach(eventName => {
      swiperRef.current.off(eventName, events[eventName]);
    });
  };
  (0,react.useEffect)(() => {
    return () => {
      if (swiperRef.current) swiperRef.current.off('_beforeBreakpoint', onBeforeBreakpoint);
    };
  });

  // set initialized flag
  (0,react.useEffect)(() => {
    if (!initializedRef.current && swiperRef.current) {
      swiperRef.current.emitSlidesClasses();
      initializedRef.current = true;
    }
  });

  // mount swiper
  useIsomorphicLayoutEffect(() => {
    if (externalElRef) {
      externalElRef.current = swiperElRef.current;
    }
    if (!swiperElRef.current) return;
    if (swiperRef.current.destroyed) {
      initSwiper();
    }
    mountSwiper({
      el: swiperElRef.current,
      nextEl: nextElRef.current,
      prevEl: prevElRef.current,
      paginationEl: paginationElRef.current,
      scrollbarEl: scrollbarElRef.current,
      swiper: swiperRef.current
    }, swiperParams);
    if (onSwiper) onSwiper(swiperRef.current);
    // eslint-disable-next-line
    return () => {
      if (swiperRef.current && !swiperRef.current.destroyed) {
        swiperRef.current.destroy(true, false);
      }
    };
  }, []);

  // watch for params change
  useIsomorphicLayoutEffect(() => {
    attachEvents();
    const changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, c => c.key);
    oldPassedParamsRef.current = passedParams;
    oldSlides.current = slides;
    if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) {
      updateSwiper({
        swiper: swiperRef.current,
        slides,
        passedParams,
        changedParams,
        nextEl: nextElRef.current,
        prevEl: prevElRef.current,
        scrollbarEl: scrollbarElRef.current,
        paginationEl: paginationElRef.current
      });
    }
    return () => {
      detachEvents();
    };
  });

  // update on virtual update
  useIsomorphicLayoutEffect(() => {
    updateOnVirtualData(swiperRef.current);
  }, [virtualData]);

  // bypass swiper instance to slides
  function renderSlides() {
    if (swiperParams.virtual) {
      return renderVirtual(swiperRef.current, slides, virtualData);
    }
    return slides.map((child, index) => {
      return /*#__PURE__*/react.cloneElement(child, {
        swiper: swiperRef.current,
        swiperSlideIndex: index
      });
    });
  }
  return /*#__PURE__*/react.createElement(Tag, swiper_react_extends({
    ref: swiperElRef,
    className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ''}`)
  }, restProps), /*#__PURE__*/react.createElement(SwiperContext.Provider, {
    value: swiperRef.current
  }, slots['container-start'], /*#__PURE__*/react.createElement(WrapperTag, {
    className: wrapperClass(swiperParams.wrapperClass)
  }, slots['wrapper-start'], renderSlides(), slots['wrapper-end']), needsNavigation(swiperParams) && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    ref: prevElRef,
    className: "swiper-button-prev"
  }), /*#__PURE__*/react.createElement("div", {
    ref: nextElRef,
    className: "swiper-button-next"
  })), needsScrollbar(swiperParams) && /*#__PURE__*/react.createElement("div", {
    ref: scrollbarElRef,
    className: "swiper-scrollbar"
  }), needsPagination(swiperParams) && /*#__PURE__*/react.createElement("div", {
    ref: paginationElRef,
    className: "swiper-pagination"
  }), slots['container-end']));
});
swiper_react_Swiper.displayName = 'Swiper';

const SwiperSlide = /*#__PURE__*/(0,react.forwardRef)(function (_temp, externalRef) {
  let {
    tag: Tag = 'div',
    children,
    className = '',
    swiper,
    zoom,
    lazy,
    virtualIndex,
    swiperSlideIndex,
    ...rest
  } = _temp === void 0 ? {} : _temp;
  const slideElRef = (0,react.useRef)(null);
  const [slideClasses, setSlideClasses] = (0,react.useState)('swiper-slide');
  const [lazyLoaded, setLazyLoaded] = (0,react.useState)(false);
  function updateClasses(_s, el, classNames) {
    if (el === slideElRef.current) {
      setSlideClasses(classNames);
    }
  }
  useIsomorphicLayoutEffect(() => {
    if (typeof swiperSlideIndex !== 'undefined') {
      slideElRef.current.swiperSlideIndex = swiperSlideIndex;
    }
    if (externalRef) {
      externalRef.current = slideElRef.current;
    }
    if (!slideElRef.current || !swiper) {
      return;
    }
    if (swiper.destroyed) {
      if (slideClasses !== 'swiper-slide') {
        setSlideClasses('swiper-slide');
      }
      return;
    }
    swiper.on('_slideClass', updateClasses);
    // eslint-disable-next-line
    return () => {
      if (!swiper) return;
      swiper.off('_slideClass', updateClasses);
    };
  });
  useIsomorphicLayoutEffect(() => {
    if (swiper && slideElRef.current && !swiper.destroyed) {
      setSlideClasses(swiper.getSlideClasses(slideElRef.current));
    }
  }, [swiper]);
  const slideData = {
    isActive: slideClasses.indexOf('swiper-slide-active') >= 0,
    isVisible: slideClasses.indexOf('swiper-slide-visible') >= 0,
    isPrev: slideClasses.indexOf('swiper-slide-prev') >= 0,
    isNext: slideClasses.indexOf('swiper-slide-next') >= 0
  };
  const renderChildren = () => {
    return typeof children === 'function' ? children(slideData) : children;
  };
  const onLoad = () => {
    setLazyLoaded(true);
  };
  return /*#__PURE__*/react.createElement(Tag, swiper_react_extends({
    ref: slideElRef,
    className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ''}`),
    "data-swiper-slide-index": virtualIndex,
    onLoad: onLoad
  }, rest), zoom && /*#__PURE__*/react.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, /*#__PURE__*/react.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof zoom === 'number' ? zoom : undefined
  }, renderChildren(), lazy && !lazyLoaded && /*#__PURE__*/react.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !zoom && /*#__PURE__*/react.createElement(SwiperSlideContext.Provider, {
    value: slideData
  }, renderChildren(), lazy && !lazyLoaded && /*#__PURE__*/react.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
SwiperSlide.displayName = 'SwiperSlide';



;// ./src/components/Slider/Slider.tsx









var Slider = function (_a) {
    var events = _a.events, currentIndex = _a.currentIndex, delayedCurrentIndex = _a.delayedCurrentIndex;
    var isMobile = useMediaQuery_useMediaQuery('(max-width: 920px)');
    var setSliderPerView = function () {
        if (isMobile) {
            return 2;
        }
        return 3;
    };
    var setSpaceBetween = function () {
        if (isMobile) {
            return 10;
        }
        return 80;
    };
    return (react.createElement("div", { className: "slider-wrapper ".concat(currentIndex !== delayedCurrentIndex ? 'slider-wrapper-not-active' : '') },
        react.createElement(swiper_react_Swiper, { modules: [Navigation, Pagination], spaceBetween: setSpaceBetween(), slidesPerView: setSliderPerView(), navigation: !isMobile, pagination: { enabled: isMobile, clickable: true }, grabCursor: true, slideToClickedSlide: true, speed: 800 }, events.map(function (event) { return (react.createElement(SwiperSlide, { key: nanoid() },
            react.createElement("div", { className: "slide-title" }, event.year),
            react.createElement("div", { className: "slide-content" }, event.text))); }))));
};
/* harmony default export */ const Slider_Slider = (Slider);

;// ./src/components/Slider/index.ts

/* harmony default export */ const components_Slider = (Slider_Slider);

;// ./src/hooks/useRevoltSwitcher/useRevoltSwitcher.tsx




var useRevoltSwitcher = function (inputHistoricalDates, activeDotAngle) {
    if (activeDotAngle === void 0) { activeDotAngle = 0; }
    var SWITCH_DELAY = 700;
    var INPUT_DATA_ARRAY_LENGTH = inputHistoricalDates.length;
    var _a = (0,react.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = (0,react.useState)(0), delayedCurrentIndex = _b[0], setDlayedCurrentIndex = _b[1];
    var _c = (0,react.useState)(inputHistoricalDates[0].period), currentPeriod = _c[0], setCurrentPeriod = _c[1];
    var _d = (0,react.useState)(inputHistoricalDates[0].events), currentEvents = _d[0], setCurrentEvents = _d[1];
    (0,react.useEffect)(function () {
        setCurrentPeriod(inputHistoricalDates[currentIndex].period);
        var setTimeOutId = setTimeout(function () {
            setCurrentEvents(inputHistoricalDates[currentIndex].events);
        }, SWITCH_DELAY);
        return function () { return clearTimeout(setTimeOutId); };
    }, [currentIndex, inputHistoricalDates]);
    var revoltItem = function (event) {
        if (!isNaN(+event.currentTarget.innerText)) {
            var currentIndex_1 = +event.currentTarget.innerText - 1;
            setCurrentIndex(currentIndex_1);
            setTimeout(function () {
                setDlayedCurrentIndex(currentIndex_1);
            }, SWITCH_DELAY);
        }
    };
    var nextItem = function () {
        setCurrentIndex(currentIndex + 1);
        setTimeout(function () {
            setDlayedCurrentIndex(currentIndex + 1);
        }, SWITCH_DELAY);
    };
    var previousItem = function () {
        setCurrentIndex(currentIndex - 1);
        setTimeout(function () {
            setDlayedCurrentIndex(currentIndex - 1);
        }, SWITCH_DELAY);
    };
    var generateRevoltSwitcherItems = function () {
        var delta = (Math.PI * 2) / INPUT_DATA_ARRAY_LENGTH;
        var angle = 0 - activeDotAngle;
        return inputHistoricalDates.map(function (date, index) {
            var left = 265 * Math.cos(angle) + 236;
            var top = 265 * Math.sin(angle) + 236;
            angle += delta;
            var isItemTextActive = function () {
                return index === delayedCurrentIndex && index === currentIndex;
            };
            var setItemDotStyles = function () {
                if (index === delayedCurrentIndex && index !== currentIndex) {
                    return RevoltSwitcher_module.revoltSwitcherItemDotNotActive;
                }
                if (index === delayedCurrentIndex && index === currentIndex) {
                    return RevoltSwitcher_module.revoltSwitcherItemDotActive;
                }
                return RevoltSwitcher_module.revoltSwitcherItemDot;
            };
            return (react.createElement("div", { key: nanoid(), style: {
                    top: "".concat(top, "px"),
                    left: "".concat(left, "px"),
                    transform: "rotate(".concat((360 / INPUT_DATA_ARRAY_LENGTH) * currentIndex, "deg)"),
                }, className: RevoltSwitcher_module.revoltSwitcherItem, onClick: revoltItem },
                react.createElement("span", { style: {
                        display: isItemTextActive() ? 'inline' : 'none',
                    }, className: RevoltSwitcher_module.revoltSwitcherItemText }, date.topic),
                react.createElement("div", { className: setItemDotStyles() }, index + 1)));
        });
    };
    return {
        generateRevoltSwitcherItems: generateRevoltSwitcherItems,
        currentIndex: currentIndex,
        delayedCurrentIndex: delayedCurrentIndex,
        nextItem: nextItem,
        previousItem: previousItem,
        INPUT_DATA_ARRAY_LENGTH: INPUT_DATA_ARRAY_LENGTH,
        currentPeriod: currentPeriod,
        currentEvents: currentEvents,
    };
};

;// ./src/components/HistoricalDates/HistoricalDates.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const HistoricalDates_module = ({"wrapper":"Li9cUDgEZs83taHk2C9v","verticalLine":"BfpKhn5hiUwF_MCnOyHV","horizontalLine":"_3VuGyXtRS1D0lJ7hoWU"});
;// ./src/components/HistoricalDates/HistoricalDates.tsx






var HistoricalDates = function (_a) {
    var inputData = _a.inputData;
    var _b = useRevoltSwitcher(inputData, 20), generateRevoltSwitcherItems = _b.generateRevoltSwitcherItems, currentIndex = _b.currentIndex, delayedCurrentIndex = _b.delayedCurrentIndex, nextItem = _b.nextItem, previousItem = _b.previousItem, INPUT_DATA_ARRAY_LENGTH = _b.INPUT_DATA_ARRAY_LENGTH, currentPeriod = _b.currentPeriod, currentEvents = _b.currentEvents;
    return (react.createElement("div", { className: HistoricalDates_module.wrapper },
        react.createElement(components_Label, null),
        react.createElement(components_RevoltSwitcher, { currentIndex: currentIndex, inputDataArrayLength: INPUT_DATA_ARRAY_LENGTH, currentPeriod: currentPeriod, nextItem: nextItem, previousItem: previousItem, generateRevoltSwitcherItems: generateRevoltSwitcherItems }),
        react.createElement(components_Slider, { events: currentEvents, currentIndex: currentIndex, delayedCurrentIndex: delayedCurrentIndex }),
        react.createElement("div", { className: HistoricalDates_module.verticalLine }),
        react.createElement("div", { className: HistoricalDates_module.horizontalLine })));
};
/* harmony default export */ const HistoricalDates_HistoricalDates = (HistoricalDates);

;// ./src/components/HistoricalDates/index.ts

/* harmony default export */ const components_HistoricalDates = (HistoricalDates_HistoricalDates);

;// ./src/mockData/mockData.ts
var inputDataArray = [
    {
        period: [1992, 1997],
        topic: 'Космос',
        events: [
            {
                year: 1992,
                text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            },
            {
                year: 1993,
                text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
            },
            {
                year: 1994,
                text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 1995,
                text: 'Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже',
            },
            {
                year: 1996,
                text: 'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые',
            },
            {
                year: 1997,
                text: 'Скорость распространения лавы после извержения, близка к скорости бега гончей',
            },
        ],
    },
    {
        period: [1998, 2001],
        topic: 'Кино',
        events: [
            {
                year: 1998,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 1999,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2000,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2001,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
        ],
    },
    {
        period: [2002, 2007],
        topic: 'Кино',
        events: [
            {
                year: 2002,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2003,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2004,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2005,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2006,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2007,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
        ],
    },
    {
        period: [2008, 2013],
        topic: 'Космос',
        events: [
            {
                year: 2008,
                text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            },
            {
                year: 2009,
                text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
            },
            {
                year: 2010,
                text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            },
            {
                year: 2011,
                text: 'Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже',
            },
            {
                year: 2012,
                text: 'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые',
            },
            {
                year: 2013,
                text: 'Скорость распространения лавы после извержения, близка к скорости бега гончей',
            },
        ],
    },
    {
        period: [2014, 2019],
        topic: 'Кино',
        events: [
            {
                year: 2014,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2015,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2016,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2017,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2018,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
            {
                year: 2019,
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
            },
        ],
    },
];

;// ./src/App/App.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const App_module = ({"mainWrapper":"CxGacO8sAecjf1LXJ4e_"});
;// ./src/App/App.tsx




var App = function () {
    return (react.createElement("div", { className: App_module.mainWrapper },
        react.createElement(components_HistoricalDates, { inputData: inputDataArray })));
};

;// ./src/index.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const src = ({});
;// ./src/index.tsx




var root = client.createRoot(document.getElementById('root'));
root.render(react.createElement(react.StrictMode, null,
    react.createElement(App, null)));

/******/ })()
;