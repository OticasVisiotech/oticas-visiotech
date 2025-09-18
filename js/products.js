document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".product-slider-track");
  const trackContainer = document.querySelector(".product-slider-track-container");
  const prevBtn = document.querySelector(".product-slider-btn.prev");
  const nextBtn = document.querySelector(".product-slider-btn.next");

  if (!track || !trackContainer || !prevBtn || !nextBtn) {
    console.warn("Product slider: elementos não encontrados.");
    return;
  }

  let currentIndex = 0;

  const getGap = () => {
    const cs = window.getComputedStyle(track);
    return parseFloat(cs.gap || cs.getPropertyValue("gap")) || 20;
  };

  const updateTrackPosition = () => {
    const firstCard = track.querySelector(".single-unique-product");
    if (!firstCard) return;
    const gap = getGap();
    const cardWidth = firstCard.getBoundingClientRect().width;
    const step = (cardWidth + gap) * currentIndex;
    track.style.transform = `translateX(-${step}px)`;
  };

  nextBtn.addEventListener("click", () => {
    currentIndex += 1;
    if (currentIndex >= track.children.length) {
      currentIndex = 0; // volta ao primeiro
    }
    updateTrackPosition();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = track.children.length - 1; // vai para o último
    }
    updateTrackPosition();
  });

  window.addEventListener("resize", () => {
    updateTrackPosition();
  });

  // inicia
  updateTrackPosition();
});