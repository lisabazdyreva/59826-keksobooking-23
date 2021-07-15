import {
  MIN_PRICES,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_PRICE,
  ROOMS_FOR_GUESTS,
  title,
  price,
  roomNumber,
  capacity,
  type,
  time
} from './form-const.js';


const onTitleInput = () => {
  const titleLength = title.value.length;

  if (titleLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleLength} символов`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите ${titleLength - MAX_TITLE_LENGTH} символов`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};


const onPriceInput = () => {
  if (price.value < price.min) {
    price.setCustomValidity(`Цена не может быть ниже ${price.min}`);
  } else if (price.value > MAX_PRICE) {
    price.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};


const onRoomNumberChange = () => {
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


const onTypeChange = () => {
  for (let i = 0; i < MIN_PRICES.length; i++) {
    if (MIN_PRICES[i].name === type.value) {
      price.placeholder = MIN_PRICES[i].minPrice;
      price.min = MIN_PRICES[i].minPrice;
    }
  }
};

const onTimeChange = (evt) => {
  const timeIn = time.querySelector('#timein');
  const timeOut = time.querySelector('#timeout');

  if (evt.target === timeIn) {
    timeOut.value = evt.target.value;
  } else if (evt.target === timeOut) {
    timeIn.value = evt.target.value;
  }
};


export {
  onTitleInput,
  onPriceInput,
  onRoomNumberChange,
  onTypeChange,
  onTimeChange
};
