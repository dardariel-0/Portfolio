export default function initBgInterativo() {
  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    let dots = [];
    let spacing = 24;
    let mouseInside = false;
    let maxDistance = 100;
    let mouseX = 0;
    let mouseY = 0;

    function createGrid() {
      grid.innerHTML = "";
      dots = [];
      let cols = Math.ceil(grid.clientWidth / spacing); // Arredonda para cima
      let rows = Math.ceil(grid.clientHeight / spacing); // Arredonda para cima

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let posX = x * spacing;
          let posY = y * spacing;

          // Evita que os dots ultrapassem a área do grid
          if (posX >= grid.clientWidth || posY >= grid.clientHeight) continue;

          let dot = document.createElement("div");
          dot.classList.add("dot");
          dot.style.left = `${posX}px`;
          dot.style.top = `${posY}px`;
          grid.appendChild(dot);
          dots.push({ element: dot, x: posX, y: posY });
        }
      }
    }

    function updateDots() {
      dots.forEach((dot) => {
        let dist = Math.hypot(mouseX - dot.x, mouseY - dot.y);

        if (dist < maxDistance) {
          dot.element.style.opacity = "1";
          let size = Math.max(15 - dist / 10, 3);
          dot.element.style.transform = `scale(${size / 4})`;
        } else {
          dot.element.style.opacity = "0";
          dot.element.style.transform = `scale(1)`;
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
        dot.element.style.opacity = "0";
        dot.element.style.transform = `scale(1)`;
      });
    });

    grid.addEventListener("mousemove", (e) => {
      if (!mouseInside) return;

      let rect = grid.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      updateDots();
    });

    grid.addEventListener("touchmove", (e) => {
      if (!mouseInside) return;

      let touch = e.touches[0];
      let rect = grid.getBoundingClientRect();
      mouseX = touch.clientX - rect.left;
      mouseY = touch.clientY - rect.top;

      updateDots();
    });

    grid.addEventListener("touchstart", () => {
      mouseInside = true;
    });

    grid.addEventListener("touchend", () => {
      mouseInside = false;
      dots.forEach((dot) => {
        dot.element.style.opacity = "0";
        dot.element.style.transform = `scale(1)`;
      });
    });
  });
}
