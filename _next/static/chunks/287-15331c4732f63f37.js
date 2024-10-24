(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [287],
  {
    2449: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CommentCount = void 0);
      var r = a(n(7294)),
        o = a(n(5697)),
        i = n(6674),
        u = n(7990);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (s =
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
      function c() {
        return (c =
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var d = (0, i.debounce)(
          function () {
            window.DISQUSWIDGETS &&
              window.DISQUSWIDGETS.getCount({ reset: !0 });
          },
          300,
          !1,
        ),
        p = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && l(e, t);
          })(a, e);
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
                  n = f(a);
                return (
                  (e = t
                    ? Reflect.construct(n, arguments, f(this).constructor)
                    : n.apply(this, arguments)),
                  e && ("object" === s(e) || "function" == typeof e)
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
          function a() {
            return (
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, a),
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
                  e.getElementById(u.COMMENT_COUNT_SCRIPT_ID)
                    ? d()
                    : (0, i.insertScript)(
                        "https://".concat(
                          this.props.shortname,
                          ".disqus.com/count.js",
                        ),
                        u.COMMENT_COUNT_SCRIPT_ID,
                        e.body,
                      );
                },
              },
              {
                key: "cleanInstance",
                value: function () {
                  var e = window.document;
                  (0, i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID, e.body),
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
                    c({}, i, {
                      className: ""
                        .concat(u.COMMENT_COUNT_CLASS)
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
            })(a.prototype, n),
            a
          );
        })(r.default.Component);
      (t.CommentCount = p),
        (p.propTypes = {
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
      var r = u(n(7294)),
        o = u(n(5697)),
        i = n(7990);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e) {
        return (a =
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
      function l(e) {
        return (l = Object.setPrototypeOf
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
                n = l(i);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, l(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === a(e) || "function" == typeof e)
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
                  s({}, o, {
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
      (t.CommentEmbed = f),
        (f.defaultProps = {
          showMedia: !0,
          showParentComment: !0,
          width: i.COMMENT_EMBED_WIDTH,
          height: i.COMMENT_EMBED_HEIGHT,
        }),
        (f.propTypes = {
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
      var r = a(n(7294)),
        o = a(n(5697)),
        i = n(6674),
        u = n(7990);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (s =
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
      function c() {
        return (c =
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        return (f = Object.setPrototypeOf
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
            t && l(e, t);
        })(a, e);
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
                n = f(a);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, f(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === s(e) || "function" == typeof e)
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
        function a() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, a),
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
                window && window.DISQUS && e.getElementById(u.EMBED_SCRIPT_ID)
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
                      u.EMBED_SCRIPT_ID,
                      e.body,
                    ));
              },
            },
            {
              key: "cleanInstance",
              value: function () {
                var e = window.document;
                (0, i.removeScript)(u.EMBED_SCRIPT_ID, e.body),
                  window && window.DISQUS && window.DISQUS.reset({});
                try {
                  delete window.DISQUS;
                } catch (e) {
                  window.DISQUS = void 0;
                }
                var t = e.getElementById(u.THREAD_ID);
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
                    u.CALLBACKS.forEach(function (n) {
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
                  c({}, t, { id: u.THREAD_ID }),
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
          })(a.prototype, n),
          a
        );
      })(r.default.Component);
      (t.DiscussionEmbed = d),
        (d.propTypes = {
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
      var r = a(n(7294)),
        o = a(n(5697)),
        i = n(6674),
        u = n(7990);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        return (s =
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
      function c() {
        return (c =
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
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        return (f = Object.setPrototypeOf
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
            t && l(e, t);
        })(a, e);
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
                n = f(a);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, f(this).constructor)
                  : n.apply(this, arguments)),
                e && ("object" === s(e) || "function" == typeof e)
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
        function a() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, a),
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
                  window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID)
                    ? this.reloadInstance()
                    : (0, i.insertScript)(
                        "https://".concat(
                          this.props.shortname,
                          ".disqus.com/recommendations.js",
                        ),
                        u.RECOMMENDATIONS_SCRIPT_ID,
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
                  u.RECOMMENDATIONS_SCRIPT_ID,
                  window.document.body,
                );
                try {
                  delete window.DISQUS_RECOMMENDATIONS;
                } catch (e) {
                  window.DISQUS_RECOMMENDATIONS = void 0;
                }
                var e = window.document.getElementById(u.RECOMMENDATIONS_ID);
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
                  c({}, t, { id: u.RECOMMENDATIONS_ID }),
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
          })(a.prototype, n),
          a
        );
      })(r.default.Component);
      (t.Recommendations = d),
        (d.propTypes = {
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
        u = n(4573);
      r.CommentCount, o.CommentEmbed, i.DiscussionEmbed, u.Recommendations;
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
              u = n && !r;
            window.clearTimeout(r),
              (r = setTimeout(function () {
                (r = null), n || e.apply(o, i);
              }, t)),
              u && e.apply(o, i);
          };
        }),
        (t.isReactElement = a),
        (t.shallowComparison = function e(t, n) {
          var r,
            o = (function (e) {
              if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                  Array.isArray(e) ||
                  (e = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return u(e, void 0);
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
                        return u(e, void 0);
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
                a = !1;
              return {
                s: function () {
                  r = e[Symbol.iterator]();
                },
                n: function () {
                  var e = r.next();
                  return (i = e.done), e;
                },
                e: function (e) {
                  (a = !0), (o = e);
                },
                f: function () {
                  try {
                    i || null == r.return || r.return();
                  } finally {
                    if (a) throw o;
                  }
                },
              };
            })(new Set(Object.keys(t), Object.keys(n)));
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var s = r.value;
              if ("object" === i(t[s])) {
                if (e(t[s], n[s])) return !0;
              } else if (t[s] !== n[s] && !a(t[s])) return !0;
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
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e) {
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
            return a;
          },
          noSSR: function () {
            return u;
          },
        });
      let r = n(8754);
      n(5893), n(7294);
      let o = r._(n(5491));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function u(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function a(e, t) {
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
        let a = (r = { ...r, ...t }).loader;
        return (r.loadableGenerated &&
          ((r = { ...r, ...r.loadableGenerated }), delete r.loadableGenerated),
        "boolean" != typeof r.ssr || r.ssr)
          ? n({
              ...r,
              loader: () =>
                null != a ? a().then(i) : Promise.resolve(i(() => null)),
            })
          : (delete r.webpack, delete r.modules, u(n, r));
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
            return d;
          },
        });
      let r = n(8754)._(n(7294)),
        o = n(1159),
        i = [],
        u = [],
        a = !1;
      function s(e) {
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
      class c {
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
      function l(e) {
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
          function s() {
            if (!i) {
              let t = new c(e, n);
              i = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return i.promise();
          }
          if (!a) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              u.push((t) => {
                for (let n of e) if (t.includes(n)) return s();
              });
          }
          function l(e, t) {
            !(function () {
              s();
              let e = r.default.useContext(o.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach((t) => {
                  e(t);
                });
            })();
            let u = r.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue,
            );
            return (
              r.default.useImperativeHandle(t, () => ({ retry: i.retry }), []),
              r.default.useMemo(() => {
                var t;
                return u.loading || u.error
                  ? r.default.createElement(n.loading, {
                      isLoading: u.loading,
                      pastDelay: u.pastDelay,
                      timedOut: u.timedOut,
                      error: u.error,
                      retry: i.retry,
                    })
                  : u.loaded
                    ? r.default.createElement(
                        (t = u.loaded) && t.default ? t.default : t,
                        e,
                      )
                    : null;
              }, [e, u])
            );
          }
          return (
            (l.preload = () => s()),
            (l.displayName = "LoadableComponent"),
            r.default.forwardRef(l)
          );
        })(s, e);
      }
      function f(e, t) {
        let n = [];
        for (; e.length; ) {
          let r = e.pop();
          n.push(r(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return f(e, t);
        });
      }
      (l.preloadAll = () =>
        new Promise((e, t) => {
          f(i).then(e, t);
        })),
        (l.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let n = () => ((a = !0), t());
            f(u, e).then(n, n);
          })
        )),
        (window.__NEXT_PRELOADREADY = l.preloadReady);
      let d = l;
    },
    5152: function (e, t, n) {
      e.exports = n(2602);
    },
    2703: function (e, t, n) {
      "use strict";
      var r = n(414);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, u) {
            if (u !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((a.name = "Invariant Violation"), a);
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
  },
]);
