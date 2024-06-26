import { initModal } from './components/modal.js';
import { initModalSearch } from './components/modalSearch.js';
import { session } from './components/sessionStorage.js';
import { local } from './components/localStorage.js';

window.addEventListener('DOMContentLoaded', () => {
  initModal();
  initModalSearch();
  local();
  session();
});
