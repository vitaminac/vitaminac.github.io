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
          return a;
        },
      });
      var s = n(5893),
        r = n(7294);
      function a(t) {
        let e = (0, r.useRef)(null),
          [n, a] = (0, r.useState)(),
          [i, c] = (0, r.useState)(0),
          o = (0, r.useCallback)(() => {
            a(e.current.contentWindow.document.body);
          }, [a]),
          l = (0, r.useCallback)(() => {
            c(n.scrollHeight);
          }, [n, c]);
        return (
          (0, r.useEffect)(() => {
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
          (0, s.jsx)("iframe", {
            title: t.title,
            src: t.src,
            width: "100%",
            height: "".concat(i, "px"),
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
      var s = n(5893),
        r = n(1798),
        a = n(3967),
        i = n.n(a),
        c = n(1664),
        o = n.n(c),
        l = n(8716),
        u = n.n(l);
      function d(t) {
        let { lang: e, tags: n } = t,
          { t: a } = (0, r.$G)("feature-tags"),
          c = n.map((t) =>
            (0, s.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, s.jsx)(
                  o(),
                  {
                    className: i()(u().tag, "tw-border-white tw-text-white"),
                    href: "/posts/langs/".concat(e, "/tags/").concat(t),
                    children: t,
                  },
                  t,
                ),
              },
              t,
            ),
          );
        return (0, s.jsxs)("section", {
          className: i()(u().tags, "tw-text-center"),
          children: [
            (0, s.jsx)("h6", { children: a("Tags") }),
            (0, s.jsx)("ul", { className: "tw-p-0", children: c }),
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
        return (0, s.jsx)("time", {
          dateTime: e,
          children: (0, w.WU)(n, "LLLL d, yyyy"),
        });
      }
      var x = n(5152),
        f = n.n(x),
        j = n(3944);
      function p(t) {
        return (0, s.jsx)(j.qw, {
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
        let { children: e, postData: n, siteConfig: a } = t,
          { t: i } = (0, r.$G)("post-layout"),
          { siteAuthor: c, disqusUsername: o } = a;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.K, {
              title: n.title,
              author: c,
              lang: n.lang,
              description: n.description,
              keywords: n.tags,
            }),
            (0, s.jsxs)("header", {
              className:
                "tw-flex tw-h-96 tw-w-screen tw-flex-col tw-content-center tw-justify-center tw-bg-cover tw-bg-center tw-bg-no-repeat tw-text-center tw-text-white",
              style: {
                backgroundImage: "url(".concat(
                  "/_next/static/media/default-post-preview.c96b099a.jpeg",
                  ")",
                ),
              },
              children: [
                (0, s.jsx)("h1", { children: n.title }),
                (0, s.jsx)("h6", { children: i("Author", { author: c }) }),
                (0, s.jsx)("h6", {
                  children: (0, s.jsx)(m, { dateString: n.date }),
                }),
                (0, s.jsx)(d, { lang: n.lang, tags: n.tags }),
              ],
            }),
            (0, s.jsxs)("main", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                e,
                (0, s.jsx)(_, {
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
          return i;
        },
      });
      var s = n(5893),
        r = n(9008),
        a = n.n(r);
      function i(t) {
        return (0, s.jsxs)(a(), {
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
            return i;
          },
          default: function () {
            return c;
          },
        });
      var s = n(5893),
        r = n(2144),
        a = n(3101),
        i = !0,
        c = function (t) {
          return (0, s.jsx)(a.j, {
            ...t,
            children: (0, s.jsx)(r.C, {
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
