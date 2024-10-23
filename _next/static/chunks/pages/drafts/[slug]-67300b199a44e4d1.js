(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [87],
  {
    4446: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/drafts/[slug]",
        function () {
          return n(1360);
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
    3101: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return v;
        },
      });
      var r = n(5893),
        i = n(1798),
        a = n(3967),
        s = n.n(a),
        A = n(1664),
        c = n.n(A),
        o = n(8716),
        l = n.n(o);
      function u(e) {
        let { lang: t, tags: n } = e,
          { t: a } = (0, i.$G)("feature-tags"),
          A = n.map((e) =>
            (0, r.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, r.jsx)(
                  c(),
                  {
                    className: s()(l().tag, "tw-border-white tw-text-white"),
                    href: "/posts/langs/".concat(t, "/tags/").concat(e),
                    children: e,
                  },
                  e,
                ),
              },
              e,
            ),
          );
        return (0, r.jsxs)("section", {
          className: s()(l().tags, "tw-text-center"),
          children: [
            (0, r.jsx)("h6", { children: a("Tags") }),
            (0, r.jsx)("ul", { className: "tw-p-0", children: A }),
          ],
        });
      }
      var d = n(5853);
      n(7294);
      var g = n(197),
        h = n(949);
      function m(e) {
        let { dateString: t } = e,
          n = (0, g.D)(t);
        return (0, r.jsx)("time", {
          dateTime: t,
          children: (0, h.WU)(n, "LLLL d, yyyy"),
        });
      }
      var w = n(5152),
        x = n.n(w),
        f = n(3944);
      function p(e) {
        return (0, r.jsx)(f.qw, {
          shortname: e.username,
          config: {
            url: window.location.href,
            identifier: e.id,
            title: e.title,
            language: e.lang,
          },
        });
      }
      let j = x()(() => Promise.resolve(p), { ssr: !1 });
      function v(e) {
        let { children: t, postData: n, siteConfig: a } = e,
          { t: s } = (0, i.$G)("post-layout"),
          { siteAuthor: A, disqusUsername: c } = a;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.K, {
              title: n.title,
              author: A,
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
                (0, r.jsx)("h6", { children: s("Author", { author: A }) }),
                (0, r.jsx)("h6", {
                  children: (0, r.jsx)(m, { dateString: n.date }),
                }),
                (0, r.jsx)(u, { lang: n.lang, tags: n.tags }),
              ],
            }),
            (0, r.jsxs)("main", {
              className: "tw-mx-auto tw-w-11/12",
              children: [
                t,
                (0, r.jsx)(j, {
                  username: c,
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
    5853: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return s;
        },
      });
      var r = n(5893),
        i = n(9008),
        a = n.n(i);
      function s(e) {
        return (0, r.jsxs)(a(), {
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
    1360: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return _;
          },
          default: function () {
            return b;
          },
        });
      var r = n(5893),
        i = n(7294),
        a = n(9875),
        s = n(3698),
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
      var g = n(7797),
        h = n(5280),
        m = n(9360),
        w = n(1924),
        x = n(2935),
        f = n(3687),
        p = n(261);
      let j = {
        img: function (e) {
          let { alt: t, src: i, width: a, height: s, ...A } = e;
          return i.startsWith("http")
            ? (0, r.jsx)("img", {
                src: i,
                alt: t,
                width: a && (Number.isInteger(a) ? a : parseInt(a)),
                height: s && (Number.isInteger(s) ? s : parseInt(s)),
                ...A,
              })
            : (0, r.jsx)(p.t, {
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
              return (0, a.l)()
                .use(s.Z)
                .use([A.Z, c.Z, o.Z, l.Z, d])
                .use(g.Z)
                .use([
                  h.Z,
                  m.Z,
                  w.Z,
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
                .use(f.Z, n)
                .processSync(e).result;
            })(t, j),
          [t],
        );
      }
      var E = n(3101),
        _ = !0,
        b = function (e) {
          let { postData: t } = e;
          return (0, r.jsx)(E.j, {
            ...e,
            children: (0, r.jsx)("article", {
              children: (0, r.jsx)(v, { markdownSource: t.markdownSource }),
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
    7192: function (e, t, n) {
      var r = { "./test.jpg": 2610 };
      function i(e) {
        return n(a(e));
      }
      function a(e) {
        if (!n.o(r, e)) {
          var t = Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (i.keys = function () {
        return Object.keys(r);
      }),
        (i.resolve = a),
        (e.exports = i),
        (i.id = 7192);
    },
  },
  function (e) {
    e.O(0, [658, 265, 446, 893, 888, 774, 179], function () {
      return e((e.s = 4446));
    }),
      (_N_E = e.O());
  },
]);
