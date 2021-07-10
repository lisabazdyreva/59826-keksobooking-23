const isEsc = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape' || evt.type === 'click') {
    return true;
  }
};

export {isEsc};
