const form = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

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

export {setActiveStateElements};

