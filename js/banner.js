const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const title = document.getElementById("hero-title");
const subtitle = document.getElementById("hero-subtitle");

const slideData = [
  {
    title: `Ver o mundo com um <span class="highlight">novo</span> <span class="highlight"> olhar</span>`,
    subtitle: "Tecnologia, cuidado humano e design em cada detalhe.",
  },
  {
    title: `Atendimento especializado para <span class="highlight">sua</span> <span class="highlight">família</span>`,
    subtitle: "Cuidamos da saúde visual de quem você mais ama com carinho e expertise.",
  },
  {
    title: `Inovação e qualidade em <span class="highlight">cada</span> <span class="highlight">lente</span>`,
    subtitle: "Descubra a diferença que a tecnologia avançada faz na sua visão.",
  },
  
];

let current = 0;
let autoPlay = true;
let autoPlayInterval = null;
let resumeTimeout = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  title.innerHTML = slideData[index].title;
  subtitle.innerHTML = slideData[index].subtitle;
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % slides.length);
  pauseAutoPlay();
}

function prevSlide() {
  showSlide((current - 1 + slides.length) % slides.length);
  pauseAutoPlay();
}

function goToSlide(index) {
  showSlide(index);
  pauseAutoPlay();
}

function startAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 5000);
}

function pauseAutoPlay() {
  clearInterval(autoPlayInterval);
  clearTimeout(resumeTimeout);
  resumeTimeout = setTimeout(() => {
    startAutoPlay();
  }, 10000); // retoma após 10s
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
dots.forEach((dot, i) => dot.addEventListener("click", () => goToSlide(i)));

// inicia
showSlide(current);
if (autoPlay) startAutoPlay();
