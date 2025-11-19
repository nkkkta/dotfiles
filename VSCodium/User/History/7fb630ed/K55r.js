// import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-menu');
    const mainLinks = document.querySelector('.preheader__left');

    toggleButton.addEventListener('click', () => {
        mainLinks.classList.toggle('is-open');
    });
});
