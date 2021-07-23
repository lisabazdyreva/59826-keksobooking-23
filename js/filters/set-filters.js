import {form} from '../ad-form/form-const.js';
import {
  MAX_ARR_LENGTH,
  filtersForm
} from './filters-const.js';
import {clearCustomMarkers} from '../map/create-map.js';
import {filteringRules} from './check-filters-values.js';


const setFilters = (data, updateCards, updateCustomMarkers) => {
  let filteredAds  = [];

  const filterElements = Array.from(document.querySelector('.map__filters').children);

  const filterAds = (ads) => ads.filter((ad) => {

    const isFiltersChecked = filterElements.every((filterElement) => (filterElement.value === 'any') ? true : filteringRules[filterElement.id](ad, filterElement));

    if (isFiltersChecked && (filteredAds.length < MAX_ARR_LENGTH)) {
      filteredAds.push(isFiltersChecked);
      return isFiltersChecked;
    }

  });

  const updateMap = (cards) => {
    const updatedPins = updateCards(cards);
    clearCustomMarkers();
    updateCustomMarkers(cards, updatedPins);
  };

  const onFilterChange = () => {
    let cards = data.slice('');
    filteredAds = [];
    cards = filterAds(cards);
    updateMap(cards);
  };

  const onFormReset = () => {
    onFilterChange();
  };

  const onFormSubmit = () => {
    onFilterChange();
  };

  filtersForm.addEventListener('change', onFilterChange);
  form.addEventListener('reset', onFormReset);
  form.addEventListener('submit', onFormSubmit);

};

export {setFilters};
