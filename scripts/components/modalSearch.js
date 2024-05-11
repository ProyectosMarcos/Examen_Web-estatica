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
