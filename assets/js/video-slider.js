const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      const slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide, index) => {
        if (index === this.activeIndex) {
          slide.classList.remove("swiper-slide-disabled");
          slide.classList.add("swiper-slide-active");
        } else {
          slide.classList.remove("swiper-slide-active");
          slide.classList.add("swiper-slide-disabled");
        }
      });
    },
    init: function () {
      const slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide, index) => {
        if (index === this.activeIndex) {
          slide.classList.add("swiper-slide-active");
        } else {
          slide.classList.add("swiper-slide-disabled");
        }
      });
    },
  },
});

var portfolioSwiper = new Swiper('#portfolio .swiper-container', {
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1, // Only one slide visible on mobile
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: '#portfolio .swiper-button-next',
    prevEl: '#portfolio .swiper-button-prev',
  },
});


var swiper2 = new Swiper('.swiper-container-gif', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 55,
    stretch: 0,
    depth: 100,
    modifier: 1.1,
    slideShadows: false,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});
