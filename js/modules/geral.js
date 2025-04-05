export default function preventExternalLinks() {
  const btns = document.querySelectorAll(".jsLink a");

  function prevent(evento) {
    evento.preventDefault(); // Prevents default button behavior
    window.open(this.href, "_blank");
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", prevent);
  });
}
