const popupElements = document.createElement('div');

const getTemplateCards = (data) => {
  popupElements.innerHTML= '';
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const cards = data.slice('');

  cards.forEach((card) => {
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

    (card.offer.title.length !== 0)
      ? popupTitle.textContent = card.offer.title
      : popupTitle.classList.add('hidden');

    (card.offer.address.length !== 0)
      ? popupTextAddress.textContent = card.offer.address
      : popupTextAddress.classList.add('hidden');

    (card.offer.price !== 0)
      ? popupTextPrice.textContent = `${card.offer.price} ₽/ночь`
      : popupTextPrice.classList.add('hidden');

    (card.offer.rooms !== 0 || card.offer.guests !== 0)
      ? popupTextCapacity.textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`
      : popupTextCapacity.classList.add('hidden');

    (card.offer.checkin.length !== 0 || card.offer.checkout.length !== 0)
      ? popupTextTime.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`
      : popupTextTime.classList.add('hidden');

    if (card.offer.description) {
      (card.offer.description.length !== 0)
        ? popupDescription.textContent = card.offer.description
        : popupDescription.classList.add('hidden');
    }

    (card.author.avatar.length !== 0)
      ? popupAvatar.src = card.author.avatar
      : popupAvatar.classList.add('hidden');

    switch (card.offer.type) {
      case 'flat':
        card.offer.type = 'Квартира';
        break;
      case 'bungalow':
        card.offer.type = 'Бунгало';
        break;
      case 'house':
        card.offer.type = 'Дом';
        break;
      case 'palace':
        card.offer.type = 'Дворец';
        break;
      case 'hotel':
        card.offer.type = 'Отель';
        break;
    }

    (card.offer.type.length !== 0)
      ? popupType.textContent = card.offer.type
      : popupType.classList.add('hidden');

    const popupFeatures = newCardTemplate.querySelector('.popup__features');
    const popupFeature = popupFeatures.querySelectorAll('.popup__feature');
    const popupFeatureElement = document.createDocumentFragment();

    if (card.offer.features) {
      card.offer.features.forEach((feature) => {
        popupFeature.forEach((element) => {
          if (element.classList.value.includes(feature)) {
            popupFeatureElement.appendChild(element);
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

    if (card.offer.photos) {
      card.offer.photos.forEach((url) => {
        const photo = popupPhoto.cloneNode(false);
        photo.src = url;
        popupPhotoElement.appendChild(photo);
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

export {getTemplateCards};
