(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(1854);
        },
      ]);
    },
    1854: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return r;
          },
          default: function () {
            return c;
          },
        });
      var i = e(5893),
        u = e(9008),
        o = e.n(u),
        r = !0;
      function c(n) {
        let t = [
          n.domain,
          n.basePath,
          "posts",
          "langs",
          n.siteConfig.i18n.defaultLocale,
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
      return n((n.s = 8312));
    }),
      (_N_E = n.O());
  },
]);
