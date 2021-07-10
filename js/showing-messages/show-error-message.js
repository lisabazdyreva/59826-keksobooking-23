import {isEsc} from './utils.js';

const errorTemplate = document.querySelector('#error').content;
const error = errorTemplate.querySelector('.error');
const errorButton = error.querySelector('.error__button');

const closeErrorMessage = (evt) => {
  if (isEsc(evt)) {
    document.body.removeChild(error);
    errorButton.removeEventListener('click', closeErrorMessage);
    document.body.removeEventListener('keydown', closeErrorMessage);
  }
};

const createErrorMessage = () => {
  document.body.appendChild(error);
  errorButton.addEventListener('click', closeErrorMessage);
  document.body.addEventListener('keydown', closeErrorMessage);
};

const showErrorMessage = () => {
  createErrorMessage();
};

export {showErrorMessage};
