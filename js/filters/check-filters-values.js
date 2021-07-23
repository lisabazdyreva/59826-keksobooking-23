import {PRICES, types} from './filters-const.js';

const filteringRules = {
  'housing-type': (element, filter) => types[filter.value] === element.offer.type,

  'housing-rooms': (element, filter) => +filter.value === element.offer.rooms,

  'housing-guests': (element, filter) => (+filter.value === element.offer.guests) || ((element.offer.guests === 0) && (element.offer.rooms === 100)),

  'housing-price': (element, filter) => (PRICES[filter.value].MIN <= +element.offer.price) && (+element.offer.price < PRICES[filter.value].MAX),

  'housing-features': (element, filter) => {
    const checkListElements = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));

    return checkListElements.every((checkListElement) => {
      if (element.offer.features !== undefined) {
        return element.offer.features.some((feature) => feature === checkListElement.value);
      }
    });
  },
};

export {filteringRules};
