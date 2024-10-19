(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(4579);
        },
      ]);
    },
    4579: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return o;
          },
          default: function () {
            return c;
          },
        });
      var u = e(5893),
        i = e(9008),
        r = e.n(i),
        o = !0;
      function c(n) {
        let t = [
          n.domain,
          n.basePath,
          "posts",
          "langs",
          n.siteConfig.defaultLanguage,
        ]
          .filter((n) => n)
          .join("/");
        return (0, u.jsxs)(r(), {
          children: [
            (0, u.jsx)("meta", {
              httpEquiv: "refresh",
              content: "0; URL='".concat(t, "'"),
            }),
            (0, u.jsx)("link", { rel: "canonical", href: t }),
          ],
        });
      }
    },
    9008: function (n, t, e) {
      n.exports = e(6665);
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 8312));
    }),
      (_N_E = n.O());
  },
]);
