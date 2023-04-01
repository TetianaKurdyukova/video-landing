const swiper = new Swiper('.feedback-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      direction: 'vertical',
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    }
  }
});

const swiper2 = new Swiper('.general-swiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});