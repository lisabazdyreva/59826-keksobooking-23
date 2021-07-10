const filtersForm = document.querySelector('.map__filters');

const filterType = filtersForm.querySelector('#housing-type');
const filterPrice = filtersForm.querySelector('#housing-price');
const filterRooms = filtersForm.querySelector('#housing-rooms');
const filterGuests = filtersForm.querySelector('#housing-guests');
const filterFeatures = filtersForm.querySelector('#housing-features');

const wifi = filterFeatures.querySelector('#filter-wifi');
const dishwasher = filterFeatures.querySelector('#filter-dishwasher');
const parking = filterFeatures.querySelector('#filter-parking');
const washer = filterFeatures.querySelector('#filter-washer');
const elevator = filterFeatures.querySelector('#filter-elevator');
const conditioner = filterFeatures.querySelector('#filter-conditioner');

const selects = filtersForm.querySelectorAll('select');
const features = filtersForm.querySelectorAll('.map__checkbox');

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

export {
  filtersForm,
  filterType,
  filterPrice,
  filterRooms,
  filterGuests,
  filterFeatures,
  wifi,
  dishwasher,
  parking,
  washer,
  elevator,
  conditioner,
  selects,
  features,
  TYPES,
  PRICES
};
