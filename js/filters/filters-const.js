const MAX_ARR_LENGTH = 10;
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

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
  any: ['Квартира', 'Бунгало', 'Дом', 'Дворец', 'Отель'],
};

const filtersForm = document.querySelector('.map__filters');
const selects = filtersForm.querySelectorAll('select');
const features = filtersForm.querySelectorAll('.map__checkbox');

export {
  MAX_ARR_LENGTH,
  PRICES,
  types,
  filtersForm,
  selects,
  features
};
