// SELECTIONS
const iconContainer = document.querySelector('.icon-container');
const icon = document.querySelector('.icon');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const copyright = document.querySelector('.copyright');
const menuItemsContainer = document.querySelector('.menu-items');
const btnContainer = document.querySelector('.btn-container');
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

// DATE
const date = new Date();
copyright.innerHTML = date.getFullYear();

// MENU
const menu = [
  {
    id: 1,
    title: 'nice salad',
    category: 'lunch',
    price: 3.5,
    img: './imgs/lunch1.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 2,
    title: 'light lunch',
    category: 'lunch',
    price: 2.75,
    img: './imgs/lunch2.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 3,
    title: 'happy burger',
    category: 'lunch',
    price: 6.25,
    img: './imgs/lunch3.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 4,
    title: 'pizza plate',
    category: 'lunch',
    price: 9.5,
    img: './imgs/lunch4.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 5,
    title: 'chicken pleasure',
    category: 'dinner',
    price: 12,
    img: './imgs/dinner1.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 6,
    title: 'salmon',
    category: 'dinner',
    price: 18.5,
    img: './imgs/dinner2.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 7,
    title: 'lamb asparagus',
    category: 'dinner',
    price: 15,
    img: './imgs/dinner3.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 8,
    title: 'cheescake',
    category: 'dessert',
    price: 3,
    img: './imgs/dessert1.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 9,
    title: 'pink sweet',
    category: 'dessert',
    price: 2.8,
    img: './imgs/dessert2.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 10,
    title: 'eclairs',
    category: 'dessert',
    price: 7.5,
    img: './imgs/dessert3.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 11,
    title: 'sweet pancakes',
    category: 'dessert',
    price: 6.25,
    img: './imgs/dessert4.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 12,
    title: 'capuccino',
    category: 'coffee',
    price: 2.5,
    img: './imgs/coffee1.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 13,
    title: 'chocolate coffee',
    category: 'coffee',
    price: 4.15,
    img: './imgs/coffee2.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
  {
    id: 14,
    title: 'sea food pasta',
    category: 'dinner',
    price: 4.85,
    img: './imgs/pasta.jpg',
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat.`,
  },
];

// DOM DISPLAY
window.addEventListener('DOMContentLoaded', function () {
  displayMenu(menu);
  displayDynamicBtns();
});

// MENU ITEMS DISPLAY FUNCTION
function displayMenu(displayItems) {
  let menuItems = displayItems.map(function (menuItem) {
    return `<div class="single-item">
    <img src="${menuItem.img}" class="single-item__img" alt="${menuItem.title}" />
    <div class="menu-description">
      <header class="menu-header">
        <h4 class="name">${menuItem.title}</h4>
        <h4 class="price">$${menuItem.price}</h4>
      </header>
      <p>
      ${menuItem.desc}
      </p>
    </div>
  </div>`;
  });
  menuItems = menuItems.join('');
  menuItemsContainer.innerHTML = menuItems;
}

// DYNAMIC BTNS DISPLAY FUNCTION
function displayDynamicBtns() {
  const categories = menu.reduce(
    function (values, items) {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ['all']
  );
  const dynamicBtn = categories
    .map(function (item) {
      return `<button class="btn" type="button" data-id=${item}>${item}</button>`;
    })
    .join('');
  btnContainer.innerHTML = dynamicBtn;
  const btns = document.querySelectorAll('.btn');
  // BTN FILTER
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      let dataId = e.currentTarget.dataset.id;
      const filterCategory = menu.filter(function (filterMenu) {
        if (filterMenu.category === dataId) {
          return filterMenu;
        }
      });

      if (dataId === 'all') {
        displayMenu(menu);
      } else {
        displayMenu(filterCategory);
      }
      let elementHeight = menuItemsContainer.offsetTop;
      window.scrollTo({
        left: 0,
        top: elementHeight,
      });
    });
  });
}

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
