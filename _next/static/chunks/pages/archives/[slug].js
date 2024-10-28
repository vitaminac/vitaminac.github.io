(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    4384: function (e, A, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/archives/[slug]",
        function () {
          return t(4907);
        },
      ]);
    },
    2610: function (e, A, t) {
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
    4907: function (e, A, t) {
      "use strict";
      t.r(A),
        t.d(A, {
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
        u = t(3219),
        a = t(259),
        o = t(7423),
        c = t(7437),
        l = t(5343),
        h = t(8848),
        d = t(1623);
      let g = () => (e) => {
        (0, d.Vn)(e, (e) => {
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
      var p = t(9685),
        f = t(5280),
        E = t(9360),
        w = t(6702),
        m = t(2935),
        v = t(2609);
      let Q = "TOC GO HERE";
      function x() {
        return (e) => {
          var A;
          let t = e.children.findIndex(
            (e) =>
              "heading" === e.type &&
              2 === e.depth &&
              "text" === e.children[0].type &&
              e.children[0].value === Q,
          );
          -1 !== t &&
          (null === (A = e.children[t + 1]) || void 0 === A
            ? void 0
            : A.type) === "list"
            ? (e.children = [e.children[t + 1]])
            : (e.children = []);
        };
      }
      var y = t(261);
      let B = {
        img: function (e) {
          let { alt: A, src: n, width: i, height: s, ...u } = e;
          return n.startsWith("http")
            ? (0, r.jsx)("img", {
                src: n,
                alt: A,
                width: i && (Number.isInteger(i) ? i : parseInt(i)),
                height: s && (Number.isInteger(s) ? s : parseInt(s)),
                ...u,
              })
            : (0, r.jsx)(y.t, {
                src: t(7192)("./".concat(n)),
                alt: A || "image",
                sizes: "responsive",
                width: void 0,
                height: void 0,
                ...u,
              });
        },
      };
      function I(e) {
        let { markdownSource: A } = e;
        return (0, n.useMemo)(
          () =>
            (function (e, A) {
              let t = {
                jsx: r.jsx,
                jsxs: r.jsxs,
                Fragment: r.Fragment,
                components: A,
                development: !1,
              };
              return (0, i.l)()
                .use(s.Z)
                .use([o.Z, c.Z, l.Z, h.Z, g])
                .use(p.Z)
                .use([
                  f.Z,
                  E.Z,
                  w.Z,
                  [
                    m.Z,
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
                .use(v.Z, t)
                .processSync(e).result;
            })(A, B),
          [A],
        );
      }
      var _ = !0,
        b = function (e) {
          let { markdownContentSource: A } = e,
            t = (0, n.useMemo)(
              () =>
                (function (e) {
                  let A = (0, i.l)()
                    .use(s.Z)
                    .use(a.Z, { heading: Q, maxDepth: 3 })
                    .use(x)
                    .use(u.Z)
                    .processSync("## ".concat(Q, "\n") + e);
                  if ("string" != typeof A.value) throw Error("wrong type");
                  return A.value;
                })(A),
              [A],
            );
          return (0, r.jsxs)("main", {
            children: [
              (0, r.jsx)("nav", { dangerouslySetInnerHTML: { __html: t } }),
              (0, r.jsx)("article", {
                children: (0, r.jsx)(I, { markdownSource: A }),
              }),
            ],
          });
        };
    },
    7192: function (e, A, t) {
      var r = { "./test.jpg": 2610 };
      function n(e) {
        return t(i(e));
      }
      function i(e) {
        if (!t.o(r, e)) {
          var A = Error("Cannot find module '" + e + "'");
          throw ((A.code = "MODULE_NOT_FOUND"), A);
        }
        return r[e];
      }
      (n.keys = function () {
        return Object.keys(r);
      }),
        (n.resolve = i),
        (e.exports = n),
        (n.id = 7192);
    },
  },
  function (e) {
    e.O(0, [658, 265, 321, 888, 774, 179], function () {
      return e((e.s = 4384));
    }),
      (_N_E = e.O());
  },
]);
