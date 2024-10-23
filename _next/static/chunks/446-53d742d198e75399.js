(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [446],
  {
    2449: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CommentCount = void 0);
      var r = u(n(7294)),
        o = u(n(5697)),
        i = n(6674),
        a = n(7990);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
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
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var f = (0, i.debounce)(
          function () {
            window.DISQUSWIDGETS &&
              window.DISQUSWIDGETS.getCount({ reset: !0 });
          },
          300,
          !1,
        ),
        h = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && c(e, t);
          })(u, e);
          var t,
            n,
            o =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = d(u);
                return (
                  (e = t
                    ? Reflect.construct(n, arguments, d(this).constructor)
                    : n.apply(this, arguments)),
                  e && ("object" === l(e) || "function" == typeof e)
                    ? e
                    : (function (e) {
                        if (void 0 === e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return e;
                      })(this)
                );
              });
          function u() {
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, u),
              o.apply(this, arguments)
            );
          }
          return (
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadInstance();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return (
                    this.props !== e && (0, i.shallowComparison)(this.props, e)
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.shortname !== e.shortname && this.cleanInstance(),
                    this.loadInstance();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.cleanInstance();
                },
              },
              {
                key: "loadInstance",
                value: function () {
                  var e = window.document;
                  e.getElementById(a.COMMENT_COUNT_SCRIPT_ID)
                    ? f()
                    : (0, i.insertScript)(
                        "https://".concat(
                          this.props.shortname,
                          ".disqus.com/count.js",
                        ),
                        a.COMMENT_COUNT_SCRIPT_ID,
                        e.body,
                      );
                },
              },
              {
                key: "cleanInstance",
                value: function () {
                  var e = window.document;
                  (0, i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID, e.body),
                    (window.DISQUSWIDGETS = void 0),
                    (0, i.removeResources)();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = (e.shortname, e.config),
                    n = e.children,
                    o = e.className,
                    i = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                e,
                                n,
                              ) &&
                              (o[n] = e[n]);
                      }
                      return o;
                    })(e, ["shortname", "config", "children", "className"]);
                  return r.default.createElement(
                    "span",
                    s({}, i, {
                      className: ""
                        .concat(a.COMMENT_COUNT_CLASS)
                        .concat(o ? " ".concat(o) : ""),
                      "data-disqus-identifier": t.identifier,
                      "data-disqus-url": t.url,
                    }),
                    n,
                  );
                },
              },
            ]),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(u.prototype, n),
            u
          );
        })(r.default.Component);
      (t.CommentCount = h),
        (h.propTypes = {
          shortname: o.default.string.isRequired,
          config: o.default.shape({
            identifier: o.default.string,
            url: o.default.string,
            title: o.default.string,
          }).isRequired,
          className: o.default.string,
          children: o.default.node,
        });
    },
    5890: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CommentEmbed = void 0);
      var r = a(n(7294)),
        o = a(n(5697)),
        i = n(7990);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        return (u =
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
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && s(e, t);
        })(i, e);
        var t,
          n,
          o =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = c(i);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, c(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === u(e) || "function" == typeof e)
                  ? e
                  : (function (e) {
                      if (void 0 === e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(this)
              );
            });
        function i() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, i),
            o.apply(this, arguments)
          );
        }
        return (
          (n = [
            {
              key: "getSrc",
              value: function () {
                var e = Number(this.props.commentId).toString(36),
                  t = this.props.showParentComment ? "1" : "0",
                  n = this.props.showMedia ? "1" : "0";
                return "https://embed.disqus.com/p/"
                  .concat(e, "?p=")
                  .concat(t, "&m=")
                  .concat(n);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.width,
                  n = e.height,
                  o =
                    (e.commentId,
                    e.showMedia,
                    e.showParentComment,
                    (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                e,
                                n,
                              ) &&
                              (o[n] = e[n]);
                      }
                      return o;
                    })(e, [
                      "width",
                      "height",
                      "commentId",
                      "showMedia",
                      "showParentComment",
                    ]));
                return r.default.createElement(
                  "iframe",
                  l({}, o, {
                    src: this.getSrc(),
                    width: t,
                    height: n,
                    seamless: "seamless",
                    scrolling: "no",
                    frameBorder: "0",
                  }),
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(i.prototype, n),
          i
        );
      })(r.default.Component);
      (t.CommentEmbed = d),
        (d.defaultProps = {
          showMedia: !0,
          showParentComment: !0,
          width: i.COMMENT_EMBED_WIDTH,
          height: i.COMMENT_EMBED_HEIGHT,
        }),
        (d.propTypes = {
          commentId: o.default.string.isRequired,
          showMedia: o.default.bool,
          showParentComment: o.default.bool,
          width: o.default.number,
          height: o.default.number,
          className: o.default.string,
        });
    },
    4811: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DiscussionEmbed = void 0);
      var r = u(n(7294)),
        o = u(n(5697)),
        i = n(6674),
        a = n(7990);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
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
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var f = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && c(e, t);
        })(u, e);
        var t,
          n,
          o =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = d(u);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, d(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === l(e) || "function" == typeof e)
                  ? e
                  : (function (e) {
                      if (void 0 === e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(this)
              );
            });
        function u() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, u),
            o.apply(this, arguments)
          );
        }
        return (
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                "undefined" != typeof window &&
                  window.disqus_shortname &&
                  window.disqus_shortname !== this.props.shortname &&
                  this.cleanInstance(),
                  this.loadInstance();
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  this.props !== e && (0, i.shallowComparison)(this.props, e)
                );
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.props.shortname !== e.shortname && this.cleanInstance(),
                  this.loadInstance();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.cleanInstance();
              },
            },
            {
              key: "loadInstance",
              value: function () {
                var e = window.document;
                window && window.DISQUS && e.getElementById(a.EMBED_SCRIPT_ID)
                  ? window.DISQUS.reset({
                      reload: !0,
                      config: this.getDisqusConfig(this.props.config),
                    })
                  : ((window.disqus_config = this.getDisqusConfig(
                      this.props.config,
                    )),
                    (window.disqus_shortname = this.props.shortname),
                    (0, i.insertScript)(
                      "https://".concat(
                        this.props.shortname,
                        ".disqus.com/embed.js",
                      ),
                      a.EMBED_SCRIPT_ID,
                      e.body,
                    ));
              },
            },
            {
              key: "cleanInstance",
              value: function () {
                var e = window.document;
                (0, i.removeScript)(a.EMBED_SCRIPT_ID, e.body),
                  window && window.DISQUS && window.DISQUS.reset({});
                try {
                  delete window.DISQUS;
                } catch (e) {
                  window.DISQUS = void 0;
                }
                var t = e.getElementById(a.THREAD_ID);
                if (t) for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                (0, i.removeResources)();
              },
            },
            {
              key: "getDisqusConfig",
              value: function (e) {
                return function () {
                  var t = this;
                  (this.page.identifier = e.identifier),
                    (this.page.url = e.url),
                    (this.page.title = e.title),
                    (this.page.category_id = e.categoryID),
                    (this.page.remote_auth_s3 = e.remoteAuthS3),
                    (this.page.api_key = e.apiKey),
                    e.sso && (this.sso = e.sso),
                    e.language && (this.language = e.language),
                    a.CALLBACKS.forEach(function (n) {
                      t.callbacks[n] = [e[n]];
                    });
                };
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t =
                    (e.shortname,
                    e.config,
                    (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                e,
                                n,
                              ) &&
                              (o[n] = e[n]);
                      }
                      return o;
                    })(e, ["shortname", "config"]));
                return r.default.createElement(
                  "div",
                  s({}, t, { id: a.THREAD_ID }),
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(u.prototype, n),
          u
        );
      })(r.default.Component);
      (t.DiscussionEmbed = f),
        (f.propTypes = {
          shortname: o.default.string.isRequired,
          config: o.default.shape({
            identifier: o.default.string,
            url: o.default.string,
            title: o.default.string,
            language: o.default.string,
            categoryID: o.default.string,
            remoteAuthS3: o.default.string,
            apiKey: o.default.string,
            preData: o.default.func,
            preInit: o.default.func,
            onInit: o.default.func,
            onReady: o.default.func,
            afterRender: o.default.func,
            preReset: o.default.func,
            onIdentify: o.default.func,
            beforeComment: o.default.func,
            onNewComment: o.default.func,
            onPaginate: o.default.func,
            sso: o.default.shape({
              name: o.default.string,
              button: o.default.string,
              icon: o.default.string,
              url: o.default.string,
              logout: o.default.string,
              profile_url: o.default.string,
              width: o.default.string,
              height: o.default.string,
            }),
          }).isRequired,
        });
    },
    4573: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Recommendations = void 0);
      var r = u(n(7294)),
        o = u(n(5697)),
        i = n(6674),
        a = n(7990);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e) {
        return (l =
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
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        return (d = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var f = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && c(e, t);
        })(u, e);
        var t,
          n,
          o =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = d(u);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, d(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === l(e) || "function" == typeof e)
                  ? e
                  : (function (e) {
                      if (void 0 === e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return e;
                    })(this)
              );
            });
        function u() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, u),
            o.apply(this, arguments)
          );
        }
        return (
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.loadInstance();
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (
                  this.props !== e && (0, i.shallowComparison)(this.props, e)
                );
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.loadInstance();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.cleanInstance();
              },
            },
            {
              key: "getDisqusConfig",
              value: function (e) {
                return function () {
                  (this.page.identifier = e.identifier),
                    (this.page.url = e.url),
                    (this.page.title = e.title),
                    (this.language = e.language);
                };
              },
            },
            {
              key: "loadInstance",
              value: function () {
                "undefined" != typeof window &&
                  window.document &&
                  ((window.disqus_config = this.getDisqusConfig(
                    this.props.config,
                  )),
                  window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)
                    ? this.reloadInstance()
                    : (0, i.insertScript)(
                        "https://".concat(
                          this.props.shortname,
                          ".disqus.com/recommendations.js",
                        ),
                        a.RECOMMENDATIONS_SCRIPT_ID,
                        window.document.body,
                      ));
              },
            },
            {
              key: "reloadInstance",
              value: function () {
                window &&
                  window.DISQUS_RECOMMENDATIONS &&
                  window.DISQUS_RECOMMENDATIONS.reset({ reload: !0 });
              },
            },
            {
              key: "cleanInstance",
              value: function () {
                (0, i.removeScript)(
                  a.RECOMMENDATIONS_SCRIPT_ID,
                  window.document.body,
                );
                try {
                  delete window.DISQUS_RECOMMENDATIONS;
                } catch (e) {
                  window.DISQUS_RECOMMENDATIONS = void 0;
                }
                var e = window.document.getElementById(a.RECOMMENDATIONS_ID);
                if (e) for (; e.hasChildNodes(); ) e.removeChild(e.firstChild);
                (0, i.removeResources)();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t =
                    (e.shortname,
                    e.config,
                    (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                          for (r = 0; r < i.length; r++)
                            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]),
                            !(t.indexOf(n) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                e,
                                n,
                              ) &&
                              (o[n] = e[n]);
                      }
                      return o;
                    })(e, ["shortname", "config"]));
                return r.default.createElement(
                  "div",
                  s({}, t, { id: a.RECOMMENDATIONS_ID }),
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          })(u.prototype, n),
          u
        );
      })(r.default.Component);
      (t.Recommendations = f),
        (f.propTypes = {
          shortname: o.default.string.isRequired,
          config: o.default.shape({
            identifier: o.default.string,
            url: o.default.string,
            title: o.default.string,
            language: o.default.string,
          }),
        });
    },
    7990: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CALLBACKS =
          t.RECOMMENDATIONS_SCRIPT_ID =
          t.RECOMMENDATIONS_ID =
          t.COMMENT_EMBED_HEIGHT =
          t.COMMENT_EMBED_WIDTH =
          t.COMMENT_COUNT_SCRIPT_ID =
          t.COMMENT_COUNT_CLASS =
          t.EMBED_SCRIPT_ID =
          t.THREAD_ID =
            void 0),
        (t.THREAD_ID = "disqus_thread"),
        (t.EMBED_SCRIPT_ID = "dsq-embed-scr"),
        (t.COMMENT_COUNT_CLASS = "disqus-comment-count"),
        (t.COMMENT_COUNT_SCRIPT_ID = "dsq-count-scr"),
        (t.COMMENT_EMBED_WIDTH = 420),
        (t.COMMENT_EMBED_HEIGHT = 320),
        (t.RECOMMENDATIONS_ID = "disqus_recommendations"),
        (t.RECOMMENDATIONS_SCRIPT_ID = "dsq-recs-scr"),
        (t.CALLBACKS = [
          "preData",
          "preInit",
          "onInit",
          "onReady",
          "afterRender",
          "preReset",
          "onIdentify",
          "beforeComment",
          "onNewComment",
          "onPaginate",
        ]);
    },
    3944: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "qw", {
        enumerable: !0,
        get: function () {
          return i.DiscussionEmbed;
        },
      });
      var r = n(2449),
        o = n(5890),
        i = n(4811),
        a = n(4573);
      r.CommentCount, o.CommentEmbed, i.DiscussionEmbed, a.Recommendations;
    },
    6674: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.insertScript = function (e, t, n) {
          var r = window.document.createElement("script");
          return (r.async = !0), (r.src = e), (r.id = t), n.appendChild(r), r;
        }),
        (t.removeScript = function (e, t) {
          var n = window.document.getElementById(e);
          n && t.removeChild(n);
        }),
        (t.removeResources = function () {
          window.document
            .querySelectorAll(
              'link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]',
            )
            .forEach(function (e) {
              return e.remove();
            });
        }),
        (t.debounce = function (e, t, n) {
          var r;
          return function () {
            var o = this,
              i = arguments,
              a = n && !r;
            window.clearTimeout(r),
              (r = setTimeout(function () {
                (r = null), n || e.apply(o, i);
              }, t)),
              a && e.apply(o, i);
          };
        }),
        (t.isReactElement = u),
        (t.shallowComparison = function e(t, n) {
          var r,
            o = (function (e) {
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (e = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return a(e, void 0);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      if (
                        ("Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n)
                      )
                        return Array.from(e);
                      if (
                        "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      )
                        return a(e, void 0);
                    }
                  })(e))
                ) {
                  var t = 0,
                    n = function () {};
                  return {
                    s: n,
                    n: function () {
                      return t >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[t++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: n,
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }
              var r,
                o,
                i = !0,
                u = !1;
              return {
                s: function () {
                  r = e[Symbol.iterator]();
                },
                n: function () {
                  var e = r.next();
                  return (i = e.done), e;
                },
                e: function (e) {
                  (u = !0), (o = e);
                },
                f: function () {
                  try {
                    i || null == r.return || r.return();
                  } finally {
                    if (u) throw o;
                  }
                },
              };
            })(new Set(Object.keys(t), Object.keys(n)));
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var l = r.value;
              if ("object" === i(t[l])) {
                if (e(t[l], n[l])) return !0;
              } else if (t[l] !== n[l] && !u(t[l])) return !0;
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
          return !1;
        });
      var r,
        o = (r = n(7294)) && r.__esModule ? r : { default: r };
      function i(e) {
        return (i =
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
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e) {
        return (
          !!o.default.isValidElement(e) ||
          (!!Array.isArray(e) &&
            e.some(function (e) {
              return o.default.isValidElement(e);
            }))
        );
      }
    },
    2602: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          noSSR: function () {
            return a;
          },
        });
      let r = n(8754);
      n(5893), n(7294);
      let o = r._(n(5491));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function a(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function u(e, t) {
        let n = o.default,
          r = {
            loading: (e) => {
              let { error: t, isLoading: n, pastDelay: r } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (r.loader = () => e)
          : "function" == typeof e
            ? (r.loader = e)
            : "object" == typeof e && (r = { ...r, ...e });
        let u = (r = { ...r, ...t }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? n({
              ...r,
              loader: () =>
                null != u ? u().then(i) : Promise.resolve(i(() => null)),
            })
          : (delete r.webpack, delete r.modules, a(n, r));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1159: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8754)._(n(7294)).default.createContext(null);
    },
    5491: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let r = n(8754)._(n(7294)),
        o = n(1159),
        i = [],
        a = [],
        u = !1;
      function l(e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then((e) => ((n.loading = !1), (n.loaded = e), e))
            .catch((e) => {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      class s {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function c(e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t,
            ),
            i = null;
          function l() {
            if (!i) {
              let t = new s(e, n);
              i = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return i.promise();
          }
          if (!u) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              a.push((t) => {
                for (let n of e) if (t.includes(n)) return l();
              });
          }
          function c(e, t) {
            !(function () {
              l();
              let e = r.default.useContext(o.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach((t) => {
                  e(t);
                });
            })();
            let a = r.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue,
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: i.retry }), []),
              r.default.useMemo(() => {
                var t;
                return a.loading || a.error
                  ? r.default.createElement(n.loading, {
                      isLoading: a.loading,
                      pastDelay: a.pastDelay,
                      timedOut: a.timedOut,
                      error: a.error,
                      retry: i.retry,
                    })
                  : a.loaded
                    ? r.default.createElement(
                        (t = a.loaded) && t.default ? t.default : t,
                        e,
                      )
                    : null;
              }, [e, a])
            );
          }
          return (
            (c.preload = () => l()),
            (c.displayName = "LoadableComponent"),
            r.default.forwardRef(c)
          );
        })(l, e);
      }
      function d(e, t) {
        let n = [];
        for (; e.length; ) {
          let r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return d(e, t);
        });
      }
      (c.preloadAll = () =>
        new Promise((e, t) => {
          d(i).then(e, t);
        })),
        (c.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let n = () => ((u = !0), t());
            d(a, e).then(n, n);
          })
        )),
        (window.__NEXT_PRELOADREADY = c.preloadReady);
      let f = c;
    },
    5152: function (e, t, n) {
      e.exports = n(2602);
    },
    9008: function (e, t, n) {
      e.exports = n(3867);
    },
    2703: function (e, t, n) {
      "use strict";
      var r = n(414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    9005: function (e, t, n) {
      "use strict";
      n.d(t, {
        dP: function () {
          return o;
        },
        jE: function () {
          return r;
        },
        vh: function () {
          return a;
        },
        yJ: function () {
          return i;
        },
      });
      let r = 6048e5,
        o = 864e5,
        i = 6e4,
        a = 36e5;
    },
    949: function (e, t, n) {
      "use strict";
      n.d(t, {
        WU: function () {
          return U;
        },
      });
      let r = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function o(e) {
        return function () {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      let i = {
          date: o({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: o({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: o({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        a = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function u(e) {
        return (t, n) => {
          let r;
          if (
            "formatting" ===
              ((null == n ? void 0 : n.context)
                ? String(n.context)
                : "standalone") &&
            e.formattingValues
          ) {
            let t = e.defaultFormattingWidth || e.defaultWidth,
              o = (null == n ? void 0 : n.width) ? String(n.width) : t;
            r = e.formattingValues[o] || e.formattingValues[t];
          } else {
            let t = e.defaultWidth,
              o = (null == n ? void 0 : n.width)
                ? String(n.width)
                : e.defaultWidth;
            r = e.values[o] || e.values[t];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      function l(e) {
        return function (t) {
          let n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            o = r.width,
            i =
              (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(i);
          if (!a) return null;
          let u = a[0],
            l =
              (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth],
            s = Array.isArray(l)
              ? (function (e, t) {
                  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
                })(l, (e) => e.test(u))
              : (function (e, t) {
                  for (let n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
                      return n;
                })(l, (e) => e.test(u));
          return (
            (n = e.valueCallback ? e.valueCallback(s) : s),
            {
              value: (n = r.valueCallback ? r.valueCallback(n) : n),
              rest: t.slice(u.length),
            }
          );
        };
      }
      let s = {
          code: "en-US",
          formatDistance: (e, t, n) => {
            let o;
            let i = r[e];
            return ((o =
              "string" == typeof i
                ? i
                : 1 === t
                  ? i.one
                  : i.other.replace("{{count}}", t.toString())),
            null == n ? void 0 : n.addSuffix)
              ? n.comparison && n.comparison > 0
                ? "in " + o
                : o + " ago"
              : o;
          },
          formatLong: i,
          formatRelative: (e, t, n, r) => a[e],
          localize: {
            ordinalNumber: (e, t) => {
              let n = Number(e),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: u({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: u({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: (e) => e - 1,
            }),
            month: u({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: u({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: u({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaultFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((d = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: (e) => parseInt(e, 10),
              }),
              function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.match(d.matchPattern);
                if (!n) return null;
                let r = n[0],
                  o = e.match(d.parsePattern);
                if (!o) return null;
                let i = d.valueCallback ? d.valueCallback(o[0]) : o[0];
                return {
                  value: (i = t.valueCallback ? t.valueCallback(i) : i),
                  rest: e.slice(r.length),
                };
              }),
            era: l({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: l({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: (e) => e + 1,
            }),
            month: l({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: l({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: l({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        },
        c = {};
      var d,
        f = n(9005);
      function h(e) {
        let t = Object.prototype.toString.call(e);
        return e instanceof Date ||
          ("object" == typeof e && "[object Date]" === t)
          ? new e.constructor(+e)
          : new Date(
              "number" == typeof e ||
              "[object Number]" === t ||
              "string" == typeof e ||
              "[object String]" === t
                ? e
                : NaN,
            );
      }
      function m(e) {
        let t = h(e);
        return t.setHours(0, 0, 0, 0), t;
      }
      function p(e) {
        let t = h(e),
          n = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds(),
            ),
          );
        return n.setUTCFullYear(t.getFullYear()), +e - +n;
      }
      function y(e, t) {
        return e instanceof Date ? new e.constructor(t) : new Date(t);
      }
      function g(e, t) {
        var n, r, o, i, a, u, l, s;
        let d =
            null !==
              (s =
                null !==
                  (l =
                    null !==
                      (u =
                        null !== (a = null == t ? void 0 : t.weekStartsOn) &&
                        void 0 !== a
                          ? a
                          : null == t
                            ? void 0
                            : null === (r = t.locale) || void 0 === r
                              ? void 0
                              : null === (n = r.options) || void 0 === n
                                ? void 0
                                : n.weekStartsOn) && void 0 !== u
                      ? u
                      : c.weekStartsOn) && void 0 !== l
                  ? l
                  : null === (i = c.locale) || void 0 === i
                    ? void 0
                    : null === (o = i.options) || void 0 === o
                      ? void 0
                      : o.weekStartsOn) && void 0 !== s
              ? s
              : 0,
          f = h(e),
          m = f.getDay();
        return (
          f.setDate(f.getDate() - ((m < d ? 7 : 0) + m - d)),
          f.setHours(0, 0, 0, 0),
          f
        );
      }
      function b(e) {
        return g(e, { weekStartsOn: 1 });
      }
      function w(e) {
        let t = h(e),
          n = t.getFullYear(),
          r = y(e, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        let o = b(r),
          i = y(e, 0);
        i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
        let a = b(i);
        return t.getTime() >= o.getTime()
          ? n + 1
          : t.getTime() >= a.getTime()
            ? n
            : n - 1;
      }
      function v(e, t) {
        var n, r, o, i, a, u, l, s;
        let d = h(e),
          f = d.getFullYear(),
          m =
            null !==
              (s =
                null !==
                  (l =
                    null !==
                      (u =
                        null !==
                          (a = null == t ? void 0 : t.firstWeekContainsDate) &&
                        void 0 !== a
                          ? a
                          : null == t
                            ? void 0
                            : null === (r = t.locale) || void 0 === r
                              ? void 0
                              : null === (n = r.options) || void 0 === n
                                ? void 0
                                : n.firstWeekContainsDate) && void 0 !== u
                      ? u
                      : c.firstWeekContainsDate) && void 0 !== l
                  ? l
                  : null === (i = c.locale) || void 0 === i
                    ? void 0
                    : null === (o = i.options) || void 0 === o
                      ? void 0
                      : o.firstWeekContainsDate) && void 0 !== s
              ? s
              : 1,
          p = y(e, 0);
        p.setFullYear(f + 1, 0, m), p.setHours(0, 0, 0, 0);
        let b = g(p, t),
          w = y(e, 0);
        w.setFullYear(f, 0, m), w.setHours(0, 0, 0, 0);
        let v = g(w, t);
        return d.getTime() >= b.getTime()
          ? f + 1
          : d.getTime() >= v.getTime()
            ? f
            : f - 1;
      }
      function O(e, t) {
        let n = Math.abs(e).toString().padStart(t, "0");
        return (e < 0 ? "-" : "") + n;
      }
      let _ = {
          y(e, t) {
            let n = e.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return O("yy" === t ? r % 100 : r, t.length);
          },
          M(e, t) {
            let n = e.getMonth();
            return "M" === t ? String(n + 1) : O(n + 1, 2);
          },
          d: (e, t) => O(e.getDate(), t.length),
          a(e, t) {
            let n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: (e, t) => O(e.getHours() % 12 || 12, t.length),
          H: (e, t) => O(e.getHours(), t.length),
          m: (e, t) => O(e.getMinutes(), t.length),
          s: (e, t) => O(e.getSeconds(), t.length),
          S(e, t) {
            let n = t.length;
            return O(
              Math.trunc(e.getMilliseconds() * Math.pow(10, n - 3)),
              t.length,
            );
          },
        },
        S = {
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        D = {
          G: function (e, t, n) {
            let r = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (e, t, n) {
            if ("yo" === t) {
              let t = e.getFullYear();
              return n.ordinalNumber(t > 0 ? t : 1 - t, { unit: "year" });
            }
            return _.y(e, t);
          },
          Y: function (e, t, n, r) {
            let o = v(e, r),
              i = o > 0 ? o : 1 - o;
            return "YY" === t
              ? O(i % 100, 2)
              : "Yo" === t
                ? n.ordinalNumber(i, { unit: "year" })
                : O(i, t.length);
          },
          R: function (e, t) {
            return O(w(e), t.length);
          },
          u: function (e, t) {
            return O(e.getFullYear(), t.length);
          },
          Q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(r);
              case "QQ":
                return O(r, 2);
              case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(r);
              case "qq":
                return O(r, 2);
              case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return _.M(e, t);
              case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
              default:
                return n.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case "L":
                return String(r + 1);
              case "LL":
                return O(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
              default:
                return n.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (e, t, n, r) {
            let o = (function (e, t) {
              let n = h(e);
              return (
                Math.round(
                  (+g(n, t) -
                    +(function (e, t) {
                      var n, r, o, i, a, u, l, s;
                      let d =
                          null !==
                            (s =
                              null !==
                                (l =
                                  null !==
                                    (u =
                                      null !==
                                        (a =
                                          null == t
                                            ? void 0
                                            : t.firstWeekContainsDate) &&
                                      void 0 !== a
                                        ? a
                                        : null == t
                                          ? void 0
                                          : null === (r = t.locale) ||
                                              void 0 === r
                                            ? void 0
                                            : null === (n = r.options) ||
                                                void 0 === n
                                              ? void 0
                                              : n.firstWeekContainsDate) &&
                                  void 0 !== u
                                    ? u
                                    : c.firstWeekContainsDate) && void 0 !== l
                                ? l
                                : null === (i = c.locale) || void 0 === i
                                  ? void 0
                                  : null === (o = i.options) || void 0 === o
                                    ? void 0
                                    : o.firstWeekContainsDate) && void 0 !== s
                            ? s
                            : 1,
                        f = v(e, t),
                        h = y(e, 0);
                      return (
                        h.setFullYear(f, 0, d), h.setHours(0, 0, 0, 0), g(h, t)
                      );
                    })(n, t)) /
                    f.jE,
                ) + 1
              );
            })(e, r);
            return "wo" === t
              ? n.ordinalNumber(o, { unit: "week" })
              : O(o, t.length);
          },
          I: function (e, t, n) {
            let r = (function (e) {
              let t = h(e);
              return (
                Math.round(
                  (+b(t) -
                    +(function (e) {
                      let t = w(e),
                        n = y(e, 0);
                      return (
                        n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), b(n)
                      );
                    })(t)) /
                    f.jE,
                ) + 1
              );
            })(e);
            return "Io" === t
              ? n.ordinalNumber(r, { unit: "week" })
              : O(r, t.length);
          },
          d: function (e, t, n) {
            return "do" === t
              ? n.ordinalNumber(e.getDate(), { unit: "date" })
              : _.d(e, t);
          },
          D: function (e, t, n) {
            let r = (function (e) {
              let t = h(e);
              return (
                (function (e, t) {
                  let n = m(e),
                    r = m(t);
                  return Math.round((+n - p(n) - (+r - p(r))) / f.dP);
                })(
                  t,
                  (function (e) {
                    let t = h(e),
                      n = y(e, 0);
                    return (
                      n.setFullYear(t.getFullYear(), 0, 1),
                      n.setHours(0, 0, 0, 0),
                      n
                    );
                  })(t),
                ) + 1
              );
            })(e);
            return "Do" === t
              ? n.ordinalNumber(r, { unit: "dayOfYear" })
              : O(r, t.length);
          },
          E: function (e, t, n) {
            let r = e.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (e, t, n, r) {
            let o = e.getDay(),
              i = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(i);
              case "ee":
                return O(i, 2);
              case "eo":
                return n.ordinalNumber(i, { unit: "day" });
              case "eee":
                return n.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(o, { width: "short", context: "formatting" });
              default:
                return n.day(o, { width: "wide", context: "formatting" });
            }
          },
          c: function (e, t, n, r) {
            let o = e.getDay(),
              i = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(i);
              case "cc":
                return O(i, t.length);
              case "co":
                return n.ordinalNumber(i, { unit: "day" });
              case "ccc":
                return n.day(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(o, { width: "short", context: "standalone" });
              default:
                return n.day(o, { width: "wide", context: "standalone" });
            }
          },
          i: function (e, t, n) {
            let r = e.getDay(),
              o = 0 === r ? 7 : r;
            switch (t) {
              case "i":
                return String(o);
              case "ii":
                return O(o, t.length);
              case "io":
                return n.ordinalNumber(o, { unit: "day" });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (e, t, n) {
            let r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (e, t, n) {
            let r;
            let o = e.getHours();
            switch (
              ((r =
                12 === o
                  ? S.noon
                  : 0 === o
                    ? S.midnight
                    : o / 12 >= 1
                      ? "pm"
                      : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          B: function (e, t, n) {
            let r;
            let o = e.getHours();
            switch (
              ((r =
                o >= 17
                  ? S.evening
                  : o >= 12
                    ? S.afternoon
                    : o >= 4
                      ? S.morning
                      : S.night),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          h: function (e, t, n) {
            if ("ho" === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), n.ordinalNumber(t, { unit: "hour" });
            }
            return _.h(e, t);
          },
          H: function (e, t, n) {
            return "Ho" === t
              ? n.ordinalNumber(e.getHours(), { unit: "hour" })
              : _.H(e, t);
          },
          K: function (e, t, n) {
            let r = e.getHours() % 12;
            return "Ko" === t
              ? n.ordinalNumber(r, { unit: "hour" })
              : O(r, t.length);
          },
          k: function (e, t, n) {
            let r = e.getHours();
            return (0 === r && (r = 24), "ko" === t)
              ? n.ordinalNumber(r, { unit: "hour" })
              : O(r, t.length);
          },
          m: function (e, t, n) {
            return "mo" === t
              ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
              : _.m(e, t);
          },
          s: function (e, t, n) {
            return "so" === t
              ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
              : _.s(e, t);
          },
          S: function (e, t) {
            return _.S(e, t);
          },
          X: function (e, t, n) {
            let r = e.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (t) {
              case "X":
                return C(r);
              case "XXXX":
              case "XX":
                return T(r);
              default:
                return T(r, ":");
            }
          },
          x: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "x":
                return C(r);
              case "xxxx":
              case "xx":
                return T(r);
              default:
                return T(r, ":");
            }
          },
          O: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + M(r, ":");
              default:
                return "GMT" + T(r, ":");
            }
          },
          z: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + M(r, ":");
              default:
                return "GMT" + T(r, ":");
            }
          },
          t: function (e, t, n) {
            return O(Math.trunc(e.getTime() / 1e3), t.length);
          },
          T: function (e, t, n) {
            return O(e.getTime(), t.length);
          },
        };
      function M(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = e > 0 ? "-" : "+",
          r = Math.abs(e),
          o = Math.trunc(r / 60),
          i = r % 60;
        return 0 === i ? n + String(o) : n + String(o) + t + O(i, 2);
      }
      function C(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + O(Math.abs(e) / 60, 2)
          : T(e, t);
      }
      function T(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = Math.abs(e);
        return (
          (e > 0 ? "-" : "+") + O(Math.trunc(n / 60), 2) + t + O(n % 60, 2)
        );
      }
      let E = (e, t) => {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        P = (e, t) => {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        I = {
          p: P,
          P: (e, t) => {
            let n;
            let r = e.match(/(P+)(p+)?/) || [],
              o = r[1],
              i = r[2];
            if (!i) return E(e, t);
            switch (o) {
              case "P":
                n = t.dateTime({ width: "short" });
                break;
              case "PP":
                n = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                n = t.dateTime({ width: "long" });
                break;
              default:
                n = t.dateTime({ width: "full" });
            }
            return n.replace("{{date}}", E(o, t)).replace("{{time}}", P(i, t));
          },
        },
        N = /^D+$/,
        k = /^Y+$/,
        j = ["D", "DD", "YY", "YYYY"],
        x = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        R = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        q = /^'([^]*?)'?$/,
        W = /''/g,
        A = /[a-zA-Z]/;
      function U(e, t, n) {
        var r, o, i, a, u, l, d, f, m, p, y, g, b, w, v, O, _, S;
        let M =
            null !==
              (p =
                null !== (m = null == n ? void 0 : n.locale) && void 0 !== m
                  ? m
                  : c.locale) && void 0 !== p
              ? p
              : s,
          C =
            null !==
              (w =
                null !==
                  (b =
                    null !==
                      (g =
                        null !==
                          (y = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== y
                          ? y
                          : null == n
                            ? void 0
                            : null === (o = n.locale) || void 0 === o
                              ? void 0
                              : null === (r = o.options) || void 0 === r
                                ? void 0
                                : r.firstWeekContainsDate) && void 0 !== g
                      ? g
                      : c.firstWeekContainsDate) && void 0 !== b
                  ? b
                  : null === (a = c.locale) || void 0 === a
                    ? void 0
                    : null === (i = a.options) || void 0 === i
                      ? void 0
                      : i.firstWeekContainsDate) && void 0 !== w
              ? w
              : 1,
          T =
            null !==
              (S =
                null !==
                  (_ =
                    null !==
                      (O =
                        null !== (v = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== v
                          ? v
                          : null == n
                            ? void 0
                            : null === (l = n.locale) || void 0 === l
                              ? void 0
                              : null === (u = l.options) || void 0 === u
                                ? void 0
                                : u.weekStartsOn) && void 0 !== O
                      ? O
                      : c.weekStartsOn) && void 0 !== _
                  ? _
                  : null === (f = c.locale) || void 0 === f
                    ? void 0
                    : null === (d = f.options) || void 0 === d
                      ? void 0
                      : d.weekStartsOn) && void 0 !== S
              ? S
              : 0,
          E = h(e);
        if (
          !(
            (E instanceof Date ||
              ("object" == typeof E &&
                "[object Date]" === Object.prototype.toString.call(E)) ||
              "number" == typeof E) &&
            !isNaN(Number(h(E)))
          )
        )
          throw RangeError("Invalid time value");
        let P = t
          .match(R)
          .map((e) => {
            let t = e[0];
            return "p" === t || "P" === t ? (0, I[t])(e, M.formatLong) : e;
          })
          .join("")
          .match(x)
          .map((e) => {
            if ("''" === e) return { isToken: !1, value: "'" };
            let t = e[0];
            if ("'" === t)
              return {
                isToken: !1,
                value: (function (e) {
                  let t = e.match(q);
                  return t ? t[1].replace(W, "'") : e;
                })(e),
              };
            if (D[t]) return { isToken: !0, value: e };
            if (t.match(A))
              throw RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  t +
                  "`",
              );
            return { isToken: !1, value: e };
          });
        M.localize.preprocessor && (P = M.localize.preprocessor(E, P));
        let U = { firstWeekContainsDate: C, weekStartsOn: T, locale: M };
        return P.map((r) => {
          if (!r.isToken) return r.value;
          let o = r.value;
          return (
            ((!(null == n ? void 0 : n.useAdditionalWeekYearTokens) &&
              k.test(o)) ||
              (!(null == n ? void 0 : n.useAdditionalDayOfYearTokens) &&
                N.test(o))) &&
              (function (e, t, n) {
                let r = (function (e, t, n) {
                  let r = "Y" === e[0] ? "years" : "days of the month";
                  return "Use `"
                    .concat(e.toLowerCase(), "` instead of `")
                    .concat(e, "` (in `")
                    .concat(t, "`) for formatting ")
                    .concat(r, " to the input `")
                    .concat(
                      n,
                      "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
                    );
                })(e, t, n);
                if ((console.warn(r), j.includes(e))) throw RangeError(r);
              })(o, t, String(e)),
            (0, D[o[0]])(E, o, M.localize, U)
          );
        }).join("");
      }
    },
    197: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(9005);
      function o(e, t) {
        var n;
        let o, h;
        let m =
            null !== (n = null == t ? void 0 : t.additionalDigits) &&
            void 0 !== n
              ? n
              : 2,
          p = (function (e) {
            let t;
            let n = {},
              r = e.split(i.dateTimeDelimiter);
            if (r.length > 2) return n;
            if (
              (/:/.test(r[0])
                ? (t = r[0])
                : ((n.date = r[0]),
                  (t = r[1]),
                  i.timeZoneDelimiter.test(n.date) &&
                    ((n.date = e.split(i.timeZoneDelimiter)[0]),
                    (t = e.substr(n.date.length, e.length)))),
              t)
            ) {
              let e = i.timezone.exec(t);
              e
                ? ((n.time = t.replace(e[1], "")), (n.timezone = e[1]))
                : (n.time = t);
            }
            return n;
          })(e);
        if (p.date) {
          let e = (function (e, t) {
            let n = RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + t) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + t) +
                  "})$)",
              ),
              r = e.match(n);
            if (!r) return { year: NaN, restDateString: "" };
            let o = r[1] ? parseInt(r[1]) : null,
              i = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === i ? o : 100 * i,
              restDateString: e.slice((r[1] || r[2]).length),
            };
          })(p.date, m);
          o = (function (e, t) {
            if (null === t) return new Date(NaN);
            let n = e.match(a);
            if (!n) return new Date(NaN);
            let r = !!n[4],
              o = s(n[1]),
              i = s(n[2]) - 1,
              u = s(n[3]),
              l = s(n[4]),
              c = s(n[5]) - 1;
            if (r)
              return l >= 1 && l <= 53 && c >= 0 && c <= 6
                ? (function (e, t, n) {
                    let r = new Date(0);
                    r.setUTCFullYear(e, 0, 4);
                    let o = r.getUTCDay() || 7;
                    return (
                      r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + n + 1 - o)),
                      r
                    );
                  })(t, l, c)
                : new Date(NaN);
            {
              let e = new Date(0);
              return i >= 0 &&
                i <= 11 &&
                u >= 1 &&
                u <= (d[i] || (f(t) ? 29 : 28)) &&
                o >= 1 &&
                o <= (f(t) ? 366 : 365)
                ? (e.setUTCFullYear(t, i, Math.max(o, u)), e)
                : new Date(NaN);
            }
          })(e.restDateString, e.year);
        }
        if (!o || isNaN(o.getTime())) return new Date(NaN);
        let y = o.getTime(),
          g = 0;
        if (
          p.time &&
          isNaN(
            (g = (function (e) {
              let t = e.match(u);
              if (!t) return NaN;
              let n = c(t[1]),
                o = c(t[2]),
                i = c(t[3]);
              return (
                24 === n
                  ? 0 === o && 0 === i
                  : i >= 0 && i < 60 && o >= 0 && o < 60 && n >= 0 && n < 25
              )
                ? n * r.vh + o * r.yJ + 1e3 * i
                : NaN;
            })(p.time)),
          )
        )
          return new Date(NaN);
        if (p.timezone) {
          if (
            isNaN(
              (h = (function (e) {
                if ("Z" === e) return 0;
                let t = e.match(l);
                if (!t) return 0;
                let n = "+" === t[1] ? -1 : 1,
                  o = parseInt(t[2]),
                  i = (t[3] && parseInt(t[3])) || 0;
                return i >= 0 && i <= 59 ? n * (o * r.vh + i * r.yJ) : NaN;
              })(p.timezone)),
            )
          )
            return new Date(NaN);
        } else {
          let e = new Date(y + g),
            t = new Date(0);
          return (
            t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            t.setHours(
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds(),
            ),
            t
          );
        }
        return new Date(y + g + h);
      }
      let i = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        a = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        u =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        l = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function s(e) {
        return e ? parseInt(e) : 1;
      }
      function c(e) {
        return (e && parseFloat(e.replace(",", "."))) || 0;
      }
      let d = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function f(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
    },
  },
]);
