import {debounce} from './utils/debounce.js';
import {getTemplateCards} from './cards/get-template-cards.js';
import {createCustomMarkers} from './map/create-map.js';
import {setFilters} from './filters/set-filters.js';

const RERENDER_DELAY = 500;

const renderCards = (data) => {
  createCustomMarkers(data, getTemplateCards(data));
  setFilters(data, getTemplateCards, debounce(createCustomMarkers), RERENDER_DELAY);
};

export {renderCards};
