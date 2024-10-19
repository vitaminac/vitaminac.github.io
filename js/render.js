function render_files(extension, language) {
  $(
    "article  p > a:not(.anchorjs-link):not(.toc-link):not(.headerlink):not(.tag)",
  ).each(function (index, element) {
    var result = $(element)
      .attr("href")
      .match(extension + "(\\#L(\\d+)(\\-L(\\d+))?)?$");
    if (result) {
      var url = convertToGithubRawURL($(element).attr("href"));
      holder = $("<pre/>")[0];
      $code = $("<code/>");
      $code.appendTo(holder);
      fetch(url)
        .then((response) => {
          return response.text();
        })
        .then((code) => {
          if (result[2]) {
            var start = parseInt(result[2]) - 1;
            var end = start + 1;
            if (result[4]) {
              var end = parseInt(result[4]);
            }
            code = code.split("\n").slice(start, end).join("\n");
          }
          $code.text(code);
          $($(element).parent()).replaceWith(holder.outerHTML);
          if (language) {
            $("code").addClass("language-" + language);
            Prism.highlightAll();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}
