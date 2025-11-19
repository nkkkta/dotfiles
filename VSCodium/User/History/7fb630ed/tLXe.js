// import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-menu');
    const mainLinks = document.querySelector('.pre-header__left');

    toggleButton.addEventListener('click', () => {
        mainLinks.classList.toggle('is-open');
    });
});
