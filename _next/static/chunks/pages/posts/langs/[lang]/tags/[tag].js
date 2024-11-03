(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [749],
  {
    8303: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/langs/[lang]/tags/[tag]",
        function () {
          return n(1949);
        },
      ]);
    },
    3045: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return i;
        },
      });
      var r = n(5893);
      n(7294);
      var s = n(197),
        a = n(949);
      function i(t) {
        let { dateString: e } = t,
          n = (0, s.D)(e);
        return (0, r.jsxs)("span", {
          children: [
            (0, r.jsx)("i", { className: "fa-regular fa-calendar" }),
            (0, r.jsx)("time", {
              className: "tw-pl-1.5",
              dateTime: e,
              children: (0, a.WU)(n, "LLLL d, yyyy"),
            }),
          ],
        });
      }
    },
    2826: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return w;
        },
      });
      var r = n(5893),
        s = n(1664),
        a = n.n(s),
        i = n(1798),
        l = n(3045),
        c = n(8305),
        o = n(2967),
        u = n(5853);
      function d(t) {
        let { url: e, children: n } = t;
        return (0, r.jsx)(a(), {
          className:
            "tw-block tw-rounded tw-border tw-border-solid tw-border-neutral-100 tw-p-4 tw-font-mono tw-text-sm tw-font-extrabold tw-tracking-wider tw-text-black tw-no-underline hover:tw-bg-sky-300 hover:tw-text-white",
          href: e,
          children: n,
        });
      }
      function w(t) {
        let {
            lang: e,
            prevPageUrl: n,
            nextPageUrl: s,
            previews: w,
            siteConfig: x,
          } = t,
          { t: h } = (0, i.$G)("paginated-index"),
          { siteAuthor: f, siteTitle: j, siteDescription: m } = x;
        return (0, r.jsx)(o.X, {
          lang: e,
          siteConfig: x,
          children: (0, r.jsxs)("div", {
            className: "tw-mx-auto tw-w-11/12 tw-max-w-screen-xl",
            children: [
              (0, r.jsx)(u.K, { title: j, author: f, lang: e, description: m }),
              (0, r.jsx)(c.h, { ...x }),
              (0, r.jsx)("main", {
                children: w
                  .map((t) =>
                    (0, r.jsxs)(
                      "section",
                      {
                        className: "tw-min-h-32",
                        children: [
                          (0, r.jsx)("h4", {
                            children: (0, r.jsx)(a(), {
                              className: "tw-text-black tw-no-underline",
                              href: "/posts/".concat(t.slug),
                              children: t.title,
                            }),
                          }),
                          (0, r.jsx)(l.E, { dateString: t.date }),
                          (0, r.jsx)("p", {
                            className: "tw-mt-3",
                            children: t.content,
                          }),
                        ],
                      },
                      t.slug,
                    ),
                  )
                  .flatMap((t, e) => [
                    (0, r.jsx)(
                      "hr",
                      {},
                      "separator-between-(".concat(e - 1, ")-(").concat(e, ")"),
                    ),
                    t,
                  ])
                  .concat([(0, r.jsx)("hr", {}, "seperator-end")]),
              }),
              (n || s) &&
                (0, r.jsxs)("ul", {
                  role: "navigation",
                  className:
                    "tw-flex tw-list-none tw-flex-row tw-justify-between tw-p-0",
                  children: [
                    n &&
                      (0, r.jsx)("li", {
                        children: (0, r.jsx)(d, {
                          url: n,
                          children: h("PrevPage"),
                        }),
                      }),
                    s &&
                      (0, r.jsx)("li", {
                        className: "tw-ml-auto",
                        children: (0, r.jsx)(d, {
                          url: s,
                          children: h("NextPage"),
                        }),
                      }),
                  ],
                }),
            ],
          }),
        });
      }
    },
    1949: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          __N_SSG: function () {
            return s;
          },
        });
      var r = n(2826),
        s = !0;
      e.default = r.v;
    },
  },
  function (t) {
    t.O(0, [367, 503, 409, 888, 774, 179], function () {
      return t((t.s = 8303));
    }),
      (_N_E = t.O());
  },
]);
