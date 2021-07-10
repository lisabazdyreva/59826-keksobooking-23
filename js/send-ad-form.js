import {setUserFormSubmit} from './ad-form/submit-form.js';
import {showSuccessMessage} from './showing-messages/show-success-message.js';
import {showErrorMessage} from './showing-messages/show-error-message.js';
import {clearForms} from './clear-all-forms.js';
import {addValidationHandlers} from './ad-form/add-validation-handlers.js';

const onSuccess = () => {
  showSuccessMessage();
  clearForms();
};

const onFail = () => {
  showErrorMessage();
};

const sendForm = () => {
  addValidationHandlers();
  setUserFormSubmit(onSuccess, onFail);
};

export {sendForm};
