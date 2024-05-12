const click = document.querySelector('.dotdot');
const dropdown = document.querySelector('.dropdown');
const click_x = document.querySelector('.x_container');


click.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})

click_x.addEventListener('click', () => {
    dropdown.classList.toggle('show');
})