import {checkValidity} from './check-validation.js';
import {sendServerData} from '../api.js';

const form = document.querySelector('.ad-form');

const setUserFormSubmit = (onSuccess, onFail) => {
  checkValidity();
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
