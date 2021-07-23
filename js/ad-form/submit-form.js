import {form} from './form-const.js';
import {sendServerData} from '../api.js';
import {onFormsReset} from '../clear-all-forms.js';

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendServerData (
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target),
    );
    onFormsReset();
  });
};

export {setUserFormSubmit};
