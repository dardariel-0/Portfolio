// Configuração do i18next
i18next.init({
  lng: "pt", // Idioma padrão
  debug: true,
  resources: {
    pt: {
      translation: {
        // header
        projetos: "Projetos",
        sobre: "Sobre",
        contato: "Contato",
        idioma: "Idioma",
        modo: "Modo",

        //buttons
        btnProjeto: "VER PROJETO",
        btnMensagem: "ENVIAR MENSAGEM",
      },
    },
    en: {
      translation: {
        // header
        projetos: "Projects",
        sobre: "About",
        contato: "Contact",
        idioma: "Language",
        modo: "Mode",
        btnProjeto: "SEE PROJECT",
        btnMensagem: "SEND MESSAGE",
      },
    },
  },
});

// Função para trocar idioma
function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => updateTexts());
}

// Atualiza todos os textos na página
function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

// Inicializa os textos ao carregar a página
document.addEventListener("DOMContentLoaded", () => updateTexts());
