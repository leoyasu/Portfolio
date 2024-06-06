const menu = document.querySelector("#menu-icons");
const navList = document.querySelector(".nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2000,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", { delay: 100, origin: "top" });
sr.reveal(".hero-img", { delay: 200, origin: "top" });
sr.reveal(".icons", { delay: 300, origin: "left" });

sr.reveal(".about-me-section h1", { delay: 50, origin: "top" });
sr.reveal(".about-me-section-text", { delay: 150, origin: "right" });
sr.reveal(".about-me-section .swiper", { delay: 200, origin: "left" });

sr.reveal(".portfolio-section h1", { delay: 150, origin: "top" });
sr.reveal(".portfolio-section .project-barber-shop", { delay: 250, origin: "bottom" });

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
