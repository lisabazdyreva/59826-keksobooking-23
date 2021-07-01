import {setUserFormSubmit} from './ad-form/submit-form.js';
import {showSuccessMessage} from './show-success-message.js';
import {showErrorMessage} from './show-error-message.js';
import {clearAllInputs} from './clear-all-input-data.js';

const onSuccess = () => {
  showSuccessMessage();
  clearAllInputs();
};

const onFail = () => {
  showErrorMessage();
};

const sendForm = () => {
  setUserFormSubmit(onSuccess, onFail);
};

export {sendForm};
