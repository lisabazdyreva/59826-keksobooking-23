import {form} from './ad-form/form-const.js';
import {clearForm} from './ad-form/clear-form.js';
import {clearFilters} from './filters/clear-filters.js';
import {setInitialLatLngValue} from './map/create-map.js';


const onFormsReset = () => {
  clearForm();
  clearFilters();
  setInitialLatLngValue();
};

const resetForm = () => {
  form.addEventListener('reset', onFormsReset);
};

export {onFormsReset, resetForm};
