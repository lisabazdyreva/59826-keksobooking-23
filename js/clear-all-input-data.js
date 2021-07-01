import {clearForm} from './ad-form/clear-form.js';
import {clearFilters} from './filters/clear-filters.js';
import {setInitialLatLngValue} from './create-map.js';


const clearAllInputs = () => {
  clearForm();
  clearFilters();
  setInitialLatLngValue();
};

export {clearAllInputs};
