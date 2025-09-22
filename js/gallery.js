// ======= GALERIA =======
const galleryImages = [
  { id: 1, src: "img/img-nike-masc.jpg", alt: "Homem elegante usando óculos de sol esportivo", description: "Óculos de sol esportivo com design moderno e sofisticado", size: "large" },
  { id: 2, src: "img/img-nike-2.jpg", alt: "Óculos de grau Nike", description: "Óculos de grau contemporâneo", size: "medium" },
  { id: 3, src: "img/img-nike-3.jpg", alt: "Atleta usando óculos esportivos", description: "Óculos esportivos de alta performance", size: "medium" },
  { id: 4, src: "img/img-nike-fem.jpg", alt: "Mulher praticando atletismo", description: "Garantia de qualidade com óculos esportivos", size: "large" },
  { id: 5, src: "img/img-lacoste.jpg", alt: "Óculos de Sol Lacoste", description: "Marcas de luxo", size: "medium" },
  { id: 6, src: "img/img-lacoste-2.jpg", alt: "Modelo usando óculos de sol designer", description: "Design exclusivo com assinatura de grandes marcas", size: "medium" },
  { id: 7, src: "img/img-ck.jpg", alt: "Modelos usando óculos CK", description: "Estilo e conforto em marca renomada", size: "large" },
  { id: 8, src: "img/img-marchon-2.jpg", alt: "Coleção de óculos premium", description: "Linha premium com materiais de alta qualidade", size: "medium" },
  { id: 9, src: "img/img-marcia.jpeg", alt: "Jovem usando óculos modernos", description: "Tendências atuais em armações jovens", size: "medium" },
  { id: 10, src: "img/img-salvatore.jpg", alt: "Família usando óculos Salvatore Ferragamo", description: "Soluções para toda a família", size: "large" },
  { id: 11, src: "img/img-thiago.jpeg", alt: "Empresário usando óculos de luxo", description: "Sofisticação e elegância em cada detalhe", size: "medium" },
  { id: 12, src: "img/img-dkny-2.jpg", alt: "Óculos DKNY vintage retrô", description: "Clássicos atemporais que nunca saem de moda", size: "medium" },
];

const galeriaGrid = document.getElementById("galeria-grid");

galleryImages.forEach(img => {
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