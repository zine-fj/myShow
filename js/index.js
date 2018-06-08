var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // autoplay: 3000,
    // effect : 'fade',
    paginationType : 'progress',
    fade: {
        crossFade: false,
      },
    paginationClickable :true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
  })