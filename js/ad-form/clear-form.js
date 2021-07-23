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
import {changeRoomNumber} from './check-validation.js';
import {removePhotos} from './add-user-photos-preview.js';

const clearForm = () => {
  title.value = '';
  price.value = '';
  price.min = 1000;
  price.placeholder = 1000;
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
  removePhotos();
  changeRoomNumber();
};

export {clearForm};
