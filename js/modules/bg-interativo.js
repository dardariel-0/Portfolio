// VERSÃO OTIMIZADA DO CODIGO ANTERIOR

export default function initBgInterativo() {
  document.querySelectorAll(".grid").forEach((grid) => {
    let dots = [],
      spacing = 24,
      maxDistance = 100,
      mouseX = 0,
      mouseY = 0,
      mouseInside = false,
      animationFrame;

    function createGrid() {
      grid.innerHTML = "";
      dots = [];
      let cols = Math.ceil(grid.clientWidth / spacing);
      let rows = Math.ceil(grid.clientHeight / spacing);

      let fragment = document.createDocumentFragment();

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let dot = document.createElement("div");
          dot.classList.add("dot");
          dot.style.left = `${x * spacing}px`;
          dot.style.top = `${y * spacing}px`;
          fragment.appendChild(dot);
          dots.push({ element: dot, x: x * spacing, y: y * spacing });
        }
      }

      grid.appendChild(fragment);
    }

    function updateDots() {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        dots.forEach(({ element, x, y }) => {
          let dist = Math.hypot(mouseX - x, mouseY - y);
          let size = Math.max(15 - dist / 10, 3);
          let active = dist < maxDistance;

          Object.assign(element.style, {
            opacity: active ? "1" : "0",
            transform: `scale(${active ? size / 4 : 1})`,
          });
        });
      });
    }

    function handleMouseMove(e) {
      if (!mouseInside) return;
      let rect = grid.getBoundingClientRect();
      let event = e.touches ? e.touches[0] : e;
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      updateDots();
    }

    function resetDots() {
      mouseInside = false;
      dots.forEach(({ element }) =>
        Object.assign(element.style, { opacity: "0", transform: "scale(1)" })
      );
    }

    window.addEventListener("resize", createGrid);
    grid.addEventListener("mouseenter", () => (mouseInside = true));
    grid.addEventListener("mouseleave", resetDots);
    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("touchstart", () => (mouseInside = true));
    grid.addEventListener("touchmove", handleMouseMove);
    grid.addEventListener("touchend", resetDots);

    createGrid();
  });
}
