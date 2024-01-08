const btnAbrir = document.querySelector("[data-modal='abrir']");
const btnFechar = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');

function abrirModal(event) {
  event.preventDefault();
  modalContainer.classList.add("ativo");
}

function fecharModal(event) {
  event.preventDefault();
  modalContainer.classList.toggle("ativo");
}

function clicarFora(event) {
  if (event.target == modalContainer) {
    modalContainer.classList.toggle("ativo");
  }
}

btnAbrir.addEventListener("click", abrirModal);
btnFechar.addEventListener("click", fecharModal);
modalContainer.addEventListener("click", clicarFora);
