import {clearForm} from './ad-form/clear-form.js';
import {clearFilters} from './filters/clear-filters.js';
import {setInitialLatLngValue} from './map/create-map.js';

const form = document.querySelector('.ad-form');

const clearAllInputs = () => {
  clearForm();
  clearFilters();
  setInitialLatLngValue();
};

const resetForm = () => {
  form.addEventListener('reset', () => clearAllInputs());
};

export {clearAllInputs, resetForm};
