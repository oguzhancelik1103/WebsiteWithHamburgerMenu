document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarUl = document.querySelector('.navbar ul');

    hamburgerMenu.addEventListener('click', function () {
        navbarUl.classList.toggle('active');
    });
});