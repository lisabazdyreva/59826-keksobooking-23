const errorTemplate = document.querySelector('#error').content;
const error = errorTemplate.querySelector('.error');
const errorButton = error.querySelector('.error__button');

const closeErrorMessage = (evt) => {
  if(evt.key === 'Esc' || evt.key === 'Escape' || evt.type === 'click') {
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
