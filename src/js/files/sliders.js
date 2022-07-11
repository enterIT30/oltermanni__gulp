new Swiper('.promotion__slider', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  speed: 800,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  simulateTouch: true,
  touchRatio: 1,
  toushAngle: 45,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.pagination__swiper-button--next',
    prevEl: '.pagination__swiper-button--prev',
  },

  pagination: {
    el: '.promotion__pagination',
    type: 'bullets',
    clickable: true,

  },

    breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 2.35,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2.5,
    },
    580: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});