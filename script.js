gsap.registerPlugin(ScrollTrigger);

// Navbar entrance animation
gsap.from(".navbar", {
  y: -60,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Navbar links stagger animation
gsap.from(".nav-links li a", {
  opacity: 0,
  y: -20,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  ease: "power2.out"
});

// Hero section animation
gsap.timeline()
  .from(".hero .content h1", {
    opacity: 0,
    y: 80,
    duration: 1.4,
    ease: "power4.out"
  })
  .from(".hero .content p", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")
  .from(".hero .btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "-=0.5");

// About section scroll animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1.2,
  }
})
  .from(".about h2", { opacity: 0, x: -80 })
  .from(".about p", { opacity: 0, x: -50 }, "-=0.4");

// Services section scroll animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 85%",
    end: "bottom 60%",
    scrub: 1.2,
  }
})
  .from(".services h2", { opacity: 0, y: -60 })
  .from(".card", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    stagger: 0.2
  }, "-=0.6");

// Portfolio section scroll animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 85%",
    end: "bottom 60%",
    scrub: 1.2,
  }
})
  .from(".portfolio h2", { opacity: 0, x: 100 })
  .from(".swiper-slide", {
    opacity: 0,
    scale: 0.92,
    x: -80,
    stagger: 0.3
  }, "-=0.5");

// Testimonials section scroll animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 85%",
    end: "bottom 60%",
    scrub: 1.2,
  }
})
  .from(".testimonials h2", { opacity: 0, y: 60 })
  .from(".testimonials blockquote", {
    opacity: 0,
    x: -60,
    stagger: 0.3
  }, "-=0.5");

// Contact section scroll animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
    end: "bottom 60%",
    scrub: 1.2,
  }
})
  .from(".contact h2", { opacity: 0, x: -100 })
  .from(".contact form", {
    opacity: 0,
    y: 60,
    scale: 0.95
  }, "-=0.4");

// Swiper Slider config
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Pause slider on hover
const slider = document.getElementById("hero-slider");
slider.addEventListener("mouseenter", () => swiper.autoplay.stop());
slider.addEventListener("mouseleave", () => swiper.autoplay.start());

// Mobile menu toggle
const navLinks = document.getElementById('nav-links');
const toggle = document.getElementById('menu-toggle');
const openIcon = document.getElementById('menu-icon-open');
const closeIcon = document.getElementById('menu-icon-close');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isOpen = navLinks.classList.contains('active');
  openIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});

// Auto-close menu on nav item click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      openIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
});

