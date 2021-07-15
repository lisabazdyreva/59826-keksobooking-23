import {clearCustomMarkers} from '../map/create-map.js';
import {form} from '../ad-form/form-const.js';
import {
  MAX_ARR_LENGTH,
  filtersForm,
  filterType,
  filterPrice,
  filterRooms,
  filterGuests,
  wifi,
  dishwasher,
  parking,
  washer,
  elevator,
  conditioner
} from './filters-const.js';

import {
  makeFilterAll
} from './check-filters-values.js';


const mainFilters = [
  {
    value : filterType.value,
    node: filterType,
  },
  {
    value : filterPrice.value,
    node: filterPrice,
  },
  {
    value: filterRooms.value,
    node: filterRooms,
  },
  {
    value: filterGuests.value,
    node: filterGuests,
  },
];

const featureFilters = [
  {
    value: wifi.checked,
    node: wifi,
  },
  {
    value: dishwasher.checked,
    node: dishwasher,
  },
  {
    value: parking.checked,
    node: parking,
  },
  {
    value: washer.checked,
    node: washer,
  },
  {
    value: elevator.checked,
    node: elevator,
  },
  {
    value: conditioner.checked,
    node: conditioner,
  },
];


const setFilters = (data, updateCards, updateCustomMarkers) => {
  let arrayOfFilteredElements = [];


  const filterAds = (ad) => {
    const isFiltersChecked = makeFilterAll(ad, mainFilters, featureFilters);
    if (isFiltersChecked && (arrayOfFilteredElements.length < MAX_ARR_LENGTH)) {
      arrayOfFilteredElements.push(isFiltersChecked);
      return true;
    }
  };

  const updateMap = (cards) => {
    const newCards = updateCards(cards);
    clearCustomMarkers();
    updateCustomMarkers(cards, newCards);
  };

  const getFilteredData = () => {
    let cards = data.slice('');
    arrayOfFilteredElements = [];
    cards = cards.filter((item) => filterAds(item));

    updateMap(cards);
  };

  const onAdsFilter = (evt) => {
    for (const filter of mainFilters) {
      if (evt.target === filter.node) {
        filter.value = evt.target.value;
      }
    }

    for (const feature of featureFilters) {
      if (evt.target === feature.node) {
        feature.value = evt.target.checked;
      }
    }
    getFilteredData();
  };

  const onFiltersReset = () => {
    for (const filter of mainFilters) {
      filter.value = 'any';
    }

    for (const feature of featureFilters) {
      feature.value = false;
    }
    getFilteredData();
  };

  filtersForm.addEventListener('change', (evt) => onAdsFilter(evt));
  form.addEventListener('reset', onFiltersReset);
  form.addEventListener('submit', onFiltersReset);
};

export {setFilters};
