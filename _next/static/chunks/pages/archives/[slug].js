(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [874],
  {
    4384: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/archives/[slug]",
        function () {
          return u(9713);
        },
      ]);
    },
    9713: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          __N_SSG: function () {
            return r;
          },
          default: function () {
            return _;
          },
        });
      var e = u(5893),
        r = !0,
        _ = function (n) {
          let { articleHtml: t, tocHtml: u } = n;
          return (0, e.jsxs)("main", {
            children: [
              u &&
                (0, e.jsx)("nav", { dangerouslySetInnerHTML: { __html: u } }),
              t &&
                (0, e.jsx)("article", {
                  dangerouslySetInnerHTML: { __html: t },
                }),
            ],
          });
        };
    },
  },
  function (n) {
    n.O(0, [888, 774, 179], function () {
      return n((n.s = 4384));
    }),
      (_N_E = n.O());
  },
]);
