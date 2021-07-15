import {PRICES, TYPES} from './filters-const.js';


const getMainFilter = (ad, arr) => {

  const isType = () => ad.offer.type === TYPES[arr[0].value] || arr[0].value === 'any';


  const isPrice = () => arr[1].value === 'any' || ((PRICES[arr[1].value].MIN < +ad.offer.price)
      && (+ad.offer.price< PRICES[arr[1].value].MAX));

  const isRoom = () => +ad.offer.rooms === +arr[2].value || arr[2].value === 'any';

  const isGuests = () => (arr[3].value === 'any')
      || (ad.offer.guests === +arr[3].value)
      || ((ad.offer.guests === 0) && (ad.offer.rooms === 100));

  return isType() && isPrice() && isRoom() && isGuests();
};


const getFeatureFilter = (ad, arr) => {

  const isCheckFeature = (isChecked, value) => {
    const features = ad.offer.features;

    if (isChecked === true && features === undefined) {
      return false;
    } else if (isChecked === true && features.includes(value)) {
      return true;
    } else if (isChecked === false) {
      return true;
    }
  };

  const isWifi = () => isCheckFeature( arr[0].value, 'wifi');

  const isDishwasher = () => isCheckFeature( arr[1].value, 'dishwasher');

  const isParking = () => isCheckFeature( arr[2].value, 'parking');

  const isWasher = () => isCheckFeature( arr[3].value, 'washer');

  const isElevator = () => isCheckFeature( arr[4].value, 'elevator');

  const isConditioner = () =>  isCheckFeature( arr[5].value, 'conditioner');

  return isWifi() && isDishwasher() && isParking() && isWasher() && isElevator() && isConditioner();
};


const makeFilterAll = (ad, mainFilters, featureFilters) => getMainFilter(ad, mainFilters)
                                                            && getFeatureFilter(ad, featureFilters);


export {
  makeFilterAll
};
