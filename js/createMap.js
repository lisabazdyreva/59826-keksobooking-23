import {getTemplateCards, data} from './get-template-cards.js';
import {setActiveStateElements} from './toggle-state.js';

const map = L.map('map-canvas');
const address = document.querySelector('#address');
const INITIAL_LAT_LNG = {
  lat: 35.68950,
  lng: 139.69171,
};
const elements = getTemplateCards(data).children;
address.value = `${INITIAL_LAT_LNG.lat}, ${INITIAL_LAT_LNG.lng}`;


const createMainCustomMarker = () => {
  const mainCustomIcon = L.icon(
    {
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 53],
      iconAnchor: [26, 52],
    },
  );

  const mainMarker = L.marker (
    INITIAL_LAT_LNG,
    {
      draggable: true,
      icon: mainCustomIcon,
    },
  );

  mainMarker
    .addTo(map)
    .on('moveend', (evt) => {
      const valueLatLng = evt.target.getLatLng();
      address.value = `${valueLatLng.lat.toFixed(5)}, ${valueLatLng.lng.toFixed(5)}`;
    });
};

const createCustomMarkers = () => {
  data.forEach((item, index) => {

    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon,
      });

    marker
      .addTo(map)
      .bindPopup(elements[index]);
  });
};


const createMap = () => {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
  ).addTo(map);

  map
    .on('load', () => {
      setActiveStateElements();
    })
    .setView(INITIAL_LAT_LNG , 13);

  createMainCustomMarker();
  createCustomMarkers();
};

export {createMap};
