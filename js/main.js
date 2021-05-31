const checkInputErrors = function(min, max, roundingValue = 0) {
  const ERROR_MESSAGE = 'Некорректно задан диапазон: ';

  const checkParametersValid = () => {
    if (min === '' || max === '' || max === undefined || min === undefined) {
      return `${ERROR_MESSAGE} значения/ значение не введены`;
    } else if (min === true || max === true || min === false || max === false) {
      return `${ERROR_MESSAGE} введите числа`;
    } else if (isNaN(+min) === true || isNaN(+max) === true) {
      return `${ERROR_MESSAGE} введите числа`;
    } else if (max <= 0 || min < 0) {
      return (`${ERROR_MESSAGE} задайте положительные значения`);
    } else if (max < min) {
      return (`${ERROR_MESSAGE} минимальное значение ${min} превышает максимальное ${max}`);
    } else if (max === min) {
      return (`${ERROR_MESSAGE} минимальное и максимальное значение равны - ${max}, задайте диапазон`);
    } else {
      return true;
    }
  };

  const checkRoundingValid = () => {
    if (isNaN(+roundingValue) === true ||  roundingValue === '' || roundingValue === true || roundingValue === false || roundingValue === undefined) {
      return 'Введите корректный параметр знаков после запятой';
    }
    return true;
  };

  const isValidValues = checkParametersValid();
  min = +min;
  max = +max;
  if (isValidValues !== true) {
    throw new Error(`${isValidValues}`);
  }

  const isValidRounding = checkRoundingValid();
  if (isValidRounding !== true) {
    throw new Error(`${isValidRounding}`);
  }
};

// функция получения целого числа
const getIntegerRangeValue = function (min, max) {
  checkInputErrors(min, max);
  return Math.round(Math.random() * (max - min) + min);
};

getIntegerRangeValue(-10, 15);

// функция получения числа с плавающей точкой
const getFloatRangeValue = function (min, max, roundingValue) {
  checkInputErrors(min, max, roundingValue);
  return (Math.random() * (max - min) + min).toFixed(roundingValue);
};

getFloatRangeValue(5.004, 6.107, 2);
