(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [531],
  {
    4753: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/langs/[lang]",
        function () {
          return e(5813);
        },
      ]);
    },
    5813: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return r;
          },
          default: function () {
            return s;
          },
        });
      var i = e(5893),
        u = e(9008),
        o = e.n(u),
        r = !0;
      function s(n) {
        let t = [
          n.domain,
          n.basePath,
          "posts",
          "langs",
          n.lang,
          "pagination",
          "1",
        ]
          .filter((n) => n)
          .join("/");
        return (0, i.jsxs)(o(), {
          children: [
            (0, i.jsx)("meta", {
              httpEquiv: "refresh",
              content: "0; URL='".concat(t, "'"),
            }),
            (0, i.jsx)("link", { rel: "canonical", href: t }),
          ],
        });
      }
    },
    9008: function (n, t, e) {
      n.exports = e(3867);
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 4753));
    }),
      (_N_E = n.O());
  },
]);