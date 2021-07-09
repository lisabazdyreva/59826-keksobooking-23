import {createMap} from './map/create-map.js';
import {getServerData} from './api.js';
import {resetForm} from './reset-form.js';
import {sendForm} from './send-ad-form.js';
import {showGetDataError} from './showing-messages/show-get-data-error.js';
import {renderCards} from './render-cards.js';

getServerData((data) => renderCards(data), showGetDataError);
createMap();
resetForm();
sendForm();


