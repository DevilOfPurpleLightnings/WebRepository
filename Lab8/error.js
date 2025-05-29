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
  let currentIndex = 0;
  let intervalId;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function startCarousel() {
    intervalId = setInterval(nextImage, 4000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  showImage(currentIndex);
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
