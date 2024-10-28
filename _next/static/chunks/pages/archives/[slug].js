(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    4384: function (A, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/archives/[slug]",
        function () {
          return t(4907);
        },
      ]);
    },
    2610: function (A, e, t) {
      "use strict";
      t.r(e),
        (e.default = {
          src: "/_next/static/media/test.bd907638.jpg",
          height: 1920,
          width: 1920,
          blurDataURL:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAb/2gAMAwEAAhADEAAAALwJRf/EABwQAAEDBQAAAAAAAAAAAAAAABIAAREDExQhMv/aAAgBAQABPwAq2SIPaDrUSv/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8Absw//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AAy//9k=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    4907: function (A, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSG: function () {
            return _;
          },
          default: function () {
            return b;
          },
        });
      var r = t(5893),
        n = t(7294),
        i = t(9875),
        s = t(3698),
        a = t(65),
        u = t(7437),
        o = t(5343),
        c = t(3846),
        l = t(1623);
      let h = () => (A) => {
        (0, l.Vn)(A, (A) => {
          if ("leafDirective" === A.type && "youtube" === A.name) {
            let e = A.data || (A.data = {});
            (e.hName = "iframe"),
              (e.hProperties = {
                src: "https://www.youtube.com/embed/".concat(A.attributes.vid),
                title: A.children[0].value,
                width: "560",
                height: "315",
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: !0,
              }),
              (A.children = []);
          }
        });
      };
      var d = t(7797),
        g = t(5280),
        f = t(9360),
        p = t(1924),
        E = t(2935),
        w = t(3687),
        m = t(261);
      let Q = {
        img: function (A) {
          let { alt: e, src: n, width: i, height: s, ...a } = A;
          return n.startsWith("http")
            ? (0, r.jsx)("img", {
                src: n,
                alt: e,
                width: i && (Number.isInteger(i) ? i : parseInt(i)),
                height: s && (Number.isInteger(s) ? s : parseInt(s)),
                ...a,
              })
            : (0, r.jsx)(m.t, {
                src: t(7192)("./".concat(n)),
                alt: e || "image",
                sizes: "responsive",
                width: void 0,
                height: void 0,
                ...a,
              });
        },
      };
      function B(A) {
        let { markdownSource: e } = A;
        return (0, n.useMemo)(
          () =>
            (function (A, e) {
              let t = {
                jsx: r.jsx,
                jsxs: r.jsxs,
                Fragment: r.Fragment,
                components: e,
                development: !1,
              };
              return (0, i.l)()
                .use(s.Z)
                .use([a.Z, u.Z, o.Z, c.Z, h])
                .use(d.Z)
                .use([
                  g.Z,
                  f.Z,
                  p.Z,
                  [
                    E.Z,
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
                .use(w.Z, t)
                .processSync(A).result;
            })(e, Q),
          [e],
        );
      }
      var _ = !0,
        b = function (A) {
          let { markdownContentSource: e, tocHtml: t } = A;
          return (0, r.jsxs)("main", {
            children: [
              (0, r.jsx)("nav", { dangerouslySetInnerHTML: { __html: t } }),
              (0, r.jsx)("article", {
                children: (0, r.jsx)(B, { markdownSource: e }),
              }),
            ],
          });
        };
    },
    7192: function (A, e, t) {
      var r = { "./test.jpg": 2610 };
      function n(A) {
        return t(i(A));
      }
      function i(A) {
        if (!t.o(r, A)) {
          var e = Error("Cannot find module '" + A + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return r[A];
      }
      (n.keys = function () {
        return Object.keys(r);
      }),
        (n.resolve = i),
        (A.exports = n),
        (n.id = 7192);
    },
  },
  function (A) {
    A.O(0, [658, 265, 893, 888, 774, 179], function () {
      return A((A.s = 4384));
    }),
      (_N_E = A.O());
  },
]);
