import {MAX_ARR_LENGTH} from '../filters/filters-const.js';
import {setActiveState} from '../toggle-state.js';

const INITIAL_LAT_LNG = {
  lat: 35.68950,
  lng: 139.69171,
};

const INITIAL_SCALE = 13;

const map = L.map('map-canvas');
const address = document.querySelector('#address');

address.value = `${INITIAL_LAT_LNG.lat}, ${INITIAL_LAT_LNG.lng}`;
const markerGroup = L.layerGroup();
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


const clearCustomMarkers = () => {
  markerGroup.clearLayers();
};


const createCustomMarkers = (cards, pins) => {
  if (cards.length > MAX_ARR_LENGTH) {
    cards = cards.slice(0, MAX_ARR_LENGTH);
  }

  cards.forEach((card, index) => {
    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat: card.location.lat,
        lng: card.location.lng,
      },
      {
        icon,
      });

    marker
      .addTo(markerGroup)
      .bindPopup(pins.children[index]);
  });

  markerGroup.addTo(map);
};


const createMap = () => {
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
  ).addTo(map);

  map
    .on('load', () => {
      setActiveState();
    })
    .setView(INITIAL_LAT_LNG , INITIAL_SCALE);

  mainMarker
    .addTo(map)
    .on('moveend', (evt) => {
      const valueLatLng = evt.target.getLatLng();
      address.value = `${valueLatLng.lat.toFixed(5)}, ${valueLatLng.lng.toFixed(5)}`;
    });

};


const setInitialLatLngValue = () => {
  map.setView(INITIAL_LAT_LNG, INITIAL_SCALE);
  mainMarker.setLatLng(INITIAL_LAT_LNG);
  address.value = `${INITIAL_LAT_LNG.lat}, ${INITIAL_LAT_LNG.lng}`;
};


export {createMap, setInitialLatLngValue, createCustomMarkers, clearCustomMarkers};
