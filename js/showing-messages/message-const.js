const DATA_ERROR_TEXT = 'Ошибка загрузки данных с сервера';
const DATA_ERROR_BUTTON_TEXT = 'Попробовать загрузку позже';

const successMessage = document.querySelector('#success').content.querySelector('.success');

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');

const dataErrorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const dataErrorText = dataErrorMessage.querySelector('p');
const dataErrorButton = dataErrorMessage.querySelector('button');


export {
  DATA_ERROR_TEXT,
  DATA_ERROR_BUTTON_TEXT,
  successMessage,
  errorMessage,
  errorButton,
  dataErrorMessage,
  dataErrorText,
  dataErrorButton
};
