function toggleMenu() {
    document.getElementsById("primary-navigation").classList.toggle("open");
    document.getElementsById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");
x.onclick = toggleMenu();