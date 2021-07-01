const filters = document.querySelector('.map__filters');
const selects = filters.querySelectorAll('select');
const housingFeatures = filters.querySelectorAll('.map__checkbox');

const clearFilters = () => {
  for (const select of selects) {
    select.value = 'any';
  }
  for(const feature of housingFeatures) {
    if(feature.checked === true) {
      feature.checked = false;
    }
  }
};

export {clearFilters};
