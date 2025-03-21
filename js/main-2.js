document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };

  // Hero Header carousel
  $(".header-carousel").owlCarousel({
    animateOut: 'slideOutDown',
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
});

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});

});