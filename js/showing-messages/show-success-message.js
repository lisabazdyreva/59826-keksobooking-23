const successTemplate = document.querySelector('#success').content;
const success = successTemplate.querySelector('.success');

const closeSuccessMessage = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape' || evt.type === 'click') {
    document.body.removeChild(success);
    document.body.removeEventListener('click', closeSuccessMessage);
    document.body.removeEventListener('keydown', closeSuccessMessage);
  }
};

const createSuccessMessage = () => {
  document.body.appendChild(success);
  document.body.addEventListener('click', closeSuccessMessage);
  document.body.addEventListener('keydown', closeSuccessMessage);
};

const showSuccessMessage = () => {
  createSuccessMessage();
};

export {showSuccessMessage};

