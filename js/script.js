const cores = [
    { r: 255, g: 0, b: 0 }, // vermelho
    { r: 255, g: 255, b: 0 }, // amarelo
    { r: 0, g: 255, b: 0 }, // verde
    { r: 0, g: 255, b: 255 }, // ciano
    { r: 0, g: 0, b: 255 }, // azul
    { r: 255, g: 0, b: 255 }, // magenta
  ];
  function escolherCorAleatoria() {
    const cor = cores[Math.floor(Math.random() * cores.length)];
    return `rgb(${cor.r}, ${cor.g}, ${cor.b})`;
  }
  function animarFundo() {
    const cor1 = escolherCorAleatoria();
    const cor2 = escolherCorAleatoria();
    document.body.style.background = `linear-gradient(to right, ${cor1}, ${cor2})`;
    setTimeout(animarFundo, 9000); // chama a função recursivamente a cada 9 segundo
  }
  
  animarFundo(); // inicia a animação
      