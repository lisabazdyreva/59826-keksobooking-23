const isEsc = (evt) => evt.key === 'Esc' || evt.key === 'Escape';
const isClicked = (evt) => evt.type === 'click';

export {isEsc, isClicked};
