$(document).ready(function () {
  $("#lightgallery").lightGallery();
});

$("#lightgallery").lightGallery({
  share: false,
  download: false,
  autoplayControls: false,
  zoom: false,
  fullScreen: false,
});

let $search = $("#search");
let $imgs = $("a");

$search.keyup((event) => {
  let value = $search.val().toLowerCase();
  $imgs.show();
  if (value !== "") {
    $imgs.not(`[data-sub-html*="${value}"]`).hide();
  }
});
