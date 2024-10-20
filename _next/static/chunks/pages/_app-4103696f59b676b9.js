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
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        g = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (g) {
            var i = d(n);
            i && i !== g && e(t, i, r);
          }
          var o = c(n);
          f && (o = o.concat(f(n)));
          for (var a = l(t), h = l(n), m = 0; m < o.length; ++m) {
            var y = o[m];
            if (!s[y] && !(r && r[y]) && !(h && h[y]) && !(a && a[y])) {
              var b = p(n, y);
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
          return eL;
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
        p = (e) => f[e],
        d = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(c, p),
        },
        g = (0, i.createContext)();
      class h {
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
          { i18n: c, defaultNS: f } = (0, i.useContext)(g) || {},
          p = a || c || r;
        if ((p && !p.reportNamespaces && (p.reportNamespaces = new h()), !p)) {
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
        p.options.react &&
          void 0 !== p.options.react.wait &&
          o(
            "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
          );
        let b = { ...d, ...p.options.react, ...s },
          { useSuspense: v, keyPrefix: x } = b,
          S = e || f || (p.options && p.options.defaultNS);
        (S = "string" == typeof S ? [S] : S || ["translation"]),
          p.reportNamespaces.addUsedNamespaces &&
            p.reportNamespaces.addUsedNamespaces(S);
        let w =
            (p.isInitialized || p.initializedStoreOnce) &&
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
              })(e, p, b),
            ),
          j =
            ((t = s.lng || null),
            (n = "fallback" === b.nsMode ? S : S[0]),
            (0, i.useCallback)(y(p, t, n, x), [p, t, n, x])),
          k = () => j,
          O = () => y(p, s.lng || null, "fallback" === b.nsMode ? S : S[0], x),
          [N, P] = (0, i.useState)(k),
          L = S.join();
        s.lng && (L = `${s.lng}${L}`);
        let C = m(L),
          R = (0, i.useRef)(!0);
        (0, i.useEffect)(() => {
          let { bindI18n: e, bindI18nStore: t } = b;
          function n() {
            R.current && P(O);
          }
          return (
            (R.current = !0),
            w ||
              v ||
              (s.lng
                ? u(p, s.lng, S, () => {
                    R.current && P(O);
                  })
                : l(p, S, () => {
                    R.current && P(O);
                  })),
            w && C && C !== L && R.current && P(O),
            e && p && p.on(e, n),
            t && p && p.store.on(t, n),
            () => {
              (R.current = !1),
                e && p && e.split(" ").forEach((e) => p.off(e, n)),
                t && p && t.split(" ").forEach((e) => p.store.off(e, n));
            }
          );
        }, [p, L]);
        let E = (0, i.useRef)(!0);
        (0, i.useEffect)(() => {
          R.current && !E.current && P(k), (E.current = !1);
        }, [p, x]);
        let $ = [N, p, w];
        if ((($.t = N), ($.i18n = p), ($.ready = w), w || (!w && !v))) return $;
        throw new Promise((e) => {
          s.lng ? u(p, s.lng, S, () => e()) : l(p, S, () => e());
        });
      }
      function v(e) {
        let { i18n: t, defaultNS: n, children: r } = e,
          s = (0, i.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, i.createElement)(g.Provider, { value: s }, r);
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
      function w(e, t, n) {
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
      var j = n(8679),
        k = n.n(j);
      function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function N(e, t) {
        if (e) {
          if ("string" == typeof e) return O(e, t);
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
            return O(e, t);
        }
      }
      function P(e, t) {
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
          N(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function L(e, t) {
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
      var C = {
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
        R = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        E = ["i18n"],
        $ = ["i18n"];
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
                w(e, t, n[t]);
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
      var _ = ["backend", "detection"],
        T = function (e) {
          if ("string" != typeof (null == e ? void 0 : e.lng))
            throw Error("config.lng was not passed into createConfig");
          var t,
            n,
            r,
            i = e.i18n,
            s = L(e, E),
            o = C.i18n,
            a = A(A(A(A({}, L(C, $)), s), o), i),
            l = a.defaultNS,
            u = a.lng,
            c = a.localeExtension,
            f = a.localePath,
            p = a.nonExplicitSupportedLngs,
            d = a.locales.filter(function (e) {
              return "default" !== e;
            });
          if ("cimode" === u) return a;
          if (
            void 0 === a.fallbackLng &&
            ((a.fallbackLng = a.defaultLocale), "default" === a.fallbackLng)
          ) {
            var g = P(d, 1);
            a.fallbackLng = g[0];
          }
          var h =
              null == e || null === (t = e.interpolation) || void 0 === t
                ? void 0
                : t.prefix,
            m =
              null == e || null === (n = e.interpolation) || void 0 === n
                ? void 0
                : n.suffix,
            y = null != h ? h : "{{",
            b = null != m ? m : "}}";
          "string" != typeof (null == e ? void 0 : e.localeStructure) &&
            (h || m) &&
            (a.localeStructure = ""
              .concat(y, "lng")
              .concat(b, "/")
              .concat(y, "ns")
              .concat(b));
          var v = a.fallbackLng,
            x = a.localeStructure;
          if (p) {
            var w = function (e, t) {
              var n = P(t.split("-"), 1)[0];
              return (e[t] = [n]), e;
            };
            if ("string" == typeof v)
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(w, { default: [v] });
            else if (Array.isArray(v))
              a.fallbackLng = a.locales
                .filter(function (e) {
                  return e.includes("-");
                })
                .reduce(w, { default: v });
            else if ("object" === S(v))
              a.fallbackLng = Object.entries(a.fallbackLng).reduce(function (
                e,
                t,
              ) {
                var n = P(t, 2),
                  r = n[0],
                  i = n[1];
                return (
                  (e[r] = r.includes("-")
                    ? Array.from(
                        new Set(
                          [r.split("-")[0]].concat(
                            (function (e) {
                              if (Array.isArray(e)) return O(e);
                            })(i) ||
                              (function (e) {
                                if (
                                  ("undefined" != typeof Symbol &&
                                    null != e[Symbol.iterator]) ||
                                  null != e["@@iterator"]
                                )
                                  return Array.from(e);
                              })(i) ||
                              N(i) ||
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
              ("string" == typeof f
                ? (a.backend = {
                    addPath: "".concat(f, "/").concat(x, ".missing.").concat(c),
                    loadPath: "".concat(f, "/").concat(x, ".").concat(c),
                  })
                : "function" != typeof f ||
                  (a.backend = {
                    addPath: function (e, t) {
                      return f(e, t, !0);
                    },
                    loadPath: function (e, t) {
                      return f(e, t, !1);
                    },
                  })),
            "string" == typeof a.ns || Array.isArray(a.ns) || (a.ns = [l]),
            _.forEach(function (t) {
              e[t] && (a[t] = A(A({}, a[t]), e[t]));
            }),
            a
          );
        };
      let F = {
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
      class M {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = t.prefix || "i18next:"),
            (this.logger = e || F),
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
          return new M(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new M(this.logger, e)
          );
        }
      }
      var D = new M();
      class z {
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
      function U() {
        let e, t;
        let n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function V(e) {
        return null == e ? "" : "" + e;
      }
      let K = /###/g;
      function B(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(K, ".") : e;
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
      function G(e) {
        return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => W[e]) : e;
      }
      class Y {
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
        Z = new Y(20);
      function X(e, t) {
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
      class et extends z {
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
            : X(this.data && this.data[e] && this.data[e][t], n, s);
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
      class ei extends z {
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
            (this.logger = D.create("translator"));
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
                let i = Z.getRegExp(
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
            f = c && c.res,
            p = (c && c.usedKey) || s,
            d = (c && c.exactUsedKey) || s,
            g = Object.prototype.toString.apply(f),
            h =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y =
              "string" != typeof f &&
              "boolean" != typeof f &&
              "number" != typeof f;
          if (
            m &&
            f &&
            y &&
            0 >
              [
                "[object Number]",
                "[object Function]",
                "[object RegExp]",
              ].indexOf(g) &&
            !("string" == typeof h && "[object Array]" === g)
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!",
                );
              let e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(p, f, { ...t, ns: o })
                : `key '${s} (${this.language})' returned an object instead of string.`;
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (i) {
              let e = "[object Array]" === g,
                n = e ? [] : {},
                r = e ? d : p;
              for (let e in f)
                if (Object.prototype.hasOwnProperty.call(f, e)) {
                  let s = `${r}${i}${e}`;
                  (n[e] = this.translate(s, { ...t, joinArrays: !1, ns: o })),
                    n[e] === s && (n[e] = f[e]);
                }
              f = n;
            }
          } else if (m && "string" == typeof h && "[object Array]" === g)
            (f = f.join(h)) && (f = this.extendTranslation(f, e, t, n));
          else {
            let r = !1,
              o = !1,
              u = void 0 !== t.count && "string" != typeof t.count,
              p = ei.hasDefaultValue(t),
              d = u ? this.pluralResolver.getSuffix(l, t.count, t) : "",
              g =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
                  : "",
              h =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (h && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
                t[`defaultValue${d}`] ||
                t[`defaultValue${g}`] ||
                t.defaultValue;
            !this.isValidLookup(f) && p && ((r = !0), (f = m)),
              this.isValidLookup(f) || ((o = !0), (f = s));
            let y =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                o
                  ? void 0
                  : f,
              b = p && m !== f && this.options.updateMissing;
            if (o || r || b) {
              if (
                (this.logger.log(
                  b ? "updateKey" : "missingKey",
                  l,
                  a,
                  s,
                  b ? m : f,
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
                let i = p && r !== f ? r : y;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, a, n, i, b, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, a, n, i, b, t),
                  this.emit("missingKey", e, a, n, f);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      let n = this.pluralResolver.getSuffixes(e, t);
                      h &&
                        t[`defaultValue${this.options.pluralSeparator}zero`] &&
                        0 > n.indexOf(`${this.options.pluralSeparator}zero`) &&
                        n.push(`${this.options.pluralSeparator}zero`),
                        n.forEach((n) => {
                          r([e], s + n, t[`defaultValue${n}`] || m);
                        });
                    })
                  : r(e, s, m));
            }
            (f = this.extendTranslation(f, e, t, c, n)),
              o &&
                f === s &&
                this.options.appendNamespaceToMissingKey &&
                (f = `${a}:${s}`),
              (o || r) &&
                this.options.parseMissingKeyHandler &&
                (f =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? `${a}:${s}`
                          : s,
                        r ? f : void 0,
                      )
                    : this.options.parseMissingKeyHandler(f));
          }
          return r
            ? ((c.res = f), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : f;
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
                f =
                  c &&
                  !o.ordinal &&
                  0 === o.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                p =
                  void 0 !== o.context &&
                  ("string" == typeof o.context ||
                    "number" == typeof o.context) &&
                  "" !== o.context,
                d = o.lngs
                  ? o.lngs
                  : this.languageUtils.toResolveHierarchy(
                      o.lng || this.language,
                      o.fallbackLng,
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((s = e),
                  !er[`${d[0]}-${e}`] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(s) &&
                    ((er[`${d[0]}-${e}`] = !0),
                    this.logger.warn(
                      `key "${n}" for languages "${d.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                    )),
                  d.forEach((n) => {
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
                          f && a.push(l + t)),
                        p)
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
                            f && a.push(n + t));
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
            (this.logger = D.create("languageUtils"));
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
        ef = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class ep {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = D.create("pluralResolver")),
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
                  .pluralCategories.sort((e, t) => ef[e] - ef[t])
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
      function ed(e, t, n) {
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
            void 0 === (s = X(e, n, r)) &&
            (s = X(t, n, r)),
          s
        );
      }
      class eg {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = D.create("interpolator")),
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
          (this.escape = void 0 !== t.escape ? t.escape : G),
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
              let i = ed(
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
              ed(
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
            f =
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
                  else if (f) {
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
                    (s = V(s));
                let a = t.safeValue(s);
                if (
                  ((e = e.replace(i[0], a)),
                  f
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
            "string" != typeof r && (r = V(r)),
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
      function eh(e) {
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
          (this.logger = D.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: eh((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: eh((e, t) => {
                let n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: eh((e, t) => {
                let n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: eh((e, t) => {
                let n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: eh((e, t) => {
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
          this.formats[e.toLowerCase().trim()] = eh(t);
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
      class ey extends z {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = D.create("backendConnector")),
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
      class eS extends z {
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
            (this.logger = D),
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
              ? D.init(i(this.modules.logger), this.options)
              : D.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" != typeof Intl && (t = em);
            let n = new eo(this.options);
            this.store = new et(this.options.resources, this.options);
            let s = this.services;
            (s.logger = D),
              (s.resourceStore = this.store),
              (s.languageUtils = n),
              (s.pluralResolver = new ep(n, {
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
              (s.interpolator = new eg(this.options)),
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
          let s = U(),
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
          let r = U();
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
          let r = U();
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
          let n = U();
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
          let n = U();
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
      let ew = eS.createInstance();
      (ew.createInstance = eS.createInstance),
        ew.createInstance,
        ew.dir,
        ew.init,
        ew.loadResources,
        ew.reloadResources,
        ew.use,
        ew.changeLanguage,
        ew.getFixedT,
        ew.t,
        ew.exists,
        ew.setDefaultNamespace,
        ew.hasLoadedNamespace,
        ew.loadNamespaces,
        ew.loadLanguages;
      var ej = function (e) {
          void 0 === e.ns && (e.ns = []);
          var t,
            n,
            r = ew.createInstance(e);
          return (
            r.isInitialized
              ? (t = Promise.resolve(ew.t))
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
        ek = i.createElement;
      function eO(e, t) {
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
      function eN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eO(Object(n), !0).forEach(function (t) {
                w(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eO(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eP = function (e, t) {
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
        eL = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return k()(function (n) {
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
                      ? eP(s, i)
                      : (eP(
                          (s = ej(
                            eN(
                              eN({}, T(eN(eN({}, n), {}, { lng: a }))),
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
              R(
                function () {
                  c && a && c.changeLanguage(a);
                },
                [c, a],
              ),
              null !== c
                ? ek(v, { i18n: c }, ek(e, n))
                : ek(e, x({ key: a }, n))
            );
          }, e);
        };
    },
    6840: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6679);
        },
      ]);
    },
    261: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return a;
        },
      });
      var r = n(5893),
        i = n(5675),
        s = n.n(i);
      let o = (e) => {
        let { src: t } = e;
        return t;
      };
      function a(e) {
        let { alt: t, src: n, width: i, height: a, className: l, ...u } = e;
        return (0, r.jsx)(s(), {
          src: n,
          loader: o,
          alt: t || "image",
          placeholder: "blur",
          sizes: "responsive",
          unoptimized: !0,
          width: i,
          height: a,
          className: l,
          ...u,
        });
      }
    },
    8199: function (e, t) {
      "use strict";
      var n, r, i, s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ACTION_FAST_REFRESH: function () {
            return f;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return p;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          PrefetchCacheEntryStatus: function () {
            return r;
          },
          PrefetchKind: function () {
            return n;
          },
          isThenable: function () {
            return d;
          },
        });
      let o = "refresh",
        a = "navigate",
        l = "restore",
        u = "server-patch",
        c = "prefetch",
        f = "fast-refresh",
        p = "server-action";
      function d(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((i = n || (n = {})).AUTO = "auto"),
        (i.FULL = "full"),
        (i.TEMPORARY = "temporary"),
        ((s = r || (r = {})).fresh = "fresh"),
        (s.reusable = "reusable"),
        (s.expired = "expired"),
        (s.stale = "stale"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7195: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8337),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4080: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let r = n(8754),
        i = n(1757),
        s = n(5893),
        o = i._(n(7294)),
        a = r._(n(3935)),
        l = r._(n(3867)),
        u = n(5283),
        c = n(6594),
        f = n(3945);
      n(3179);
      let p = n(1928),
        d = r._(n(3872)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "custom",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function h(e, t, n, r, i, s, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function m(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, o.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: f,
          fetchPriority: p,
          placeholder: d,
          loading: g,
          unoptimized: y,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: x,
          setBlurComplete: S,
          setShowAltText: w,
          sizesInput: j,
          onLoad: k,
          onError: O,
          ...N
        } = e;
        return (0, s.jsx)("img", {
          ...N,
          ...m(p),
          loading: g,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: f,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (O && (e.src = e.src), e.complete && h(e, d, v, x, S, y, j));
            },
            [n, d, v, x, S, O, y, j, t],
          ),
          onLoad: (e) => {
            h(e.currentTarget, d, v, x, S, y, j);
          },
          onError: (e) => {
            w(!0), "empty" !== d && S(!0), O && O(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...m(n.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(n.src, r), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes,
              ),
            });
      }
      let v = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(p.RouterContext),
          r = (0, o.useContext)(f.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            let e = g || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: l } = e,
          h = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          h.current = a;
        }, [a]);
        let m = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          m.current = l;
        }, [l]);
        let [v, x] = (0, o.useState)(!1),
          [S, w] = (0, o.useState)(!1),
          { props: j, meta: k } = (0, u.getImgProps)(e, {
            defaultLoader: d.default,
            imgConf: i,
            blurComplete: v,
            showAltText: S,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y, {
              ...j,
              unoptimized: k.unoptimized,
              placeholder: k.placeholder,
              fill: k.fill,
              onLoadRef: h,
              onLoadingCompleteRef: m,
              setBlurComplete: x,
              setShowAltText: w,
              sizesInput: e.sizes,
              ref: t,
            }),
            k.priority
              ? (0, s.jsx)(b, { isAppRouter: !n, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8342: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let r = n(8754),
        i = n(5893),
        s = r._(n(7294)),
        o = n(6075),
        a = n(3955),
        l = n(8041),
        u = n(9903),
        c = n(5490),
        f = n(1928),
        p = n(257),
        d = n(4229),
        g = n(7195),
        h = n(9470),
        m = n(8199),
        y = new Set();
      function b(e, t, n, r, i, s) {
        if (s || (0, a.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let i =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (y.has(i)) return;
            y.add(i);
          }
          (async () => (s ? e.prefetch(t, i) : e.prefetch(t, n, r)))().catch(
            (e) => {},
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let x = s.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: l,
          as: y,
          children: x,
          prefetch: S = null,
          passHref: w,
          replace: j,
          shallow: k,
          scroll: O,
          locale: N,
          onClick: P,
          onMouseEnter: L,
          onTouchStart: C,
          legacyBehavior: R = !1,
          ...E
        } = e;
        (n = x),
          R &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n }));
        let $ = s.default.useContext(f.RouterContext),
          I = s.default.useContext(p.AppRouterContext),
          A = null != $ ? $ : I,
          _ = !$,
          T = !1 !== S,
          F = null === S ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
          { href: M, as: D } = s.default.useMemo(() => {
            if (!$) {
              let e = v(l);
              return { href: e, as: y ? v(y) : e };
            }
            let [e, t] = (0, o.resolveHref)($, l, !0);
            return { href: e, as: y ? (0, o.resolveHref)($, y) : t || e };
          }, [$, l, y]),
          z = s.default.useRef(M),
          U = s.default.useRef(D);
        R && (r = s.default.Children.only(n));
        let V = R ? r && "object" == typeof r && r.ref : t,
          [K, B, H] = (0, d.useIntersection)({ rootMargin: "200px" }),
          J = s.default.useCallback(
            (e) => {
              (U.current !== D || z.current !== M) &&
                (H(), (U.current = D), (z.current = M)),
                K(e),
                V &&
                  ("function" == typeof V
                    ? V(e)
                    : "object" == typeof V && (V.current = e));
            },
            [D, V, M, H, K],
          );
        s.default.useEffect(() => {
          A && B && T && b(A, M, D, { locale: N }, { kind: F }, _);
        }, [D, M, B, N, T, null == $ ? void 0 : $.locale, A, _, F]);
        let q = {
          ref: J,
          onClick(e) {
            R || "function" != typeof P || P(e),
              R &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              A &&
                !e.defaultPrevented &&
                (function (e, t, n, r, i, o, l, u, c) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let p = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](n, r, {
                          shallow: o,
                          locale: u,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? s.default.startTransition(p) : p();
                })(e, A, M, D, j, k, O, N, _);
          },
          onMouseEnter(e) {
            R || "function" != typeof L || L(e),
              R &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              A &&
                (T || !_) &&
                b(
                  A,
                  M,
                  D,
                  { locale: N, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  _,
                );
          },
          onTouchStart: function (e) {
            R || "function" != typeof C || C(e),
              R &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              A &&
                (T || !_) &&
                b(
                  A,
                  M,
                  D,
                  { locale: N, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  _,
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(D)) q.href = D;
        else if (!R || w || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== N ? N : null == $ ? void 0 : $.locale,
            t =
              (null == $ ? void 0 : $.isLocaleDomain) &&
              (0, g.getDomainLocale)(
                D,
                e,
                null == $ ? void 0 : $.locales,
                null == $ ? void 0 : $.domainLocales,
              );
          q.href =
            t ||
            (0, h.addBasePath)(
              (0, c.addLocale)(D, e, null == $ ? void 0 : $.defaultLocale),
            );
        }
        return R
          ? s.default.cloneElement(r, q)
          : (0, i.jsx)("a", { ...E, ...q, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4229: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(7294),
        i = n(4474),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          u = l || !s,
          [c, f] = (0, r.useState)(!1),
          p = (0, r.useRef)(null),
          d = (0, r.useCallback)((e) => {
            p.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (s) {
              if (u || c) return;
              let e = p.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: i,
                    elements: s,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = a.find(
                        (e) => e.root === n.root && e.margin === n.margin,
                      );
                    if (r && (t = o.get(r))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: i,
                      }),
                      a.push(n),
                      o.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    s.set(e, t),
                    i.observe(e),
                    function () {
                      if ((s.delete(e), i.unobserve(e), 0 === s.size)) {
                        i.disconnect(), o.delete(r);
                        let e = a.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin,
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => f(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, n, t, c, p.current]),
          [
            d,
            c,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5283: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(3179);
      let r = n(6630),
        i = n(6594);
      function s(e) {
        return void 0 !== e.default;
      }
      function o(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          l,
          u,
          {
            src: c,
            sizes: f,
            unoptimized: p = !1,
            priority: d = !1,
            loading: g,
            className: h,
            quality: m,
            width: y,
            height: b,
            fill: v = !1,
            style: x,
            overrideSrc: S,
            onLoad: w,
            onLoadingComplete: j,
            placeholder: k = "empty",
            blurDataURL: O,
            fetchPriority: N,
            decoding: P = "async",
            layout: L,
            objectFit: C,
            objectPosition: R,
            lazyBoundary: E,
            lazyRoot: $,
            ...I
          } = e,
          { imgConf: A, showAltText: _, blurComplete: T, defaultLoader: F } = t,
          M = A || i.imageConfigDefault;
        if ("allSizes" in M) a = M;
        else {
          let e = [...M.deviceSizes, ...M.imageSizes].sort((e, t) => e - t),
            t = M.deviceSizes.sort((e, t) => e - t);
          a = { ...M, allSizes: e, deviceSizes: t };
        }
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          );
        let D = I.loader || F;
        delete I.loader, delete I.srcSet;
        let z = "__next_img_default" in D;
        if (z) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          let e = D;
          D = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (L) {
          "fill" === L && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[L];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[L];
          t && !f && (f = t);
        }
        let U = "",
          V = o(y),
          K = o(b);
        if ("object" == typeof (n = c) && (s(n) || void 0 !== n.src)) {
          let e = s(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e),
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e),
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (O = O || e.blurDataURL),
            (U = e.src),
            !v)
          ) {
            if (V || K) {
              if (V && !K) {
                let t = V / e.width;
                K = Math.round(e.height * t);
              } else if (!V && K) {
                let t = K / e.height;
                V = Math.round(e.width * t);
              }
            } else (V = e.width), (K = e.height);
          }
        }
        let B = !d && ("lazy" === g || void 0 === g);
        (!(c = "string" == typeof c ? c : U) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((p = !0), (B = !1)),
          a.unoptimized && (p = !0),
          z && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (p = !0),
          d && (N = "high");
        let H = o(m),
          J = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: R,
                }
              : {},
            _ ? {} : { color: "transparent" },
            x,
          ),
          q =
            T || "empty" === k
              ? null
              : "blur" === k
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, r.getImageBlurSvg)({
                    widthInt: V,
                    heightInt: K,
                    blurWidth: l,
                    blurHeight: u,
                    blurDataURL: O || "",
                    objectFit: J.objectFit,
                  }) +
                  '")'
                : 'url("' + k + '")',
          W = q
            ? {
                backgroundSize: J.objectFit || "cover",
                backgroundPosition: J.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: s,
              sizes: o,
              loader: a,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1],
                          ),
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, o),
              c = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (e, r) =>
                    a({ config: t, src: n, quality: s, width: e }) +
                    " " +
                    ("w" === u ? e : r + 1) +
                    u,
                )
                .join(", "),
              src: a({ config: t, src: n, quality: s, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: p,
            width: V,
            quality: H,
            sizes: f,
            loader: D,
          });
        return {
          props: {
            ...I,
            loading: B ? "lazy" : g,
            fetchPriority: N,
            width: V,
            height: K,
            decoding: P,
            className: h,
            style: { ...J, ...W },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: S || G.src,
          },
          meta: { unoptimized: p, priority: d, placeholder: k, fill: v },
        };
      }
    },
    6630: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: s,
            objectFit: o,
          } = e,
          a = r ? 40 * r : t,
          l = i ? 40 * i : n,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
              ? "xMidYMid"
              : "cover" === o
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    6210: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(8754),
        i = n(5283),
        s = n(4080),
        o = r._(n(3872));
      function a(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "custom",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = s.Image;
    },
    3872: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    6679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var r = n(5893),
        i = n(1798),
        s = n(4298),
        o = n.n(s);
      function a() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("link", {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
              integrity:
                "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)(o(), {
              id: "bootstrap-popper-js-cdn",
              src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js",
              integrity:
                "sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)(o(), {
              id: "bootstrap-js-cdn",
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js",
              integrity:
                "sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13",
              crossOrigin: "anonymous",
            }),
          ],
        });
      }
      n(7294);
      var l = n(1664),
        u = n.n(l);
      function c(e) {
        return (0, r.jsx)("div", {
          className: "row justify-content-center",
          children: (0, r.jsxs)("ul", {
            className: "list-inline text-center tw-text-stone-700",
            children: [
              (0, r.jsx)("li", {
                className: "list-inline-item ",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://www.linkedin.com/in/".concat(e.linkedin),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fab fa-linkedin-in fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "mailto:".concat(
                    e.email,
                    "?subject=From my blog&body=Hi,I found this website very useful",
                  ),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fas fa-envelope fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://github.com/".concat(e.github),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fab fa-github fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://gist.github.com/".concat(e.github),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className:
                          "fab fa-github-square fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://gitlab.com/".concat(e.gitlab),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fab fa-gitlab fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://www.kaggle.com/".concat(e.kaggle),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fab fa-kaggle fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://leetcode.com/".concat(e.leetcode),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className: "fas fa-code fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("li", {
                className: "list-inline-item",
                children: (0, r.jsx)(u(), {
                  className: "tw-text-stone-700",
                  target: "_blank",
                  href: "https://stackoverflow.com/users/".concat(
                    e.stackoverflow,
                  ),
                  children: (0, r.jsxs)("span", {
                    className: "fa-stack fa-lg",
                    children: [
                      (0, r.jsx)("i", {
                        className: "fa fa-circle fa-stack-2x",
                      }),
                      (0, r.jsx)("i", {
                        className:
                          "fab fa-stack-overflow fa-stack-1x fa-inverse",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var f = n(261),
        p = {
          src: "/_next/static/media/QR.b48259ea.png",
          height: 624,
          width: 1710,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AKrStMHRxZXRpW3NilHIekDGcw/CYyjCZwC/z8LTwcan0LKu37rI48+228C838WZ16oApdSxvdPCi86doNmvx+LNu9vDx+LOn9muCIkyTVum2sgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        };
      function d(e) {
        return (0, r.jsxs)("footer", {
          className: "tw-text-center tw-text-gray-400",
          children: [
            (0, r.jsx)(c, { ...e }),
            (0, r.jsx)(f.t, {
              src: p,
              alt: "QR",
              className:
                "tw-mx-auto tw-max-w-full lg:tw-max-w-xl tw-object-contain tw-object-center",
            }),
            (0, r.jsx)("p", {
              children: "Copyright \xa9 "
                .concat(e.siteTitle, " ")
                .concat(new Date().getFullYear()),
            }),
          ],
        });
      }
      var g = n(3967),
        h = n.n(g),
        m = n(6985),
        y = n.n(m);
      function b(e) {
        let { t } = (0, i.$G)("navbar");
        return (0, r.jsx)("nav", {
          className: h()(
            "navbar",
            "navbar-expand-md",
            "navbar-light",
            "sticky-top",
            "tw-bg-white/95",
            "tw-shadow",
            "tw-shadow-black/25",
            y().navBar,
          ),
          children: (0, r.jsxs)("div", {
            className: "container-fluid px-md-5",
            children: [
              (0, r.jsx)("div", {
                className: h()(
                  "navbar-brand",
                  "animate__animated",
                  "animate__pulse",
                ),
                children: (0, r.jsx)("span", {
                  className:
                    "tw-rounded tw-bg-black tw-p-1 tw-text-xl tw-font-medium tw-text-white",
                  children: e.siteTitle,
                }),
              }),
              (0, r.jsx)("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: (0, r.jsx)("span", {
                  className: "navbar-toggler-icon",
                }),
              }),
              (0, r.jsx)("div", {
                className: "navbar-collapse collapse",
                id: "navbarSupportedContent",
                children: (0, r.jsxs)("ul", {
                  className: "navbar-nav mb-2 mb-lg-0 ms-auto",
                  children: [
                    (0, r.jsx)("li", {
                      className: "nav-item",
                      children: (0, r.jsx)(u(), {
                        className: "nav-link active",
                        "aria-current": "page",
                        href: "/posts/langs/".concat(e.lang),
                        children: t("Home"),
                      }),
                    }),
                    (0, r.jsx)("li", {
                      className: "nav-item",
                      children: (0, r.jsx)(u(), {
                        className: "nav-link",
                        "aria-current": "page",
                        href: "/posts/langs/".concat(e.lang, "/tags"),
                        children: t("Tags"),
                      }),
                    }),
                    (0, r.jsxs)("li", {
                      className: "nav-item dropdown",
                      children: [
                        (0, r.jsx)("a", {
                          className: "nav-link dropdown-toggle",
                          href: "#",
                          role: "button",
                          "data-bs-toggle": "dropdown",
                          "aria-expanded": "false",
                          children: t("Language"),
                        }),
                        (0, r.jsx)("ul", {
                          className: "dropdown-menu dropdown-menu-end",
                          children: e.supportedLanguages.map((e) =>
                            (0, r.jsx)(
                              "li",
                              {
                                children: (0, r.jsx)(u(), {
                                  className: "dropdown-item",
                                  href: "/posts/langs/".concat(e),
                                  children: t(e),
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var v = JSON.parse(
        '{"siteAuthor":"Gao","siteTitle":"Gao\'s blog","siteDescription":"Gao\'s blog","siteAuthorDescription":"It is the time you have wasted for your rose that makes your rose so important.","defaultLanguage":"en","email":"dalao1002@gmail.com","linkedin":"shuxig","github":"vitaminac","gitlab":"vitaminac","kaggle":"dalao1002","leetcode":"dalao1002","stackoverflow":"9980245","disqusUsername":"blog-vnwybnwkiz"}',
      );
      n(3434);
      var x = (0, i.Jc)(function (e) {
        var t, n;
        let { Component: i, pageProps: s } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a, {}),
            (0, r.jsx)(b, {
              siteTitle: v.siteTitle,
              lang: s.lang,
              supportedLanguages:
                (null === (n = s._nextI18Next) || void 0 === n
                  ? void 0
                  : null === (t = n.userConfig) || void 0 === t
                    ? void 0
                    : t.i18n.locales) || [],
            }),
            (0, r.jsx)(i, { siteConfig: v, ...s }),
            (0, r.jsx)(d, { ...v }),
          ],
        });
      });
    },
    6985: function (e) {
      e.exports = { navBar: "NavigationBar_navBar__fSiIq" };
    },
    3434: function () {},
    5675: function (e, t, n) {
      e.exports = n(6210);
    },
    1664: function (e, t, n) {
      e.exports = n(8342);
    },
    4298: function (e, t, n) {
      e.exports = n(3381);
    },
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
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        d = n ? Symbol.for("react.suspense") : 60113,
        g = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
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
                case f:
                case s:
                case a:
                case o:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case m:
                    case h:
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
      function w(e) {
        return S(e) === f;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = s),
        (t.Lazy = m),
        (t.Memo = h),
        (t.Portal = i),
        (t.Profiler = a),
        (t.StrictMode = o),
        (t.Suspense = d),
        (t.isAsyncMode = function (e) {
          return w(e) || S(e) === c;
        }),
        (t.isConcurrentMode = w),
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
          return S(e) === p;
        }),
        (t.isFragment = function (e) {
          return S(e) === s;
        }),
        (t.isLazy = function (e) {
          return S(e) === m;
        }),
        (t.isMemo = function (e) {
          return S(e) === h;
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
          return S(e) === d;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === s ||
            e === f ||
            e === a ||
            e === o ||
            e === d ||
            e === g ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === m ||
                e.$$typeof === h ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === p ||
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
    3967: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = s(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return i.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) r.call(e, n) && e[n] && (t = s(t, n));
                  return t;
                })(n),
              ));
          }
          return e;
        }
        function s(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (n = function () {
                return i;
              }.apply(t, [])) && (e.exports = n);
      })();
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
