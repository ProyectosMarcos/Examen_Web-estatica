export function initModal() {
  const modalWindow = document.getElementById('modal');
  const btnOpenModal = document.getElementById('openModal');
  const btnCloseModal = document.getElementById('closeModal');

  btnOpenModal.addEventListener('click', () => {
    modalWindow.showModal();
  });

  btnCloseModal.addEventListener('click', () => {
    modalWindow.close();
  });
}
