var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 'auto',
    spaceBetween: 16,

    // Install Plugin To Swiper
    pagination: {
        el: '.swiper-pagination',
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
