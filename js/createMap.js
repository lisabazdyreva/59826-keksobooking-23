import {getTemporaryData, newData} from './get-temlate-cards.js';
import {setActiveStateElements} from './toggle-state.js';

const createMap = () => {

  const map = L.map('map-canvas');
  const initialLatLng = {
    lat: 35.68950,
    lng: 139.69171,
  };
  const address = document.querySelector('#address');
  address.value = `${initialLatLng.lat}, ${initialLatLng.lng}`;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
  ).addTo(map);
  map
    .on('load', () => {
      setActiveStateElements();
    })
    .setView(initialLatLng , 13);

  const mainCustomIcon = L.icon(
    {
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 53],
      iconAnchor: [26, 52],
    },
  );

  const mainMarker = L.marker (
    initialLatLng,
    {
      draggable: true,
      icon: mainCustomIcon,
    },
  );

  mainMarker.addTo(map);

  mainMarker.on('moveend', (evt) => {
    const valueLatLng = evt.target.getLatLng();
    address.value = `${valueLatLng.lat.toFixed(5)}, ${valueLatLng.lng.toFixed(5)}`;
  });

  //добавление объявлений


  const elements = getTemporaryData(newData).children;

  newData.forEach((item, index) => {

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

export {createMap};
