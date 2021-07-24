const iconContainer = document.querySelector('.icon-container');
const icon = document.querySelector('.icon');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const copyright = document.querySelector('.copyright');
const toTopBtn = document.querySelector('#top');

// DYNAMIC NAV BAR
icon.addEventListener('click', function () {
  let containerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  iconContainer.classList.toggle('rotate');
});

// DATE;
const date = new Date();
copyright.innerHTML = date.getFullYear();

// sidebar

const contact = document.querySelector('.contact');
const reservation = document.querySelector('.reserve');
const closeBtn = document.querySelector('.toggle-close');
const sidebar = document.querySelector('.sidebar');
const layer = document.querySelector('.layer');
console.log(contact);
console.log(closeBtn);
console.log(sidebar);

reservation.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
  layer.classList.add('show-layer');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  layer.classList.remove('show-layer');
});

// SCROLL BTN
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const visibleHeight = links.getBoundingClientRect().height;
  if (scrollHeight > visibleHeight * 2) {
    toTopBtn.classList.add('top-btn');
  } else {
    toTopBtn.classList.remove('top-btn');
  }
});

// CONTACT

const background = document.querySelector('.contact__background');
const contactBtn = document.querySelector('.modal-close');
// const contact = document.querySelector('.contact');

contact.addEventListener('click', function () {
  background.classList.add('show-background');
});
contactBtn.addEventListener('click', function () {
  background.classList.remove('show-background');
});
