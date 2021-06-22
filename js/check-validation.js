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
    1 : [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  };

  for (let i = 0; i < capacity.children.length; i++) {
    const isNonDisabledOptions = ROOMS_FOR_GUESTS[+roomNumber.value].includes(+capacity.children[i].value);
    capacity.children[i].disabled = !isNonDisabledOptions;
    if (+roomNumber.value === 100) {
      capacity.children[i].selected = true;
    }
    if (+roomNumber.value === 1 || +roomNumber.value === 2 || +roomNumber.value === 3) {
      capacity.children[i].selected = false; // в доме не меняется
    }
  }
};


const checkValidity = () => {
  price.addEventListener('input', checkPriceValidity);
  title.addEventListener('input', checkTitleValidity);
  roomNumber.addEventListener('change', checkRoomNumberCapacityValidity);
};

export {checkValidity};
