import {
  FILE_TYPES,
  fileAvatarInput,
  previewAvatar,
  fileHouseInput,
  blockPreviewHouse
} from './form-const.js';

const addPreviewAvatar = () => {
  fileAvatarInput.addEventListener('change', () => {
    const file = fileAvatarInput.files[0];
    const fileName = file.name.toLowerCase();

    const isMatch = FILE_TYPES.some((type) => fileName.endsWith(type));

    if (isMatch) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const addPreviewHousePhoto = () => {
  fileHouseInput.addEventListener('change', () => {
    const file = fileHouseInput.files[0];
    const fileName = file.name.toLowerCase();

    const isMatch = FILE_TYPES.some((type) => fileName.endsWith(type));

    const photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.width = 60;
    photo.height = 60;
    photo.style.margin = '5px 5px 5px 5px';
    photo.alt = 'Фотография жилья';
    blockPreviewHouse.style.height = '100%';
    blockPreviewHouse.appendChild(photo);

    if (isMatch) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        photo.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const removePhotos = () => {
  blockPreviewHouse.textContent = '';
  blockPreviewHouse.style.height = '70px';
  previewAvatar.src = 'img/muffin-grey.svg';
};


export {addPreviewAvatar, addPreviewHousePhoto, removePhotos};
