document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".product-slider-track");
  const trackContainer = document.querySelector(".product-slider-track-container");
  const prevBtn = document.querySelector(".product-slider-btn.prev");
  const nextBtn = document.querySelector(".product-slider-btn.next");

  if (!track || !trackContainer || !prevBtn || !nextBtn) {
    console.warn("Product slider: elementos não encontrados.");
    return;
  }

  // Opção: true = quando atingir o fim volta ao início; false = trava no último
  const LOOP = true;

  // estado em pixels
  let currentScroll = 0;

  // medidas recalculadas
  let stepPx = 0;
  let maxScroll = 0;
  const EPS = 1; // tolerância de 1px para evitar off-by-one

  const getGap = () => {
    const cs = window.getComputedStyle(track);
    // tenta 'gap' primeiro (flex gap), se não usar, tenta --fallback
    return parseFloat(cs.gap || cs.getPropertyValue("gap")) || 20;
  };

  const recomputeSizes = () => {
    const firstCard = track.querySelector(".single-unique-product");
    if (!firstCard) {
      stepPx = 0;
      maxScroll = 0;
      return;
    }

    const gap = getGap();
    // largura do card (inclui padding / border)
    const cardWidth = Math.round(firstCard.getBoundingClientRect().width);
    stepPx = Math.round(cardWidth + gap);

    const totalWidth = track.scrollWidth; // largura total conteúdo (já inclui gaps)
    const containerWidth = trackContainer.clientWidth; // largura visível (inclui padding)
    maxScroll = Math.max(Math.round(totalWidth - containerWidth), 0);

    // garante que currentScroll permaneça dentro do permitido
    if (currentScroll > maxScroll) currentScroll = maxScroll;
    if (currentScroll < 0) currentScroll = 0;
  };

  const updateTrackPosition = () => {
    // segurança: recalcula caso coisas mudem
    recomputeSizes();

    // aplica transform (suave)
    track.style.transition = "transform 400ms ease";
    track.style.transform = `translateX(-${Math.round(currentScroll)}px)`;
  };

  nextBtn.addEventListener("click", () => {
    recomputeSizes();

    // se já está praticamente no fim -> loop ou trava
    if (currentScroll + stepPx >= maxScroll - EPS) {
      if (LOOP) {
        currentScroll = 0;
      } else {
        currentScroll = maxScroll;
      }
    } else {
      currentScroll = Math.min(currentScroll + stepPx, maxScroll);
    }

    updateTrackPosition();
  });

  prevBtn.addEventListener("click", () => {
    recomputeSizes();

    if (currentScroll - stepPx <= EPS) {
      if (LOOP) {
        currentScroll = maxScroll;
      } else {
        currentScroll = 0;
      }
    } else {
      currentScroll = Math.max(currentScroll - stepPx, 0);
    }

    updateTrackPosition();
  });

  // recalcula quando imagens carregarem (evita medidas erradas antes das imgs carregarem)
  const imgs = track.querySelectorAll("img");
  let imgsToLoad = imgs.length;
  if (imgsToLoad === 0) {
    recomputeSizes();
    updateTrackPosition();
  } else {
    imgs.forEach((img) => {
      if (img.complete) {
        imgsToLoad--;
      } else {
        img.addEventListener("load", () => {
          imgsToLoad--;
          if (imgsToLoad <= 0) {
            recomputeSizes();
            updateTrackPosition();
          }
        });
        img.addEventListener("error", () => {
          imgsToLoad--;
          if (imgsToLoad <= 0) {
            recomputeSizes();
            updateTrackPosition();
          }
        });
      }
    });
    // fallback: após 500ms força recalculo (caso imagens demoradas)
    setTimeout(() => {
      recomputeSizes();
      updateTrackPosition();
    }, 500);
  }

  // corrige ao redimensionar a janela
  window.addEventListener("resize", () => {
    // recomputa e ajusta currentScroll dentro de limites
    recomputeSizes();
    currentScroll = Math.min(Math.max(currentScroll, 0), maxScroll);
    updateTrackPosition();
  });

  // inicializa
  recomputeSizes();
  updateTrackPosition();
});
