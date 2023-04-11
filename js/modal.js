(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    subBtn: document.querySelector(".sub-button"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.subBtn.addEventListener('click', preventDefaultSubmit);

  function preventDefaultSubmit(e) {
    e.preventDefault();
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();