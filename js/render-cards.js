import {createCards} from './get-template-cards.js';
import {createCustomMarkers} from './create-map.js';
import {setFilters} from './filters/set-filters.js';

const renderCards = (data) => {
  createCustomMarkers(data, createCards(data));
  setFilters(data, createCards, createCustomMarkers);
};

export {renderCards};
