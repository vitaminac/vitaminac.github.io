(self.__BUILD_MANIFEST = (function (s, a, t, n) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    "/": ["static/chunks/pages/index.js"],
    "/404": ["static/chunks/pages/404.js"],
    "/_error": ["static/chunks/pages/_error.js"],
    "/posts/langs/[lang]": ["static/chunks/pages/posts/langs/[lang].js"],
    "/posts/langs/[lang]/pagination/[pagination]": [
      s,
      a,
      t,
      n,
      "static/chunks/pages/posts/langs/[lang]/pagination/[pagination].js",
    ],
    "/posts/langs/[lang]/tags": [
      s,
      t,
      n,
      "static/chunks/pages/posts/langs/[lang]/tags.js",
    ],
    "/posts/langs/[lang]/tags/[tag]": [
      s,
      a,
      t,
      n,
      "static/chunks/pages/posts/langs/[lang]/tags/[tag].js",
    ],
    "/posts/[slug]": [
      s,
      a,
      "static/chunks/287.js",
      "static/css/c71ce6ada404f598.css",
      "static/chunks/pages/posts/[slug].js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/posts/langs/[lang]",
      "/posts/langs/[lang]/pagination/[pagination]",
      "/posts/langs/[lang]/tags",
      "/posts/langs/[lang]/tags/[tag]",
      "/posts/[slug]",
    ],
  };
})(
  "static/chunks/367.js",
  "static/chunks/503.js",
  "static/chunks/151.js",
  "static/css/b6ae49f768350e65.css",
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
