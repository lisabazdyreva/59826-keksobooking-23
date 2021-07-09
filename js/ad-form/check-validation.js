import {addPreviewAvatar, addPreviewHousePhoto} from './get-user-photos-preview.js';

const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const type = form.querySelector('#type');
const time = form.querySelector('.ad-form__element--time');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const maxPrice = 1000000;
let minPrice = 1000;
const ROOMS_FOR_GUESTS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const checkTitleValidity = () => {
  const lengthValue = title.value.length;

  if (lengthValue < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - lengthValue} символов`);
  } else if (lengthValue > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите ${lengthValue - MAX_TITLE_LENGTH} символов`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};


const checkPriceValidity = () => {
  if (price.value < minPrice) {
    price.setCustomValidity(`Цена не может быть ниже ${minPrice}`);
  } else if (price.value > maxPrice) {
    price.setCustomValidity(`Цена не может быть выше ${maxPrice}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};


const checkRoomNumberCapacityValidity = () => {
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


const checkTypeValidity = () => {
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

const checkTimeValidity = (evt) => {
  const timeIn = time.querySelector('#timein');
  const timeOut = time.querySelector('#timeout');

  if (evt.target === timeIn) {
    timeOut.value = evt.target.value;
  } else if (evt.target === timeOut) {
    timeIn.value = evt.target.value;
  }
};

const addCheckTypes = () => {
  if (title === null || title === undefined) {
    price.addEventListener('input', checkPriceValidity);
    roomNumber.addEventListener('change', checkRoomNumberCapacityValidity);
    type.addEventListener('change', checkTypeValidity);
    time.addEventListener('change', checkTimeValidity);
  } else if (price === null || price === undefined) {
    title.addEventListener('input', checkTitleValidity);
    roomNumber.addEventListener('change', checkRoomNumberCapacityValidity);
    type.addEventListener('change', checkTypeValidity);
    time.addEventListener('change', checkTimeValidity);
  } else {
    price.addEventListener('input', checkPriceValidity);
    title.addEventListener('input', checkTitleValidity);
    roomNumber.addEventListener('change', checkRoomNumberCapacityValidity);
    type.addEventListener('change', checkTypeValidity);
    time.addEventListener('change', checkTimeValidity);
  }
};

const checkValidity = () => {
  addPreviewAvatar();
  addPreviewHousePhoto();
  addCheckTypes();
};

export {checkValidity};
