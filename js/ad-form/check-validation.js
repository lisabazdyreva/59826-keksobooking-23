import {
  title,
  price,
  roomNumber,
  capacity,
  type,
  time,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE,
  ROOMS_FOR_GUESTS
} from './form-const.js';

let minPrice = 1000;

const checkTitleValidation = () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleLength} символов`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите ${titleLength - MAX_TITLE_LENGTH} символов`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};


const checkPriceValidation = () => {
  if (price.value < minPrice) {
    price.setCustomValidity(`Цена не может быть ниже ${minPrice}`);
  } else if (price.value > MAX_PRICE) {
    price.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};


const checkRoomNumberCapacityValidation = () => {
  for (const option of capacity.children) {
    const isIncludes = ROOMS_FOR_GUESTS[+roomNumber.value].includes(+option.value);
    option.disabled = !isIncludes;

    if (option.disabled === true) {
      option.removeAttribute('selected');
    }

    if (option.disabled === false && (+option.value === 1 || +option.value === 0)) {
      option.setAttribute('selected', '');
    }
  }
};


const checkTypeValidation = () => {
  switch (type.value) {
    case 'bungalow':
      minPrice = 0;
      break;
    case 'flat':
      minPrice = 1000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'hotel':
      minPrice = 3000;
      break;
    default:
      minPrice = 1000;
  }
  price.placeholder = minPrice;
};

const checkTimeValidation = (evt) => {
  const timeIn = time.querySelector('#timein');
  const timeOut = time.querySelector('#timeout');

  if (evt.target === timeIn) {
    timeOut.value = evt.target.value;
  } else if (evt.target === timeOut) {
    timeIn.value = evt.target.value;
  }
};


export {
  checkTitleValidation,
  checkPriceValidation,
  checkRoomNumberCapacityValidation,
  checkTypeValidation,
  checkTimeValidation
};
