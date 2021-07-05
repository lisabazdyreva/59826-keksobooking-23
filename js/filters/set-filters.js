import {clearAll} from '../create-map.js';

const mapFiltersForm = document.querySelector('.map__filters');

// const housingType = mapFiltersForm.querySelector('#housing-type');
// const housingPrice = mapFiltersForm.querySelector('#housing-price');
// const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
// const housingGuests = mapFiltersForm.querySelector('#housing-guests');
// const housingFeatures = mapFiltersForm.querySelector('#housing-features');

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
  any: ['Квартира', 'Бунгало', 'Дом', 'Дворец', 'Отель'],
};

const PRICES = {
  middle: {
    MIN: 10000,
    MAX: 50000,
  },
  low: {
    MIN: 0,
    MAX: 10000,
  },
  high: {
    MIN: 50000,
    MAX: 1000000,
  },
};

const setFilters = (data, cb, cbSecond) => {

  const filteredByType = (item, evt) => {
    if (evt.target.id === 'housing-type') {
      if (evt.target.value === 'any') {
        return true;
      }
      return item.offer.type === TYPES[evt.target.value];
    }
    return true;
  };

  const filteredByPrice = (item, evt) => {
    if (evt.target.id === 'housing-price') {
      if (evt.target.value === 'any') {
        return true;
      }
      return (PRICES[evt.target.value].MIN < +item.offer.price) &&  (+item.offer.price < PRICES[evt.target.value].MAX);
    }
    return true;
  };

  const filteredByRooms = (item, evt) => {
    if (evt.target.id === 'housing-rooms') {
      if (evt.target.value === 'any') {
        return true;
      }
      return +item.offer.rooms === +evt.target.value;
    }
    return true;
  };

  const filteredByGuests = (item, evt) => {
    if (evt.target.id === 'housing-guests') {
      if (evt.target.value === 'any') {
        return true;
      }
      if (+evt.target.value === 0) {
        return +item.offer.guests > 2;
      }
      if (+evt.target.value === 1 || +evt.target.value === 2) {
        return item.offer.guests === +evt.target.value;
      }
    }
    return true;
  };

  const updateMap = (arr) => {
    const result = cb(arr);
    clearAll();
    cbSecond(arr, result);
  };


  const onFilterChange = (evt) => {
    let arr = data.slice('');
    arr = arr
      .filter((item) => filteredByType(item, evt))
      .filter((item) => filteredByPrice(item, evt))
      .filter((item) => filteredByRooms(item, evt))
      .filter((item) => filteredByGuests(item, evt));
    updateMap(arr);
  };

  const setEventListener = () => {
    mapFiltersForm.addEventListener('change', (evt) => onFilterChange(evt));
  };
  setEventListener();
};

export {setFilters};

