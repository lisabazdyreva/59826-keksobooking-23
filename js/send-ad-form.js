import {setUserFormSubmit} from './ad-form/submit-form.js';
import {showSuccessMessage, showErrorMessage} from './showing-messages/show-message.js';
import {onFormsReset} from './clear-all-forms.js';
import {addValidationHandlers} from './ad-form/add-validation-handlers.js';

const onSuccess = () => {
  showSuccessMessage();
  onFormsReset();
};

const onFail = () => {
  showErrorMessage();
};

const sendForm = () => {
  addValidationHandlers();
  setUserFormSubmit(onSuccess, onFail);
};

export {sendForm};
