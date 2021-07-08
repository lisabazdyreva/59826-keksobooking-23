import {clearAll} from '../create-map.js';

const mapFiltersForm = document.querySelector('.map__filters');

const housingType = mapFiltersForm.querySelector('#housing-type');
const housingPrice = mapFiltersForm.querySelector('#housing-price');
const housingRooms = mapFiltersForm.querySelector('#housing-rooms');
const housingGuests = mapFiltersForm.querySelector('#housing-guests');

const housingFeatures = mapFiltersForm.querySelector('#housing-features');
const wifi = housingFeatures.querySelector('#filter-wifi');
const dishwasher = housingFeatures.querySelector('#filter-dishwasher');
const parking = housingFeatures.querySelector('#filter-parking');
const washer = housingFeatures.querySelector('#filter-washer');
const elevator = housingFeatures.querySelector('#filter-elevator');
const conditioner = housingFeatures.querySelector('#filter-conditioner');

let typeInitialValue = housingType.value;
let priceInitialValue = housingPrice.value;
let roomsInitialValue = housingRooms.value;
let guestsInitialValue= housingGuests.value;

let wifiInitialValue = wifi.checked;
let dishwasherInitialValue = dishwasher.checked;
let parkingInitialValue = parking.checked;
let washerInitialValue = washer.checked;
let elevatorInitialValue = elevator.checked;
let conditionerInitialValue = conditioner.checked;


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


const isTypeOk = (item) => {
  if (item.offer.type === TYPES[typeInitialValue]) {
    return true;
  } if (typeInitialValue === 'any') {
    return true;
  } else {
    return false;
  }
};

const isPriceOk = (item) => {
  if (priceInitialValue === 'any') {
    return true;
  } else if ((PRICES[priceInitialValue].MIN < +item.offer.price) && (+item.offer.price< PRICES[priceInitialValue].MAX)) {
    return true;
  } else {
    return false;
  }
};

const isRoomOk = (item) => {
  if (+item.offer.rooms === +roomsInitialValue) {
    return true;
  } else if (roomsInitialValue === 'any') {
    return true;
  } else {
    return false;
  }
};

const isGuestsOk = (item) => {
  if (item.offer.guests === +guestsInitialValue) {
    return true;
  } else if (guestsInitialValue === 'any') {
    return true;
  } else {
    return false;
  }
};

const isWifiOk = (item) => {
  if (wifiInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (wifiInitialValue === true && item.offer.features.includes('wifi')) {
    return true;
  } else if (wifiInitialValue === false) {
    return true;
  }
};

const isDishwasherOk = (item) => {
  if (dishwasherInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (dishwasherInitialValue === true && item.offer.features.includes('dishwasher')) {
    return true;
  } else if (dishwasherInitialValue === false) {
    return true;
  }
};

const isParkingOk = (item) => {
  if (parkingInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (parkingInitialValue === true && item.offer.features.includes('parking')) {
    return true;
  } else if (parkingInitialValue === false) {
    return true;
  }
};

const isWasherOk = (item) => {
  if (washerInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (washerInitialValue === true && item.offer.features.includes('washer')) {
    return true;
  } else if (washerInitialValue === false) {
    return true;
  }
};

const isElevatorOk = (item) => {
  if (elevatorInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (elevatorInitialValue === true && item.offer.features.includes('elevator')) {
    return true;
  } else if (elevatorInitialValue === false) {
    return true;
  }
};

const isConditionerOk = (item) => {
  if (conditionerInitialValue === true && item.offer.features === undefined) {
    return false;
  } else if (conditionerInitialValue === true && item.offer.features.includes('conditioner')) {
    return true;
  } else if (conditionerInitialValue === false) {
    return true;
  }
};

const onSelectFilter = (data, cb, cbSecond) => {

  const isEverythingOk = (item) => {
    if (isTypeOk(item)
      && isRoomOk(item)
      && isGuestsOk(item)
      && isPriceOk(item)
      && isWifiOk(item)
      && isDishwasherOk(item)
      && isParkingOk(item)
      && isWasherOk(item)
      && isElevatorOk(item)
      && isConditionerOk(item)) {
      return true;
    }
  };

  const updateMap = (arr) => {
    if (arr.length > 10) {
      arr = arr.slice(0, 10);
    }
    const result = cb(arr);
    clearAll();
    cbSecond(arr, result);
  };

  mapFiltersForm.addEventListener('change', (evt) => {
    const target = evt.target;
    const value = target.value;
    const checked = target.checked;

    if (target === housingType) {
      typeInitialValue = value;
    } else if (target === housingPrice) {
      priceInitialValue = value;
    } else if (target === housingRooms) {
      roomsInitialValue = value;
    } else if (target === housingGuests) {
      guestsInitialValue = value;
    }

    if (target === wifi) {
      wifiInitialValue = checked;
    } else if (target === dishwasher) {
      dishwasherInitialValue = checked;
    } else if (target === parking) {
      parkingInitialValue = checked;
    } else if (target === washer) {
      washerInitialValue = checked;
    } else if (target === elevator) {
      elevatorInitialValue = checked;
    } else if (target === conditioner) {
      conditionerInitialValue = checked;
    }

    let arr = data.slice('');
    arr = arr.filter((item) => isEverythingOk(item));
    updateMap(arr);
  });

};

const setFilters = (data, cb, cbSecond) => {
  onSelectFilter(data,cb, cbSecond);
};

export {setFilters};


