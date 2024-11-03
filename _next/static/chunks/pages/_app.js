(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, r) {
      "use strict";
      var i = r(9864),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        s = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      function l(e) {
        return i.isMemo(e) ? o : a[e.$$typeof] || n;
      }
      (a[i.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[i.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, i) {
        if ("string" != typeof r) {
          if (d) {
            var n = g(r);
            n && n !== d && e(t, n, i);
          }
          var o = c(r);
          p && (o = o.concat(p(r)));
          for (var a = l(t), f = l(r), m = 0; m < o.length; ++m) {
            var y = o[m];
            if (!s[y] && !(i && i[y]) && !(f && f[y]) && !(a && a[y])) {
              var b = h(r, y);
              try {
                u(t, y, b);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    1798: function (e, t, r) {
      "use strict";
      let i;
      r.d(t, {
        Jc: function () {
          return eW;
        },
        $G: function () {
          return L;
        },
      });
      var n = r(7294);
      r(1739), Object.create(null);
      let s = (...e) => {
          console?.warn &&
            (h(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
        },
        o = {},
        a = (...e) => {
          (h(e[0]) && o[e[0]]) || (h(e[0]) && (o[e[0]] = new Date()), s(...e));
        },
        l = (e, t) => () => {
          if (e.isInitialized) t();
          else {
            let r = () => {
              setTimeout(() => {
                e.off("initialized", r);
              }, 0),
                t();
            };
            e.on("initialized", r);
          }
        },
        u = (e, t, r) => {
          e.loadNamespaces(t, l(e, r));
        },
        c = (e, t, r, i) => {
          h(r) && (r = [r]),
            r.forEach((t) => {
              0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
            }),
            e.loadLanguages(t, l(e, i));
        },
        p = (e, t, r = {}) =>
          t.languages && t.languages.length
            ? t.hasLoadedNamespace(e, {
                lng: r.lng,
                precheck: (t, i) => {
                  if (
                    r.bindI18n?.indexOf("languageChanging") > -1 &&
                    t.services.backendConnector.backend &&
                    t.isLanguageChangingTo &&
                    !i(t.isLanguageChangingTo, e)
                  )
                    return !1;
                },
              })
            : (a("i18n.languages were undefined or empty", t.languages), !0),
        h = (e) => "string" == typeof e,
        g = (e) => "object" == typeof e && null !== e,
        d =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        f = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "…",
          "&#8230;": "…",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        m = (e) => f[e],
        y = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(d, m),
        },
        b = () => y,
        v = () => i,
        x = (0, n.createContext)();
      class S {
        constructor() {
          this.usedNamespaces = {};
        }
        addUsedNamespaces(e) {
          e.forEach((e) => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
          });
        }
        getUsedNamespaces() {
          return Object.keys(this.usedNamespaces);
        }
      }
      let O = (e, t) => {
          let r = (0, n.useRef)();
          return (
            (0, n.useEffect)(() => {
              r.current = t ? r.current : e;
            }, [e, t]),
            r.current
          );
        },
        k = (e, t, r, i) => e.getFixedT(t, r, i),
        w = (e, t, r, i) => (0, n.useCallback)(k(e, t, r, i), [e, t, r, i]),
        L = (e, t = {}) => {
          let { i18n: r } = t,
            { i18n: i, defaultNS: s } = (0, n.useContext)(x) || {},
            o = r || i || v();
          if (
            (o && !o.reportNamespaces && (o.reportNamespaces = new S()), !o)
          ) {
            a(
              "You will need to pass in an i18next instance by using initReactI18next",
            );
            let e = (e, t) =>
                h(t)
                  ? t
                  : g(t) && h(t.defaultValue)
                    ? t.defaultValue
                    : Array.isArray(e)
                      ? e[e.length - 1]
                      : e,
              t = [e, {}, !1];
            return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
          }
          o.options.react?.wait &&
            a(
              "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
            );
          let l = { ...b(), ...o.options.react, ...t },
            { useSuspense: d, keyPrefix: f } = l,
            m = e || s || o.options?.defaultNS;
          (m = h(m) ? [m] : m || ["translation"]),
            o.reportNamespaces.addUsedNamespaces?.(m);
          let y =
              (o.isInitialized || o.initializedStoreOnce) &&
              m.every((e) => p(e, o, l)),
            L = w(o, t.lng || null, "fallback" === l.nsMode ? m : m[0], f),
            P = () => L,
            N = () =>
              k(o, t.lng || null, "fallback" === l.nsMode ? m : m[0], f),
            [$, C] = (0, n.useState)(P),
            j = m.join();
          t.lng && (j = `${t.lng}${j}`);
          let R = O(j),
            E = (0, n.useRef)(!0);
          (0, n.useEffect)(() => {
            let { bindI18n: e, bindI18nStore: r } = l;
            (E.current = !0),
              y ||
                d ||
                (t.lng
                  ? c(o, t.lng, m, () => {
                      E.current && C(N);
                    })
                  : u(o, m, () => {
                      E.current && C(N);
                    })),
              y && R && R !== j && E.current && C(N);
            let i = () => {
              E.current && C(N);
            };
            return (
              e && o?.on(e, i),
              r && o?.store.on(r, i),
              () => {
                (E.current = !1),
                  o && e?.split(" ").forEach((e) => o.off(e, i)),
                  r && o && r.split(" ").forEach((e) => o.store.off(e, i));
              }
            );
          }, [o, j]),
            (0, n.useEffect)(() => {
              E.current && y && C(P);
            }, [o, f, y]);
          let I = [$, o, y];
          if (((I.t = $), (I.i18n = o), (I.ready = y), y || (!y && !d)))
            return I;
          throw new Promise((e) => {
            t.lng ? c(o, t.lng, m, () => e()) : u(o, m, () => e());
          });
        };
      function P({ i18n: e, defaultNS: t, children: r }) {
        let i = (0, n.useMemo)(() => ({ i18n: e, defaultNS: t }), [e, t]);
        return (0, n.createElement)(x.Provider, { value: i }, r);
      }
      function N() {
        return (N = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r)
                  ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }).apply(null, arguments);
      }
      function $(e) {
        return ($ =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function C(e, t, r) {
        var i;
        return (
          ((i = (function (e, t) {
            if ("object" != $(e) || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var i = r.call(e, t || "default");
              if ("object" != $(i)) return i;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == $(i) ? i : i + "") in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var j = r(8679),
        R = r.n(j);
      function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function I(e, t) {
        if (e) {
          if ("string" == typeof e) return E(e, t);
          var r = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? E(e, t)
                : void 0
          );
        }
      }
      function A(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var i,
                n,
                s,
                o,
                a = [],
                l = !0,
                u = !1;
              try {
                if (((s = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = s.call(r)).done) &&
                    (a.push(i.value), a.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (n = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw n;
                }
              }
              return a;
            }
          })(e, t) ||
          I(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function F(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var i in e)
              if ({}.hasOwnProperty.call(e, i)) {
                if (t.includes(i)) continue;
                r[i] = e[i];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++)
            (r = s[i]),
              t.includes(r) ||
                ({}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var D = {
          defaultNS: "common",
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: "en", locales: ["en"] },
          get initImmediate() {
            return "undefined" != typeof window;
          },
          interpolation: { escapeValue: !1 },
          load: "currentOnly",
          localeExtension: "json",
          localePath: "./public/locales",
          localeStructure: "{{lng}}/{{ns}}",
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          use: [],
        },
        T = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        V = ["i18n"],
        U = ["i18n"];
      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : M(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var K = ["backend", "detection"],
        _ = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            r,
            i,
            n = e.i18n,
            s = F(e, V),
            o = D.i18n,
            a = z(z(z(z({}, F(D, U)), s), o), n),
            l = a.defaultNS,
            u = a.lng,
            c = a.localeExtension,
            p = a.localePath,
            h = a.nonExplicitSupportedLngs,
            g = a.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === u) return a;
          if (
            void 0 === a.fallbackLng &&
            ((a.fallbackLng = a.defaultLocale), "default" === a.fallbackLng)
          ) {
            var d = A(g, 1);
            a.fallbackLng = d[0];
          }
          var f =
              null == e || null === (t = e.interpolation) || void 0 === t
                ? void 0
                : t.prefix,
            m =
              null == e || null === (r = e.interpolation) || void 0 === r
                ? void 0
                : r.suffix,
            y = null != f ? f : "{{",
            b = null != m ? m : "}}";
          "string" != typeof (null == e ? void 0 : e.localeStructure) &&
            (f || m) &&
            (a.localeStructure = ""
              .concat(y, "lng")
              .concat(b, "/")
              .concat(y, "ns")
              .concat(b));
          var v = a.fallbackLng,
            x = a.localeStructure;
          if (h) {
            var S = function (e, t) {
              var r = A(t.split("-"), 1)[0];
              return (e[t] = [r]), e;
            };
            if ("string" == typeof v)
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(S, { default: [v] });
            else if (Array.isArray(v))
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(S, { default: v });
            else if ("object" === $(v))
              a.fallbackLng = Object.entries(a.fallbackLng).reduce(function (
                e,
                t,
              ) {
                var r = A(t, 2),
                  i = r[0],
                  n = r[1];
                return (
                  (e[i] = i.includes("-")
                    ? Array.from(
                        new Set(
                          [i.split("-")[0]].concat(
                            (function (e) {
                              if (Array.isArray(e)) return E(e);
                            })(n) ||
                              (function (e) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != e[Symbol.iterator]) ||
                                  null != e["@@iterator"]
                                )
                                  return Array.from(e);
                              })(n) ||
                              I(n) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })(),
                          ),
                        ),
                      )
                    : n),
                  e
                );
              }, v);
            else if ("function" == typeof v)
              throw Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng",
              );
          }
          return (
            (null == e || null === (i = e.use) || void 0 === i
              ? void 0
              : i.some(function (e) {
                  return "backend" === e.type;
                })) ||
              ("string" == typeof p
                ? (a.backend = {
                    addPath: "".concat(p, "/").concat(x, ".missing.").concat(c),
                    loadPath: "".concat(p, "/").concat(x, ".").concat(c),
                  })
                : "function" != typeof p ||
                  (a.backend = {
                    addPath: function (e, t) {
                      return p(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return p(e, t, !1);
                    },
                  })),
            "string" == typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]),
            K.forEach(function (t) {
              e[t] && (a[t] = z(z({}, a[t]), e[t]));
            }),
            a
          );
        };
      let H = (e) => "string" == typeof e,
        J = () => {
          let e, t;
          let r = new Promise((r, i) => {
            (e = r), (t = i);
          });
          return (r.resolve = e), (r.reject = t), r;
        },
        B = (e) => (null == e ? "" : "" + e),
        q = (e, t, r) => {
          e.forEach((e) => {
            t[e] && (r[e] = t[e]);
          });
        },
        W = /###/g,
        Y = (e) => (e && e.indexOf("###") > -1 ? e.replace(W, ".") : e),
        G = (e) => !e || H(e),
        Q = (e, t, r) => {
          let i = H(t) ? t.split(".") : t,
            n = 0;
          for (; n < i.length - 1; ) {
            if (G(e)) return {};
            let t = Y(i[n]);
            !e[t] && r && (e[t] = new r()),
              (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
              ++n;
          }
          return G(e) ? {} : { obj: e, k: Y(i[n]) };
        },
        X = (e, t, r) => {
          let { obj: i, k: n } = Q(e, t, Object);
          if (void 0 !== i || 1 === t.length) {
            i[n] = r;
            return;
          }
          let s = t[t.length - 1],
            o = t.slice(0, t.length - 1),
            a = Q(e, o, Object);
          for (; void 0 === a.obj && o.length; )
            (s = `${o[o.length - 1]}.${s}`),
              (a = Q(e, (o = o.slice(0, o.length - 1)), Object)) &&
                a.obj &&
                void 0 !== a.obj[`${a.k}.${s}`] &&
                (a.obj = void 0);
          a.obj[`${a.k}.${s}`] = r;
        },
        Z = (e, t, r, i) => {
          let { obj: n, k: s } = Q(e, t, Object);
          (n[s] = n[s] || []), n[s].push(r);
        },
        ee = (e, t) => {
          let { obj: r, k: i } = Q(e, t);
          if (r) return r[i];
        },
        et = (e, t, r) => {
          let i = ee(e, r);
          return void 0 !== i ? i : ee(t, r);
        },
        er = (e, t, r) => {
          for (let i in t)
            "__proto__" !== i &&
              "constructor" !== i &&
              (i in e
                ? H(e[i]) ||
                  e[i] instanceof String ||
                  H(t[i]) ||
                  t[i] instanceof String
                  ? r && (e[i] = t[i])
                  : er(e[i], t[i], r)
                : (e[i] = t[i]));
          return e;
        },
        ei = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      var en = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      let es = (e) => (H(e) ? e.replace(/[&<>"'\/]/g, (e) => en[e]) : e);
      class eo {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let r = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, r),
            this.regExpQueue.push(e),
            r
          );
        }
      }
      let ea = [" ", ",", "?", "!", ";"],
        el = new eo(20),
        eu = (e, t, r) => {
          (t = t || ""), (r = r || "");
          let i = ea.filter((e) => 0 > t.indexOf(e) && 0 > r.indexOf(e));
          if (0 === i.length) return !0;
          let n = el.getRegExp(
              `(${i.map((e) => ("?" === e ? "\\?" : e)).join("|")})`,
            ),
            s = !n.test(e);
          if (!s) {
            let t = e.indexOf(r);
            t > 0 && !n.test(e.substring(0, t)) && (s = !0);
          }
          return s;
        },
        ec = function (e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : ".";
          if (!e) return;
          if (e[t]) return e[t];
          let i = t.split(r),
            n = e;
          for (let e = 0; e < i.length; ) {
            let t;
            if (!n || "object" != typeof n) return;
            let s = "";
            for (let o = e; o < i.length; ++o)
              if ((o !== e && (s += r), (s += i[o]), void 0 !== (t = n[s]))) {
                if (
                  ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                  o < i.length - 1
                )
                  continue;
                e += o - e + 1;
                break;
              }
            n = t;
          }
          return n;
        },
        ep = (e) => e && e.replace("_", "-"),
        eh = {
          type: "logger",
          log(e) {
            this.output("log", e);
          },
          warn(e) {
            this.output("warn", e);
          },
          error(e) {
            this.output("error", e);
          },
          output(e, t) {
            console && console[e] && console[e].apply(console, t);
          },
        };
      class eg {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || eh),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, r, i) {
          return i && !this.debug
            ? null
            : (H(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new eg(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new eg(this.logger, e)
          );
        }
      }
      var ed = new eg();
      class ef {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let r = this.observers[e].get(t) || 0;
              this.observers[e].set(t, r + 1);
            }),
            this
          );
        }
        off(e, t) {
          if (this.observers[e]) {
            if (!t) {
              delete this.observers[e];
              return;
            }
            this.observers[e].delete(t);
          }
        }
        emit(e) {
          for (
            var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
            i < t;
            i++
          )
            r[i - 1] = arguments[i];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, i] = e;
              for (let e = 0; e < i; e++) t(...r);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [i, n] = t;
                for (let t = 0; t < n; t++) i.apply(i, [e, ...r]);
              });
        }
      }
      class em extends ef {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          let t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, r) {
          let i,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            s =
              void 0 !== n.keySeparator
                ? n.keySeparator
                : this.options.keySeparator,
            o =
              void 0 !== n.ignoreJSONStructure
                ? n.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (i = e.split("."))
            : ((i = [e, t]),
              r &&
                (Array.isArray(r)
                  ? i.push(...r)
                  : H(r) && s
                    ? i.push(...r.split(s))
                    : i.push(r)));
          let a = ee(this.data, i);
          return (!a &&
            !t &&
            !r &&
            e.indexOf(".") > -1 &&
            ((e = i[0]), (t = i[1]), (r = i.slice(2).join("."))),
          !a && o && H(r))
            ? ec(this.data && this.data[e] && this.data[e][t], r, s)
            : a;
        }
        addResource(e, t, r, i) {
          let n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            s =
              void 0 !== n.keySeparator
                ? n.keySeparator
                : this.options.keySeparator,
            o = [e, t];
          r && (o = o.concat(s ? r.split(s) : r)),
            e.indexOf(".") > -1 && ((o = e.split(".")), (i = t), (t = o[1])),
            this.addNamespaces(t),
            X(this.data, o, i),
            n.silent || this.emit("added", e, t, r, i);
        }
        addResources(e, t, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let i in r)
            (H(r[i]) || Array.isArray(r[i])) &&
              this.addResource(e, t, i, r[i], { silent: !0 });
          i.silent || this.emit("added", e, t, r);
        }
        addResourceBundle(e, t, r, i, n) {
          let s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            o = [e, t];
          e.indexOf(".") > -1 &&
            ((o = e.split(".")), (i = r), (r = t), (t = o[1])),
            this.addNamespaces(t);
          let a = ee(this.data, o) || {};
          s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
            i ? er(a, r, n) : (a = { ...a, ...r }),
            X(this.data, o, a),
            s.silent || this.emit("added", e, t, r);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (t || (t = this.options.defaultNS),
          "v1" === this.options.compatibilityAPI)
            ? { ...this.getResource(e, t) }
            : this.getResource(e, t);
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          let t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0,
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var ey = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, r, i, n) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, r, i, n));
            }),
            t
          );
        },
      };
      let eb = {};
      class ev extends ef {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            q(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this,
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = ed.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (null == e) return !1;
          let r = this.resolve(e, t);
          return r && void 0 !== r.res;
        }
        extractFromKey(e, t) {
          let r =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === r && (r = ":");
          let i =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            n = t.ns || this.options.defaultNS || [],
            s = r && e.indexOf(r) > -1,
            o =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !eu(e, r, i);
          if (s && !o) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: n };
            let s = e.split(r);
            (r !== i || (r === i && this.options.ns.indexOf(s[0]) > -1)) &&
              (n = s.shift()),
              (e = s.join(i));
          }
          return H(n) && (n = [n]), { key: e, namespaces: n };
        }
        translate(e, t, r) {
          if (
            ("object" != typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" == typeof t && (t = { ...t }),
            t || (t = {}),
            null == e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          let i =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            n =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: s, namespaces: o } = this.extractFromKey(e[e.length - 1], t),
            a = o[o.length - 1],
            l = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (l && "cimode" === l.toLowerCase()) {
            if (u) {
              let e = t.nsSeparator || this.options.nsSeparator;
              return i
                ? {
                    res: `${a}${e}${s}`,
                    usedKey: s,
                    exactUsedKey: s,
                    usedLng: l,
                    usedNS: a,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : `${a}${e}${s}`;
            }
            return i
              ? {
                  res: s,
                  usedKey: s,
                  exactUsedKey: s,
                  usedLng: l,
                  usedNS: a,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : s;
          }
          let c = this.resolve(e, t),
            p = c && c.res,
            h = (c && c.usedKey) || s,
            g = (c && c.exactUsedKey) || s,
            d = Object.prototype.toString.apply(p),
            f =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y = !H(p) && "boolean" != typeof p && "number" != typeof p;
          if (
            m &&
            p &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(d) &&
            !(H(f) && Array.isArray(p))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!",
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(h, p, { ...t, ns: o })
                : `key '${s} (${this.language})' returned an object instead of string.`;
              return i
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (n) {
              let e = Array.isArray(p),
                r = e ? [] : {},
                i = e ? g : h;
              for (let e in p)
                if (Object.prototype.hasOwnProperty.call(p, e)) {
                  let s = `${i}${n}${e}`;
                  (r[e] = this.translate(s, { ...t, joinArrays: !1, ns: o })),
                    r[e] === s && (r[e] = p[e]);
                }
              p = r;
            }
          } else if (m && H(f) && Array.isArray(p))
            (p = p.join(f)) && (p = this.extendTranslation(p, e, t, r));
          else {
            let i = !1,
              o = !1,
              u = void 0 !== t.count && !H(t.count),
              h = ev.hasDefaultValue(t),
              g = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              d =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              f =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (f && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${g}`] ||
                t[`defaultValue${d}`] ||
                t.defaultValue;
            !this.isValidLookup(p) && h && ((i = !0), (p = m)),
              this.isValidLookup(p) || ((o = !0), (p = s));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                o
                  ? void 0
                  : p,
              b = h && m !== p && this.options.updateMissing;
            if (o || i || b) {
              if (
                (this.logger.log(
                  b ? "updateKey" : "missingKey",
                  l,
                  a,
                  s,
                  b ? m : p,
                ),
                n)
              ) {
                let e = this.resolve(s, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                  );
              }
              let e = [],
                r = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language,
                );
              if ("fallback" === this.options.saveMissingTo && r && r[0])
                for (let t = 0; t < r.length; t++) e.push(r[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language,
                    ))
                  : e.push(t.lng || this.language);
              let i = (e, r, i) => {
                let n = h && i !== p ? i : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, r, n, b, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, r, n, b, t),
                  this.emit("missingKey", e, a, r, p);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let r = this.pluralResolver.getSuffixes(e, t);
                      f &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > r.indexOf(`${this.options.pluralSeparator}zero`) &&
                        r.push(`${this.options.pluralSeparator}zero`),
                        r.forEach((r) => {
                          i([e], s + r, t[`defaultValue${r}`] || m);
                        });
                    })
                  : i(e, s, m));
            }
            (p = this.extendTranslation(p, e, t, c, r)),
              o &&
                p === s &&
                this.options.appendNamespaceToMissingKey &&
                (p = `${a}:${s}`),
              (o || i) &&
                this.options.parseMissingKeyHandler &&
                (p =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${s}`
                          : s,
                        i ? p : void 0,
                      )
                    : this.options.parseMissingKeyHandler(p));
          }
          return i
            ? ((c.res = p), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : p;
        }
        extendTranslation(e, t, r, i, n) {
          var s = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...r },
              r.lng || this.language || i.usedLng,
              i.usedNS,
              i.usedKey,
              { resolved: i },
            );
          else if (!r.skipInterpolation) {
            let o;
            r.interpolation &&
              this.interpolator.init({
                ...r,
                interpolation: {
                  ...this.options.interpolation,
                  ...r.interpolation,
                },
              });
            let a =
              H(e) &&
              (r &&
              r.interpolation &&
              void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (a) {
              let t = e.match(this.interpolator.nestingRegexp);
              o = t && t.length;
            }
            let l = r.replace && !H(r.replace) ? r.replace : r;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                r.lng || this.language || i.usedLng,
                r,
              )),
              a)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              o < (t && t.length) && (r.nest = !1);
            }
            !r.lng &&
              "v1" !== this.options.compatibilityAPI &&
              i &&
              i.res &&
              (r.lng = this.language || i.usedLng),
              !1 !== r.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, i = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      i[o] = arguments[o];
                    return n && n[0] === i[0] && !r.context
                      ? (s.logger.warn(
                          `It seems you are nesting recursively key: ${i[0]} in key: ${t[0]}`,
                        ),
                        null)
                      : s.translate(...i, t);
                  },
                  r,
                )),
              r.interpolation && this.interpolator.reset();
          }
          let o = r.postProcess || this.options.postProcess,
            a = H(o) ? [o] : o;
          return (
            null != e &&
              a &&
              a.length &&
              !1 !== r.applyPostProcessor &&
              (e = ey.handle(
                a,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...i,
                        usedParams: this.getUsedParamsDetails(r),
                      },
                      ...r,
                    }
                  : r,
                this,
              )),
            e
          );
        }
        resolve(e) {
          let t,
            r,
            i,
            n,
            s,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            H(e) && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let a = this.extractFromKey(e, o),
                l = a.key;
              r = l;
              let u = a.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== o.count && !H(o.count),
                p =
                  c &&
                  !o.ordinal &&
                  0 === o.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                h =
                  void 0 !== o.context &&
                  (H(o.context) || "number" == typeof o.context) &&
                  "" !== o.context,
                g = o.lngs
                  ? o.lngs
                  : this.languageUtils.toResolveHierarchy(
                      o.lng || this.language,
                      o.fallbackLng,
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((s = e),
                  !eb[`${g[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(s) &&
                    ((eb[`${g[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                    )),
                  g.forEach((r) => {
                    let s;
                    if (this.isValidLookup(t)) return;
                    n = r;
                    let a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, r, e, o);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(r, o.count, o));
                      let t = `${this.options.pluralSeparator}zero`,
                        i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (a.push(l + e),
                          o.ordinal &&
                            0 === e.indexOf(i) &&
                            a.push(
                              l + e.replace(i, this.options.pluralSeparator),
                            ),
                          p && a.push(l + t)),
                        h)
                      ) {
                        let r = `${l}${this.options.contextSeparator}${o.context}`;
                        a.push(r),
                          c &&
                            (a.push(r + e),
                            o.ordinal &&
                              0 === e.indexOf(i) &&
                              a.push(
                                r + e.replace(i, this.options.pluralSeparator),
                              ),
                            p && a.push(r + t));
                      }
                    }
                    for (; (s = a.pop()); )
                      this.isValidLookup(t) ||
                        ((i = s), (t = this.getResource(r, e, s, o)));
                  }));
              });
            }),
            { res: t, usedKey: r, exactUsedKey: i, usedLng: n, usedNS: s }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, r, i)
            : this.resourceStore.getResource(e, t, r, i);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && !H(e.replace),
            r = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (r.count = e.count),
            this.options.interpolation.defaultVariables &&
              (r = { ...this.options.interpolation.defaultVariables, ...r }),
            !t)
          )
            for (let e of ((r = { ...r }),
            [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ]))
              delete r[e];
          return r;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let r in e)
            if (
              Object.prototype.hasOwnProperty.call(e, r) &&
              t === r.substring(0, t.length) &&
              void 0 !== e[r]
            )
              return !0;
          return !1;
        }
      }
      let ex = (e) => e.charAt(0).toUpperCase() + e.slice(1);
      class eS {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = ed.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = ep(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
              ? null
              : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = ep(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if (H(e) && e.indexOf("-") > -1) {
            if (
              "undefined" != typeof Intl &&
              void 0 !== Intl.getCanonicalLocales
            )
              try {
                let t = Intl.getCanonicalLocales(e)[0];
                if (
                  (t && this.options.lowerCaseLng && (t = t.toLowerCase()), t)
                )
                  return t;
              } catch (e) {}
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              r = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (r = r.map((e) => e.toLowerCase()))
                : 2 === r.length
                  ? ((r[0] = r[0].toLowerCase()),
                    (r[1] = r[1].toUpperCase()),
                    t.indexOf(r[1].toLowerCase()) > -1 &&
                      (r[1] = ex(r[1].toLowerCase())))
                  : 3 === r.length &&
                    ((r[0] = r[0].toLowerCase()),
                    2 === r[1].length && (r[1] = r[1].toUpperCase()),
                    "sgn" !== r[0] &&
                      2 === r[2].length &&
                      (r[2] = r[2].toUpperCase()),
                    t.indexOf(r[1].toLowerCase()) > -1 &&
                      (r[1] = ex(r[1].toLowerCase())),
                    t.indexOf(r[2].toLowerCase()) > -1 &&
                      (r[2] = ex(r[2].toLowerCase()))),
              r.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          let t;
          return e
            ? (e.forEach((e) => {
                if (t) return;
                let r = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(r)) &&
                  (t = r);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let r = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(r)) return (t = r);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === r ||
                      (!(0 > e.indexOf("-") && 0 > r.indexOf("-")) &&
                        ((e.indexOf("-") > 0 &&
                          0 > r.indexOf("-") &&
                          e.substring(0, e.indexOf("-")) === r) ||
                          (0 === e.indexOf(r) && r.length > 1)))
                    )
                      return e;
                  });
                }),
              t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
              t)
            : null;
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" == typeof e && (e = e(t)),
            H(e) && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let r = e[t];
          return (
            r || (r = e[this.getScriptPartFromCode(t)]),
            r || (r = e[this.formatLanguageCode(t)]),
            r || (r = e[this.getLanguagePartFromCode(t)]),
            r || (r = e.default),
            r || []
          );
        }
        toResolveHierarchy(e, t) {
          let r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            i = [],
            n = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? i.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`,
                    ));
            };
          return (
            H(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  n(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  n(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  n(this.getLanguagePartFromCode(e)))
              : H(e) && n(this.formatLanguageCode(e)),
            r.forEach((e) => {
              0 > i.indexOf(e) && n(this.formatLanguageCode(e));
            }),
            i
          );
        }
      }
      let eO = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        ek = {
          1: (e) => Number(e > 1),
          2: (e) => Number(1 != e),
          3: (e) => 0,
          4: (e) =>
            Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          5: (e) =>
            Number(
              0 == e
                ? 0
                : 1 == e
                  ? 1
                  : 2 == e
                    ? 2
                    : e % 100 >= 3 && e % 100 <= 10
                      ? 3
                      : e % 100 >= 11
                        ? 4
                        : 5,
            ),
          6: (e) => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
          7: (e) =>
            Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          8: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
          9: (e) => Number(e >= 2),
          10: (e) =>
            Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
          11: (e) =>
            Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3,
            ),
          12: (e) => Number(e % 10 != 1 || e % 100 == 11),
          13: (e) => Number(0 !== e),
          14: (e) => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
          15: (e) =>
            Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            ),
          16: (e) => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
          17: (e) => Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
          18: (e) => Number(0 == e ? 0 : 1 == e ? 1 : 2),
          19: (e) =>
            Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3,
            ),
          20: (e) =>
            Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            ),
          21: (e) =>
            Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0,
            ),
          22: (e) =>
            Number(
              1 == e
                ? 0
                : 2 == e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3,
            ),
        },
        ew = ["v1", "v2", "v3"],
        eL = ["v4"],
        eP = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        eN = () => {
          let e = {};
          return (
            eO.forEach((t) => {
              t.lngs.forEach((r) => {
                e[r] = { numbers: t.nr, plurals: ek[t.fc] };
              });
            }),
            e
          );
        };
      class e$ {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = ed.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              eL.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
              )),
            (this.rules = eN()),
            (this.pluralRulesCache = {});
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        clearCache() {
          this.pluralRulesCache = {};
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              let r = ep("dev" === e ? "en" : e),
                i = t.ordinal ? "ordinal" : "cardinal",
                n = JSON.stringify({ cleanedCode: r, type: i });
              if (n in this.pluralRulesCache) return this.pluralRulesCache[n];
              let s = new Intl.PluralRules(r, { type: i });
              return (this.pluralRulesCache[n] = s), s;
            } catch (e) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? r && r.resolvedOptions().pluralCategories.length > 1
            : r && r.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, r).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = this.getRule(e, t);
          return r
            ? this.shouldUseIntlApi()
              ? r
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => eP[e] - eP[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`,
                  )
              : r.numbers.map((r) => this.getSuffix(e, r, t))
            : [];
        }
        getSuffix(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = this.getRule(e, r);
          return i
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}`
              : this.getSuffixRetroCompatible(i, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            i = e.numbers[r];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === i ? (i = "plural") : 1 === i && (i = ""));
          let n = () =>
            this.options.prepend && i.toString()
              ? this.options.prepend + i.toString()
              : i.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === i
              ? ""
              : "number" == typeof i
                ? `_plural_${i.toString()}`
                : n()
            : "v2" === this.options.compatibilityJSON ||
                (this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0])
              ? n()
              : this.options.prepend && r.toString()
                ? this.options.prepend + r.toString()
                : r.toString();
        }
        shouldUseIntlApi() {
          return !ew.includes(this.options.compatibilityJSON);
        }
      }
      let eC = function (e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : ".",
            n =
              !(arguments.length > 4) ||
              void 0 === arguments[4] ||
              arguments[4],
            s = et(e, t, r);
          return (
            !s &&
              n &&
              H(r) &&
              void 0 === (s = ec(e, r, i)) &&
              (s = ec(t, r, i)),
            s
          );
        },
        ej = (e) => e.replace(/\$/g, "$$$$");
      class eR {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ed.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let {
            escape: t,
            escapeValue: r,
            useRawValueToEscape: i,
            prefix: n,
            prefixEscaped: s,
            suffix: o,
            suffixEscaped: a,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: p,
            nestingPrefixEscaped: h,
            nestingSuffix: g,
            nestingSuffixEscaped: d,
            nestingOptionsSeparator: f,
            maxReplaces: m,
            alwaysFormat: y,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : es),
            (this.escapeValue = void 0 === r || r),
            (this.useRawValueToEscape = void 0 !== i && i),
            (this.prefix = n ? ei(n) : s || "{{"),
            (this.suffix = o ? ei(o) : a || "}}"),
            (this.formatSeparator = l || ","),
            (this.unescapePrefix = u ? "" : c || "-"),
            (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
            (this.nestingPrefix = p ? ei(p) : h || ei("$t(")),
            (this.nestingSuffix = g ? ei(g) : d || ei(")")),
            (this.nestingOptionsSeparator = f || ","),
            (this.maxReplaces = m || 1e3),
            (this.alwaysFormat = void 0 !== y && y),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          let e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : RegExp(t, "g");
          (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
            ));
        }
        interpolate(e, t, r, i) {
          let n, s, o;
          let a =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {},
            l = (e) => {
              if (0 > e.indexOf(this.formatSeparator)) {
                let n = eC(
                  t,
                  a,
                  e,
                  this.options.keySeparator,
                  this.options.ignoreJSONStructure,
                );
                return this.alwaysFormat
                  ? this.format(n, void 0, r, {
                      ...i,
                      ...t,
                      interpolationkey: e,
                    })
                  : n;
              }
              let n = e.split(this.formatSeparator),
                s = n.shift().trim(),
                o = n.join(this.formatSeparator).trim();
              return this.format(
                eC(
                  t,
                  a,
                  s,
                  this.options.keySeparator,
                  this.options.ignoreJSONStructure,
                ),
                o,
                r,
                { ...i, ...t, interpolationkey: s },
              );
            };
          this.resetRegExp();
          let u =
              (i && i.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            c =
              i && i.interpolation && void 0 !== i.interpolation.skipOnVariables
                ? i.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => ej(e) },
              {
                regex: this.regexp,
                safeValue: (e) =>
                  this.escapeValue ? ej(this.escape(e)) : ej(e),
              },
            ].forEach((t) => {
              for (o = 0; (n = t.regex.exec(e)); ) {
                let r = n[1].trim();
                if (void 0 === (s = l(r))) {
                  if ("function" == typeof u) {
                    let t = u(e, n, i);
                    s = H(t) ? t : "";
                  } else if (i && Object.prototype.hasOwnProperty.call(i, r))
                    s = "";
                  else if (c) {
                    s = n[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${r} for interpolating ${e}`,
                    ),
                      (s = "");
                } else H(s) || this.useRawValueToEscape || (s = B(s));
                let a = t.safeValue(s);
                if (
                  ((e = e.replace(n[0], a)),
                  c
                    ? ((t.regex.lastIndex += s.length),
                      (t.regex.lastIndex -= n[0].length))
                    : (t.regex.lastIndex = 0),
                  ++o >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let r,
            i,
            n,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = (e, t) => {
              let r = this.nestingOptionsSeparator;
              if (0 > e.indexOf(r)) return e;
              let i = e.split(RegExp(`${r}[ ]*{`)),
                s = `{${i[1]}`;
              e = i[0];
              let o = (s = this.interpolate(s, n)).match(/'/g),
                a = s.match(/"/g);
              ((o && o.length % 2 == 0 && !a) || a.length % 2 != 0) &&
                (s = s.replace(/'/g, '"'));
              try {
                (n = JSON.parse(s)), t && (n = { ...t, ...n });
              } catch (t) {
                return (
                  this.logger.warn(
                    `failed parsing options string in nesting for key ${e}`,
                    t,
                  ),
                  `${e}${r}${s}`
                );
              }
              return (
                n.defaultValue &&
                  n.defaultValue.indexOf(this.prefix) > -1 &&
                  delete n.defaultValue,
                e
              );
            };
          for (; (r = this.nestingRegexp.exec(e)); ) {
            let a = [];
            ((n =
              (n = { ...s }).replace && !H(n.replace)
                ? n.replace
                : n).applyPostProcessor = !1),
              delete n.defaultValue;
            let l = !1;
            if (
              -1 !== r[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(r[1])
            ) {
              let e = r[1].split(this.formatSeparator).map((e) => e.trim());
              (r[1] = e.shift()), (a = e), (l = !0);
            }
            if ((i = t(o.call(this, r[1].trim(), n), n)) && r[0] === e && !H(i))
              return i;
            H(i) || (i = B(i)),
              i ||
                (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),
                (i = "")),
              l &&
                (i = a.reduce(
                  (e, t) =>
                    this.format(e, t, s.lng, {
                      ...s,
                      interpolationkey: r[1].trim(),
                    }),
                  i.trim(),
                )),
              (e = e.replace(r[0], i)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      let eE = (e) => {
          let t = e.toLowerCase().trim(),
            r = {};
          if (e.indexOf("(") > -1) {
            let i = e.split("(");
            t = i[0].toLowerCase().trim();
            let n = i[1].substring(0, i[1].length - 1);
            "currency" === t && 0 > n.indexOf(":")
              ? r.currency || (r.currency = n.trim())
              : "relativetime" === t && 0 > n.indexOf(":")
                ? r.range || (r.range = n.trim())
                : n.split(";").forEach((e) => {
                    if (e) {
                      let [t, ...i] = e.split(":"),
                        n = i
                          .join(":")
                          .trim()
                          .replace(/^'+|'+$/g, ""),
                        s = t.trim();
                      r[s] || (r[s] = n),
                        "false" === n && (r[s] = !1),
                        "true" === n && (r[s] = !0),
                        isNaN(n) || (r[s] = parseInt(n, 10));
                    }
                  });
          }
          return { formatName: t, formatOptions: r };
        },
        eI = (e) => {
          let t = {};
          return (r, i, n) => {
            let s = n;
            n &&
              n.interpolationkey &&
              n.formatParams &&
              n.formatParams[n.interpolationkey] &&
              n[n.interpolationkey] &&
              (s = { ...s, [n.interpolationkey]: void 0 });
            let o = i + JSON.stringify(s),
              a = t[o];
            return a || ((a = e(ep(i), n)), (t[o] = a)), a(r);
          };
        };
      class eA {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = ed.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: eI((e, t) => {
                let r = new Intl.NumberFormat(e, { ...t });
                return (e) => r.format(e);
              }),
              currency: eI((e, t) => {
                let r = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => r.format(e);
              }),
              datetime: eI((e, t) => {
                let r = new Intl.DateTimeFormat(e, { ...t });
                return (e) => r.format(e);
              }),
              relativetime: eI((e, t) => {
                let r = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => r.format(e, t.range || "day");
              }),
              list: eI((e, t) => {
                let r = new Intl.ListFormat(e, { ...t });
                return (e) => r.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          this.formatSeparator = t.interpolation.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = eI(t);
        }
        format(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            n = t.split(this.formatSeparator);
          if (
            n.length > 1 &&
            n[0].indexOf("(") > 1 &&
            0 > n[0].indexOf(")") &&
            n.find((e) => e.indexOf(")") > -1)
          ) {
            let e = n.findIndex((e) => e.indexOf(")") > -1);
            n[0] = [n[0], ...n.splice(1, e)].join(this.formatSeparator);
          }
          return n.reduce((e, t) => {
            let { formatName: n, formatOptions: s } = eE(t);
            if (this.formats[n]) {
              let t = e;
              try {
                let o =
                    (i &&
                      i.formatParams &&
                      i.formatParams[i.interpolationkey]) ||
                    {},
                  a = o.locale || o.lng || i.locale || i.lng || r;
                t = this.formats[n](e, a, { ...s, ...i, ...o });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${n}`), e;
          }, e);
        }
      }
      let eF = (e, t) => {
        void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--);
      };
      class eD extends ef {
        constructor(e, t, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = r),
            (this.languageUtils = r.languageUtils),
            (this.options = i),
            (this.logger = ed.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = i.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
            (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(r, i.backend, i);
        }
        queueLoad(e, t, r, i) {
          let n = {},
            s = {},
            o = {},
            a = {};
          return (
            e.forEach((e) => {
              let i = !0;
              t.forEach((t) => {
                let o = `${e}|${t}`;
                !r.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[o] = 2)
                  : this.state[o] < 0 ||
                    (1 === this.state[o]
                      ? void 0 === s[o] && (s[o] = !0)
                      : ((this.state[o] = 1),
                        (i = !1),
                        void 0 === s[o] && (s[o] = !0),
                        void 0 === n[o] && (n[o] = !0),
                        void 0 === a[t] && (a[t] = !0)));
              }),
                i || (o[e] = !0);
            }),
            (Object.keys(n).length || Object.keys(s).length) &&
              this.queue.push({
                pending: s,
                pendingCount: Object.keys(s).length,
                loaded: {},
                errors: [],
                callback: i,
              }),
            {
              toLoad: Object.keys(n),
              pending: Object.keys(s),
              toLoadLanguages: Object.keys(o),
              toLoadNamespaces: Object.keys(a),
            }
          );
        }
        loaded(e, t, r) {
          let i = e.split("|"),
            n = i[0],
            s = i[1];
          t && this.emit("failedLoading", n, s, t),
            !t &&
              r &&
              this.store.addResourceBundle(n, s, r, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2),
            t && r && (this.state[e] = 0);
          let o = {};
          this.queue.forEach((r) => {
            Z(r.loaded, [n], s),
              eF(r, e),
              t && r.errors.push(t),
              0 !== r.pendingCount ||
                r.done ||
                (Object.keys(r.loaded).forEach((e) => {
                  o[e] || (o[e] = {});
                  let t = r.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === o[e][t] && (o[e][t] = !0);
                    });
                }),
                (r.done = !0),
                r.errors.length ? r.callback(r.errors) : r.callback());
          }),
            this.emit("loaded", o),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return s(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: r,
              tried: i,
              wait: n,
              callback: s,
            });
            return;
          }
          this.readingCalls++;
          let o = (o, a) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                let e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              if (o && a && i < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, r, i + 1, 2 * n, s);
                }, n);
                return;
              }
              s(o, a);
            },
            a = this.backend[r].bind(this.backend);
          if (2 === a.length) {
            try {
              let r = a(e, t);
              r && "function" == typeof r.then
                ? r.then((e) => o(null, e)).catch(o)
                : o(null, r);
            } catch (e) {
              o(e);
            }
            return;
          }
          return a(e, t, o);
        }
        prepareLoading(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources.",
              ),
              i && i()
            );
          H(e) && (e = this.languageUtils.toResolveHierarchy(e)),
            H(t) && (t = [t]);
          let n = this.queueLoad(e, t, r, i);
          if (!n.toLoad.length) return n.pending.length || i(), null;
          n.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, r) {
          this.prepareLoading(e, t, {}, r);
        }
        reload(e, t, r) {
          this.prepareLoading(e, t, { reload: !0 }, r);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r = e.split("|"),
            i = r[0],
            n = r[1];
          this.read(i, n, "read", void 0, void 0, (r, s) => {
            r &&
              this.logger.warn(
                `${t}loading namespace ${n} for language ${i} failed`,
                r,
              ),
              !r &&
                s &&
                this.logger.log(
                  `${t}loaded namespace ${n} for language ${i}`,
                  s,
                ),
              this.loaded(e, r, s);
          });
        }
        saveMissing(e, t, r, i, n) {
          let s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          ) {
            this.logger.warn(
              `did not save key "${r}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
            );
            return;
          }
          if (null != r && "" !== r) {
            if (this.backend && this.backend.create) {
              let a = { ...s, isUpdate: n },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let n;
                  (n = 5 === l.length ? l(e, t, r, i, a) : l(e, t, r, i)) &&
                  "function" == typeof n.then
                    ? n.then((e) => o(null, e)).catch(o)
                    : o(null, n);
                } catch (e) {
                  o(e);
                }
              else l(e, t, r, i, o, a);
            }
            e && e[0] && this.store.addResource(e[0], t, r, i);
          }
        }
      }
      let eT = () => ({
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: (e) => {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              H(e[1]) && (t.defaultValue = e[1]),
              H(e[2]) && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let r = e[3] || e[2];
              Object.keys(r).forEach((e) => {
                t[e] = r[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        }),
        eV = (e) => (
          H(e.ns) && (e.ns = [e.ns]),
          H(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
          H(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        ),
        eU = () => {},
        eM = (e) => {
          Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
            "function" == typeof e[t] && (e[t] = e[t].bind(e));
          });
        };
      class ez extends ef {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = eV(e)),
            (this.services = {}),
            (this.logger = ed),
            (this.modules = { external: [] }),
            eM(this),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" == typeof t && ((r = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              (H(t.ns)
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let i = eT();
          (this.options = { ...i, ...this.options, ...eV(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...i.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator);
          let n = (e) => (e ? ("function" == typeof e ? new e() : e) : null);
          if (!this.options.isClone) {
            let t;
            this.modules.logger
              ? ed.init(n(this.modules.logger), this.options)
              : ed.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = eA);
            let r = new eS(this.options);
            this.store = new em(this.options.resources, this.options);
            let s = this.services;
            (s.logger = ed),
              (s.resourceStore = this.store),
              (s.languageUtils = r),
              (s.pluralResolver = new e$(r, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    i.interpolation.format) &&
                ((s.formatter = n(t)),
                s.formatter.init(s, this.options),
                (this.options.interpolation.format = s.formatter.format.bind(
                  s.formatter,
                ))),
              (s.interpolator = new eR(this.options)),
              (s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (s.backendConnector = new eD(
                n(this.modules.backend),
                s.resourceStore,
                s,
                this.options,
              )),
              s.backendConnector.on("*", function (t) {
                for (
                  var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1;
                  n < r;
                  n++
                )
                  i[n - 1] = arguments[n];
                e.emit(t, ...i);
              }),
              this.modules.languageDetector &&
                ((s.languageDetector = n(this.modules.languageDetector)),
                s.languageDetector.init &&
                  s.languageDetector.init(
                    s,
                    this.options.detection,
                    this.options,
                  )),
              this.modules.i18nFormat &&
                ((s.i18nFormat = n(this.modules.i18nFormat)),
                s.i18nFormat.init && s.i18nFormat.init(this)),
              (this.translator = new ev(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1;
                  n < r;
                  n++
                )
                  i[n - 1] = arguments[n];
                e.emit(t, ...i);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            r || (r = eU),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            let e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng,
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined",
            ),
            [
              "getResource",
              "hasResourceBundle",
              "getResourceBundle",
              "getDataByLanguage",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments);
              };
            }),
            [
              "addResource",
              "addResources",
              "addResourceBundle",
              "removeResourceBundle",
            ].forEach((t) => {
              this[t] = function () {
                return e.store[t](...arguments), e;
              };
            });
          let s = J(),
            o = () => {
              let e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!",
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  s.resolve(t),
                  r(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? o()
              : setTimeout(o, 0),
            s
          );
        }
        loadResources(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eU,
            r = t,
            i = H(e) ? e : this.language;
          if (
            ("function" == typeof e && (r = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              i &&
              "cimode" === i.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return r();
            let e = [],
              t = (t) => {
                t &&
                  "cimode" !== t &&
                  this.services.languageUtils
                    .toResolveHierarchy(t)
                    .forEach((t) => {
                      "cimode" !== t && 0 > e.indexOf(t) && e.push(t);
                    });
              };
            i
              ? t(i)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  r(e);
              });
          } else r(null);
        }
        reloadResources(e, t, r) {
          let i = J();
          return (
            "function" == typeof e && ((r = e), (e = void 0)),
            "function" == typeof t && ((r = t), (t = void 0)),
            e || (e = this.languages),
            t || (t = this.options.ns),
            r || (r = eU),
            this.services.backendConnector.reload(e, t, (e) => {
              i.resolve(), r(e);
            }),
            i
          );
        }
        use(e) {
          if (!e)
            throw Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()",
            );
          if (!e.type)
            throw Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()",
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && ey.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let e = 0; e < this.languages.length; e++) {
              let t = this.languages[e];
              if (
                !(["cimode", "dev"].indexOf(t) > -1) &&
                this.store.hasLanguageSomeTranslations(t)
              ) {
                this.resolvedLanguage = t;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var r = this;
          this.isLanguageChangingTo = e;
          let i = J();
          this.emit("languageChanging", e);
          let n = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            s = (e, s) => {
              s
                ? (n(s),
                  this.translator.changeLanguage(s),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", s),
                  this.logger.log("languageChanged", s))
                : (this.isLanguageChangingTo = void 0),
                i.resolve(function () {
                  return r.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return r.t(...arguments);
                  });
            },
            o = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let r = H(t)
                ? t
                : this.services.languageUtils.getBestMatchFromCodes(t);
              r &&
                (this.language || n(r),
                this.translator.language || this.translator.changeLanguage(r),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(r)),
                this.loadResources(r, (e) => {
                  s(e, r);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(o)
                  : this.services.languageDetector.detect(o)
                : o(e)
              : o(this.services.languageDetector.detect()),
            i
          );
        }
        getFixedT(e, t, r) {
          var i = this;
          let n = function (e, t) {
            let s, o;
            if ("object" != typeof t) {
              for (
                var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2;
                u < a;
                u++
              )
                l[u - 2] = arguments[u];
              s = i.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else s = { ...t };
            (s.lng = s.lng || n.lng),
              (s.lngs = s.lngs || n.lngs),
              (s.ns = s.ns || n.ns),
              "" !== s.keyPrefix &&
                (s.keyPrefix = s.keyPrefix || r || n.keyPrefix);
            let c = i.options.keySeparator || ".";
            return (
              (o =
                s.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${s.keyPrefix}${c}${e}`)
                  : s.keyPrefix
                    ? `${s.keyPrefix}${c}${e}`
                    : e),
              i.t(o, s)
            );
          };
          return (
            H(e) ? (n.lng = e) : (n.lngs = e), (n.ns = t), (n.keyPrefix = r), n
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages,
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages,
              ),
              !1
            );
          let r = t.lng || this.resolvedLanguage || this.languages[0],
            i = !!this.options && this.options.fallbackLng,
            n = this.languages[this.languages.length - 1];
          if ("cimode" === r.toLowerCase()) return !0;
          let s = (e, t) => {
            let r = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === r || 0 === r || 2 === r;
          };
          if (t.precheck) {
            let e = t.precheck(this, s);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(r, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (s(r, e) && (!i || s(n, e)))
          );
        }
        loadNamespaces(e, t) {
          let r = J();
          return this.options.ns
            ? (H(e) && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                r.resolve(), t && t(e);
              }),
              r)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let r = J();
          H(e) && (e = [e]);
          let i = this.options.preload || [],
            n = e.filter(
              (e) =>
                0 > i.indexOf(e) &&
                this.services.languageUtils.isSupportedCode(e),
            );
          return n.length
            ? ((this.options.preload = i.concat(n)),
              this.loadResources((e) => {
                r.resolve(), t && t(e);
              }),
              r)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          return (e ||
            (e =
              this.resolvedLanguage ||
              (this.languages && this.languages.length > 0
                ? this.languages[0]
                : this.language)),
          e)
            ? [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
                "ckb",
              ].indexOf(
                (
                  (this.services && this.services.languageUtils) ||
                  new eS(eT())
                ).getLanguagePartFromCode(e),
              ) > -1 || e.toLowerCase().indexOf("-arab") > 1
              ? "rtl"
              : "ltr"
            : "rtl";
        }
        static createInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new ez(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : eU,
            r = e.forkResourceStore;
          r && delete e.forkResourceStore;
          let i = { ...this.options, ...e, isClone: !0 },
            n = new ez(i);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (n.logger = n.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              n[e] = this[e];
            }),
            (n.services = { ...this.services }),
            (n.services.utils = {
              hasLoadedNamespace: n.hasLoadedNamespace.bind(n),
            }),
            r &&
              ((n.store = new em(this.store.data, i)),
              (n.services.resourceStore = n.store)),
            (n.translator = new ev(n.services, i)),
            n.translator.on("*", function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
                i < t;
                i++
              )
                r[i - 1] = arguments[i];
              n.emit(e, ...r);
            }),
            n.init(i, t),
            (n.translator.options = i),
            (n.translator.backendConnector.services.utils = {
              hasLoadedNamespace: n.hasLoadedNamespace.bind(n),
            }),
            n
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      let eK = ez.createInstance();
      (eK.createInstance = ez.createInstance),
        eK.createInstance,
        eK.dir,
        eK.init,
        eK.loadResources,
        eK.reloadResources,
        eK.use,
        eK.changeLanguage,
        eK.getFixedT,
        eK.t,
        eK.exists,
        eK.setDefaultNamespace,
        eK.hasLoadedNamespace,
        eK.loadNamespaces,
        eK.loadLanguages;
      var e_ = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            r,
            i = eK.createInstance(e);
          return (
            i.isInitialized
              ? (t = Promise.resolve(eK.t))
              : (null == e ||
                  null === (r = e.use) ||
                  void 0 === r ||
                  r.forEach(function (e) {
                    return i.use(e);
                  }),
                "function" == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(i),
                (t = i.init(e))),
            { i18n: i, initPromise: t }
          );
        },
        eH = n.createElement;
      function eJ(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function eB(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eJ(Object(r), !0).forEach(function (t) {
                C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eJ(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eq = function (e, t) {
          if (t && e.isInitialized)
            for (var r = 0, i = Object.keys(t); r < i.length; r++)
              for (
                var n = i[r], s = 0, o = Object.keys(t[n]);
                s < o.length;
                s++
              ) {
                var a,
                  l = o[s];
                (null != e &&
                  null !== (a = e.store) &&
                  void 0 !== a &&
                  a.data &&
                  e.store.data[n] &&
                  e.store.data[n][l]) ||
                  e.addResourceBundle(n, l, t[n][l], !0, !0);
              }
        },
        eW = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return R()(function (r) {
            var i,
              s,
              o = (r.pageProps || {})._nextI18Next,
              a =
                null !== (i = null == o ? void 0 : o.initialLocale) &&
                void 0 !== i
                  ? i
                  : null == r || null === (s = r.router) || void 0 === s
                    ? void 0
                    : s.locale,
              l = null == o ? void 0 : o.ns,
              u = (0, n.useRef)(null),
              c = (0, n.useMemo)(
                function () {
                  if (!o && !t) return null;
                  var e,
                    r = null != t ? t : null == o ? void 0 : o.userConfig;
                  if (!r)
                    throw Error(
                      "appWithTranslation was called without a next-i18next config",
                    );
                  if (!(null != r && r.i18n))
                    throw Error(
                      "appWithTranslation was called without config.i18n",
                    );
                  if (
                    !(
                      null != r &&
                      null !== (e = r.i18n) &&
                      void 0 !== e &&
                      e.defaultLocale
                    )
                  )
                    throw Error(
                      "config.i18n does not include a defaultLocale property",
                    );
                  var i = (o || {}).initialI18nStore,
                    n = null != t && t.resources ? t.resources : i;
                  a || (a = r.i18n.defaultLocale);
                  var s = u.current;
                  return (
                    s
                      ? eq(s, n)
                      : (eq(
                          (s = e_(
                            eB(
                              eB(
                                eB({}, _(eB(eB({}, r), {}, { lng: a }))),
                                {},
                                { lng: a },
                                l && { ns: l },
                              ),
                              {},
                              { resources: n },
                            ),
                          ).i18n),
                          n,
                        ),
                        (u.current = s)),
                    s
                  );
                },
                [o, a, l],
              );
            return (
              T(
                function () {
                  c && a && c.changeLanguage(a);
                },
                [c, a],
              ),
              null !== c
                ? eH(P, { i18n: c }, eH(e, r))
                : eH(e, N({ key: a }, r))
            );
          }, e);
        };
    },
    1752: function (e, t, r) {
      e.exports = r(7500);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(9645);
        },
      ]);
    },
    9645: function (e, t, r) {
      "use strict";
      r.r(t);
      var i = r(5893),
        n = r(1752),
        s = r.n(n),
        o = r(1798);
      r(3434),
        (t.default = (0, o.Jc)(function (e) {
          let { Component: t, pageProps: r } = e,
            {
              publicRuntimeConfig: { siteConfig: n },
            } = s()(),
            o = r.lang || n.i18n.defaultLocale;
          return (0, i.jsx)(t, { ...r, lang: o, siteConfig: n });
        }));
    },
    3434: function () {},
    9921: function (e, t) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        i = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        s = r ? Symbol.for("react.fragment") : 60107,
        o = r ? Symbol.for("react.strict_mode") : 60108,
        a = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        g = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        f = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        b = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;
      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case i:
              switch ((e = e.type)) {
                case c:
                case p:
                case s:
                case a:
                case o:
                case g:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case h:
                    case m:
                    case f:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      function O(e) {
        return S(e) === p;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = p),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = i),
        (t.ForwardRef = h),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = f),
        (t.Portal = n),
        (t.Profiler = a),
        (t.StrictMode = o),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return O(e) || S(e) === c;
        }),
        (t.isConcurrentMode = O),
        (t.isContextConsumer = function (e) {
          return S(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return S(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === i;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === h;
        }),
        (t.isFragment = function (e) {
          return S(e) === s;
        }),
        (t.isLazy = function (e) {
          return S(e) === m;
        }),
        (t.isMemo = function (e) {
          return S(e) === f;
        }),
        (t.isPortal = function (e) {
          return S(e) === n;
        }),
        (t.isProfiler = function (e) {
          return S(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === o;
        }),
        (t.isSuspense = function (e) {
          return S(e) === g;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === s ||
            e === p ||
            e === a ||
            e === o ||
            e === g ||
            e === d ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === f ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === h ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = S);
    },
    9864: function (e, t, r) {
      "use strict";
      e.exports = r(9921);
    },
    1739: function (e) {
      e.exports = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      };
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(6840), t(3079);
    }),
      (_N_E = e.O());
  },
]);
