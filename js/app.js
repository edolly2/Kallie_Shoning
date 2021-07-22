// HAMBURGER MENU DROPDOWN
const hamburgerIcon = $(".hamburger-icon");
const upArrowIcon = $(".up-arrow-icon");
const navMenu = $(".nav-cont");
$(document).ready(() => {
  $(hamburgerIcon).on("click", () => {
    $(hamburgerIcon).fadeOut(500);
    $(navMenu).slideDown(500);
    $(navMenu).removeClass("slide-up");
    $(navMenu).addClass("slide-down");
    setTimeout(() => {
      $(upArrowIcon).fadeIn(1000);
    }, 950);
  });
  $(upArrowIcon).on("click", () => {
    $(upArrowIcon).fadeOut(500);
    $(navMenu).slideUp(500);
    $(navMenu).removeClass("slide-down");
    $(navMenu).addClass("slide-up");
    setTimeout(() => {
      $(hamburgerIcon).fadeIn(1000);
    }, 700);
  });
});
