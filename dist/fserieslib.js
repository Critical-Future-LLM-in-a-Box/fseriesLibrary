var kw = Object.defineProperty;
var ky = (e) => {
  throw TypeError(e);
};
var Ew = (e, t, n) => t in e ? kw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Hi = (e, t, n) => Ew(e, typeof t != "symbol" ? t + "" : t, n), Dd = (e, t, n) => t.has(e) || ky("Cannot " + n);
var R = (e, t, n) => (Dd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ne = (e, t, n) => t.has(e) ? ky("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), H = (e, t, n, r) => (Dd(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), fe = (e, t, n) => (Dd(e, t, "access private method"), n);
var zl = (e, t, n, r) => ({
  set _(o) {
    H(e, t, o, n);
  },
  get _() {
    return R(e, t, r);
  }
});
function Tw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Pv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mv = { exports: {} }, Oc = {}, Iv = { exports: {} }, ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bl = Symbol.for("react.element"), Rw = Symbol.for("react.portal"), Pw = Symbol.for("react.fragment"), Mw = Symbol.for("react.strict_mode"), Iw = Symbol.for("react.profiler"), Ow = Symbol.for("react.provider"), Aw = Symbol.for("react.context"), $w = Symbol.for("react.forward_ref"), Nw = Symbol.for("react.suspense"), Lw = Symbol.for("react.memo"), Fw = Symbol.for("react.lazy"), Ey = Symbol.iterator;
function jw(e) {
  return e === null || typeof e != "object" ? null : (e = Ey && e[Ey] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ov = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Av = Object.assign, $v = {};
function Ni(e, t, n) {
  this.props = e, this.context = t, this.refs = $v, this.updater = n || Ov;
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nv() {
}
Nv.prototype = Ni.prototype;
function $h(e, t, n) {
  this.props = e, this.context = t, this.refs = $v, this.updater = n || Ov;
}
var Nh = $h.prototype = new Nv();
Nh.constructor = $h;
Av(Nh, Ni.prototype);
Nh.isPureReactComponent = !0;
var Ty = Array.isArray, Lv = Object.prototype.hasOwnProperty, Lh = { current: null }, Fv = { key: !0, ref: !0, __self: !0, __source: !0 };
function jv(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) Lv.call(t, r) && !Fv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: bl, type: e, key: s, ref: i, props: o, _owner: Lh.current };
}
function zw(e, t) {
  return { $$typeof: bl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Fh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bl;
}
function Dw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ry = /\/+/g;
function Bd(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dw("" + e.key) : t.toString(36);
}
function hu(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (s) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case bl:
        case Rw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Bd(i, 0) : r, Ty(o) ? (n = "", e != null && (n = e.replace(Ry, "$&/") + "/"), hu(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Fh(o) && (o = zw(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ry, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ty(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Bd(s, a);
    i += hu(s, t, n, l, o);
  }
  else if (l = jw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Bd(s, a++), i += hu(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Dl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return hu(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function Bw(e) {
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
var Kt = { current: null }, mu = { transition: null }, Uw = { ReactCurrentDispatcher: Kt, ReactCurrentBatchConfig: mu, ReactCurrentOwner: Lh };
function zv() {
  throw Error("act(...) is not supported in production builds of React.");
}
ye.Children = { map: Dl, forEach: function(e, t, n) {
  Dl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Fh(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ye.Component = Ni;
ye.Fragment = Pw;
ye.Profiler = Iw;
ye.PureComponent = $h;
ye.StrictMode = Mw;
ye.Suspense = Nw;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw;
ye.act = zv;
ye.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Av({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = Lh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Lv.call(t, l) && !Fv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: bl, type: e.type, key: o, ref: s, props: r, _owner: i };
};
ye.createContext = function(e) {
  return e = { $$typeof: Aw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ow, _context: e }, e.Consumer = e;
};
ye.createElement = jv;
ye.createFactory = function(e) {
  var t = jv.bind(null, e);
  return t.type = e, t;
};
ye.createRef = function() {
  return { current: null };
};
ye.forwardRef = function(e) {
  return { $$typeof: $w, render: e };
};
ye.isValidElement = Fh;
ye.lazy = function(e) {
  return { $$typeof: Fw, _payload: { _status: -1, _result: e }, _init: Bw };
};
ye.memo = function(e, t) {
  return { $$typeof: Lw, type: e, compare: t === void 0 ? null : t };
};
ye.startTransition = function(e) {
  var t = mu.transition;
  mu.transition = {};
  try {
    e();
  } finally {
    mu.transition = t;
  }
};
ye.unstable_act = zv;
ye.useCallback = function(e, t) {
  return Kt.current.useCallback(e, t);
};
ye.useContext = function(e) {
  return Kt.current.useContext(e);
};
ye.useDebugValue = function() {
};
ye.useDeferredValue = function(e) {
  return Kt.current.useDeferredValue(e);
};
ye.useEffect = function(e, t) {
  return Kt.current.useEffect(e, t);
};
ye.useId = function() {
  return Kt.current.useId();
};
ye.useImperativeHandle = function(e, t, n) {
  return Kt.current.useImperativeHandle(e, t, n);
};
ye.useInsertionEffect = function(e, t) {
  return Kt.current.useInsertionEffect(e, t);
};
ye.useLayoutEffect = function(e, t) {
  return Kt.current.useLayoutEffect(e, t);
};
ye.useMemo = function(e, t) {
  return Kt.current.useMemo(e, t);
};
ye.useReducer = function(e, t, n) {
  return Kt.current.useReducer(e, t, n);
};
ye.useRef = function(e) {
  return Kt.current.useRef(e);
};
ye.useState = function(e) {
  return Kt.current.useState(e);
};
ye.useSyncExternalStore = function(e, t, n) {
  return Kt.current.useSyncExternalStore(e, t, n);
};
ye.useTransition = function() {
  return Kt.current.useTransition();
};
ye.version = "18.3.1";
Iv.exports = ye;
var w = Iv.exports;
const le = /* @__PURE__ */ Pv(w), Fu = /* @__PURE__ */ Tw({
  __proto__: null,
  default: le
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vw = w, Ww = Symbol.for("react.element"), Hw = Symbol.for("react.fragment"), Kw = Object.prototype.hasOwnProperty, Qw = Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dv(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Kw.call(t, r) && !Zw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ww, type: e, key: s, ref: i, props: o, _owner: Qw.current };
}
Oc.Fragment = Hw;
Oc.jsx = Dv;
Oc.jsxs = Dv;
Mv.exports = Oc;
var _ = Mv.exports, Bv = { exports: {} }, vn = {}, Uv = { exports: {} }, Vv = {};
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
  function t(A, $) {
    var U = A.length;
    A.push($);
    e: for (; 0 < U; ) {
      var Q = U - 1 >>> 1, ue = A[Q];
      if (0 < o(ue, $)) A[Q] = $, A[U] = ue, U = Q;
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var $ = A[0], U = A.pop();
    if (U !== $) {
      A[0] = U;
      e: for (var Q = 0, ue = A.length, Y = ue >>> 1; Q < Y; ) {
        var J = 2 * (Q + 1) - 1, ae = A[J], Fe = J + 1, ze = A[Fe];
        if (0 > o(ae, U)) Fe < ue && 0 > o(ze, ae) ? (A[Q] = ze, A[Fe] = U, Q = Fe) : (A[Q] = ae, A[J] = U, Q = J);
        else if (Fe < ue && 0 > o(ze, U)) A[Q] = ze, A[Fe] = U, Q = Fe;
        else break e;
      }
    }
    return $;
  }
  function o(A, $) {
    var U = A.sortIndex - $.sortIndex;
    return U !== 0 ? U : A.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var i = Date, a = i.now();
    e.unstable_now = function() {
      return i.now() - a;
    };
  }
  var l = [], u = [], c = 1, d = null, f = 3, y = !1, g = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(A) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= A) r(u), $.sortIndex = $.expirationTime, t(l, $);
      else break;
      $ = n(u);
    }
  }
  function x(A) {
    if (v = !1, p(A), !g) if (n(l) !== null) g = !0, B(C);
    else {
      var $ = n(u);
      $ !== null && W(x, $.startTime - A);
    }
  }
  function C(A, $) {
    g = !1, v && (v = !1, m(T), T = -1), y = !0;
    var U = f;
    try {
      for (p($), d = n(l); d !== null && (!(d.expirationTime > $) || A && !P()); ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          d.callback = null, f = d.priorityLevel;
          var ue = Q(d.expirationTime <= $);
          $ = e.unstable_now(), typeof ue == "function" ? d.callback = ue : d === n(l) && r(l), p($);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var J = n(u);
        J !== null && W(x, J.startTime - $), Y = !1;
      }
      return Y;
    } finally {
      d = null, f = U, y = !1;
    }
  }
  var k = !1, E = null, T = -1, M = 5, b = -1;
  function P() {
    return !(e.unstable_now() - b < M);
  }
  function N() {
    if (E !== null) {
      var A = e.unstable_now();
      b = A;
      var $ = !0;
      try {
        $ = E(!0, A);
      } finally {
        $ ? j() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var j;
  if (typeof h == "function") j = function() {
    h(N);
  };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(), L = D.port2;
    D.port1.onmessage = N, j = function() {
      L.postMessage(null);
    };
  } else j = function() {
    S(N, 0);
  };
  function B(A) {
    E = A, k || (k = !0, j());
  }
  function W(A, $) {
    T = S(function() {
      A(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
    A.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, B(C));
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
        var $ = 3;
        break;
      default:
        $ = f;
    }
    var U = f;
    f = $;
    try {
      return A();
    } finally {
      f = U;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(A, $) {
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
    var U = f;
    f = A;
    try {
      return $();
    } finally {
      f = U;
    }
  }, e.unstable_scheduleCallback = function(A, $, U) {
    var Q = e.unstable_now();
    switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? Q + U : Q) : U = Q, A) {
      case 1:
        var ue = -1;
        break;
      case 2:
        ue = 250;
        break;
      case 5:
        ue = 1073741823;
        break;
      case 4:
        ue = 1e4;
        break;
      default:
        ue = 5e3;
    }
    return ue = U + ue, A = { id: c++, callback: $, priorityLevel: A, startTime: U, expirationTime: ue, sortIndex: -1 }, U > Q ? (A.sortIndex = U, t(u, A), n(l) === null && A === n(u) && (v ? (m(T), T = -1) : v = !0, W(x, U - Q))) : (A.sortIndex = ue, t(l, A), g || y || (g = !0, B(C))), A;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function(A) {
    var $ = f;
    return function() {
      var U = f;
      f = $;
      try {
        return A.apply(this, arguments);
      } finally {
        f = U;
      }
    };
  };
})(Vv);
Uv.exports = Vv;
var Gw = Uv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qw = w, mn = Gw;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wv = /* @__PURE__ */ new Set(), Ma = {};
function bs(e, t) {
  vi(e, t), vi(e + "Capture", t);
}
function vi(e, t) {
  for (Ma[e] = t, e = 0; e < t.length; e++) Wv.add(t[e]);
}
var Fr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lf = Object.prototype.hasOwnProperty, Xw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Py = {}, My = {};
function Yw(e) {
  return Lf.call(My, e) ? !0 : Lf.call(Py, e) ? !1 : Xw.test(e) ? My[e] = !0 : (Py[e] = !0, !1);
}
function Jw(e, t, n, r) {
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
function eC(e, t, n, r) {
  if (t === null || typeof t > "u" || Jw(e, t, n, r)) return !0;
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
function Qt(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var kt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  kt[e] = new Qt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  kt[t] = new Qt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  kt[e] = new Qt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  kt[e] = new Qt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  kt[e] = new Qt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  kt[e] = new Qt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  kt[e] = new Qt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  kt[e] = new Qt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  kt[e] = new Qt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jh = /[\-:]([a-z])/g;
function zh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    jh,
    zh
  );
  kt[t] = new Qt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(jh, zh);
  kt[t] = new Qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(jh, zh);
  kt[t] = new Qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  kt[e] = new Qt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
kt.xlinkHref = new Qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  kt[e] = new Qt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Dh(e, t, n, r) {
  var o = kt.hasOwnProperty(t) ? kt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (eC(t, n, o, r) && (n = null), r || o === null ? Yw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Hr = qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bl = Symbol.for("react.element"), $s = Symbol.for("react.portal"), Ns = Symbol.for("react.fragment"), Bh = Symbol.for("react.strict_mode"), Ff = Symbol.for("react.profiler"), Hv = Symbol.for("react.provider"), Kv = Symbol.for("react.context"), Uh = Symbol.for("react.forward_ref"), jf = Symbol.for("react.suspense"), zf = Symbol.for("react.suspense_list"), Vh = Symbol.for("react.memo"), qr = Symbol.for("react.lazy"), Qv = Symbol.for("react.offscreen"), Iy = Symbol.iterator;
function Ki(e) {
  return e === null || typeof e != "object" ? null : (e = Iy && e[Iy] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xe = Object.assign, Ud;
function la(e) {
  if (Ud === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ud = t && t[1] || "";
  }
  return `
` + Ud + e;
}
var Vd = !1;
function Wd(e, t) {
  if (!e || Vd) return "";
  Vd = !0;
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
`), s = r.stack.split(`
`), i = o.length - 1, a = s.length - 1; 1 <= i && 0 <= a && o[i] !== s[a]; ) a--;
      for (; 1 <= i && 0 <= a; i--, a--) if (o[i] !== s[a]) {
        if (i !== 1 || a !== 1)
          do
            if (i--, a--, 0 > a || o[i] !== s[a]) {
              var l = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= i && 0 <= a);
        break;
      }
    }
  } finally {
    Vd = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? la(e) : "";
}
function tC(e) {
  switch (e.tag) {
    case 5:
      return la(e.type);
    case 16:
      return la("Lazy");
    case 13:
      return la("Suspense");
    case 19:
      return la("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Wd(e.type, !1), e;
    case 11:
      return e = Wd(e.type.render, !1), e;
    case 1:
      return e = Wd(e.type, !0), e;
    default:
      return "";
  }
}
function Df(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ns:
      return "Fragment";
    case $s:
      return "Portal";
    case Ff:
      return "Profiler";
    case Bh:
      return "StrictMode";
    case jf:
      return "Suspense";
    case zf:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Kv:
      return (e.displayName || "Context") + ".Consumer";
    case Hv:
      return (e._context.displayName || "Context") + ".Provider";
    case Uh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Vh:
      return t = e.displayName || null, t !== null ? t : Df(e.type) || "Memo";
    case qr:
      t = e._payload, e = e._init;
      try {
        return Df(e(t));
      } catch {
      }
  }
  return null;
}
function nC(e) {
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
      return Df(t);
    case 8:
      return t === Bh ? "StrictMode" : "Mode";
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
function wo(e) {
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
function Zv(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rC(e) {
  var t = Zv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, s.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ul(e) {
  e._valueTracker || (e._valueTracker = rC(e));
}
function Gv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Zv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ju(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bf(e, t) {
  var n = t.checked;
  return Xe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Oy(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function qv(e, t) {
  t = t.checked, t != null && Dh(e, "checked", t, !1);
}
function Uf(e, t) {
  qv(e, t);
  var n = wo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Vf(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vf(e, t.type, wo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ay(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Vf(e, t, n) {
  (t !== "number" || ju(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ua = Array.isArray;
function Qs(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wo(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $y(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (ua(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wo(n) };
}
function Xv(e, t) {
  var n = wo(t.value), r = wo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ny(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Yv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Yv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vl, Jv = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Vl = Vl || document.createElement("div"), Vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ia(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var va = {
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
}, oC = ["Webkit", "ms", "Moz", "O"];
Object.keys(va).forEach(function(e) {
  oC.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), va[t] = va[e];
  });
});
function e1(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || va.hasOwnProperty(e) && va[e] ? ("" + t).trim() : t + "px";
}
function t1(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = e1(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var sC = Xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Kf(e, t) {
  if (t) {
    if (sC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function Qf(e, t) {
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
var Zf = null;
function Wh(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Gf = null, Zs = null, Gs = null;
function Ly(e) {
  if (e = wl(e)) {
    if (typeof Gf != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = Fc(t), Gf(e.stateNode, e.type, t));
  }
}
function n1(e) {
  Zs ? Gs ? Gs.push(e) : Gs = [e] : Zs = e;
}
function r1() {
  if (Zs) {
    var e = Zs, t = Gs;
    if (Gs = Zs = null, Ly(e), t) for (e = 0; e < t.length; e++) Ly(t[e]);
  }
}
function o1(e, t) {
  return e(t);
}
function s1() {
}
var Hd = !1;
function i1(e, t, n) {
  if (Hd) return e(t, n);
  Hd = !0;
  try {
    return o1(e, t, n);
  } finally {
    Hd = !1, (Zs !== null || Gs !== null) && (s1(), r1());
  }
}
function Oa(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fc(n);
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
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var qf = !1;
if (Fr) try {
  var Qi = {};
  Object.defineProperty(Qi, "passive", { get: function() {
    qf = !0;
  } }), window.addEventListener("test", Qi, Qi), window.removeEventListener("test", Qi, Qi);
} catch {
  qf = !1;
}
function iC(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ba = !1, zu = null, Du = !1, Xf = null, aC = { onError: function(e) {
  ba = !0, zu = e;
} };
function lC(e, t, n, r, o, s, i, a, l) {
  ba = !1, zu = null, iC.apply(aC, arguments);
}
function uC(e, t, n, r, o, s, i, a, l) {
  if (lC.apply(this, arguments), ba) {
    if (ba) {
      var u = zu;
      ba = !1, zu = null;
    } else throw Error(z(198));
    Du || (Du = !0, Xf = u);
  }
}
function xs(e) {
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
function a1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Fy(e) {
  if (xs(e) !== e) throw Error(z(188));
}
function cC(e) {
  var t = e.alternate;
  if (!t) {
    if (t = xs(e), t === null) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Fy(o), e;
        if (s === r) return Fy(o), t;
        s = s.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) n = o, r = s;
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          i = !0, n = o, r = s;
          break;
        }
        if (a === r) {
          i = !0, r = o, n = s;
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            i = !0, n = s, r = o;
            break;
          }
          if (a === r) {
            i = !0, r = s, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function l1(e) {
  return e = cC(e), e !== null ? u1(e) : null;
}
function u1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = u1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var c1 = mn.unstable_scheduleCallback, jy = mn.unstable_cancelCallback, dC = mn.unstable_shouldYield, fC = mn.unstable_requestPaint, st = mn.unstable_now, pC = mn.unstable_getCurrentPriorityLevel, Hh = mn.unstable_ImmediatePriority, d1 = mn.unstable_UserBlockingPriority, Bu = mn.unstable_NormalPriority, hC = mn.unstable_LowPriority, f1 = mn.unstable_IdlePriority, Ac = null, pr = null;
function mC(e) {
  if (pr && typeof pr.onCommitFiberRoot == "function") try {
    pr.onCommitFiberRoot(Ac, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Vn = Math.clz32 ? Math.clz32 : vC, yC = Math.log, gC = Math.LN2;
function vC(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yC(e) / gC | 0) | 0;
}
var Wl = 64, Hl = 4194304;
function ca(e) {
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
function Uu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = ca(a) : (s &= i, s !== 0 && (r = ca(s)));
  } else i = n & ~o, i !== 0 ? r = ca(i) : s !== 0 && (r = ca(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Vn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function bC(e, t) {
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
function xC(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Vn(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = bC(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function Yf(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function p1() {
  var e = Wl;
  return Wl <<= 1, !(Wl & 4194240) && (Wl = 64), e;
}
function Kd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vn(t), e[t] = n;
}
function SC(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Vn(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Kh(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Vn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Me = 0;
function h1(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var m1, Qh, y1, g1, v1, Jf = !1, Kl = [], ho = null, mo = null, yo = null, Aa = /* @__PURE__ */ new Map(), $a = /* @__PURE__ */ new Map(), Jr = [], wC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ho = null;
      break;
    case "dragenter":
    case "dragleave":
      mo = null;
      break;
    case "mouseover":
    case "mouseout":
      yo = null;
      break;
    case "pointerover":
    case "pointerout":
      Aa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $a.delete(t.pointerId);
  }
}
function Zi(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = wl(t), t !== null && Qh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function CC(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ho = Zi(ho, e, t, n, r, o), !0;
    case "dragenter":
      return mo = Zi(mo, e, t, n, r, o), !0;
    case "mouseover":
      return yo = Zi(yo, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Aa.set(s, Zi(Aa.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, $a.set(s, Zi($a.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function b1(e) {
  var t = Uo(e.target);
  if (t !== null) {
    var n = xs(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = a1(n), t !== null) {
          e.blockedOn = t, v1(e.priority, function() {
            y1(n);
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
function yu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ep(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Zf = r, n.target.dispatchEvent(r), Zf = null;
    } else return t = wl(n), t !== null && Qh(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Dy(e, t, n) {
  yu(e) && n.delete(t);
}
function _C() {
  Jf = !1, ho !== null && yu(ho) && (ho = null), mo !== null && yu(mo) && (mo = null), yo !== null && yu(yo) && (yo = null), Aa.forEach(Dy), $a.forEach(Dy);
}
function Gi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jf || (Jf = !0, mn.unstable_scheduleCallback(mn.unstable_NormalPriority, _C)));
}
function Na(e) {
  function t(o) {
    return Gi(o, e);
  }
  if (0 < Kl.length) {
    Gi(Kl[0], e);
    for (var n = 1; n < Kl.length; n++) {
      var r = Kl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ho !== null && Gi(ho, e), mo !== null && Gi(mo, e), yo !== null && Gi(yo, e), Aa.forEach(t), $a.forEach(t), n = 0; n < Jr.length; n++) r = Jr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jr.length && (n = Jr[0], n.blockedOn === null); ) b1(n), n.blockedOn === null && Jr.shift();
}
var qs = Hr.ReactCurrentBatchConfig, Vu = !0;
function kC(e, t, n, r) {
  var o = Me, s = qs.transition;
  qs.transition = null;
  try {
    Me = 1, Zh(e, t, n, r);
  } finally {
    Me = o, qs.transition = s;
  }
}
function EC(e, t, n, r) {
  var o = Me, s = qs.transition;
  qs.transition = null;
  try {
    Me = 4, Zh(e, t, n, r);
  } finally {
    Me = o, qs.transition = s;
  }
}
function Zh(e, t, n, r) {
  if (Vu) {
    var o = ep(e, t, n, r);
    if (o === null) nf(e, t, r, Wu, n), zy(e, r);
    else if (CC(o, e, t, n, r)) r.stopPropagation();
    else if (zy(e, r), t & 4 && -1 < wC.indexOf(e)) {
      for (; o !== null; ) {
        var s = wl(o);
        if (s !== null && m1(s), s = ep(e, t, n, r), s === null && nf(e, t, r, Wu, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else nf(e, t, r, null, n);
  }
}
var Wu = null;
function ep(e, t, n, r) {
  if (Wu = null, e = Wh(r), e = Uo(e), e !== null) if (t = xs(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = a1(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wu = e, null;
}
function x1(e) {
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
      switch (pC()) {
        case Hh:
          return 1;
        case d1:
          return 4;
        case Bu:
        case hC:
          return 16;
        case f1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fo = null, Gh = null, gu = null;
function S1() {
  if (gu) return gu;
  var e, t = Gh, n = t.length, r, o = "value" in fo ? fo.value : fo.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return gu = o.slice(e, 1 < r ? 1 - r : void 0);
}
function vu(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ql() {
  return !0;
}
function By() {
  return !1;
}
function bn(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ql : By, this.isPropagationStopped = By, this;
  }
  return Xe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ql);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ql);
  }, persist: function() {
  }, isPersistent: Ql }), t;
}
var Li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, qh = bn(Li), Sl = Xe({}, Li, { view: 0, detail: 0 }), TC = bn(Sl), Qd, Zd, qi, $c = Xe({}, Sl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xh, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qi && (qi && e.type === "mousemove" ? (Qd = e.screenX - qi.screenX, Zd = e.screenY - qi.screenY) : Zd = Qd = 0, qi = e), Qd);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zd;
} }), Uy = bn($c), RC = Xe({}, $c, { dataTransfer: 0 }), PC = bn(RC), MC = Xe({}, Sl, { relatedTarget: 0 }), Gd = bn(MC), IC = Xe({}, Li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), OC = bn(IC), AC = Xe({}, Li, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $C = bn(AC), NC = Xe({}, Li, { data: 0 }), Vy = bn(NC), LC = {
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
}, FC = {
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
}, jC = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zC(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jC[e]) ? !!t[e] : !1;
}
function Xh() {
  return zC;
}
var DC = Xe({}, Sl, { key: function(e) {
  if (e.key) {
    var t = LC[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? FC[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xh, charCode: function(e) {
  return e.type === "keypress" ? vu(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), BC = bn(DC), UC = Xe({}, $c, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wy = bn(UC), VC = Xe({}, Sl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xh }), WC = bn(VC), HC = Xe({}, Li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), KC = bn(HC), QC = Xe({}, $c, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ZC = bn(QC), GC = [9, 13, 27, 32], Yh = Fr && "CompositionEvent" in window, xa = null;
Fr && "documentMode" in document && (xa = document.documentMode);
var qC = Fr && "TextEvent" in window && !xa, w1 = Fr && (!Yh || xa && 8 < xa && 11 >= xa), Hy = " ", Ky = !1;
function C1(e, t) {
  switch (e) {
    case "keyup":
      return GC.indexOf(t.keyCode) !== -1;
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
function _1(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ls = !1;
function XC(e, t) {
  switch (e) {
    case "compositionend":
      return _1(t);
    case "keypress":
      return t.which !== 32 ? null : (Ky = !0, Hy);
    case "textInput":
      return e = t.data, e === Hy && Ky ? null : e;
    default:
      return null;
  }
}
function YC(e, t) {
  if (Ls) return e === "compositionend" || !Yh && C1(e, t) ? (e = S1(), gu = Gh = fo = null, Ls = !1, e) : null;
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
      return w1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var JC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!JC[e.type] : t === "textarea";
}
function k1(e, t, n, r) {
  n1(r), t = Hu(t, "onChange"), 0 < t.length && (n = new qh("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sa = null, La = null;
function e_(e) {
  L1(e, 0);
}
function Nc(e) {
  var t = zs(e);
  if (Gv(t)) return e;
}
function t_(e, t) {
  if (e === "change") return t;
}
var E1 = !1;
if (Fr) {
  var qd;
  if (Fr) {
    var Xd = "oninput" in document;
    if (!Xd) {
      var Zy = document.createElement("div");
      Zy.setAttribute("oninput", "return;"), Xd = typeof Zy.oninput == "function";
    }
    qd = Xd;
  } else qd = !1;
  E1 = qd && (!document.documentMode || 9 < document.documentMode);
}
function Gy() {
  Sa && (Sa.detachEvent("onpropertychange", T1), La = Sa = null);
}
function T1(e) {
  if (e.propertyName === "value" && Nc(La)) {
    var t = [];
    k1(t, La, e, Wh(e)), i1(e_, t);
  }
}
function n_(e, t, n) {
  e === "focusin" ? (Gy(), Sa = t, La = n, Sa.attachEvent("onpropertychange", T1)) : e === "focusout" && Gy();
}
function r_(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Nc(La);
}
function o_(e, t) {
  if (e === "click") return Nc(t);
}
function s_(e, t) {
  if (e === "input" || e === "change") return Nc(t);
}
function i_(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qn = typeof Object.is == "function" ? Object.is : i_;
function Fa(e, t) {
  if (Qn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Lf.call(t, o) || !Qn(e[o], t[o])) return !1;
  }
  return !0;
}
function qy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xy(e, t) {
  var n = qy(e);
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
    n = qy(n);
  }
}
function R1(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? R1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function P1() {
  for (var e = window, t = ju(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ju(e.document);
  }
  return t;
}
function Jh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function a_(e) {
  var t = P1(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && R1(n.ownerDocument.documentElement, n)) {
    if (r !== null && Jh(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Xy(n, s);
        var i = Xy(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var l_ = Fr && "documentMode" in document && 11 >= document.documentMode, Fs = null, tp = null, wa = null, np = !1;
function Yy(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  np || Fs == null || Fs !== ju(r) || (r = Fs, "selectionStart" in r && Jh(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), wa && Fa(wa, r) || (wa = r, r = Hu(tp, "onSelect"), 0 < r.length && (t = new qh("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Fs)));
}
function Zl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var js = { animationend: Zl("Animation", "AnimationEnd"), animationiteration: Zl("Animation", "AnimationIteration"), animationstart: Zl("Animation", "AnimationStart"), transitionend: Zl("Transition", "TransitionEnd") }, Yd = {}, M1 = {};
Fr && (M1 = document.createElement("div").style, "AnimationEvent" in window || (delete js.animationend.animation, delete js.animationiteration.animation, delete js.animationstart.animation), "TransitionEvent" in window || delete js.transitionend.transition);
function Lc(e) {
  if (Yd[e]) return Yd[e];
  if (!js[e]) return e;
  var t = js[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in M1) return Yd[e] = t[n];
  return e;
}
var I1 = Lc("animationend"), O1 = Lc("animationiteration"), A1 = Lc("animationstart"), $1 = Lc("transitionend"), N1 = /* @__PURE__ */ new Map(), Jy = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Io(e, t) {
  N1.set(e, t), bs(t, [e]);
}
for (var Jd = 0; Jd < Jy.length; Jd++) {
  var ef = Jy[Jd], u_ = ef.toLowerCase(), c_ = ef[0].toUpperCase() + ef.slice(1);
  Io(u_, "on" + c_);
}
Io(I1, "onAnimationEnd");
Io(O1, "onAnimationIteration");
Io(A1, "onAnimationStart");
Io("dblclick", "onDoubleClick");
Io("focusin", "onFocus");
Io("focusout", "onBlur");
Io($1, "onTransitionEnd");
vi("onMouseEnter", ["mouseout", "mouseover"]);
vi("onMouseLeave", ["mouseout", "mouseover"]);
vi("onPointerEnter", ["pointerout", "pointerover"]);
vi("onPointerLeave", ["pointerout", "pointerover"]);
bs("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bs("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bs("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bs("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bs("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var da = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), d_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(da));
function eg(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, uC(r, t, void 0, e), e.currentTarget = null;
}
function L1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        eg(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        eg(o, a, u), s = l;
      }
    }
  }
  if (Du) throw e = Xf, Du = !1, Xf = null, e;
}
function Be(e, t) {
  var n = t[ap];
  n === void 0 && (n = t[ap] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (F1(t, e, 2, !1), n.add(r));
}
function tf(e, t, n) {
  var r = 0;
  t && (r |= 4), F1(n, e, r, t);
}
var Gl = "_reactListening" + Math.random().toString(36).slice(2);
function ja(e) {
  if (!e[Gl]) {
    e[Gl] = !0, Wv.forEach(function(n) {
      n !== "selectionchange" && (d_.has(n) || tf(n, !1, e), tf(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gl] || (t[Gl] = !0, tf("selectionchange", !1, t));
  }
}
function F1(e, t, n, r) {
  switch (x1(t)) {
    case 1:
      var o = kC;
      break;
    case 4:
      o = EC;
      break;
    default:
      o = Zh;
  }
  n = o.bind(null, t, n, e), o = void 0, !qf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function nf(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var l = i.tag;
        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        i = i.return;
      }
      for (; a !== null; ) {
        if (i = Uo(a), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          r = s = i;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  i1(function() {
    var u = s, c = Wh(n), d = [];
    e: {
      var f = N1.get(e);
      if (f !== void 0) {
        var y = qh, g = e;
        switch (e) {
          case "keypress":
            if (vu(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = BC;
            break;
          case "focusin":
            g = "focus", y = Gd;
            break;
          case "focusout":
            g = "blur", y = Gd;
            break;
          case "beforeblur":
          case "afterblur":
            y = Gd;
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
            y = Uy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = PC;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = WC;
            break;
          case I1:
          case O1:
          case A1:
            y = OC;
            break;
          case $1:
            y = KC;
            break;
          case "scroll":
            y = TC;
            break;
          case "wheel":
            y = ZC;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = $C;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Wy;
        }
        var v = (t & 4) !== 0, S = !v && e === "scroll", m = v ? f !== null ? f + "Capture" : null : f;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (p.tag === 5 && x !== null && (p = x, m !== null && (x = Oa(h, m), x != null && v.push(za(h, x, p)))), S) break;
          h = h.return;
        }
        0 < v.length && (f = new y(f, g, null, n, c), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== Zf && (g = n.relatedTarget || n.fromElement) && (Uo(g) || g[jr])) break e;
        if ((y || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = u, g = g ? Uo(g) : null, g !== null && (S = xs(g), g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = u), y !== g)) {
          if (v = Uy, x = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Wy, x = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = y == null ? f : zs(y), p = g == null ? f : zs(g), f = new v(x, h + "leave", y, n, c), f.target = S, f.relatedTarget = p, x = null, Uo(c) === u && (v = new v(m, h + "enter", g, n, c), v.target = p, v.relatedTarget = S, x = v), S = x, y && g) t: {
            for (v = y, m = g, h = 0, p = v; p; p = Cs(p)) h++;
            for (p = 0, x = m; x; x = Cs(x)) p++;
            for (; 0 < h - p; ) v = Cs(v), h--;
            for (; 0 < p - h; ) m = Cs(m), p--;
            for (; h--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = Cs(v), m = Cs(m);
            }
            v = null;
          }
          else v = null;
          y !== null && tg(d, f, y, v, !1), g !== null && S !== null && tg(d, S, g, v, !0);
        }
      }
      e: {
        if (f = u ? zs(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var C = t_;
        else if (Qy(f)) if (E1) C = s_;
        else {
          C = r_;
          var k = n_;
        }
        else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = o_);
        if (C && (C = C(e, u))) {
          k1(d, C, n, c);
          break e;
        }
        k && k(e, f, u), e === "focusout" && (k = f._wrapperState) && k.controlled && f.type === "number" && Vf(f, "number", f.value);
      }
      switch (k = u ? zs(u) : window, e) {
        case "focusin":
          (Qy(k) || k.contentEditable === "true") && (Fs = k, tp = u, wa = null);
          break;
        case "focusout":
          wa = tp = Fs = null;
          break;
        case "mousedown":
          np = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          np = !1, Yy(d, n, c);
          break;
        case "selectionchange":
          if (l_) break;
        case "keydown":
        case "keyup":
          Yy(d, n, c);
      }
      var E;
      if (Yh) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Ls ? C1(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (w1 && n.locale !== "ko" && (Ls || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ls && (E = S1()) : (fo = c, Gh = "value" in fo ? fo.value : fo.textContent, Ls = !0)), k = Hu(u, T), 0 < k.length && (T = new Vy(T, e, null, n, c), d.push({ event: T, listeners: k }), E ? T.data = E : (E = _1(n), E !== null && (T.data = E)))), (E = qC ? XC(e, n) : YC(e, n)) && (u = Hu(u, "onBeforeInput"), 0 < u.length && (c = new Vy("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = E));
    }
    L1(d, t);
  });
}
function za(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Hu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Oa(e, n), s != null && r.unshift(za(e, s, o)), s = Oa(e, t), s != null && r.push(za(e, s, o))), e = e.return;
  }
  return r;
}
function Cs(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tg(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = Oa(n, s), l != null && i.unshift(za(n, l, a))) : o || (l = Oa(n, s), l != null && i.push(za(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var f_ = /\r\n?/g, p_ = /\u0000|\uFFFD/g;
function ng(e) {
  return (typeof e == "string" ? e : "" + e).replace(f_, `
`).replace(p_, "");
}
function ql(e, t, n) {
  if (t = ng(t), ng(e) !== t && n) throw Error(z(425));
}
function Ku() {
}
var rp = null, op = null;
function sp(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ip = typeof setTimeout == "function" ? setTimeout : void 0, h_ = typeof clearTimeout == "function" ? clearTimeout : void 0, rg = typeof Promise == "function" ? Promise : void 0, m_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof rg < "u" ? function(e) {
  return rg.resolve(null).then(e).catch(y_);
} : ip;
function y_(e) {
  setTimeout(function() {
    throw e;
  });
}
function rf(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Na(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Na(t);
}
function go(e) {
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
function og(e) {
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
var Fi = Math.random().toString(36).slice(2), cr = "__reactFiber$" + Fi, Da = "__reactProps$" + Fi, jr = "__reactContainer$" + Fi, ap = "__reactEvents$" + Fi, g_ = "__reactListeners$" + Fi, v_ = "__reactHandles$" + Fi;
function Uo(e) {
  var t = e[cr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[jr] || n[cr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = og(e); e !== null; ) {
        if (n = e[cr]) return n;
        e = og(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function wl(e) {
  return e = e[cr] || e[jr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function Fc(e) {
  return e[Da] || null;
}
var lp = [], Ds = -1;
function Oo(e) {
  return { current: e };
}
function Ue(e) {
  0 > Ds || (e.current = lp[Ds], lp[Ds] = null, Ds--);
}
function je(e, t) {
  Ds++, lp[Ds] = e.current, e.current = t;
}
var Co = {}, Lt = Oo(Co), Jt = Oo(!1), os = Co;
function bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Co;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function en(e) {
  return e = e.childContextTypes, e != null;
}
function Qu() {
  Ue(Jt), Ue(Lt);
}
function sg(e, t, n) {
  if (Lt.current !== Co) throw Error(z(168));
  je(Lt, t), je(Jt, n);
}
function j1(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, nC(e) || "Unknown", o));
  return Xe({}, n, r);
}
function Zu(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Co, os = Lt.current, je(Lt, e), je(Jt, Jt.current), !0;
}
function ig(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = j1(e, t, os), r.__reactInternalMemoizedMergedChildContext = e, Ue(Jt), Ue(Lt), je(Lt, e)) : Ue(Jt), je(Jt, n);
}
var Pr = null, jc = !1, of = !1;
function z1(e) {
  Pr === null ? Pr = [e] : Pr.push(e);
}
function b_(e) {
  jc = !0, z1(e);
}
function Ao() {
  if (!of && Pr !== null) {
    of = !0;
    var e = 0, t = Me;
    try {
      var n = Pr;
      for (Me = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Pr = null, jc = !1;
    } catch (o) {
      throw Pr !== null && (Pr = Pr.slice(e + 1)), c1(Hh, Ao), o;
    } finally {
      Me = t, of = !1;
    }
  }
  return null;
}
var Bs = [], Us = 0, Gu = null, qu = 0, _n = [], kn = 0, ss = null, Or = 1, Ar = "";
function Fo(e, t) {
  Bs[Us++] = qu, Bs[Us++] = Gu, Gu = e, qu = t;
}
function D1(e, t, n) {
  _n[kn++] = Or, _n[kn++] = Ar, _n[kn++] = ss, ss = e;
  var r = Or;
  e = Ar;
  var o = 32 - Vn(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Vn(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Or = 1 << 32 - Vn(t) + o | n << o | r, Ar = s + e;
  } else Or = 1 << s | n << o | r, Ar = e;
}
function em(e) {
  e.return !== null && (Fo(e, 1), D1(e, 1, 0));
}
function tm(e) {
  for (; e === Gu; ) Gu = Bs[--Us], Bs[Us] = null, qu = Bs[--Us], Bs[Us] = null;
  for (; e === ss; ) ss = _n[--kn], _n[kn] = null, Ar = _n[--kn], _n[kn] = null, Or = _n[--kn], _n[kn] = null;
}
var dn = null, cn = null, Ke = !1, zn = null;
function B1(e, t) {
  var n = Pn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ag(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = go(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ss !== null ? { id: Or, overflow: Ar } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function up(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cp(e) {
  if (Ke) {
    var t = cn;
    if (t) {
      var n = t;
      if (!ag(e, t)) {
        if (up(e)) throw Error(z(418));
        t = go(n.nextSibling);
        var r = dn;
        t && ag(e, t) ? B1(r, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, dn = e);
      }
    } else {
      if (up(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, Ke = !1, dn = e;
    }
  }
}
function lg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function Xl(e) {
  if (e !== dn) return !1;
  if (!Ke) return lg(e), Ke = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sp(e.type, e.memoizedProps)), t && (t = cn)) {
    if (up(e)) throw U1(), Error(z(418));
    for (; t; ) B1(e, t), t = go(t.nextSibling);
  }
  if (lg(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = go(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? go(e.stateNode.nextSibling) : null;
  return !0;
}
function U1() {
  for (var e = cn; e; ) e = go(e.nextSibling);
}
function xi() {
  cn = dn = null, Ke = !1;
}
function nm(e) {
  zn === null ? zn = [e] : zn.push(e);
}
var x_ = Hr.ReactCurrentBatchConfig;
function Xi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var a = o.refs;
        i === null ? delete a[s] : a[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Yl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ug(e) {
  var t = e._init;
  return t(e._payload);
}
function V1(e) {
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
    return m = So(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, p) {
    return m.index = p, e ? (p = m.alternate, p !== null ? (p = p.index, p < h ? (m.flags |= 2, h) : p) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, p, x) {
    return h === null || h.tag !== 6 ? (h = ff(p, m.mode, x), h.return = m, h) : (h = o(h, p), h.return = m, h);
  }
  function l(m, h, p, x) {
    var C = p.type;
    return C === Ns ? c(m, h, p.props.children, x, p.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qr && ug(C) === h.type) ? (x = o(h, p.props), x.ref = Xi(m, h, p), x.return = m, x) : (x = ku(p.type, p.key, p.props, null, m.mode, x), x.ref = Xi(m, h, p), x.return = m, x);
  }
  function u(m, h, p, x) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = pf(p, m.mode, x), h.return = m, h) : (h = o(h, p.children || []), h.return = m, h);
  }
  function c(m, h, p, x, C) {
    return h === null || h.tag !== 7 ? (h = ts(p, m.mode, x, C), h.return = m, h) : (h = o(h, p), h.return = m, h);
  }
  function d(m, h, p) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = ff("" + h, m.mode, p), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Bl:
          return p = ku(h.type, h.key, h.props, null, m.mode, p), p.ref = Xi(m, null, h), p.return = m, p;
        case $s:
          return h = pf(h, m.mode, p), h.return = m, h;
        case qr:
          var x = h._init;
          return d(m, x(h._payload), p);
      }
      if (ua(h) || Ki(h)) return h = ts(h, m.mode, p, null), h.return = m, h;
      Yl(m, h);
    }
    return null;
  }
  function f(m, h, p, x) {
    var C = h !== null ? h.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return C !== null ? null : a(m, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bl:
          return p.key === C ? l(m, h, p, x) : null;
        case $s:
          return p.key === C ? u(m, h, p, x) : null;
        case qr:
          return C = p._init, f(
            m,
            h,
            C(p._payload),
            x
          );
      }
      if (ua(p) || Ki(p)) return C !== null ? null : c(m, h, p, x, null);
      Yl(m, p);
    }
    return null;
  }
  function y(m, h, p, x, C) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return m = m.get(p) || null, a(h, m, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Bl:
          return m = m.get(x.key === null ? p : x.key) || null, l(h, m, x, C);
        case $s:
          return m = m.get(x.key === null ? p : x.key) || null, u(h, m, x, C);
        case qr:
          var k = x._init;
          return y(m, h, p, k(x._payload), C);
      }
      if (ua(x) || Ki(x)) return m = m.get(p) || null, c(h, m, x, C, null);
      Yl(h, x);
    }
    return null;
  }
  function g(m, h, p, x) {
    for (var C = null, k = null, E = h, T = h = 0, M = null; E !== null && T < p.length; T++) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var b = f(m, E, p[T], x);
      if (b === null) {
        E === null && (E = M);
        break;
      }
      e && E && b.alternate === null && t(m, E), h = s(b, h, T), k === null ? C = b : k.sibling = b, k = b, E = M;
    }
    if (T === p.length) return n(m, E), Ke && Fo(m, T), C;
    if (E === null) {
      for (; T < p.length; T++) E = d(m, p[T], x), E !== null && (h = s(E, h, T), k === null ? C = E : k.sibling = E, k = E);
      return Ke && Fo(m, T), C;
    }
    for (E = r(m, E); T < p.length; T++) M = y(E, m, T, p[T], x), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? T : M.key), h = s(M, h, T), k === null ? C = M : k.sibling = M, k = M);
    return e && E.forEach(function(P) {
      return t(m, P);
    }), Ke && Fo(m, T), C;
  }
  function v(m, h, p, x) {
    var C = Ki(p);
    if (typeof C != "function") throw Error(z(150));
    if (p = C.call(p), p == null) throw Error(z(151));
    for (var k = C = null, E = h, T = h = 0, M = null, b = p.next(); E !== null && !b.done; T++, b = p.next()) {
      E.index > T ? (M = E, E = null) : M = E.sibling;
      var P = f(m, E, b.value, x);
      if (P === null) {
        E === null && (E = M);
        break;
      }
      e && E && P.alternate === null && t(m, E), h = s(P, h, T), k === null ? C = P : k.sibling = P, k = P, E = M;
    }
    if (b.done) return n(
      m,
      E
    ), Ke && Fo(m, T), C;
    if (E === null) {
      for (; !b.done; T++, b = p.next()) b = d(m, b.value, x), b !== null && (h = s(b, h, T), k === null ? C = b : k.sibling = b, k = b);
      return Ke && Fo(m, T), C;
    }
    for (E = r(m, E); !b.done; T++, b = p.next()) b = y(E, m, T, b.value, x), b !== null && (e && b.alternate !== null && E.delete(b.key === null ? T : b.key), h = s(b, h, T), k === null ? C = b : k.sibling = b, k = b);
    return e && E.forEach(function(N) {
      return t(m, N);
    }), Ke && Fo(m, T), C;
  }
  function S(m, h, p, x) {
    if (typeof p == "object" && p !== null && p.type === Ns && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bl:
          e: {
            for (var C = p.key, k = h; k !== null; ) {
              if (k.key === C) {
                if (C = p.type, C === Ns) {
                  if (k.tag === 7) {
                    n(m, k.sibling), h = o(k, p.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qr && ug(C) === k.type) {
                  n(m, k.sibling), h = o(k, p.props), h.ref = Xi(m, k, p), h.return = m, m = h;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            p.type === Ns ? (h = ts(p.props.children, m.mode, x, p.key), h.return = m, m = h) : (x = ku(p.type, p.key, p.props, null, m.mode, x), x.ref = Xi(m, h, p), x.return = m, m = x);
          }
          return i(m);
        case $s:
          e: {
            for (k = p.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                n(m, h.sibling), h = o(h, p.children || []), h.return = m, m = h;
                break e;
              } else {
                n(m, h);
                break;
              }
              else t(m, h);
              h = h.sibling;
            }
            h = pf(p, m.mode, x), h.return = m, m = h;
          }
          return i(m);
        case qr:
          return k = p._init, S(m, h, k(p._payload), x);
      }
      if (ua(p)) return g(m, h, p, x);
      if (Ki(p)) return v(m, h, p, x);
      Yl(m, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, p), h.return = m, m = h) : (n(m, h), h = ff(p, m.mode, x), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var Si = V1(!0), W1 = V1(!1), Xu = Oo(null), Yu = null, Vs = null, rm = null;
function om() {
  rm = Vs = Yu = null;
}
function sm(e) {
  var t = Xu.current;
  Ue(Xu), e._currentValue = t;
}
function dp(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Xs(e, t) {
  Yu = e, rm = Vs = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Yt = !0), e.firstContext = null);
}
function On(e) {
  var t = e._currentValue;
  if (rm !== e) if (e = { context: e, memoizedValue: t, next: null }, Vs === null) {
    if (Yu === null) throw Error(z(308));
    Vs = e, Yu.dependencies = { lanes: 0, firstContext: e };
  } else Vs = Vs.next = e;
  return t;
}
var Vo = null;
function im(e) {
  Vo === null ? Vo = [e] : Vo.push(e);
}
function H1(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, im(t)) : (n.next = o.next, o.next = n), t.interleaved = n, zr(e, r);
}
function zr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Xr = !1;
function am(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function K1(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function vo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ce & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, zr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, im(r)) : (t.next = o.next, o.next = t), r.interleaved = t, zr(e, n);
}
function bu(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Kh(e, n);
  }
}
function cg(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? o = s = i : s = s.next = i, n = n.next;
      } while (n !== null);
      s === null ? o = s = t : s = s.next = t;
    } else o = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ju(e, t, n, r) {
  var o = e.updateQueue;
  Xr = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, i === null ? s = u : i.next = u, i = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== i && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (s !== null) {
    var d = o.baseState;
    i = 0, c = u = l = null, a = s;
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
              d = Xe({}, d, f);
              break e;
            case 2:
              Xr = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a));
      } else y = { eventTime: y, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = y, l = d) : c = c.next = y, i |= f;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    as |= i, e.lanes = i, e.memoizedState = d;
  }
}
function dg(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(z(191, o));
      o.call(r);
    }
  }
}
var Cl = {}, hr = Oo(Cl), Ba = Oo(Cl), Ua = Oo(Cl);
function Wo(e) {
  if (e === Cl) throw Error(z(174));
  return e;
}
function lm(e, t) {
  switch (je(Ua, t), je(Ba, e), je(hr, Cl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hf(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hf(t, e);
  }
  Ue(hr), je(hr, t);
}
function wi() {
  Ue(hr), Ue(Ba), Ue(Ua);
}
function Q1(e) {
  Wo(Ua.current);
  var t = Wo(hr.current), n = Hf(t, e.type);
  t !== n && (je(Ba, e), je(hr, n));
}
function um(e) {
  Ba.current === e && (Ue(hr), Ue(Ba));
}
var Ge = Oo(0);
function ec(e) {
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
var sf = [];
function cm() {
  for (var e = 0; e < sf.length; e++) sf[e]._workInProgressVersionPrimary = null;
  sf.length = 0;
}
var xu = Hr.ReactCurrentDispatcher, af = Hr.ReactCurrentBatchConfig, is = 0, qe = null, dt = null, ht = null, tc = !1, Ca = !1, Va = 0, S_ = 0;
function Pt() {
  throw Error(z(321));
}
function dm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Qn(e[n], t[n])) return !1;
  return !0;
}
function fm(e, t, n, r, o, s) {
  if (is = s, qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xu.current = e === null || e.memoizedState === null ? k_ : E_, e = n(r, o), Ca) {
    s = 0;
    do {
      if (Ca = !1, Va = 0, 25 <= s) throw Error(z(301));
      s += 1, ht = dt = null, t.updateQueue = null, xu.current = T_, e = n(r, o);
    } while (Ca);
  }
  if (xu.current = nc, t = dt !== null && dt.next !== null, is = 0, ht = dt = qe = null, tc = !1, t) throw Error(z(300));
  return e;
}
function pm() {
  var e = Va !== 0;
  return Va = 0, e;
}
function rr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ht === null ? qe.memoizedState = ht = e : ht = ht.next = e, ht;
}
function An() {
  if (dt === null) {
    var e = qe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = ht === null ? qe.memoizedState : ht.next;
  if (t !== null) ht = t, dt = e;
  else {
    if (e === null) throw Error(z(310));
    dt = e, e = { memoizedState: dt.memoizedState, baseState: dt.baseState, baseQueue: dt.baseQueue, queue: dt.queue, next: null }, ht === null ? qe.memoizedState = ht = e : ht = ht.next = e;
  }
  return ht;
}
function Wa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lf(e) {
  var t = An(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = dt, o = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var a = i = null, l = null, u = s;
    do {
      var c = u.lane;
      if ((is & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, qe.lanes |= c, as |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, Qn(r, t.memoizedState) || (Yt = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, qe.lanes |= s, as |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function uf(e) {
  var t = An(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    Qn(s, t.memoizedState) || (Yt = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Z1() {
}
function G1(e, t) {
  var n = qe, r = An(), o = t(), s = !Qn(r.memoizedState, o);
  if (s && (r.memoizedState = o, Yt = !0), r = r.queue, hm(Y1.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ht !== null && ht.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ha(9, X1.bind(null, n, r, o, t), void 0, null), yt === null) throw Error(z(349));
    is & 30 || q1(n, t, o);
  }
  return o;
}
function q1(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function X1(e, t, n, r) {
  t.value = n, t.getSnapshot = r, J1(t) && eb(e);
}
function Y1(e, t, n) {
  return n(function() {
    J1(t) && eb(e);
  });
}
function J1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Qn(e, n);
  } catch {
    return !0;
  }
}
function eb(e) {
  var t = zr(e, 1);
  t !== null && Wn(t, e, 1, -1);
}
function fg(e) {
  var t = rr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Wa, lastRenderedState: e }, t.queue = e, e = e.dispatch = __.bind(null, qe, e), [t.memoizedState, e];
}
function Ha(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = qe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, qe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tb() {
  return An().memoizedState;
}
function Su(e, t, n, r) {
  var o = rr();
  qe.flags |= e, o.memoizedState = Ha(1 | t, n, void 0, r === void 0 ? null : r);
}
function zc(e, t, n, r) {
  var o = An();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (dt !== null) {
    var i = dt.memoizedState;
    if (s = i.destroy, r !== null && dm(r, i.deps)) {
      o.memoizedState = Ha(t, n, s, r);
      return;
    }
  }
  qe.flags |= e, o.memoizedState = Ha(1 | t, n, s, r);
}
function pg(e, t) {
  return Su(8390656, 8, e, t);
}
function hm(e, t) {
  return zc(2048, 8, e, t);
}
function nb(e, t) {
  return zc(4, 2, e, t);
}
function rb(e, t) {
  return zc(4, 4, e, t);
}
function ob(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function sb(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zc(4, 4, ob.bind(null, t, e), n);
}
function mm() {
}
function ib(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ab(e, t) {
  var n = An();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && dm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function lb(e, t, n) {
  return is & 21 ? (Qn(n, t) || (n = p1(), qe.lanes |= n, as |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Yt = !0), e.memoizedState = n);
}
function w_(e, t) {
  var n = Me;
  Me = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = af.transition;
  af.transition = {};
  try {
    e(!1), t();
  } finally {
    Me = n, af.transition = r;
  }
}
function ub() {
  return An().memoizedState;
}
function C_(e, t, n) {
  var r = xo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cb(e)) db(t, n);
  else if (n = H1(e, t, n, r), n !== null) {
    var o = Wt();
    Wn(n, e, r, o), fb(n, t, r);
  }
}
function __(e, t, n) {
  var r = xo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cb(e)) db(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, Qn(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, im(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = H1(e, t, o, r), n !== null && (o = Wt(), Wn(n, e, r, o), fb(n, t, r));
  }
}
function cb(e) {
  var t = e.alternate;
  return e === qe || t !== null && t === qe;
}
function db(e, t) {
  Ca = tc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function fb(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Kh(e, n);
  }
}
var nc = { readContext: On, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, k_ = { readContext: On, useCallback: function(e, t) {
  return rr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: On, useEffect: pg, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Su(
    4194308,
    4,
    ob.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Su(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Su(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = rr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = rr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = C_.bind(null, qe, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = rr();
  return e = { current: e }, t.memoizedState = e;
}, useState: fg, useDebugValue: mm, useDeferredValue: function(e) {
  return rr().memoizedState = e;
}, useTransition: function() {
  var e = fg(!1), t = e[0];
  return e = w_.bind(null, e[1]), rr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = qe, o = rr();
  if (Ke) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), yt === null) throw Error(z(349));
    is & 30 || q1(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, pg(Y1.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Ha(9, X1.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = rr(), t = yt.identifierPrefix;
  if (Ke) {
    var n = Ar, r = Or;
    n = (r & ~(1 << 32 - Vn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Va++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = S_++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, E_ = {
  readContext: On,
  useCallback: ib,
  useContext: On,
  useEffect: hm,
  useImperativeHandle: sb,
  useInsertionEffect: nb,
  useLayoutEffect: rb,
  useMemo: ab,
  useReducer: lf,
  useRef: tb,
  useState: function() {
    return lf(Wa);
  },
  useDebugValue: mm,
  useDeferredValue: function(e) {
    var t = An();
    return lb(t, dt.memoizedState, e);
  },
  useTransition: function() {
    var e = lf(Wa)[0], t = An().memoizedState;
    return [e, t];
  },
  useMutableSource: Z1,
  useSyncExternalStore: G1,
  useId: ub,
  unstable_isNewReconciler: !1
}, T_ = { readContext: On, useCallback: ib, useContext: On, useEffect: hm, useImperativeHandle: sb, useInsertionEffect: nb, useLayoutEffect: rb, useMemo: ab, useReducer: uf, useRef: tb, useState: function() {
  return uf(Wa);
}, useDebugValue: mm, useDeferredValue: function(e) {
  var t = An();
  return dt === null ? t.memoizedState = e : lb(t, dt.memoizedState, e);
}, useTransition: function() {
  var e = uf(Wa)[0], t = An().memoizedState;
  return [e, t];
}, useMutableSource: Z1, useSyncExternalStore: G1, useId: ub, unstable_isNewReconciler: !1 };
function Ln(e, t) {
  if (e && e.defaultProps) {
    t = Xe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fp(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Xe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Dc = { isMounted: function(e) {
  return (e = e._reactInternals) ? xs(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Wt(), o = xo(e), s = Nr(r, o);
  s.payload = t, n != null && (s.callback = n), t = vo(e, s, o), t !== null && (Wn(t, e, o, r), bu(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Wt(), o = xo(e), s = Nr(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = vo(e, s, o), t !== null && (Wn(t, e, o, r), bu(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Wt(), r = xo(e), o = Nr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = vo(e, o, r), t !== null && (Wn(t, e, r, n), bu(t, e, r));
} };
function hg(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Fa(n, r) || !Fa(o, s) : !0;
}
function pb(e, t, n) {
  var r = !1, o = Co, s = t.contextType;
  return typeof s == "object" && s !== null ? s = On(s) : (o = en(t) ? os : Lt.current, r = t.contextTypes, s = (r = r != null) ? bi(e, o) : Co), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Dc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function mg(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Dc.enqueueReplaceState(t, t.state, null);
}
function pp(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, am(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = On(s) : (s = en(t) ? os : Lt.current, o.context = bi(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (fp(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Dc.enqueueReplaceState(o, o.state, null), Ju(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ci(e, t) {
  try {
    var n = "", r = t;
    do
      n += tC(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function cf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var R_ = typeof WeakMap == "function" ? WeakMap : Map;
function hb(e, t, n) {
  n = Nr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    oc || (oc = !0, _p = r), hp(e, t);
  }, n;
}
function mb(e, t, n) {
  n = Nr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      hp(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    hp(e, t), typeof r != "function" && (bo === null ? bo = /* @__PURE__ */ new Set([this]) : bo.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function yg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new R_();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = U_.bind(null, e, t, n), t.then(e, e));
}
function gg(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vg(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nr(-1, 1), t.tag = 2, vo(n, t, 1))), n.lanes |= 1), e);
}
var P_ = Hr.ReactCurrentOwner, Yt = !1;
function Ut(e, t, n, r) {
  t.child = e === null ? W1(t, null, n, r) : Si(t, e.child, n, r);
}
function bg(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Xs(t, o), r = fm(e, t, n, r, s, o), n = pm(), e !== null && !Yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dr(e, t, o)) : (Ke && n && em(t), t.flags |= 1, Ut(e, t, r, o), t.child);
}
function xg(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Cm(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, yb(e, t, s, r, o)) : (e = ku(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Fa, n(i, r) && e.ref === t.ref) return Dr(e, t, o);
  }
  return t.flags |= 1, e = So(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yb(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Fa(s, r) && e.ref === t.ref) if (Yt = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (Yt = !0);
    else return t.lanes = e.lanes, Dr(e, t, o);
  }
  return mp(e, t, n, r, o);
}
function gb(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, je(Hs, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, je(Hs, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, je(Hs, ln), ln |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, je(Hs, ln), ln |= r;
  return Ut(e, t, o, n), t.child;
}
function vb(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function mp(e, t, n, r, o) {
  var s = en(n) ? os : Lt.current;
  return s = bi(t, s), Xs(t, o), n = fm(e, t, n, r, s, o), r = pm(), e !== null && !Yt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Dr(e, t, o)) : (Ke && r && em(t), t.flags |= 1, Ut(e, t, n, o), t.child);
}
function Sg(e, t, n, r, o) {
  if (en(n)) {
    var s = !0;
    Zu(t);
  } else s = !1;
  if (Xs(t, o), t.stateNode === null) wu(e, t), pb(t, n, r), pp(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = On(u) : (u = en(n) ? os : Lt.current, u = bi(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && mg(t, i, r, u), Xr = !1;
    var f = t.memoizedState;
    i.state = f, Ju(t, r, i, o), l = t.memoizedState, a !== r || f !== l || Jt.current || Xr ? (typeof c == "function" && (fp(t, n, c, r), l = t.memoizedState), (a = Xr || hg(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, K1(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ln(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = On(l) : (l = en(n) ? os : Lt.current, l = bi(t, l));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && mg(t, i, r, l), Xr = !1, f = t.memoizedState, i.state = f, Ju(t, r, i, o);
    var g = t.memoizedState;
    a !== d || f !== g || Jt.current || Xr ? (typeof y == "function" && (fp(t, n, y, r), g = t.memoizedState), (u = Xr || hg(t, n, u, r, f, g, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return yp(e, t, n, r, s, o);
}
function yp(e, t, n, r, o, s) {
  vb(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ig(t, n, !1), Dr(e, t, s);
  r = t.stateNode, P_.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Si(t, e.child, null, s), t.child = Si(t, null, a, s)) : Ut(e, t, a, s), t.memoizedState = r.state, o && ig(t, n, !0), t.child;
}
function bb(e) {
  var t = e.stateNode;
  t.pendingContext ? sg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sg(e, t.context, !1), lm(e, t.containerInfo);
}
function wg(e, t, n, r, o) {
  return xi(), nm(o), t.flags |= 256, Ut(e, t, n, r), t.child;
}
var gp = { dehydrated: null, treeContext: null, retryLane: 0 };
function vp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xb(e, t, n) {
  var r = t.pendingProps, o = Ge.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), je(Ge, o & 1), e === null)
    return cp(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Vc(i, r, 0, null), e = ts(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = vp(n), t.memoizedState = gp, e) : ym(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return M_(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = So(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = So(a, s) : (s = ts(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? vp(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = gp, r;
  }
  return s = e.child, e = s.sibling, r = So(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ym(e, t) {
  return t = Vc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jl(e, t, n, r) {
  return r !== null && nm(r), Si(t, e.child, null, n), e = ym(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function M_(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = cf(Error(z(422))), Jl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Vc({ mode: "visible", children: r.children }, o, 0, null), s = ts(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Si(t, e.child, null, i), t.child.memoizedState = vp(i), t.memoizedState = gp, s);
  if (!(t.mode & 1)) return Jl(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(z(419)), r = cf(s, r, void 0), Jl(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, Yt || a) {
    if (r = yt, r !== null) {
      switch (i & -i) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, zr(e, o), Wn(r, e, o, -1));
    }
    return wm(), r = cf(Error(z(421))), Jl(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = V_.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, cn = go(o.nextSibling), dn = t, Ke = !0, zn = null, e !== null && (_n[kn++] = Or, _n[kn++] = Ar, _n[kn++] = ss, Or = e.id, Ar = e.overflow, ss = t), t = ym(t, r.children), t.flags |= 4096, t);
}
function Cg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dp(e.return, t, n);
}
function df(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function Sb(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Ut(e, t, r.children, n), r = Ge.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Cg(e, n, t);
      else if (e.tag === 19) Cg(e, n, t);
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
  if (je(Ge, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ec(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), df(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ec(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      df(t, !0, n, null, s);
      break;
    case "together":
      df(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function wu(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Dr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), as |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = So(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = So(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function I_(e, t, n) {
  switch (t.tag) {
    case 3:
      bb(t), xi();
      break;
    case 5:
      Q1(t);
      break;
    case 1:
      en(t.type) && Zu(t);
      break;
    case 4:
      lm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      je(Xu, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (je(Ge, Ge.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xb(e, t, n) : (je(Ge, Ge.current & 1), e = Dr(e, t, n), e !== null ? e.sibling : null);
      je(Ge, Ge.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Sb(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), je(Ge, Ge.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gb(e, t, n);
  }
  return Dr(e, t, n);
}
var wb, bp, Cb, _b;
wb = function(e, t) {
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
bp = function() {
};
Cb = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Wo(hr.current);
    var s = null;
    switch (n) {
      case "input":
        o = Bf(e, o), r = Bf(e, r), s = [];
        break;
      case "select":
        o = Xe({}, o, { value: void 0 }), r = Xe({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = Wf(e, o), r = Wf(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ku);
    }
    Kf(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ma.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ma.hasOwnProperty(u) ? (l != null && u === "onScroll" && Be("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_b = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yi(e, t) {
  if (!Ke) switch (e.tailMode) {
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
function Mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function O_(e, t, n) {
  var r = t.pendingProps;
  switch (tm(t), t.tag) {
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
      return Mt(t), null;
    case 1:
      return en(t.type) && Qu(), Mt(t), null;
    case 3:
      return r = t.stateNode, wi(), Ue(Jt), Ue(Lt), cm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, zn !== null && (Tp(zn), zn = null))), bp(e, t), Mt(t), null;
    case 5:
      um(t);
      var o = Wo(Ua.current);
      if (n = t.type, e !== null && t.stateNode != null) Cb(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Mt(t), null;
        }
        if (e = Wo(hr.current), Xl(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[cr] = t, r[Da] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Be("cancel", r), Be("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Be("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < da.length; o++) Be(da[o], r);
              break;
            case "source":
              Be("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Be(
                "error",
                r
              ), Be("load", r);
              break;
            case "details":
              Be("toggle", r);
              break;
            case "input":
              Oy(r, s), Be("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, Be("invalid", r);
              break;
            case "textarea":
              $y(r, s), Be("invalid", r);
          }
          Kf(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && ql(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && ql(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Ma.hasOwnProperty(i) && a != null && i === "onScroll" && Be("scroll", r);
          }
          switch (n) {
            case "input":
              Ul(r), Ay(r, s, !0);
              break;
            case "textarea":
              Ul(r), Ny(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ku);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yv(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[cr] = t, e[Da] = r, wb(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Qf(n, r), n) {
              case "dialog":
                Be("cancel", e), Be("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < da.length; o++) Be(da[o], e);
                o = r;
                break;
              case "source":
                Be("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Be(
                  "error",
                  e
                ), Be("load", e), o = r;
                break;
              case "details":
                Be("toggle", e), o = r;
                break;
              case "input":
                Oy(e, r), o = Bf(e, r), Be("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Xe({}, r, { value: void 0 }), Be("invalid", e);
                break;
              case "textarea":
                $y(e, r), o = Wf(e, r), Be("invalid", e);
                break;
              default:
                o = r;
            }
            Kf(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? t1(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Jv(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ia(e, l) : typeof l == "number" && Ia(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ma.hasOwnProperty(s) ? l != null && s === "onScroll" && Be("scroll", e) : l != null && Dh(e, s, l, i));
            }
            switch (n) {
              case "input":
                Ul(e), Ay(e, r, !1);
                break;
              case "textarea":
                Ul(e), Ny(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Qs(e, !!r.multiple, s, !1) : r.defaultValue != null && Qs(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ku);
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
      return Mt(t), null;
    case 6:
      if (e && t.stateNode != null) _b(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = Wo(Ua.current), Wo(hr.current), Xl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[cr] = t, (s = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              ql(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ql(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cr] = t, t.stateNode = r;
      }
      return Mt(t), null;
    case 13:
      if (Ue(Ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ke && cn !== null && t.mode & 1 && !(t.flags & 128)) U1(), xi(), t.flags |= 98560, s = !1;
        else if (s = Xl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(z(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(z(317));
            s[cr] = t;
          } else xi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Mt(t), s = !1;
        } else zn !== null && (Tp(zn), zn = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ge.current & 1 ? pt === 0 && (pt = 3) : wm())), t.updateQueue !== null && (t.flags |= 4), Mt(t), null);
    case 4:
      return wi(), bp(e, t), e === null && ja(t.stateNode.containerInfo), Mt(t), null;
    case 10:
      return sm(t.type._context), Mt(t), null;
    case 17:
      return en(t.type) && Qu(), Mt(t), null;
    case 19:
      if (Ue(Ge), s = t.memoizedState, s === null) return Mt(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) Yi(s, !1);
      else {
        if (pt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = ec(e), i !== null) {
            for (t.flags |= 128, Yi(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return je(Ge, Ge.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && st() > _i && (t.flags |= 128, r = !0, Yi(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ec(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yi(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !Ke) return Mt(t), null;
        } else 2 * st() - s.renderingStartTime > _i && n !== 1073741824 && (t.flags |= 128, r = !0, Yi(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = st(), t.sibling = null, n = Ge.current, je(Ge, r ? n & 1 | 2 : n & 1), t) : (Mt(t), null);
    case 22:
    case 23:
      return Sm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function A_(e, t) {
  switch (tm(t), t.tag) {
    case 1:
      return en(t.type) && Qu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return wi(), Ue(Jt), Ue(Lt), cm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return um(t), null;
    case 13:
      if (Ue(Ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        xi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Ue(Ge), null;
    case 4:
      return wi(), null;
    case 10:
      return sm(t.type._context), null;
    case 22:
    case 23:
      return Sm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var eu = !1, $t = !1, $_ = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
function Ws(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    nt(e, t, r);
  }
  else n.current = null;
}
function xp(e, t, n) {
  try {
    n();
  } catch (r) {
    nt(e, t, r);
  }
}
var _g = !1;
function N_(e, t) {
  if (rp = Vu, e = P1(), Jh(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
        t: for (; ; ) {
          for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (a = i + o), d !== s || r !== 0 && d.nodeType !== 3 || (l = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (y = d.firstChild) !== null; )
            f = d, d = y;
          for (; ; ) {
            if (d === e) break t;
            if (f === n && ++u === o && (a = i), f === s && ++c === r && (l = i), (y = d.nextSibling) !== null) break;
            d = f, f = d.parentNode;
          }
          d = y;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (op = { focusedElem: e, selectionRange: n }, Vu = !1, Z = t; Z !== null; ) if (t = Z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Z = e;
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
            var v = g.memoizedProps, S = g.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ln(t.type, v), S);
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
          throw Error(z(163));
      }
    } catch (x) {
      nt(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Z = e;
      break;
    }
    Z = t.return;
  }
  return g = _g, _g = !1, g;
}
function _a(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && xp(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bc(e, t) {
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
function Sp(e) {
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
function kb(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, kb(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cr], delete t[Da], delete t[ap], delete t[g_], delete t[v_])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Eb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kg(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Eb(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ku));
  else if (r !== 4 && (e = e.child, e !== null)) for (wp(e, t, n), e = e.sibling; e !== null; ) wp(e, t, n), e = e.sibling;
}
function Cp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Cp(e, t, n), e = e.sibling; e !== null; ) Cp(e, t, n), e = e.sibling;
}
var wt = null, jn = !1;
function Qr(e, t, n) {
  for (n = n.child; n !== null; ) Tb(e, t, n), n = n.sibling;
}
function Tb(e, t, n) {
  if (pr && typeof pr.onCommitFiberUnmount == "function") try {
    pr.onCommitFiberUnmount(Ac, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      $t || Ws(n, t);
    case 6:
      var r = wt, o = jn;
      wt = null, Qr(e, t, n), wt = r, jn = o, wt !== null && (jn ? (e = wt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null && (jn ? (e = wt, n = n.stateNode, e.nodeType === 8 ? rf(e.parentNode, n) : e.nodeType === 1 && rf(e, n), Na(e)) : rf(wt, n.stateNode));
      break;
    case 4:
      r = wt, o = jn, wt = n.stateNode.containerInfo, jn = !0, Qr(e, t, n), wt = r, jn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!$t && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && xp(n, t, i), o = o.next;
        } while (o !== r);
      }
      Qr(e, t, n);
      break;
    case 1:
      if (!$t && (Ws(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        nt(n, t, a);
      }
      Qr(e, t, n);
      break;
    case 21:
      Qr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ($t = (r = $t) || n.memoizedState !== null, Qr(e, t, n), $t = r) : Qr(e, t, n);
      break;
    default:
      Qr(e, t, n);
  }
}
function Eg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $_()), t.forEach(function(r) {
      var o = W_.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Nn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            wt = a.stateNode, jn = !1;
            break e;
          case 3:
            wt = a.stateNode.containerInfo, jn = !0;
            break e;
          case 4:
            wt = a.stateNode.containerInfo, jn = !0;
            break e;
        }
        a = a.return;
      }
      if (wt === null) throw Error(z(160));
      Tb(s, i, o), wt = null, jn = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      nt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Rb(t, e), t = t.sibling;
}
function Rb(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Nn(t, e), Jn(e), r & 4) {
        try {
          _a(3, e, e.return), Bc(3, e);
        } catch (v) {
          nt(e, e.return, v);
        }
        try {
          _a(5, e, e.return);
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      break;
    case 1:
      Nn(t, e), Jn(e), r & 512 && n !== null && Ws(n, n.return);
      break;
    case 5:
      if (Nn(t, e), Jn(e), r & 512 && n !== null && Ws(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ia(o, "");
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && qv(o, s), Qf(a, i);
          var u = Qf(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? t1(o, d) : c === "dangerouslySetInnerHTML" ? Jv(o, d) : c === "children" ? Ia(o, d) : Dh(o, c, d, u);
          }
          switch (a) {
            case "input":
              Uf(o, s);
              break;
            case "textarea":
              Xv(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var y = s.value;
              y != null ? Qs(o, !!s.multiple, y, !1) : f !== !!s.multiple && (s.defaultValue != null ? Qs(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Qs(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[Da] = s;
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Nn(t, e), Jn(e), r & 4) {
        if (e.stateNode === null) throw Error(z(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (v) {
          nt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Nn(t, e), Jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Na(t.containerInfo);
      } catch (v) {
        nt(e, e.return, v);
      }
      break;
    case 4:
      Nn(t, e), Jn(e);
      break;
    case 13:
      Nn(t, e), Jn(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (bm = st())), r & 4 && Eg(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? ($t = (u = $t) || c, Nn(t, e), $t = u) : Nn(t, e), Jn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (Z = e, c = e.child; c !== null; ) {
          for (d = Z = c; Z !== null; ) {
            switch (f = Z, y = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                _a(4, f, f.return);
                break;
              case 1:
                Ws(f, f.return);
                var g = f.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (v) {
                    nt(r, n, v);
                  }
                }
                break;
              case 5:
                Ws(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Rg(d);
                  continue;
                }
            }
            y !== null ? (y.return = f, Z = y) : Rg(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = e1("display", i));
              } catch (v) {
                nt(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (v) {
              nt(e, e.return, v);
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
      Nn(t, e), Jn(e), r & 4 && Eg(e);
      break;
    case 21:
      break;
    default:
      Nn(
        t,
        e
      ), Jn(e);
  }
}
function Jn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Eb(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ia(o, ""), r.flags &= -33);
          var s = kg(e);
          Cp(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = kg(e);
          wp(e, a, i);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      nt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function L_(e, t, n) {
  Z = e, Pb(e);
}
function Pb(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || eu;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || $t;
        a = eu;
        var u = $t;
        if (eu = i, ($t = l) && !u) for (Z = o; Z !== null; ) i = Z, l = i.child, i.tag === 22 && i.memoizedState !== null ? Pg(o) : l !== null ? (l.return = i, Z = l) : Pg(o);
        for (; s !== null; ) Z = s, Pb(s), s = s.sibling;
        Z = o, eu = a, $t = u;
      }
      Tg(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, Z = s) : Tg(e);
  }
}
function Tg(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            $t || Bc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !$t) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Ln(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && dg(t, s, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              dg(t, i, n);
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
                  d !== null && Na(d);
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
            throw Error(z(163));
        }
        $t || t.flags & 512 && Sp(t);
      } catch (f) {
        nt(t, t.return, f);
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
function Rg(e) {
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
function Pg(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bc(4, t);
          } catch (l) {
            nt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              nt(t, o, l);
            }
          }
          var s = t.return;
          try {
            Sp(t);
          } catch (l) {
            nt(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Sp(t);
          } catch (l) {
            nt(t, i, l);
          }
      }
    } catch (l) {
      nt(t, t.return, l);
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
var F_ = Math.ceil, rc = Hr.ReactCurrentDispatcher, gm = Hr.ReactCurrentOwner, Mn = Hr.ReactCurrentBatchConfig, Ce = 0, yt = null, ut = null, _t = 0, ln = 0, Hs = Oo(0), pt = 0, Ka = null, as = 0, Uc = 0, vm = 0, ka = null, qt = null, bm = 0, _i = 1 / 0, Rr = null, oc = !1, _p = null, bo = null, tu = !1, po = null, sc = 0, Ea = 0, kp = null, Cu = -1, _u = 0;
function Wt() {
  return Ce & 6 ? st() : Cu !== -1 ? Cu : Cu = st();
}
function xo(e) {
  return e.mode & 1 ? Ce & 2 && _t !== 0 ? _t & -_t : x_.transition !== null ? (_u === 0 && (_u = p1()), _u) : (e = Me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : x1(e.type)), e) : 1;
}
function Wn(e, t, n, r) {
  if (50 < Ea) throw Ea = 0, kp = null, Error(z(185));
  xl(e, n, r), (!(Ce & 2) || e !== yt) && (e === yt && (!(Ce & 2) && (Uc |= n), pt === 4 && eo(e, _t)), tn(e, r), n === 1 && Ce === 0 && !(t.mode & 1) && (_i = st() + 500, jc && Ao()));
}
function tn(e, t) {
  var n = e.callbackNode;
  xC(e, t);
  var r = Uu(e, e === yt ? _t : 0);
  if (r === 0) n !== null && jy(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && jy(n), t === 1) e.tag === 0 ? b_(Mg.bind(null, e)) : z1(Mg.bind(null, e)), m_(function() {
      !(Ce & 6) && Ao();
    }), n = null;
    else {
      switch (h1(r)) {
        case 1:
          n = Hh;
          break;
        case 4:
          n = d1;
          break;
        case 16:
          n = Bu;
          break;
        case 536870912:
          n = f1;
          break;
        default:
          n = Bu;
      }
      n = Fb(n, Mb.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mb(e, t) {
  if (Cu = -1, _u = 0, Ce & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Ys() && e.callbackNode !== n) return null;
  var r = Uu(e, e === yt ? _t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ic(e, r);
  else {
    t = r;
    var o = Ce;
    Ce |= 2;
    var s = Ob();
    (yt !== e || _t !== t) && (Rr = null, _i = st() + 500, es(e, t));
    do
      try {
        D_();
        break;
      } catch (a) {
        Ib(e, a);
      }
    while (!0);
    om(), rc.current = s, Ce = o, ut !== null ? t = 0 : (yt = null, _t = 0, t = pt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Yf(e), o !== 0 && (r = o, t = Ep(e, o))), t === 1) throw n = Ka, es(e, 0), eo(e, r), tn(e, st()), n;
    if (t === 6) eo(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !j_(o) && (t = ic(e, r), t === 2 && (s = Yf(e), s !== 0 && (r = s, t = Ep(e, s))), t === 1)) throw n = Ka, es(e, 0), eo(e, r), tn(e, st()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          jo(e, qt, Rr);
          break;
        case 3:
          if (eo(e, r), (r & 130023424) === r && (t = bm + 500 - st(), 10 < t)) {
            if (Uu(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Wt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ip(jo.bind(null, e, qt, Rr), t);
            break;
          }
          jo(e, qt, Rr);
          break;
        case 4:
          if (eo(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Vn(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = st() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * F_(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ip(jo.bind(null, e, qt, Rr), r);
            break;
          }
          jo(e, qt, Rr);
          break;
        case 5:
          jo(e, qt, Rr);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return tn(e, st()), e.callbackNode === n ? Mb.bind(null, e) : null;
}
function Ep(e, t) {
  var n = ka;
  return e.current.memoizedState.isDehydrated && (es(e, t).flags |= 256), e = ic(e, t), e !== 2 && (t = qt, qt = n, t !== null && Tp(t)), e;
}
function Tp(e) {
  qt === null ? qt = e : qt.push.apply(qt, e);
}
function j_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!Qn(s(), o)) return !1;
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
function eo(e, t) {
  for (t &= ~vm, t &= ~Uc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Vn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Mg(e) {
  if (Ce & 6) throw Error(z(327));
  Ys();
  var t = Uu(e, 0);
  if (!(t & 1)) return tn(e, st()), null;
  var n = ic(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yf(e);
    r !== 0 && (t = r, n = Ep(e, r));
  }
  if (n === 1) throw n = Ka, es(e, 0), eo(e, t), tn(e, st()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, jo(e, qt, Rr), tn(e, st()), null;
}
function xm(e, t) {
  var n = Ce;
  Ce |= 1;
  try {
    return e(t);
  } finally {
    Ce = n, Ce === 0 && (_i = st() + 500, jc && Ao());
  }
}
function ls(e) {
  po !== null && po.tag === 0 && !(Ce & 6) && Ys();
  var t = Ce;
  Ce |= 1;
  var n = Mn.transition, r = Me;
  try {
    if (Mn.transition = null, Me = 1, e) return e();
  } finally {
    Me = r, Mn.transition = n, Ce = t, !(Ce & 6) && Ao();
  }
}
function Sm() {
  ln = Hs.current, Ue(Hs);
}
function es(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, h_(n)), ut !== null) for (n = ut.return; n !== null; ) {
    var r = n;
    switch (tm(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Qu();
        break;
      case 3:
        wi(), Ue(Jt), Ue(Lt), cm();
        break;
      case 5:
        um(r);
        break;
      case 4:
        wi();
        break;
      case 13:
        Ue(Ge);
        break;
      case 19:
        Ue(Ge);
        break;
      case 10:
        sm(r.type._context);
        break;
      case 22:
      case 23:
        Sm();
    }
    n = n.return;
  }
  if (yt = e, ut = e = So(e.current, null), _t = ln = t, pt = 0, Ka = null, vm = Uc = as = 0, qt = ka = null, Vo !== null) {
    for (t = 0; t < Vo.length; t++) if (n = Vo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Vo = null;
  }
  return e;
}
function Ib(e, t) {
  do {
    var n = ut;
    try {
      if (om(), xu.current = nc, tc) {
        for (var r = qe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        tc = !1;
      }
      if (is = 0, ht = dt = qe = null, Ca = !1, Va = 0, gm.current = null, n === null || n.return === null) {
        pt = 1, Ka = t, ut = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = _t, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = gg(i);
          if (y !== null) {
            y.flags &= -257, vg(y, i, a, s, t), y.mode & 1 && yg(s, u, t), t = y, l = u;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              yg(s, u, t), wm();
              break e;
            }
            l = Error(z(426));
          }
        } else if (Ke && a.mode & 1) {
          var S = gg(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), vg(S, i, a, s, t), nm(Ci(l, a));
            break e;
          }
        }
        s = l = Ci(l, a), pt !== 4 && (pt = 2), ka === null ? ka = [s] : ka.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = hb(s, l, t);
              cg(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, p = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (bo === null || !bo.has(p)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = mb(s, a, t);
                cg(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $b(n);
    } catch (C) {
      t = C, ut === n && n !== null && (ut = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ob() {
  var e = rc.current;
  return rc.current = nc, e === null ? nc : e;
}
function wm() {
  (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || !(as & 268435455) && !(Uc & 268435455) || eo(yt, _t);
}
function ic(e, t) {
  var n = Ce;
  Ce |= 2;
  var r = Ob();
  (yt !== e || _t !== t) && (Rr = null, es(e, t));
  do
    try {
      z_();
      break;
    } catch (o) {
      Ib(e, o);
    }
  while (!0);
  if (om(), Ce = n, rc.current = r, ut !== null) throw Error(z(261));
  return yt = null, _t = 0, pt;
}
function z_() {
  for (; ut !== null; ) Ab(ut);
}
function D_() {
  for (; ut !== null && !dC(); ) Ab(ut);
}
function Ab(e) {
  var t = Lb(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? $b(e) : ut = t, gm.current = null;
}
function $b(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = A_(n, t), n !== null) {
        n.flags &= 32767, ut = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        pt = 6, ut = null;
        return;
      }
    } else if (n = O_(n, t, ln), n !== null) {
      ut = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ut = t;
      return;
    }
    ut = t = e;
  } while (t !== null);
  pt === 0 && (pt = 5);
}
function jo(e, t, n) {
  var r = Me, o = Mn.transition;
  try {
    Mn.transition = null, Me = 1, B_(e, t, n, r);
  } finally {
    Mn.transition = o, Me = r;
  }
  return null;
}
function B_(e, t, n, r) {
  do
    Ys();
  while (po !== null);
  if (Ce & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (SC(e, s), e === yt && (ut = yt = null, _t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || tu || (tu = !0, Fb(Bu, function() {
    return Ys(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Mn.transition, Mn.transition = null;
    var i = Me;
    Me = 1;
    var a = Ce;
    Ce |= 4, gm.current = null, N_(e, n), Rb(n, e), a_(op), Vu = !!rp, op = rp = null, e.current = n, L_(n), fC(), Ce = a, Me = i, Mn.transition = s;
  } else e.current = n;
  if (tu && (tu = !1, po = e, sc = o), s = e.pendingLanes, s === 0 && (bo = null), mC(n.stateNode), tn(e, st()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (oc) throw oc = !1, e = _p, _p = null, e;
  return sc & 1 && e.tag !== 0 && Ys(), s = e.pendingLanes, s & 1 ? e === kp ? Ea++ : (Ea = 0, kp = e) : Ea = 0, Ao(), null;
}
function Ys() {
  if (po !== null) {
    var e = h1(sc), t = Mn.transition, n = Me;
    try {
      if (Mn.transition = null, Me = 16 > e ? 16 : e, po === null) var r = !1;
      else {
        if (e = po, po = null, sc = 0, Ce & 6) throw Error(z(331));
        var o = Ce;
        for (Ce |= 4, Z = e.current; Z !== null; ) {
          var s = Z, i = s.child;
          if (Z.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _a(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, Z = d;
                  else for (; Z !== null; ) {
                    c = Z;
                    var f = c.sibling, y = c.return;
                    if (kb(c), c === u) {
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
              var g = s.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var S = v.sibling;
                    v.sibling = null, v = S;
                  } while (v !== null);
                }
              }
              Z = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, Z = i;
          else e: for (; Z !== null; ) {
            if (s = Z, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                _a(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, Z = m;
              break e;
            }
            Z = s.return;
          }
        }
        var h = e.current;
        for (Z = h; Z !== null; ) {
          i = Z;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) p.return = i, Z = p;
          else e: for (i = h; Z !== null; ) {
            if (a = Z, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Bc(9, a);
              }
            } catch (C) {
              nt(a, a.return, C);
            }
            if (a === i) {
              Z = null;
              break e;
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, Z = x;
              break e;
            }
            Z = a.return;
          }
        }
        if (Ce = o, Ao(), pr && typeof pr.onPostCommitFiberRoot == "function") try {
          pr.onPostCommitFiberRoot(Ac, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Me = n, Mn.transition = t;
    }
  }
  return !1;
}
function Ig(e, t, n) {
  t = Ci(n, t), t = hb(e, t, 1), e = vo(e, t, 1), t = Wt(), e !== null && (xl(e, 1, t), tn(e, t));
}
function nt(e, t, n) {
  if (e.tag === 3) Ig(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ig(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (bo === null || !bo.has(r))) {
        e = Ci(n, e), e = mb(t, e, 1), t = vo(t, e, 1), e = Wt(), t !== null && (xl(t, 1, e), tn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function U_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Wt(), e.pingedLanes |= e.suspendedLanes & n, yt === e && (_t & n) === n && (pt === 4 || pt === 3 && (_t & 130023424) === _t && 500 > st() - bm ? es(e, 0) : vm |= n), tn(e, t);
}
function Nb(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hl, Hl <<= 1, !(Hl & 130023424) && (Hl = 4194304)) : t = 1);
  var n = Wt();
  e = zr(e, t), e !== null && (xl(e, t, n), tn(e, n));
}
function V_(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Nb(e, n);
}
function W_(e, t) {
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
      throw Error(z(314));
  }
  r !== null && r.delete(t), Nb(e, n);
}
var Lb;
Lb = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Jt.current) Yt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Yt = !1, I_(e, t, n);
    Yt = !!(e.flags & 131072);
  }
  else Yt = !1, Ke && t.flags & 1048576 && D1(t, qu, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wu(e, t), e = t.pendingProps;
      var o = bi(t, Lt.current);
      Xs(t, n), o = fm(null, t, r, e, o, n);
      var s = pm();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, en(r) ? (s = !0, Zu(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, am(t), o.updater = Dc, t.stateNode = o, o._reactInternals = t, pp(t, r, e, n), t = yp(null, t, r, !0, s, n)) : (t.tag = 0, Ke && s && em(t), Ut(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = K_(r), e = Ln(r, e), o) {
          case 0:
            t = mp(null, t, r, e, n);
            break e;
          case 1:
            t = Sg(null, t, r, e, n);
            break e;
          case 11:
            t = bg(null, t, r, e, n);
            break e;
          case 14:
            t = xg(null, t, r, Ln(r.type, e), n);
            break e;
        }
        throw Error(z(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ln(r, o), mp(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ln(r, o), Sg(e, t, r, o, n);
    case 3:
      e: {
        if (bb(t), e === null) throw Error(z(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, K1(e, t), Ju(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Ci(Error(z(423)), t), t = wg(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ci(Error(z(424)), t), t = wg(e, t, r, n, o);
          break e;
        } else for (cn = go(t.stateNode.containerInfo.firstChild), dn = t, Ke = !0, zn = null, n = W1(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (xi(), r === o) {
            t = Dr(e, t, n);
            break e;
          }
          Ut(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Q1(t), e === null && cp(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, sp(r, o) ? i = null : s !== null && sp(r, s) && (t.flags |= 32), vb(e, t), Ut(e, t, i, n), t.child;
    case 6:
      return e === null && cp(t), null;
    case 13:
      return xb(e, t, n);
    case 4:
      return lm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Si(t, null, r, n) : Ut(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ln(r, o), bg(e, t, r, o, n);
    case 7:
      return Ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, je(Xu, r._currentValue), r._currentValue = i, s !== null) if (Qn(s.value, i)) {
          if (s.children === o.children && !Jt.current) {
            t = Dr(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            i = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (s.tag === 1) {
                  l = Nr(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), dp(
                  s.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (i = s.return, i === null) throw Error(z(341));
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), dp(i, n, t), i = s.sibling;
          } else i = s.child;
          if (i !== null) i.return = s;
          else for (i = s; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (s = i.sibling, s !== null) {
              s.return = i.return, i = s;
              break;
            }
            i = i.return;
          }
          s = i;
        }
        Ut(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Xs(t, n), o = On(o), r = r(o), t.flags |= 1, Ut(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Ln(r, t.pendingProps), o = Ln(r.type, o), xg(e, t, r, o, n);
    case 15:
      return yb(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ln(r, o), wu(e, t), t.tag = 1, en(r) ? (e = !0, Zu(t)) : e = !1, Xs(t, n), pb(t, r, o), pp(t, r, o, n), yp(null, t, r, !0, e, n);
    case 19:
      return Sb(e, t, n);
    case 22:
      return gb(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function Fb(e, t) {
  return c1(e, t);
}
function H_(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pn(e, t, n, r) {
  return new H_(e, t, n, r);
}
function Cm(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function K_(e) {
  if (typeof e == "function") return Cm(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Uh) return 11;
    if (e === Vh) return 14;
  }
  return 2;
}
function So(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ku(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") Cm(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Ns:
      return ts(n.children, o, s, t);
    case Bh:
      i = 8, o |= 8;
      break;
    case Ff:
      return e = Pn(12, n, t, o | 2), e.elementType = Ff, e.lanes = s, e;
    case jf:
      return e = Pn(13, n, t, o), e.elementType = jf, e.lanes = s, e;
    case zf:
      return e = Pn(19, n, t, o), e.elementType = zf, e.lanes = s, e;
    case Qv:
      return Vc(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Hv:
          i = 10;
          break e;
        case Kv:
          i = 9;
          break e;
        case Uh:
          i = 11;
          break e;
        case Vh:
          i = 14;
          break e;
        case qr:
          i = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = Pn(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function ts(e, t, n, r) {
  return e = Pn(7, e, r, t), e.lanes = n, e;
}
function Vc(e, t, n, r) {
  return e = Pn(22, e, r, t), e.elementType = Qv, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ff(e, t, n) {
  return e = Pn(6, e, null, t), e.lanes = n, e;
}
function pf(e, t, n) {
  return t = Pn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Q_(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kd(0), this.expirationTimes = Kd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kd(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _m(e, t, n, r, o, s, i, a, l) {
  return e = new Q_(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Pn(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, am(s), e;
}
function Z_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $s, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function jb(e) {
  if (!e) return Co;
  e = e._reactInternals;
  e: {
    if (xs(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (en(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (en(n)) return j1(e, n, t);
  }
  return t;
}
function zb(e, t, n, r, o, s, i, a, l) {
  return e = _m(n, r, !0, e, o, s, i, a, l), e.context = jb(null), n = e.current, r = Wt(), o = xo(n), s = Nr(r, o), s.callback = t ?? null, vo(n, s, o), e.current.lanes = o, xl(e, o, r), tn(e, r), e;
}
function Wc(e, t, n, r) {
  var o = t.current, s = Wt(), i = xo(o);
  return n = jb(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nr(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = vo(o, t, i), e !== null && (Wn(e, o, i, s), bu(e, o, i)), i;
}
function ac(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Og(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function km(e, t) {
  Og(e, t), (e = e.alternate) && Og(e, t);
}
var Db = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Em(e) {
  this._internalRoot = e;
}
Hc.prototype.render = Em.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  Wc(e, t, null, null);
};
Hc.prototype.unmount = Em.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ls(function() {
      Wc(null, e, null, null);
    }), t[jr] = null;
  }
};
function Hc(e) {
  this._internalRoot = e;
}
Hc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = g1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jr.length && t !== 0 && t < Jr[n].priority; n++) ;
    Jr.splice(n, 0, e), n === 0 && b1(e);
  }
};
function Tm(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Kc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ag() {
}
function G_(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = ac(i);
        s.call(u);
      };
    }
    var i = zb(t, r, e, 0, null, !1, !1, "", Ag);
    return e._reactRootContainer = i, e[jr] = i.current, ja(e.nodeType === 8 ? e.parentNode : e), ls(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = ac(l);
      a.call(u);
    };
  }
  var l = _m(e, 0, !1, null, null, !1, !1, "", Ag);
  return e._reactRootContainer = l, e[jr] = l.current, ja(e.nodeType === 8 ? e.parentNode : e), ls(function() {
    Wc(t, l, n, r);
  }), l;
}
function Qc(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = ac(i);
        a.call(l);
      };
    }
    Wc(t, i, e, o);
  } else i = G_(n, t, e, o, r);
  return ac(i);
}
m1 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ca(t.pendingLanes);
        n !== 0 && (Kh(t, n | 1), tn(t, st()), !(Ce & 6) && (_i = st() + 500, Ao()));
      }
      break;
    case 13:
      ls(function() {
        var r = zr(e, 1);
        if (r !== null) {
          var o = Wt();
          Wn(r, e, 1, o);
        }
      }), km(e, 1);
  }
};
Qh = function(e) {
  if (e.tag === 13) {
    var t = zr(e, 134217728);
    if (t !== null) {
      var n = Wt();
      Wn(t, e, 134217728, n);
    }
    km(e, 134217728);
  }
};
y1 = function(e) {
  if (e.tag === 13) {
    var t = xo(e), n = zr(e, t);
    if (n !== null) {
      var r = Wt();
      Wn(n, e, t, r);
    }
    km(e, t);
  }
};
g1 = function() {
  return Me;
};
v1 = function(e, t) {
  var n = Me;
  try {
    return Me = e, t();
  } finally {
    Me = n;
  }
};
Gf = function(e, t, n) {
  switch (t) {
    case "input":
      if (Uf(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fc(r);
            if (!o) throw Error(z(90));
            Gv(r), Uf(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xv(e, n);
      break;
    case "select":
      t = n.value, t != null && Qs(e, !!n.multiple, t, !1);
  }
};
o1 = xm;
s1 = ls;
var q_ = { usingClientEntryPoint: !1, Events: [wl, zs, Fc, n1, r1, xm] }, Ji = { findFiberByHostInstance: Uo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, X_ = { bundleType: Ji.bundleType, version: Ji.version, rendererPackageName: Ji.rendererPackageName, rendererConfig: Ji.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Hr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = l1(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ji.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!nu.isDisabled && nu.supportsFiber) try {
    Ac = nu.inject(X_), pr = nu;
  } catch {
  }
}
vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q_;
vn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tm(t)) throw Error(z(200));
  return Z_(e, t, null, n);
};
vn.createRoot = function(e, t) {
  if (!Tm(e)) throw Error(z(299));
  var n = !1, r = "", o = Db;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _m(e, 1, !1, null, null, n, !1, r, o), e[jr] = t.current, ja(e.nodeType === 8 ? e.parentNode : e), new Em(t);
};
vn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = l1(t), e = e === null ? null : e.stateNode, e;
};
vn.flushSync = function(e) {
  return ls(e);
};
vn.hydrate = function(e, t, n) {
  if (!Kc(t)) throw Error(z(200));
  return Qc(null, e, t, !0, n);
};
vn.hydrateRoot = function(e, t, n) {
  if (!Tm(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = Db;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = zb(t, null, e, 1, n ?? null, o, !1, s, i), e[jr] = t.current, ja(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Hc(t);
};
vn.render = function(e, t, n) {
  if (!Kc(t)) throw Error(z(200));
  return Qc(null, e, t, !1, n);
};
vn.unmountComponentAtNode = function(e) {
  if (!Kc(e)) throw Error(z(40));
  return e._reactRootContainer ? (ls(function() {
    Qc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[jr] = null;
    });
  }), !0) : !1;
};
vn.unstable_batchedUpdates = xm;
vn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Kc(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return Qc(e, t, n, !1, r);
};
vn.version = "18.3.1-next-f1338f8080-20240426";
function Bb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bb);
    } catch (e) {
      console.error(e);
    }
}
Bb(), Bv.exports = vn;
var Rm = Bv.exports;
const ru = /* @__PURE__ */ Pv(Rm);
var Ub, $g = Rm;
Ub = $g.createRoot, $g.hydrateRoot;
const Qa = {
  black: "#000",
  white: "#fff"
}, _s = {
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
}, ks = {
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
}, Es = {
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
}, Ts = {
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
}, Rs = {
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
}, ea = {
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
}, Y_ = {
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
function Br(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const Hn = "$$material";
function lc() {
  return lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, lc.apply(null, arguments);
}
var J_ = !1;
function ek(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function tk(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var nk = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, s), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !J_ : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(tk(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = ek(o);
      try {
        s.insertRule(r, s.cssRules.length);
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
}(), It = "-ms-", uc = "-moz-", Ee = "-webkit-", Vb = "comm", Pm = "rule", Mm = "decl", rk = "@import", Wb = "@keyframes", ok = "@layer", sk = Math.abs, Zc = String.fromCharCode, ik = Object.assign;
function ak(e, t) {
  return Ct(e, 0) ^ 45 ? (((t << 2 ^ Ct(e, 0)) << 2 ^ Ct(e, 1)) << 2 ^ Ct(e, 2)) << 2 ^ Ct(e, 3) : 0;
}
function Hb(e) {
  return e.trim();
}
function lk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Te(e, t, n) {
  return e.replace(t, n);
}
function Rp(e, t) {
  return e.indexOf(t);
}
function Ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function Za(e, t, n) {
  return e.slice(t, n);
}
function lr(e) {
  return e.length;
}
function Im(e) {
  return e.length;
}
function ou(e, t) {
  return t.push(e), e;
}
function uk(e, t) {
  return e.map(t).join("");
}
var Gc = 1, ki = 1, Kb = 0, rn = 0, lt = 0, ji = "";
function qc(e, t, n, r, o, s, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: Gc, column: ki, length: i, return: "" };
}
function ta(e, t) {
  return ik(qc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ck() {
  return lt;
}
function dk() {
  return lt = rn > 0 ? Ct(ji, --rn) : 0, ki--, lt === 10 && (ki = 1, Gc--), lt;
}
function fn() {
  return lt = rn < Kb ? Ct(ji, rn++) : 0, ki++, lt === 10 && (ki = 1, Gc++), lt;
}
function mr() {
  return Ct(ji, rn);
}
function Eu() {
  return rn;
}
function _l(e, t) {
  return Za(ji, e, t);
}
function Ga(e) {
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
function Qb(e) {
  return Gc = ki = 1, Kb = lr(ji = e), rn = 0, [];
}
function Zb(e) {
  return ji = "", e;
}
function Tu(e) {
  return Hb(_l(rn - 1, Pp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fk(e) {
  for (; (lt = mr()) && lt < 33; )
    fn();
  return Ga(e) > 2 || Ga(lt) > 3 ? "" : " ";
}
function pk(e, t) {
  for (; --t && fn() && !(lt < 48 || lt > 102 || lt > 57 && lt < 65 || lt > 70 && lt < 97); )
    ;
  return _l(e, Eu() + (t < 6 && mr() == 32 && fn() == 32));
}
function Pp(e) {
  for (; fn(); )
    switch (lt) {
      case e:
        return rn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pp(lt);
        break;
      case 40:
        e === 41 && Pp(e);
        break;
      case 92:
        fn();
        break;
    }
  return rn;
}
function hk(e, t) {
  for (; fn() && e + lt !== 57; )
    if (e + lt === 84 && mr() === 47)
      break;
  return "/*" + _l(t, rn - 1) + "*" + Zc(e === 47 ? e : fn());
}
function mk(e) {
  for (; !Ga(mr()); )
    fn();
  return _l(e, rn);
}
function yk(e) {
  return Zb(Ru("", null, null, null, [""], e = Qb(e), 0, [0], e));
}
function Ru(e, t, n, r, o, s, i, a, l) {
  for (var u = 0, c = 0, d = i, f = 0, y = 0, g = 0, v = 1, S = 1, m = 1, h = 0, p = "", x = o, C = s, k = r, E = p; S; )
    switch (g = h, h = fn()) {
      case 40:
        if (g != 108 && Ct(E, d - 1) == 58) {
          Rp(E += Te(Tu(h), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Tu(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += fk(g);
        break;
      case 92:
        E += pk(Eu() - 1, 7);
        continue;
      case 47:
        switch (mr()) {
          case 42:
          case 47:
            ou(gk(hk(fn(), Eu()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        a[u++] = lr(E) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            m == -1 && (E = Te(E, /\f/g, "")), y > 0 && lr(E) - d && ou(y > 32 ? Lg(E + ";", r, n, d - 1) : Lg(Te(E, " ", "") + ";", r, n, d - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (ou(k = Ng(E, t, n, u, c, o, a, p, x = [], C = [], d), s), h === 123)
              if (c === 0)
                Ru(E, t, k, k, x, s, d, a, C);
              else
                switch (f === 99 && Ct(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ru(e, k, k, r && ou(Ng(e, k, k, 0, 0, o, a, p, o, x = [], d), C), o, C, d, a, r ? x : C);
                    break;
                  default:
                    Ru(E, k, k, k, [""], C, 0, a, C);
                }
        }
        u = c = y = 0, v = m = 1, p = E = "", d = i;
        break;
      case 58:
        d = 1 + lr(E), y = g;
      default:
        if (v < 1) {
          if (h == 123)
            --v;
          else if (h == 125 && v++ == 0 && dk() == 125)
            continue;
        }
        switch (E += Zc(h), h * v) {
          case 38:
            m = c > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            a[u++] = (lr(E) - 1) * m, m = 1;
            break;
          case 64:
            mr() === 45 && (E += Tu(fn())), f = mr(), c = d = lr(p = E += mk(Eu())), h++;
            break;
          case 45:
            g === 45 && lr(E) == 2 && (v = 0);
        }
    }
  return s;
}
function Ng(e, t, n, r, o, s, i, a, l, u, c) {
  for (var d = o - 1, f = o === 0 ? s : [""], y = Im(f), g = 0, v = 0, S = 0; g < r; ++g)
    for (var m = 0, h = Za(e, d + 1, d = sk(v = i[g])), p = e; m < y; ++m)
      (p = Hb(v > 0 ? f[m] + " " + h : Te(h, /&\f/g, f[m]))) && (l[S++] = p);
  return qc(e, t, n, o === 0 ? Pm : a, l, u, c);
}
function gk(e, t, n) {
  return qc(e, t, n, Vb, Zc(ck()), Za(e, 2, -2), 0);
}
function Lg(e, t, n, r) {
  return qc(e, t, n, Mm, Za(e, 0, r), Za(e, r + 1, -1), r);
}
function Js(e, t) {
  for (var n = "", r = Im(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function vk(e, t, n, r) {
  switch (e.type) {
    case ok:
      if (e.children.length) break;
    case rk:
    case Mm:
      return e.return = e.return || e.value;
    case Vb:
      return "";
    case Wb:
      return e.return = e.value + "{" + Js(e.children, r) + "}";
    case Pm:
      e.value = e.props.join(",");
  }
  return lr(n = Js(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function bk(e) {
  var t = Im(e);
  return function(n, r, o, s) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](n, r, o, s) || "";
    return i;
  };
}
function xk(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Gb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Sk = function(t, n, r) {
  for (var o = 0, s = 0; o = s, s = mr(), o === 38 && s === 12 && (n[r] = 1), !Ga(s); )
    fn();
  return _l(t, rn);
}, wk = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ga(o)) {
      case 0:
        o === 38 && mr() === 12 && (n[r] = 1), t[r] += Sk(rn - 1, n, r);
        break;
      case 2:
        t[r] += Tu(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = mr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Zc(o);
    }
  while (o = fn());
  return t;
}, Ck = function(t, n) {
  return Zb(wk(Qb(t), n));
}, Fg = /* @__PURE__ */ new WeakMap(), _k = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fg.get(r)) && !o) {
      Fg.set(t, !0);
      for (var s = [], i = Ck(n, s), a = r.props, l = 0, u = 0; l < i.length; l++)
        for (var c = 0; c < a.length; c++, u++)
          t.props[u] = s[l] ? i[l].replace(/&\f/g, a[c]) : a[c] + " " + i[l];
    }
  }
}, kk = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function qb(e, t) {
  switch (ak(e, t)) {
    case 5103:
      return Ee + "print-" + e + e;
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
      return Ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + uc + e + It + e + e;
    case 6828:
    case 4268:
      return Ee + e + It + e + e;
    case 6165:
      return Ee + e + It + "flex-" + e + e;
    case 5187:
      return Ee + e + Te(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + It + "flex-$1$2") + e;
    case 5443:
      return Ee + e + It + "flex-item-" + Te(e, /flex-|-self/, "") + e;
    case 4675:
      return Ee + e + It + "flex-line-pack" + Te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ee + e + It + Te(e, "shrink", "negative") + e;
    case 5292:
      return Ee + e + It + Te(e, "basis", "preferred-size") + e;
    case 6060:
      return Ee + "box-" + Te(e, "-grow", "") + Ee + e + It + Te(e, "grow", "positive") + e;
    case 4554:
      return Ee + Te(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    case 6187:
      return Te(Te(Te(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Te(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    case 4968:
      return Te(Te(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + It + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Te(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
      if (lr(e) - 1 - t > 6) switch (Ct(e, t + 1)) {
        case 109:
          if (Ct(e, t + 4) !== 45) break;
        case 102:
          return Te(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + uc + (Ct(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Rp(e, "stretch") ? qb(Te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ct(e, t + 1) !== 115) break;
    case 6444:
      switch (Ct(e, lr(e) - 3 - (~Rp(e, "!important") && 10))) {
        case 107:
          return Te(e, ":", ":" + Ee) + e;
        case 101:
          return Te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (Ct(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + It + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ct(e, t + 11)) {
        case 114:
          return Ee + e + It + Te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ee + e + It + Te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ee + e + It + Te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + It + e + e;
  }
  return e;
}
var Ek = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Mm:
      t.return = qb(t.value, t.length);
      break;
    case Wb:
      return Js([ta(t, {
        value: Te(t.value, "@", "@" + Ee)
      })], o);
    case Pm:
      if (t.length) return uk(t.props, function(s) {
        switch (lk(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Js([ta(t, {
              props: [Te(s, /:(read-\w+)/, ":" + uc + "$1")]
            })], o);
          case "::placeholder":
            return Js([ta(t, {
              props: [Te(s, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), ta(t, {
              props: [Te(s, /:(plac\w+)/, ":" + uc + "$1")]
            }), ta(t, {
              props: [Te(s, /:(plac\w+)/, It + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Tk = [Ek], Xb = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var S = v.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Tk, s = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var S = v.getAttribute("data-emotion").split(" "), m = 1; m < S.length; m++)
        s[S[m]] = !0;
      a.push(v);
    }
  );
  var l, u = [_k, kk];
  {
    var c, d = [vk, xk(function(v) {
      c.insert(v);
    })], f = bk(u.concat(o, d)), y = function(S) {
      return Js(yk(S), f);
    };
    l = function(S, m, h, p) {
      c = h, y(S ? S + "{" + m.styles + "}" : m.styles), p && (g.inserted[m.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new nk({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(a), g;
}, Yb = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt = typeof Symbol == "function" && Symbol.for, Om = vt ? Symbol.for("react.element") : 60103, Am = vt ? Symbol.for("react.portal") : 60106, Xc = vt ? Symbol.for("react.fragment") : 60107, Yc = vt ? Symbol.for("react.strict_mode") : 60108, Jc = vt ? Symbol.for("react.profiler") : 60114, ed = vt ? Symbol.for("react.provider") : 60109, td = vt ? Symbol.for("react.context") : 60110, $m = vt ? Symbol.for("react.async_mode") : 60111, nd = vt ? Symbol.for("react.concurrent_mode") : 60111, rd = vt ? Symbol.for("react.forward_ref") : 60112, od = vt ? Symbol.for("react.suspense") : 60113, Rk = vt ? Symbol.for("react.suspense_list") : 60120, sd = vt ? Symbol.for("react.memo") : 60115, id = vt ? Symbol.for("react.lazy") : 60116, Pk = vt ? Symbol.for("react.block") : 60121, Mk = vt ? Symbol.for("react.fundamental") : 60117, Ik = vt ? Symbol.for("react.responder") : 60118, Ok = vt ? Symbol.for("react.scope") : 60119;
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Om:
        switch (e = e.type, e) {
          case $m:
          case nd:
          case Xc:
          case Jc:
          case Yc:
          case od:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case td:
              case rd:
              case id:
              case sd:
              case ed:
                return e;
              default:
                return t;
            }
        }
      case Am:
        return t;
    }
  }
}
function Jb(e) {
  return xn(e) === nd;
}
Oe.AsyncMode = $m;
Oe.ConcurrentMode = nd;
Oe.ContextConsumer = td;
Oe.ContextProvider = ed;
Oe.Element = Om;
Oe.ForwardRef = rd;
Oe.Fragment = Xc;
Oe.Lazy = id;
Oe.Memo = sd;
Oe.Portal = Am;
Oe.Profiler = Jc;
Oe.StrictMode = Yc;
Oe.Suspense = od;
Oe.isAsyncMode = function(e) {
  return Jb(e) || xn(e) === $m;
};
Oe.isConcurrentMode = Jb;
Oe.isContextConsumer = function(e) {
  return xn(e) === td;
};
Oe.isContextProvider = function(e) {
  return xn(e) === ed;
};
Oe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Om;
};
Oe.isForwardRef = function(e) {
  return xn(e) === rd;
};
Oe.isFragment = function(e) {
  return xn(e) === Xc;
};
Oe.isLazy = function(e) {
  return xn(e) === id;
};
Oe.isMemo = function(e) {
  return xn(e) === sd;
};
Oe.isPortal = function(e) {
  return xn(e) === Am;
};
Oe.isProfiler = function(e) {
  return xn(e) === Jc;
};
Oe.isStrictMode = function(e) {
  return xn(e) === Yc;
};
Oe.isSuspense = function(e) {
  return xn(e) === od;
};
Oe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Xc || e === nd || e === Jc || e === Yc || e === od || e === Rk || typeof e == "object" && e !== null && (e.$$typeof === id || e.$$typeof === sd || e.$$typeof === ed || e.$$typeof === td || e.$$typeof === rd || e.$$typeof === Mk || e.$$typeof === Ik || e.$$typeof === Ok || e.$$typeof === Pk);
};
Oe.typeOf = xn;
Yb.exports = Oe;
var Ak = Yb.exports, ex = Ak, $k = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Nk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, tx = {};
tx[ex.ForwardRef] = $k;
tx[ex.Memo] = Nk;
var Lk = !0;
function nx(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Nm = function(t, n, r) {
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
  Lk === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Lm = function(t, n, r) {
  Nm(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Fk(e) {
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
var jk = {
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
}, zk = /[A-Z]|^ms/g, Dk = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rx = function(t) {
  return t.charCodeAt(1) === 45;
}, jg = function(t) {
  return t != null && typeof t != "boolean";
}, hf = /* @__PURE__ */ Gb(function(e) {
  return rx(e) ? e : e.replace(zk, "-$&").toLowerCase();
}), zg = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Dk, function(r, o, s) {
          return ur = {
            name: o,
            styles: s,
            next: ur
          }, o;
        });
  }
  return jk[t] !== 1 && !rx(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function qa(e, t, n) {
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
        return ur = {
          name: o.name,
          styles: o.styles,
          next: ur
        }, o.name;
      var s = n;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ur = {
              name: i.name,
              styles: i.styles,
              next: ur
            }, i = i.next;
        var a = s.styles + ";";
        return a;
      }
      return Bk(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = ur, u = n(e);
        return ur = l, qa(e, t, u);
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
function Bk(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += qa(e, t, n[o]) + ";";
  else
    for (var s in n) {
      var i = n[s];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : jg(a) && (r += hf(s) + ":" + zg(s, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var l = 0; l < i.length; l++)
          jg(i[l]) && (r += hf(s) + ":" + zg(s, i[l]) + ";");
      else {
        var u = qa(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            r += hf(s) + ":" + u + ";";
            break;
          }
          default:
            r += s + "{" + u + "}";
        }
      }
    }
  return r;
}
var Dg = /label:\s*([^\s;{]+)\s*(;|$)/g, ur;
function kl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  ur = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, o += qa(n, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += qa(n, t, e[a]), r) {
      var l = s;
      o += l[a];
    }
  Dg.lastIndex = 0;
  for (var u = "", c; (c = Dg.exec(o)) !== null; )
    u += "-" + c[1];
  var d = Fk(o) + u;
  return {
    name: d,
    styles: o,
    next: ur
  };
}
var Uk = function(t) {
  return t();
}, ox = Fu.useInsertionEffect ? Fu.useInsertionEffect : !1, sx = ox || Uk, Bg = ox || w.useLayoutEffect, Vk = !1, ix = /* @__PURE__ */ w.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Xb({
    key: "css"
  }) : null
), Wk = ix.Provider, Fm = function(t) {
  return /* @__PURE__ */ w.forwardRef(function(n, r) {
    var o = w.useContext(ix);
    return t(n, o, r);
  });
}, El = /* @__PURE__ */ w.createContext({}), jm = {}.hasOwnProperty, Mp = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Hk = function(t, n) {
  var r = {};
  for (var o in n)
    jm.call(n, o) && (r[o] = n[o]);
  return r[Mp] = t, r;
}, Kk = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Nm(n, r, o), sx(function() {
    return Lm(n, r, o);
  }), null;
}, Qk = /* @__PURE__ */ Fm(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Mp], s = [r], i = "";
  typeof e.className == "string" ? i = nx(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var a = kl(s, void 0, w.useContext(El));
  i += t.key + "-" + a.name;
  var l = {};
  for (var u in e)
    jm.call(e, u) && u !== "css" && u !== Mp && !Vk && (l[u] = e[u]);
  return l.className = i, n && (l.ref = n), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(Kk, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ w.createElement(o, l));
}), Zk = Qk, Gk = function(t, n) {
  var r = arguments;
  if (n == null || !jm.call(n, "css"))
    return w.createElement.apply(void 0, r);
  var o = r.length, s = new Array(o);
  s[0] = Zk, s[1] = Hk(t, n);
  for (var i = 2; i < o; i++)
    s[i] = r[i];
  return w.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Gk);
var qk = /* @__PURE__ */ Fm(function(e, t) {
  var n = e.styles, r = kl([n], void 0, w.useContext(El)), o = w.useRef();
  return Bg(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", s), i.hydrate([l])), o.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Bg(function() {
    var s = o.current, i = s[0], a = s[1];
    if (a) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Lm(t, r.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
function zm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return kl(t);
}
function Tl() {
  var e = zm.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Xk = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yk = /* @__PURE__ */ Gb(
  function(e) {
    return Xk.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Jk = Yk, eE = function(t) {
  return t !== "theme";
}, Ug = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Jk : eE;
}, Vg = function(t, n, r) {
  var o;
  if (n) {
    var s = n.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, tE = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Nm(n, r, o), sx(function() {
    return Lm(n, r, o);
  }), null;
}, nE = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, s, i;
  n !== void 0 && (s = n.label, i = n.target);
  var a = Vg(t, n, r), l = a || Ug(o), u = !l("as");
  return function() {
    var c = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && d.push("label:" + s + ";"), c[0] == null || c[0].raw === void 0)
      d.push.apply(d, c);
    else {
      var f = c[0];
      d.push(f[0]);
      for (var y = c.length, g = 1; g < y; g++)
        d.push(c[g], f[g]);
    }
    var v = Fm(function(S, m, h) {
      var p = u && S.as || o, x = "", C = [], k = S;
      if (S.theme == null) {
        k = {};
        for (var E in S)
          k[E] = S[E];
        k.theme = w.useContext(El);
      }
      typeof S.className == "string" ? x = nx(m.registered, C, S.className) : S.className != null && (x = S.className + " ");
      var T = kl(d.concat(C), m.registered, k);
      x += m.key + "-" + T.name, i !== void 0 && (x += " " + i);
      var M = u && a === void 0 ? Ug(p) : l, b = {};
      for (var P in S)
        u && P === "as" || M(P) && (b[P] = S[P]);
      return b.className = x, h && (b.ref = h), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(tE, {
        cache: m,
        serialized: T,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ w.createElement(p, b));
    });
    return v.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = a, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + i;
      }
    }), v.withComponent = function(S, m) {
      var h = e(S, lc({}, n, m, {
        shouldForwardProp: Vg(v, m, !0)
      }));
      return h.apply(void 0, d);
    }, v;
  };
}, rE = [
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
], Ip = nE.bind(null);
rE.forEach(function(e) {
  Ip[e] = Ip(e);
});
function oE(e) {
  return e == null || Object.keys(e).length === 0;
}
function ax(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(oE(o) ? n : o) : t;
  return /* @__PURE__ */ _.jsx(qk, {
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
function lx(e, t) {
  return Ip(e, t);
}
function sE(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Wg = [];
function Hg(e) {
  return Wg[0] = e, kl(Wg);
}
function dr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ux(e) {
  if (/* @__PURE__ */ w.isValidElement(e) || !dr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ux(e[n]);
  }), t;
}
function gt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return dr(e) && dr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ w.isValidElement(t[o]) ? r[o] = t[o] : dr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && dr(e[o]) ? r[o] = gt(e[o], t[o], n) : n.clone ? r[o] = dr(t[o]) ? ux(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const iE = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function aE(e) {
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
  } = e, s = iE(t), i = Object.keys(s);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, y) {
    const g = i.indexOf(y);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(g !== -1 && typeof t[i[g]] == "number" ? t[i[g]] : y) - r / 100}${n})`;
  }
  function c(f) {
    return i.indexOf(f) + 1 < i.length ? u(f, i[i.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const y = i.indexOf(f);
    return y === 0 ? a(i[1]) : y === i.length - 1 ? l(i[y]) : u(f, i[i.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: i,
    values: s,
    up: a,
    down: l,
    between: u,
    only: c,
    not: d,
    unit: n,
    ...o
  };
}
function lE(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var i, a;
    const s = /min-width:\s*([0-9.]+)/;
    return +(((i = r.match(s)) == null ? void 0 : i[1]) || 0) - +(((a = o.match(s)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const s = t[o];
    return delete r[o], r[o] = s, r;
  }, {
    ...t
  }) : t;
}
function uE(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function cE(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(s);
}
function dE(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function n(s, i) {
    s.up = (...a) => t(e.breakpoints.up(...a), i), s.down = (...a) => t(e.breakpoints.down(...a), i), s.between = (...a) => t(e.breakpoints.between(...a), i), s.only = (...a) => t(e.breakpoints.only(...a), i), s.not = (...a) => {
      const l = t(e.breakpoints.not(...a), i);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const r = {}, o = (s) => (n(r, s), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const fE = {
  borderRadius: 4
};
function Ta(e, t) {
  return t ? gt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ad = {
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
}, Kg = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ad[e]}px)`
}, pE = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : ad[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Zn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Kg;
    return t.reduce((i, a, l) => (i[s.up(s.keys[l])] = n(t[l]), i), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Kg;
    return Object.keys(t).reduce((i, a) => {
      if (uE(s.keys, a)) {
        const l = cE(r.containerQueries ? r : pE, a);
        l && (i[l] = n(t[a], a));
      } else if (Object.keys(s.values || ad).includes(a)) {
        const l = s.up(a);
        i[l] = n(t[a], a);
      } else {
        const l = a;
        i[l] = t[l];
      }
      return i;
    }, {});
  }
  return n(t);
}
function cx(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const s = e.up(o);
    return r[s] = {}, r;
  }, {})) || {};
}
function dx(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function hE(e, ...t) {
  const n = cx(e), r = [n, ...t].reduce((o, s) => gt(o, s), {});
  return dx(Object.keys(n), r);
}
function mE(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, s) => {
    s < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function mf({
  values: e,
  breakpoints: t,
  base: n
}) {
  const r = n || mE(e, t), o = Object.keys(r);
  if (o.length === 0)
    return e;
  let s;
  return o.reduce((i, a, l) => (Array.isArray(e) ? (i[a] = e[l] != null ? e[l] : e[s], s = l) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[s], s = a) : i[a] = e, i), {});
}
function X(e) {
  if (typeof e != "string")
    throw new Error(Br(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ei(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function cc(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ei(e, n) || r, t && (o = t(o, r, e)), o;
}
function it(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], l = i.theme, u = Ei(l, r) || {};
    return Zn(i, a, (d) => {
      let f = cc(u, o, d);
      return d === f && typeof d == "string" && (f = cc(u, o, `${t}${d === "default" ? "" : X(d)}`, d)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return s.propTypes = {}, s.filterProps = [t], s;
}
function yE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const gE = {
  m: "margin",
  p: "padding"
}, vE = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qg = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bE = yE((e) => {
  if (e.length > 2)
    if (Qg[e])
      e = Qg[e];
    else
      return [e];
  const [t, n] = e.split(""), r = gE[t], o = vE[n] || "";
  return Array.isArray(o) ? o.map((s) => r + s) : [r + o];
}), Dm = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Bm = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Dm, ...Bm];
function Rl(e, t, n, r) {
  const o = Ei(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : typeof o == "string" ? `calc(${s} * ${o})` : o * s : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const i = Math.abs(s), a = o[i];
    return s >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof o == "function" ? o : () => {
  };
}
function ld(e) {
  return Rl(e, "spacing", 8);
}
function us(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xE(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = us(t, n), r), {});
}
function SE(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = bE(n), s = xE(o, r), i = e[n];
  return Zn(e, i, s);
}
function fx(e, t) {
  const n = ld(e.theme);
  return Object.keys(e).map((r) => SE(e, t, r, n)).reduce(Ta, {});
}
function Je(e) {
  return fx(e, Dm);
}
Je.propTypes = {};
Je.filterProps = Dm;
function et(e) {
  return fx(e, Bm);
}
et.propTypes = {};
et.filterProps = Bm;
function px(e = 8, t = ld({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function ud(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, s) => t[s] ? Ta(o, t[s](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function En(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $n(e, t) {
  return it({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const wE = $n("border", En), CE = $n("borderTop", En), _E = $n("borderRight", En), kE = $n("borderBottom", En), EE = $n("borderLeft", En), TE = $n("borderColor"), RE = $n("borderTopColor"), PE = $n("borderRightColor"), ME = $n("borderBottomColor"), IE = $n("borderLeftColor"), OE = $n("outline", En), AE = $n("outlineColor"), cd = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Rl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: us(t, r)
    });
    return Zn(e, e.borderRadius, n);
  }
  return null;
};
cd.propTypes = {};
cd.filterProps = ["borderRadius"];
ud(wE, CE, _E, kE, EE, TE, RE, PE, ME, IE, cd, OE, AE);
const dd = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Rl(e.theme, "spacing", 8), n = (r) => ({
      gap: us(t, r)
    });
    return Zn(e, e.gap, n);
  }
  return null;
};
dd.propTypes = {};
dd.filterProps = ["gap"];
const fd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Rl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: us(t, r)
    });
    return Zn(e, e.columnGap, n);
  }
  return null;
};
fd.propTypes = {};
fd.filterProps = ["columnGap"];
const pd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Rl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: us(t, r)
    });
    return Zn(e, e.rowGap, n);
  }
  return null;
};
pd.propTypes = {};
pd.filterProps = ["rowGap"];
const $E = it({
  prop: "gridColumn"
}), NE = it({
  prop: "gridRow"
}), LE = it({
  prop: "gridAutoFlow"
}), FE = it({
  prop: "gridAutoColumns"
}), jE = it({
  prop: "gridAutoRows"
}), zE = it({
  prop: "gridTemplateColumns"
}), DE = it({
  prop: "gridTemplateRows"
}), BE = it({
  prop: "gridTemplateAreas"
}), UE = it({
  prop: "gridArea"
});
ud(dd, fd, pd, $E, NE, LE, FE, jE, zE, DE, BE, UE);
function ei(e, t) {
  return t === "grey" ? t : e;
}
const VE = it({
  prop: "color",
  themeKey: "palette",
  transform: ei
}), WE = it({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ei
}), HE = it({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ei
});
ud(VE, WE, HE);
function un(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const KE = it({
  prop: "width",
  transform: un
}), Um = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, s, i, a, l;
      const r = ((i = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : i[n]) || ad[n];
      return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: un(n)
      };
    };
    return Zn(e, e.maxWidth, t);
  }
  return null;
};
Um.filterProps = ["maxWidth"];
const QE = it({
  prop: "minWidth",
  transform: un
}), ZE = it({
  prop: "height",
  transform: un
}), GE = it({
  prop: "maxHeight",
  transform: un
}), qE = it({
  prop: "minHeight",
  transform: un
});
it({
  prop: "size",
  cssProperty: "width",
  transform: un
});
it({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const XE = it({
  prop: "boxSizing"
});
ud(KE, Um, QE, ZE, GE, qE, XE);
const Pl = {
  // borders
  border: {
    themeKey: "borders",
    transform: En
  },
  borderTop: {
    themeKey: "borders",
    transform: En
  },
  borderRight: {
    themeKey: "borders",
    transform: En
  },
  borderBottom: {
    themeKey: "borders",
    transform: En
  },
  borderLeft: {
    themeKey: "borders",
    transform: En
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
    transform: En
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: cd
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ei
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ei
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ei
  },
  // spacing
  p: {
    style: et
  },
  pt: {
    style: et
  },
  pr: {
    style: et
  },
  pb: {
    style: et
  },
  pl: {
    style: et
  },
  px: {
    style: et
  },
  py: {
    style: et
  },
  padding: {
    style: et
  },
  paddingTop: {
    style: et
  },
  paddingRight: {
    style: et
  },
  paddingBottom: {
    style: et
  },
  paddingLeft: {
    style: et
  },
  paddingX: {
    style: et
  },
  paddingY: {
    style: et
  },
  paddingInline: {
    style: et
  },
  paddingInlineStart: {
    style: et
  },
  paddingInlineEnd: {
    style: et
  },
  paddingBlock: {
    style: et
  },
  paddingBlockStart: {
    style: et
  },
  paddingBlockEnd: {
    style: et
  },
  m: {
    style: Je
  },
  mt: {
    style: Je
  },
  mr: {
    style: Je
  },
  mb: {
    style: Je
  },
  ml: {
    style: Je
  },
  mx: {
    style: Je
  },
  my: {
    style: Je
  },
  margin: {
    style: Je
  },
  marginTop: {
    style: Je
  },
  marginRight: {
    style: Je
  },
  marginBottom: {
    style: Je
  },
  marginLeft: {
    style: Je
  },
  marginX: {
    style: Je
  },
  marginY: {
    style: Je
  },
  marginInline: {
    style: Je
  },
  marginInlineStart: {
    style: Je
  },
  marginInlineEnd: {
    style: Je
  },
  marginBlock: {
    style: Je
  },
  marginBlockStart: {
    style: Je
  },
  marginBlockEnd: {
    style: Je
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
    style: dd
  },
  rowGap: {
    style: pd
  },
  columnGap: {
    style: fd
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
    transform: un
  },
  maxWidth: {
    style: Um
  },
  minWidth: {
    transform: un
  },
  height: {
    transform: un
  },
  maxHeight: {
    transform: un
  },
  minHeight: {
    transform: un
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
function YE(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function JE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function e2() {
  function e(n, r, o, s) {
    const i = {
      [n]: r,
      theme: o
    }, a = s[n];
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
    const f = Ei(o, u) || {};
    return d ? d(i) : Zn(i, r, (g) => {
      let v = cc(f, c, g);
      return g === v && typeof g == "string" && (v = cc(f, c, `${n}${g === "default" ? "" : X(g)}`, g)), l === !1 ? v : {
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
    const s = o.unstable_sxConfig ?? Pl;
    function i(a) {
      let l = a;
      if (typeof a == "function")
        l = a(o);
      else if (typeof a != "object")
        return a;
      if (!l)
        return null;
      const u = cx(o.breakpoints), c = Object.keys(u);
      let d = u;
      return Object.keys(l).forEach((f) => {
        const y = JE(l[f], o);
        if (y != null)
          if (typeof y == "object")
            if (s[f])
              d = Ta(d, e(f, y, o, s));
            else {
              const g = Zn({
                theme: o
              }, y, (v) => ({
                [f]: v
              }));
              YE(g, y) ? d[f] = t({
                sx: y,
                theme: o
              }) : d = Ta(d, g);
            }
          else
            d = Ta(d, e(f, y, o, s));
      }), lE(o, dx(c, d));
    }
    return Array.isArray(r) ? r.map(i) : i(r);
  }
  return t;
}
const _o = e2();
_o.filterProps = ["sx"];
function t2(e, t) {
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
function Ml(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: s = {},
    ...i
  } = e, a = aE(n), l = px(o);
  let u = gt({
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
      ...fE,
      ...s
    }
  }, i);
  return u = dE(u), u.applyStyles = t2, u = t.reduce((c, d) => gt(c, d), u), u.unstable_sxConfig = {
    ...Pl,
    ...i == null ? void 0 : i.unstable_sxConfig
  }, u.unstable_sx = function(d) {
    return _o({
      sx: d,
      theme: this
    });
  }, u;
}
function n2(e) {
  return Object.keys(e).length === 0;
}
function Vm(e = null) {
  const t = w.useContext(El);
  return !t || n2(t) ? e : t;
}
const r2 = Ml();
function Il(e = r2) {
  return Vm(e);
}
function o2({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Il(n), o = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ _.jsx(ax, {
    styles: o
  });
}
const s2 = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, n = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? Pl;
  return Object.keys(e).forEach((o) => {
    n[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function hd(e) {
  const {
    sx: t,
    ...n
  } = e, {
    systemProps: r,
    otherProps: o
  } = s2(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...i) => {
    const a = t(...i);
    return dr(a) ? {
      ...r,
      ...a
    } : r;
  } : s = {
    ...r,
    ...t
  }, {
    ...o,
    sx: s
  };
}
const Zg = (e) => e, i2 = () => {
  let e = Zg;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zg;
    }
  };
}, hx = i2();
function mx(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = mx(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = mx(e)) && (r && (r += " "), r += t);
  return r;
}
function a2(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, s = lx("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(_o);
  return /* @__PURE__ */ w.forwardRef(function(l, u) {
    const c = Il(n), {
      className: d,
      component: f = "div",
      ...y
    } = hd(l);
    return /* @__PURE__ */ _.jsx(s, {
      as: f,
      ref: u,
      className: ee(d, o ? o(r) : r),
      theme: t && c[t] || c,
      ...y
    });
  });
}
const l2 = {
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
function Se(e, t, n = "Mui") {
  const r = l2[t];
  return r ? `${n}-${r}` : `${hx.generate(e)}-${t}`;
}
function _e(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Se(e, o, n);
  }), r;
}
function yx(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Hg(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Hg(o.style));
  }), r;
}
const u2 = Ml();
function yf(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function c2(e) {
  return e ? (t, n) => n[e] : null;
}
function d2(e, t, n) {
  e.theme = p2(e.theme) ? n : e.theme[t] || e.theme;
}
function Pu(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Pu(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: o,
        ...s
      } = n;
      r = s;
    }
    return gx(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function gx(e, t, n = []) {
  var o;
  let r;
  e: for (let s = 0; s < t.length; s += 1) {
    const i = t[s];
    if (typeof i.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !i.props(r))
        continue;
    } else
      for (const a in i.props)
        if (e[a] !== i.props[a] && ((o = e.ownerState) == null ? void 0 : o[a]) !== i.props[a])
          continue e;
    typeof i.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(i.style(r))) : n.push(i.style);
  }
  return n;
}
function vx(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = u2,
    rootShouldForwardProp: r = yf,
    slotShouldForwardProp: o = yf
  } = e;
  function s(a) {
    d2(a, t, n);
  }
  return (a, l = {}) => {
    sE(a, (C) => C.filter((k) => k !== _o));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: d,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = c2(m2(c)),
      ...g
    } = l, v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), S = f || !1;
    let m = yf;
    c === "Root" || c === "root" ? m = r : c ? m = o : h2(a) && (m = void 0);
    const h = lx(a, {
      shouldForwardProp: m,
      label: f2(),
      ...g
    }), p = (C) => {
      if (typeof C == "function" && C.__emotion_real !== C)
        return function(E) {
          return Pu(E, C);
        };
      if (dr(C)) {
        const k = yx(C);
        return k.variants ? function(T) {
          return Pu(T, k);
        } : k.style;
      }
      return C;
    }, x = (...C) => {
      const k = [], E = C.map(p), T = [];
      if (k.push(s), u && y && T.push(function(N) {
        var B, W;
        const D = (W = (B = N.theme.components) == null ? void 0 : B[u]) == null ? void 0 : W.styleOverrides;
        if (!D)
          return null;
        const L = {};
        for (const A in D)
          L[A] = Pu(N, D[A]);
        return y(N, L);
      }), u && !v && T.push(function(N) {
        var L, B;
        const j = N.theme, D = (B = (L = j == null ? void 0 : j.components) == null ? void 0 : L[u]) == null ? void 0 : B.variants;
        return D ? gx(N, D) : null;
      }), S || T.push(_o), Array.isArray(E[0])) {
        const P = E.shift(), N = new Array(k.length).fill(""), j = new Array(T.length).fill("");
        let D;
        D = [...N, ...P, ...j], D.raw = [...N, ...P.raw, ...j], k.unshift(D);
      }
      const M = [...k, ...E, ...T], b = h(...M);
      return a.muiName && (b.muiName = a.muiName), b;
    };
    return h.withConfig && (x.withConfig = h.withConfig), x;
  };
}
function f2(e, t) {
  return void 0;
}
function p2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function h2(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function m2(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const bx = vx();
function Ti(e, t) {
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
        const s = e[o], i = t[o];
        if (!i)
          n[o] = s || {};
        else if (!s)
          n[o] = i;
        else {
          n[o] = {
            ...i
          };
          for (const a in s)
            if (Object.prototype.hasOwnProperty.call(s, a)) {
              const l = a;
              n[o][l] = Ti(s[l], i[l]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function xx(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Ti(t.components[n].defaultProps, r);
}
function Sx({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Il(n);
  return r && (o = o[r] || o), xx({
    theme: o,
    name: t,
    props: e
  });
}
const ko = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function y2(e, t, n, r, o) {
  const [s, i] = w.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
  return ko(() => {
    if (!n)
      return;
    const a = n(e), l = () => {
      i(a.matches);
    };
    return l(), a.addEventListener("change", l), () => {
      a.removeEventListener("change", l);
    };
  }, [e, n]), s;
}
const g2 = {
  ...Fu
}, wx = g2.useSyncExternalStore;
function v2(e, t, n, r, o) {
  const s = w.useCallback(() => t, [t]), i = w.useMemo(() => {
    if (o && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: c
      } = r(e);
      return () => c;
    }
    return s;
  }, [s, e, r, o, n]), [a, l] = w.useMemo(() => {
    if (n === null)
      return [s, () => () => {
      }];
    const c = n(e);
    return [() => c.matches, (d) => (c.addEventListener("change", d), () => {
      c.removeEventListener("change", d);
    })];
  }, [s, n, e]);
  return wx(l, a, i);
}
function b2(e = {}) {
  const {
    themeId: t
  } = e;
  return function(r, o = {}) {
    let s = Vm();
    s && t && (s = s[t] || s);
    const i = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: a = !1,
      matchMedia: l = i ? window.matchMedia : null,
      ssrMatchMedia: u = null,
      noSsr: c = !1
    } = xx({
      name: "MuiUseMediaQuery",
      props: o,
      theme: s
    });
    let d = typeof r == "function" ? r(s) : r;
    return d = d.replace(/^@media( ?)/m, ""), (wx !== void 0 ? v2 : y2)(d, a, l, u, c);
  };
}
function x2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Wm(e, t = 0, n = 1) {
  return x2(e, t, n);
}
function S2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Eo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Eo(S2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Br(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Br(10, o));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const w2 = (e) => {
  const t = Eo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, fa = (e, t) => {
  try {
    return w2(e);
  } catch {
    return e;
  }
};
function md(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Cx(e) {
  e = Eo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, s = r * Math.min(o, 1 - o), i = (u, c = (u + n / 30) % 12) => o - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), md({
    type: a,
    values: l
  });
}
function Op(e) {
  e = Eo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Eo(Cx(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function C2(e, t) {
  const n = Op(e), r = Op(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Xt(e, t) {
  return e = Eo(e), t = Wm(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, md(e);
}
function su(e, t, n) {
  try {
    return Xt(e, t);
  } catch {
    return e;
  }
}
function Hm(e, t) {
  if (e = Eo(e), t = Wm(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return md(e);
}
function Ne(e, t, n) {
  try {
    return Hm(e, t);
  } catch {
    return e;
  }
}
function Km(e, t) {
  if (e = Eo(e), t = Wm(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return md(e);
}
function Le(e, t, n) {
  try {
    return Km(e, t);
  } catch {
    return e;
  }
}
function _2(e, t = 0.15) {
  return Op(e) > 0.5 ? Hm(e, t) : Km(e, t);
}
function iu(e, t, n) {
  try {
    return _2(e, t);
  } catch {
    return e;
  }
}
function Gg(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function _x(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function Mu(e, t) {
  var n, r, o;
  return /* @__PURE__ */ w.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
function Gn(e) {
  return e && e.ownerDocument || document;
}
function Ur(e) {
  return Gn(e).defaultView || window;
}
function Ap(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let qg = 0;
function k2(e) {
  const [t, n] = w.useState(e), r = e || t;
  return w.useEffect(() => {
    t == null && (qg += 1, n(`mui-${qg}`));
  }, [t]), r;
}
const E2 = {
  ...Fu
}, Xg = E2.useId;
function yd(e) {
  if (Xg !== void 0) {
    const t = Xg();
    return e ?? t;
  }
  return k2(e);
}
function Yg({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = w.useRef(e !== void 0), [s, i] = w.useState(t), a = o ? e : s, l = w.useCallback((u) => {
    o || i(u);
  }, []);
  return [a, l];
}
function ti(e) {
  const t = w.useRef(e);
  return ko(() => {
    t.current = e;
  }), w.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ft(...e) {
  return w.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Ap(n, t);
    });
  }, e);
}
const Jg = {};
function kx(e, t) {
  const n = w.useRef(Jg);
  return n.current === Jg && (n.current = e(t)), n;
}
const T2 = [];
function R2(e) {
  w.useEffect(e, T2);
}
class Qm {
  constructor() {
    Hi(this, "currentId", null);
    Hi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Hi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Qm();
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
function Ex() {
  const e = kx(Qm.create).current;
  return R2(e.disposeEffect), e;
}
function dc(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function Tx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ke(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const s = e[o];
    let i = "", a = !0;
    for (let l = 0; l < s.length; l += 1) {
      const u = s[l];
      u && (i += (a === !0 ? "" : " ") + t(u), a = !1, n && n[u] && (i += " " + n[u]));
    }
    r[o] = i;
  }
  return r;
}
function P2(e) {
  return typeof e == "string";
}
function Rx(e, t, n) {
  return e === void 0 || P2(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Px(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function e0(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Mx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const y = ee(n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = {
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
  const i = Px({
    ...o,
    ...r
  }), a = e0(r), l = e0(o), u = t(i), c = ee(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), d = {
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
function Ix(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function t0(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, i = o ? {} : Ix(n, r), {
    props: a,
    internalRef: l
  } = Mx({
    ...s,
    externalSlotProps: i
  }), u = Ft(l, i == null ? void 0 : i.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return Rx(t, {
    ...a,
    ref: u
  }, r);
}
function Ol(e) {
  var t;
  return parseInt(w.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Ox = /* @__PURE__ */ w.createContext(null);
function Zm() {
  return w.useContext(Ox);
}
const M2 = typeof Symbol == "function" && Symbol.for, I2 = M2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function O2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function A2(e) {
  const {
    children: t,
    theme: n
  } = e, r = Zm(), o = w.useMemo(() => {
    const s = r === null ? {
      ...n
    } : O2(r, n);
    return s != null && (s[I2] = r !== null), s;
  }, [n, r]);
  return /* @__PURE__ */ _.jsx(Ox.Provider, {
    value: o,
    children: t
  });
}
const Ax = /* @__PURE__ */ w.createContext();
function $2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ _.jsx(Ax.Provider, {
    value: e ?? !0,
    ...t
  });
}
const N2 = () => w.useContext(Ax) ?? !1, $x = /* @__PURE__ */ w.createContext(void 0);
function L2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ _.jsx($x.Provider, {
    value: e,
    children: t
  });
}
function F2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Ti(o.defaultProps, r) : !o.styleOverrides && !o.variants ? Ti(o, r) : r;
}
function j2({
  props: e,
  name: t
}) {
  const n = w.useContext($x);
  return F2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const n0 = {};
function r0(e, t, n, r = !1) {
  return w.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const s = n(o), i = e ? {
        ...t,
        [e]: s
      } : s;
      return r ? () => i : i;
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
function Nx(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Vm(n0), s = Zm() || n0, i = r0(r, o, n), a = r0(r, s, n, !0), l = (r ? i[r] : i).direction === "rtl";
  return /* @__PURE__ */ _.jsx(A2, {
    theme: a,
    children: /* @__PURE__ */ _.jsx(El.Provider, {
      value: i,
      children: /* @__PURE__ */ _.jsx($2, {
        value: l,
        children: /* @__PURE__ */ _.jsx(L2, {
          value: r ? i[r].components : i.components,
          children: t
        })
      })
    })
  });
}
const o0 = {
  theme: void 0
};
function z2(e) {
  let t, n;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== n) && (o0.theme = o.theme, s = yx(e(o0)), t = s, n = o.theme), s;
  };
}
const Gm = "mode", qm = "color-scheme", D2 = "data-color-scheme";
function B2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Gm,
    colorSchemeStorageKey: s = qm,
    attribute: i = D2,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e;
  let u = "", c = i;
  if (i === "class" && (c = ".%s"), i === "data" && (c = "[data-%s]"), c.startsWith(".")) {
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
  return /* @__PURE__ */ _.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${r}';
  const light = localStorage.getItem('${s}-light') || '${n}';
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
function s0(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Lx(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function U2(e) {
  return Lx(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function gf(e, t) {
  if (typeof window > "u")
    return;
  let n;
  try {
    n = localStorage.getItem(e) || void 0, n || localStorage.setItem(e, t);
  } catch {
  }
  return n || t;
}
function V2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: s = Gm,
    colorSchemeStorageKey: i = qm,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    noSsr: l = !1
  } = e, u = o.join(","), c = o.length > 1, [d, f] = w.useState(() => {
    const x = gf(s, t), C = gf(`${i}-light`, n), k = gf(`${i}-dark`, r);
    return {
      mode: x,
      systemMode: s0(x),
      lightColorScheme: C,
      darkColorScheme: k
    };
  }), [y, g] = w.useState(l || !c);
  w.useEffect(() => {
    g(!0);
  }, []);
  const v = U2(d), S = w.useCallback((x) => {
    f((C) => {
      if (x === C.mode)
        return C;
      const k = x ?? t;
      try {
        localStorage.setItem(s, k);
      } catch {
      }
      return {
        ...C,
        mode: k,
        systemMode: s0(k)
      };
    });
  }, [s, t]), m = w.useCallback((x) => {
    x ? typeof x == "string" ? x && !u.includes(x) ? console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`) : f((C) => {
      const k = {
        ...C
      };
      return Lx(C, (E) => {
        try {
          localStorage.setItem(`${i}-${E}`, x);
        } catch {
        }
        E === "light" && (k.lightColorScheme = x), E === "dark" && (k.darkColorScheme = x);
      }), k;
    }) : f((C) => {
      const k = {
        ...C
      }, E = x.light === null ? n : x.light, T = x.dark === null ? r : x.dark;
      if (E)
        if (!u.includes(E))
          console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          k.lightColorScheme = E;
          try {
            localStorage.setItem(`${i}-light`, E);
          } catch {
          }
        }
      if (T)
        if (!u.includes(T))
          console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          k.darkColorScheme = T;
          try {
            localStorage.setItem(`${i}-dark`, T);
          } catch {
          }
        }
      return k;
    }) : f((C) => {
      try {
        localStorage.setItem(`${i}-light`, n), localStorage.setItem(`${i}-dark`, r);
      } catch {
      }
      return {
        ...C,
        lightColorScheme: n,
        darkColorScheme: r
      };
    });
  }, [u, i, n, r]), h = w.useCallback((x) => {
    d.mode === "system" && f((C) => {
      const k = x != null && x.matches ? "dark" : "light";
      return C.systemMode === k ? C : {
        ...C,
        systemMode: k
      };
    });
  }, [d.mode]), p = w.useRef(h);
  return p.current = h, w.useEffect(() => {
    if (typeof window.matchMedia != "function" || !c)
      return;
    const x = (...k) => p.current(...k), C = window.matchMedia("(prefers-color-scheme: dark)");
    return C.addListener(x), x(C), () => {
      C.removeListener(x);
    };
  }, [c]), w.useEffect(() => {
    if (a && c) {
      const x = (C) => {
        const k = C.newValue;
        typeof C.key == "string" && C.key.startsWith(i) && (!k || u.match(k)) && (C.key.endsWith("light") && m({
          light: k
        }), C.key.endsWith("dark") && m({
          dark: k
        })), C.key === s && (!k || ["light", "dark", "system"].includes(k)) && S(k || t);
      };
      return a.addEventListener("storage", x), () => {
        a.removeEventListener("storage", x);
      };
    }
  }, [m, S, s, i, u, t, a, c]), {
    ...d,
    mode: y ? d.mode : void 0,
    systemMode: y ? d.systemMode : void 0,
    colorScheme: y ? v : void 0,
    setMode: S,
    setColorScheme: m
  };
}
const W2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function H2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Gm,
    colorSchemeStorageKey: o = qm,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: i,
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
  }, u = /* @__PURE__ */ w.createContext(void 0), c = () => w.useContext(u) || l, d = {}, f = {};
  function y(m) {
    var Sr, xt, wr, Kr;
    const {
      children: h,
      theme: p,
      modeStorageKey: x = r,
      colorSchemeStorageKey: C = o,
      disableTransitionOnChange: k = s,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: T = typeof document > "u" ? void 0 : document,
      colorSchemeNode: M = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: b = !1,
      disableStyleSheetGeneration: P = !1,
      defaultMode: N = "system",
      noSsr: j
    } = m, D = w.useRef(!1), L = Zm(), B = w.useContext(u), W = !!B && !b, A = w.useMemo(() => p || (typeof n == "function" ? n() : n), [p]), $ = A[t], U = $ || A, {
      colorSchemes: Q = d,
      components: ue = f,
      cssVarPrefix: Y
    } = U, J = Object.keys(Q).filter((rt) => !!Q[rt]).join(","), ae = w.useMemo(() => J.split(","), [J]), Fe = typeof i == "string" ? i : i.light, ze = typeof i == "string" ? i : i.dark, zt = Q[Fe] && Q[ze] ? N : ((xt = (Sr = Q[U.defaultColorScheme]) == null ? void 0 : Sr.palette) == null ? void 0 : xt.mode) || ((wr = U.palette) == null ? void 0 : wr.mode), {
      mode: Ve,
      setMode: he,
      systemMode: Re,
      lightColorScheme: me,
      darkColorScheme: Qe,
      colorScheme: ge,
      setColorScheme: $e
    } = V2({
      supportedColorSchemes: ae,
      defaultLightColorScheme: Fe,
      defaultDarkColorScheme: ze,
      modeStorageKey: x,
      colorSchemeStorageKey: C,
      defaultMode: zt,
      storageWindow: E,
      noSsr: j
    });
    let bt = Ve, Ae = ge;
    W && (bt = B.mode, Ae = B.colorScheme);
    const We = w.useMemo(() => {
      var sn;
      const rt = Ae || U.defaultColorScheme, ot = ((sn = U.generateThemeVars) == null ? void 0 : sn.call(U)) || U.vars, at = {
        ...U,
        components: ue,
        colorSchemes: Q,
        cssVarPrefix: Y,
        vars: ot
      };
      if (typeof at.generateSpacing == "function" && (at.spacing = at.generateSpacing()), rt) {
        const ve = Q[rt];
        ve && typeof ve == "object" && Object.keys(ve).forEach((Rt) => {
          ve[Rt] && typeof ve[Rt] == "object" ? at[Rt] = {
            ...at[Rt],
            ...ve[Rt]
          } : at[Rt] = ve[Rt];
        });
      }
      return a ? a(at) : at;
    }, [U, Ae, ue, Q, Y]), Et = U.colorSchemeSelector;
    w.useEffect(() => {
      if (Ae && M && Et && Et !== "media") {
        const rt = Et;
        let ot = Et;
        if (rt === "class" && (ot = ".%s"), rt === "data" && (ot = "[data-%s]"), rt != null && rt.startsWith("data-") && !rt.includes("%s") && (ot = `[${rt}="%s"]`), ot.startsWith("."))
          M.classList.remove(...ae.map((at) => ot.substring(1).replace("%s", at))), M.classList.add(ot.substring(1).replace("%s", Ae));
        else {
          const at = ot.replace("%s", Ae).match(/\[([^\]]+)\]/);
          if (at) {
            const [sn, ve] = at[1].split("=");
            ve || ae.forEach((Rt) => {
              M.removeAttribute(sn.replace(Ae, Rt));
            }), M.setAttribute(sn, ve ? ve.replace(/"|'/g, "") : "");
          } else
            M.setAttribute(ot, Ae);
        }
      }
    }, [Ae, Et, M, ae]), w.useEffect(() => {
      let rt;
      if (k && D.current && T) {
        const ot = T.createElement("style");
        ot.appendChild(T.createTextNode(W2)), T.head.appendChild(ot), window.getComputedStyle(T.body), rt = setTimeout(() => {
          T.head.removeChild(ot);
        }, 1);
      }
      return () => {
        clearTimeout(rt);
      };
    }, [Ae, k, T]), w.useEffect(() => (D.current = !0, () => {
      D.current = !1;
    }), []);
    const Tt = w.useMemo(() => ({
      allColorSchemes: ae,
      colorScheme: Ae,
      darkColorScheme: Qe,
      lightColorScheme: me,
      mode: bt,
      setColorScheme: $e,
      setMode: he,
      systemMode: Re
    }), [ae, Ae, Qe, me, bt, $e, he, Re, We.colorSchemeSelector]);
    let Ye = !0;
    (P || U.cssVariables === !1 || W && (L == null ? void 0 : L.cssVarPrefix) === Y) && (Ye = !1);
    const te = /* @__PURE__ */ _.jsxs(w.Fragment, {
      children: [/* @__PURE__ */ _.jsx(Nx, {
        themeId: $ ? t : void 0,
        theme: We,
        children: h
      }), Ye && /* @__PURE__ */ _.jsx(ax, {
        styles: ((Kr = We.generateStyleSheets) == null ? void 0 : Kr.call(We)) || []
      })]
    });
    return W ? te : /* @__PURE__ */ _.jsx(u.Provider, {
      value: Tt,
      children: te
    });
  }
  const g = typeof i == "string" ? i : i.light, v = typeof i == "string" ? i : i.dark;
  return {
    CssVarsProvider: y,
    useColorScheme: c,
    getInitColorSchemeScript: (m) => B2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: g,
      defaultDarkColorScheme: v,
      modeStorageKey: r,
      ...m
    })
  };
}
function K2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const i0 = (e, t, n, r = []) => {
  let o = e;
  t.forEach((s, i) => {
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  });
}, Q2 = (e, t, n) => {
  function r(o, s = [], i = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!n || !n([...s, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...s, a], Array.isArray(l) ? [...i, a] : i) : t([...s, a], l, i));
    });
  }
  r(e);
}, Z2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function vf(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, s = {}, i = {};
  return Q2(
    e,
    (a, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, d = Z2(a, l);
        Object.assign(o, {
          [c]: d
        }), i0(s, a, `var(${c})`, u), i0(i, a, `var(${c}, ${d})`, u);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: i
  };
}
function G2(e, t = {}) {
  const {
    getSelector: n = S,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: s = {},
    components: i,
    defaultColorScheme: a = "light",
    ...l
  } = e, {
    vars: u,
    css: c,
    varsWithDefaults: d
  } = vf(l, t);
  let f = d;
  const y = {}, {
    [a]: g,
    ...v
  } = s;
  if (Object.entries(v || {}).forEach(([p, x]) => {
    const {
      vars: C,
      css: k,
      varsWithDefaults: E
    } = vf(x, t);
    f = gt(f, E), y[p] = {
      css: k,
      vars: C
    };
  }), g) {
    const {
      css: p,
      vars: x,
      varsWithDefaults: C
    } = vf(g, t);
    f = gt(f, C), y[a] = {
      css: p,
      vars: x
    };
  }
  function S(p, x) {
    var k, E;
    let C = o;
    if (o === "class" && (C = ".%s"), o === "data" && (C = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (C = `[${o}="%s"]`), p) {
      if (C === "media")
        return e.defaultColorScheme === p ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (k = s[p]) == null ? void 0 : k.palette) == null ? void 0 : E.mode) || p})`]: {
            ":root": x
          }
        };
      if (C)
        return e.defaultColorScheme === p ? `:root, ${C.replace("%s", String(p))}` : C.replace("%s", String(p));
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
        vars: x
      }]) => {
        p = gt(p, x);
      }), p;
    },
    generateStyleSheets: () => {
      var T, M;
      const p = [], x = e.defaultColorScheme || "light";
      function C(b, P) {
        Object.keys(P).length && p.push(typeof b == "string" ? {
          [b]: {
            ...P
          }
        } : b);
      }
      C(n(void 0, {
        ...c
      }), c);
      const {
        [x]: k,
        ...E
      } = y;
      if (k) {
        const {
          css: b
        } = k, P = (M = (T = s[x]) == null ? void 0 : T.palette) == null ? void 0 : M.mode, N = !r && P ? {
          colorScheme: P,
          ...b
        } : {
          ...b
        };
        C(n(x, {
          ...N
        }), N);
      }
      return Object.entries(E).forEach(([b, {
        css: P
      }]) => {
        var D, L;
        const N = (L = (D = s[b]) == null ? void 0 : D.palette) == null ? void 0 : L.mode, j = !r && N ? {
          colorScheme: N,
          ...P
        } : {
          ...P
        };
        C(n(b, {
          ...j
        }), j);
      }), p;
    }
  };
}
function q2(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const X2 = (e, t) => e.filter((n) => t.includes(n)), zi = (e, t, n) => {
  const r = e.keys[0];
  Array.isArray(t) ? t.forEach((o, s) => {
    n((i, a) => {
      s <= e.keys.length - 1 && (s === 0 ? Object.assign(i, a) : i[e.up(e.keys[s])] = a);
    }, o);
  }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : X2(e.keys, Object.keys(t))).forEach((s) => {
    if (e.keys.includes(s)) {
      const i = t[s];
      i !== void 0 && n((a, l) => {
        r === s ? Object.assign(a, l) : a[e.up(s)] = l;
      }, i);
    }
  }) : (typeof t == "number" || typeof t == "string") && n((o, s) => {
    Object.assign(o, s);
  }, t);
};
function fc(e) {
  return `--Grid-${e}Spacing`;
}
function gd(e) {
  return `--Grid-parent-${e}Spacing`;
}
const a0 = "--Grid-columns", ni = "--Grid-parent-columns", Y2 = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return zi(e.breakpoints, t.size, (r, o) => {
    let s = {};
    o === "grow" && (s = {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: "100%"
    }), o === "auto" && (s = {
      flexBasis: "auto",
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "none",
      width: "auto"
    }), typeof o == "number" && (s = {
      flexGrow: 0,
      flexBasis: "auto",
      width: `calc(100% * ${o} / var(${ni}) - (var(${ni}) - ${o}) * (var(${gd("column")}) / var(${ni})))`
    }), r(n, s);
  }), n;
}, J2 = ({
  theme: e,
  ownerState: t
}) => {
  const n = {};
  return zi(e.breakpoints, t.offset, (r, o) => {
    let s = {};
    o === "auto" && (s = {
      marginLeft: "auto"
    }), typeof o == "number" && (s = {
      marginLeft: o === 0 ? "0px" : `calc(100% * ${o} / var(${ni}) + var(${gd("column")}) * ${o} / var(${ni}))`
    }), r(n, s);
  }), n;
}, eT = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {
    [a0]: 12
  };
  return zi(e.breakpoints, t.columns, (r, o) => {
    const s = o ?? 12;
    r(n, {
      [a0]: s,
      "> *": {
        [ni]: s
      }
    });
  }), n;
}, tT = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return zi(e.breakpoints, t.rowSpacing, (r, o) => {
    var i;
    const s = typeof o == "string" ? o : (i = e.spacing) == null ? void 0 : i.call(e, o);
    r(n, {
      [fc("row")]: s,
      "> *": {
        [gd("row")]: s
      }
    });
  }), n;
}, nT = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return zi(e.breakpoints, t.columnSpacing, (r, o) => {
    var i;
    const s = typeof o == "string" ? o : (i = e.spacing) == null ? void 0 : i.call(e, o);
    r(n, {
      [fc("column")]: s,
      "> *": {
        [gd("column")]: s
      }
    });
  }), n;
}, rT = ({
  theme: e,
  ownerState: t
}) => {
  if (!t.container)
    return {};
  const n = {};
  return zi(e.breakpoints, t.direction, (r, o) => {
    r(n, {
      flexDirection: o
    });
  }), n;
}, oT = ({
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
    gap: `var(${fc("row")}) var(${fc("column")})`
  }
}), sT = (e) => {
  const t = [];
  return Object.entries(e).forEach(([n, r]) => {
    r !== !1 && r !== void 0 && t.push(`grid-${n}-${String(r)}`);
  }), t;
}, iT = (e, t = "xs") => {
  function n(r) {
    return r === void 0 ? !1 : typeof r == "string" && !Number.isNaN(Number(r)) || typeof r == "number" && r > 0;
  }
  if (n(e))
    return [`spacing-${t}-${String(e)}`];
  if (typeof e == "object" && !Array.isArray(e)) {
    const r = [];
    return Object.entries(e).forEach(([o, s]) => {
      n(s) && r.push(`spacing-${o}-${String(s)}`);
    }), r;
  }
  return [];
}, aT = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [`direction-xs-${String(e)}`], lT = Ml(), uT = bx("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function cT(e) {
  return Sx({
    props: e,
    name: "MuiGrid",
    defaultTheme: lT
  });
}
function dT(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = uT,
    useThemeProps: n = cT,
    useTheme: r = Il,
    componentName: o = "MuiGrid"
  } = e, s = (u, c) => {
    const {
      container: d,
      direction: f,
      spacing: y,
      wrap: g,
      size: v
    } = u, S = {
      root: ["root", d && "container", g !== "wrap" && `wrap-xs-${String(g)}`, ...aT(f), ...sT(v), ...d ? iT(y, c.breakpoints.keys[0]) : []]
    };
    return ke(S, (m) => Se(o, m), {});
  };
  function i(u, c, d = () => !0) {
    const f = {};
    return u === null || (Array.isArray(u) ? u.forEach((y, g) => {
      y !== null && d(y) && c.keys[g] && (f[c.keys[g]] = y);
    }) : typeof u == "object" ? Object.keys(u).forEach((y) => {
      const g = u[y];
      g != null && d(g) && (f[y] = g);
    }) : f[c.keys[0]] = u), f;
  }
  const a = t(eT, nT, tT, Y2, rT, oT, J2), l = /* @__PURE__ */ w.forwardRef(function(c, d) {
    const f = r(), y = n(c), g = hd(y), {
      className: v,
      children: S,
      columns: m = 12,
      container: h = !1,
      component: p = "div",
      direction: x = "row",
      wrap: C = "wrap",
      size: k = {},
      offset: E = {},
      spacing: T = 0,
      rowSpacing: M = T,
      columnSpacing: b = T,
      unstable_level: P = 0,
      ...N
    } = g, j = i(k, f.breakpoints, (Q) => Q !== !1), D = i(E, f.breakpoints), L = c.columns ?? (P ? void 0 : m), B = c.spacing ?? (P ? void 0 : T), W = c.rowSpacing ?? c.spacing ?? (P ? void 0 : M), A = c.columnSpacing ?? c.spacing ?? (P ? void 0 : b), $ = {
      ...g,
      level: P,
      columns: L,
      container: h,
      direction: x,
      wrap: C,
      spacing: B,
      rowSpacing: W,
      columnSpacing: A,
      size: j,
      offset: D
    }, U = s($, f);
    return /* @__PURE__ */ _.jsx(a, {
      ref: d,
      as: p,
      ownerState: $,
      className: ee(U.root, v),
      ...N,
      children: w.Children.map(S, (Q) => {
        var ue;
        return /* @__PURE__ */ w.isValidElement(Q) && Mu(Q, ["Grid"]) && h && Q.props.container ? /* @__PURE__ */ w.cloneElement(Q, {
          unstable_level: ((ue = Q.props) == null ? void 0 : ue.unstable_level) ?? P + 1
        }) : Q;
      })
    });
  });
  return l.muiName = "Grid", l;
}
const fT = Ml(), pT = bx("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function hT(e) {
  return Sx({
    props: e,
    name: "MuiStack",
    defaultTheme: fT
  });
}
function mT(e, t) {
  const n = w.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, s) => (r.push(o), s < n.length - 1 && r.push(/* @__PURE__ */ w.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const yT = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], gT = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Zn({
      theme: t
    }, mf({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = ld(t), o = Object.keys(t.breakpoints.values).reduce((l, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (l[u] = !0), l), {}), s = mf({
      values: e.direction,
      base: o
    }), i = mf({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((l, u, c) => {
      if (!s[l]) {
        const f = u > 0 ? s[c[u - 1]] : "column";
        s[l] = f;
      }
    }), n = gt(n, Zn({
      theme: t
    }, i, (l, u) => e.useFlexGap ? {
      gap: us(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${yT(u ? s[u] : e.direction)}`]: us(r, l)
      }
    }));
  }
  return n = hE(t.breakpoints, n), n;
};
function vT(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = pT,
    useThemeProps: n = hT,
    componentName: r = "MuiStack"
  } = e, o = () => ke({
    root: ["root"]
  }, (l) => Se(r, l), {}), s = t(gT);
  return /* @__PURE__ */ w.forwardRef(function(l, u) {
    const c = n(l), d = hd(c), {
      component: f = "div",
      direction: y = "column",
      spacing: g = 0,
      divider: v,
      children: S,
      className: m,
      useFlexGap: h = !1,
      ...p
    } = d, x = {
      direction: y,
      spacing: g,
      useFlexGap: h
    }, C = o();
    return /* @__PURE__ */ _.jsx(s, {
      as: f,
      ownerState: x,
      ref: u,
      className: ee(C.root, m),
      ...p,
      children: v ? mT(S, v) : S
    });
  });
}
function Fx() {
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
      paper: Qa.white,
      default: Qa.white
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
const bT = Fx();
function jx() {
  return {
    text: {
      primary: Qa.white,
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
      active: Qa.white,
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
const l0 = jx();
function u0(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Km(e.main, o) : t === "dark" && (e.dark = Hm(e.main, s)));
}
function xT(e = "light") {
  return e === "dark" ? {
    main: Es[200],
    light: Es[50],
    dark: Es[400]
  } : {
    main: Es[700],
    light: Es[400],
    dark: Es[800]
  };
}
function ST(e = "light") {
  return e === "dark" ? {
    main: ks[200],
    light: ks[50],
    dark: ks[400]
  } : {
    main: ks[500],
    light: ks[300],
    dark: ks[700]
  };
}
function wT(e = "light") {
  return e === "dark" ? {
    main: _s[500],
    light: _s[300],
    dark: _s[700]
  } : {
    main: _s[700],
    light: _s[400],
    dark: _s[800]
  };
}
function CT(e = "light") {
  return e === "dark" ? {
    main: Ts[400],
    light: Ts[300],
    dark: Ts[700]
  } : {
    main: Ts[700],
    light: Ts[500],
    dark: Ts[900]
  };
}
function _T(e = "light") {
  return e === "dark" ? {
    main: Rs[400],
    light: Rs[300],
    dark: Rs[700]
  } : {
    main: Rs[800],
    light: Rs[500],
    dark: Rs[900]
  };
}
function kT(e = "light") {
  return e === "dark" ? {
    main: ea[400],
    light: ea[300],
    dark: ea[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ea[500],
    dark: ea[900]
  };
}
function Xm(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, s = e.primary || xT(t), i = e.secondary || ST(t), a = e.error || wT(t), l = e.info || CT(t), u = e.success || _T(t), c = e.warning || kT(t);
  function d(v) {
    return C2(v, l0.text.primary) >= n ? l0.text.primary : bT.text.primary;
  }
  const f = ({
    color: v,
    name: S,
    mainShade: m = 500,
    lightShade: h = 300,
    darkShade: p = 700
  }) => {
    if (v = {
      ...v
    }, !v.main && v[m] && (v.main = v[m]), !v.hasOwnProperty("main"))
      throw new Error(Br(11, S ? ` (${S})` : "", m));
    if (typeof v.main != "string")
      throw new Error(Br(12, S ? ` (${S})` : "", JSON.stringify(v.main)));
    return u0(v, "light", h, r), u0(v, "dark", p, r), v.contrastText || (v.contrastText = d(v.main)), v;
  };
  let y;
  return t === "light" ? y = Fx() : t === "dark" && (y = jx()), gt({
    // A collection of common colors.
    common: {
      ...Qa
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: i,
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
    grey: Y_,
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
function ET(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, s] = r;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function TT(e, t) {
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
function RT(e) {
  return Math.round(e * 1e5) / 1e5;
}
const c0 = {
  textTransform: "uppercase"
}, d0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function zx(e, t) {
  const {
    fontFamily: n = d0,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: c,
    ...d
  } = typeof t == "function" ? t(e) : t, f = r / 14, y = c || ((S) => `${S / l * f}rem`), g = (S, m, h, p, x) => ({
    fontFamily: n,
    fontWeight: S,
    fontSize: y(m),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === d0 ? {
      letterSpacing: `${RT(p / m)}em`
    } : {},
    ...x,
    ...u
  }), v = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(s, 48, 1.167, 0),
    h4: g(s, 34, 1.235, 0.25),
    h5: g(s, 24, 1.334, 0),
    h6: g(i, 20, 1.6, 0.15),
    subtitle1: g(s, 16, 1.75, 0.15),
    subtitle2: g(i, 14, 1.57, 0.1),
    body1: g(s, 16, 1.5, 0.15),
    body2: g(s, 14, 1.43, 0.15),
    button: g(i, 14, 1.75, 0.4, c0),
    caption: g(s, 12, 1.66, 0.4),
    overline: g(s, 12, 2.66, 1, c0),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return gt({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: a,
    ...v
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const PT = 0.2, MT = 0.14, IT = 0.12;
function He(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${PT})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${MT})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${IT})`].join(",");
}
const OT = ["none", He(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), He(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), He(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), He(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), He(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), He(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), He(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), He(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), He(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), He(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), He(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), He(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), He(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), He(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), He(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), He(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), He(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), He(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), He(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), He(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), He(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), He(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), He(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), He(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], AT = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, $T = {
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
function NT(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function LT(e) {
  const t = {
    ...AT,
    ...e.easing
  }, n = {
    ...$T,
    ...e.duration
  };
  return {
    getAutoHeightDuration: NT,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0,
        ...u
      } = s;
      return (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof i == "string" ? i : f0(i)} ${a} ${typeof l == "string" ? l : f0(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const FT = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function jT(e) {
  return dr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Dx(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let s = 0; s < o.length; s++) {
      const [i, a] = o[s];
      !jT(a) || i.startsWith("unstable_") ? delete r[i] : dr(a) && (r[i] = {
        ...a
      }, n(r[i]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function $p(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: s = {},
    transitions: i = {},
    typography: a = {},
    shape: l,
    ...u
  } = e;
  if (e.vars)
    throw new Error(Br(20));
  const c = Xm(s), d = Ml(e);
  let f = gt(d, {
    mixins: TT(d.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: OT.slice(),
    typography: zx(c, a),
    transitions: LT(i),
    zIndex: {
      ...FT
    }
  });
  return f = gt(f, u), f = t.reduce((y, g) => gt(y, g), f), f.unstable_sxConfig = {
    ...Pl,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, f.unstable_sx = function(g) {
    return _o({
      sx: g,
      theme: this
    });
  }, f.toRuntimeSource = Dx, f;
}
function Np(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const zT = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Np(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Bx(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ux(e) {
  return e === "dark" ? zT : [];
}
function DT(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, s = Xm(t);
  return {
    palette: s,
    opacity: {
      ...Bx(s.mode),
      ...n
    },
    overlays: r || Ux(s.mode),
    ...o
  };
}
function BT(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const UT = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], VT = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return UT(e.cssVarPrefix).forEach((a) => {
        i[a] = n[a], delete n[a];
      }), s === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: i
        }
      } : s ? {
        [s.replace("%s", t)]: i,
        [`${r}, ${s.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...i
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function WT(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function O(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function pa(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Cx(e);
}
function Cr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = fa(pa(e[t])));
}
function HT(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const er = (e) => {
  try {
    return e();
  } catch {
  }
}, KT = (e = "mui") => K2(e);
function bf(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = DT({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: s,
    ...i
  } = $p({
    ...n,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: s,
    opacity: {
      ...Bx(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Ux(o)
  }, i;
}
function QT(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    shouldSkipGeneratingVar: i = BT,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...u
  } = e, c = Object.keys(n)[0], d = r || (n.light && c !== "light" ? "light" : c), f = KT(s), {
    [d]: y,
    light: g,
    dark: v,
    ...S
  } = n, m = {
    ...S
  };
  let h = y;
  if ((d === "dark" && !("dark" in n) || d === "light" && !("light" in n)) && (h = !0), !h)
    throw new Error(Br(21, d));
  const p = bf(m, h, u, d);
  g && !m.light && bf(m, g, void 0, "light"), v && !m.dark && bf(m, v, void 0, "dark");
  let x = {
    defaultColorScheme: d,
    ...p,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    rootSelector: l,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...ET(p.typography),
      ...p.font
    },
    spacing: HT(u.spacing)
  };
  Object.keys(x.colorSchemes).forEach((M) => {
    const b = x.colorSchemes[M].palette, P = (N) => {
      const j = N.split("-"), D = j[1], L = j[2];
      return f(N, b[D][L]);
    };
    if (b.mode === "light" && (O(b.common, "background", "#fff"), O(b.common, "onBackground", "#000")), b.mode === "dark" && (O(b.common, "background", "#000"), O(b.common, "onBackground", "#fff")), WT(b, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), b.mode === "light") {
      O(b.Alert, "errorColor", Ne(b.error.light, 0.6)), O(b.Alert, "infoColor", Ne(b.info.light, 0.6)), O(b.Alert, "successColor", Ne(b.success.light, 0.6)), O(b.Alert, "warningColor", Ne(b.warning.light, 0.6)), O(b.Alert, "errorFilledBg", P("palette-error-main")), O(b.Alert, "infoFilledBg", P("palette-info-main")), O(b.Alert, "successFilledBg", P("palette-success-main")), O(b.Alert, "warningFilledBg", P("palette-warning-main")), O(b.Alert, "errorFilledColor", er(() => b.getContrastText(b.error.main))), O(b.Alert, "infoFilledColor", er(() => b.getContrastText(b.info.main))), O(b.Alert, "successFilledColor", er(() => b.getContrastText(b.success.main))), O(b.Alert, "warningFilledColor", er(() => b.getContrastText(b.warning.main))), O(b.Alert, "errorStandardBg", Le(b.error.light, 0.9)), O(b.Alert, "infoStandardBg", Le(b.info.light, 0.9)), O(b.Alert, "successStandardBg", Le(b.success.light, 0.9)), O(b.Alert, "warningStandardBg", Le(b.warning.light, 0.9)), O(b.Alert, "errorIconColor", P("palette-error-main")), O(b.Alert, "infoIconColor", P("palette-info-main")), O(b.Alert, "successIconColor", P("palette-success-main")), O(b.Alert, "warningIconColor", P("palette-warning-main")), O(b.AppBar, "defaultBg", P("palette-grey-100")), O(b.Avatar, "defaultBg", P("palette-grey-400")), O(b.Button, "inheritContainedBg", P("palette-grey-300")), O(b.Button, "inheritContainedHoverBg", P("palette-grey-A100")), O(b.Chip, "defaultBorder", P("palette-grey-400")), O(b.Chip, "defaultAvatarColor", P("palette-grey-700")), O(b.Chip, "defaultIconColor", P("palette-grey-700")), O(b.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), O(b.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), O(b.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), O(b.LinearProgress, "primaryBg", Le(b.primary.main, 0.62)), O(b.LinearProgress, "secondaryBg", Le(b.secondary.main, 0.62)), O(b.LinearProgress, "errorBg", Le(b.error.main, 0.62)), O(b.LinearProgress, "infoBg", Le(b.info.main, 0.62)), O(b.LinearProgress, "successBg", Le(b.success.main, 0.62)), O(b.LinearProgress, "warningBg", Le(b.warning.main, 0.62)), O(b.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.11)`), O(b.Slider, "primaryTrack", Le(b.primary.main, 0.62)), O(b.Slider, "secondaryTrack", Le(b.secondary.main, 0.62)), O(b.Slider, "errorTrack", Le(b.error.main, 0.62)), O(b.Slider, "infoTrack", Le(b.info.main, 0.62)), O(b.Slider, "successTrack", Le(b.success.main, 0.62)), O(b.Slider, "warningTrack", Le(b.warning.main, 0.62));
      const N = iu(b.background.default, 0.8);
      O(b.SnackbarContent, "bg", N), O(b.SnackbarContent, "color", er(() => b.getContrastText(N))), O(b.SpeedDialAction, "fabHoverBg", iu(b.background.paper, 0.15)), O(b.StepConnector, "border", P("palette-grey-400")), O(b.StepContent, "border", P("palette-grey-400")), O(b.Switch, "defaultColor", P("palette-common-white")), O(b.Switch, "defaultDisabledColor", P("palette-grey-100")), O(b.Switch, "primaryDisabledColor", Le(b.primary.main, 0.62)), O(b.Switch, "secondaryDisabledColor", Le(b.secondary.main, 0.62)), O(b.Switch, "errorDisabledColor", Le(b.error.main, 0.62)), O(b.Switch, "infoDisabledColor", Le(b.info.main, 0.62)), O(b.Switch, "successDisabledColor", Le(b.success.main, 0.62)), O(b.Switch, "warningDisabledColor", Le(b.warning.main, 0.62)), O(b.TableCell, "border", Le(su(b.divider, 1), 0.88)), O(b.Tooltip, "bg", su(b.grey[700], 0.92));
    }
    if (b.mode === "dark") {
      O(b.Alert, "errorColor", Le(b.error.light, 0.6)), O(b.Alert, "infoColor", Le(b.info.light, 0.6)), O(b.Alert, "successColor", Le(b.success.light, 0.6)), O(b.Alert, "warningColor", Le(b.warning.light, 0.6)), O(b.Alert, "errorFilledBg", P("palette-error-dark")), O(b.Alert, "infoFilledBg", P("palette-info-dark")), O(b.Alert, "successFilledBg", P("palette-success-dark")), O(b.Alert, "warningFilledBg", P("palette-warning-dark")), O(b.Alert, "errorFilledColor", er(() => b.getContrastText(b.error.dark))), O(b.Alert, "infoFilledColor", er(() => b.getContrastText(b.info.dark))), O(b.Alert, "successFilledColor", er(() => b.getContrastText(b.success.dark))), O(b.Alert, "warningFilledColor", er(() => b.getContrastText(b.warning.dark))), O(b.Alert, "errorStandardBg", Ne(b.error.light, 0.9)), O(b.Alert, "infoStandardBg", Ne(b.info.light, 0.9)), O(b.Alert, "successStandardBg", Ne(b.success.light, 0.9)), O(b.Alert, "warningStandardBg", Ne(b.warning.light, 0.9)), O(b.Alert, "errorIconColor", P("palette-error-main")), O(b.Alert, "infoIconColor", P("palette-info-main")), O(b.Alert, "successIconColor", P("palette-success-main")), O(b.Alert, "warningIconColor", P("palette-warning-main")), O(b.AppBar, "defaultBg", P("palette-grey-900")), O(b.AppBar, "darkBg", P("palette-background-paper")), O(b.AppBar, "darkColor", P("palette-text-primary")), O(b.Avatar, "defaultBg", P("palette-grey-600")), O(b.Button, "inheritContainedBg", P("palette-grey-800")), O(b.Button, "inheritContainedHoverBg", P("palette-grey-700")), O(b.Chip, "defaultBorder", P("palette-grey-700")), O(b.Chip, "defaultAvatarColor", P("palette-grey-300")), O(b.Chip, "defaultIconColor", P("palette-grey-300")), O(b.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), O(b.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), O(b.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), O(b.LinearProgress, "primaryBg", Ne(b.primary.main, 0.5)), O(b.LinearProgress, "secondaryBg", Ne(b.secondary.main, 0.5)), O(b.LinearProgress, "errorBg", Ne(b.error.main, 0.5)), O(b.LinearProgress, "infoBg", Ne(b.info.main, 0.5)), O(b.LinearProgress, "successBg", Ne(b.success.main, 0.5)), O(b.LinearProgress, "warningBg", Ne(b.warning.main, 0.5)), O(b.Skeleton, "bg", `rgba(${P("palette-text-primaryChannel")} / 0.13)`), O(b.Slider, "primaryTrack", Ne(b.primary.main, 0.5)), O(b.Slider, "secondaryTrack", Ne(b.secondary.main, 0.5)), O(b.Slider, "errorTrack", Ne(b.error.main, 0.5)), O(b.Slider, "infoTrack", Ne(b.info.main, 0.5)), O(b.Slider, "successTrack", Ne(b.success.main, 0.5)), O(b.Slider, "warningTrack", Ne(b.warning.main, 0.5));
      const N = iu(b.background.default, 0.98);
      O(b.SnackbarContent, "bg", N), O(b.SnackbarContent, "color", er(() => b.getContrastText(N))), O(b.SpeedDialAction, "fabHoverBg", iu(b.background.paper, 0.15)), O(b.StepConnector, "border", P("palette-grey-600")), O(b.StepContent, "border", P("palette-grey-600")), O(b.Switch, "defaultColor", P("palette-grey-300")), O(b.Switch, "defaultDisabledColor", P("palette-grey-600")), O(b.Switch, "primaryDisabledColor", Ne(b.primary.main, 0.55)), O(b.Switch, "secondaryDisabledColor", Ne(b.secondary.main, 0.55)), O(b.Switch, "errorDisabledColor", Ne(b.error.main, 0.55)), O(b.Switch, "infoDisabledColor", Ne(b.info.main, 0.55)), O(b.Switch, "successDisabledColor", Ne(b.success.main, 0.55)), O(b.Switch, "warningDisabledColor", Ne(b.warning.main, 0.55)), O(b.TableCell, "border", Ne(su(b.divider, 1), 0.68)), O(b.Tooltip, "bg", su(b.grey[700], 0.92));
    }
    Cr(b.background, "default"), Cr(b.background, "paper"), Cr(b.common, "background"), Cr(b.common, "onBackground"), Cr(b, "divider"), Object.keys(b).forEach((N) => {
      const j = b[N];
      N !== "tonalOffset" && j && typeof j == "object" && (j.main && O(b[N], "mainChannel", fa(pa(j.main))), j.light && O(b[N], "lightChannel", fa(pa(j.light))), j.dark && O(b[N], "darkChannel", fa(pa(j.dark))), j.contrastText && O(b[N], "contrastTextChannel", fa(pa(j.contrastText))), N === "text" && (Cr(b[N], "primary"), Cr(b[N], "secondary")), N === "action" && (j.active && Cr(b[N], "active"), j.selected && Cr(b[N], "selected")));
    });
  }), x = t.reduce((M, b) => gt(M, b), x);
  const C = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: i,
    getSelector: VT(x)
  }, {
    vars: k,
    generateThemeVars: E,
    generateStyleSheets: T
  } = G2(x, C);
  return x.vars = k, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([M, b]) => {
    x[M] = b;
  }), x.generateThemeVars = E, x.generateStyleSheets = T, x.generateSpacing = function() {
    return px(u.spacing, ld(this));
  }, x.getColorSchemeSelector = q2(a), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = i, x.unstable_sxConfig = {
    ...Pl,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, x.unstable_sx = function(b) {
    return _o({
      sx: b,
      theme: this
    });
  }, x.toRuntimeSource = Dx, x;
}
function p0(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Xm({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function vd(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...i
  } = e, a = s || "light", l = o == null ? void 0 : o[a], u = {
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
      return $p(e, ...t);
    let c = n;
    "palette" in e || u[a] && (u[a] !== !0 ? c = u[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const d = $p({
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
  return !n && !("light" in u) && a === "light" && (u.light = !0), QT({
    ...i,
    colorSchemes: u,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ym = vd();
function $o() {
  const e = Il(Ym);
  return e[Hn] || e;
}
function Vx(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xn = (e) => Vx(e) && e !== "classes", G = vx({
  themeId: Hn,
  defaultTheme: Ym,
  rootShouldForwardProp: Xn
});
function h0({
  theme: e,
  ...t
}) {
  const n = Hn in e ? e[Hn] : void 0;
  return /* @__PURE__ */ _.jsx(Nx, {
    ...t,
    themeId: n ? Hn : void 0,
    theme: n || e
  });
}
const au = {
  attribute: "data-mui-color-scheme",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: ZT,
  useColorScheme: S$,
  getInitColorSchemeScript: w$
} = H2({
  themeId: Hn,
  // @ts-ignore ignore module augmentation tests
  theme: () => vd({
    cssVariables: !0
  }),
  colorSchemeStorageKey: au.colorSchemeStorageKey,
  modeStorageKey: au.modeStorageKey,
  defaultColorScheme: {
    light: au.defaultLightColorScheme,
    dark: au.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: zx(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return _o({
        sx: r,
        theme: this
      });
    }, t;
  }
}), GT = ZT;
function qT({
  theme: e,
  ...t
}) {
  return typeof e == "function" ? /* @__PURE__ */ _.jsx(h0, {
    theme: e,
    ...t
  }) : "colorSchemes" in (Hn in e ? e[Hn] : e) ? /* @__PURE__ */ _.jsx(GT, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ _.jsx(h0, {
    theme: e,
    ...t
  });
}
function XT(e) {
  return /* @__PURE__ */ _.jsx(o2, {
    ...e,
    defaultTheme: Ym,
    themeId: Hn
  });
}
function Jm(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ _.jsx(XT, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
function YT() {
  return hd;
}
const Ie = z2;
function we(e) {
  return j2(e);
}
function JT(e) {
  return Se("MuiSvgIcon", e);
}
_e("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const eR = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`]
  };
  return ke(o, JT, r);
}, tR = G("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${X(n.color)}`], t[`fontSize${X(n.fontSize)}`]];
  }
})(Ie(({
  theme: e
}) => {
  var t, n, r, o, s, i, a, l, u, c, d, f, y, g;
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
          fontSize: ((i = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem"
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
        var S, m;
        return {
          props: {
            color: v
          },
          style: {
            color: (m = (S = (e.vars ?? e).palette) == null ? void 0 : S[v]) == null ? void 0 : m.main
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
})), Lp = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: c = !1,
    titleAccess: d,
    viewBox: f = "0 0 24 24",
    ...y
  } = r, g = /* @__PURE__ */ w.isValidElement(o) && o.type === "svg", v = {
    ...r,
    color: i,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: f,
    hasSvgAsChild: g
  }, S = {};
  c || (S.viewBox = f);
  const m = eR(v);
  return /* @__PURE__ */ _.jsxs(tR, {
    as: a,
    className: ee(m.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": d ? void 0 : !0,
    role: d ? "img" : void 0,
    ref: n,
    ...S,
    ...y,
    ...g && o.props,
    ownerState: v,
    children: [g ? o.props.children : o, d ? /* @__PURE__ */ _.jsx("title", {
      children: d
    }) : null]
  });
});
Lp.muiName = "SvgIcon";
function on(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ _.jsx(Lp, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Lp.muiName, /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(n));
}
function Wx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.includes(r)) continue;
    n[r] = e[r];
  }
  return n;
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Fp(e, t);
}
function Hx(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fp(e, t);
}
const m0 = {
  disabled: !1
}, pc = le.createContext(null);
var nR = function(t) {
  return t.scrollTop;
}, ha = "unmounted", zo = "exited", Do = "entering", Os = "entered", jp = "exiting", xr = /* @__PURE__ */ function(e) {
  Hx(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var i = o, a = i && !i.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? a ? (l = zo, s.appearStatus = Do) : l = Os : r.unmountOnExit || r.mountOnEnter ? l = ha : l = zo, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(o, s) {
    var i = o.in;
    return i && s.status === ha ? {
      status: zo
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var s = null;
    if (o !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Do && i !== Os && (s = Do) : (i === Do || i === Os) && (s = jp);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, s, i, a;
    return s = i = a = o, o != null && typeof o != "number" && (s = o.exit, i = o.enter, a = o.appear !== void 0 ? o.appear : i), {
      exit: s,
      enter: i,
      appear: a
    };
  }, n.updateStatus = function(o, s) {
    if (o === void 0 && (o = !1), s !== null)
      if (this.cancelNextCallback(), s === Do) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : ru.findDOMNode(this);
          i && nR(i);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === zo && this.setState({
      status: ha
    });
  }, n.performEnter = function(o) {
    var s = this, i = this.props.enter, a = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [a] : [ru.findDOMNode(this), a], u = l[0], c = l[1], d = this.getTimeouts(), f = a ? d.appear : d.enter;
    if (!o && !i || m0.disabled) {
      this.safeSetState({
        status: Os
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, c), this.safeSetState({
      status: Do
    }, function() {
      s.props.onEntering(u, c), s.onTransitionEnd(f, function() {
        s.safeSetState({
          status: Os
        }, function() {
          s.props.onEntered(u, c);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, s = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ru.findDOMNode(this);
    if (!s || m0.disabled) {
      this.safeSetState({
        status: zo
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: jp
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(i.exit, function() {
        o.safeSetState({
          status: zo
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, s) {
    s = this.setNextCallback(s), this.setState(o, s);
  }, n.setNextCallback = function(o) {
    var s = this, i = !0;
    return this.nextCallback = function(a) {
      i && (i = !1, s.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, s) {
    this.setNextCallback(s);
    var i = this.props.nodeRef ? this.props.nodeRef.current : ru.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!i || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], u = l[0], c = l[1];
      this.props.addEndListener(u, c);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === ha)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var a = Wx(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ le.createElement(pc.Provider, {
        value: null
      }, typeof i == "function" ? i(o, a) : le.cloneElement(le.Children.only(i), a))
    );
  }, t;
}(le.Component);
xr.contextType = pc;
xr.propTypes = {};
function Ps() {
}
xr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ps,
  onEntering: Ps,
  onEntered: Ps,
  onExit: Ps,
  onExiting: Ps,
  onExited: Ps
};
xr.UNMOUNTED = ha;
xr.EXITED = zo;
xr.ENTERING = Do;
xr.ENTERED = Os;
xr.EXITING = jp;
function rR(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ey(e, t) {
  var n = function(s) {
    return t && w.isValidElement(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && w.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function oR(e, t) {
  e = e || {}, t = t || {};
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var s in e)
    s in t ? o.length && (r[s] = o, o = []) : o.push(s);
  var i, a = {};
  for (var l in t) {
    if (r[l])
      for (i = 0; i < r[l].length; i++) {
        var u = r[l][i];
        a[r[l][i]] = n(u);
      }
    a[l] = n(l);
  }
  for (i = 0; i < o.length; i++)
    a[o[i]] = n(o[i]);
  return a;
}
function Ho(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function sR(e, t) {
  return ey(e.children, function(n) {
    return w.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Ho(n, "appear", e),
      enter: Ho(n, "enter", e),
      exit: Ho(n, "exit", e)
    });
  });
}
function iR(e, t, n) {
  var r = ey(e.children), o = oR(t, r);
  return Object.keys(o).forEach(function(s) {
    var i = o[s];
    if (w.isValidElement(i)) {
      var a = s in t, l = s in r, u = t[s], c = w.isValidElement(u) && !u.props.in;
      l && (!a || c) ? o[s] = w.cloneElement(i, {
        onExited: n.bind(null, i),
        in: !0,
        exit: Ho(i, "exit", e),
        enter: Ho(i, "enter", e)
      }) : !l && a && !c ? o[s] = w.cloneElement(i, {
        in: !1
      }) : l && a && w.isValidElement(u) && (o[s] = w.cloneElement(i, {
        onExited: n.bind(null, i),
        in: u.props.in,
        exit: Ho(i, "exit", e),
        enter: Ho(i, "enter", e)
      }));
    }
  }), o;
}
var aR = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, lR = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ty = /* @__PURE__ */ function(e) {
  Hx(t, e);
  function t(r, o) {
    var s;
    s = e.call(this, r, o) || this;
    var i = s.handleExited.bind(rR(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
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
  }, t.getDerivedStateFromProps = function(o, s) {
    var i = s.children, a = s.handleExited, l = s.firstRender;
    return {
      children: l ? sR(o, a) : iR(o, i, a),
      firstRender: !1
    };
  }, n.handleExited = function(o, s) {
    var i = ey(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(s), this.mounted && this.setState(function(a) {
      var l = lc({}, a.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var o = this.props, s = o.component, i = o.childFactory, a = Wx(o, ["component", "childFactory"]), l = this.state.contextValue, u = aR(this.state.children).map(i);
    return delete a.appear, delete a.enter, delete a.exit, s === null ? /* @__PURE__ */ le.createElement(pc.Provider, {
      value: l
    }, u) : /* @__PURE__ */ le.createElement(pc.Provider, {
      value: l
    }, /* @__PURE__ */ le.createElement(s, a, u));
  }, t;
}(le.Component);
ty.propTypes = {};
ty.defaultProps = lR;
const Kx = (e) => e.scrollTop;
function hc(e, t) {
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
function uR(e) {
  return Se("MuiPaper", e);
}
_e("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const cR = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ke(s, uR, o);
}, dR = G("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Ie(({
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
}))), Tn = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var y;
  const r = we({
    props: t,
    name: "MuiPaper"
  }), o = $o(), {
    className: s,
    component: i = "div",
    elevation: a = 1,
    square: l = !1,
    variant: u = "elevation",
    ...c
  } = r, d = {
    ...r,
    component: i,
    elevation: a,
    square: l,
    variant: u
  }, f = cR(d);
  return /* @__PURE__ */ _.jsx(dR, {
    as: i,
    ownerState: d,
    className: ee(f.root, s),
    ref: n,
    ...c,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Xt("#fff", Np(a))}, ${Xt("#fff", Np(a))})`
        }
      },
      ...c.style
    }
  });
});
function Rn(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: s,
    internalForwardedProps: i,
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
  } = s, f = u[e] || r, y = Ix(c[e], o), {
    props: {
      component: g,
      ...v
    },
    internalRef: S
  } = Mx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: y
  }), m = Ft(S, y == null ? void 0 : y.ref, t.ref), h = e === "root" ? g || l : g, p = Rx(f, {
    ...e === "root" && !l && !u[e] && i,
    ...e !== "root" && !u[e] && i,
    ...v,
    ...h && {
      as: h
    },
    ref: m
  }, o);
  return [f, p];
}
class mc {
  constructor() {
    Hi(this, "mountEffect", () => {
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
    return new mc();
  }
  static use() {
    const t = kx(mc.create).current, [n, r] = w.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, w.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = pR(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function fR() {
  return mc.use();
}
function pR() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function hR(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: a,
    onExited: l,
    timeout: u
  } = e, [c, d] = w.useState(!1), f = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, g = ee(n.child, c && n.childLeaving, r && n.childPulsate);
  return !a && !c && d(!0), w.useEffect(() => {
    if (!a && l != null) {
      const v = setTimeout(l, u);
      return () => {
        clearTimeout(v);
      };
    }
  }, [l, a, u]), /* @__PURE__ */ _.jsx("span", {
    className: f,
    style: y,
    children: /* @__PURE__ */ _.jsx("span", {
      className: g
    })
  });
}
const Cn = _e("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), zp = 550, mR = 80, yR = Tl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, gR = Tl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vR = Tl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, bR = G("span", {
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
}), xR = G(hR, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Cn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yR};
    animation-duration: ${zp}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Cn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Cn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Cn.childLeaving} {
    opacity: 0;
    animation-name: ${gR};
    animation-duration: ${zp}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Cn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vR};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, SR = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: s = {},
    className: i,
    ...a
  } = r, [l, u] = w.useState([]), c = w.useRef(0), d = w.useRef(null);
  w.useEffect(() => {
    d.current && (d.current(), d.current = null);
  }, [l]);
  const f = w.useRef(!1), y = Ex(), g = w.useRef(null), v = w.useRef(null), S = w.useCallback((x) => {
    const {
      pulsate: C,
      rippleX: k,
      rippleY: E,
      rippleSize: T,
      cb: M
    } = x;
    u((b) => [...b, /* @__PURE__ */ _.jsx(xR, {
      classes: {
        ripple: ee(s.ripple, Cn.ripple),
        rippleVisible: ee(s.rippleVisible, Cn.rippleVisible),
        ripplePulsate: ee(s.ripplePulsate, Cn.ripplePulsate),
        child: ee(s.child, Cn.child),
        childLeaving: ee(s.childLeaving, Cn.childLeaving),
        childPulsate: ee(s.childPulsate, Cn.childPulsate)
      },
      timeout: zp,
      pulsate: C,
      rippleX: k,
      rippleY: E,
      rippleSize: T
    }, c.current)]), c.current += 1, d.current = M;
  }, [s]), m = w.useCallback((x = {}, C = {}, k = () => {
  }) => {
    const {
      pulsate: E = !1,
      center: T = o || C.pulsate,
      fakeElement: M = !1
      // For test purposes
    } = C;
    if ((x == null ? void 0 : x.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (f.current = !0);
    const b = M ? null : v.current, P = b ? b.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, j, D;
    if (T || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      N = Math.round(P.width / 2), j = Math.round(P.height / 2);
    else {
      const {
        clientX: L,
        clientY: B
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      N = Math.round(L - P.left), j = Math.round(B - P.top);
    }
    if (T)
      D = Math.sqrt((2 * P.width ** 2 + P.height ** 2) / 3), D % 2 === 0 && (D += 1);
    else {
      const L = Math.max(Math.abs((b ? b.clientWidth : 0) - N), N) * 2 + 2, B = Math.max(Math.abs((b ? b.clientHeight : 0) - j), j) * 2 + 2;
      D = Math.sqrt(L ** 2 + B ** 2);
    }
    x != null && x.touches ? g.current === null && (g.current = () => {
      S({
        pulsate: E,
        rippleX: N,
        rippleY: j,
        rippleSize: D,
        cb: k
      });
    }, y.start(mR, () => {
      g.current && (g.current(), g.current = null);
    })) : S({
      pulsate: E,
      rippleX: N,
      rippleY: j,
      rippleSize: D,
      cb: k
    });
  }, [o, S, y]), h = w.useCallback(() => {
    m({}, {
      pulsate: !0
    });
  }, [m]), p = w.useCallback((x, C) => {
    if (y.clear(), (x == null ? void 0 : x.type) === "touchend" && g.current) {
      g.current(), g.current = null, y.start(0, () => {
        p(x, C);
      });
      return;
    }
    g.current = null, u((k) => k.length > 0 ? k.slice(1) : k), d.current = C;
  }, [y]);
  return w.useImperativeHandle(n, () => ({
    pulsate: h,
    start: m,
    stop: p
  }), [h, m, p]), /* @__PURE__ */ _.jsx(bR, {
    className: ee(Cn.root, s.root, i),
    ref: v,
    ...a,
    children: /* @__PURE__ */ _.jsx(ty, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
function wR(e) {
  return Se("MuiButtonBase", e);
}
const CR = _e("MuiButtonBase", ["root", "disabled", "focusVisible"]), _R = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, i = ke({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, wR, o);
  return n && r && (i.root += ` ${r}`), i;
}, kR = G("button", {
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
  [`&.${CR.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Qx = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: a,
    component: l = "button",
    disabled: u = !1,
    disableRipple: c = !1,
    disableTouchRipple: d = !1,
    focusRipple: f = !1,
    focusVisibleClassName: y,
    LinkComponent: g = "a",
    onBlur: v,
    onClick: S,
    onContextMenu: m,
    onDragLeave: h,
    onFocus: p,
    onFocusVisible: x,
    onKeyDown: C,
    onKeyUp: k,
    onMouseDown: E,
    onMouseLeave: T,
    onMouseUp: M,
    onTouchEnd: b,
    onTouchMove: P,
    onTouchStart: N,
    tabIndex: j = 0,
    TouchRippleProps: D,
    touchRippleRef: L,
    type: B,
    ...W
  } = r, A = w.useRef(null), $ = fR(), U = Ft($.ref, L), [Q, ue] = w.useState(!1);
  u && Q && ue(!1), w.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ue(!0), A.current.focus();
    }
  }), []);
  const Y = $.shouldMount && !c && !u;
  w.useEffect(() => {
    Q && f && !c && $.pulsate();
  }, [c, f, Q, $]);
  const J = _r($, "start", E, d), ae = _r($, "stop", m, d), Fe = _r($, "stop", h, d), ze = _r($, "stop", M, d), zt = _r($, "stop", (te) => {
    Q && te.preventDefault(), T && T(te);
  }, d), Ve = _r($, "start", N, d), he = _r($, "stop", b, d), Re = _r($, "stop", P, d), me = _r($, "stop", (te) => {
    dc(te.target) || ue(!1), v && v(te);
  }, !1), Qe = ti((te) => {
    A.current || (A.current = te.currentTarget), dc(te.target) && (ue(!0), x && x(te)), p && p(te);
  }), ge = () => {
    const te = A.current;
    return l && l !== "button" && !(te.tagName === "A" && te.href);
  }, $e = ti((te) => {
    f && !te.repeat && Q && te.key === " " && $.stop(te, () => {
      $.start(te);
    }), te.target === te.currentTarget && ge() && te.key === " " && te.preventDefault(), C && C(te), te.target === te.currentTarget && ge() && te.key === "Enter" && !u && (te.preventDefault(), S && S(te));
  }), bt = ti((te) => {
    f && te.key === " " && Q && !te.defaultPrevented && $.stop(te, () => {
      $.pulsate(te);
    }), k && k(te), S && te.target === te.currentTarget && ge() && te.key === " " && !te.defaultPrevented && S(te);
  });
  let Ae = l;
  Ae === "button" && (W.href || W.to) && (Ae = g);
  const We = {};
  Ae === "button" ? (We.type = B === void 0 ? "button" : B, We.disabled = u) : (!W.href && !W.to && (We.role = "button"), u && (We["aria-disabled"] = u));
  const Et = Ft(n, A), Tt = {
    ...r,
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: c,
    disableTouchRipple: d,
    focusRipple: f,
    tabIndex: j,
    focusVisible: Q
  }, Ye = _R(Tt);
  return /* @__PURE__ */ _.jsxs(kR, {
    as: Ae,
    className: ee(Ye.root, a),
    ownerState: Tt,
    onBlur: me,
    onClick: S,
    onContextMenu: ae,
    onFocus: Qe,
    onKeyDown: $e,
    onKeyUp: bt,
    onMouseDown: J,
    onMouseLeave: zt,
    onMouseUp: ze,
    onDragLeave: Fe,
    onTouchEnd: he,
    onTouchMove: Re,
    onTouchStart: Ve,
    ref: Et,
    tabIndex: u ? -1 : j,
    type: B,
    ...We,
    ...W,
    children: [i, Y ? /* @__PURE__ */ _.jsx(SR, {
      ref: U,
      center: s,
      ...D
    }) : null]
  });
});
function _r(e, t, n, r = !1) {
  return ti((o) => (n && n(o), r || e[t](o), !0));
}
function ER(e) {
  return typeof e.main == "string";
}
function TR(e, t = []) {
  if (!ER(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function gr(e = []) {
  return ([, t]) => t && TR(t, e);
}
function RR(e) {
  return Se("MuiIconButton", e);
}
const PR = _e("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), MR = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: s
  } = e, i = {
    root: ["root", n && "disabled", r !== "default" && `color${X(r)}`, o && `edge${X(o)}`, `size${X(s)}`]
  };
  return ke(i, RR, t);
}, IR = G(Qx, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${X(n.color)}`], n.edge && t[`edge${X(n.edge)}`], t[`size${X(n.size)}`]];
  }
})(Ie(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Ie(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(gr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(gr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${PR.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), $r = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: i,
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
  }, y = MR(f);
  return /* @__PURE__ */ _.jsx(IR, {
    className: ee(y.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ...d,
    ownerState: f,
    children: s
  });
});
function OR(e) {
  return Se("MuiTypography", e);
}
_e("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const AR = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, $R = YT(), NR = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, e.align !== "inherit" && `align${X(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return ke(a, OR, i);
}, LR = G("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${X(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(Ie(({
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
    })), ...Object.entries(e.palette).filter(gr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${X(n)}`
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
}, At = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    color: r,
    ...o
  } = we({
    props: t,
    name: "MuiTypography"
  }), s = !AR[r], i = $R({
    ...o,
    ...s && {
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
  } = i, S = {
    ...i,
    align: a,
    color: r,
    className: l,
    component: u,
    gutterBottom: c,
    noWrap: d,
    paragraph: f,
    variant: y,
    variantMapping: g
  }, m = u || (f ? "p" : g[y] || y0[y]) || "span", h = NR(S);
  return /* @__PURE__ */ _.jsx(LR, {
    as: m,
    ref: n,
    className: ee(h.root, l),
    ...v,
    ownerState: S,
    style: {
      ...a !== "inherit" && {
        "--Typography-textAlign": a
      },
      ...v.style
    }
  });
});
function FR(e) {
  return typeof e == "function" ? e() : e;
}
const jR = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [i, a] = w.useState(null), l = Ft(/* @__PURE__ */ w.isValidElement(r) ? Ol(r) : null, n);
  if (ko(() => {
    s || a(FR(o) || document.body);
  }, [o, s]), ko(() => {
    if (i && !s)
      return Ap(n, i), () => {
        Ap(n, null);
      };
  }, [n, i, s]), s) {
    if (/* @__PURE__ */ w.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ w.cloneElement(r, u);
    }
    return r;
  }
  return i && /* @__PURE__ */ Rm.createPortal(r, i);
});
function lu(e) {
  return parseInt(e, 10) || 0;
}
const zR = {
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
function DR(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const BR = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: s = 1,
    style: i,
    value: a,
    ...l
  } = t, {
    current: u
  } = w.useRef(a != null), c = w.useRef(null), d = Ft(n, c), f = w.useRef(null), y = w.useRef(null), g = w.useCallback(() => {
    const m = c.current, p = Ur(m).getComputedStyle(m);
    if (p.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const x = y.current;
    x.style.width = p.width, x.value = m.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const C = p.boxSizing, k = lu(p.paddingBottom) + lu(p.paddingTop), E = lu(p.borderBottomWidth) + lu(p.borderTopWidth), T = x.scrollHeight;
    x.value = "x";
    const M = x.scrollHeight;
    let b = T;
    s && (b = Math.max(Number(s) * M, b)), o && (b = Math.min(Number(o) * M, b)), b = Math.max(b, M);
    const P = b + (C === "border-box" ? k + E : 0), N = Math.abs(b - T) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: N
    };
  }, [o, s, t.placeholder]), v = w.useCallback(() => {
    const m = g();
    if (DR(m))
      return;
    const h = m.outerHeightStyle, p = c.current;
    f.current !== h && (f.current = h, p.style.height = `${h}px`), p.style.overflow = m.overflowing ? "hidden" : "";
  }, [g]);
  ko(() => {
    const m = () => {
      v();
    };
    let h;
    const p = _x(m), x = c.current, C = Ur(x);
    C.addEventListener("resize", p);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(m), k.observe(x)), () => {
      p.clear(), cancelAnimationFrame(h), C.removeEventListener("resize", p), k && k.disconnect();
    };
  }, [g, v]), ko(() => {
    v();
  });
  const S = (m) => {
    u || v(), r && r(m);
  };
  return /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ _.jsx("textarea", {
      value: a,
      onChange: S,
      ref: d,
      rows: s,
      style: i,
      ...l
    }), /* @__PURE__ */ _.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: y,
      tabIndex: -1,
      style: {
        ...zR.shadow,
        ...i,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function Dp(e) {
  return typeof e == "string";
}
function Di({
  props: e,
  states: t,
  muiFormControl: n
}) {
  return t.reduce((r, o) => (r[o] = e[o], n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const bd = /* @__PURE__ */ w.createContext(void 0);
function Ss() {
  return w.useContext(bd);
}
function g0(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function yc(e, t = !1) {
  return e && (g0(e.value) && e.value !== "" || t && g0(e.defaultValue) && e.defaultValue !== "");
}
function UR(e) {
  return e.startAdornment;
}
function VR(e) {
  return Se("MuiInputBase", e);
}
const Ri = _e("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var v0;
const xd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${X(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Sd = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.size === "small" && t.inputSizeSmall, n.multiline && t.inputMultiline, n.type === "search" && t.inputTypeSearch, n.startAdornment && t.inputAdornedStart, n.endAdornment && t.inputAdornedEnd, n.hiddenLabel && t.inputHiddenLabel];
}, WR = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: s,
    focused: i,
    formControl: a,
    fullWidth: l,
    hiddenLabel: u,
    multiline: c,
    readOnly: d,
    size: f,
    startAdornment: y,
    type: g
  } = e, v = {
    root: ["root", `color${X(n)}`, r && "disabled", o && "error", l && "fullWidth", i && "focused", a && "formControl", f && f !== "medium" && `size${X(f)}`, c && "multiline", y && "adornedStart", s && "adornedEnd", u && "hiddenLabel", d && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", c && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", y && "inputAdornedStart", s && "inputAdornedEnd", d && "readOnly"]
  };
  return ke(v, VR, t);
}, wd = G("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: xd
})(Ie(({
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
  [`&.${Ri.disabled}`]: {
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
}))), Cd = G("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Sd
})(Ie(({
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
    [`label[data-shrink=false] + .${Ri.formControl} &`]: {
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
    [`&.${Ri.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
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
        ownerState: s
      }) => s.multiline,
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
})), b0 = Jm({
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
}), ny = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    autoComplete: s,
    autoFocus: i,
    className: a,
    color: l,
    components: u = {},
    componentsProps: c = {},
    defaultValue: d,
    disabled: f,
    disableInjectingGlobalStyles: y,
    endAdornment: g,
    error: v,
    fullWidth: S = !1,
    id: m,
    inputComponent: h = "input",
    inputProps: p = {},
    inputRef: x,
    margin: C,
    maxRows: k,
    minRows: E,
    multiline: T = !1,
    name: M,
    onBlur: b,
    onChange: P,
    onClick: N,
    onFocus: j,
    onKeyDown: D,
    onKeyUp: L,
    placeholder: B,
    readOnly: W,
    renderSuffix: A,
    rows: $,
    size: U,
    slotProps: Q = {},
    slots: ue = {},
    startAdornment: Y,
    type: J = "text",
    value: ae,
    ...Fe
  } = r, ze = p.value != null ? p.value : ae, {
    current: zt
  } = w.useRef(ze != null), Ve = w.useRef(), he = w.useCallback((ve) => {
  }, []), Re = Ft(Ve, x, p.ref, he), [me, Qe] = w.useState(!1), ge = Ss(), $e = Di({
    props: r,
    muiFormControl: ge,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  $e.focused = ge ? ge.focused : me, w.useEffect(() => {
    !ge && f && me && (Qe(!1), b && b());
  }, [ge, f, me, b]);
  const bt = ge && ge.onFilled, Ae = ge && ge.onEmpty, We = w.useCallback((ve) => {
    yc(ve) ? bt && bt() : Ae && Ae();
  }, [bt, Ae]);
  ko(() => {
    zt && We({
      value: ze
    });
  }, [ze, We, zt]);
  const Et = (ve) => {
    j && j(ve), p.onFocus && p.onFocus(ve), ge && ge.onFocus ? ge.onFocus(ve) : Qe(!0);
  }, Tt = (ve) => {
    b && b(ve), p.onBlur && p.onBlur(ve), ge && ge.onBlur ? ge.onBlur(ve) : Qe(!1);
  }, Ye = (ve, ...Rt) => {
    if (!zt) {
      const Wi = ve.target || Ve.current;
      if (Wi == null)
        throw new Error(Br(1));
      We({
        value: Wi.value
      });
    }
    p.onChange && p.onChange(ve, ...Rt), P && P(ve, ...Rt);
  };
  w.useEffect(() => {
    We(Ve.current);
  }, []);
  const te = (ve) => {
    Ve.current && ve.currentTarget === ve.target && Ve.current.focus(), N && N(ve);
  };
  let Sr = h, xt = p;
  T && Sr === "input" && ($ ? xt = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...xt
  } : xt = {
    type: void 0,
    maxRows: k,
    minRows: E,
    ...xt
  }, Sr = BR);
  const wr = (ve) => {
    We(ve.animationName === "mui-auto-fill-cancel" ? Ve.current : {
      value: "x"
    });
  };
  w.useEffect(() => {
    ge && ge.setAdornedStart(!!Y);
  }, [ge, Y]);
  const Kr = {
    ...r,
    color: $e.color || "primary",
    disabled: $e.disabled,
    endAdornment: g,
    error: $e.error,
    focused: $e.focused,
    formControl: ge,
    fullWidth: S,
    hiddenLabel: $e.hiddenLabel,
    multiline: T,
    size: $e.size,
    startAdornment: Y,
    type: J
  }, rt = WR(Kr), ot = ue.root || u.Root || wd, at = Q.root || c.root || {}, sn = ue.input || u.Input || Cd;
  return xt = {
    ...xt,
    ...Q.input ?? c.input
  }, /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [!y && typeof b0 == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (v0 || (v0 = /* @__PURE__ */ _.jsx(b0, {}))), /* @__PURE__ */ _.jsxs(ot, {
      ...at,
      ref: n,
      onClick: te,
      ...Fe,
      ...!Dp(ot) && {
        ownerState: {
          ...Kr,
          ...at.ownerState
        }
      },
      className: ee(rt.root, at.className, a, W && "MuiInputBase-readOnly"),
      children: [Y, /* @__PURE__ */ _.jsx(bd.Provider, {
        value: null,
        children: /* @__PURE__ */ _.jsx(sn, {
          "aria-invalid": $e.error,
          "aria-describedby": o,
          autoComplete: s,
          autoFocus: i,
          defaultValue: d,
          disabled: $e.disabled,
          id: m,
          onAnimationStart: wr,
          name: M,
          placeholder: B,
          readOnly: W,
          required: $e.required,
          rows: $,
          value: ze,
          onKeyDown: D,
          onKeyUp: L,
          type: J,
          ...xt,
          ...!Dp(sn) && {
            as: Sr,
            ownerState: {
              ...Kr,
              ...xt.ownerState
            }
          },
          ref: Re,
          className: ee(rt.input, xt.className, W && "MuiInputBase-readOnly"),
          onBlur: Tt,
          onChange: Ye,
          onFocus: Et
        })
      }), g, A ? A({
        ...$e,
        startAdornment: Y
      }) : null]
    })]
  });
});
function HR(e) {
  return Se("MuiInput", e);
}
const na = {
  ...Ri,
  ..._e("MuiInput", ["root", "underline", "input"])
};
function KR(e) {
  return Se("MuiOutlinedInput", e);
}
const tr = {
  ...Ri,
  ..._e("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function QR(e) {
  return Se("MuiFilledInput", e);
}
const Lo = {
  ...Ri,
  ..._e("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, ZR = on(/* @__PURE__ */ _.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), GR = on(/* @__PURE__ */ _.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function qR(e) {
  return Se("MuiAvatar", e);
}
_e("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const XR = (e) => {
  const {
    classes: t,
    variant: n,
    colorDefault: r
  } = e;
  return ke({
    root: ["root", n, r && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  }, qR, t);
}, YR = G("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
  }
})(Ie(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: e.typography.fontFamily,
  fontSize: e.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (e.vars || e).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: !0
    },
    style: {
      color: (e.vars || e).palette.background.default,
      ...e.vars ? {
        backgroundColor: e.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: e.palette.grey[400],
        ...e.applyStyles("dark", {
          backgroundColor: e.palette.grey[600]
        })
      }
    }
  }]
}))), JR = G("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (e, t) => t.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
}), eP = G(GR, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (e, t) => t.fallback
})({
  width: "75%",
  height: "75%"
});
function tP({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [o, s] = w.useState(!1);
  return w.useEffect(() => {
    if (!n && !r)
      return;
    s(!1);
    let i = !0;
    const a = new Image();
    return a.onload = () => {
      i && s("loaded");
    }, a.onerror = () => {
      i && s("error");
    }, a.crossOrigin = e, a.referrerPolicy = t, a.src = n, r && (a.srcset = r), () => {
      i = !1;
    };
  }, [e, t, n, r]), o;
}
const nP = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiAvatar"
  }), {
    alt: o,
    children: s,
    className: i,
    component: a = "div",
    slots: l = {},
    slotProps: u = {},
    imgProps: c,
    sizes: d,
    src: f,
    srcSet: y,
    variant: g = "circular",
    ...v
  } = r;
  let S = null;
  const m = {
    ...r,
    component: a,
    variant: g
  }, h = tP({
    ...c,
    ...typeof u.img == "function" ? u.img(m) : u.img,
    src: f,
    srcSet: y
  }), p = f || y, x = p && h !== "error";
  m.colorDefault = !x, delete m.ownerState;
  const C = XR(m), [k, E] = Rn("img", {
    className: C.img,
    elementType: JR,
    externalForwardedProps: {
      slots: l,
      slotProps: {
        img: {
          ...c,
          ...u.img
        }
      }
    },
    additionalProps: {
      alt: o,
      src: f,
      srcSet: y,
      sizes: d
    },
    ownerState: m
  });
  return x ? S = /* @__PURE__ */ _.jsx(k, {
    ...E
  }) : s || s === 0 ? S = s : p && o ? S = o[0] : S = /* @__PURE__ */ _.jsx(eP, {
    ownerState: m,
    className: C.fallback
  }), /* @__PURE__ */ _.jsx(YR, {
    as: a,
    className: ee(C.root, i),
    ref: n,
    ...v,
    ownerState: m,
    children: S
  });
}), rP = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Zx = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = $o(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: a,
    easing: l,
    in: u,
    onEnter: c,
    onEntered: d,
    onEntering: f,
    onExit: y,
    onExited: g,
    onExiting: v,
    style: S,
    timeout: m = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = xr,
    ...p
  } = t, x = w.useRef(null), C = Ft(x, Ol(a), n), k = (D) => (L) => {
    if (D) {
      const B = x.current;
      L === void 0 ? D(B) : D(B, L);
    }
  }, E = k(f), T = k((D, L) => {
    Kx(D);
    const B = hc({
      style: S,
      timeout: m,
      easing: l
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", B), D.style.transition = r.transitions.create("opacity", B), c && c(D, L);
  }), M = k(d), b = k(v), P = k((D) => {
    const L = hc({
      style: S,
      timeout: m,
      easing: l
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", L), D.style.transition = r.transitions.create("opacity", L), y && y(D);
  }), N = k(g), j = (D) => {
    s && s(x.current, D);
  };
  return /* @__PURE__ */ _.jsx(h, {
    appear: i,
    in: u,
    nodeRef: x,
    onEnter: T,
    onEntered: M,
    onEntering: E,
    onExit: P,
    onExited: N,
    onExiting: b,
    addEndListener: j,
    timeout: m,
    ...p,
    children: (D, {
      ownerState: L,
      ...B
    }) => /* @__PURE__ */ w.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: D === "exited" && !u ? "hidden" : void 0,
        ...rP[D],
        ...S,
        ...a.props.style
      },
      ref: C,
      ...B
    })
  });
});
function oP(e) {
  return Se("MuiBackdrop", e);
}
_e("MuiBackdrop", ["root", "invisible"]);
const sP = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ke({
    root: ["root", n && "invisible"]
  }, oP, t);
}, iP = G("div", {
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
}), Gx = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: i = "div",
    invisible: a = !1,
    open: l,
    components: u = {},
    componentsProps: c = {},
    slotProps: d = {},
    slots: f = {},
    TransitionComponent: y,
    transitionDuration: g,
    ...v
  } = r, S = {
    ...r,
    component: i,
    invisible: a
  }, m = sP(S), h = {
    transition: y,
    root: u.Root,
    ...f
  }, p = {
    ...c,
    ...d
  }, x = {
    slots: h,
    slotProps: p
  }, [C, k] = Rn("root", {
    elementType: iP,
    externalForwardedProps: x,
    className: ee(m.root, s),
    ownerState: S
  }), [E, T] = Rn("transition", {
    elementType: Zx,
    externalForwardedProps: x,
    ownerState: S
  });
  return /* @__PURE__ */ _.jsx(E, {
    in: l,
    timeout: g,
    ...v,
    ...T,
    children: /* @__PURE__ */ _.jsx(C, {
      "aria-hidden": !0,
      ...k,
      classes: m,
      ref: n,
      children: o
    })
  });
}), aP = _e("MuiBox", ["root"]), lP = vd(), mt = a2({
  themeId: Hn,
  defaultTheme: lP,
  defaultClassName: aP.root,
  generateClassName: hx.generate
});
function uP(e) {
  return Se("MuiButton", e);
}
const Ms = _e("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), qx = /* @__PURE__ */ w.createContext({}), cP = /* @__PURE__ */ w.createContext(void 0), dP = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: s,
    classes: i
  } = e, a = {
    root: ["root", s, `${s}${X(t)}`, `size${X(o)}`, `${s}Size${X(o)}`, `color${X(t)}`, n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${X(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(o)}`]
  }, l = ke(a, uP, i);
  return {
    ...i,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Xx = [{
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
}], fP = G(Qx, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${X(n.color)}`], t[`size${X(n.size)}`], t[`${n.variant}Size${X(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(Ie(({
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
    [`&.${Ms.disabled}`]: {
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
        [`&.${Ms.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ms.disabled}`]: {
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
        [`&.${Ms.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(gr()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[r].main,
        "--variant-outlinedColor": (e.vars || e).palette[r].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Xt(e.palette[r].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[r].contrastText,
        "--variant-containedBg": (e.vars || e).palette[r].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[r].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette[r].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[r].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette[r].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Xt(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Ms.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ms.disabled}`]: {
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
})), pP = G("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${X(n.size)}`]];
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
  }, ...Xx]
}), hP = G("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${X(n.size)}`]];
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
  }, ...Xx]
}), Iu = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = w.useContext(qx), o = w.useContext(cP), s = Ti(r, t), i = we({
    props: s,
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
    fullWidth: S = !1,
    size: m = "medium",
    startIcon: h,
    type: p,
    variant: x = "text",
    ...C
  } = i, k = {
    ...i,
    color: l,
    component: u,
    disabled: d,
    disableElevation: f,
    disableFocusRipple: y,
    fullWidth: S,
    size: m,
    type: p,
    variant: x
  }, E = dP(k), T = h && /* @__PURE__ */ _.jsx(pP, {
    className: E.startIcon,
    ownerState: k,
    children: h
  }), M = g && /* @__PURE__ */ _.jsx(hP, {
    className: E.endIcon,
    ownerState: k,
    children: g
  }), b = o || "";
  return /* @__PURE__ */ _.jsxs(fP, {
    ownerState: k,
    className: ee(r.className, E.root, c, b),
    component: u,
    disabled: d,
    focusRipple: !y,
    focusVisibleClassName: ee(E.focusVisible, v),
    ref: n,
    type: p,
    ...C,
    classes: E,
    children: [T, a, M]
  });
});
function mP(e) {
  return Se("MuiCircularProgress", e);
}
_e("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Zr = 44, Bp = Tl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Up = Tl`
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
`, yP = typeof Bp != "string" ? zm`
        animation: ${Bp} 1.4s linear infinite;
      ` : null, gP = typeof Up != "string" ? zm`
        animation: ${Up} 1.4s ease-in-out infinite;
      ` : null, vP = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, s = {
    root: ["root", n, `color${X(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${X(n)}`, o && "circleDisableShrink"]
  };
  return ke(s, mP, t);
}, bP = G("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${X(n.color)}`]];
  }
})(Ie(({
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
    style: yP || {
      animation: `${Bp} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(gr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), xP = G("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), SP = G("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${X(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(Ie(({
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
    style: gP || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Up} 1.4s ease-in-out infinite`
    }
  }]
}))), wP = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: i = !1,
    size: a = 40,
    style: l,
    thickness: u = 3.6,
    value: c = 0,
    variant: d = "indeterminate",
    ...f
  } = r, y = {
    ...r,
    color: s,
    disableShrink: i,
    size: a,
    thickness: u,
    value: c,
    variant: d
  }, g = vP(y), v = {}, S = {}, m = {};
  if (d === "determinate") {
    const h = 2 * Math.PI * ((Zr - u) / 2);
    v.strokeDasharray = h.toFixed(3), m["aria-valuenow"] = Math.round(c), v.strokeDashoffset = `${((100 - c) / 100 * h).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ _.jsx(bP, {
    className: ee(g.root, o),
    style: {
      width: a,
      height: a,
      ...S,
      ...l
    },
    ownerState: y,
    ref: n,
    role: "progressbar",
    ...m,
    ...f,
    children: /* @__PURE__ */ _.jsx(xP, {
      className: g.svg,
      ownerState: y,
      viewBox: `${Zr / 2} ${Zr / 2} ${Zr} ${Zr}`,
      children: /* @__PURE__ */ _.jsx(SP, {
        className: g.circle,
        style: v,
        ownerState: y,
        cx: Zr,
        cy: Zr,
        r: (Zr - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  });
}), Vp = typeof Jm({}) == "function", CP = (e, t) => ({
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
}), _P = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Yx = (e, t = !1) => {
  var s, i;
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
    html: CP(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ..._P(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...n
  };
  const o = (i = (s = e.components) == null ? void 0 : s.MuiCssBaseline) == null ? void 0 : i.styleOverrides;
  return o && (r = [r, o]), r;
}, Ou = "mui-ecs", kP = (e) => {
  const t = Yx(e, !1), n = Array.isArray(t) ? t[0] : t;
  return !e.vars && n && (n.html[`:root:has(${Ou})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([r, o]) => {
    var i, a;
    const s = e.getColorSchemeSelector(r);
    s.startsWith("@") ? n[s] = {
      [`:root:not(:has(.${Ou}))`]: {
        colorScheme: (i = o.palette) == null ? void 0 : i.mode
      }
    } : n[s.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Ou}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    };
  }), t;
}, EP = Jm(Vp ? ({
  theme: e,
  enableColorScheme: t
}) => Yx(e, t) : ({
  theme: e
}) => kP(e));
function TP(e) {
  const t = we({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [Vp && /* @__PURE__ */ _.jsx(EP, {
      enableColorScheme: r
    }), !Vp && !r && /* @__PURE__ */ _.jsx("span", {
      className: Ou,
      style: {
        display: "none"
      }
    }), n]
  });
}
function RP(e) {
  const t = Gn(e);
  return t.body === e ? Ur(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ra(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function x0(e) {
  return parseInt(Ur(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function PP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function S0(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (i) => {
    const a = !s.includes(i), l = !PP(i);
    a && l && Ra(i, o);
  });
}
function xf(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function MP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (RP(r)) {
      const i = Tx(Ur(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${x0(r) + i}px`;
      const a = Gn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${x0(l) + i}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Gn(r).body;
    else {
      const i = r.parentElement, a = Ur(r);
      s = (i == null ? void 0 : i.nodeName) === "HTML" && a.getComputedStyle(i).overflowY === "scroll" ? i : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: i,
      property: a
    }) => {
      s ? i.style.setProperty(a, s) : i.style.removeProperty(a);
    });
  };
}
function IP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class OP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ra(t.modalRef, !1);
    const o = IP(n);
    S0(n, t.mount, t.modalRef, o, !0);
    const s = xf(this.containers, (i) => i.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = xf(this.containers, (s) => s.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = MP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = xf(this.containers, (i) => i.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Ra(t.modalRef, n), S0(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && Ra(i.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const AP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function $P(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function NP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function LP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || NP(e));
}
function FP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(AP)).forEach((r, o) => {
    const s = $P(r);
    s === -1 || !LP(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function jP() {
  return !0;
}
function zP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = FP,
    isEnabled: i = jP,
    open: a
  } = e, l = w.useRef(!1), u = w.useRef(null), c = w.useRef(null), d = w.useRef(null), f = w.useRef(null), y = w.useRef(!1), g = w.useRef(null), v = Ft(Ol(t), g), S = w.useRef(null);
  w.useEffect(() => {
    !a || !g.current || (y.current = !n);
  }, [n, a]), w.useEffect(() => {
    if (!a || !g.current)
      return;
    const p = Gn(g.current);
    return g.current.contains(p.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), y.current && g.current.focus()), () => {
      o || (d.current && d.current.focus && (l.current = !0, d.current.focus()), d.current = null);
    };
  }, [a]), w.useEffect(() => {
    if (!a || !g.current)
      return;
    const p = Gn(g.current), x = (E) => {
      S.current = E, !(r || !i() || E.key !== "Tab") && p.activeElement === g.current && E.shiftKey && (l.current = !0, c.current && c.current.focus());
    }, C = () => {
      var M, b;
      const E = g.current;
      if (E === null)
        return;
      if (!p.hasFocus() || !i() || l.current) {
        l.current = !1;
        return;
      }
      if (E.contains(p.activeElement) || r && p.activeElement !== u.current && p.activeElement !== c.current)
        return;
      if (p.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!y.current)
        return;
      let T = [];
      if ((p.activeElement === u.current || p.activeElement === c.current) && (T = s(g.current)), T.length > 0) {
        const P = !!((M = S.current) != null && M.shiftKey && ((b = S.current) == null ? void 0 : b.key) === "Tab"), N = T[0], j = T[T.length - 1];
        typeof N != "string" && typeof j != "string" && (P ? j.focus() : N.focus());
      } else
        E.focus();
    };
    p.addEventListener("focusin", C), p.addEventListener("keydown", x, !0);
    const k = setInterval(() => {
      p.activeElement && p.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(k), p.removeEventListener("focusin", C), p.removeEventListener("keydown", x, !0);
    };
  }, [n, r, o, i, a, s]);
  const m = (p) => {
    d.current === null && (d.current = p.relatedTarget), y.current = !0, f.current = p.target;
    const x = t.props.onFocus;
    x && x(p);
  }, h = (p) => {
    d.current === null && (d.current = p.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ _.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ w.cloneElement(t, {
      ref: v,
      onFocus: m
    }), /* @__PURE__ */ _.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function DP(e) {
  return typeof e == "function" ? e() : e;
}
function BP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const w0 = () => {
}, uu = new OP();
function UP(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: s,
    onTransitionExited: i,
    children: a,
    onClose: l,
    open: u,
    rootRef: c
  } = e, d = w.useRef({}), f = w.useRef(null), y = w.useRef(null), g = Ft(y, c), [v, S] = w.useState(!u), m = BP(a);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const p = () => Gn(f.current), x = () => (d.current.modalRef = y.current, d.current.mount = f.current, d.current), C = () => {
    uu.mount(x(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, k = ti(() => {
    const L = DP(t) || p().body;
    uu.add(x(), L), y.current && C();
  }), E = () => uu.isTopModal(x()), T = ti((L) => {
    f.current = L, L && (u && E() ? C() : y.current && Ra(y.current, h));
  }), M = w.useCallback(() => {
    uu.remove(x(), h);
  }, [h]);
  w.useEffect(() => () => {
    M();
  }, [M]), w.useEffect(() => {
    u ? k() : (!m || !o) && M();
  }, [u, M, m, o, k]);
  const b = (L) => (B) => {
    var W;
    (W = L.onKeyDown) == null || W.call(L, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !E()) && (n || (B.stopPropagation(), l && l(B, "escapeKeyDown")));
  }, P = (L) => (B) => {
    var W;
    (W = L.onClick) == null || W.call(L, B), B.target === B.currentTarget && l && l(B, "backdropClick");
  };
  return {
    getRootProps: (L = {}) => {
      const B = Px(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const W = {
        ...B,
        ...L
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...W,
        onKeyDown: b(W),
        ref: g
      };
    },
    getBackdropProps: (L = {}) => {
      const B = L;
      return {
        "aria-hidden": !0,
        ...B,
        onClick: P(B),
        open: u
      };
    },
    getTransitionProps: () => {
      const L = () => {
        S(!1), s && s();
      }, B = () => {
        S(!0), i && i(), o && M();
      };
      return {
        onEnter: Gg(L, (a == null ? void 0 : a.props.onEnter) ?? w0),
        onExited: Gg(B, (a == null ? void 0 : a.props.onExited) ?? w0)
      };
    },
    rootRef: g,
    portalRef: T,
    isTopModal: E,
    exited: v,
    hasTransition: m
  };
}
function VP(e) {
  return Se("MuiModal", e);
}
_e("MuiModal", ["root", "hidden", "backdrop"]);
const WP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ke({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, VP, r);
}, HP = G("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Ie(({
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
}))), KP = G(Gx, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Jx = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = KP,
    BackdropProps: s,
    classes: i,
    className: a,
    closeAfterTransition: l = !1,
    children: u,
    container: c,
    component: d,
    components: f = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: S = !1,
    disablePortal: m = !1,
    disableRestoreFocus: h = !1,
    disableScrollLock: p = !1,
    hideBackdrop: x = !1,
    keepMounted: C = !1,
    onBackdropClick: k,
    onClose: E,
    onTransitionEnter: T,
    onTransitionExited: M,
    open: b,
    slotProps: P = {},
    slots: N = {},
    // eslint-disable-next-line react/prop-types
    theme: j,
    ...D
  } = r, L = {
    ...r,
    closeAfterTransition: l,
    disableAutoFocus: g,
    disableEnforceFocus: v,
    disableEscapeKeyDown: S,
    disablePortal: m,
    disableRestoreFocus: h,
    disableScrollLock: p,
    hideBackdrop: x,
    keepMounted: C
  }, {
    getRootProps: B,
    getBackdropProps: W,
    getTransitionProps: A,
    portalRef: $,
    isTopModal: U,
    exited: Q,
    hasTransition: ue
  } = UP({
    ...L,
    rootRef: n
  }), Y = {
    ...L,
    exited: Q
  }, J = WP(Y), ae = {};
  if (u.props.tabIndex === void 0 && (ae.tabIndex = "-1"), ue) {
    const {
      onEnter: me,
      onExited: Qe
    } = A();
    ae.onEnter = me, ae.onExited = Qe;
  }
  const Fe = {
    ...D,
    slots: {
      root: f.Root,
      backdrop: f.Backdrop,
      ...N
    },
    slotProps: {
      ...y,
      ...P
    }
  }, [ze, zt] = Rn("root", {
    elementType: HP,
    externalForwardedProps: Fe,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: d
    },
    ownerState: Y,
    className: ee(a, J == null ? void 0 : J.root, !Y.open && Y.exited && (J == null ? void 0 : J.hidden))
  }), [Ve, he] = Rn("backdrop", {
    elementType: o,
    externalForwardedProps: Fe,
    additionalProps: s,
    getSlotProps: (me) => W({
      ...me,
      onClick: (Qe) => {
        k && k(Qe), me != null && me.onClick && me.onClick(Qe);
      }
    }),
    className: ee(s == null ? void 0 : s.className, J == null ? void 0 : J.backdrop),
    ownerState: Y
  }), Re = Ft(s == null ? void 0 : s.ref, he.ref);
  return !C && !b && (!ue || Q) ? null : /* @__PURE__ */ _.jsx(jR, {
    ref: $,
    container: c,
    disablePortal: m,
    children: /* @__PURE__ */ _.jsxs(ze, {
      ...zt,
      children: [!x && o ? /* @__PURE__ */ _.jsx(Ve, {
        ...he,
        ref: Re
      }) : null, /* @__PURE__ */ _.jsx(zP, {
        disableEnforceFocus: v,
        disableAutoFocus: g,
        disableRestoreFocus: h,
        isEnabled: U,
        open: b,
        children: /* @__PURE__ */ w.cloneElement(u, ae)
      })]
    })
  });
});
function QP(e) {
  return Se("MuiDialog", e);
}
const Sf = _e("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), eS = /* @__PURE__ */ w.createContext({}), ZP = G(Gx, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), GP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: s
  } = e, i = {
    root: ["root"],
    container: ["container", `scroll${X(n)}`],
    paper: ["paper", `paperScroll${X(n)}`, `paperWidth${X(String(r))}`, o && "paperFullWidth", s && "paperFullScreen"]
  };
  return ke(i, QP, t);
}, qP = G(Jx, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), XP = G("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${X(n.scroll)}`]];
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
}), YP = G(Tn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${X(n.scroll)}`], t[`paperWidth${X(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(Ie(({
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
      [`&.${Sf.paperScrollBody}`]: {
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
      [`&.${Sf.paperScrollBody}`]: {
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
      [`&.${Sf.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), C0 = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiDialog"
  }), o = $o(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": i,
    "aria-labelledby": a,
    "aria-modal": l = !0,
    BackdropComponent: u,
    BackdropProps: c,
    children: d,
    className: f,
    disableEscapeKeyDown: y = !1,
    fullScreen: g = !1,
    fullWidth: v = !1,
    maxWidth: S = "sm",
    onBackdropClick: m,
    onClick: h,
    onClose: p,
    open: x,
    PaperComponent: C = Tn,
    PaperProps: k = {},
    scroll: E = "paper",
    TransitionComponent: T = Zx,
    transitionDuration: M = s,
    TransitionProps: b,
    ...P
  } = r, N = {
    ...r,
    disableEscapeKeyDown: y,
    fullScreen: g,
    fullWidth: v,
    maxWidth: S,
    scroll: E
  }, j = GP(N), D = w.useRef(), L = ($) => {
    D.current = $.target === $.currentTarget;
  }, B = ($) => {
    h && h($), D.current && (D.current = null, m && m($), p && p($, "backdropClick"));
  }, W = yd(a), A = w.useMemo(() => ({
    titleId: W
  }), [W]);
  return /* @__PURE__ */ _.jsx(qP, {
    className: ee(j.root, f),
    closeAfterTransition: !0,
    components: {
      Backdrop: ZP
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
    open: x,
    ref: n,
    onClick: B,
    ownerState: N,
    ...P,
    children: /* @__PURE__ */ _.jsx(T, {
      appear: !0,
      in: x,
      timeout: M,
      role: "presentation",
      ...b,
      children: /* @__PURE__ */ _.jsx(XP, {
        className: ee(j.container),
        onMouseDown: L,
        ownerState: N,
        children: /* @__PURE__ */ _.jsx(YP, {
          as: C,
          elevation: 24,
          role: "dialog",
          "aria-describedby": i,
          "aria-labelledby": W,
          "aria-modal": l,
          ...k,
          className: ee(j.paper, k.className),
          ownerState: N,
          children: /* @__PURE__ */ _.jsx(eS.Provider, {
            value: A,
            children: d
          })
        })
      })
    })
  });
});
function JP(e) {
  return Se("MuiDialogActions", e);
}
_e("MuiDialogActions", ["root", "spacing"]);
const eM = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ke({
    root: ["root", !n && "spacing"]
  }, JP, t);
}, tM = G("div", {
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
}), nM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: s = !1,
    ...i
  } = r, a = {
    ...r,
    disableSpacing: s
  }, l = eM(a);
  return /* @__PURE__ */ _.jsx(tM, {
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    ...i
  });
});
function rM(e) {
  return Se("MuiDialogContent", e);
}
_e("MuiDialogContent", ["root", "dividers"]);
function oM(e) {
  return Se("MuiDialogTitle", e);
}
const sM = _e("MuiDialogTitle", ["root"]), iM = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ke({
    root: ["root", n && "dividers"]
  }, rM, t);
}, aM = G("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(Ie(({
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
      [`.${sM.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), _0 = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: s = !1,
    ...i
  } = r, a = {
    ...r,
    dividers: s
  }, l = iM(a);
  return /* @__PURE__ */ _.jsx(aM, {
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    ...i
  });
}), lM = (e) => {
  const {
    classes: t
  } = e;
  return ke({
    root: ["root"]
  }, oM, t);
}, uM = G(At, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), k0 = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: s,
    ...i
  } = r, a = r, l = lM(a), {
    titleId: u = s
  } = w.useContext(eS);
  return /* @__PURE__ */ _.jsx(uM, {
    component: "h2",
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: s ?? u,
    ...i
  });
}), cM = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: s,
    hiddenLabel: i,
    multiline: a
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", s === "small" && `size${X(s)}`, i && "hiddenLabel", a && "multiline"],
    input: ["input"]
  }, u = ke(l, QR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, dM = G(wd, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...xd(e, t), !n.disableUnderline && t.underline];
  }
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
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
    [`&.${Lo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${Lo.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: i
      }) => !i.disableUnderline,
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
        [`&.${Lo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Lo.error}`]: {
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
        [`&:hover:not(.${Lo.disabled}, .${Lo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${Lo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(gr()).map(([i]) => {
      var a;
      return {
        props: {
          disableUnderline: !1,
          color: i
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(a = (e.vars || e).palette[i]) == null ? void 0 : a.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: i
      }) => i.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: i
      }) => i.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: i,
        size: a
      }) => i.multiline && a === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline && i.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline && i.hiddenLabel && i.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), fM = G(Cd, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Sd
})(Ie(({
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
}))), ry = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: i,
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
  }, S = cM(r), m = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, h = d ?? i ? gt(m, d ?? i) : m, p = f.root ?? s.Root ?? dM, x = f.input ?? s.Input ?? fM;
  return /* @__PURE__ */ _.jsx(ny, {
    slots: {
      root: p,
      input: x
    },
    slotProps: h,
    fullWidth: a,
    inputComponent: u,
    multiline: c,
    ref: n,
    type: y,
    ...g,
    classes: S
  });
});
ry.muiName = "Input";
function pM(e) {
  return Se("MuiFormControl", e);
}
_e("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const hM = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${X(n)}`, r && "fullWidth"]
  };
  return ke(o, pM, t);
}, mM = G("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${X(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), yM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: i = "primary",
    component: a = "div",
    disabled: l = !1,
    error: u = !1,
    focused: c,
    fullWidth: d = !1,
    hiddenLabel: f = !1,
    margin: y = "none",
    required: g = !1,
    size: v = "medium",
    variant: S = "outlined",
    ...m
  } = r, h = {
    ...r,
    color: i,
    component: a,
    disabled: l,
    error: u,
    fullWidth: d,
    hiddenLabel: f,
    margin: y,
    required: g,
    size: v,
    variant: S
  }, p = hM(h), [x, C] = w.useState(() => {
    let j = !1;
    return o && w.Children.forEach(o, (D) => {
      if (!Mu(D, ["Input", "Select"]))
        return;
      const L = Mu(D, ["Select"]) ? D.props.input : D;
      L && UR(L.props) && (j = !0);
    }), j;
  }), [k, E] = w.useState(() => {
    let j = !1;
    return o && w.Children.forEach(o, (D) => {
      Mu(D, ["Input", "Select"]) && (yc(D.props, !0) || yc(D.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [T, M] = w.useState(!1);
  l && T && M(!1);
  const b = c !== void 0 && !l ? c : T;
  let P;
  w.useRef(!1);
  const N = w.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: C,
    color: i,
    disabled: l,
    error: u,
    filled: k,
    focused: b,
    fullWidth: d,
    hiddenLabel: f,
    size: v,
    onBlur: () => {
      M(!1);
    },
    onEmpty: () => {
      E(!1);
    },
    onFilled: () => {
      E(!0);
    },
    onFocus: () => {
      M(!0);
    },
    registerEffect: P,
    required: g,
    variant: S
  }), [x, i, l, u, k, b, d, f, P, g, v, S]);
  return /* @__PURE__ */ _.jsx(bd.Provider, {
    value: N,
    children: /* @__PURE__ */ _.jsx(mM, {
      as: a,
      ownerState: h,
      className: ee(p.root, s),
      ref: n,
      ...m,
      children: o
    })
  });
});
function gM(e) {
  return Se("MuiFormHelperText", e);
}
const E0 = _e("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var T0;
const vM = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: s,
    filled: i,
    focused: a,
    required: l
  } = e, u = {
    root: ["root", o && "disabled", s && "error", r && `size${X(r)}`, n && "contained", a && "focused", i && "filled", l && "required"]
  };
  return ke(u, gM, t);
}, bM = G("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${X(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${E0.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${E0.error}`]: {
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
}))), xM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: i = "p",
    disabled: a,
    error: l,
    filled: u,
    focused: c,
    margin: d,
    required: f,
    variant: y,
    ...g
  } = r, v = Ss(), S = Di({
    props: r,
    muiFormControl: v,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), m = {
    ...r,
    component: i,
    contained: S.variant === "filled" || S.variant === "outlined",
    variant: S.variant,
    size: S.size,
    disabled: S.disabled,
    error: S.error,
    filled: S.filled,
    focused: S.focused,
    required: S.required
  };
  delete m.ownerState;
  const h = vM(m);
  return /* @__PURE__ */ _.jsx(bM, {
    as: i,
    className: ee(h.root, s),
    ref: n,
    ...g,
    ownerState: m,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      T0 || (T0 = /* @__PURE__ */ _.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
});
function SM(e) {
  return Se("MuiFormLabel", e);
}
const Pa = _e("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), wM = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: s,
    filled: i,
    required: a
  } = e, l = {
    root: ["root", `color${X(n)}`, o && "disabled", s && "error", i && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return ke(l, SM, t);
}, CM = G("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(Ie(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(gr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Pa.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Pa.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Pa.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), _M = G("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(Ie(({
  theme: e
}) => ({
  [`&.${Pa.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), kM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    color: i,
    component: a = "label",
    disabled: l,
    error: u,
    filled: c,
    focused: d,
    required: f,
    ...y
  } = r, g = Ss(), v = Di({
    props: r,
    muiFormControl: g,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), S = {
    ...r,
    color: v.color || "primary",
    component: a,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, m = wM(S);
  return /* @__PURE__ */ _.jsxs(CM, {
    as: a,
    ownerState: S,
    className: ee(m.root, s),
    ref: n,
    ...y,
    children: [o, v.required && /* @__PURE__ */ _.jsxs(_M, {
      ownerState: S,
      "aria-hidden": !0,
      className: m.asterisk,
      children: [" ", "*"]
    })]
  });
}), ra = dT({
  createStyledComponent: G("div", {
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
  useThemeProps: (e) => we({
    props: e,
    name: "MuiGrid2"
  }),
  useTheme: $o
});
function Wp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const EM = {
  entering: {
    opacity: 1,
    transform: Wp(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, wf = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Hp = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: s,
    easing: i,
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
    TransitionComponent: S = xr,
    ...m
  } = t, h = Ex(), p = w.useRef(), x = $o(), C = w.useRef(null), k = Ft(C, Ol(s), n), E = (L) => (B) => {
    if (L) {
      const W = C.current;
      B === void 0 ? L(W) : L(W, B);
    }
  }, T = E(c), M = E((L, B) => {
    Kx(L);
    const {
      duration: W,
      delay: A,
      easing: $
    } = hc({
      style: g,
      timeout: v,
      easing: i
    }, {
      mode: "enter"
    });
    let U;
    v === "auto" ? (U = x.transitions.getAutoHeightDuration(L.clientHeight), p.current = U) : U = W, L.style.transition = [x.transitions.create("opacity", {
      duration: U,
      delay: A
    }), x.transitions.create("transform", {
      duration: wf ? U : U * 0.666,
      delay: A,
      easing: $
    })].join(","), l && l(L, B);
  }), b = E(u), P = E(y), N = E((L) => {
    const {
      duration: B,
      delay: W,
      easing: A
    } = hc({
      style: g,
      timeout: v,
      easing: i
    }, {
      mode: "exit"
    });
    let $;
    v === "auto" ? ($ = x.transitions.getAutoHeightDuration(L.clientHeight), p.current = $) : $ = B, L.style.transition = [x.transitions.create("opacity", {
      duration: $,
      delay: W
    }), x.transitions.create("transform", {
      duration: wf ? $ : $ * 0.666,
      delay: wf ? W : W || $ * 0.333,
      easing: A
    })].join(","), L.style.opacity = 0, L.style.transform = Wp(0.75), d && d(L);
  }), j = E(f), D = (L) => {
    v === "auto" && h.start(p.current || 0, L), r && r(C.current, L);
  };
  return /* @__PURE__ */ _.jsx(S, {
    appear: o,
    in: a,
    nodeRef: C,
    onEnter: M,
    onEntered: b,
    onEntering: T,
    onExit: N,
    onExited: j,
    onExiting: P,
    addEndListener: D,
    timeout: v === "auto" ? null : v,
    ...m,
    children: (L, {
      ownerState: B,
      ...W
    }) => /* @__PURE__ */ w.cloneElement(s, {
      style: {
        opacity: 0,
        transform: Wp(0.75),
        visibility: L === "exited" && !a ? "hidden" : void 0,
        ...EM[L],
        ...g,
        ...s.props.style
      },
      ref: k,
      ...W
    })
  });
});
Hp && (Hp.muiSupportAuto = !0);
const TM = b2({
  themeId: Hn
}), RM = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ke({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, HR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, PM = G(wd, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...xd(e, t), !n.disableUnderline && t.underline];
  }
})(Ie(({
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
        [`&.${na.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${na.error}`]: {
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
        [`&:hover:not(.${na.disabled}, .${na.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${na.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(gr()).map(([r]) => ({
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
})), MM = G(Cd, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Sd
})({}), oy = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    components: s = {},
    componentsProps: i,
    fullWidth: a = !1,
    inputComponent: l = "input",
    multiline: u = !1,
    slotProps: c,
    slots: d = {},
    type: f = "text",
    ...y
  } = r, g = RM(r), S = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, m = c ?? i ? gt(c ?? i, S) : S, h = d.root ?? s.Root ?? PM, p = d.input ?? s.Input ?? MM;
  return /* @__PURE__ */ _.jsx(ny, {
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
oy.muiName = "Input";
function IM(e) {
  return Se("MuiInputAdornment", e);
}
const R0 = _e("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var P0;
const OM = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${X(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, AM = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: s,
    variant: i
  } = e, a = {
    root: ["root", n && "disablePointerEvents", o && `position${X(o)}`, i, r && "hiddenLabel", s && `size${X(s)}`]
  };
  return ke(a, IM, t);
}, $M = G("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: OM
})(Ie(({
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
      [`&.${R0.positionStart}&:not(.${R0.hiddenLabel})`]: {
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
}))), Kp = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: s,
    component: i = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: u,
    variant: c,
    ...d
  } = r, f = Ss() || {};
  let y = c;
  c && f.variant, y || (y = f.variant);
  const g = {
    ...r,
    hiddenLabel: f.hiddenLabel,
    size: f.size,
    disablePointerEvents: a,
    position: u,
    variant: y
  }, v = AM(g);
  return /* @__PURE__ */ _.jsx(bd.Provider, {
    value: null,
    children: /* @__PURE__ */ _.jsx($M, {
      as: i,
      ownerState: g,
      className: ee(v.root, s),
      ref: n,
      ...d,
      children: typeof o == "string" && !l ? /* @__PURE__ */ _.jsx(At, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ _.jsxs(w.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          P0 || (P0 = /* @__PURE__ */ _.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
});
function NM(e) {
  return Se("MuiInputLabel", e);
}
_e("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const LM = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: s,
    variant: i,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !s && "animated", o && "shrink", r && r !== "normal" && `size${X(r)}`, i],
    asterisk: [a && "asterisk"]
  }, u = ke(l, NM, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, FM = G(kM, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Pa.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(Ie(({
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
}))), jM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: i,
    variant: a,
    className: l,
    ...u
  } = r, c = Ss();
  let d = i;
  typeof d > "u" && c && (d = c.filled || c.focused || c.adornedStart);
  const f = Di({
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
  }, g = LM(y);
  return /* @__PURE__ */ _.jsx(FM, {
    "data-shrink": d,
    ref: n,
    className: ee(g.root, l),
    ...u,
    ownerState: y,
    classes: g
  });
});
function zM(e) {
  return Se("MuiLink", e);
}
const DM = _e("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), BM = ({
  theme: e,
  ownerState: t
}) => {
  const n = t.color, r = Ei(e, `palette.${n}`, !1) || t.color, o = Ei(e, `palette.${n}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : Xt(r, 0.4);
}, M0 = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, UM = (e) => {
  const {
    classes: t,
    component: n,
    focusVisible: r,
    underline: o
  } = e, s = {
    root: ["root", `underline${X(o)}`, n === "button" && "button", r && "focusVisible"]
  };
  return ke(s, zM, t);
}, VM = G(At, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`underline${X(n.underline)}`], n.component === "button" && t.button];
  }
})(Ie(({
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
  }, ...Object.entries(e.palette).filter(gr()).map(([t]) => ({
    props: {
      underline: "always",
      color: t
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette[t].mainChannel} / 0.4)` : Xt(e.palette[t].main, 0.4)
    }
  })), {
    props: {
      underline: "always",
      color: "textPrimary"
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Xt(e.palette.text.primary, 0.4)
    }
  }, {
    props: {
      underline: "always",
      color: "textSecondary"
    },
    style: {
      "--Link-underlineColor": e.vars ? `rgba(${e.vars.palette.text.secondaryChannel} / 0.4)` : Xt(e.palette.text.secondary, 0.4)
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
      [`&.${DM.focusVisible}`]: {
        outline: "auto"
      }
    }
  }]
}))), tS = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiLink"
  }), o = $o(), {
    className: s,
    color: i = "primary",
    component: a = "a",
    onBlur: l,
    onFocus: u,
    TypographyClasses: c,
    underline: d = "always",
    variant: f = "inherit",
    sx: y,
    ...g
  } = r, [v, S] = w.useState(!1), m = (C) => {
    dc(C.target) || S(!1), l && l(C);
  }, h = (C) => {
    dc(C.target) && S(!0), u && u(C);
  }, p = {
    ...r,
    color: i,
    component: a,
    focusVisible: v,
    underline: d,
    variant: f
  }, x = UM(p);
  return /* @__PURE__ */ _.jsx(VM, {
    color: i,
    className: ee(x.root, s),
    classes: c,
    component: a,
    onBlur: m,
    onFocus: h,
    ref: n,
    ownerState: p,
    variant: f,
    ...g,
    sx: [...M0[i] === void 0 ? [{
      color: i
    }] : [], ...Array.isArray(y) ? y : [y]],
    style: {
      ...g.style,
      ...d === "always" && i !== "inherit" && !M0[i] && {
        "--Link-underlineColor": BM({
          theme: o,
          ownerState: p
        })
      }
    }
  });
}), WM = /* @__PURE__ */ w.createContext({});
function HM(e) {
  return Se("MuiList", e);
}
_e("MuiList", ["root", "padding", "dense", "subheader"]);
const KM = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ke({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, HM, t);
}, QM = G("ul", {
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
}), ZM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: i = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: u,
    ...c
  } = r, d = w.useMemo(() => ({
    dense: a
  }), [a]), f = {
    ...r,
    component: i,
    dense: a,
    disablePadding: l
  }, y = KM(f);
  return /* @__PURE__ */ _.jsx(WM.Provider, {
    value: d,
    children: /* @__PURE__ */ _.jsxs(QM, {
      as: i,
      className: ee(y.root, s),
      ref: n,
      ownerState: f,
      ...c,
      children: [u, o]
    })
  });
});
function Cf(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function I0(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function nS(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function oa(e, t, n, r, o, s) {
  let i = !1, a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (i)
        return !1;
      i = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !nS(a, s) || l)
      a = o(e, a, n);
    else
      return a.focus(), !0;
  }
  return !1;
}
const GM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: i,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: c,
    variant: d = "selectedMenu",
    ...f
  } = t, y = w.useRef(null), g = w.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ko(() => {
    o && y.current.focus();
  }, [o]), w.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (p, {
      direction: x
    }) => {
      const C = !y.current.style.width;
      if (p.clientHeight < y.current.clientHeight && C) {
        const k = `${Tx(Ur(p))}px`;
        y.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = k, y.current.style.width = `calc(100% + ${k})`;
      }
      return y.current;
    }
  }), []);
  const v = (p) => {
    const x = y.current, C = p.key;
    if (p.ctrlKey || p.metaKey || p.altKey) {
      c && c(p);
      return;
    }
    const E = Gn(x).activeElement;
    if (C === "ArrowDown")
      p.preventDefault(), oa(x, E, u, l, Cf);
    else if (C === "ArrowUp")
      p.preventDefault(), oa(x, E, u, l, I0);
    else if (C === "Home")
      p.preventDefault(), oa(x, null, u, l, Cf);
    else if (C === "End")
      p.preventDefault(), oa(x, null, u, l, I0);
    else if (C.length === 1) {
      const T = g.current, M = C.toLowerCase(), b = performance.now();
      T.keys.length > 0 && (b - T.lastTime > 500 ? (T.keys = [], T.repeating = !0, T.previousKeyMatched = !0) : T.repeating && M !== T.keys[0] && (T.repeating = !1)), T.lastTime = b, T.keys.push(M);
      const P = E && !T.repeating && nS(E, T);
      T.previousKeyMatched && (P || oa(x, E, !1, l, Cf, T)) ? p.preventDefault() : T.previousKeyMatched = !1;
    }
    c && c(p);
  }, S = Ft(y, n);
  let m = -1;
  w.Children.forEach(i, (p, x) => {
    if (!/* @__PURE__ */ w.isValidElement(p)) {
      m === x && (m += 1, m >= i.length && (m = -1));
      return;
    }
    p.props.disabled || (d === "selectedMenu" && p.props.selected || m === -1) && (m = x), m === x && (p.props.disabled || p.props.muiSkipListHighlight || p.type.muiSkipListHighlight) && (m += 1, m >= i.length && (m = -1));
  });
  const h = w.Children.map(i, (p, x) => {
    if (x === m) {
      const C = {};
      return s && (C.autoFocus = !0), p.props.tabIndex === void 0 && d === "selectedMenu" && (C.tabIndex = 0), /* @__PURE__ */ w.cloneElement(p, C);
    }
    return p;
  });
  return /* @__PURE__ */ _.jsx(ZM, {
    role: "menu",
    ref: S,
    className: a,
    onKeyDown: v,
    tabIndex: o ? 0 : -1,
    ...f,
    children: h
  });
});
function qM(e) {
  return Se("MuiPopover", e);
}
_e("MuiPopover", ["root", "paper"]);
function O0(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function A0(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function $0(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function _f(e) {
  return typeof e == "function" ? e() : e;
}
const XM = (e) => {
  const {
    classes: t
  } = e;
  return ke({
    root: ["root"],
    paper: ["paper"]
  }, qM, t);
}, YM = G(Jx, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), rS = G(Tn, {
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
}), JM = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: i = {
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
    slots: S = {},
    slotProps: m = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: p = Hp,
    transitionDuration: x = "auto",
    TransitionProps: {
      onEntering: C,
      ...k
    } = {},
    disableScrollLock: E = !1,
    ...T
  } = r, M = (m == null ? void 0 : m.paper) ?? v, b = w.useRef(), P = {
    ...r,
    anchorOrigin: i,
    anchorReference: l,
    elevation: f,
    marginThreshold: y,
    externalPaperSlotProps: M,
    transformOrigin: h,
    TransitionComponent: p,
    transitionDuration: x,
    TransitionProps: k
  }, N = XM(P), j = w.useCallback(() => {
    if (l === "anchorPosition")
      return a;
    const he = _f(s), me = (he && he.nodeType === 1 ? he : Gn(b.current).body).getBoundingClientRect();
    return {
      top: me.top + O0(me, i.vertical),
      left: me.left + A0(me, i.horizontal)
    };
  }, [s, i.horizontal, i.vertical, a, l]), D = w.useCallback((he) => ({
    vertical: O0(he, h.vertical),
    horizontal: A0(he, h.horizontal)
  }), [h.horizontal, h.vertical]), L = w.useCallback((he) => {
    const Re = {
      width: he.offsetWidth,
      height: he.offsetHeight
    }, me = D(Re);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $0(me)
      };
    const Qe = j();
    let ge = Qe.top - me.vertical, $e = Qe.left - me.horizontal;
    const bt = ge + Re.height, Ae = $e + Re.width, We = Ur(_f(s)), Et = We.innerHeight - y, Tt = We.innerWidth - y;
    if (y !== null && ge < y) {
      const Ye = ge - y;
      ge -= Ye, me.vertical += Ye;
    } else if (y !== null && bt > Et) {
      const Ye = bt - Et;
      ge -= Ye, me.vertical += Ye;
    }
    if (y !== null && $e < y) {
      const Ye = $e - y;
      $e -= Ye, me.horizontal += Ye;
    } else if (Ae > Tt) {
      const Ye = Ae - Tt;
      $e -= Ye, me.horizontal += Ye;
    }
    return {
      top: `${Math.round(ge)}px`,
      left: `${Math.round($e)}px`,
      transformOrigin: $0(me)
    };
  }, [s, l, j, D, y]), [B, W] = w.useState(g), A = w.useCallback(() => {
    const he = b.current;
    if (!he)
      return;
    const Re = L(he);
    Re.top !== null && he.style.setProperty("top", Re.top), Re.left !== null && (he.style.left = Re.left), he.style.transformOrigin = Re.transformOrigin, W(!0);
  }, [L]);
  w.useEffect(() => (E && window.addEventListener("scroll", A), () => window.removeEventListener("scroll", A)), [s, E, A]);
  const $ = (he, Re) => {
    C && C(he, Re), A();
  }, U = () => {
    W(!1);
  };
  w.useEffect(() => {
    g && A();
  }), w.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      A();
    }
  } : null, [g, A]), w.useEffect(() => {
    if (!g)
      return;
    const he = _x(() => {
      A();
    }), Re = Ur(s);
    return Re.addEventListener("resize", he), () => {
      he.clear(), Re.removeEventListener("resize", he);
    };
  }, [s, g, A]);
  let Q = x;
  x === "auto" && !p.muiSupportAuto && (Q = void 0);
  const ue = d || (s ? Gn(_f(s)).body : void 0), Y = {
    slots: S,
    slotProps: {
      ...m,
      paper: M
    }
  }, [J, ae] = Rn("paper", {
    elementType: rS,
    externalForwardedProps: Y,
    additionalProps: {
      elevation: f,
      className: ee(N.paper, M == null ? void 0 : M.className),
      style: B ? M.style : {
        ...M.style,
        opacity: 0
      }
    },
    ownerState: P
  }), [Fe, {
    slotProps: ze,
    ...zt
  }] = Rn("root", {
    elementType: YM,
    externalForwardedProps: Y,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: ue,
      open: g
    },
    ownerState: P,
    className: ee(N.root, c)
  }), Ve = Ft(b, ae.ref);
  return /* @__PURE__ */ _.jsx(Fe, {
    ...zt,
    ...!Dp(Fe) && {
      slotProps: ze,
      disableScrollLock: E
    },
    ...T,
    ref: n,
    children: /* @__PURE__ */ _.jsx(p, {
      appear: !0,
      in: g,
      onEntering: $,
      onExited: U,
      timeout: Q,
      ...k,
      children: /* @__PURE__ */ _.jsx(J, {
        ...ae,
        ref: Ve,
        children: u
      })
    })
  });
});
function eI(e) {
  return Se("MuiMenu", e);
}
_e("MuiMenu", ["root", "paper", "list"]);
const tI = {
  vertical: "top",
  horizontal: "right"
}, nI = {
  vertical: "top",
  horizontal: "left"
}, rI = (e) => {
  const {
    classes: t
  } = e;
  return ke({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, eI, t);
}, oI = G(JM, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), sI = G(rS, {
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
}), iI = G(GM, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), aI = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: i,
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
    variant: S = "selectedMenu",
    slots: m = {},
    slotProps: h = {},
    ...p
  } = r, x = N2(), C = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: a,
    MenuListProps: l,
    onEntering: g,
    PaperProps: d,
    transitionDuration: y,
    TransitionProps: v,
    variant: S
  }, k = rI(C), E = o && !a && c, T = w.useRef(null), M = (B, W) => {
    T.current && T.current.adjustStyleForScrollbar(B, {
      direction: x ? "rtl" : "ltr"
    }), g && g(B, W);
  }, b = (B) => {
    B.key === "Tab" && (B.preventDefault(), u && u(B, "tabKeyDown"));
  };
  let P = -1;
  w.Children.map(s, (B, W) => {
    /* @__PURE__ */ w.isValidElement(B) && (B.props.disabled || (S === "selectedMenu" && B.props.selected || P === -1) && (P = W));
  });
  const N = m.paper ?? sI, j = h.paper ?? d, D = t0({
    elementType: m.root,
    externalSlotProps: h.root,
    ownerState: C,
    className: [k.root, i]
  }), L = t0({
    elementType: N,
    externalSlotProps: j,
    ownerState: C,
    className: k.paper
  });
  return /* @__PURE__ */ _.jsx(oI, {
    onClose: u,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: x ? "right" : "left"
    },
    transformOrigin: x ? tI : nI,
    slots: {
      paper: N,
      root: m.root
    },
    slotProps: {
      root: D,
      paper: L
    },
    open: c,
    ref: n,
    transitionDuration: y,
    TransitionProps: {
      onEntering: M,
      ...v
    },
    ownerState: C,
    ...p,
    classes: f,
    children: /* @__PURE__ */ _.jsx(iI, {
      onKeyDown: b,
      actions: T,
      autoFocus: o && (P === -1 || a),
      autoFocusItem: E,
      variant: S,
      ...l,
      className: ee(k.list, l.className),
      children: s
    })
  });
});
function lI(e) {
  return Se("MuiNativeSelect", e);
}
const sy = _e("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), uI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: i
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", i && "error"],
    icon: ["icon", `icon${X(n)}`, s && "iconOpen", r && "disabled"]
  };
  return ke(a, lI, t);
}, oS = G("select")(({
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
  [`&.${sy.disabled}`]: {
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
})), cI = G(oS, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Xn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${sy.multiple}`]: t.multiple
    }];
  }
})({}), sS = G("svg")(({
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
  [`&.${sy.disabled}`]: {
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
})), dI = G(sS, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${X(n.variant)}`], n.open && t.iconOpen];
  }
})({}), fI = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: s,
    IconComponent: i,
    inputRef: a,
    variant: l = "standard",
    ...u
  } = t, c = {
    ...t,
    disabled: o,
    variant: l,
    error: s
  }, d = uI(c);
  return /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ _.jsx(cI, {
      ownerState: c,
      className: ee(d.select, r),
      disabled: o,
      ref: a || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ _.jsx(dI, {
      as: i,
      ownerState: c,
      className: d.icon
    })]
  });
});
var N0;
const pI = G("fieldset", {
  shouldForwardProp: Xn
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
}), hI = G("legend", {
  shouldForwardProp: Xn
})(Ie(({
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
function mI(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: s,
    ...i
  } = e, a = o != null && o !== "", l = {
    ...e,
    notched: s,
    withLabel: a
  };
  return /* @__PURE__ */ _.jsx(pI, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...i,
    children: /* @__PURE__ */ _.jsx(hI, {
      ownerState: l,
      children: a ? /* @__PURE__ */ _.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        N0 || (N0 = /* @__PURE__ */ _.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const yI = (e) => {
  const {
    classes: t
  } = e, r = ke({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, KR, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, gI = G(wd, {
  shouldForwardProp: (e) => Xn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: xd
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${tr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${tr.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${tr.focused} .${tr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(gr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${tr.focused} .${tr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${tr.error} .${tr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${tr.disabled} .${tr.notchedOutline}`]: {
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
})), vI = G(mI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(Ie(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
})), bI = G(Cd, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Sd
})(Ie(({
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
}))), iy = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var r;
  const o = we({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: i = !1,
    inputComponent: a = "input",
    label: l,
    multiline: u = !1,
    notched: c,
    slots: d = {},
    type: f = "text",
    ...y
  } = o, g = yI(o), v = Ss(), S = Di({
    props: o,
    muiFormControl: v,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), m = {
    ...o,
    color: S.color || "primary",
    disabled: S.disabled,
    error: S.error,
    focused: S.focused,
    formControl: v,
    fullWidth: i,
    hiddenLabel: S.hiddenLabel,
    multiline: u,
    size: S.size,
    type: f
  }, h = d.root ?? s.Root ?? gI, p = d.input ?? s.Input ?? bI;
  return /* @__PURE__ */ _.jsx(ny, {
    slots: {
      root: h,
      input: p
    },
    renderSuffix: (x) => /* @__PURE__ */ _.jsx(vI, {
      ownerState: m,
      className: g.notchedOutline,
      label: l != null && l !== "" && S.required ? r || (r = /* @__PURE__ */ _.jsxs(w.Fragment, {
        children: [l, " ", "*"]
      })) : l,
      notched: typeof c < "u" ? c : !!(x.startAdornment || x.filled || x.focused)
    }),
    fullWidth: i,
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
iy.muiName = "Input";
function xI(e) {
  return Se("MuiSelect", e);
}
const sa = _e("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var L0;
const SI = G(oS, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${sa.select}`]: t.select
      },
      {
        [`&.${sa.select}`]: t[n.variant]
      },
      {
        [`&.${sa.error}`]: t.error
      },
      {
        [`&.${sa.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${sa.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), wI = G(sS, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${X(n.variant)}`], n.open && t.iconOpen];
  }
})({}), CI = G("input", {
  shouldForwardProp: (e) => Vx(e) && e !== "classes",
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
function F0(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function _I(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const kI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: i
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", i && "error"],
    icon: ["icon", `icon${X(n)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return ke(a, xI, t);
}, EI = /* @__PURE__ */ w.forwardRef(function(t, n) {
  var Cy;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: s,
    autoWidth: i,
    children: a,
    className: l,
    defaultOpen: u,
    defaultValue: c,
    disabled: d,
    displayEmpty: f,
    error: y = !1,
    IconComponent: g,
    inputRef: v,
    labelId: S,
    MenuProps: m = {},
    multiple: h,
    name: p,
    onBlur: x,
    onChange: C,
    onClose: k,
    onFocus: E,
    onOpen: T,
    open: M,
    readOnly: b,
    renderValue: P,
    required: N,
    SelectDisplayProps: j = {},
    tabIndex: D,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: B,
    variant: W = "standard",
    ...A
  } = t, [$, U] = Yg({
    controlled: B,
    default: c,
    name: "Select"
  }), [Q, ue] = Yg({
    controlled: M,
    default: u,
    name: "Select"
  }), Y = w.useRef(null), J = w.useRef(null), [ae, Fe] = w.useState(null), {
    current: ze
  } = w.useRef(M != null), [zt, Ve] = w.useState(), he = Ft(n, v), Re = w.useCallback((se) => {
    J.current = se, se && Fe(se);
  }, []), me = ae == null ? void 0 : ae.parentNode;
  w.useImperativeHandle(he, () => ({
    focus: () => {
      J.current.focus();
    },
    node: Y.current,
    value: $
  }), [$]), w.useEffect(() => {
    u && Q && ae && !ze && (Ve(i ? null : me.clientWidth), J.current.focus());
  }, [ae, i]), w.useEffect(() => {
    s && J.current.focus();
  }, [s]), w.useEffect(() => {
    if (!S)
      return;
    const se = Gn(J.current).getElementById(S);
    if (se) {
      const De = () => {
        getSelection().isCollapsed && J.current.focus();
      };
      return se.addEventListener("click", De), () => {
        se.removeEventListener("click", De);
      };
    }
  }, [S]);
  const Qe = (se, De) => {
    se ? T && T(De) : k && k(De), ze || (Ve(i ? null : me.clientWidth), ue(se));
  }, ge = (se) => {
    se.button === 0 && (se.preventDefault(), J.current.focus(), Qe(!0, se));
  }, $e = (se) => {
    Qe(!1, se);
  }, bt = w.Children.toArray(a), Ae = (se) => {
    const De = bt.find((St) => St.props.value === se.target.value);
    De !== void 0 && (U(De.props.value), C && C(se, De));
  }, We = (se) => (De) => {
    let St;
    if (De.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        St = Array.isArray($) ? $.slice() : [];
        const ws = $.indexOf(se.props.value);
        ws === -1 ? St.push(se.props.value) : St.splice(ws, 1);
      } else
        St = se.props.value;
      if (se.props.onClick && se.props.onClick(De), $ !== St && (U(St), C)) {
        const ws = De.nativeEvent || De, _y = new ws.constructor(ws.type, ws);
        Object.defineProperty(_y, "target", {
          writable: !0,
          value: {
            value: St,
            name: p
          }
        }), C(_y, se);
      }
      h || Qe(!1, De);
    }
  }, Et = (se) => {
    b || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(se.key) && (se.preventDefault(), Qe(!0, se));
  }, Tt = ae !== null && Q, Ye = (se) => {
    !Tt && x && (Object.defineProperty(se, "target", {
      writable: !0,
      value: {
        value: $,
        name: p
      }
    }), x(se));
  };
  delete A["aria-invalid"];
  let te, Sr;
  const xt = [];
  let wr = !1;
  (yc({
    value: $
  }) || f) && (P ? te = P($) : wr = !0);
  const Kr = bt.map((se) => {
    if (!/* @__PURE__ */ w.isValidElement(se))
      return null;
    let De;
    if (h) {
      if (!Array.isArray($))
        throw new Error(Br(2));
      De = $.some((St) => F0(St, se.props.value)), De && wr && xt.push(se.props.children);
    } else
      De = F0($, se.props.value), De && wr && (Sr = se.props.children);
    return /* @__PURE__ */ w.cloneElement(se, {
      "aria-selected": De ? "true" : "false",
      onClick: We(se),
      onKeyUp: (St) => {
        St.key === " " && St.preventDefault(), se.props.onKeyUp && se.props.onKeyUp(St);
      },
      role: "option",
      selected: De,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": se.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  wr && (h ? xt.length === 0 ? te = null : te = xt.reduce((se, De, St) => (se.push(De), St < xt.length - 1 && se.push(", "), se), []) : te = Sr);
  let rt = zt;
  !i && ze && ae && (rt = me.clientWidth);
  let ot;
  typeof D < "u" ? ot = D : ot = d ? null : 0;
  const at = j.id || (p ? `mui-component-select-${p}` : void 0), sn = {
    ...t,
    variant: W,
    value: $,
    open: Tt,
    error: y
  }, ve = kI(sn), Rt = {
    ...m.PaperProps,
    ...(Cy = m.slotProps) == null ? void 0 : Cy.paper
  }, Wi = yd();
  return /* @__PURE__ */ _.jsxs(w.Fragment, {
    children: [/* @__PURE__ */ _.jsx(SI, {
      as: "div",
      ref: Re,
      tabIndex: ot,
      role: "combobox",
      "aria-controls": Wi,
      "aria-disabled": d ? "true" : void 0,
      "aria-expanded": Tt ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": o,
      "aria-labelledby": [S, at].filter(Boolean).join(" ") || void 0,
      "aria-describedby": r,
      "aria-required": N ? "true" : void 0,
      "aria-invalid": y ? "true" : void 0,
      onKeyDown: Et,
      onMouseDown: d || b ? null : ge,
      onBlur: Ye,
      onFocus: E,
      ...j,
      ownerState: sn,
      className: ee(j.className, ve.select, l),
      id: at,
      children: _I(te) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        L0 || (L0 = /* @__PURE__ */ _.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : te
    }), /* @__PURE__ */ _.jsx(CI, {
      "aria-invalid": y,
      value: Array.isArray($) ? $.join(",") : $,
      name: p,
      ref: Y,
      "aria-hidden": !0,
      onChange: Ae,
      tabIndex: -1,
      disabled: d,
      className: ve.nativeInput,
      autoFocus: s,
      required: N,
      ...A,
      ownerState: sn
    }), /* @__PURE__ */ _.jsx(wI, {
      as: g,
      className: ve.icon,
      ownerState: sn
    }), /* @__PURE__ */ _.jsx(aI, {
      id: `menu-${p || ""}`,
      anchorEl: me,
      open: Tt,
      onClose: $e,
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
        "aria-labelledby": S,
        role: "listbox",
        "aria-multiselectable": h ? "true" : void 0,
        disableListWrap: !0,
        id: Wi,
        ...m.MenuListProps
      },
      slotProps: {
        ...m.slotProps,
        paper: {
          ...Rt,
          style: {
            minWidth: rt,
            ...Rt != null ? Rt.style : null
          }
        }
      },
      children: Kr
    })]
  });
}), TI = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, ay = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Xn(e) && e !== "variant",
  slot: "Root"
}, RI = G(oy, ay)(""), PI = G(iy, ay)(""), MI = G(ry, ay)(""), iS = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: i = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: u = !1,
    IconComponent: c = ZR,
    id: d,
    input: f,
    inputProps: y,
    label: g,
    labelId: v,
    MenuProps: S,
    multiple: m = !1,
    native: h = !1,
    onClose: p,
    onOpen: x,
    open: C,
    renderValue: k,
    SelectDisplayProps: E,
    variant: T = "outlined",
    ...M
  } = r, b = h ? fI : EI, P = Ss(), N = Di({
    props: r,
    muiFormControl: P,
    states: ["variant", "error"]
  }), j = N.variant || T, D = {
    ...r,
    variant: j,
    classes: i
  }, L = TI(D), {
    root: B,
    ...W
  } = L, A = f || {
    standard: /* @__PURE__ */ _.jsx(RI, {
      ownerState: D
    }),
    outlined: /* @__PURE__ */ _.jsx(PI, {
      label: g,
      ownerState: D
    }),
    filled: /* @__PURE__ */ _.jsx(MI, {
      ownerState: D
    })
  }[j], $ = Ft(n, Ol(A));
  return /* @__PURE__ */ _.jsx(w.Fragment, {
    children: /* @__PURE__ */ w.cloneElement(A, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: b,
      inputProps: {
        children: s,
        error: N.error,
        IconComponent: c,
        variant: j,
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
          MenuProps: S,
          onClose: p,
          onOpen: x,
          open: C,
          renderValue: k,
          SelectDisplayProps: {
            id: d,
            ...E
          }
        },
        ...y,
        classes: y ? gt(W, y.classes) : W,
        ...f ? f.props.inputProps : {}
      },
      ...(m && h || u) && j === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: ee(A.props.className, a, L.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!f && {
        variant: j
      },
      ...M
    })
  });
});
iS.muiName = "Select";
const Yr = vT({
  createStyledComponent: G("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => we({
    props: e,
    name: "MuiStack"
  })
});
function II(e) {
  return Se("MuiTextField", e);
}
_e("MuiTextField", ["root"]);
const OI = {
  standard: oy,
  filled: ry,
  outlined: iy
}, AI = (e) => {
  const {
    classes: t
  } = e;
  return ke({
    root: ["root"]
  }, II, t);
}, $I = G(yM, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), fr = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = we({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: i,
    className: a,
    color: l = "primary",
    defaultValue: u,
    disabled: c = !1,
    error: d = !1,
    FormHelperTextProps: f,
    fullWidth: y = !1,
    helperText: g,
    id: v,
    InputLabelProps: S,
    inputProps: m,
    InputProps: h,
    inputRef: p,
    label: x,
    maxRows: C,
    minRows: k,
    multiline: E = !1,
    name: T,
    onBlur: M,
    onChange: b,
    onFocus: P,
    placeholder: N,
    required: j = !1,
    rows: D,
    select: L = !1,
    SelectProps: B,
    slots: W = {},
    slotProps: A = {},
    type: $,
    value: U,
    variant: Q = "outlined",
    ...ue
  } = r, Y = {
    ...r,
    autoFocus: s,
    color: l,
    disabled: c,
    error: d,
    fullWidth: y,
    multiline: E,
    required: j,
    select: L,
    variant: Q
  }, J = AI(Y), ae = yd(v), Fe = g && ae ? `${ae}-helper-text` : void 0, ze = x && ae ? `${ae}-label` : void 0, zt = OI[Q], Ve = {
    slots: W,
    slotProps: {
      input: h,
      inputLabel: S,
      htmlInput: m,
      formHelperText: f,
      select: B,
      ...A
    }
  }, he = {}, Re = Ve.slotProps.inputLabel;
  Q === "outlined" && (Re && typeof Re.shrink < "u" && (he.notched = Re.shrink), he.label = x), L && ((!B || !B.native) && (he.id = void 0), he["aria-describedby"] = void 0);
  const [me, Qe] = Rn("input", {
    elementType: zt,
    externalForwardedProps: Ve,
    additionalProps: he,
    ownerState: Y
  }), [ge, $e] = Rn("inputLabel", {
    elementType: jM,
    externalForwardedProps: Ve,
    ownerState: Y
  }), [bt, Ae] = Rn("htmlInput", {
    elementType: "input",
    externalForwardedProps: Ve,
    ownerState: Y
  }), [We, Et] = Rn("formHelperText", {
    elementType: xM,
    externalForwardedProps: Ve,
    ownerState: Y
  }), [Tt, Ye] = Rn("select", {
    elementType: iS,
    externalForwardedProps: Ve,
    ownerState: Y
  }), te = /* @__PURE__ */ _.jsx(me, {
    "aria-describedby": Fe,
    autoComplete: o,
    autoFocus: s,
    defaultValue: u,
    fullWidth: y,
    multiline: E,
    name: T,
    rows: D,
    maxRows: C,
    minRows: k,
    type: $,
    value: U,
    id: ae,
    inputRef: p,
    onBlur: M,
    onChange: b,
    onFocus: P,
    placeholder: N,
    inputProps: Ae,
    slots: {
      input: W.htmlInput ? bt : void 0
    },
    ...Qe
  });
  return /* @__PURE__ */ _.jsxs($I, {
    className: ee(J.root, a),
    disabled: c,
    error: d,
    fullWidth: y,
    ref: n,
    required: j,
    color: l,
    variant: Q,
    ownerState: Y,
    ...ue,
    children: [x != null && x !== "" && /* @__PURE__ */ _.jsx(ge, {
      htmlFor: ae,
      id: ze,
      ...$e,
      children: x
    }), L ? /* @__PURE__ */ _.jsx(Tt, {
      "aria-describedby": Fe,
      id: ae,
      labelId: ze,
      value: U,
      input: te,
      ...Ye,
      children: i
    }) : te, g && /* @__PURE__ */ _.jsx(We, {
      id: Fe,
      ...Et,
      children: g
    })]
  });
});
function NI(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
NI(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Al = (e) => typeof e == "number" && !isNaN(e), cs = (e) => typeof e == "string", Vr = (e) => typeof e == "function", LI = (e) => cs(e) || Al(e), Qp = (e) => cs(e) || Vr(e) ? e : null, FI = (e, t) => e === !1 || Al(e) && e > 0 ? e : t, Zp = (e) => w.isValidElement(e) || cs(e) || Vr(e) || Al(e);
function jI(e, t, n = 300) {
  let { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    o.minHeight = "initial", o.height = r + "px", o.transition = `all ${n}ms`, requestAnimationFrame(() => {
      o.height = "0", o.padding = "0", o.margin = "0", setTimeout(t, n);
    });
  });
}
function zI({ enter: e, exit: t, appendPosition: n = !1, collapse: r = !0, collapseDuration: o = 300 }) {
  return function({ children: s, position: i, preventExitTransition: a, done: l, nodeRef: u, isIn: c, playToast: d }) {
    let f = n ? `${e}--${i}` : e, y = n ? `${t}--${i}` : t, g = w.useRef(0);
    return w.useLayoutEffect(() => {
      let v = u.current, S = f.split(" "), m = (h) => {
        h.target === u.current && (d(), v.removeEventListener("animationend", m), v.removeEventListener("animationcancel", m), g.current === 0 && h.type !== "animationcancel" && v.classList.remove(...S));
      };
      v.classList.add(...S), v.addEventListener("animationend", m), v.addEventListener("animationcancel", m);
    }, []), w.useEffect(() => {
      let v = u.current, S = () => {
        v.removeEventListener("animationend", S), r ? jI(v, l, o) : l();
      };
      c || (a ? S() : (g.current = 1, v.className += ` ${y}`, v.addEventListener("animationend", S)));
    }, [c]), le.createElement(le.Fragment, null, s);
  };
}
function j0(e, t) {
  return { content: aS(e.content, e.props), containerId: e.props.containerId, id: e.props.toastId, theme: e.props.theme, type: e.props.type, data: e.props.data || {}, isLoading: e.props.isLoading, icon: e.props.icon, reason: e.removalReason, status: t };
}
function aS(e, t, n = !1) {
  return w.isValidElement(e) && !cs(e.type) ? w.cloneElement(e, { closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n }) : Vr(e) ? e({ closeToast: t.closeToast, toastProps: t, data: t.data, isPaused: n }) : e;
}
function DI({ closeToast: e, theme: t, ariaLabel: n = "close" }) {
  return le.createElement("button", { className: `Toastify__close-button Toastify__close-button--${t}`, type: "button", onClick: (r) => {
    r.stopPropagation(), e(!0);
  }, "aria-label": n }, le.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, le.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function BI({ delay: e, isRunning: t, closeToast: n, type: r = "default", hide: o, className: s, controlledProgress: i, progress: a, rtl: l, isIn: u, theme: c }) {
  let d = o || i && a === 0, f = { animationDuration: `${e}ms`, animationPlayState: t ? "running" : "paused" };
  i && (f.transform = `scaleX(${a})`);
  let y = ee("Toastify__progress-bar", i ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${c}`, `Toastify__progress-bar--${r}`, { "Toastify__progress-bar--rtl": l }), g = Vr(s) ? s({ rtl: l, type: r, defaultClassName: y }) : ee(y, s), v = { [i && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: i && a < 1 ? null : () => {
    u && n();
  } };
  return le.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": d }, le.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${r}` }), le.createElement("div", { role: "progressbar", "aria-hidden": d ? "true" : "false", "aria-label": "notification timer", className: g, style: f, ...v }));
}
var UI = 1, lS = () => `${UI++}`;
function VI(e, t, n) {
  let r = 1, o = 0, s = [], i = [], a = t, l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), c = (h) => (u.add(h), () => u.delete(h)), d = () => {
    i = Array.from(l.values()), u.forEach((h) => h());
  }, f = ({ containerId: h, toastId: p, updateId: x }) => {
    let C = h ? h !== e : e !== 1, k = l.has(p) && x == null;
    return C || k;
  }, y = (h, p) => {
    l.forEach((x) => {
      var C;
      (p == null || p === x.props.toastId) && ((C = x.toggle) == null || C.call(x, h));
    });
  }, g = (h) => {
    var p, x;
    (x = (p = h.props) == null ? void 0 : p.onClose) == null || x.call(p, h.removalReason), h.isActive = !1;
  }, v = (h) => {
    if (h == null) l.forEach(g);
    else {
      let p = l.get(h);
      p && g(p);
    }
    d();
  }, S = () => {
    o -= s.length, s = [];
  }, m = (h) => {
    var p, x;
    let { toastId: C, updateId: k } = h.props, E = k == null;
    h.staleId && l.delete(h.staleId), h.isActive = !0, l.set(C, h), d(), n(j0(h, E ? "added" : "updated")), E && ((x = (p = h.props).onOpen) == null || x.call(p));
  };
  return { id: e, props: a, observe: c, toggle: y, removeToast: v, toasts: l, clearQueue: S, buildToast: (h, p) => {
    if (f(p)) return;
    let { toastId: x, updateId: C, data: k, staleId: E, delay: T } = p, M = C == null;
    M && o++;
    let b = { ...a, style: a.toastStyle, key: r++, ...Object.fromEntries(Object.entries(p).filter(([N, j]) => j != null)), toastId: x, updateId: C, data: k, isIn: !1, className: Qp(p.className || a.toastClassName), progressClassName: Qp(p.progressClassName || a.progressClassName), autoClose: p.isLoading ? !1 : FI(p.autoClose, a.autoClose), closeToast(N) {
      l.get(x).removalReason = N, v(x);
    }, deleteToast() {
      let N = l.get(x);
      if (N != null) {
        if (n(j0(N, "removed")), l.delete(x), o--, o < 0 && (o = 0), s.length > 0) {
          m(s.shift());
          return;
        }
        d();
      }
    } };
    b.closeButton = a.closeButton, p.closeButton === !1 || Zp(p.closeButton) ? b.closeButton = p.closeButton : p.closeButton === !0 && (b.closeButton = Zp(a.closeButton) ? a.closeButton : !0);
    let P = { content: h, props: b, staleId: E };
    a.limit && a.limit > 0 && o > a.limit && M ? s.push(P) : Al(T) ? setTimeout(() => {
      m(P);
    }, T) : m(P);
  }, setProps(h) {
    a = h;
  }, setToggle: (h, p) => {
    let x = l.get(h);
    x && (x.toggle = p);
  }, isToastActive: (h) => {
    var p;
    return (p = l.get(h)) == null ? void 0 : p.isActive;
  }, getSnapshot: () => i };
}
var Vt = /* @__PURE__ */ new Map(), Xa = [], Gp = /* @__PURE__ */ new Set(), WI = (e) => Gp.forEach((t) => t(e)), uS = () => Vt.size > 0;
function HI() {
  Xa.forEach((e) => dS(e.content, e.options)), Xa = [];
}
var KI = (e, { containerId: t }) => {
  var n;
  return (n = Vt.get(t || 1)) == null ? void 0 : n.toasts.get(e);
};
function cS(e, t) {
  var n;
  if (t) return !!((n = Vt.get(t)) != null && n.isToastActive(e));
  let r = !1;
  return Vt.forEach((o) => {
    o.isToastActive(e) && (r = !0);
  }), r;
}
function QI(e) {
  if (!uS()) {
    Xa = Xa.filter((t) => e != null && t.options.toastId !== e);
    return;
  }
  if (e == null || LI(e)) Vt.forEach((t) => {
    t.removeToast(e);
  });
  else if (e && ("containerId" in e || "id" in e)) {
    let t = Vt.get(e.containerId);
    t ? t.removeToast(e.id) : Vt.forEach((n) => {
      n.removeToast(e.id);
    });
  }
}
var ZI = (e = {}) => {
  Vt.forEach((t) => {
    t.props.limit && (!e.containerId || t.id === e.containerId) && t.clearQueue();
  });
};
function dS(e, t) {
  Zp(e) && (uS() || Xa.push({ content: e, options: t }), Vt.forEach((n) => {
    n.buildToast(e, t);
  }));
}
function GI(e) {
  var t;
  (t = Vt.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn);
}
function fS(e, t) {
  Vt.forEach((n) => {
    (t == null || !(t != null && t.containerId) || (t == null ? void 0 : t.containerId) === n.id) && n.toggle(e, t == null ? void 0 : t.id);
  });
}
function qI(e) {
  let t = e.containerId || 1;
  return { subscribe(n) {
    let r = VI(t, e, WI);
    Vt.set(t, r);
    let o = r.observe(n);
    return HI(), () => {
      o(), Vt.delete(t);
    };
  }, setProps(n) {
    var r;
    (r = Vt.get(t)) == null || r.setProps(n);
  }, getSnapshot() {
    var n;
    return (n = Vt.get(t)) == null ? void 0 : n.getSnapshot();
  } };
}
function XI(e) {
  return Gp.add(e), () => {
    Gp.delete(e);
  };
}
function YI(e) {
  return e && (cs(e.toastId) || Al(e.toastId)) ? e.toastId : lS();
}
function $l(e, t) {
  return dS(e, t), t.toastId;
}
function _d(e, t) {
  return { ...t, type: t && t.type || e, toastId: YI(t) };
}
function kd(e) {
  return (t, n) => $l(t, _d(e, n));
}
function re(e, t) {
  return $l(e, _d("default", t));
}
re.loading = (e, t) => $l(e, _d("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }));
function JI(e, { pending: t, error: n, success: r }, o) {
  let s;
  t && (s = cs(t) ? re.loading(t, o) : re.loading(t.render, { ...o, ...t }));
  let i = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, a = (u, c, d) => {
    if (c == null) {
      re.dismiss(s);
      return;
    }
    let f = { type: u, ...i, ...o, data: d }, y = cs(c) ? { render: c } : c;
    return s ? re.update(s, { ...f, ...y }) : re(y.render, { ...f, ...y }), d;
  }, l = Vr(e) ? e() : e;
  return l.then((u) => a("success", r, u)).catch((u) => a("error", n, u)), l;
}
re.promise = JI;
re.success = kd("success");
re.info = kd("info");
re.error = kd("error");
re.warning = kd("warning");
re.warn = re.warning;
re.dark = (e, t) => $l(e, _d("default", { theme: "dark", ...t }));
function eO(e) {
  QI(e);
}
re.dismiss = eO;
re.clearWaitingQueue = ZI;
re.isActive = cS;
re.update = (e, t = {}) => {
  let n = KI(e, t);
  if (n) {
    let { props: r, content: o } = n, s = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: lS() };
    s.toastId !== e && (s.staleId = e);
    let i = s.render || o;
    delete s.render, $l(i, s);
  }
};
re.done = (e) => {
  re.update(e, { progress: 1 });
};
re.onChange = XI;
re.play = (e) => fS(!0, e);
re.pause = (e) => fS(!1, e);
function tO(e) {
  var t;
  let { subscribe: n, getSnapshot: r, setProps: o } = w.useRef(qI(e)).current;
  o(e);
  let s = (t = w.useSyncExternalStore(n, r, r)) == null ? void 0 : t.slice();
  function i(a) {
    if (!s) return [];
    let l = /* @__PURE__ */ new Map();
    return e.newestOnTop && s.reverse(), s.forEach((u) => {
      let { position: c } = u.props;
      l.has(c) || l.set(c, []), l.get(c).push(u);
    }), Array.from(l, (u) => a(u[0], u[1]));
  }
  return { getToastToRender: i, isToastActive: cS, count: s == null ? void 0 : s.length };
}
function nO(e) {
  let [t, n] = w.useState(!1), [r, o] = w.useState(!1), s = w.useRef(null), i = w.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: a, pauseOnHover: l, closeToast: u, onClick: c, closeOnClick: d } = e;
  GI({ id: e.toastId, containerId: e.containerId, fn: n }), w.useEffect(() => {
    if (e.pauseOnFocusLoss) return f(), () => {
      y();
    };
  }, [e.pauseOnFocusLoss]);
  function f() {
    document.hasFocus() || m(), window.addEventListener("focus", S), window.addEventListener("blur", m);
  }
  function y() {
    window.removeEventListener("focus", S), window.removeEventListener("blur", m);
  }
  function g(E) {
    if (e.draggable === !0 || e.draggable === E.pointerType) {
      h();
      let T = s.current;
      i.canCloseOnClick = !0, i.canDrag = !0, T.style.transition = "none", e.draggableDirection === "x" ? (i.start = E.clientX, i.removalDistance = T.offsetWidth * (e.draggablePercent / 100)) : (i.start = E.clientY, i.removalDistance = T.offsetHeight * (e.draggablePercent === 80 ? e.draggablePercent * 1.5 : e.draggablePercent) / 100);
    }
  }
  function v(E) {
    let { top: T, bottom: M, left: b, right: P } = s.current.getBoundingClientRect();
    E.nativeEvent.type !== "touchend" && e.pauseOnHover && E.clientX >= b && E.clientX <= P && E.clientY >= T && E.clientY <= M ? m() : S();
  }
  function S() {
    n(!0);
  }
  function m() {
    n(!1);
  }
  function h() {
    i.didMove = !1, document.addEventListener("pointermove", x), document.addEventListener("pointerup", C);
  }
  function p() {
    document.removeEventListener("pointermove", x), document.removeEventListener("pointerup", C);
  }
  function x(E) {
    let T = s.current;
    if (i.canDrag && T) {
      i.didMove = !0, t && m(), e.draggableDirection === "x" ? i.delta = E.clientX - i.start : i.delta = E.clientY - i.start, i.start !== E.clientX && (i.canCloseOnClick = !1);
      let M = e.draggableDirection === "x" ? `${i.delta}px, var(--y)` : `0, calc(${i.delta}px + var(--y))`;
      T.style.transform = `translate3d(${M},0)`, T.style.opacity = `${1 - Math.abs(i.delta / i.removalDistance)}`;
    }
  }
  function C() {
    p();
    let E = s.current;
    if (i.canDrag && i.didMove && E) {
      if (i.canDrag = !1, Math.abs(i.delta) > i.removalDistance) {
        o(!0), e.closeToast(!0), e.collapseAll();
        return;
      }
      E.style.transition = "transform 0.2s, opacity 0.2s", E.style.removeProperty("transform"), E.style.removeProperty("opacity");
    }
  }
  let k = { onPointerDown: g, onPointerUp: v };
  return a && l && (k.onMouseEnter = m, e.stacked || (k.onMouseLeave = S)), d && (k.onClick = (E) => {
    c && c(E), i.canCloseOnClick && u(!0);
  }), { playToast: S, pauseToast: m, isRunning: t, preventExitTransition: r, toastRef: s, eventHandlers: k };
}
var rO = typeof window < "u" ? w.useLayoutEffect : w.useEffect, Ed = ({ theme: e, type: t, isLoading: n, ...r }) => le.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`, ...r });
function oO(e) {
  return le.createElement(Ed, { ...e }, le.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function sO(e) {
  return le.createElement(Ed, { ...e }, le.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function iO(e) {
  return le.createElement(Ed, { ...e }, le.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function aO(e) {
  return le.createElement(Ed, { ...e }, le.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function lO() {
  return le.createElement("div", { className: "Toastify__spinner" });
}
var qp = { info: sO, warning: oO, success: iO, error: aO, spinner: lO }, uO = (e) => e in qp;
function cO({ theme: e, type: t, isLoading: n, icon: r }) {
  let o = null, s = { theme: e, type: t };
  return r === !1 || (Vr(r) ? o = r({ ...s, isLoading: n }) : w.isValidElement(r) ? o = w.cloneElement(r, s) : n ? o = qp.spinner() : uO(t) && (o = qp[t](s))), o;
}
var dO = (e) => {
  let { isRunning: t, preventExitTransition: n, toastRef: r, eventHandlers: o, playToast: s } = nO(e), { closeButton: i, children: a, autoClose: l, onClick: u, type: c, hideProgressBar: d, closeToast: f, transition: y, position: g, className: v, style: S, progressClassName: m, updateId: h, role: p, progress: x, rtl: C, toastId: k, deleteToast: E, isIn: T, isLoading: M, closeOnClick: b, theme: P, ariaLabel: N } = e, j = ee("Toastify__toast", `Toastify__toast-theme--${P}`, `Toastify__toast--${c}`, { "Toastify__toast--rtl": C }, { "Toastify__toast--close-on-click": b }), D = Vr(v) ? v({ rtl: C, position: g, type: c, defaultClassName: j }) : ee(j, v), L = cO(e), B = !!x || !l, W = { closeToast: f, type: c, theme: P }, A = null;
  return i === !1 || (Vr(i) ? A = i(W) : w.isValidElement(i) ? A = w.cloneElement(i, W) : A = DI(W)), le.createElement(y, { isIn: T, done: E, position: g, preventExitTransition: n, nodeRef: r, playToast: s }, le.createElement("div", { id: k, tabIndex: 0, onClick: u, "data-in": T, className: D, ...o, style: S, ref: r, ...T && { role: p, "aria-label": N } }, L != null && le.createElement("div", { className: ee("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !M }) }, L), aS(a, e, !t), A, !e.customProgressBar && le.createElement(BI, { ...h && !B ? { key: `p-${h}` } : {}, rtl: C, theme: P, delay: l, isRunning: t, isIn: T, closeToast: f, hide: d, type: c, className: m, controlledProgress: B, progress: x || 0 })));
}, fO = (e, t = !1) => ({ enter: `Toastify--animate Toastify__${e}-enter`, exit: `Toastify--animate Toastify__${e}-exit`, appendPosition: t }), pO = zI(fO("bounce", !0)), hO = { position: "top-right", transition: pO, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (e) => e.altKey && e.code === "KeyT" };
function mO(e) {
  let t = { ...hO, ...e }, n = e.stacked, [r, o] = w.useState(!0), s = w.useRef(null), { getToastToRender: i, isToastActive: a, count: l } = tO(t), { className: u, style: c, rtl: d, containerId: f, hotKeys: y } = t;
  function g(S) {
    let m = ee("Toastify__toast-container", `Toastify__toast-container--${S}`, { "Toastify__toast-container--rtl": d });
    return Vr(u) ? u({ position: S, rtl: d, defaultClassName: m }) : ee(m, Qp(u));
  }
  function v() {
    n && (o(!0), re.play());
  }
  return rO(() => {
    var S;
    if (n) {
      let m = s.current.querySelectorAll('[data-in="true"]'), h = 12, p = (S = t.position) == null ? void 0 : S.includes("top"), x = 0, C = 0;
      Array.from(m).reverse().forEach((k, E) => {
        let T = k;
        T.classList.add("Toastify__toast--stacked"), E > 0 && (T.dataset.collapsed = `${r}`), T.dataset.pos || (T.dataset.pos = p ? "top" : "bot");
        let M = x * (r ? 0.2 : 1) + (r ? 0 : h * E);
        T.style.setProperty("--y", `${p ? M : M * -1}px`), T.style.setProperty("--g", `${h}`), T.style.setProperty("--s", `${1 - (r ? C : 0)}`), x += T.offsetHeight, C += 0.025;
      });
    }
  }, [r, l, n]), w.useEffect(() => {
    function S(m) {
      var h;
      let p = s.current;
      y(m) && ((h = p.querySelector('[tabIndex="0"]')) == null || h.focus(), o(!1), re.pause()), m.key === "Escape" && (document.activeElement === p || p != null && p.contains(document.activeElement)) && (o(!0), re.play());
    }
    return document.addEventListener("keydown", S), () => {
      document.removeEventListener("keydown", S);
    };
  }, [y]), le.createElement("section", { ref: s, className: "Toastify", id: f, onMouseEnter: () => {
    n && (o(!1), re.pause());
  }, onMouseLeave: v, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": t["aria-label"] }, i((S, m) => {
    let h = m.length ? { ...c } : { ...c, pointerEvents: "none" };
    return le.createElement("div", { tabIndex: -1, className: g(S), "data-stacked": n, style: h, key: `c-${S}` }, m.map(({ content: p, props: x }) => le.createElement(dO, { ...x, stacked: n, collapseAll: v, isIn: a(x.toastId, x.containerId), key: `t-${x.key}` }, p)));
  }));
}
var Bi = class {
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
}, ds = typeof window > "u" || "Deno" in globalThis;
function wn() {
}
function yO(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xp(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function pS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ri(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function z0(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: a
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== ly(i, t.options))
        return !1;
    } else if (!Ya(t.queryKey, i))
      return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if (n === "active" && !l || n === "inactive" && l)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || s && !s(t));
}
function D0(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (fs(t.options.mutationKey) !== fs(s))
        return !1;
    } else if (!Ya(t.options.mutationKey, s))
      return !1;
  }
  return !(r && t.state.status !== r || o && !o(t));
}
function ly(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || fs)(e);
}
function fs(e) {
  return JSON.stringify(
    e,
    (t, n) => Yp(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n
  );
}
function Ya(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Ya(e[n], t[n])) : !1;
}
function hS(e, t) {
  if (e === t)
    return e;
  const n = B0(e) && B0(t);
  if (n || Yp(e) && Yp(t)) {
    const r = n ? e : Object.keys(e), o = r.length, s = n ? t : Object.keys(t), i = s.length, a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < i; u++) {
      const c = n ? u : s[u];
      (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (a[c] = void 0, l++) : (a[c] = hS(e[c], t[c]), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return o === i && l === o ? e : a;
  }
  return t;
}
function gc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function B0(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Yp(e) {
  if (!U0(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!U0(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function U0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function gO(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Jp(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? hS(e, t) : t;
}
function vO(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function bO(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var uy = Symbol();
function mS(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === uy ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Qo, no, si, bv, xO = (bv = class extends Bi {
  constructor() {
    super();
    ne(this, Qo);
    ne(this, no);
    ne(this, si);
    H(this, si, (t) => {
      if (!ds && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    R(this, no) || this.setEventListener(R(this, si));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = R(this, no)) == null || t.call(this), H(this, no, void 0));
  }
  setEventListener(t) {
    var n;
    H(this, si, t), (n = R(this, no)) == null || n.call(this), H(this, no, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    R(this, Qo) !== t && (H(this, Qo, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof R(this, Qo) == "boolean" ? R(this, Qo) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Qo = new WeakMap(), no = new WeakMap(), si = new WeakMap(), bv), cy = new xO(), ii, ro, ai, xv, SO = (xv = class extends Bi {
  constructor() {
    super();
    ne(this, ii, !0);
    ne(this, ro);
    ne(this, ai);
    H(this, ai, (t) => {
      if (!ds && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    R(this, ro) || this.setEventListener(R(this, ai));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = R(this, ro)) == null || t.call(this), H(this, ro, void 0));
  }
  setEventListener(t) {
    var n;
    H(this, ai, t), (n = R(this, ro)) == null || n.call(this), H(this, ro, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    R(this, ii) !== t && (H(this, ii, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return R(this, ii);
  }
}, ii = new WeakMap(), ro = new WeakMap(), ai = new WeakMap(), xv), vc = new SO();
function eh() {
  let e, t;
  const n = new Promise((o, s) => {
    e = o, t = s;
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
function wO(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function yS(e) {
  return (e ?? "online") === "online" ? vc.isOnline() : !0;
}
var gS = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function kf(e) {
  return e instanceof gS;
}
function vS(e) {
  let t = !1, n = 0, r = !1, o;
  const s = eh(), i = (v) => {
    var S;
    r || (f(new gS(v)), (S = e.abort) == null || S.call(e));
  }, a = () => {
    t = !0;
  }, l = () => {
    t = !1;
  }, u = () => cy.isFocused() && (e.networkMode === "always" || vc.isOnline()) && e.canRun(), c = () => yS(e.networkMode) && e.canRun(), d = (v) => {
    var S;
    r || (r = !0, (S = e.onSuccess) == null || S.call(e, v), o == null || o(), s.resolve(v));
  }, f = (v) => {
    var S;
    r || (r = !0, (S = e.onError) == null || S.call(e, v), o == null || o(), s.reject(v));
  }, y = () => new Promise((v) => {
    var S;
    o = (m) => {
      (r || u()) && v(m);
    }, (S = e.onPause) == null || S.call(e);
  }).then(() => {
    var v;
    o = void 0, r || (v = e.onContinue) == null || v.call(e);
  }), g = () => {
    if (r)
      return;
    let v;
    const S = n === 0 ? e.initialPromise : void 0;
    try {
      v = S ?? e.fn();
    } catch (m) {
      v = Promise.reject(m);
    }
    Promise.resolve(v).then(d).catch((m) => {
      var k;
      if (r)
        return;
      const h = e.retry ?? (ds ? 0 : 3), p = e.retryDelay ?? wO, x = typeof p == "function" ? p(n, m) : p, C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, m);
      if (t || !C) {
        f(m);
        return;
      }
      n++, (k = e.onFail) == null || k.call(e, n, m), gO(x).then(() => u() ? void 0 : y()).then(() => {
        t ? f(m) : g();
      });
    });
  };
  return {
    promise: s,
    cancel: i,
    continue: () => (o == null || o(), s),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? g() : y().then(g), s)
  };
}
function CO() {
  let e = [], t = 0, n = (a) => {
    a();
  }, r = (a) => {
    a();
  }, o = (a) => setTimeout(a, 0);
  const s = (a) => {
    t ? e.push(a) : o(() => {
      n(a);
    });
  }, i = () => {
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
        t--, t || i();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...l) => {
      s(() => {
        a(...l);
      });
    },
    schedule: s,
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
var ft = CO(), Zo, Sv, bS = (Sv = class {
  constructor() {
    ne(this, Zo);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Xp(this.gcTime) && H(this, Zo, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (ds ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    R(this, Zo) && (clearTimeout(R(this, Zo)), H(this, Zo, void 0));
  }
}, Zo = new WeakMap(), Sv), li, ui, Sn, Ot, ml, Go, Fn, Er, wv, _O = (wv = class extends bS {
  constructor(t) {
    super();
    ne(this, Fn);
    ne(this, li);
    ne(this, ui);
    ne(this, Sn);
    ne(this, Ot);
    ne(this, ml);
    ne(this, Go);
    H(this, Go, !1), H(this, ml, t.defaultOptions), this.setOptions(t.options), this.observers = [], H(this, Sn, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, H(this, li, kO(this.options)), this.state = t.state ?? R(this, li), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = R(this, Ot)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...R(this, ml), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && R(this, Sn).remove(this);
  }
  setData(t, n) {
    const r = Jp(this.state.data, t, this.options);
    return fe(this, Fn, Er).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    fe(this, Fn, Er).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, o;
    const n = (r = R(this, Ot)) == null ? void 0 : r.promise;
    return (o = R(this, Ot)) == null || o.cancel(t), n ? n.then(wn).catch(wn) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(R(this, li));
  }
  isActive() {
    return this.observers.some(
      (t) => Dn(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === uy || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !pS(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Ot)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = R(this, Ot)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), R(this, Sn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (R(this, Ot) && (R(this, Go) ? R(this, Ot).cancel({ revert: !0 }) : R(this, Ot).cancelRetry()), this.scheduleGc()), R(this, Sn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || fe(this, Fn, Er).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var l, u, c;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (R(this, Ot))
        return R(this, Ot).continueRetry(), R(this, Ot).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    const r = new AbortController(), o = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (H(this, Go, !0), r.signal)
      });
    }, s = () => {
      const d = mS(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(f), H(this, Go, !1), this.options.persister ? this.options.persister(
        d,
        f,
        this
      ) : d(f);
    }, i = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: s
    };
    o(i), (l = this.options.behavior) == null || l.onFetch(
      i,
      this
    ), H(this, ui, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) && fe(this, Fn, Er).call(this, { type: "fetch", meta: (c = i.fetchOptions) == null ? void 0 : c.meta });
    const a = (d) => {
      var f, y, g, v;
      kf(d) && d.silent || fe(this, Fn, Er).call(this, {
        type: "error",
        error: d
      }), kf(d) || ((y = (f = R(this, Sn).config).onError) == null || y.call(
        f,
        d,
        this
      ), (v = (g = R(this, Sn).config).onSettled) == null || v.call(
        g,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return H(this, Ot, vS({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: i.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, y, g, v;
        if (d === void 0) {
          a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (S) {
          a(S);
          return;
        }
        (y = (f = R(this, Sn).config).onSuccess) == null || y.call(f, d, this), (v = (g = R(this, Sn).config).onSettled) == null || v.call(
          g,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (d, f) => {
        fe(this, Fn, Er).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        fe(this, Fn, Er).call(this, { type: "pause" });
      },
      onContinue: () => {
        fe(this, Fn, Er).call(this, { type: "continue" });
      },
      retry: i.options.retry,
      retryDelay: i.options.retryDelay,
      networkMode: i.options.networkMode,
      canRun: () => !0
    })), R(this, Ot).start();
  }
}, li = new WeakMap(), ui = new WeakMap(), Sn = new WeakMap(), Ot = new WeakMap(), ml = new WeakMap(), Go = new WeakMap(), Fn = new WeakSet(), Er = function(t) {
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
          ...xS(r.data, this.options),
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
        return kf(o) && o.revert && R(this, ui) ? { ...R(this, ui), fetchStatus: "idle" } : {
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
  this.state = n(this.state), ft.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), R(this, Sn).notify({ query: this, type: "updated", action: t });
  });
}, wv);
function xS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: yS(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function kO(e) {
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
var or, Cv, EO = (Cv = class extends Bi {
  constructor(t = {}) {
    super();
    ne(this, or);
    this.config = t, H(this, or, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const o = n.queryKey, s = n.queryHash ?? ly(o, n);
    let i = this.get(s);
    return i || (i = new _O({
      cache: this,
      queryKey: o,
      queryHash: s,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(i)), i;
  }
  add(t) {
    R(this, or).has(t.queryHash) || (R(this, or).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = R(this, or).get(t.queryHash);
    n && (t.destroy(), n === t && R(this, or).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    ft.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return R(this, or).get(t);
  }
  getAll() {
    return [...R(this, or).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => z0(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => z0(t, r)) : n;
  }
  notify(t) {
    ft.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    ft.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ft.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, or = new WeakMap(), Cv), sr, Dt, qo, ir, Gr, _v, TO = (_v = class extends bS {
  constructor(t) {
    super();
    ne(this, ir);
    ne(this, sr);
    ne(this, Dt);
    ne(this, qo);
    this.mutationId = t.mutationId, H(this, Dt, t.mutationCache), H(this, sr, []), this.state = t.state || SS(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    R(this, sr).includes(t) || (R(this, sr).push(t), this.clearGcTimeout(), R(this, Dt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    H(this, sr, R(this, sr).filter((n) => n !== t)), this.scheduleGc(), R(this, Dt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    R(this, sr).length || (this.state.status === "pending" ? this.scheduleGc() : R(this, Dt).remove(this));
  }
  continue() {
    var t;
    return ((t = R(this, qo)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, s, i, a, l, u, c, d, f, y, g, v, S, m, h, p, x, C, k, E;
    H(this, qo, vS({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (T, M) => {
        fe(this, ir, Gr).call(this, { type: "failed", failureCount: T, error: M });
      },
      onPause: () => {
        fe(this, ir, Gr).call(this, { type: "pause" });
      },
      onContinue: () => {
        fe(this, ir, Gr).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => R(this, Dt).canRun(this)
    }));
    const n = this.state.status === "pending", r = !R(this, qo).canStart();
    try {
      if (!n) {
        fe(this, ir, Gr).call(this, { type: "pending", variables: t, isPaused: r }), await ((s = (o = R(this, Dt).config).onMutate) == null ? void 0 : s.call(
          o,
          t,
          this
        ));
        const M = await ((a = (i = this.options).onMutate) == null ? void 0 : a.call(i, t));
        M !== this.state.context && fe(this, ir, Gr).call(this, {
          type: "pending",
          context: M,
          variables: t,
          isPaused: r
        });
      }
      const T = await R(this, qo).start();
      return await ((u = (l = R(this, Dt).config).onSuccess) == null ? void 0 : u.call(
        l,
        T,
        t,
        this.state.context,
        this
      )), await ((d = (c = this.options).onSuccess) == null ? void 0 : d.call(c, T, t, this.state.context)), await ((y = (f = R(this, Dt).config).onSettled) == null ? void 0 : y.call(
        f,
        T,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSettled) == null ? void 0 : v.call(g, T, null, t, this.state.context)), fe(this, ir, Gr).call(this, { type: "success", data: T }), T;
    } catch (T) {
      try {
        throw await ((m = (S = R(this, Dt).config).onError) == null ? void 0 : m.call(
          S,
          T,
          t,
          this.state.context,
          this
        )), await ((p = (h = this.options).onError) == null ? void 0 : p.call(
          h,
          T,
          t,
          this.state.context
        )), await ((C = (x = R(this, Dt).config).onSettled) == null ? void 0 : C.call(
          x,
          void 0,
          T,
          this.state.variables,
          this.state.context,
          this
        )), await ((E = (k = this.options).onSettled) == null ? void 0 : E.call(
          k,
          void 0,
          T,
          t,
          this.state.context
        )), T;
      } finally {
        fe(this, ir, Gr).call(this, { type: "error", error: T });
      }
    } finally {
      R(this, Dt).runNext(this);
    }
  }
}, sr = new WeakMap(), Dt = new WeakMap(), qo = new WeakMap(), ir = new WeakSet(), Gr = function(t) {
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
  this.state = n(this.state), ft.batch(() => {
    R(this, sr).forEach((r) => {
      r.onMutationUpdate(t);
    }), R(this, Dt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, _v);
function SS() {
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
var an, yl, kv, RO = (kv = class extends Bi {
  constructor(t = {}) {
    super();
    ne(this, an);
    ne(this, yl);
    this.config = t, H(this, an, /* @__PURE__ */ new Map()), H(this, yl, Date.now());
  }
  build(t, n, r) {
    const o = new TO({
      mutationCache: this,
      mutationId: ++zl(this, yl)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(o), o;
  }
  add(t) {
    const n = cu(t), r = R(this, an).get(n) ?? [];
    r.push(t), R(this, an).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = cu(t);
    if (R(this, an).has(n)) {
      const o = (r = R(this, an).get(n)) == null ? void 0 : r.filter((s) => s !== t);
      o && (o.length === 0 ? R(this, an).delete(n) : R(this, an).set(n, o));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = R(this, an).get(cu(t))) == null ? void 0 : r.find((o) => o.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = R(this, an).get(cu(t))) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
  }
  clear() {
    ft.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...R(this, an).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => D0(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => D0(t, n));
  }
  notify(t) {
    ft.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return ft.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(wn))
      )
    );
  }
}, an = new WeakMap(), yl = new WeakMap(), kv);
function cu(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function V0(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, y, g;
      const r = t.options, o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, s = ((y = t.state.data) == null ? void 0 : y.pages) || [], i = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
      let a = { pages: [], pageParams: [] }, l = 0;
      const u = async () => {
        let v = !1;
        const S = (p) => {
          Object.defineProperty(p, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
              v = !0;
            }), t.signal)
          });
        }, m = mS(t.options, t.fetchOptions), h = async (p, x, C) => {
          if (v)
            return Promise.reject();
          if (x == null && p.pages.length)
            return Promise.resolve(p);
          const k = {
            queryKey: t.queryKey,
            pageParam: x,
            direction: C ? "backward" : "forward",
            meta: t.options.meta
          };
          S(k);
          const E = await m(
            k
          ), { maxPages: T } = t.options, M = C ? bO : vO;
          return {
            pages: M(p.pages, E, T),
            pageParams: M(p.pageParams, x, T)
          };
        };
        if (o && s.length) {
          const p = o === "backward", x = p ? PO : W0, C = {
            pages: s,
            pageParams: i
          }, k = x(r, C);
          a = await h(C, k, p);
        } else {
          const p = e ?? s.length;
          do {
            const x = l === 0 ? i[0] ?? r.initialPageParam : W0(r, a);
            if (l > 0 && x == null)
              break;
            a = await h(a, x), l++;
          } while (l < p);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var v, S;
        return (S = (v = t.options).persister) == null ? void 0 : S.call(
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
function W0(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function PO(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var tt, oo, so, ci, di, io, fi, pi, Ev, MO = (Ev = class {
  constructor(e = {}) {
    ne(this, tt);
    ne(this, oo);
    ne(this, so);
    ne(this, ci);
    ne(this, di);
    ne(this, io);
    ne(this, fi);
    ne(this, pi);
    H(this, tt, e.queryCache || new EO()), H(this, oo, e.mutationCache || new RO()), H(this, so, e.defaultOptions || {}), H(this, ci, /* @__PURE__ */ new Map()), H(this, di, /* @__PURE__ */ new Map()), H(this, io, 0);
  }
  mount() {
    zl(this, io)._++, R(this, io) === 1 && (H(this, fi, cy.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), R(this, tt).onFocus());
    })), H(this, pi, vc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), R(this, tt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    zl(this, io)._--, R(this, io) === 0 && ((e = R(this, fi)) == null || e.call(this), H(this, fi, void 0), (t = R(this, pi)) == null || t.call(this), H(this, pi, void 0));
  }
  isFetching(e) {
    return R(this, tt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return R(this, oo).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = R(this, tt).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = R(this, tt).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(ri(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return R(this, tt).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), o = R(this, tt).get(
      r.queryHash
    ), s = o == null ? void 0 : o.state.data, i = yO(t, s);
    if (i !== void 0)
      return R(this, tt).build(this, r).setData(i, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return ft.batch(
      () => R(this, tt).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = R(this, tt).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = R(this, tt);
    ft.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = R(this, tt), r = {
      type: "active",
      ...e
    };
    return ft.batch(() => (n.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: !0, ...t }, r = ft.batch(
      () => R(this, tt).findAll(e).map((o) => o.cancel(n))
    );
    return Promise.all(r).then(wn).catch(wn);
  }
  invalidateQueries(e, t = {}) {
    return ft.batch(() => {
      if (R(this, tt).findAll(e).forEach((r) => {
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
    }, r = ft.batch(
      () => R(this, tt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let s = o.fetch(void 0, n);
        return n.throwOnError || (s = s.catch(wn)), o.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(r).then(wn);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = R(this, tt).build(this, t);
    return n.isStaleByTime(
      ri(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(wn).catch(wn);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = V0(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(wn).catch(wn);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = V0(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return vc.isOnline() ? R(this, oo).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return R(this, tt);
  }
  getMutationCache() {
    return R(this, oo);
  }
  getDefaultOptions() {
    return R(this, so);
  }
  setDefaultOptions(e) {
    H(this, so, e);
  }
  setQueryDefaults(e, t) {
    R(this, ci).set(fs(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...R(this, ci).values()], n = {};
    return t.forEach((r) => {
      Ya(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    R(this, di).set(fs(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...R(this, di).values()];
    let n = {};
    return t.forEach((r) => {
      Ya(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...R(this, so).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = ly(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === uy && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...R(this, so).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    R(this, tt).clear(), R(this, oo).clear();
  }
}, tt = new WeakMap(), oo = new WeakMap(), so = new WeakMap(), ci = new WeakMap(), di = new WeakMap(), io = new WeakMap(), fi = new WeakMap(), pi = new WeakMap(), Ev), Zt, be, gl, Bt, Xo, hi, ao, ar, vl, mi, yi, Yo, Jo, lo, gi, Pe, ma, th, nh, rh, oh, sh, ih, ah, wS, Tv, IO = (Tv = class extends Bi {
  constructor(t, n) {
    super();
    ne(this, Pe);
    ne(this, Zt);
    ne(this, be);
    ne(this, gl);
    ne(this, Bt);
    ne(this, Xo);
    ne(this, hi);
    ne(this, ao);
    ne(this, ar);
    ne(this, vl);
    ne(this, mi);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ne(this, yi);
    ne(this, Yo);
    ne(this, Jo);
    ne(this, lo);
    ne(this, gi, /* @__PURE__ */ new Set());
    this.options = n, H(this, Zt, t), H(this, ar, null), H(this, ao, eh()), this.options.experimental_prefetchInRender || R(this, ao).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (R(this, be).addObserver(this), H0(R(this, be), this.options) ? fe(this, Pe, ma).call(this) : this.updateResult(), fe(this, Pe, oh).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return lh(
      R(this, be),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return lh(
      R(this, be),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), fe(this, Pe, sh).call(this), fe(this, Pe, ih).call(this), R(this, be).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, o = R(this, be);
    if (this.options = R(this, Zt).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Dn(this.options.enabled, R(this, be)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    fe(this, Pe, ah).call(this), R(this, be).setOptions(this.options), r._defaulted && !gc(this.options, r) && R(this, Zt).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: R(this, be),
      observer: this
    });
    const s = this.hasListeners();
    s && K0(
      R(this, be),
      o,
      this.options,
      r
    ) && fe(this, Pe, ma).call(this), this.updateResult(n), s && (R(this, be) !== o || Dn(this.options.enabled, R(this, be)) !== Dn(r.enabled, R(this, be)) || ri(this.options.staleTime, R(this, be)) !== ri(r.staleTime, R(this, be))) && fe(this, Pe, th).call(this);
    const i = fe(this, Pe, nh).call(this);
    s && (R(this, be) !== o || Dn(this.options.enabled, R(this, be)) !== Dn(r.enabled, R(this, be)) || i !== R(this, lo)) && fe(this, Pe, rh).call(this, i);
  }
  getOptimisticResult(t) {
    const n = R(this, Zt).getQueryCache().build(R(this, Zt), t), r = this.createResult(n, t);
    return AO(this, r) && (H(this, Bt, r), H(this, hi, this.options), H(this, Xo, R(this, be).state)), r;
  }
  getCurrentResult() {
    return R(this, Bt);
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
    R(this, gi).add(t);
  }
  getCurrentQuery() {
    return R(this, be);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = R(this, Zt).defaultQueryOptions(t), r = R(this, Zt).getQueryCache().build(R(this, Zt), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return fe(this, Pe, ma).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), R(this, Bt)));
  }
  createResult(t, n) {
    var T;
    const r = R(this, be), o = this.options, s = R(this, Bt), i = R(this, Xo), a = R(this, hi), u = t !== r ? t.state : R(this, gl), { state: c } = t;
    let d = { ...c }, f = !1, y;
    if (n._optimisticResults) {
      const M = this.hasListeners(), b = !M && H0(t, n), P = M && K0(t, r, n, o);
      (b || P) && (d = {
        ...d,
        ...xS(c.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: g, errorUpdatedAt: v, status: S } = d;
    if (n.select && d.data !== void 0)
      if (s && d.data === (i == null ? void 0 : i.data) && n.select === R(this, vl))
        y = R(this, mi);
      else
        try {
          H(this, vl, n.select), y = n.select(d.data), y = Jp(s == null ? void 0 : s.data, y, n), H(this, mi, y), H(this, ar, null);
        } catch (M) {
          H(this, ar, M);
        }
    else
      y = d.data;
    if (n.placeholderData !== void 0 && y === void 0 && S === "pending") {
      let M;
      if (s != null && s.isPlaceholderData && n.placeholderData === (a == null ? void 0 : a.placeholderData))
        M = s.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (T = R(this, yi)) == null ? void 0 : T.state.data,
        R(this, yi)
      ) : n.placeholderData, n.select && M !== void 0)
        try {
          M = n.select(M), H(this, ar, null);
        } catch (b) {
          H(this, ar, b);
        }
      M !== void 0 && (S = "success", y = Jp(
        s == null ? void 0 : s.data,
        M,
        n
      ), f = !0);
    }
    R(this, ar) && (g = R(this, ar), y = R(this, mi), v = Date.now(), S = "error");
    const m = d.fetchStatus === "fetching", h = S === "pending", p = S === "error", x = h && m, C = y !== void 0, E = {
      status: S,
      fetchStatus: d.fetchStatus,
      isPending: h,
      isSuccess: S === "success",
      isError: p,
      isInitialLoading: x,
      isLoading: x,
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
      isLoadingError: p && !C,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: p && C,
      isStale: dy(t, n),
      refetch: this.refetch,
      promise: R(this, ao)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (N) => {
        E.status === "error" ? N.reject(E.error) : E.data !== void 0 && N.resolve(E.data);
      }, b = () => {
        const N = H(this, ao, E.promise = eh());
        M(N);
      }, P = R(this, ao);
      switch (P.status) {
        case "pending":
          t.queryHash === r.queryHash && M(P);
          break;
        case "fulfilled":
          (E.status === "error" || E.data !== P.value) && b();
          break;
        case "rejected":
          (E.status !== "error" || E.error !== P.reason) && b();
          break;
      }
    }
    return E;
  }
  updateResult(t) {
    const n = R(this, Bt), r = this.createResult(R(this, be), this.options);
    if (H(this, Xo, R(this, be).state), H(this, hi, this.options), R(this, Xo).data !== void 0 && H(this, yi, R(this, be)), gc(r, n))
      return;
    H(this, Bt, r);
    const o = {}, s = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: i } = this.options, a = typeof i == "function" ? i() : i;
      if (a === "all" || !a && !R(this, gi).size)
        return !0;
      const l = new Set(
        a ?? R(this, gi)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(R(this, Bt)).some((u) => {
        const c = u;
        return R(this, Bt)[c] !== n[c] && l.has(c);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0), fe(this, Pe, wS).call(this, { ...o, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && fe(this, Pe, oh).call(this);
  }
}, Zt = new WeakMap(), be = new WeakMap(), gl = new WeakMap(), Bt = new WeakMap(), Xo = new WeakMap(), hi = new WeakMap(), ao = new WeakMap(), ar = new WeakMap(), vl = new WeakMap(), mi = new WeakMap(), yi = new WeakMap(), Yo = new WeakMap(), Jo = new WeakMap(), lo = new WeakMap(), gi = new WeakMap(), Pe = new WeakSet(), ma = function(t) {
  fe(this, Pe, ah).call(this);
  let n = R(this, be).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(wn)), n;
}, th = function() {
  fe(this, Pe, sh).call(this);
  const t = ri(
    this.options.staleTime,
    R(this, be)
  );
  if (ds || R(this, Bt).isStale || !Xp(t))
    return;
  const r = pS(R(this, Bt).dataUpdatedAt, t) + 1;
  H(this, Yo, setTimeout(() => {
    R(this, Bt).isStale || this.updateResult();
  }, r));
}, nh = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(R(this, be)) : this.options.refetchInterval) ?? !1;
}, rh = function(t) {
  fe(this, Pe, ih).call(this), H(this, lo, t), !(ds || Dn(this.options.enabled, R(this, be)) === !1 || !Xp(R(this, lo)) || R(this, lo) === 0) && H(this, Jo, setInterval(() => {
    (this.options.refetchIntervalInBackground || cy.isFocused()) && fe(this, Pe, ma).call(this);
  }, R(this, lo)));
}, oh = function() {
  fe(this, Pe, th).call(this), fe(this, Pe, rh).call(this, fe(this, Pe, nh).call(this));
}, sh = function() {
  R(this, Yo) && (clearTimeout(R(this, Yo)), H(this, Yo, void 0));
}, ih = function() {
  R(this, Jo) && (clearInterval(R(this, Jo)), H(this, Jo, void 0));
}, ah = function() {
  const t = R(this, Zt).getQueryCache().build(R(this, Zt), this.options);
  if (t === R(this, be))
    return;
  const n = R(this, be);
  H(this, be, t), H(this, gl, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, wS = function(t) {
  ft.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(R(this, Bt));
    }), R(this, Zt).getQueryCache().notify({
      query: R(this, be),
      type: "observerResultsUpdated"
    });
  });
}, Tv);
function OO(e, t) {
  return Dn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function H0(e, t) {
  return OO(e, t) || e.state.data !== void 0 && lh(e, t, t.refetchOnMount);
}
function lh(e, t, n) {
  if (Dn(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && dy(e, t);
  }
  return !1;
}
function K0(e, t, n, r) {
  return (e !== t || Dn(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && dy(e, n);
}
function dy(e, t) {
  return Dn(t.enabled, e) !== !1 && e.isStaleByTime(ri(t.staleTime, e));
}
function AO(e, t) {
  return !gc(e.getCurrentResult(), t);
}
var uo, co, Gt, Ir, Lr, Au, uh, Rv, $O = (Rv = class extends Bi {
  constructor(t, n) {
    super();
    ne(this, Lr);
    ne(this, uo);
    ne(this, co);
    ne(this, Gt);
    ne(this, Ir);
    H(this, uo, t), this.setOptions(n), this.bindMethods(), fe(this, Lr, Au).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var r;
    const n = this.options;
    this.options = R(this, uo).defaultMutationOptions(t), gc(this.options, n) || R(this, uo).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: R(this, Gt),
      observer: this
    }), n != null && n.mutationKey && this.options.mutationKey && fs(n.mutationKey) !== fs(this.options.mutationKey) ? this.reset() : ((r = R(this, Gt)) == null ? void 0 : r.state.status) === "pending" && R(this, Gt).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = R(this, Gt)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    fe(this, Lr, Au).call(this), fe(this, Lr, uh).call(this, t);
  }
  getCurrentResult() {
    return R(this, co);
  }
  reset() {
    var t;
    (t = R(this, Gt)) == null || t.removeObserver(this), H(this, Gt, void 0), fe(this, Lr, Au).call(this), fe(this, Lr, uh).call(this);
  }
  mutate(t, n) {
    var r;
    return H(this, Ir, n), (r = R(this, Gt)) == null || r.removeObserver(this), H(this, Gt, R(this, uo).getMutationCache().build(R(this, uo), this.options)), R(this, Gt).addObserver(this), R(this, Gt).execute(t);
  }
}, uo = new WeakMap(), co = new WeakMap(), Gt = new WeakMap(), Ir = new WeakMap(), Lr = new WeakSet(), Au = function() {
  var n;
  const t = ((n = R(this, Gt)) == null ? void 0 : n.state) ?? SS();
  H(this, co, {
    ...t,
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, uh = function(t) {
  ft.batch(() => {
    var n, r, o, s, i, a, l, u;
    if (R(this, Ir) && this.hasListeners()) {
      const c = R(this, co).variables, d = R(this, co).context;
      (t == null ? void 0 : t.type) === "success" ? ((r = (n = R(this, Ir)).onSuccess) == null || r.call(n, t.data, c, d), (s = (o = R(this, Ir)).onSettled) == null || s.call(o, t.data, null, c, d)) : (t == null ? void 0 : t.type) === "error" && ((a = (i = R(this, Ir)).onError) == null || a.call(i, t.error, c, d), (u = (l = R(this, Ir)).onSettled) == null || u.call(
        l,
        void 0,
        t.error,
        c,
        d
      ));
    }
    this.listeners.forEach((c) => {
      c(R(this, co));
    });
  });
}, Rv), CS = w.createContext(
  void 0
), fy = (e) => {
  const t = w.useContext(CS);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, NO = ({
  client: e,
  children: t
}) => (w.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ _.jsx(CS.Provider, { value: e, children: t })), _S = w.createContext(!1), LO = () => w.useContext(_S);
_S.Provider;
function FO() {
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
var jO = w.createContext(FO()), zO = () => w.useContext(jO);
function kS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function ch() {
}
var DO = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, BO = (e) => {
  w.useEffect(() => {
    e.clearReset();
  }, [e]);
}, UO = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && kS(n, [e.error, r]), VO = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, WO = (e, t) => e.isLoading && e.isFetching && !t, HO = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Q0 = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function KO(e, t, n) {
  var c, d, f, y, g;
  const r = fy(), o = LO(), s = zO(), i = r.defaultQueryOptions(e);
  (d = (c = r.getDefaultOptions().queries) == null ? void 0 : c._experimental_beforeQuery) == null || d.call(
    c,
    i
  ), i._optimisticResults = o ? "isRestoring" : "optimistic", VO(i), DO(i, s), BO(s);
  const a = !r.getQueryCache().get(i.queryHash), [l] = w.useState(
    () => new t(
      r,
      i
    )
  ), u = l.getOptimisticResult(i);
  if (w.useSyncExternalStore(
    w.useCallback(
      (v) => {
        const S = o ? ch : l.subscribe(ft.batchCalls(v));
        return l.updateResult(), S;
      },
      [l, o]
    ),
    () => l.getCurrentResult(),
    () => l.getCurrentResult()
  ), w.useEffect(() => {
    l.setOptions(i, { listeners: !1 });
  }, [i, l]), HO(i, u))
    throw Q0(i, l, s);
  if (UO({
    result: u,
    errorResetBoundary: s,
    throwOnError: i.throwOnError,
    query: r.getQueryCache().get(i.queryHash)
  }))
    throw u.error;
  if ((y = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || y.call(
    f,
    i,
    u
  ), i.experimental_prefetchInRender && !ds && WO(u, o)) {
    const v = a ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Q0(i, l, s)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (g = r.getQueryCache().get(i.queryHash)) == null ? void 0 : g.promise
    );
    v == null || v.catch(ch).finally(() => {
      l.updateResult();
    });
  }
  return i.notifyOnChangeProps ? u : l.trackResult(u);
}
function Z0(e, t) {
  return KO(e, IO);
}
function Is(e, t) {
  const n = fy(), [r] = w.useState(
    () => new $O(
      n,
      e
    )
  );
  w.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const o = w.useSyncExternalStore(
    w.useCallback(
      (i) => r.subscribe(ft.batchCalls(i)),
      [r]
    ),
    () => r.getCurrentResult(),
    () => r.getCurrentResult()
  ), s = w.useCallback(
    (i, a) => {
      r.mutate(i, a).catch(ch);
    },
    [r]
  );
  if (o.error && kS(r.options.throwOnError, [o.error]))
    throw o.error;
  return { ...o, mutate: s, mutateAsync: o.mutate };
}
const G0 = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, c) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const f = t;
      t = c ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((y) => y(t, f));
    }
  }, o = () => t, a = { setState: r, getState: o, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)) }, l = t = e(r, o, a);
  return a;
}, QO = (e) => e ? G0(e) : G0, ZO = (e) => e;
function GO(e, t = ZO) {
  const n = le.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return le.useDebugValue(n), n;
}
const qO = (e) => {
  const t = QO(e), n = (r) => GO(t, r);
  return Object.assign(n, t), n;
}, XO = (e) => qO;
var ES = Symbol.for("immer-nothing"), q0 = Symbol.for("immer-draftable"), yn = Symbol.for("immer-state");
function Bn(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Pi = Object.getPrototypeOf;
function Mi(e) {
  return !!e && !!e[yn];
}
function ps(e) {
  var t;
  return e ? TS(e) || Array.isArray(e) || !!e[q0] || !!((t = e.constructor) != null && t[q0]) || Rd(e) || Pd(e) : !1;
}
var YO = Object.prototype.constructor.toString();
function TS(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Pi(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === YO;
}
function bc(e, t) {
  Td(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Td(e) {
  const t = e[yn];
  return t ? t.type_ : Array.isArray(e) ? 1 : Rd(e) ? 2 : Pd(e) ? 3 : 0;
}
function dh(e, t) {
  return Td(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function RS(e, t, n) {
  const r = Td(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function JO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Rd(e) {
  return e instanceof Map;
}
function Pd(e) {
  return e instanceof Set;
}
function Bo(e) {
  return e.copy_ || e.base_;
}
function fh(e, t) {
  if (Rd(e))
    return new Map(e);
  if (Pd(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = TS(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[yn];
    let o = Reflect.ownKeys(r);
    for (let s = 0; s < o.length; s++) {
      const i = o[s], a = r[i];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[i]
      });
    }
    return Object.create(Pi(e), r);
  } else {
    const r = Pi(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function py(e, t = !1) {
  return Md(e) || Mi(e) || !ps(e) || (Td(e) > 1 && (e.set = e.add = e.clear = e.delete = e5), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => py(r, !0))), e;
}
function e5() {
  Bn(2);
}
function Md(e) {
  return Object.isFrozen(e);
}
var t5 = {};
function hs(e) {
  const t = t5[e];
  return t || Bn(0, e), t;
}
var Ja;
function PS() {
  return Ja;
}
function n5(e, t) {
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
function X0(e, t) {
  t && (hs("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ph(e) {
  hh(e), e.drafts_.forEach(r5), e.drafts_ = null;
}
function hh(e) {
  e === Ja && (Ja = e.parent_);
}
function Y0(e) {
  return Ja = n5(Ja, e);
}
function r5(e) {
  const t = e[yn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function J0(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[yn].modified_ && (ph(t), Bn(4)), ps(e) && (e = xc(t, e), t.parent_ || Sc(t, e)), t.patches_ && hs("Patches").generateReplacementPatches_(
    n[yn].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = xc(t, n, []), ph(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ES ? e : void 0;
}
function xc(e, t, n) {
  if (Md(t))
    return t;
  const r = t[yn];
  if (!r)
    return bc(
      t,
      (o, s) => ev(e, r, t, o, s, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Sc(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let s = o, i = !1;
    r.type_ === 3 && (s = new Set(o), o.clear(), i = !0), bc(
      s,
      (a, l) => ev(e, r, o, a, l, n, i)
    ), Sc(e, o, !1), n && e.patches_ && hs("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function ev(e, t, n, r, o, s, i) {
  if (Mi(o)) {
    const a = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !dh(t.assigned_, r) ? s.concat(r) : void 0, l = xc(e, o, a);
    if (RS(n, r, l), Mi(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && n.add(o);
  if (ps(o) && !Md(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    xc(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Sc(e, o);
  }
}
function Sc(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && py(t, n);
}
function o5(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : PS(),
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
  let o = r, s = hy;
  n && (o = [r], s = el);
  const { revoke: i, proxy: a } = Proxy.revocable(o, s);
  return r.draft_ = a, r.revoke_ = i, a;
}
var hy = {
  get(e, t) {
    if (t === yn)
      return e;
    const n = Bo(e);
    if (!dh(n, t))
      return s5(e, n, t);
    const r = n[t];
    return e.finalized_ || !ps(r) ? r : r === Ef(e.base_, t) ? (Tf(e), e.copy_[t] = yh(r, e)) : r;
  },
  has(e, t) {
    return t in Bo(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Bo(e));
  },
  set(e, t, n) {
    const r = MS(Bo(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Ef(Bo(e), t), s = o == null ? void 0 : o[yn];
      if (s && s.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (JO(n, o) && (n !== void 0 || dh(e.base_, t)))
        return !0;
      Tf(e), mh(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ef(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Tf(e), mh(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Bo(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Bn(11);
  },
  getPrototypeOf(e) {
    return Pi(e.base_);
  },
  setPrototypeOf() {
    Bn(12);
  }
}, el = {};
bc(hy, (e, t) => {
  el[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
el.deleteProperty = function(e, t) {
  return el.set.call(this, e, t, void 0);
};
el.set = function(e, t, n) {
  return hy.set.call(this, e[0], t, n, e[0]);
};
function Ef(e, t) {
  const n = e[yn];
  return (n ? Bo(n) : e)[t];
}
function s5(e, t, n) {
  var o;
  const r = MS(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function MS(e, t) {
  if (!(t in e))
    return;
  let n = Pi(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Pi(n);
  }
}
function mh(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && mh(e.parent_));
}
function Tf(e) {
  e.copy_ || (e.copy_ = fh(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var i5 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const s = n;
        n = t;
        const i = this;
        return function(l = s, ...u) {
          return i.produce(l, (c) => n.call(this, c, ...u));
        };
      }
      typeof n != "function" && Bn(6), r !== void 0 && typeof r != "function" && Bn(7);
      let o;
      if (ps(t)) {
        const s = Y0(this), i = yh(t, void 0);
        let a = !0;
        try {
          o = n(i), a = !1;
        } finally {
          a ? ph(s) : hh(s);
        }
        return X0(s, r), J0(o, s);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === ES && (o = void 0), this.autoFreeze_ && py(o, !0), r) {
          const s = [], i = [];
          hs("Patches").generateReplacementPatches_(t, o, s, i), r(s, i);
        }
        return o;
      } else
        Bn(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...a) => this.produceWithPatches(i, (l) => t(l, ...a));
      let r, o;
      return [this.produce(t, n, (i, a) => {
        r = i, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ps(e) || Bn(8), Mi(e) && (e = a5(e));
    const t = Y0(this), n = yh(e, void 0);
    return n[yn].isManual_ = !0, hh(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[yn];
    (!n || !n.isManual_) && Bn(9);
    const { scope_: r } = n;
    return X0(r, t), J0(void 0, r);
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
    const r = hs("Patches").applyPatches_;
    return Mi(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function yh(e, t) {
  const n = Rd(e) ? hs("MapSet").proxyMap_(e, t) : Pd(e) ? hs("MapSet").proxySet_(e, t) : o5(e, t);
  return (t ? t.scope_ : PS()).drafts_.push(n), n;
}
function a5(e) {
  return Mi(e) || Bn(10, e), IS(e);
}
function IS(e) {
  if (!ps(e) || Md(e))
    return e;
  const t = e[yn];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = fh(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = fh(e, !0);
  return bc(n, (r, o) => {
    RS(n, r, IS(o));
  }), t && (t.finalized_ = !1), n;
}
var gn = new i5(), l5 = gn.produce;
gn.produceWithPatches.bind(
  gn
);
gn.setAutoFreeze.bind(gn);
gn.setUseStrictShallowCopy.bind(gn);
gn.applyPatches.bind(gn);
gn.createDraft.bind(gn);
gn.finishDraft.bind(gn);
const u5 = (e) => (t, n, r) => (r.setState = (o, s, ...i) => {
  const a = typeof o == "function" ? l5(o) : o;
  return t(a, s, ...i);
}, e(r.setState, n, r)), c5 = u5;
function d5(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      var s;
      const i = (l) => l === null ? null : JSON.parse(l, void 0), a = (s = n.getItem(o)) != null ? s : null;
      return a instanceof Promise ? a.then(i) : i(a);
    },
    setItem: (o, s) => n.setItem(
      o,
      JSON.stringify(s, void 0)
    ),
    removeItem: (o) => n.removeItem(o)
  };
}
const gh = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise ? n : {
      then(r) {
        return gh(r)(n);
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
        return gh(r)(n);
      }
    };
  }
}, f5 = (e, t) => (n, r, o) => {
  let s = {
    storage: d5(() => localStorage),
    partialize: (v) => v,
    version: 0,
    merge: (v, S) => ({
      ...S,
      ...v
    }),
    ...t
  }, i = !1;
  const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
  let u = s.storage;
  if (!u)
    return e(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        ), n(...v);
      },
      r,
      o
    );
  const c = () => {
    const v = s.partialize({ ...r() });
    return u.setItem(s.name, {
      state: v,
      version: s.version
    });
  }, d = o.setState;
  o.setState = (v, S) => {
    d(v, S), c();
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
    var v, S;
    if (!u) return;
    i = !1, a.forEach((h) => {
      var p;
      return h((p = r()) != null ? p : f);
    });
    const m = ((S = s.onRehydrateStorage) == null ? void 0 : S.call(s, (v = r()) != null ? v : f)) || void 0;
    return gh(u.getItem.bind(u))(s.name).then((h) => {
      if (h)
        if (typeof h.version == "number" && h.version !== s.version) {
          if (s.migrate) {
            const p = s.migrate(
              h.state,
              h.version
            );
            return p instanceof Promise ? p.then((x) => [!0, x]) : [!0, p];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, h.state];
      return [!1, void 0];
    }).then((h) => {
      var p;
      const [x, C] = h;
      if (y = s.merge(
        C,
        (p = r()) != null ? p : f
      ), n(y, !0), x)
        return c();
    }).then(() => {
      m == null || m(y, void 0), y = r(), i = !0, l.forEach((h) => h(y));
    }).catch((h) => {
      m == null || m(void 0, h);
    });
  };
  return o.persist = {
    setOptions: (v) => {
      s = {
        ...s,
        ...v
      }, v.storage && (u = v.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => g(),
    hasHydrated: () => i,
    onHydrate: (v) => (a.add(v), () => {
      a.delete(v);
    }),
    onFinishHydration: (v) => (l.add(v), () => {
      l.delete(v);
    })
  }, s.skipHydration || g(), y || f;
}, p5 = f5, h5 = {
  user: null,
  garageName: null,
  mediaLibrary: null,
  partsLibrary: null,
  mediaRecommendations: null,
  partsRecommendations: null
}, m5 = (e) => ({
  setUser: (t) => {
    e((n) => {
      n.user = { ...n.user, ...t };
    });
  },
  deleteUser: () => {
    e((t) => {
      t.user = null;
    });
  },
  setGarageName: (t) => {
    e((n) => {
      n.garageName = t;
    });
  },
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
  updateMediaLibraryItem: (t, n) => {
    e((r) => {
      var s;
      const o = (s = r.mediaLibrary) == null ? void 0 : s.find((i) => i.id === t);
      o && Object.assign(o, n);
    });
  },
  updatePartsLibraryItem: (t, n) => {
    e((r) => {
      var s;
      const o = (s = r.partsLibrary) == null ? void 0 : s.find((i) => i.id === t);
      o && Object.assign(o, n);
    });
  },
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
  }
}), Nl = XO()(
  p5(
    c5((e) => ({
      ...h5,
      ...m5(e)
    })),
    { name: "user-library" }
  )
);
function y5(e) {
  return Se("MuiLoadingButton", e);
}
const kr = _e("MuiLoadingButton", ["root", "label", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]), g5 = (e) => {
  const {
    loading: t,
    loadingPosition: n,
    classes: r
  } = e, o = {
    root: ["root", t && "loading"],
    label: ["label"],
    startIcon: [t && `startIconLoading${X(n)}`],
    endIcon: [t && `endIconLoading${X(n)}`],
    loadingIndicator: ["loadingIndicator", t && `loadingIndicator${X(n)}`]
  }, s = ke(o, y5, r);
  return {
    ...r,
    // forward the outlined, color, etc. classes to Button
    ...s
  };
}, v5 = (e) => e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as" && e !== "classes", b5 = G(Iu, {
  shouldForwardProp: (e) => v5(e) || e === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, t.startIconLoadingStart && {
    [`& .${kr.startIconLoadingStart}`]: t.startIconLoadingStart
  }, t.endIconLoadingEnd && {
    [`& .${kr.endIconLoadingEnd}`]: t.endIconLoadingEnd
  }]
})(Ie(({
  theme: e
}) => ({
  display: "inline-flex",
  [`& .${kr.startIconLoadingStart}, & .${kr.endIconLoadingEnd}`]: {
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
      [`&.${kr.loading}`]: {
        color: "transparent"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.loadingPosition === "start" && t.fullWidth,
    style: {
      [`& .${kr.startIconLoadingStart}, & .${kr.endIconLoadingEnd}`]: {
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
      [`& .${kr.startIconLoadingStart}, & .${kr.endIconLoadingEnd}`]: {
        transition: e.transitions.create(["opacity"], {
          duration: e.transitions.duration.short
        }),
        opacity: 0,
        marginLeft: -8
      }
    }
  }]
}))), x5 = G("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.loadingIndicator, t[`loadingIndicator${X(n.loadingPosition)}`]];
  }
})(Ie(({
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
}))), tv = G("span", {
  name: "MuiLoadingButton",
  slot: "Label",
  overridesResolver: (e, t) => [t.label]
})({
  display: "inherit",
  alignItems: "inherit",
  justifyContent: "inherit"
}), OS = /* @__PURE__ */ w.forwardRef(function(t, n) {
  const r = w.useContext(qx), o = Ti(r, t), s = we({
    props: o,
    name: "MuiLoadingButton"
  }), {
    children: i,
    disabled: a = !1,
    id: l,
    loading: u = !1,
    loadingIndicator: c,
    loadingPosition: d = "center",
    variant: f = "text",
    ...y
  } = s, g = yd(l), v = c ?? /* @__PURE__ */ _.jsx(wP, {
    "aria-labelledby": g,
    color: "inherit",
    size: 16
  }), S = {
    ...s,
    disabled: a,
    loading: u,
    loadingIndicator: v,
    loadingPosition: d,
    variant: f
  }, m = g5(S), h = u ? /* @__PURE__ */ _.jsx(x5, {
    className: m.loadingIndicator,
    ownerState: S,
    children: v
  }) : null;
  return /* @__PURE__ */ _.jsxs(b5, {
    disabled: a || u,
    id: g,
    ref: n,
    ...y,
    variant: f,
    classes: m,
    ownerState: S,
    children: [S.loadingPosition === "end" ? /* @__PURE__ */ _.jsx(tv, {
      className: m.label,
      children: i
    }) : h, S.loadingPosition === "end" ? h : /* @__PURE__ */ _.jsx(tv, {
      className: m.label,
      children: i
    })]
  });
}), S5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5 11h-4v4h-2v-4H7v-2h4V7h2v4h4z"
}), "AddCircle"), w5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"
}), "Build"), C5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), _5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete"), AS = on(/* @__PURE__ */ _.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), "Edit"), k5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), "Logout"), E5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"
}), "Movie"), T5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), "OpenInNew"), R5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"
}), "Save"), P5 = on(/* @__PURE__ */ _.jsx("path", {
  d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), vh = on(/* @__PURE__ */ _.jsx("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility"), bh = on(/* @__PURE__ */ _.jsx("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff");
var xe;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const s = {};
    for (const i of o)
      s[i] = i;
    return s;
  }, e.getValidEnumValues = (o) => {
    const s = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), i = {};
    for (const a of s)
      i[a] = o[a];
    return e.objectValues(i);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(s) {
    return o[s];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const s = [];
    for (const i in o)
      Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
    return s;
  }, e.find = (o, s) => {
    for (const i of o)
      if (s(i))
        return i;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, s = " | ") {
    return o.map((i) => typeof i == "string" ? `'${i}'` : i).join(s);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, s) => typeof s == "bigint" ? s.toString() : s;
})(xe || (xe = {}));
var xh;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(xh || (xh = {}));
const K = xe.arrayToEnum([
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
]), Mr = (e) => {
  switch (typeof e) {
    case "undefined":
      return K.undefined;
    case "string":
      return K.string;
    case "number":
      return isNaN(e) ? K.nan : K.number;
    case "boolean":
      return K.boolean;
    case "function":
      return K.function;
    case "bigint":
      return K.bigint;
    case "symbol":
      return K.symbol;
    case "object":
      return Array.isArray(e) ? K.array : e === null ? K.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? K.promise : typeof Map < "u" && e instanceof Map ? K.map : typeof Set < "u" && e instanceof Set ? K.set : typeof Date < "u" && e instanceof Date ? K.date : K.object;
    default:
      return K.unknown;
  }
}, F = xe.arrayToEnum([
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
]), M5 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class pn extends Error {
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
    const n = t || function(s) {
      return s.message;
    }, r = { _errors: [] }, o = (s) => {
      for (const i of s.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(o);
        else if (i.code === "invalid_return_type")
          o(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          o(i.argumentsError);
        else if (i.path.length === 0)
          r._errors.push(n(i));
        else {
          let a = r, l = 0;
          for (; l < i.path.length; ) {
            const u = i.path[l];
            l === i.path.length - 1 ? (a[u] = a[u] || { _errors: [] }, a[u]._errors.push(n(i))) : a[u] = a[u] || { _errors: [] }, a = a[u], l++;
          }
        }
    };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof pn))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, xe.jsonStringifyReplacer, 2);
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
pn.create = (e) => new pn(e);
const Ii = (e, t) => {
  let n;
  switch (e.code) {
    case F.invalid_type:
      e.received === K.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case F.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, xe.jsonStringifyReplacer)}`;
      break;
    case F.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${xe.joinValues(e.keys, ", ")}`;
      break;
    case F.invalid_union:
      n = "Invalid input";
      break;
    case F.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${xe.joinValues(e.options)}`;
      break;
    case F.invalid_enum_value:
      n = `Invalid enum value. Expected ${xe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case F.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case F.invalid_return_type:
      n = "Invalid function return type";
      break;
    case F.invalid_date:
      n = "Invalid date";
      break;
    case F.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : xe.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case F.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case F.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case F.custom:
      n = "Invalid input";
      break;
    case F.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case F.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case F.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, xe.assertNever(e);
  }
  return { message: n };
};
let $S = Ii;
function I5(e) {
  $S = e;
}
function wc() {
  return $S;
}
const Cc = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, s = [...n, ...o.path || []], i = {
    ...o,
    path: s
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: s,
      message: o.message
    };
  let a = "";
  const l = r.filter((u) => !!u).slice().reverse();
  for (const u of l)
    a = u(i, { data: t, defaultError: a }).message;
  return {
    ...o,
    path: s,
    message: a
  };
}, O5 = [];
function V(e, t) {
  const n = wc(), r = Cc({
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
      n === Ii ? void 0 : Ii
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class jt {
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
        return ie;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const s = await o.key, i = await o.value;
      r.push({
        key: s,
        value: i
      });
    }
    return jt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: s, value: i } = o;
      if (s.status === "aborted" || i.status === "aborted")
        return ie;
      s.status === "dirty" && t.dirty(), i.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof i.value < "u" || o.alwaysSet) && (r[s.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const ie = Object.freeze({
  status: "aborted"
}), Ks = (e) => ({ status: "dirty", value: e }), Ht = (e) => ({ status: "valid", value: e }), Sh = (e) => e.status === "aborted", wh = (e) => e.status === "dirty", ms = (e) => e.status === "valid", tl = (e) => typeof Promise < "u" && e instanceof Promise;
function _c(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function NS(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var q;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(q || (q = {}));
var ya, ga;
class vr {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const nv = (e, t) => {
  if (ms(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new pn(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function de(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (i, a) => {
    var l, u;
    const { message: c } = e;
    return i.code === "invalid_enum_value" ? { message: c ?? a.defaultError } : typeof a.data > "u" ? { message: (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError } : i.code !== "invalid_type" ? { message: a.defaultError } : { message: (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError };
  }, description: o };
}
class pe {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Mr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Mr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new jt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Mr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (tl(n))
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
      parsedType: Mr(t)
    }, s = this._parseSync({ data: t, path: o.path, parent: o });
    return nv(o, s);
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
      parsedType: Mr(t)
    };
    if (!this["~standard"].async)
      try {
        const s = this._parseSync({ data: t, path: [], parent: o });
        return ms(s) ? {
          value: s.value
        } : {
          issues: o.common.issues
        };
      } catch (s) {
        !((r = (n = s == null ? void 0 : s.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || r === void 0) && r.includes("encountered") && (this["~standard"].async = !0), o.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: o }).then((s) => ms(s) ? {
      value: s.value
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
      parsedType: Mr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), s = await (tl(o) ? o : Promise.resolve(o));
    return nv(r, s);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, s) => {
      const i = t(o), a = () => s.addIssue({
        code: F.custom,
        ...r(o)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((l) => l ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new qn({
      schema: this,
      typeName: oe.ZodEffects,
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
    return yr.create(this, this._def);
  }
  nullable() {
    return Mo.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Kn.create(this);
  }
  promise() {
    return Ai.create(this, this._def);
  }
  or(t) {
    return sl.create([this, t], this._def);
  }
  and(t) {
    return il.create(this, t, this._def);
  }
  transform(t) {
    return new qn({
      ...de(this._def),
      schema: this,
      typeName: oe.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new dl({
      ...de(this._def),
      innerType: this,
      defaultValue: n,
      typeName: oe.ZodDefault
    });
  }
  brand() {
    return new my({
      typeName: oe.ZodBranded,
      type: this,
      ...de(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new fl({
      ...de(this._def),
      innerType: this,
      catchValue: n,
      typeName: oe.ZodCatch
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
    return Ll.create(this, t);
  }
  readonly() {
    return pl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const A5 = /^c[^\s-]{8,}$/i, $5 = /^[0-9a-z]+$/, N5 = /^[0-9A-HJKMNP-TV-Z]{26}$/i, L5 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, F5 = /^[a-z0-9_-]{21}$/i, j5 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, z5 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, D5 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, B5 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Rf;
const U5 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, V5 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, W5 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, H5 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, K5 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Q5 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, LS = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Z5 = new RegExp(`^${LS}$`);
function FS(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function G5(e) {
  return new RegExp(`^${FS(e)}$`);
}
function jS(e) {
  let t = `${LS}T${FS(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function q5(e, t) {
  return !!((t === "v4" || !t) && U5.test(e) || (t === "v6" || !t) && W5.test(e));
}
function X5(e, t) {
  if (!j5.test(e))
    return !1;
  try {
    const [n] = e.split("."), r = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), o = JSON.parse(atob(r));
    return !(typeof o != "object" || o === null || !o.typ || !o.alg || t && o.alg !== t);
  } catch {
    return !1;
  }
}
function Y5(e, t) {
  return !!((t === "v4" || !t) && V5.test(e) || (t === "v6" || !t) && H5.test(e));
}
class Un extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== K.string) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: F.invalid_type,
        expected: K.string,
        received: s.parsedType
      }), ie;
    }
    const r = new jt();
    let o;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (o = this._getOrReturnCtx(t, o), V(o, {
          code: F.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (o = this._getOrReturnCtx(t, o), V(o, {
          code: F.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = t.data.length > s.value, a = t.data.length < s.value;
        (i || a) && (o = this._getOrReturnCtx(t, o), i ? V(o, {
          code: F.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && V(o, {
          code: F.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        D5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "email",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        Rf || (Rf = new RegExp(B5, "u")), Rf.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "emoji",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        L5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "uuid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "nanoid")
        F5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "nanoid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        A5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "cuid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        $5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "cuid2",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        N5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
          validation: "ulid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), V(o, {
            validation: "url",
            code: F.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "regex",
        code: F.invalid_string,
        message: s.message
      }), r.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), r.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), r.dirty()) : s.kind === "datetime" ? jS(s).test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: "datetime",
        message: s.message
      }), r.dirty()) : s.kind === "date" ? Z5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: "date",
        message: s.message
      }), r.dirty()) : s.kind === "time" ? G5(s).test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.invalid_string,
        validation: "time",
        message: s.message
      }), r.dirty()) : s.kind === "duration" ? z5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "duration",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "ip" ? q5(t.data, s.version) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "ip",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "jwt" ? X5(t.data, s.alg) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "jwt",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "cidr" ? Y5(t.data, s.version) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "cidr",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64" ? K5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "base64",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : s.kind === "base64url" ? Q5.test(t.data) || (o = this._getOrReturnCtx(t, o), V(o, {
        validation: "base64url",
        code: F.invalid_string,
        message: s.message
      }), r.dirty()) : xe.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: F.invalid_string,
      ...q.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...q.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...q.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...q.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...q.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...q.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...q.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...q.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...q.errToObj(t) });
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
      ...q.errToObj(t == null ? void 0 : t.message)
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
      ...q.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...q.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...q.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...q.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...q.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...q.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...q.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...q.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...q.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, q.errToObj(t));
  }
  trim() {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Un({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Un({
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
Un.create = (e) => {
  var t;
  return new Un({
    checks: [],
    typeName: oe.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...de(e)
  });
};
function J5(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, s = parseInt(e.toFixed(o).replace(".", "")), i = parseInt(t.toFixed(o).replace(".", ""));
  return s % i / Math.pow(10, o);
}
class To extends pe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== K.number) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: F.invalid_type,
        expected: K.number,
        received: s.parsedType
      }), ie;
    }
    let r;
    const o = new jt();
    for (const s of this._def.checks)
      s.kind === "int" ? xe.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), o.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? J5(t.data, s.value) !== 0 && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.not_finite,
        message: s.message
      }), o.dirty()) : xe.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, q.toString(n));
  }
  setLimit(t, n, r, o) {
    return new To({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: q.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new To({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: q.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: q.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && xe.isInteger(t.value));
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
To.create = (e) => new To({
  checks: [],
  typeName: oe.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...de(e)
});
class Ro extends pe {
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
    if (this._getType(t) !== K.bigint)
      return this._getInvalidInput(t);
    let r;
    const o = new jt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), o.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), V(r, {
        code: F.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), o.dirty()) : xe.assertNever(s);
    return { status: o.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return V(n, {
      code: F.invalid_type,
      expected: K.bigint,
      received: n.parsedType
    }), ie;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, q.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, q.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, q.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, q.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Ro({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: q.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Ro({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(n)
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
Ro.create = (e) => {
  var t;
  return new Ro({
    checks: [],
    typeName: oe.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...de(e)
  });
};
class nl extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== K.boolean) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.boolean,
        received: r.parsedType
      }), ie;
    }
    return Ht(t.data);
  }
}
nl.create = (e) => new nl({
  typeName: oe.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...de(e)
});
class ys extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== K.date) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: F.invalid_type,
        expected: K.date,
        received: s.parsedType
      }), ie;
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return V(s, {
        code: F.invalid_date
      }), ie;
    }
    const r = new jt();
    let o;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (o = this._getOrReturnCtx(t, o), V(o, {
        code: F.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : xe.assertNever(s);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ys({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: q.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: q.toString(n)
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
ys.create = (e) => new ys({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: oe.ZodDate,
  ...de(e)
});
class kc extends pe {
  _parse(t) {
    if (this._getType(t) !== K.symbol) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.symbol,
        received: r.parsedType
      }), ie;
    }
    return Ht(t.data);
  }
}
kc.create = (e) => new kc({
  typeName: oe.ZodSymbol,
  ...de(e)
});
class rl extends pe {
  _parse(t) {
    if (this._getType(t) !== K.undefined) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.undefined,
        received: r.parsedType
      }), ie;
    }
    return Ht(t.data);
  }
}
rl.create = (e) => new rl({
  typeName: oe.ZodUndefined,
  ...de(e)
});
class ol extends pe {
  _parse(t) {
    if (this._getType(t) !== K.null) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.null,
        received: r.parsedType
      }), ie;
    }
    return Ht(t.data);
  }
}
ol.create = (e) => new ol({
  typeName: oe.ZodNull,
  ...de(e)
});
class Oi extends pe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ht(t.data);
  }
}
Oi.create = (e) => new Oi({
  typeName: oe.ZodAny,
  ...de(e)
});
class ns extends pe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ht(t.data);
  }
}
ns.create = (e) => new ns({
  typeName: oe.ZodUnknown,
  ...de(e)
});
class Wr extends pe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return V(n, {
      code: F.invalid_type,
      expected: K.never,
      received: n.parsedType
    }), ie;
  }
}
Wr.create = (e) => new Wr({
  typeName: oe.ZodNever,
  ...de(e)
});
class Ec extends pe {
  _parse(t) {
    if (this._getType(t) !== K.undefined) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.void,
        received: r.parsedType
      }), ie;
    }
    return Ht(t.data);
  }
}
Ec.create = (e) => new Ec({
  typeName: oe.ZodVoid,
  ...de(e)
});
class Kn extends pe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== K.array)
      return V(n, {
        code: F.invalid_type,
        expected: K.array,
        received: n.parsedType
      }), ie;
    if (o.exactLength !== null) {
      const i = n.data.length > o.exactLength.value, a = n.data.length < o.exactLength.value;
      (i || a) && (V(n, {
        code: i ? F.too_big : F.too_small,
        minimum: a ? o.exactLength.value : void 0,
        maximum: i ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (V(n, {
      code: F.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (V(n, {
      code: F.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((i, a) => o.type._parseAsync(new vr(n, i, n.path, a)))).then((i) => jt.mergeArray(r, i));
    const s = [...n.data].map((i, a) => o.type._parseSync(new vr(n, i, n.path, a)));
    return jt.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Kn({
      ...this._def,
      minLength: { value: t, message: q.toString(n) }
    });
  }
  max(t, n) {
    return new Kn({
      ...this._def,
      maxLength: { value: t, message: q.toString(n) }
    });
  }
  length(t, n) {
    return new Kn({
      ...this._def,
      exactLength: { value: t, message: q.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Kn.create = (e, t) => new Kn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: oe.ZodArray,
  ...de(t)
});
function As(e) {
  if (e instanceof Ze) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = yr.create(As(r));
    }
    return new Ze({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Kn ? new Kn({
    ...e._def,
    type: As(e.element)
  }) : e instanceof yr ? yr.create(As(e.unwrap())) : e instanceof Mo ? Mo.create(As(e.unwrap())) : e instanceof br ? br.create(e.items.map((t) => As(t))) : e;
}
class Ze extends pe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = xe.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== K.object) {
      const u = this._getOrReturnCtx(t);
      return V(u, {
        code: F.invalid_type,
        expected: K.object,
        received: u.parsedType
      }), ie;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof Wr && this._def.unknownKeys === "strip"))
      for (const u in o.data)
        i.includes(u) || a.push(u);
    const l = [];
    for (const u of i) {
      const c = s[u], d = o.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new vr(o, d, o.path, u)),
        alwaysSet: u in o.data
      });
    }
    if (this._def.catchall instanceof Wr) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: o.data[c] }
          });
      else if (u === "strict")
        a.length > 0 && (V(o, {
          code: F.unrecognized_keys,
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
            new vr(o, d, o.path, c)
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
    }).then((u) => jt.mergeObjectSync(r, u)) : jt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return q.errToObj, new Ze({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, s, i, a;
          const l = (i = (s = (o = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(o, n, r).message) !== null && i !== void 0 ? i : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (a = q.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ze({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ze({
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
    return new Ze({
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
    return new Ze({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: oe.ZodObject
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
    return new Ze({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return xe.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Ze({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return xe.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Ze({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return As(this);
  }
  partial(t) {
    const n = {};
    return xe.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new Ze({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return xe.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let s = this.shape[r];
        for (; s instanceof yr; )
          s = s._def.innerType;
        n[r] = s;
      }
    }), new Ze({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return zS(xe.objectKeys(this.shape));
  }
}
Ze.create = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Wr.create(),
  typeName: oe.ZodObject,
  ...de(t)
});
Ze.strictCreate = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Wr.create(),
  typeName: oe.ZodObject,
  ...de(t)
});
Ze.lazycreate = (e, t) => new Ze({
  shape: e,
  unknownKeys: "strip",
  catchall: Wr.create(),
  typeName: oe.ZodObject,
  ...de(t)
});
class sl extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(s) {
      for (const a of s)
        if (a.result.status === "valid")
          return a.result;
      for (const a of s)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((a) => new pn(a.ctx.common.issues));
      return V(n, {
        code: F.invalid_union,
        unionErrors: i
      }), ie;
    }
    if (n.common.async)
      return Promise.all(r.map(async (s) => {
        const i = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await s._parseAsync({
            data: n.data,
            path: n.path,
            parent: i
          }),
          ctx: i
        };
      })).then(o);
    {
      let s;
      const i = [];
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
        c.status === "dirty" && !s && (s = { result: c, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (s)
        return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = i.map((l) => new pn(l));
      return V(n, {
        code: F.invalid_union,
        unionErrors: a
      }), ie;
    }
  }
  get options() {
    return this._def.options;
  }
}
sl.create = (e, t) => new sl({
  options: e,
  typeName: oe.ZodUnion,
  ...de(t)
});
const Tr = (e) => e instanceof ll ? Tr(e.schema) : e instanceof qn ? Tr(e.innerType()) : e instanceof ul ? [e.value] : e instanceof Po ? e.options : e instanceof cl ? xe.objectValues(e.enum) : e instanceof dl ? Tr(e._def.innerType) : e instanceof rl ? [void 0] : e instanceof ol ? [null] : e instanceof yr ? [void 0, ...Tr(e.unwrap())] : e instanceof Mo ? [null, ...Tr(e.unwrap())] : e instanceof my || e instanceof pl ? Tr(e.unwrap()) : e instanceof fl ? Tr(e._def.innerType) : [];
class Id extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== K.object)
      return V(n, {
        code: F.invalid_type,
        expected: K.object,
        received: n.parsedType
      }), ie;
    const r = this.discriminator, o = n.data[r], s = this.optionsMap.get(o);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (V(n, {
      code: F.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ie);
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
    for (const s of n) {
      const i = Tr(s.shape[t]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of i) {
        if (o.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        o.set(a, s);
      }
    }
    return new Id({
      typeName: oe.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...de(r)
    });
  }
}
function Ch(e, t) {
  const n = Mr(e), r = Mr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === K.object && r === K.object) {
    const o = xe.objectKeys(t), s = xe.objectKeys(e).filter((a) => o.indexOf(a) !== -1), i = { ...e, ...t };
    for (const a of s) {
      const l = Ch(e[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      i[a] = l.data;
    }
    return { valid: !0, data: i };
  } else if (n === K.array && r === K.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s], a = t[s], l = Ch(i, a);
      if (!l.valid)
        return { valid: !1 };
      o.push(l.data);
    }
    return { valid: !0, data: o };
  } else return n === K.date && r === K.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class il extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (s, i) => {
      if (Sh(s) || Sh(i))
        return ie;
      const a = Ch(s.value, i.value);
      return a.valid ? ((wh(s) || wh(i)) && n.dirty(), { status: n.value, value: a.data }) : (V(r, {
        code: F.invalid_intersection_types
      }), ie);
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
    ]).then(([s, i]) => o(s, i)) : o(this._def.left._parseSync({
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
il.create = (e, t, n) => new il({
  left: e,
  right: t,
  typeName: oe.ZodIntersection,
  ...de(n)
});
class br extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== K.array)
      return V(r, {
        code: F.invalid_type,
        expected: K.array,
        received: r.parsedType
      }), ie;
    if (r.data.length < this._def.items.length)
      return V(r, {
        code: F.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ie;
    !this._def.rest && r.data.length > this._def.items.length && (V(r, {
      code: F.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...r.data].map((i, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new vr(r, i, r.path, a)) : null;
    }).filter((i) => !!i);
    return r.common.async ? Promise.all(s).then((i) => jt.mergeArray(n, i)) : jt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new br({
      ...this._def,
      rest: t
    });
  }
}
br.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new br({
    items: e,
    typeName: oe.ZodTuple,
    rest: null,
    ...de(t)
  });
};
class al extends pe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== K.object)
      return V(r, {
        code: F.invalid_type,
        expected: K.object,
        received: r.parsedType
      }), ie;
    const o = [], s = this._def.keyType, i = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: s._parse(new vr(r, a, r.path, a)),
        value: i._parse(new vr(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data
      });
    return r.common.async ? jt.mergeObjectAsync(n, o) : jt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof pe ? new al({
      keyType: t,
      valueType: n,
      typeName: oe.ZodRecord,
      ...de(r)
    }) : new al({
      keyType: Un.create(),
      valueType: t,
      typeName: oe.ZodRecord,
      ...de(n)
    });
  }
}
class Tc extends pe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== K.map)
      return V(r, {
        code: F.invalid_type,
        expected: K.map,
        received: r.parsedType
      }), ie;
    const o = this._def.keyType, s = this._def.valueType, i = [...r.data.entries()].map(([a, l], u) => ({
      key: o._parse(new vr(r, a, r.path, [u, "key"])),
      value: s._parse(new vr(r, l, r.path, [u, "value"]))
    }));
    if (r.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const u = await l.key, c = await l.value;
          if (u.status === "aborted" || c.status === "aborted")
            return ie;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of i) {
        const u = l.key, c = l.value;
        if (u.status === "aborted" || c.status === "aborted")
          return ie;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(), a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Tc.create = (e, t, n) => new Tc({
  valueType: t,
  keyType: e,
  typeName: oe.ZodMap,
  ...de(n)
});
class gs extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== K.set)
      return V(r, {
        code: F.invalid_type,
        expected: K.set,
        received: r.parsedType
      }), ie;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (V(r, {
      code: F.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (V(r, {
      code: F.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const s = this._def.valueType;
    function i(l) {
      const u = /* @__PURE__ */ new Set();
      for (const c of l) {
        if (c.status === "aborted")
          return ie;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) => s._parse(new vr(r, l, r.path, u)));
    return r.common.async ? Promise.all(a).then((l) => i(l)) : i(a);
  }
  min(t, n) {
    return new gs({
      ...this._def,
      minSize: { value: t, message: q.toString(n) }
    });
  }
  max(t, n) {
    return new gs({
      ...this._def,
      maxSize: { value: t, message: q.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
gs.create = (e, t) => new gs({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: oe.ZodSet,
  ...de(t)
});
class oi extends pe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== K.function)
      return V(n, {
        code: F.invalid_type,
        expected: K.function,
        received: n.parsedType
      }), ie;
    function r(a, l) {
      return Cc({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wc(),
          Ii
        ].filter((u) => !!u),
        issueData: {
          code: F.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function o(a, l) {
      return Cc({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          wc(),
          Ii
        ].filter((u) => !!u),
        issueData: {
          code: F.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, i = n.data;
    if (this._def.returns instanceof Ai) {
      const a = this;
      return Ht(async function(...l) {
        const u = new pn([]), c = await a._def.args.parseAsync(l, s).catch((y) => {
          throw u.addIssue(r(l, y)), u;
        }), d = await Reflect.apply(i, this, c);
        return await a._def.returns._def.type.parseAsync(d, s).catch((y) => {
          throw u.addIssue(o(d, y)), u;
        });
      });
    } else {
      const a = this;
      return Ht(function(...l) {
        const u = a._def.args.safeParse(l, s);
        if (!u.success)
          throw new pn([r(l, u.error)]);
        const c = Reflect.apply(i, this, u.data), d = a._def.returns.safeParse(c, s);
        if (!d.success)
          throw new pn([o(c, d.error)]);
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
    return new oi({
      ...this._def,
      args: br.create(t).rest(ns.create())
    });
  }
  returns(t) {
    return new oi({
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
    return new oi({
      args: t || br.create([]).rest(ns.create()),
      returns: n || ns.create(),
      typeName: oe.ZodFunction,
      ...de(r)
    });
  }
}
class ll extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ll.create = (e, t) => new ll({
  getter: e,
  typeName: oe.ZodLazy,
  ...de(t)
});
class ul extends pe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        received: n.data,
        code: F.invalid_literal,
        expected: this._def.value
      }), ie;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ul.create = (e, t) => new ul({
  value: e,
  typeName: oe.ZodLiteral,
  ...de(t)
});
function zS(e, t) {
  return new Po({
    values: e,
    typeName: oe.ZodEnum,
    ...de(t)
  });
}
class Po extends pe {
  constructor() {
    super(...arguments), ya.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return V(n, {
        expected: xe.joinValues(r),
        received: n.parsedType,
        code: F.invalid_type
      }), ie;
    }
    if (_c(this, ya) || NS(this, ya, new Set(this._def.values)), !_c(this, ya).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return V(n, {
        received: n.data,
        code: F.invalid_enum_value,
        options: r
      }), ie;
    }
    return Ht(t.data);
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
    return Po.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Po.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
ya = /* @__PURE__ */ new WeakMap();
Po.create = zS;
class cl extends pe {
  constructor() {
    super(...arguments), ga.set(this, void 0);
  }
  _parse(t) {
    const n = xe.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== K.string && r.parsedType !== K.number) {
      const o = xe.objectValues(n);
      return V(r, {
        expected: xe.joinValues(o),
        received: r.parsedType,
        code: F.invalid_type
      }), ie;
    }
    if (_c(this, ga) || NS(this, ga, new Set(xe.getValidEnumValues(this._def.values))), !_c(this, ga).has(t.data)) {
      const o = xe.objectValues(n);
      return V(r, {
        received: r.data,
        code: F.invalid_enum_value,
        options: o
      }), ie;
    }
    return Ht(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ga = /* @__PURE__ */ new WeakMap();
cl.create = (e, t) => new cl({
  values: e,
  typeName: oe.ZodNativeEnum,
  ...de(t)
});
class Ai extends pe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== K.promise && n.common.async === !1)
      return V(n, {
        code: F.invalid_type,
        expected: K.promise,
        received: n.parsedType
      }), ie;
    const r = n.parsedType === K.promise ? n.data : Promise.resolve(n.data);
    return Ht(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ai.create = (e, t) => new Ai({
  type: e,
  typeName: oe.ZodPromise,
  ...de(t)
});
class qn extends pe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, s = {
      addIssue: (i) => {
        V(r, i), i.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), o.type === "preprocess") {
      const i = o.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(i).then(async (a) => {
          if (n.value === "aborted")
            return ie;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? ie : l.status === "dirty" || n.value === "dirty" ? Ks(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return ie;
        const a = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? ie : a.status === "dirty" || n.value === "dirty" ? Ks(a.value) : a;
      }
    }
    if (o.type === "refinement") {
      const i = (a) => {
        const l = o.refinement(a, s);
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
        return a.status === "aborted" ? ie : (a.status === "dirty" && n.dirty(), i(a.value), { status: n.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => a.status === "aborted" ? ie : (a.status === "dirty" && n.dirty(), i(a.value).then(() => ({ status: n.value, value: a.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!ms(i))
          return i;
        const a = o.transform(i.value, s);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => ms(i) ? Promise.resolve(o.transform(i.value, s)).then((a) => ({ status: n.value, value: a })) : i);
    xe.assertNever(o);
  }
}
qn.create = (e, t, n) => new qn({
  schema: e,
  typeName: oe.ZodEffects,
  effect: t,
  ...de(n)
});
qn.createWithPreprocess = (e, t, n) => new qn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: oe.ZodEffects,
  ...de(n)
});
class yr extends pe {
  _parse(t) {
    return this._getType(t) === K.undefined ? Ht(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: oe.ZodOptional,
  ...de(t)
});
class Mo extends pe {
  _parse(t) {
    return this._getType(t) === K.null ? Ht(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mo.create = (e, t) => new Mo({
  innerType: e,
  typeName: oe.ZodNullable,
  ...de(t)
});
class dl extends pe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === K.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
dl.create = (e, t) => new dl({
  innerType: e,
  typeName: oe.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...de(t)
});
class fl extends pe {
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
    return tl(o) ? o.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new pn(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new pn(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fl.create = (e, t) => new fl({
  innerType: e,
  typeName: oe.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...de(t)
});
class Rc extends pe {
  _parse(t) {
    if (this._getType(t) !== K.nan) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        code: F.invalid_type,
        expected: K.nan,
        received: r.parsedType
      }), ie;
    }
    return { status: "valid", value: t.data };
  }
}
Rc.create = (e) => new Rc({
  typeName: oe.ZodNaN,
  ...de(e)
});
const e4 = Symbol("zod_brand");
class my extends pe {
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
class Ll extends pe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? ie : s.status === "dirty" ? (n.dirty(), Ks(s.value)) : this._def.out._parseAsync({
          data: s.value,
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
      return o.status === "aborted" ? ie : o.status === "dirty" ? (n.dirty(), {
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
    return new Ll({
      in: t,
      out: n,
      typeName: oe.ZodPipeline
    });
  }
}
class pl extends pe {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (o) => (ms(o) && (o.value = Object.freeze(o.value)), o);
    return tl(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
pl.create = (e, t) => new pl({
  innerType: e,
  typeName: oe.ZodReadonly,
  ...de(t)
});
function DS(e, t = {}, n) {
  return e ? Oi.create().superRefine((r, o) => {
    var s, i;
    if (!e(r)) {
      const a = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (i = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && i !== void 0 ? i : !0, u = typeof a == "string" ? { message: a } : a;
      o.addIssue({ code: "custom", ...u, fatal: l });
    }
  }) : Oi.create();
}
const t4 = {
  object: Ze.lazycreate
};
var oe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(oe || (oe = {}));
const n4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => DS((n) => n instanceof e, t), BS = Un.create, US = To.create, r4 = Rc.create, o4 = Ro.create, VS = nl.create, s4 = ys.create, i4 = kc.create, a4 = rl.create, l4 = ol.create, u4 = Oi.create, c4 = ns.create, d4 = Wr.create, f4 = Ec.create, p4 = Kn.create, h4 = Ze.create, m4 = Ze.strictCreate, y4 = sl.create, g4 = Id.create, v4 = il.create, b4 = br.create, x4 = al.create, S4 = Tc.create, w4 = gs.create, C4 = oi.create, _4 = ll.create, k4 = ul.create, E4 = Po.create, T4 = cl.create, R4 = Ai.create, rv = qn.create, P4 = yr.create, M4 = Mo.create, I4 = qn.createWithPreprocess, O4 = Ll.create, A4 = () => BS().optional(), $4 = () => US().optional(), N4 = () => VS().optional(), L4 = {
  string: (e) => Un.create({ ...e, coerce: !0 }),
  number: (e) => To.create({ ...e, coerce: !0 }),
  boolean: (e) => nl.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Ro.create({ ...e, coerce: !0 }),
  date: (e) => ys.create({ ...e, coerce: !0 })
}, F4 = ie;
var to = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ii,
  setErrorMap: I5,
  getErrorMap: wc,
  makeIssue: Cc,
  EMPTY_PATH: O5,
  addIssueToContext: V,
  ParseStatus: jt,
  INVALID: ie,
  DIRTY: Ks,
  OK: Ht,
  isAborted: Sh,
  isDirty: wh,
  isValid: ms,
  isAsync: tl,
  get util() {
    return xe;
  },
  get objectUtil() {
    return xh;
  },
  ZodParsedType: K,
  getParsedType: Mr,
  ZodType: pe,
  datetimeRegex: jS,
  ZodString: Un,
  ZodNumber: To,
  ZodBigInt: Ro,
  ZodBoolean: nl,
  ZodDate: ys,
  ZodSymbol: kc,
  ZodUndefined: rl,
  ZodNull: ol,
  ZodAny: Oi,
  ZodUnknown: ns,
  ZodNever: Wr,
  ZodVoid: Ec,
  ZodArray: Kn,
  ZodObject: Ze,
  ZodUnion: sl,
  ZodDiscriminatedUnion: Id,
  ZodIntersection: il,
  ZodTuple: br,
  ZodRecord: al,
  ZodMap: Tc,
  ZodSet: gs,
  ZodFunction: oi,
  ZodLazy: ll,
  ZodLiteral: ul,
  ZodEnum: Po,
  ZodNativeEnum: cl,
  ZodPromise: Ai,
  ZodEffects: qn,
  ZodTransformer: qn,
  ZodOptional: yr,
  ZodNullable: Mo,
  ZodDefault: dl,
  ZodCatch: fl,
  ZodNaN: Rc,
  BRAND: e4,
  ZodBranded: my,
  ZodPipeline: Ll,
  ZodReadonly: pl,
  custom: DS,
  Schema: pe,
  ZodSchema: pe,
  late: t4,
  get ZodFirstPartyTypeKind() {
    return oe;
  },
  coerce: L4,
  any: u4,
  array: p4,
  bigint: o4,
  boolean: VS,
  date: s4,
  discriminatedUnion: g4,
  effect: rv,
  enum: E4,
  function: C4,
  instanceof: n4,
  intersection: v4,
  lazy: _4,
  literal: k4,
  map: S4,
  nan: r4,
  nativeEnum: T4,
  never: d4,
  null: l4,
  nullable: M4,
  number: US,
  object: h4,
  oboolean: N4,
  onumber: $4,
  optional: P4,
  ostring: A4,
  pipeline: O4,
  preprocess: I4,
  promise: R4,
  record: x4,
  set: w4,
  strictObject: m4,
  string: BS,
  symbol: i4,
  transformer: rv,
  tuple: b4,
  undefined: a4,
  union: y4,
  unknown: c4,
  void: f4,
  NEVER: F4,
  ZodIssueCode: F,
  quotelessJson: M5,
  ZodError: pn
});
class WS {
  constructor(t, n) {
    this.listeners = /* @__PURE__ */ new Set(), this._batching = !1, this._flushing = 0, this.subscribe = (r) => {
      var o, s;
      this.listeners.add(r);
      const i = (s = (o = this.options) == null ? void 0 : o.onSubscribe) == null ? void 0 : s.call(o, r, this);
      return () => {
        this.listeners.delete(r), i == null || i();
      };
    }, this.setState = (r) => {
      var o, s, i;
      const a = this.state;
      this.state = (o = this.options) != null && o.updateFn ? this.options.updateFn(a)(r) : r(a), (i = (s = this.options) == null ? void 0 : s.onUpdate) == null || i.call(s), this._flush();
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
function Od(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function HS(e, t) {
  return yy(t).reduce((r, o) => {
    if (r === null) return null;
    if (typeof r < "u")
      return r[o];
  }, e);
}
function Pf(e, t, n) {
  const r = yy(t);
  function o(s) {
    if (!r.length)
      return Od(n, s);
    const i = r.shift();
    if (typeof i == "string" || typeof i == "number" && !Array.isArray(s))
      return typeof s == "object" ? (s === null && (s = {}), {
        ...s,
        [i]: o(s[i])
      }) : {
        [i]: o()
      };
    if (Array.isArray(s) && typeof i == "number") {
      const a = s.slice(0, i);
      return [
        ...a.length ? a : new Array(i),
        o(s[i]),
        ...s.slice(i + 1)
      ];
    }
    return [...new Array(i), o()];
  }
  return o(e);
}
function j4(e, t) {
  const n = yy(t);
  function r(o) {
    if (!o) return;
    if (n.length === 1) {
      const i = n[0];
      if (Array.isArray(o) && typeof i == "number")
        return o.filter((u, c) => c !== i);
      const { [i]: a, ...l } = o;
      return l;
    }
    const s = n.shift();
    if (typeof s == "string" && typeof o == "object")
      return {
        ...o,
        [s]: r(o[s])
      };
    if (typeof s == "number" && Array.isArray(o)) {
      if (s >= o.length)
        return o;
      const i = o.slice(0, s);
      return [
        ...i.length ? i : new Array(s),
        r(o[s]),
        ...o.slice(s + 1)
      ];
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return r(e);
}
const z4 = /^(\d*)$/gm, D4 = /\.(\d*)\./gm, B4 = /^(\d*)\./gm, U4 = /\.(\d*$)/gm, V4 = /\.{2,}/gm, _h = "__int__", du = `${_h}$1`;
function yy(e) {
  if (Array.isArray(e))
    return [...e];
  if (typeof e != "string")
    throw new Error("Path must be a string.");
  return e.replaceAll("[", ".").replaceAll("]", "").replace(z4, du).replace(D4, `.${du}.`).replace(B4, `${du}.`).replace(U4, `.${du}`).replace(V4, ".").split(".").map((t) => t.indexOf(_h) === 0 ? parseInt(t.substring(_h.length), 10) : t);
}
function W4(e) {
  return !(Array.isArray(e) && e.length === 0);
}
function kh(e, t) {
  const { asyncDebounceMs: n } = t, {
    onChangeAsync: r,
    onBlurAsync: o,
    onSubmitAsync: s,
    onBlurAsyncDebounceMs: i,
    onChangeAsyncDebounceMs: a
  } = t.validators || {}, l = n ?? 0, u = {
    cause: "change",
    validate: r,
    debounceMs: a ?? l
  }, c = {
    cause: "blur",
    validate: o,
    debounceMs: i ?? l
  }, d = {
    cause: "submit",
    validate: s,
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
function Eh(e, t) {
  const { onChange: n, onBlur: r, onSubmit: o, onMount: s } = t.validators || {}, i = { cause: "change", validate: n }, a = { cause: "blur", validate: r }, l = { cause: "submit", validate: o }, u = { cause: "mount", validate: s }, c = {
    cause: "server",
    validate: () => {
    }
  };
  switch (e) {
    case "mount":
      return [u];
    case "submit":
      return [
        i,
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
      return [i, c];
  }
}
function H4(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const o of e) {
    const s = [...o.path ?? []].map((i) => {
      const a = typeof i == "object" ? i.key : i;
      return typeof a == "number" ? `[${a}]` : a;
    }).join(".").replace(/\.\[/g, "[");
    n.set(s, (n.get(s) ?? []).concat(o));
  }
  const r = {};
  return n.forEach((o, s) => {
    r[s] = t(o);
  }), r;
}
function K4(e) {
  return (t) => ({
    form: e(t),
    fields: H4(t, e)
  });
}
const KS = (e = {}) => () => {
  const t = e.transformErrors ?? ((r) => r.map((o) => o.message).join(", ")), n = (r) => r === "form" ? K4(t) : t;
  return {
    validate({ value: r, validationSource: o }, s) {
      const i = s["~standard"].validate(r);
      if (i instanceof Promise)
        throw new Error("async function passed to sync validator");
      return i.issues ? n(o)(i.issues) : void 0;
    },
    async validateAsync({ value: r, validationSource: o }, s) {
      const i = await s["~standard"].validate(r);
      return i.issues ? n(o)(i.issues) : void 0;
    }
  };
}, QS = (e) => !!e && "~standard" in e;
function Mf(e) {
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
const Q4 = (e) => typeof e == "object";
class Z4 {
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
        const s = r.defaultValues && r.defaultValues !== o.defaultValues && !this.state.isTouched, i = r.defaultState !== o.defaultState && !this.state.isTouched;
        this.store.setState(
          () => Mf(
            Object.assign(
              {},
              this.state,
              i ? r.defaultState : {},
              s ? {
                values: r.defaultValues
              } : {}
            )
          )
        );
      });
    }, this.reset = (r, o) => {
      const { fieldMeta: s } = this.state, i = this.resetFieldMeta(s);
      r && !(o != null && o.keepDefaultValues) && (this.options = {
        ...this.options,
        defaultValues: r
      }), this.store.setState(
        () => {
          var a;
          return Mf({
            ...this.options.defaultState,
            values: r ?? this.options.defaultValues ?? ((a = this.options.defaultState) == null ? void 0 : a.values),
            fieldMeta: i
          });
        }
      );
    }, this.validateAllFields = async (r) => {
      const o = [];
      return this.store.batch(() => {
        Object.values(this.fieldInfo).forEach((i) => {
          if (!i.instance) return;
          const a = i.instance;
          o.push(
            // Remember, `validate` is either a sync operation or a promise
            Promise.resolve().then(() => a.validate(r))
          ), i.instance.state.meta.isTouched || i.instance.setMeta((l) => ({ ...l, isTouched: !0 }));
        });
      }), (await Promise.all(o)).flat();
    }, this.validateArrayFieldsStartingFrom = async (r, o, s) => {
      const i = this.getFieldValue(r), a = Array.isArray(i) ? Math.max(i.length - 1, 0) : null, l = [`${r}[${o}]`];
      for (let f = o + 1; f <= (a ?? 0); f++)
        l.push(`${r}[${f}]`);
      const u = Object.keys(this.fieldInfo).filter(
        (f) => l.some((y) => f.startsWith(y))
      ), c = [];
      return this.store.batch(() => {
        u.forEach((f) => {
          c.push(
            Promise.resolve().then(() => this.validateField(f, s))
          );
        });
      }), (await Promise.all(c)).flat();
    }, this.validateField = (r, o) => {
      var s;
      const i = (s = this.fieldInfo[r]) == null ? void 0 : s.instance;
      return i ? (i.state.meta.isTouched || i.setMeta((a) => ({ ...a, isTouched: !0 })), i.validate(o)) : [];
    }, this.validateSync = (r) => {
      const o = Eh(r, this.options);
      let s = !1;
      const i = {};
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
          }), { formError: c, fieldErrors: d } = Th(u), f = fu(l.cause);
          if (d)
            for (const [y, g] of Object.entries(d)) {
              const S = {
                ...i[y] || {},
                [f]: g
              };
              i[y] = S;
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
          })), (c || d) && (s = !0);
        }
      });
      const a = fu("submit");
      return this.state.errorMap[a] && r !== "submit" && !s && this.store.setState((l) => ({
        ...l,
        errorMap: {
          ...l.errorMap,
          [a]: void 0
        }
      })), { hasErrored: s, fieldsErrorMap: i };
    }, this.validateAsync = async (r) => {
      const o = kh(r, this.options);
      this.state.isFormValidating || this.store.setState((u) => ({ ...u, isFormValidating: !0 }));
      const s = [];
      let i;
      for (const u of o) {
        if (!u.validate) continue;
        const c = fu(u.cause), d = this.state.validationMetaMap[c];
        d == null || d.lastAbortController.abort();
        const f = new AbortController();
        this.state.validationMetaMap[c] = {
          lastAbortController: f
        }, s.push(
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
                  } catch (x) {
                    p(x);
                  }
                }, u.debounceMs);
              });
            } catch (h) {
              g = h;
            }
            const { formError: v, fieldErrors: S } = Th(g);
            S && (i = i ? { ...i, ...S } : S);
            const m = fu(u.cause);
            if (i)
              for (const [h, p] of Object.entries(i)) {
                const x = this.getFieldMeta(h);
                x && x.errorMap[m] !== p && this.setFieldMeta(h, (C) => ({
                  ...C,
                  errorMap: {
                    ...C.errorMap,
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
            })), y(i ? { fieldErrors: i, errorMapKey: m } : void 0);
          })
        );
      }
      let a = [];
      const l = {};
      if (s.length) {
        a = await Promise.all(s);
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
      const { hasErrored: o, fieldsErrorMap: s } = this.validateSync(r);
      return o && !this.options.asyncAlways ? s : this.validateAsync(r);
    }, this.handleSubmit = async () => {
      var r, o, s, i;
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
        await ((i = (s = this.options).onSubmit) == null ? void 0 : i.call(s, { value: this.state.values, formApi: this })), this.store.batch(() => {
          this.store.setState((l) => ({ ...l, isSubmitted: !0 })), a();
        });
      } catch (l) {
        throw a(), l;
      }
    }, this.getFieldValue = (r) => HS(this.state.values, r), this.getFieldMeta = (r) => this.state.fieldMeta[r], this.getFieldInfo = (r) => {
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
      this.store.setState((s) => ({
        ...s,
        fieldMeta: {
          ...s.fieldMeta,
          [r]: Od(o, s.fieldMeta[r])
        }
      }));
    }, this.resetFieldMeta = (r) => Object.keys(r).reduce(
      (o, s) => {
        const i = s;
        return o[i] = {
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
    ), this.setFieldValue = (r, o, s) => {
      const i = (s == null ? void 0 : s.dontUpdateMeta) ?? !1;
      this.store.batch(() => {
        i || this.setFieldMeta(r, (a) => ({
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
          values: Pf(a.values, r, o)
        }));
      });
    }, this.deleteField = (r) => {
      this.store.setState((o) => {
        const s = { ...o };
        return s.values = j4(s.values, r), delete s.fieldMeta[r], s;
      }), delete this.fieldInfo[r];
    }, this.pushFieldValue = (r, o, s) => {
      this.setFieldValue(
        r,
        (i) => [...Array.isArray(i) ? i : [], o],
        s
      ), this.validateField(r, "change");
    }, this.insertFieldValue = async (r, o, s, i) => {
      this.setFieldValue(
        r,
        (a) => [
          ...a.slice(0, o),
          s,
          ...a.slice(o)
        ],
        i
      ), await this.validateField(r, "change");
    }, this.replaceFieldValue = async (r, o, s, i) => {
      this.setFieldValue(
        r,
        (a) => a.map(
          (l, u) => u === o ? s : l
        ),
        i
      ), await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, o, "change");
    }, this.removeFieldValue = async (r, o, s) => {
      const i = this.getFieldValue(r), a = Array.isArray(i) ? Math.max(i.length - 1, 0) : null;
      if (this.setFieldValue(
        r,
        (l) => l.filter(
          (u, c) => c !== o
        ),
        s
      ), a !== null) {
        const l = `${r}[${a}]`;
        Object.keys(this.fieldInfo).filter(
          (c) => c.startsWith(l)
        ).forEach((c) => this.deleteField(c));
      }
      await this.validateField(r, "change"), await this.validateArrayFieldsStartingFrom(r, o, "change");
    }, this.swapFieldValues = (r, o, s, i) => {
      this.setFieldValue(
        r,
        (a) => {
          const l = a[o], u = a[s];
          return Pf(Pf(a, `${o}`, u), `${s}`, l);
        },
        i
      ), this.validateField(r, "change"), this.validateField(`${r}[${o}]`, "change"), this.validateField(`${r}[${s}]`, "change");
    }, this.moveFieldValues = (r, o, s, i) => {
      this.setFieldValue(
        r,
        (a) => (a.splice(s, 0, a.splice(o, 1)[0]), a),
        i
      ), this.validateField(r, "change"), this.validateField(`${r}[${o}]`, "change"), this.validateField(`${r}[${s}]`, "change");
    }, this.store = new WS(
      Mf({
        ...t == null ? void 0 : t.defaultState,
        values: (t == null ? void 0 : t.defaultValues) ?? ((n = t == null ? void 0 : t.defaultState) == null ? void 0 : n.values),
        isFormValid: !0
      }),
      {
        onUpdate: () => {
          var r, o, s, i;
          let { state: a } = this.store;
          const l = Object.values(a.fieldMeta), u = l.some(
            (k) => k == null ? void 0 : k.isValidating
          ), c = !l.some(
            (k) => (k == null ? void 0 : k.errorMap) && W4(Object.values(k.errorMap).filter(Boolean))
          ), d = l.some((k) => k == null ? void 0 : k.isTouched), f = l.some((k) => k == null ? void 0 : k.isBlurred);
          d && ((r = a == null ? void 0 : a.errorMap) != null && r.onMount) && (a.errorMap.onMount = void 0);
          const y = l.some((k) => k == null ? void 0 : k.isDirty), g = !y, v = !!// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          ((o = a.errorMap) != null && o.onMount || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          l.some((k) => {
            var E;
            return (E = k == null ? void 0 : k.errorMap) == null ? void 0 : E.onMount;
          })), S = u || a.isFormValidating;
          a.errors = Object.values(a.errorMap).reduce((k, E) => E === void 0 ? k : typeof E == "string" ? (k.push(E), k) : (E && Q4(E) && k.push(E.form), k), []);
          const m = a.errors.length === 0, h = c && m, p = a.submissionAttempts === 0 && !d && !v || !S && !a.isSubmitting && h;
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
          const x = ((s = this.options.transform) == null ? void 0 : s.deps) ?? [];
          (x.length !== this.prevTransformArray.length || x.some((k, E) => k !== this.prevTransformArray[E])) && ((i = this.options.transform) == null || i.fn(this), this.store.state = this.state, this.prevTransformArray = x);
        }
      }
    ), this.state = this.store.state, this.update(t || {});
  }
  /**
   * @private
   */
  runValidator(t) {
    const n = this.options.validatorAdapter;
    return n && (typeof t.validate != "function" || "~standard" in t.validate) ? n()[t.type](t.value, t.validate) : QS(t.validate) ? KS()()[t.type](
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
function Th(e) {
  if (e) {
    if (typeof e == "object") {
      const t = Th(e.form).formError, n = e.fields;
      return { formError: t, fieldErrors: n };
    }
    return typeof e != "string" ? { formError: "Invalid Form Values" } : { formError: e };
  }
  return { formError: void 0 };
}
function fu(e) {
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
class G4 {
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(t) {
    this.options = {}, this.mount = () => {
      var n, r;
      const o = this.getInfo();
      o.instance = this;
      const s = this.form.store.subscribe(() => {
        this.store.batch(() => {
          const a = this.getValue(), l = this.getMeta();
          a !== this.state.value && this.store.setState((u) => ({ ...u, value: a })), l !== this.state.meta && this.store.setState((u) => ({ ...u, meta: l }));
        });
      });
      this.update(this.options);
      const { onMount: i } = this.options.validators || {};
      if (i) {
        const a = this.runValidator({
          validate: i,
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
        s();
      };
    }, this.update = (n) => {
      if (this.state.value === void 0) {
        const r = HS(n.form.options.defaultValues, n.name);
        n.defaultValue !== void 0 ? this.setValue(n.defaultValue, {
          dontUpdateMeta: !0
        }) : r !== void 0 && this.setValue(r, {
          dontUpdateMeta: !0
        });
      }
      this._getMeta() === void 0 && this.setMeta(this.state.meta), this.options = n;
    }, this.getValue = () => this.form.getFieldValue(this.name), this.setValue = (n, r) => {
      var o, s;
      this.form.setFieldValue(this.name, n, r), (s = (o = this.options.listeners) == null ? void 0 : o.onChange) == null || s.call(o, {
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
      for (const s of r) {
        if (!s.instance) continue;
        const { onChangeListenTo: i, onBlurListenTo: a } = s.instance.options.validators || {};
        n === "change" && (i != null && i.includes(this.name)) && o.push(s.instance), n === "blur" && (a != null && a.includes(this.name)) && o.push(s.instance);
      }
      return o;
    }, this.validateSync = (n, r) => {
      const o = Eh(n, this.options), i = this.getLinkedFields(n).reduce(
        (u, c) => {
          const d = Eh(n, c.options);
          return d.forEach((f) => {
            f.field = c;
          }), u.concat(d);
        },
        []
      );
      let a = !1;
      this.form.store.batch(() => {
        const u = (c, d) => {
          const f = ia(d.cause), y = (
            /*
              If `validateObj.validate` is `undefined`, then the field doesn't have
              a validator for this event, but there still could be an error that
              needs to be cleaned up related to the current event left by the
              form's validator.
            */
            d.validate ? ov(
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
              [ia(d.cause)]: (
                // Prefer the error message from the field validators if they exist
                y || r[f]
              )
            }
          })), (y || r[f]) && (a = !0);
        };
        for (const c of o)
          u(this, c);
        for (const c of i)
          c.validate && u(c.field, c);
      });
      const l = ia("submit");
      return this.state.meta.errorMap[l] && n !== "submit" && !a && this.setMeta((u) => ({
        ...u,
        errorMap: {
          ...u.errorMap,
          [l]: void 0
        }
      })), { hasErrored: a };
    }, this.validateAsync = async (n, r) => {
      const o = kh(n, this.options), s = await r, i = this.getLinkedFields(n), a = i.reduce(
        (f, y) => {
          const g = kh(n, y.options);
          return g.forEach((v) => {
            v.field = y;
          }), f.concat(g);
        },
        []
      );
      this.state.meta.isValidating || this.setMeta((f) => ({ ...f, isValidating: !0 }));
      for (const f of i)
        f.setMeta((y) => ({ ...y, isValidating: !0 }));
      const l = [], u = [], c = (f, y, g) => {
        const v = ia(y.cause), S = f.getInfo().validationMetaMap[v];
        S == null || S.lastAbortController.abort();
        const m = new AbortController();
        this.getInfo().validationMetaMap[v] = {
          lastAbortController: m
        }, g.push(
          new Promise(async (h) => {
            var p;
            let x;
            try {
              x = await new Promise((T, M) => {
                this.timeoutIds[y.cause] && clearTimeout(this.timeoutIds[y.cause]), this.timeoutIds[y.cause] = setTimeout(async () => {
                  if (m.signal.aborted) return T(void 0);
                  try {
                    T(
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
                  } catch (b) {
                    M(b);
                  }
                }, y.debounceMs);
              });
            } catch (T) {
              x = T;
            }
            if (m.signal.aborted) return h(void 0);
            const C = ov(x), k = (p = s[this.name]) == null ? void 0 : p[v], E = C || k;
            f.setMeta((T) => ({
              ...T,
              errorMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...T == null ? void 0 : T.errorMap,
                [v]: E
              }
            })), h(E);
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
      for (const f of i)
        f.setMeta((y) => ({ ...y, isValidating: !1 }));
      return d.filter(Boolean);
    }, this.validate = (n) => {
      var r;
      if (!this.state.meta.isTouched) return [];
      const { fieldsErrorMap: o } = this.form.validateSync(n), { hasErrored: s } = this.validateSync(
        n,
        o[this.name] ?? {}
      );
      if (s && !this.options.asyncAlways)
        return (r = this.getInfo().validationMetaMap[ia(n)]) == null || r.lastAbortController.abort(), this.state.meta.errors;
      const i = this.form.validateAsync(n);
      return this.validateAsync(n, i);
    }, this.handleChange = (n) => {
      this.setValue(n);
    }, this.handleBlur = () => {
      var n, r;
      this.state.meta.isTouched || (this.setMeta((s) => ({ ...s, isTouched: !0 })), this.validate("change")), this.state.meta.isBlurred || this.setMeta((s) => ({ ...s, isBlurred: !0 })), this.validate("blur"), (r = (n = this.options.listeners) == null ? void 0 : n.onBlur) == null || r.call(n, {
        value: this.state.value,
        fieldApi: this
      });
    }, this.form = t.form, this.name = t.name, this.timeoutIds = {}, t.defaultValue !== void 0 && this.form.setFieldValue(this.name, t.defaultValue, {
      dontUpdateMeta: !0
    }), this.store = new WS(
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
    return QS(t.validate) ? KS()()[t.type](
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
function ov(e) {
  if (e)
    return typeof e != "string" ? "Invalid Form Values" : e;
}
function ia(e) {
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
var ZS = { exports: {} }, GS = {}, qS = { exports: {} }, XS = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i = w;
function q4(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var X4 = typeof Object.is == "function" ? Object.is : q4, Y4 = $i.useState, J4 = $i.useEffect, eA = $i.useLayoutEffect, tA = $i.useDebugValue;
function nA(e, t) {
  var n = t(), r = Y4({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, s = r[1];
  return eA(
    function() {
      o.value = n, o.getSnapshot = t, If(o) && s({ inst: o });
    },
    [e, n, t]
  ), J4(
    function() {
      return If(o) && s({ inst: o }), e(function() {
        If(o) && s({ inst: o });
      });
    },
    [e]
  ), tA(n), n;
}
function If(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !X4(e, n);
  } catch {
    return !0;
  }
}
function rA(e, t) {
  return t();
}
var oA = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? rA : nA;
XS.useSyncExternalStore = $i.useSyncExternalStore !== void 0 ? $i.useSyncExternalStore : oA;
qS.exports = XS;
var sA = qS.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad = w, iA = sA;
function aA(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lA = typeof Object.is == "function" ? Object.is : aA, uA = iA.useSyncExternalStore, cA = Ad.useRef, dA = Ad.useEffect, fA = Ad.useMemo, pA = Ad.useDebugValue;
GS.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var s = cA(null);
  if (s.current === null) {
    var i = { hasValue: !1, value: null };
    s.current = i;
  } else i = s.current;
  s = fA(
    function() {
      function l(y) {
        if (!u) {
          if (u = !0, c = y, y = r(y), o !== void 0 && i.hasValue) {
            var g = i.value;
            if (o(g, y))
              return d = g;
          }
          return d = y;
        }
        if (g = d, lA(c, y)) return g;
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
  var a = uA(e, s[0], s[1]);
  return dA(
    function() {
      i.hasValue = !0, i.value = a;
    },
    [a]
  ), pA(a), a;
};
ZS.exports = GS;
var hA = ZS.exports;
function gy(e, t = (n) => n) {
  return hA.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    mA
  );
}
function mA(e, t) {
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
const Pc = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function yA(e) {
  const [t] = w.useState(() => {
    const r = new G4({
      ...e,
      form: e.form,
      name: e.name
    });
    return r.Field = YS, r;
  });
  return Pc(t.mount, [t]), Pc(() => {
    t.update(e);
  }), gy(
    t.store,
    e.mode === "array" ? (n) => [n.meta, Object.keys(n.value ?? []).length] : void 0
  ), t;
}
const YS = ({
  children: e,
  ...t
}) => {
  const n = yA(t), r = w.useMemo(
    () => Od(e, n),
    /**
     * The reason this exists is to fix an issue with the React Compiler.
     * Namely, functionalUpdate is memoized where it checks for `fieldApi`, which is a static type.
     * This means that when `state.value` changes, it does not trigger a re-render. The useMemo explicitly fixes this problem
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, n, n.state.value, n.state.meta]
  );
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: r });
};
function gA({
  form: e,
  selector: t,
  children: n
}) {
  const r = gy(e.store, t);
  return Od(n, r);
}
function JS(e) {
  const [t] = w.useState(() => {
    const n = new Z4(e), r = n;
    return r.Field = function(s) {
      return /* @__PURE__ */ _.jsx(YS, { ...s, form: n });
    }, r.Subscribe = (o) => /* @__PURE__ */ _.jsx(
      gA,
      {
        form: n,
        selector: o.selector,
        children: o.children
      }
    ), r;
  });
  return Pc(t.mount, []), gy(t.store, (n) => n.isSubmitting), Pc(() => {
    t.update(e);
  }), t;
}
function ew(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vA } = Object.prototype, { getPrototypeOf: vy } = Object, $d = /* @__PURE__ */ ((e) => (t) => {
  const n = vA.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yn = (e) => (e = e.toLowerCase(), (t) => $d(t) === e), Nd = (e) => (t) => typeof t === e, { isArray: Ui } = Array, hl = Nd("undefined");
function bA(e) {
  return e !== null && !hl(e) && e.constructor !== null && !hl(e.constructor) && hn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tw = Yn("ArrayBuffer");
function xA(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tw(e.buffer), t;
}
const SA = Nd("string"), hn = Nd("function"), nw = Nd("number"), Ld = (e) => e !== null && typeof e == "object", wA = (e) => e === !0 || e === !1, $u = (e) => {
  if ($d(e) !== "object")
    return !1;
  const t = vy(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, CA = Yn("Date"), _A = Yn("File"), kA = Yn("Blob"), EA = Yn("FileList"), TA = (e) => Ld(e) && hn(e.pipe), RA = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || hn(e.append) && ((t = $d(e)) === "formdata" || // detect form-data instance
  t === "object" && hn(e.toString) && e.toString() === "[object FormData]"));
}, PA = Yn("URLSearchParams"), [MA, IA, OA, AA] = ["ReadableStream", "Request", "Response", "Headers"].map(Yn), $A = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ui(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function rw(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Ko = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ow = (e) => !hl(e) && e !== Ko;
function Rh() {
  const { caseless: e } = ow(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && rw(t, o) || o;
    $u(t[s]) && $u(r) ? t[s] = Rh(t[s], r) : $u(r) ? t[s] = Rh({}, r) : Ui(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Fl(arguments[r], n);
  return t;
}
const NA = (e, t, n, { allOwnKeys: r } = {}) => (Fl(t, (o, s) => {
  n && hn(o) ? e[s] = ew(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), LA = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), FA = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, jA = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && vy(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zA = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, DA = (e) => {
  if (!e) return null;
  if (Ui(e)) return e;
  let t = e.length;
  if (!nw(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, BA = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vy(Uint8Array)), UA = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, VA = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, WA = Yn("HTMLFormElement"), HA = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), sv = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), KA = Yn("RegExp"), sw = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Fl(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, QA = (e) => {
  sw(e, (t, n) => {
    if (hn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (hn(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ZA = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Ui(e) ? r(e) : r(String(e).split(t)), n;
}, GA = () => {
}, qA = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Of = "abcdefghijklmnopqrstuvwxyz", iv = "0123456789", iw = {
  DIGIT: iv,
  ALPHA: Of,
  ALPHA_DIGIT: Of + Of.toUpperCase() + iv
}, XA = (e = 16, t = iw.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function YA(e) {
  return !!(e && hn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const JA = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ld(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Ui(r) ? [] : {};
        return Fl(r, (i, a) => {
          const l = n(i, o + 1);
          !hl(l) && (s[a] = l);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, e3 = Yn("AsyncFunction"), t3 = (e) => e && (Ld(e) || hn(e)) && hn(e.then) && hn(e.catch), aw = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ko.addEventListener("message", ({ source: o, data: s }) => {
  o === Ko && s === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), Ko.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  hn(Ko.postMessage)
), n3 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ko) : typeof process < "u" && process.nextTick || aw, I = {
  isArray: Ui,
  isArrayBuffer: tw,
  isBuffer: bA,
  isFormData: RA,
  isArrayBufferView: xA,
  isString: SA,
  isNumber: nw,
  isBoolean: wA,
  isObject: Ld,
  isPlainObject: $u,
  isReadableStream: MA,
  isRequest: IA,
  isResponse: OA,
  isHeaders: AA,
  isUndefined: hl,
  isDate: CA,
  isFile: _A,
  isBlob: kA,
  isRegExp: KA,
  isFunction: hn,
  isStream: TA,
  isURLSearchParams: PA,
  isTypedArray: BA,
  isFileList: EA,
  forEach: Fl,
  merge: Rh,
  extend: NA,
  trim: $A,
  stripBOM: LA,
  inherits: FA,
  toFlatObject: jA,
  kindOf: $d,
  kindOfTest: Yn,
  endsWith: zA,
  toArray: DA,
  forEachEntry: UA,
  matchAll: VA,
  isHTMLForm: WA,
  hasOwnProperty: sv,
  hasOwnProp: sv,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: sw,
  freezeMethods: QA,
  toObjectSet: ZA,
  toCamelCase: HA,
  noop: GA,
  toFiniteNumber: qA,
  findKey: rw,
  global: Ko,
  isContextDefined: ow,
  ALPHABET: iw,
  generateString: XA,
  isSpecCompliantForm: YA,
  toJSONObject: JA,
  isAsyncFn: e3,
  isThenable: t3,
  setImmediate: aw,
  asap: n3
};
function ce(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
I.inherits(ce, Error, {
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
const lw = ce.prototype, uw = {};
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
  uw[e] = { value: e };
});
Object.defineProperties(ce, uw);
Object.defineProperty(lw, "isAxiosError", { value: !0 });
ce.from = (e, t, n, r, o, s) => {
  const i = Object.create(lw);
  return I.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), ce.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const r3 = null;
function Ph(e) {
  return I.isPlainObject(e) || I.isArray(e);
}
function cw(e) {
  return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function av(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = cw(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function o3(e) {
  return I.isArray(e) && !e.some(Ph);
}
const s3 = I.toFlatObject(I, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Fd(e, t, n) {
  if (!I.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = I.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, S) {
    return !I.isUndefined(S[v]);
  });
  const r = n.metaTokens, o = n.visitor || c, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (I.isDate(g))
      return g.toISOString();
    if (!l && I.isBlob(g))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(g) || I.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function c(g, v, S) {
    let m = g;
    if (g && !S && typeof g == "object") {
      if (I.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (I.isArray(g) && o3(g) || (I.isFileList(g) || I.endsWith(v, "[]")) && (m = I.toArray(g)))
        return v = cw(v), m.forEach(function(p, x) {
          !(I.isUndefined(p) || p === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? av([v], x, s) : i === null ? v : v + "[]",
            u(p)
          );
        }), !1;
    }
    return Ph(g) ? !0 : (t.append(av(S, v, s), u(g)), !1);
  }
  const d = [], f = Object.assign(s3, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: Ph
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
function lv(e) {
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
function by(e, t) {
  this._pairs = [], e && Fd(e, this, t);
}
const dw = by.prototype;
dw.append = function(t, n) {
  this._pairs.push([t, n]);
};
dw.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, lv);
  } : lv;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function i3(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function fw(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || i3;
  I.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = I.isURLSearchParams(t) ? t.toString() : new by(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class uv {
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
const pw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, a3 = typeof URLSearchParams < "u" ? URLSearchParams : by, l3 = typeof FormData < "u" ? FormData : null, u3 = typeof Blob < "u" ? Blob : null, c3 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: a3,
    FormData: l3,
    Blob: u3
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xy = typeof window < "u" && typeof document < "u", Mh = typeof navigator == "object" && navigator || void 0, d3 = xy && (!Mh || ["ReactNative", "NativeScript", "NS"].indexOf(Mh.product) < 0), f3 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", p3 = xy && window.location.href || "http://localhost", h3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xy,
  hasStandardBrowserEnv: d3,
  hasStandardBrowserWebWorkerEnv: f3,
  navigator: Mh,
  origin: p3
}, Symbol.toStringTag, { value: "Module" })), Nt = {
  ...h3,
  ...c3
};
function m3(e, t) {
  return Fd(e, new Nt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return Nt.isNode && I.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function y3(e) {
  return I.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function g3(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function hw(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && I.isArray(o) ? o.length : i, l ? (I.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !I.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && I.isArray(o[i]) && (o[i] = g3(o[i])), !a);
  }
  if (I.isFormData(e) && I.isFunction(e.entries)) {
    const n = {};
    return I.forEachEntry(e, (r, o) => {
      t(y3(r), o, n, 0);
    }), n;
  }
  return null;
}
function v3(e, t, n) {
  if (I.isString(e))
    try {
      return (t || JSON.parse)(e), I.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const jl = {
  transitional: pw,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = I.isObject(t);
    if (s && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t))
      return o ? JSON.stringify(hw(t)) : t;
    if (I.isArrayBuffer(t) || I.isBuffer(t) || I.isStream(t) || I.isFile(t) || I.isBlob(t) || I.isReadableStream(t))
      return t;
    if (I.isArrayBufferView(t))
      return t.buffer;
    if (I.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return m3(t, this.formSerializer).toString();
      if ((a = I.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Fd(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), v3(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || jl.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (I.isResponse(t) || I.isReadableStream(t))
      return t;
    if (t && I.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? ce.from(a, ce.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: Nt.classes.FormData,
    Blob: Nt.classes.Blob
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
  jl.headers[e] = {};
});
const b3 = I.toObjectSet([
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
]), x3 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && b3[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, cv = Symbol("internals");
function aa(e) {
  return e && String(e).trim().toLowerCase();
}
function Nu(e) {
  return e === !1 || e == null ? e : I.isArray(e) ? e.map(Nu) : String(e);
}
function S3(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const w3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Af(e, t, n, r, o) {
  if (I.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!I.isString(t)) {
    if (I.isString(r))
      return t.indexOf(r) !== -1;
    if (I.isRegExp(r))
      return r.test(t);
  }
}
function C3(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _3(e, t) {
  const n = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class nn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, u) {
      const c = aa(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = I.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = Nu(a));
    }
    const i = (a, l) => I.forEach(a, (u, c) => s(u, c, l));
    if (I.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (I.isString(t) && (t = t.trim()) && !w3(t))
      i(x3(t), n);
    else if (I.isHeaders(t))
      for (const [a, l] of t.entries())
        s(l, a, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = aa(t), t) {
      const r = I.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return S3(o);
        if (I.isFunction(n))
          return n.call(this, o, r);
        if (I.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = aa(t), t) {
      const r = I.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Af(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = aa(i), i) {
        const a = I.findKey(r, i);
        a && (!n || Af(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return I.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Af(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return I.forEach(this, (o, s) => {
      const i = I.findKey(r, s);
      if (i) {
        n[i] = Nu(o), delete n[s];
        return;
      }
      const a = t ? C3(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Nu(o), r[a] = !0;
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
    const r = (this[cv] = this[cv] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = aa(i);
      r[a] || (_3(o, i), r[a] = !0);
    }
    return I.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
nn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(nn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
I.freezeMethods(nn);
function $f(e, t) {
  const n = this || jl, r = t || n, o = nn.from(r.headers);
  let s = r.data;
  return I.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function mw(e) {
  return !!(e && e.__CANCEL__);
}
function Vi(e, t, n) {
  ce.call(this, e ?? "canceled", ce.ERR_CANCELED, t, n), this.name = "CanceledError";
}
I.inherits(Vi, ce, {
  __CANCEL__: !0
});
function yw(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ce(
    "Request failed with status code " + n.status,
    [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function k3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function E3(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[s];
    i || (i = u), n[o] = l, r[o] = u;
    let d = s, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), u - i < t)
      return;
    const y = c && u - c;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function T3(e, t) {
  let n = 0, r = 1e3 / t, o, s;
  const i = (u, c = Date.now()) => {
    n = c, o = null, s && (clearTimeout(s), s = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= r ? i(u, c) : (o = u, s || (s = setTimeout(() => {
      s = null, i(o);
    }, r - d)));
  }, () => o && i(o)];
}
const Mc = (e, t, n = 3) => {
  let r = 0;
  const o = E3(50, 250);
  return T3((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = i - r, u = o(l), c = i <= a;
    r = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, dv = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, fv = (e) => (...t) => I.asap(() => e(...t)), R3 = Nt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Nt.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Nt.origin),
  Nt.navigator && /(msie|trident)/i.test(Nt.navigator.userAgent)
) : () => !0, P3 = Nt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      I.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), I.isString(r) && i.push("path=" + r), I.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function M3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function I3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gw(e, t) {
  return e && !M3(t) ? I3(e, t) : t;
}
const pv = (e) => e instanceof nn ? { ...e } : e;
function vs(e, t) {
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
  function s(u, c) {
    if (!I.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
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
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c, d) => o(pv(u), pv(c), d, !0)
  };
  return I.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = l[c] || o, f = d(e[c], t[c], c);
    I.isUndefined(f) && d !== a || (n[c] = f);
  }), n;
}
const vw = (e) => {
  const t = vs({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = nn.from(i), t.url = fw(gw(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (I.isFormData(n)) {
    if (Nt.hasStandardBrowserEnv || Nt.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (Nt.hasStandardBrowserEnv && (r && I.isFunction(r) && (r = r(t)), r || r !== !1 && R3(t.url))) {
    const u = o && s && P3.read(s);
    u && i.set(o, u);
  }
  return t;
}, O3 = typeof XMLHttpRequest < "u", A3 = O3 && function(e) {
  return new Promise(function(n, r) {
    const o = vw(e);
    let s = o.data;
    const i = nn.from(o.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o, c, d, f, y, g;
    function v() {
      y && y(), g && g(), o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let S = new XMLHttpRequest();
    S.open(o.method.toUpperCase(), o.url, !0), S.timeout = o.timeout;
    function m() {
      if (!S)
        return;
      const p = nn.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), C = {
        data: !a || a === "text" || a === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: p,
        config: e,
        request: S
      };
      yw(function(E) {
        n(E), v();
      }, function(E) {
        r(E), v();
      }, C), S = null;
    }
    "onloadend" in S ? S.onloadend = m : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, S.onabort = function() {
      S && (r(new ce("Request aborted", ce.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function() {
      r(new ce("Network Error", ce.ERR_NETWORK, e, S)), S = null;
    }, S.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || pw;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), r(new ce(
        x,
        C.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
        e,
        S
      )), S = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in S && I.forEach(i.toJSON(), function(x, C) {
      S.setRequestHeader(C, x);
    }), I.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials), a && a !== "json" && (S.responseType = o.responseType), u && ([f, g] = Mc(u, !0), S.addEventListener("progress", f)), l && S.upload && ([d, y] = Mc(l), S.upload.addEventListener("progress", d), S.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (c = (p) => {
      S && (r(!p || p.type ? new Vi(null, e, S) : p), S.abort(), S = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const h = k3(o.url);
    if (h && Nt.protocols.indexOf(h) === -1) {
      r(new ce("Unsupported protocol " + h + ":", ce.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(s || null);
  });
}, $3 = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const s = function(u) {
      if (!o) {
        o = !0, a();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof ce ? c : new Vi(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new ce(`timeout ${t} of ms exceeded`, ce.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", s));
    const { signal: l } = r;
    return l.unsubscribe = () => I.asap(a), l;
  }
}, N3 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, L3 = async function* (e, t) {
  for await (const n of F3(e))
    yield* N3(n, t);
}, F3 = async function* (e) {
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
}, hv = (e, t, n, r) => {
  const o = L3(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, r && r(l));
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
          let f = s += d;
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
}, jd = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", bw = jd && typeof ReadableStream == "function", j3 = jd && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), xw = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, z3 = bw && xw(() => {
  let e = !1;
  const t = new Request(Nt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), mv = 64 * 1024, Ih = bw && xw(() => I.isReadableStream(new Response("").body)), Ic = {
  stream: Ih && ((e) => e.body)
};
jd && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ic[t] && (Ic[t] = I.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new ce(`Response type '${t}' is not supported`, ce.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const D3 = async (e) => {
  if (e == null)
    return 0;
  if (I.isBlob(e))
    return e.size;
  if (I.isSpecCompliantForm(e))
    return (await new Request(Nt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (I.isArrayBufferView(e) || I.isArrayBuffer(e))
    return e.byteLength;
  if (I.isURLSearchParams(e) && (e = e + ""), I.isString(e))
    return (await j3(e)).byteLength;
}, B3 = async (e, t) => {
  const n = I.toFiniteNumber(e.getContentLength());
  return n ?? D3(t);
}, U3 = jd && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = vw(e);
  u = u ? (u + "").toLowerCase() : "text";
  let y = $3([o, s && s.toAbortSignal()], i), g;
  const v = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let S;
  try {
    if (l && z3 && n !== "get" && n !== "head" && (S = await B3(c, r)) !== 0) {
      let C = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (I.isFormData(r) && (k = C.headers.get("content-type")) && c.setContentType(k), C.body) {
        const [E, T] = dv(
          S,
          Mc(fv(l))
        );
        r = hv(C.body, mv, E, T);
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
    const p = Ih && (u === "stream" || u === "response");
    if (Ih && (a || p && v)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((M) => {
        C[M] = h[M];
      });
      const k = I.toFiniteNumber(h.headers.get("content-length")), [E, T] = a && dv(
        k,
        Mc(fv(a), !0)
      ) || [];
      h = new Response(
        hv(h.body, mv, E, () => {
          T && T(), v && v();
        }),
        C
      );
    }
    u = u || "text";
    let x = await Ic[I.findKey(Ic, u) || "text"](h, e);
    return !p && v && v(), await new Promise((C, k) => {
      yw(C, k, {
        data: x,
        headers: nn.from(h.headers),
        status: h.status,
        statusText: h.statusText,
        config: e,
        request: g
      });
    });
  } catch (m) {
    throw v && v(), m && m.name === "TypeError" && /fetch/i.test(m.message) ? Object.assign(
      new ce("Network Error", ce.ERR_NETWORK, e, g),
      {
        cause: m.cause || m
      }
    ) : ce.from(m, m && m.code, e, g);
  }
}), Oh = {
  http: r3,
  xhr: A3,
  fetch: U3
};
I.forEach(Oh, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yv = (e) => `- ${e}`, V3 = (e) => I.isFunction(e) || e === null || e === !1, Sw = {
  getAdapter: (e) => {
    e = I.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !V3(n) && (r = Oh[(i = String(n)).toLowerCase()], r === void 0))
        throw new ce(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(yv).join(`
`) : " " + yv(s[0]) : "as no adapter specified";
      throw new ce(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Oh
};
function Nf(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Vi(null, e);
}
function gv(e) {
  return Nf(e), e.headers = nn.from(e.headers), e.data = $f.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Sw.getAdapter(e.adapter || jl.adapter)(e).then(function(r) {
    return Nf(e), r.data = $f.call(
      e,
      e.transformResponse,
      r
    ), r.headers = nn.from(r.headers), r;
  }, function(r) {
    return mw(r) || (Nf(e), r && r.response && (r.response.data = $f.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = nn.from(r.response.headers))), Promise.reject(r);
  });
}
const ww = "1.7.9", zd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  zd[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const vv = {};
zd.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + ww + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new ce(
        o(i, " has been removed" + (n ? " in " + n : "")),
        ce.ERR_DEPRECATED
      );
    return n && !vv[i] && (vv[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
zd.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function W3(e, t, n) {
  if (typeof e != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new ce("option " + s + " must be " + l, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ce("Unknown option " + s, ce.ERR_BAD_OPTION);
  }
}
const Lu = {
  assertOptions: W3,
  validators: zd
}, nr = Lu.validators;
class rs {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new uv(),
      response: new uv()
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
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = vs(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && Lu.assertOptions(r, {
      silentJSONParsing: nr.transitional(nr.boolean),
      forcedJSONParsing: nr.transitional(nr.boolean),
      clarifyTimeoutError: nr.transitional(nr.boolean)
    }, !1), o != null && (I.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Lu.assertOptions(o, {
      encode: nr.function,
      serialize: nr.function
    }, !0)), Lu.assertOptions(n, {
      baseUrl: nr.spelling("baseURL"),
      withXsrfToken: nr.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && I.merge(
      s.common,
      s[n.method]
    );
    s && I.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = nn.concat(i, s);
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
      const g = [gv.bind(this), void 0];
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
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      c = gv.call(this, y);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = u.length; d < f; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = vs(this.defaults, t);
    const n = gw(t.baseURL, t.url);
    return fw(n, t.params, t.paramsSerializer);
  }
}
I.forEach(["delete", "get", "head", "options"], function(t) {
  rs.prototype[t] = function(n, r) {
    return this.request(vs(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
I.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(vs(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  rs.prototype[t] = n(), rs.prototype[t + "Form"] = n(!0);
});
class Sy {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new Vi(s, i, a), n(r.reason));
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
      token: new Sy(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function H3(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function K3(e) {
  return I.isObject(e) && e.isAxiosError === !0;
}
const Ah = {
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
Object.entries(Ah).forEach(([e, t]) => {
  Ah[t] = e;
});
function Cw(e) {
  const t = new rs(e), n = ew(rs.prototype.request, t);
  return I.extend(n, rs.prototype, t, { allOwnKeys: !0 }), I.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Cw(vs(e, o));
  }, n;
}
const ct = Cw(jl);
ct.Axios = rs;
ct.CanceledError = Vi;
ct.CancelToken = Sy;
ct.isCancel = mw;
ct.VERSION = ww;
ct.toFormData = Fd;
ct.AxiosError = ce;
ct.Cancel = ct.CanceledError;
ct.all = function(t) {
  return Promise.all(t);
};
ct.spread = H3;
ct.isAxiosError = K3;
ct.mergeConfig = vs;
ct.AxiosHeaders = nn;
ct.formToJSON = (e) => hw(I.isHTMLForm(e) ? new FormData(e) : e);
ct.getAdapter = Sw.getAdapter;
ct.HttpStatusCode = Ah;
ct.default = ct;
const In = ct.create({
  baseURL: "https://flib.criticalfuture.co"
});
In.interceptors.request.use((e) => {
  const t = Nl.getState().user, n = t == null ? void 0 : t.token;
  return n && (e.headers.Authorization = `Bearer ${n}`), e;
});
const wy = () => {
  const { setUser: e, deleteUser: t } = Nl();
  return {
    signup: async (n) => (await In.post("/api/auth/signup", n).catch((o) => {
      var i, a, l;
      const s = (l = (a = (i = o.response) == null ? void 0 : i.data) == null ? void 0 : a.error) == null ? void 0 : l.messeage;
      throw new Error(s);
    })).data,
    signin: async (n) => {
      const r = await In.post("/api/auth/login", n).catch((i) => {
        var l, u, c;
        const a = (c = (u = (l = i.response) == null ? void 0 : l.data) == null ? void 0 : u.error) == null ? void 0 : c.messeage;
        throw new Error(a);
      }), { accessToken: o, ...s } = r.data;
      return e({ ...s, ...n, token: o }), r.data;
    },
    logout: async () => {
      const n = await In.post("/api/auth/logout").catch((r) => {
        var s, i, a;
        const o = (a = (i = (s = r.response) == null ? void 0 : s.data) == null ? void 0 : i.error) == null ? void 0 : a.messeage;
        throw new Error(o);
      });
      return t(), n.data;
    }
  };
}, Q3 = ({
  setIsSignup: e,
  setIsLogged: t
}) => {
  const { signin: n } = wy(), [r, o] = w.useState(!1), [s, i] = w.useState(!1), a = to.object({
    username: to.string().min(3, "Username must be at least 3 characters long").max(20, "Username must be at most 20 characters long"),
    password: to.string().min(6, "Password must be at least 6 characters long")
  }), l = JS({
    defaultValues: { username: "", password: "" },
    onSubmit: async ({ value: u }) => {
      i(!0);
      const { accessToken: c } = await n(u).catch((d) => {
        re.error(d.message), i(!1);
      });
      c && (i(!1), t(!0), re.success("Sign in successful"));
    },
    validators: {
      onChange: a
    }
  });
  return /* @__PURE__ */ _.jsx(
    mt,
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      sx: { background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" },
      children: /* @__PURE__ */ _.jsx(
        Tn,
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
          children: /* @__PURE__ */ _.jsxs(
            "form",
            {
              onSubmit: (u) => {
                u.preventDefault(), l.handleSubmit();
              },
              children: [
                /* @__PURE__ */ _.jsxs(
                  mt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    sx: { mb: 5 },
                    children: [
                      /* @__PURE__ */ _.jsx(At, { variant: "h5", children: "Sign in" }),
                      /* @__PURE__ */ _.jsxs(
                        At,
                        {
                          variant: "body2",
                          color: "text.secondary",
                          children: [
                            "Don’t have an account?",
                            " ",
                            /* @__PURE__ */ _.jsx(
                              tS,
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
                /* @__PURE__ */ _.jsxs(
                  mt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [
                      /* @__PURE__ */ _.jsx(l.Field, { name: "username", children: (u) => /* @__PURE__ */ _.jsx(
                        fr,
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
                      /* @__PURE__ */ _.jsx(l.Field, { name: "password", children: (u) => /* @__PURE__ */ _.jsx(
                        fr,
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
                              endAdornment: /* @__PURE__ */ _.jsx(Kp, { position: "end", children: /* @__PURE__ */ _.jsx(
                                $r,
                                {
                                  onClick: () => o(!r),
                                  children: r ? /* @__PURE__ */ _.jsx(vh, {}) : /* @__PURE__ */ _.jsx(bh, {})
                                }
                              ) })
                            }
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ _.jsx(
                        OS,
                        {
                          loading: s,
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
}, Z3 = w.memo(Q3), G3 = ({
  setIsSignup: e,
  setIsLogged: t
}) => {
  const { signup: n } = wy(), [r, o] = w.useState(!1), [s, i] = w.useState(!1), [a, l] = w.useState(!1), u = to.object({
    email: to.string().email("Invalid email address"),
    username: to.string().min(3, "Username must be at least 3 characters long"),
    password: to.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: to.string()
  }).refine((d) => d.password === d.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match"
  }), c = JS({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async ({ value: d }) => {
      l(!0);
      const f = await n(d).catch((y) => {
        re.error(y.message), l(!1);
      });
      re.success("Sign up successful"), re.success(f.success.message), l(!1), t(!1);
    },
    validators: {
      onChange: u
    }
  });
  return /* @__PURE__ */ _.jsx(
    mt,
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      sx: { background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" },
      children: /* @__PURE__ */ _.jsx(
        Tn,
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
          children: /* @__PURE__ */ _.jsxs(
            "form",
            {
              onSubmit: (d) => {
                d.preventDefault(), c.handleSubmit();
              },
              children: [
                /* @__PURE__ */ _.jsxs(
                  mt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    sx: { mb: 5 },
                    children: [
                      /* @__PURE__ */ _.jsx(At, { variant: "h5", children: "Sign up" }),
                      /* @__PURE__ */ _.jsxs(
                        At,
                        {
                          variant: "body2",
                          color: "text.secondary",
                          children: [
                            "Already have an account?",
                            " ",
                            /* @__PURE__ */ _.jsx(
                              tS,
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
                /* @__PURE__ */ _.jsxs(
                  mt,
                  {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    children: [
                      /* @__PURE__ */ _.jsx(c.Field, { name: "email", children: (d) => /* @__PURE__ */ _.jsx(
                        fr,
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
                      /* @__PURE__ */ _.jsx(c.Field, { name: "username", children: (d) => /* @__PURE__ */ _.jsx(
                        fr,
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
                      /* @__PURE__ */ _.jsx(c.Field, { name: "password", children: (d) => /* @__PURE__ */ _.jsx(
                        fr,
                        {
                          fullWidth: !0,
                          label: "Password",
                          type: r ? "text" : "password",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          InputProps: {
                            endAdornment: /* @__PURE__ */ _.jsx(Kp, { position: "end", children: /* @__PURE__ */ _.jsx(
                              $r,
                              {
                                onClick: () => o(!r),
                                children: r ? /* @__PURE__ */ _.jsx(vh, {}) : /* @__PURE__ */ _.jsx(bh, {})
                              }
                            ) })
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ _.jsx(c.Field, { name: "confirmPassword", children: (d) => /* @__PURE__ */ _.jsx(
                        fr,
                        {
                          fullWidth: !0,
                          label: "Confirm Password",
                          type: s ? "text" : "password",
                          value: d.state.value,
                          onChange: (f) => d.handleChange(f.target.value),
                          error: !!d.state.meta.errors.length,
                          helperText: d.state.meta.errors.join(", "),
                          slotProps: {
                            input: {
                              endAdornment: /* @__PURE__ */ _.jsx(Kp, { position: "end", children: /* @__PURE__ */ _.jsx(
                                $r,
                                {
                                  onClick: () => i(!s),
                                  children: s ? /* @__PURE__ */ _.jsx(vh, {}) : /* @__PURE__ */ _.jsx(bh, {})
                                }
                              ) })
                            }
                          },
                          sx: { mb: 3 }
                        }
                      ) }),
                      /* @__PURE__ */ _.jsx(
                        OS,
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
}, q3 = w.memo(G3), X3 = ({ children: e }) => {
  const [t, n] = le.useState(!0);
  return le.useEffect(() => {
    const r = setTimeout(() => n(!1), 5e3);
    return () => clearTimeout(r);
  }, []), /* @__PURE__ */ _.jsxs(
    mt,
    {
      sx: {
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden"
      },
      children: [
        /* @__PURE__ */ _.jsxs(
          mt,
          {
            sx: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0
            },
            children: [
              /* @__PURE__ */ _.jsx(
                mt,
                {
                  component: "img",
                  src: "https://critical-future-llm-in-a-box.github.io/fseriesLibrary/public/fseries.png",
                  alt: "background",
                  sx: {
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                  }
                }
              ),
              t && /* @__PURE__ */ _.jsx(
                mt,
                {
                  component: "img",
                  src: "https://critical-future-llm-in-a-box.github.io/fseriesLibrary/public/fseries.gif",
                  alt: "overlay",
                  sx: {
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(mt, { sx: { position: "relative", zIndex: 2 }, children: e })
      ]
    }
  );
}, Y3 = le.memo(X3), _w = ({ children: e }) => {
  const { user: t } = Nl(), [n, r] = le.useState(!0), [o, s] = le.useState(!1);
  le.useEffect(() => {
    t && s(!0), t || s(!1);
  }, [t]);
  const i = () => o || t ? e : n ? /* @__PURE__ */ _.jsx(
    Z3,
    {
      setIsLogged: s,
      setIsSignup: r
    }
  ) : /* @__PURE__ */ _.jsx(
    q3,
    {
      setIsLogged: s,
      setIsSignup: r
    }
  );
  return /* @__PURE__ */ _.jsx(Y3, { children: i() });
};
le.memo(_w);
const No = {
  media: "/api/media",
  parts: "/api/parts"
}, J3 = async () => (await In.get(`${No.media}/get`)).data, e$ = async () => (await In.get(`${No.parts}/get`)).data, t$ = async (e) => (await In.post(`${No.media}/add`, e)).data, n$ = async (e) => (await In.post(`${No.parts}/add`, e)).data, r$ = async ({
  id: e,
  data: t
}) => (await In.put(
  `${No.media}/update/${e}`,
  t
)).data, o$ = async ({
  id: e,
  data: t
}) => (await In.put(
  `${No.parts}/update/${e}`,
  t
)).data, s$ = async (e) => (await In.delete(
  `${No.media}/delete/${e}`
)).data, i$ = async (e) => (await In.delete(
  `${No.parts}/delete/${e}`
)).data, a$ = () => {
  const e = fy();
  return {
    getMediaLibrary: () => Z0({ queryKey: ["mediaLibrary"], queryFn: J3 }),
    getPartsLibrary: () => Z0({ queryKey: ["partsLibrary"], queryFn: e$ }),
    addMediaItem: () => Is({
      mutationFn: t$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["mediaLibrary"] })
    }),
    addPartsItem: () => Is({
      mutationFn: n$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["partsLibrary"] })
    }),
    updateMediaItem: () => Is({
      mutationFn: r$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["mediaLibrary"] })
    }),
    updatePartsItem: () => Is({
      mutationFn: o$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["partsLibrary"] })
    }),
    deleteMediaItem: () => Is({
      mutationFn: s$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["mediaLibrary"] })
    }),
    deletePartsItem: () => Is({
      mutationFn: i$,
      onSuccess: () => e.invalidateQueries({ queryKey: ["partsLibrary"] })
    })
  };
}, l$ = (e) => /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e), u$ = (e) => /\.(mp4|webm|ogg)$/.test(e), c$ = (e) => {
  const t = e.match(
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  );
  return t && t[2].length === 11 ? t[2] : null;
}, d$ = ({ url: e }) => {
  const t = c$(e);
  return t ? /* @__PURE__ */ _.jsx(mt, { sx: { width: "100%", aspectRatio: "16/9", mt: 2 }, children: /* @__PURE__ */ _.jsx(
    "iframe",
    {
      width: "100%",
      height: "100%",
      src: `https://www.youtube.com/embed/${t}`,
      title: "YouTube video player",
      allowFullScreen: !0
    }
  ) }) : l$(e) ? /* @__PURE__ */ _.jsx(
    mt,
    {
      component: "img",
      src: e,
      alt: "Content preview",
      sx: {
        mt: 2,
        maxWidth: "100%",
        maxHeight: "400px",
        objectFit: "contain",
        borderRadius: 1
      }
    }
  ) : u$(e) ? /* @__PURE__ */ _.jsx(
    mt,
    {
      component: "video",
      src: e,
      controls: !0,
      sx: {
        mt: 2,
        maxWidth: "100%",
        maxHeight: "400px",
        borderRadius: 1
      }
    }
  ) : null;
}, pu = ({
  mode: e,
  items: t,
  title: n = e === "library" ? "My Library" : "Recommendations",
  onAddItem: r,
  onEditItem: o,
  onRemoveItem: s,
  onAddToLibrary: i
}) => {
  const a = $o(), [l, u] = w.useState(!1), [c, d] = w.useState(!1), [f, y] = w.useState(null), [g, v] = w.useState(null), [S, m] = w.useState({
    title: "",
    description: "",
    url: ""
  }), [h, p] = w.useState({
    title: "",
    description: "",
    url: ""
  }), x = () => {
    const b = {
      title: "",
      description: "",
      url: ""
    };
    return (!S.title || S.title.length < 3) && (b.title = "Title must be at least 3 characters long"), (!S.description || S.description.length < 10) && (b.description = "Description must be at least 10 characters long"), S.url && (new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      // fragment locator
      "i"
    ).test(S.url) || (b.url = "Please enter a valid URL (e.g., https://example.com)")), p(b), !Object.values(b).some((P) => P !== "");
  }, C = () => {
    d(!1), y(null), m({ title: "", description: "", url: "" }), u(!0);
  }, k = (b) => {
    d(!0), y(b.id), m({
      title: b.title,
      description: b.description,
      url: b.url
    }), u(!0);
  }, E = () => {
    u(!1), d(!1), y(null);
  }, T = () => {
    x() && (e === "library" && (c && f !== null && o ? o(f, S) : !c && r && r(S)), E());
  }, M = e === "recommendation" ? P5 : n.toLowerCase().includes("media") ? E5 : w5;
  return /* @__PURE__ */ _.jsxs(
    Yr,
    {
      spacing: 2,
      sx: {
        width: "100%",
        height: "100%",
        borderRadius: 2,
        bgcolor: "rgba(20,20,20,0.85)",
        backdropFilter: "blur(5px)",
        p: 1,
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ _.jsxs(
          Tn,
          {
            elevation: 3,
            sx: {
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: a.palette.grey[900],
              color: a.palette.grey[100]
            },
            children: [
              /* @__PURE__ */ _.jsx(
                At,
                {
                  variant: "h5",
                  fontWeight: "bold",
                  children: n
                }
              ),
              e === "library" && /* @__PURE__ */ _.jsx(
                Iu,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: C,
                  sx: {
                    bgcolor: a.palette.grey[800],
                    "&:hover": { bgcolor: a.palette.grey[700] }
                  },
                  children: "Add New Item"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ _.jsx(mt, { sx: { flexGrow: 1, overflowY: "auto", pr: 1 }, children: /* @__PURE__ */ _.jsx(Yr, { spacing: 1, children: t == null ? void 0 : t.map((b) => /* @__PURE__ */ _.jsx(
          Tn,
          {
            elevation: 3,
            onClick: () => v(b),
            sx: {
              p: 2,
              position: "relative",
              bgcolor: a.palette.grey[800],
              color: a.palette.grey[100],
              cursor: "pointer",
              transition: "transform 0.1s ease-in-out, box-shadow 0.1s",
              "&:hover": {
                transform: "scale(1.01)",
                boxShadow: `0 4px 12px ${a.palette.grey[900]}`
              }
            },
            children: /* @__PURE__ */ _.jsxs(
              Yr,
              {
                direction: "row",
                spacing: 2,
                alignItems: "center",
                children: [
                  /* @__PURE__ */ _.jsx(
                    nP,
                    {
                      sx: {
                        bgcolor: a.palette.grey[700],
                        flexShrink: 0,
                        color: a.palette.grey[50]
                      },
                      children: /* @__PURE__ */ _.jsx(M, {})
                    }
                  ),
                  /* @__PURE__ */ _.jsxs(
                    Yr,
                    {
                      spacing: 0.5,
                      sx: { flex: 1, minWidth: 0 },
                      children: [
                        /* @__PURE__ */ _.jsx(
                          At,
                          {
                            variant: "subtitle1",
                            fontWeight: "bold",
                            noWrap: !0,
                            children: b.title
                          }
                        ),
                        /* @__PURE__ */ _.jsx(
                          At,
                          {
                            variant: "body2",
                            noWrap: !0,
                            children: b.description
                          }
                        ),
                        b.url && /* @__PURE__ */ _.jsx(
                          At,
                          {
                            variant: "caption",
                            component: "a",
                            href: b.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: (P) => P.stopPropagation(),
                            sx: {
                              textDecoration: "none",
                              color: a.palette.primary.light,
                              "&:hover": { textDecoration: "underline" }
                            },
                            children: "Visit"
                          }
                        )
                      ]
                    }
                  ),
                  e === "library" ? /* @__PURE__ */ _.jsxs(
                    Yr,
                    {
                      direction: "row",
                      spacing: 1,
                      onClick: (P) => P.stopPropagation(),
                      children: [
                        /* @__PURE__ */ _.jsx(
                          $r,
                          {
                            size: "small",
                            onClick: () => k(b),
                            sx: {
                              color: a.palette.grey[200],
                              "&:hover": { color: a.palette.info.main }
                            },
                            children: /* @__PURE__ */ _.jsx(AS, { fontSize: "small" })
                          }
                        ),
                        /* @__PURE__ */ _.jsx(
                          $r,
                          {
                            size: "small",
                            onClick: () => s == null ? void 0 : s(b.id),
                            sx: {
                              color: a.palette.grey[200],
                              "&:hover": { color: a.palette.error.light }
                            },
                            children: /* @__PURE__ */ _.jsx(_5, { fontSize: "small" })
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ _.jsx(
                    $r,
                    {
                      size: "small",
                      onClick: (P) => {
                        P.stopPropagation(), i == null || i(b);
                      },
                      sx: {
                        color: a.palette.grey[200],
                        "&:hover": { color: a.palette.success.light }
                      },
                      children: /* @__PURE__ */ _.jsx(S5, { fontSize: "small" })
                    }
                  )
                ]
              }
            )
          },
          `${e}-${b.id}`
        )) }) }),
        /* @__PURE__ */ _.jsx(
          C0,
          {
            open: !!g,
            onClose: () => v(null),
            maxWidth: "md",
            fullWidth: !0,
            PaperProps: {
              sx: {
                bgcolor: a.palette.grey[900],
                color: a.palette.grey[100]
              }
            },
            children: g && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsxs(
                k0,
                {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: `1px solid ${a.palette.grey[800]}`
                  },
                  children: [
                    /* @__PURE__ */ _.jsx(At, { children: g.title }),
                    /* @__PURE__ */ _.jsx(
                      $r,
                      {
                        onClick: () => v(null),
                        sx: { color: a.palette.grey[300] },
                        children: /* @__PURE__ */ _.jsx(C5, {})
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ _.jsx(_0, { sx: { mt: 2 }, children: /* @__PURE__ */ _.jsxs(Yr, { spacing: 3, children: [
                /* @__PURE__ */ _.jsx(At, { variant: "body1", children: g.description }),
                g.url && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                  /* @__PURE__ */ _.jsxs(mt, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                    /* @__PURE__ */ _.jsx(
                      At,
                      {
                        variant: "subtitle2",
                        color: a.palette.grey[400],
                        children: "Source URL:"
                      }
                    ),
                    /* @__PURE__ */ _.jsxs(
                      At,
                      {
                        component: "a",
                        href: g.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: a.palette.primary.light,
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" }
                        },
                        children: [
                          g.url,
                          /* @__PURE__ */ _.jsx(T5, { sx: { fontSize: 16 } })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ _.jsx(d$, { url: g.url })
                ] })
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ _.jsxs(
          C0,
          {
            open: l,
            onClose: E,
            fullWidth: !0,
            maxWidth: "sm",
            PaperProps: {
              sx: {
                bgcolor: a.palette.grey[900],
                color: a.palette.grey[100]
              }
            },
            children: [
              /* @__PURE__ */ _.jsx(k0, { children: c ? "Edit Item" : "Add New Item" }),
              /* @__PURE__ */ _.jsxs(_0, { children: [
                /* @__PURE__ */ _.jsx(
                  fr,
                  {
                    label: "Title",
                    value: S.title,
                    onChange: (b) => m({ ...S, title: b.target.value }),
                    error: !!h.title,
                    helperText: h.title,
                    fullWidth: !0,
                    margin: "normal",
                    sx: {
                      "& .MuiInputBase-root": { color: a.palette.grey[100] },
                      "& .MuiFormLabel-root": { color: a.palette.grey[400] }
                    }
                  }
                ),
                /* @__PURE__ */ _.jsx(
                  fr,
                  {
                    label: "Description",
                    value: S.description,
                    onChange: (b) => m({ ...S, description: b.target.value }),
                    error: !!h.description,
                    helperText: h.description,
                    fullWidth: !0,
                    margin: "normal",
                    multiline: !0,
                    rows: 4,
                    sx: {
                      "& .MuiInputBase-root": { color: a.palette.grey[100] },
                      "& .MuiFormLabel-root": { color: a.palette.grey[400] }
                    }
                  }
                ),
                /* @__PURE__ */ _.jsx(
                  fr,
                  {
                    label: "URL",
                    value: S.url,
                    onChange: (b) => m({ ...S, url: b.target.value }),
                    error: !!h.url,
                    helperText: h.url,
                    fullWidth: !0,
                    margin: "normal",
                    sx: {
                      "& .MuiInputBase-root": { color: a.palette.grey[100] },
                      "& .MuiFormLabel-root": { color: a.palette.grey[400] }
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ _.jsxs(nM, { children: [
                /* @__PURE__ */ _.jsx(Iu, { onClick: E, children: "Cancel" }),
                /* @__PURE__ */ _.jsx(
                  Iu,
                  {
                    onClick: T,
                    variant: "contained",
                    children: c ? "Save Changes" : "Add Item"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, f$ = () => {
  const e = Nl(), [t, n] = w.useState(
    null
  ), r = $o(), o = TM(r.breakpoints.up("xl")), [s, i] = w.useState(!0);
  w.useEffect(() => {
    i(o);
  }, [o]), w.useEffect(() => {
    const l = "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/dist/llminaboxChat.js";
    (async () => {
      const u = await import(
        /* @vite-ignore */
        l
      );
      u != null && u.initChatbot && n({
        initChatbot: u.initChatbot,
        destroyChatbot: u.destroyChatbot
      });
    })();
  }, []);
  const a = {
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
        liveUrl: "",
        videoUrl: ""
      }
    },
    ui: {
      foregroundColor: "#e0e0e0",
      backgroundColor: "#181818",
      backgroundColorBody: "#545454"
    },
    onResponse: (l) => {
      (async () => {
        const d = (await (await fetch(
          "https://llminabox.criticalfutureglobal.com/api/v1/prediction/16af3787-20f9-4555-9453-50e5110cf885",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              question: l.content
            })
          }
        )).json()).text, f = /\[|\]/g, y = d.replace(
          f,
          (S) => S === "\\\\" || S === "\\[\\]" ? S : S === "[" ? "{" : "}"
        ), v = JSON.parse(y).Recommendation;
        Object.keys(v).forEach((S) => {
          if (S.toLocaleLowerCase().includes("media")) {
            const m = v[S], h = {
              id: Date.now(),
              title: "",
              description: "",
              url: ""
            };
            Object.keys(m).forEach((p) => {
              p.toLocaleLowerCase().includes("title") && (h.title = m[p]), p.toLocaleLowerCase().includes("description") && (h.description = m[p]), p.toLocaleLowerCase().includes("url") && (h.url = m[p]);
            }), console.log(h), e.setMediaRecommendations([h]);
          }
          if (S.toLocaleLowerCase().includes("parts")) {
            const m = v[S], h = {
              id: Date.now(),
              title: "",
              description: "",
              url: ""
            };
            Object.keys(m).forEach((p) => {
              p.toLocaleLowerCase().includes("title") && (h.title = m[p]), p.toLocaleLowerCase().includes("description") && (h.description = m[p]), p.toLocaleLowerCase().includes("url") && (h.url = m[p]);
            }), console.log(h), e.setPartsRecommendations([h]);
          }
        });
      })().catch(console.error);
    }
  };
  return w.useEffect(() => {
    (async () => {
      if (s) {
        const l = document.body.querySelector("#llminabox-bubble");
        l && l.remove(), t == null || t.destroyChatbot(), t == null || t.initChatbot(a);
      }
      s || (t == null || t.destroyChatbot(), t == null || t.initChatbot(a));
    })().catch(console.error);
  }, [t, s]), s ? /* @__PURE__ */ _.jsx(
    mt,
    {
      id: "llminabox-full",
      sx: { width: "100%", height: "100%" }
    }
  ) : null;
}, p$ = () => {
  const { logout: e } = wy(), {
    setMediaLibrary: t,
    setPartsLibrary: n,
    deleteUser: r,
    garageName: o,
    setGarageName: s,
    mediaLibrary: i,
    partsLibrary: a,
    mediaRecommendations: l,
    partsRecommendations: u
  } = Nl(), {
    getMediaLibrary: c,
    getPartsLibrary: d,
    addMediaItem: f,
    addPartsItem: y,
    updateMediaItem: g,
    updatePartsItem: v,
    deleteMediaItem: S,
    deletePartsItem: m
  } = a$(), [h, p] = w.useState(""), [x, C] = w.useState(!1), k = async () => {
    await e().catch(
      (J) => re.error(J.message)
    ) && re.success("Logged out successfully"), r();
  }, { data: E } = c(), { data: T } = d(), M = f(), b = y(), P = g(), N = v(), j = S(), D = m();
  w.useEffect(() => {
    E && t(E), T && n(T);
  }, [E, T]);
  const L = async (Y) => {
    const J = { id: Date.now(), ...Y };
    await M.mutateAsync(J).then(() => {
      re.success("Media item added successfully");
    }).catch((ae) => {
      re.error(ae.message);
    });
  }, B = async (Y) => {
    const J = { id: Date.now(), ...Y };
    await b.mutateAsync(J).then(() => {
      re.success("Parts item added successfully");
    }).catch((ae) => {
      re.error(ae.message);
    });
  }, W = async (Y, J) => {
    await P.mutateAsync({ id: Y, data: J }).then(() => {
      re.success("Media item updated successfully");
    }).catch((ae) => {
      re.error(ae.message);
    });
  }, A = async (Y, J) => {
    await N.mutateAsync({ id: Y, data: J }).then(() => {
      re.success("Parts item updated successfully");
    }).catch((ae) => {
      re.error(ae.message);
    });
  }, $ = async (Y) => {
    await j.mutateAsync(Y).then(() => {
      re.success("Media item deleted successfully");
    }).catch((J) => {
      re.error(J.message);
    });
  }, U = async (Y) => {
    await D.mutateAsync(Y).then(() => {
      re.success("Parts item deleted successfully");
    }).catch((J) => {
      re.error(J.message);
    });
  }, Q = async (Y) => {
    await M.mutateAsync(Y).then(() => {
      re.success("Media item added to library successfully");
    }).catch((J) => {
      re.error(J.message);
    });
  }, ue = async (Y) => {
    await b.mutateAsync(Y).then(() => {
      re.success("Parts item added to library successfully");
    }).catch((J) => {
      re.error(J.message);
    });
  };
  return /* @__PURE__ */ _.jsx(
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
      children: /* @__PURE__ */ _.jsxs(
        ra,
        {
          container: !0,
          spacing: 8,
          rowSpacing: 2,
          sx: { padding: { xs: 2, md: 6 } },
          children: [
            /* @__PURE__ */ _.jsxs(
              ra,
              {
                size: 12,
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2
                },
                children: [
                  /* @__PURE__ */ _.jsxs(
                    mt,
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
                        x ? /* @__PURE__ */ _.jsx(
                          fr,
                          {
                            variant: "standard",
                            value: h,
                            onChange: (Y) => p(Y.target.value),
                            sx: { input: { color: "#fff" } }
                          }
                        ) : /* @__PURE__ */ _.jsxs(
                          At,
                          {
                            variant: "h6",
                            color: "#fff",
                            children: [
                              o,
                              " Garage"
                            ]
                          }
                        ),
                        /* @__PURE__ */ _.jsx(
                          $r,
                          {
                            onClick: () => {
                              x ? (s(h), C(!1)) : (C(!0), p(o ?? ""));
                            },
                            sx: { color: "#fff" },
                            children: x ? /* @__PURE__ */ _.jsx(R5, {}) : /* @__PURE__ */ _.jsx(AS, {})
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ _.jsx(
                    $r,
                    {
                      onClick: k,
                      sx: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.7)",
                          color: "rgba(255,255,255,0.7)"
                        }
                      },
                      children: /* @__PURE__ */ _.jsx(k5, {})
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ _.jsx(
              ra,
              {
                size: { xs: 12, md: 6, xl: 4 },
                sx: { display: "flex" },
                children: /* @__PURE__ */ _.jsxs(
                  Yr,
                  {
                    useFlexGap: !0,
                    direction: "column",
                    spacing: 8,
                    sx: { flexGrow: 1, minWidth: "200px" },
                    children: [
                      /* @__PURE__ */ _.jsx(
                        Tn,
                        {
                          variant: "elevation",
                          elevation: 2,
                          sx: {
                            flexGrow: 1,
                            borderRadius: 4,
                            height: "35vh",
                            overflow: "hidden",
                            bgcolor: "transparent"
                          },
                          children: /* @__PURE__ */ _.jsx(
                            pu,
                            {
                              mode: "library",
                              title: "Media Library",
                              items: i,
                              onAddItem: L,
                              onEditItem: W,
                              onRemoveItem: $
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ _.jsx(
                        Tn,
                        {
                          variant: "elevation",
                          elevation: 2,
                          sx: {
                            flexGrow: 1,
                            borderRadius: 4,
                            height: "35vh",
                            overflow: "hidden",
                            bgcolor: "transparent"
                          },
                          children: /* @__PURE__ */ _.jsx(
                            pu,
                            {
                              mode: "recommendation",
                              title: "Media Recommendations",
                              items: l,
                              onAddToLibrary: Q
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ _.jsx(
              ra,
              {
                size: { xs: 12, md: 6, xl: 4 },
                sx: { display: "flex" },
                children: /* @__PURE__ */ _.jsxs(
                  Yr,
                  {
                    useFlexGap: !0,
                    direction: "column",
                    spacing: 8,
                    sx: { flexGrow: 1, minWidth: "200px" },
                    children: [
                      /* @__PURE__ */ _.jsx(
                        Tn,
                        {
                          variant: "elevation",
                          elevation: 2,
                          sx: {
                            flexGrow: 1,
                            borderRadius: 4,
                            height: "35vh",
                            overflow: "hidden",
                            bgcolor: "transparent"
                          },
                          children: /* @__PURE__ */ _.jsx(
                            pu,
                            {
                              mode: "library",
                              title: "Parts Library",
                              items: a,
                              onAddItem: B,
                              onEditItem: A,
                              onRemoveItem: U
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ _.jsx(
                        Tn,
                        {
                          variant: "elevation",
                          elevation: 2,
                          sx: {
                            flexGrow: 1,
                            borderRadius: 4,
                            height: "35vh",
                            overflow: "hidden",
                            bgcolor: "transparent"
                          },
                          children: /* @__PURE__ */ _.jsx(
                            pu,
                            {
                              mode: "recommendation",
                              title: "Parts Recommendations",
                              items: u,
                              onAddToLibrary: ue
                            }
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ _.jsx(
              ra,
              {
                size: { xs: 0, xl: 4 },
                sx: { display: { xs: "none", xl: "flex" }, minWidth: "200px" },
                children: /* @__PURE__ */ _.jsx(
                  Tn,
                  {
                    variant: "elevation",
                    elevation: 2,
                    sx: {
                      flexGrow: 1,
                      borderRadius: 4,
                      height: "80vh",
                      overflow: "hidden",
                      bgcolor: "transparent"
                    },
                    children: /* @__PURE__ */ _.jsx(f$, {})
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}, h$ = w.memo(p$), m$ = () => {
  const e = typeof document < "u" ? document.querySelector('meta[name="emotion-insertion-point"]') : null;
  return Xb({
    key: "fseries-isolated",
    prepend: !0,
    insertionPoint: e
  });
}, y$ = m$(), g$ = vd(), v$ = new MO({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1e3,
      refetchInterval: 10 * 60 * 1e3
    },
    mutations: {}
  }
}), b$ = () => /* @__PURE__ */ _.jsxs(NO, { client: v$, children: [
  /* @__PURE__ */ _.jsx(mO, {}),
  /* @__PURE__ */ _.jsx(_w, { children: /* @__PURE__ */ _.jsx(h$, {}) })
] });
Ub(document.getElementById("root")).render(
  /* @__PURE__ */ _.jsx(Wk, { value: y$, children: /* @__PURE__ */ _.jsxs(qT, { theme: g$, children: [
    /* @__PURE__ */ _.jsx(TP, {}),
    /* @__PURE__ */ _.jsx(b$, {})
  ] }) })
);
