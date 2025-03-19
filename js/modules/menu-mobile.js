export default function initMenuMobile() {
  const botaoMenu = document.querySelector(".button-menu");
  const menuMobile = document.querySelector(".menuMobile");
  const header = document.querySelector(".header");

  botaoMenu.onclick = function () {
    botaoMenu.classList.toggle("ativo");
    menuMobile.classList.toggle("ativo");
    header.classList.toggle("azul");
  };

  document.onclick = function (evento) {
    if (
      !botaoMenu.contains(evento.target) &&
      !menuMobile.contains(evento.target)
    ) {
      botaoMenu.classList.remove("ativo");
      menuMobile.classList.remove("ativo");
      header.classList.remove("azul");
    }
  };
}
