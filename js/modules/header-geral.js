export default function initHeaderSize() {
  const header = document.querySelector(".header");
  const menuMobile = document.querySelector(".menuMobile");

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
      header.style.padding = "10px 0px"; /* Padding ajustado */
      header.style.marginTop = "0px";
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
      header.style.padding = "0px 20px"; /* Padding inicial */
      header.style.marginTop = "0px";
    }
  }

  window.addEventListener("scroll", handleScroll);

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
}
