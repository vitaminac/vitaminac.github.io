(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        i = {
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
        return r.isMemo(e) ? o : a[e.$$typeof] || i;
      }
      (a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (a[r.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        g = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (f) {
            var i = h(n);
            i && i !== f && e(t, i, r);
          }
          var o = c(n);
          p && (o = o.concat(p(n)));
          for (var a = l(t), d = l(n), m = 0; m < o.length; ++m) {
            var y = o[m];
            if (!s[y] && !(r && r[y]) && !(d && d[y]) && !(a && a[y])) {
              var b = g(n, y);
              try {
                u(t, y, b);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    1798: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Jc: function () {
          return eN;
        },
        $G: function () {
          return b;
        },
      });
      var i = n(7294);
      n(1739), Object.create(null);
      let s = {};
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        ("string" == typeof t[0] && s[t[0]]) ||
          ("string" == typeof t[0] && (s[t[0]] = new Date()),
          (function () {
            if (console && console.warn) {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                console.warn(...t);
            }
          })(...t));
      }
      let a = (e, t) => () => {
        if (e.isInitialized) t();
        else {
          let n = () => {
            setTimeout(() => {
              e.off("initialized", n);
            }, 0),
              t();
          };
          e.on("initialized", n);
        }
      };
      function l(e, t, n) {
        e.loadNamespaces(t, a(e, n));
      }
      function u(e, t, n, r) {
        "string" == typeof n && (n = [n]),
          n.forEach((t) => {
            0 > e.options.ns.indexOf(t) && e.options.ns.push(t);
          }),
          e.loadLanguages(t, a(e, r));
      }
      let c =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        p = {
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
        g = (e) => p[e],
        h = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(c, g),
        },
        f = (0, i.createContext)();
      class d {
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
      let m = (e, t) => {
        let n = (0, i.useRef)();
        return (
          (0, i.useEffect)(() => {
            n.current = t ? n.current : e;
          }, [e, t]),
          n.current
        );
      };
      function y(e, t, n, r) {
        return e.getFixedT(t, n, r);
      }
      function b(e) {
        var t, n;
        let s =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { i18n: a } = s,
          { i18n: c, defaultNS: p } = (0, i.useContext)(f) || {},
          g = a || c || r;
        if ((g && !g.reportNamespaces && (g.reportNamespaces = new d()), !g)) {
          o(
            "You will need to pass in an i18next instance by using initReactI18next",
          );
          let e = (e, t) =>
              "string" == typeof t
                ? t
                : t && "object" == typeof t && "string" == typeof t.defaultValue
                  ? t.defaultValue
                  : Array.isArray(e)
                    ? e[e.length - 1]
                    : e,
            t = [e, {}, !1];
          return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
        }
        g.options.react &&
          void 0 !== g.options.react.wait &&
          o(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
          );
        let b = { ...h, ...g.options.react, ...s },
          { useSuspense: v, keyPrefix: x } = b,
          S = e || p || (g.options && g.options.defaultNS);
        (S = "string" == typeof S ? [S] : S || ["translation"]),
          g.reportNamespaces.addUsedNamespaces &&
            g.reportNamespaces.addUsedNamespaces(S);
        let O =
            (g.isInitialized || g.initializedStoreOnce) &&
            S.every((e) =>
              (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return t.languages && t.languages.length
                  ? void 0 !== t.options.ignoreJSONStructure
                    ? t.hasLoadedNamespace(e, {
                        lng: n.lng,
                        precheck: (t, r) => {
                          if (
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1 &&
                            t.services.backendConnector.backend &&
                            t.isLanguageChangingTo &&
                            !r(t.isLanguageChangingTo, e)
                          )
                            return !1;
                        },
                      })
                    : (function (e, t) {
                        let n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          r = t.languages[0],
                          i = !!t.options && t.options.fallbackLng,
                          s = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        let o = (e, n) => {
                          let r =
                            t.services.backendConnector.state[`${e}|${n}`];
                          return -1 === r || 2 === r;
                        };
                        return (
                          (!(
                            n.bindI18n &&
                            n.bindI18n.indexOf("languageChanging") > -1
                          ) ||
                            !t.services.backendConnector.backend ||
                            !t.isLanguageChangingTo ||
                            !!o(t.isLanguageChangingTo, e)) &&
                          !!(
                            t.hasResourceBundle(r, e) ||
                            !t.services.backendConnector.backend ||
                            (t.options.resources &&
                              !t.options.partialBundledLanguages) ||
                            (o(r, e) && (!i || o(s, e)))
                          )
                        );
                      })(e, t, n)
                  : (o("i18n.languages were undefined or empty", t.languages),
                    !0);
              })(e, g, b),
            ),
          k =
            ((t = s.lng || null),
            (n = "fallback" === b.nsMode ? S : S[0]),
            (0, i.useCallback)(y(g, t, n, x), [g, t, n, x])),
          w = () => k,
          L = () => y(g, s.lng || null, "fallback" === b.nsMode ? S : S[0], x),
          [P, $] = (0, i.useState)(w),
          N = S.join();
        s.lng && (N = `${s.lng}${N}`);
        let j = m(N),
          C = (0, i.useRef)(!0);
        (0, i.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = b;
          function n() {
            C.current && $(L);
          }
          return (
            (C.current = !0),
            O ||
              v ||
              (s.lng
                ? u(g, s.lng, S, () => {
                    C.current && $(L);
                  })
                : l(g, S, () => {
                    C.current && $(L);
                  })),
            O && j && j !== N && C.current && $(L),
            e && g && g.on(e, n),
            t && g && g.store.on(t, n),
            () => {
              (C.current = !1),
                e && g && e.split(" ").forEach((e) => g.off(e, n)),
                t && g && t.split(" ").forEach((e) => g.store.off(e, n));
            }
          );
        }, [g, N]);
        let R = (0, i.useRef)(!0);
        (0, i.useEffect)(() => {
          C.current && !R.current && $(w), (R.current = !1);
        }, [g, x]);
        let E = [P, g, O];
        if (((E.t = P), (E.i18n = g), (E.ready = O), O || (!O && !v))) return E;
        throw new Promise((e) => {
          s.lng ? u(g, s.lng, S, () => e()) : l(g, S, () => e());
        });
      }
      function v(e) {
        let { i18n: t, defaultNS: n, children: r } = e,
          s = (0, i.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, i.createElement)(f.Provider, { value: s }, r);
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function S(e) {
        return (S =
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
      function O(e, t, n) {
        var r;
        return (
          (r = (function (e, t) {
            if ("object" != S(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != S(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string")),
          (t = "symbol" == S(r) ? r : String(r)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var k = n(8679),
        w = n.n(k);
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function P(e, t) {
        if (e) {
          if ("string" == typeof e) return L(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return L(e, t);
        }
      }
      function $(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                s,
                o,
                a = [],
                l = !0,
                u = !1;
              try {
                if (((s = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = s.call(n)).done) &&
                    (a.push(r.value), a.length !== t);
                    l = !0
                  );
              } catch (e) {
                (u = !0), (i = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw i;
                }
              }
              return a;
            }
          })(e, t) ||
          P(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function N(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++)
              (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var j = {
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
        C = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        R = ["i18n"],
        E = ["i18n"];
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : I(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var F = ["backend", "detection"],
        T = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            n,
            r,
            i = e.i18n,
            s = N(e, R),
            o = j.i18n,
            a = A(A(A(A({}, N(j, E)), s), o), i),
            l = a.defaultNS,
            u = a.lng,
            c = a.localeExtension,
            p = a.localePath,
            g = a.nonExplicitSupportedLngs,
            h = a.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === u) return a;
          if (
            void 0 === a.fallbackLng &&
            ((a.fallbackLng = a.defaultLocale), "default" === a.fallbackLng)
          ) {
            var f = $(h, 1);
            a.fallbackLng = f[0];
          }
          var d =
              null == e || null === (t = e.interpolation) || void 0 === t
                ? void 0
                : t.prefix,
            m =
              null == e || null === (n = e.interpolation) || void 0 === n
                ? void 0
                : n.suffix,
            y = null != d ? d : "{{",
            b = null != m ? m : "}}";
          "string" != typeof (null == e ? void 0 : e.localeStructure) &&
            (d || m) &&
            (a.localeStructure = ""
              .concat(y, "lng")
              .concat(b, "/")
              .concat(y, "ns")
              .concat(b));
          var v = a.fallbackLng,
            x = a.localeStructure;
          if (g) {
            var O = function (e, t) {
              var n = $(t.split("-"), 1)[0];
              return (e[t] = [n]), e;
            };
            if ("string" == typeof v)
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(O, { default: [v] });
            else if (Array.isArray(v))
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(O, { default: v });
            else if ("object" === S(v))
              a.fallbackLng = Object.entries(a.fallbackLng).reduce(function (
                e,
                t,
              ) {
                var n = $(t, 2),
                  r = n[0],
                  i = n[1];
                return (
                  (e[r] = r.includes("-")
                    ? Array.from(
                        new Set(
                          [r.split("-")[0]].concat(
                            (function (e) {
                              if (Array.isArray(e)) return L(e);
                            })(i) ||
                              (function (e) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != e[Symbol.iterator]) ||
                                  null != e["@@iterator"]
                                )
                                  return Array.from(e);
                              })(i) ||
                              P(i) ||
                              (function () {
                                throw TypeError(
                                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                              })(),
                          ),
                        ),
                      )
                    : i),
                  e
                );
              }, v);
            else if ("function" == typeof v)
              throw Error(
                "If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng",
              );
          }
          return (
            (null == e || null === (r = e.use) || void 0 === r
              ? void 0
              : r.some(function (e) {
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
            F.forEach(function (t) {
              e[t] && (a[t] = A(A({}, a[t]), e[t]));
            }),
            a
          );
        };
      let D = {
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
      class V {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || D),
            (this.options = t),
            (this.debug = t.debug);
        }
        log() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
              this.logger[t](e));
        }
        create(e) {
          return new V(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new V(this.logger, e)
          );
        }
      }
      var U = new V();
      class M {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              let n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
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
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          this.observers[e] &&
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let e = 0; e < r; e++) t(...n);
            }),
            this.observers["*"] &&
              Array.from(this.observers["*"].entries()).forEach((t) => {
                let [r, i] = t;
                for (let t = 0; t < i; t++) r.apply(r, [e, ...n]);
              });
        }
      }
      function z() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function K(e) {
        return null == e ? "" : "" + e;
      }
      let _ = /###/g;
      function B(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(_, ".") : e;
        }
        function i() {
          return !e || "string" == typeof e;
        }
        let s = "string" != typeof t ? t : t.split("."),
          o = 0;
        for (; o < s.length - 1; ) {
          if (i()) return {};
          let t = r(s[o]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++o;
        }
        return i() ? {} : { obj: e, k: r(s[o]) };
      }
      function H(e, t, n) {
        let { obj: r, k: i } = B(e, t, Object);
        if (void 0 !== r || 1 === t.length) {
          r[i] = n;
          return;
        }
        let s = t[t.length - 1],
          o = t.slice(0, t.length - 1),
          a = B(e, o, Object);
        for (; void 0 === a.obj && o.length; )
          (s = `${o[o.length - 1]}.${s}`),
            (a = B(e, (o = o.slice(0, o.length - 1)), Object)) &&
              a.obj &&
              void 0 !== a.obj[`${a.k}.${s}`] &&
              (a.obj = void 0);
        a.obj[`${a.k}.${s}`] = n;
      }
      function J(e, t) {
        let { obj: n, k: r } = B(e, t);
        if (n) return n[r];
      }
      function q(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var W = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function Y(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => W[e]) : e;
      }
      class G {
        constructor(e) {
          (this.capacity = e),
            (this.regExpMap = new Map()),
            (this.regExpQueue = []);
        }
        getRegExp(e) {
          let t = this.regExpMap.get(e);
          if (void 0 !== t) return t;
          let n = new RegExp(e);
          return (
            this.regExpQueue.length === this.capacity &&
              this.regExpMap.delete(this.regExpQueue.shift()),
            this.regExpMap.set(e, n),
            this.regExpQueue.push(e),
            n
          );
        }
      }
      let Q = [" ", ",", "?", "!", ";"],
        X = new G(20);
      function Z(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        let r = t.split(n),
          i = e;
        for (let e = 0; e < r.length; ) {
          let t;
          if (!i || "object" != typeof i) return;
          let s = "";
          for (let o = e; o < r.length; ++o)
            if ((o !== e && (s += n), (s += r[o]), void 0 !== (t = i[s]))) {
              if (
                ["string", "number", "boolean"].indexOf(typeof t) > -1 &&
                o < r.length - 1
              )
                continue;
              e += o - e + 1;
              break;
            }
          i = t;
        }
        return i;
      }
      function ee(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class et extends M {
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
        getResource(e, t, n) {
          let r,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            s =
              void 0 !== i.keySeparator
                ? i.keySeparator
                : this.options.keySeparator,
            o =
              void 0 !== i.ignoreJSONStructure
                ? i.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          e.indexOf(".") > -1
            ? (r = e.split("."))
            : ((r = [e, t]),
              n &&
                (Array.isArray(n)
                  ? r.push(...n)
                  : "string" == typeof n && s
                    ? r.push(...n.split(s))
                    : r.push(n)));
          let a = J(this.data, r);
          return (!a &&
            !t &&
            !n &&
            e.indexOf(".") > -1 &&
            ((e = r[0]), (t = r[1]), (n = r.slice(2).join("."))),
          a || !o || "string" != typeof n)
            ? a
            : Z(this.data && this.data[e] && this.data[e][t], n, s);
        }
        addResource(e, t, n, r) {
          let i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : { silent: !1 },
            s =
              void 0 !== i.keySeparator
                ? i.keySeparator
                : this.options.keySeparator,
            o = [e, t];
          n && (o = o.concat(s ? n.split(s) : n)),
            e.indexOf(".") > -1 && ((o = e.split(".")), (r = t), (t = o[1])),
            this.addNamespaces(t),
            H(this.data, o, r),
            i.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (let r in n)
            ("string" == typeof n[r] ||
              "[object Array]" === Object.prototype.toString.apply(n[r])) &&
              this.addResource(e, t, r, n[r], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, i) {
          let s =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1 },
            o = [e, t];
          e.indexOf(".") > -1 &&
            ((o = e.split(".")), (r = n), (n = t), (t = o[1])),
            this.addNamespaces(t);
          let a = J(this.data, o) || {};
          r
            ? (function e(t, n, r) {
                for (let i in n)
                  "__proto__" !== i &&
                    "constructor" !== i &&
                    (i in t
                      ? "string" == typeof t[i] ||
                        t[i] instanceof String ||
                        "string" == typeof n[i] ||
                        n[i] instanceof String
                        ? r && (t[i] = n[i])
                        : e(t[i], n[i], r)
                      : (t[i] = n[i]));
                return t;
              })(a, n, i)
            : (a = { ...a, ...n }),
            H(this.data, o, a),
            s.silent || this.emit("added", e, t, n);
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
      var en = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, i) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, i));
            }),
            t
          );
        },
      };
      let er = {};
      class ei extends M {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
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
            (this.logger = U.create("translator"));
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
          let n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          let r =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            i = t.ns || this.options.defaultNS || [],
            s = n && e.indexOf(n) > -1,
            o =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                let r = Q.filter((e) => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                if (0 === r.length) return !0;
                let i = X.getRegExp(
                    `(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`,
                  ),
                  s = !i.test(e);
                if (!s) {
                  let t = e.indexOf(n);
                  t > 0 && !i.test(e.substring(0, t)) && (s = !0);
                }
                return s;
              })(e, n, r);
          if (s && !o) {
            let t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: i };
            let s = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(s[0]) > -1)) &&
              (i = s.shift()),
              (e = s.join(r));
          }
          return "string" == typeof i && (i = [i]), { key: e, namespaces: i };
        }
        translate(e, t, n) {
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
          let r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            i =
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
              return r
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
            return r
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
            g = (c && c.usedKey) || s,
            h = (c && c.exactUsedKey) || s,
            f = Object.prototype.toString.apply(p),
            d =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y =
              "string" != typeof p &&
              "boolean" != typeof p &&
              "number" != typeof p;
          if (
            m &&
            p &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(f) &&
            !("string" == typeof d && "[object Array]" === f)
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!",
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(g, p, { ...t, ns: o })
                : `key '${s} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (i) {
              let e = "[object Array]" === f,
                n = e ? [] : {},
                r = e ? h : g;
              for (let e in p)
                if (Object.prototype.hasOwnProperty.call(p, e)) {
                  let s = `${r}${i}${e}`;
                  (n[e] = this.translate(s, { ...t, joinArrays: !1, ns: o })),
                    n[e] === s && (n[e] = p[e]);
                }
              p = n;
            }
          } else if (m && "string" == typeof d && "[object Array]" === f)
            (p = p.join(d)) && (p = this.extendTranslation(p, e, t, n));
          else {
            let r = !1,
              o = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              g = ei.hasDefaultValue(t),
              h = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              f =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              d =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (d && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${h}`] ||
                t[`defaultValue${f}`] ||
                t.defaultValue;
            !this.isValidLookup(p) && g && ((r = !0), (p = m)),
              this.isValidLookup(p) || ((o = !0), (p = s));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                o
                  ? void 0
                  : p,
              b = g && m !== p && this.options.updateMissing;
            if (o || r || b) {
              if (
                (this.logger.log(
                  b ? "updateKey" : "missingKey",
                  l,
                  a,
                  s,
                  b ? m : p,
                ),
                i)
              ) {
                let e = this.resolve(s, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                  );
              }
              let e = [],
                n = this.languageUtils.getFallbackCodes(
                  this.options.fallbackLng,
                  t.lng || this.language,
                );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language,
                    ))
                  : e.push(t.lng || this.language);
              let r = (e, n, r) => {
                let i = g && r !== p ? r : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, n, i, b, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, n, i, b, t),
                  this.emit("missingKey", e, a, n, p);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      d &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], s + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, s, m));
            }
            (p = this.extendTranslation(p, e, t, c, n)),
              o &&
                p === s &&
                this.options.appendNamespaceToMissingKey &&
                (p = `${a}:${s}`),
              (o || r) &&
                this.options.parseMissingKeyHandler &&
                (p =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${s}`
                          : s,
                        r ? p : void 0,
                      )
                    : this.options.parseMissingKeyHandler(p));
          }
          return r
            ? ((c.res = p), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : p;
        }
        extendTranslation(e, t, n, r, i) {
          var s = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r },
            );
          else if (!n.skipInterpolation) {
            let o;
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            let a =
              "string" == typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            if (a) {
              let t = e.match(this.interpolator.nestingRegexp);
              o = t && t.length;
            }
            let l = n.replace && "string" != typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (l = { ...this.options.interpolation.defaultVariables, ...l }),
              (e = this.interpolator.interpolate(
                e,
                l,
                n.lng || this.language,
                n,
              )),
              a)
            ) {
              let t = e.match(this.interpolator.nestingRegexp);
              o < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = Array(e), o = 0;
                      o < e;
                      o++
                    )
                      r[o] = arguments[o];
                    return i && i[0] === r[0] && !n.context
                      ? (s.logger.warn(
                          `It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`,
                        ),
                        null)
                      : s.translate(...r, t);
                  },
                  n,
                )),
              n.interpolation && this.interpolator.reset();
          }
          let o = n.postProcess || this.options.postProcess,
            a = "string" == typeof o ? [o] : o;
          return (
            null != e &&
              a &&
              a.length &&
              !1 !== n.applyPostProcessor &&
              (e = en.handle(
                a,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this,
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            i,
            s,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" == typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              let a = this.extractFromKey(e, o),
                l = a.key;
              n = l;
              let u = a.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              let c = void 0 !== o.count && "string" != typeof o.count,
                p =
                  c &&
                  !o.ordinal &&
                  0 === o.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                g =
                  void 0 !== o.context &&
                  ("string" == typeof o.context ||
                    "number" == typeof o.context) &&
                  "" !== o.context,
                h = o.lngs
                  ? o.lngs
                  : this.languageUtils.toResolveHierarchy(
                      o.lng || this.language,
                      o.fallbackLng,
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((s = e),
                  !er[`${h[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(s) &&
                    ((er[`${h[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${h.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                    )),
                  h.forEach((n) => {
                    let s;
                    if (this.isValidLookup(t)) return;
                    i = n;
                    let a = [l];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(a, l, n, e, o);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, o.count, o));
                      let t = `${this.options.pluralSeparator}zero`,
                        r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                      if (
                        (c &&
                          (a.push(l + e),
                          o.ordinal &&
                            0 === e.indexOf(r) &&
                            a.push(
                              l + e.replace(r, this.options.pluralSeparator),
                            ),
                          p && a.push(l + t)),
                        g)
                      ) {
                        let n = `${l}${this.options.contextSeparator}${o.context}`;
                        a.push(n),
                          c &&
                            (a.push(n + e),
                            o.ordinal &&
                              0 === e.indexOf(r) &&
                              a.push(
                                n + e.replace(r, this.options.pluralSeparator),
                              ),
                            p && a.push(n + t));
                      }
                    }
                    for (; (s = a.pop()); )
                      this.isValidLookup(t) ||
                        ((r = s), (t = this.getResource(n, e, s, o)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: i, usedNS: s }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.replace && "string" != typeof e.replace,
            n = t ? e.replace : e;
          if (
            (t && void 0 !== e.count && (n.count = e.count),
            this.options.interpolation.defaultVariables &&
              (n = { ...this.options.interpolation.defaultVariables, ...n }),
            !t)
          )
            for (let e of ((n = { ...n }),
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
              delete n[e];
          return n;
        }
        static hasDefaultValue(e) {
          let t = "defaultValue";
          for (let n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, t.length) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function es(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class eo {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = U.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = ee(e)) || 0 > e.indexOf("-")) return null;
          let t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(), "x" === t[t.length - 1].toLowerCase())
              ? null
              : this.formatLanguageCode(t.join("-"));
        }
        getLanguagePartFromCode(e) {
          if (!(e = ee(e)) || 0 > e.indexOf("-")) return e;
          let t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" == typeof e && e.indexOf("-") > -1) {
            let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
              n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                  ? ((n[0] = n[0].toLowerCase()),
                    (n[1] = n[1].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = es(n[1].toLowerCase())))
                  : 3 === n.length &&
                    ((n[0] = n[0].toLowerCase()),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] &&
                      2 === n[2].length &&
                      (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = es(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 &&
                      (n[2] = es(n[2].toLowerCase()))),
              n.join("-")
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
                let n = this.formatLanguageCode(e);
                (!this.options.supportedLngs || this.isSupportedCode(n)) &&
                  (t = n);
              }),
              !t &&
                this.options.supportedLngs &&
                e.forEach((e) => {
                  if (t) return;
                  let n = this.getLanguagePartFromCode(e);
                  if (this.isSupportedCode(n)) return (t = n);
                  t = this.options.supportedLngs.find((e) => {
                    if (
                      e === n ||
                      (!(0 > e.indexOf("-") && 0 > n.indexOf("-")) &&
                        0 === e.indexOf(n))
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
            "string" == typeof e && (e = [e]),
            "[object Array]" === Object.prototype.toString.apply(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            r = [],
            i = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      `rejecting language code not found in supportedLngs: ${e}`,
                    ));
            };
          return (
            "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  i(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  i(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  i(this.getLanguagePartFromCode(e)))
              : "string" == typeof e && i(this.formatLanguageCode(e)),
            n.forEach((e) => {
              0 > r.indexOf(e) && i(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let ea = [
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
        el = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          5: function (e) {
            return Number(
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
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3,
            );
          },
        },
        eu = ["v1", "v2", "v3"],
        ec = ["v4"],
        ep = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class eg {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = U.create("pluralResolver")),
            (!this.options.compatibilityJSON ||
              ec.includes(this.options.compatibilityJSON)) &&
              ("undefined" == typeof Intl || !Intl.PluralRules) &&
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
              )),
            (this.rules = (function () {
              let e = {};
              return (
                ea.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: el[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(ee("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
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
            n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => `${t}${e}`);
        }
        getSuffixes(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => ep[e] - ep[t])
                  .map(
                    (e) =>
                      `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`,
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}`
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn(`no plural rule found for: ${e}`), "");
        }
        getSuffixRetroCompatible(e, t) {
          let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
            r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          let i = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" == typeof r
                ? `_plural_${r.toString()}`
                : i()
            : "v2" === this.options.compatibilityJSON ||
                (this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0])
              ? i()
              : this.options.prepend && n.toString()
                ? this.options.prepend + n.toString()
                : n.toString();
        }
        shouldUseIntlApi() {
          return !eu.includes(this.options.compatibilityJSON);
        }
      }
      function eh(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          i =
            !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          s = (function (e, t, n) {
            let r = J(e, n);
            return void 0 !== r ? r : J(t, n);
          })(e, t, n);
        return (
          !s &&
            i &&
            "string" == typeof n &&
            void 0 === (s = Z(e, n, r)) &&
            (s = Z(t, n, r)),
          s
        );
      }
      class ef {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = U.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          let t = e.interpolation;
          (this.escape = void 0 !== t.escape ? t.escape : Y),
            (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
            (this.useRawValueToEscape =
              void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
            (this.prefix = t.prefix ? q(t.prefix) : t.prefixEscaped || "{{"),
            (this.suffix = t.suffix ? q(t.suffix) : t.suffixEscaped || "}}"),
            (this.formatSeparator = t.formatSeparator
              ? t.formatSeparator
              : t.formatSeparator || ","),
            (this.unescapePrefix = t.unescapeSuffix
              ? ""
              : t.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : t.unescapeSuffix || ""),
            (this.nestingPrefix = t.nestingPrefix
              ? q(t.nestingPrefix)
              : t.nestingPrefixEscaped || q("$t(")),
            (this.nestingSuffix = t.nestingSuffix
              ? q(t.nestingSuffix)
              : t.nestingSuffixEscaped || q(")")),
            (this.nestingOptionsSeparator = t.nestingOptionsSeparator
              ? t.nestingOptionsSeparator
              : t.nestingOptionsSeparator || ","),
            (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
            (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
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
        interpolate(e, t, n, r) {
          let i, s, o;
          let a =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function l(e) {
            return e.replace(/\$/g, "$$$$");
          }
          let u = (e) => {
            if (0 > e.indexOf(this.formatSeparator)) {
              let i = eh(
                t,
                a,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure,
              );
              return this.alwaysFormat
                ? this.format(i, void 0, n, { ...r, ...t, interpolationkey: e })
                : i;
            }
            let i = e.split(this.formatSeparator),
              s = i.shift().trim(),
              o = i.join(this.formatSeparator).trim();
            return this.format(
              eh(
                t,
                a,
                s,
                this.options.keySeparator,
                this.options.ignoreJSONStructure,
              ),
              o,
              n,
              { ...r, ...t, interpolationkey: s },
            );
          };
          this.resetRegExp();
          let c =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            p =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => l(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? l(this.escape(e)) : l(e)),
              },
            ].forEach((t) => {
              for (o = 0; (i = t.regex.exec(e)); ) {
                let n = i[1].trim();
                if (void 0 === (s = u(n))) {
                  if ("function" == typeof c) {
                    let t = c(e, i, r);
                    s = "string" == typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    s = "";
                  else if (p) {
                    s = i[0];
                    continue;
                  } else
                    this.logger.warn(
                      `missed to pass in variable ${n} for interpolating ${e}`,
                    ),
                      (s = "");
                } else
                  "string" == typeof s ||
                    this.useRawValueToEscape ||
                    (s = K(s));
                let a = t.safeValue(s);
                if (
                  ((e = e.replace(i[0], a)),
                  p
                    ? ((t.regex.lastIndex += s.length),
                      (t.regex.lastIndex -= i[0].length))
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
          let n,
            r,
            i,
            s =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function o(e, t) {
            let n = this.nestingOptionsSeparator;
            if (0 > e.indexOf(n)) return e;
            let r = e.split(RegExp(`${n}[ ]*{`)),
              s = `{${r[1]}`;
            e = r[0];
            let o = (s = this.interpolate(s, i)).match(/'/g),
              a = s.match(/"/g);
            ((o && o.length % 2 == 0 && !a) || a.length % 2 != 0) &&
              (s = s.replace(/'/g, '"'));
            try {
              (i = JSON.parse(s)), t && (i = { ...t, ...i });
            } catch (t) {
              return (
                this.logger.warn(
                  `failed parsing options string in nesting for key ${e}`,
                  t,
                ),
                `${e}${n}${s}`
              );
            }
            return delete i.defaultValue, e;
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let a = [];
            ((i =
              (i = { ...s }).replace && "string" != typeof i.replace
                ? i.replace
                : i).applyPostProcessor = !1),
              delete i.defaultValue;
            let l = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              let e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (a = e), (l = !0);
            }
            if (
              (r = t(o.call(this, n[1].trim(), i), i)) &&
              n[0] === e &&
              "string" != typeof r
            )
              return r;
            "string" != typeof r && (r = K(r)),
              r ||
                (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                (r = "")),
              l &&
                (r = a.reduce(
                  (e, t) =>
                    this.format(e, t, s.lng, {
                      ...s,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim(),
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function ed(e) {
        let t = {};
        return function (n, r, i) {
          let s = r + JSON.stringify(i),
            o = t[s];
          return o || ((o = e(ee(r), i)), (t[s] = o)), o(n);
        };
      }
      class em {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = U.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: ed((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: ed((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: ed((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: ed((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: ed((e, t) => {
                let n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { interpolation: {} },
            n = t.interpolation;
          this.formatSeparator = n.formatSeparator
            ? n.formatSeparator
            : n.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = ed(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            let { formatName: i, formatOptions: s } = (function (e) {
              let t = e.toLowerCase().trim(),
                n = {};
              if (e.indexOf("(") > -1) {
                let r = e.split("(");
                t = r[0].toLowerCase().trim();
                let i = r[1].substring(0, r[1].length - 1);
                "currency" === t && 0 > i.indexOf(":")
                  ? n.currency || (n.currency = i.trim())
                  : "relativetime" === t && 0 > i.indexOf(":")
                    ? n.range || (n.range = i.trim())
                    : i.split(";").forEach((e) => {
                        if (!e) return;
                        let [t, ...r] = e.split(":"),
                          i = r
                            .join(":")
                            .trim()
                            .replace(/^'+|'+$/g, "");
                        n[t.trim()] || (n[t.trim()] = i),
                          "false" === i && (n[t.trim()] = !1),
                          "true" === i && (n[t.trim()] = !0),
                          isNaN(i) || (n[t.trim()] = parseInt(i, 10));
                      });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[i]) {
              let t = e;
              try {
                let o =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  a = o.locale || o.lng || r.locale || r.lng || n;
                t = this.formats[i](e, a, { ...s, ...r, ...o });
              } catch (e) {
                this.logger.warn(e);
              }
              return t;
            }
            return this.logger.warn(`there was no format function for ${i}`), e;
          }, e);
        }
      }
      class ey extends M {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = U.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          let i = {},
            s = {},
            o = {},
            a = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                let o = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[o] = 2)
                  : this.state[o] < 0 ||
                    (1 === this.state[o]
                      ? void 0 === s[o] && (s[o] = !0)
                      : ((this.state[o] = 1),
                        (r = !1),
                        void 0 === s[o] && (s[o] = !0),
                        void 0 === i[o] && (i[o] = !0),
                        void 0 === a[t] && (a[t] = !0)));
              }),
                r || (o[e] = !0);
            }),
            (Object.keys(i).length || Object.keys(s).length) &&
              this.queue.push({
                pending: s,
                pendingCount: Object.keys(s).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(i),
              pending: Object.keys(s),
              toLoadLanguages: Object.keys(o),
              toLoadNamespaces: Object.keys(a),
            }
          );
        }
        loaded(e, t, n) {
          let r = e.split("|"),
            i = r[0],
            s = r[1];
          t && this.emit("failedLoading", i, s, t),
            n && this.store.addResourceBundle(i, s, n),
            (this.state[e] = t ? -1 : 2);
          let o = {};
          this.queue.forEach((n) => {
            (function (e, t, n, r) {
              let { obj: i, k: s } = B(e, t, Object);
              (i[s] = i[s] || []), i[s].push(n);
            })(n.loaded, [i], s),
              void 0 !== n.pending[e] &&
                (delete n.pending[e], n.pendingCount--),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  o[e] || (o[e] = {});
                  let t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === o[e][t] && (o[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", o),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            s = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return s(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: i,
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
              if (o && a && r < this.maxRetries) {
                setTimeout(() => {
                  this.read.call(this, e, t, n, r + 1, 2 * i, s);
                }, i);
                return;
              }
              s(o, a);
            },
            a = this.backend[n].bind(this.backend);
          if (2 === a.length) {
            try {
              let n = a(e, t);
              n && "function" == typeof n.then
                ? n.then((e) => o(null, e)).catch(o)
                : o(null, n);
            } catch (e) {
              o(e);
            }
            return;
          }
          return a(e, t, o);
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources.",
              ),
              r && r()
            );
          "string" == typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" == typeof t && (t = [t]);
          let i = this.queueLoad(e, t, n, r);
          if (!i.toLoad.length) return i.pending.length || r(), null;
          i.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = e.split("|"),
            r = n[0],
            i = n[1];
          this.read(r, i, "read", void 0, void 0, (n, s) => {
            n &&
              this.logger.warn(
                `${t}loading namespace ${i} for language ${r} failed`,
                n,
              ),
              !n &&
                s &&
                this.logger.log(
                  `${t}loaded namespace ${i} for language ${r}`,
                  s,
                ),
              this.loaded(e, n, s);
          });
        }
        saveMissing(e, t, n, r, i) {
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
              `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
            );
            return;
          }
          if (null != n && "" !== n) {
            if (this.backend && this.backend.create) {
              let a = { ...s, isUpdate: i },
                l = this.backend.create.bind(this.backend);
              if (l.length < 6)
                try {
                  let i;
                  (i = 5 === l.length ? l(e, t, n, r, a) : l(e, t, n, r)) &&
                  "function" == typeof i.then
                    ? i.then((e) => o(null, e)).catch(o)
                    : o(null, i);
                } catch (e) {
                  o(e);
                }
              else l(e, t, n, r, o, a);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function eb() {
        return {
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
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" == typeof e[1] && (t = e[1]),
              "string" == typeof e[1] && (t.defaultValue = e[1]),
              "string" == typeof e[2] && (t.tDescription = e[2]),
              "object" == typeof e[2] || "object" == typeof e[3])
            ) {
              let n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
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
        };
      }
      function ev(e) {
        return (
          "string" == typeof e.ns && (e.ns = [e.ns]),
          "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf("cimode") &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function ex() {}
      class eS extends M {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (
            (super(),
            (this.options = ev(e)),
            (this.services = {}),
            (this.logger = U),
            (this.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(
                (t) => {
                  "function" == typeof e[t] && (e[t] = e[t].bind(e));
                },
              );
            })(this),
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
            n = arguments.length > 1 ? arguments[1] : void 0;
          "function" == typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" == typeof t.ns
                ? (t.defaultNS = t.ns)
                : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
          let r = eb();
          function i(e) {
            return e ? ("function" == typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...ev(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? U.init(i(this.modules.logger), this.options)
              : U.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = em);
            let n = new eo(this.options);
            this.store = new et(this.options.resources, this.options);
            let s = this.services;
            (s.logger = U),
              (s.resourceStore = this.store),
              (s.languageUtils = n),
              (s.pluralResolver = new eg(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              t &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    r.interpolation.format) &&
                ((s.formatter = i(t)),
                s.formatter.init(s, this.options),
                (this.options.interpolation.format = s.formatter.format.bind(
                  s.formatter,
                ))),
              (s.interpolator = new ef(this.options)),
              (s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (s.backendConnector = new ey(
                i(this.modules.backend),
                s.resourceStore,
                s,
                this.options,
              )),
              s.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((s.languageDetector = i(this.modules.languageDetector)),
                s.languageDetector.init &&
                  s.languageDetector.init(
                    s,
                    this.options.detection,
                    this.options,
                  )),
              this.modules.i18nFormat &&
                ((s.i18nFormat = i(this.modules.i18nFormat)),
                s.i18nFormat.init && s.i18nFormat.init(this)),
              (this.translator = new ei(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                  i < n;
                  i++
                )
                  r[i - 1] = arguments[i];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = ex),
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
          let s = z(),
            o = () => {
              let e = (e, t) => {
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
                  n(e, t);
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
                : ex,
            n = t,
            r = "string" == typeof e ? e : this.language;
          if (
            ("function" == typeof e && (n = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              r &&
              "cimode" === r.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return n();
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
            r
              ? t(r)
              : this.services.languageUtils
                  .getFallbackCodes(this.options.fallbackLng)
                  .forEach((e) => t(e)),
              this.options.preload && this.options.preload.forEach((e) => t(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  n(e);
              });
          } else n(null);
        }
        reloadResources(e, t, n) {
          let r = z();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = ex),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
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
            "postProcessor" === e.type && en.addPostProcessor(e),
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
          var n = this;
          this.isLanguageChangingTo = e;
          let r = z();
          this.emit("languageChanging", e);
          let i = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            s = (e, s) => {
              s
                ? (i(s),
                  this.translator.changeLanguage(s),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", s),
                  this.logger.log("languageChanged", s))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            o = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              let n =
                "string" == typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || i(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  s(e, n);
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
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          let i = function (e, t) {
            let s, o;
            if ("object" != typeof t) {
              for (
                var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2;
                u < a;
                u++
              )
                l[u - 2] = arguments[u];
              s = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else s = { ...t };
            (s.lng = s.lng || i.lng),
              (s.lngs = s.lngs || i.lngs),
              (s.ns = s.ns || i.ns),
              (s.keyPrefix = s.keyPrefix || n || i.keyPrefix);
            let c = r.options.keySeparator || ".";
            return (
              (o =
                s.keyPrefix && Array.isArray(e)
                  ? e.map((e) => `${s.keyPrefix}${c}${e}`)
                  : s.keyPrefix
                    ? `${s.keyPrefix}${c}${e}`
                    : e),
              r.t(o, s)
            );
          };
          return (
            "string" == typeof e ? (i.lng = e) : (i.lngs = e),
            (i.ns = t),
            (i.keyPrefix = n),
            i
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
          let n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            i = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          let s = (e, t) => {
            let n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            let e = t.precheck(this, s);
            if (void 0 !== e) return e;
          }
          return !!(
            this.hasResourceBundle(n, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (s(n, e) && (!r || s(i, e)))
          );
        }
        loadNamespaces(e, t) {
          let n = z();
          return this.options.ns
            ? ("string" == typeof e && (e = [e]),
              e.forEach((e) => {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          let n = z();
          "string" == typeof e && (e = [e]);
          let r = this.options.preload || [],
            i = e.filter((e) => 0 > r.indexOf(e));
          return i.length
            ? ((this.options.preload = r.concat(i)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
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
                  new eo(eb())
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
          return new eS(e, t);
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ex,
            n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          let r = { ...this.options, ...e, isClone: !0 },
            i = new eS(r);
          return (
            (void 0 !== e.debug || void 0 !== e.prefix) &&
              (i.logger = i.logger.clone(e)),
            ["store", "services", "language"].forEach((e) => {
              i[e] = this[e];
            }),
            (i.services = { ...this.services }),
            (i.services.utils = {
              hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            n &&
              ((i.store = new et(this.store.data, r)),
              (i.services.resourceStore = i.store)),
            (i.translator = new ei(i.services, r)),
            i.translator.on("*", function (e) {
              for (
                var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              i.emit(e, ...n);
            }),
            i.init(r, t),
            (i.translator.options = r),
            (i.translator.backendConnector.services.utils = {
              hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
            }),
            i
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
      let eO = eS.createInstance();
      (eO.createInstance = eS.createInstance),
        eO.createInstance,
        eO.dir,
        eO.init,
        eO.loadResources,
        eO.reloadResources,
        eO.use,
        eO.changeLanguage,
        eO.getFixedT,
        eO.t,
        eO.exists,
        eO.setDefaultNamespace,
        eO.hasLoadedNamespace,
        eO.loadNamespaces,
        eO.loadLanguages;
      var ek = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = eO.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(eO.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e);
                  }),
                "function" == typeof e.onPreInitI18next &&
                  e.onPreInitI18next(r),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          );
        },
        ew = i.createElement;
      function eL(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eL(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e$ = function (e, t) {
          if (t && e.isInitialized)
            for (var n = 0, r = Object.keys(t); n < r.length; n++)
              for (
                var i = r[n], s = 0, o = Object.keys(t[i]);
                s < o.length;
                s++
              ) {
                var a,
                  l = o[s];
                (null != e &&
                  null !== (a = e.store) &&
                  void 0 !== a &&
                  a.data &&
                  e.store.data[i] &&
                  e.store.data[i][l]) ||
                  e.addResourceBundle(i, l, t[i][l], !0, !0);
              }
        },
        eN = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return w()(function (n) {
            var r,
              s,
              o = (n.pageProps || {})._nextI18Next,
              a =
                null !== (r = null == o ? void 0 : o.initialLocale) &&
                void 0 !== r
                  ? r
                  : null == n || null === (s = n.router) || void 0 === s
                    ? void 0
                    : s.locale,
              l = null == o ? void 0 : o.ns,
              u = (0, i.useRef)(null),
              c = (0, i.useMemo)(
                function () {
                  if (!o && !t) return null;
                  var e,
                    n = null != t ? t : null == o ? void 0 : o.userConfig;
                  if (!n)
                    throw Error(
                      "appWithTranslation was called without a next-i18next config",
                    );
                  if (!(null != n && n.i18n))
                    throw Error(
                      "appWithTranslation was called without config.i18n",
                    );
                  if (
                    !(
                      null != n &&
                      null !== (e = n.i18n) &&
                      void 0 !== e &&
                      e.defaultLocale
                    )
                  )
                    throw Error(
                      "config.i18n does not include a defaultLocale property",
                    );
                  var r = (o || {}).initialI18nStore,
                    i = null != t && t.resources ? t.resources : r;
                  a || (a = n.i18n.defaultLocale);
                  var s = u.current;
                  return (
                    s
                      ? e$(s, i)
                      : (e$(
                          (s = ek(
                            eP(
                              eP({}, T(eP(eP({}, n), {}, { lng: a }))),
                              {},
                              { lng: a, ns: l, resources: i },
                            ),
                          ).i18n),
                          i,
                        ),
                        (u.current = s)),
                    s
                  );
                },
                [o, a, l],
              );
            return (
              C(
                function () {
                  c && a && c.changeLanguage(a);
                },
                [c, a],
              ),
              null !== c
                ? ew(v, { i18n: c }, ew(e, n))
                : ew(e, x({ key: a }, n))
            );
          }, e);
        };
    },
    1752: function (e, t, n) {
      e.exports = n(7500);
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(9645);
        },
      ]);
    },
    9645: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(5893),
        i = n(1752),
        s = n.n(i),
        o = n(1798);
      n(3434),
        (t.default = (0, o.Jc)(function (e) {
          let { Component: t, pageProps: n } = e,
            {
              publicRuntimeConfig: { siteConfig: i },
            } = s()(),
            o = n.lang || i.i18n.defaultLocale;
          return (0, r.jsx)(t, { ...n, lang: o, siteConfig: i });
        }));
    },
    3434: function () {},
    9921: function (e, t) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        s = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        a = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        p = n ? Symbol.for("react.concurrent_mode") : 60111,
        g = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        f = n ? Symbol.for("react.suspense_list") : 60120,
        d = n ? Symbol.for("react.memo") : 60115,
        m = n ? Symbol.for("react.lazy") : 60116,
        y = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case p:
                case s:
                case a:
                case o:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case g:
                    case m:
                    case d:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
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
        (t.Element = r),
        (t.ForwardRef = g),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = d),
        (t.Portal = i),
        (t.Profiler = a),
        (t.StrictMode = o),
        (t.Suspense = h),
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
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return S(e) === g;
        }),
        (t.isFragment = function (e) {
          return S(e) === s;
        }),
        (t.isLazy = function (e) {
          return S(e) === m;
        }),
        (t.isMemo = function (e) {
          return S(e) === d;
        }),
        (t.isPortal = function (e) {
          return S(e) === i;
        }),
        (t.isProfiler = function (e) {
          return S(e) === a;
        }),
        (t.isStrictMode = function (e) {
          return S(e) === o;
        }),
        (t.isSuspense = function (e) {
          return S(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === s ||
            e === p ||
            e === a ||
            e === o ||
            e === h ||
            e === f ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === d ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === g ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === x ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = S);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
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
