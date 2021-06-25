const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const checkTitleValidity = () => {
  const lengthValue = title.value.length;
  if (lengthValue < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - lengthValue} символов`);
  } else if (lengthValue > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите ${lengthValue - MAX_TITLE_LENGTH} символов`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};


const checkPriceValidity = () => {
  if (price.value < 1) {
    price.setCustomValidity('Цена не может быть ниже 0');
  } else if (price.value > 1000000) {
    price.setCustomValidity('Цена не может быть выше 1000000');
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const checkRoomNumberCapacityValidity = () => {
  const ROOMS_FOR_GUESTS = {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  };

  for (const option of capacity.children) {
    const isIncludes = ROOMS_FOR_GUESTS[+roomNumber.value].includes(+option.value);
    option.disabled = !isIncludes;

    if (option.disabled === true) {
      option.removeAttribute('selected');
    }

    if (option.disabled === false && (+option.value === 1 || +option.value === 0)) {
      option.setAttribute('selected', '');
    }
  }
};


const checkValidity = () => {
  price.addEventListener('input', checkPriceValidity);
  title.addEventListener('input', checkTitleValidity);
  roomNumber.addEventListener('change', checkRoomNumberCapacityValidity);
};

export {checkValidity};
