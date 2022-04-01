// Hamburger button for Navigation
const nav = document.querySelector(".navigation");
const hamButton = document.querySelector("#hamburger-btn");

hamButton.addEventListener('click', () => {
    nav.classList.toggle('responsive')
}, false);