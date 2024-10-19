/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

// Tooltip Init
$(function () {
  $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
/*
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function () {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
  $('iframe[src*="youtube.com"]').wrap(
    '<div class="embed-responsive embed-responsive-16by9"></div>',
  );
  $('iframe[src*="youtube.com"]').addClass("embed-responsive-item");
  $('iframe[src*="vimeo.com"]').wrap(
    '<div class="embed-responsive embed-responsive-16by9"></div>',
  );
  $('iframe[src*="vimeo.com"]').addClass("embed-responsive-item");
});

/*
    滚动函数
    接收三个参数,
        1 接收一个DOM对象
        2 给目标对象切换class
        3 触发的高度 (可选项,如果不指定高度,会将DOM的高度作为触发高度)
*/
function scrollCheck(scrollTarget, toggleClass, scrollHeight) {
  document.addEventListener("scroll", function () {
    var currentTop = window.pageYOffset;
    currentTop > (scrollHeight || scrollTarget.clientHeight)
      ? scrollTarget.classList.add(toggleClass)
      : scrollTarget.classList.remove(toggleClass);
  });
}

(function () {
  var navTop = document.querySelector("#nav-top");
  navTop.ondblclick = function () {
    $("body").animate(
      {
        scrollTop: 0,
      },
      500,
    );
  };
})();
