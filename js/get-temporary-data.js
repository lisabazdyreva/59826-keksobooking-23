import {getFloatRangeValue, getIntegerRangeValue} from './utils/get-random-value.js';

const getUniqueArray = (valuesList, length) => {
  const arrayValuesLength = getIntegerRangeValue(1, length);
  const arrayValues = new Array(arrayValuesLength).fill(null);
  arrayValues.map((value, indexNum, arr) => {
    let indexValue = valuesList[getIntegerRangeValue(0, (length - 1))];
    while (arr.includes(indexValue)) {
      indexValue = valuesList[getIntegerRangeValue(0, (length - 1))];
    }
    arr[indexNum] = indexValue;
  });
  return arrayValues;
};

const arrayId = [];
const arrayIdRandomOrder = [];
const idArrayLength = 11;
let avatar;
let index = 0;

for (let id = 1; id < idArrayLength; id++) {
  if (id >= 10) {
    arrayId[id-1] = `${id}`;
  } else {
    arrayId[id-1] = `0${id}`;
  }
}

const getRandomOrderArray = (arr) => {
  for (let indexValue = 0; indexValue < arr.length;  indexValue++) {
    let value = arr[getIntegerRangeValue(0, arr.length - 1)];
    while (arrayIdRandomOrder.includes(value)) {
      value = arr[getIntegerRangeValue(0, arr.length - 1)];
    }
    arrayIdRandomOrder.push(value);
  }
};

getRandomOrderArray(arrayId);

const createAd = () => {
  const getAvatarId = () => arrayIdRandomOrder[index++];
  const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const CHECKINS = ['12:00', '13:00', '14:00'];
  const CHECKOUTS = ['12:00', '13:00', '14:00'];
  const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

  avatar = `img/avatars/user${getAvatarId()}.png`;
  const price = getIntegerRangeValue(10, 1000);
  const rooms = getIntegerRangeValue(1, 15);
  const guests = getIntegerRangeValue(1, 20);
  const features = getUniqueArray(FEATURES, FEATURES.length);
  const photos = getUniqueArray(PHOTOS, PHOTOS.length);
  const type = TYPES[getIntegerRangeValue(0, TYPES.length-1)];
  const checkin = CHECKINS[getIntegerRangeValue(0, CHECKINS.length-1)];
  const checkout = CHECKOUTS[getIntegerRangeValue(0, CHECKOUTS.length-1)];
  const latLocation = getFloatRangeValue(35.65000, 35.70000, 5);
  const lngLocation = getFloatRangeValue(139.70000, 139.80000, 5);


  return {
    author: {
      avatar : avatar,
    },
    offer: {
      price: price,
      rooms: rooms,
      guests: guests,
      features: features,
      photos: photos,
      type: type,
      checkin: checkin,
      checkout: checkout,
      address: `${latLocation}, ${lngLocation}`,
      description: `Amazing ${type} is placed in ${latLocation}, ${lngLocation}. The price is ${price}. There are ${rooms} rooms in the ${type}.
      We are ready to accept ${guests} guests. There are some features for guests like: ${features.join(', ')}. Welcome!`,
      title: `Amazing ${rooms} rooms in ${type} for ${price}`,
    },
    location: {
      lat: latLocation,
      lng: lngLocation,
    },
  };
};

const createTemporaryData = (length) => new Array(length).fill(null).map(() => createAd());

export {createTemporaryData};
