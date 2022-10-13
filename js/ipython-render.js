load(["https://raw.githubusercontent.com/markedjs/marked/v0.3.19/marked.min.js", "https://raw.githubusercontent.com/jsvine/notebookjs/65364452aa24253e69d4133eb2ae18877df627a1/notebook.js"]).then(function () {
    (function (root) {
        var render_notebook = function (ipynb, $holder, baseUrl) {
            var notebook = root.notebook = nb.parse(ipynb, { "markdown": { "baseUrl": baseUrl } });
            $holder.append(notebook.render());
            Prism.highlightAll();
            // rerender the page
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, $holder[0]]);
        };
        $("article  a").each(function (index, element) {
            if ($(element).attr("href").endsWith(".ipynb")) {
                var gitcontent = $(element).attr("href")
                var url = convertToGithubRawURL(gitcontent);
                var baseUrl = gitcontent.replace(/github\.com\/([^/]+)\/([^/]+)\/[^/]+\/([^/]+)\//, "github.com/$1/$2/raw/$3/");
                $holder = $("<div/>")
                $($(element).parent()).replaceWith($holder);
                fetch(url).then(response => {
                    return response.json();
                }).then(ipynb => {
                    render_notebook(ipynb, $holder, baseUrl);
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    })(window);
});