import {isEsc} from './utils.js';
import {setDisableFilters} from '../toggle-state.js';
import {
  successMessage,
  errorMessage,
  errorButton,
  dataErrorMessage,
  dataErrorText,
  dataErrorButton
} from './message-const.js';

const onMessageClose = (message, evt) => {
  if (isEsc(evt) || evt.type === 'click') {
    message.remove();
    document.body.removeEventListener('keydown', onMessageClose);
  }

};

const createSuccessMessage = () => {
  document.body.appendChild(successMessage);
  successMessage.addEventListener('click', (evt) => onMessageClose(successMessage, evt));
  document.body.addEventListener('keydown', (evt) => onMessageClose(successMessage, evt));
};

const createErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorButton.addEventListener('click', (evt) => onMessageClose(errorMessage, evt));
  document.body.addEventListener('keydown', (evt) => onMessageClose(errorMessage, evt));
};

const createGetDataErrorMessage = () => {
  dataErrorText.textContent = 'Ошибка загрузки данных с сервера';
  dataErrorButton.textContent = 'Попробовать загрузку позже';

  dataErrorButton.addEventListener('click', (evt) => onMessageClose(dataErrorMessage, evt));
  document.body.addEventListener('keydown', (evt) => onMessageClose(dataErrorMessage, evt));

  document.body.appendChild(dataErrorMessage);
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


