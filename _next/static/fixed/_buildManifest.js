(self.__BUILD_MANIFEST = (function (s, a) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    "/": ["static/chunks/pages/index.js"],
    "/404": ["static/chunks/pages/404.js"],
    "/_error": ["static/chunks/pages/_error.js"],
    "/archives/[slug]": [
      "static/chunks/5423ad26.js",
      "static/chunks/175675d1.js",
      "static/chunks/321.js",
      "static/chunks/pages/archives/[slug].js",
    ],
    "/posts/langs/[lang]": ["static/chunks/pages/posts/langs/[lang].js"],
    "/posts/langs/[lang]/pagination/[pagination]": [
      s,
      a,
      "static/chunks/pages/posts/langs/[lang]/pagination/[pagination].js",
    ],
    "/posts/langs/[lang]/tags": [
      a,
      "static/chunks/pages/posts/langs/[lang]/tags.js",
    ],
    "/posts/langs/[lang]/tags/[tag]": [
      s,
      a,
      "static/chunks/pages/posts/langs/[lang]/tags/[tag].js",
    ],
    "/posts/[slug]": [
      s,
      "static/chunks/287.js",
      "static/chunks/pages/posts/[slug].js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/archives/[slug]",
      "/posts/langs/[lang]",
      "/posts/langs/[lang]/pagination/[pagination]",
      "/posts/langs/[lang]/tags",
      "/posts/langs/[lang]/tags/[tag]",
      "/posts/[slug]",
    ],
  };
})("static/chunks/470.js", "static/css/ef9f9e2030bad8a8.css")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
