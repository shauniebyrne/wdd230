const container = document.querySelector('.temple-cards');
const templeURL = 'https://shauniebyrne.github.io/wdd230/hotel/json/temple.json';

fetch(templeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const templecards = jsonObject['temples'];

        templecards.forEach(displayCards);
    });

function displayCards(card) {
    // Create the necessary elements for the card
    let section = document.createElement('section');
    let h3 = document.createElement('h3');
    let templeImg = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let button = document.createElement('button');

    // Add textContent to temple card
    h3.textContent = card.name;
    p1.textContent = card.address;
    p2.textContent = card.telephone;
    p3.textContent = `Email: ${card.email}`;
    p4.textContent = `Services: ${card.services}`;
    p5.textContent = `History: ${card.history}`;
    p6.textContent = `Ordinance Schedule: ${card.ordinanceschedule}`;
    p7.textContent = `Session Schedule: ${card.sessionschedule}`;
    p8.textContent = `Closure Schedule: ${card.closureschedule}`;
    button.innerHTML = `&#9786;`

    // Add content to temple image
    templeImg.setAttribute('src', card.img);
    templeImg.setAttribute('alt', card.name);
    templeImg.setAttribute('loading', 'lazy');
    templeImg.setAttribute('width', '250');

    // Add class for CSS
    button.classList.add('local-storage');
    section.classList.add('container');

    // Append children to section temple card
    section.appendChild(h3);
    section.appendChild(templeImg);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    section.appendChild(p4);
    section.appendChild(p5);
    section.appendChild(p6);
    section.appendChild(p7);
    section.appendChild(p8);
    section.appendChild(button);

    // Append all into parent section
    container.appendChild(section);
}