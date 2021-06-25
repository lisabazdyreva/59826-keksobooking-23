const form = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const setInactiveStateElements = () => {
  form.classList.add('ad-form--disabled');
  for (const fieldset of form.children) {
    fieldset.disabled = true;
  }
  filtersForm.classList.add('map__filters--disabled');
  for (const elements of filtersForm.children) {
    elements.disabled = true;
  }
};

const setActiveStateElements = () => {
  form.classList.remove('ad-form--disabled');
  for (const fieldset of form.children) {
    fieldset.disabled = false;
  }
  filtersForm.classList.remove('map__filters--disabled');
  for (const elements of filtersForm.children) {
    elements.disabled = false;
  }
};

const setState = () => {
  window.addEventListener('DOMContentLoaded', setInactiveStateElements);
  window.addEventListener('load', setActiveStateElements);
};

export {setState};
