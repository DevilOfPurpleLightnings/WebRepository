document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const carousel = document.querySelector(".carousel-inner");
  const images = carousel.querySelectorAll("img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  let currentIndex = 0;
  let intervalId;

  images.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === 0) indicator.classList.add("active");
    indicator.addEventListener("click", () => {
      stopCarousel();
      currentIndex = index;
      updateCarousel();
      startCarousel();
    });
    indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".carousel-indicator");

  function updateCarousel() {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function startCarousel() {
    intervalId = setInterval(nextImage, 4000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  updateCarousel();
  startCarousel();

  nextBtn.addEventListener("click", () => {
    stopCarousel();
    nextImage();
    startCarousel();
  });

  prevBtn.addEventListener("click", () => {
    stopCarousel();
    prevImage();
    startCarousel();
  });

  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);
});
