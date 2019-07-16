$(document).ready(function() {
  $(".menu-btn").on("click", function() {
    $(this).toggleClass("active");
    $("#main-menu").toggleClass("active");
  })
  $(".menu-link").on("click", function() {
    $("#menu-btn").toggleClass("active");
    $("#main-menu").toggleClass("active");
  })
})