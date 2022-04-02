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

    // Add textContent to temple card
    h3.textContent = card.name;
    p1.textContent = card.address;
    p2.textContent = card.telephone;
    p3.textContent = card.email;

    // Add content to temple image
    templeImg.setAttribute('src', card.img);
    templeImg.setAttribute('alt', card.name);
    templeImg.setAttribute('loading', 'lazy');
    templeImg.setAttribute('width', '250');

    // Add class to section for CSS
    section.classList.add('container');

    // Append children to section temple card
    section.appendChild(h3);
    section.appendChild(templeImg);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);

    // Append all into parent section
    container.appendChild(section);
}

section.document.querySelector('.container').addEventListener('click', addInfo);

function addInfo(jasonObject) {
    const newInfo = jasonObject['temples'];

    newInfo.forEach((card) => {
        // Create new elements for card once clicked
        let section2 = document.createElement('section');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');

        // Add textContent
        p4.textContent = `Services: ${card.services}`;
        p5.textContent = `History: ${card.history}`;
        p6.textContent = `Ordinances Schedule: ${card.ordinanceschedule}`;
        p7.textContent = `Session Schedule: ${card.sessionschedule}`;
        p8.textContent = `Closure Schedule: ${card.closureschedule}`;

        // Add class to section
        section2.classList.add('container');

        // Append children to section
        section2.appendChild(p4);
        section2.appendChild(p5);
        section2.appendChild(p6);
        section2.appendChild(p7);
        section2.appendChild(p8);

        // Add to div
        container.appendChild(section2);
    })
}