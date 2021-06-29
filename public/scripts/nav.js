const navIcon = document.querySelector(".hamburger-menu");

const mobileMenu = document.querySelector(".mobile-menu");

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});