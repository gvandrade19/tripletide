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

// IntersectionObserver for 'about-us' Section
document.addEventListener("DOMContentLoaded", function () {
  const teamMembers = document.querySelectorAll(".team-member");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Remove a observação após a animação iniciar
        }
      });
    },
    { threshold: 0.1 } // Inicia a animação quando 10% do elemento está visível
  );

  teamMembers.forEach((member) => {
    observer.observe(member);
  });
});


const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const itemWidth = items[0].offsetWidth;
const visibleItems = 4; // Número de imagens visíveis de cada vez

let index = 0;

// Duplicar o conjunto de imagens para criar o efeito contínuo
track.append(...items.map(item => item.cloneNode(true)));

function moveCarousel() {
  index++;
  
  // Ajusta a posição de transição para o próximo conjunto de imagens
  track.style.transform = `translateX(-${index * itemWidth}px)`;
  
  // Reset ao meio do array duplicado para simular o loop infinito
  if (index >= items.length) {
    track.style.transition = 'none';
    index = 0;
    track.style.transform = `translateX(0)`;
    
    // Reinicia a transição após o reset para suavidade contínua
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s linear';
      index++;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    });
  }
}

setInterval(moveCarousel, 2000); // Ajuste a velocidade do intervalo de tempo conforme necessário