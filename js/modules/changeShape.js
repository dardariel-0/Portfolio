export default function initShape() {
  // Função para alternar o formato das divs
  function toggleShape() {
    // Seleciona todas as divs com a classe .shape
    const shapes = document.querySelectorAll(".shape");

    // Garante que pelo menos uma div mude
    let atLeastOneChanged = false;

    shapes.forEach((shape) => {
      // Aumenta a probabilidade de mudança para 70%
      const shouldChange = Math.random() > 0.3; // 70% de chance de mudar

      if (shouldChange) {
        // Alterna entre as classes .shape e .round
        shape.classList.toggle("round");
        atLeastOneChanged = true; // Marca que pelo menos uma div mudou
      }
    });

    // Se nenhuma div mudou, força uma mudança aleatória
    if (!atLeastOneChanged) {
      const randomIndex = Math.floor(Math.random() * shapes.length);
      shapes[randomIndex].classList.toggle("round");
    }
  }

  // Executa a função a cada 4 segundos
  setInterval(toggleShape, 3000);
}
