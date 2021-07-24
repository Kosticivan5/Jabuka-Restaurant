// sidebar

const reservation = document.querySelector('.reserve');
const closeBtn = document.querySelector('.toggle-close');
const sidebar = document.querySelector('.sidebar');
const layer = document.querySelector('.layer');

reservation.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
  layer.classList.add('show-layer');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  layer.classList.remove('show-layer');
});

// CONTACT

const background = document.querySelector('.contact__background');
const contactBtn = document.querySelector('.modal-close');
const contact = document.querySelector('.contact');

contact.addEventListener('click', function () {
  background.classList.add('show-background');
});
contactBtn.addEventListener('click', function () {
  background.classList.remove('show-background');
});
