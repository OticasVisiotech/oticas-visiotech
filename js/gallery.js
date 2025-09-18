// ======= GALERIA =======
const galleryImages = [
  { id: 1, src: "img/img-nike-masc.jpg", alt: "Mulher elegante usando óculos de grau", description: "Óculos de grau com design moderno e sofisticado", size: "large" },
  { id: 2, src: "img/img-nike-2.jpg", alt: "Homem estiloso usando óculos de sol", description: "Óculos de sol com proteção UV e estilo contemporâneo", size: "medium" },
  { id: 3, src: "img/img-nike-3.jpg", alt: "Atleta usando óculos esportivos", description: "Óculos esportivos de alta performance", size: "medium" },
  { id: 4, src: "img/img-nike-fem.jpg", alt: "Coleção de óculos premium", description: "Linha premium com materiais de alta qualidade", size: "large" },
  { id: 5, src: "img/img-lacoste.jpg", alt: "Jovem profissional usando óculos modernos", description: "Óculos ideais para o ambiente corporativo", size: "medium" },
  { id: 6, src: "img/img-lacoste-2.jpg", alt: "Modelo usando óculos de sol designer", description: "Design exclusivo com assinatura de grandes marcas", size: "medium" },
  { id: 7, src: "img/img-ck.jpg", alt: "Ciclista usando óculos de proteção", description: "Proteção total para atividades ao ar livre", size: "large" },
  { id: 8, src: "img/img-dkny-2.jpg", alt: "Executivo usando óculos de luxo", description: "Sofisticação e elegância em cada detalhe", size: "medium" },
  { id: 9, src: "img/img-dkny-3.jpg", alt: "Jovem usando óculos modernos", description: "Tendências atuais em armações jovens", size: "medium" },
  { id: 10, src: "img/img-salvatore.jpg", alt: "Família usando óculos coordenados", description: "Soluções para toda a família", size: "large" },
  { id: 11, src: "img/img-marchon.jpeg", alt: "Óculos infantis coloridos", description: "Diversão e proteção para os pequenos", size: "medium" },
  { id: 12, src: "img/img-marchon-2.jpg", alt: "Óculos vintage retrô", description: "Clássicos atemporais que nunca saem de moda", size: "medium" },
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