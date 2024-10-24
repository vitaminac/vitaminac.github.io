(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    4446: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/drafts/[slug]",
        function () {
          return n(9032);
        },
      ]);
    },
    2610: function (e, t, n) {
      "use strict";
      n.r(t),
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
    3045: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return a;
        },
      });
      var r = n(5893);
      n(7294);
      var i = n(197),
        s = n(949);
      function a(e) {
        let { dateString: t } = e,
          n = (0, i.D)(t);
        return (0, r.jsxs)("span", {
          children: [
            (0, r.jsx)("i", { className: "fa-regular fa-calendar" }),
            (0, r.jsx)("time", {
              className: "tw-pl-1.5",
              dateTime: t,
              children: (0, s.WU)(n, "LLLL d, yyyy"),
            }),
          ],
        });
      }
    },
    8174: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return w;
        },
      });
      var r = n(5893),
        i = n(1798),
        s = n(1734),
        a = n(5853),
        A = n(3045),
        c = n(5152),
        o = n.n(c),
        l = n(3944);
      function u(e) {
        return (0, r.jsx)(l.qw, {
          shortname: e.username,
          config: {
            url: window.location.href,
            identifier: e.id,
            title: e.title,
            language: e.lang,
          },
        });
      }
      let d = o()(() => Promise.resolve(u), { ssr: !1 });
      function w(e) {
        let { children: t, postData: n, siteConfig: c } = e,
          { t: o } = (0, i.$G)("post-layout"),
          { siteAuthor: l, disqusUsername: u } = c;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(a.K, {
              title: n.title,
              author: l,
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
                (0, r.jsx)("p", { children: o("Author", { author: l }) }),
                (0, r.jsx)(A.E, { dateString: n.date }),
                (0, r.jsxs)("section", {
                  className: "tw-mt-3 tw-text-center",
                  children: [
                    (0, r.jsxs)("p", { children: [o("Tags"), ":"] }),
                    (0, r.jsx)(s.w, { lang: n.lang, tags: n.tags }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                (0, r.jsx)("main", {
                  children: (0, r.jsx)("article", { children: t }),
                }),
                (0, r.jsx)("aside", {
                  children: (0, r.jsx)(d, {
                    username: u,
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
    1734: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(5893),
        i = n(1664),
        s = n.n(i);
      function a(e) {
        let { lang: t, tags: n } = e,
          i = n.map((e) =>
            (0, r.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, r.jsx)(
                  s(),
                  {
                    className:
                      "tw-m-0.5 tw-inline-block tw-rounded tw-border tw-border-solid tw-border-white tw-bg-neutral-300 tw-px-2 tw-text-sm tw-leading-6 tw-text-white tw-no-underline hover:tw-bg-sky-300",
                    href: "/posts/langs/".concat(t, "/tags/").concat(e),
                    children: e,
                  },
                  e,
                ),
              },
              e,
            ),
          );
        return (0, r.jsx)("ul", { className: "tw-p-0", children: i });
      }
    },
    5853: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(5893),
        i = n(9008),
        s = n.n(i);
      function a(e) {
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
              content: e.lang,
            }),
            (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, r.jsx)("title", { children: e.title }),
            (0, r.jsx)("meta", { name: "og:title", content: e.title }),
            (0, r.jsx)("meta", { name: "author", content: e.author }),
            e.description &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", {
                    name: "description",
                    content: e.description,
                  }),
                  (0, r.jsx)("meta", {
                    name: "og:description",
                    content: e.description,
                  }),
                ],
              }),
            e.previewImage &&
              (0, r.jsx)("meta", {
                property: "og:image",
                content: e.previewImage,
              }),
            e.keywords &&
              (0, r.jsx)("meta", {
                name: "keywords",
                content: e.keywords.join(","),
              }),
            (0, r.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
          ],
        });
      }
    },
    9032: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return b;
          },
          default: function () {
            return y;
          },
        });
      var r = n(5893),
        i = n(7294),
        s = n(9875),
        a = n(3698),
        A = n(65),
        c = n(7437),
        o = n(5343),
        l = n(3846),
        u = n(1623);
      let d = () => (e) => {
        (0, u.Vn)(e, (e) => {
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
      var w = n(7797),
        g = n(5280),
        h = n(9360),
        m = n(1924),
        x = n(2935),
        p = n(3687),
        f = n(261);
      let j = {
        img: function (e) {
          let { alt: t, src: i, width: s, height: a, ...A } = e;
          return i.startsWith("http")
            ? (0, r.jsx)("img", {
                src: i,
                alt: t,
                width: s && (Number.isInteger(s) ? s : parseInt(s)),
                height: a && (Number.isInteger(a) ? a : parseInt(a)),
                ...A,
              })
            : (0, r.jsx)(f.t, {
                src: n(7192)("./".concat(i)),
                alt: t || "image",
                sizes: "responsive",
                width: void 0,
                height: void 0,
                ...A,
              });
        },
      };
      function v(e) {
        let { markdownSource: t } = e;
        return (0, i.useMemo)(
          () =>
            (function (e, t) {
              let n = {
                jsx: r.jsx,
                jsxs: r.jsxs,
                Fragment: r.Fragment,
                components: t,
                development: !1,
              };
              return (0, s.l)()
                .use(a.Z)
                .use([A.Z, c.Z, o.Z, l.Z, d])
                .use(w.Z)
                .use([
                  g.Z,
                  h.Z,
                  m.Z,
                  [
                    x.Z,
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
                .use(p.Z, n)
                .processSync(e).result;
            })(t, j),
          [t],
        );
      }
      var E = n(8174),
        b = !0,
        y = function (e) {
          let { postData: t, siteConfig: n } = e;
          return (0, r.jsx)(E.j, {
            postData: t,
            siteConfig: n,
            children: (0, r.jsx)(v, {
              markdownSource: t.markdownContentSource,
            }),
          });
        };
    },
    7192: function (e, t, n) {
      var r = { "./test.jpg": 2610 };
      function i(e) {
        return n(s(e));
      }
      function s(e) {
        if (!n.o(r, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = s),
        (e.exports = i),
        (i.id = 7192);
    },
  },
  function (e) {
    e.O(0, [658, 265, 470, 287, 893, 888, 774, 179], function () {
      return e((e.s = 4446));
    }),
      (_N_E = e.O());
  },
]);
