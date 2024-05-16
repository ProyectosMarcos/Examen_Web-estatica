import { formValidation } from './components/form.js';
import { initModal } from './components/modal.js';
import { initModalSearch } from './components/modalSearch.js';

window.addEventListener('DOMContentLoaded', () => {
  initModal();
  initModalSearch();
  formValidation();
});
