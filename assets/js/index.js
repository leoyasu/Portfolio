const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  });