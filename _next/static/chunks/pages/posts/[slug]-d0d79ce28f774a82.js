(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    592: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]",
        function () {
          return n(2375);
        },
      ]);
    },
    4227: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return i;
        },
      });
      var s = n(5893),
        r = n(7294);
      function i(t) {
        let e = (0, r.useRef)(null),
          [n, i] = (0, r.useState)(),
          [a, c] = (0, r.useState)(0),
          o = (0, r.useCallback)(() => {
            i(e.current.contentWindow.document.body);
          }, [i]),
          u = (0, r.useCallback)(() => {
            c(n.scrollHeight);
          }, [n, c]);
        return (
          (0, r.useEffect)(() => {
            if (n) {
              let t = new ResizeObserver(u);
              return (
                t.observe(n),
                () => {
                  t.unobserve(n);
                }
              );
            }
          }, [n, u]),
          (0, s.jsx)("iframe", {
            title: t.title,
            src: t.src,
            width: "100%",
            height: "".concat(a, "px"),
            ref: e,
            onLoad: o,
          })
        );
      }
    },
    5909: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return m;
        },
      });
      var s = n(5893),
        r = n(3967),
        i = n.n(r),
        a = n(1798),
        c = n(1664),
        o = n.n(c),
        u = n(9631),
        l = n.n(u);
      function d(t) {
        let { tags: e } = t,
          { t: n } = (0, a.$G)("feature-tags"),
          r = e.map((t) =>
            (0, s.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, s.jsx)(
                  o(),
                  { className: l().tag, href: "/tags#".concat(t), children: t },
                  t,
                ),
              },
              t,
            ),
          );
        return (0, s.jsxs)("section", {
          className: i()(l().tags, "tw-text-center"),
          children: [
            (0, s.jsx)("h6", { children: n("Tags") }),
            (0, s.jsx)("ul", { className: "tw-p-0", children: r }),
          ],
        });
      }
      var f = n(1864);
      function m(t) {
        let { children: e, postData: n, siteConfig: r } = t,
          { siteAuthor: i } = r;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(f.K, {
              title: n.title,
              author: i,
              lang: n.lang,
              description: n.description,
              keywords: n.tags,
            }),
            (0, s.jsxs)("main", {
              children: [e, (0, s.jsx)(d, { tags: n.tags })],
            }),
          ],
        });
      }
    },
    1864: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return a;
        },
      });
      var s = n(5893),
        r = n(9008),
        i = n.n(r);
      function a(t) {
        return (0, s.jsxs)(i(), {
          children: [
            (0, s.jsx)("meta", { charSet: "utf-8" }),
            (0, s.jsx)("meta", {
              httpEquiv: "X-UA-Compatible",
              content: "IE=edge",
            }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            (0, s.jsx)("meta", {
              httpEquiv: "content-language",
              content: t.lang,
            }),
            (0, s.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, s.jsx)("title", { children: t.title }),
            (0, s.jsx)("meta", { name: "og:title", content: t.title }),
            (0, s.jsx)("meta", { name: "author", content: t.author }),
            t.description &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("meta", {
                    name: "description",
                    content: t.description,
                  }),
                  (0, s.jsx)("meta", {
                    name: "og:description",
                    content: t.description,
                  }),
                ],
              }),
            t.previewImage &&
              (0, s.jsx)("meta", {
                property: "og:image",
                content: t.previewImage,
              }),
            t.keywords &&
              (0, s.jsx)("meta", {
                name: "keywords",
                content: t.keywords.join(","),
              }),
            (0, s.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
          ],
        });
      }
    },
    2375: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return a;
          },
          default: function () {
            return c;
          },
        });
      var s = n(5893),
        r = n(4227),
        i = n(5909),
        a = !0,
        c = function (t) {
          return (0, s.jsx)(i.j, {
            ...t,
            children: (0, s.jsx)(r.C, {
              title: t.postData.slug,
              src: t.postData.path,
            }),
          });
        };
    },
    9631: function (t) {
      t.exports = {
        tags: "FeaturesTags_tags__qev0a",
        tag: "FeaturesTags_tag__f8Svr",
      };
    },
    9008: function (t, e, n) {
      t.exports = n(6665);
    },
  },
  function (t) {
    t.O(0, [888, 774, 179], function () {
      return t((t.s = 592));
    }),
      (_N_E = t.O());
  },
]);
