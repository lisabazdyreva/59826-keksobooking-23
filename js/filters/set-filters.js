import {clearCustomMarkers} from '../map/create-map.js';
import {form} from '../ad-form/form-const.js';
import {
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

const MAX_ARR_LENGTH = 10;

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
  const filterAds = (ad) => {
    const isFiltersChecked = makeFilterAll(ad, mainFilters, featureFilters);
    if (isFiltersChecked) {
      return true;
    }
  };

  const updateMap = (cards) => {
    if (cards.length > MAX_ARR_LENGTH) {
      cards = cards.slice(0, MAX_ARR_LENGTH);
    }
    const newCards = updateCards(cards);
    clearCustomMarkers();
    updateCustomMarkers(cards, newCards);
  };

  const getFilteredData = () => {
    let cards = data.slice('');
    cards = cards.filter((item) => filterAds(item));
    updateMap(cards);
  };

  const onFilterAds = (evt) => {
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

  const onResetFilter = () => {
    for (const filter of mainFilters) {
      filter.value = 'any';
    }

    for (const feature of featureFilters) {
      feature.value = false;
    }
    getFilteredData();
  };

  filtersForm.addEventListener('change', (evt) => onFilterAds(evt));
  form.addEventListener('reset', () => onResetFilter());
  form.addEventListener('submit', () => onResetFilter());
};

export {setFilters};
