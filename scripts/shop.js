import { cartItems } from './components/items.js';
import { initModalSearch } from './components/modalSearch.js';

window.addEventListener('DOMContentLoaded', () => {
  cartItems();
  initModalSearch();
});
