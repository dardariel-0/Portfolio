export default function initModal() {
  const botaoAbrir = document.querySelectorAll("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function fecharModal() {
      containerModal.classList.remove("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    botaoAbrir.forEach((botao) => {
      botao.addEventListener("click", abrirModal);
    });
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

// LANGUAJE

const langPT = document.querySelector(".pt-br");
const langEN = document.querySelector(".en-us");
const paragrafos = document.querySelectorAll(".jsText");
///////////////////

function mudarEN() {
  paragrafos[0].innerHTML = "Mode";

  paragrafos[1].innerHTML = "Language";

  langEN.classList.add("ativo");
  langPT.classList.remove("ativo");
}
langEN.addEventListener("click", mudarEN);

/////////////////////////////////

function mudarPT() {
  paragrafos[0].innerHTML = "Modo";

  paragrafos[1].innerHTML = "Idioma";

  langPT.classList.add("ativo");
  langEN.classList.remove("ativo");
}
langPT.addEventListener("click", mudarPT);

///////////////////////////////////////

// MODO CLARO E ESCURO

const claro = document.querySelector(".light");
const escuro = document.querySelector(".dark");

function modoClaro() {
  claro.classList.add("ativo");
  escuro.classList.remove("ativo");
}

claro.addEventListener("click", modoClaro);

function modoEscuro() {
  escuro.classList.add("ativo");
  claro.classList.remove("ativo");
}

escuro.addEventListener("click", modoEscuro);
