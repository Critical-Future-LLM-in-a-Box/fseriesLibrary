var X_ = Object.defineProperty;
var Tg = (e) => {
  throw TypeError(e);
};
var Y_ = (e, t, n) => t in e ? X_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ba = (e, t, n) => Y_(e, typeof t != "symbol" ? t + "" : t, n), Pf = (e, t, n) => t.has(e) || Tg("Cannot " + n);
var R = (e, t, n) => (Pf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ne = (e, t, n) => t.has(e) ? Tg("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), K = (e, t, n, r) => (Pf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ye = (e, t, n) => (Pf(e, t, "access private method"), n);
var wu = (e, t, n, r) => ({
  set _(o) {
    K(e, t, o, n);
  },
  get _() {
    return R(e, t, r);
  }
});
import { initChatbot as Eg } from "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/dist/llminaboxChat.js";
function J_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function D1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var z1 = { exports: {} }, bd = {}, B1 = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl = Symbol.for("react.element"), ek = Symbol.for("react.portal"), tk = Symbol.for("react.fragment"), nk = Symbol.for("react.strict_mode"), rk = Symbol.for("react.profiler"), ok = Symbol.for("react.provider"), ik = Symbol.for("react.context"), sk = Symbol.for("react.forward_ref"), ak = Symbol.for("react.suspense"), lk = Symbol.for("react.memo"), uk = Symbol.for("react.lazy"), Rg = Symbol.iterator;
function ck(e) {
  return e === null || typeof e != "object" ? null : (e = Rg && e[Rg] || e["@@iterator"], typeof e == "function" ? e : null);
}
var U1 = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, V1 = Object.assign, W1 = {};
function ua(e, t, n) {
  this.props = e, this.context = t, this.refs = W1, this.updater = n || U1;
}
ua.prototype.isReactComponent = {};
ua.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ua.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function H1() {
}
H1.prototype = ua.prototype;
function Rm(e, t, n) {
  this.props = e, this.context = t, this.refs = W1, this.updater = n || U1;
}
var Pm = Rm.prototype = new H1();
Pm.constructor = Rm;
V1(Pm, ua.prototype);
Pm.isPureReactComponent = !0;
var Pg = Array.isArray, K1 = Object.prototype.hasOwnProperty, Om = { current: null }, Q1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q1(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) K1.call(t, r) && !Q1.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Yl, type: e, key: i, ref: s, props: o, _owner: Om.current };
}
function dk(e, t) {
  return { $$typeof: Yl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yl;
}
function fk(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Og = /\/+/g;
function Of(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fk("" + e.key) : t.toString(36);
}
function Ju(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Yl:
        case ek:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Of(s, 0) : r, Pg(o) ? (n = "", e != null && (n = e.replace(Og, "$&/") + "/"), Ju(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Mm(o) && (o = dk(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Og, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Pg(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var l = r + Of(i, a);
    s += Ju(i, t, n, l, o);
  }
  else if (l = ck(e), typeof l == "function") for (e = l.call(e), a = 0; !(i = e.next()).done; ) i = i.value, l = r + Of(i, a++), s += Ju(i, t, n, l, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Su(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Ju(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function pk(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rn = { current: null }, ec = { transition: null }, hk = { ReactCurrentDispatcher: rn, ReactCurrentBatchConfig: ec, ReactCurrentOwner: Om };
function Z1() {
  throw Error("act(...) is not supported in production builds of React.");
}
xe.Children = { map: Su, forEach: function(e, t, n) {
  Su(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Su(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Su(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Mm(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
xe.Component = ua;
xe.Fragment = tk;
xe.Profiler = rk;
xe.PureComponent = Rm;
xe.StrictMode = nk;
xe.Suspense = ak;
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hk;
xe.act = Z1;
xe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = V1({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Om.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) K1.call(t, l) && !Q1.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Yl, type: e.type, key: o, ref: i, props: r, _owner: s };
};
xe.createContext = function(e) {
  return e = { $$typeof: ik, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ok, _context: e }, e.Consumer = e;
};
xe.createElement = q1;
xe.createFactory = function(e) {
  var t = q1.bind(null, e);
  return t.type = e, t;
};
xe.createRef = function() {
  return { current: null };
};
xe.forwardRef = function(e) {
  return { $$typeof: sk, render: e };
};
xe.isValidElement = Mm;
xe.lazy = function(e) {
  return { $$typeof: uk, _payload: { _status: -1, _result: e }, _init: pk };
};
xe.memo = function(e, t) {
  return { $$typeof: lk, type: e, compare: t === void 0 ? null : t };
};
xe.startTransition = function(e) {
  var t = ec.transition;
  ec.transition = {};
  try {
    e();
  } finally {
    ec.transition = t;
  }
};
xe.unstable_act = Z1;
xe.useCallback = function(e, t) {
  return rn.current.useCallback(e, t);
};
xe.useContext = function(e) {
  return rn.current.useContext(e);
};
xe.useDebugValue = function() {
};
xe.useDeferredValue = function(e) {
  return rn.current.useDeferredValue(e);
};
xe.useEffect = function(e, t) {
  return rn.current.useEffect(e, t);
};
xe.useId = function() {
  return rn.current.useId();
};
xe.useImperativeHandle = function(e, t, n) {
  return rn.current.useImperativeHandle(e, t, n);
};
xe.useInsertionEffect = function(e, t) {
  return rn.current.useInsertionEffect(e, t);
};
xe.useLayoutEffect = function(e, t) {
  return rn.current.useLayoutEffect(e, t);
};
xe.useMemo = function(e, t) {
  return rn.current.useMemo(e, t);
};
xe.useReducer = function(e, t, n) {
  return rn.current.useReducer(e, t, n);
};
xe.useRef = function(e) {
  return rn.current.useRef(e);
};
xe.useState = function(e) {
  return rn.current.useState(e);
};
xe.useSyncExternalStore = function(e, t, n) {
  return rn.current.useSyncExternalStore(e, t, n);
};
xe.useTransition = function() {
  return rn.current.useTransition();
};
xe.version = "18.3.1";
B1.exports = xe;
var _ = B1.exports;
const re = /* @__PURE__ */ D1(_), Sc = /* @__PURE__ */ J_({
  __proto__: null,
  default: re
}, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mk = _, yk = Symbol.for("react.element"), gk = Symbol.for("react.fragment"), vk = Object.prototype.hasOwnProperty, bk = mk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xk = { key: !0, ref: !0, __self: !0, __source: !0 };
function G1(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) vk.call(t, r) && !xk.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: yk, type: e, key: i, ref: s, props: o, _owner: bk.current };
}
bd.Fragment = gk;
bd.jsx = G1;
bd.jsxs = G1;
z1.exports = bd;
var S = z1.exports, X1 = { exports: {} }, $n = {}, Y1 = { exports: {} }, J1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(A, N) {
    var V = A.length;
    A.push(N);
    e: for (; 0 < V; ) {
      var H = V - 1 >>> 1, ee = A[H];
      if (0 < o(ee, N)) A[H] = N, A[V] = ee, V = H;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var N = A[0], V = A.pop();
    if (V !== N) {
      A[0] = V;
      e: for (var H = 0, ee = A.length, fe = ee >>> 1; H < fe; ) {
        var se = 2 * (H + 1) - 1, te = A[se], Se = se + 1, Te = A[Se];
        if (0 > o(te, V)) Se < ee && 0 > o(Te, te) ? (A[H] = Te, A[Se] = V, H = Se) : (A[H] = te, A[se] = V, H = se);
        else if (Se < ee && 0 > o(Te, V)) A[H] = Te, A[Se] = V, H = Se;
        else break e;
      }
    }
    return N;
  }
  function o(A, N) {
    var V = A.sortIndex - N.sortIndex;
    return V !== 0 ? V : A.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, y = !1, g = !1, v = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(A) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= A) r(u), N.sortIndex = N.expirationTime, t(l, N);
      else break;
      N = n(u);
    }
  }
  function b(A) {
    if (v = !1, p(A), !g) if (n(l) !== null) g = !0, D(k);
    else {
      var N = n(u);
      N !== null && U(b, N.startTime - A);
    }
  }
  function k(A, N) {
    g = !1, v && (v = !1, m(E), E = -1), y = !0;
    var V = f;
    try {
      for (p(N), d = n(l); d !== null && (!(d.expirationTime > N) || A && !P()); ) {
        var H = d.callback;
        if (typeof H == "function") {
          d.callback = null, f = d.priorityLevel;
          var ee = H(d.expirationTime <= N);
          N = e.unstable_now(), typeof ee == "function" ? d.callback = ee : d === n(l) && r(l), p(N);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var fe = !0;
      else {
        var se = n(u);
        se !== null && U(b, se.startTime - N), fe = !1;
      }
      return fe;
    } finally {
      d = null, f = V, y = !1;
    }
  }
  var C = !1, T = null, E = -1, M = 5, w = -1;
  function P() {
    return !(e.unstable_now() - w < M);
  }
  function j() {
    if (T !== null) {
      var A = e.unstable_now();
      w = A;
      var N = !0;
      try {
        N = T(!0, A);
      } finally {
        N ? O() : (C = !1, T = null);
      }
    } else C = !1;
  }
  var O;
  if (typeof h == "function") O = function() {
    h(j);
  };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(), F = L.port2;
    L.port1.onmessage = j, O = function() {
      F.postMessage(null);
    };
  } else O = function() {
    x(j, 0);
  };
  function D(A) {
    T = A, C || (C = !0, O());
  }
  function U(A, N) {
    E = x(function() {
      A(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, D(k));
  }, e.unstable_forceFrameRate = function(A) {
    0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < A ? Math.floor(1e3 / A) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(A) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = f;
    }
    var V = f;
    f = N;
    try {
      return A();
    } finally {
      f = V;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, N) {
    switch (A) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        A = 3;
    }
    var V = f;
    f = A;
    try {
      return N();
    } finally {
      f = V;
    }
  }, e.unstable_scheduleCallback = function(A, N, V) {
    var H = e.unstable_now();
    switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? H + V : H) : V = H, A) {
      case 1:
        var ee = -1;
        break;
      case 2:
        ee = 250;
        break;
      case 5:
        ee = 1073741823;
        break;
      case 4:
        ee = 1e4;
        break;
      default:
        ee = 5e3;
    }
    return ee = V + ee, A = { id: c++, callback: N, priorityLevel: A, startTime: V, expirationTime: ee, sortIndex: -1 }, V > H ? (A.sortIndex = V, t(u, A), n(l) === null && A === n(u) && (v ? (m(E), E = -1) : v = !0, U(b, V - H))) : (A.sortIndex = ee, t(l, A), g || y || (g = !0, D(k))), A;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(A) {
    var N = f;
    return function() {
      var V = f;
      f = N;
      try {
        return A.apply(this, arguments);
      } finally {
        f = V;
      }
    };
  };
})(J1);
Y1.exports = J1;
var wk = Y1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sk = _, Pn = wk;
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var eb = /* @__PURE__ */ new Set(), al = {};
function zi(e, t) {
  Bs(e, t), Bs(e + "Capture", t);
}
function Bs(e, t) {
  for (al[e] = t, e = 0; e < t.length; e++) eb.add(t[e]);
}
var oo = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kp = Object.prototype.hasOwnProperty, _k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mg = {}, Ig = {};
function kk(e) {
  return kp.call(Ig, e) ? !0 : kp.call(Mg, e) ? !1 : _k.test(e) ? Ig[e] = !0 : (Mg[e] = !0, !1);
}
function Ck(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tk(e, t, n, r) {
  if (t === null || typeof t > "u" || Ck(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function on(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var jt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  jt[e] = new on(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  jt[t] = new on(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  jt[e] = new on(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  jt[e] = new on(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  jt[e] = new on(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  jt[e] = new on(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  jt[e] = new on(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  jt[e] = new on(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  jt[e] = new on(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Im = /[\-:]([a-z])/g;
function Am(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Im,
    Am
  );
  jt[t] = new on(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Im, Am);
  jt[t] = new on(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Im, Am);
  jt[t] = new on(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  jt[e] = new on(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
jt.xlinkHref = new on("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  jt[e] = new on(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $m(e, t, n, r) {
  var o = jt.hasOwnProperty(t) ? jt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tk(t, n, o, r) && (n = null), r || o === null ? kk(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ho = Sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _u = Symbol.for("react.element"), es = Symbol.for("react.portal"), ts = Symbol.for("react.fragment"), jm = Symbol.for("react.strict_mode"), Cp = Symbol.for("react.profiler"), tb = Symbol.for("react.provider"), nb = Symbol.for("react.context"), Lm = Symbol.for("react.forward_ref"), Tp = Symbol.for("react.suspense"), Ep = Symbol.for("react.suspense_list"), Nm = Symbol.for("react.memo"), vo = Symbol.for("react.lazy"), rb = Symbol.for("react.offscreen"), Ag = Symbol.iterator;
function xa(e) {
  return e === null || typeof e != "object" ? null : (e = Ag && e[Ag] || e["@@iterator"], typeof e == "function" ? e : null);
}
var lt = Object.assign, Mf;
function Na(e) {
  if (Mf === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Mf = t && t[1] || "";
  }
  return `
` + Mf + e;
}
var If = !1;
function Af(e, t) {
  if (!e || If) return "";
  If = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || o[s] !== i[a]) {
              var l = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    If = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Na(e) : "";
}
function Ek(e) {
  switch (e.tag) {
    case 5:
      return Na(e.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Af(e.type, !1), e;
    case 11:
      return e = Af(e.type.render, !1), e;
    case 1:
      return e = Af(e.type, !0), e;
    default:
      return "";
  }
}
function Rp(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ts:
      return "Fragment";
    case es:
      return "Portal";
    case Cp:
      return "Profiler";
    case jm:
      return "StrictMode";
    case Tp:
      return "Suspense";
    case Ep:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case nb:
      return (e.displayName || "Context") + ".Consumer";
    case tb:
      return (e._context.displayName || "Context") + ".Provider";
    case Lm:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Nm:
      return t = e.displayName || null, t !== null ? t : Rp(e.type) || "Memo";
    case vo:
      t = e._payload, e = e._init;
      try {
        return Rp(e(t));
      } catch {
      }
  }
  return null;
}
function Rk(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Rp(t);
    case 8:
      return t === jm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ob(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pk(e) {
  var t = ob(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ku(e) {
  e._valueTracker || (e._valueTracker = Pk(e));
}
function ib(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ob(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _c(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pp(e, t) {
  var n = t.checked;
  return lt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function $g(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Vo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function sb(e, t) {
  t = t.checked, t != null && $m(e, "checked", t, !1);
}
function Op(e, t) {
  sb(e, t);
  var n = Vo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Mp(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mp(e, t.type, Vo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function jg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Mp(e, t, n) {
  (t !== "number" || _c(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fa = Array.isArray;
function gs(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ip(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return lt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Lg(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(B(92));
      if (Fa(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Vo(n) };
}
function ab(e, t) {
  var n = Vo(t.value), r = Vo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ng(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ap(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? lb(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cu, ub = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cu = Cu || document.createElement("div"), Cu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cu.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ll(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qa = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Ok = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qa).forEach(function(e) {
  Ok.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Qa[t] = Qa[e];
  });
});
function cb(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Qa.hasOwnProperty(e) && Qa[e] ? ("" + t).trim() : t + "px";
}
function db(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = cb(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Mk = lt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function $p(e, t) {
  if (t) {
    if (Mk[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function jp(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Lp = null;
function Fm(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Np = null, vs = null, bs = null;
function Fg(e) {
  if (e = tu(e)) {
    if (typeof Np != "function") throw Error(B(280));
    var t = e.stateNode;
    t && (t = kd(t), Np(e.stateNode, e.type, t));
  }
}
function fb(e) {
  vs ? bs ? bs.push(e) : bs = [e] : vs = e;
}
function pb() {
  if (vs) {
    var e = vs, t = bs;
    if (bs = vs = null, Fg(e), t) for (e = 0; e < t.length; e++) Fg(t[e]);
  }
}
function hb(e, t) {
  return e(t);
}
function mb() {
}
var $f = !1;
function yb(e, t, n) {
  if ($f) return e(t, n);
  $f = !0;
  try {
    return hb(e, t, n);
  } finally {
    $f = !1, (vs !== null || bs !== null) && (mb(), pb());
  }
}
function ul(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kd(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var Fp = !1;
if (oo) try {
  var wa = {};
  Object.defineProperty(wa, "passive", { get: function() {
    Fp = !0;
  } }), window.addEventListener("test", wa, wa), window.removeEventListener("test", wa, wa);
} catch {
  Fp = !1;
}
function Ik(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qa = !1, kc = null, Cc = !1, Dp = null, Ak = { onError: function(e) {
  qa = !0, kc = e;
} };
function $k(e, t, n, r, o, i, s, a, l) {
  qa = !1, kc = null, Ik.apply(Ak, arguments);
}
function jk(e, t, n, r, o, i, s, a, l) {
  if ($k.apply(this, arguments), qa) {
    if (qa) {
      var u = kc;
      qa = !1, kc = null;
    } else throw Error(B(198));
    Cc || (Cc = !0, Dp = u);
  }
}
function Bi(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Dg(e) {
  if (Bi(e) !== e) throw Error(B(188));
}
function Lk(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Bi(e), t === null) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Dg(o), e;
        if (i === r) return Dg(o), t;
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function vb(e) {
  return e = Lk(e), e !== null ? bb(e) : null;
}
function bb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xb = Pn.unstable_scheduleCallback, zg = Pn.unstable_cancelCallback, Nk = Pn.unstable_shouldYield, Fk = Pn.unstable_requestPaint, yt = Pn.unstable_now, Dk = Pn.unstable_getCurrentPriorityLevel, Dm = Pn.unstable_ImmediatePriority, wb = Pn.unstable_UserBlockingPriority, Tc = Pn.unstable_NormalPriority, zk = Pn.unstable_LowPriority, Sb = Pn.unstable_IdlePriority, xd = null, Ar = null;
function Bk(e) {
  if (Ar && typeof Ar.onCommitFiberRoot == "function") try {
    Ar.onCommitFiberRoot(xd, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var cr = Math.clz32 ? Math.clz32 : Wk, Uk = Math.log, Vk = Math.LN2;
function Wk(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Uk(e) / Vk | 0) | 0;
}
var Tu = 64, Eu = 4194304;
function Da(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ec(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = Da(a) : (i &= s, i !== 0 && (r = Da(i)));
  } else s = n & ~o, s !== 0 ? r = Da(s) : i !== 0 && (r = Da(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - cr(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Hk(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kk(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - cr(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Hk(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function zp(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function _b() {
  var e = Tu;
  return Tu <<= 1, !(Tu & 4194240) && (Tu = 64), e;
}
function jf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cr(t), e[t] = n;
}
function Qk(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - cr(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function zm(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - cr(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Be = 0;
function kb(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Cb, Bm, Tb, Eb, Rb, Bp = !1, Ru = [], $o = null, jo = null, Lo = null, cl = /* @__PURE__ */ new Map(), dl = /* @__PURE__ */ new Map(), xo = [], qk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $o = null;
      break;
    case "dragenter":
    case "dragleave":
      jo = null;
      break;
    case "mouseover":
    case "mouseout":
      Lo = null;
      break;
    case "pointerover":
    case "pointerout":
      cl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dl.delete(t.pointerId);
  }
}
function Sa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tu(t), t !== null && Bm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Zk(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return $o = Sa($o, e, t, n, r, o), !0;
    case "dragenter":
      return jo = Sa(jo, e, t, n, r, o), !0;
    case "mouseover":
      return Lo = Sa(Lo, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return cl.set(i, Sa(cl.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, dl.set(i, Sa(dl.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Pb(e) {
  var t = ai(e.target);
  if (t !== null) {
    var n = Bi(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gb(n), t !== null) {
          e.blockedOn = t, Rb(e.priority, function() {
            Tb(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function tc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Up(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Lp = r, n.target.dispatchEvent(r), Lp = null;
    } else return t = tu(n), t !== null && Bm(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ug(e, t, n) {
  tc(e) && n.delete(t);
}
function Gk() {
  Bp = !1, $o !== null && tc($o) && ($o = null), jo !== null && tc(jo) && (jo = null), Lo !== null && tc(Lo) && (Lo = null), cl.forEach(Ug), dl.forEach(Ug);
}
function _a(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Bp || (Bp = !0, Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority, Gk)));
}
function fl(e) {
  function t(o) {
    return _a(o, e);
  }
  if (0 < Ru.length) {
    _a(Ru[0], e);
    for (var n = 1; n < Ru.length; n++) {
      var r = Ru[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($o !== null && _a($o, e), jo !== null && _a(jo, e), Lo !== null && _a(Lo, e), cl.forEach(t), dl.forEach(t), n = 0; n < xo.length; n++) r = xo[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xo.length && (n = xo[0], n.blockedOn === null); ) Pb(n), n.blockedOn === null && xo.shift();
}
var xs = ho.ReactCurrentBatchConfig, Rc = !0;
function Xk(e, t, n, r) {
  var o = Be, i = xs.transition;
  xs.transition = null;
  try {
    Be = 1, Um(e, t, n, r);
  } finally {
    Be = o, xs.transition = i;
  }
}
function Yk(e, t, n, r) {
  var o = Be, i = xs.transition;
  xs.transition = null;
  try {
    Be = 4, Um(e, t, n, r);
  } finally {
    Be = o, xs.transition = i;
  }
}
function Um(e, t, n, r) {
  if (Rc) {
    var o = Up(e, t, n, r);
    if (o === null) Hf(e, t, r, Pc, n), Bg(e, r);
    else if (Zk(o, e, t, n, r)) r.stopPropagation();
    else if (Bg(e, r), t & 4 && -1 < qk.indexOf(e)) {
      for (; o !== null; ) {
        var i = tu(o);
        if (i !== null && Cb(i), i = Up(e, t, n, r), i === null && Hf(e, t, r, Pc, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Hf(e, t, r, null, n);
  }
}
var Pc = null;
function Up(e, t, n, r) {
  if (Pc = null, e = Fm(r), e = ai(e), e !== null) if (t = Bi(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = gb(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Pc = e, null;
}
function Ob(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dk()) {
        case Dm:
          return 1;
        case wb:
          return 4;
        case Tc:
        case zk:
          return 16;
        case Sb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Io = null, Vm = null, nc = null;
function Mb() {
  if (nc) return nc;
  var e, t = Vm, n = t.length, r, o = "value" in Io ? Io.value : Io.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return nc = o.slice(e, 1 < r ? 1 - r : void 0);
}
function rc(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pu() {
  return !0;
}
function Vg() {
  return !1;
}
function jn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pu : Vg, this.isPropagationStopped = Vg, this;
  }
  return lt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pu);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pu);
  }, persist: function() {
  }, isPersistent: Pu }), t;
}
var ca = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Wm = jn(ca), eu = lt({}, ca, { view: 0, detail: 0 }), Jk = jn(eu), Lf, Nf, ka, wd = lt({}, eu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hm, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ka && (ka && e.type === "mousemove" ? (Lf = e.screenX - ka.screenX, Nf = e.screenY - ka.screenY) : Nf = Lf = 0, ka = e), Lf);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Nf;
} }), Wg = jn(wd), eC = lt({}, wd, { dataTransfer: 0 }), tC = jn(eC), nC = lt({}, eu, { relatedTarget: 0 }), Ff = jn(nC), rC = lt({}, ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oC = jn(rC), iC = lt({}, ca, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sC = jn(iC), aC = lt({}, ca, { data: 0 }), Hg = jn(aC), lC = {
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
}, uC = {
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
}, cC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function dC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cC[e]) ? !!t[e] : !1;
}
function Hm() {
  return dC;
}
var fC = lt({}, eu, { key: function(e) {
  if (e.key) {
    var t = lC[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = rc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uC[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hm, charCode: function(e) {
  return e.type === "keypress" ? rc(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? rc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), pC = jn(fC), hC = lt({}, wd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kg = jn(hC), mC = lt({}, eu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hm }), yC = jn(mC), gC = lt({}, ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vC = jn(gC), bC = lt({}, wd, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), xC = jn(bC), wC = [9, 13, 27, 32], Km = oo && "CompositionEvent" in window, Za = null;
oo && "documentMode" in document && (Za = document.documentMode);
var SC = oo && "TextEvent" in window && !Za, Ib = oo && (!Km || Za && 8 < Za && 11 >= Za), Qg = " ", qg = !1;
function Ab(e, t) {
  switch (e) {
    case "keyup":
      return wC.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $b(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ns = !1;
function _C(e, t) {
  switch (e) {
    case "compositionend":
      return $b(t);
    case "keypress":
      return t.which !== 32 ? null : (qg = !0, Qg);
    case "textInput":
      return e = t.data, e === Qg && qg ? null : e;
    default:
      return null;
  }
}
function kC(e, t) {
  if (ns) return e === "compositionend" || !Km && Ab(e, t) ? (e = Mb(), nc = Vm = Io = null, ns = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ib && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var CC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Zg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!CC[e.type] : t === "textarea";
}
function jb(e, t, n, r) {
  fb(r), t = Oc(t, "onChange"), 0 < t.length && (n = new Wm("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ga = null, pl = null;
function TC(e) {
  Kb(e, 0);
}
function Sd(e) {
  var t = is(e);
  if (ib(t)) return e;
}
function EC(e, t) {
  if (e === "change") return t;
}
var Lb = !1;
if (oo) {
  var Df;
  if (oo) {
    var zf = "oninput" in document;
    if (!zf) {
      var Gg = document.createElement("div");
      Gg.setAttribute("oninput", "return;"), zf = typeof Gg.oninput == "function";
    }
    Df = zf;
  } else Df = !1;
  Lb = Df && (!document.documentMode || 9 < document.documentMode);
}
function Xg() {
  Ga && (Ga.detachEvent("onpropertychange", Nb), pl = Ga = null);
}
function Nb(e) {
  if (e.propertyName === "value" && Sd(pl)) {
    var t = [];
    jb(t, pl, e, Fm(e)), yb(TC, t);
  }
}
function RC(e, t, n) {
  e === "focusin" ? (Xg(), Ga = t, pl = n, Ga.attachEvent("onpropertychange", Nb)) : e === "focusout" && Xg();
}
function PC(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sd(pl);
}
function OC(e, t) {
  if (e === "click") return Sd(t);
}
function MC(e, t) {
  if (e === "input" || e === "change") return Sd(t);
}
function IC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var hr = typeof Object.is == "function" ? Object.is : IC;
function hl(e, t) {
  if (hr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!kp.call(t, o) || !hr(e[o], t[o])) return !1;
  }
  return !0;
}
function Yg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jg(e, t) {
  var n = Yg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yg(n);
  }
}
function Fb(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fb(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Db() {
  for (var e = window, t = _c(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = _c(e.document);
  }
  return t;
}
function Qm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function AC(e) {
  var t = Db(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Fb(n.ownerDocument.documentElement, n)) {
    if (r !== null && Qm(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Jg(n, i);
        var s = Jg(
          n,
          r
        );
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var $C = oo && "documentMode" in document && 11 >= document.documentMode, rs = null, Vp = null, Xa = null, Wp = !1;
function ev(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wp || rs == null || rs !== _c(r) || (r = rs, "selectionStart" in r && Qm(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Xa && hl(Xa, r) || (Xa = r, r = Oc(Vp, "onSelect"), 0 < r.length && (t = new Wm("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = rs)));
}
function Ou(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var os = { animationend: Ou("Animation", "AnimationEnd"), animationiteration: Ou("Animation", "AnimationIteration"), animationstart: Ou("Animation", "AnimationStart"), transitionend: Ou("Transition", "TransitionEnd") }, Bf = {}, zb = {};
oo && (zb = document.createElement("div").style, "AnimationEvent" in window || (delete os.animationend.animation, delete os.animationiteration.animation, delete os.animationstart.animation), "TransitionEvent" in window || delete os.transitionend.transition);
function _d(e) {
  if (Bf[e]) return Bf[e];
  if (!os[e]) return e;
  var t = os[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in zb) return Bf[e] = t[n];
  return e;
}
var Bb = _d("animationend"), Ub = _d("animationiteration"), Vb = _d("animationstart"), Wb = _d("transitionend"), Hb = /* @__PURE__ */ new Map(), tv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Xo(e, t) {
  Hb.set(e, t), zi(t, [e]);
}
for (var Uf = 0; Uf < tv.length; Uf++) {
  var Vf = tv[Uf], jC = Vf.toLowerCase(), LC = Vf[0].toUpperCase() + Vf.slice(1);
  Xo(jC, "on" + LC);
}
Xo(Bb, "onAnimationEnd");
Xo(Ub, "onAnimationIteration");
Xo(Vb, "onAnimationStart");
Xo("dblclick", "onDoubleClick");
Xo("focusin", "onFocus");
Xo("focusout", "onBlur");
Xo(Wb, "onTransitionEnd");
Bs("onMouseEnter", ["mouseout", "mouseover"]);
Bs("onMouseLeave", ["mouseout", "mouseover"]);
Bs("onPointerEnter", ["pointerout", "pointerover"]);
Bs("onPointerLeave", ["pointerout", "pointerover"]);
zi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), NC = new Set("cancel close invalid load scroll toggle".split(" ").concat(za));
function nv(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, jk(r, t, void 0, e), e.currentTarget = null;
}
function Kb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        nv(o, a, u), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        nv(o, a, u), i = l;
      }
    }
  }
  if (Cc) throw e = Dp, Cc = !1, Dp = null, e;
}
function Ye(e, t) {
  var n = t[Zp];
  n === void 0 && (n = t[Zp] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Qb(t, e, 2, !1), n.add(r));
}
function Wf(e, t, n) {
  var r = 0;
  t && (r |= 4), Qb(n, e, r, t);
}
var Mu = "_reactListening" + Math.random().toString(36).slice(2);
function ml(e) {
  if (!e[Mu]) {
    e[Mu] = !0, eb.forEach(function(n) {
      n !== "selectionchange" && (NC.has(n) || Wf(n, !1, e), Wf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mu] || (t[Mu] = !0, Wf("selectionchange", !1, t));
  }
}
function Qb(e, t, n, r) {
  switch (Ob(t)) {
    case 1:
      var o = Xk;
      break;
    case 4:
      o = Yk;
      break;
    default:
      o = Um;
  }
  n = o.bind(null, t, n, e), o = void 0, !Fp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Hf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = ai(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  yb(function() {
    var u = i, c = Fm(n), d = [];
    e: {
      var f = Hb.get(e);
      if (f !== void 0) {
        var y = Wm, g = e;
        switch (e) {
          case "keypress":
            if (rc(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = pC;
            break;
          case "focusin":
            g = "focus", y = Ff;
            break;
          case "focusout":
            g = "blur", y = Ff;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ff;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Wg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = tC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = yC;
            break;
          case Bb:
          case Ub:
          case Vb:
            y = oC;
            break;
          case Wb:
            y = vC;
            break;
          case "scroll":
            y = Jk;
            break;
          case "wheel":
            y = xC;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = sC;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Kg;
        }
        var v = (t & 4) !== 0, x = !v && e === "scroll", m = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var b = p.stateNode;
          if (p.tag === 5 && b !== null && (p = b, m !== null && (b = ul(h, m), b != null && v.push(yl(h, b, p)))), x) break;
          h = h.return;
        }
        0 < v.length && (f = new y(f, g, null, n, c), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== Lp && (g = n.relatedTarget || n.fromElement) && (ai(g) || g[io])) break e;
        if ((y || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = u, g = g ? ai(g) : null, g !== null && (x = Bi(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = u), y !== g)) {
          if (v = Wg, b = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Kg, b = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = y == null ? f : is(y), p = g == null ? f : is(g), f = new v(b, h + "leave", y, n, c), f.target = x, f.relatedTarget = p, b = null, ai(c) === u && (v = new v(m, h + "enter", g, n, c), v.target = p, v.relatedTarget = x, b = v), x = b, y && g) t: {
            for (v = y, m = g, h = 0, p = v; p; p = Vi(p)) h++;
            for (p = 0, b = m; b; b = Vi(b)) p++;
            for (; 0 < h - p; ) v = Vi(v), h--;
            for (; 0 < p - h; ) m = Vi(m), p--;
            for (; h--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = Vi(v), m = Vi(m);
            }
            v = null;
          }
          else v = null;
          y !== null && rv(d, f, y, v, !1), g !== null && x !== null && rv(d, x, g, v, !0);
        }
      }
      e: {
        if (f = u ? is(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var k = EC;
        else if (Zg(f)) if (Lb) k = MC;
        else {
          k = PC;
          var C = RC;
        }
        else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = OC);
        if (k && (k = k(e, u))) {
          jb(d, k, n, c);
          break e;
        }
        C && C(e, f, u), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Mp(f, "number", f.value);
      }
      switch (C = u ? is(u) : window, e) {
        case "focusin":
          (Zg(C) || C.contentEditable === "true") && (rs = C, Vp = u, Xa = null);
          break;
        case "focusout":
          Xa = Vp = rs = null;
          break;
        case "mousedown":
          Wp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wp = !1, ev(d, n, c);
          break;
        case "selectionchange":
          if ($C) break;
        case "keydown":
        case "keyup":
          ev(d, n, c);
      }
      var T;
      if (Km) e: {
        switch (e) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else ns ? Ab(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Ib && n.locale !== "ko" && (ns || E !== "onCompositionStart" ? E === "onCompositionEnd" && ns && (T = Mb()) : (Io = c, Vm = "value" in Io ? Io.value : Io.textContent, ns = !0)), C = Oc(u, E), 0 < C.length && (E = new Hg(E, e, null, n, c), d.push({ event: E, listeners: C }), T ? E.data = T : (T = $b(n), T !== null && (E.data = T)))), (T = SC ? _C(e, n) : kC(e, n)) && (u = Oc(u, "onBeforeInput"), 0 < u.length && (c = new Hg("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = T));
    }
    Kb(d, t);
  });
}
function yl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ul(e, n), i != null && r.unshift(yl(e, i, o)), i = ul(e, t), i != null && r.push(yl(e, i, o))), e = e.return;
  }
  return r;
}
function Vi(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rv(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = ul(n, i), l != null && s.unshift(yl(n, l, a))) : o || (l = ul(n, i), l != null && s.push(yl(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var FC = /\r\n?/g, DC = /\u0000|\uFFFD/g;
function ov(e) {
  return (typeof e == "string" ? e : "" + e).replace(FC, `
`).replace(DC, "");
}
function Iu(e, t, n) {
  if (t = ov(t), ov(e) !== t && n) throw Error(B(425));
}
function Mc() {
}
var Hp = null, Kp = null;
function Qp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var qp = typeof setTimeout == "function" ? setTimeout : void 0, zC = typeof clearTimeout == "function" ? clearTimeout : void 0, iv = typeof Promise == "function" ? Promise : void 0, BC = typeof queueMicrotask == "function" ? queueMicrotask : typeof iv < "u" ? function(e) {
  return iv.resolve(null).then(e).catch(UC);
} : qp;
function UC(e) {
  setTimeout(function() {
    throw e;
  });
}
function Kf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), fl(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  fl(t);
}
function No(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function sv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2), Mr = "__reactFiber$" + da, gl = "__reactProps$" + da, io = "__reactContainer$" + da, Zp = "__reactEvents$" + da, VC = "__reactListeners$" + da, WC = "__reactHandles$" + da;
function ai(e) {
  var t = e[Mr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[io] || n[Mr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = sv(e); e !== null; ) {
        if (n = e[Mr]) return n;
        e = sv(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tu(e) {
  return e = e[Mr] || e[io], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function is(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function kd(e) {
  return e[gl] || null;
}
var Gp = [], ss = -1;
function Yo(e) {
  return { current: e };
}
function Je(e) {
  0 > ss || (e.current = Gp[ss], Gp[ss] = null, ss--);
}
function Xe(e, t) {
  ss++, Gp[ss] = e.current, e.current = t;
}
var Wo = {}, Ht = Yo(Wo), fn = Yo(!1), ki = Wo;
function Us(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function pn(e) {
  return e = e.childContextTypes, e != null;
}
function Ic() {
  Je(fn), Je(Ht);
}
function av(e, t, n) {
  if (Ht.current !== Wo) throw Error(B(168));
  Xe(Ht, t), Xe(fn, n);
}
function qb(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, Rk(e) || "Unknown", o));
  return lt({}, n, r);
}
function Ac(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Wo, ki = Ht.current, Xe(Ht, e), Xe(fn, fn.current), !0;
}
function lv(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n ? (e = qb(e, t, ki), r.__reactInternalMemoizedMergedChildContext = e, Je(fn), Je(Ht), Xe(Ht, e)) : Je(fn), Xe(fn, n);
}
var Xr = null, Cd = !1, Qf = !1;
function Zb(e) {
  Xr === null ? Xr = [e] : Xr.push(e);
}
function HC(e) {
  Cd = !0, Zb(e);
}
function Jo() {
  if (!Qf && Xr !== null) {
    Qf = !0;
    var e = 0, t = Be;
    try {
      var n = Xr;
      for (Be = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xr = null, Cd = !1;
    } catch (o) {
      throw Xr !== null && (Xr = Xr.slice(e + 1)), xb(Dm, Jo), o;
    } finally {
      Be = t, Qf = !1;
    }
  }
  return null;
}
var as = [], ls = 0, $c = null, jc = 0, Un = [], Vn = 0, Ci = null, eo = 1, to = "";
function ni(e, t) {
  as[ls++] = jc, as[ls++] = $c, $c = e, jc = t;
}
function Gb(e, t, n) {
  Un[Vn++] = eo, Un[Vn++] = to, Un[Vn++] = Ci, Ci = e;
  var r = eo;
  e = to;
  var o = 32 - cr(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - cr(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, eo = 1 << 32 - cr(t) + o | n << o | r, to = i + e;
  } else eo = 1 << i | n << o | r, to = e;
}
function qm(e) {
  e.return !== null && (ni(e, 1), Gb(e, 1, 0));
}
function Zm(e) {
  for (; e === $c; ) $c = as[--ls], as[ls] = null, jc = as[--ls], as[ls] = null;
  for (; e === Ci; ) Ci = Un[--Vn], Un[Vn] = null, to = Un[--Vn], Un[Vn] = null, eo = Un[--Vn], Un[Vn] = null;
}
var Cn = null, kn = null, nt = !1, sr = null;
function Xb(e, t) {
  var n = Hn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function uv(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Cn = e, kn = No(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Cn = e, kn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ci !== null ? { id: eo, overflow: to } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Hn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Cn = e, kn = null, !0) : !1;
    default:
      return !1;
  }
}
function Xp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yp(e) {
  if (nt) {
    var t = kn;
    if (t) {
      var n = t;
      if (!uv(e, t)) {
        if (Xp(e)) throw Error(B(418));
        t = No(n.nextSibling);
        var r = Cn;
        t && uv(e, t) ? Xb(r, n) : (e.flags = e.flags & -4097 | 2, nt = !1, Cn = e);
      }
    } else {
      if (Xp(e)) throw Error(B(418));
      e.flags = e.flags & -4097 | 2, nt = !1, Cn = e;
    }
  }
}
function cv(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Cn = e;
}
function Au(e) {
  if (e !== Cn) return !1;
  if (!nt) return cv(e), nt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qp(e.type, e.memoizedProps)), t && (t = kn)) {
    if (Xp(e)) throw Yb(), Error(B(418));
    for (; t; ) Xb(e, t), t = No(t.nextSibling);
  }
  if (cv(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kn = No(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      kn = null;
    }
  } else kn = Cn ? No(e.stateNode.nextSibling) : null;
  return !0;
}
function Yb() {
  for (var e = kn; e; ) e = No(e.nextSibling);
}
function Vs() {
  kn = Cn = null, nt = !1;
}
function Gm(e) {
  sr === null ? sr = [e] : sr.push(e);
}
var KC = ho.ReactCurrentBatchConfig;
function Ca(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function $u(e, t) {
  throw e = Object.prototype.toString.call(t), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function dv(e) {
  var t = e._init;
  return t(e._payload);
}
function Jb(e) {
  function t(m, h) {
    if (e) {
      var p = m.deletions;
      p === null ? (m.deletions = [h], m.flags |= 16) : p.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), h = h.sibling;
    return null;
  }
  function r(m, h) {
    for (m = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
    return m;
  }
  function o(m, h) {
    return m = Bo(m, h), m.index = 0, m.sibling = null, m;
  }
  function i(m, h, p) {
    return m.index = p, e ? (p = m.alternate, p !== null ? (p = p.index, p < h ? (m.flags |= 2, h) : p) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, p, b) {
    return h === null || h.tag !== 6 ? (h = ep(p, m.mode, b), h.return = m, h) : (h = o(h, p), h.return = m, h);
  }
  function l(m, h, p, b) {
    var k = p.type;
    return k === ts ? c(m, h, p.props.children, b, p.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vo && dv(k) === h.type) ? (b = o(h, p.props), b.ref = Ca(m, h, p), b.return = m, b) : (b = cc(p.type, p.key, p.props, null, m.mode, b), b.ref = Ca(m, h, p), b.return = m, b);
  }
  function u(m, h, p, b) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = tp(p, m.mode, b), h.return = m, h) : (h = o(h, p.children || []), h.return = m, h);
  }
  function c(m, h, p, b, k) {
    return h === null || h.tag !== 7 ? (h = xi(p, m.mode, b, k), h.return = m, h) : (h = o(h, p), h.return = m, h);
  }
  function d(m, h, p) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = ep("" + h, m.mode, p), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _u:
          return p = cc(h.type, h.key, h.props, null, m.mode, p), p.ref = Ca(m, null, h), p.return = m, p;
        case es:
          return h = tp(h, m.mode, p), h.return = m, h;
        case vo:
          var b = h._init;
          return d(m, b(h._payload), p);
      }
      if (Fa(h) || xa(h)) return h = xi(h, m.mode, p, null), h.return = m, h;
      $u(m, h);
    }
    return null;
  }
  function f(m, h, p, b) {
    var k = h !== null ? h.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : a(m, h, "" + p, b);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case _u:
          return p.key === k ? l(m, h, p, b) : null;
        case es:
          return p.key === k ? u(m, h, p, b) : null;
        case vo:
          return k = p._init, f(
            m,
            h,
            k(p._payload),
            b
          );
      }
      if (Fa(p) || xa(p)) return k !== null ? null : c(m, h, p, b, null);
      $u(m, p);
    }
    return null;
  }
  function y(m, h, p, b, k) {
    if (typeof b == "string" && b !== "" || typeof b == "number") return m = m.get(p) || null, a(h, m, "" + b, k);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case _u:
          return m = m.get(b.key === null ? p : b.key) || null, l(h, m, b, k);
        case es:
          return m = m.get(b.key === null ? p : b.key) || null, u(h, m, b, k);
        case vo:
          var C = b._init;
          return y(m, h, p, C(b._payload), k);
      }
      if (Fa(b) || xa(b)) return m = m.get(p) || null, c(h, m, b, k, null);
      $u(h, b);
    }
    return null;
  }
  function g(m, h, p, b) {
    for (var k = null, C = null, T = h, E = h = 0, M = null; T !== null && E < p.length; E++) {
      T.index > E ? (M = T, T = null) : M = T.sibling;
      var w = f(m, T, p[E], b);
      if (w === null) {
        T === null && (T = M);
        break;
      }
      e && T && w.alternate === null && t(m, T), h = i(w, h, E), C === null ? k = w : C.sibling = w, C = w, T = M;
    }
    if (E === p.length) return n(m, T), nt && ni(m, E), k;
    if (T === null) {
      for (; E < p.length; E++) T = d(m, p[E], b), T !== null && (h = i(T, h, E), C === null ? k = T : C.sibling = T, C = T);
      return nt && ni(m, E), k;
    }
    for (T = r(m, T); E < p.length; E++) M = y(T, m, E, p[E], b), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? E : M.key), h = i(M, h, E), C === null ? k = M : C.sibling = M, C = M);
    return e && T.forEach(function(P) {
      return t(m, P);
    }), nt && ni(m, E), k;
  }
  function v(m, h, p, b) {
    var k = xa(p);
    if (typeof k != "function") throw Error(B(150));
    if (p = k.call(p), p == null) throw Error(B(151));
    for (var C = k = null, T = h, E = h = 0, M = null, w = p.next(); T !== null && !w.done; E++, w = p.next()) {
      T.index > E ? (M = T, T = null) : M = T.sibling;
      var P = f(m, T, w.value, b);
      if (P === null) {
        T === null && (T = M);
        break;
      }
      e && T && P.alternate === null && t(m, T), h = i(P, h, E), C === null ? k = P : C.sibling = P, C = P, T = M;
    }
    if (w.done) return n(
      m,
      T
    ), nt && ni(m, E), k;
    if (T === null) {
      for (; !w.done; E++, w = p.next()) w = d(m, w.value, b), w !== null && (h = i(w, h, E), C === null ? k = w : C.sibling = w, C = w);
      return nt && ni(m, E), k;
    }
    for (T = r(m, T); !w.done; E++, w = p.next()) w = y(T, m, E, w.value, b), w !== null && (e && w.alternate !== null && T.delete(w.key === null ? E : w.key), h = i(w, h, E), C === null ? k = w : C.sibling = w, C = w);
    return e && T.forEach(function(j) {
      return t(m, j);
    }), nt && ni(m, E), k;
  }
  function x(m, h, p, b) {
    if (typeof p == "object" && p !== null && p.type === ts && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case _u:
          e: {
            for (var k = p.key, C = h; C !== null; ) {
              if (C.key === k) {
                if (k = p.type, k === ts) {
                  if (C.tag === 7) {
                    n(m, C.sibling), h = o(C, p.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === vo && dv(k) === C.type) {
                  n(m, C.sibling), h = o(C, p.props), h.ref = Ca(m, C, p), h.return = m, m = h;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            p.type === ts ? (h = xi(p.props.children, m.mode, b, p.key), h.return = m, m = h) : (b = cc(p.type, p.key, p.props, null, m.mode, b), b.ref = Ca(m, h, p), b.return = m, m = b);
          }
          return s(m);
        case es:
          e: {
            for (C = p.key; h !== null; ) {
              if (h.key === C) if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                n(m, h.sibling), h = o(h, p.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = tp(p, m.mode, b), h.return = m, m = h;
          }
          return s(m);
        case vo:
          return C = p._init, x(m, h, C(p._payload), b);
      }
      if (Fa(p)) return g(m, h, p, b);
      if (xa(p)) return v(m, h, p, b);
      $u(m, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, p), h.return = m, m = h) : (n(m, h), h = ep(p, m.mode, b), h.return = m, m = h), s(m)) : n(m, h);
  }
  return x;
}
var Ws = Jb(!0), ex = Jb(!1), Lc = Yo(null), Nc = null, us = null, Xm = null;
function Ym() {
  Xm = us = Nc = null;
}
function Jm(e) {
  var t = Lc.current;
  Je(Lc), e._currentValue = t;
}
function Jp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ws(e, t) {
  Nc = e, Xm = us = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (dn = !0), e.firstContext = null);
}
function Zn(e) {
  var t = e._currentValue;
  if (Xm !== e) if (e = { context: e, memoizedValue: t, next: null }, us === null) {
    if (Nc === null) throw Error(B(308));
    us = e, Nc.dependencies = { lanes: 0, firstContext: e };
  } else us = us.next = e;
  return t;
}
var li = null;
function ey(e) {
  li === null ? li = [e] : li.push(e);
}
function tx(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ey(t)) : (n.next = o.next, o.next = n), t.interleaved = n, so(e, r);
}
function so(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bo = !1;
function ty(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nx(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function no(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Fo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Me & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, so(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ey(r)) : (t.next = o.next, o.next = t), r.interleaved = t, so(e, n);
}
function oc(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zm(e, n);
  }
}
function fv(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Fc(e, t, n, r) {
  var o = e.updateQueue;
  bo = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, c = u = l = null, a = i;
    do {
      var f = a.lane, y = a.eventTime;
      if ((r & f) === f) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var g = e, v = a;
          switch (f = t, y = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                d = g.call(y, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, f = typeof g == "function" ? g.call(y, d, f) : g, f == null) break e;
              d = lt({}, d, f);
              break e;
            case 2:
              bo = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else y = { eventTime: y, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = y, l = d) : c = c.next = y, s |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Ei |= s, e.lanes = s, e.memoizedState = d;
  }
}
function pv(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(B(191, o));
      o.call(r);
    }
  }
}
var nu = {}, $r = Yo(nu), vl = Yo(nu), bl = Yo(nu);
function ui(e) {
  if (e === nu) throw Error(B(174));
  return e;
}
function ny(e, t) {
  switch (Xe(bl, t), Xe(vl, e), Xe($r, nu), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ap(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ap(t, e);
  }
  Je($r), Xe($r, t);
}
function Hs() {
  Je($r), Je(vl), Je(bl);
}
function rx(e) {
  ui(bl.current);
  var t = ui($r.current), n = Ap(t, e.type);
  t !== n && (Xe(vl, e), Xe($r, n));
}
function ry(e) {
  vl.current === e && (Je($r), Je(vl));
}
var st = Yo(0);
function Dc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var qf = [];
function oy() {
  for (var e = 0; e < qf.length; e++) qf[e]._workInProgressVersionPrimary = null;
  qf.length = 0;
}
var ic = ho.ReactCurrentDispatcher, Zf = ho.ReactCurrentBatchConfig, Ti = 0, at = null, _t = null, Et = null, zc = !1, Ya = !1, xl = 0, QC = 0;
function Lt() {
  throw Error(B(321));
}
function iy(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!hr(e[n], t[n])) return !1;
  return !0;
}
function sy(e, t, n, r, o, i) {
  if (Ti = i, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ic.current = e === null || e.memoizedState === null ? XC : YC, e = n(r, o), Ya) {
    i = 0;
    do {
      if (Ya = !1, xl = 0, 25 <= i) throw Error(B(301));
      i += 1, Et = _t = null, t.updateQueue = null, ic.current = JC, e = n(r, o);
    } while (Ya);
  }
  if (ic.current = Bc, t = _t !== null && _t.next !== null, Ti = 0, Et = _t = at = null, zc = !1, t) throw Error(B(300));
  return e;
}
function ay() {
  var e = xl !== 0;
  return xl = 0, e;
}
function kr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? at.memoizedState = Et = e : Et = Et.next = e, Et;
}
function Gn() {
  if (_t === null) {
    var e = at.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _t.next;
  var t = Et === null ? at.memoizedState : Et.next;
  if (t !== null) Et = t, _t = e;
  else {
    if (e === null) throw Error(B(310));
    _t = e, e = { memoizedState: _t.memoizedState, baseState: _t.baseState, baseQueue: _t.baseQueue, queue: _t.queue, next: null }, Et === null ? at.memoizedState = Et = e : Et = Et.next = e;
  }
  return Et;
}
function wl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gf(e) {
  var t = Gn(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = _t, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, u = i;
    do {
      var c = u.lane;
      if ((Ti & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, at.lanes |= c, Ei |= c;
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, hr(r, t.memoizedState) || (dn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, at.lanes |= i, Ei |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xf(e) {
  var t = Gn(), n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    hr(i, t.memoizedState) || (dn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ox() {
}
function ix(e, t) {
  var n = at, r = Gn(), o = t(), i = !hr(r.memoizedState, o);
  if (i && (r.memoizedState = o, dn = !0), r = r.queue, ly(lx.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Sl(9, ax.bind(null, n, r, o, t), void 0, null), Rt === null) throw Error(B(349));
    Ti & 30 || sx(n, t, o);
  }
  return o;
}
function sx(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ax(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ux(t) && cx(e);
}
function lx(e, t, n) {
  return n(function() {
    ux(t) && cx(e);
  });
}
function ux(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hr(e, n);
  } catch {
    return !0;
  }
}
function cx(e) {
  var t = so(e, 1);
  t !== null && dr(t, e, 1, -1);
}
function hv(e) {
  var t = kr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wl, lastRenderedState: e }, t.queue = e, e = e.dispatch = GC.bind(null, at, e), [t.memoizedState, e];
}
function Sl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = at.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, at.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function dx() {
  return Gn().memoizedState;
}
function sc(e, t, n, r) {
  var o = kr();
  at.flags |= e, o.memoizedState = Sl(1 | t, n, void 0, r === void 0 ? null : r);
}
function Td(e, t, n, r) {
  var o = Gn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_t !== null) {
    var s = _t.memoizedState;
    if (i = s.destroy, r !== null && iy(r, s.deps)) {
      o.memoizedState = Sl(t, n, i, r);
      return;
    }
  }
  at.flags |= e, o.memoizedState = Sl(1 | t, n, i, r);
}
function mv(e, t) {
  return sc(8390656, 8, e, t);
}
function ly(e, t) {
  return Td(2048, 8, e, t);
}
function fx(e, t) {
  return Td(4, 2, e, t);
}
function px(e, t) {
  return Td(4, 4, e, t);
}
function hx(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function mx(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Td(4, 4, hx.bind(null, t, e), n);
}
function uy() {
}
function yx(e, t) {
  var n = Gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iy(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gx(e, t) {
  var n = Gn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && iy(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function vx(e, t, n) {
  return Ti & 21 ? (hr(n, t) || (n = _b(), at.lanes |= n, Ei |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, dn = !0), e.memoizedState = n);
}
function qC(e, t) {
  var n = Be;
  Be = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zf.transition;
  Zf.transition = {};
  try {
    e(!1), t();
  } finally {
    Be = n, Zf.transition = r;
  }
}
function bx() {
  return Gn().memoizedState;
}
function ZC(e, t, n) {
  var r = zo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xx(e)) wx(t, n);
  else if (n = tx(e, t, n, r), n !== null) {
    var o = tn();
    dr(n, e, r, o), Sx(n, t, r);
  }
}
function GC(e, t, n) {
  var r = zo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xx(e)) wx(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, hr(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, ey(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = tx(e, t, o, r), n !== null && (o = tn(), dr(n, e, r, o), Sx(n, t, r));
  }
}
function xx(e) {
  var t = e.alternate;
  return e === at || t !== null && t === at;
}
function wx(e, t) {
  Ya = zc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Sx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zm(e, n);
  }
}
var Bc = { readContext: Zn, useCallback: Lt, useContext: Lt, useEffect: Lt, useImperativeHandle: Lt, useInsertionEffect: Lt, useLayoutEffect: Lt, useMemo: Lt, useReducer: Lt, useRef: Lt, useState: Lt, useDebugValue: Lt, useDeferredValue: Lt, useTransition: Lt, useMutableSource: Lt, useSyncExternalStore: Lt, useId: Lt, unstable_isNewReconciler: !1 }, XC = { readContext: Zn, useCallback: function(e, t) {
  return kr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Zn, useEffect: mv, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sc(
    4194308,
    4,
    hx.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return sc(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return sc(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = kr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = kr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ZC.bind(null, at, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = kr();
  return e = { current: e }, t.memoizedState = e;
}, useState: hv, useDebugValue: uy, useDeferredValue: function(e) {
  return kr().memoizedState = e;
}, useTransition: function() {
  var e = hv(!1), t = e[0];
  return e = qC.bind(null, e[1]), kr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = at, o = kr();
  if (nt) {
    if (n === void 0) throw Error(B(407));
    n = n();
  } else {
    if (n = t(), Rt === null) throw Error(B(349));
    Ti & 30 || sx(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, mv(lx.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Sl(9, ax.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = kr(), t = Rt.identifierPrefix;
  if (nt) {
    var n = to, r = eo;
    n = (r & ~(1 << 32 - cr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = QC++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, YC = {
  readContext: Zn,
  useCallback: yx,
  useContext: Zn,
  useEffect: ly,
  useImperativeHandle: mx,
  useInsertionEffect: fx,
  useLayoutEffect: px,
  useMemo: gx,
  useReducer: Gf,
  useRef: dx,
  useState: function() {
    return Gf(wl);
  },
  useDebugValue: uy,
  useDeferredValue: function(e) {
    var t = Gn();
    return vx(t, _t.memoizedState, e);
  },
  useTransition: function() {
    var e = Gf(wl)[0], t = Gn().memoizedState;
    return [e, t];
  },
  useMutableSource: ox,
  useSyncExternalStore: ix,
  useId: bx,
  unstable_isNewReconciler: !1
}, JC = { readContext: Zn, useCallback: yx, useContext: Zn, useEffect: ly, useImperativeHandle: mx, useInsertionEffect: fx, useLayoutEffect: px, useMemo: gx, useReducer: Xf, useRef: dx, useState: function() {
  return Xf(wl);
}, useDebugValue: uy, useDeferredValue: function(e) {
  var t = Gn();
  return _t === null ? t.memoizedState = e : vx(t, _t.memoizedState, e);
}, useTransition: function() {
  var e = Xf(wl)[0], t = Gn().memoizedState;
  return [e, t];
}, useMutableSource: ox, useSyncExternalStore: ix, useId: bx, unstable_isNewReconciler: !1 };
function rr(e, t) {
  if (e && e.defaultProps) {
    t = lt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eh(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : lt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ed = { isMounted: function(e) {
  return (e = e._reactInternals) ? Bi(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = tn(), o = zo(e), i = no(r, o);
  i.payload = t, n != null && (i.callback = n), t = Fo(e, i, o), t !== null && (dr(t, e, o, r), oc(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = tn(), o = zo(e), i = no(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Fo(e, i, o), t !== null && (dr(t, e, o, r), oc(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = tn(), r = zo(e), o = no(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Fo(e, o, r), t !== null && (dr(t, e, r, n), oc(t, e, r));
} };
function yv(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !hl(n, r) || !hl(o, i) : !0;
}
function _x(e, t, n) {
  var r = !1, o = Wo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Zn(i) : (o = pn(t) ? ki : Ht.current, r = t.contextTypes, i = (r = r != null) ? Us(e, o) : Wo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ed, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function gv(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ed.enqueueReplaceState(t, t.state, null);
}
function th(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ty(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Zn(i) : (i = pn(t) ? ki : Ht.current, o.context = Us(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (eh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ed.enqueueReplaceState(o, o.state, null), Fc(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ks(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ek(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Yf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var eT = typeof WeakMap == "function" ? WeakMap : Map;
function kx(e, t, n) {
  n = no(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Vc || (Vc = !0, fh = r), nh(e, t);
  }, n;
}
function Cx(e, t, n) {
  n = no(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      nh(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    nh(e, t), typeof r != "function" && (Do === null ? Do = /* @__PURE__ */ new Set([this]) : Do.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function vv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eT();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = hT.bind(null, e, t, n), t.then(e, e));
}
function bv(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xv(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = no(-1, 1), t.tag = 2, Fo(n, t, 1))), n.lanes |= 1), e);
}
var tT = ho.ReactCurrentOwner, dn = !1;
function Gt(e, t, n, r) {
  t.child = e === null ? ex(t, null, n, r) : Ws(t, e.child, n, r);
}
function wv(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ws(t, o), r = sy(e, t, n, r, i, o), n = ay(), e !== null && !dn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ao(e, t, o)) : (nt && n && qm(t), t.flags |= 1, Gt(e, t, r, o), t.child);
}
function Sv(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gy(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Tx(e, t, i, r, o)) : (e = cc(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hl, n(s, r) && e.ref === t.ref) return ao(e, t, o);
  }
  return t.flags |= 1, e = Bo(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Tx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hl(i, r) && e.ref === t.ref) if (dn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (dn = !0);
    else return t.lanes = e.lanes, ao(e, t, o);
  }
  return rh(e, t, n, r, o);
}
function Ex(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(ds, Sn), Sn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Xe(ds, Sn), Sn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Xe(ds, Sn), Sn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Xe(ds, Sn), Sn |= r;
  return Gt(e, t, o, n), t.child;
}
function Rx(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function rh(e, t, n, r, o) {
  var i = pn(n) ? ki : Ht.current;
  return i = Us(t, i), ws(t, o), n = sy(e, t, n, r, i, o), r = ay(), e !== null && !dn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ao(e, t, o)) : (nt && r && qm(t), t.flags |= 1, Gt(e, t, n, o), t.child);
}
function _v(e, t, n, r, o) {
  if (pn(n)) {
    var i = !0;
    Ac(t);
  } else i = !1;
  if (ws(t, o), t.stateNode === null) ac(e, t), _x(t, n, r), th(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Zn(u) : (u = pn(n) ? ki : Ht.current, u = Us(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && gv(t, s, r, u), bo = !1;
    var f = t.memoizedState;
    s.state = f, Fc(t, r, s, o), l = t.memoizedState, a !== r || f !== l || fn.current || bo ? (typeof c == "function" && (eh(t, n, c, r), l = t.memoizedState), (a = bo || yv(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, nx(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : rr(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Zn(l) : (l = pn(n) ? ki : Ht.current, l = Us(t, l));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && gv(t, s, r, l), bo = !1, f = t.memoizedState, s.state = f, Fc(t, r, s, o);
    var g = t.memoizedState;
    a !== d || f !== g || fn.current || bo ? (typeof y == "function" && (eh(t, n, y, r), g = t.memoizedState), (u = bo || yv(t, n, u, r, f, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return oh(e, t, n, r, i, o);
}
function oh(e, t, n, r, o, i) {
  Rx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && lv(t, n, !1), ao(e, t, i);
  r = t.stateNode, tT.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ws(t, e.child, null, i), t.child = Ws(t, null, a, i)) : Gt(e, t, a, i), t.memoizedState = r.state, o && lv(t, n, !0), t.child;
}
function Px(e) {
  var t = e.stateNode;
  t.pendingContext ? av(e, t.pendingContext, t.pendingContext !== t.context) : t.context && av(e, t.context, !1), ny(e, t.containerInfo);
}
function kv(e, t, n, r, o) {
  return Vs(), Gm(o), t.flags |= 256, Gt(e, t, n, r), t.child;
}
var ih = { dehydrated: null, treeContext: null, retryLane: 0 };
function sh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ox(e, t, n) {
  var r = t.pendingProps, o = st.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Xe(st, o & 1), e === null)
    return Yp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Od(s, r, 0, null), e = xi(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = sh(n), t.memoizedState = ih, e) : cy(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return nT(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Bo(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Bo(a, i) : (i = xi(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? sh(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ih, r;
  }
  return i = e.child, e = i.sibling, r = Bo(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function cy(e, t) {
  return t = Od({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ju(e, t, n, r) {
  return r !== null && Gm(r), Ws(t, e.child, null, n), e = cy(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function nT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yf(Error(B(422))), ju(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Od({ mode: "visible", children: r.children }, o, 0, null), i = xi(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ws(t, e.child, null, s), t.child.memoizedState = sh(s), t.memoizedState = ih, i);
  if (!(t.mode & 1)) return ju(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(B(419)), r = Yf(i, r, void 0), ju(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, dn || a) {
    if (r = Rt, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, so(e, o), dr(r, e, o, -1));
    }
    return yy(), r = Yf(Error(B(421))), ju(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mT.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, kn = No(o.nextSibling), Cn = t, nt = !0, sr = null, e !== null && (Un[Vn++] = eo, Un[Vn++] = to, Un[Vn++] = Ci, eo = e.id, to = e.overflow, Ci = t), t = cy(t, r.children), t.flags |= 4096, t);
}
function Cv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jp(e.return, t, n);
}
function Jf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Mx(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Gt(e, t, r.children, n), r = st.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cv(e, n, t);
      else if (e.tag === 19) Cv(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (Xe(st, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Dc(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Jf(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Dc(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Jf(t, !0, n, null, i);
      break;
    case "together":
      Jf(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ac(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ao(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ei |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (e = t.child, n = Bo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Bo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function rT(e, t, n) {
  switch (t.tag) {
    case 3:
      Px(t), Vs();
      break;
    case 5:
      rx(t);
      break;
    case 1:
      pn(t.type) && Ac(t);
      break;
    case 4:
      ny(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Xe(Lc, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Xe(st, st.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ox(e, t, n) : (Xe(st, st.current & 1), e = ao(e, t, n), e !== null ? e.sibling : null);
      Xe(st, st.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Mx(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Xe(st, st.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ex(e, t, n);
  }
  return ao(e, t, n);
}
var Ix, ah, Ax, $x;
Ix = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ah = function() {
};
Ax = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ui($r.current);
    var i = null;
    switch (n) {
      case "input":
        o = Pp(e, o), r = Pp(e, r), i = [];
        break;
      case "select":
        o = lt({}, o, { value: void 0 }), r = lt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ip(e, o), r = Ip(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mc);
    }
    $p(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (al.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (al.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ye("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
$x = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ta(e, t) {
  if (!nt) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function oT(e, t, n) {
  var r = t.pendingProps;
  switch (Zm(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Nt(t), null;
    case 1:
      return pn(t.type) && Ic(), Nt(t), null;
    case 3:
      return r = t.stateNode, Hs(), Je(fn), Je(Ht), oy(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Au(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, sr !== null && (mh(sr), sr = null))), ah(e, t), Nt(t), null;
    case 5:
      ry(t);
      var o = ui(bl.current);
      if (n = t.type, e !== null && t.stateNode != null) Ax(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return Nt(t), null;
        }
        if (e = ui($r.current), Au(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Mr] = t, r[gl] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ye("cancel", r), Ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ye("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < za.length; o++) Ye(za[o], r);
              break;
            case "source":
              Ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ye(
                "error",
                r
              ), Ye("load", r);
              break;
            case "details":
              Ye("toggle", r);
              break;
            case "input":
              $g(r, i), Ye("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Ye("invalid", r);
              break;
            case "textarea":
              Lg(r, i), Ye("invalid", r);
          }
          $p(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Iu(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Iu(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : al.hasOwnProperty(s) && a != null && s === "onScroll" && Ye("scroll", r);
          }
          switch (n) {
            case "input":
              ku(r), jg(r, i, !0);
              break;
            case "textarea":
              ku(r), Ng(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Mc);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = lb(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Mr] = t, e[gl] = r, Ix(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = jp(n, r), n) {
              case "dialog":
                Ye("cancel", e), Ye("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ye("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < za.length; o++) Ye(za[o], e);
                o = r;
                break;
              case "source":
                Ye("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ye(
                  "error",
                  e
                ), Ye("load", e), o = r;
                break;
              case "details":
                Ye("toggle", e), o = r;
                break;
              case "input":
                $g(e, r), o = Pp(e, r), Ye("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = lt({}, r, { value: void 0 }), Ye("invalid", e);
                break;
              case "textarea":
                Lg(e, r), o = Ip(e, r), Ye("invalid", e);
                break;
              default:
                o = r;
            }
            $p(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? db(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ub(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ll(e, l) : typeof l == "number" && ll(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (al.hasOwnProperty(i) ? l != null && i === "onScroll" && Ye("scroll", e) : l != null && $m(e, i, l, s));
            }
            switch (n) {
              case "input":
                ku(e), jg(e, r, !1);
                break;
              case "textarea":
                ku(e), Ng(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? gs(e, !!r.multiple, i, !1) : r.defaultValue != null && gs(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Mc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Nt(t), null;
    case 6:
      if (e && t.stateNode != null) $x(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (n = ui(bl.current), ui($r.current), Au(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Mr] = t, (i = r.nodeValue !== n) && (e = Cn, e !== null)) switch (e.tag) {
            case 3:
              Iu(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Iu(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Mr] = t, t.stateNode = r;
      }
      return Nt(t), null;
    case 13:
      if (Je(st), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (nt && kn !== null && t.mode & 1 && !(t.flags & 128)) Yb(), Vs(), t.flags |= 98560, i = !1;
        else if (i = Au(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(B(317));
            i[Mr] = t;
          } else Vs(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Nt(t), i = !1;
        } else sr !== null && (mh(sr), sr = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || st.current & 1 ? Ct === 0 && (Ct = 3) : yy())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
    case 4:
      return Hs(), ah(e, t), e === null && ml(t.stateNode.containerInfo), Nt(t), null;
    case 10:
      return Jm(t.type._context), Nt(t), null;
    case 17:
      return pn(t.type) && Ic(), Nt(t), null;
    case 19:
      if (Je(st), i = t.memoizedState, i === null) return Nt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Ta(i, !1);
      else {
        if (Ct !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Dc(e), s !== null) {
            for (t.flags |= 128, Ta(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Xe(st, st.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && yt() > Qs && (t.flags |= 128, r = !0, Ta(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Dc(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ta(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !nt) return Nt(t), null;
        } else 2 * yt() - i.renderingStartTime > Qs && n !== 1073741824 && (t.flags |= 128, r = !0, Ta(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = yt(), t.sibling = null, n = st.current, Xe(st, r ? n & 1 | 2 : n & 1), t) : (Nt(t), null);
    case 22:
    case 23:
      return my(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Sn & 1073741824 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function iT(e, t) {
  switch (Zm(t), t.tag) {
    case 1:
      return pn(t.type) && Ic(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Hs(), Je(fn), Je(Ht), oy(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ry(t), null;
    case 13:
      if (Je(st), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(B(340));
        Vs();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Je(st), null;
    case 4:
      return Hs(), null;
    case 10:
      return Jm(t.type._context), null;
    case 22:
    case 23:
      return my(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lu = !1, zt = !1, sT = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function cs(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    mt(e, t, r);
  }
  else n.current = null;
}
function lh(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var Tv = !1;
function aT(e, t) {
  if (Hp = Rc, e = Db(), Qm(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (y = d.firstChild) !== null; )
            f = d, d = y;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === o && (a = s), f === i && ++c === r && (l = s), (y = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = y;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Kp = { focusedElem: e, selectionRange: n }, Rc = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
  else for (; Z !== null; ) {
    t = Z;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var v = g.memoizedProps, x = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : rr(t.type, v), x);
            m.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(B(163));
      }
    } catch (b) {
      mt(t, t.return, b);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Z = e;
      break;
    }
    Z = t.return;
  }
  return g = Tv, Tv = !1, g;
}
function Ja(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && lh(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Rd(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function jx(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, jx(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Mr], delete t[gl], delete t[Zp], delete t[VC], delete t[WC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ev(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lx(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ch(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mc));
  else if (r !== 4 && (e = e.child, e !== null)) for (ch(e, t, n), e = e.sibling; e !== null; ) ch(e, t, n), e = e.sibling;
}
function dh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (dh(e, t, n), e = e.sibling; e !== null; ) dh(e, t, n), e = e.sibling;
}
var It = null, ir = !1;
function mo(e, t, n) {
  for (n = n.child; n !== null; ) Nx(e, t, n), n = n.sibling;
}
function Nx(e, t, n) {
  if (Ar && typeof Ar.onCommitFiberUnmount == "function") try {
    Ar.onCommitFiberUnmount(xd, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      zt || cs(n, t);
    case 6:
      var r = It, o = ir;
      It = null, mo(e, t, n), It = r, ir = o, It !== null && (ir ? (e = It, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : It.removeChild(n.stateNode));
      break;
    case 18:
      It !== null && (ir ? (e = It, n = n.stateNode, e.nodeType === 8 ? Kf(e.parentNode, n) : e.nodeType === 1 && Kf(e, n), fl(e)) : Kf(It, n.stateNode));
      break;
    case 4:
      r = It, o = ir, It = n.stateNode.containerInfo, ir = !0, mo(e, t, n), It = r, ir = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!zt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && lh(n, t, s), o = o.next;
        } while (o !== r);
      }
      mo(e, t, n);
      break;
    case 1:
      if (!zt && (cs(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        mt(n, t, a);
      }
      mo(e, t, n);
      break;
    case 21:
      mo(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (zt = (r = zt) || n.memoizedState !== null, mo(e, t, n), zt = r) : mo(e, t, n);
      break;
    default:
      mo(e, t, n);
  }
}
function Rv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sT()), t.forEach(function(r) {
      var o = yT.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function nr(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            It = a.stateNode, ir = !1;
            break e;
          case 3:
            It = a.stateNode.containerInfo, ir = !0;
            break e;
          case 4:
            It = a.stateNode.containerInfo, ir = !0;
            break e;
        }
        a = a.return;
      }
      if (It === null) throw Error(B(160));
      Nx(i, s, o), It = null, ir = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      mt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fx(t, e), t = t.sibling;
}
function Fx(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (nr(t, e), xr(e), r & 4) {
        try {
          Ja(3, e, e.return), Rd(3, e);
        } catch (v) {
          mt(e, e.return, v);
        }
        try {
          Ja(5, e, e.return);
        } catch (v) {
          mt(e, e.return, v);
        }
      }
      break;
    case 1:
      nr(t, e), xr(e), r & 512 && n !== null && cs(n, n.return);
      break;
    case 5:
      if (nr(t, e), xr(e), r & 512 && n !== null && cs(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ll(o, "");
        } catch (v) {
          mt(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && sb(o, i), jp(a, s);
          var u = jp(a, i);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], d = l[s + 1];
            c === "style" ? db(o, d) : c === "dangerouslySetInnerHTML" ? ub(o, d) : c === "children" ? ll(o, d) : $m(o, c, d, u);
          }
          switch (a) {
            case "input":
              Op(o, i);
              break;
            case "textarea":
              ab(o, i);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? gs(o, !!i.multiple, y, !1) : f !== !!i.multiple && (i.defaultValue != null ? gs(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : gs(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[gl] = i;
        } catch (v) {
          mt(e, e.return, v);
        }
      }
      break;
    case 6:
      if (nr(t, e), xr(e), r & 4) {
        if (e.stateNode === null) throw Error(B(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (v) {
          mt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (nr(t, e), xr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        fl(t.containerInfo);
      } catch (v) {
        mt(e, e.return, v);
      }
      break;
    case 4:
      nr(t, e), xr(e);
      break;
    case 13:
      nr(t, e), xr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (py = yt())), r & 4 && Rv(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (zt = (u = zt) || c, nr(t, e), zt = u) : nr(t, e), xr(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (Z = e, c = e.child; c !== null; ) {
          for (d = Z = c; Z !== null; ) {
            switch (f = Z, y = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ja(4, f, f.return);
                break;
              case 1:
                cs(f, f.return);
                var g = f.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (v) {
                    mt(r, n, v);
                  }
                }
                break;
              case 5:
                cs(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Ov(d);
                  continue;
                }
            }
            y !== null ? (y.return = f, Z = y) : Ov(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = cb("display", s));
              } catch (v) {
                mt(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (v) {
              mt(e, e.return, v);
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return;
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
        }
      }
      break;
    case 19:
      nr(t, e), xr(e), r & 4 && Rv(e);
      break;
    case 21:
      break;
    default:
      nr(
        t,
        e
      ), xr(e);
  }
}
function xr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ll(o, ""), r.flags &= -33);
          var i = Ev(e);
          dh(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Ev(e);
          ch(e, a, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (l) {
      mt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lT(e, t, n) {
  Z = e, Dx(e);
}
function Dx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Lu;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || zt;
        a = Lu;
        var u = zt;
        if (Lu = s, (zt = l) && !u) for (Z = o; Z !== null; ) s = Z, l = s.child, s.tag === 22 && s.memoizedState !== null ? Mv(o) : l !== null ? (l.return = s, Z = l) : Mv(o);
        for (; i !== null; ) Z = i, Dx(i), i = i.sibling;
        Z = o, Lu = a, zt = u;
      }
      Pv(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, Z = i) : Pv(e);
  }
}
function Pv(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            zt || Rd(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !zt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : rr(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && pv(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              pv(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && fl(d);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(B(163));
        }
        zt || t.flags & 512 && uh(t);
      } catch (f) {
        mt(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Ov(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Z = n;
      break;
    }
    Z = t.return;
  }
}
function Mv(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rd(4, t);
          } catch (l) {
            mt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              mt(t, o, l);
            }
          }
          var i = t.return;
          try {
            uh(t);
          } catch (l) {
            mt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            uh(t);
          } catch (l) {
            mt(t, s, l);
          }
      }
    } catch (l) {
      mt(t, t.return, l);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, Z = a;
      break;
    }
    Z = t.return;
  }
}
var uT = Math.ceil, Uc = ho.ReactCurrentDispatcher, dy = ho.ReactCurrentOwner, Kn = ho.ReactCurrentBatchConfig, Me = 0, Rt = null, bt = null, $t = 0, Sn = 0, ds = Yo(0), Ct = 0, _l = null, Ei = 0, Pd = 0, fy = 0, el = null, cn = null, py = 0, Qs = 1 / 0, Gr = null, Vc = !1, fh = null, Do = null, Nu = !1, Ao = null, Wc = 0, tl = 0, ph = null, lc = -1, uc = 0;
function tn() {
  return Me & 6 ? yt() : lc !== -1 ? lc : lc = yt();
}
function zo(e) {
  return e.mode & 1 ? Me & 2 && $t !== 0 ? $t & -$t : KC.transition !== null ? (uc === 0 && (uc = _b()), uc) : (e = Be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ob(e.type)), e) : 1;
}
function dr(e, t, n, r) {
  if (50 < tl) throw tl = 0, ph = null, Error(B(185));
  Jl(e, n, r), (!(Me & 2) || e !== Rt) && (e === Rt && (!(Me & 2) && (Pd |= n), Ct === 4 && wo(e, $t)), hn(e, r), n === 1 && Me === 0 && !(t.mode & 1) && (Qs = yt() + 500, Cd && Jo()));
}
function hn(e, t) {
  var n = e.callbackNode;
  Kk(e, t);
  var r = Ec(e, e === Rt ? $t : 0);
  if (r === 0) n !== null && zg(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zg(n), t === 1) e.tag === 0 ? HC(Iv.bind(null, e)) : Zb(Iv.bind(null, e)), BC(function() {
      !(Me & 6) && Jo();
    }), n = null;
    else {
      switch (kb(r)) {
        case 1:
          n = Dm;
          break;
        case 4:
          n = wb;
          break;
        case 16:
          n = Tc;
          break;
        case 536870912:
          n = Sb;
          break;
        default:
          n = Tc;
      }
      n = Qx(n, zx.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function zx(e, t) {
  if (lc = -1, uc = 0, Me & 6) throw Error(B(327));
  var n = e.callbackNode;
  if (Ss() && e.callbackNode !== n) return null;
  var r = Ec(e, e === Rt ? $t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Hc(e, r);
  else {
    t = r;
    var o = Me;
    Me |= 2;
    var i = Ux();
    (Rt !== e || $t !== t) && (Gr = null, Qs = yt() + 500, bi(e, t));
    do
      try {
        fT();
        break;
      } catch (a) {
        Bx(e, a);
      }
    while (!0);
    Ym(), Uc.current = i, Me = o, bt !== null ? t = 0 : (Rt = null, $t = 0, t = Ct);
  }
  if (t !== 0) {
    if (t === 2 && (o = zp(e), o !== 0 && (r = o, t = hh(e, o))), t === 1) throw n = _l, bi(e, 0), wo(e, r), hn(e, yt()), n;
    if (t === 6) wo(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !cT(o) && (t = Hc(e, r), t === 2 && (i = zp(e), i !== 0 && (r = i, t = hh(e, i))), t === 1)) throw n = _l, bi(e, 0), wo(e, r), hn(e, yt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          ri(e, cn, Gr);
          break;
        case 3:
          if (wo(e, r), (r & 130023424) === r && (t = py + 500 - yt(), 10 < t)) {
            if (Ec(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              tn(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = qp(ri.bind(null, e, cn, Gr), t);
            break;
          }
          ri(e, cn, Gr);
          break;
        case 4:
          if (wo(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - cr(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = yt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uT(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = qp(ri.bind(null, e, cn, Gr), r);
            break;
          }
          ri(e, cn, Gr);
          break;
        case 5:
          ri(e, cn, Gr);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return hn(e, yt()), e.callbackNode === n ? zx.bind(null, e) : null;
}
function hh(e, t) {
  var n = el;
  return e.current.memoizedState.isDehydrated && (bi(e, t).flags |= 256), e = Hc(e, t), e !== 2 && (t = cn, cn = n, t !== null && mh(t)), e;
}
function mh(e) {
  cn === null ? cn = e : cn.push.apply(cn, e);
}
function cT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!hr(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function wo(e, t) {
  for (t &= ~fy, t &= ~Pd, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - cr(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Iv(e) {
  if (Me & 6) throw Error(B(327));
  Ss();
  var t = Ec(e, 0);
  if (!(t & 1)) return hn(e, yt()), null;
  var n = Hc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zp(e);
    r !== 0 && (t = r, n = hh(e, r));
  }
  if (n === 1) throw n = _l, bi(e, 0), wo(e, t), hn(e, yt()), n;
  if (n === 6) throw Error(B(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ri(e, cn, Gr), hn(e, yt()), null;
}
function hy(e, t) {
  var n = Me;
  Me |= 1;
  try {
    return e(t);
  } finally {
    Me = n, Me === 0 && (Qs = yt() + 500, Cd && Jo());
  }
}
function Ri(e) {
  Ao !== null && Ao.tag === 0 && !(Me & 6) && Ss();
  var t = Me;
  Me |= 1;
  var n = Kn.transition, r = Be;
  try {
    if (Kn.transition = null, Be = 1, e) return e();
  } finally {
    Be = r, Kn.transition = n, Me = t, !(Me & 6) && Jo();
  }
}
function my() {
  Sn = ds.current, Je(ds);
}
function bi(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zC(n)), bt !== null) for (n = bt.return; n !== null; ) {
    var r = n;
    switch (Zm(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ic();
        break;
      case 3:
        Hs(), Je(fn), Je(Ht), oy();
        break;
      case 5:
        ry(r);
        break;
      case 4:
        Hs();
        break;
      case 13:
        Je(st);
        break;
      case 19:
        Je(st);
        break;
      case 10:
        Jm(r.type._context);
        break;
      case 22:
      case 23:
        my();
    }
    n = n.return;
  }
  if (Rt = e, bt = e = Bo(e.current, null), $t = Sn = t, Ct = 0, _l = null, fy = Pd = Ei = 0, cn = el = null, li !== null) {
    for (t = 0; t < li.length; t++) if (n = li[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    li = null;
  }
  return e;
}
function Bx(e, t) {
  do {
    var n = bt;
    try {
      if (Ym(), ic.current = Bc, zc) {
        for (var r = at.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        zc = !1;
      }
      if (Ti = 0, Et = _t = at = null, Ya = !1, xl = 0, dy.current = null, n === null || n.return === null) {
        Ct = 1, _l = t, bt = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = $t, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = bv(s);
          if (y !== null) {
            y.flags &= -257, xv(y, s, a, i, t), y.mode & 1 && vv(i, u, t), t = y, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              vv(i, u, t), yy();
              break e;
            }
            l = Error(B(426));
          }
        } else if (nt && a.mode & 1) {
          var x = bv(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), xv(x, s, a, i, t), Gm(Ks(l, a));
            break e;
          }
        }
        i = l = Ks(l, a), Ct !== 4 && (Ct = 2), el === null ? el = [i] : el.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = kx(i, l, t);
              fv(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Do === null || !Do.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var b = Cx(i, a, t);
                fv(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Wx(n);
    } catch (k) {
      t = k, bt === n && n !== null && (bt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ux() {
  var e = Uc.current;
  return Uc.current = Bc, e === null ? Bc : e;
}
function yy() {
  (Ct === 0 || Ct === 3 || Ct === 2) && (Ct = 4), Rt === null || !(Ei & 268435455) && !(Pd & 268435455) || wo(Rt, $t);
}
function Hc(e, t) {
  var n = Me;
  Me |= 2;
  var r = Ux();
  (Rt !== e || $t !== t) && (Gr = null, bi(e, t));
  do
    try {
      dT();
      break;
    } catch (o) {
      Bx(e, o);
    }
  while (!0);
  if (Ym(), Me = n, Uc.current = r, bt !== null) throw Error(B(261));
  return Rt = null, $t = 0, Ct;
}
function dT() {
  for (; bt !== null; ) Vx(bt);
}
function fT() {
  for (; bt !== null && !Nk(); ) Vx(bt);
}
function Vx(e) {
  var t = Kx(e.alternate, e, Sn);
  e.memoizedProps = e.pendingProps, t === null ? Wx(e) : bt = t, dy.current = null;
}
function Wx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = iT(n, t), n !== null) {
        n.flags &= 32767, bt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ct = 6, bt = null;
        return;
      }
    } else if (n = oT(n, t, Sn), n !== null) {
      bt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      bt = t;
      return;
    }
    bt = t = e;
  } while (t !== null);
  Ct === 0 && (Ct = 5);
}
function ri(e, t, n) {
  var r = Be, o = Kn.transition;
  try {
    Kn.transition = null, Be = 1, pT(e, t, n, r);
  } finally {
    Kn.transition = o, Be = r;
  }
  return null;
}
function pT(e, t, n, r) {
  do
    Ss();
  while (Ao !== null);
  if (Me & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(B(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Qk(e, i), e === Rt && (bt = Rt = null, $t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nu || (Nu = !0, Qx(Tc, function() {
    return Ss(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Kn.transition, Kn.transition = null;
    var s = Be;
    Be = 1;
    var a = Me;
    Me |= 4, dy.current = null, aT(e, n), Fx(n, e), AC(Kp), Rc = !!Hp, Kp = Hp = null, e.current = n, lT(n), Fk(), Me = a, Be = s, Kn.transition = i;
  } else e.current = n;
  if (Nu && (Nu = !1, Ao = e, Wc = o), i = e.pendingLanes, i === 0 && (Do = null), Bk(n.stateNode), hn(e, yt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vc) throw Vc = !1, e = fh, fh = null, e;
  return Wc & 1 && e.tag !== 0 && Ss(), i = e.pendingLanes, i & 1 ? e === ph ? tl++ : (tl = 0, ph = e) : tl = 0, Jo(), null;
}
function Ss() {
  if (Ao !== null) {
    var e = kb(Wc), t = Kn.transition, n = Be;
    try {
      if (Kn.transition = null, Be = 16 > e ? 16 : e, Ao === null) var r = !1;
      else {
        if (e = Ao, Ao = null, Wc = 0, Me & 6) throw Error(B(331));
        var o = Me;
        for (Me |= 4, Z = e.current; Z !== null; ) {
          var i = Z, s = i.child;
          if (Z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ja(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, Z = d;
                  else for (; Z !== null; ) {
                    c = Z;
                    var f = c.sibling, y = c.return;
                    if (jx(c), c === u) {
                      Z = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = y, Z = f;
                      break;
                    }
                    Z = y;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    v.sibling = null, v = x;
                  } while (v !== null);
                }
              }
              Z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, Z = s;
          else e: for (; Z !== null; ) {
            if (i = Z, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ja(9, i, i.return);
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, Z = m;
              break e;
            }
            Z = i.return;
          }
        }
        var h = e.current;
        for (Z = h; Z !== null; ) {
          s = Z;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, Z = p;
          else e: for (s = h; Z !== null; ) {
            if (a = Z, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Rd(9, a);
              }
            } catch (k) {
              mt(a, a.return, k);
            }
            if (a === s) {
              Z = null;
              break e;
            }
            var b = a.sibling;
            if (b !== null) {
              b.return = a.return, Z = b;
              break e;
            }
            Z = a.return;
          }
        }
        if (Me = o, Jo(), Ar && typeof Ar.onPostCommitFiberRoot == "function") try {
          Ar.onPostCommitFiberRoot(xd, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Be = n, Kn.transition = t;
    }
  }
  return !1;
}
function Av(e, t, n) {
  t = Ks(n, t), t = kx(e, t, 1), e = Fo(e, t, 1), t = tn(), e !== null && (Jl(e, 1, t), hn(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) Av(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Av(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Do === null || !Do.has(r))) {
        e = Ks(n, e), e = Cx(t, e, 1), t = Fo(t, e, 1), e = tn(), t !== null && (Jl(t, 1, e), hn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function hT(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = tn(), e.pingedLanes |= e.suspendedLanes & n, Rt === e && ($t & n) === n && (Ct === 4 || Ct === 3 && ($t & 130023424) === $t && 500 > yt() - py ? bi(e, 0) : fy |= n), hn(e, t);
}
function Hx(e, t) {
  t === 0 && (e.mode & 1 ? (t = Eu, Eu <<= 1, !(Eu & 130023424) && (Eu = 4194304)) : t = 1);
  var n = tn();
  e = so(e, t), e !== null && (Jl(e, t, n), hn(e, n));
}
function mT(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Hx(e, n);
}
function yT(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  r !== null && r.delete(t), Hx(e, n);
}
var Kx;
Kx = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || fn.current) dn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return dn = !1, rT(e, t, n);
    dn = !!(e.flags & 131072);
  }
  else dn = !1, nt && t.flags & 1048576 && Gb(t, jc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ac(e, t), e = t.pendingProps;
      var o = Us(t, Ht.current);
      ws(t, n), o = sy(null, t, r, e, o, n);
      var i = ay();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pn(r) ? (i = !0, Ac(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ty(t), o.updater = Ed, t.stateNode = o, o._reactInternals = t, th(t, r, e, n), t = oh(null, t, r, !0, i, n)) : (t.tag = 0, nt && i && qm(t), Gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ac(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = vT(r), e = rr(r, e), o) {
          case 0:
            t = rh(null, t, r, e, n);
            break e;
          case 1:
            t = _v(null, t, r, e, n);
            break e;
          case 11:
            t = wv(null, t, r, e, n);
            break e;
          case 14:
            t = Sv(null, t, r, rr(r.type, e), n);
            break e;
        }
        throw Error(B(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rr(r, o), rh(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rr(r, o), _v(e, t, r, o, n);
    case 3:
      e: {
        if (Px(t), e === null) throw Error(B(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, nx(e, t), Fc(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ks(Error(B(423)), t), t = kv(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ks(Error(B(424)), t), t = kv(e, t, r, n, o);
          break e;
        } else for (kn = No(t.stateNode.containerInfo.firstChild), Cn = t, nt = !0, sr = null, n = ex(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Vs(), r === o) {
            t = ao(e, t, n);
            break e;
          }
          Gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return rx(t), e === null && Yp(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Qp(r, o) ? s = null : i !== null && Qp(r, i) && (t.flags |= 32), Rx(e, t), Gt(e, t, s, n), t.child;
    case 6:
      return e === null && Yp(t), null;
    case 13:
      return Ox(e, t, n);
    case 4:
      return ny(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ws(t, null, r, n) : Gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rr(r, o), wv(e, t, r, o, n);
    case 7:
      return Gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Xe(Lc, r._currentValue), r._currentValue = s, i !== null) if (hr(i.value, s)) {
          if (i.children === o.children && !fn.current) {
            t = ao(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = no(-1, n & -n), l.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), Jp(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(B(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Jp(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Gt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ws(t, n), o = Zn(o), r = r(o), t.flags |= 1, Gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = rr(r, t.pendingProps), o = rr(r.type, o), Sv(e, t, r, o, n);
    case 15:
      return Tx(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : rr(r, o), ac(e, t), t.tag = 1, pn(r) ? (e = !0, Ac(t)) : e = !1, ws(t, n), _x(t, r, o), th(t, r, o, n), oh(null, t, r, !0, e, n);
    case 19:
      return Mx(e, t, n);
    case 22:
      return Ex(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Qx(e, t) {
  return xb(e, t);
}
function gT(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Hn(e, t, n, r) {
  return new gT(e, t, n, r);
}
function gy(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vT(e) {
  if (typeof e == "function") return gy(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Lm) return 11;
    if (e === Nm) return 14;
  }
  return 2;
}
function Bo(e, t) {
  var n = e.alternate;
  return n === null ? (n = Hn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function cc(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") gy(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ts:
      return xi(n.children, o, i, t);
    case jm:
      s = 8, o |= 8;
      break;
    case Cp:
      return e = Hn(12, n, t, o | 2), e.elementType = Cp, e.lanes = i, e;
    case Tp:
      return e = Hn(13, n, t, o), e.elementType = Tp, e.lanes = i, e;
    case Ep:
      return e = Hn(19, n, t, o), e.elementType = Ep, e.lanes = i, e;
    case rb:
      return Od(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case tb:
          s = 10;
          break e;
        case nb:
          s = 9;
          break e;
        case Lm:
          s = 11;
          break e;
        case Nm:
          s = 14;
          break e;
        case vo:
          s = 16, r = null;
          break e;
      }
      throw Error(B(130, e == null ? e : typeof e, ""));
  }
  return t = Hn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function xi(e, t, n, r) {
  return e = Hn(7, e, r, t), e.lanes = n, e;
}
function Od(e, t, n, r) {
  return e = Hn(22, e, r, t), e.elementType = rb, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ep(e, t, n) {
  return e = Hn(6, e, null, t), e.lanes = n, e;
}
function tp(e, t, n) {
  return t = Hn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function bT(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jf(0), this.expirationTimes = jf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function vy(e, t, n, r, o, i, s, a, l) {
  return e = new bT(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Hn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ty(i), e;
}
function xT(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: es, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function qx(e) {
  if (!e) return Wo;
  e = e._reactInternals;
  e: {
    if (Bi(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pn(n)) return qb(e, n, t);
  }
  return t;
}
function Zx(e, t, n, r, o, i, s, a, l) {
  return e = vy(n, r, !0, e, o, i, s, a, l), e.context = qx(null), n = e.current, r = tn(), o = zo(n), i = no(r, o), i.callback = t ?? null, Fo(n, i, o), e.current.lanes = o, Jl(e, o, r), hn(e, r), e;
}
function Md(e, t, n, r) {
  var o = t.current, i = tn(), s = zo(o);
  return n = qx(n), t.context === null ? t.context = n : t.pendingContext = n, t = no(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Fo(o, t, s), e !== null && (dr(e, o, s, i), oc(e, o, s)), s;
}
function Kc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $v(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function by(e, t) {
  $v(e, t), (e = e.alternate) && $v(e, t);
}
var Gx = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xy(e) {
  this._internalRoot = e;
}
Id.prototype.render = xy.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Md(e, t, null, null);
};
Id.prototype.unmount = xy.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ri(function() {
      Md(null, e, null, null);
    }), t[io] = null;
  }
};
function Id(e) {
  this._internalRoot = e;
}
Id.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Eb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xo.length && t !== 0 && t < xo[n].priority; n++) ;
    xo.splice(n, 0, e), n === 0 && Pb(e);
  }
};
function wy(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ad(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function jv() {
}
function wT(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Kc(s);
        i.call(u);
      };
    }
    var s = Zx(t, r, e, 0, null, !1, !1, "", jv);
    return e._reactRootContainer = s, e[io] = s.current, ml(e.nodeType === 8 ? e.parentNode : e), Ri(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Kc(l);
      a.call(u);
    };
  }
  var l = vy(e, 0, !1, null, null, !1, !1, "", jv);
  return e._reactRootContainer = l, e[io] = l.current, ml(e.nodeType === 8 ? e.parentNode : e), Ri(function() {
    Md(t, l, n, r);
  }), l;
}
function $d(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Kc(s);
        a.call(l);
      };
    }
    Md(t, s, e, o);
  } else s = wT(n, t, e, o, r);
  return Kc(s);
}
Cb = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Da(t.pendingLanes);
        n !== 0 && (zm(t, n | 1), hn(t, yt()), !(Me & 6) && (Qs = yt() + 500, Jo()));
      }
      break;
    case 13:
      Ri(function() {
        var r = so(e, 1);
        if (r !== null) {
          var o = tn();
          dr(r, e, 1, o);
        }
      }), by(e, 1);
  }
};
Bm = function(e) {
  if (e.tag === 13) {
    var t = so(e, 134217728);
    if (t !== null) {
      var n = tn();
      dr(t, e, 134217728, n);
    }
    by(e, 134217728);
  }
};
Tb = function(e) {
  if (e.tag === 13) {
    var t = zo(e), n = so(e, t);
    if (n !== null) {
      var r = tn();
      dr(n, e, t, r);
    }
    by(e, t);
  }
};
Eb = function() {
  return Be;
};
Rb = function(e, t) {
  var n = Be;
  try {
    return Be = e, t();
  } finally {
    Be = n;
  }
};
Np = function(e, t, n) {
  switch (t) {
    case "input":
      if (Op(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = kd(r);
            if (!o) throw Error(B(90));
            ib(r), Op(r, o);
          }
        }
      }
      break;
    case "textarea":
      ab(e, n);
      break;
    case "select":
      t = n.value, t != null && gs(e, !!n.multiple, t, !1);
  }
};
hb = hy;
mb = Ri;
var ST = { usingClientEntryPoint: !1, Events: [tu, is, kd, fb, pb, hy] }, Ea = { findFiberByHostInstance: ai, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _T = { bundleType: Ea.bundleType, version: Ea.version, rendererPackageName: Ea.rendererPackageName, rendererConfig: Ea.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ho.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = vb(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ea.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fu.isDisabled && Fu.supportsFiber) try {
    xd = Fu.inject(_T), Ar = Fu;
  } catch {
  }
}
$n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ST;
$n.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wy(t)) throw Error(B(200));
  return xT(e, t, null, n);
};
$n.createRoot = function(e, t) {
  if (!wy(e)) throw Error(B(299));
  var n = !1, r = "", o = Gx;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = vy(e, 1, !1, null, null, n, !1, r, o), e[io] = t.current, ml(e.nodeType === 8 ? e.parentNode : e), new xy(t);
};
$n.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(B(188)) : (e = Object.keys(e).join(","), Error(B(268, e)));
  return e = vb(t), e = e === null ? null : e.stateNode, e;
};
$n.flushSync = function(e) {
  return Ri(e);
};
$n.hydrate = function(e, t, n) {
  if (!Ad(t)) throw Error(B(200));
  return $d(null, e, t, !0, n);
};
$n.hydrateRoot = function(e, t, n) {
  if (!wy(e)) throw Error(B(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = Gx;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zx(t, null, e, 1, n ?? null, o, !1, i, s), e[io] = t.current, ml(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Id(t);
};
$n.render = function(e, t, n) {
  if (!Ad(t)) throw Error(B(200));
  return $d(null, e, t, !1, n);
};
$n.unmountComponentAtNode = function(e) {
  if (!Ad(e)) throw Error(B(40));
  return e._reactRootContainer ? (Ri(function() {
    $d(null, null, e, !1, function() {
      e._reactRootContainer = null, e[io] = null;
    });
  }), !0) : !1;
};
$n.unstable_batchedUpdates = hy;
$n.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ad(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return $d(e, t, n, !1, r);
};
$n.version = "18.3.1-next-f1338f8080-20240426";
function Xx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx);
    } catch (e) {
      console.error(e);
    }
}
Xx(), X1.exports = $n;
var Sy = X1.exports;
const Du = /* @__PURE__ */ D1(Sy);
var _y, Lv = Sy;
_y = Lv.createRoot, Lv.hydrateRoot;
const kl = {
  black: "#000",
  white: "#fff"
}, Wi = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Hi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ki = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Qi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, qi = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ra = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, kT = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function lo(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const fr = "$$material";
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qc.apply(null, arguments);
}
var CT = !1;
function TT(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ET(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var RT = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !CT : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ET(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = TT(o);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ft = "-ms-", qc = "-moz-", $e = "-webkit-", Yx = "comm", ky = "rule", Cy = "decl", PT = "@import", Jx = "@keyframes", OT = "@layer", MT = Math.abs, jd = String.fromCharCode, IT = Object.assign;
function AT(e, t) {
  return At(e, 0) ^ 45 ? (((t << 2 ^ At(e, 0)) << 2 ^ At(e, 1)) << 2 ^ At(e, 2)) << 2 ^ At(e, 3) : 0;
}
function ew(e) {
  return e.trim();
}
function $T(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, n) {
  return e.replace(t, n);
}
function yh(e, t) {
  return e.indexOf(t);
}
function At(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cl(e, t, n) {
  return e.slice(t, n);
}
function Pr(e) {
  return e.length;
}
function Ty(e) {
  return e.length;
}
function zu(e, t) {
  return t.push(e), e;
}
function jT(e, t) {
  return e.map(t).join("");
}
var Ld = 1, qs = 1, tw = 0, vn = 0, vt = 0, fa = "";
function Nd(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Ld, column: qs, length: s, return: "" };
}
function Pa(e, t) {
  return IT(Nd("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function LT() {
  return vt;
}
function NT() {
  return vt = vn > 0 ? At(fa, --vn) : 0, qs--, vt === 10 && (qs = 1, Ld--), vt;
}
function Tn() {
  return vt = vn < tw ? At(fa, vn++) : 0, qs++, vt === 10 && (qs = 1, Ld++), vt;
}
function jr() {
  return At(fa, vn);
}
function dc() {
  return vn;
}
function ru(e, t) {
  return Cl(fa, e, t);
}
function Tl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nw(e) {
  return Ld = qs = 1, tw = Pr(fa = e), vn = 0, [];
}
function rw(e) {
  return fa = "", e;
}
function fc(e) {
  return ew(ru(vn - 1, gh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function FT(e) {
  for (; (vt = jr()) && vt < 33; )
    Tn();
  return Tl(e) > 2 || Tl(vt) > 3 ? "" : " ";
}
function DT(e, t) {
  for (; --t && Tn() && !(vt < 48 || vt > 102 || vt > 57 && vt < 65 || vt > 70 && vt < 97); )
    ;
  return ru(e, dc() + (t < 6 && jr() == 32 && Tn() == 32));
}
function gh(e) {
  for (; Tn(); )
    switch (vt) {
      case e:
        return vn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gh(vt);
        break;
      case 40:
        e === 41 && gh(e);
        break;
      case 92:
        Tn();
        break;
    }
  return vn;
}
function zT(e, t) {
  for (; Tn() && e + vt !== 57; )
    if (e + vt === 84 && jr() === 47)
      break;
  return "/*" + ru(t, vn - 1) + "*" + jd(e === 47 ? e : Tn());
}
function BT(e) {
  for (; !Tl(jr()); )
    Tn();
  return ru(e, vn);
}
function UT(e) {
  return rw(pc("", null, null, null, [""], e = nw(e), 0, [0], e));
}
function pc(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, d = s, f = 0, y = 0, g = 0, v = 1, x = 1, m = 1, h = 0, p = "", b = o, k = i, C = r, T = p; x; )
    switch (g = h, h = Tn()) {
      case 40:
        if (g != 108 && At(T, d - 1) == 58) {
          yh(T += je(fc(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += fc(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += FT(g);
        break;
      case 92:
        T += DT(dc() - 1, 7);
        continue;
      case 47:
        switch (jr()) {
          case 42:
          case 47:
            zu(VT(zT(Tn(), dc()), t, n), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        a[u++] = Pr(T) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (T = je(T, /\f/g, "")), y > 0 && Pr(T) - d && zu(y > 32 ? Fv(T + ";", r, n, d - 1) : Fv(je(T, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (zu(C = Nv(T, t, n, u, c, o, a, p, b = [], k = [], d), i), h === 123)
              if (c === 0)
                pc(T, t, C, C, b, i, d, a, k);
              else
                switch (f === 99 && At(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pc(e, C, C, r && zu(Nv(e, C, C, 0, 0, o, a, p, o, b = [], d), k), o, k, d, a, r ? b : k);
                    break;
                  default:
                    pc(T, C, C, C, [""], k, 0, a, k);
                }
        }
        u = c = y = 0, v = m = 1, p = T = "", d = s;
        break;
      case 58:
        d = 1 + Pr(T), y = g;
      default:
        if (v < 1) {
          if (h == 123)
            --v;
          else if (h == 125 && v++ == 0 && NT() == 125)
            continue;
        }
        switch (T += jd(h), h * v) {
          case 38:
            m = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            a[u++] = (Pr(T) - 1) * m, m = 1;
            break;
          case 64:
            jr() === 45 && (T += fc(Tn())), f = jr(), c = d = Pr(p = T += BT(dc())), h++;
            break;
          case 45:
            g === 45 && Pr(T) == 2 && (v = 0);
        }
    }
  return i;
}
function Nv(e, t, n, r, o, i, s, a, l, u, c) {
  for (var d = o - 1, f = o === 0 ? i : [""], y = Ty(f), g = 0, v = 0, x = 0; g < r; ++g)
    for (var m = 0, h = Cl(e, d + 1, d = MT(v = s[g])), p = e; m < y; ++m)
      (p = ew(v > 0 ? f[m] + " " + h : je(h, /&\f/g, f[m]))) && (l[x++] = p);
  return Nd(e, t, n, o === 0 ? ky : a, l, u, c);
}
function VT(e, t, n) {
  return Nd(e, t, n, Yx, jd(LT()), Cl(e, 2, -2), 0);
}
function Fv(e, t, n, r) {
  return Nd(e, t, n, Cy, Cl(e, 0, r), Cl(e, r + 1, -1), r);
}
function _s(e, t) {
  for (var n = "", r = Ty(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function WT(e, t, n, r) {
  switch (e.type) {
    case OT:
      if (e.children.length) break;
    case PT:
    case Cy:
      return e.return = e.return || e.value;
    case Yx:
      return "";
    case Jx:
      return e.return = e.value + "{" + _s(e.children, r) + "}";
    case ky:
      e.value = e.props.join(",");
  }
  return Pr(n = _s(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function HT(e) {
  var t = Ty(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function KT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ow(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var QT = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = jr(), o === 38 && i === 12 && (n[r] = 1), !Tl(i); )
    Tn();
  return ru(t, vn);
}, qT = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Tl(o)) {
      case 0:
        o === 38 && jr() === 12 && (n[r] = 1), t[r] += QT(vn - 1, n, r);
        break;
      case 2:
        t[r] += fc(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = jr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += jd(o);
    }
  while (o = Tn());
  return t;
}, ZT = function(t, n) {
  return rw(qT(nw(t), n));
}, Dv = /* @__PURE__ */ new WeakMap(), GT = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Dv.get(r)) && !o) {
      Dv.set(t, !0);
      for (var i = [], s = ZT(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
    }
  }
}, XT = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function iw(e, t) {
  switch (AT(e, t)) {
    case 5103:
      return $e + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return $e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $e + e + qc + e + Ft + e + e;
    case 6828:
    case 4268:
      return $e + e + Ft + e + e;
    case 6165:
      return $e + e + Ft + "flex-" + e + e;
    case 5187:
      return $e + e + je(e, /(\w+).+(:[^]+)/, $e + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return $e + e + Ft + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return $e + e + Ft + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $e + e + Ft + je(e, "shrink", "negative") + e;
    case 5292:
      return $e + e + Ft + je(e, "basis", "preferred-size") + e;
    case 6060:
      return $e + "box-" + je(e, "-grow", "") + $e + e + Ft + je(e, "grow", "positive") + e;
    case 4554:
      return $e + je(e, /([^-])(transform)/g, "$1" + $e + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, $e + "$1"), /(image-set)/, $e + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, $e + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, $e + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $e + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(e, /(.+)-inline(.+)/, $e + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pr(e) - 1 - t > 6) switch (At(e, t + 1)) {
        case 109:
          if (At(e, t + 4) !== 45) break;
        case 102:
          return je(e, /(.+:)(.+)-([^]+)/, "$1" + $e + "$2-$3$1" + qc + (At(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~yh(e, "stretch") ? iw(je(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (At(e, t + 1) !== 115) break;
    case 6444:
      switch (At(e, Pr(e) - 3 - (~yh(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + $e) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $e + (At(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $e + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (At(e, t + 11)) {
        case 114:
          return $e + e + Ft + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $e + e + Ft + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $e + e + Ft + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $e + e + Ft + e + e;
  }
  return e;
}
var YT = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Cy:
      t.return = iw(t.value, t.length);
      break;
    case Jx:
      return _s([Pa(t, {
        value: je(t.value, "@", "@" + $e)
      })], o);
    case ky:
      if (t.length) return jT(t.props, function(i) {
        switch ($T(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return _s([Pa(t, {
              props: [je(i, /:(read-\w+)/, ":" + qc + "$1")]
            })], o);
          case "::placeholder":
            return _s([Pa(t, {
              props: [je(i, /:(plac\w+)/, ":" + $e + "input-$1")]
            }), Pa(t, {
              props: [je(i, /:(plac\w+)/, ":" + qc + "$1")]
            }), Pa(t, {
              props: [je(i, /:(plac\w+)/, Ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, JT = [YT], sw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var x = v.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || JT, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var x = v.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++)
        i[x[m]] = !0;
      a.push(v);
    }
  );
  var l, u = [GT, XT];
  {
    var c, d = [WT, KT(function(v) {
      c.insert(v);
    })], f = HT(u.concat(o, d)), y = function(x) {
      return _s(UT(x), f);
    };
    l = function(x, m, h, p) {
      c = h, y(x ? x + "{" + m.styles + "}" : m.styles), p && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new RT({
      key: n,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(a), g;
}, aw = { exports: {} }, Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot = typeof Symbol == "function" && Symbol.for, Ey = Ot ? Symbol.for("react.element") : 60103, Ry = Ot ? Symbol.for("react.portal") : 60106, Fd = Ot ? Symbol.for("react.fragment") : 60107, Dd = Ot ? Symbol.for("react.strict_mode") : 60108, zd = Ot ? Symbol.for("react.profiler") : 60114, Bd = Ot ? Symbol.for("react.provider") : 60109, Ud = Ot ? Symbol.for("react.context") : 60110, Py = Ot ? Symbol.for("react.async_mode") : 60111, Vd = Ot ? Symbol.for("react.concurrent_mode") : 60111, Wd = Ot ? Symbol.for("react.forward_ref") : 60112, Hd = Ot ? Symbol.for("react.suspense") : 60113, eE = Ot ? Symbol.for("react.suspense_list") : 60120, Kd = Ot ? Symbol.for("react.memo") : 60115, Qd = Ot ? Symbol.for("react.lazy") : 60116, tE = Ot ? Symbol.for("react.block") : 60121, nE = Ot ? Symbol.for("react.fundamental") : 60117, rE = Ot ? Symbol.for("react.responder") : 60118, oE = Ot ? Symbol.for("react.scope") : 60119;
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ey:
        switch (e = e.type, e) {
          case Py:
          case Vd:
          case Fd:
          case zd:
          case Dd:
          case Hd:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ud:
              case Wd:
              case Qd:
              case Kd:
              case Bd:
                return e;
              default:
                return t;
            }
        }
      case Ry:
        return t;
    }
  }
}
function lw(e) {
  return Ln(e) === Vd;
}
Ue.AsyncMode = Py;
Ue.ConcurrentMode = Vd;
Ue.ContextConsumer = Ud;
Ue.ContextProvider = Bd;
Ue.Element = Ey;
Ue.ForwardRef = Wd;
Ue.Fragment = Fd;
Ue.Lazy = Qd;
Ue.Memo = Kd;
Ue.Portal = Ry;
Ue.Profiler = zd;
Ue.StrictMode = Dd;
Ue.Suspense = Hd;
Ue.isAsyncMode = function(e) {
  return lw(e) || Ln(e) === Py;
};
Ue.isConcurrentMode = lw;
Ue.isContextConsumer = function(e) {
  return Ln(e) === Ud;
};
Ue.isContextProvider = function(e) {
  return Ln(e) === Bd;
};
Ue.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ey;
};
Ue.isForwardRef = function(e) {
  return Ln(e) === Wd;
};
Ue.isFragment = function(e) {
  return Ln(e) === Fd;
};
Ue.isLazy = function(e) {
  return Ln(e) === Qd;
};
Ue.isMemo = function(e) {
  return Ln(e) === Kd;
};
Ue.isPortal = function(e) {
  return Ln(e) === Ry;
};
Ue.isProfiler = function(e) {
  return Ln(e) === zd;
};
Ue.isStrictMode = function(e) {
  return Ln(e) === Dd;
};
Ue.isSuspense = function(e) {
  return Ln(e) === Hd;
};
Ue.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Fd || e === Vd || e === zd || e === Dd || e === Hd || e === eE || typeof e == "object" && e !== null && (e.$$typeof === Qd || e.$$typeof === Kd || e.$$typeof === Bd || e.$$typeof === Ud || e.$$typeof === Wd || e.$$typeof === nE || e.$$typeof === rE || e.$$typeof === oE || e.$$typeof === tE);
};
Ue.typeOf = Ln;
aw.exports = Ue;
var iE = aw.exports, uw = iE, sE = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, aE = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, cw = {};
cw[uw.ForwardRef] = sE;
cw[uw.Memo] = aE;
var lE = !0;
function dw(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Oy = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  lE === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, My = function(t, n, r) {
  Oy(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function uE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var cE = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, dE = /[A-Z]|^ms/g, fE = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fw = function(t) {
  return t.charCodeAt(1) === 45;
}, zv = function(t) {
  return t != null && typeof t != "boolean";
}, np = /* @__PURE__ */ ow(function(e) {
  return fw(e) ? e : e.replace(dE, "-$&").toLowerCase();
}), Bv = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(fE, function(r, o, i) {
          return Or = {
            name: o,
            styles: i,
            next: Or
          }, o;
        });
  }
  return cE[t] !== 1 && !fw(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function El(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Or = {
          name: o.name,
          styles: o.styles,
          next: Or
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Or = {
              name: s.name,
              styles: s.styles,
              next: Or
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return pE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Or, u = n(e);
        return Or = l, El(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null)
    return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function pE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += El(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : zv(a) && (r += np(i) + ":" + Bv(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          zv(s[l]) && (r += np(i) + ":" + Bv(i, s[l]) + ";");
      else {
        var u = El(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += np(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Uv = /label:\s*([^\s;{]+)\s*(;|$)/g, Or;
function ou(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Or = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += El(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += El(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  Uv.lastIndex = 0;
  for (var u = "", c; (c = Uv.exec(o)) !== null; )
    u += "-" + c[1];
  var d = uE(o) + u;
  return {
    name: d,
    styles: o,
    next: Or
  };
}
var hE = function(t) {
  return t();
}, pw = Sc.useInsertionEffect ? Sc.useInsertionEffect : !1, hw = pw || hE, Vv = pw || _.useLayoutEffect, mE = !1, mw = /* @__PURE__ */ _.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ sw({
    key: "css"
  }) : null
), yE = mw.Provider, Iy = function(t) {
  return /* @__PURE__ */ _.forwardRef(function(n, r) {
    var o = _.useContext(mw);
    return t(n, o, r);
  });
}, iu = /* @__PURE__ */ _.createContext({}), Ay = {}.hasOwnProperty, vh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gE = function(t, n) {
  var r = {};
  for (var o in n)
    Ay.call(n, o) && (r[o] = n[o]);
  return r[vh] = t, r;
}, vE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Oy(n, r, o), hw(function() {
    return My(n, r, o);
  }), null;
}, bE = /* @__PURE__ */ Iy(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[vh], i = [r], s = "";
  typeof e.className == "string" ? s = dw(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = ou(i, void 0, _.useContext(iu));
  s += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    Ay.call(e, u) && u !== "css" && u !== vh && !mE && (l[u] = e[u]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(vE, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ _.createElement(o, l));
}), xE = bE, wE = function(t, n) {
  var r = arguments;
  if (n == null || !Ay.call(n, "css"))
    return _.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = xE, i[1] = gE(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return _.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(wE);
var SE = /* @__PURE__ */ Iy(function(e, t) {
  var n = e.styles, r = ou([n], void 0, _.useContext(iu)), o = _.useRef();
  return Vv(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Vv(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && My(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function $y() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ou(t);
}
function su() {
  var e = $y.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var _E = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kE = /* @__PURE__ */ ow(
  function(e) {
    return _E.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), CE = kE, TE = function(t) {
  return t !== "theme";
}, Wv = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? CE : TE;
}, Hv = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, EE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Oy(n, r, o), hw(function() {
    return My(n, r, o);
  }), null;
}, RE = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = Hv(t, n, r), l = a || Wv(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var f = c[0];
      d.push(f[0]);
      for (var y = c.length, g = 1; g < y; g++)
        d.push(c[g], f[g]);
    }
    var v = Iy(function(x, m, h) {
      var p = u && x.as || o, b = "", k = [], C = x;
      if (x.theme == null) {
        C = {};
        for (var T in x)
          C[T] = x[T];
        C.theme = _.useContext(iu);
      }
      typeof x.className == "string" ? b = dw(m.registered, k, x.className) : x.className != null && (b = x.className + " ");
      var E = ou(d.concat(k), m.registered, C);
      b += m.key + "-" + E.name, s !== void 0 && (b += " " + s);
      var M = u && a === void 0 ? Wv(p) : l, w = {};
      for (var P in x)
        u && P === "as" || M(P) && (w[P] = x[P]);
      return w.className = b, h && (w.ref = h), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(EE, {
        cache: m,
        serialized: E,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ _.createElement(p, w));
    });
    return v.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + s;
      }
    }), v.withComponent = function(x, m) {
      var h = e(x, Qc({}, n, m, {
        shouldForwardProp: Hv(v, m, !0)
      }));
      return h.apply(void 0, d);
    }, v;
  };
}, PE = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], bh = RE.bind(null);
PE.forEach(function(e) {
  bh[e] = bh(e);
});
function OE(e) {
  return e == null || Object.keys(e).length === 0;
}
function yw(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(OE(o) ? n : o) : t;
  return /* @__PURE__ */ S.jsx(SE, {
    styles: r
  });
}
/**
 * @mui/styled-engine v6.3.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function gw(e, t) {
  return bh(e, t);
}
function ME(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Kv = [];
function Qv(e) {
  return Kv[0] = e, ou(Kv);
}
function Ir(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vw(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || !Ir(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = vw(e[n]);
  }), t;
}
function Pt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Ir(e) && Ir(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) ? r[o] = t[o] : Ir(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ir(e[o]) ? r[o] = Pt(e[o], t[o], n) : n.clone ? r[o] = Ir(t[o]) ? vw(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const IE = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function AE(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5,
    ...o
  } = e, i = IE(t), s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const y = s.indexOf(f);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? l(s[y]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: c,
    not: d,
    unit: n,
    ...o
  };
}
function $E(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var s, a;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((a = o.match(i)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function jE(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function LE(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function NE(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const l = t(e.breakpoints.not(...a), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const FE = {
  borderRadius: 4
};
function nl(e, t) {
  return t ? Pt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qd = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, qv = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qd[e]}px)`
}, DE = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : qd[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function mr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || qv;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || qv;
    return Object.keys(t).reduce((s, a) => {
      if (jE(i.keys, a)) {
        const l = LE(r.containerQueries ? r : DE, a);
        l && (s[l] = n(t[a], a));
      } else if (Object.keys(i.values || qd).includes(a)) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function bw(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function xw(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function zE(e, ...t) {
  const n = bw(e), r = [n, ...t].reduce((o, i) => Pt(o, i), {});
  return xw(Object.keys(n), r);
}
function BE(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function rp({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || BE(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((s, a, l) => (Array.isArray(e) ? (s[a] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (s[a] = e[a] != null ? e[a] : e[i], i = a) : s[a] = e, s), {});
}
function G(e) {
  if (typeof e != "string")
    throw new Error(lo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Zs(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Zc(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Zs(e, n) || r, t && (o = t(o, r, e)), o;
}
function gt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], l = s.theme, u = Zs(l, r) || {};
    return mr(s, a, (d) => {
      let f = Zc(u, o, d);
      return d === f && typeof d == "string" && (f = Zc(u, o, `${t}${d === "default" ? "" : G(d)}`, d)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function UE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const VE = {
  m: "margin",
  p: "padding"
}, WE = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zv = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, HE = UE((e) => {
  if (e.length > 2)
    if (Zv[e])
      e = Zv[e];
    else
      return [e];
  const [t, n] = e.split(""), r = VE[t], o = WE[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), jy = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ly = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...jy, ...Ly];
function au(e, t, n, r) {
  const o = Zs(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Zd(e) {
  return au(e, "spacing", 8);
}
function Pi(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function KE(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Pi(t, n), r), {});
}
function QE(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = HE(n), i = KE(o, r), s = e[n];
  return mr(e, s, i);
}
function ww(e, t) {
  const n = Zd(e.theme);
  return Object.keys(e).map((r) => QE(e, t, r, n)).reduce(nl, {});
}
function dt(e) {
  return ww(e, jy);
}
dt.propTypes = {};
dt.filterProps = jy;
function ft(e) {
  return ww(e, Ly);
}
ft.propTypes = {};
ft.filterProps = Ly;
function Sw(e = 8, t = Zd({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" ");
  return n.mui = !0, n;
}
function Gd(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? nl(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Wn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Jn(e, t) {
  return gt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qE = Jn("border", Wn), ZE = Jn("borderTop", Wn), GE = Jn("borderRight", Wn), XE = Jn("borderBottom", Wn), YE = Jn("borderLeft", Wn), JE = Jn("borderColor"), e2 = Jn("borderTopColor"), t2 = Jn("borderRightColor"), n2 = Jn("borderBottomColor"), r2 = Jn("borderLeftColor"), o2 = Jn("outline", Wn), i2 = Jn("outlineColor"), Xd = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = au(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Pi(t, r)
    });
    return mr(e, e.borderRadius, n);
  }
  return null;
};
Xd.propTypes = {};
Xd.filterProps = ["borderRadius"];
Gd(qE, ZE, GE, XE, YE, JE, e2, t2, n2, r2, Xd, o2, i2);
const Yd = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = au(e.theme, "spacing", 8), n = (r) => ({
      gap: Pi(t, r)
    });
    return mr(e, e.gap, n);
  }
  return null;
};
Yd.propTypes = {};
Yd.filterProps = ["gap"];
const Jd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = au(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Pi(t, r)
    });
    return mr(e, e.columnGap, n);
  }
  return null;
};
Jd.propTypes = {};
Jd.filterProps = ["columnGap"];
const ef = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = au(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Pi(t, r)
    });
    return mr(e, e.rowGap, n);
  }
  return null;
};
ef.propTypes = {};
ef.filterProps = ["rowGap"];
const s2 = gt({
  prop: "gridColumn"
}), a2 = gt({
  prop: "gridRow"
}), l2 = gt({
  prop: "gridAutoFlow"
}), u2 = gt({
  prop: "gridAutoColumns"
}), c2 = gt({
  prop: "gridAutoRows"
}), d2 = gt({
  prop: "gridTemplateColumns"
}), f2 = gt({
  prop: "gridTemplateRows"
}), p2 = gt({
  prop: "gridTemplateAreas"
}), h2 = gt({
  prop: "gridArea"
});
Gd(Yd, Jd, ef, s2, a2, l2, u2, c2, d2, f2, p2, h2);
function ks(e, t) {
  return t === "grey" ? t : e;
}
const m2 = gt({
  prop: "color",
  themeKey: "palette",
  transform: ks
}), y2 = gt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ks
}), g2 = gt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ks
});
Gd(m2, y2, g2);
function _n(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const v2 = gt({
  prop: "width",
  transform: _n
}), Ny = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, l;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || qd[n];
      return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: _n(n)
      };
    };
    return mr(e, e.maxWidth, t);
  }
  return null;
};
Ny.filterProps = ["maxWidth"];
const b2 = gt({
  prop: "minWidth",
  transform: _n
}), x2 = gt({
  prop: "height",
  transform: _n
}), w2 = gt({
  prop: "maxHeight",
  transform: _n
}), S2 = gt({
  prop: "minHeight",
  transform: _n
});
gt({
  prop: "size",
  cssProperty: "width",
  transform: _n
});
gt({
  prop: "size",
  cssProperty: "height",
  transform: _n
});
const _2 = gt({
  prop: "boxSizing"
});
Gd(v2, Ny, b2, x2, w2, S2, _2);
const lu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Wn
  },
  borderTop: {
    themeKey: "borders",
    transform: Wn
  },
  borderRight: {
    themeKey: "borders",
    transform: Wn
  },
  borderBottom: {
    themeKey: "borders",
    transform: Wn
  },
  borderLeft: {
    themeKey: "borders",
    transform: Wn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Wn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Xd
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ks
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ks
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ks
  },
  // spacing
  p: {
    style: ft
  },
  pt: {
    style: ft
  },
  pr: {
    style: ft
  },
  pb: {
    style: ft
  },
  pl: {
    style: ft
  },
  px: {
    style: ft
  },
  py: {
    style: ft
  },
  padding: {
    style: ft
  },
  paddingTop: {
    style: ft
  },
  paddingRight: {
    style: ft
  },
  paddingBottom: {
    style: ft
  },
  paddingLeft: {
    style: ft
  },
  paddingX: {
    style: ft
  },
  paddingY: {
    style: ft
  },
  paddingInline: {
    style: ft
  },
  paddingInlineStart: {
    style: ft
  },
  paddingInlineEnd: {
    style: ft
  },
  paddingBlock: {
    style: ft
  },
  paddingBlockStart: {
    style: ft
  },
  paddingBlockEnd: {
    style: ft
  },
  m: {
    style: dt
  },
  mt: {
    style: dt
  },
  mr: {
    style: dt
  },
  mb: {
    style: dt
  },
  ml: {
    style: dt
  },
  mx: {
    style: dt
  },
  my: {
    style: dt
  },
  margin: {
    style: dt
  },
  marginTop: {
    style: dt
  },
  marginRight: {
    style: dt
  },
  marginBottom: {
    style: dt
  },
  marginLeft: {
    style: dt
  },
  marginX: {
    style: dt
  },
  marginY: {
    style: dt
  },
  marginInline: {
    style: dt
  },
  marginInlineStart: {
    style: dt
  },
  marginInlineEnd: {
    style: dt
  },
  marginBlock: {
    style: dt
  },
  marginBlockStart: {
    style: dt
  },
  marginBlockEnd: {
    style: dt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Yd
  },
  rowGap: {
    style: ef
  },
  columnGap: {
    style: Jd
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: _n
  },
  maxWidth: {
    style: Ny
  },
  minWidth: {
    transform: _n
  },
  height: {
    transform: _n
  },
  maxHeight: {
    transform: _n
  },
  minHeight: {
    transform: _n
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function k2(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function C2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function T2() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, a = i[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: c,
      style: d
    } = a;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const f = Zs(o, u) || {};
    return d ? d(s) : mr(s, r, (g) => {
      let v = Zc(f, c, g);
      return g === v && typeof g == "string" && (v = Zc(f, c, `${n}${g === "default" ? "" : G(g)}`, g)), l === !1 ? v : {
        [l]: v
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: o = {}
    } = n || {};
    if (!r)
      return null;
    const i = o.unstable_sxConfig ?? lu;
    function s(a) {
      let l = a;
      if (typeof a == "function")
        l = a(o);
      else if (typeof a != "object")
        return a;
      if (!l)
        return null;
      const u = bw(o.breakpoints), c = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((f) => {
        const y = C2(l[f], o);
        if (y != null)
          if (typeof y == "object")
            if (i[f])
              d = nl(d, e(f, y, o, i));
            else {
              const g = mr({
                theme: o
              }, y, (v) => ({
                [f]: v
              }));
              k2(g, y) ? d[f] = t({
                sx: y,
                theme: o
              }) : d = nl(d, g);
            }
          else
            d = nl(d, e(f, y, o, i));
      }), $E(o, xw(c, d));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Ho = T2();
Ho.filterProps = ["sx"];
function E2(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let o = n.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function uu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = AE(n), l = Sw(o);
  let u = Pt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...FE,
      ...i
    }
  }, s);
  return u = NE(u), u.applyStyles = E2, u = t.reduce((c, d) => Pt(c, d), u), u.unstable_sxConfig = {
    ...lu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return Ho({
      sx: d,
      theme: this
    });
  }, u;
}
function R2(e) {
  return Object.keys(e).length === 0;
}
function Fy(e = null) {
  const t = _.useContext(iu);
  return !t || R2(t) ? e : t;
}
const P2 = uu();
function cu(e = P2) {
  return Fy(e);
}
function O2({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = cu(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ S.jsx(yw, {
    styles: o
  });
}
const M2 = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? lu;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function tf(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = M2(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ir(a) ? {
      ...r,
      ...a
    } : r;
  } : i = {
    ...r,
    ...t
  }, {
    ...o,
    sx: i
  };
}
const Gv = (e) => e, I2 = () => {
  let e = Gv;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Gv;
    }
  };
}, _w = I2();
function kw(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = kw(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = kw(e)) && (r && (r += " "), r += t);
  return r;
}
function A2(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = gw("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Ho);
  return /* @__PURE__ */ _.forwardRef(function(l, u) {
    const c = cu(n), {
      className: d,
      component: f = "div",
      ...y
    } = tf(l);
    return /* @__PURE__ */ S.jsx(i, {
      as: f,
      ref: u,
      className: J(d, o ? o(r) : r),
      theme: t && c[t] || c,
      ...y
    });
  });
}
const $2 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ke(e, t, n = "Mui") {
  const r = $2[t];
  return r ? `${n}-${r}` : `${_w.generate(e)}-${t}`;
}
function Pe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ke(e, o, n);
  }), r;
}
function Cw(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Qv(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Qv(o.style));
  }), r;
}
const j2 = uu();
function op(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function L2(e) {
  return e ? (t, n) => n[e] : null;
}
function N2(e, t, n) {
  e.theme = D2(e.theme) ? n : e.theme[t] || e.theme;
}
function hc(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => hc(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: o,
        ...i
      } = n;
      r = i;
    }
    return Tw(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Tw(e, t, n = []) {
  var o;
  let r;
  e: for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (typeof s.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(r))
        continue;
    } else
      for (const a in s.props)
        if (e[a] !== s.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== s.props[a])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function Ew(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = j2,
    rootShouldForwardProp: r = op,
    slotShouldForwardProp: o = op
  } = e;
  function i(a) {
    N2(a, t, n);
  }
  return (a, l = {}) => {
    ME(a, (k) => k.filter((C) => C !== Ho));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = L2(B2(c)),
      ...g
    } = l, v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), x = f || !1;
    let m = op;
    c === "Root" || c === "root" ? m = r : c ? m = o : z2(a) && (m = void 0);
    const h = gw(a, {
      shouldForwardProp: m,
      label: F2(),
      ...g
    }), p = (k) => {
      if (typeof k == "function" && k.__emotion_real !== k)
        return function(T) {
          return hc(T, k);
        };
      if (Ir(k)) {
        const C = Cw(k);
        return C.variants ? function(E) {
          return hc(E, C);
        } : C.style;
      }
      return k;
    }, b = (...k) => {
      const C = [], T = k.map(p), E = [];
      if (C.push(i), u && y && E.push(function(j) {
        var D, U;
        const L = (U = (D = j.theme.components) == null ? void 0 : D[u]) == null ? void 0 : U.styleOverrides;
        if (!L)
          return null;
        const F = {};
        for (const A in L)
          F[A] = hc(j, L[A]);
        return y(j, F);
      }), u && !v && E.push(function(j) {
        var F, D;
        const O = j.theme, L = (D = (F = O == null ? void 0 : O.components) == null ? void 0 : F[u]) == null ? void 0 : D.variants;
        return L ? Tw(j, L) : null;
      }), x || E.push(Ho), Array.isArray(T[0])) {
        const P = T.shift(), j = new Array(C.length).fill(""), O = new Array(E.length).fill("");
        let L;
        L = [...j, ...P, ...O], L.raw = [...j, ...P.raw, ...O], C.unshift(L);
      }
      const M = [...C, ...T, ...E], w = h(...M);
      return a.muiName && (w.muiName = a.muiName), w;
    };
    return h.withConfig && (b.withConfig = h.withConfig), b;
  };
}
function F2(e, t) {
  return void 0;
}
function D2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function z2(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function B2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Rw = Ew();
function Gs(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const o = r;
      if (o === "components" || o === "slots")
        n[o] = {
          ...e[o],
          ...n[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], s = t[o];
        if (!s)
          n[o] = i || {};
        else if (!i)
          n[o] = s;
        else {
          n[o] = {
            ...s
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const l = a;
              n[o][l] = Gs(i[l], s[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function Pw(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Gs(t.components[n].defaultProps, r);
}
function Ow({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = cu(n);
  return r && (o = o[r] || o), Pw({
    theme: o,
    name: t,
    props: e
  });
}
const Fr = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function U2(e, t, n, r, o) {
  const [i, s] = _.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return Fr(() => {
    if (!n)
      return;
    const a = n(e), l = () => {
      s(a.matches);
    };
    return l(), a.addEventListener("change", l), () => {
      a.removeEventListener("change", l);
    };
  }, [e, n]), i;
}
const V2 = {
  ...Sc
}, Mw = V2.useSyncExternalStore;
function W2(e, t, n, r, o) {
  const i = _.useCallback(() => t, [t]), s = _.useMemo(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: c
      } = r(e);
      return () => c;
    }
    return i;
  }, [i, e, r, o, n]), [a, l] = _.useMemo(() => {
    if (n === null)
      return [i, () => () => {
      }];
    const c = n(e);
    return [() => c.matches, (d) => (c.addEventListener("change", d), () => {
      c.removeEventListener("change", d);
    })];
  }, [i, n, e]);
  return Mw(l, a, s);
}
function H2(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let i = Fy();
    i && t && (i = i[t] || i);
    const s = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: l = s ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: c = !1
    } = Pw({
      name: "MuiUseMediaQuery",
      props: o,
      theme: i
    });
    let d = typeof r == "function" ? r(i) : r;
    return d = d.replace(/^@media( ?)/m, ""), (Mw !== void 0 ? W2 : U2)(d, a, l, u, c);
  };
}
function K2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Dy(e, t = 0, n = 1) {
  return K2(e, t, n);
}
function Q2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ko(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ko(Q2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(lo(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(lo(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const q2 = (e) => {
  const t = Ko(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Ba = (e, t) => {
  try {
    return q2(e);
  } catch {
    return e;
  }
};
function nf(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Iw(e) {
  e = Ko(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), nf({
    type: a,
    values: l
  });
}
function xh(e) {
  e = Ko(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ko(Iw(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Z2(e, t) {
  const n = xh(e), r = xh(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ut(e, t) {
  return e = Ko(e), t = Dy(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, nf(e);
}
function Bu(e, t, n) {
  try {
    return Ut(e, t);
  } catch {
    return e;
  }
}
function zy(e, t) {
  if (e = Ko(e), t = Dy(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return nf(e);
}
function Qe(e, t, n) {
  try {
    return zy(e, t);
  } catch {
    return e;
  }
}
function By(e, t) {
  if (e = Ko(e), t = Dy(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return nf(e);
}
function qe(e, t, n) {
  try {
    return By(e, t);
  } catch {
    return e;
  }
}
function G2(e, t = 0.15) {
  return xh(e) > 0.5 ? zy(e, t) : By(e, t);
}
function Uu(e, t, n) {
  try {
    return G2(e, t);
  } catch {
    return e;
  }
}
function Xv(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Aw(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function mc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ _.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function On(e) {
  return e && e.ownerDocument || document;
}
function uo(e) {
  return On(e).defaultView || window;
}
function wh(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Yv = 0;
function X2(e) {
  const [t, n] = _.useState(e), r = e || t;
  return _.useEffect(() => {
    t == null && (Yv += 1, n(`mui-${Yv}`));
  }, [t]), r;
}
const Y2 = {
  ...Sc
}, Jv = Y2.useId;
function du(e) {
  if (Jv !== void 0) {
    const t = Jv();
    return e ?? t;
  }
  return X2(e);
}
function Sh({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = _.useRef(e !== void 0), [i, s] = _.useState(t), a = o ? e : i, l = _.useCallback((u) => {
    o || s(u);
  }, []);
  return [a, l];
}
function Uo(e) {
  const t = _.useRef(e);
  return Fr(() => {
    t.current = e;
  }), _.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Tt(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      wh(n, t);
    });
  }, e);
}
const e0 = {};
function $w(e, t) {
  const n = _.useRef(e0);
  return n.current === e0 && (n.current = e(t)), n;
}
const J2 = [];
function eR(e) {
  _.useEffect(e, J2);
}
class rf {
  constructor() {
    ba(this, "currentId", null);
    ba(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ba(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new rf();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, n();
    }, t);
  }
}
function fs() {
  const e = $w(rf.create).current;
  return eR(e.disposeEffect), e;
}
function Xs(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function jw(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Oe(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      u && (s += (a === !0 ? "" : " ") + t(u), a = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function tR(e) {
  return typeof e == "string";
}
function Lw(e, t, n) {
  return e === void 0 || tR(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Nw(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function t0(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Fw(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = J(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, v = {
      ...n,
      ...o,
      ...r
    };
    return y.length > 0 && (v.className = y), Object.keys(g).length > 0 && (v.style = g), {
      props: v,
      internalRef: void 0
    };
  }
  const s = Nw({
    ...o,
    ...r
  }), a = t0(r), l = t0(o), u = t(s), c = J(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
    ...u == null ? void 0 : u.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, f = {
    ...u,
    ...n,
    ...l,
    ...a
  };
  return c.length > 0 && (f.className = c), Object.keys(d).length > 0 && (f.style = d), {
    props: f,
    internalRef: u.ref
  };
}
function Dw(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function _h(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : Dw(n, r), {
    props: a,
    internalRef: l
  } = Fw({
    ...i,
    externalSlotProps: s
  }), u = Tt(l, s == null ? void 0 : s.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return Lw(t, {
    ...a,
    ref: u
  }, r);
}
function pa(e) {
  var t;
  return parseInt(_.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const zw = /* @__PURE__ */ _.createContext(null);
function Uy() {
  return _.useContext(zw);
}
const nR = typeof Symbol == "function" && Symbol.for, rR = nR ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function oR(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function iR(e) {
  const {
    children: t,
    theme: n
  } = e, r = Uy(), o = _.useMemo(() => {
    const i = r === null ? {
      ...n
    } : oR(r, n);
    return i != null && (i[rR] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ S.jsx(zw.Provider, {
    value: o,
    children: t
  });
}
const Bw = /* @__PURE__ */ _.createContext();
function sR({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ S.jsx(Bw.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Vy = () => _.useContext(Bw) ?? !1, Uw = /* @__PURE__ */ _.createContext(void 0);
function aR({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ S.jsx(Uw.Provider, {
    value: e,
    children: t
  });
}
function lR(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Gs(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Gs(o, r) : r;
}
function uR({
  props: e,
  name: t
}) {
  const n = _.useContext(Uw);
  return lR({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const n0 = {};
function r0(e, t, n, r = !1) {
  return _.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), s = e ? {
        ...t,
        [e]: i
      } : i;
      return r ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: n
    } : {
      ...t,
      ...n
    };
  }, [e, t, n, r]);
}
function Vw(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Fy(n0), i = Uy() || n0, s = r0(r, o, n), a = r0(r, i, n, !0), l = (r ? s[r] : s).direction === "rtl";
  return /* @__PURE__ */ S.jsx(iR, {
    theme: a,
    children: /* @__PURE__ */ S.jsx(iu.Provider, {
      value: s,
      children: /* @__PURE__ */ S.jsx(sR, {
        value: l,
        children: /* @__PURE__ */ S.jsx(aR, {
          value: r ? s[r].components : s.components,
          children: t
        })
      })
    })
  });
}
const o0 = {
  theme: void 0
};
function cR(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (o0.theme = o.theme, i = Cw(e(o0)), t = i, n = o.theme), i;
  };
}
const Wy = "mode", Hy = "color-scheme", dR = "data-color-scheme";
function fR(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Wy,
    colorSchemeStorageKey: i = Hy,
    attribute: s = dR,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e;
  let u = "", c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), c.startsWith(".")) {
    const f = c.substring(1);
    u += `${a}.classList.remove('${f}'.replace('%s', light), '${f}'.replace('%s', dark));
      ${a}.classList.add('${f}'.replace('%s', colorScheme));`;
  }
  const d = c.match(/\[([^\]]+)\]/);
  if (d) {
    const [f, y] = d[1].split("=");
    y || (u += `${a}.removeAttribute('${f}'.replace('%s', light));
      ${a}.removeAttribute('${f}'.replace('%s', dark));`), u += `
      ${a}.setAttribute('${f}'.replace('%s', colorScheme), ${y ? `${y}.replace('%s', colorScheme)` : '""'});`;
  } else
    u += `${a}.setAttribute('${c}', colorScheme);`;
  return /* @__PURE__ */ S.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${r}';
  const light = localStorage.getItem('${i}-light') || '${n}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function i0(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ww(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function pR(e) {
  return Ww(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function ip(e, t) {
  if (typeof window > "u")
    return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0, n || localStorage.setItem(e, t);
  } catch {
  }
  return n || t;
}
function hR(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Wy,
    colorSchemeStorageKey: s = Hy,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    noSsr: l = !1
  } = e, u = o.join(","), c = o.length > 1, [d, f] = _.useState(() => {
    const b = ip(i, t), k = ip(`${s}-light`, n), C = ip(`${s}-dark`, r);
    return {
      mode: b,
      systemMode: i0(b),
      lightColorScheme: k,
      darkColorScheme: C
    };
  }), [y, g] = _.useState(l || !c);
  _.useEffect(() => {
    g(!0);
  }, []);
  const v = pR(d), x = _.useCallback((b) => {
    f((k) => {
      if (b === k.mode)
        return k;
      const C = b ?? t;
      try {
        localStorage.setItem(i, C);
      } catch {
      }
      return {
        ...k,
        mode: C,
        systemMode: i0(C)
      };
    });
  }, [i, t]), m = _.useCallback((b) => {
    b ? typeof b == "string" ? b && !u.includes(b) ? console.error(`\`${b}\` does not exist in \`theme.colorSchemes\`.`) : f((k) => {
      const C = {
        ...k
      };
      return Ww(k, (T) => {
        try {
          localStorage.setItem(`${s}-${T}`, b);
        } catch {
        }
        T === "light" && (C.lightColorScheme = b), T === "dark" && (C.darkColorScheme = b);
      }), C;
    }) : f((k) => {
      const C = {
        ...k
      }, T = b.light === null ? n : b.light, E = b.dark === null ? r : b.dark;
      if (T)
        if (!u.includes(T))
          console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          C.lightColorScheme = T;
          try {
            localStorage.setItem(`${s}-light`, T);
          } catch {
          }
        }
      if (E)
        if (!u.includes(E))
          console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          C.darkColorScheme = E;
          try {
            localStorage.setItem(`${s}-dark`, E);
          } catch {
          }
        }
      return C;
    }) : f((k) => {
      try {
        localStorage.setItem(`${s}-light`, n), localStorage.setItem(`${s}-dark`, r);
      } catch {
      }
      return {
        ...k,
        lightColorScheme: n,
        darkColorScheme: r
      };
    });
  }, [u, s, n, r]), h = _.useCallback((b) => {
    d.mode === "system" && f((k) => {
      const C = b != null && b.matches ? "dark" : "light";
      return k.systemMode === C ? k : {
        ...k,
        systemMode: C
      };
    });
  }, [d.mode]), p = _.useRef(h);
  return p.current = h, _.useEffect(() => {
    if (typeof window.matchMedia != "function" || !c)
      return;
    const b = (...C) => p.current(...C), k = window.matchMedia("(prefers-color-scheme: dark)");
    return k.addListener(b), b(k), () => {
      k.removeListener(b);
    };
  }, [c]), _.useEffect(() => {
    if (a && c) {
      const b = (k) => {
        const C = k.newValue;
        typeof k.key == "string" && k.key.startsWith(s) && (!C || u.match(C)) && (k.key.endsWith("light") && m({
          light: C
        }), k.key.endsWith("dark") && m({
          dark: C
        })), k.key === i && (!C || ["light", "dark", "system"].includes(C)) && x(C || t);
      };
      return a.addEventListener("storage", b), () => {
        a.removeEventListener("storage", b);
      };
    }
  }, [m, x, i, s, u, t, a, c]), {
    ...d,
    mode: y ? d.mode : void 0,
    systemMode: y ? d.systemMode : void 0,
    colorScheme: y ? v : void 0,
    setMode: x,
    setColorScheme: m
  };
}
const mR = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function yR(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Wy,
    colorSchemeStorageKey: o = Hy,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: a
  } = e, l = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ _.createContext(void 0), c = () => _.useContext(u) || l, d = {}, f = {};
  function y(m) {
    var Qt, ot, sn, bn;
    const {
      children: h,
      theme: p,
      modeStorageKey: b = r,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: C = i,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: E = typeof document > "u" ? void 0 : document,
      colorSchemeNode: M = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: w = !1,
      disableStyleSheetGeneration: P = !1,
      defaultMode: j = "system",
      noSsr: O
    } = m, L = _.useRef(!1), F = Uy(), D = _.useContext(u), U = !!D && !w, A = _.useMemo(() => p || (typeof n == "function" ? n() : n), [p]), N = A[t], V = N || A, {
      colorSchemes: H = d,
      components: ee = f,
      cssVarPrefix: fe
    } = V, se = Object.keys(H).filter((We) => !!H[We]).join(","), te = _.useMemo(() => se.split(","), [se]), Se = typeof s == "string" ? s : s.light, Te = typeof s == "string" ? s : s.dark, Ve = H[Se] && H[Te] ? j : ((ot = (Qt = H[V.defaultColorScheme]) == null ? void 0 : Qt.palette) == null ? void 0 : ot.mode) || ((sn = V.palette) == null ? void 0 : sn.mode), {
      mode: Ie,
      setMode: pe,
      systemMode: be,
      lightColorScheme: ae,
      darkColorScheme: Ne,
      colorScheme: de,
      setColorScheme: Ee
    } = hR({
      supportedColorSchemes: te,
      defaultLightColorScheme: Se,
      defaultDarkColorScheme: Te,
      modeStorageKey: b,
      colorSchemeStorageKey: k,
      defaultMode: Ve,
      storageWindow: T,
      noSsr: O
    });
    let rt = Ie, we = de;
    U && (rt = D.mode, we = D.colorScheme);
    const Ae = _.useMemo(() => {
      var Mt;
      const We = we || V.defaultColorScheme, Ze = ((Mt = V.generateThemeVars) == null ? void 0 : Mt.call(V)) || V.vars, Ge = {
        ...V,
        components: ee,
        colorSchemes: H,
        cssVarPrefix: fe,
        vars: Ze
      };
      if (typeof Ge.generateSpacing == "function" && (Ge.spacing = Ge.generateSpacing()), We) {
        const ue = H[We];
        ue && typeof ue == "object" && Object.keys(ue).forEach((ct) => {
          ue[ct] && typeof ue[ct] == "object" ? Ge[ct] = {
            ...Ge[ct],
            ...ue[ct]
          } : Ge[ct] = ue[ct];
        });
      }
      return a ? a(Ge) : Ge;
    }, [V, we, ee, H, fe]), ut = V.colorSchemeSelector;
    _.useEffect(() => {
      if (we && M && ut && ut !== "media") {
        const We = ut;
        let Ze = ut;
        if (We === "class" && (Ze = ".%s"), We === "data" && (Ze = "[data-%s]"), We != null && We.startsWith("data-") && !We.includes("%s") && (Ze = `[${We}="%s"]`), Ze.startsWith("."))
          M.classList.remove(...te.map((Ge) => Ze.substring(1).replace("%s", Ge))), M.classList.add(Ze.substring(1).replace("%s", we));
        else {
          const Ge = Ze.replace("%s", we).match(/\[([^\]]+)\]/);
          if (Ge) {
            const [Mt, ue] = Ge[1].split("=");
            ue || te.forEach((ct) => {
              M.removeAttribute(Mt.replace(we, ct));
            }), M.setAttribute(Mt, ue ? ue.replace(/"|'/g, "") : "");
          } else
            M.setAttribute(Ze, we);
        }
      }
    }, [we, ut, M, te]), _.useEffect(() => {
      let We;
      if (C && L.current && E) {
        const Ze = E.createElement("style");
        Ze.appendChild(E.createTextNode(mR)), E.head.appendChild(Ze), window.getComputedStyle(E.body), We = setTimeout(() => {
          E.head.removeChild(Ze);
        }, 1);
      }
      return () => {
        clearTimeout(We);
      };
    }, [we, C, E]), _.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const Ke = _.useMemo(() => ({
      allColorSchemes: te,
      colorScheme: we,
      darkColorScheme: Ne,
      lightColorScheme: ae,
      mode: rt,
      setColorScheme: Ee,
      setMode: pe,
      systemMode: be
    }), [te, we, Ne, ae, rt, Ee, pe, be, Ae.colorSchemeSelector]);
    let Fe = !0;
    (P || V.cssVariables === !1 || U && (F == null ? void 0 : F.cssVarPrefix) === fe) && (Fe = !1);
    const X = /* @__PURE__ */ S.jsxs(_.Fragment, {
      children: [/* @__PURE__ */ S.jsx(Vw, {
        themeId: N ? t : void 0,
        theme: Ae,
        children: h
      }), Fe && /* @__PURE__ */ S.jsx(yw, {
        styles: ((bn = Ae.generateStyleSheets) == null ? void 0 : bn.call(Ae)) || []
      })]
    });
    return U ? X : /* @__PURE__ */ S.jsx(u.Provider, {
      value: Ke,
      children: X
    });
  }
  const g = typeof s == "string" ? s : s.light, v = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: y,
    useColorScheme: c,
    getInitColorSchemeScript: (m) => fR({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: v,
      modeStorageKey: r,
      ...m
    })
  };
}
function gR(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const s0 = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, vR = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!n || !n([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s));
    });
  }
  r(e);
}, bR = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function sp(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return vR(
    e,
    (a, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, d = bR(a, l);
        Object.assign(o, {
          [c]: d
        }), s0(i, a, `var(${c})`, u), s0(s, a, `var(${c}, ${d})`, u);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function xR(e, t = {}) {
  const {
    getSelector: n = x,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: a = "light",
    ...l
  } = e, {
    vars: u,
    css: c,
    varsWithDefaults: d
  } = sp(l, t);
  let f = d;
  const y = {}, {
    [a]: g,
    ...v
  } = i;
  if (Object.entries(v || {}).forEach(([p, b]) => {
    const {
      vars: k,
      css: C,
      varsWithDefaults: T
    } = sp(b, t);
    f = Pt(f, T), y[p] = {
      css: C,
      vars: k
    };
  }), g) {
    const {
      css: p,
      vars: b,
      varsWithDefaults: k
    } = sp(g, t);
    f = Pt(f, k), y[a] = {
      css: p,
      vars: b
    };
  }
  function x(p, b) {
    var C, T;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), p) {
      if (k === "media")
        return e.defaultColorScheme === p ? ":root" : {
          [`@media (prefers-color-scheme: ${((T = (C = i[p]) == null ? void 0 : C.palette) == null ? void 0 : T.mode) || p})`]: {
            ":root": b
          }
        };
      if (k)
        return e.defaultColorScheme === p ? `:root, ${k.replace("%s", String(p))}` : k.replace("%s", String(p));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let p = {
        ...u
      };
      return Object.entries(y).forEach(([, {
        vars: b
      }]) => {
        p = Pt(p, b);
      }), p;
    },
    generateStyleSheets: () => {
      var E, M;
      const p = [], b = e.defaultColorScheme || "light";
      function k(w, P) {
        Object.keys(P).length && p.push(typeof w == "string" ? {
          [w]: {
            ...P
          }
        } : w);
      }
      k(n(void 0, {
        ...c
      }), c);
      const {
        [b]: C,
        ...T
      } = y;
      if (C) {
        const {
          css: w
        } = C, P = (M = (E = i[b]) == null ? void 0 : E.palette) == null ? void 0 : M.mode, j = !r && P ? {
          colorScheme: P,
          ...w
        } : {
          ...w
        };
        k(n(b, {
          ...j
        }), j);
      }
      return Object.entries(T).forEach(([w, {
        css: P
      }]) => {
        var L, F;
        const j = (F = (L = i[w]) == null ? void 0 : L.palette) == null ? void 0 : F.mode, O = !r && j ? {
          colorScheme: j,
          ...P
        } : {
          ...P
        };
        k(n(w, {
          ...O
        }), O);
      }), p;
    }
  };
}
function wR(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const SR = (e, t) => e.filter((n) => t.includes(n)), ha = (e, t, n) => {
  const r = e.keys[0];
  Array.isArray(t) ? t.forEach((o, i) => {
    n((s, a) => {
      i <= e.keys.length - 1 && (i === 0 ? Object.assign(s, a) : s[e.up(e.keys[i])] = a);
    }, o);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : SR(e.keys, Object.keys(t))).forEach((i) => {
    if (e.keys.includes(i)) {
      const s = t[i];
      s !== void 0 && n((a, l) => {
        r === i ? Object.assign(a, l) : a[e.up(i)] = l;
      }, s);
    }
  }) : (typeof t == "number" || typeof t == "string") && n((o, i) => {
    Object.assign(o, i);
  }, t);
};
function Gc(e) {
  return `--Grid-${e}Spacing`;
}
function of(e) {
  return `--Grid-parent-${e}Spacing`;
}
const a0 = "--Grid-columns", Cs = "--Grid-parent-columns", _R = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return ha(e.breakpoints, t.size, (r, o) => {
    let i = {};
    o === "grow" && (i = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), o === "auto" && (i = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof o == "number" && (i = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${o} / var(${Cs}) - (var(${Cs}) - ${o}) * (var(${of("column")}) / var(${Cs})))`
    }), r(n, i);
  }), n;
}, kR = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return ha(e.breakpoints, t.offset, (r, o) => {
    let i = {};
    o === "auto" && (i = {
      marginLeft: "auto"
    }), typeof o == "number" && (i = {
      marginLeft: o === 0 ? "0px" : `calc(100% * ${o} / var(${Cs}) + var(${of("column")}) * ${o} / var(${Cs}))`
    }), r(n, i);
  }), n;
}, CR = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {
    [a0]: 12
  };
  return ha(e.breakpoints, t.columns, (r, o) => {
    const i = o ?? 12;
    r(n, {
      [a0]: i,
      "> *": {
        [Cs]: i
      }
    });
  }), n;
}, TR = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return ha(e.breakpoints, t.rowSpacing, (r, o) => {
    var s;
    const i = typeof o == "string" ? o : (s = e.spacing) == null ? void 0 : s.call(e, o);
    r(n, {
      [Gc("row")]: i,
      "> *": {
        [of("row")]: i
      }
    });
  }), n;
}, ER = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return ha(e.breakpoints, t.columnSpacing, (r, o) => {
    var s;
    const i = typeof o == "string" ? o : (s = e.spacing) == null ? void 0 : s.call(e, o);
    r(n, {
      [Gc("column")]: i,
      "> *": {
        [of("column")]: i
      }
    });
  }), n;
}, RR = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return ha(e.breakpoints, t.direction, (r, o) => {
    r(n, {
      flexDirection: o
    });
  }), n;
}, PR = ({
  ownerState: e
}) => ({
  minWidth: 0,
  boxSizing: "border-box",
  ...e.container && {
    display: "flex",
    flexWrap: "wrap",
    ...e.wrap && e.wrap !== "wrap" && {
      flexWrap: e.wrap
    },
    gap: `var(${Gc("row")}) var(${Gc("column")})`
  }
}), OR = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    r !== !1 && r !== void 0 && t.push(`grid-${n}-${String(r)}`);
  }), t;
}, MR = (e, t = "xs") => {
  function n(r) {
    return r === void 0 ? !1 : typeof r == "string" && !Number.isNaN(Number(r)) || typeof r == "number" && r > 0;
  }
  if (n(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const r = [];
    return Object.entries(e).forEach(([o, i]) => {
      n(i) && r.push(`spacing-${o}-${String(i)}`);
    }), r;
  }
  return [];
}, IR = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [`direction-xs-${String(e)}`], AR = uu(), $R = Rw("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function jR(e) {
  return Ow({
    props: e,
    name: "MuiGrid",
    defaultTheme: AR
  });
}
function LR(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = $R,
    useThemeProps: n = jR,
    useTheme: r = cu,
    componentName: o = "MuiGrid"
  } = e, i = (u, c) => {
    const {
      container: d,
      direction: f,
      spacing: y,
      wrap: g,
      size: v
    } = u, x = {
      root: ["root", d && "container", g !== "wrap" && `wrap-xs-${String(g)}`, ...IR(f), ...OR(v), ...d ? MR(y, c.breakpoints.keys[0]) : []]
    };
    return Oe(x, (m) => ke(o, m), {});
  };
  function s(u, c, d = () => !0) {
    const f = {};
    return u === null || (Array.isArray(u) ? u.forEach((y, g) => {
      y !== null && d(y) && c.keys[g] && (f[c.keys[g]] = y);
    }) : typeof u == "object" ? Object.keys(u).forEach((y) => {
      const g = u[y];
      g != null && d(g) && (f[y] = g);
    }) : f[c.keys[0]] = u), f;
  }
  const a = t(CR, ER, TR, _R, RR, PR, kR), l = /* @__PURE__ */ _.forwardRef(function(c, d) {
    const f = r(), y = n(c), g = tf(y), {
      className: v,
      children: x,
      columns: m = 12,
      container: h = !1,
      component: p = "div",
      direction: b = "row",
      wrap: k = "wrap",
      size: C = {},
      offset: T = {},
      spacing: E = 0,
      rowSpacing: M = E,
      columnSpacing: w = E,
      unstable_level: P = 0,
      ...j
    } = g, O = s(C, f.breakpoints, (H) => H !== !1), L = s(T, f.breakpoints), F = c.columns ?? (P ? void 0 : m), D = c.spacing ?? (P ? void 0 : E), U = c.rowSpacing ?? c.spacing ?? (P ? void 0 : M), A = c.columnSpacing ?? c.spacing ?? (P ? void 0 : w), N = {
      ...g,
      level: P,
      columns: F,
      container: h,
      direction: b,
      wrap: k,
      spacing: D,
      rowSpacing: U,
      columnSpacing: A,
      size: O,
      offset: L
    }, V = i(N, f);
    return /* @__PURE__ */ S.jsx(a, {
      ref: d,
      as: p,
      ownerState: N,
      className: J(V.root, v),
      ...j,
      children: _.Children.map(x, (H) => {
        var ee;
        return /* @__PURE__ */ _.isValidElement(H) && mc(H, ["Grid"]) && h && H.props.container ? /* @__PURE__ */ _.cloneElement(H, {
          unstable_level: ((ee = H.props) == null ? void 0 : ee.unstable_level) ?? P + 1
        }) : H;
      })
    });
  });
  return l.muiName = "Grid", l;
}
const NR = uu(), FR = Rw("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function DR(e) {
  return Ow({
    props: e,
    name: "MuiStack",
    defaultTheme: NR
  });
}
function zR(e, t) {
  const n = _.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ _.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const BR = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], UR = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...mr({
      theme: t
    }, rp({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Zd(t), o = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), i = rp({
      values: e.direction,
      base: o
    }), s = rp({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((l, u, c) => {
      if (!i[l]) {
        const f = u > 0 ? i[c[u - 1]] : "column";
        i[l] = f;
      }
    }), n = Pt(n, mr({
      theme: t
    }, s, (l, u) => e.useFlexGap ? {
      gap: Pi(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${BR(u ? i[u] : e.direction)}`]: Pi(r, l)
      }
    }));
  }
  return n = zE(t.breakpoints, n), n;
};
function VR(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = FR,
    useThemeProps: n = DR,
    componentName: r = "MuiStack"
  } = e, o = () => Oe({
    root: ["root"]
  }, (l) => ke(r, l), {}), i = t(UR);
  return /* @__PURE__ */ _.forwardRef(function(l, u) {
    const c = n(l), d = tf(c), {
      component: f = "div",
      direction: y = "column",
      spacing: g = 0,
      divider: v,
      children: x,
      className: m,
      useFlexGap: h = !1,
      ...p
    } = d, b = {
      direction: y,
      spacing: g,
      useFlexGap: h
    }, k = o();
    return /* @__PURE__ */ S.jsx(i, {
      as: f,
      ownerState: b,
      ref: u,
      className: J(k.root, m),
      ...p,
      children: v ? zR(x, v) : x
    });
  });
}
function Hw() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: kl.white,
      default: kl.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const WR = Hw();
function Kw() {
  return {
    text: {
      primary: kl.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: kl.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const l0 = Kw();
function u0(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = By(e.main, o) : t === "dark" && (e.dark = zy(e.main, i)));
}
function HR(e = "light") {
  return e === "dark" ? {
    main: Ki[200],
    light: Ki[50],
    dark: Ki[400]
  } : {
    main: Ki[700],
    light: Ki[400],
    dark: Ki[800]
  };
}
function KR(e = "light") {
  return e === "dark" ? {
    main: Hi[200],
    light: Hi[50],
    dark: Hi[400]
  } : {
    main: Hi[500],
    light: Hi[300],
    dark: Hi[700]
  };
}
function QR(e = "light") {
  return e === "dark" ? {
    main: Wi[500],
    light: Wi[300],
    dark: Wi[700]
  } : {
    main: Wi[700],
    light: Wi[400],
    dark: Wi[800]
  };
}
function qR(e = "light") {
  return e === "dark" ? {
    main: Qi[400],
    light: Qi[300],
    dark: Qi[700]
  } : {
    main: Qi[700],
    light: Qi[500],
    dark: Qi[900]
  };
}
function ZR(e = "light") {
  return e === "dark" ? {
    main: qi[400],
    light: qi[300],
    dark: qi[700]
  } : {
    main: qi[800],
    light: qi[500],
    dark: qi[900]
  };
}
function GR(e = "light") {
  return e === "dark" ? {
    main: Ra[400],
    light: Ra[300],
    dark: Ra[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ra[500],
    dark: Ra[900]
  };
}
function Ky(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || HR(t), s = e.secondary || KR(t), a = e.error || QR(t), l = e.info || qR(t), u = e.success || ZR(t), c = e.warning || GR(t);
  function d(v) {
    return Z2(v, l0.text.primary) >= n ? l0.text.primary : WR.text.primary;
  }
  const f = ({
    color: v,
    name: x,
    mainShade: m = 500,
    lightShade: h = 300,
    darkShade: p = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[m] && (v.main = v[m]), !v.hasOwnProperty("main"))
      throw new Error(lo(11, x ? ` (${x})` : "", m));
    if (typeof v.main != "string")
      throw new Error(lo(12, x ? ` (${x})` : "", JSON.stringify(v.main)));
    return u0(v, "light", h, r), u0(v, "dark", p, r), v.contrastText || (v.contrastText = d(v.main)), v;
  };
  let y;
  return t === "light" ? y = Hw() : t === "dark" && (y = Kw()), Pt({
    // A collection of common colors.
    common: {
      ...kl
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: kT,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...y
  }, o);
}
function XR(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function YR(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function JR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const c0 = {
  textTransform: "uppercase"
}, d0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qw(e, t) {
  const {
    fontFamily: n = d0,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: c,
    ...d
  } = typeof t == "function" ? t(e) : t, f = r / 14, y = c || ((x) => `${x / l * f}rem`), g = (x, m, h, p, b) => ({
    fontFamily: n,
    fontWeight: x,
    fontSize: y(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === d0 ? {
      letterSpacing: `${JR(p / m)}em`
    } : {},
    ...b,
    ...u
  }), v = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(i, 48, 1.167, 0),
    h4: g(i, 34, 1.235, 0.25),
    h5: g(i, 24, 1.334, 0),
    h6: g(s, 20, 1.6, 0.15),
    subtitle1: g(i, 16, 1.75, 0.15),
    subtitle2: g(s, 14, 1.57, 0.1),
    body1: g(i, 16, 1.5, 0.15),
    body2: g(i, 14, 1.43, 0.15),
    button: g(s, 14, 1.75, 0.4, c0),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, c0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Pt({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...v
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const eP = 0.2, tP = 0.14, nP = 0.12;
function et(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${eP})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${tP})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${nP})`].join(",");
}
const rP = ["none", et(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), et(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), et(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), et(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), et(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), et(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), et(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), et(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), et(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), et(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), et(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), et(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), et(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), et(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), et(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), et(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), et(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), et(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), et(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), et(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), et(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), et(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), et(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), et(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], oP = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, iP = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function f0(e) {
  return `${Math.round(e)}ms`;
}
function sP(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function aP(e) {
  const t = {
    ...oP,
    ...e.easing
  }, n = {
    ...iP,
    ...e.duration
  };
  return {
    getAutoHeightDuration: sP,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = i;
      return (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof s == "string" ? s : f0(s)} ${a} ${typeof l == "string" ? l : f0(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const lP = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function uP(e) {
  return Ir(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function qw(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !uP(a) || s.startsWith("unstable_") ? delete r[s] : Ir(a) && (r[s] = {
        ...a
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function kh(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(lo(20));
  const c = Ky(i), d = uu(e);
  let f = Pt(d, {
    mixins: YR(d.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rP.slice(),
    typography: Qw(c, a),
    transitions: aP(s),
    zIndex: {
      ...lP
    }
  });
  return f = Pt(f, u), f = t.reduce((y, g) => Pt(y, g), f), f.unstable_sxConfig = {
    ...lu,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, f.unstable_sx = function(g) {
    return Ho({
      sx: g,
      theme: this
    });
  }, f.toRuntimeSource = qw, f;
}
function Ch(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const cP = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Ch(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Zw(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Gw(e) {
  return e === "dark" ? cP : [];
}
function dP(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Ky(t);
  return {
    palette: i,
    opacity: {
      ...Zw(i.mode),
      ...n
    },
    overlays: r || Gw(i.mode),
    ...o
  };
}
function fP(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const pP = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], hP = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return pP(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
      }), i === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${r}, ${i.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${r}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return r;
};
function mP(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function $(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Ua(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Iw(e);
}
function Hr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ba(Ua(e[t])));
}
function yP(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const wr = (e) => {
  try {
    return e();
  } catch {
  }
}, gP = (e = "mui") => gR(e);
function ap(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = dP({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...s
  } = kh({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: i,
    opacity: {
      ...Zw(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Gw(o)
  }, s;
}
function vP(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = fP,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, c = Object.keys(n)[0], d = r || (n.light && c !== "light" ? "light" : c), f = gP(i), {
    [d]: y,
    light: g,
    dark: v,
    ...x
  } = n, m = {
    ...x
  };
  let h = y;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (h = !0), !h)
    throw new Error(lo(21, d));
  const p = ap(m, h, u, d);
  g && !m.light && ap(m, g, void 0, "light"), v && !m.dark && ap(m, v, void 0, "dark");
  let b = {
    defaultColorScheme: d,
    ...p,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...XR(p.typography),
      ...p.font
    },
    spacing: yP(u.spacing)
  };
  Object.keys(b.colorSchemes).forEach((M) => {
    const w = b.colorSchemes[M].palette, P = (j) => {
      const O = j.split("-"), L = O[1], F = O[2];
      return f(j, w[L][F]);
    };
    if (w.mode === "light" && ($(w.common, "background", "#fff"), $(w.common, "onBackground", "#000")), w.mode === "dark" && ($(w.common, "background", "#000"), $(w.common, "onBackground", "#fff")), mP(w, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), w.mode === "light") {
      $(w.Alert, "errorColor", Qe(w.error.light, 0.6)), $(w.Alert, "infoColor", Qe(w.info.light, 0.6)), $(w.Alert, "successColor", Qe(w.success.light, 0.6)), $(w.Alert, "warningColor", Qe(w.warning.light, 0.6)), $(w.Alert, "errorFilledBg", P("palette-error-main")), $(w.Alert, "infoFilledBg", P("palette-info-main")), $(w.Alert, "successFilledBg", P("palette-success-main")), $(w.Alert, "warningFilledBg", P("palette-warning-main")), $(w.Alert, "errorFilledColor", wr(() => w.getContrastText(w.error.main))), $(w.Alert, "infoFilledColor", wr(() => w.getContrastText(w.info.main))), $(w.Alert, "successFilledColor", wr(() => w.getContrastText(w.success.main))), $(w.Alert, "warningFilledColor", wr(() => w.getContrastText(w.warning.main))), $(w.Alert, "errorStandardBg", qe(w.error.light, 0.9)), $(w.Alert, "infoStandardBg", qe(w.info.light, 0.9)), $(w.Alert, "successStandardBg", qe(w.success.light, 0.9)), $(w.Alert, "warningStandardBg", qe(w.warning.light, 0.9)), $(w.Alert, "errorIconColor", P("palette-error-main")), $(w.Alert, "infoIconColor", P("palette-info-main")), $(w.Alert, "successIconColor", P("palette-success-main")), $(w.Alert, "warningIconColor", P("palette-warning-main")), $(w.AppBar, "defaultBg", P("palette-grey-100")), $(w.Avatar, "defaultBg", P("palette-grey-400")), $(w.Button, "inheritContainedBg", P("palette-grey-300")), $(w.Button, "inheritContainedHoverBg", P("palette-grey-A100")), $(w.Chip, "defaultBorder", P("palette-grey-400")), $(w.Chip, "defaultAvatarColor", P("palette-grey-700")), $(w.Chip, "defaultIconColor", P("palette-grey-700")), $(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), $(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), $(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), $(w.LinearProgress, "primaryBg", qe(w.primary.main, 0.62)), $(w.LinearProgress, "secondaryBg", qe(w.secondary.main, 0.62)), $(w.LinearProgress, "errorBg", qe(w.error.main, 0.62)), $(w.LinearProgress, "infoBg", qe(w.info.main, 0.62)), $(w.LinearProgress, "successBg", qe(w.success.main, 0.62)), $(w.LinearProgress, "warningBg", qe(w.warning.main, 0.62)), $(w.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), $(w.Slider, "primaryTrack", qe(w.primary.main, 0.62)), $(w.Slider, "secondaryTrack", qe(w.secondary.main, 0.62)), $(w.Slider, "errorTrack", qe(w.error.main, 0.62)), $(w.Slider, "infoTrack", qe(w.info.main, 0.62)), $(w.Slider, "successTrack", qe(w.success.main, 0.62)), $(w.Slider, "warningTrack", qe(w.warning.main, 0.62));
      const j = Uu(w.background.default, 0.8);
      $(w.SnackbarContent, "bg", j), $(w.SnackbarContent, "color", wr(() => w.getContrastText(j))), $(w.SpeedDialAction, "fabHoverBg", Uu(w.background.paper, 0.15)), $(w.StepConnector, "border", P("palette-grey-400")), $(w.StepContent, "border", P("palette-grey-400")), $(w.Switch, "defaultColor", P("palette-common-white")), $(w.Switch, "defaultDisabledColor", P("palette-grey-100")), $(w.Switch, "primaryDisabledColor", qe(w.primary.main, 0.62)), $(w.Switch, "secondaryDisabledColor", qe(w.secondary.main, 0.62)), $(w.Switch, "errorDisabledColor", qe(w.error.main, 0.62)), $(w.Switch, "infoDisabledColor", qe(w.info.main, 0.62)), $(w.Switch, "successDisabledColor", qe(w.success.main, 0.62)), $(w.Switch, "warningDisabledColor", qe(w.warning.main, 0.62)), $(w.TableCell, "border", qe(Bu(w.divider, 1), 0.88)), $(w.Tooltip, "bg", Bu(w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      $(w.Alert, "errorColor", qe(w.error.light, 0.6)), $(w.Alert, "infoColor", qe(w.info.light, 0.6)), $(w.Alert, "successColor", qe(w.success.light, 0.6)), $(w.Alert, "warningColor", qe(w.warning.light, 0.6)), $(w.Alert, "errorFilledBg", P("palette-error-dark")), $(w.Alert, "infoFilledBg", P("palette-info-dark")), $(w.Alert, "successFilledBg", P("palette-success-dark")), $(w.Alert, "warningFilledBg", P("palette-warning-dark")), $(w.Alert, "errorFilledColor", wr(() => w.getContrastText(w.error.dark))), $(w.Alert, "infoFilledColor", wr(() => w.getContrastText(w.info.dark))), $(w.Alert, "successFilledColor", wr(() => w.getContrastText(w.success.dark))), $(w.Alert, "warningFilledColor", wr(() => w.getContrastText(w.warning.dark))), $(w.Alert, "errorStandardBg", Qe(w.error.light, 0.9)), $(w.Alert, "infoStandardBg", Qe(w.info.light, 0.9)), $(w.Alert, "successStandardBg", Qe(w.success.light, 0.9)), $(w.Alert, "warningStandardBg", Qe(w.warning.light, 0.9)), $(w.Alert, "errorIconColor", P("palette-error-main")), $(w.Alert, "infoIconColor", P("palette-info-main")), $(w.Alert, "successIconColor", P("palette-success-main")), $(w.Alert, "warningIconColor", P("palette-warning-main")), $(w.AppBar, "defaultBg", P("palette-grey-900")), $(w.AppBar, "darkBg", P("palette-background-paper")), $(w.AppBar, "darkColor", P("palette-text-primary")), $(w.Avatar, "defaultBg", P("palette-grey-600")), $(w.Button, "inheritContainedBg", P("palette-grey-800")), $(w.Button, "inheritContainedHoverBg", P("palette-grey-700")), $(w.Chip, "defaultBorder", P("palette-grey-700")), $(w.Chip, "defaultAvatarColor", P("palette-grey-300")), $(w.Chip, "defaultIconColor", P("palette-grey-300")), $(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), $(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), $(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), $(w.LinearProgress, "primaryBg", Qe(w.primary.main, 0.5)), $(w.LinearProgress, "secondaryBg", Qe(w.secondary.main, 0.5)), $(w.LinearProgress, "errorBg", Qe(w.error.main, 0.5)), $(w.LinearProgress, "infoBg", Qe(w.info.main, 0.5)), $(w.LinearProgress, "successBg", Qe(w.success.main, 0.5)), $(w.LinearProgress, "warningBg", Qe(w.warning.main, 0.5)), $(w.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), $(w.Slider, "primaryTrack", Qe(w.primary.main, 0.5)), $(w.Slider, "secondaryTrack", Qe(w.secondary.main, 0.5)), $(w.Slider, "errorTrack", Qe(w.error.main, 0.5)), $(w.Slider, "infoTrack", Qe(w.info.main, 0.5)), $(w.Slider, "successTrack", Qe(w.success.main, 0.5)), $(w.Slider, "warningTrack", Qe(w.warning.main, 0.5));
      const j = Uu(w.background.default, 0.98);
      $(w.SnackbarContent, "bg", j), $(w.SnackbarContent, "color", wr(() => w.getContrastText(j))), $(w.SpeedDialAction, "fabHoverBg", Uu(w.background.paper, 0.15)), $(w.StepConnector, "border", P("palette-grey-600")), $(w.StepContent, "border", P("palette-grey-600")), $(w.Switch, "defaultColor", P("palette-grey-300")), $(w.Switch, "defaultDisabledColor", P("palette-grey-600")), $(w.Switch, "primaryDisabledColor", Qe(w.primary.main, 0.55)), $(w.Switch, "secondaryDisabledColor", Qe(w.secondary.main, 0.55)), $(w.Switch, "errorDisabledColor", Qe(w.error.main, 0.55)), $(w.Switch, "infoDisabledColor", Qe(w.info.main, 0.55)), $(w.Switch, "successDisabledColor", Qe(w.success.main, 0.55)), $(w.Switch, "warningDisabledColor", Qe(w.warning.main, 0.55)), $(w.TableCell, "border", Qe(Bu(w.divider, 1), 0.68)), $(w.Tooltip, "bg", Bu(w.grey[700], 0.92));
    }
    Hr(w.background, "default"), Hr(w.background, "paper"), Hr(w.common, "background"), Hr(w.common, "onBackground"), Hr(w, "divider"), Object.keys(w).forEach((j) => {
      const O = w[j];
      j !== "tonalOffset" && O && typeof O == "object" && (O.main && $(w[j], "mainChannel", Ba(Ua(O.main))), O.light && $(w[j], "lightChannel", Ba(Ua(O.light))), O.dark && $(w[j], "darkChannel", Ba(Ua(O.dark))), O.contrastText && $(w[j], "contrastTextChannel", Ba(Ua(O.contrastText))), j === "text" && (Hr(w[j], "primary"), Hr(w[j], "secondary")), j === "action" && (O.active && Hr(w[j], "active"), O.selected && Hr(w[j], "selected")));
    });
  }), b = t.reduce((M, w) => Pt(M, w), b);
  const k = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: hP(b)
  }, {
    vars: C,
    generateThemeVars: T,
    generateStyleSheets: E
  } = xR(b, k);
  return b.vars = C, Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach(([M, w]) => {
    b[M] = w;
  }), b.generateThemeVars = T, b.generateStyleSheets = E, b.generateSpacing = function() {
    return Sw(u.spacing, Zd(this));
  }, b.getColorSchemeSelector = wR(a), b.spacing = b.generateSpacing(), b.shouldSkipGeneratingVar = s, b.unstable_sxConfig = {
    ...lu,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, b.unstable_sx = function(w) {
    return Ho({
      sx: w,
      theme: this
    });
  }, b.toRuntimeSource = qw, b;
}
function p0(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Ky({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function sf(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", l = o == null ? void 0 : o[a], u = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return kh(e, ...t);
    let c = n;
    "palette" in e || u[a] && (u[a] !== !0 ? c = u[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const d = kh({
      ...e,
      palette: c
    }, ...t);
    return d.defaultColorScheme = a, d.colorSchemes = u, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: d.palette
    }, p0(d, "dark", u.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: d.palette
    }, p0(d, "light", u.light)), d;
  }
  return !n && !("light" in u) && a === "light" && (u.light = !0), vP({
    ...s,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Qy = sf();
function Vr() {
  const e = cu(Qy);
  return e[fr] || e;
}
function Xw(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const gr = (e) => Xw(e) && e !== "classes", q = Ew({
  themeId: fr,
  defaultTheme: Qy,
  rootShouldForwardProp: gr
});
function h0({
  theme: e,
  ...t
}) {
  const n = fr in e ? e[fr] : void 0;
  return /* @__PURE__ */ S.jsx(Vw, {
    ...t,
    themeId: n ? fr : void 0,
    theme: n || e
  });
}
const Vu = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: bP,
  useColorScheme: ZL,
  getInitColorSchemeScript: GL
} = yR({
  themeId: fr,
  // @ts-ignore ignore module augmentation tests
  theme: () => sf({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Vu.colorSchemeStorageKey,
  modeStorageKey: Vu.modeStorageKey,
  defaultColorScheme: {
    light: Vu.defaultLightColorScheme,
    dark: Vu.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Qw(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Ho({
        sx: r,
        theme: this
      });
    }, t;
  }
}), xP = bP;
function wP({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ S.jsx(h0, {
    theme: e,
    ...t
  }) : "colorSchemes" in (fr in e ? e[fr] : e) ? /* @__PURE__ */ S.jsx(xP, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ S.jsx(h0, {
    theme: e,
    ...t
  });
}
function SP(e) {
  return /* @__PURE__ */ S.jsx(O2, {
    ...e,
    defaultTheme: Qy,
    themeId: fr
  });
}
function qy(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ S.jsx(SP, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function _P() {
  return tf;
}
const Le = cR;
function Ce(e) {
  return uR(e);
}
function kP(e) {
  return ke("MuiSvgIcon", e);
}
Pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const CP = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${G(t)}`, `fontSize${G(n)}`]
  };
  return Oe(o, kP, r);
}, TP = q("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${G(n.color)}`], t[`fontSize${G(n.fontSize)}`]];
  }
})(Le(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, l, u, c, d, f, y, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (v) => !v.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, v]) => v && v.main).map(([v]) => {
        var x, m;
        return {
          props: {
            color: v
          },
          style: {
            color: (m = (x = (e.vars ?? e).palette) == null ? void 0 : x[v]) == null ? void 0 : m.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (f = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : f.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (g = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : g.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Th = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: f = "0 0 24 24",
    ...y
  } = r, g = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", v = {
    ...r,
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: f,
    hasSvgAsChild: g
  }, x = {};
  c || (x.viewBox = f);
  const m = CP(v);
  return /* @__PURE__ */ S.jsxs(TP, {
    as: a,
    className: J(m.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n,
    ...x,
    ...y,
    ...g && o.props,
    ownerState: v,
    children: [g ? o.props.children : o, d ? /* @__PURE__ */ S.jsx("title", {
      children: d
    }) : null]
  });
});
Th.muiName = "SvgIcon";
function vr(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ S.jsx(Th, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Th.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(n));
}
function Yw(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Eh(e, t) {
  return Eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Eh(e, t);
}
function Jw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Eh(e, t);
}
const m0 = {
  disabled: !1
}, Xc = re.createContext(null);
var EP = function(t) {
  return t.scrollTop;
}, Va = "unmounted", oi = "exited", ii = "entering", Xi = "entered", Rh = "exiting", Wr = /* @__PURE__ */ function(e) {
  Jw(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, a = s && !s.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? a ? (l = oi, i.appearStatus = ii) : l = Xi : r.unmountOnExit || r.mountOnEnter ? l = Va : l = oi, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Va ? {
      status: oi
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== ii && s !== Xi && (i = ii) : (s === ii || s === Xi) && (i = Rh);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === ii) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Du.findDOMNode(this);
          s && EP(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === oi && this.setState({
      status: Va
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [a] : [Du.findDOMNode(this), a], u = l[0], c = l[1], d = this.getTimeouts(), f = a ? d.appear : d.enter;
    if (!o && !s || m0.disabled) {
      this.safeSetState({
        status: Xi
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: ii
    }, function() {
      i.props.onEntering(u, c), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: Xi
        }, function() {
          i.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Du.findDOMNode(this);
    if (!i || m0.disabled) {
      this.safeSetState({
        status: oi
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Rh
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: oi
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Du.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Va)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Yw(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ re.createElement(Xc.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : re.cloneElement(re.Children.only(s), a))
    );
  }, t;
}(re.Component);
Wr.contextType = Xc;
Wr.propTypes = {};
function Zi() {
}
Wr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zi,
  onEntering: Zi,
  onEntered: Zi,
  onExit: Zi,
  onExiting: Zi,
  onExited: Zi
};
Wr.UNMOUNTED = Va;
Wr.EXITED = oi;
Wr.ENTERING = ii;
Wr.ENTERED = Xi;
Wr.EXITING = Rh;
function RP(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zy(e, t) {
  var n = function(i) {
    return t && _.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && _.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function PP(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = n(o[s]);
  return a;
}
function ci(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function OP(e, t) {
  return Zy(e.children, function(n) {
    return _.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: ci(n, "appear", e),
      enter: ci(n, "enter", e),
      exit: ci(n, "exit", e)
    });
  });
}
function MP(e, t, n) {
  var r = Zy(e.children), o = PP(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (_.isValidElement(s)) {
      var a = i in t, l = i in r, u = t[i], c = _.isValidElement(u) && !u.props.in;
      l && (!a || c) ? o[i] = _.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: ci(s, "exit", e),
        enter: ci(s, "enter", e)
      }) : !l && a && !c ? o[i] = _.cloneElement(s, {
        in: !1
      }) : l && a && _.isValidElement(u) && (o[i] = _.cloneElement(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: ci(s, "exit", e),
        enter: ci(s, "enter", e)
      }));
    }
  }), o;
}
var IP = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, AP = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Gy = /* @__PURE__ */ function(e) {
  Jw(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = i.handleExited.bind(RP(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, l = i.firstRender;
    return {
      children: l ? OP(o, a) : MP(o, s, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var s = Zy(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var l = Qc({}, a.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Yw(o, ["component", "childFactory"]), l = this.state.contextValue, u = IP(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ re.createElement(Xc.Provider, {
      value: l
    }, u) : /* @__PURE__ */ re.createElement(Xc.Provider, {
      value: l
    }, /* @__PURE__ */ re.createElement(i, a, u));
  }, t;
}(re.Component);
Gy.propTypes = {};
Gy.defaultProps = AP;
const eS = (e) => e.scrollTop;
function Yc(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function $P(e) {
  return ke("MuiPaper", e);
}
Pe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const jP = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Oe(i, $P, o);
}, LP = q("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Le(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Vt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var y;
  const r = Ce({
    props: t,
    name: "MuiPaper"
  }), o = Vr(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: u = "elevation",
    ...c
  } = r, d = {
    ...r,
    component: s,
    elevation: a,
    square: l,
    variant: u
  }, f = jP(d);
  return /* @__PURE__ */ S.jsx(LP, {
    as: s,
    ownerState: d,
    className: J(f.root, i),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ut("#fff", Ch(a))}, ${Ut("#fff", Ch(a))})`
        }
      },
      ...c.style
    }
  });
});
function Jt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    ...a
  } = t, {
    component: l,
    slots: u = {
      [e]: void 0
    },
    slotProps: c = {
      [e]: void 0
    },
    ...d
  } = i, f = u[e] || r, y = Dw(c[e], o), {
    props: {
      component: g,
      ...v
    },
    internalRef: x
  } = Fw({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: y
  }), m = Tt(x, y == null ? void 0 : y.ref, t.ref), h = e === "root" ? g || l : g, p = Lw(f, {
    ...e === "root" && !l && !u[e] && s,
    ...e !== "root" && !u[e] && s,
    ...v,
    ...h && {
      as: h
    },
    ref: m
  }, o);
  return [f, p];
}
class Jc {
  constructor() {
    ba(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Jc();
  }
  static use() {
    const t = $w(Jc.create).current, [n, r] = _.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, _.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = FP(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var n;
      return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
    });
  }
}
function NP() {
  return Jc.use();
}
function FP() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function DP(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: u
  } = e, [c, d] = _.useState(!1), f = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, g = J(n.child, c && n.childLeaving, r && n.childPulsate);
  return !a && !c && d(!0), _.useEffect(() => {
    if (!a && l != null) {
      const v = setTimeout(l, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [l, a, u]), /* @__PURE__ */ S.jsx("span", {
    className: f,
    style: y,
    children: /* @__PURE__ */ S.jsx("span", {
      className: g
    })
  });
}
const zn = Pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ph = 550, zP = 80, BP = su`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, UP = su`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, VP = su`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, WP = q("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), HP = q(DP, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${zn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${BP};
    animation-duration: ${Ph}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${zn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${zn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${zn.childLeaving} {
    opacity: 0;
    animation-name: ${UP};
    animation-duration: ${Ph}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${zn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${VP};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, KP = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s,
    ...a
  } = r, [l, u] = _.useState([]), c = _.useRef(0), d = _.useRef(null);
  _.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const f = _.useRef(!1), y = fs(), g = _.useRef(null), v = _.useRef(null), x = _.useCallback((b) => {
    const {
      pulsate: k,
      rippleX: C,
      rippleY: T,
      rippleSize: E,
      cb: M
    } = b;
    u((w) => [...w, /* @__PURE__ */ S.jsx(HP, {
      classes: {
        ripple: J(i.ripple, zn.ripple),
        rippleVisible: J(i.rippleVisible, zn.rippleVisible),
        ripplePulsate: J(i.ripplePulsate, zn.ripplePulsate),
        child: J(i.child, zn.child),
        childLeaving: J(i.childLeaving, zn.childLeaving),
        childPulsate: J(i.childPulsate, zn.childPulsate)
      },
      timeout: Ph,
      pulsate: k,
      rippleX: C,
      rippleY: T,
      rippleSize: E
    }, c.current)]), c.current += 1, d.current = M;
  }, [i]), m = _.useCallback((b = {}, k = {}, C = () => {
  }) => {
    const {
      pulsate: T = !1,
      center: E = o || k.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = k;
    if ((b == null ? void 0 : b.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (b == null ? void 0 : b.type) === "touchstart" && (f.current = !0);
    const w = M ? null : v.current, P = w ? w.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, O, L;
    if (E || b === void 0 || b.clientX === 0 && b.clientY === 0 || !b.clientX && !b.touches)
      j = Math.round(P.width / 2), O = Math.round(P.height / 2);
    else {
      const {
        clientX: F,
        clientY: D
      } = b.touches && b.touches.length > 0 ? b.touches[0] : b;
      j = Math.round(F - P.left), O = Math.round(D - P.top);
    }
    if (E)
      L = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const F = Math.max(Math.abs((w ? w.clientWidth : 0) - j), j) * 2 + 2, D = Math.max(Math.abs((w ? w.clientHeight : 0) - O), O) * 2 + 2;
      L = Math.sqrt(F ** 2 + D ** 2);
    }
    b != null && b.touches ? g.current === null && (g.current = () => {
      x({
        pulsate: T,
        rippleX: j,
        rippleY: O,
        rippleSize: L,
        cb: C
      });
    }, y.start(zP, () => {
      g.current && (g.current(), g.current = null);
    })) : x({
      pulsate: T,
      rippleX: j,
      rippleY: O,
      rippleSize: L,
      cb: C
    });
  }, [o, x, y]), h = _.useCallback(() => {
    m({}, {
      pulsate: !0
    });
  }, [m]), p = _.useCallback((b, k) => {
    if (y.clear(), (b == null ? void 0 : b.type) === "touchend" && g.current) {
      g.current(), g.current = null, y.start(0, () => {
        p(b, k);
      });
      return;
    }
    g.current = null, u((C) => C.length > 0 ? C.slice(1) : C), d.current = k;
  }, [y]);
  return _.useImperativeHandle(n, () => ({
    pulsate: h,
    start: m,
    stop: p
  }), [h, m, p]), /* @__PURE__ */ S.jsx(WP, {
    className: J(zn.root, i.root, s),
    ref: v,
    ...a,
    children: /* @__PURE__ */ S.jsx(Gy, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
function QP(e) {
  return ke("MuiButtonBase", e);
}
const qP = Pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), ZP = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, s = Oe({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, QP, o);
  return n && r && (s.root += ` ${r}`), s;
}, GP = q("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${qP.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), tS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: f = !1,
    focusVisibleClassName: y,
    LinkComponent: g = "a",
    onBlur: v,
    onClick: x,
    onContextMenu: m,
    onDragLeave: h,
    onFocus: p,
    onFocusVisible: b,
    onKeyDown: k,
    onKeyUp: C,
    onMouseDown: T,
    onMouseLeave: E,
    onMouseUp: M,
    onTouchEnd: w,
    onTouchMove: P,
    onTouchStart: j,
    tabIndex: O = 0,
    TouchRippleProps: L,
    touchRippleRef: F,
    type: D,
    ...U
  } = r, A = _.useRef(null), N = NP(), V = Tt(N.ref, F), [H, ee] = _.useState(!1);
  u && H && ee(!1), _.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ee(!0), A.current.focus();
    }
  }), []);
  const fe = N.shouldMount && !c && !u;
  _.useEffect(() => {
    H && f && !c && N.pulsate();
  }, [c, f, H, N]);
  const se = Kr(N, "start", T, d), te = Kr(N, "stop", m, d), Se = Kr(N, "stop", h, d), Te = Kr(N, "stop", M, d), Ve = Kr(N, "stop", (X) => {
    H && X.preventDefault(), E && E(X);
  }, d), Ie = Kr(N, "start", j, d), pe = Kr(N, "stop", w, d), be = Kr(N, "stop", P, d), ae = Kr(N, "stop", (X) => {
    Xs(X.target) || ee(!1), v && v(X);
  }, !1), Ne = Uo((X) => {
    A.current || (A.current = X.currentTarget), Xs(X.target) && (ee(!0), b && b(X)), p && p(X);
  }), de = () => {
    const X = A.current;
    return l && l !== "button" && !(X.tagName === "A" && X.href);
  }, Ee = Uo((X) => {
    f && !X.repeat && H && X.key === " " && N.stop(X, () => {
      N.start(X);
    }), X.target === X.currentTarget && de() && X.key === " " && X.preventDefault(), k && k(X), X.target === X.currentTarget && de() && X.key === "Enter" && !u && (X.preventDefault(), x && x(X));
  }), rt = Uo((X) => {
    f && X.key === " " && H && !X.defaultPrevented && N.stop(X, () => {
      N.pulsate(X);
    }), C && C(X), x && X.target === X.currentTarget && de() && X.key === " " && !X.defaultPrevented && x(X);
  });
  let we = l;
  we === "button" && (U.href || U.to) && (we = g);
  const Ae = {};
  we === "button" ? (Ae.type = D === void 0 ? "button" : D, Ae.disabled = u) : (!U.href && !U.to && (Ae.role = "button"), u && (Ae["aria-disabled"] = u));
  const ut = Tt(n, A), Ke = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: f,
    tabIndex: O,
    focusVisible: H
  }, Fe = ZP(Ke);
  return /* @__PURE__ */ S.jsxs(GP, {
    as: we,
    className: J(Fe.root, a),
    ownerState: Ke,
    onBlur: ae,
    onClick: x,
    onContextMenu: te,
    onFocus: Ne,
    onKeyDown: Ee,
    onKeyUp: rt,
    onMouseDown: se,
    onMouseLeave: Ve,
    onMouseUp: Te,
    onDragLeave: Se,
    onTouchEnd: pe,
    onTouchMove: be,
    onTouchStart: Ie,
    ref: ut,
    tabIndex: u ? -1 : O,
    type: D,
    ...Ae,
    ...U,
    children: [s, fe ? /* @__PURE__ */ S.jsx(KP, {
      ref: V,
      center: i,
      ...L
    }) : null]
  });
});
function Kr(e, t, n, r = !1) {
  return Uo((o) => (n && n(o), r || e[t](o), !0));
}
function XP(e) {
  return typeof e.main == "string";
}
function YP(e, t = []) {
  if (!XP(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Dr(e = []) {
  return ([, t]) => t && YP(t, e);
}
function JP(e) {
  return ke("MuiIconButton", e);
}
const eO = Pe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), tO = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, s = {
    root: ["root", n && "disabled", r !== "default" && `color${G(r)}`, o && `edge${G(o)}`, `size${G(i)}`]
  };
  return Oe(s, JP, t);
}, nO = q(tS, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${G(n.color)}`], n.edge && t[`edge${G(n.edge)}`], t[`size${G(n.size)}`]];
  }
})(Le(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Le(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Dr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Dr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${eO.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Bt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: c = "medium",
    ...d
  } = r, f = {
    ...r,
    edge: o,
    color: a,
    disabled: l,
    disableFocusRipple: u,
    size: c
  }, y = tO(f);
  return /* @__PURE__ */ S.jsx(nO, {
    className: J(y.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ...d,
    ownerState: f,
    children: i
  });
});
function rO(e) {
  return ke("MuiTypography", e);
}
Pe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const oO = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, iO = _P(), sO = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${G(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return Oe(a, rO, s);
}, aO = q("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${G(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Le(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([n, r]) => n !== "inherit" && r && typeof r == "object").map(([n, r]) => ({
      props: {
        variant: n
      },
      style: r
    })), ...Object.entries(e.palette).filter(Dr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${G(n)}`
      },
      style: {
        color: (e.vars || e).palette.text[n]
      }
    })), {
      props: ({
        ownerState: n
      }) => n.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), y0 = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, He = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = Ce({
    props: t,
    name: "MuiTypography"
  }), i = !oO[r], s = iO({
    ...o,
    ...i && {
      color: r
    }
  }), {
    align: a = "inherit",
    className: l,
    component: u,
    gutterBottom: c = !1,
    noWrap: d = !1,
    paragraph: f = !1,
    variant: y = "body1",
    variantMapping: g = y0,
    ...v
  } = s, x = {
    ...s,
    align: a,
    color: r,
    className: l,
    component: u,
    gutterBottom: c,
    noWrap: d,
    paragraph: f,
    variant: y,
    variantMapping: g
  }, m = u || (f ? "p" : g[y] || y0[y]) || "span", h = sO(x);
  return /* @__PURE__ */ S.jsx(aO, {
    as: m,
    ref: n,
    className: J(h.root, l),
    ...v,
    ownerState: x,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...v.style
    }
  });
});
var mn = "top", Xn = "bottom", Yn = "right", yn = "left", Xy = "auto", fu = [mn, Xn, Yn, yn], Ys = "start", Rl = "end", lO = "clippingParents", nS = "viewport", Oa = "popper", uO = "reference", g0 = /* @__PURE__ */ fu.reduce(function(e, t) {
  return e.concat([t + "-" + Ys, t + "-" + Rl]);
}, []), rS = /* @__PURE__ */ [].concat(fu, [Xy]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ys, t + "-" + Rl]);
}, []), cO = "beforeRead", dO = "read", fO = "afterRead", pO = "beforeMain", hO = "main", mO = "afterMain", yO = "beforeWrite", gO = "write", vO = "afterWrite", bO = [cO, dO, fO, pO, hO, mO, yO, gO, vO];
function zr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Oi(e) {
  var t = Mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Qn(e) {
  var t = Mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xO(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Qn(i) || !zr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function wO(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Qn(o) || !zr(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const SO = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xO,
  effect: wO,
  requires: ["computeStyles"]
};
function Lr(e) {
  return e.split("-")[0];
}
var wi = Math.max, ed = Math.min, Js = Math.round;
function Oh() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function oS() {
  return !/^((?!chrome|android).)*safari/i.test(Oh());
}
function ea(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Qn(e) && (o = e.offsetWidth > 0 && Js(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Js(r.height) / e.offsetHeight || 1);
  var s = Oi(e) ? Mn(e) : window, a = s.visualViewport, l = !oS() && n, u = (r.left + (l && a ? a.offsetLeft : 0)) / o, c = (r.top + (l && a ? a.offsetTop : 0)) / i, d = r.width / o, f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function Jy(e) {
  var t = ea(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function iS(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Yy(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function co(e) {
  return Mn(e).getComputedStyle(e);
}
function _O(e) {
  return ["table", "td", "th"].indexOf(zr(e)) >= 0;
}
function ei(e) {
  return ((Oi(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function af(e) {
  return zr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Yy(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ei(e)
  );
}
function v0(e) {
  return !Qn(e) || // https://github.com/popperjs/popper-core/issues/837
  co(e).position === "fixed" ? null : e.offsetParent;
}
function kO(e) {
  var t = /firefox/i.test(Oh()), n = /Trident/i.test(Oh());
  if (n && Qn(e)) {
    var r = co(e);
    if (r.position === "fixed")
      return null;
  }
  var o = af(e);
  for (Yy(o) && (o = o.host); Qn(o) && ["html", "body"].indexOf(zr(o)) < 0; ) {
    var i = co(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function pu(e) {
  for (var t = Mn(e), n = v0(e); n && _O(n) && co(n).position === "static"; )
    n = v0(n);
  return n && (zr(n) === "html" || zr(n) === "body" && co(n).position === "static") ? t : n || kO(e) || t;
}
function eg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function rl(e, t, n) {
  return wi(e, ed(t, n));
}
function CO(e, t, n) {
  var r = rl(e, t, n);
  return r > n ? n : r;
}
function sS() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function aS(e) {
  return Object.assign({}, sS(), e);
}
function lS(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var TO = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, aS(typeof t != "number" ? t : lS(t, fu));
};
function EO(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = Lr(n.placement), l = eg(a), u = [yn, Yn].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = TO(o.padding, n), f = Jy(i), y = l === "y" ? mn : yn, g = l === "y" ? Xn : Yn, v = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], x = s[l] - n.rects.reference[l], m = pu(i), h = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, p = v / 2 - x / 2, b = d[y], k = h - f[c] - d[g], C = h / 2 - f[c] / 2 + p, T = rl(b, C, k), E = l;
    n.modifiersData[r] = (t = {}, t[E] = T, t.centerOffset = T - C, t);
  }
}
function RO(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || iS(t.elements.popper, o) && (t.elements.arrow = o));
}
const PO = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: EO,
  effect: RO,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ta(e) {
  return e.split("-")[1];
}
var OO = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function MO(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Js(n * o) / o || 0,
    y: Js(r * o) / o || 0
  };
}
function b0(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, d = e.isFixed, f = s.x, y = f === void 0 ? 0 : f, g = s.y, v = g === void 0 ? 0 : g, x = typeof c == "function" ? c({
    x: y,
    y: v
  }) : {
    x: y,
    y: v
  };
  y = x.x, v = x.y;
  var m = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), p = yn, b = mn, k = window;
  if (u) {
    var C = pu(n), T = "clientHeight", E = "clientWidth";
    if (C === Mn(n) && (C = ei(n), co(C).position !== "static" && a === "absolute" && (T = "scrollHeight", E = "scrollWidth")), C = C, o === mn || (o === yn || o === Yn) && i === Rl) {
      b = Xn;
      var M = d && C === k && k.visualViewport ? k.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[T]
      );
      v -= M - r.height, v *= l ? 1 : -1;
    }
    if (o === yn || (o === mn || o === Xn) && i === Rl) {
      p = Yn;
      var w = d && C === k && k.visualViewport ? k.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[E]
      );
      y -= w - r.width, y *= l ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: a
  }, u && OO), j = c === !0 ? MO({
    x: y,
    y: v
  }, Mn(n)) : {
    x: y,
    y: v
  };
  if (y = j.x, v = j.y, l) {
    var O;
    return Object.assign({}, P, (O = {}, O[b] = h ? "0" : "", O[p] = m ? "0" : "", O.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", O));
  }
  return Object.assign({}, P, (t = {}, t[b] = h ? v + "px" : "", t[p] = m ? y + "px" : "", t.transform = "", t));
}
function IO(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = {
    placement: Lr(t.placement),
    variation: ta(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, b0(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, b0(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const AO = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: IO,
  data: {}
};
var Wu = {
  passive: !0
};
function $O(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = Mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Wu);
  }), a && l.addEventListener("resize", n.update, Wu), function() {
    i && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Wu);
    }), a && l.removeEventListener("resize", n.update, Wu);
  };
}
const jO = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $O,
  data: {}
};
var LO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yc(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return LO[t];
  });
}
var NO = {
  start: "end",
  end: "start"
};
function x0(e) {
  return e.replace(/start|end/g, function(t) {
    return NO[t];
  });
}
function tg(e) {
  var t = Mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ng(e) {
  return ea(ei(e)).left + tg(e).scrollLeft;
}
function FO(e, t) {
  var n = Mn(e), r = ei(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = oS();
    (u || !u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + ng(e),
    y: l
  };
}
function DO(e) {
  var t, n = ei(e), r = tg(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = wi(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wi(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + ng(e), l = -r.scrollTop;
  return co(o || n).direction === "rtl" && (a += wi(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function rg(e) {
  var t = co(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function uS(e) {
  return ["html", "body", "#document"].indexOf(zr(e)) >= 0 ? e.ownerDocument.body : Qn(e) && rg(e) ? e : uS(af(e));
}
function ol(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = uS(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Mn(r), s = o ? [i].concat(i.visualViewport || [], rg(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(ol(af(s)))
  );
}
function Mh(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zO(e, t) {
  var n = ea(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function w0(e, t, n) {
  return t === nS ? Mh(FO(e, n)) : Oi(t) ? zO(t, n) : Mh(DO(ei(e)));
}
function BO(e) {
  var t = ol(af(e)), n = ["absolute", "fixed"].indexOf(co(e).position) >= 0, r = n && Qn(e) ? pu(e) : e;
  return Oi(r) ? t.filter(function(o) {
    return Oi(o) && iS(o, r) && zr(o) !== "body";
  }) : [];
}
function UO(e, t, n, r) {
  var o = t === "clippingParents" ? BO(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, u) {
    var c = w0(e, u, r);
    return l.top = wi(c.top, l.top), l.right = ed(c.right, l.right), l.bottom = ed(c.bottom, l.bottom), l.left = wi(c.left, l.left), l;
  }, w0(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function cS(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Lr(r) : null, i = r ? ta(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case mn:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Xn:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Yn:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case yn:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? eg(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ys:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Rl:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Pl(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? lO : a, u = n.rootBoundary, c = u === void 0 ? nS : u, d = n.elementContext, f = d === void 0 ? Oa : d, y = n.altBoundary, g = y === void 0 ? !1 : y, v = n.padding, x = v === void 0 ? 0 : v, m = aS(typeof x != "number" ? x : lS(x, fu)), h = f === Oa ? uO : Oa, p = e.rects.popper, b = e.elements[g ? h : f], k = UO(Oi(b) ? b : b.contextElement || ei(e.elements.popper), l, c, s), C = ea(e.elements.reference), T = cS({
    reference: C,
    element: p,
    strategy: "absolute",
    placement: o
  }), E = Mh(Object.assign({}, p, T)), M = f === Oa ? E : C, w = {
    top: k.top - M.top + m.top,
    bottom: M.bottom - k.bottom + m.bottom,
    left: k.left - M.left + m.left,
    right: M.right - k.right + m.right
  }, P = e.modifiersData.offset;
  if (f === Oa && P) {
    var j = P[o];
    Object.keys(w).forEach(function(O) {
      var L = [Yn, Xn].indexOf(O) >= 0 ? 1 : -1, F = [mn, Xn].indexOf(O) >= 0 ? "y" : "x";
      w[O] += j[F] * L;
    });
  }
  return w;
}
function VO(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? rS : l, c = ta(r), d = c ? a ? g0 : g0.filter(function(g) {
    return ta(g) === c;
  }) : fu, f = d.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = d);
  var y = f.reduce(function(g, v) {
    return g[v] = Pl(e, {
      placement: v,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[Lr(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function WO(e) {
  if (Lr(e) === Xy)
    return [];
  var t = yc(e);
  return [x0(e), t, x0(t)];
}
function HO(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, d = n.rootBoundary, f = n.altBoundary, y = n.flipVariations, g = y === void 0 ? !0 : y, v = n.allowedAutoPlacements, x = t.options.placement, m = Lr(x), h = m === x, p = l || (h || !g ? [yc(x)] : WO(x)), b = [x].concat(p).reduce(function(se, te) {
      return se.concat(Lr(te) === Xy ? VO(t, {
        placement: te,
        boundary: c,
        rootBoundary: d,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : te);
    }, []), k = t.rects.reference, C = t.rects.popper, T = /* @__PURE__ */ new Map(), E = !0, M = b[0], w = 0; w < b.length; w++) {
      var P = b[w], j = Lr(P), O = ta(P) === Ys, L = [mn, Xn].indexOf(j) >= 0, F = L ? "width" : "height", D = Pl(t, {
        placement: P,
        boundary: c,
        rootBoundary: d,
        altBoundary: f,
        padding: u
      }), U = L ? O ? Yn : yn : O ? Xn : mn;
      k[F] > C[F] && (U = yc(U));
      var A = yc(U), N = [];
      if (i && N.push(D[j] <= 0), a && N.push(D[U] <= 0, D[A] <= 0), N.every(function(se) {
        return se;
      })) {
        M = P, E = !1;
        break;
      }
      T.set(P, N);
    }
    if (E)
      for (var V = g ? 3 : 1, H = function(te) {
        var Se = b.find(function(Te) {
          var Ve = T.get(Te);
          if (Ve)
            return Ve.slice(0, te).every(function(Ie) {
              return Ie;
            });
        });
        if (Se)
          return M = Se, "break";
      }, ee = V; ee > 0; ee--) {
        var fe = H(ee);
        if (fe === "break") break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const KO = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: HO,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function S0(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function _0(e) {
  return [mn, Yn, Xn, yn].some(function(t) {
    return e[t] >= 0;
  });
}
function QO(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Pl(t, {
    elementContext: "reference"
  }), a = Pl(t, {
    altBoundary: !0
  }), l = S0(s, r), u = S0(a, o, i), c = _0(l), d = _0(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const qO = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: QO
};
function ZO(e, t, n) {
  var r = Lr(e), o = [yn, mn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [yn, Yn].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function GO(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = rS.reduce(function(c, d) {
    return c[d] = ZO(d, t.rects, i), c;
  }, {}), a = s[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const XO = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GO
};
function YO(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = cS({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const JO = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: YO,
  data: {}
};
function eM(e) {
  return e === "x" ? "y" : "x";
}
function tM(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, d = n.padding, f = n.tether, y = f === void 0 ? !0 : f, g = n.tetherOffset, v = g === void 0 ? 0 : g, x = Pl(t, {
    boundary: l,
    rootBoundary: u,
    padding: d,
    altBoundary: c
  }), m = Lr(t.placement), h = ta(t.placement), p = !h, b = eg(m), k = eM(b), C = t.modifiersData.popperOffsets, T = t.rects.reference, E = t.rects.popper, M = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, w = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (C) {
    if (i) {
      var O, L = b === "y" ? mn : yn, F = b === "y" ? Xn : Yn, D = b === "y" ? "height" : "width", U = C[b], A = U + x[L], N = U - x[F], V = y ? -E[D] / 2 : 0, H = h === Ys ? T[D] : E[D], ee = h === Ys ? -E[D] : -T[D], fe = t.elements.arrow, se = y && fe ? Jy(fe) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sS(), Se = te[L], Te = te[F], Ve = rl(0, T[D], se[D]), Ie = p ? T[D] / 2 - V - Ve - Se - w.mainAxis : H - Ve - Se - w.mainAxis, pe = p ? -T[D] / 2 + V + Ve + Te + w.mainAxis : ee + Ve + Te + w.mainAxis, be = t.elements.arrow && pu(t.elements.arrow), ae = be ? b === "y" ? be.clientTop || 0 : be.clientLeft || 0 : 0, Ne = (O = P == null ? void 0 : P[b]) != null ? O : 0, de = U + Ie - Ne - ae, Ee = U + pe - Ne, rt = rl(y ? ed(A, de) : A, U, y ? wi(N, Ee) : N);
      C[b] = rt, j[b] = rt - U;
    }
    if (a) {
      var we, Ae = b === "x" ? mn : yn, ut = b === "x" ? Xn : Yn, Ke = C[k], Fe = k === "y" ? "height" : "width", X = Ke + x[Ae], Qt = Ke - x[ut], ot = [mn, yn].indexOf(m) !== -1, sn = (we = P == null ? void 0 : P[k]) != null ? we : 0, bn = ot ? X : Ke - T[Fe] - E[Fe] - sn + w.altAxis, We = ot ? Ke + T[Fe] + E[Fe] - sn - w.altAxis : Qt, Ze = y && ot ? CO(bn, Ke, We) : rl(y ? bn : X, Ke, y ? We : Qt);
      C[k] = Ze, j[k] = Ze - Ke;
    }
    t.modifiersData[r] = j;
  }
}
const nM = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tM,
  requiresIfExists: ["offset"]
};
function rM(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function oM(e) {
  return e === Mn(e) || !Qn(e) ? tg(e) : rM(e);
}
function iM(e) {
  var t = e.getBoundingClientRect(), n = Js(t.width) / e.offsetWidth || 1, r = Js(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sM(e, t, n) {
  n === void 0 && (n = !1);
  var r = Qn(t), o = Qn(t) && iM(t), i = ei(t), s = ea(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((zr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rg(i)) && (a = oM(t)), Qn(t) ? (l = ea(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = ng(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function aM(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function lM(e) {
  var t = aM(e);
  return bO.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function uM(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function cM(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var k0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function C0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function dM(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? k0 : o;
  return function(a, l, u) {
    u === void 0 && (u = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, k0, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, y = {
      state: c,
      setOptions: function(m) {
        var h = typeof m == "function" ? m(c.options) : m;
        v(), c.options = Object.assign({}, i, c.options, h), c.scrollParents = {
          reference: Oi(a) ? ol(a) : a.contextElement ? ol(a.contextElement) : [],
          popper: ol(l)
        };
        var p = lM(cM([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = p.filter(function(b) {
          return b.enabled;
        }), g(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var m = c.elements, h = m.reference, p = m.popper;
          if (C0(h, p)) {
            c.rects = {
              reference: sM(h, pu(p), c.options.strategy === "fixed"),
              popper: Jy(p)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(w) {
              return c.modifiersData[w.name] = Object.assign({}, w.data);
            });
            for (var b = 0; b < c.orderedModifiers.length; b++) {
              if (c.reset === !0) {
                c.reset = !1, b = -1;
                continue;
              }
              var k = c.orderedModifiers[b], C = k.fn, T = k.options, E = T === void 0 ? {} : T, M = k.name;
              typeof C == "function" && (c = C({
                state: c,
                options: E,
                name: M,
                instance: y
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uM(function() {
        return new Promise(function(x) {
          y.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        v(), f = !0;
      }
    };
    if (!C0(a, l))
      return y;
    y.setOptions(u).then(function(x) {
      !f && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function g() {
      c.orderedModifiers.forEach(function(x) {
        var m = x.name, h = x.options, p = h === void 0 ? {} : h, b = x.effect;
        if (typeof b == "function") {
          var k = b({
            state: c,
            name: m,
            instance: y,
            options: p
          }), C = function() {
          };
          d.push(k || C);
        }
      });
    }
    function v() {
      d.forEach(function(x) {
        return x();
      }), d = [];
    }
    return y;
  };
}
var fM = [jO, JO, AO, SO, XO, KO, nM, PO, qO], pM = /* @__PURE__ */ dM({
  defaultModifiers: fM
});
function hM(e) {
  return typeof e == "function" ? e() : e;
}
const dS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = _.useState(null), l = Tt(/* @__PURE__ */ _.isValidElement(r) ? pa(r) : null, n);
  if (Fr(() => {
    i || a(hM(o) || document.body);
  }, [o, i]), Fr(() => {
    if (s && !i)
      return wh(n, s), () => {
        wh(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ _.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ _.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ Sy.createPortal(r, s);
});
function mM(e) {
  return ke("MuiPopper", e);
}
Pe("MuiPopper", ["root"]);
function yM(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Ih(e) {
  return typeof e == "function" ? e() : e;
}
function gM(e) {
  return e.nodeType !== void 0;
}
const vM = (e) => {
  const {
    classes: t
  } = e;
  return Oe({
    root: ["root"]
  }, mM, t);
}, bM = {}, xM = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: l,
    placement: u,
    popperOptions: c,
    popperRef: d,
    slotProps: f = {},
    slots: y = {},
    TransitionProps: g,
    // @ts-ignore internal logic
    ownerState: v,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...x
  } = t, m = _.useRef(null), h = Tt(m, n), p = _.useRef(null), b = Tt(p, d), k = _.useRef(b);
  Fr(() => {
    k.current = b;
  }, [b]), _.useImperativeHandle(d, () => p.current, []);
  const C = yM(u, i), [T, E] = _.useState(C), [M, w] = _.useState(Ih(r));
  _.useEffect(() => {
    p.current && p.current.forceUpdate();
  }), _.useEffect(() => {
    r && w(Ih(r));
  }, [r]), Fr(() => {
    if (!M || !l)
      return;
    const F = (A) => {
      E(A.placement);
    };
    let D = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: A
      }) => {
        F(A);
      }
    }];
    a != null && (D = D.concat(a)), c && c.modifiers != null && (D = D.concat(c.modifiers));
    const U = pM(M, m.current, {
      placement: C,
      ...c,
      modifiers: D
    });
    return k.current(U), () => {
      U.destroy(), k.current(null);
    };
  }, [M, s, a, l, c, C]);
  const P = {
    placement: T
  };
  g !== null && (P.TransitionProps = g);
  const j = vM(t), O = y.root ?? "div", L = _h({
    elementType: O,
    externalSlotProps: f.root,
    externalForwardedProps: x,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: j.root
  });
  return /* @__PURE__ */ S.jsx(O, {
    ...L,
    children: typeof o == "function" ? o(P) : o
  });
}), wM = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: c,
    placement: d = "bottom",
    popperOptions: f = bM,
    popperRef: y,
    style: g,
    transition: v = !1,
    slotProps: x = {},
    slots: m = {},
    ...h
  } = t, [p, b] = _.useState(!0), k = () => {
    b(!1);
  }, C = () => {
    b(!0);
  };
  if (!l && !c && (!v || p))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const w = Ih(r);
    T = w && gM(w) ? On(w).body : On(null).body;
  }
  const E = !c && l && (!v || p) ? "none" : void 0, M = v ? {
    in: c,
    onEnter: k,
    onExited: C
  } : void 0;
  return /* @__PURE__ */ S.jsx(dS, {
    disablePortal: a,
    container: T,
    children: /* @__PURE__ */ S.jsx(xM, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: u,
      ref: n,
      open: v ? !p : c,
      placement: d,
      popperOptions: f,
      popperRef: y,
      slotProps: x,
      slots: m,
      ...h,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E,
        ...g
      },
      TransitionProps: M,
      children: o
    })
  });
}), SM = q(wM, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), fS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Vy(), o = Ce({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: a,
    componentsProps: l,
    container: u,
    disablePortal: c,
    keepMounted: d,
    modifiers: f,
    open: y,
    placement: g,
    popperOptions: v,
    popperRef: x,
    transition: m,
    slots: h,
    slotProps: p,
    ...b
  } = o, k = (h == null ? void 0 : h.root) ?? (a == null ? void 0 : a.Root), C = {
    anchorEl: i,
    container: u,
    disablePortal: c,
    keepMounted: d,
    modifiers: f,
    open: y,
    placement: g,
    popperOptions: v,
    popperRef: x,
    transition: m,
    ...b
  };
  return /* @__PURE__ */ S.jsx(SM, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: {
      root: k
    },
    slotProps: p ?? l,
    ...C,
    ref: n
  });
});
function Hu(e) {
  return parseInt(e, 10) || 0;
}
const _M = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function kM(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const CM = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: a,
    ...l
  } = t, {
    current: u
  } = _.useRef(a != null), c = _.useRef(null), d = Tt(n, c), f = _.useRef(null), y = _.useRef(null), g = _.useCallback(() => {
    const m = c.current, p = uo(m).getComputedStyle(m);
    if (p.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const b = y.current;
    b.style.width = p.width, b.value = m.value || t.placeholder || "x", b.value.slice(-1) === `
` && (b.value += " ");
    const k = p.boxSizing, C = Hu(p.paddingBottom) + Hu(p.paddingTop), T = Hu(p.borderBottomWidth) + Hu(p.borderTopWidth), E = b.scrollHeight;
    b.value = "x";
    const M = b.scrollHeight;
    let w = E;
    i && (w = Math.max(Number(i) * M, w)), o && (w = Math.min(Number(o) * M, w)), w = Math.max(w, M);
    const P = w + (k === "border-box" ? C + T : 0), j = Math.abs(w - E) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: j
    };
  }, [o, i, t.placeholder]), v = _.useCallback(() => {
    const m = g();
    if (kM(m))
      return;
    const h = m.outerHeightStyle, p = c.current;
    f.current !== h && (f.current = h, p.style.height = `${h}px`), p.style.overflow = m.overflowing ? "hidden" : "";
  }, [g]);
  Fr(() => {
    const m = () => {
      v();
    };
    let h;
    const p = Aw(m), b = c.current, k = uo(b);
    k.addEventListener("resize", p);
    let C;
    return typeof ResizeObserver < "u" && (C = new ResizeObserver(m), C.observe(b)), () => {
      p.clear(), cancelAnimationFrame(h), k.removeEventListener("resize", p), C && C.disconnect();
    };
  }, [g, v]), Fr(() => {
    v();
  });
  const x = (m) => {
    u || v(), r && r(m);
  };
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", {
      value: a,
      onChange: x,
      ref: d,
      rows: i,
      style: s,
      ...l
    }), /* @__PURE__ */ S.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: {
        ..._M.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function Ah(e) {
  return typeof e == "string";
}
function ma({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const lf = /* @__PURE__ */ _.createContext(void 0);
function Ui() {
  return _.useContext(lf);
}
function T0(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function td(e, t = !1) {
  return e && (T0(e.value) && e.value !== "" || t && T0(e.defaultValue) && e.defaultValue !== "");
}
function TM(e) {
  return e.startAdornment;
}
function EM(e) {
  return ke("MuiInputBase", e);
}
const na = Pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var E0;
const uf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${G(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, cf = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, RM = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: a,
    fullWidth: l,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: f,
    startAdornment: y,
    type: g
  } = e, v = {
    root: ["root", `color${G(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", f && f !== "medium" && `size${G(f)}`, c && "multiline", y && "adornedStart", i && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", c && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", i && "inputAdornedEnd", d && "readOnly"]
  };
  return Oe(v, EM, t);
}, df = q("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: uf
})(Le(({
  theme: e
}) => ({
  ...e.typography.body1,
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${na.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: t,
      size: n
    }) => t.multiline && n === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), ff = q("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: cf
})(Le(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }, r = {
    opacity: "0 !important"
  }, o = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: t ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": n,
    "&::-moz-placeholder": n,
    // Firefox 19+
    "&::-ms-input-placeholder": n,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${na.formControl} &`]: {
      "&::-webkit-input-placeholder": r,
      "&::-moz-placeholder": r,
      // Firefox 19+
      "&::-ms-input-placeholder": r,
      // Edge
      "&:focus::-webkit-input-placeholder": o,
      "&:focus::-moz-placeholder": o,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": o
      // Edge
    },
    [`&.${na.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: i
      }) => !i.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), R0 = qy({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), og = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: i,
    autoFocus: s,
    className: a,
    color: l,
    components: u = {},
    componentsProps: c = {},
    defaultValue: d,
    disabled: f,
    disableInjectingGlobalStyles: y,
    endAdornment: g,
    error: v,
    fullWidth: x = !1,
    id: m,
    inputComponent: h = "input",
    inputProps: p = {},
    inputRef: b,
    margin: k,
    maxRows: C,
    minRows: T,
    multiline: E = !1,
    name: M,
    onBlur: w,
    onChange: P,
    onClick: j,
    onFocus: O,
    onKeyDown: L,
    onKeyUp: F,
    placeholder: D,
    readOnly: U,
    renderSuffix: A,
    rows: N,
    size: V,
    slotProps: H = {},
    slots: ee = {},
    startAdornment: fe,
    type: se = "text",
    value: te,
    ...Se
  } = r, Te = p.value != null ? p.value : te, {
    current: Ve
  } = _.useRef(Te != null), Ie = _.useRef(), pe = _.useCallback((ue) => {
  }, []), be = Tt(Ie, b, p.ref, pe), [ae, Ne] = _.useState(!1), de = Ui(), Ee = ma({
    props: r,
    muiFormControl: de,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  Ee.focused = de ? de.focused : ae, _.useEffect(() => {
    !de && f && ae && (Ne(!1), w && w());
  }, [de, f, ae, w]);
  const rt = de && de.onFilled, we = de && de.onEmpty, Ae = _.useCallback((ue) => {
    td(ue) ? rt && rt() : we && we();
  }, [rt, we]);
  Fr(() => {
    Ve && Ae({
      value: Te
    });
  }, [Te, Ae, Ve]);
  const ut = (ue) => {
    O && O(ue), p.onFocus && p.onFocus(ue), de && de.onFocus ? de.onFocus(ue) : Ne(!0);
  }, Ke = (ue) => {
    w && w(ue), p.onBlur && p.onBlur(ue), de && de.onBlur ? de.onBlur(ue) : Ne(!1);
  }, Fe = (ue, ...ct) => {
    if (!Ve) {
      const xn = ue.target || Ie.current;
      if (xn == null)
        throw new Error(lo(1));
      Ae({
        value: xn.value
      });
    }
    p.onChange && p.onChange(ue, ...ct), P && P(ue, ...ct);
  };
  _.useEffect(() => {
    Ae(Ie.current);
  }, []);
  const X = (ue) => {
    Ie.current && ue.currentTarget === ue.target && Ie.current.focus(), j && j(ue);
  };
  let Qt = h, ot = p;
  E && Qt === "input" && (N ? ot = {
    type: void 0,
    minRows: N,
    maxRows: N,
    ...ot
  } : ot = {
    type: void 0,
    maxRows: C,
    minRows: T,
    ...ot
  }, Qt = CM);
  const sn = (ue) => {
    Ae(ue.animationName === "mui-auto-fill-cancel" ? Ie.current : {
      value: "x"
    });
  };
  _.useEffect(() => {
    de && de.setAdornedStart(!!fe);
  }, [de, fe]);
  const bn = {
    ...r,
    color: Ee.color || "primary",
    disabled: Ee.disabled,
    endAdornment: g,
    error: Ee.error,
    focused: Ee.focused,
    formControl: de,
    fullWidth: x,
    hiddenLabel: Ee.hiddenLabel,
    multiline: E,
    size: Ee.size,
    startAdornment: fe,
    type: se
  }, We = RM(bn), Ze = ee.root || u.Root || df, Ge = H.root || c.root || {}, Mt = ee.input || u.Input || ff;
  return ot = {
    ...ot,
    ...H.input ?? c.input
  }, /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [!y && typeof R0 == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (E0 || (E0 = /* @__PURE__ */ S.jsx(R0, {}))), /* @__PURE__ */ S.jsxs(Ze, {
      ...Ge,
      ref: n,
      onClick: X,
      ...Se,
      ...!Ah(Ze) && {
        ownerState: {
          ...bn,
          ...Ge.ownerState
        }
      },
      className: J(We.root, Ge.className, a, U && "MuiInputBase-readOnly"),
      children: [fe, /* @__PURE__ */ S.jsx(lf.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(Mt, {
          "aria-invalid": Ee.error,
          "aria-describedby": o,
          autoComplete: i,
          autoFocus: s,
          defaultValue: d,
          disabled: Ee.disabled,
          id: m,
          onAnimationStart: sn,
          name: M,
          placeholder: D,
          readOnly: U,
          required: Ee.required,
          rows: N,
          value: Te,
          onKeyDown: L,
          onKeyUp: F,
          type: se,
          ...ot,
          ...!Ah(Mt) && {
            as: Qt,
            ownerState: {
              ...bn,
              ...ot.ownerState
            }
          },
          ref: be,
          className: J(We.input, ot.className, U && "MuiInputBase-readOnly"),
          onBlur: Ke,
          onChange: Fe,
          onFocus: ut
        })
      }), g, A ? A({
        ...Ee,
        startAdornment: fe
      }) : null]
    })]
  });
});
function PM(e) {
  return ke("MuiInput", e);
}
const Ma = {
  ...na,
  ...Pe("MuiInput", ["root", "underline", "input"])
};
function OM(e) {
  return ke("MuiOutlinedInput", e);
}
const Sr = {
  ...na,
  ...Pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function MM(e) {
  return ke("MuiFilledInput", e);
}
const ti = {
  ...na,
  ...Pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, IM = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), AM = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, pS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Vr(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    easing: l,
    in: u,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: y,
    onExited: g,
    onExiting: v,
    style: x,
    timeout: m = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = Wr,
    ...p
  } = t, b = _.useRef(null), k = Tt(b, pa(a), n), C = (L) => (F) => {
    if (L) {
      const D = b.current;
      F === void 0 ? L(D) : L(D, F);
    }
  }, T = C(f), E = C((L, F) => {
    eS(L);
    const D = Yc({
      style: x,
      timeout: m,
      easing: l
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", D), L.style.transition = r.transitions.create("opacity", D), c && c(L, F);
  }), M = C(d), w = C(v), P = C((L) => {
    const F = Yc({
      style: x,
      timeout: m,
      easing: l
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", F), L.style.transition = r.transitions.create("opacity", F), y && y(L);
  }), j = C(g), O = (L) => {
    i && i(b.current, L);
  };
  return /* @__PURE__ */ S.jsx(h, {
    appear: s,
    in: u,
    nodeRef: b,
    onEnter: E,
    onEntered: M,
    onEntering: T,
    onExit: P,
    onExited: j,
    onExiting: w,
    addEndListener: O,
    timeout: m,
    ...p,
    children: (L, {
      ownerState: F,
      ...D
    }) => /* @__PURE__ */ _.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0,
        ...AM[L],
        ...x,
        ...a.props.style
      },
      ref: k,
      ...D
    })
  });
});
function $M(e) {
  return ke("MuiBackdrop", e);
}
Pe("MuiBackdrop", ["root", "invisible"]);
const jM = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Oe({
    root: ["root", n && "invisible"]
  }, $M, t);
}, LM = q("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), hS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: l,
    components: u = {},
    componentsProps: c = {},
    slotProps: d = {},
    slots: f = {},
    TransitionComponent: y,
    transitionDuration: g,
    ...v
  } = r, x = {
    ...r,
    component: s,
    invisible: a
  }, m = jM(x), h = {
    transition: y,
    root: u.Root,
    ...f
  }, p = {
    ...c,
    ...d
  }, b = {
    slots: h,
    slotProps: p
  }, [k, C] = Jt("root", {
    elementType: LM,
    externalForwardedProps: b,
    className: J(m.root, i),
    ownerState: x
  }), [T, E] = Jt("transition", {
    elementType: pS,
    externalForwardedProps: b,
    ownerState: x
  });
  return /* @__PURE__ */ S.jsx(T, {
    in: l,
    timeout: g,
    ...v,
    ...E,
    children: /* @__PURE__ */ S.jsx(k, {
      "aria-hidden": !0,
      ...C,
      classes: m,
      ref: n,
      children: o
    })
  });
}), NM = Pe("MuiBox", ["root"]), FM = sf(), tt = A2({
  themeId: fr,
  defaultTheme: FM,
  defaultClassName: NM.root,
  generateClassName: _w.generate
});
function DM(e) {
  return ke("MuiButton", e);
}
const Gi = Pe("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), mS = /* @__PURE__ */ _.createContext({}), zM = /* @__PURE__ */ _.createContext(void 0), BM = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${G(t)}`, `size${G(o)}`, `${i}Size${G(o)}`, `color${G(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${G(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${G(o)}`]
  }, l = Oe(a, DM, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, yS = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], UM = q(tS, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${G(n.color)}`], t[`size${G(n.size)}`], t[`${n.variant}Size${G(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(Le(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Gi.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Gi.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Gi.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Gi.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Dr()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Ut(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette[r].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ut(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Gi.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Gi.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), VM = q("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${G(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...yS]
}), WM = q("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${G(n.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...yS]
}), Yi = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = _.useContext(mS), o = _.useContext(zM), i = Gs(r, t), s = Ce({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: u = "button",
    className: c,
    disabled: d = !1,
    disableElevation: f = !1,
    disableFocusRipple: y = !1,
    endIcon: g,
    focusVisibleClassName: v,
    fullWidth: x = !1,
    size: m = "medium",
    startIcon: h,
    type: p,
    variant: b = "text",
    ...k
  } = s, C = {
    ...s,
    color: l,
    component: u,
    disabled: d,
    disableElevation: f,
    disableFocusRipple: y,
    fullWidth: x,
    size: m,
    type: p,
    variant: b
  }, T = BM(C), E = h && /* @__PURE__ */ S.jsx(VM, {
    className: T.startIcon,
    ownerState: C,
    children: h
  }), M = g && /* @__PURE__ */ S.jsx(WM, {
    className: T.endIcon,
    ownerState: C,
    children: g
  }), w = o || "";
  return /* @__PURE__ */ S.jsxs(UM, {
    ownerState: C,
    className: J(r.className, T.root, c, w),
    component: u,
    disabled: d,
    focusRipple: !y,
    focusVisibleClassName: J(T.focusVisible, v),
    ref: n,
    type: p,
    ...k,
    classes: T,
    children: [E, a, M]
  });
});
function HM(e) {
  return ke("MuiCircularProgress", e);
}
Pe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const yo = 44, $h = su`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, jh = su`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`, KM = typeof $h != "string" ? $y`
        animation: ${$h} 1.4s linear infinite;
      ` : null, QM = typeof jh != "string" ? $y`
        animation: ${jh} 1.4s ease-in-out infinite;
      ` : null, qM = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${G(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${G(n)}`, o && "circleDisableShrink"]
  };
  return Oe(i, HM, t);
}, ZM = q("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${G(n.color)}`]];
  }
})(Le(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: KM || {
      animation: `${$h} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Dr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), GM = q("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), XM = q("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${G(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Le(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: QM || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${jh} 1.4s ease-in-out infinite`
    }
  }]
}))), YM = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    size: a = 40,
    style: l,
    thickness: u = 3.6,
    value: c = 0,
    variant: d = "indeterminate",
    ...f
  } = r, y = {
    ...r,
    color: i,
    disableShrink: s,
    size: a,
    thickness: u,
    value: c,
    variant: d
  }, g = qM(y), v = {}, x = {}, m = {};
  if (d === "determinate") {
    const h = 2 * Math.PI * ((yo - u) / 2);
    v.strokeDasharray = h.toFixed(3), m["aria-valuenow"] = Math.round(c), v.strokeDashoffset = `${((100 - c) / 100 * h).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ S.jsx(ZM, {
    className: J(g.root, o),
    style: {
      width: a,
      height: a,
      ...x,
      ...l
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...m,
    ...f,
    children: /* @__PURE__ */ S.jsx(GM, {
      className: g.svg,
      ownerState: y,
      viewBox: `${yo / 2} ${yo / 2} ${yo} ${yo}`,
      children: /* @__PURE__ */ S.jsx(XM, {
        className: g.circle,
        style: v,
        ownerState: y,
        cx: yo,
        cy: yo,
        r: (yo - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
}), Lh = typeof qy({}) == "function", JM = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), e5 = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), gS = (e, t = !1) => {
  var i, s;
  const n = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([a, l]) => {
    var c, d;
    const u = e.getColorSchemeSelector(a);
    u.startsWith("@") ? n[u] = {
      ":root": {
        colorScheme: (c = l.palette) == null ? void 0 : c.mode
      }
    } : n[u.replace(/\s*&/, "")] = {
      colorScheme: (d = l.palette) == null ? void 0 : d.mode
    };
  });
  let r = {
    html: JM(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...e5(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const o = (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
  return o && (r = [r, o]), r;
}, gc = "mui-ecs", t5 = (e) => {
  const t = gS(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${gc})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var s, a;
    const i = e.getColorSchemeSelector(r);
    i.startsWith("@") ? n[i] = {
      [`:root:not(:has(.${gc}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : n[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${gc}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, n5 = qy(Lh ? ({
  theme: e,
  enableColorScheme: t
}) => gS(e, t) : ({
  theme: e
}) => t5(e));
function r5(e) {
  const t = Ce({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [Lh && /* @__PURE__ */ S.jsx(n5, {
      enableColorScheme: r
    }), !Lh && !r && /* @__PURE__ */ S.jsx("span", {
      className: gc,
      style: {
        display: "none"
      }
    }), n]
  });
}
function o5(e) {
  const t = On(e);
  return t.body === e ? uo(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function il(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function P0(e) {
  return parseInt(uo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function i5(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function O0(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), l = !i5(s);
    a && l && il(s, o);
  });
}
function lp(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function s5(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (o5(r)) {
      const s = jw(uo(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${P0(r) + s}px`;
      const a = On(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${P0(l) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = On(r).body;
    else {
      const s = r.parentElement, a = uo(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function a5(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class l5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && il(t.modalRef, !1);
    const o = a5(n);
    O0(n, t.mount, t.modalRef, o, !0);
    const i = lp(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = lp(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = s5(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = lp(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && il(t.modalRef, n), O0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && il(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const u5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function c5(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function d5(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function f5(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || d5(e));
}
function p5(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(u5)).forEach((r, o) => {
    const i = c5(r);
    i === -1 || !f5(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function h5() {
  return !0;
}
function m5(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = p5,
    isEnabled: s = h5,
    open: a
  } = e, l = _.useRef(!1), u = _.useRef(null), c = _.useRef(null), d = _.useRef(null), f = _.useRef(null), y = _.useRef(!1), g = _.useRef(null), v = Tt(pa(t), g), x = _.useRef(null);
  _.useEffect(() => {
    !a || !g.current || (y.current = !n);
  }, [n, a]), _.useEffect(() => {
    if (!a || !g.current)
      return;
    const p = On(g.current);
    return g.current.contains(p.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), y.current && g.current.focus()), () => {
      o || (d.current && d.current.focus && (l.current = !0, d.current.focus()), d.current = null);
    };
  }, [a]), _.useEffect(() => {
    if (!a || !g.current)
      return;
    const p = On(g.current), b = (T) => {
      x.current = T, !(r || !s() || T.key !== "Tab") && p.activeElement === g.current && T.shiftKey && (l.current = !0, c.current && c.current.focus());
    }, k = () => {
      var M, w;
      const T = g.current;
      if (T === null)
        return;
      if (!p.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (T.contains(p.activeElement) || r && p.activeElement !== u.current && p.activeElement !== c.current)
        return;
      if (p.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!y.current)
        return;
      let E = [];
      if ((p.activeElement === u.current || p.activeElement === c.current) && (E = i(g.current)), E.length > 0) {
        const P = !!((M = x.current) != null && M.shiftKey && ((w = x.current) == null ? void 0 : w.key) === "Tab"), j = E[0], O = E[E.length - 1];
        typeof j != "string" && typeof O != "string" && (P ? O.focus() : j.focus());
      } else
        T.focus();
    };
    p.addEventListener("focusin", k), p.addEventListener("keydown", b, !0);
    const C = setInterval(() => {
      p.activeElement && p.activeElement.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(C), p.removeEventListener("focusin", k), p.removeEventListener("keydown", b, !0);
    };
  }, [n, r, o, s, a, i]);
  const m = (p) => {
    d.current === null && (d.current = p.relatedTarget), y.current = !0, f.current = p.target;
    const b = t.props.onFocus;
    b && b(p);
  }, h = (p) => {
    d.current === null && (d.current = p.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ _.cloneElement(t, {
      ref: v,
      onFocus: m
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function y5(e) {
  return typeof e == "function" ? e() : e;
}
function g5(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const M0 = () => {
}, Ku = new l5();
function v5(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: a,
    onClose: l,
    open: u,
    rootRef: c
  } = e, d = _.useRef({}), f = _.useRef(null), y = _.useRef(null), g = Tt(y, c), [v, x] = _.useState(!u), m = g5(a);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const p = () => On(f.current), b = () => (d.current.modalRef = y.current, d.current.mount = f.current, d.current), k = () => {
    Ku.mount(b(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, C = Uo(() => {
    const F = y5(t) || p().body;
    Ku.add(b(), F), y.current && k();
  }), T = () => Ku.isTopModal(b()), E = Uo((F) => {
    f.current = F, F && (u && T() ? k() : y.current && il(y.current, h));
  }), M = _.useCallback(() => {
    Ku.remove(b(), h);
  }, [h]);
  _.useEffect(() => () => {
    M();
  }, [M]), _.useEffect(() => {
    u ? C() : (!m || !o) && M();
  }, [u, M, m, o, C]);
  const w = (F) => (D) => {
    var U;
    (U = F.onKeyDown) == null || U.call(F, D), !(D.key !== "Escape" || D.which === 229 || // Wait until IME is settled.
    !T()) && (n || (D.stopPropagation(), l && l(D, "escapeKeyDown")));
  }, P = (F) => (D) => {
    var U;
    (U = F.onClick) == null || U.call(F, D), D.target === D.currentTarget && l && l(D, "backdropClick");
  };
  return {
    getRootProps: (F = {}) => {
      const D = Nw(e);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const U = {
        ...D,
        ...F
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...U,
        onKeyDown: w(U),
        ref: g
      };
    },
    getBackdropProps: (F = {}) => {
      const D = F;
      return {
        "aria-hidden": !0,
        ...D,
        onClick: P(D),
        open: u
      };
    },
    getTransitionProps: () => {
      const F = () => {
        x(!1), i && i();
      }, D = () => {
        x(!0), s && s(), o && M();
      };
      return {
        onEnter: Xv(F, (a == null ? void 0 : a.props.onEnter) ?? M0),
        onExited: Xv(D, (a == null ? void 0 : a.props.onExited) ?? M0)
      };
    },
    rootRef: g,
    portalRef: E,
    isTopModal: T,
    exited: v,
    hasTransition: m
  };
}
function b5(e) {
  return ke("MuiModal", e);
}
Pe("MuiModal", ["root", "hidden", "backdrop"]);
const x5 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Oe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, b5, r);
}, w5 = q("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Le(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), S5 = q(hS, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), vS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = S5,
    BackdropProps: i,
    classes: s,
    className: a,
    closeAfterTransition: l = !1,
    children: u,
    container: c,
    component: d,
    components: f = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: x = !1,
    disablePortal: m = !1,
    disableRestoreFocus: h = !1,
    disableScrollLock: p = !1,
    hideBackdrop: b = !1,
    keepMounted: k = !1,
    onBackdropClick: C,
    onClose: T,
    onTransitionEnter: E,
    onTransitionExited: M,
    open: w,
    slotProps: P = {},
    slots: j = {},
    // eslint-disable-next-line react/prop-types
    theme: O,
    ...L
  } = r, F = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: g,
    disableEnforceFocus: v,
    disableEscapeKeyDown: x,
    disablePortal: m,
    disableRestoreFocus: h,
    disableScrollLock: p,
    hideBackdrop: b,
    keepMounted: k
  }, {
    getRootProps: D,
    getBackdropProps: U,
    getTransitionProps: A,
    portalRef: N,
    isTopModal: V,
    exited: H,
    hasTransition: ee
  } = v5({
    ...F,
    rootRef: n
  }), fe = {
    ...F,
    exited: H
  }, se = x5(fe), te = {};
  if (u.props.tabIndex === void 0 && (te.tabIndex = "-1"), ee) {
    const {
      onEnter: ae,
      onExited: Ne
    } = A();
    te.onEnter = ae, te.onExited = Ne;
  }
  const Se = {
    ...L,
    slots: {
      root: f.Root,
      backdrop: f.Backdrop,
      ...j
    },
    slotProps: {
      ...y,
      ...P
    }
  }, [Te, Ve] = Jt("root", {
    elementType: w5,
    externalForwardedProps: Se,
    getSlotProps: D,
    additionalProps: {
      ref: n,
      as: d
    },
    ownerState: fe,
    className: J(a, se == null ? void 0 : se.root, !fe.open && fe.exited && (se == null ? void 0 : se.hidden))
  }), [Ie, pe] = Jt("backdrop", {
    elementType: o,
    externalForwardedProps: Se,
    additionalProps: i,
    getSlotProps: (ae) => U({
      ...ae,
      onClick: (Ne) => {
        C && C(Ne), ae != null && ae.onClick && ae.onClick(Ne);
      }
    }),
    className: J(i == null ? void 0 : i.className, se == null ? void 0 : se.backdrop),
    ownerState: fe
  }), be = Tt(i == null ? void 0 : i.ref, pe.ref);
  return !k && !w && (!ee || H) ? null : /* @__PURE__ */ S.jsx(dS, {
    ref: N,
    container: c,
    disablePortal: m,
    children: /* @__PURE__ */ S.jsxs(Te, {
      ...Ve,
      children: [!b && o ? /* @__PURE__ */ S.jsx(Ie, {
        ...pe,
        ref: be
      }) : null, /* @__PURE__ */ S.jsx(m5, {
        disableEnforceFocus: v,
        disableAutoFocus: g,
        disableRestoreFocus: h,
        isEnabled: V,
        open: w,
        children: /* @__PURE__ */ _.cloneElement(u, te)
      })]
    })
  });
});
function _5(e) {
  return ke("MuiDialog", e);
}
const up = Pe("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), bS = /* @__PURE__ */ _.createContext({}), k5 = q(hS, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), C5 = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${G(n)}`],
    paper: ["paper", `paperScroll${G(n)}`, `paperWidth${G(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return Oe(s, _5, t);
}, T5 = q(vS, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), E5 = q("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${G(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), R5 = q(Vt, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${G(n.scroll)}`], t[`paperWidth${G(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Le(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${up.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${up.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${up.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), ps = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialog"
  }), o = Vr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": a,
    "aria-modal": l = !0,
    BackdropComponent: u,
    BackdropProps: c,
    children: d,
    className: f,
    disableEscapeKeyDown: y = !1,
    fullScreen: g = !1,
    fullWidth: v = !1,
    maxWidth: x = "sm",
    onBackdropClick: m,
    onClick: h,
    onClose: p,
    open: b,
    PaperComponent: k = Vt,
    PaperProps: C = {},
    scroll: T = "paper",
    TransitionComponent: E = pS,
    transitionDuration: M = i,
    TransitionProps: w,
    ...P
  } = r, j = {
    ...r,
    disableEscapeKeyDown: y,
    fullScreen: g,
    fullWidth: v,
    maxWidth: x,
    scroll: T
  }, O = C5(j), L = _.useRef(), F = (N) => {
    L.current = N.target === N.currentTarget;
  }, D = (N) => {
    h && h(N), L.current && (L.current = null, m && m(N), p && p(N, "backdropClick"));
  }, U = du(a), A = _.useMemo(() => ({
    titleId: U
  }), [U]);
  return /* @__PURE__ */ S.jsx(T5, {
    className: J(O.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: k5
    },
    componentsProps: {
      backdrop: {
        transitionDuration: M,
        as: u,
        ...c
      }
    },
    disableEscapeKeyDown: y,
    onClose: p,
    open: b,
    ref: n,
    onClick: D,
    ownerState: j,
    ...P,
    children: /* @__PURE__ */ S.jsx(E, {
      appear: !0,
      in: b,
      timeout: M,
      role: "presentation",
      ...w,
      children: /* @__PURE__ */ S.jsx(E5, {
        className: J(O.container),
        onMouseDown: F,
        ownerState: j,
        children: /* @__PURE__ */ S.jsx(R5, {
          as: k,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": U,
          "aria-modal": l,
          ...C,
          className: J(O.paper, C.className),
          ownerState: j,
          children: /* @__PURE__ */ S.jsx(bS.Provider, {
            value: A,
            children: d
          })
        })
      })
    })
  });
});
function P5(e) {
  return ke("MuiDialogActions", e);
}
Pe("MuiDialogActions", ["root", "spacing"]);
const O5 = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return Oe({
    root: ["root", !n && "spacing"]
  }, P5, t);
}, M5 = q("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), I0 = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, a = {
    ...r,
    disableSpacing: i
  }, l = O5(a);
  return /* @__PURE__ */ S.jsx(M5, {
    className: J(l.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
function I5(e) {
  return ke("MuiDialogContent", e);
}
Pe("MuiDialogContent", ["root", "dividers"]);
function A5(e) {
  return ke("MuiDialogTitle", e);
}
const $5 = Pe("MuiDialogTitle", ["root"]), j5 = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return Oe({
    root: ["root", n && "dividers"]
  }, I5, t);
}, L5 = q("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Le(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${$5.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), hs = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, a = {
    ...r,
    dividers: i
  }, l = j5(a);
  return /* @__PURE__ */ S.jsx(L5, {
    className: J(l.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
}), N5 = (e) => {
  const {
    classes: t
  } = e;
  return Oe({
    root: ["root"]
  }, A5, t);
}, F5 = q(He, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), ms = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, a = r, l = N5(a), {
    titleId: u = i
  } = _.useContext(bS);
  return /* @__PURE__ */ S.jsx(F5, {
    component: "h2",
    className: J(l.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), D5 = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: a
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${G(i)}`, s && "hiddenLabel", a && "multiline"],
    input: ["input"]
  }, u = Oe(l, MM, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, z5 = q(df, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...uf(e, t), !n.disableUnderline && t.underline];
  }
})(Le(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : o,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${ti.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${ti.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${ti.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ti.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${ti.disabled}, .${ti.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${ti.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Dr()).map(([s]) => {
      var a;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(a = (e.vars || e).palette[s]) == null ? void 0 : a.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: s
      }) => s.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: s,
        size: a
      }) => s.multiline && a === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: s
      }) => s.multiline && s.hiddenLabel && s.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), B5 = q(ff, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: cf
})(Le(({
  theme: e
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.hiddenLabel && t.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), ig = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: i = {},
    componentsProps: s,
    fullWidth: a = !1,
    hiddenLabel: l,
    // declare here to prevent spreading to DOM
    inputComponent: u = "input",
    multiline: c = !1,
    slotProps: d,
    slots: f = {},
    type: y = "text",
    ...g
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: a,
    inputComponent: u,
    multiline: c,
    type: y
  }, x = D5(r), m = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, h = d ?? s ? Pt(m, d ?? s) : m, p = f.root ?? i.Root ?? z5, b = f.input ?? i.Input ?? B5;
  return /* @__PURE__ */ S.jsx(og, {
    slots: {
      root: p,
      input: b
    },
    slotProps: h,
    fullWidth: a,
    inputComponent: u,
    multiline: c,
    ref: n,
    type: y,
    ...g,
    classes: x
  });
});
ig.muiName = "Input";
function U5(e) {
  return ke("MuiFormControl", e);
}
Pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const V5 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${G(n)}`, r && "fullWidth"]
  };
  return Oe(o, U5, t);
}, W5 = q("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${G(n.margin)}`], n.fullWidth && t.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), H5 = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: f = !1,
    margin: y = "none",
    required: g = !1,
    size: v = "medium",
    variant: x = "outlined",
    ...m
  } = r, h = {
    ...r,
    color: s,
    component: a,
    disabled: l,
    error: u,
    fullWidth: d,
    hiddenLabel: f,
    margin: y,
    required: g,
    size: v,
    variant: x
  }, p = V5(h), [b, k] = _.useState(() => {
    let O = !1;
    return o && _.Children.forEach(o, (L) => {
      if (!mc(L, ["Input", "Select"]))
        return;
      const F = mc(L, ["Select"]) ? L.props.input : L;
      F && TM(F.props) && (O = !0);
    }), O;
  }), [C, T] = _.useState(() => {
    let O = !1;
    return o && _.Children.forEach(o, (L) => {
      mc(L, ["Input", "Select"]) && (td(L.props, !0) || td(L.props.inputProps, !0)) && (O = !0);
    }), O;
  }), [E, M] = _.useState(!1);
  l && E && M(!1);
  const w = c !== void 0 && !l ? c : E;
  let P;
  _.useRef(!1);
  const j = _.useMemo(() => ({
    adornedStart: b,
    setAdornedStart: k,
    color: s,
    disabled: l,
    error: u,
    filled: C,
    focused: w,
    fullWidth: d,
    hiddenLabel: f,
    size: v,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      T(!1);
    },
    onFilled: () => {
      T(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: P,
    required: g,
    variant: x
  }), [b, s, l, u, C, w, d, f, P, g, v, x]);
  return /* @__PURE__ */ S.jsx(lf.Provider, {
    value: j,
    children: /* @__PURE__ */ S.jsx(W5, {
      as: a,
      ownerState: h,
      className: J(p.root, i),
      ref: n,
      ...m,
      children: o
    })
  });
});
function K5(e) {
  return ke("MuiFormHelperText", e);
}
const A0 = Pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var $0;
const Q5 = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: a,
    required: l
  } = e, u = {
    root: ["root", o && "disabled", i && "error", r && `size${G(r)}`, n && "contained", a && "focused", s && "filled", l && "required"]
  };
  return Oe(u, K5, t);
}, q5 = q("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${G(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Le(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${A0.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${A0.error}`]: {
    color: (e.vars || e).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: t
    }) => t.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), Z5 = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: a,
    error: l,
    filled: u,
    focused: c,
    margin: d,
    required: f,
    variant: y,
    ...g
  } = r, v = Ui(), x = ma({
    props: r,
    muiFormControl: v,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), m = {
    ...r,
    component: s,
    contained: x.variant === "filled" || x.variant === "outlined",
    variant: x.variant,
    size: x.size,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  };
  delete m.ownerState;
  const h = Q5(m);
  return /* @__PURE__ */ S.jsx(q5, {
    as: s,
    className: J(h.root, i),
    ref: n,
    ...g,
    ownerState: m,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      $0 || ($0 = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
});
function G5(e) {
  return ke("MuiFormLabel", e);
}
const sl = Pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), X5 = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${G(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return Oe(l, G5, t);
}, Y5 = q("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Le(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Dr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${sl.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${sl.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${sl.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), J5 = q("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Le(({
  theme: e
}) => ({
  [`&.${sl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), eI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: a = "label",
    disabled: l,
    error: u,
    filled: c,
    focused: d,
    required: f,
    ...y
  } = r, g = Ui(), v = ma({
    props: r,
    muiFormControl: g,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), x = {
    ...r,
    color: v.color || "primary",
    component: a,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, m = X5(x);
  return /* @__PURE__ */ S.jsxs(Y5, {
    as: a,
    ownerState: x,
    className: J(m.root, i),
    ref: n,
    ...y,
    children: [o, v.required && /* @__PURE__ */ S.jsxs(J5, {
      ownerState: x,
      "aria-hidden": !0,
      className: m.asterisk,
      children: [" ", "*"]
    })]
  });
}), Yt = LR({
  createStyledComponent: q("div", {
    name: "MuiGrid2",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.container && t.container];
    }
  }),
  componentName: "MuiGrid2",
  useThemeProps: (e) => Ce({
    props: e,
    name: "MuiGrid2"
  }),
  useTheme: Vr
});
function Nh(e) {
  return `scale(${e}, ${e ** 2})`;
}
const tI = {
  entering: {
    opacity: 1,
    transform: Nh(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, cp = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), nd = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: l,
    onEntered: u,
    onEntering: c,
    onExit: d,
    onExited: f,
    onExiting: y,
    style: g,
    timeout: v = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = Wr,
    ...m
  } = t, h = fs(), p = _.useRef(), b = Vr(), k = _.useRef(null), C = Tt(k, pa(i), n), T = (F) => (D) => {
    if (F) {
      const U = k.current;
      D === void 0 ? F(U) : F(U, D);
    }
  }, E = T(c), M = T((F, D) => {
    eS(F);
    const {
      duration: U,
      delay: A,
      easing: N
    } = Yc({
      style: g,
      timeout: v,
      easing: s
    }, {
      mode: "enter"
    });
    let V;
    v === "auto" ? (V = b.transitions.getAutoHeightDuration(F.clientHeight), p.current = V) : V = U, F.style.transition = [b.transitions.create("opacity", {
      duration: V,
      delay: A
    }), b.transitions.create("transform", {
      duration: cp ? V : V * 0.666,
      delay: A,
      easing: N
    })].join(","), l && l(F, D);
  }), w = T(u), P = T(y), j = T((F) => {
    const {
      duration: D,
      delay: U,
      easing: A
    } = Yc({
      style: g,
      timeout: v,
      easing: s
    }, {
      mode: "exit"
    });
    let N;
    v === "auto" ? (N = b.transitions.getAutoHeightDuration(F.clientHeight), p.current = N) : N = D, F.style.transition = [b.transitions.create("opacity", {
      duration: N,
      delay: U
    }), b.transitions.create("transform", {
      duration: cp ? N : N * 0.666,
      delay: cp ? U : U || N * 0.333,
      easing: A
    })].join(","), F.style.opacity = 0, F.style.transform = Nh(0.75), d && d(F);
  }), O = T(f), L = (F) => {
    v === "auto" && h.start(p.current || 0, F), r && r(k.current, F);
  };
  return /* @__PURE__ */ S.jsx(x, {
    appear: o,
    in: a,
    nodeRef: k,
    onEnter: M,
    onEntered: w,
    onEntering: E,
    onExit: j,
    onExited: O,
    onExiting: P,
    addEndListener: L,
    timeout: v === "auto" ? null : v,
    ...m,
    children: (F, {
      ownerState: D,
      ...U
    }) => /* @__PURE__ */ _.cloneElement(i, {
      style: {
        opacity: 0,
        transform: Nh(0.75),
        visibility: F === "exited" && !a ? "hidden" : void 0,
        ...tI[F],
        ...g,
        ...i.props.style
      },
      ref: C,
      ...U
    })
  });
});
nd && (nd.muiSupportAuto = !0);
const nI = H2({
  themeId: fr
}), rI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = Oe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, PM, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, oI = q(df, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...uf(e, t), !n.disableUnderline && t.underline];
  }
})(Le(({
  theme: e
}) => {
  let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: r
      }) => r.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: r
      }) => !r.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Ma.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Ma.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${n}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Ma.disabled}, .${Ma.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Ma.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Dr()).map(([r]) => ({
      props: {
        color: r,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    }))]
  };
})), iI = q(ff, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: cf
})({}), sg = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: i = {},
    componentsProps: s,
    fullWidth: a = !1,
    inputComponent: l = "input",
    multiline: u = !1,
    slotProps: c,
    slots: d = {},
    type: f = "text",
    ...y
  } = r, g = rI(r), x = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, m = c ?? s ? Pt(c ?? s, x) : x, h = d.root ?? i.Root ?? oI, p = d.input ?? i.Input ?? iI;
  return /* @__PURE__ */ S.jsx(og, {
    slots: {
      root: h,
      input: p
    },
    slotProps: m,
    fullWidth: a,
    inputComponent: l,
    multiline: u,
    ref: n,
    type: f,
    ...y,
    classes: g
  });
});
sg.muiName = "Input";
function sI(e) {
  return ke("MuiInputAdornment", e);
}
const j0 = Pe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var L0;
const aI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${G(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, lI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, a = {
    root: ["root", n && "disablePointerEvents", o && `position${G(o)}`, s, r && "hiddenLabel", i && `size${G(i)}`]
  };
  return Oe(a, sI, t);
}, uI = q("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: aI
})(Le(({
  theme: e
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${j0.positionStart}&:not(.${j0.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: !0
    },
    style: {
      pointerEvents: "none"
    }
  }]
}))), Fh = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: u,
    variant: c,
    ...d
  } = r, f = Ui() || {};
  let y = c;
  c && f.variant, y || (y = f.variant);
  const g = {
    ...r,
    hiddenLabel: f.hiddenLabel,
    size: f.size,
    disablePointerEvents: a,
    position: u,
    variant: y
  }, v = lI(g);
  return /* @__PURE__ */ S.jsx(lf.Provider, {
    value: null,
    children: /* @__PURE__ */ S.jsx(uI, {
      as: s,
      ownerState: g,
      className: J(v.root, i),
      ref: n,
      ...d,
      children: typeof o == "string" && !l ? /* @__PURE__ */ S.jsx(He, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ S.jsxs(_.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          L0 || (L0 = /* @__PURE__ */ S.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
});
function cI(e) {
  return ke("MuiInputLabel", e);
}
Pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const dI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${G(r)}`, s],
    asterisk: [a && "asterisk"]
  }, u = Oe(l, cI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, fI = q(eI, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${sl.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Le(({
  theme: e
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: t
    }) => t.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.disableAnimation,
    style: {
      transition: e.transitions.create(["color", "transform", "max-width"], {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "filled" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n,
      size: r
    }) => t === "filled" && n.shrink && r === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: t,
      ownerState: n
    }) => t === "outlined" && n.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), pI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: a,
    className: l,
    ...u
  } = r, c = Ui();
  let d = s;
  typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
  const f = ma({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), y = {
    ...r,
    disableAnimation: o,
    formControl: c,
    shrink: d,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, g = dI(y);
  return /* @__PURE__ */ S.jsx(fI, {
    "data-shrink": d,
    ref: n,
    className: J(g.root, l),
    ...u,
    ownerState: y,
    classes: g
  });
});
function hI(e) {
  return ke("MuiLink", e);
}
const mI = Pe("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), yI = ({
  theme: e,
  ownerState: t
}) => {
  const n = t.color, r = Zs(e, `palette.${n}`, !1) || t.color, o = Zs(e, `palette.${n}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : Ut(r, 0.4);
}, N0 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, gI = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: o
  } = e, i = {
    root: ["root", `underline${G(o)}`, n === "button" && "button", r && "focusVisible"]
  };
  return Oe(i, hI, t);
}, vI = q(He, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${G(n.underline)}`], n.component === "button" && t.button];
  }
})(Le(({
  theme: e
}) => ({
  variants: [{
    props: {
      underline: "none"
    },
    style: {
      textDecoration: "none"
    }
  }, {
    props: {
      underline: "hover"
    },
    style: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  }, {
    props: {
      underline: "always"
    },
    style: {
      textDecoration: "underline",
      "&:hover": {
        textDecorationColor: "inherit"
      }
    }
  }, {
    props: ({
      underline: t,
      ownerState: n
    }) => t === "always" && n.color !== "inherit",
    style: {
      textDecorationColor: "var(--Link-underlineColor)"
    }
  }, ...Object.entries(e.palette).filter(Dr()).map(([t]) => ({
    props: {
      underline: "always",
      color: t
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette[t].mainChannel} / 0.4)` : Ut(e.palette[t].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Ut(e.palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.secondaryChannel} / 0.4)` : Ut(e.palette.text.secondary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textDisabled"
    },
    style: {
      "--Link-underlineColor": (e.vars || e).palette.text.disabled
    }
  }, {
    props: {
      component: "button"
    },
    style: {
      position: "relative",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      // Reset
      WebkitAppearance: "none",
      // Reset
      "&::-moz-focus-inner": {
        borderStyle: "none"
        // Remove Firefox dotted outline.
      },
      [`&.${mI.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), xS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiLink"
  }), o = Vr(), {
    className: i,
    color: s = "primary",
    component: a = "a",
    onBlur: l,
    onFocus: u,
    TypographyClasses: c,
    underline: d = "always",
    variant: f = "inherit",
    sx: y,
    ...g
  } = r, [v, x] = _.useState(!1), m = (k) => {
    Xs(k.target) || x(!1), l && l(k);
  }, h = (k) => {
    Xs(k.target) && x(!0), u && u(k);
  }, p = {
    ...r,
    color: s,
    component: a,
    focusVisible: v,
    underline: d,
    variant: f
  }, b = gI(p);
  return /* @__PURE__ */ S.jsx(vI, {
    color: s,
    className: J(b.root, i),
    classes: c,
    component: a,
    onBlur: m,
    onFocus: h,
    ref: n,
    ownerState: p,
    variant: f,
    ...g,
    sx: [...N0[s] === void 0 ? [{
      color: s
    }] : [], ...Array.isArray(y) ? y : [y]],
    style: {
      ...g.style,
      ...d === "always" && s !== "inherit" && !N0[s] && {
        "--Link-underlineColor": yI({
          theme: o,
          ownerState: p
        })
      }
    }
  });
}), bI = /* @__PURE__ */ _.createContext({});
function xI(e) {
  return ke("MuiList", e);
}
Pe("MuiList", ["root", "padding", "dense", "subheader"]);
const wI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return Oe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, xI, t);
}, SI = q("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), _I = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: u,
    ...c
  } = r, d = _.useMemo(() => ({
    dense: a
  }), [a]), f = {
    ...r,
    component: s,
    dense: a,
    disablePadding: l
  }, y = wI(f);
  return /* @__PURE__ */ S.jsx(bI.Provider, {
    value: d,
    children: /* @__PURE__ */ S.jsxs(SI, {
      as: s,
      className: J(y.root, i),
      ref: n,
      ownerState: f,
      ...c,
      children: [u, o]
    })
  });
});
function dp(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function F0(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function wS(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function Ia(e, t, n, r, o, i) {
  let s = !1, a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !wS(a, i) || l)
      a = o(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const kI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu",
    ...f
  } = t, y = _.useRef(null), g = _.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Fr(() => {
    o && y.current.focus();
  }, [o]), _.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (p, {
      direction: b
    }) => {
      const k = !y.current.style.width;
      if (p.clientHeight < y.current.clientHeight && k) {
        const C = `${jw(uo(p))}px`;
        y.current.style[b === "rtl" ? "paddingLeft" : "paddingRight"] = C, y.current.style.width = `calc(100% + ${C})`;
      }
      return y.current;
    }
  }), []);
  const v = (p) => {
    const b = y.current, k = p.key;
    if (p.ctrlKey || p.metaKey || p.altKey) {
      c && c(p);
      return;
    }
    const T = On(b).activeElement;
    if (k === "ArrowDown")
      p.preventDefault(), Ia(b, T, u, l, dp);
    else if (k === "ArrowUp")
      p.preventDefault(), Ia(b, T, u, l, F0);
    else if (k === "Home")
      p.preventDefault(), Ia(b, null, u, l, dp);
    else if (k === "End")
      p.preventDefault(), Ia(b, null, u, l, F0);
    else if (k.length === 1) {
      const E = g.current, M = k.toLowerCase(), w = performance.now();
      E.keys.length > 0 && (w - E.lastTime > 500 ? (E.keys = [], E.repeating = !0, E.previousKeyMatched = !0) : E.repeating && M !== E.keys[0] && (E.repeating = !1)), E.lastTime = w, E.keys.push(M);
      const P = T && !E.repeating && wS(T, E);
      E.previousKeyMatched && (P || Ia(b, T, !1, l, dp, E)) ? p.preventDefault() : E.previousKeyMatched = !1;
    }
    c && c(p);
  }, x = Tt(y, n);
  let m = -1;
  _.Children.forEach(s, (p, b) => {
    if (!/* @__PURE__ */ _.isValidElement(p)) {
      m === b && (m += 1, m >= s.length && (m = -1));
      return;
    }
    p.props.disabled || (d === "selectedMenu" && p.props.selected || m === -1) && (m = b), m === b && (p.props.disabled || p.props.muiSkipListHighlight || p.type.muiSkipListHighlight) && (m += 1, m >= s.length && (m = -1));
  });
  const h = _.Children.map(s, (p, b) => {
    if (b === m) {
      const k = {};
      return i && (k.autoFocus = !0), p.props.tabIndex === void 0 && d === "selectedMenu" && (k.tabIndex = 0), /* @__PURE__ */ _.cloneElement(p, k);
    }
    return p;
  });
  return /* @__PURE__ */ S.jsx(_I, {
    role: "menu",
    ref: x,
    className: a,
    onKeyDown: v,
    tabIndex: o ? 0 : -1,
    ...f,
    children: h
  });
});
function CI(e) {
  return ke("MuiPopover", e);
}
Pe("MuiPopover", ["root", "paper"]);
function D0(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function z0(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function B0(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function fp(e) {
  return typeof e == "function" ? e() : e;
}
const TI = (e) => {
  const {
    classes: t
  } = e;
  return Oe({
    root: ["root"],
    paper: ["paper"]
  }, CI, t);
}, EI = q(vS, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), SS = q(Vt, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), RI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: l = "anchorEl",
    children: u,
    className: c,
    container: d,
    elevation: f = 8,
    marginThreshold: y = 16,
    open: g,
    PaperProps: v = {},
    slots: x = {},
    slotProps: m = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: p = nd,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: k,
      ...C
    } = {},
    disableScrollLock: T = !1,
    ...E
  } = r, M = (m == null ? void 0 : m.paper) ?? v, w = _.useRef(), P = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: y,
    externalPaperSlotProps: M,
    transformOrigin: h,
    TransitionComponent: p,
    transitionDuration: b,
    TransitionProps: C
  }, j = TI(P), O = _.useCallback(() => {
    if (l === "anchorPosition")
      return a;
    const pe = fp(i), ae = (pe && pe.nodeType === 1 ? pe : On(w.current).body).getBoundingClientRect();
    return {
      top: ae.top + D0(ae, s.vertical),
      left: ae.left + z0(ae, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, l]), L = _.useCallback((pe) => ({
    vertical: D0(pe, h.vertical),
    horizontal: z0(pe, h.horizontal)
  }), [h.horizontal, h.vertical]), F = _.useCallback((pe) => {
    const be = {
      width: pe.offsetWidth,
      height: pe.offsetHeight
    }, ae = L(be);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: B0(ae)
      };
    const Ne = O();
    let de = Ne.top - ae.vertical, Ee = Ne.left - ae.horizontal;
    const rt = de + be.height, we = Ee + be.width, Ae = uo(fp(i)), ut = Ae.innerHeight - y, Ke = Ae.innerWidth - y;
    if (y !== null && de < y) {
      const Fe = de - y;
      de -= Fe, ae.vertical += Fe;
    } else if (y !== null && rt > ut) {
      const Fe = rt - ut;
      de -= Fe, ae.vertical += Fe;
    }
    if (y !== null && Ee < y) {
      const Fe = Ee - y;
      Ee -= Fe, ae.horizontal += Fe;
    } else if (we > Ke) {
      const Fe = we - Ke;
      Ee -= Fe, ae.horizontal += Fe;
    }
    return {
      top: `${Math.round(de)}px`,
      left: `${Math.round(Ee)}px`,
      transformOrigin: B0(ae)
    };
  }, [i, l, O, L, y]), [D, U] = _.useState(g), A = _.useCallback(() => {
    const pe = w.current;
    if (!pe)
      return;
    const be = F(pe);
    be.top !== null && pe.style.setProperty("top", be.top), be.left !== null && (pe.style.left = be.left), pe.style.transformOrigin = be.transformOrigin, U(!0);
  }, [F]);
  _.useEffect(() => (T && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [i, T, A]);
  const N = (pe, be) => {
    k && k(pe, be), A();
  }, V = () => {
    U(!1);
  };
  _.useEffect(() => {
    g && A();
  }), _.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      A();
    }
  } : null, [g, A]), _.useEffect(() => {
    if (!g)
      return;
    const pe = Aw(() => {
      A();
    }), be = uo(i);
    return be.addEventListener("resize", pe), () => {
      pe.clear(), be.removeEventListener("resize", pe);
    };
  }, [i, g, A]);
  let H = b;
  b === "auto" && !p.muiSupportAuto && (H = void 0);
  const ee = d || (i ? On(fp(i)).body : void 0), fe = {
    slots: x,
    slotProps: {
      ...m,
      paper: M
    }
  }, [se, te] = Jt("paper", {
    elementType: SS,
    externalForwardedProps: fe,
    additionalProps: {
      elevation: f,
      className: J(j.paper, M == null ? void 0 : M.className),
      style: D ? M.style : {
        ...M.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [Se, {
    slotProps: Te,
    ...Ve
  }] = Jt("root", {
    elementType: EI,
    externalForwardedProps: fe,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ee,
      open: g
    },
    ownerState: P,
    className: J(j.root, c)
  }), Ie = Tt(w, te.ref);
  return /* @__PURE__ */ S.jsx(Se, {
    ...Ve,
    ...!Ah(Se) && {
      slotProps: Te,
      disableScrollLock: T
    },
    ...E,
    ref: n,
    children: /* @__PURE__ */ S.jsx(p, {
      appear: !0,
      in: g,
      onEntering: N,
      onExited: V,
      timeout: H,
      ...C,
      children: /* @__PURE__ */ S.jsx(se, {
        ...te,
        ref: Ie,
        children: u
      })
    })
  });
});
function PI(e) {
  return ke("MuiMenu", e);
}
Pe("MuiMenu", ["root", "paper", "list"]);
const OI = {
  vertical: "top",
  horizontal: "right"
}, MI = {
  vertical: "top",
  horizontal: "left"
}, II = (e) => {
  const {
    classes: t
  } = e;
  return Oe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, PI, t);
}, AI = q(RI, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), $I = q(SS, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), jI = q(kI, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), LI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    MenuListProps: l = {},
    onClose: u,
    open: c,
    PaperProps: d = {},
    PopoverClasses: f,
    transitionDuration: y = "auto",
    TransitionProps: {
      onEntering: g,
      ...v
    } = {},
    variant: x = "selectedMenu",
    slots: m = {},
    slotProps: h = {},
    ...p
  } = r, b = Vy(), k = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: g,
    PaperProps: d,
    transitionDuration: y,
    TransitionProps: v,
    variant: x
  }, C = II(k), T = o && !a && c, E = _.useRef(null), M = (D, U) => {
    E.current && E.current.adjustStyleForScrollbar(D, {
      direction: b ? "rtl" : "ltr"
    }), g && g(D, U);
  }, w = (D) => {
    D.key === "Tab" && (D.preventDefault(), u && u(D, "tabKeyDown"));
  };
  let P = -1;
  _.Children.map(i, (D, U) => {
    /* @__PURE__ */ _.isValidElement(D) && (D.props.disabled || (x === "selectedMenu" && D.props.selected || P === -1) && (P = U));
  });
  const j = m.paper ?? $I, O = h.paper ?? d, L = _h({
    elementType: m.root,
    externalSlotProps: h.root,
    ownerState: k,
    className: [C.root, s]
  }), F = _h({
    elementType: j,
    externalSlotProps: O,
    ownerState: k,
    className: C.paper
  });
  return /* @__PURE__ */ S.jsx(AI, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: b ? "right" : "left"
    },
    transformOrigin: b ? OI : MI,
    slots: {
      paper: j,
      root: m.root
    },
    slotProps: {
      root: L,
      paper: F
    },
    open: c,
    ref: n,
    transitionDuration: y,
    TransitionProps: {
      onEntering: M,
      ...v
    },
    ownerState: k,
    ...p,
    classes: f,
    children: /* @__PURE__ */ S.jsx(jI, {
      onKeyDown: w,
      actions: E,
      autoFocus: o && (P === -1 || a),
      autoFocusItem: T,
      variant: x,
      ...l,
      className: J(C.list, l.className),
      children: i
    })
  });
});
function NI(e) {
  return ke("MuiNativeSelect", e);
}
const ag = Pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), FI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"]
  };
  return Oe(a, NI, t);
}, _S = q("select")(({
  theme: e
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${ag.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius,
      "&:focus": {
        borderRadius: (e.vars || e).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), DI = q(_S, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: gr,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${ag.multiple}`]: t.multiple
    }];
  }
})({}), kS = q("svg")(({
  theme: e
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (e.vars || e).palette.action.active,
  [`&.${ag.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), zI = q(kS, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${G(n.variant)}`], n.open && t.iconOpen];
  }
})({}), BI = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard",
    ...u
  } = t, c = {
    ...t,
    disabled: o,
    variant: l,
    error: i
  }, d = FI(c);
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ S.jsx(DI, {
      ownerState: c,
      className: J(d.select, r),
      disabled: o,
      ref: a || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ S.jsx(zI, {
      as: s,
      ownerState: c,
      className: d.icon
    })]
  });
});
var U0;
const UI = q("fieldset", {
  shouldForwardProp: gr
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), VI = q("legend", {
  shouldForwardProp: gr
})(Le(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: t
    }) => !t.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.withLabel && t.notched,
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function WI(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: i,
    ...s
  } = e, a = o != null && o !== "", l = {
    ...e,
    notched: i,
    withLabel: a
  };
  return /* @__PURE__ */ S.jsx(UI, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: /* @__PURE__ */ S.jsx(VI, {
      ownerState: l,
      children: a ? /* @__PURE__ */ S.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        U0 || (U0 = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const HI = (e) => {
  const {
    classes: t
  } = e, r = Oe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, OM, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, KI = q(df, {
  shouldForwardProp: (e) => gr(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: uf
})(Le(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Sr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Sr.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Sr.focused} .${Sr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Dr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Sr.focused} .${Sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${Sr.error} .${Sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Sr.disabled} .${Sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: n
      }) => n.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: n,
        size: r
      }) => n.multiline && r === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), QI = q(WI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Le(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), qI = q(ff, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: cf
})(Le(({
  theme: e
}) => ({
  padding: "16.5px 14px",
  ...!e.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
      caretColor: e.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...e.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [e.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), lg = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var r;
  const o = Ce({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: i = {},
    fullWidth: s = !1,
    inputComponent: a = "input",
    label: l,
    multiline: u = !1,
    notched: c,
    slots: d = {},
    type: f = "text",
    ...y
  } = o, g = HI(o), v = Ui(), x = ma({
    props: o,
    muiFormControl: v,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), m = {
    ...o,
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: v,
    fullWidth: s,
    hiddenLabel: x.hiddenLabel,
    multiline: u,
    size: x.size,
    type: f
  }, h = d.root ?? i.Root ?? KI, p = d.input ?? i.Input ?? qI;
  return /* @__PURE__ */ S.jsx(og, {
    slots: {
      root: h,
      input: p
    },
    renderSuffix: (b) => /* @__PURE__ */ S.jsx(QI, {
      ownerState: m,
      className: g.notchedOutline,
      label: l != null && l !== "" && x.required ? r || (r = /* @__PURE__ */ S.jsxs(_.Fragment, {
        children: [l, " ", "*"]
      })) : l,
      notched: typeof c < "u" ? c : !!(b.startAdornment || b.filled || b.focused)
    }),
    fullWidth: s,
    inputComponent: a,
    multiline: u,
    ref: n,
    type: f,
    ...y,
    classes: {
      ...g,
      notchedOutline: null
    }
  });
});
lg.muiName = "Input";
function ZI(e) {
  return ke("MuiSelect", e);
}
const Aa = Pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var V0;
const GI = q(_S, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Aa.select}`]: t.select
      },
      {
        [`&.${Aa.select}`]: t[n.variant]
      },
      {
        [`&.${Aa.error}`]: t.error
      },
      {
        [`&.${Aa.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Aa.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), XI = q(kS, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${G(n.variant)}`], n.open && t.iconOpen];
  }
})({}), YI = q("input", {
  shouldForwardProp: (e) => Xw(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function W0(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function JI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const e3 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${G(n)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Oe(a, ZI, t);
}, t3 = /* @__PURE__ */ _.forwardRef(function(t, n) {
  var an;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: a,
    className: l,
    defaultOpen: u,
    defaultValue: c,
    disabled: d,
    displayEmpty: f,
    error: y = !1,
    IconComponent: g,
    inputRef: v,
    labelId: x,
    MenuProps: m = {},
    multiple: h,
    name: p,
    onBlur: b,
    onChange: k,
    onClose: C,
    onFocus: T,
    onOpen: E,
    open: M,
    readOnly: w,
    renderValue: P,
    required: j,
    SelectDisplayProps: O = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: F,
    value: D,
    variant: U = "standard",
    ...A
  } = t, [N, V] = Sh({
    controlled: D,
    default: c,
    name: "Select"
  }), [H, ee] = Sh({
    controlled: M,
    default: u,
    name: "Select"
  }), fe = _.useRef(null), se = _.useRef(null), [te, Se] = _.useState(null), {
    current: Te
  } = _.useRef(M != null), [Ve, Ie] = _.useState(), pe = Tt(n, v), be = _.useCallback((oe) => {
    se.current = oe, oe && Se(oe);
  }, []), ae = te == null ? void 0 : te.parentNode;
  _.useImperativeHandle(pe, () => ({
    focus: () => {
      se.current.focus();
    },
    node: fe.current,
    value: N
  }), [N]), _.useEffect(() => {
    u && H && te && !Te && (Ie(s ? null : ae.clientWidth), se.current.focus());
  }, [te, s]), _.useEffect(() => {
    i && se.current.focus();
  }, [i]), _.useEffect(() => {
    if (!x)
      return;
    const oe = On(se.current).getElementById(x);
    if (oe) {
      const ze = () => {
        getSelection().isCollapsed && se.current.focus();
      };
      return oe.addEventListener("click", ze), () => {
        oe.removeEventListener("click", ze);
      };
    }
  }, [x]);
  const Ne = (oe, ze) => {
    oe ? E && E(ze) : C && C(ze), Te || (Ie(s ? null : ae.clientWidth), ee(oe));
  }, de = (oe) => {
    oe.button === 0 && (oe.preventDefault(), se.current.focus(), Ne(!0, oe));
  }, Ee = (oe) => {
    Ne(!1, oe);
  }, rt = _.Children.toArray(a), we = (oe) => {
    const ze = rt.find((wt) => wt.props.value === oe.target.value);
    ze !== void 0 && (V(ze.props.value), k && k(oe, ze));
  }, Ae = (oe) => (ze) => {
    let wt;
    if (ze.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        wt = Array.isArray(N) ? N.slice() : [];
        const er = N.indexOf(oe.props.value);
        er === -1 ? wt.push(oe.props.value) : wt.splice(er, 1);
      } else
        wt = oe.props.value;
      if (oe.props.onClick && oe.props.onClick(ze), N !== wt && (V(wt), k)) {
        const er = ze.nativeEvent || ze, xu = new er.constructor(er.type, er);
        Object.defineProperty(xu, "target", {
          writable: !0,
          value: {
            value: wt,
            name: p
          }
        }), k(xu, oe);
      }
      h || Ne(!1, ze);
    }
  }, ut = (oe) => {
    w || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(oe.key) && (oe.preventDefault(), Ne(!0, oe));
  }, Ke = te !== null && H, Fe = (oe) => {
    !Ke && b && (Object.defineProperty(oe, "target", {
      writable: !0,
      value: {
        value: N,
        name: p
      }
    }), b(oe));
  };
  delete A["aria-invalid"];
  let X, Qt;
  const ot = [];
  let sn = !1;
  (td({
    value: N
  }) || f) && (P ? X = P(N) : sn = !0);
  const bn = rt.map((oe) => {
    if (!/* @__PURE__ */ _.isValidElement(oe))
      return null;
    let ze;
    if (h) {
      if (!Array.isArray(N))
        throw new Error(lo(2));
      ze = N.some((wt) => W0(wt, oe.props.value)), ze && sn && ot.push(oe.props.children);
    } else
      ze = W0(N, oe.props.value), ze && sn && (Qt = oe.props.children);
    return /* @__PURE__ */ _.cloneElement(oe, {
      "aria-selected": ze ? "true" : "false",
      onClick: Ae(oe),
      onKeyUp: (wt) => {
        wt.key === " " && wt.preventDefault(), oe.props.onKeyUp && oe.props.onKeyUp(wt);
      },
      role: "option",
      selected: ze,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": oe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  sn && (h ? ot.length === 0 ? X = null : X = ot.reduce((oe, ze, wt) => (oe.push(ze), wt < ot.length - 1 && oe.push(", "), oe), []) : X = Qt);
  let We = Ve;
  !s && Te && te && (We = ae.clientWidth);
  let Ze;
  typeof L < "u" ? Ze = L : Ze = d ? null : 0;
  const Ge = O.id || (p ? `mui-component-select-${p}` : void 0), Mt = {
    ...t,
    variant: U,
    value: N,
    open: Ke,
    error: y
  }, ue = e3(Mt), ct = {
    ...m.PaperProps,
    ...(an = m.slotProps) == null ? void 0 : an.paper
  }, xn = du();
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ S.jsx(GI, {
      as: "div",
      ref: be,
      tabIndex: Ze,
      role: "combobox",
      "aria-controls": xn,
      "aria-disabled": d ? "true" : void 0,
      "aria-expanded": Ke ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [x, Ge].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": j ? "true" : void 0,
      "aria-invalid": y ? "true" : void 0,
      onKeyDown: ut,
      onMouseDown: d || w ? null : de,
      onBlur: Fe,
      onFocus: T,
      ...O,
      ownerState: Mt,
      className: J(O.className, ue.select, l),
      id: Ge,
      children: JI(X) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        V0 || (V0 = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : X
    }), /* @__PURE__ */ S.jsx(YI, {
      "aria-invalid": y,
      value: Array.isArray(N) ? N.join(",") : N,
      name: p,
      ref: fe,
      "aria-hidden": !0,
      onChange: we,
      tabIndex: -1,
      disabled: d,
      className: ue.nativeInput,
      autoFocus: i,
      required: j,
      ...A,
      ownerState: Mt
    }), /* @__PURE__ */ S.jsx(XI, {
      as: g,
      className: ue.icon,
      ownerState: Mt
    }), /* @__PURE__ */ S.jsx(LI, {
      id: `menu-${p || ""}`,
      anchorEl: ae,
      open: Ke,
      onClose: Ee,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...m,
      MenuListProps: {
        "aria-labelledby": x,
        role: "listbox",
        "aria-multiselectable": h ? "true" : void 0,
        disableListWrap: !0,
        id: xn,
        ...m.MenuListProps
      },
      slotProps: {
        ...m.slotProps,
        paper: {
          ...ct,
          style: {
            minWidth: We,
            ...ct != null ? ct.style : null
          }
        }
      },
      children: bn
    })]
  });
}), n3 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, ug = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => gr(e) && e !== "variant",
  slot: "Root"
}, r3 = q(sg, ug)(""), o3 = q(lg, ug)(""), i3 = q(ig, ug)(""), CS = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: c = IM,
    id: d,
    input: f,
    inputProps: y,
    label: g,
    labelId: v,
    MenuProps: x,
    multiple: m = !1,
    native: h = !1,
    onClose: p,
    onOpen: b,
    open: k,
    renderValue: C,
    SelectDisplayProps: T,
    variant: E = "outlined",
    ...M
  } = r, w = h ? BI : t3, P = Ui(), j = ma({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), O = j.variant || E, L = {
    ...r,
    variant: O,
    classes: s
  }, F = n3(L), {
    root: D,
    ...U
  } = F, A = f || {
    standard: /* @__PURE__ */ S.jsx(r3, {
      ownerState: L
    }),
    outlined: /* @__PURE__ */ S.jsx(o3, {
      label: g,
      ownerState: L
    }),
    filled: /* @__PURE__ */ S.jsx(i3, {
      ownerState: L
    })
  }[O], N = Tt(n, pa(A));
  return /* @__PURE__ */ S.jsx(_.Fragment, {
    children: /* @__PURE__ */ _.cloneElement(A, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: w,
      inputProps: {
        children: i,
        error: j.error,
        IconComponent: c,
        variant: O,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: m,
        ...h ? {
          id: d
        } : {
          autoWidth: o,
          defaultOpen: l,
          displayEmpty: u,
          labelId: v,
          MenuProps: x,
          onClose: p,
          onOpen: b,
          open: k,
          renderValue: C,
          SelectDisplayProps: {
            id: d,
            ...T
          }
        },
        ...y,
        classes: y ? Pt(U, y.classes) : U,
        ...f ? f.props.inputProps : {}
      },
      ...(m && h || u) && O === "outlined" ? {
        notched: !0
      } : {},
      ref: N,
      className: J(A.props.className, a, F.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!f && {
        variant: O
      },
      ...M
    })
  });
});
CS.muiName = "Select";
function s3(e) {
  return ke("MuiTooltip", e);
}
const ht = Pe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function a3(e) {
  return Math.round(e * 1e5) / 1e5;
}
const l3 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${G(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Oe(s, s3, t);
}, u3 = q(fS, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(Le(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: t
    }) => !t,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${ht.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${ht.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${ht.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.arrow && !!t.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${ht.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), c3 = q("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${G(n.placement.split("-")[0])}`]];
  }
})(Le(({
  theme: e
}) => ({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ut(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium,
  [`.${ht.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${ht.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${ht.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${ht.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      padding: "8px 16px",
      fontSize: e.typography.pxToRem(14),
      lineHeight: `${a3(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl,
    style: {
      [`.${ht.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${ht.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.isRtl && t.touch,
    style: {
      [`.${ht.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${ht.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl,
    style: {
      [`.${ht.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${ht.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => !!t.isRtl && t.touch,
    style: {
      [`.${ht.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${ht.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ht.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${ht.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), d3 = q("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(Le(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Ut(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let Qu = !1;
const H0 = new rf();
let $a = {
  x: 0,
  y: 0
};
function qu(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const St = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    components: a = {},
    componentsProps: l = {},
    describeChild: u = !1,
    disableFocusListener: c = !1,
    disableHoverListener: d = !1,
    disableInteractive: f = !1,
    disableTouchListener: y = !1,
    enterDelay: g = 100,
    enterNextDelay: v = 0,
    enterTouchDelay: x = 700,
    followCursor: m = !1,
    id: h,
    leaveDelay: p = 0,
    leaveTouchDelay: b = 1500,
    onClose: k,
    onOpen: C,
    open: T,
    placement: E = "bottom",
    PopperComponent: M,
    PopperProps: w = {},
    slotProps: P = {},
    slots: j = {},
    title: O,
    TransitionComponent: L,
    TransitionProps: F,
    ...D
  } = r, U = /* @__PURE__ */ _.isValidElement(i) ? i : /* @__PURE__ */ S.jsx("span", {
    children: i
  }), A = Vr(), N = Vy(), [V, H] = _.useState(), [ee, fe] = _.useState(null), se = _.useRef(!1), te = f || m, Se = fs(), Te = fs(), Ve = fs(), Ie = fs(), [pe, be] = Sh({
    controlled: T,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let ae = pe;
  const Ne = du(h), de = _.useRef(), Ee = Uo(() => {
    de.current !== void 0 && (document.body.style.WebkitUserSelect = de.current, de.current = void 0), Ie.clear();
  });
  _.useEffect(() => Ee, [Ee]);
  const rt = (ve) => {
    H0.clear(), Qu = !0, be(!0), C && !ae && C(ve);
  }, we = Uo(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ve) => {
      H0.start(800 + p, () => {
        Qu = !1;
      }), be(!1), k && ae && k(ve), Se.start(A.transitions.duration.shortest, () => {
        se.current = !1;
      });
    }
  ), Ae = (ve) => {
    se.current && ve.type !== "touchstart" || (V && V.removeAttribute("title"), Te.clear(), Ve.clear(), g || Qu && v ? Te.start(Qu ? v : g, () => {
      rt(ve);
    }) : rt(ve));
  }, ut = (ve) => {
    Te.clear(), Ve.start(p, () => {
      we(ve);
    });
  }, [, Ke] = _.useState(!1), Fe = (ve) => {
    Xs(ve.target) || (Ke(!1), ut(ve));
  }, X = (ve) => {
    V || H(ve.currentTarget), Xs(ve.target) && (Ke(!0), Ae(ve));
  }, Qt = (ve) => {
    se.current = !0;
    const tr = U.props;
    tr.onTouchStart && tr.onTouchStart(ve);
  }, ot = (ve) => {
    Qt(ve), Ve.clear(), Se.clear(), Ee(), de.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Ie.start(x, () => {
      document.body.style.WebkitUserSelect = de.current, Ae(ve);
    });
  }, sn = (ve) => {
    U.props.onTouchEnd && U.props.onTouchEnd(ve), Ee(), Ve.start(b, () => {
      we(ve);
    });
  };
  _.useEffect(() => {
    if (!ae)
      return;
    function ve(tr) {
      tr.key === "Escape" && we(tr);
    }
    return document.addEventListener("keydown", ve), () => {
      document.removeEventListener("keydown", ve);
    };
  }, [we, ae]);
  const bn = Tt(pa(U), H, n);
  !O && O !== 0 && (ae = !1);
  const We = _.useRef(), Ze = (ve) => {
    const tr = U.props;
    tr.onMouseMove && tr.onMouseMove(ve), $a = {
      x: ve.clientX,
      y: ve.clientY
    }, We.current && We.current.update();
  }, Ge = {}, Mt = typeof O == "string";
  u ? (Ge.title = !ae && Mt && !d ? O : null, Ge["aria-describedby"] = ae ? Ne : null) : (Ge["aria-label"] = Mt ? O : null, Ge["aria-labelledby"] = ae && !Mt ? Ne : null);
  const ue = {
    ...Ge,
    ...D,
    ...U.props,
    className: J(D.className, U.props.className),
    onTouchStart: Qt,
    ref: bn,
    ...m ? {
      onMouseMove: Ze
    } : {}
  }, ct = {};
  y || (ue.onTouchStart = ot, ue.onTouchEnd = sn), d || (ue.onMouseOver = qu(Ae, ue.onMouseOver), ue.onMouseLeave = qu(ut, ue.onMouseLeave), te || (ct.onMouseOver = Ae, ct.onMouseLeave = ut)), c || (ue.onFocus = qu(X, ue.onFocus), ue.onBlur = qu(Fe, ue.onBlur), te || (ct.onFocus = X, ct.onBlur = Fe));
  const xn = {
    ...r,
    isRtl: N,
    arrow: o,
    disableInteractive: te,
    placement: E,
    PopperComponentProp: M,
    touch: se.current
  }, an = typeof P.popper == "function" ? P.popper(xn) : P.popper, oe = _.useMemo(() => {
    var tr, Cg;
    let ve = [{
      name: "arrow",
      enabled: !!ee,
      options: {
        element: ee,
        padding: 4
      }
    }];
    return (tr = w.popperOptions) != null && tr.modifiers && (ve = ve.concat(w.popperOptions.modifiers)), (Cg = an == null ? void 0 : an.popperOptions) != null && Cg.modifiers && (ve = ve.concat(an.popperOptions.modifiers)), {
      ...w.popperOptions,
      ...an == null ? void 0 : an.popperOptions,
      modifiers: ve
    };
  }, [ee, w.popperOptions, an == null ? void 0 : an.popperOptions]), ze = l3(xn), wt = typeof P.transition == "function" ? P.transition(xn) : P.transition, er = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? L,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...j
    },
    slotProps: {
      arrow: P.arrow ?? l.arrow,
      popper: {
        ...w,
        ...an ?? l.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: P.tooltip ?? l.tooltip,
      transition: {
        ...F,
        ...wt ?? l.transition
      }
    }
  }, [xu, W_] = Jt("popper", {
    elementType: u3,
    externalForwardedProps: er,
    ownerState: xn,
    className: J(ze.popper, w == null ? void 0 : w.className)
  }), [H_, K_] = Jt("transition", {
    elementType: nd,
    externalForwardedProps: er,
    ownerState: xn
  }), [Q_, q_] = Jt("tooltip", {
    elementType: c3,
    className: ze.tooltip,
    externalForwardedProps: er,
    ownerState: xn
  }), [Z_, G_] = Jt("arrow", {
    elementType: d3,
    className: ze.arrow,
    externalForwardedProps: er,
    ownerState: xn,
    ref: fe
  });
  return /* @__PURE__ */ S.jsxs(_.Fragment, {
    children: [/* @__PURE__ */ _.cloneElement(U, ue), /* @__PURE__ */ S.jsx(xu, {
      as: M ?? fS,
      placement: E,
      anchorEl: m ? {
        getBoundingClientRect: () => ({
          top: $a.y,
          left: $a.x,
          right: $a.x,
          bottom: $a.y,
          width: 0,
          height: 0
        })
      } : V,
      popperRef: We,
      open: V ? ae : !1,
      id: Ne,
      transition: !0,
      ...ct,
      ...W_,
      popperOptions: oe,
      children: ({
        TransitionProps: ve
      }) => /* @__PURE__ */ S.jsx(H_, {
        timeout: A.transitions.duration.shorter,
        ...ve,
        ...K_,
        children: /* @__PURE__ */ S.jsxs(Q_, {
          ...q_,
          children: [O, o ? /* @__PURE__ */ S.jsx(Z_, {
            ...G_
          }) : null]
        })
      })
    })]
  });
}), Bn = VR({
  createStyledComponent: q("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => Ce({
    props: e,
    name: "MuiStack"
  })
});
function f3(e) {
  return ke("MuiTextField", e);
}
Pe("MuiTextField", ["root"]);
const p3 = {
  standard: sg,
  filled: ig,
  outlined: lg
}, h3 = (e) => {
  const {
    classes: t
  } = e;
  return Oe({
    root: ["root"]
  }, f3, t);
}, m3 = q(H5, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Xt = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = Ce({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: a,
    color: l = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: d = !1,
    FormHelperTextProps: f,
    fullWidth: y = !1,
    helperText: g,
    id: v,
    InputLabelProps: x,
    inputProps: m,
    InputProps: h,
    inputRef: p,
    label: b,
    maxRows: k,
    minRows: C,
    multiline: T = !1,
    name: E,
    onBlur: M,
    onChange: w,
    onFocus: P,
    placeholder: j,
    required: O = !1,
    rows: L,
    select: F = !1,
    SelectProps: D,
    slots: U = {},
    slotProps: A = {},
    type: N,
    value: V,
    variant: H = "outlined",
    ...ee
  } = r, fe = {
    ...r,
    autoFocus: i,
    color: l,
    disabled: c,
    error: d,
    fullWidth: y,
    multiline: T,
    required: O,
    select: F,
    variant: H
  }, se = h3(fe), te = du(v), Se = g && te ? `${te}-helper-text` : void 0, Te = b && te ? `${te}-label` : void 0, Ve = p3[H], Ie = {
    slots: U,
    slotProps: {
      input: h,
      inputLabel: x,
      htmlInput: m,
      formHelperText: f,
      select: D,
      ...A
    }
  }, pe = {}, be = Ie.slotProps.inputLabel;
  H === "outlined" && (be && typeof be.shrink < "u" && (pe.notched = be.shrink), pe.label = b), F && ((!D || !D.native) && (pe.id = void 0), pe["aria-describedby"] = void 0);
  const [ae, Ne] = Jt("input", {
    elementType: Ve,
    externalForwardedProps: Ie,
    additionalProps: pe,
    ownerState: fe
  }), [de, Ee] = Jt("inputLabel", {
    elementType: pI,
    externalForwardedProps: Ie,
    ownerState: fe
  }), [rt, we] = Jt("htmlInput", {
    elementType: "input",
    externalForwardedProps: Ie,
    ownerState: fe
  }), [Ae, ut] = Jt("formHelperText", {
    elementType: Z5,
    externalForwardedProps: Ie,
    ownerState: fe
  }), [Ke, Fe] = Jt("select", {
    elementType: CS,
    externalForwardedProps: Ie,
    ownerState: fe
  }), X = /* @__PURE__ */ S.jsx(ae, {
    "aria-describedby": Se,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: T,
    name: E,
    rows: L,
    maxRows: k,
    minRows: C,
    type: N,
    value: V,
    id: te,
    inputRef: p,
    onBlur: M,
    onChange: w,
    onFocus: P,
    placeholder: j,
    inputProps: we,
    slots: {
      input: U.htmlInput ? rt : void 0
    },
    ...Ne
  });
  return /* @__PURE__ */ S.jsxs(m3, {
    className: J(se.root, a),
    disabled: c,
    error: d,
    fullWidth: y,
    ref: n,
    required: O,
    color: l,
    variant: H,
    ownerState: fe,
    ...ee,
    children: [b != null && b !== "" && /* @__PURE__ */ S.jsx(de, {
      htmlFor: te,
      id: Te,
      ...Ee,
      children: b
    }), F ? /* @__PURE__ */ S.jsx(Ke, {
      "aria-describedby": Se,
      id: te,
      labelId: Te,
      value: V,
      input: X,
      ...Fe,
      children: s
    }) : X, g && /* @__PURE__ */ S.jsx(Ae, {
      id: Se,
      ...ut,
      children: g
    })]
  });
});
function y3(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
y3(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var hu = (e) => typeof e == "number" && !isNaN(e), Mi = (e) => typeof e == "string", fo = (e) => typeof e == "function", g3 = (e) => Mi(e) || hu(e), Dh = (e) => Mi(e) || fo(e) ? e : null, v3 = (e, t) => e === !1 || hu(e) && e > 0 ? e : t, zh = (e) => _.isValidElement(e) || Mi(e) || fo(e) || hu(e);
function b3(e, t, n = 300) {
  let { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n);
    });
  });
}
function x3({ enter: e, exit: t, appendPosition: n = !1, collapse: r = !0, collapseDuration: o = 300 }) {
  return function({ children: i, position: s, preventExitTransition: a, done: l, nodeRef: u, isIn: c, playToast: d }) {
    let f = n ? `${e}--${s}` : e, y = n ? `${t}--${s}` : t, g = _.useRef(0);
    return _.useLayoutEffect(() => {
      let v = u.current, x = f.split(" "), m = (h) => {
        h.target === u.current && (d(), v.removeEventListener("animationend", m), v.removeEventListener("animationcancel", m), g.current === 0 && h.type !== "animationcancel" && v.classList.remove(...x));
      };
      v.classList.add(...x), v.addEventListener("animationend", m), v.addEventListener("animationcancel", m);
    }, []), _.useEffect(() => {
      let v = u.current, x = () => {
        v.removeEventListener("animationend", x), r ? b3(v, l, o) : l();
      };
      c || (a ? x() : (g.current = 1, v.className += ` ${y}`, v.addEventListener("animationend", x)));
    }, [c]), re.createElement(re.Fragment, null, i);
  };
}
function K0(e, t) {
  return { content: TS(e.content, e.props), containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, reason: e.removalReason, status: t };
}
function TS(e, t, n = !1) {
  return _.isValidElement(e) && !Mi(e.type) ? _.cloneElement(e, { closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n }) : fo(e) ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n }) : e;
}
function w3({ closeToast: e, theme: t, ariaLabel: n = "close" }) {
  return re.createElement("button", { className: `Toastify__close-button Toastify__close-button--${t}`, type: "button", onClick: (r) => {
    r.stopPropagation(), e(!0);
  }, "aria-label": n }, re.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, re.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function S3({ delay: e, isRunning: t, closeToast: n, type: r = "default", hide: o, className: i, controlledProgress: s, progress: a, rtl: l, isIn: u, theme: c }) {
  let d = o || s && a === 0, f = { animationDuration: `${e}ms`, animationPlayState: t ? "running" : "paused" };
  s && (f.transform = `scaleX(${a})`);
  let y = J("Toastify__progress-bar", s ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${c}`, `Toastify__progress-bar--${r}`, { "Toastify__progress-bar--rtl": l }), g = fo(i) ? i({ rtl: l, type: r, defaultClassName: y }) : J(y, i), v = { [s && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: s && a < 1 ? null : () => {
    u && n();
  } };
  return re.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": d }, re.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}` }), re.createElement("div", { role: "progressbar", "aria-hidden": d ? "true" : "false", "aria-label": "notification timer", className: g, style: f, ...v }));
}
var _3 = 1, ES = () => `${_3++}`;
function k3(e, t, n) {
  let r = 1, o = 0, i = [], s = [], a = t, l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), c = (h) => (u.add(h), () => u.delete(h)), d = () => {
    s = Array.from(l.values()), u.forEach((h) => h());
  }, f = ({ containerId: h, toastId: p, updateId: b }) => {
    let k = h ? h !== e : e !== 1, C = l.has(p) && b == null;
    return k || C;
  }, y = (h, p) => {
    l.forEach((b) => {
      var k;
      (p == null || p === b.props.toastId) && ((k = b.toggle) == null || k.call(b, h));
    });
  }, g = (h) => {
    var p, b;
    (b = (p = h.props) == null ? void 0 : p.onClose) == null || b.call(p, h.removalReason), h.isActive = !1;
  }, v = (h) => {
    if (h == null) l.forEach(g);
    else {
      let p = l.get(h);
      p && g(p);
    }
    d();
  }, x = () => {
    o -= i.length, i = [];
  }, m = (h) => {
    var p, b;
    let { toastId: k, updateId: C } = h.props, T = C == null;
    h.staleId && l.delete(h.staleId), h.isActive = !0, l.set(k, h), d(), n(K0(h, T ? "added" : "updated")), T && ((b = (p = h.props).onOpen) == null || b.call(p));
  };
  return { id: e, props: a, observe: c, toggle: y, removeToast: v, toasts: l, clearQueue: x, buildToast: (h, p) => {
    if (f(p)) return;
    let { toastId: b, updateId: k, data: C, staleId: T, delay: E } = p, M = k == null;
    M && o++;
    let w = { ...a, style: a.toastStyle, key: r++, ...Object.fromEntries(Object.entries(p).filter(([j, O]) => O != null)), toastId: b, updateId: k, data: C, isIn: !1, className: Dh(p.className || a.toastClassName), progressClassName: Dh(p.progressClassName || a.progressClassName), autoClose: p.isLoading ? !1 : v3(p.autoClose, a.autoClose), closeToast(j) {
      l.get(b).removalReason = j, v(b);
    }, deleteToast() {
      let j = l.get(b);
      if (j != null) {
        if (n(K0(j, "removed")), l.delete(b), o--, o < 0 && (o = 0), i.length > 0) {
          m(i.shift());
          return;
        }
        d();
      }
    } };
    w.closeButton = a.closeButton, p.closeButton === !1 || zh(p.closeButton) ? w.closeButton = p.closeButton : p.closeButton === !0 && (w.closeButton = zh(a.closeButton) ? a.closeButton : !0);
    let P = { content: h, props: w, staleId: T };
    a.limit && a.limit > 0 && o > a.limit && M ? i.push(P) : hu(E) ? setTimeout(() => {
      m(P);
    }, E) : m(P);
  }, setProps(h) {
    a = h;
  }, setToggle: (h, p) => {
    let b = l.get(h);
    b && (b.toggle = p);
  }, isToastActive: (h) => {
    var p;
    return (p = l.get(h)) == null ? void 0 : p.isActive;
  }, getSnapshot: () => s };
}
var en = /* @__PURE__ */ new Map(), Ol = [], Bh = /* @__PURE__ */ new Set(), C3 = (e) => Bh.forEach((t) => t(e)), RS = () => en.size > 0;
function T3() {
  Ol.forEach((e) => OS(e.content, e.options)), Ol = [];
}
var E3 = (e, { containerId: t }) => {
  var n;
  return (n = en.get(t || 1)) == null ? void 0 : n.toasts.get(e);
};
function PS(e, t) {
  var n;
  if (t) return !!((n = en.get(t)) != null && n.isToastActive(e));
  let r = !1;
  return en.forEach((o) => {
    o.isToastActive(e) && (r = !0);
  }), r;
}
function R3(e) {
  if (!RS()) {
    Ol = Ol.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || g3(e)) en.forEach((t) => {
    t.removeToast(e);
  });
  else if (e && ("containerId" in e || "id" in e)) {
    let t = en.get(e.containerId);
    t ? t.removeToast(e.id) : en.forEach((n) => {
      n.removeToast(e.id);
    });
  }
}
var P3 = (e = {}) => {
  en.forEach((t) => {
    t.props.limit && (!e.containerId || t.id === e.containerId) && t.clearQueue();
  });
};
function OS(e, t) {
  zh(e) && (RS() || Ol.push({ content: e, options: t }), en.forEach((n) => {
    n.buildToast(e, t);
  }));
}
function O3(e) {
  var t;
  (t = en.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function MS(e, t) {
  en.forEach((n) => {
    (t == null || !(t != null && t.containerId) || (t == null ? void 0 : t.containerId) === n.id) && n.toggle(e, t == null ? void 0 : t.id);
  });
}
function M3(e) {
  let t = e.containerId || 1;
  return { subscribe(n) {
    let r = k3(t, e, C3);
    en.set(t, r);
    let o = r.observe(n);
    return T3(), () => {
      o(), en.delete(t);
    };
  }, setProps(n) {
    var r;
    (r = en.get(t)) == null || r.setProps(n);
  }, getSnapshot() {
    var n;
    return (n = en.get(t)) == null ? void 0 : n.getSnapshot();
  } };
}
function I3(e) {
  return Bh.add(e), () => {
    Bh.delete(e);
  };
}
function A3(e) {
  return e && (Mi(e.toastId) || hu(e.toastId)) ? e.toastId : ES();
}
function mu(e, t) {
  return OS(e, t), t.toastId;
}
function pf(e, t) {
  return { ...t, type: t && t.type || e, toastId: A3(t) };
}
function hf(e) {
  return (t, n) => mu(t, pf(e, n));
}
function ie(e, t) {
  return mu(e, pf("default", t));
}
ie.loading = (e, t) => mu(e, pf("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }));
function $3(e, { pending: t, error: n, success: r }, o) {
  let i;
  t && (i = Mi(t) ? ie.loading(t, o) : ie.loading(t.render, { ...o, ...t }));
  let s = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, a = (u, c, d) => {
    if (c == null) {
      ie.dismiss(i);
      return;
    }
    let f = { type: u, ...s, ...o, data: d }, y = Mi(c) ? { render: c } : c;
    return i ? ie.update(i, { ...f, ...y }) : ie(y.render, { ...f, ...y }), d;
  }, l = fo(e) ? e() : e;
  return l.then((u) => a("success", r, u)).catch((u) => a("error", n, u)), l;
}
ie.promise = $3;
ie.success = hf("success");
ie.info = hf("info");
ie.error = hf("error");
ie.warning = hf("warning");
ie.warn = ie.warning;
ie.dark = (e, t) => mu(e, pf("default", { theme: "dark", ...t }));
function j3(e) {
  R3(e);
}
ie.dismiss = j3;
ie.clearWaitingQueue = P3;
ie.isActive = PS;
ie.update = (e, t = {}) => {
  let n = E3(e, t);
  if (n) {
    let { props: r, content: o } = n, i = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: ES() };
    i.toastId !== e && (i.staleId = e);
    let s = i.render || o;
    delete i.render, mu(s, i);
  }
};
ie.done = (e) => {
  ie.update(e, { progress: 1 });
};
ie.onChange = I3;
ie.play = (e) => MS(!0, e);
ie.pause = (e) => MS(!1, e);
function L3(e) {
  var t;
  let { subscribe: n, getSnapshot: r, setProps: o } = _.useRef(M3(e)).current;
  o(e);
  let i = (t = _.useSyncExternalStore(n, r, r)) == null ? void 0 : t.slice();
  function s(a) {
    if (!i) return [];
    let l = /* @__PURE__ */ new Map();
    return e.newestOnTop && i.reverse(), i.forEach((u) => {
      let { position: c } = u.props;
      l.has(c) || l.set(c, []), l.get(c).push(u);
    }), Array.from(l, (u) => a(u[0], u[1]));
  }
  return { getToastToRender: s, isToastActive: PS, count: i == null ? void 0 : i.length };
}
function N3(e) {
  let [t, n] = _.useState(!1), [r, o] = _.useState(!1), i = _.useRef(null), s = _.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: a, pauseOnHover: l, closeToast: u, onClick: c, closeOnClick: d } = e;
  O3({ id: e.toastId, containerId: e.containerId, fn: n }), _.useEffect(() => {
    if (e.pauseOnFocusLoss) return f(), () => {
      y();
    };
  }, [e.pauseOnFocusLoss]);
  function f() {
    document.hasFocus() || m(), window.addEventListener("focus", x), window.addEventListener("blur", m);
  }
  function y() {
    window.removeEventListener("focus", x), window.removeEventListener("blur", m);
  }
  function g(T) {
    if (e.draggable === !0 || e.draggable === T.pointerType) {
      h();
      let E = i.current;
      s.canCloseOnClick = !0, s.canDrag = !0, E.style.transition = "none", e.draggableDirection === "x" ? (s.start = T.clientX, s.removalDistance = E.offsetWidth * (e.draggablePercent / 100)) : (s.start = T.clientY, s.removalDistance = E.offsetHeight * (e.draggablePercent === 80 ? e.draggablePercent * 1.5 : e.draggablePercent) / 100);
    }
  }
  function v(T) {
    let { top: E, bottom: M, left: w, right: P } = i.current.getBoundingClientRect();
    T.nativeEvent.type !== "touchend" && e.pauseOnHover && T.clientX >= w && T.clientX <= P && T.clientY >= E && T.clientY <= M ? m() : x();
  }
  function x() {
    n(!0);
  }
  function m() {
    n(!1);
  }
  function h() {
    s.didMove = !1, document.addEventListener("pointermove", b), document.addEventListener("pointerup", k);
  }
  function p() {
    document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", k);
  }
  function b(T) {
    let E = i.current;
    if (s.canDrag && E) {
      s.didMove = !0, t && m(), e.draggableDirection === "x" ? s.delta = T.clientX - s.start : s.delta = T.clientY - s.start, s.start !== T.clientX && (s.canCloseOnClick = !1);
      let M = e.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`;
      E.style.transform = `translate3d(${M},0)`, E.style.opacity = `${1 - Math.abs(s.delta / s.removalDistance)}`;
    }
  }
  function k() {
    p();
    let T = i.current;
    if (s.canDrag && s.didMove && T) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance) {
        o(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      T.style.transition = "transform 0.2s, opacity 0.2s", T.style.removeProperty("transform"), T.style.removeProperty("opacity");
    }
  }
  let C = { onPointerDown: g, onPointerUp: v };
  return a && l && (C.onMouseEnter = m, e.stacked || (C.onMouseLeave = x)), d && (C.onClick = (T) => {
    c && c(T), s.canCloseOnClick && u(!0);
  }), { playToast: x, pauseToast: m, isRunning: t, preventExitTransition: r, toastRef: i, eventHandlers: C };
}
var F3 = typeof window < "u" ? _.useLayoutEffect : _.useEffect, mf = ({ theme: e, type: t, isLoading: n, ...r }) => re.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`, ...r });
function D3(e) {
  return re.createElement(mf, { ...e }, re.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function z3(e) {
  return re.createElement(mf, { ...e }, re.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function B3(e) {
  return re.createElement(mf, { ...e }, re.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function U3(e) {
  return re.createElement(mf, { ...e }, re.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function V3() {
  return re.createElement("div", { className: "Toastify__spinner" });
}
var Uh = { info: z3, warning: D3, success: B3, error: U3, spinner: V3 }, W3 = (e) => e in Uh;
function H3({ theme: e, type: t, isLoading: n, icon: r }) {
  let o = null, i = { theme: e, type: t };
  return r === !1 || (fo(r) ? o = r({ ...i, isLoading: n }) : _.isValidElement(r) ? o = _.cloneElement(r, i) : n ? o = Uh.spinner() : W3(t) && (o = Uh[t](i))), o;
}
var K3 = (e) => {
  let { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: o, playToast: i } = N3(e), { closeButton: s, children: a, autoClose: l, onClick: u, type: c, hideProgressBar: d, closeToast: f, transition: y, position: g, className: v, style: x, progressClassName: m, updateId: h, role: p, progress: b, rtl: k, toastId: C, deleteToast: T, isIn: E, isLoading: M, closeOnClick: w, theme: P, ariaLabel: j } = e, O = J("Toastify__toast", `Toastify__toast-theme--${P}`, `Toastify__toast--${c}`, { "Toastify__toast--rtl": k }, { "Toastify__toast--close-on-click": w }), L = fo(v) ? v({ rtl: k, position: g, type: c, defaultClassName: O }) : J(O, v), F = H3(e), D = !!b || !l, U = { closeToast: f, type: c, theme: P }, A = null;
  return s === !1 || (fo(s) ? A = s(U) : _.isValidElement(s) ? A = _.cloneElement(s, U) : A = w3(U)), re.createElement(y, { isIn: E, done: T, position: g, preventExitTransition: n, nodeRef: r, playToast: i }, re.createElement("div", { id: C, tabIndex: 0, onClick: u, "data-in": E, className: L, ...o, style: x, ref: r, ...E && { role: p, "aria-label": j } }, F != null && re.createElement("div", { className: J("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !M }) }, F), TS(a, e, !t), A, !e.customProgressBar && re.createElement(S3, { ...h && !D ? { key: `p-${h}` } : {}, rtl: k, theme: P, delay: l, isRunning: t, isIn: E, closeToast: f, hide: d, type: c, className: m, controlledProgress: D, progress: b || 0 })));
}, Q3 = (e, t = !1) => ({ enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t }), q3 = x3(Q3("bounce", !0)), Z3 = { position: "top-right", transition: q3, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (e) => e.altKey && e.code === "KeyT" };
function G3(e) {
  let t = { ...Z3, ...e }, n = e.stacked, [r, o] = _.useState(!0), i = _.useRef(null), { getToastToRender: s, isToastActive: a, count: l } = L3(t), { className: u, style: c, rtl: d, containerId: f, hotKeys: y } = t;
  function g(x) {
    let m = J("Toastify__toast-container", `Toastify__toast-container--${x}`, { "Toastify__toast-container--rtl": d });
    return fo(u) ? u({ position: x, rtl: d, defaultClassName: m }) : J(m, Dh(u));
  }
  function v() {
    n && (o(!0), ie.play());
  }
  return F3(() => {
    var x;
    if (n) {
      let m = i.current.querySelectorAll('[data-in="true"]'), h = 12, p = (x = t.position) == null ? void 0 : x.includes("top"), b = 0, k = 0;
      Array.from(m).reverse().forEach((C, T) => {
        let E = C;
        E.classList.add("Toastify__toast--stacked"), T > 0 && (E.dataset.collapsed = `${r}`), E.dataset.pos || (E.dataset.pos = p ? "top" : "bot");
        let M = b * (r ? 0.2 : 1) + (r ? 0 : h * T);
        E.style.setProperty("--y", `${p ? M : M * -1}px`), E.style.setProperty("--g", `${h}`), E.style.setProperty("--s", `${1 - (r ? k : 0)}`), b += E.offsetHeight, k += 0.025;
      });
    }
  }, [r, l, n]), _.useEffect(() => {
    function x(m) {
      var h;
      let p = i.current;
      y(m) && ((h = p.querySelector('[tabIndex="0"]')) == null || h.focus(), o(!1), ie.pause()), m.key === "Escape" && (document.activeElement === p || p != null && p.contains(document.activeElement)) && (o(!0), ie.play());
    }
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [y]), re.createElement("section", { ref: i, className: "Toastify", id: f, onMouseEnter: () => {
    n && (o(!1), ie.pause());
  }, onMouseLeave: v, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": t["aria-label"] }, s((x, m) => {
    let h = m.length ? { ...c } : { ...c, pointerEvents: "none" };
    return re.createElement("div", { tabIndex: -1, className: g(x), "data-stacked": n, style: h, key: `c-${x}` }, m.map(({ content: p, props: b }) => re.createElement(K3, { ...b, stacked: n, collapseAll: v, isIn: a(b.toastId, b.containerId), key: `t-${b.key}` }, p)));
  }));
}
var ya = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Ii = typeof window > "u" || "Deno" in globalThis;
function Dn() {
}
function X3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vh(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function IS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ts(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ar(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Q0(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== cg(s, t.options))
        return !1;
    } else if (!Ml(t.queryKey, s))
      return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if (n === "active" && !l || n === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t));
}
function q0(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (Ai(t.options.mutationKey) !== Ai(i))
        return !1;
    } else if (!Ml(t.options.mutationKey, i))
      return !1;
  }
  return !(r && t.state.status !== r || o && !o(t));
}
function cg(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ai)(e);
}
function Ai(e) {
  return JSON.stringify(
    e,
    (t, n) => Wh(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n
  );
}
function Ml(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Ml(e[n], t[n])) : !1;
}
function AS(e, t) {
  if (e === t)
    return e;
  const n = Z0(e) && Z0(t);
  if (n || Wh(e) && Wh(t)) {
    const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), s = i.length, a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < s; u++) {
      const c = n ? u : i[u];
      (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, l++) : (a[c] = AS(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return o === s && l === o ? e : a;
  }
  return t;
}
function rd(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Z0(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Wh(e) {
  if (!G0(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!G0(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function G0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Y3(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Hh(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? AS(e, t) : t;
}
function J3(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function eA(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var dg = Symbol();
function $S(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === dg ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var fi, _o, Rs, P1, tA = (P1 = class extends ya {
  constructor() {
    super();
    ne(this, fi);
    ne(this, _o);
    ne(this, Rs);
    K(this, Rs, (t) => {
      if (!Ii && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    R(this, _o) || this.setEventListener(R(this, Rs));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = R(this, _o)) == null || t.call(this), K(this, _o, void 0));
  }
  setEventListener(t) {
    var n;
    K(this, Rs, t), (n = R(this, _o)) == null || n.call(this), K(this, _o, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    R(this, fi) !== t && (K(this, fi, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof R(this, fi) == "boolean" ? R(this, fi) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, fi = new WeakMap(), _o = new WeakMap(), Rs = new WeakMap(), P1), fg = new tA(), Ps, ko, Os, O1, nA = (O1 = class extends ya {
  constructor() {
    super();
    ne(this, Ps, !0);
    ne(this, ko);
    ne(this, Os);
    K(this, Os, (t) => {
      if (!Ii && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    R(this, ko) || this.setEventListener(R(this, Os));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = R(this, ko)) == null || t.call(this), K(this, ko, void 0));
  }
  setEventListener(t) {
    var n;
    K(this, Os, t), (n = R(this, ko)) == null || n.call(this), K(this, ko, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    R(this, Ps) !== t && (K(this, Ps, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return R(this, Ps);
  }
}, Ps = new WeakMap(), ko = new WeakMap(), Os = new WeakMap(), O1), od = new nA();
function Kh() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return n.resolve = (o) => {
    r({
      status: "fulfilled",
      value: o
    }), e(o);
  }, n.reject = (o) => {
    r({
      status: "rejected",
      reason: o
    }), t(o);
  }, n;
}
function rA(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function jS(e) {
  return (e ?? "online") === "online" ? od.isOnline() : !0;
}
var LS = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function pp(e) {
  return e instanceof LS;
}
function NS(e) {
  let t = !1, n = 0, r = !1, o;
  const i = Kh(), s = (v) => {
    var x;
    r || (f(new LS(v)), (x = e.abort) == null || x.call(e));
  }, a = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, u = () => fg.isFocused() && (e.networkMode === "always" || od.isOnline()) && e.canRun(), c = () => jS(e.networkMode) && e.canRun(), d = (v) => {
    var x;
    r || (r = !0, (x = e.onSuccess) == null || x.call(e, v), o == null || o(), i.resolve(v));
  }, f = (v) => {
    var x;
    r || (r = !0, (x = e.onError) == null || x.call(e, v), o == null || o(), i.reject(v));
  }, y = () => new Promise((v) => {
    var x;
    o = (m) => {
      (r || u()) && v(m);
    }, (x = e.onPause) == null || x.call(e);
  }).then(() => {
    var v;
    o = void 0, r || (v = e.onContinue) == null || v.call(e);
  }), g = () => {
    if (r)
      return;
    let v;
    const x = n === 0 ? e.initialPromise : void 0;
    try {
      v = x ?? e.fn();
    } catch (m) {
      v = Promise.reject(m);
    }
    Promise.resolve(v).then(d).catch((m) => {
      var C;
      if (r)
        return;
      const h = e.retry ?? (Ii ? 0 : 3), p = e.retryDelay ?? rA, b = typeof p == "function" ? p(n, m) : p, k = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
      if (t || !k) {
        f(m);
        return;
      }
      n++, (C = e.onFail) == null || C.call(e, n, m), Y3(b).then(() => u() ? void 0 : y()).then(() => {
        t ? f(m) : g();
      });
    });
  };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? g() : y().then(g), i)
  };
}
function oA() {
  let e = [], t = 0, n = (a) => {
    a();
  }, r = (a) => {
    a();
  }, o = (a) => setTimeout(a, 0);
  const i = (a) => {
    t ? e.push(a) : o(() => {
      n(a);
    });
  }, s = () => {
    const a = e;
    e = [], a.length && o(() => {
      r(() => {
        a.forEach((l) => {
          n(l);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...l) => {
      i(() => {
        a(...l);
      });
    },
    schedule: i,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      n = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      o = a;
    }
  };
}
var kt = oA(), pi, M1, FS = (M1 = class {
  constructor() {
    ne(this, pi);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Vh(this.gcTime) && K(this, pi, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Ii ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    R(this, pi) && (clearTimeout(R(this, pi)), K(this, pi, void 0));
  }
}, pi = new WeakMap(), M1), Ms, Is, Fn, Dt, ql, hi, or, qr, I1, iA = (I1 = class extends FS {
  constructor(t) {
    super();
    ne(this, or);
    ne(this, Ms);
    ne(this, Is);
    ne(this, Fn);
    ne(this, Dt);
    ne(this, ql);
    ne(this, hi);
    K(this, hi, !1), K(this, ql, t.defaultOptions), this.setOptions(t.options), this.observers = [], K(this, Fn, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, K(this, Ms, sA(this.options)), this.state = t.state ?? R(this, Ms), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = R(this, Dt)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...R(this, ql), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && R(this, Fn).remove(this);
  }
  setData(t, n) {
    const r = Hh(this.state.data, t, this.options);
    return ye(this, or, qr).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    ye(this, or, qr).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, o;
    const n = (r = R(this, Dt)) == null ? void 0 : r.promise;
    return (o = R(this, Dt)) == null || o.cancel(t), n ? n.then(Dn).catch(Dn) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(R(this, Ms));
  }
  isActive() {
    return this.observers.some(
      (t) => ar(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === dg || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !IS(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Dt)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Dt)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), R(this, Fn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (R(this, Dt) && (R(this, hi) ? R(this, Dt).cancel({ revert: !0 }) : R(this, Dt).cancelRetry()), this.scheduleGc()), R(this, Fn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ye(this, or, qr).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var l, u, c;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (R(this, Dt))
        return R(this, Dt).continueRetry(), R(this, Dt).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    const r = new AbortController(), o = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (K(this, hi, !0), r.signal)
      });
    }, i = () => {
      const d = $S(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(f), K(this, hi, !1), this.options.persister ? this.options.persister(
        d,
        f,
        this
      ) : d(f);
    }, s = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: i
    };
    o(s), (l = this.options.behavior) == null || l.onFetch(
      s,
      this
    ), K(this, Is, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && ye(this, or, qr).call(this, { type: "fetch", meta: (c = s.fetchOptions) == null ? void 0 : c.meta });
    const a = (d) => {
      var f, y, g, v;
      pp(d) && d.silent || ye(this, or, qr).call(this, {
        type: "error",
        error: d
      }), pp(d) || ((y = (f = R(this, Fn).config).onError) == null || y.call(
        f,
        d,
        this
      ), (v = (g = R(this, Fn).config).onSettled) == null || v.call(
        g,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return K(this, Dt, NS({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: s.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, y, g, v;
        if (d === void 0) {
          a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (x) {
          a(x);
          return;
        }
        (y = (f = R(this, Fn).config).onSuccess) == null || y.call(f, d, this), (v = (g = R(this, Fn).config).onSettled) == null || v.call(
          g,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (d, f) => {
        ye(this, or, qr).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        ye(this, or, qr).call(this, { type: "pause" });
      },
      onContinue: () => {
        ye(this, or, qr).call(this, { type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => !0
    })), R(this, Dt).start();
  }
}, Ms = new WeakMap(), Is = new WeakMap(), Fn = new WeakMap(), Dt = new WeakMap(), ql = new WeakMap(), hi = new WeakMap(), or = new WeakSet(), qr = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...DS(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const o = t.error;
        return pp(o) && o.revert && R(this, Is) ? { ...R(this, Is), fetchStatus: "idle" } : {
          ...r,
          error: o,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: o,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), kt.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), R(this, Fn).notify({ query: this, type: "updated", action: t });
  });
}, I1);
function DS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: jS(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function sA(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Cr, A1, aA = (A1 = class extends ya {
  constructor(t = {}) {
    super();
    ne(this, Cr);
    this.config = t, K(this, Cr, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const o = n.queryKey, i = n.queryHash ?? cg(o, n);
    let s = this.get(i);
    return s || (s = new iA({
      cache: this,
      queryKey: o,
      queryHash: i,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(s)), s;
  }
  add(t) {
    R(this, Cr).has(t.queryHash) || (R(this, Cr).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = R(this, Cr).get(t.queryHash);
    n && (t.destroy(), n === t && R(this, Cr).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    kt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return R(this, Cr).get(t);
  }
  getAll() {
    return [...R(this, Cr).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Q0(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Q0(t, r)) : n;
  }
  notify(t) {
    kt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    kt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    kt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Cr = new WeakMap(), A1), Tr, qt, mi, Er, go, $1, lA = ($1 = class extends FS {
  constructor(t) {
    super();
    ne(this, Er);
    ne(this, Tr);
    ne(this, qt);
    ne(this, mi);
    this.mutationId = t.mutationId, K(this, qt, t.mutationCache), K(this, Tr, []), this.state = t.state || zS(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    R(this, Tr).includes(t) || (R(this, Tr).push(t), this.clearGcTimeout(), R(this, qt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    K(this, Tr, R(this, Tr).filter((n) => n !== t)), this.scheduleGc(), R(this, qt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    R(this, Tr).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, qt).remove(this));
  }
  continue() {
    var t;
    return ((t = R(this, mi)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, i, s, a, l, u, c, d, f, y, g, v, x, m, h, p, b, k, C, T;
    K(this, mi, NS({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (E, M) => {
        ye(this, Er, go).call(this, { type: "failed", failureCount: E, error: M });
      },
      onPause: () => {
        ye(this, Er, go).call(this, { type: "pause" });
      },
      onContinue: () => {
        ye(this, Er, go).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => R(this, qt).canRun(this)
    }));
    const n = this.state.status === "pending", r = !R(this, mi).canStart();
    try {
      if (!n) {
        ye(this, Er, go).call(this, { type: "pending", variables: t, isPaused: r }), await ((i = (o = R(this, qt).config).onMutate) == null ? void 0 : i.call(
          o,
          t,
          this
        ));
        const M = await ((a = (s = this.options).onMutate) == null ? void 0 : a.call(s, t));
        M !== this.state.context && ye(this, Er, go).call(this, {
          type: "pending",
          context: M,
          variables: t,
          isPaused: r
        });
      }
      const E = await R(this, mi).start();
      return await ((u = (l = R(this, qt).config).onSuccess) == null ? void 0 : u.call(
        l,
        E,
        t,
        this.state.context,
        this
      )), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, E, t, this.state.context)), await ((y = (f = R(this, qt).config).onSettled) == null ? void 0 : y.call(
        f,
        E,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSettled) == null ? void 0 : v.call(g, E, null, t, this.state.context)), ye(this, Er, go).call(this, { type: "success", data: E }), E;
    } catch (E) {
      try {
        throw await ((m = (x = R(this, qt).config).onError) == null ? void 0 : m.call(
          x,
          E,
          t,
          this.state.context,
          this
        )), await ((p = (h = this.options).onError) == null ? void 0 : p.call(
          h,
          E,
          t,
          this.state.context
        )), await ((k = (b = R(this, qt).config).onSettled) == null ? void 0 : k.call(
          b,
          void 0,
          E,
          this.state.variables,
          this.state.context,
          this
        )), await ((T = (C = this.options).onSettled) == null ? void 0 : T.call(
          C,
          void 0,
          E,
          t,
          this.state.context
        )), E;
      } finally {
        ye(this, Er, go).call(this, { type: "error", error: E });
      }
    } finally {
      R(this, qt).runNext(this);
    }
  }
}, Tr = new WeakMap(), qt = new WeakMap(), mi = new WeakMap(), Er = new WeakSet(), go = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), kt.batch(() => {
    R(this, Tr).forEach((r) => {
      r.onMutationUpdate(t);
    }), R(this, qt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, $1);
function zS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var wn, Zl, j1, uA = (j1 = class extends ya {
  constructor(t = {}) {
    super();
    ne(this, wn);
    ne(this, Zl);
    this.config = t, K(this, wn, /* @__PURE__ */ new Map()), K(this, Zl, Date.now());
  }
  build(t, n, r) {
    const o = new lA({
      mutationCache: this,
      mutationId: ++wu(this, Zl)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(o), o;
  }
  add(t) {
    const n = Zu(t), r = R(this, wn).get(n) ?? [];
    r.push(t), R(this, wn).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = Zu(t);
    if (R(this, wn).has(n)) {
      const o = (r = R(this, wn).get(n)) == null ? void 0 : r.filter((i) => i !== t);
      o && (o.length === 0 ? R(this, wn).delete(n) : R(this, wn).set(n, o));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = R(this, wn).get(Zu(t))) == null ? void 0 : r.find((o) => o.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = R(this, wn).get(Zu(t))) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
  }
  clear() {
    kt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...R(this, wn).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => q0(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => q0(t, n));
  }
  notify(t) {
    kt.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return kt.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(Dn))
      )
    );
  }
}, wn = new WeakMap(), Zl = new WeakMap(), j1);
function Zu(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function X0(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, y, g;
      const r = t.options, o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, i = ((y = t.state.data) == null ? void 0 : y.pages) || [], s = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let a = { pages: [], pageParams: [] }, l = 0;
      const u = async () => {
        let v = !1;
        const x = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
              v = !0;
            }), t.signal)
          });
        }, m = $S(t.options, t.fetchOptions), h = async (p, b, k) => {
          if (v)
            return Promise.reject();
          if (b == null && p.pages.length)
            return Promise.resolve(p);
          const C = {
            queryKey: t.queryKey,
            pageParam: b,
            direction: k ? "backward" : "forward",
            meta: t.options.meta
          };
          x(C);
          const T = await m(
            C
          ), { maxPages: E } = t.options, M = k ? eA : J3;
          return {
            pages: M(p.pages, T, E),
            pageParams: M(p.pageParams, b, E)
          };
        };
        if (o && i.length) {
          const p = o === "backward", b = p ? cA : Y0, k = {
            pages: i,
            pageParams: s
          }, C = b(r, k);
          a = await h(k, C, p);
        } else {
          const p = e ?? i.length;
          do {
            const b = l === 0 ? s[0] ?? r.initialPageParam : Y0(r, a);
            if (l > 0 && b == null)
              break;
            a = await h(a, b), l++;
          } while (l < p);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var v, x;
        return (x = (v = t.options).persister) == null ? void 0 : x.call(
          v,
          u,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = u;
    }
  };
}
function Y0(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function cA(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var pt, Co, To, As, $s, Eo, js, Ls, L1, dA = (L1 = class {
  constructor(e = {}) {
    ne(this, pt);
    ne(this, Co);
    ne(this, To);
    ne(this, As);
    ne(this, $s);
    ne(this, Eo);
    ne(this, js);
    ne(this, Ls);
    K(this, pt, e.queryCache || new aA()), K(this, Co, e.mutationCache || new uA()), K(this, To, e.defaultOptions || {}), K(this, As, /* @__PURE__ */ new Map()), K(this, $s, /* @__PURE__ */ new Map()), K(this, Eo, 0);
  }
  mount() {
    wu(this, Eo)._++, R(this, Eo) === 1 && (K(this, js, fg.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), R(this, pt).onFocus());
    })), K(this, Ls, od.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), R(this, pt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    wu(this, Eo)._--, R(this, Eo) === 0 && ((e = R(this, js)) == null || e.call(this), K(this, js, void 0), (t = R(this, Ls)) == null || t.call(this), K(this, Ls, void 0));
  }
  isFetching(e) {
    return R(this, pt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return R(this, Co).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = R(this, pt).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = R(this, pt).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ts(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return R(this, pt).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), o = R(this, pt).get(
      r.queryHash
    ), i = o == null ? void 0 : o.state.data, s = X3(t, i);
    if (s !== void 0)
      return R(this, pt).build(this, r).setData(s, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return kt.batch(
      () => R(this, pt).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = R(this, pt).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = R(this, pt);
    kt.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = R(this, pt), r = {
      type: "active",
      ...e
    };
    return kt.batch(() => (n.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: !0, ...t }, r = kt.batch(
      () => R(this, pt).findAll(e).map((o) => o.cancel(n))
    );
    return Promise.all(r).then(Dn).catch(Dn);
  }
  invalidateQueries(e, t = {}) {
    return kt.batch(() => {
      if (R(this, pt).findAll(e).forEach((r) => {
        r.invalidate();
      }), (e == null ? void 0 : e.refetchType) === "none")
        return Promise.resolve();
      const n = {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      };
      return this.refetchQueries(n, t);
    });
  }
  refetchQueries(e, t = {}) {
    const n = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, r = kt.batch(
      () => R(this, pt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let i = o.fetch(void 0, n);
        return n.throwOnError || (i = i.catch(Dn)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(r).then(Dn);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = R(this, pt).build(this, t);
    return n.isStaleByTime(
      Ts(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Dn).catch(Dn);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = X0(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Dn).catch(Dn);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = X0(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return od.isOnline() ? R(this, Co).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return R(this, pt);
  }
  getMutationCache() {
    return R(this, Co);
  }
  getDefaultOptions() {
    return R(this, To);
  }
  setDefaultOptions(e) {
    K(this, To, e);
  }
  setQueryDefaults(e, t) {
    R(this, As).set(Ai(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...R(this, As).values()], n = {};
    return t.forEach((r) => {
      Ml(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    R(this, $s).set(Ai(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...R(this, $s).values()];
    let n = {};
    return t.forEach((r) => {
      Ml(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...R(this, To).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = cg(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === dg && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...R(this, To).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    R(this, pt).clear(), R(this, Co).clear();
  }
}, pt = new WeakMap(), Co = new WeakMap(), To = new WeakMap(), As = new WeakMap(), $s = new WeakMap(), Eo = new WeakMap(), js = new WeakMap(), Ls = new WeakMap(), L1), ln, _e, Gl, Zt, yi, Ns, Ro, Rr, Xl, Fs, Ds, gi, vi, Po, zs, De, Wa, Qh, qh, Zh, Gh, Xh, Yh, Jh, BS, N1, fA = (N1 = class extends ya {
  constructor(t, n) {
    super();
    ne(this, De);
    ne(this, ln);
    ne(this, _e);
    ne(this, Gl);
    ne(this, Zt);
    ne(this, yi);
    ne(this, Ns);
    ne(this, Ro);
    ne(this, Rr);
    ne(this, Xl);
    ne(this, Fs);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ne(this, Ds);
    ne(this, gi);
    ne(this, vi);
    ne(this, Po);
    ne(this, zs, /* @__PURE__ */ new Set());
    this.options = n, K(this, ln, t), K(this, Rr, null), K(this, Ro, Kh()), this.options.experimental_prefetchInRender || R(this, Ro).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (R(this, _e).addObserver(this), J0(R(this, _e), this.options) ? ye(this, De, Wa).call(this) : this.updateResult(), ye(this, De, Gh).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return em(
      R(this, _e),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return em(
      R(this, _e),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ye(this, De, Xh).call(this), ye(this, De, Yh).call(this), R(this, _e).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, o = R(this, _e);
    if (this.options = R(this, ln).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ar(this.options.enabled, R(this, _e)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ye(this, De, Jh).call(this), R(this, _e).setOptions(this.options), r._defaulted && !rd(this.options, r) && R(this, ln).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: R(this, _e),
      observer: this
    });
    const i = this.hasListeners();
    i && e1(
      R(this, _e),
      o,
      this.options,
      r
    ) && ye(this, De, Wa).call(this), this.updateResult(n), i && (R(this, _e) !== o || ar(this.options.enabled, R(this, _e)) !== ar(r.enabled, R(this, _e)) || Ts(this.options.staleTime, R(this, _e)) !== Ts(r.staleTime, R(this, _e))) && ye(this, De, Qh).call(this);
    const s = ye(this, De, qh).call(this);
    i && (R(this, _e) !== o || ar(this.options.enabled, R(this, _e)) !== ar(r.enabled, R(this, _e)) || s !== R(this, Po)) && ye(this, De, Zh).call(this, s);
  }
  getOptimisticResult(t) {
    const n = R(this, ln).getQueryCache().build(R(this, ln), t), r = this.createResult(n, t);
    return hA(this, r) && (K(this, Zt, r), K(this, Ns, this.options), K(this, yi, R(this, _e).state)), r;
  }
  getCurrentResult() {
    return R(this, Zt);
  }
  trackResult(t, n) {
    const r = {};
    return Object.keys(t).forEach((o) => {
      Object.defineProperty(r, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), n == null || n(o), t[o])
      });
    }), r;
  }
  trackProp(t) {
    R(this, zs).add(t);
  }
  getCurrentQuery() {
    return R(this, _e);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = R(this, ln).defaultQueryOptions(t), r = R(this, ln).getQueryCache().build(R(this, ln), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return ye(this, De, Wa).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), R(this, Zt)));
  }
  createResult(t, n) {
    var E;
    const r = R(this, _e), o = this.options, i = R(this, Zt), s = R(this, yi), a = R(this, Ns), u = t !== r ? t.state : R(this, Gl), { state: c } = t;
    let d = { ...c }, f = !1, y;
    if (n._optimisticResults) {
      const M = this.hasListeners(), w = !M && J0(t, n), P = M && e1(t, r, n, o);
      (w || P) && (d = {
        ...d,
        ...DS(c.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: g, errorUpdatedAt: v, status: x } = d;
    if (n.select && d.data !== void 0)
      if (i && d.data === (s == null ? void 0 : s.data) && n.select === R(this, Xl))
        y = R(this, Fs);
      else
        try {
          K(this, Xl, n.select), y = n.select(d.data), y = Hh(i == null ? void 0 : i.data, y, n), K(this, Fs, y), K(this, Rr, null);
        } catch (M) {
          K(this, Rr, M);
        }
    else
      y = d.data;
    if (n.placeholderData !== void 0 && y === void 0 && x === "pending") {
      let M;
      if (i != null && i.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        M = i.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (E = R(this, Ds)) == null ? void 0 : E.state.data,
        R(this, Ds)
      ) : n.placeholderData, n.select && M !== void 0)
        try {
          M = n.select(M), K(this, Rr, null);
        } catch (w) {
          K(this, Rr, w);
        }
      M !== void 0 && (x = "success", y = Hh(
        i == null ? void 0 : i.data,
        M,
        n
      ), f = !0);
    }
    R(this, Rr) && (g = R(this, Rr), y = R(this, Fs), v = Date.now(), x = "error");
    const m = d.fetchStatus === "fetching", h = x === "pending", p = x === "error", b = h && m, k = y !== void 0, T = {
      status: x,
      fetchStatus: d.fetchStatus,
      isPending: h,
      isSuccess: x === "success",
      isError: p,
      isInitialLoading: b,
      isLoading: b,
      data: y,
      dataUpdatedAt: d.dataUpdatedAt,
      error: g,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > u.dataUpdateCount || d.errorUpdateCount > u.errorUpdateCount,
      isFetching: m,
      isRefetching: m && !h,
      isLoadingError: p && !k,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: p && k,
      isStale: pg(t, n),
      refetch: this.refetch,
      promise: R(this, Ro)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (j) => {
        T.status === "error" ? j.reject(T.error) : T.data !== void 0 && j.resolve(T.data);
      }, w = () => {
        const j = K(this, Ro, T.promise = Kh());
        M(j);
      }, P = R(this, Ro);
      switch (P.status) {
        case "pending":
          t.queryHash === r.queryHash && M(P);
          break;
        case "fulfilled":
          (T.status === "error" || T.data !== P.value) && w();
          break;
        case "rejected":
          (T.status !== "error" || T.error !== P.reason) && w();
          break;
      }
    }
    return T;
  }
  updateResult(t) {
    const n = R(this, Zt), r = this.createResult(R(this, _e), this.options);
    if (K(this, yi, R(this, _e).state), K(this, Ns, this.options), R(this, yi).data !== void 0 && K(this, Ds, R(this, _e)), rd(r, n))
      return;
    K(this, Zt, r);
    const o = {}, i = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: s } = this.options, a = typeof s == "function" ? s() : s;
      if (a === "all" || !a && !R(this, zs).size)
        return !0;
      const l = new Set(
        a ?? R(this, zs)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(R(this, Zt)).some((u) => {
        const c = u;
        return R(this, Zt)[c] !== n[c] && l.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0), ye(this, De, BS).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ye(this, De, Gh).call(this);
  }
}, ln = new WeakMap(), _e = new WeakMap(), Gl = new WeakMap(), Zt = new WeakMap(), yi = new WeakMap(), Ns = new WeakMap(), Ro = new WeakMap(), Rr = new WeakMap(), Xl = new WeakMap(), Fs = new WeakMap(), Ds = new WeakMap(), gi = new WeakMap(), vi = new WeakMap(), Po = new WeakMap(), zs = new WeakMap(), De = new WeakSet(), Wa = function(t) {
  ye(this, De, Jh).call(this);
  let n = R(this, _e).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Dn)), n;
}, Qh = function() {
  ye(this, De, Xh).call(this);
  const t = Ts(
    this.options.staleTime,
    R(this, _e)
  );
  if (Ii || R(this, Zt).isStale || !Vh(t))
    return;
  const r = IS(R(this, Zt).dataUpdatedAt, t) + 1;
  K(this, gi, setTimeout(() => {
    R(this, Zt).isStale || this.updateResult();
  }, r));
}, qh = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(R(this, _e)) : this.options.refetchInterval) ?? !1;
}, Zh = function(t) {
  ye(this, De, Yh).call(this), K(this, Po, t), !(Ii || ar(this.options.enabled, R(this, _e)) === !1 || !Vh(R(this, Po)) || R(this, Po) === 0) && K(this, vi, setInterval(() => {
    (this.options.refetchIntervalInBackground || fg.isFocused()) && ye(this, De, Wa).call(this);
  }, R(this, Po)));
}, Gh = function() {
  ye(this, De, Qh).call(this), ye(this, De, Zh).call(this, ye(this, De, qh).call(this));
}, Xh = function() {
  R(this, gi) && (clearTimeout(R(this, gi)), K(this, gi, void 0));
}, Yh = function() {
  R(this, vi) && (clearInterval(R(this, vi)), K(this, vi, void 0));
}, Jh = function() {
  const t = R(this, ln).getQueryCache().build(R(this, ln), this.options);
  if (t === R(this, _e))
    return;
  const n = R(this, _e);
  K(this, _e, t), K(this, Gl, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, BS = function(t) {
  kt.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(R(this, Zt));
    }), R(this, ln).getQueryCache().notify({
      query: R(this, _e),
      type: "observerResultsUpdated"
    });
  });
}, N1);
function pA(e, t) {
  return ar(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function J0(e, t) {
  return pA(e, t) || e.state.data !== void 0 && em(e, t, t.refetchOnMount);
}
function em(e, t, n) {
  if (ar(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && pg(e, t);
  }
  return !1;
}
function e1(e, t, n, r) {
  return (e !== t || ar(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && pg(e, n);
}
function pg(e, t) {
  return ar(t.enabled, e) !== !1 && e.isStaleByTime(Ts(t.staleTime, e));
}
function hA(e, t) {
  return !rd(e.getCurrentResult(), t);
}
var Oo, Mo, un, Jr, ro, vc, tm, F1, mA = (F1 = class extends ya {
  constructor(t, n) {
    super();
    ne(this, ro);
    ne(this, Oo);
    ne(this, Mo);
    ne(this, un);
    ne(this, Jr);
    K(this, Oo, t), this.setOptions(n), this.bindMethods(), ye(this, ro, vc).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var r;
    const n = this.options;
    this.options = R(this, Oo).defaultMutationOptions(t), rd(this.options, n) || R(this, Oo).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: R(this, un),
      observer: this
    }), n != null && n.mutationKey && this.options.mutationKey && Ai(n.mutationKey) !== Ai(this.options.mutationKey) ? this.reset() : ((r = R(this, un)) == null ? void 0 : r.state.status) === "pending" && R(this, un).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = R(this, un)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    ye(this, ro, vc).call(this), ye(this, ro, tm).call(this, t);
  }
  getCurrentResult() {
    return R(this, Mo);
  }
  reset() {
    var t;
    (t = R(this, un)) == null || t.removeObserver(this), K(this, un, void 0), ye(this, ro, vc).call(this), ye(this, ro, tm).call(this);
  }
  mutate(t, n) {
    var r;
    return K(this, Jr, n), (r = R(this, un)) == null || r.removeObserver(this), K(this, un, R(this, Oo).getMutationCache().build(R(this, Oo), this.options)), R(this, un).addObserver(this), R(this, un).execute(t);
  }
}, Oo = new WeakMap(), Mo = new WeakMap(), un = new WeakMap(), Jr = new WeakMap(), ro = new WeakSet(), vc = function() {
  var n;
  const t = ((n = R(this, un)) == null ? void 0 : n.state) ?? zS();
  K(this, Mo, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, tm = function(t) {
  kt.batch(() => {
    var n, r, o, i, s, a, l, u;
    if (R(this, Jr) && this.hasListeners()) {
      const c = R(this, Mo).variables, d = R(this, Mo).context;
      (t == null ? void 0 : t.type) === "success" ? ((r = (n = R(this, Jr)).onSuccess) == null || r.call(n, t.data, c, d), (i = (o = R(this, Jr)).onSettled) == null || i.call(o, t.data, null, c, d)) : (t == null ? void 0 : t.type) === "error" && ((a = (s = R(this, Jr)).onError) == null || a.call(s, t.error, c, d), (u = (l = R(this, Jr)).onSettled) == null || u.call(
        l,
        void 0,
        t.error,
        c,
        d
      ));
    }
    this.listeners.forEach((c) => {
      c(R(this, Mo));
    });
  });
}, F1), US = _.createContext(
  void 0
), hg = (e) => {
  const t = _.useContext(US);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, yA = ({
  client: e,
  children: t
}) => (_.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ S.jsx(US.Provider, { value: e, children: t })), VS = _.createContext(!1), gA = () => _.useContext(VS);
VS.Provider;
function vA() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var bA = _.createContext(vA()), xA = () => _.useContext(bA);
function WS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function nm() {
}
var wA = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, SA = (e) => {
  _.useEffect(() => {
    e.clearReset();
  }, [e]);
}, _A = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && WS(n, [e.error, r]), kA = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, CA = (e, t) => e.isLoading && e.isFetching && !t, TA = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, t1 = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function EA(e, t, n) {
  var c, d, f, y, g;
  const r = hg(), o = gA(), i = xA(), s = r.defaultQueryOptions(e);
  (d = (c = r.getDefaultOptions().queries) == null ? void 0 : c._experimental_beforeQuery) == null || d.call(
    c,
    s
  ), s._optimisticResults = o ? "isRestoring" : "optimistic", kA(s), wA(s, i), SA(i);
  const a = !r.getQueryCache().get(s.queryHash), [l] = _.useState(
    () => new t(
      r,
      s
    )
  ), u = l.getOptimisticResult(s);
  if (_.useSyncExternalStore(
    _.useCallback(
      (v) => {
        const x = o ? nm : l.subscribe(kt.batchCalls(v));
        return l.updateResult(), x;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), _.useEffect(() => {
    l.setOptions(s, { listeners: !1 });
  }, [s, l]), TA(s, u))
    throw t1(s, l, i);
  if (_A({
    result: u,
    errorResetBoundary: i,
    throwOnError: s.throwOnError,
    query: r.getQueryCache().get(s.queryHash)
  }))
    throw u.error;
  if ((y = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || y.call(
    f,
    s,
    u
  ), s.experimental_prefetchInRender && !Ii && CA(u, o)) {
    const v = a ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      t1(s, l, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (g = r.getQueryCache().get(s.queryHash)) == null ? void 0 : g.promise
    );
    v == null || v.catch(nm).finally(() => {
      l.updateResult();
    });
  }
  return s.notifyOnChangeProps ? u : l.trackResult(u);
}
function n1(e, t) {
  return EA(e, fA);
}
function Nn(e, t) {
  const n = hg(), [r] = _.useState(
    () => new mA(
      n,
      e
    )
  );
  _.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const o = _.useSyncExternalStore(
    _.useCallback(
      (s) => r.subscribe(kt.batchCalls(s)),
      [r]
    ),
    () => r.getCurrentResult(),
    () => r.getCurrentResult()
  ), i = _.useCallback(
    (s, a) => {
      r.mutate(s, a).catch(nm);
    },
    [r]
  );
  if (o.error && WS(r.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: i, mutateAsync: o.mutate };
}
const RA = ':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}', rm = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), PA = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), HS = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), "Edit"), om = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"
}), "Fullscreen"), OA = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"
}), "FullscreenExit"), MA = vr(/* @__PURE__ */ S.jsx("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), "Logout"), id = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M6 19h12v2H6z"
}), "Minimize"), IA = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"
}), "Save"), im = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), sm = vr(/* @__PURE__ */ S.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff");
function KS(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: AA } = Object.prototype, { getPrototypeOf: mg } = Object, yf = /* @__PURE__ */ ((e) => (t) => {
  const n = AA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), br = (e) => (e = e.toLowerCase(), (t) => yf(t) === e), gf = (e) => (t) => typeof t === e, { isArray: ga } = Array, Il = gf("undefined");
function $A(e) {
  return e !== null && !Il(e) && e.constructor !== null && !Il(e.constructor) && En(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const QS = br("ArrayBuffer");
function jA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && QS(e.buffer), t;
}
const LA = gf("string"), En = gf("function"), qS = gf("number"), vf = (e) => e !== null && typeof e == "object", NA = (e) => e === !0 || e === !1, bc = (e) => {
  if (yf(e) !== "object")
    return !1;
  const t = mg(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, FA = br("Date"), DA = br("File"), zA = br("Blob"), BA = br("FileList"), UA = (e) => vf(e) && En(e.pipe), VA = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || En(e.append) && ((t = yf(e)) === "formdata" || // detect form-data instance
  t === "object" && En(e.toString) && e.toString() === "[object FormData]"));
}, WA = br("URLSearchParams"), [HA, KA, QA, qA] = ["ReadableStream", "Request", "Response", "Headers"].map(br), ZA = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function yu(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), ga(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function ZS(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const di = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, GS = (e) => !Il(e) && e !== di;
function am() {
  const { caseless: e } = GS(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && ZS(t, o) || o;
    bc(t[i]) && bc(r) ? t[i] = am(t[i], r) : bc(r) ? t[i] = am({}, r) : ga(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && yu(arguments[r], n);
  return t;
}
const GA = (e, t, n, { allOwnKeys: r } = {}) => (yu(t, (o, i) => {
  n && En(o) ? e[i] = KS(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), XA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), YA = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, JA = (e, t, n, r) => {
  let o, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      s = o[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = n !== !1 && mg(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, e4 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, t4 = (e) => {
  if (!e) return null;
  if (ga(e)) return e;
  let t = e.length;
  if (!qS(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, n4 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mg(Uint8Array)), r4 = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, o4 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, i4 = br("HTMLFormElement"), s4 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), r1 = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), a4 = br("RegExp"), XS = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  yu(n, (o, i) => {
    let s;
    (s = t(o, i, e)) !== !1 && (r[i] = s || o);
  }), Object.defineProperties(e, r);
}, l4 = (e) => {
  XS(e, (t, n) => {
    if (En(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (En(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, u4 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return ga(e) ? r(e) : r(String(e).split(t)), n;
}, c4 = () => {
}, d4 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, hp = "abcdefghijklmnopqrstuvwxyz", o1 = "0123456789", YS = {
  DIGIT: o1,
  ALPHA: hp,
  ALPHA_DIGIT: hp + hp.toUpperCase() + o1
}, f4 = (e = 16, t = YS.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function p4(e) {
  return !!(e && En(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const h4 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (vf(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = ga(r) ? [] : {};
        return yu(r, (s, a) => {
          const l = n(s, o + 1);
          !Il(l) && (i[a] = l);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, m4 = br("AsyncFunction"), y4 = (e) => e && (vf(e) || En(e)) && En(e.then) && En(e.catch), JS = ((e, t) => e ? setImmediate : t ? ((n, r) => (di.addEventListener("message", ({ source: o, data: i }) => {
  o === di && i === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), di.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  En(di.postMessage)
), g4 = typeof queueMicrotask < "u" ? queueMicrotask.bind(di) : typeof process < "u" && process.nextTick || JS, I = {
  isArray: ga,
  isArrayBuffer: QS,
  isBuffer: $A,
  isFormData: VA,
  isArrayBufferView: jA,
  isString: LA,
  isNumber: qS,
  isBoolean: NA,
  isObject: vf,
  isPlainObject: bc,
  isReadableStream: HA,
  isRequest: KA,
  isResponse: QA,
  isHeaders: qA,
  isUndefined: Il,
  isDate: FA,
  isFile: DA,
  isBlob: zA,
  isRegExp: a4,
  isFunction: En,
  isStream: UA,
  isURLSearchParams: WA,
  isTypedArray: n4,
  isFileList: BA,
  forEach: yu,
  merge: am,
  extend: GA,
  trim: ZA,
  stripBOM: XA,
  inherits: YA,
  toFlatObject: JA,
  kindOf: yf,
  kindOfTest: br,
  endsWith: e4,
  toArray: t4,
  forEachEntry: r4,
  matchAll: o4,
  isHTMLForm: i4,
  hasOwnProperty: r1,
  hasOwnProp: r1,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: XS,
  freezeMethods: l4,
  toObjectSet: u4,
  toCamelCase: s4,
  noop: c4,
  toFiniteNumber: d4,
  findKey: ZS,
  global: di,
  isContextDefined: GS,
  ALPHABET: YS,
  generateString: f4,
  isSpecCompliantForm: p4,
  toJSONObject: h4,
  isAsyncFn: m4,
  isThenable: y4,
  setImmediate: JS,
  asap: g4
};
function he(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(he, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const e_ = he.prototype, t_ = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  t_[e] = { value: e };
});
Object.defineProperties(he, t_);
Object.defineProperty(e_, "isAxiosError", { value: !0 });
he.from = (e, t, n, r, o, i) => {
  const s = Object.create(e_);
  return I.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), he.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const v4 = null;
function lm(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function n_(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function i1(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = n_(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function b4(e) {
  return I.isArray(e) && !e.some(lm);
}
const x4 = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function bf(e, t, n) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = I.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, x) {
    return !I.isUndefined(x[v]);
  });
  const r = n.metaTokens, o = n.visitor || c, i = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (I.isDate(g))
      return g.toISOString();
    if (!l && I.isBlob(g))
      throw new he("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(g) || I.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function c(g, v, x) {
    let m = g;
    if (g && !x && typeof g == "object") {
      if (I.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (I.isArray(g) && b4(g) || (I.isFileList(g) || I.endsWith(v, "[]")) && (m = I.toArray(g)))
        return v = n_(v), m.forEach(function(p, b) {
          !(I.isUndefined(p) || p === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? i1([v], b, i) : s === null ? v : v + "[]",
            u(p)
          );
        }), !1;
    }
    return lm(g) ? !0 : (t.append(i1(x, v, i), u(g)), !1);
  }
  const d = [], f = Object.assign(x4, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: lm
  });
  function y(g, v) {
    if (!I.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), I.forEach(g, function(m, h) {
        (!(I.isUndefined(m) || m === null) && o.call(
          t,
          m,
          I.isString(h) ? h.trim() : h,
          v,
          f
        )) === !0 && y(m, v ? v.concat(h) : [h]);
      }), d.pop();
    }
  }
  if (!I.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function s1(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function yg(e, t) {
  this._pairs = [], e && bf(e, this, t);
}
const r_ = yg.prototype;
r_.append = function(t, n) {
  this._pairs.push([t, n]);
};
r_.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, s1);
  } : s1;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function w4(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function o_(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || w4;
  I.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = I.isURLSearchParams(t) ? t.toString() : new yg(t, n).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class a1 {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    I.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const i_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, S4 = typeof URLSearchParams < "u" ? URLSearchParams : yg, _4 = typeof FormData < "u" ? FormData : null, k4 = typeof Blob < "u" ? Blob : null, C4 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: S4,
    FormData: _4,
    Blob: k4
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, gg = typeof window < "u" && typeof document < "u", um = typeof navigator == "object" && navigator || void 0, T4 = gg && (!um || ["ReactNative", "NativeScript", "NS"].indexOf(um.product) < 0), E4 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", R4 = gg && window.location.href || "http://localhost", P4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: gg,
  hasStandardBrowserEnv: T4,
  hasStandardBrowserWebWorkerEnv: E4,
  navigator: um,
  origin: R4
}, Symbol.toStringTag, { value: "Module" })), Wt = {
  ...P4,
  ...C4
};
function O4(e, t) {
  return bf(e, new Wt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Wt.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function M4(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function I4(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function s_(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), l = i >= n.length;
    return s = !s && I.isArray(o) ? o.length : s, l ? (I.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !a) : ((!o[s] || !I.isObject(o[s])) && (o[s] = []), t(n, r, o[s], i) && I.isArray(o[s]) && (o[s] = I4(o[s])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return I.forEachEntry(e, (r, o) => {
      t(M4(r), o, n, 0);
    }), n;
  }
  return null;
}
function A4(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const gu = {
  transitional: i_,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = I.isObject(t);
    if (i && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(s_(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return O4(t, this.formSerializer).toString();
      if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return bf(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), A4(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || gu.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? he.from(a, he.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Wt.classes.FormData,
    Blob: Wt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  gu.headers[e] = {};
});
const $4 = I.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), j4 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && $4[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, l1 = Symbol("internals");
function ja(e) {
  return e && String(e).trim().toLowerCase();
}
function xc(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(xc) : String(e);
}
function L4(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const N4 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mp(e, t, n, r, o) {
  if (I.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!I.isString(t)) {
    if (I.isString(r))
      return t.indexOf(r) !== -1;
    if (I.isRegExp(r))
      return r.test(t);
  }
}
function F4(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function D4(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0
    });
  });
}
class gn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ja(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = xc(a));
    }
    const s = (a, l) => I.forEach(a, (u, c) => i(u, c, l));
    if (I.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (I.isString(t) && (t = t.trim()) && !N4(t))
      s(j4(t), n);
    else if (I.isHeaders(t))
      for (const [a, l] of t.entries())
        i(l, a, r);
    else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ja(t), t) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return L4(o);
        if (I.isFunction(n))
          return n.call(this, o, r);
        if (I.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ja(t), t) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || mp(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (s = ja(s), s) {
        const a = I.findKey(r, s);
        a && (!n || mp(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return I.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || mp(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return I.forEach(this, (o, i) => {
      const s = I.findKey(r, i);
      if (s) {
        n[s] = xc(o), delete n[i];
        return;
      }
      const a = t ? F4(i) : String(i).trim();
      a !== i && delete n[i], n[a] = xc(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return I.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && I.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[l1] = this[l1] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(s) {
      const a = ja(s);
      r[a] || (D4(o, s), r[a] = !0);
    }
    return I.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(gn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
I.freezeMethods(gn);
function yp(e, t) {
  const n = this || gu, r = t || n, o = gn.from(r.headers);
  let i = r.data;
  return I.forEach(e, function(a) {
    i = a.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function a_(e) {
  return !!(e && e.__CANCEL__);
}
function va(e, t, n) {
  he.call(this, e ?? "canceled", he.ERR_CANCELED, t, n), this.name = "CanceledError";
}
I.inherits(va, he, {
  __CANCEL__: !0
});
function l_(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new he(
    "Request failed with status code " + n.status,
    [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function z4(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function B4(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[i];
    s || (s = u), n[o] = l, r[o] = u;
    let d = i, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - s < t)
      return;
    const y = c && u - c;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function U4(e, t) {
  let n = 0, r = 1e3 / t, o, i;
  const s = (u, c = Date.now()) => {
    n = c, o = null, i && (clearTimeout(i), i = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= r ? s(u, c) : (o = u, i || (i = setTimeout(() => {
      i = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const sd = (e, t, n = 3) => {
  let r = 0;
  const o = B4(50, 250);
  return U4((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, l = s - r, u = o(l), c = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - s) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, u1 = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, c1 = (e) => (...t) => I.asap(() => e(...t)), V4 = Wt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Wt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Wt.origin),
  Wt.navigator && /(msie|trident)/i.test(Wt.navigator.userAgent)
) : () => !0, W4 = Wt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      I.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), I.isString(r) && s.push("path=" + r), I.isString(o) && s.push("domain=" + o), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function H4(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function K4(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function u_(e, t) {
  return e && !H4(t) ? K4(e, t) : t;
}
const d1 = (e) => e instanceof gn ? { ...e } : e;
function $i(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d, f) {
    return I.isPlainObject(u) && I.isPlainObject(c) ? I.merge.call({ caseless: f }, u, c) : I.isPlainObject(c) ? I.merge({}, c) : I.isArray(c) ? c.slice() : c;
  }
  function o(u, c, d, f) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u))
        return r(void 0, u, d, f);
    } else return r(u, c, d, f);
  }
  function i(u, c) {
    if (!I.isUndefined(c))
      return r(void 0, c);
  }
  function s(u, c) {
    if (I.isUndefined(c)) {
      if (!I.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t)
      return r(u, c);
    if (d in e)
      return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c, d) => o(d1(u), d1(c), d, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = l[c] || o, f = d(e[c], t[c], c);
    I.isUndefined(f) && d !== a || (n[c] = f);
  }), n;
}
const c_ = (e) => {
  const t = $i({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = gn.from(s), t.url = o_(u_(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (I.isFormData(n)) {
    if (Wt.hasStandardBrowserEnv || Wt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (Wt.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)), r || r !== !1 && V4(t.url))) {
    const u = o && i && W4.read(i);
    u && s.set(o, u);
  }
  return t;
}, Q4 = typeof XMLHttpRequest < "u", q4 = Q4 && function(e) {
  return new Promise(function(n, r) {
    const o = c_(e);
    let i = o.data;
    const s = gn.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, c, d, f, y, g;
    function v() {
      y && y(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function m() {
      if (!x)
        return;
      const p = gn.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: p,
        config: e,
        request: x
      };
      l_(function(T) {
        n(T), v();
      }, function(T) {
        r(T), v();
      }, k), x = null;
    }
    "onloadend" in x ? x.onloadend = m : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, x.onabort = function() {
      x && (r(new he("Request aborted", he.ECONNABORTED, e, x)), x = null);
    }, x.onerror = function() {
      r(new he("Network Error", he.ERR_NETWORK, e, x)), x = null;
    }, x.ontimeout = function() {
      let b = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const k = o.transitional || i_;
      o.timeoutErrorMessage && (b = o.timeoutErrorMessage), r(new he(
        b,
        k.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
        e,
        x
      )), x = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in x && I.forEach(s.toJSON(), function(b, k) {
      x.setRequestHeader(k, b);
    }), I.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), a && a !== "json" && (x.responseType = o.responseType), u && ([f, g] = sd(u, !0), x.addEventListener("progress", f)), l && x.upload && ([d, y] = sd(l), x.upload.addEventListener("progress", d), x.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (p) => {
      x && (r(!p || p.type ? new va(null, e, x) : p), x.abort(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const h = z4(o.url);
    if (h && Wt.protocols.indexOf(h) === -1) {
      r(new he("Unsupported protocol " + h + ":", he.ERR_BAD_REQUEST, e));
      return;
    }
    x.send(i || null);
  });
}, Z4 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const i = function(u) {
      if (!o) {
        o = !0, a();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof he ? c : new va(c instanceof Error ? c.message : c));
      }
    };
    let s = t && setTimeout(() => {
      s = null, i(new he(`timeout ${t} of ms exceeded`, he.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: l } = r;
    return l.unsubscribe = () => I.asap(a), l;
  }
}, G4 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, X4 = async function* (e, t) {
  for await (const n of Y4(e))
    yield* G4(n, t);
}, Y4 = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, f1 = (e, t, n, r) => {
  const o = X4(e, t);
  let i = 0, s, a = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await o.next();
        if (u) {
          a(), l.close();
          return;
        }
        let d = c.byteLength;
        if (n) {
          let f = i += d;
          n(f);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw a(u), u;
      }
    },
    cancel(l) {
      return a(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, xf = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", d_ = xf && typeof ReadableStream == "function", J4 = xf && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), f_ = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, e$ = d_ && f_(() => {
  let e = !1;
  const t = new Request(Wt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), p1 = 64 * 1024, cm = d_ && f_(() => I.isReadableStream(new Response("").body)), ad = {
  stream: cm && ((e) => e.body)
};
xf && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ad[t] && (ad[t] = I.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new he(`Response type '${t}' is not supported`, he.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const t$ = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(Wt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await J4(e)).byteLength;
}, n$ = async (e, t) => {
  const n = I.toFiniteNumber(e.getContentLength());
  return n ?? t$(t);
}, r$ = xf && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = c_(e);
  u = u ? (u + "").toLowerCase() : "text";
  let y = Z4([o, i && i.toAbortSignal()], s), g;
  const v = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let x;
  try {
    if (l && e$ && n !== "get" && n !== "head" && (x = await n$(c, r)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (I.isFormData(r) && (C = k.headers.get("content-type")) && c.setContentType(C), k.body) {
        const [T, E] = u1(
          x,
          sd(c1(l))
        );
        r = f1(k.body, p1, T, E);
      }
    }
    I.isString(d) || (d = d ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    g = new Request(t, {
      ...f,
      signal: y,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: m ? d : void 0
    });
    let h = await fetch(g);
    const p = cm && (u === "stream" || u === "response");
    if (cm && (a || p && v)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((M) => {
        k[M] = h[M];
      });
      const C = I.toFiniteNumber(h.headers.get("content-length")), [T, E] = a && u1(
        C,
        sd(c1(a), !0)
      ) || [];
      h = new Response(
        f1(h.body, p1, T, () => {
          E && E(), v && v();
        }),
        k
      );
    }
    u = u || "text";
    let b = await ad[I.findKey(ad, u) || "text"](h, e);
    return !p && v && v(), await new Promise((k, C) => {
      l_(k, C, {
        data: b,
        headers: gn.from(h.headers),
        status: h.status,
        statusText: h.statusText,
        config: e,
        request: g
      });
    });
  } catch (m) {
    throw v && v(), m && m.name === "TypeError" && /fetch/i.test(m.message) ? Object.assign(
      new he("Network Error", he.ERR_NETWORK, e, g),
      {
        cause: m.cause || m
      }
    ) : he.from(m, m && m.code, e, g);
  }
}), dm = {
  http: v4,
  xhr: q4,
  fetch: r$
};
I.forEach(dm, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const h1 = (e) => `- ${e}`, o$ = (e) => I.isFunction(e) || e === null || e === !1, p_ = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let s;
      if (r = n, !o$(n) && (r = dm[(s = String(n)).toLowerCase()], r === void 0))
        throw new he(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(h1).join(`
`) : " " + h1(i[0]) : "as no adapter specified";
      throw new he(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: dm
};
function gp(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new va(null, e);
}
function m1(e) {
  return gp(e), e.headers = gn.from(e.headers), e.data = yp.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), p_.getAdapter(e.adapter || gu.adapter)(e).then(function(r) {
    return gp(e), r.data = yp.call(
      e,
      e.transformResponse,
      r
    ), r.headers = gn.from(r.headers), r;
  }, function(r) {
    return a_(r) || (gp(e), r && r.response && (r.response.data = yp.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = gn.from(r.response.headers))), Promise.reject(r);
  });
}
const h_ = "1.7.9", wf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wf[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const y1 = {};
wf.transitional = function(t, n, r) {
  function o(i, s) {
    return "[Axios v" + h_ + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new he(
        o(s, " has been removed" + (n ? " in " + n : "")),
        he.ERR_DEPRECATED
      );
    return n && !y1[s] && (y1[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
wf.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function i$(e, t, n) {
  if (typeof e != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], s = t[i];
    if (s) {
      const a = e[i], l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new he("option " + i + " must be " + l, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new he("Unknown option " + i, he.ERR_BAD_OPTION);
  }
}
const wc = {
  assertOptions: i$,
  validators: wf
}, _r = wc.validators;
class Si {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new a1(),
      response: new a1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $i(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && wc.assertOptions(r, {
      silentJSONParsing: _r.transitional(_r.boolean),
      forcedJSONParsing: _r.transitional(_r.boolean),
      clarifyTimeoutError: _r.transitional(_r.boolean)
    }, !1), o != null && (I.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : wc.assertOptions(o, {
      encode: _r.function,
      serialize: _r.function
    }, !0)), wc.assertOptions(n, {
      baseUrl: _r.spelling("baseURL"),
      withXsrfToken: _r.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = i && I.merge(
      i.common,
      i[n.method]
    );
    i && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), n.headers = gn.concat(s, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c, d = 0, f;
    if (!l) {
      const g = [m1.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, u), f = g.length, c = Promise.resolve(n); d < f; )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const g = a[d++], v = a[d++];
      try {
        y = g(y);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      c = m1.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = u.length; d < f; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = $i(this.defaults, t);
    const n = u_(t.baseURL, t.url);
    return o_(n, t.params, t.paramsSerializer);
  }
}
I.forEach(["delete", "get", "head", "options"], function(t) {
  Si.prototype[t] = function(n, r) {
    return this.request($i(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, s, a) {
      return this.request($i(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Si.prototype[t] = n(), Si.prototype[t + "Form"] = n(!0);
});
class vg {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      r.reason || (r.reason = new va(i, s, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new vg(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function s$(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function a$(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const fm = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(fm).forEach(([e, t]) => {
  fm[t] = e;
});
function m_(e) {
  const t = new Si(e), n = KS(Si.prototype.request, t);
  return I.extend(n, Si.prototype, t, { allOwnKeys: !0 }), I.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return m_($i(e, o));
  }, n;
}
const xt = m_(gu);
xt.Axios = Si;
xt.CanceledError = va;
xt.CancelToken = vg;
xt.isCancel = a_;
xt.VERSION = h_;
xt.toFormData = bf;
xt.AxiosError = he;
xt.Cancel = xt.CanceledError;
xt.all = function(t) {
  return Promise.all(t);
};
xt.spread = s$;
xt.isAxiosError = a$;
xt.mergeConfig = $i;
xt.AxiosHeaders = gn;
xt.formToJSON = (e) => s_(I.isHTMLForm(e) ? new FormData(e) : e);
xt.getAdapter = p_.getAdapter;
xt.HttpStatusCode = fm;
xt.default = xt;
const g1 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, c) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const f = t;
      t = c ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((y) => y(t, f));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)) }, l = t = e(r, o, a);
  return a;
}, l$ = (e) => e ? g1(e) : g1, u$ = (e) => e;
function c$(e, t = u$) {
  const n = re.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return re.useDebugValue(n), n;
}
const d$ = (e) => {
  const t = l$(e), n = (r) => c$(t, r);
  return Object.assign(n, t), n;
}, f$ = (e) => d$;
var y_ = Symbol.for("immer-nothing"), v1 = Symbol.for("immer-draftable"), In = Symbol.for("immer-state");
function lr(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ra = Object.getPrototypeOf;
function oa(e) {
  return !!e && !!e[In];
}
function ji(e) {
  var t;
  return e ? g_(e) || Array.isArray(e) || !!e[v1] || !!((t = e.constructor) != null && t[v1]) || _f(e) || kf(e) : !1;
}
var p$ = Object.prototype.constructor.toString();
function g_(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ra(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === p$;
}
function ld(e, t) {
  Sf(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Sf(e) {
  const t = e[In];
  return t ? t.type_ : Array.isArray(e) ? 1 : _f(e) ? 2 : kf(e) ? 3 : 0;
}
function pm(e, t) {
  return Sf(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function v_(e, t, n) {
  const r = Sf(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function h$(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _f(e) {
  return e instanceof Map;
}
function kf(e) {
  return e instanceof Set;
}
function si(e) {
  return e.copy_ || e.base_;
}
function hm(e, t) {
  if (_f(e))
    return new Map(e);
  if (kf(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = g_(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[In];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], a = r[s];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[s]
      });
    }
    return Object.create(ra(e), r);
  } else {
    const r = ra(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function bg(e, t = !1) {
  return Cf(e) || oa(e) || !ji(e) || (Sf(e) > 1 && (e.set = e.add = e.clear = e.delete = m$), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => bg(r, !0))), e;
}
function m$() {
  lr(2);
}
function Cf(e) {
  return Object.isFrozen(e);
}
var y$ = {};
function Li(e) {
  const t = y$[e];
  return t || lr(0, e), t;
}
var Al;
function b_() {
  return Al;
}
function g$(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function b1(e, t) {
  t && (Li("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function mm(e) {
  ym(e), e.drafts_.forEach(v$), e.drafts_ = null;
}
function ym(e) {
  e === Al && (Al = e.parent_);
}
function x1(e) {
  return Al = g$(Al, e);
}
function v$(e) {
  const t = e[In];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function w1(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[In].modified_ && (mm(t), lr(4)), ji(e) && (e = ud(t, e), t.parent_ || cd(t, e)), t.patches_ && Li("Patches").generateReplacementPatches_(
    n[In].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ud(t, n, []), mm(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== y_ ? e : void 0;
}
function ud(e, t, n) {
  if (Cf(t))
    return t;
  const r = t[In];
  if (!r)
    return ld(
      t,
      (o, i) => S1(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return cd(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), ld(
      i,
      (a, l) => S1(e, r, o, a, l, n, s)
    ), cd(e, o, !1), n && e.patches_ && Li("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function S1(e, t, n, r, o, i, s) {
  if (oa(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !pm(t.assigned_, r) ? i.concat(r) : void 0, l = ud(e, o, a);
    if (v_(n, r, l), oa(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && n.add(o);
  if (ji(o) && !Cf(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ud(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && cd(e, o);
  }
}
function cd(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bg(t, n);
}
function b$(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : b_(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = xg;
  n && (o = [r], i = $l);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var xg = {
  get(e, t) {
    if (t === In)
      return e;
    const n = si(e);
    if (!pm(n, t))
      return x$(e, n, t);
    const r = n[t];
    return e.finalized_ || !ji(r) ? r : r === vp(e.base_, t) ? (bp(e), e.copy_[t] = vm(r, e)) : r;
  },
  has(e, t) {
    return t in si(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(si(e));
  },
  set(e, t, n) {
    const r = x_(si(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = vp(si(e), t), i = o == null ? void 0 : o[In];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (h$(n, o) && (n !== void 0 || pm(e.base_, t)))
        return !0;
      bp(e), gm(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return vp(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, bp(e), gm(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = si(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    lr(11);
  },
  getPrototypeOf(e) {
    return ra(e.base_);
  },
  setPrototypeOf() {
    lr(12);
  }
}, $l = {};
ld(xg, (e, t) => {
  $l[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
$l.deleteProperty = function(e, t) {
  return $l.set.call(this, e, t, void 0);
};
$l.set = function(e, t, n) {
  return xg.set.call(this, e[0], t, n, e[0]);
};
function vp(e, t) {
  const n = e[In];
  return (n ? si(n) : e)[t];
}
function x$(e, t, n) {
  var o;
  const r = x_(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function x_(e, t) {
  if (!(t in e))
    return;
  let n = ra(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ra(n);
  }
}
function gm(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && gm(e.parent_));
}
function bp(e) {
  e.copy_ || (e.copy_ = hm(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var w$ = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(l = i, ...u) {
          return s.produce(l, (c) => n.call(this, c, ...u));
        };
      }
      typeof n != "function" && lr(6), r !== void 0 && typeof r != "function" && lr(7);
      let o;
      if (ji(t)) {
        const i = x1(this), s = vm(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? mm(i) : ym(i);
        }
        return b1(i, r), w1(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === y_ && (o = void 0), this.autoFreeze_ && bg(o, !0), r) {
          const i = [], s = [];
          Li("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        lr(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ji(e) || lr(8), oa(e) && (e = S$(e));
    const t = x1(this), n = vm(e, void 0);
    return n[In].isManual_ = !0, ym(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[In];
    (!n || !n.isManual_) && lr(9);
    const { scope_: r } = n;
    return b1(r, t), w1(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Li("Patches").applyPatches_;
    return oa(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function vm(e, t) {
  const n = _f(e) ? Li("MapSet").proxyMap_(e, t) : kf(e) ? Li("MapSet").proxySet_(e, t) : b$(e, t);
  return (t ? t.scope_ : b_()).drafts_.push(n), n;
}
function S$(e) {
  return oa(e) || lr(10, e), w_(e);
}
function w_(e) {
  if (!ji(e) || Cf(e))
    return e;
  const t = e[In];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = hm(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = hm(e, !0);
  return ld(n, (r, o) => {
    v_(n, r, w_(o));
  }), t && (t.finalized_ = !1), n;
}
var An = new w$(), _$ = An.produce;
An.produceWithPatches.bind(
  An
);
An.setAutoFreeze.bind(An);
An.setUseStrictShallowCopy.bind(An);
An.applyPatches.bind(An);
An.createDraft.bind(An);
An.finishDraft.bind(An);
const k$ = (e) => (t, n, r) => (r.setState = (o, i, ...s) => {
  const a = typeof o == "function" ? _$(o) : o;
  return t(a, i, ...s);
}, e(r.setState, n, r)), C$ = k$;
function T$(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var i;
      const s = (l) => l === null ? null : JSON.parse(l, void 0), a = (i = n.getItem(o)) != null ? i : null;
      return a instanceof Promise ? a.then(s) : s(a);
    },
    setItem: (o, i) => n.setItem(
      o,
      JSON.stringify(i, void 0)
    ),
    removeItem: (o) => n.removeItem(o)
  };
}
const bm = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return bm(r)(n);
      },
      catch(r) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return bm(r)(n);
      }
    };
  }
}, E$ = (e, t) => (n, r, o) => {
  let i = {
    storage: T$(() => localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, x) => ({
      ...x,
      ...v
    }),
    ...t
  }, s = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return e(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), n(...v);
      },
      r,
      o
    );
  const c = () => {
    const v = i.partialize({ ...r() });
    return u.setItem(i.name, {
      state: v,
      version: i.version
    });
  }, d = o.setState;
  o.setState = (v, x) => {
    d(v, x), c();
  };
  const f = e(
    (...v) => {
      n(...v), c();
    },
    r,
    o
  );
  o.getInitialState = () => f;
  let y;
  const g = () => {
    var v, x;
    if (!u) return;
    s = !1, a.forEach((h) => {
      var p;
      return h((p = r()) != null ? p : f);
    });
    const m = ((x = i.onRehydrateStorage) == null ? void 0 : x.call(i, (v = r()) != null ? v : f)) || void 0;
    return bm(u.getItem.bind(u))(i.name).then((h) => {
      if (h)
        if (typeof h.version == "number" && h.version !== i.version) {
          if (i.migrate) {
            const p = i.migrate(
              h.state,
              h.version
            );
            return p instanceof Promise ? p.then((b) => [!0, b]) : [!0, p];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, h.state];
      return [!1, void 0];
    }).then((h) => {
      var p;
      const [b, k] = h;
      if (y = i.merge(
        k,
        (p = r()) != null ? p : f
      ), n(y, !0), b)
        return c();
    }).then(() => {
      m == null || m(y, void 0), y = r(), s = !0, l.forEach((h) => h(y));
    }).catch((h) => {
      m == null || m(void 0, h);
    });
  };
  return o.persist = {
    setOptions: (v) => {
      i = {
        ...i,
        ...v
      }, v.storage && (u = v.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => g(),
    hasHydrated: () => s,
    onHydrate: (v) => (a.add(v), () => {
      a.delete(v);
    }),
    onFinishHydration: (v) => (l.add(v), () => {
      l.delete(v);
    })
  }, i.skipHydration || g(), y || f;
}, R$ = E$, P$ = {
  user: null,
  garageName: "",
  mediaLibrary: [],
  partsLibrary: [],
  mediaRecommendations: [],
  partsRecommendations: []
}, O$ = (e) => ({
  // User management actions
  setUser: (t) => {
    e((n) => {
      t ? n.user = { ...n.user || {}, ...t } : n.user = null;
    });
  },
  // Garage actions
  setGarageName: (t) => {
    e((n) => {
      n.garageName = t;
    });
  },
  // Library setters
  setMediaLibrary: (t) => {
    e((n) => {
      n.mediaLibrary = t;
    });
  },
  setPartsLibrary: (t) => {
    e((n) => {
      n.partsLibrary = t;
    });
  },
  setMediaRecommendations: (t) => {
    e((n) => {
      n.mediaRecommendations = t;
    });
  },
  setPartsRecommendations: (t) => {
    e((n) => {
      n.partsRecommendations = t;
    });
  },
  // Add item actions
  addMediaLibraryItem: (t) => {
    e((n) => {
      var r;
      (r = n.mediaLibrary) == null || r.unshift(t);
    });
  },
  addPartsLibraryItem: (t) => {
    e((n) => {
      var r;
      (r = n.partsLibrary) == null || r.unshift(t);
    });
  },
  addMediaRecommendation: (t) => {
    e((n) => {
      var r, o;
      ((r = n.mediaRecommendations) == null ? void 0 : r.length) === 10 && n.mediaRecommendations.pop(), (o = n.mediaRecommendations) == null || o.unshift(t);
    });
  },
  addPartsRecommendation: (t) => {
    e((n) => {
      var r, o;
      ((r = n.partsRecommendations) == null ? void 0 : r.length) === 10 && n.partsRecommendations.pop(), (o = n.partsRecommendations) == null || o.unshift(t);
    });
  },
  // Update item actions
  updateMediaLibraryItem: (t, n) => {
    e((r) => {
      var i;
      const o = (i = r.mediaLibrary) == null ? void 0 : i.find((s) => s.id === t);
      o && Object.assign(o, n);
    });
  },
  updatePartsLibraryItem: (t, n) => {
    e((r) => {
      var i;
      const o = (i = r.partsLibrary) == null ? void 0 : i.find((s) => s.id === t);
      o && Object.assign(o, n);
    });
  },
  updateMediaRecommendation: (t, n) => {
    e((r) => {
      var i;
      const o = (i = r.mediaRecommendations) == null ? void 0 : i.find(
        (s) => s.id === t
      );
      o && Object.assign(o, n);
    });
  },
  updatePartsRecommendation: (t, n) => {
    e((r) => {
      var i;
      const o = (i = r.partsRecommendations) == null ? void 0 : i.find(
        (s) => s.id === t
      );
      o && Object.assign(o, n);
    });
  },
  // Delete item actions
  deleteMediaLibraryItem: (t) => {
    e((n) => {
      var r;
      n.mediaLibrary = ((r = n.mediaLibrary) == null ? void 0 : r.filter((o) => o.id !== t)) || null;
    });
  },
  deletePartsLibraryItem: (t) => {
    e((n) => {
      var r;
      n.partsLibrary = ((r = n.partsLibrary) == null ? void 0 : r.filter((o) => o.id !== t)) || null;
    });
  },
  deleteMediaRecommendation: (t) => {
    e((n) => {
      var r;
      n.mediaRecommendations = ((r = n.mediaRecommendations) == null ? void 0 : r.filter(
        (o) => o.id !== t
      )) || null;
    });
  },
  deletePartsRecommendation: (t) => {
    e((n) => {
      var r;
      n.partsRecommendations = ((r = n.partsRecommendations) == null ? void 0 : r.filter(
        (o) => o.id !== t
      )) || null;
    });
  }
}), vu = f$()(
  R$(
    C$((e) => ({
      ...P$,
      ...O$(e)
    })),
    { name: "user-library" }
  )
), qn = xt.create({
  baseURL: "https://flib.criticalfuture.co"
});
qn.interceptors.request.use((e) => {
  const t = vu.getState().user, n = t == null ? void 0 : t.token;
  return n && (e.headers.Authorization = `Bearer ${n}`), e;
});
const wg = () => {
  const { setUser: e } = vu();
  return {
    signup: async (t) => (await qn.post("/api/auth/signup", t).catch((r) => {
      var i, s, a;
      const o = (a = (s = (i = r.response) == null ? void 0 : i.data) == null ? void 0 : s.error) == null ? void 0 : a.message;
      throw new Error(o);
    })).data,
    signin: async (t) => {
      const n = await qn.post("/api/auth/login", t).catch((i) => {
        var a, l, u;
        const s = (u = (l = (a = i.response) == null ? void 0 : a.data) == null ? void 0 : l.error) == null ? void 0 : u.message;
        throw new Error(s);
      }), { accessToken: r, ...o } = n.data;
      return e({ ...o, ...t, token: r }), n.data;
    },
    logout: async () => {
      const t = await qn.post("/api/auth/logout").catch((n) => {
        var o, i, s;
        const r = (s = (i = (o = n.response) == null ? void 0 : o.data) == null ? void 0 : i.error) == null ? void 0 : s.message;
        throw new Error(r);
      });
      return e(), t.data;
    }
  };
}, M$ = async () => (await qn.get("/api/media/get")).data, I$ = async () => (await qn.get("/api/parts/get")).data, A$ = async (e) => (await qn.post("/api/media/add", e)).data, $$ = async (e) => (await qn.post("/api/parts/add", e)).data, j$ = async (e) => (await qn.put(`/api/media/update/${e.id}`, e)).data, L$ = async (e) => (await qn.put(`/api/parts/update/${e.id}`, e)).data, N$ = async (e) => (await qn.delete(`/api/media/delete/${e}`)).data, F$ = async (e) => (await qn.delete(`/api/parts/delete/${e}`)).data, D$ = () => {
  const e = vu(), t = hg(), n = n1({
    queryKey: ["mediaLibrary"],
    queryFn: M$,
    initialData: e.mediaLibrary,
    staleTime: 0
  }), r = n1({
    queryKey: ["partsLibrary"],
    queryFn: I$,
    initialData: e.partsLibrary,
    staleTime: 0
  }), o = Nn({
    mutationFn: A$,
    onSuccess: (x) => {
      e.addMediaLibraryItem(x), t.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  }), i = Nn({
    mutationFn: $$,
    onSuccess: (x) => {
      e.addPartsLibraryItem(x), t.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  }), s = Nn({
    mutationFn: j$,
    onSuccess: (x) => {
      e.updateMediaLibraryItem(x.id, x), t.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  }), a = Nn({
    mutationFn: L$,
    onSuccess: (x) => {
      e.updatePartsLibraryItem(x.id, x), t.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  }), l = Nn({
    mutationFn: N$,
    onSuccess: (x, m) => {
      e.deleteMediaLibraryItem(m), t.invalidateQueries({ queryKey: ["mediaLibrary"] });
    }
  }), u = Nn({
    mutationFn: F$,
    onSuccess: (x, m) => {
      e.deletePartsLibraryItem(m), t.invalidateQueries({ queryKey: ["partsLibrary"] });
    }
  }), c = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.addMediaRecommendation(x), t.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  }), d = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.addPartsRecommendation(x), t.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  }), f = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.updateMediaRecommendation(x.id, x), t.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  }), y = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.updatePartsRecommendation(x.id, x), t.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  }), g = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.deleteMediaRecommendation(x), t.invalidateQueries({ queryKey: ["mediaRecommendations"] });
    }
  }), v = Nn({
    mutationFn: (x) => Promise.resolve(x),
    onSuccess: (x) => {
      e.deletePartsRecommendation(x), t.invalidateQueries({ queryKey: ["partsRecommendations"] });
    }
  });
  return {
    mediaLibrary: n.data,
    partsLibrary: r.data,
    mediaRecommendations: e.mediaRecommendations,
    partsRecommendations: e.partsRecommendations,
    addMediaItem: o.mutateAsync,
    addPartsItem: i.mutateAsync,
    addMediaRecommendation: c.mutateAsync,
    addPartsRecommendation: d.mutateAsync,
    updateMediaItem: s.mutateAsync,
    updatePartsItem: a.mutateAsync,
    updateMediaRecommendation: f.mutateAsync,
    updatePartsRecommendation: y.mutateAsync,
    deleteMediaItem: l.mutateAsync,
    deletePartsItem: u.mutateAsync,
    deleteMediaRecommendation: g.mutateAsync,
    deletePartsRecommendation: v.mutateAsync
  };
}, Gu = (e) => {
  const t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, n = e.match(t);
  return n && n[2].length === 11 ? n[2] : null;
}, z$ = ({
  title: e = "Library",
  items: t,
  onAddItem: n,
  onEditItem: r,
  onRemoveItem: o
}) => {
  const i = Vr(), [s, a] = _.useState(!1), [l, u] = _.useState(null), [c, d] = _.useState(!1), [f, y] = _.useState(!1), [g, v] = _.useState({
    title: "",
    description: "",
    url: "",
    image: ""
  }), [x, m] = _.useState(null), [h, p] = _.useState(!1), b = () => a(!s), k = _.useRef(null), C = _.useRef(null), T = () => {
    n && (n({ ...g, id: Date.now() }), d(!1), v({ title: "", description: "", url: "", image: "" }));
  }, E = () => {
    r && l && (r(l), y(!1));
  }, M = (O) => {
    o && o(O);
  }, w = (O) => {
    u(O), y(!0);
  }, P = (O) => {
    m(O), p(!0);
  }, j = (O) => {
    O.stopPropagation();
  };
  return /* @__PURE__ */ S.jsxs("div", { style: { height: "100%" }, children: [
    /* @__PURE__ */ S.jsx("div", { ref: C }),
    /* @__PURE__ */ S.jsxs(
      Bn,
      {
        spacing: 2,
        sx: {
          width: "100%",
          height: "100%",
          borderRadius: 3,
          bgcolor: "rgba(15,15,15,0.7)",
          backdropFilter: "blur(10px)",
          p: 2,
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            Vt,
            {
              elevation: 0,
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                bgcolor: "rgba(30,30,30,0.8)",
                borderRadius: 2
              },
              children: [
                /* @__PURE__ */ S.jsx(
                  He,
                  {
                    variant: "h6",
                    fontWeight: "bold",
                    sx: { ml: 1, color: "#efefef" },
                    children: e
                  }
                ),
                /* @__PURE__ */ S.jsxs(
                  Bn,
                  {
                    direction: "row",
                    spacing: 1,
                    children: [
                      n && /* @__PURE__ */ S.jsx(
                        St,
                        {
                          title: "Add new item",
                          slotProps: {
                            popper: {
                              container: C.current,
                              disablePortal: !0
                            }
                          },
                          children: /* @__PURE__ */ S.jsx(
                            Bt,
                            {
                              size: "small",
                              onClick: () => d(!0),
                              sx: {
                                color: i.palette.grey[300],
                                "&:hover": { color: i.palette.primary.main }
                              },
                              children: /* @__PURE__ */ S.jsx(rm, {})
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ S.jsx(
                        St,
                        {
                          title: s ? "Exit fullscreen" : "Enter fullscreen",
                          slotProps: {
                            popper: {
                              container: C.current,
                              disablePortal: !0
                            }
                          },
                          children: /* @__PURE__ */ S.jsx(
                            Bt,
                            {
                              size: "small",
                              onClick: b,
                              sx: {
                                color: i.palette.grey[300],
                                "&:hover": { color: i.palette.primary.main }
                              },
                              children: s ? /* @__PURE__ */ S.jsx(OA, {}) : /* @__PURE__ */ S.jsx(om, {})
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(tt, { sx: { flexGrow: 1, overflowY: "auto", pr: 1 }, children: /* @__PURE__ */ S.jsx(Bn, { spacing: 1.5, children: t == null ? void 0 : t.map((O) => /* @__PURE__ */ S.jsxs(
            Vt,
            {
              elevation: 3,
              onClick: () => P(O),
              sx: {
                p: 2,
                bgcolor: "rgba(30,30,30,0.8)",
                color: i.palette.grey[100],
                display: "flex",
                gap: 2,
                borderRadius: 2,
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "rgba(40,40,40,0.9)",
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ S.jsxs(tt, { sx: { flexGrow: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ S.jsx(
                    He,
                    {
                      variant: "subtitle1",
                      fontWeight: "bold",
                      sx: { mb: 0.75 },
                      children: O.title
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    He,
                    {
                      variant: "body2",
                      sx: {
                        color: i.palette.grey[300],
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      },
                      children: O.description
                    }
                  )
                ] }),
                /* @__PURE__ */ S.jsxs(
                  Bn,
                  {
                    direction: "row",
                    spacing: 1,
                    onClick: j,
                    children: [
                      /* @__PURE__ */ S.jsx(
                        St,
                        {
                          title: "Edit item",
                          slotProps: {
                            popper: {
                              container: C.current,
                              disablePortal: !0
                            }
                          },
                          children: /* @__PURE__ */ S.jsx(
                            Bt,
                            {
                              size: "small",
                              onClick: (L) => {
                                L.stopPropagation(), w(O);
                              },
                              sx: {
                                color: i.palette.grey[300],
                                "&:hover": { color: i.palette.primary.main }
                              },
                              children: /* @__PURE__ */ S.jsx(HS, {})
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ S.jsx(
                        St,
                        {
                          title: "Delete item",
                          slotProps: {
                            popper: {
                              container: C.current,
                              disablePortal: !0
                            }
                          },
                          children: /* @__PURE__ */ S.jsx(
                            Bt,
                            {
                              size: "small",
                              onClick: (L) => {
                                L.stopPropagation(), M(O.id);
                              },
                              sx: {
                                color: i.palette.grey[300],
                                "&:hover": { color: i.palette.error.main }
                              },
                              children: /* @__PURE__ */ S.jsx(PA, {})
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              ]
            },
            O.id
          )) }) })
        ]
      }
    ),
    /* @__PURE__ */ S.jsx(tt, { ref: k }),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: s,
        onClose: () => a(!1),
        maxWidth: "lg",
        fullWidth: !0,
        container: k.current,
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "90vh"
          }
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            ms,
            {
              sx: {
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                p: 3,
                color: i.palette.grey[100],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ S.jsx(He, { fontWeight: "bold", children: e }),
                /* @__PURE__ */ S.jsx(
                  St,
                  {
                    title: "Minimize",
                    slotProps: {
                      popper: {
                        container: C.current,
                        disablePortal: !0
                      }
                    },
                    children: /* @__PURE__ */ S.jsx(
                      Bt,
                      {
                        onClick: () => a(!1),
                        sx: {
                          color: i.palette.grey[300],
                          "&:hover": {
                            color: i.palette.error.main
                          }
                        },
                        children: /* @__PURE__ */ S.jsx(id, {})
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(hs, { sx: { p: 3 }, children: /* @__PURE__ */ S.jsx(Bn, { spacing: 3, children: t == null ? void 0 : t.map((O) => {
            const L = O.url ? Gu(O.url) : null;
            return /* @__PURE__ */ S.jsx(
              Vt,
              {
                elevation: 3,
                sx: {
                  p: 3,
                  bgcolor: "rgba(30,30,30,0.8)",
                  color: i.palette.grey[100],
                  borderRadius: 2
                },
                children: /* @__PURE__ */ S.jsxs(
                  Yt,
                  {
                    container: !0,
                    spacing: 3,
                    children: [
                      L && /* @__PURE__ */ S.jsx(Yt, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ S.jsx(
                        tt,
                        {
                          sx: {
                            position: "relative",
                            paddingTop: "56.25%",
                            width: "100%",
                            borderRadius: 2,
                            overflow: "hidden"
                          },
                          children: /* @__PURE__ */ S.jsx(
                            "iframe",
                            {
                              title: `YouTube video player - ${O.title}`,
                              style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: "none"
                              },
                              src: `https://www.youtube.com/embed/${L}`,
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0
                            }
                          )
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(Yt, { size: { xs: 12, md: L ? 6 : 12 }, children: /* @__PURE__ */ S.jsx(
                        tt,
                        {
                          sx: {
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                          },
                          children: /* @__PURE__ */ S.jsxs(tt, { sx: { flexGrow: 1 }, children: [
                            /* @__PURE__ */ S.jsx(
                              He,
                              {
                                variant: "h6",
                                fontWeight: "bold",
                                sx: { mb: 2 },
                                children: O.title
                              }
                            ),
                            /* @__PURE__ */ S.jsx(
                              He,
                              {
                                variant: "body1",
                                sx: {
                                  color: i.palette.grey[300],
                                  lineHeight: 1.6,
                                  mb: 2
                                },
                                children: O.description
                              }
                            ),
                            O.url && !L && /* @__PURE__ */ S.jsx(
                              St,
                              {
                                title: "Open resource in new tab",
                                slotProps: {
                                  popper: {
                                    container: C.current,
                                    disablePortal: !0
                                  }
                                },
                                children: /* @__PURE__ */ S.jsx(
                                  He,
                                  {
                                    component: "a",
                                    href: O.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    sx: {
                                      color: i.palette.primary.main,
                                      textDecoration: "none",
                                      "&:hover": {
                                        textDecoration: "underline"
                                      }
                                    },
                                    children: "Visit Resource"
                                  }
                                )
                              }
                            )
                          ] })
                        }
                      ) })
                    ]
                  }
                )
              },
              O.id
            );
          }) }) })
        ]
      }
    ),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: c,
        onClose: () => d(!1),
        maxWidth: "sm",
        fullWidth: !0,
        container: k.current,
        sx: { zIndex: 9999 },
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            zIndex: 9999
          }
        },
        children: [
          /* @__PURE__ */ S.jsx(ms, { sx: { color: i.palette.grey[100] }, children: "Add New Item" }),
          /* @__PURE__ */ S.jsx(hs, { children: /* @__PURE__ */ S.jsxs(
            Bn,
            {
              spacing: 2,
              sx: { mt: 2, zIndex: 9999 },
              children: [
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Title",
                    value: g.title,
                    onChange: (O) => v({ ...g, title: O.target.value }),
                    fullWidth: !0,
                    title: "Enter the title for your item",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Description",
                    value: g.description,
                    onChange: (O) => v({ ...g, description: O.target.value }),
                    fullWidth: !0,
                    multiline: !0,
                    rows: 3,
                    title: "Enter a description for your item",
                    sx: {
                      textarea: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "URL",
                    value: g.url,
                    onChange: (O) => v({ ...g, url: O.target.value }),
                    fullWidth: !0,
                    title: "Enter a URL (YouTube links will be embedded)",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Image URL",
                    value: g.image,
                    onChange: (O) => v({ ...g, image: O.target.value }),
                    fullWidth: !0,
                    title: "Enter an image URL (optional)",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ S.jsxs(I0, { children: [
            /* @__PURE__ */ S.jsx(
              St,
              {
                title: "Discard changes",
                slotProps: {
                  popper: {
                    container: C.current,
                    disablePortal: !0
                  }
                },
                children: /* @__PURE__ */ S.jsx(
                  Yi,
                  {
                    onClick: () => d(!1),
                    sx: { color: i.palette.grey[300] },
                    children: "Cancel"
                  }
                )
              }
            ),
            /* @__PURE__ */ S.jsx(
              St,
              {
                title: "Save new item",
                slotProps: {
                  popper: {
                    container: C.current,
                    disablePortal: !0
                  }
                },
                children: /* @__PURE__ */ S.jsx(
                  Yi,
                  {
                    onClick: T,
                    variant: "contained",
                    sx: { bgcolor: i.palette.primary.main, color: "#fff" },
                    children: "Add"
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: f,
        onClose: () => y(!1),
        maxWidth: "sm",
        fullWidth: !0,
        container: k.current,
        sx: { zIndex: 9999 },
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            zIndex: 9999
          }
        },
        children: [
          /* @__PURE__ */ S.jsx(ms, { sx: { color: i.palette.grey[100] }, children: "Edit Item" }),
          /* @__PURE__ */ S.jsx(hs, { children: /* @__PURE__ */ S.jsxs(
            Bn,
            {
              spacing: 2,
              sx: { mt: 2, zIndex: 9999 },
              children: [
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Title",
                    value: (l == null ? void 0 : l.title) || "",
                    onChange: (O) => u({
                      ...l,
                      title: O.target.value
                    }),
                    fullWidth: !0,
                    title: "Enter the title for your item",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Description",
                    value: (l == null ? void 0 : l.description) || "",
                    onChange: (O) => u({
                      ...l,
                      description: O.target.value
                    }),
                    fullWidth: !0,
                    multiline: !0,
                    rows: 3,
                    title: "Enter a description for your item",
                    sx: {
                      textarea: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "URL",
                    value: (l == null ? void 0 : l.url) || "",
                    onChange: (O) => u({
                      ...l,
                      url: O.target.value
                    }),
                    fullWidth: !0,
                    title: "Enter a URL (YouTube links will be embedded)",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Xt,
                  {
                    label: "Image URL",
                    value: (l == null ? void 0 : l.image) || "",
                    onChange: (O) => u({
                      ...l,
                      image: O.target.value
                    }),
                    fullWidth: !0,
                    title: "Enter an image URL (optional)",
                    sx: {
                      input: { color: i.palette.grey[100] },
                      "& .MuiInputLabel-root": { color: i.palette.grey[100] }
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ S.jsxs(I0, { children: [
            /* @__PURE__ */ S.jsx(
              St,
              {
                title: "Discard changes",
                slotProps: {
                  popper: {
                    container: C.current,
                    disablePortal: !0
                  }
                },
                children: /* @__PURE__ */ S.jsx(
                  Yi,
                  {
                    onClick: () => y(!1),
                    sx: { color: i.palette.grey[300] },
                    children: "Cancel"
                  }
                )
              }
            ),
            /* @__PURE__ */ S.jsx(
              St,
              {
                title: "Save changes",
                slotProps: {
                  popper: {
                    container: C.current,
                    disablePortal: !0
                  }
                },
                children: /* @__PURE__ */ S.jsx(
                  Yi,
                  {
                    onClick: E,
                    variant: "contained",
                    sx: { bgcolor: i.palette.primary.main, color: "#fff" },
                    children: "Save"
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: h,
        onClose: () => p(!1),
        maxWidth: "md",
        fullWidth: !0,
        container: k.current,
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "90vh"
          }
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            ms,
            {
              sx: {
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                p: 3,
                color: i.palette.grey[100],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ S.jsx(He, { fontWeight: "bold", children: "Item Details" }),
                /* @__PURE__ */ S.jsx(
                  St,
                  {
                    title: "Close details",
                    slotProps: {
                      popper: {
                        container: C.current,
                        disablePortal: !0
                      }
                    },
                    children: /* @__PURE__ */ S.jsx(
                      Bt,
                      {
                        onClick: () => p(!1),
                        sx: {
                          color: i.palette.grey[300],
                          "&:hover": { color: i.palette.error.main }
                        },
                        children: /* @__PURE__ */ S.jsx(id, {})
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(hs, { sx: { p: 3 }, children: x && /* @__PURE__ */ S.jsxs(
            Yt,
            {
              container: !0,
              spacing: 3,
              children: [
                x.url && Gu(x.url) && /* @__PURE__ */ S.jsx(Yt, { size: { xs: 12 }, children: /* @__PURE__ */ S.jsx(
                  tt,
                  {
                    sx: {
                      position: "relative",
                      paddingTop: "56.25%",
                      width: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      mb: 3
                    },
                    children: /* @__PURE__ */ S.jsx(
                      "iframe",
                      {
                        title: `YouTube video player - ${x.title}`,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none"
                        },
                        src: `https://www.youtube.com/embed/${Gu(x.url)}`,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0
                      }
                    )
                  }
                ) }),
                /* @__PURE__ */ S.jsxs(Yt, { size: { xs: 12 }, children: [
                  /* @__PURE__ */ S.jsx(
                    He,
                    {
                      variant: "h5",
                      fontWeight: "bold",
                      sx: { mb: 2, color: i.palette.grey[100] },
                      children: x.title
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    He,
                    {
                      variant: "body1",
                      sx: {
                        mb: 3,
                        color: i.palette.grey[300],
                        whiteSpace: "pre-wrap"
                      },
                      children: x.description
                    }
                  ),
                  x.url && !Gu(x.url) && /* @__PURE__ */ S.jsx(
                    St,
                    {
                      title: "Open resource in new tab",
                      slotProps: {
                        popper: {
                          container: C.current,
                          disablePortal: !0
                        }
                      },
                      children: /* @__PURE__ */ S.jsx(
                        Yi,
                        {
                          component: "a",
                          href: x.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          variant: "outlined",
                          sx: { color: i.palette.primary.main },
                          children: "Visit Resource"
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}, _1 = _.memo(z$), B$ = ({
  onMediaRecommendationAdd: e,
  onPartsRecommendationAdd: t
}) => {
  const n = Vr(), r = _.useCallback(async (a) => {
    try {
      const c = (await (await fetch(
        "https://llminabox.criticalfutureglobal.com/api/v1/prediction/16af3787-20f9-4555-9453-50e5110cf885",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: a.content
          })
        }
      )).json()).text, d = /\[|\]/g, f = c.replace(
        d,
        (v) => v === "\\\\" || v === "\\[\\]" ? v : v === "[" ? "{" : "}"
      ), g = JSON.parse(f).Recommendation;
      Object.keys(g).forEach((v) => {
        if (v.toLowerCase().includes("media")) {
          const x = g[v], m = {
            id: Date.now(),
            title: "",
            description: "",
            url: "",
            image: ""
          };
          Object.keys(x).forEach((h) => {
            h.toLowerCase().includes("title") && (m.title = x[h]), h.toLowerCase().includes("description") && (m.description = x[h]), h.toLowerCase().includes("url") && (m.url = x[h]);
          }), console.log("mediaRecommendationsData", m), e(m);
        }
        if (v.toLowerCase().includes("parts")) {
          const x = g[v], m = {
            id: Date.now(),
            title: "",
            description: "",
            url: "",
            image: ""
          };
          Object.keys(x).forEach((h) => {
            h.toLowerCase().includes("title") && (m.title = x[h]), h.toLowerCase().includes("description") && (m.description = x[h]), h.toLowerCase().includes("url") && (m.url = x[h]);
          }), console.log("partsRecommendationsData", m), t(m);
        }
      });
    } catch (l) {
      l instanceof Error && console.error("Error => ", l.message);
    }
  }, []), o = _.useMemo(
    () => ({
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "0f6e4479-ba3d-4a34-b0cb-be96f269a24c",
      assistant: {
        name: "Joe",
        description: "Fseries AI Assistant",
        welcomeMessage: "Hello! How can I help you?",
        voice: {
          name: "en-US-AndrewNeural",
          apiKey: "G7x9mVt2Q5bK8Jp4S1Zc",
          apiHost: "https://tts.criticalfutureglobal.com/get_tts"
        },
        avatar: {
          staticUrl: "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.png",
          liveUrl: "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.gif",
          videoUrl: "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.mp4"
        }
      },
      ui: {
        sidebar: !0,
        foregroundColor: "#e0e0e0",
        backgroundColor: "#1a1a1a",
        bodyBackgroundColor: "#545454bb"
      },
      onAPIMessage: r
    }),
    [r]
  ), i = _.useRef(null), s = nI(n.breakpoints.up("md"));
  return _.useEffect(() => {
    const a = s ? Eg(o, i.current) : Eg(o);
    return () => {
      a.destroy();
    };
  }, [s, o]), s ? /* @__PURE__ */ S.jsx(
    tt,
    {
      ref: i,
      sx: { width: "100%", height: "100%" }
    }
  ) : null;
}, U$ = _.memo(B$), V$ = (e) => {
  const t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, n = e.match(t);
  return n && n[2].length === 11 ? n[2] : null;
}, W$ = ({
  items: e,
  title: t,
  onAddToLibrary: n
}) => {
  const r = Vr(), [o, i] = re.useState(!1), s = () => i((g) => !g), a = _.useRef(null), l = _.useRef(null), [u, c] = _.useState(null), [d, f] = _.useState(!1), y = (g) => {
    c(g), f(!0);
  };
  return /* @__PURE__ */ S.jsxs("div", { style: { height: "100%" }, children: [
    /* @__PURE__ */ S.jsx("div", { ref: l }),
    /* @__PURE__ */ S.jsxs(
      Bn,
      {
        spacing: 2,
        sx: {
          width: "100%",
          height: "100%",
          borderRadius: 3,
          bgcolor: "rgba(15,15,15,0.6)",
          backdropFilter: "blur(8px)",
          p: 2,
          boxSizing: "border-box"
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            Vt,
            {
              elevation: 0,
              sx: {
                p: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "rgba(30,30,30,0.6)",
                borderRadius: 2,
                color: r.palette.grey[100]
              },
              children: [
                /* @__PURE__ */ S.jsx(
                  He,
                  {
                    variant: "h6",
                    fontWeight: "bold",
                    sx: { ml: 1 },
                    children: t
                  }
                ),
                /* @__PURE__ */ S.jsx(tt, { children: /* @__PURE__ */ S.jsx(
                  St,
                  {
                    title: o ? "Exit fullscreen" : "Enter fullscreen",
                    slotProps: {
                      popper: {
                        container: l.current,
                        disablePortal: !0
                      }
                    },
                    children: /* @__PURE__ */ S.jsx(
                      Bt,
                      {
                        size: "small",
                        onClick: s,
                        sx: {
                          color: r.palette.grey[300],
                          "&:hover": {
                            color: r.palette.primary.main,
                            transform: "scale(1.1)",
                            transition: "all 0.2s ease-in-out"
                          }
                        },
                        children: o ? /* @__PURE__ */ S.jsx(om, {}) : /* @__PURE__ */ S.jsx(om, {})
                      }
                    )
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(
            tt,
            {
              sx: {
                flexGrow: 1,
                overflowY: "auto",
                pr: 1,
                position: "relative",
                "&::-webkit-scrollbar": {
                  width: "8px"
                },
                "&::-webkit-scrollbar-track": {
                  background: "rgba(0,0,0,0.1)",
                  borderRadius: "4px"
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  "&:hover": {
                    background: "rgba(255,255,255,0.2)"
                  }
                }
              },
              children: /* @__PURE__ */ S.jsx(Bn, { spacing: 1.5, children: e == null ? void 0 : e.slice(0, 5).map((g) => /* @__PURE__ */ S.jsxs(
                Vt,
                {
                  elevation: 3,
                  onClick: () => y(g),
                  sx: {
                    p: 2,
                    bgcolor: "rgba(30,30,30,0.8)",
                    color: r.palette.grey[100],
                    display: "flex",
                    gap: 2,
                    cursor: "pointer",
                    borderRadius: 2,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      bgcolor: "rgba(40,40,40,0.9)",
                      transform: "translateX(4px)"
                    }
                  },
                  children: [
                    /* @__PURE__ */ S.jsxs(tt, { sx: { flexGrow: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ S.jsx(
                        He,
                        {
                          variant: "subtitle1",
                          fontWeight: "bold",
                          sx: { mb: 0.75 },
                          children: g.title
                        }
                      ),
                      /* @__PURE__ */ S.jsx(
                        He,
                        {
                          variant: "body2",
                          sx: {
                            color: r.palette.grey[300],
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          },
                          children: g.description
                        }
                      )
                    ] }),
                    /* @__PURE__ */ S.jsx(
                      St,
                      {
                        title: "Add to library",
                        slotProps: {
                          popper: {
                            container: l.current,
                            disablePortal: !0
                          }
                        },
                        children: /* @__PURE__ */ S.jsx(
                          Bt,
                          {
                            size: "small",
                            onClick: (v) => {
                              v.stopPropagation(), n(g);
                            },
                            sx: {
                              alignSelf: "center",
                              color: r.palette.grey[300],
                              transition: "all 0.2s ease-in-out",
                              "&:hover": {
                                color: r.palette.success.main,
                                transform: "scale(1.1)"
                              }
                            },
                            children: /* @__PURE__ */ S.jsx(rm, {})
                          }
                        )
                      }
                    )
                  ]
                },
                g.id
              )) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ S.jsx(tt, { ref: a }),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: o,
        onClose: () => i(!1),
        maxWidth: "lg",
        fullWidth: !0,
        container: a.current,
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "75vh",
            zIndex: 9999
          }
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            ms,
            {
              sx: {
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                p: 3,
                color: r.palette.grey[100],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ S.jsx(He, { fontWeight: "bold", children: t }),
                /* @__PURE__ */ S.jsx(
                  St,
                  {
                    title: "Minimize",
                    slotProps: {
                      popper: {
                        container: l.current,
                        disablePortal: !0
                      }
                    },
                    children: /* @__PURE__ */ S.jsx(
                      Bt,
                      {
                        onClick: () => i(!1),
                        sx: {
                          color: r.palette.grey[300],
                          "&:hover": {
                            color: r.palette.error.main
                          }
                        },
                        children: /* @__PURE__ */ S.jsx(id, {})
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ S.jsx(hs, { sx: { p: 3 }, children: /* @__PURE__ */ S.jsx(
            Bn,
            {
              spacing: 3,
              sx: { mt: 2 },
              children: e == null ? void 0 : e.map((g) => {
                const v = g.url ? V$(g.url) : null;
                return /* @__PURE__ */ S.jsx(
                  Vt,
                  {
                    elevation: 3,
                    sx: {
                      p: 3,
                      bgcolor: "rgba(30,30,30,0.8)",
                      color: r.palette.grey[100],
                      borderRadius: 2,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        bgcolor: "rgba(40,40,40,0.9)"
                      }
                    },
                    children: /* @__PURE__ */ S.jsxs(
                      Yt,
                      {
                        container: !0,
                        spacing: 3,
                        children: [
                          v && /* @__PURE__ */ S.jsx(Yt, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ S.jsx(
                            tt,
                            {
                              sx: {
                                position: "relative",
                                paddingTop: "56.25%",
                                width: "100%",
                                borderRadius: 2,
                                overflow: "hidden"
                              },
                              children: /* @__PURE__ */ S.jsx(
                                "iframe",
                                {
                                  title: `YouTube video player - ${g.title}`,
                                  style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: "none"
                                  },
                                  src: `https://www.youtube.com/embed/${v}`,
                                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                  allowFullScreen: !0
                                }
                              )
                            }
                          ) }),
                          /* @__PURE__ */ S.jsx(Yt, { size: { xs: 12, md: v ? 6 : 12 }, children: /* @__PURE__ */ S.jsxs(
                            tt,
                            {
                              sx: {
                                height: "100%",
                                display: "flex",
                                flexDirection: "column"
                              },
                              children: [
                                /* @__PURE__ */ S.jsxs(tt, { sx: { flexGrow: 1 }, children: [
                                  /* @__PURE__ */ S.jsx(
                                    He,
                                    {
                                      variant: "h6",
                                      fontWeight: "bold",
                                      sx: { mb: 2 },
                                      children: g.title
                                    }
                                  ),
                                  /* @__PURE__ */ S.jsx(
                                    He,
                                    {
                                      variant: "body1",
                                      sx: {
                                        color: r.palette.grey[300],
                                        lineHeight: 1.6,
                                        mb: 2
                                      },
                                      children: g.description
                                    }
                                  ),
                                  g.url && !v && /* @__PURE__ */ S.jsx(
                                    He,
                                    {
                                      component: "a",
                                      href: g.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      sx: {
                                        color: r.palette.primary.main,
                                        textDecoration: "none",
                                        "&:hover": {
                                          textDecoration: "underline"
                                        }
                                      },
                                      children: "Visit Resource"
                                    }
                                  )
                                ] }),
                                /* @__PURE__ */ S.jsx(
                                  tt,
                                  {
                                    sx: {
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      mt: 2
                                    },
                                    children: /* @__PURE__ */ S.jsx(
                                      St,
                                      {
                                        title: "Add to library",
                                        slotProps: {
                                          popper: {
                                            container: l.current,
                                            disablePortal: !0
                                          }
                                        },
                                        children: /* @__PURE__ */ S.jsx(
                                          Bt,
                                          {
                                            onClick: () => n(g),
                                            sx: {
                                              color: r.palette.grey[300],
                                              transition: "all 0.2s ease-in-out",
                                              "&:hover": {
                                                color: r.palette.success.main,
                                                transform: "scale(1.1)"
                                              }
                                            },
                                            children: /* @__PURE__ */ S.jsx(rm, { sx: { fontSize: 28 } })
                                          }
                                        )
                                      }
                                    )
                                  }
                                )
                              ]
                            }
                          ) })
                        ]
                      }
                    )
                  },
                  g.id
                );
              })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ S.jsxs(
      ps,
      {
        open: d,
        onClose: () => f(!1),
        maxWidth: "md",
        fullWidth: !0,
        container: a.current,
        PaperProps: {
          sx: {
            bgcolor: "rgba(15,15,15,0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
            maxHeight: "90vh"
          }
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            ms,
            {
              sx: {
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                p: 3,
                color: r.palette.grey[100],
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ S.jsx(He, { fontWeight: "bold", children: u == null ? void 0 : u.title }),
                /* @__PURE__ */ S.jsx(
                  St,
                  {
                    title: "Close",
                    slotProps: {
                      popper: {
                        container: l.current,
                        disablePortal: !0
                      }
                    },
                    children: /* @__PURE__ */ S.jsx(
                      Bt,
                      {
                        onClick: () => f(!1),
                        sx: {
                          color: r.palette.grey[300],
                          "&:hover": {
                            color: r.palette.error.main
                          }
                        },
                        children: /* @__PURE__ */ S.jsx(id, {})
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ S.jsxs(hs, { sx: { p: 3 }, children: [
            /* @__PURE__ */ S.jsx(
              He,
              {
                variant: "body1",
                sx: {
                  color: r.palette.grey[300],
                  lineHeight: 1.6,
                  mb: 2
                },
                children: u == null ? void 0 : u.description
              }
            ),
            (u == null ? void 0 : u.url) && /* @__PURE__ */ S.jsx(
              He,
              {
                component: "a",
                href: u.url,
                target: "_blank",
                rel: "noopener noreferrer",
                sx: {
                  color: r.palette.primary.main,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline"
                  }
                },
                children: "Visit Resource"
              }
            )
          ] })
        ]
      }
    )
  ] });
}, k1 = _.memo(W$), H$ = () => {
  const e = _.useRef(null), { garageName: t, setGarageName: n } = vu(), [r, o] = _.useState(!1), [i, s] = _.useState(t || ""), { logout: a } = wg(), l = async () => {
    try {
      await a(), ie.success("Logged out successfully");
    } catch (O) {
      ie.error(O.message);
    }
  }, {
    mediaLibrary: u,
    partsLibrary: c,
    mediaRecommendations: d,
    partsRecommendations: f,
    addMediaItem: y,
    addPartsItem: g,
    addMediaRecommendation: v,
    addPartsRecommendation: x,
    updateMediaItem: m,
    updatePartsItem: h,
    deleteMediaItem: p,
    deletePartsItem: b
  } = D$(), k = re.useCallback(
    async (O) => {
      try {
        await y(O), ie.success("Media item added successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [y]
  ), C = re.useCallback(
    async (O) => {
      try {
        await m(O), ie.success("Media item updated successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [m]
  ), T = re.useCallback(
    async (O) => {
      try {
        await p(O), ie.success("Media item deleted successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [p]
  ), E = re.useCallback(
    async (O) => {
      try {
        await g(O), ie.success("Parts item added successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [g]
  ), M = re.useCallback(
    async (O) => {
      try {
        await h(O), ie.success("Parts item updated successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [h]
  ), w = re.useCallback(
    async (O) => {
      try {
        await b(O), ie.success("Parts item deleted successfully");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [b]
  ), P = re.useCallback(
    async (O) => {
      try {
        await v(O), ie.success("Media recommendation added to library");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [v]
  ), j = re.useCallback(
    async (O) => {
      try {
        await x(O), ie.success("Parts recommendation added to library");
      } catch (L) {
        ie.error(L.message);
      }
    },
    [x]
  );
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
      },
      children: [
        /* @__PURE__ */ S.jsx("div", { ref: e }),
        /* @__PURE__ */ S.jsxs(
          Yt,
          {
            container: !0,
            spacing: 4,
            sx: { p: 2 },
            children: [
              /* @__PURE__ */ S.jsxs(
                Yt,
                {
                  size: 12,
                  sx: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2
                  },
                  children: [
                    /* @__PURE__ */ S.jsxs(
                      tt,
                      {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          padding: 1,
                          borderRadius: 2,
                          bgcolor: "rgba(0,0,0,0.5)",
                          backdropFilter: "blur(8px)"
                        },
                        children: [
                          r ? /* @__PURE__ */ S.jsx(
                            Xt,
                            {
                              variant: "standard",
                              value: i,
                              onChange: (O) => s(O.target.value),
                              sx: { input: { color: "#fff" } }
                            }
                          ) : /* @__PURE__ */ S.jsxs(
                            He,
                            {
                              variant: "h6",
                              color: "#fff",
                              children: [
                                t ?? "",
                                " Garage"
                              ]
                            }
                          ),
                          /* @__PURE__ */ S.jsx(
                            St,
                            {
                              title: r ? "Save name" : "Edit name",
                              slotProps: {
                                popper: {
                                  container: e.current,
                                  disablePortal: !0
                                }
                              },
                              children: /* @__PURE__ */ S.jsx(
                                Bt,
                                {
                                  onClick: () => {
                                    r ? (n(i), o(!1)) : (o(!0), s(t ?? ""));
                                  },
                                  sx: { color: "#fff" },
                                  children: r ? /* @__PURE__ */ S.jsx(IA, {}) : /* @__PURE__ */ S.jsx(HS, {})
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ S.jsx(
                      St,
                      {
                        title: "Logout",
                        slotProps: {
                          popper: {
                            container: e.current,
                            disablePortal: !0
                          }
                        },
                        children: /* @__PURE__ */ S.jsx(
                          Bt,
                          {
                            onClick: l,
                            sx: {
                              backgroundColor: "rgba(0,0,0,0.5)",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "rgba(0,0,0,0.7)",
                                color: "rgba(255,255,255,0.7)"
                              }
                            },
                            children: /* @__PURE__ */ S.jsx(MA, {})
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ S.jsx(
                Yt,
                {
                  size: 12,
                  sx: { display: { xs: "none", md: "flex" } },
                  children: /* @__PURE__ */ S.jsx(
                    Vt,
                    {
                      variant: "elevation",
                      elevation: 2,
                      sx: {
                        flexGrow: 1,
                        borderRadius: 8,
                        height: "80vh",
                        overflow: "hidden",
                        bgcolor: "transparent"
                      },
                      children: /* @__PURE__ */ S.jsx(
                        U$,
                        {
                          onMediaRecommendationAdd: P,
                          onPartsRecommendationAdd: j
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsxs(
                Yt,
                {
                  size: 12,
                  container: !0,
                  sx: { overflow: "auto", maxHeight: "80vh" },
                  children: [
                    /* @__PURE__ */ S.jsx(
                      Yt,
                      {
                        size: { xs: 12, md: 6 },
                        sx: { display: "flex" },
                        children: /* @__PURE__ */ S.jsxs(
                          Bn,
                          {
                            direction: "column",
                            spacing: 3,
                            children: [
                              /* @__PURE__ */ S.jsx(
                                Vt,
                                {
                                  variant: "elevation",
                                  elevation: 2,
                                  sx: {
                                    flexGrow: 1,
                                    borderRadius: 8,
                                    minWidth: "200px",
                                    maxHeight: "38vh",
                                    overflow: "hidden",
                                    bgcolor: "transparent"
                                  },
                                  children: /* @__PURE__ */ S.jsx(
                                    _1,
                                    {
                                      title: "Media Library",
                                      items: u,
                                      onAddItem: k,
                                      onEditItem: C,
                                      onRemoveItem: T
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ S.jsx(
                                Vt,
                                {
                                  variant: "elevation",
                                  elevation: 2,
                                  sx: {
                                    flexGrow: 1,
                                    borderRadius: 8,
                                    minWidth: "200px",
                                    maxHeight: "38vh",
                                    overflow: "hidden",
                                    bgcolor: "transparent"
                                  },
                                  children: /* @__PURE__ */ S.jsx(
                                    k1,
                                    {
                                      title: "Media Recommendations",
                                      items: d,
                                      onAddToLibrary: k
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ S.jsx(
                      Yt,
                      {
                        size: { xs: 12, md: 6 },
                        sx: { display: "flex" },
                        children: /* @__PURE__ */ S.jsxs(
                          Bn,
                          {
                            direction: "column",
                            spacing: 3,
                            children: [
                              /* @__PURE__ */ S.jsx(
                                Vt,
                                {
                                  variant: "elevation",
                                  elevation: 2,
                                  sx: {
                                    flexGrow: 1,
                                    borderRadius: 8,
                                    minWidth: "200px",
                                    maxHeight: "38vh",
                                    overflow: "hidden",
                                    bgcolor: "transparent"
                                  },
                                  children: /* @__PURE__ */ S.jsx(
                                    _1,
                                    {
                                      title: "Parts Library",
                                      items: c,
                                      onAddItem: E,
                                      onEditItem: M,
                                      onRemoveItem: w
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ S.jsx(
                                Vt,
                                {
                                  variant: "elevation",
                                  elevation: 2,
                                  sx: {
                                    flexGrow: 1,
                                    borderRadius: 8,
                                    minWidth: "200px",
                                    maxHeight: "38vh",
                                    overflow: "hidden",
                                    bgcolor: "transparent"
                                  },
                                  children: /* @__PURE__ */ S.jsx(
                                    k1,
                                    {
                                      title: "Parts Recommendations",
                                      items: f,
                                      onAddToLibrary: E
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, K$ = _.memo(H$);
function Q$(e) {
  return ke("MuiLoadingButton", e);
}
const Qr = Pe("MuiLoadingButton", ["root", "label", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]), q$ = (e) => {
  const {
    loading: t,
    loadingPosition: n,
    classes: r
  } = e, o = {
    root: ["root", t && "loading"],
    label: ["label"],
    startIcon: [t && `startIconLoading${G(n)}`],
    endIcon: [t && `endIconLoading${G(n)}`],
    loadingIndicator: ["loadingIndicator", t && `loadingIndicator${G(n)}`]
  }, i = Oe(o, Q$, r);
  return {
    ...r,
    // forward the outlined, color, etc. classes to Button
    ...i
  };
}, Z$ = (e) => e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as" && e !== "classes", G$ = q(Yi, {
  shouldForwardProp: (e) => Z$(e) || e === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, t.startIconLoadingStart && {
    [`& .${Qr.startIconLoadingStart}`]: t.startIconLoadingStart
  }, t.endIconLoadingEnd && {
    [`& .${Qr.endIconLoadingEnd}`]: t.endIconLoadingEnd
  }]
})(Le(({
  theme: e
}) => ({
  display: "inline-flex",
  [`& .${Qr.startIconLoadingStart}, & .${Qr.endIconLoadingEnd}`]: {
    transition: e.transitions.create(["opacity"], {
      duration: e.transitions.duration.short
    }),
    opacity: 0
  },
  variants: [{
    props: {
      loadingPosition: "center"
    },
    style: {
      transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
        duration: e.transitions.duration.short
      }),
      [`&.${Qr.loading}`]: {
        color: "transparent"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.loadingPosition === "start" && t.fullWidth,
    style: {
      [`& .${Qr.startIconLoadingStart}, & .${Qr.endIconLoadingEnd}`]: {
        transition: e.transitions.create(["opacity"], {
          duration: e.transitions.duration.short
        }),
        opacity: 0,
        marginRight: -8
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.loadingPosition === "end" && t.fullWidth,
    style: {
      [`& .${Qr.startIconLoadingStart}, & .${Qr.endIconLoadingEnd}`]: {
        transition: e.transitions.create(["opacity"], {
          duration: e.transitions.duration.short
        }),
        opacity: 0,
        marginLeft: -8
      }
    }
  }]
}))), X$ = q("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.loadingIndicator, t[`loadingIndicator${G(n.loadingPosition)}`]];
  }
})(Le(({
  theme: e
}) => ({
  position: "absolute",
  visibility: "visible",
  display: "flex",
  variants: [{
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: ({
      loadingPosition: t,
      ownerState: n
    }) => t === "start" && n.size !== "small",
    style: {
      left: 14
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: ({
      loadingPosition: t,
      ownerState: n
    }) => t === "end" && n.size !== "small",
    style: {
      right: 14
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: ({
      ownerState: t
    }) => t.loadingPosition === "start" && t.fullWidth,
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: ({
      ownerState: t
    }) => t.loadingPosition === "end" && t.fullWidth,
    style: {
      position: "relative",
      right: -10
    }
  }]
}))), C1 = q("span", {
  name: "MuiLoadingButton",
  slot: "Label",
  overridesResolver: (e, t) => [t.label]
})({
  display: "inherit",
  alignItems: "inherit",
  justifyContent: "inherit"
}), S_ = /* @__PURE__ */ _.forwardRef(function(t, n) {
  const r = _.useContext(mS), o = Gs(r, t), i = Ce({
    props: o,
    name: "MuiLoadingButton"
  }), {
    children: s,
    disabled: a = !1,
    id: l,
    loading: u = !1,
    loadingIndicator: c,
    loadingPosition: d = "center",
    variant: f = "text",
    ...y
  } = i, g = du(l), v = c ?? /* @__PURE__ */ S.jsx(YM, {
    "aria-labelledby": g,
    color: "inherit",
    size: 16
  }), x = {
    ...i,
    disabled: a,
    loading: u,
    loadingIndicator: v,
    loadingPosition: d,
    variant: f
  }, m = q$(x), h = u ? /* @__PURE__ */ S.jsx(X$, {
    className: m.loadingIndicator,
    ownerState: x,
    children: v
  }) : null;
  return /* @__PURE__ */ S.jsxs(G$, {
    disabled: a || u,
    id: g,
    ref: n,
    ...y,
    variant: f,
    classes: m,
    ownerState: x,
    children: [x.loadingPosition === "end" ? /* @__PURE__ */ S.jsx(C1, {
      className: m.label,
      children: s
    }) : h, x.loadingPosition === "end" ? h : /* @__PURE__ */ S.jsx(C1, {
      className: m.label,
      children: s
    })]
  });
});
var Re;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const i = {};
    for (const s of o)
      i[s] = s;
    return i;
  }, e.getValidEnumValues = (o) => {
    const i = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), s = {};
    for (const a of i)
      s[a] = o[a];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(i) {
    return o[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const i = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && i.push(s);
    return i;
  }, e.find = (o, i) => {
    for (const s of o)
      if (i(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, i = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, i) => typeof i == "bigint" ? i.toString() : i;
})(Re || (Re = {}));
var xm;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(xm || (xm = {}));
const Q = Re.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Yr = (e) => {
  switch (typeof e) {
    case "undefined":
      return Q.undefined;
    case "string":
      return Q.string;
    case "number":
      return isNaN(e) ? Q.nan : Q.number;
    case "boolean":
      return Q.boolean;
    case "function":
      return Q.function;
    case "bigint":
      return Q.bigint;
    case "symbol":
      return Q.symbol;
    case "object":
      return Array.isArray(e) ? Q.array : e === null ? Q.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? Q.promise : typeof Map < "u" && e instanceof Map ? Q.map : typeof Set < "u" && e instanceof Set ? Q.set : typeof Date < "u" && e instanceof Date ? Q.date : Q.object;
    default:
      return Q.unknown;
  }
}, z = Re.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Y$ = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Rn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, o = (i) => {
      for (const s of i.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let a = r, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(s))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Rn))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Re.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Rn.create = (e) => new Rn(e);
const ia = (e, t) => {
  let n;
  switch (e.code) {
    case z.invalid_type:
      e.received === Q.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case z.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Re.jsonStringifyReplacer)}`;
      break;
    case z.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Re.joinValues(e.keys, ", ")}`;
      break;
    case z.invalid_union:
      n = "Invalid input";
      break;
    case z.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Re.joinValues(e.options)}`;
      break;
    case z.invalid_enum_value:
      n = `Invalid enum value. Expected ${Re.joinValues(e.options)}, received '${e.received}'`;
      break;
    case z.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case z.invalid_return_type:
      n = "Invalid function return type";
      break;
    case z.invalid_date:
      n = "Invalid date";
      break;
    case z.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Re.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case z.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case z.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case z.custom:
      n = "Invalid input";
      break;
    case z.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case z.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case z.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Re.assertNever(e);
  }
  return { message: n };
};
let __ = ia;
function J$(e) {
  __ = e;
}
function dd() {
  return __;
}
const fd = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, i = [...n, ...o.path || []], s = {
    ...o,
    path: i
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: i,
      message: o.message
    };
  let a = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(s, { data: t, defaultError: a }).message;
  return {
    ...o,
    path: i,
    message: a
  };
}, ej = [];
function W(e, t) {
  const n = dd(), r = fd({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      n,
      // then global override map
      n === ia ? void 0 : ia
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Kt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return ce;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const i = await o.key, s = await o.value;
      r.push({
        key: i,
        value: s
      });
    }
    return Kt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: i, value: s } = o;
      if (i.status === "aborted" || s.status === "aborted")
        return ce;
      i.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[i.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const ce = Object.freeze({
  status: "aborted"
}), ys = (e) => ({ status: "dirty", value: e }), nn = (e) => ({ status: "valid", value: e }), wm = (e) => e.status === "aborted", Sm = (e) => e.status === "dirty", Ni = (e) => e.status === "valid", jl = (e) => typeof Promise < "u" && e instanceof Promise;
function pd(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function k_(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Y;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Y || (Y = {}));
var Ha, Ka;
class Br {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const T1 = (e, t) => {
  if (Ni(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Rn(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function me(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, a) => {
    var l, u;
    const { message: c } = e;
    return s.code === "invalid_enum_value" ? { message: c ?? a.defaultError } : typeof a.data > "u" ? { message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError } : s.code !== "invalid_type" ? { message: a.defaultError } : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError };
  }, description: o };
}
class ge {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Yr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Yr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Kt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Yr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (jl(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Yr(t)
    }, i = this._parseSync({ data: t, path: o.path, parent: o });
    return T1(o, i);
  }
  "~validate"(t) {
    var n, r;
    const o = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Yr(t)
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: o });
        return Ni(i) ? {
          value: i.value
        } : {
          issues: o.common.issues
        };
      } catch (i) {
        !((r = (n = i == null ? void 0 : i.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = !0), o.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: o }).then((i) => Ni(i) ? {
      value: i.value
    } : {
      issues: o.common.issues
    });
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Yr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), i = await (jl(o) ? o : Promise.resolve(o));
    return T1(r, i);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, i) => {
      const s = t(o), a = () => i.addIssue({
        code: z.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((l) => l ? !0 : (a(), !1)) : s ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new yr({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (n) => this["~validate"](n)
    };
  }
  optional() {
    return Nr.create(this, this._def);
  }
  nullable() {
    return Go.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return pr.create(this);
  }
  promise() {
    return aa.create(this, this._def);
  }
  or(t) {
    return Dl.create([this, t], this._def);
  }
  and(t) {
    return zl.create(this, t, this._def);
  }
  transform(t) {
    return new yr({
      ...me(this._def),
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Hl({
      ...me(this._def),
      innerType: this,
      defaultValue: n,
      typeName: le.ZodDefault
    });
  }
  brand() {
    return new Sg({
      typeName: le.ZodBranded,
      type: this,
      ...me(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Kl({
      ...me(this._def),
      innerType: this,
      catchValue: n,
      typeName: le.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return bu.create(this, t);
  }
  readonly() {
    return Ql.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const tj = /^c[^\s-]{8,}$/i, nj = /^[0-9a-z]+$/, rj = /^[0-9A-HJKMNP-TV-Z]{26}$/i, oj = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ij = /^[a-z0-9_-]{21}$/i, sj = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, aj = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, lj = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, uj = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xp;
const cj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, dj = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, fj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, pj = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, hj = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, mj = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, C_ = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", yj = new RegExp(`^${C_}$`);
function T_(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function gj(e) {
  return new RegExp(`^${T_(e)}$`);
}
function E_(e) {
  let t = `${C_}T${T_(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function vj(e, t) {
  return !!((t === "v4" || !t) && cj.test(e) || (t === "v6" || !t) && fj.test(e));
}
function bj(e, t) {
  if (!sj.test(e))
    return !1;
  try {
    const [n] = e.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), o = JSON.parse(atob(r));
    return !(typeof o != "object" || o === null || !o.typ || !o.alg || t && o.alg !== t);
  } catch {
    return !1;
  }
}
function xj(e, t) {
  return !!((t === "v4" || !t) && dj.test(e) || (t === "v6" || !t) && pj.test(e));
}
class ur extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== Q.string) {
      const i = this._getOrReturnCtx(t);
      return W(i, {
        code: z.invalid_type,
        expected: Q.string,
        received: i.parsedType
      }), ce;
    }
    const r = new Kt();
    let o;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (o = this._getOrReturnCtx(t, o), W(o, {
          code: z.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (o = this._getOrReturnCtx(t, o), W(o, {
          code: z.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const s = t.data.length > i.value, a = t.data.length < i.value;
        (s || a) && (o = this._getOrReturnCtx(t, o), s ? W(o, {
          code: z.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && W(o, {
          code: z.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        lj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "email",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        xp || (xp = new RegExp(uj, "u")), xp.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "emoji",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        oj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "uuid",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "nanoid")
        ij.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "nanoid",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        tj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "cuid",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        nj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "cuid2",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        rj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
          validation: "ulid",
          code: z.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), W(o, {
            validation: "url",
            code: z.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "regex",
        code: z.invalid_string,
        message: i.message
      }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? E_(i).test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? yj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? gj(i).test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? aj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "duration",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? vj(t.data, i.version) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "ip",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "jwt" ? bj(t.data, i.alg) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "jwt",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "cidr" ? xj(t.data, i.version) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "cidr",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? hj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "base64",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64url" ? mj.test(t.data) || (o = this._getOrReturnCtx(t, o), W(o, {
        validation: "base64url",
        code: z.invalid_string,
        message: i.message
      }), r.dirty()) : Re.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: z.invalid_string,
      ...Y.errToObj(r)
    });
  }
  _addCheck(t) {
    return new ur({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Y.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Y.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Y.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Y.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Y.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Y.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Y.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Y.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Y.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...Y.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...Y.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Y.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...Y.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...Y.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Y.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Y.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Y.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Y.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Y.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Y.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Y.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Y.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Y.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, Y.errToObj(t));
  }
  trim() {
    return new ur({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ur({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ur({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
ur.create = (e) => {
  var t;
  return new ur({
    checks: [],
    typeName: le.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...me(e)
  });
};
function wj(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, i = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return i % s / Math.pow(10, o);
}
class Qo extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== Q.number) {
      const i = this._getOrReturnCtx(t);
      return W(i, {
        code: z.invalid_type,
        expected: Q.number,
        received: i.parsedType
      }), ce;
    }
    let r;
    const o = new Kt();
    for (const i of this._def.checks)
      i.kind === "int" ? Re.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), o.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? wj(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.not_finite,
        message: i.message
      }), o.dirty()) : Re.assertNever(i);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Y.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Y.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Y.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Y.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Qo({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Y.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Qo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Y.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Y.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Y.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Y.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Y.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Re.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Qo.create = (e) => new Qo({
  checks: [],
  typeName: le.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...me(e)
});
class qo extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== Q.bigint)
      return this._getInvalidInput(t);
    let r;
    const o = new Kt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), W(r, {
        code: z.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : Re.assertNever(i);
    return { status: o.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return W(n, {
      code: z.invalid_type,
      expected: Q.bigint,
      received: n.parsedType
    }), ce;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Y.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Y.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Y.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Y.toString(n));
  }
  setLimit(t, n, r, o) {
    return new qo({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Y.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new qo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Y.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Y.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Y.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
qo.create = (e) => {
  var t;
  return new qo({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...me(e)
  });
};
class Ll extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Q.boolean) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.boolean,
        received: r.parsedType
      }), ce;
    }
    return nn(t.data);
  }
}
Ll.create = (e) => new Ll({
  typeName: le.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...me(e)
});
class Fi extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== Q.date) {
      const i = this._getOrReturnCtx(t);
      return W(i, {
        code: z.invalid_type,
        expected: Q.date,
        received: i.parsedType
      }), ce;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return W(i, {
        code: z.invalid_date
      }), ce;
    }
    const r = new Kt();
    let o;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (o = this._getOrReturnCtx(t, o), W(o, {
        code: z.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Re.assertNever(i);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Fi({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Y.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Y.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Fi.create = (e) => new Fi({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: le.ZodDate,
  ...me(e)
});
class hd extends ge {
  _parse(t) {
    if (this._getType(t) !== Q.symbol) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.symbol,
        received: r.parsedType
      }), ce;
    }
    return nn(t.data);
  }
}
hd.create = (e) => new hd({
  typeName: le.ZodSymbol,
  ...me(e)
});
class Nl extends ge {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.undefined,
        received: r.parsedType
      }), ce;
    }
    return nn(t.data);
  }
}
Nl.create = (e) => new Nl({
  typeName: le.ZodUndefined,
  ...me(e)
});
class Fl extends ge {
  _parse(t) {
    if (this._getType(t) !== Q.null) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.null,
        received: r.parsedType
      }), ce;
    }
    return nn(t.data);
  }
}
Fl.create = (e) => new Fl({
  typeName: le.ZodNull,
  ...me(e)
});
class sa extends ge {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return nn(t.data);
  }
}
sa.create = (e) => new sa({
  typeName: le.ZodAny,
  ...me(e)
});
class _i extends ge {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return nn(t.data);
  }
}
_i.create = (e) => new _i({
  typeName: le.ZodUnknown,
  ...me(e)
});
class po extends ge {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return W(n, {
      code: z.invalid_type,
      expected: Q.never,
      received: n.parsedType
    }), ce;
  }
}
po.create = (e) => new po({
  typeName: le.ZodNever,
  ...me(e)
});
class md extends ge {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.void,
        received: r.parsedType
      }), ce;
    }
    return nn(t.data);
  }
}
md.create = (e) => new md({
  typeName: le.ZodVoid,
  ...me(e)
});
class pr extends ge {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== Q.array)
      return W(n, {
        code: z.invalid_type,
        expected: Q.array,
        received: n.parsedType
      }), ce;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, a = n.data.length < o.exactLength.value;
      (s || a) && (W(n, {
        code: s ? z.too_big : z.too_small,
        minimum: a ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (W(n, {
      code: z.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (W(n, {
      code: z.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, a) => o.type._parseAsync(new Br(n, s, n.path, a)))).then((s) => Kt.mergeArray(r, s));
    const i = [...n.data].map((s, a) => o.type._parseSync(new Br(n, s, n.path, a)));
    return Kt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new pr({
      ...this._def,
      minLength: { value: t, message: Y.toString(n) }
    });
  }
  max(t, n) {
    return new pr({
      ...this._def,
      maxLength: { value: t, message: Y.toString(n) }
    });
  }
  length(t, n) {
    return new pr({
      ...this._def,
      exactLength: { value: t, message: Y.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
pr.create = (e, t) => new pr({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: le.ZodArray,
  ...me(t)
});
function Ji(e) {
  if (e instanceof it) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Nr.create(Ji(r));
    }
    return new it({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof pr ? new pr({
    ...e._def,
    type: Ji(e.element)
  }) : e instanceof Nr ? Nr.create(Ji(e.unwrap())) : e instanceof Go ? Go.create(Ji(e.unwrap())) : e instanceof Ur ? Ur.create(e.items.map((t) => Ji(t))) : e;
}
class it extends ge {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Re.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== Q.object) {
      const u = this._getOrReturnCtx(t);
      return W(u, {
        code: z.invalid_type,
        expected: Q.object,
        received: u.parsedType
      }), ce;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: i, keys: s } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof po && this._def.unknownKeys === "strip"))
      for (const u in o.data)
        s.includes(u) || a.push(u);
    const l = [];
    for (const u of s) {
      const c = i[u], d = o.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new Br(o, d, o.path, u)),
        alwaysSet: u in o.data
      });
    }
    if (this._def.catchall instanceof po) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: o.data[c] }
          });
      else if (u === "strict")
        a.length > 0 && (W(o, {
          code: z.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const d = o.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(
            new Br(o, d, o.path, c)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: c in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const c of l) {
        const d = await c.key, f = await c.value;
        u.push({
          key: d,
          value: f,
          alwaysSet: c.alwaysSet
        });
      }
      return u;
    }).then((u) => Kt.mergeObjectSync(r, u)) : Kt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Y.errToObj, new it({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, i, s, a;
          const l = (s = (i = (o = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = Y.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new it({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new it({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new it({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new it({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: le.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new it({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Re.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Re.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ji(this);
  }
  partial(t) {
    const n = {};
    return Re.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Re.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof Nr; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new it({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return R_(Re.objectKeys(this.shape));
  }
}
it.create = (e, t) => new it({
  shape: () => e,
  unknownKeys: "strip",
  catchall: po.create(),
  typeName: le.ZodObject,
  ...me(t)
});
it.strictCreate = (e, t) => new it({
  shape: () => e,
  unknownKeys: "strict",
  catchall: po.create(),
  typeName: le.ZodObject,
  ...me(t)
});
it.lazycreate = (e, t) => new it({
  shape: e,
  unknownKeys: "strip",
  catchall: po.create(),
  typeName: le.ZodObject,
  ...me(t)
});
class Dl extends ge {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const s = i.map((a) => new Rn(a.ctx.common.issues));
      return W(n, {
        code: z.invalid_union,
        unionErrors: s
      }), ce;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let i;
      const s = [];
      for (const l of r) {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, c = l._parseSync({
          data: n.data,
          path: n.path,
          parent: u
        });
        if (c.status === "valid")
          return c;
        c.status === "dirty" && !i && (i = { result: c, ctx: u }), u.common.issues.length && s.push(u.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = s.map((l) => new Rn(l));
      return W(n, {
        code: z.invalid_union,
        unionErrors: a
      }), ce;
    }
  }
  get options() {
    return this._def.options;
  }
}
Dl.create = (e, t) => new Dl({
  options: e,
  typeName: le.ZodUnion,
  ...me(t)
});
const Zr = (e) => e instanceof Ul ? Zr(e.schema) : e instanceof yr ? Zr(e.innerType()) : e instanceof Vl ? [e.value] : e instanceof Zo ? e.options : e instanceof Wl ? Re.objectValues(e.enum) : e instanceof Hl ? Zr(e._def.innerType) : e instanceof Nl ? [void 0] : e instanceof Fl ? [null] : e instanceof Nr ? [void 0, ...Zr(e.unwrap())] : e instanceof Go ? [null, ...Zr(e.unwrap())] : e instanceof Sg || e instanceof Ql ? Zr(e.unwrap()) : e instanceof Kl ? Zr(e._def.innerType) : [];
class Tf extends ge {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.object)
      return W(n, {
        code: z.invalid_type,
        expected: Q.object,
        received: n.parsedType
      }), ce;
    const r = this.discriminator, o = n.data[r], i = this.optionsMap.get(o);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (W(n, {
      code: z.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ce);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const i of n) {
      const s = Zr(i.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of s) {
        if (o.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        o.set(a, i);
      }
    }
    return new Tf({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...me(r)
    });
  }
}
function _m(e, t) {
  const n = Yr(e), r = Yr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === Q.object && r === Q.object) {
    const o = Re.objectKeys(t), i = Re.objectKeys(e).filter((a) => o.indexOf(a) !== -1), s = { ...e, ...t };
    for (const a of i) {
      const l = _m(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      s[a] = l.data;
    }
    return { valid: !0, data: s };
  } else if (n === Q.array && r === Q.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let i = 0; i < e.length; i++) {
      const s = e[i], a = t[i], l = _m(s, a);
      if (!l.valid)
        return { valid: !1 };
      o.push(l.data);
    }
    return { valid: !0, data: o };
  } else return n === Q.date && r === Q.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class zl extends ge {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (i, s) => {
      if (wm(i) || wm(s))
        return ce;
      const a = _m(i.value, s.value);
      return a.valid ? ((Sm(i) || Sm(s)) && n.dirty(), { status: n.value, value: a.data }) : (W(r, {
        code: z.invalid_intersection_types
      }), ce);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([i, s]) => o(i, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
zl.create = (e, t, n) => new zl({
  left: e,
  right: t,
  typeName: le.ZodIntersection,
  ...me(n)
});
class Ur extends ge {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.array)
      return W(r, {
        code: z.invalid_type,
        expected: Q.array,
        received: r.parsedType
      }), ce;
    if (r.data.length < this._def.items.length)
      return W(r, {
        code: z.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ce;
    !this._def.rest && r.data.length > this._def.items.length && (W(r, {
      code: z.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((s, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Br(r, s, r.path, a)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(i).then((s) => Kt.mergeArray(n, s)) : Kt.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ur({
      ...this._def,
      rest: t
    });
  }
}
Ur.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ur({
    items: e,
    typeName: le.ZodTuple,
    rest: null,
    ...me(t)
  });
};
class Bl extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.object)
      return W(r, {
        code: z.invalid_type,
        expected: Q.object,
        received: r.parsedType
      }), ce;
    const o = [], i = this._def.keyType, s = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: i._parse(new Br(r, a, r.path, a)),
        value: s._parse(new Br(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? Kt.mergeObjectAsync(n, o) : Kt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ge ? new Bl({
      keyType: t,
      valueType: n,
      typeName: le.ZodRecord,
      ...me(r)
    }) : new Bl({
      keyType: ur.create(),
      valueType: t,
      typeName: le.ZodRecord,
      ...me(n)
    });
  }
}
class yd extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.map)
      return W(r, {
        code: z.invalid_type,
        expected: Q.map,
        received: r.parsedType
      }), ce;
    const o = this._def.keyType, i = this._def.valueType, s = [...r.data.entries()].map(([a, l], u) => ({
      key: o._parse(new Br(r, a, r.path, [u, "key"])),
      value: i._parse(new Br(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return ce;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of s) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return ce;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
yd.create = (e, t, n) => new yd({
  valueType: t,
  keyType: e,
  typeName: le.ZodMap,
  ...me(n)
});
class Di extends ge {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.set)
      return W(r, {
        code: z.invalid_type,
        expected: Q.set,
        received: r.parsedType
      }), ce;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (W(r, {
      code: z.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (W(r, {
      code: z.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function s(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return ce;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => i._parse(new Br(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => s(l)) : s(a);
  }
  min(t, n) {
    return new Di({
      ...this._def,
      minSize: { value: t, message: Y.toString(n) }
    });
  }
  max(t, n) {
    return new Di({
      ...this._def,
      maxSize: { value: t, message: Y.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Di.create = (e, t) => new Di({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...me(t)
});
class Es extends ge {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.function)
      return W(n, {
        code: z.invalid_type,
        expected: Q.function,
        received: n.parsedType
      }), ce;
    function r(a, l) {
      return fd({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          dd(),
          ia
        ].filter((u) => !!u),
        issueData: {
          code: z.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function o(a, l) {
      return fd({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          dd(),
          ia
        ].filter((u) => !!u),
        issueData: {
          code: z.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof aa) {
      const a = this;
      return nn(async function(...l) {
        const u = new Rn([]), c = await a._def.args.parseAsync(l, i).catch((y) => {
          throw u.addIssue(r(l, y)), u;
        }), d = await Reflect.apply(s, this, c);
        return await a._def.returns._def.type.parseAsync(d, i).catch((y) => {
          throw u.addIssue(o(d, y)), u;
        });
      });
    } else {
      const a = this;
      return nn(function(...l) {
        const u = a._def.args.safeParse(l, i);
        if (!u.success)
          throw new Rn([r(l, u.error)]);
        const c = Reflect.apply(s, this, u.data), d = a._def.returns.safeParse(c, i);
        if (!d.success)
          throw new Rn([o(c, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Es({
      ...this._def,
      args: Ur.create(t).rest(_i.create())
    });
  }
  returns(t) {
    return new Es({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Es({
      args: t || Ur.create([]).rest(_i.create()),
      returns: n || _i.create(),
      typeName: le.ZodFunction,
      ...me(r)
    });
  }
}
class Ul extends ge {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ul.create = (e, t) => new Ul({
  getter: e,
  typeName: le.ZodLazy,
  ...me(t)
});
class Vl extends ge {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return W(n, {
        received: n.data,
        code: z.invalid_literal,
        expected: this._def.value
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Vl.create = (e, t) => new Vl({
  value: e,
  typeName: le.ZodLiteral,
  ...me(t)
});
function R_(e, t) {
  return new Zo({
    values: e,
    typeName: le.ZodEnum,
    ...me(t)
  });
}
class Zo extends ge {
  constructor() {
    super(...arguments), Ha.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return W(n, {
        expected: Re.joinValues(r),
        received: n.parsedType,
        code: z.invalid_type
      }), ce;
    }
    if (pd(this, Ha) || k_(this, Ha, new Set(this._def.values)), !pd(this, Ha).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return W(n, {
        received: n.data,
        code: z.invalid_enum_value,
        options: r
      }), ce;
    }
    return nn(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Zo.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Zo.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Ha = /* @__PURE__ */ new WeakMap();
Zo.create = R_;
class Wl extends ge {
  constructor() {
    super(...arguments), Ka.set(this, void 0);
  }
  _parse(t) {
    const n = Re.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== Q.string && r.parsedType !== Q.number) {
      const o = Re.objectValues(n);
      return W(r, {
        expected: Re.joinValues(o),
        received: r.parsedType,
        code: z.invalid_type
      }), ce;
    }
    if (pd(this, Ka) || k_(this, Ka, new Set(Re.getValidEnumValues(this._def.values))), !pd(this, Ka).has(t.data)) {
      const o = Re.objectValues(n);
      return W(r, {
        received: r.data,
        code: z.invalid_enum_value,
        options: o
      }), ce;
    }
    return nn(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ka = /* @__PURE__ */ new WeakMap();
Wl.create = (e, t) => new Wl({
  values: e,
  typeName: le.ZodNativeEnum,
  ...me(t)
});
class aa extends ge {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.promise && n.common.async === !1)
      return W(n, {
        code: z.invalid_type,
        expected: Q.promise,
        received: n.parsedType
      }), ce;
    const r = n.parsedType === Q.promise ? n.data : Promise.resolve(n.data);
    return nn(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
aa.create = (e, t) => new aa({
  type: e,
  typeName: le.ZodPromise,
  ...me(t)
});
class yr extends ge {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, i = {
      addIssue: (s) => {
        W(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), o.type === "preprocess") {
      const s = o.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(s).then(async (a) => {
          if (n.value === "aborted")
            return ce;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? ce : l.status === "dirty" || n.value === "dirty" ? ys(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return ce;
        const a = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ce : a.status === "dirty" || n.value === "dirty" ? ys(a.value) : a;
      }
    }
    if (o.type === "refinement") {
      const s = (a) => {
        const l = o.refinement(a, i);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ce : (a.status === "dirty" && n.dirty(), s(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? ce : (a.status === "dirty" && n.dirty(), s(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ni(s))
          return s;
        const a = o.transform(s.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ni(s) ? Promise.resolve(o.transform(s.value, i)).then((a) => ({ status: n.value, value: a })) : s);
    Re.assertNever(o);
  }
}
yr.create = (e, t, n) => new yr({
  schema: e,
  typeName: le.ZodEffects,
  effect: t,
  ...me(n)
});
yr.createWithPreprocess = (e, t, n) => new yr({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: le.ZodEffects,
  ...me(n)
});
class Nr extends ge {
  _parse(t) {
    return this._getType(t) === Q.undefined ? nn(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Nr.create = (e, t) => new Nr({
  innerType: e,
  typeName: le.ZodOptional,
  ...me(t)
});
class Go extends ge {
  _parse(t) {
    return this._getType(t) === Q.null ? nn(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Go.create = (e, t) => new Go({
  innerType: e,
  typeName: le.ZodNullable,
  ...me(t)
});
class Hl extends ge {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === Q.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Hl.create = (e, t) => new Hl({
  innerType: e,
  typeName: le.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...me(t)
});
class Kl extends ge {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return jl(o) ? o.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Rn(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Rn(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Kl.create = (e, t) => new Kl({
  innerType: e,
  typeName: le.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...me(t)
});
class gd extends ge {
  _parse(t) {
    if (this._getType(t) !== Q.nan) {
      const r = this._getOrReturnCtx(t);
      return W(r, {
        code: z.invalid_type,
        expected: Q.nan,
        received: r.parsedType
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
}
gd.create = (e) => new gd({
  typeName: le.ZodNaN,
  ...me(e)
});
const Sj = Symbol("zod_brand");
class Sg extends ge {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class bu extends ge {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ce : i.status === "dirty" ? (n.dirty(), ys(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? ce : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new bu({
      in: t,
      out: n,
      typeName: le.ZodPipeline
    });
  }
}
class Ql extends ge {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (o) => (Ni(o) && (o.value = Object.freeze(o.value)), o);
    return jl(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ql.create = (e, t) => new Ql({
  innerType: e,
  typeName: le.ZodReadonly,
  ...me(t)
});
function P_(e, t = {}, n) {
  return e ? sa.create().superRefine((r, o) => {
    var i, s;
    if (!e(r)) {
      const a = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (s = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null && s !== void 0 ? s : !0, u = typeof a == "string" ? { message: a } : a;
      o.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : sa.create();
}
const _j = {
  object: it.lazycreate
};
var le;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(le || (le = {}));
const kj = (e, t = {
  message: `Input not instance of ${e.name}`
}) => P_((n) => n instanceof e, t), O_ = ur.create, M_ = Qo.create, Cj = gd.create, Tj = qo.create, I_ = Ll.create, Ej = Fi.create, Rj = hd.create, Pj = Nl.create, Oj = Fl.create, Mj = sa.create, Ij = _i.create, Aj = po.create, $j = md.create, jj = pr.create, Lj = it.create, Nj = it.strictCreate, Fj = Dl.create, Dj = Tf.create, zj = zl.create, Bj = Ur.create, Uj = Bl.create, Vj = yd.create, Wj = Di.create, Hj = Es.create, Kj = Ul.create, Qj = Vl.create, qj = Zo.create, Zj = Wl.create, Gj = aa.create, E1 = yr.create, Xj = Nr.create, Yj = Go.create, Jj = yr.createWithPreprocess, eL = bu.create, tL = () => O_().optional(), nL = () => M_().optional(), rL = () => I_().optional(), oL = {
  string: (e) => ur.create({ ...e, coerce: !0 }),
  number: (e) => Qo.create({ ...e, coerce: !0 }),
  boolean: (e) => Ll.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => qo.create({ ...e, coerce: !0 }),
  date: (e) => Fi.create({ ...e, coerce: !0 })
}, iL = ce;
var So = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ia,
  setErrorMap: J$,
  getErrorMap: dd,
  makeIssue: fd,
  EMPTY_PATH: ej,
  addIssueToContext: W,
  ParseStatus: Kt,
  INVALID: ce,
  DIRTY: ys,
  OK: nn,
  isAborted: wm,
  isDirty: Sm,
  isValid: Ni,
  isAsync: jl,
  get util() {
    return Re;
  },
  get objectUtil() {
    return xm;
  },
  ZodParsedType: Q,
  getParsedType: Yr,
  ZodType: ge,
  datetimeRegex: E_,
  ZodString: ur,
  ZodNumber: Qo,
  ZodBigInt: qo,
  ZodBoolean: Ll,
  ZodDate: Fi,
  ZodSymbol: hd,
  ZodUndefined: Nl,
  ZodNull: Fl,
  ZodAny: sa,
  ZodUnknown: _i,
  ZodNever: po,
  ZodVoid: md,
  ZodArray: pr,
  ZodObject: it,
  ZodUnion: Dl,
  ZodDiscriminatedUnion: Tf,
  ZodIntersection: zl,
  ZodTuple: Ur,
  ZodRecord: Bl,
  ZodMap: yd,
  ZodSet: Di,
  ZodFunction: Es,
  ZodLazy: Ul,
  ZodLiteral: Vl,
  ZodEnum: Zo,
  ZodNativeEnum: Wl,
  ZodPromise: aa,
  ZodEffects: yr,
  ZodTransformer: yr,
  ZodOptional: Nr,
  ZodNullable: Go,
  ZodDefault: Hl,
  ZodCatch: Kl,
  ZodNaN: gd,
  BRAND: Sj,
  ZodBranded: Sg,
  ZodPipeline: bu,
  ZodReadonly: Ql,
  custom: P_,
  Schema: ge,
  ZodSchema: ge,
  late: _j,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: oL,
  any: Mj,
  array: jj,
  bigint: Tj,
  boolean: I_,
  date: Ej,
  discriminatedUnion: Dj,
  effect: E1,
  enum: qj,
  function: Hj,
  instanceof: kj,
  intersection: zj,
  lazy: Kj,
  literal: Qj,
  map: Vj,
  nan: Cj,
  nativeEnum: Zj,
  never: Aj,
  null: Oj,
  nullable: Yj,
  number: M_,
  object: Lj,
  oboolean: rL,
  onumber: nL,
  optional: Xj,
  ostring: tL,
  pipeline: eL,
  preprocess: Jj,
  promise: Gj,
  record: Uj,
  set: Wj,
  strictObject: Nj,
  string: O_,
  symbol: Rj,
  transformer: E1,
  tuple: Bj,
  undefined: Pj,
  union: Fj,
  unknown: Ij,
  void: $j,
  NEVER: iL,
  ZodIssueCode: z,
  quotelessJson: Y$,
  ZodError: Rn
});
class A_ {
  constructor(t, n) {
    this.listeners = /* @__PURE__ */ new Set(), this._batching = !1, this._flushing = 0, this.subscribe = (r) => {
      var o, i;
      this.listeners.add(r);
      const s = (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null ? void 0 : i.call(o, r, this);
      return () => {
        this.listeners.delete(r), s == null || s();
      };
    }, this.setState = (r) => {
      var o, i, s;
      const a = this.state;
      this.state = (o = this.options) != null && o.updateFn ? this.options.updateFn(a)(r) : r(a), (s = (i = this.options) == null ? void 0 : i.onUpdate) == null || s.call(i), this._flush();
    }, this._flush = () => {
      if (this._batching) return;
      const r = ++this._flushing;
      this.listeners.forEach((o) => {
        this._flushing === r && o();
      });
    }, this.batch = (r) => {
      if (this._batching) return r();
      this._batching = !0, r(), this._batching = !1, this._flush();
    }, this.state = t, this.options = n;
  }
}
function Ef(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $_(e, t) {
  return _g(t).reduce((r, o) => {
    if (r === null) return null;
    if (typeof r < "u")
      return r[o];
  }, e);
}
function wp(e, t, n) {
  const r = _g(t);
  function o(i) {
    if (!r.length)
      return Ef(n, i);
    const s = r.shift();
    if (typeof s == "string" || typeof s == "number" && !Array.isArray(i))
      return typeof i == "object" ? (i === null && (i = {}), {
        ...i,
        [s]: o(i[s])
      }) : {
        [s]: o()
      };
    if (Array.isArray(i) && typeof s == "number") {
      const a = i.slice(0, s);
      return [
        ...a.length ? a : new Array(s),
        o(i[s]),
        ...i.slice(s + 1)
      ];
    }
    return [...new Array(s), o()];
  }
  return o(e);
}
function sL(e, t) {
  const n = _g(t);
  function r(o) {
    if (!o) return;
    if (n.length === 1) {
      const s = n[0];
      if (Array.isArray(o) && typeof s == "number")
        return o.filter((u, c) => c !== s);
      const { [s]: a, ...l } = o;
      return l;
    }
    const i = n.shift();
    if (typeof i == "string" && typeof o == "object")
      return {
        ...o,
        [i]: r(o[i])
      };
    if (typeof i == "number" && Array.isArray(o)) {
      if (i >= o.length)
        return o;
      const s = o.slice(0, i);
      return [
        ...s.length ? s : new Array(i),
        r(o[i]),
        ...o.slice(i + 1)
      ];
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return r(e);
}
const aL = /^(\d*)$/gm, lL = /\.(\d*)\./gm, uL = /^(\d*)\./gm, cL = /\.(\d*$)/gm, dL = /\.{2,}/gm, km = "__int__", Xu = `${km}$1`;
function _g(e) {
  if (Array.isArray(e))
    return [...e];
  if (typeof e != "string")
    throw new Error("Path must be a string.");
  return e.replaceAll("[", ".").replaceAll("]", "").replace(aL, Xu).replace(lL, `.${Xu}.`).replace(uL, `${Xu}.`).replace(cL, `.${Xu}`).replace(dL, ".").split(".").map((t) => t.indexOf(km) === 0 ? parseInt(t.substring(km.length), 10) : t);
}
function fL(e) {
  return !(Array.isArray(e) && e.length === 0);
}
function Cm(e, t) {
  const { asyncDebounceMs: n } = t, {
    onChangeAsync: r,
    onBlurAsync: o,
    onSubmitAsync: i,
    onBlurAsyncDebounceMs: s,
    onChangeAsyncDebounceMs: a
  } = t.validators || {}, l = n ?? 0, u = {
    cause: "change",
    validate: r,
    debounceMs: a ?? l
  }, c = {
    cause: "blur",
    validate: o,
    debounceMs: s ?? l
  }, d = {
    cause: "submit",
    validate: i,
    debounceMs: 0
  }, f = (y) => ({ ...y, debounceMs: 0 });
  switch (e) {
    case "submit":
      return [
        f(u),
        f(c),
        d
      ];
    case "blur":
      return [c];
    case "change":
      return [u];
    case "server":
    default:
      return [];
  }
}
function Tm(e, t) {
  const { onChange: n, onBlur: r, onSubmit: o, onMount: i } = t.validators || {}, s = { cause: "change", validate: n }, a = { cause: "blur", validate: r }, l = { cause: "submit", validate: o }, u = { cause: "mount", validate: i }, c = {
    cause: "server",
    validate: () => {
    }
  };
  switch (e) {
    case "mount":
      return [u];
    case "submit":
      return [
        s,
        a,
        l,
        c
      ];
    case "server":
      return [c];
    case "blur":
      return [a, c];
    case "change":
    default:
      return [s, c];
  }
}
function pL(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    const i = [...o.path ?? []].map((s) => {
      const a = typeof s == "object" ? s.key : s;
      return typeof a == "number" ? `[${a}]` : a;
    }).join(".").replace(/\.\[/g, "[");
    n.set(i, (n.get(i) ?? []).concat(o));
  }
  const r = {};
  return n.forEach((o, i) => {
    r[i] = t(o);
  }), r;
}
function hL(e) {
  return (t) => ({
    form: e(t),
    fields: pL(t, e)
  });
}
const j_ = (e = {}) => () => {
  const t = e.transformErrors ?? ((r) => r.map((o) => o.message).join(", ")), n = (r) => r === "form" ? hL(t) : t;
  return {
    validate({ value: r, validationSource: o }, i) {
      const s = i["~standard"].validate(r);
      if (s instanceof Promise)
        throw new Error("async function passed to sync validator");
      return s.issues ? n(o)(s.issues) : void 0;
    },
    async validateAsync({ value: r, validationSource: o }, i) {
      const s = await i["~standard"].validate(r);
      return s.issues ? n(o)(s.issues) : void 0;
    }
  };
}, L_ = (e) => !!e && "~standard" in e;
function Sp(e) {
  return {
    values: e.values ?? {},
    errors: e.errors ?? [],
    errorMap: e.errorMap ?? {},
    fieldMeta: e.fieldMeta ?? {},
    canSubmit: e.canSubmit ?? !0,
    isFieldsValid: e.isFieldsValid ?? !1,
    isFieldsValidating: e.isFieldsValidating ?? !1,
    isFormValid: e.isFormValid ?? !1,
    isFormValidating: e.isFormValidating ?? !1,
    isSubmitted: e.isSubmitted ?? !1,
    isSubmitting: e.isSubmitting ?? !1,
    isTouched: e.isTouched ?? !1,
    isBlurred: e.isBlurred ?? !1,
    isPristine: e.isPristine ?? !0,
    isDirty: e.isDirty ?? !1,
    isValid: e.isValid ?? !1,
    isValidating: e.isValidating ?? !1,
    submissionAttempts: e.submissionAttempts ?? 0,
    validationMetaMap: e.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0
    }
  };
}
const mL = (e) => typeof e == "object";
class yL {
  /**
   * Constructs a new `FormApi` instance with the given form options.
   */
  constructor(t) {
    var n;
    this.options = {}, this.fieldInfo = {}, this.prevTransformArray = [], this.mount = () => {
      const { onMount: r } = this.options.validators || {};
      r && this.validateSync("mount");
    }, this.update = (r) => {
      if (!r) return;
      const o = this.options;
      this.options = r, this.store.batch(() => {
        const i = r.defaultValues && r.defaultValues !== o.defaultValues && !this.state.isTouched, s = r.defaultState !== o.defaultState && !this.state.isTouched;
        this.store.setState(
          () => Sp(
            Object.assign(
              {},
              this.state,
              s ? r.defaultState : {},
              i ? {
                values: r.defaultValues
              } : {}
            )
          )
        );
      });
    }, this.reset = (r, o) => {
      const { fieldMeta: i } = this.state, s = this.resetFieldMeta(i);
      r && !(o != null && o.keepDefaultValues) && (this.options = {
        ...this.options,
        defaultValues: r
      }), this.store.setState(
        () => {
          var a;
          return Sp({
            ...this.options.defaultState,
            values: r ?? this.options.defaultValues ?? ((a = this.options.defaultState) == null ? void 0 : a.values),
            fieldMeta: s
          });
        }
      );
    }, this.validateAllFields = async (r) => {
      const o = [];
      return this.store.batch(() => {
        Object.values(this.fieldInfo).forEach((s) => {
          if (!s.instance) return;
          const a = s.instance;
          o.push(
            // Remember, `validate` is either a sync operation or a promise
            Promise.resolve().then(() => a.validate(r))
          ), s.instance.state.meta.isTouched || s.instance.setMeta((l) => ({ ...l, isTouched: !0 }));
        });
      }), (await Promise.all(o)).flat();
    }, this.validateArrayFieldsStartingFrom = async (r, o, i) => {
      const s = this.getFieldValue(r), a = Array.isArray(s) ? Math.max(s.length - 1, 0) : null, l = [`${r}[${o}]`];
      for (let f = o + 1; f <= (a ?? 0); f++)
        l.push(`${r}[${f}]`);
      const u = Object.keys(this.fieldInfo).filter(
        (f) => l.some((y) => f.startsWith(y))
      ), c = [];
      return this.store.batch(() => {
        u.forEach((f) => {
          c.push(
            Promise.resolve().then(() => this.validateField(f, i))
          );
        });
      }), (await Promise.all(c)).flat();
    }, this.validateField = (r, o) => {
      var i;
      const s = (i = this.fieldInfo[r]) == null ? void 0 : i.instance;
      return s ? (s.state.meta.isTouched || s.setMeta((a) => ({ ...a, isTouched: !0 })), s.validate(o)) : [];
    }, this.validateSync = (r) => {
      const o = Tm(r, this.options);
      let i = !1;
      const s = {};
      this.store.batch(() => {
        for (const l of o) {
          if (!l.validate) continue;
          const u = this.runValidator({
            validate: l.validate,
            value: {
              value: this.state.values,
              formApi: this,
              validationSource: "form"
            },
            type: "validate"
          }), { formError: c, fieldErrors: d } = Em(u), f = Yu(l.cause);
          if (d)
            for (const [y, g] of Object.entries(d)) {
              const x = {
                ...s[y] || {},
                [f]: g
              };
              s[y] = x;
              const m = this.getFieldMeta(y);
              m && m.errorMap[f] !== g && this.setFieldMeta(y, (h) => ({
                ...h,
                errorMap: {
                  ...h.errorMap,
                  [f]: g
                }
              }));
            }
          this.state.errorMap[f] !== c && this.store.setState((y) => ({
            ...y,
            errorMap: {
              ...y.errorMap,
              [f]: c
            }
          })), (c || d) && (i = !0);
        }
      });
      const a = Yu("submit");
      return this.state.errorMap[a] && r !== "submit" && !i && this.store.setState((l) => ({
        ...l,
        errorMap: {
          ...l.errorMap,
          [a]: void 0
        }
      })), { hasErrored: i, fieldsErrorMap: s };
    }, this.validateAsync = async (r) => {
      const o = Cm(r, this.options);
      this.state.isFormValidating || this.store.setState((u) => ({ ...u, isFormValidating: !0 }));
      const i = [];
      let s;
      for (const u of o) {
        if (!u.validate) continue;
        const c = Yu(u.cause), d = this.state.validationMetaMap[c];
        d == null || d.lastAbortController.abort();
        const f = new AbortController();
        this.state.validationMetaMap[c] = {
          lastAbortController: f
        }, i.push(
          new Promise(async (y) => {
            let g;
            try {
              g = await new Promise((h, p) => {
                setTimeout(async () => {
                  if (f.signal.aborted) return h(void 0);
                  try {
                    h(
                      await this.runValidator({
                        validate: u.validate,
                        value: {
                          value: this.state.values,
                          formApi: this,
                          validationSource: "form",
                          signal: f.signal
                        },
                        type: "validateAsync"
                      })
                    );
                  } catch (b) {
                    p(b);
                  }
                }, u.debounceMs);
              });
            } catch (h) {
              g = h;
            }
            const { formError: v, fieldErrors: x } = Em(g);
            x && (s = s ? { ...s, ...x } : x);
            const m = Yu(u.cause);
            if (s)
              for (const [h, p] of Object.entries(s)) {
                const b = this.getFieldMeta(h);
                b && b.errorMap[m] !== p && this.setFieldMeta(h, (k) => ({
                  ...k,
                  errorMap: {
                    ...k.errorMap,
                    [m]: p
                  }
                }));
              }
            this.store.setState((h) => ({
              ...h,
              errorMap: {
                ...h.errorMap,
                [m]: v
              }
            })), y(s ? { fieldErrors: s, errorMapKey: m } : void 0);
          })
        );
      }
      let a = [];
      const l = {};
      if (i.length) {
        a = await Promise.all(i);
        for (const u of a)
          if (u != null && u.fieldErrors) {
            const { errorMapKey: c } = u;
            for (const [d, f] of Object.entries(
              u.fieldErrors
            )) {
              const g = {
                ...l[d] || {},
                [c]: f
              };
              l[d] = g;
            }
          }
      }
      return this.store.setState((u) => ({
        ...u,
        isFormValidating: !1
      })), l;
    }, this.validate = (r) => {
      const { hasErrored: o, fieldsErrorMap: i } = this.validateSync(r);
      return o && !this.options.asyncAlways ? i : this.validateAsync(r);
    }, this.handleSubmit = async () => {
      var r, o, i, s;
      if (this.store.setState((l) => ({
        ...l,
        // Submission attempts mark the form as not submitted
        isSubmitted: !1,
        // Count submission attempts
        submissionAttempts: l.submissionAttempts + 1
      })), !this.state.canSubmit) return;
      this.store.setState((l) => ({ ...l, isSubmitting: !0 }));
      const a = () => {
        this.store.setState((l) => ({ ...l, isSubmitting: !1 }));
      };
      if (await this.validateAllFields("submit"), !this.state.isValid) {
        a(), (o = (r = this.options).onSubmitInvalid) == null || o.call(r, {
          value: this.state.values,
          formApi: this
        });
        return;
      }
      this.store.batch(() => {
        Object.values(this.fieldInfo).forEach((l) => {
          var u, c, d;
          (d = (c = (u = l.instance) == null ? void 0 : u.options.listeners) == null ? void 0 : c.onSubmit) == null || d.call(c, {
            value: l.instance.state.value,
            fieldApi: l.instance
          });
        });
      });
      try {
        await ((s = (i = this.options).onSubmit) == null ? void 0 : s.call(i, { value: this.state.values, formApi: this })), this.store.batch(() => {
          this.store.setState((l) => ({ ...l, isSubmitted: !0 })), a();
        });
      } catch (l) {
        throw a(), l;
      }
    }, this.getFieldValue = (r) => $_(this.state.values, r), this.getFieldMeta = (r) => this.state.fieldMeta[r], this.getFieldInfo = (r) => {
      var o;
      return (o = this.fieldInfo)[r] || (o[r] = {
        instance: null,
        validationMetaMap: {
          onChange: void 0,
          onBlur: void 0,
          onSubmit: void 0,
          onMount: void 0,
          onServer: void 0
        }
      });
    }, this.setFieldMeta = (r, o) => {
      this.store.setState((i) => ({
        ...i,
        fieldMeta: {
          ...i.fieldMeta,
          [r]: Ef(o, i.fieldMeta[r])
        }
      }));
    }, this.resetFieldMeta = (r) => Object.keys(r).reduce(
      (o, i) => {
        const s = i;
        return o[s] = {
          isValidating: !1,
          isTouched: !1,
          isBlurred: !1,
          isDirty: !1,
          isPristine: !0,
          errors: [],
          errorMap: {}
        }, o;
      },
      {}
    ), this.setFieldValue = (r, o, i) => {
      const s = (i == null ? void 0 : i.dontUpdateMeta) ?? !1;
      this.store.batch(() => {
        s || this.setFieldMeta(r, (a) => ({
          ...a,
          isTouched: !0,
          isDirty: !0,
          errorMap: {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            ...a == null ? void 0 : a.errorMap,
            onMount: void 0
          }
        })), this.store.setState((a) => ({
          ...a,
          values: wp(a.values, r, o)
        }));
      });
    }, this.deleteField = (r) => {
      this.store.setState((o) => {
        const i = { ...o };
        return i.values = sL(i.values, r), delete i.fieldMeta[r], i;
      }), delete this.fieldInfo[r];
    }, this.pushFieldValue = (r, o, i) => {
      this.setFieldValue(
        r,
        (s) => [...Array.isArray(s) ? s : [], o],
        i
      ), this.validateField(r, "change");
    }, this.insertFieldValue = async (r, o, i, s) => {
      this.setFieldValue(
        r,
        (a) => [
          ...a.slice(0, o),
          i,
          ...a.slice(o)
        ],
        s
      ), await this.validateField(r, "change");
    }, this.replaceFieldValue = async (r, o, i, s) => {
      this.setFieldValue(
        r,
        (a) => a.map(
          (l, u) => u === o ? i : l
        ),
        s
      ), await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, o, "change");
    }, this.removeFieldValue = async (r, o, i) => {
      const s = this.getFieldValue(r), a = Array.isArray(s) ? Math.max(s.length - 1, 0) : null;
      if (this.setFieldValue(
        r,
        (l) => l.filter(
          (u, c) => c !== o
        ),
        i
      ), a !== null) {
        const l = `${r}[${a}]`;
        Object.keys(this.fieldInfo).filter(
          (c) => c.startsWith(l)
        ).forEach((c) => this.deleteField(c));
      }
      await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, o, "change");
    }, this.swapFieldValues = (r, o, i, s) => {
      this.setFieldValue(
        r,
        (a) => {
          const l = a[o], u = a[i];
          return wp(wp(a, `${o}`, u), `${i}`, l);
        },
        s
      ), this.validateField(r, "change"), this.validateField(`${r}[${o}]`, "change"), this.validateField(`${r}[${i}]`, "change");
    }, this.moveFieldValues = (r, o, i, s) => {
      this.setFieldValue(
        r,
        (a) => (a.splice(i, 0, a.splice(o, 1)[0]), a),
        s
      ), this.validateField(r, "change"), this.validateField(`${r}[${o}]`, "change"), this.validateField(`${r}[${i}]`, "change");
    }, this.store = new A_(
      Sp({
        ...t == null ? void 0 : t.defaultState,
        values: (t == null ? void 0 : t.defaultValues) ?? ((n = t == null ? void 0 : t.defaultState) == null ? void 0 : n.values),
        isFormValid: !0
      }),
      {
        onUpdate: () => {
          var r, o, i, s;
          let { state: a } = this.store;
          const l = Object.values(a.fieldMeta), u = l.some(
            (C) => C == null ? void 0 : C.isValidating
          ), c = !l.some(
            (C) => (C == null ? void 0 : C.errorMap) && fL(Object.values(C.errorMap).filter(Boolean))
          ), d = l.some((C) => C == null ? void 0 : C.isTouched), f = l.some((C) => C == null ? void 0 : C.isBlurred);
          d && ((r = a == null ? void 0 : a.errorMap) != null && r.onMount) && (a.errorMap.onMount = void 0);
          const y = l.some((C) => C == null ? void 0 : C.isDirty), g = !y, v = !!// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          ((o = a.errorMap) != null && o.onMount || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          l.some((C) => {
            var T;
            return (T = C == null ? void 0 : C.errorMap) == null ? void 0 : T.onMount;
          })), x = u || a.isFormValidating;
          a.errors = Object.values(a.errorMap).reduce((C, T) => T === void 0 ? C : typeof T == "string" ? (C.push(T), C) : (T && mL(T) && C.push(T.form), C), []);
          const m = a.errors.length === 0, h = c && m, p = a.submissionAttempts === 0 && !d && !v || !x && !a.isSubmitting && h;
          a = {
            ...a,
            isFieldsValidating: u,
            isFieldsValid: c,
            isFormValid: m,
            isValid: h,
            canSubmit: p,
            isTouched: d,
            isBlurred: f,
            isPristine: g,
            isDirty: y
          }, this.state = a, this.store.state = this.state;
          const b = ((i = this.options.transform) == null ? void 0 : i.deps) ?? [];
          (b.length !== this.prevTransformArray.length || b.some((C, T) => C !== this.prevTransformArray[T])) && ((s = this.options.transform) == null || s.fn(this), this.store.state = this.state, this.prevTransformArray = b);
        }
      }
    ), this.state = this.store.state, this.update(t || {});
  }
  /**
   * @private
   */
  runValidator(t) {
    const n = this.options.validatorAdapter;
    return n && (typeof t.validate != "function" || "~standard" in t.validate) ? n()[t.type](t.value, t.validate) : L_(t.validate) ? j_()()[t.type](
      t.value,
      t.validate
    ) : t.validate(t.value);
  }
  /**
   * Updates the form's errorMap
   */
  setErrorMap(t) {
    this.store.setState((n) => ({
      ...n,
      errorMap: {
        ...n.errorMap,
        ...t
      }
    }));
  }
}
function Em(e) {
  if (e) {
    if (typeof e == "object") {
      const t = Em(e.form).formError, n = e.fields;
      return { formError: t, fieldErrors: n };
    }
    return typeof e != "string" ? { formError: "Invalid Form Values" } : { formError: e };
  }
  return { formError: void 0 };
}
function Yu(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "change":
    default:
      return "onChange";
  }
}
class gL {
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(t) {
    this.options = {}, this.mount = () => {
      var n, r;
      const o = this.getInfo();
      o.instance = this;
      const i = this.form.store.subscribe(() => {
        this.store.batch(() => {
          const a = this.getValue(), l = this.getMeta();
          a !== this.state.value && this.store.setState((u) => ({ ...u, value: a })), l !== this.state.meta && this.store.setState((u) => ({ ...u, meta: l }));
        });
      });
      this.update(this.options);
      const { onMount: s } = this.options.validators || {};
      if (s) {
        const a = this.runValidator({
          validate: s,
          value: {
            value: this.state.value,
            fieldApi: this,
            validationSource: "field"
          },
          type: "validate"
        });
        a && this.setMeta((l) => ({
          ...l,
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          errorMap: { ...l == null ? void 0 : l.errorMap, onMount: a }
        }));
      }
      return (r = (n = this.options.listeners) == null ? void 0 : n.onMount) == null || r.call(n, {
        value: this.state.value,
        fieldApi: this
      }), () => {
        i();
      };
    }, this.update = (n) => {
      if (this.state.value === void 0) {
        const r = $_(n.form.options.defaultValues, n.name);
        n.defaultValue !== void 0 ? this.setValue(n.defaultValue, {
          dontUpdateMeta: !0
        }) : r !== void 0 && this.setValue(r, {
          dontUpdateMeta: !0
        });
      }
      this._getMeta() === void 0 && this.setMeta(this.state.meta), this.options = n;
    }, this.getValue = () => this.form.getFieldValue(this.name), this.setValue = (n, r) => {
      var o, i;
      this.form.setFieldValue(this.name, n, r), (i = (o = this.options.listeners) == null ? void 0 : o.onChange) == null || i.call(o, {
        value: this.state.value,
        fieldApi: this
      }), this.validate("change");
    }, this._getMeta = () => this.form.getFieldMeta(this.name), this.getMeta = () => this._getMeta() ?? {
      isValidating: !1,
      isTouched: !1,
      isBlurred: !1,
      isDirty: !1,
      isPristine: !0,
      errors: [],
      errorMap: {},
      ...this.options.defaultMeta
    }, this.setMeta = (n) => this.form.setFieldMeta(this.name, n), this.getInfo = () => this.form.getFieldInfo(this.name), this.pushValue = (n, r) => this.form.pushFieldValue(this.name, n, r), this.insertValue = (n, r, o) => this.form.insertFieldValue(this.name, n, r, o), this.replaceValue = (n, r, o) => this.form.replaceFieldValue(this.name, n, r, o), this.removeValue = (n, r) => this.form.removeFieldValue(this.name, n, r), this.swapValues = (n, r, o) => this.form.swapFieldValues(this.name, n, r, o), this.moveValue = (n, r, o) => this.form.moveFieldValues(this.name, n, r, o), this.getLinkedFields = (n) => {
      const r = Object.values(this.form.fieldInfo), o = [];
      for (const i of r) {
        if (!i.instance) continue;
        const { onChangeListenTo: s, onBlurListenTo: a } = i.instance.options.validators || {};
        n === "change" && (s != null && s.includes(this.name)) && o.push(i.instance), n === "blur" && (a != null && a.includes(this.name)) && o.push(i.instance);
      }
      return o;
    }, this.validateSync = (n, r) => {
      const o = Tm(n, this.options), s = this.getLinkedFields(n).reduce(
        (u, c) => {
          const d = Tm(n, c.options);
          return d.forEach((f) => {
            f.field = c;
          }), u.concat(d);
        },
        []
      );
      let a = !1;
      this.form.store.batch(() => {
        const u = (c, d) => {
          const f = La(d.cause), y = (
            /*
              If `validateObj.validate` is `undefined`, then the field doesn't have
              a validator for this event, but there still could be an error that
              needs to be cleaned up related to the current event left by the
              form's validator.
            */
            d.validate ? R1(
              c.runValidator({
                validate: d.validate,
                value: {
                  value: c.getValue(),
                  validationSource: "field",
                  fieldApi: c
                },
                type: "validate"
              })
            ) : r[f]
          );
          c.state.meta.errorMap[f] !== y && c.setMeta((g) => ({
            ...g,
            errorMap: {
              ...g.errorMap,
              [La(d.cause)]: (
                // Prefer the error message from the field validators if they exist
                y || r[f]
              )
            }
          })), (y || r[f]) && (a = !0);
        };
        for (const c of o)
          u(this, c);
        for (const c of s)
          c.validate && u(c.field, c);
      });
      const l = La("submit");
      return this.state.meta.errorMap[l] && n !== "submit" && !a && this.setMeta((u) => ({
        ...u,
        errorMap: {
          ...u.errorMap,
          [l]: void 0
        }
      })), { hasErrored: a };
    }, this.validateAsync = async (n, r) => {
      const o = Cm(n, this.options), i = await r, s = this.getLinkedFields(n), a = s.reduce(
        (f, y) => {
          const g = Cm(n, y.options);
          return g.forEach((v) => {
            v.field = y;
          }), f.concat(g);
        },
        []
      );
      this.state.meta.isValidating || this.setMeta((f) => ({ ...f, isValidating: !0 }));
      for (const f of s)
        f.setMeta((y) => ({ ...y, isValidating: !0 }));
      const l = [], u = [], c = (f, y, g) => {
        const v = La(y.cause), x = f.getInfo().validationMetaMap[v];
        x == null || x.lastAbortController.abort();
        const m = new AbortController();
        this.getInfo().validationMetaMap[v] = {
          lastAbortController: m
        }, g.push(
          new Promise(async (h) => {
            var p;
            let b;
            try {
              b = await new Promise((E, M) => {
                this.timeoutIds[y.cause] && clearTimeout(this.timeoutIds[y.cause]), this.timeoutIds[y.cause] = setTimeout(async () => {
                  if (m.signal.aborted) return E(void 0);
                  try {
                    E(
                      await this.runValidator({
                        validate: y.validate,
                        value: {
                          value: f.getValue(),
                          fieldApi: f,
                          signal: m.signal,
                          validationSource: "field"
                        },
                        type: "validateAsync"
                      })
                    );
                  } catch (w) {
                    M(w);
                  }
                }, y.debounceMs);
              });
            } catch (E) {
              b = E;
            }
            if (m.signal.aborted) return h(void 0);
            const k = R1(b), C = (p = i[this.name]) == null ? void 0 : p[v], T = k || C;
            f.setMeta((E) => ({
              ...E,
              errorMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...E == null ? void 0 : E.errorMap,
                [v]: T
              }
            })), h(T);
          })
        );
      };
      for (const f of o)
        f.validate && c(this, f, l);
      for (const f of a)
        f.validate && c(
          f.field,
          f,
          u
        );
      let d = [];
      (l.length || u.length) && (d = await Promise.all(l), await Promise.all(u)), this.setMeta((f) => ({ ...f, isValidating: !1 }));
      for (const f of s)
        f.setMeta((y) => ({ ...y, isValidating: !1 }));
      return d.filter(Boolean);
    }, this.validate = (n) => {
      var r;
      if (!this.state.meta.isTouched) return [];
      const { fieldsErrorMap: o } = this.form.validateSync(n), { hasErrored: i } = this.validateSync(
        n,
        o[this.name] ?? {}
      );
      if (i && !this.options.asyncAlways)
        return (r = this.getInfo().validationMetaMap[La(n)]) == null || r.lastAbortController.abort(), this.state.meta.errors;
      const s = this.form.validateAsync(n);
      return this.validateAsync(n, s);
    }, this.handleChange = (n) => {
      this.setValue(n);
    }, this.handleBlur = () => {
      var n, r;
      this.state.meta.isTouched || (this.setMeta((i) => ({ ...i, isTouched: !0 })), this.validate("change")), this.state.meta.isBlurred || this.setMeta((i) => ({ ...i, isBlurred: !0 })), this.validate("blur"), (r = (n = this.options.listeners) == null ? void 0 : n.onBlur) == null || r.call(n, {
        value: this.state.value,
        fieldApi: this
      });
    }, this.form = t.form, this.name = t.name, this.timeoutIds = {}, t.defaultValue !== void 0 && this.form.setFieldValue(this.name, t.defaultValue, {
      dontUpdateMeta: !0
    }), this.store = new A_(
      {
        value: this.getValue(),
        meta: this._getMeta() ?? {
          isValidating: !1,
          isTouched: !1,
          isBlurred: !1,
          isDirty: !1,
          isPristine: !0,
          errors: [],
          errorMap: {},
          ...t.defaultMeta
        }
      },
      {
        onUpdate: () => {
          const n = this.store.state;
          n.meta.errors = Object.values(n.meta.errorMap).filter(
            (r) => r !== void 0
          ), n.meta.isPristine = !n.meta.isDirty, this.prevState = n, this.state = n;
        }
      }
    ), this.state = this.store.state, this.prevState = this.state, this.options = t;
  }
  /**
   * @private
   */
  runValidator(t) {
    const n = [
      this.form.options.validatorAdapter,
      this.options.validatorAdapter
    ];
    for (const r of n)
      if (r && (typeof t.validate != "function" || "~standard" in t.validate))
        return r()[t.type](
          t.value,
          t.validate
        );
    return L_(t.validate) ? j_()()[t.type](
      t.value,
      t.validate
    ) : t.validate(t.value);
  }
  /**
   * Updates the field's errorMap
   */
  setErrorMap(t) {
    this.setMeta((n) => ({
      ...n,
      errorMap: {
        ...n.errorMap,
        ...t
      }
    }));
  }
}
function R1(e) {
  if (e)
    return typeof e != "string" ? "Invalid Form Values" : e;
}
function La(e) {
  switch (e) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "change":
    default:
      return "onChange";
  }
}
var N_ = { exports: {} }, F_ = {}, D_ = { exports: {} }, z_ = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la = _;
function vL(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var bL = typeof Object.is == "function" ? Object.is : vL, xL = la.useState, wL = la.useEffect, SL = la.useLayoutEffect, _L = la.useDebugValue;
function kL(e, t) {
  var n = t(), r = xL({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return SL(
    function() {
      o.value = n, o.getSnapshot = t, _p(o) && i({ inst: o });
    },
    [e, n, t]
  ), wL(
    function() {
      return _p(o) && i({ inst: o }), e(function() {
        _p(o) && i({ inst: o });
      });
    },
    [e]
  ), _L(n), n;
}
function _p(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bL(e, n);
  } catch {
    return !0;
  }
}
function CL(e, t) {
  return t();
}
var TL = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? CL : kL;
z_.useSyncExternalStore = la.useSyncExternalStore !== void 0 ? la.useSyncExternalStore : TL;
D_.exports = z_;
var EL = D_.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf = _, RL = EL;
function PL(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var OL = typeof Object.is == "function" ? Object.is : PL, ML = RL.useSyncExternalStore, IL = Rf.useRef, AL = Rf.useEffect, $L = Rf.useMemo, jL = Rf.useDebugValue;
F_.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = IL(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = $L(
    function() {
      function l(y) {
        if (!u) {
          if (u = !0, c = y, y = r(y), o !== void 0 && s.hasValue) {
            var g = s.value;
            if (o(g, y))
              return d = g;
          }
          return d = y;
        }
        if (g = d, OL(c, y)) return g;
        var v = r(y);
        return o !== void 0 && o(g, v) ? (c = y, g) : (c = y, d = v);
      }
      var u = !1, c, d, f = n === void 0 ? null : n;
      return [
        function() {
          return l(t());
        },
        f === null ? void 0 : function() {
          return l(f());
        }
      ];
    },
    [t, n, r, o]
  );
  var a = ML(e, i[0], i[1]);
  return AL(
    function() {
      s.hasValue = !0, s.value = a;
    },
    [a]
  ), jL(a), a;
};
N_.exports = F_;
var LL = N_.exports;
function kg(e, t = (n) => n) {
  return LL.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    NL
  );
}
function NL(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!t.has(r) || !Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]]))
      return !1;
  return !0;
}
const vd = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
function FL(e) {
  const [t] = _.useState(() => {
    const r = new gL({
      ...e,
      form: e.form,
      name: e.name
    });
    return r.Field = B_, r;
  });
  return vd(t.mount, [t]), vd(() => {
    t.update(e);
  }), kg(
    t.store,
    e.mode === "array" ? (n) => [n.meta, Object.keys(n.value ?? []).length] : void 0
  ), t;
}
const B_ = ({
  children: e,
  ...t
}) => {
  const n = FL(t), r = _.useMemo(
    () => Ef(e, n),
    /**
     * The reason this exists is to fix an issue with the React Compiler.
     * Namely, functionalUpdate is memoized where it checks for `fieldApi`, which is a static type.
     * This means that when `state.value` changes, it does not trigger a re-render. The useMemo explicitly fixes this problem
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, n, n.state.value, n.state.meta]
  );
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: r });
};
function DL({
  form: e,
  selector: t,
  children: n
}) {
  const r = kg(e.store, t);
  return Ef(n, r);
}
function U_(e) {
  const [t] = _.useState(() => {
    const n = new yL(e), r = n;
    return r.Field = function(i) {
      return /* @__PURE__ */ S.jsx(B_, { ...i, form: n });
    }, r.Subscribe = (o) => /* @__PURE__ */ S.jsx(
      DL,
      {
        form: n,
        selector: o.selector,
        children: o.children
      }
    ), r;
  });
  return vd(t.mount, []), kg(t.store, (n) => n.isSubmitting), vd(() => {
    t.update(e);
  }), t;
}
const zL = ({
  setIsSignup: e,
  setIsLogged: t
}) => {
  const { signin: n } = wg(), [r, o] = _.useState(!1), [i, s] = _.useState(!1), a = So.object({
    username: So.string().min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
    password: So.string().min(6, "Password must be at least 6 characters long")
  }), l = U_({
    defaultValues: { username: "", password: "" },
    onSubmit: async ({ value: u }) => {
      s(!0);
      const { accessToken: c } = await n(u).catch((d) => {
        ie.error(d.message), s(!1);
      });
      c && (s(!1), t(!0), ie.success("Sign in successful"));
    },
    validators: {
      onChange: a
    }
  });
  return /* @__PURE__ */ S.jsx(
    tt,
    {
      sx: {
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        p: 0,
        m: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flex: 1,
        flexDirection: "column"
      },
      children: /* @__PURE__ */ S.jsx(
        Vt,
        {
          elevation: 6,
          sx: {
            p: 4,
            m: 2,
            width: "100%",
            maxWidth: 400,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.8)"
          },
          children: /* @__PURE__ */ S.jsxs(
            "form",
            {
              onSubmit: (u) => {
                u.preventDefault(), l.handleSubmit();
              },
              children: [
                /* @__PURE__ */ S.jsxs(
                  tt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    sx: { mb: 5 },
                    children: [
                      /* @__PURE__ */ S.jsx(He, { variant: "h5", children: "Sign in" }),
                      /* @__PURE__ */ S.jsxs(
                        He,
                        {
                          variant: "body2",
                          color: "text.secondary",
                          children: [
                            "Don’t have an account?",
                            " ",
                            /* @__PURE__ */ S.jsx(
                              xS,
                              {
                                variant: "subtitle2",
                                sx: { ml: 0.5, cursor: "pointer" },
                                onClick: () => e(!1),
                                children: "Get started"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ S.jsxs(
                  tt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [
                      /* @__PURE__ */ S.jsx(l.Field, { name: "username", children: (u) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Username",
                          value: u.state.value,
                          onChange: (c) => u.handleChange(c.target.value),
                          error: !!u.state.meta.errors.length,
                          helperText: u.state.meta.errors.join(", "),
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(l.Field, { name: "password", children: (u) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Password",
                          type: r ? "text" : "password",
                          value: u.state.value,
                          onChange: (c) => u.handleChange(c.target.value),
                          error: !!u.state.meta.errors.length,
                          helperText: u.state.meta.errors.join(", "),
                          slotProps: {
                            input: {
                              endAdornment: /* @__PURE__ */ S.jsx(Fh, { position: "end", children: /* @__PURE__ */ S.jsx(
                                Bt,
                                {
                                  onClick: () => o(!r),
                                  children: r ? /* @__PURE__ */ S.jsx(im, {}) : /* @__PURE__ */ S.jsx(sm, {})
                                }
                              ) })
                            }
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(
                        S_,
                        {
                          loading: i,
                          fullWidth: !0,
                          type: "submit",
                          variant: "contained",
                          children: "Sign in"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, BL = _.memo(zL), UL = ({
  setIsSignup: e,
  setIsLogged: t
}) => {
  const { signup: n } = wg(), [r, o] = _.useState(!1), [i, s] = _.useState(!1), [a, l] = _.useState(!1), u = So.object({
    email: So.string().email("Invalid email address"),
    username: So.string().min(3, "Username must be at least 3 characters long"),
    password: So.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: So.string()
  }).refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
  }), c = U_({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async ({ value: d }) => {
      l(!0);
      const f = await n(d).catch((y) => {
        ie.error(y.message), l(!1);
      });
      ie.success("Sign up successful"), ie.success(f.success.message), l(!1), t(!1);
    },
    validators: {
      onChange: u
    }
  });
  return /* @__PURE__ */ S.jsx(
    tt,
    {
      sx: {
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        p: 0,
        m: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        flex: 1,
        flexDirection: "column"
      },
      children: /* @__PURE__ */ S.jsx(
        Vt,
        {
          elevation: 6,
          sx: {
            p: 4,
            width: "100%",
            maxWidth: 400,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "rgba(255, 255, 255, 0.8)"
          },
          children: /* @__PURE__ */ S.jsxs(
            "form",
            {
              onSubmit: (d) => {
                d.preventDefault(), c.handleSubmit();
              },
              children: [
                /* @__PURE__ */ S.jsxs(
                  tt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    sx: { mb: 5 },
                    children: [
                      /* @__PURE__ */ S.jsx(He, { variant: "h5", children: "Sign up" }),
                      /* @__PURE__ */ S.jsxs(
                        He,
                        {
                          variant: "body2",
                          color: "text.secondary",
                          children: [
                            "Already have an account?",
                            " ",
                            /* @__PURE__ */ S.jsx(
                              xS,
                              {
                                variant: "subtitle2",
                                sx: { ml: 0.5, cursor: "pointer" },
                                onClick: () => e(!0),
                                children: "Sign in"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ S.jsxs(
                  tt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [
                      /* @__PURE__ */ S.jsx(c.Field, { name: "email", children: (d) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Email Address",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(c.Field, { name: "username", children: (d) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Username",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(c.Field, { name: "password", children: (d) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Password",
                          type: r ? "text" : "password",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          InputProps: {
                            endAdornment: /* @__PURE__ */ S.jsx(Fh, { position: "end", children: /* @__PURE__ */ S.jsx(
                              Bt,
                              {
                                onClick: () => o(!r),
                                children: r ? /* @__PURE__ */ S.jsx(im, {}) : /* @__PURE__ */ S.jsx(sm, {})
                              }
                            ) })
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(c.Field, { name: "confirmPassword", children: (d) => /* @__PURE__ */ S.jsx(
                        Xt,
                        {
                          fullWidth: !0,
                          label: "Confirm Password",
                          type: i ? "text" : "password",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          slotProps: {
                            input: {
                              endAdornment: /* @__PURE__ */ S.jsx(Fh, { position: "end", children: /* @__PURE__ */ S.jsx(
                                Bt,
                                {
                                  onClick: () => s(!i),
                                  children: i ? /* @__PURE__ */ S.jsx(im, {}) : /* @__PURE__ */ S.jsx(sm, {})
                                }
                              ) })
                            }
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ S.jsx(
                        S_,
                        {
                          loading: a,
                          fullWidth: !0,
                          type: "submit",
                          variant: "contained",
                          children: "Sign up"
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, VL = _.memo(UL), WL = ({ children: e }) => /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
  /* @__PURE__ */ S.jsx(
    tt,
    {
      component: "img",
      src: "https://critical-future-llm-in-a-box.github.io/fseriesLibrary/public/fseries.png",
      alt: "background",
      sx: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        inset: 0
      }
    }
  ),
  e
] }), HL = re.memo(WL), V_ = ({ children: e }) => {
  const { user: t } = vu(), [n, r] = re.useState(!0), [o, i] = re.useState(!1);
  re.useEffect(() => {
    t && i(!0), t || i(!1);
  }, [t]);
  const s = () => o || t ? e : n ? /* @__PURE__ */ S.jsx(
    BL,
    {
      setIsLogged: i,
      setIsSignup: r
    }
  ) : /* @__PURE__ */ S.jsx(
    VL,
    {
      setIsLogged: i,
      setIsSignup: r
    }
  );
  return /* @__PURE__ */ S.jsx(HL, { children: s() });
};
re.memo(V_);
const KL = () => {
  const e = _.useMemo(() => sf(), []), t = _.useMemo(
    () => new dA({
      defaultOptions: {
        queries: {
          staleTime: 10 * 60 * 1e3,
          refetchInterval: 10 * 60 * 1e3
        },
        mutations: {}
      }
    }),
    []
  ), n = _.useRef(null);
  return _.useEffect(() => {
    if (n.current && !n.current.shadowRoot) {
      const r = n.current.attachShadow({ mode: "open" }), o = document.createElement("style");
      o.textContent = RA, r.appendChild(o);
      const i = sw({
        key: "mui",
        container: r
      });
      _y(r).render(
        /* @__PURE__ */ S.jsx(yE, { value: i, children: /* @__PURE__ */ S.jsx(yA, { client: t, children: /* @__PURE__ */ S.jsxs(wP, { theme: e, children: [
          /* @__PURE__ */ S.jsx(r5, {}),
          /* @__PURE__ */ S.jsx(
            G3,
            {
              autoClose: 2e3,
              style: { top: "150px" }
            }
          ),
          /* @__PURE__ */ S.jsx(V_, { children: /* @__PURE__ */ S.jsx(K$, {}) })
        ] }) }) })
      );
    }
  }, [e, t]), /* @__PURE__ */ S.jsx(
    "div",
    {
      style: {
        overflow: "clip",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0
      },
      ref: n
    }
  );
};
_y(document.getElementById("root")).render(/* @__PURE__ */ S.jsx(KL, {}));
