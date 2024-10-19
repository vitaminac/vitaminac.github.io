(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    592: function (e, A, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]",
        function () {
          return t(3173);
        },
      ]);
    },
    1130: function (e, A, t) {
      "use strict";
      t.r(A),
        (A.default = {
          src: "/_next/static/media/test.bd907638.jpg",
          height: 1920,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAALwJRf/EABwQAAEDBQAAAAAAAAAAAAAAABIAAREDExQhMv/aAAgBAQABPwAq2SIPaDrUSv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Absw//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AAy//9k=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    8247: function (e, A, t) {
      "use strict";
      t.d(A, {
        q: function () {
          return s;
        },
      });
      var n = t(5893),
        i = t(6235),
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
    5909: function (e, A, t) {
      "use strict";
      t.d(A, {
        j: function () {
          return h;
        },
      });
      var n = t(5893),
        i = t(3967),
        r = t.n(i),
        s = t(1798),
        a = t(1664),
        c = t.n(a),
        o = t(9631),
        l = t.n(o);
      function u(e) {
        let { tags: A } = e,
          { t } = (0, s.$G)("feature-tags"),
          i = A.map((e) =>
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
            (0, n.jsx)("h6", { children: t("Tags") }),
            (0, n.jsx)("ul", { className: "tw-p-0", children: i }),
          ],
        });
      }
      var d = t(1864);
      function h(e) {
        let { children: A, postData: t, siteConfig: i } = e,
          { siteAuthor: r } = i;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.K, {
              title: t.title,
              author: r,
              lang: t.lang,
              description: t.description,
              keywords: t.tags,
            }),
            (0, n.jsxs)("main", {
              children: [A, (0, n.jsx)(u, { tags: t.tags })],
            }),
          ],
        });
      }
    },
    1864: function (e, A, t) {
      "use strict";
      t.d(A, {
        K: function () {
          return s;
        },
      });
      var n = t(5893),
        i = t(9008),
        r = t.n(i);
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
    3173: function (e, A, t) {
      "use strict";
      t.r(A),
        t.d(A, {
          __N_SSG: function () {
            return M;
          },
          default: function () {
            return S;
          },
        });
      var n = t(5893),
        i = t(1798),
        r = t(1664),
        s = t.n(r),
        a = t(8247),
        c = t(7294),
        o = t(3595),
        l = t(3717);
      function u(e) {
        let { dateString: A } = e,
          t = (0, o.D)(A);
        return (0, n.jsx)("time", {
          dateTime: A,
          children: (0, l.WU)(t, "LLLL d, yyyy"),
        });
      }
      var d = t(9875),
        h = t(3698),
        g = t(65),
        m = t(7437),
        x = t(5343),
        _ = t(3846),
        j = t(1623);
      let f = () => (e) => {
        (0, j.Vn)(e, (e) => {
          if ("leafDirective" === e.type && "youtube" === e.name) {
            let A = e.data || (e.data = {});
            (A.hName = "iframe"),
              (A.hProperties = {
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
      var p = t(7797),
        E = t(5280),
        w = t(9360),
        B = t(1924),
        Q = t(2935),
        I = t(3687),
        C = t(6235);
      let v = {
        img: function (e) {
          let { alt: A, src: i, width: r, height: s, ...a } = e;
          return i.startsWith("http")
            ? (0, n.jsx)("img", {
                src: i,
                alt: A,
                width: r && (Number.isInteger(r) ? r : parseInt(r)),
                height: s && (Number.isInteger(s) ? s : parseInt(s)),
                ...a,
              })
            : (0, n.jsx)(C.t, {
                src: t(7192)("./".concat(i)),
                alt: A || "image",
                sizes: "responsive",
                width: void 0,
                height: void 0,
                ...a,
              });
        },
      };
      function b(e) {
        let { markdownSource: A } = e;
        return (0, c.useMemo)(
          () =>
            (function (e, A) {
              let t = {
                jsx: n.jsx,
                jsxs: n.jsxs,
                Fragment: n.Fragment,
                components: A,
                development: !1,
              };
              return (0, d.l)()
                .use(h.Z)
                .use([g.Z, m.Z, x.Z, _.Z, f])
                .use(p.Z)
                .use([
                  E.Z,
                  w.Z,
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
                .use(I.Z, t)
                .processSync(e).result;
            })(A, v),
          [A],
        );
      }
      var y = t(6368),
        D = t.n(y),
        N = t(5909),
        k = t(8516),
        F = t.n(k),
        M = !0,
        S = function (e) {
          let { postData: A, siteConfig: t } = e,
            { t: r } = (0, i.$G)("common"),
            { siteAuthor: c } = t;
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
                      children: A.title,
                    }),
                    A.date &&
                      (0, n.jsx)("div", {
                        className: D().lightText,
                        children: (0, n.jsx)(u, { dateString: A.date }),
                      }),
                    (0, n.jsx)(b, { markdownSource: A.markdownSource }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: F().backToHome,
                  children: (0, n.jsx)(s(), {
                    href: "/".concat(A.lang),
                    children: r("Back to home"),
                  }),
                }),
              ],
            }),
          });
        };
    },
    9631: function (e) {
      e.exports = {
        tags: "FeaturesTags_tags__qev0a",
        tag: "FeaturesTags_tag__f8Svr",
      };
    },
    8516: function (e) {
      e.exports = {
        container: "Post_container__UTtnv",
        header: "Post_header__LayjC",
        backToHome: "Post_backToHome__tpOvL",
      };
    },
    6368: function (e) {
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
    7192: function (e, A, t) {
      var n = { "./test.jpg": 1130 };
      function i(e) {
        return t(r(e));
      }
      function r(e) {
        if (!t.o(n, e)) {
          var A = Error("Cannot find module '" + e + "'");
          throw ((A.code = "MODULE_NOT_FOUND"), A);
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
    e.O(0, [658, 265, 124, 888, 774, 179], function () {
      return e((e.s = 592));
    }),
      (_N_E = e.O());
  },
]);
