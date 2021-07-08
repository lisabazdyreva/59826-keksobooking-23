import {debounce} from './utils/debounce.js';
import {createCards} from './get-template-cards.js';
import {createCustomMarkers} from './create-map.js';
import {setFilters} from './filters/set-filters.js';


const RERENDER_DELAY = 500;

const renderCards = (data) => {
  createCustomMarkers(data, createCards(data));
  setFilters(data, createCards, debounce(createCustomMarkers), RERENDER_DELAY);
};

export {renderCards};
