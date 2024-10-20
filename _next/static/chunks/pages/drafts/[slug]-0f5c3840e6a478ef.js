(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    4446: function (e, t, A) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/drafts/[slug]",
        function () {
          return A(871);
        },
      ]);
    },
    2610: function (e, t, A) {
      "use strict";
      A.r(t),
        (t.default = {
          src: "/_next/static/media/test.bd907638.jpg",
          height: 1920,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAALwJRf/EABwQAAEDBQAAAAAAAAAAAAAAABIAAREDExQhMv/aAAgBAQABPwAq2SIPaDrUSv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Absw//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AAy//9k=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    9277: function (e, t, A) {
      "use strict";
      A.d(t, {
        q: function () {
          return s;
        },
      });
      var n = A(5893),
        i = A(261),
        r = {
          src: "/_next/static/media/avatar.f1819002.jpg",
          height: 520,
          width: 463,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAK6JX//EABsQAAIBBQAAAAAAAAAAAAAAAAECEQADEyFR/9oACAEBAAE/AEzJfYluxI1X/8QAHREAAQIHAAAAAAAAAAAAAAAAAgABBBESEyMyQf/aAAgBAgEBPwCGG2BtWRZD2efV/8QAFhEAAwAAAAAAAAAAAAAAAAAAAALB/9oACAEDAQE/AGh//9k=",
          blurWidth: 7,
          blurHeight: 8,
        };
      function s(e) {
        return (0, n.jsx)(i.t, { src: r, alt: "Avatar", ...e });
      }
    },
    4958: function (e, t, A) {
      "use strict";
      A.d(t, {
        j: function () {
          return f;
        },
      });
      var n = A(5893),
        i = A(3967),
        r = A.n(i),
        s = A(1798),
        a = A(1664),
        c = A.n(a),
        o = A(8716),
        l = A.n(o);
      function u(e) {
        let { tags: t } = e,
          { t: A } = (0, s.$G)("feature-tags"),
          i = t.map((e) =>
            (0, n.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, n.jsx)(
                  c(),
                  { className: l().tag, href: "/tags#".concat(e), children: e },
                  e,
                ),
              },
              e,
            ),
          );
        return (0, n.jsxs)("section", {
          className: r()(l().tags, "tw-text-center"),
          children: [
            (0, n.jsx)("h6", { children: A("Tags") }),
            (0, n.jsx)("ul", { className: "tw-p-0", children: i }),
          ],
        });
      }
      var d = A(5853),
        g = A(5152),
        h = A.n(g),
        m = A(3944);
      function x(e) {
        return (0, n.jsx)(m.qw, {
          shortname: e.username,
          config: {
            url: window.location.href,
            identifier: e.id,
            title: e.title,
            language: e.lang,
          },
        });
      }
      let _ = h()(() => Promise.resolve(x), { ssr: !1 });
      function f(e) {
        let { children: t, postData: A, siteConfig: i } = e,
          { siteAuthor: r, disqusUsername: s } = i;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.K, {
              title: A.title,
              author: r,
              lang: A.lang,
              description: A.description,
              keywords: A.tags,
            }),
            (0, n.jsxs)("main", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                t,
                (0, n.jsx)(_, {
                  username: s,
                  id: A.slug,
                  title: A.title,
                  lang: A.lang,
                }),
                (0, n.jsx)(u, { tags: A.tags }),
              ],
            }),
          ],
        });
      }
    },
    5853: function (e, t, A) {
      "use strict";
      A.d(t, {
        K: function () {
          return s;
        },
      });
      var n = A(5893),
        i = A(9008),
        r = A.n(i);
      function s(e) {
        return (0, n.jsxs)(r(), {
          children: [
            (0, n.jsx)("meta", { charSet: "utf-8" }),
            (0, n.jsx)("meta", {
              httpEquiv: "X-UA-Compatible",
              content: "IE=edge",
            }),
            (0, n.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            (0, n.jsx)("meta", {
              httpEquiv: "content-language",
              content: e.lang,
            }),
            (0, n.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, n.jsx)("title", { children: e.title }),
            (0, n.jsx)("meta", { name: "og:title", content: e.title }),
            (0, n.jsx)("meta", { name: "author", content: e.author }),
            e.description &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("meta", {
                    name: "description",
                    content: e.description,
                  }),
                  (0, n.jsx)("meta", {
                    name: "og:description",
                    content: e.description,
                  }),
                ],
              }),
            e.previewImage &&
              (0, n.jsx)("meta", {
                property: "og:image",
                content: e.previewImage,
              }),
            e.keywords &&
              (0, n.jsx)("meta", {
                name: "keywords",
                content: e.keywords.join(","),
              }),
            (0, n.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
          ],
        });
      }
    },
    871: function (e, t, A) {
      "use strict";
      A.r(t),
        A.d(t, {
          __N_SSG: function () {
            return M;
          },
          default: function () {
            return S;
          },
        });
      var n = A(5893),
        i = A(1798),
        r = A(1664),
        s = A.n(r),
        a = A(9277),
        c = A(7294),
        o = A(197),
        l = A(949);
      function u(e) {
        let { dateString: t } = e,
          A = (0, o.D)(t);
        return (0, n.jsx)("time", {
          dateTime: t,
          children: (0, l.WU)(A, "LLLL d, yyyy"),
        });
      }
      var d = A(9875),
        g = A(3698),
        h = A(65),
        m = A(7437),
        x = A(5343),
        _ = A(3846),
        f = A(1623);
      let j = () => (e) => {
        (0, f.Vn)(e, (e) => {
          if ("leafDirective" === e.type && "youtube" === e.name) {
            let t = e.data || (e.data = {});
            (t.hName = "iframe"),
              (t.hProperties = {
                src: "https://www.youtube.com/embed/".concat(e.attributes.vid),
                title: e.children[0].value,
                width: "560",
                height: "315",
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: !0,
              }),
              (e.children = []);
          }
        });
      };
      var w = A(7797),
        E = A(5280),
        p = A(9360),
        B = A(1924),
        Q = A(2935),
        I = A(3687),
        C = A(261);
      let v = {
        img: function (e) {
          let { alt: t, src: i, width: r, height: s, ...a } = e;
          return i.startsWith("http")
            ? (0, n.jsx)("img", {
                src: i,
                alt: t,
                width: r && (Number.isInteger(r) ? r : parseInt(r)),
                height: s && (Number.isInteger(s) ? s : parseInt(s)),
                ...a,
              })
            : (0, n.jsx)(C.t, {
                src: A(7192)("./".concat(i)),
                alt: t || "image",
                sizes: "responsive",
                width: void 0,
                height: void 0,
                ...a,
              });
        },
      };
      function b(e) {
        let { markdownSource: t } = e;
        return (0, c.useMemo)(
          () =>
            (function (e, t) {
              let A = {
                jsx: n.jsx,
                jsxs: n.jsxs,
                Fragment: n.Fragment,
                components: t,
                development: !1,
              };
              return (0, d.l)()
                .use(g.Z)
                .use([h.Z, m.Z, x.Z, _.Z, j])
                .use(w.Z)
                .use([
                  E.Z,
                  p.Z,
                  B.Z,
                  [
                    Q.Z,
                    {
                      behavior: "prepend",
                      content: {
                        type: "element",
                        tagName: "i",
                        properties: { className: ["fa-solid", "fa-link"] },
                        children: [],
                      },
                    },
                  ],
                ])
                .use(I.Z, A)
                .processSync(e).result;
            })(t, v),
          [t],
        );
      }
      var y = A(1995),
        D = A.n(y),
        N = A(4958),
        k = A(3260),
        F = A.n(k),
        M = !0,
        S = function (e) {
          let { postData: t, siteConfig: A } = e,
            { t: r } = (0, i.$G)("common"),
            { siteAuthor: c } = A;
          return (0, n.jsx)(N.j, {
            ...e,
            children: (0, n.jsxs)("div", {
              className: F().container,
              children: [
                (0, n.jsxs)("header", {
                  className: F().header,
                  children: [
                    (0, n.jsx)(s(), {
                      href: "/",
                      children: (0, n.jsx)(a.q, {
                        height: 108,
                        width: 108,
                        className: D().borderCircle,
                      }),
                    }),
                    (0, n.jsx)("h2", {
                      className: D().headingLg,
                      children: (0, n.jsx)(s(), {
                        href: "/",
                        className: D().colorInherit,
                        children: c,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("article", {
                  children: [
                    (0, n.jsx)("h1", {
                      className: D().headingXl,
                      children: t.title,
                    }),
                    t.date &&
                      (0, n.jsx)("div", {
                        className: D().lightText,
                        children: (0, n.jsx)(u, { dateString: t.date }),
                      }),
                    (0, n.jsx)(b, { markdownSource: t.markdownSource }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: F().backToHome,
                  children: (0, n.jsx)(s(), {
                    href: "/".concat(t.lang),
                    children: r("Back to home"),
                  }),
                }),
              ],
            }),
          });
        };
    },
    8716: function (e) {
      e.exports = {
        tags: "FeaturesTags_tags__qev0a",
        tag: "FeaturesTags_tag__f8Svr",
      };
    },
    3260: function (e) {
      e.exports = {
        container: "Post_container__UTtnv",
        header: "Post_header__LayjC",
        backToHome: "Post_backToHome__tpOvL",
      };
    },
    1995: function (e) {
      e.exports = {
        heading2Xl: "utils_heading2Xl__laoHY",
        headingXl: "utils_headingXl__H5ueI",
        headingLg: "utils_headingLg___EZyf",
        headingMd: "utils_headingMd__xM9lc",
        borderCircle: "utils_borderCircle__4Kx7W",
        colorInherit: "utils_colorInherit__fJI6n",
        padding1px: "utils_padding1px__BPqFH",
        list: "utils_list__1zrsU",
        listItem: "utils_listItem__0wb3L",
        lightText: "utils_lightText__4lyO2",
      };
    },
    7192: function (e, t, A) {
      var n = { "./test.jpg": 2610 };
      function i(e) {
        return A(r(e));
      }
      function r(e) {
        if (!A.o(n, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (i.keys = function () {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 7192);
    },
  },
  function (e) {
    e.O(0, [658, 265, 98, 266, 888, 774, 179], function () {
      return e((e.s = 4446));
    }),
      (_N_E = e.O());
  },
]);
