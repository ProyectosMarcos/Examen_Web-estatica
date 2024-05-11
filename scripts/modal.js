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

export function initModalSearch() {
  const modalWindowSearch = document.getElementById('modalSearch');
  const btnOpenModalSearch = document.getElementById('openModalSearch');
  const btnCloseModalSearch = document.getElementById('closeModalSearch');

  btnOpenModalSearch.addEventListener('click', () => {
    modalWindowSearch.showModal();
  });

  btnCloseModalSearch.addEventListener('click', () => {
    modalWindowSearch.close();
  });
}
