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
          return i;
        },
      });
      var r = n(5893),
        s = n(7294);
      function i(t) {
        let e = (0, s.useRef)(null),
          [n, i] = (0, s.useState)(),
          [a, c] = (0, s.useState)(0),
          o = (0, s.useCallback)(() => {
            i(e.current.contentWindow.document.body);
          }, [i]),
          l = (0, s.useCallback)(() => {
            c(n.scrollHeight);
          }, [n, c]);
        return (
          (0, s.useEffect)(() => {
            if (n) {
              let t = new ResizeObserver(l);
              return (
                t.observe(n),
                () => {
                  t.unobserve(n);
                }
              );
            }
          }, [n, l]),
          (0, r.jsx)("iframe", {
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
    3101: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return v;
        },
      });
      var r = n(5893),
        s = n(1798),
        i = n(3967),
        a = n.n(i),
        c = n(1664),
        o = n.n(c),
        l = n(8716),
        u = n.n(l);
      function d(t) {
        let { tags: e } = t,
          { t: n } = (0, s.$G)("feature-tags"),
          i = e.map((t) =>
            (0, r.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, r.jsx)(
                  o(),
                  {
                    className: a()(u().tag, "tw-border-white tw-text-white"),
                    href: "/tags#".concat(t),
                    children: t,
                  },
                  t,
                ),
              },
              t,
            ),
          );
        return (0, r.jsxs)("section", {
          className: a()(u().tags, "tw-text-center"),
          children: [
            (0, r.jsx)("h6", { children: n("Tags") }),
            (0, r.jsx)("ul", { className: "tw-p-0", children: i }),
          ],
        });
      }
      var g = n(5853);
      n(7294);
      var h = n(197),
        w = n(949);
      function m(t) {
        let { dateString: e } = t,
          n = (0, h.D)(e);
        return (0, r.jsx)("time", {
          dateTime: e,
          children: (0, w.WU)(n, "LLLL d, yyyy"),
        });
      }
      var x = n(5152),
        f = n.n(x),
        j = n(3944);
      function p(t) {
        return (0, r.jsx)(j.qw, {
          shortname: t.username,
          config: {
            url: window.location.href,
            identifier: t.id,
            title: t.title,
            language: t.lang,
          },
        });
      }
      let _ = f()(() => Promise.resolve(p), { ssr: !1 });
      function v(t) {
        let { children: e, postData: n, siteConfig: i } = t,
          { t: a } = (0, s.$G)("post-layout"),
          { siteAuthor: c, disqusUsername: o } = i;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(g.K, {
              title: n.title,
              author: c,
              lang: n.lang,
              description: n.description,
              keywords: n.tags,
            }),
            (0, r.jsxs)("header", {
              className:
                "tw-flex tw-h-96 tw-w-screen tw-flex-col tw-content-center tw-justify-center tw-bg-cover tw-bg-center tw-bg-no-repeat tw-text-center tw-text-white",
              style: {
                backgroundImage: "url(".concat(
                  "/_next/static/media/default-post-preview.c96b099a.jpeg",
                  ")",
                ),
              },
              children: [
                (0, r.jsx)("h1", { children: n.title }),
                (0, r.jsx)("h6", { children: a("Author", { author: c }) }),
                (0, r.jsx)("h6", {
                  children: (0, r.jsx)(m, { dateString: n.date }),
                }),
                (0, r.jsx)(d, { tags: n.tags }),
              ],
            }),
            (0, r.jsxs)("main", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                e,
                (0, r.jsx)(_, {
                  username: o,
                  id: n.slug,
                  title: n.title,
                  lang: n.lang,
                }),
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
      var r = n(5893),
        s = n(9008),
        i = n.n(s);
      function a(t) {
        return (0, r.jsxs)(i(), {
          children: [
            (0, r.jsx)("meta", { charSet: "utf-8" }),
            (0, r.jsx)("meta", {
              httpEquiv: "X-UA-Compatible",
              content: "IE=edge",
            }),
            (0, r.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            (0, r.jsx)("meta", {
              httpEquiv: "content-language",
              content: t.lang,
            }),
            (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, r.jsx)("title", { children: t.title }),
            (0, r.jsx)("meta", { name: "og:title", content: t.title }),
            (0, r.jsx)("meta", { name: "author", content: t.author }),
            t.description &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", {
                    name: "description",
                    content: t.description,
                  }),
                  (0, r.jsx)("meta", {
                    name: "og:description",
                    content: t.description,
                  }),
                ],
              }),
            t.previewImage &&
              (0, r.jsx)("meta", {
                property: "og:image",
                content: t.previewImage,
              }),
            t.keywords &&
              (0, r.jsx)("meta", {
                name: "keywords",
                content: t.keywords.join(","),
              }),
            (0, r.jsx)("meta", {
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
      var r = n(5893),
        s = n(2144),
        i = n(3101),
        a = !0,
        c = function (t) {
          return (0, r.jsx)(i.j, {
            ...t,
            children: (0, r.jsx)(s.C, {
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
    t.O(0, [446, 888, 774, 179], function () {
      return t((t.s = 592));
    }),
      (_N_E = t.O());
  },
]);
