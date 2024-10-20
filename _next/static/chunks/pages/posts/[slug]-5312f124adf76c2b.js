(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    592: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]",
        function () {
          return n(8204);
        },
      ]);
    },
    2144: function (t, e, n) {
      "use strict";
      n.d(e, {
        C: function () {
          return r;
        },
      });
      var s = n(5893),
        i = n(7294);
      function r(t) {
        let e = (0, i.useRef)(null),
          [n, r] = (0, i.useState)(),
          [a, c] = (0, i.useState)(0),
          o = (0, i.useCallback)(() => {
            r(e.current.contentWindow.document.body);
          }, [r]),
          u = (0, i.useCallback)(() => {
            c(n.scrollHeight);
          }, [n, c]);
        return (
          (0, i.useEffect)(() => {
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
    4958: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return w;
        },
      });
      var s = n(5893),
        i = n(3967),
        r = n.n(i),
        a = n(1798),
        c = n(1664),
        o = n.n(c),
        u = n(8716),
        l = n.n(u);
      function d(t) {
        let { tags: e } = t,
          { t: n } = (0, a.$G)("feature-tags"),
          i = e.map((t) =>
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
          className: r()(l().tags, "tw-text-center"),
          children: [
            (0, s.jsx)("h6", { children: n("Tags") }),
            (0, s.jsx)("ul", { className: "tw-p-0", children: i }),
          ],
        });
      }
      var g = n(5853),
        m = n(5152),
        f = n.n(m),
        x = n(3944);
      function h(t) {
        return (0, s.jsx)(x.qw, {
          shortname: t.username,
          config: {
            url: window.location.href,
            identifier: t.id,
            title: t.title,
            language: t.lang,
          },
        });
      }
      let j = f()(() => Promise.resolve(h), { ssr: !1 });
      function w(t) {
        let { children: e, postData: n, siteConfig: i } = t,
          { siteAuthor: r, disqusUsername: a } = i;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.K, {
              title: n.title,
              author: r,
              lang: n.lang,
              description: n.description,
              keywords: n.tags,
            }),
            (0, s.jsxs)("main", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                e,
                (0, s.jsx)(j, {
                  username: a,
                  id: n.slug,
                  title: n.title,
                  lang: n.lang,
                }),
                (0, s.jsx)(d, { tags: n.tags }),
              ],
            }),
          ],
        });
      }
    },
    5853: function (t, e, n) {
      "use strict";
      n.d(e, {
        K: function () {
          return a;
        },
      });
      var s = n(5893),
        i = n(9008),
        r = n.n(i);
      function a(t) {
        return (0, s.jsxs)(r(), {
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
    8204: function (t, e, n) {
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
        i = n(2144),
        r = n(4958),
        a = !0,
        c = function (t) {
          return (0, s.jsx)(r.j, {
            ...t,
            children: (0, s.jsx)(i.C, {
              title: t.postData.slug,
              src: t.postData.path,
            }),
          });
        };
    },
    8716: function (t) {
      t.exports = {
        tags: "FeaturesTags_tags__qev0a",
        tag: "FeaturesTags_tag__f8Svr",
      };
    },
  },
  function (t) {
    t.O(0, [98, 888, 774, 179], function () {
      return t((t.s = 592));
    }),
      (_N_E = t.O());
  },
]);
