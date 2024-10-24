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
    3045: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return i;
        },
      });
      var s = n(5893);
      n(7294);
      var r = n(197),
        a = n(949);
      function i(t) {
        let { dateString: e } = t,
          n = (0, r.D)(e);
        return (0, s.jsxs)("span", {
          children: [
            (0, s.jsx)("i", { className: "fa-regular fa-calendar" }),
            (0, s.jsx)("time", {
              className: "tw-pl-1.5",
              dateTime: e,
              children: (0, a.WU)(n, "LLLL d, yyyy"),
            }),
          ],
        });
      }
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
    269: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return p;
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
      var g = n(5853),
        m = n(3045),
        w = n(5152),
        x = n.n(w),
        h = n(3944);
      function f(t) {
        return (0, s.jsx)(h.qw, {
          shortname: t.username,
          config: {
            url: window.location.href,
            identifier: t.id,
            title: t.title,
            language: t.lang,
          },
        });
      }
      let j = x()(() => Promise.resolve(f), { ssr: !1 });
      function p(t) {
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
              previewImage: n.previewImageUrl,
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
                (0, s.jsx)("span", { children: i("Author", { author: c }) }),
                (0, s.jsx)(m.E, { dateString: n.date }),
                (0, s.jsx)(d, { lang: n.lang, tags: n.tags }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                (0, s.jsx)("main", {
                  children: (0, s.jsx)("article", { children: e }),
                }),
                (0, s.jsx)("aside", {
                  children: (0, s.jsx)(j, {
                    username: o,
                    id: n.slug,
                    title: n.title,
                    lang: n.lang,
                  }),
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
        a = n(269),
        i = !0,
        c = function (t) {
          let { postData: e, siteConfig: n } = t;
          return (0, s.jsx)(a.j, {
            postData: e,
            siteConfig: n,
            children: (0, s.jsx)(r.C, { title: e.slug, src: e.path }),
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
    t.O(0, [470, 287, 888, 774, 179], function () {
      return t((t.s = 592));
    }),
      (_N_E = t.O());
  },
]);
