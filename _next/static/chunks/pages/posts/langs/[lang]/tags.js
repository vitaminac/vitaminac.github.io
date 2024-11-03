(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [528],
  {
    7230: function (t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/langs/[lang]/tags",
        function () {
          return e(1629);
        },
      ]);
    },
    1734: function (t, n, e) {
      "use strict";
      e.d(n, {
        w: function () {
          return u;
        },
      });
      var s = e(5893),
        r = e(1664),
        i = e.n(r);
      function u(t) {
        let { lang: n, tags: e } = t,
          r = e.map((t) =>
            (0, s.jsx)(
              "li",
              {
                className: "tw-inline tw-px-1",
                children: (0, s.jsx)(
                  i(),
                  {
                    className:
                      "tw-m-0.5 tw-inline-block tw-rounded tw-border tw-border-solid tw-border-white tw-bg-neutral-300 tw-px-2 tw-text-sm tw-leading-6 tw-text-white tw-no-underline hover:tw-bg-sky-300",
                    href: "/posts/langs/".concat(n, "/tags/").concat(t),
                    children: t,
                  },
                  t,
                ),
              },
              t,
            ),
          );
        return (0, s.jsx)("ul", { className: "tw-p-0", children: r });
      }
    },
    1629: function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, {
          __N_SSG: function () {
            return a;
          },
          default: function () {
            return c;
          },
        });
      var s = e(5893),
        r = e(8305),
        i = e(2967),
        u = e(1734),
        w = e(5853),
        a = !0,
        c = function (t) {
          let { lang: n, tags: e, siteConfig: a } = t,
            { siteAuthor: c, siteTitle: l, siteDescription: o } = a;
          return (0, s.jsxs)(i.X, {
            lang: n,
            siteConfig: a,
            children: [
              (0, s.jsx)(w.K, { title: l, author: c, lang: n, description: o }),
              (0, s.jsx)(r.h, { ...a }),
              (0, s.jsx)("main", {
                className: "tw-mx-auto tw-w-11/12 md:tw-w-2/3",
                children: (0, s.jsx)(u.w, { lang: n, tags: e }),
              }),
            ],
          });
        };
    },
  },
  function (t) {
    t.O(0, [367, 409, 888, 774, 179], function () {
      return t((t.s = 7230));
    }),
      (_N_E = t.O());
  },
]);
