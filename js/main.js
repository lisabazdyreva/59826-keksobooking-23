import {createCustomMarkers, createMap} from './create-map.js';
import {getServerData} from './api.js';
import {resetForm} from './ad-form/reset-form.js';
import {sendForm} from './ad-form.js';
import {getTemplateCards} from './get-template-cards.js';
import {showGetDataError} from './show-get-data-error.js';

const ARR_LENGTH = 10;
getServerData((data) => {
  const arr = data.slice(0, ARR_LENGTH);
  const elements = getTemplateCards(arr);
  createCustomMarkers(arr, elements);
}, showGetDataError);
resetForm();
createMap();
sendForm();


