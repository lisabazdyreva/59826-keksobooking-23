import {
  fileAvatarInput,
  previewAvatar,
  FILE_TYPES,
  fileHouseInput,
  blockPreviewHouse
} from './form-const.js';

const addPreviewAvatar = () => {
  fileAvatarInput.addEventListener('change', () => {
    const file = fileAvatarInput.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
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

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.width = 60;
    img.height = 60;
    img.style.margin = '5px 5px 5px 5px';
    img.alt = 'Фотография жилья';
    blockPreviewHouse.style.height = '100%';
    blockPreviewHouse.appendChild(img);

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        img.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};


export {addPreviewAvatar, addPreviewHousePhoto};
