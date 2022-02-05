const d = new Date();
const year = d.getFullYear();

// Current year and last modified date for footer
document.getElementById("current-year").textContent = year;
document.getElementById("updated-date").textContent = document.lastModified;

// Current date in header
const dateNow = document.querySelector("date");
const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(d);
dateNow.innerHTML = `<em>${fullDate}</em>`; 

// Hamburger button
const nav = document.querySelector(".navigation");
const hamButton = document.querySelector(".hamburger");

hamButton.addEventListener('click', () => {
    nav.classList.toggle('responsive')
}, false);

// Banner display on Monday and Tuesday
let dayOfWeek = d.getDay();
let messageForDay;
if (dayOfWeek === 1 || dayOfWeek === 2) {
    messageForDay = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7 p.m.";
    document.querySelector("#banner").textContent = messageForDay;
}