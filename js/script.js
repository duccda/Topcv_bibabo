function handleNav() {
  var coverHeight = $("#cover").height();
  if ($(window).scrollTop() >= coverHeight) {
    $("body").addClass("fixed-top-nav");
  } else {
    $("body").removeClass("fixed-top-nav");
  }
}
$(document).ready(function () {
  $(window).scroll(function () {
    handleNav();
  });
  $(window).resize(function () {
    handleNav();
  });
});
