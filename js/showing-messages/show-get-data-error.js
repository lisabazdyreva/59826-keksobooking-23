import {setDisableFilters} from '../toggle-state.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const dataError = errorTemplate.cloneNode(true);
const dataErrorText = dataError.querySelector('p');
const errorButton = dataError.querySelector('button');

const createGetDataErrorMessage = () => {
  dataErrorText.textContent = 'Ошибка загрузки данных с сервера';
  errorButton.textContent = 'Попробовать загрузку позже';
  document.body.appendChild(dataError);
};

const closeGetDataErrorMessage = (evt) => {
  if (evt.type === 'click' || evt.key === 'Ecs' || evt.key === 'Escape') {
    document.body.removeChild(dataError);
    errorButton.removeEventListener('click', closeGetDataErrorMessage);
    document.body.removeEventListener('keydown', closeGetDataErrorMessage);
  }
};


const openGetDataErrorMessage = () => {
  createGetDataErrorMessage();
  errorButton.addEventListener('click', closeGetDataErrorMessage);
  document.body.addEventListener('keydown', closeGetDataErrorMessage);
};

const showGetDataError = () => {
  setDisableFilters();
  openGetDataErrorMessage();
};

export {showGetDataError};
