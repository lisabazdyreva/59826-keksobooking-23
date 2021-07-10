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

  const isWifiOk = () => {
    if (arr[0].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[0].value === true && ad.offer.features.includes('wifi')) {
      return true;
    } else if (arr[0].value === false) {
      return true;
    }
  };

  const isDishwasherOk = () => {
    if (arr[1].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[1].value === true && ad.offer.features.includes('dishwasher')) {
      return true;
    } else if (arr[1].value === false) {
      return true;
    }
  };

  const isParkingOk = () => {
    if (arr[2].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[2].value === true && ad.offer.features.includes('parking')) {
      return true;
    } else if (arr[2].value === false) {
      return true;
    }
  };

  const isWasherOk = () => {
    if (arr[3].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[3].value === true && ad.offer.features.includes('washer')) {
      return true;
    } else if (arr[3].value === false) {
      return true;
    }
  };

  const isElevatorOk = () => {
    if (arr[4].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[4].value === true && ad.offer.features.includes('elevator')) {
      return true;
    } else if (arr[4].value === false) {
      return true;
    }
  };

  const isConditionerOk = () => {
    if (arr[5].value === true && ad.offer.features === undefined) {
      return false;
    } else if (arr[5].value === true && ad.offer.features.includes('conditioner')) {
      return true;
    } else if (arr[5].value === false) {
      return true;
    }
  };

  return isWifiOk() && isDishwasherOk() && isParkingOk() && isWasherOk() && isElevatorOk() && isConditionerOk();
};


const makeFilterAll = (ad, mainFilters, featureFilters) => getMainFilter(ad, mainFilters)
                                                            && getFeatureFilter(ad, featureFilters);


export {
  makeFilterAll
};
