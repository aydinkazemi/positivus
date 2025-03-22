$(document).ready(function(){

    // Header Codes
    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('.header-content').toggleClass('header-content-active');
      $(this).parents().find('.overlay').toggleClass('overlay-active');
    })
  

    // Accardion Codes
    $('.acardion-icon-plus').click(function(){
        $(this).parentsUntil('.acardions').addClass('acardion-d');
        $(this).parentsUntil('.acardions').find('.acardion-paraghraph').slideDown(1000);
    });
    $('.acardion-icons-minus').click(function(){
        $(this).parentsUntil('.acardions').removeClass('acardion-d');
        $(this).parentsUntil('.acardions').find('.acardion-paraghraph').slideUp(1000);
    });

    // Slider Codes
    const swiper = new Swiper('.swiperTestMonial', {
      slidesPerView: 2,
      centeredSlides: true,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0:{
          slidesPerView: 1,
          centeredSlides: false,
        },
        768:{
          slidesPerView: 1,
          centeredSlides: false,
        },
        992:{
          slidesPerView: 1.4,
          centeredSlides: true,
        },
        1200:{
          slidesPerView: 1.8,
          centeredSlides: true,
        },
        1400:{
          slidesPerView: 2,
          centeredSlides: true,
        },
      }
    
    });

    
    const SwiperCasse = new Swiper('.SwiperCasse', {
      slidesPerView: 3,
      loop:true,
      autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },
      breakpoints: {
        0:{
          slidesPerView: 1.2,
          centeredSlides: false,
          spaceBetween: 30,
        },
        768:{
          slidesPerView: 1.2,
          centeredSlides: false,
          spaceBetween: 30,
        },
        992:{
          slidesPerView: 2,
          centeredSlides: true,
        },
        1200:{
          slidesPerView: 2.9,
          centeredSlides: true,
        },
        1400:{
          slidesPerView: 2.9,
          centeredSlides: true,
        },
      }
    });
});

//Arrow up btn Codes
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


