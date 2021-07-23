import {
  DATA_ERROR_BUTTON_TEXT,
  DATA_ERROR_TEXT,
  dataErrorButton,
  dataErrorMessage,
  dataErrorText,
  errorButton,
  errorMessage,
  successMessage
} from './message-const.js';
import {setDisableFilters} from '../toggle-state.js';
import {isClicked, isEsc} from './utils.js';

const closeMessage = (evt, message, cb, button) => {
  if (isClicked(evt)) {
    message.remove();
    (button) ?
      button.removeEventListener('click', cb) :
      message.removeEventListener('click', cb);
  } else if (isEsc(evt)) {
    message.remove();
    document.body.removeEventListener('keydown', cb);
  }
};

const onSuccessMessageClick = (evt) => {
  closeMessage(evt, successMessage, onSuccessMessageClick);
};

const onSuccessMessageKeydown = (evt) => {
  closeMessage(evt, successMessage, onSuccessMessageKeydown);
};

const createSuccessMessage = () => {
  document.body.appendChild(successMessage);
  successMessage.addEventListener('click', onSuccessMessageClick);
  document.body.addEventListener('keydown', onSuccessMessageKeydown);
};


const onErrorMessageClick = (evt) => {
  closeMessage(evt, errorMessage, onErrorMessageClick, errorButton);
};

const onErrorMessageKeydown = (evt) => {
  closeMessage(evt, errorMessage, onErrorMessageKeydown);
};

const createErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorButton.addEventListener('click', onErrorMessageClick);
  document.body.addEventListener('keydown', onErrorMessageKeydown);
};


const onGetDataErrorMessageClick = (evt) => {
  closeMessage(evt, dataErrorMessage, onGetDataErrorMessageClick, dataErrorButton);
};

const onGetDataErrorMessageKeydown = (evt) => {
  closeMessage(evt, dataErrorMessage, onGetDataErrorMessageKeydown);
};

const createGetDataErrorMessage = () => {
  dataErrorText.textContent = DATA_ERROR_TEXT;
  dataErrorButton.textContent = DATA_ERROR_BUTTON_TEXT;
  document.body.appendChild(dataErrorMessage);
  dataErrorButton.addEventListener('click', onGetDataErrorMessageClick);
  document.body.addEventListener('keydown', onGetDataErrorMessageKeydown);
};


const showSuccessMessage = () => {
  createSuccessMessage();
};

const showErrorMessage = () => {
  createErrorMessage();
};

const showGetDataError = () => {
  setDisableFilters();
  createGetDataErrorMessage();
};


export {showSuccessMessage, showErrorMessage, showGetDataError};


