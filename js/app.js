function getTopPanel() {
    return `
    <nav class="navbar" id="navbar">
        <div class="navbar__left-box">
            <h2 class="navbar__items">Deimos Hall</h2>
        </div>
        <div class="navbar__right-box">
            <ul class="navbar__right-box navbar__right-box__menu" id="navbar__right-box__menu">
                <li><a href="./index.html" class="navbar__items navbar__items--link">Inicio</a></li>
                <li><a href="./portfolio.html" class="navbar__items navbar__items--link">Portfafolio</a></li>
                <li><a href="./about.html" class="navbar__items navbar__items--link">Acerca de mí</a></li>
                <li><a href="./contact.html" class="navbar__items navbar__items--link">Contacto</a></li>
            </ul>
            <img src="./assets/img/ham-icon.png" alt="menu icon" class="navbar__menu-icon" id="navbar__menu-icon">
        </div>
    </nav>
    `;
}

const header = document.querySelector('header');
header.innerHTML = getTopPanel();

const menu = document.querySelector('#navbar__right-box__menu');
const menuIcon = document.querySelector('#navbar__menu-icon');

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('navbar__right-box__menu--show');
});

console.log(getTopPanel())