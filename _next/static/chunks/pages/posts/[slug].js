(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [922],
  {
    592: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]",
        function () {
          return n(1475);
        },
      ]);
    },
    3045: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return a;
        },
      });
      var r = n(5893);
      n(7294);
      var i = n(197),
        s = n(949);
      function a(t) {
        let { dateString: e } = t,
          n = (0, i.D)(e);
        return (0, r.jsxs)("span", {
          children: [
            (0, r.jsx)("i", { className: "fa-regular fa-calendar" }),
            (0, r.jsx)("time", {
              className: "tw-pl-1.5",
              dateTime: e,
              children: (0, s.WU)(n, "LLLL d, yyyy"),
            }),
          ],
        });
      }
    },
    1734: function (t, e, n) {
      "use strict";
      n.d(e, {
        w: function () {
          return a;
        },
      });
      var r = n(5893),
        i = n(1664),
        s = n.n(i);
      function a(t) {
        let { lang: e, tags: n } = t,
          i = n.map((t) =>
            (0, r.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, r.jsx)(
                  s(),
                  {
                    className:
                      "tw-m-0.5 tw-inline-block tw-rounded tw-border tw-border-solid tw-border-white tw-bg-neutral-300 tw-px-2 tw-text-sm tw-leading-6 tw-text-white tw-no-underline hover:tw-bg-sky-300",
                    href: "/posts/langs/".concat(e, "/tags/").concat(t),
                    children: t,
                  },
                  t,
                ),
              },
              t,
            ),
          );
        return (0, r.jsx)("ul", { className: "tw-p-0", children: i });
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
        i = n(9008),
        s = n.n(i);
      function a(t) {
        return (0, r.jsxs)(s(), {
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
    1475: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return h;
          },
          default: function () {
            return f;
          },
        });
      var r = n(5893),
        i = n(7294);
      function s(t) {
        let e = (0, i.useRef)(null),
          [n, s] = (0, i.useState)(),
          [a, c] = (0, i.useState)(0),
          l = (0, i.useCallback)(() => {
            s(e.current.contentWindow.document.body);
          }, [s]),
          o = (0, i.useCallback)(() => {
            c(n.scrollHeight);
          }, [n, c]);
        return (
          (0, i.useEffect)(() => {
            if (n) {
              let t = new ResizeObserver(o);
              return (
                t.observe(n),
                () => {
                  t.unobserve(n);
                }
              );
            }
          }, [n, o]),
          (0, r.jsx)("iframe", {
            title: t.title,
            src: t.src,
            width: "100%",
            height: "".concat(a, "px"),
            ref: e,
            onLoad: l,
          })
        );
      }
      var a = n(1798),
        c = n(1734),
        l = n(5853),
        o = n(3045),
        u = n(5152),
        d = n.n(u),
        w = n(3944);
      function m(t) {
        return (0, r.jsx)(w.qw, {
          shortname: t.username,
          config: {
            url: window.location.href,
            identifier: t.id,
            title: t.title,
            language: t.lang,
          },
        });
      }
      let x = d()(() => Promise.resolve(m), { ssr: !1 });
      function g(t) {
        let { children: e, postData: n, siteConfig: i } = t,
          { t: s } = (0, a.$G)("post-layout"),
          { siteAuthor: u, disqusUsername: d } = i;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.K, {
              title: n.title,
              author: u,
              lang: n.lang,
              description: n.description,
              keywords: n.tags,
              previewImage: n.previewImageUrl,
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
                (0, r.jsx)("p", { children: s("Author", { author: u }) }),
                (0, r.jsx)(o.E, { dateString: n.date }),
                (0, r.jsxs)("section", {
                  className: "tw-mt-3 tw-text-center",
                  children: [
                    (0, r.jsxs)("p", { children: [s("Tags"), ":"] }),
                    (0, r.jsx)(c.w, { lang: n.lang, tags: n.tags }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                (0, r.jsx)("main", {
                  children: (0, r.jsx)("article", { children: e }),
                }),
                (0, r.jsx)("aside", {
                  children: (0, r.jsx)(x, {
                    username: d,
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
      var h = !0,
        f = function (t) {
          let { postData: e, siteConfig: n } = t;
          return (0, r.jsx)(g, {
            postData: e,
            siteConfig: n,
            children: (0, r.jsx)(s, { title: e.slug, src: e.path }),
          });
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
