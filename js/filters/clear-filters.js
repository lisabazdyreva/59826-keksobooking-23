import {
  selects,
  features
} from './filters-const.js';


const clearFilters = () => {
  for (const select of selects) {
    select.value = 'any';
  }
  for (const feature of features) {
    if (feature.checked === true) {
      feature.checked = false;
    }
  }
};

export {clearFilters};
