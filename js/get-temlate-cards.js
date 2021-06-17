import {createTemporaryData} from './get-temporary-data.js';

const arrayLength = 10;
const newData = createTemporaryData(arrayLength);

const getTemporaryData = function (data) {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const map = document.querySelector('#map-canvas');

  return data.forEach((arr) => {
    const newCardTemplate = cardTemplate.cloneNode(true);

    (arr.offer.title.length !== 0)
      ? newCardTemplate.querySelector('.popup__title').textContent = arr.offer.title
      : newCardTemplate.querySelector('.popup__title').classList.add('hidden');
    (arr.offer.address.length !== 0)
      ? newCardTemplate.querySelector('.popup__text--address').textContent = arr.offer.address
      : newCardTemplate.querySelector('.popup__text--address').classList.add('hidden');
    (arr.offer.price !== 0)
      ? newCardTemplate.querySelector('.popup__text--price').textContent = `${arr.offer.price} ₽/ночь`
      : newCardTemplate.querySelector('.popup__text--price').classList.add('hidden');
    (arr.offer.rooms !== 0 || arr.offer.guests !== 0)
      ? newCardTemplate.querySelector('.popup__text--capacity').textContent = `${arr.offer.rooms} комнаты для ${arr.offer.guests} гостей`
      : newCardTemplate.querySelector('.popup__text--capacity').classList.add('hidden');
    (arr.offer.checkin.length !== 0 || arr.offer.checkout.length !== 0)
      ? newCardTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${arr.offer.checkin}, выезд до ${arr.offer.checkout}`
      : newCardTemplate.querySelector('.popup__text--time').classList.add('hidden');
    (arr.offer.description.length !== 0)
      ? newCardTemplate.querySelector('.popup__description').textContent = arr.offer.description
      : newCardTemplate.querySelector('.popup__description').classList.add('hidden');
    (arr.author.avatar.length !== 0)
      ? newCardTemplate.querySelector('.popup__avatar').src = arr.author.avatar
      : newCardTemplate.querySelector('.popup__avatar').classList.add('hidden');

    switch (arr.offer.type) {
      case 'flat':
        arr.offer.type = 'Квартира';
        break;
      case 'bungalow':
        arr.offer.type = 'Бунгало';
        break;
      case 'house':
        arr.offer.type = 'Дом';
        break;
      case 'palace':
        arr.offer.type = 'Дворец';
        break;
      case 'hotel':
        arr.offer.type = 'Отель';
        break;
    }
    (arr.offer.type.length !== 0)
      ? newCardTemplate.querySelector('.popup__type').textContent = arr.offer.type
      : newCardTemplate.querySelector('.popup__type').classList.add('hidden');


    const featuresItemsList = newCardTemplate.querySelector('.popup__features');
    const featureItems = featuresItemsList.querySelectorAll('.popup__feature');
    const featureFrag = document.createDocumentFragment();
    arr.offer.features.forEach((feature) => {
      featureItems.forEach((item) => {
        if (item.classList.value.includes(feature)) {
          featureFrag.appendChild(item);
        }
      });
    });

    if (featureFrag.children.length !== 0) {
      featuresItemsList.textContent = '';
      featuresItemsList.appendChild(featureFrag);
    } else {
      featuresItemsList.classList.add('hidden');featuresItemsList.classList.add('hidden');
    }


    const photosBlock = newCardTemplate.querySelector('.popup__photos');
    const photoFrag = document.createDocumentFragment();
    const photo = photosBlock.querySelector('.popup__photo');
    arr.offer.photos.forEach((item) => {
      const newPhoto = photo.cloneNode(false);
      newPhoto.src = item;
      photoFrag.appendChild(newPhoto);
    });

    if (photoFrag.children.length !== 0) {
      photosBlock.textContent = '';
      photosBlock.appendChild(photoFrag);
    } else {
      photosBlock.classList.add('hidden');
    }

    map.appendChild(newCardTemplate);
  });
};

export {getTemporaryData, newData};
