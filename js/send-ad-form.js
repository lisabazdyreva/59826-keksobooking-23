import {setUserFormSubmit} from './ad-form/submit-form.js';
import {showSuccessMessage, showErrorMessage} from './showing-messages/show-messages.js';
import {addValidationHandlers} from './ad-form/add-validation-handlers.js';

const onSuccess = () => {
  showSuccessMessage();
};

const onFail = () => {
  showErrorMessage();
};

const sendForm = () => {
  addValidationHandlers();
  setUserFormSubmit(onSuccess, onFail);
};

export {sendForm};
