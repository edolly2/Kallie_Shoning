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

const servicesDropDown = $(".services-title-div");
const servicesList = $(".services-list");
const productsDropDown = $(".products-title-div");
const productsList = $(".products-list");
$(document).ready(() => {
  $(".services-caret").addClass("hide");
  $(productsDropDown).on("click", () => {
    $(".services-caret").removeClass("hide");

    $(servicesList).slideUp(500);
    $(productsList).slideToggle(500);
    $(".products-caret").toggleClass("hide");
  });

  $(servicesDropDown).on("click", () => {
    $(".products-caret").removeClass("hide");
    $(productsList).slideUp(500);
    $(servicesList).slideToggle(500);
    $(".services-caret").toggleClass("hide");
  });
  
  const productsListItem = $('products-list-item');
  const servicesListItem = $('services-list-item');
  const price = $('.price');
  $(servicesList).on('click', (event) => {
    if($(event.target).is('.sli-1')) {
      $(price).html('<p class="price-p">$100</p>');
    }
    else if($(event.target).is('.sli-2')) {
      $(price).html('<p class="price-p">$75</p>');
    }
    else if($(event.target).is('.sli-3')) {
      $(price).html('<p class="price-p">$45</p>');
    }
    else if($(event.target).is('.sli-4')) {
      $(price).html('<p class="price-p">$10000</p>');
    }
    else if($(event.target).is('.sli-5')) {
      $(price).html('<p class="price-p">$60</p>');
    }
    else if($(event.target).is('.sli-6')) {
      $(price).html('<p class="price-p">$30</p>');
    }
  });
    
    $(productsList).on('click', (event) => {
      if($(event.target).is('.pli-1')) {
        $(price).html('<p class="price-p">$101</p>');
      }
      else if($(event.target).is('.pli-2')) {
        $(price).html('<p class="price-p">$102</p>');
      }
      else if($(event.target).is('.pli-3')) {
        $(price).html('<p class="price-p">$103</p>');
      }
      else if($(event.target).is('.pli-4')) {
        $(price).html('<p class="price-p">$104</p>');
      }
      else if($(event.target).is('.pli-5')) {
        $(price).html('<p class="price-p">$105</p>');
      }
      else if($(event.target).is('.pli-6')) {
        $(price).html('<p class="price-p">$106</p>');
      }
      else if($(event.target).is('.pli-7')) {
        $(price).html('<p class="price-p">$107</p>');
      }
      else if($(event.target).is('.pli-8')) {
        $(price).html('<p class="price-p">$108</p>');
      }
      else if($(event.target).is('.pli-9')) {
        $(price).html('<p class="price-p">$109</p>');
      }
  });

});

$(document).ready(function () {
  $(".circles-page").append(
    "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
  );
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
