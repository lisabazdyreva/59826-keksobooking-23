const URL = 'https://23.javascript.pages.academy/keksobooking';

const getServerData = (onSuccess, onFail) => {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => onFail());
};

const sendServerData = (onSuccess, onFail, body) => {
  fetch(URL,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getServerData, sendServerData};
