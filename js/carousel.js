const brands = [
  { name: "Reserva", logo: "img/logos/logo-reserva.png" },
  { name: "Marchon NYC", logo: "img/logos/logo-marchon.png" },
  { name: "DKNY", logo: "img/logos/logo-dkny.png" },
  { name: "Nautica", logo: "img/logos/logo-nautica.png" },
  { name: "Nike", logo: "img/logos/logo-nike-vision.png" },
  { name: "Lacoste", logo: "img/logos/logo-lacoste.png" },
  { name: "Calvin Klein", logo: "img/logos/logo-ck.png" },
  { name: "Pure", logo: "img/logos/logo-pure.png" },
  { name: "Carrera", logo: "img/logos/logo-carrera.png" },
  { name: "Tommy Hilfiger", logo: "img/logos/logo-tommy.png" },
  { name: "Carolina Herrera", logo: "img/logos/logo-carolina-herrera.png" },
  { name: "Longchamp", logo: "img/logos/logo-longchamp.png" },
  { name: "BOSS", logo: "img/logos/logo-boss.png" },
  {
    name: "Salvatore Ferragamo",
    logo: "img/logos/logo-salvatore-ferragamo.png",
  },
  { name: "Ray-Ban", logo: "img/logos/logo-ray-ban.png" },
  { name: "Prada", logo: "img/logos/logo-prada.png" },
  { name: "Emporio Armani", logo: "img/logos/logo-emporio-armani.png" },
];

const track = document.getElementById("brands-track");

// Duplicar as marcas
const duplicatedBrands = [...brands, ...brands];

duplicatedBrands.forEach((brand) => {
  const card = document.createElement("div");
  card.className = "brand-card";
  card.innerHTML = `
    <div class="brand-card-inner">
      <img src="${brand.logo}" alt="Logo ${brand.name}" />
    </div>
  `;
  track.appendChild(card);
});

// === Ajustar animação para o tamanho real da primeira metade ===
const originalWidth = track.scrollWidth / 2;

track.style.setProperty("--scroll-width", `${originalWidth}px`);
