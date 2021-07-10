import {price, roomNumber, time, title, type} from './form-const.js';
import {
  checkTitleValidation,
  checkPriceValidation,
  checkRoomNumberCapacityValidation,
  checkTypeValidation,
  checkTimeValidation
} from './check-validation.js';
import {addPreviewAvatar, addPreviewHousePhoto} from './add-user-photos-preview.js';

const setHandlers = () => {

  if (title === undefined || title === null) {
    price.addEventListener('input', checkPriceValidation);
  } else if (price === null || price === undefined) {
    title.addEventListener('input', checkTitleValidation);
  } else {
    price.addEventListener('input', checkPriceValidation);
    title.addEventListener('input', checkTitleValidation);
  }
  roomNumber.addEventListener('change', checkRoomNumberCapacityValidation);
  type.addEventListener('change', checkTypeValidation);
  time.addEventListener('change', checkTimeValidation);
};

const addValidationHandlers = () => {
  addPreviewAvatar();
  addPreviewHousePhoto();
  setHandlers();
};

export {addValidationHandlers};
