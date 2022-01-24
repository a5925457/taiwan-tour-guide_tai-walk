// Init Swiper
var swiper = new Swiper(".bigSwiper", {
  // Install Plugin To Swiper
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Enable debugger
  debugger: true,
});
