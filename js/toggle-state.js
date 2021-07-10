import {form} from './ad-form/form-const.js';
import {filtersForm} from './filters/filters-const.js';

const setActiveState = () => {
  form.classList.remove('ad-form--disabled');
  for (const fieldset of form.children) {
    fieldset.disabled = false;
  }
  filtersForm.classList.remove('map__filters--disabled');
  for (const elements of filtersForm.children) {
    elements.disabled = false;
  }
};


const setDisableFilters = () => {
  filtersForm.classList.add('map__filters--disabled');
  for (const elements of filtersForm.children) {
    elements.disabled = true;
  }
};

export {setActiveState, setDisableFilters};

