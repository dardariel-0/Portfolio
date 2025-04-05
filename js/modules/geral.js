export default function preventExternalLinks() {
  const btns = document.querySelectorAll(".jsLink a");
  const btnMessage = document.querySelector(".btn-message");

  function prevent(evento) {
    evento.preventDefault(); // Prevents default button behavior
    window.open(this.href, "_blank");
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", prevent);
  });

  const form = document.getElementById("meuFormulario");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // impede o redirecionamento

    const dados = new FormData(form);

    try {
      const resposta = await fetch("https://formspree.io/f/myzenvke", {
        method: "POST",
        body: dados,
        headers: {
          Accept: "application/json",
        },
      });

      if (resposta.ok) {
        // Muda o botão para verde
        btnMessage.textContent = "Enviado!";
        btnMessage.classList.add("enviado");

        form.reset();
        // Após 2 segundos, volta ao estado original
        setTimeout(() => {
          btnMessage.textContent = "Enviar mensagem";
          btnMessage.classList.remove("enviado");
        }, 2500);
      }
    } catch (err) {
      alert("Erro de rede. Verifique sua conexão.");
    }
  });
}
