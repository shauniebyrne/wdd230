const section = document.querySelector('.temple');
const templeURL = 'https://shauniebyrne.github.io/wdd230/chamber/json/data.json';

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
    let h3 = document.createElement('h3');
    let templeImg = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    // Add textContent to temple card
    h3.textContent = card.name;
    p1.textContent = card.address;
    p2.textContent = card.telephone;
    p3.textContent = card.email;

    // Add content to temple image
    templeImg.setAttribute('src', card.img);
    templeImg.setAttribute('alt', card.name);
    templeImg.setAttribute('loading', 'lazy');
    templeImg.setAttribute('width', '250')

    // Append children to section temple card
    section.appendChild(h3);
    section.appendChild(img);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
}