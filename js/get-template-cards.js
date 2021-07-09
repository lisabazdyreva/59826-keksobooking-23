const popupElements = document.createElement('div');


const createCards = function (arr) {
  popupElements.innerHTML= '';
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const newArr = arr.slice('');

  newArr.forEach((item) => {
    const newCardTemplate = cardTemplate.cloneNode(true);
    const popupTitle = newCardTemplate.querySelector('.popup__title');
    const popupTextAddress = newCardTemplate.querySelector('.popup__text--address');
    const popupTextPrice = newCardTemplate.querySelector('.popup__text--price');
    const popupTextCapacity = newCardTemplate.querySelector('.popup__text--capacity');
    const popupTextTime = newCardTemplate.querySelector('.popup__text--time');
    const popupDescription = newCardTemplate.querySelector('.popup__description');
    const popupAvatar = newCardTemplate.querySelector('.popup__avatar');
    const popupType = newCardTemplate.querySelector('.popup__type');
    const popupPhotos = newCardTemplate.querySelector('.popup__photos');
    const popupPhoto = popupPhotos.querySelector('.popup__photo');
    const popupPhotoElement = document.createDocumentFragment();

    (item.offer.title.length !== 0)
      ? popupTitle.textContent = item.offer.title
      : popupTitle.classList.add('hidden');

    (item.offer.address.length !== 0)
      ? popupTextAddress.textContent = item.offer.address
      : popupTextAddress.classList.add('hidden');

    (item.offer.price !== 0)
      ? popupTextPrice.textContent = `${item.offer.price} ₽/ночь`
      : popupTextPrice.classList.add('hidden');

    (item.offer.rooms !== 0 || item.offer.guests !== 0)
      ? popupTextCapacity.textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`
      : popupTextCapacity.classList.add('hidden');

    (item.offer.checkin.length !== 0 || item.offer.checkout.length !== 0)
      ? popupTextTime.textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`
      : popupTextTime.classList.add('hidden');

    if (item.offer.description) {
      (item.offer.description.length !== 0)
        ? popupDescription.textContent = item.offer.description
        : popupDescription.classList.add('hidden');
    }

    (item.author.avatar.length !== 0)
      ? popupAvatar.src = item.author.avatar
      : popupAvatar.classList.add('hidden');

    switch (item.offer.type) {
      case 'flat':
        item.offer.type = 'Квартира';
        break;
      case 'bungalow':
        item.offer.type = 'Бунгало';
        break;
      case 'house':
        item.offer.type = 'Дом';
        break;
      case 'palace':
        item.offer.type = 'Дворец';
        break;
      case 'hotel':
        item.offer.type = 'Отель';
        break;
    }

    (item.offer.type.length !== 0)
      ? popupType.textContent = item.offer.type
      : popupType.classList.add('hidden');

    const popupFeatures = newCardTemplate.querySelector('.popup__features');
    const popupFeature = popupFeatures.querySelectorAll('.popup__feature');
    const popupFeatureElement = document.createDocumentFragment();

    if (item.offer.features) {
      item.offer.features.forEach((feature) => {
        popupFeature.forEach((elem) => {
          if (elem.classList.value.includes(feature)) {
            popupFeatureElement.appendChild(elem);
          }
        });
      });
    }


    if (popupFeatureElement.children.length !== 0) {
      popupFeatures.textContent = '';
      popupFeatures.appendChild(popupFeatureElement);
    } else {
      popupFeatures.classList.add('hidden');
    }

    if(item.offer.photos) {
      item.offer.photos.forEach((elem) => {
        const newPhoto = popupPhoto.cloneNode(false);
        newPhoto.src = elem;
        popupPhotoElement.appendChild(newPhoto);
      });
    }


    if (popupPhotoElement.children.length !== 0) {
      popupPhotos.textContent = '';
      popupPhotos.appendChild(popupPhotoElement);
    } else {
      popupPhotos.classList.add('hidden');
    }
    popupElements.appendChild(newCardTemplate);
  });

  return popupElements;
};

export {createCards};
