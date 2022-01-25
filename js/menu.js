const menuButton = document.querySelector('#menu-toggle');
const moblieMenu = document.querySelector('.moblie-menu');
let isOpen = false;
menuButton.addEventListener('click', () => {
    if (!isOpen) {
        moblieMenu.classList.remove('hidden');
        menuButton.querySelector('img').setAttribute('src', './images/icon/cross.svg');
        isOpen = true;
    } else {
        moblieMenu.classList.add('hidden');
        menuButton.querySelector('img').setAttribute('src', './images/icon/hamburger.svg');
        isOpen = false;
    }
});
