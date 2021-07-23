const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const ROOMS_FOR_GUESTS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const minPrices = {
  bungalow: 0,
  flat: 1000,
  palace: 10000,
  house: 5000,
  hotel: 3000,
};

const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const type = form.querySelector('#type');
const time = form.querySelector('.ad-form__element--time');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const description = form.querySelector('#description');
const features = form.querySelectorAll('.features__checkbox');

const fileAvatarInput = form.querySelector('#avatar');
const previewAvatar = form.querySelector('.ad-form-header__preview img');
const fileHouseInput = form.querySelector('#images');
const blockPreviewHouse = form.querySelector('.ad-form__photo');


export {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE,
  ROOMS_FOR_GUESTS,
  FILE_TYPES,
  minPrices,
  form,
  title,
  price,
  roomNumber,
  capacity,
  type,
  time,
  timeIn,
  timeOut,
  description,
  features,
  fileAvatarInput,
  previewAvatar,
  fileHouseInput,
  blockPreviewHouse
};
