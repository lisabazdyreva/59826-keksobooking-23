import {clearAllInputs} from '../clear-all-input-data.js';
const form = document.querySelector('.ad-form');

const onResetInputs = () => {
  clearAllInputs();
};

const resetForm = () => {
  form.addEventListener('reset', onResetInputs);
};

export {resetForm};
