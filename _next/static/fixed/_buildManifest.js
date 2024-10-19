(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    "/": ["static/chunks/pages/index-527c2c941e149cbe.js"],
    "/404": ["static/chunks/pages/404-7b607c951c2ee80a.js"],
    "/_error": ["static/chunks/pages/_error-5a00309fd5f4b49e.js"],
    "/migrations/[slug]": [
      "static/css/31e9a53e4d0a3f1c.css",
      "static/chunks/pages/migrations/[slug]-7765d9180c7c39eb.js",
    ],
    "/posts/langs/[lang]": [
      "static/chunks/pages/posts/langs/[lang]-756fd613dadc627c.js",
    ],
    "/posts/langs/[lang]/pagination/[pagination]": [
      s,
      "static/chunks/pages/posts/langs/[lang]/pagination/[pagination]-22c18b5ac358dde5.js",
    ],
    "/posts/langs/[lang]/tags": [
      s,
      "static/chunks/pages/posts/langs/[lang]/tags-8df74be812d5c81a.js",
    ],
    "/posts/langs/[lang]/tags/[tag]": [
      s,
      "static/chunks/pages/posts/langs/[lang]/tags/[tag]-a35b03aa04f04176.js",
    ],
    "/posts/[slug]": [
      "static/chunks/5423ad26-257b22e576552beb.js",
      "static/chunks/175675d1-145ac30d6b0ff8e9.js",
      "static/chunks/124-e0563f50b3afc90c.js",
      "static/css/b20415b92d4e1a1a.css",
      "static/chunks/pages/posts/[slug]-054b24ce69be2e7c.js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/migrations/[slug]",
      "/posts/langs/[lang]",
      "/posts/langs/[lang]/pagination/[pagination]",
      "/posts/langs/[lang]/tags",
      "/posts/langs/[lang]/tags/[tag]",
      "/posts/[slug]",
    ],
  };
})("static/css/ef9f9e2030bad8a8.css")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
