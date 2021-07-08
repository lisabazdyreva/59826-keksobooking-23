import {createMap} from './create-map.js';
import {getServerData} from './api.js';
import {resetForm} from './ad-form/reset-form.js';
import {sendForm} from './ad-form.js';
import {showGetDataError} from './show-get-data-error.js';
import {renderCards} from './render-cards.js';

getServerData((data) => renderCards(data), showGetDataError);
resetForm();
createMap();
sendForm();


