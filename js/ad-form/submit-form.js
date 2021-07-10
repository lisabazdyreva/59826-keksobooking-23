import {sendServerData} from '../api.js';
import {form} from './form-const.js';

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendServerData (
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
