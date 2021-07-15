import {price, roomNumber, time, title, type} from './form-const.js';
import {
  onTitleInput,
  onPriceInput,
  onRoomNumberChange,
  onTypeChange,
  onTimeChange
} from './check-validation.js';
import {addPreviewAvatar, addPreviewHousePhoto} from './add-user-photos-preview.js';

const setHandlers = () => {

  if (title === undefined || title === null) {
    price.addEventListener('input', onPriceInput);
  } else if (price === null || price === undefined) {
    title.addEventListener('input', onTitleInput);
  } else {
    price.addEventListener('input', onPriceInput);
    title.addEventListener('input', onTitleInput);
  }
  roomNumber.addEventListener('change', onRoomNumberChange);
  type.addEventListener('change', onTypeChange);
  time.addEventListener('change', onTimeChange);
};

const addValidationHandlers = () => {
  addPreviewAvatar();
  addPreviewHousePhoto();
  setHandlers();
};

export {addValidationHandlers};
