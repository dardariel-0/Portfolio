function preventExternalLinks() {
  const btns = document.querySelectorAll("a");

  function prevent(evento) {
    evento.preventDefault(); // Prevents default button behavior
    window.open(this.href, "_blank");
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", prevent);
  });
}

preventExternalLinks();

////////////////////////qqqq

function mudarCorHeader() {
  const header = document.querySelector(".header");
  const sectionA = document.getElementById("intro");

  function animaScroll() {
    const sectionTop = sectionA.getBoundingClientRect().top;
    const sectionBottom = sectionA.getBoundingClientRect().bottom;

    if (sectionTop < -380) {
      header.classList.add("ativo");
    } else if (sectionBottom > 60) {
      header.classList.remove("ativo");
    }
  }

  window.addEventListener("scroll", animaScroll);
}

mudarCorHeader();

//bg interativo

function bgInterativo() {
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

bgInterativo();

//header animação

function headerSize() {
  const header = document.querySelector(".header");
  const menuMobile = document.querySelector(".link-mobile");

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 320) {
      // Ativa o efeito após 320px de scroll
      const maxWidth = 800; // Largura máxima do header
      const screenWidth = window.innerWidth; // Largura da tela
      const headerWidth = Math.min(screenWidth * 0.9, maxWidth); // Largura do header (90% da tela ou 900px)
      const margin = (screenWidth - headerWidth) / 2; // Margem para centralização
      header.style.width = `${headerWidth}px`; /* Define a largura do header */
      header.style.left = `${margin}px`; /* Centraliza horizontalmente */
      header.style.transform = "none"; /* Remove a transformação */
      header.style.backgroundColor =
        "rgba(255, 255, 255, 0.85)"; /* Fundo branco com transparência */
      header.style.backdropFilter = "blur(10px)"; /* Efeito de desfoque */
      header.style.boxShadow =
        "0 4px 12px rgba(0, 0, 0, 0.1)"; /* Sombra suave */
      header.style.borderRadius = "50px"; /* Bordas arredondadas */
      menuMobile.style.borderRadius = "38px 38px 20px 20px";
      header.style.padding = "10px 20px"; /* Padding ajustado */
      header.style.marginTop = "12px";
    } else {
      // Retorna ao estado inicial
      header.style.width = "100%"; /* Largura total */
      header.style.left = "0"; /* Posição inicial */
      header.style.transform = "none"; /* Remove a transformação */
      header.style.backgroundColor = "transparent"; /* Fundo transparente */
      header.style.backdropFilter = "none"; /* Sem desfoque */
      header.style.boxShadow = "none"; /* Sem sombra */
      header.style.borderRadius = "0"; /* Sem bordas arredondadas */
      menuMobile.style.borderRadius = "0px 0px 20px 20px";
      header.style.padding = "20px 40px"; /* Padding inicial */
      header.style.marginTop = "0px";
    }
  }

  window.addEventListener("scroll", handleScroll);
}

headerSize();

///////////////////////////////

// menu-mobile

const botaoMenu = document.querySelector(".button-menu");
const menuMobile = document.querySelector(".link-mobile");
const header = document.querySelector(".header");
function ativarBotao() {
  botaoMenu.classList.toggle("ativo");
  menuMobile.classList.toggle("ativo");
  header.classList.toggle("azul");
}

botaoMenu.addEventListener("click", ativarBotao);
