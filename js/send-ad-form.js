import {setUserFormSubmit} from './ad-form/submit-form.js';
import {showSuccessMessage} from './showing-messages/show-success-message.js';
import {showErrorMessage} from './showing-messages/show-error-message.js';
import {clearAllInputs} from './reset-form.js';
import {checkValidity} from './ad-form/check-validation.js';

const onSuccess = () => {
  showSuccessMessage();
  clearAllInputs();
};

const onFail = () => {
  showErrorMessage();
};

const sendForm = () => {
  checkValidity();
  setUserFormSubmit(onSuccess, onFail);
};

export {sendForm};
