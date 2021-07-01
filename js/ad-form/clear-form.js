const form = document.querySelector('.ad-form');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const type = form.querySelector('#type');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const description = form.querySelector('#description');
const features = form.querySelectorAll('.features__checkbox');

const clearForm = () => {
  title.value = '';
  price.value = '';
  roomNumber.value = 1;
  capacity.value = 1;
  type.value = 'flat';
  timeIn.value = '12:00';
  timeOut.value = '12:00';
  description.value = '';

  for (const feature of features) {
    if(feature.checked === true) {
      feature.checked = false;
    }
  }
};

export {clearForm};
