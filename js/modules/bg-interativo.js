export default function initBgInterativo() {
  const grid = document.querySelector(".grid");
  let dots = [];
  let spacing = 24;
  let mouseInside = false;
  let maxDistance = 100; // Alcance do efeito
  let mouseX = 0;
  let mouseY = 0;

  function createGrid() {
    grid.innerHTML = "";
    dots = [];
    let cols = Math.floor(window.innerWidth / spacing);
    let rows = Math.floor(window.innerHeight / spacing);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.left = `${x * spacing}px`;
        dot.style.top = `${y * spacing}px`;
        grid.appendChild(dot);
        dots.push({ element: dot, x: x * spacing, y: y * spacing });
      }
    }
  }

  function updateDots() {
    dots.forEach((dot) => {
      let dist = Math.hypot(mouseX - dot.x, mouseY - dot.y);

      if (dist < maxDistance) {
        dot.element.style.opacity = "1"; // Mostra o dot
        let size = Math.max(15 - dist / 10, 3);
        dot.element.style.transform = `scale(${size / 4})`;
      } else {
        dot.element.style.opacity = "0"; // Esconde o dot com transição
        dot.element.style.transform = `scale(1)`; // Reseta o tamanho
      }
    });
  }

  window.addEventListener("resize", createGrid);
  createGrid();

  grid.addEventListener("mouseenter", () => {
    mouseInside = true;
  });

  grid.addEventListener("mouseleave", () => {
    mouseInside = false;
    dots.forEach((dot) => {
      dot.element.style.opacity = "0"; // Esconde todos os dots com transição
      dot.element.style.transform = `scale(1)`; // Reseta o tamanho
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!mouseInside) return;

    mouseX = e.pageX;
    mouseY = e.pageY;
    updateDots();
  });

  // Evento para touch (celulares e tablets)
  document.addEventListener("touchmove", (e) => {
    if (!mouseInside) return;

    let touch = e.touches[0]; // Pega o primeiro toque
    mouseX = touch.pageX;
    mouseY = touch.pageY;
    updateDots();
  });

  // Ativa o efeito quando o toque começa
  grid.addEventListener("touchstart", () => {
    mouseInside = true;
  });

  // Desativa o efeito quando o toque termina
  grid.addEventListener("touchend", () => {
    mouseInside = false;
    dots.forEach((dot) => {
      dot.element.style.opacity = "0"; // Esconde todos os dots com transição
      dot.element.style.transform = `scale(1)`; // Reseta o tamanho
    });
  });
}
