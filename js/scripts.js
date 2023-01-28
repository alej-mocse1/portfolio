

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle-open');


toggle_open.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('show-menu');
}