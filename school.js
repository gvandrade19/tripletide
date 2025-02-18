// Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      () => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal Configuration
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 500, // Reduzido para animações mais rápidas
    easing: 'ease-in-out', // Suavização mais rápida
  };
  
  ScrollReveal().reveal(".header__container .section__subheader", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container .section__header", { ...scrollRevealOption, delay: 200 });
  ScrollReveal().reveal(".header__container .scroll__btn", { ...scrollRevealOption, delay: 400 });
  ScrollReveal().reveal(".header__container .header__socials", { ...scrollRevealOption, origin: "left", delay: 600 });
  
  ScrollReveal().reveal(".about__image-1, .about__image-3", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".about__image-2", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 200 });
  ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 400 });
  ScrollReveal().reveal(".about__content p", { ...scrollRevealOption, delay: 600 });
  ScrollReveal().reveal(".about__content .about__btn", { ...scrollRevealOption, delay: 800 });
  
  ScrollReveal().reveal(".about-us__content", { ...scrollRevealOption, delay: 200 });
  ScrollReveal().reveal(".team-member", { ...scrollRevealOption, origin: "bottom", interval: 100 });