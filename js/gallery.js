// ======= GALERIA =======
const galleryImages = [
  {
    id: 1,
    src: "img/img-ferragamo.png",
    alt: "Modelo utilizando óculos Ferragamo",
    description: "Garantia de qualidade com óculos de luxo", 
    size: "large",
  },

  {
    id: 2,
    src: "img/img-nike-2.jpg",
    alt: "Óculos de grau Nike",
    description: "Óculos de grau contemporâneo",
    size: "medium",
  },

  {
    id: 3,
    src: "img/img-ck.png",
    alt: "Modelo usando óculos Calvin Klein",
    description: "Óculos de alta qualidade",
    size: "medium",
  },

  {
    id: 4,
    src: "img/img-marcia-2.jpeg",
    alt: "Modelo utilizando óculos de grau moderno",
    description: "Óculos de grau com design moderno e sofisticado",
    size: "large",
  },

  {
    id: 5,
    src: "img/img-pure-2.png",
    alt: "Modelo usando Óculos Pure",
    description: "Marcas mais procuradas",
    size: "medium",
  },

  {
    id: 6,
    src: "img/img-thiago-4.jpeg",
    alt: "Modelo usando óculos de grau estiloso",
    description: "Design exclusivo com assinatura de grandes marcas",
    size: "medium",
  },

  {
    id: 7,
    src: "img/img-thiago-2.jpeg",
    alt: "Homem elegante usando óculos de sol",
    description: "Estilo e conforto em marca renomada",
    size: "large",
  },

  {
    id: 8,
    src: "img/img-marchon-2.jpg",
    alt: "Coleção de óculos premium",
    description: "Linha premium com materiais de alta qualidade",
    size: "medium",
  },

  {
    id: 9,
    src: "img/img-marcia-1.jpeg",
    alt: "Mulher elegante usando óculos modernos",
    description: "Tendências atuais em armações jovens",
    size: "medium",
  },

  {
    id: 10,
    src: "img/img-marcia-5.jpeg",
    alt: "Modelo usando óculos Carrera",
    description: "Soluções com estilo e confiança",
    size: "large",
  },

  {
    id: 11,
    src: "img/img-thiago-1.jpeg",
    alt: "Modelo usando óculos de luxo",
    description: "Sofisticação e elegância em cada detalhe",
    size: "medium",
  },

  {
    id: 12,
    src: "img/img-marchon.png",
    alt: "Modelo usando óculos Marchon",
    description: "Clássicos atemporais que nunca saem de moda",
    size: "medium",
  },
];

const galeriaGrid = document.getElementById("galeria-grid");

galleryImages.forEach((img) => {
  const item = document.createElement("div");
  item.className = `galeria-item ${img.size === "large" ? "large" : ""}`;
  item.innerHTML = `
    <img src="${img.src}" alt="${img.alt}">
    <div class="galeria-overlay"></div>
    <div class="galeria-texto">
      <h3>${img.alt}</h3>
      <p>${img.description}</p>
    </div>
  `;
  galeriaGrid.appendChild(item);
});
