const fileAvatarInput = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileHouseInput = document.querySelector('#images');
const blockPreviewHouse = document.querySelector('.ad-form__photo');


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

    const newPhoto = document.createElement('img');
    newPhoto.classList.add('popup__photo');
    newPhoto.width = 60;
    newPhoto.height = 60;
    newPhoto.style.margin = '5px 5px 5px 5px';
    newPhoto.alt = 'Фотография жилья';
    blockPreviewHouse.style.height = '100%';
    blockPreviewHouse.appendChild(newPhoto);

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        newPhoto.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};


export {addPreviewAvatar, addPreviewHousePhoto};
