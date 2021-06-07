const checkInputErrors = function(min, max, roundingValue = 0) {
  const ERROR_MESSAGE = 'Некорректно задан диапазон: ';

  const checkParametersValid = () => {
    if (min === '' || max === '' || max === undefined || min === undefined) {
      return `${ERROR_MESSAGE} значения/ значение не введены`;
    } else if (min === true || max === true || min === false || max === false) {
      return `${ERROR_MESSAGE} введите числа`;
    } else if (isNaN(+min) === true || isNaN(+max) === true) {
      return `${ERROR_MESSAGE} введите числа`;
    } else if (max <= 0 || min < 0) {
      return (`${ERROR_MESSAGE} задайте положительные значения`);
    } else if (max < min) {
      return (`${ERROR_MESSAGE} минимальное значение ${min} превышает максимальное ${max}`);
    } else if (max === min) {
      return (`${ERROR_MESSAGE} минимальное и максимальное значение равны - ${max}, задайте диапазон`);
    } else {
      return true;
    }
  };

  const checkRoundingValid = () => {
    if (isNaN(+roundingValue) === true ||  roundingValue === '' || roundingValue === true || roundingValue === false || roundingValue === undefined) {
      return 'Введите корректный параметр знаков после запятой';
    }
    return true;
  };

  const isValidValues = checkParametersValid();
  min = +min;
  max = +max;
  if (isValidValues !== true) {
    throw new Error(`${isValidValues}`);
  }

  const isValidRounding = checkRoundingValid();
  if (isValidRounding !== true) {
    throw new Error(`${isValidRounding}`);
  }
};

const getIntegerRangeValue = function (min, max) {
  checkInputErrors(min, max);
  return Math.round(Math.random() * (max - min) + min);
};

const getFloatRangeValue = function (min, max, roundingValue) {
  checkInputErrors(min, max, roundingValue);
  return (Math.random() * (max - min) + min).toFixed(roundingValue);
};

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

// генерация временных данных
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

const arrayLength = 10;
const temporaryData = new Array(arrayLength).fill(null).map(() => createAd());
console.log(temporaryData);
