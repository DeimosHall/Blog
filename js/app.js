let menu = document.querySelector('#navbar__right-box__menu');
let menuIcon = document.querySelector('#navbar__menu-icon');

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('navbar__right-box__menu--show');
});