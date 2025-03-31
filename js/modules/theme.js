// Função para definir o tema
function setTheme(theme) {
  // Aplicar o tema no HTML
  document.documentElement.setAttribute("data-theme", theme);

  // Atualizar estado dos botões
  const lightBtn = document.getElementById("light-btn");
  const darkBtn = document.getElementById("dark-btn");

  if (theme === "light") {
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
  } else {
    lightBtn.classList.remove("active");
    darkBtn.classList.add("active");
  }

  // Atualizar checkboxes
  const claro = document.querySelector(".light");
  const escuro = document.querySelector(".dark");

  if ((document.getElementById("light-btn").checked = theme === "light")) {
    claro.classList.add("ativo");
    escuro.classList.remove("ativo");
  } else if ((document.getElementById("dark-btn").checked = theme === "dark")) {
    escuro.classList.add("ativo");
    claro.classList.remove("ativo");
  }

  // Salvar preferência
  localStorage.setItem("theme", theme);
}

// Carregar tema salvo ao iniciar
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Opcional: respeitar preferência do sistema se não houver tema salvo
  if (!localStorage.getItem("theme")) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) setTheme("dark");
  }
});
