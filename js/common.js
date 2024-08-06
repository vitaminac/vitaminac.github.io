function convertToGithubRawURL(url) {
    return url.replace(/github.com\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)\//, "raw.githubusercontent.com/$1/$2/$4/");
}

function load(scripts) {
    return scripts.map(function (script) {
        return fetch(script).then(function (response) {
            return response.text();
        }).then(function (js) {
            return eval(js);
        });
    }).reduce(function (prev, promise) {
        return new Promise(function (resolve, reject) {
            prev.then(function () {
                promise.then(resolve, reject);
            }, function () {
                promise.then(resolve, reject);
            })
        });
    }, Promise.resolve());
}

function addCSS(url) {
    $('head').append(`<link rel="stylesheet" type="text/css" href="${url}">`);
}