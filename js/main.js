import {createMap} from './map/create-map.js';
import {getServerData} from './api.js';
import {resetForm} from './clear-all-forms.js';
import {sendForm} from './send-ad-form.js';
import {showGetDataError} from './showing-messages/show-get-data-error.js';
import {renderCards} from './render-cards.js';

createMap();
getServerData((data) => renderCards(data), showGetDataError);
resetForm();
sendForm();


