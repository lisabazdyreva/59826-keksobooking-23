import {
  title,
  price,
  roomNumber,
  capacity,
  type,
  timeIn,
  timeOut,
  description,
  features
} from './form-const.js';

const clearForm = () => {
  title.value = '';
  price.value = '';
  roomNumber.value = 1;
  capacity.value = 1;
  type.value = 'flat';
  timeIn.value = '12:00';
  timeOut.value = '12:00';
  description.value = '';

  for (const feature of features) {
    if (feature.checked === true) {
      feature.checked = false;
    }
  }
};

export {clearForm};
