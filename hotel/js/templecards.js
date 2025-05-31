const container = document.querySelector('.temple-cards');
const templeURL = 'https://shauniebyrne.github.io/wdd230/hotel/json/temple.json';

let icons = {};

if (window.localStorage.length === 0) {
    icons = {
    1: '&#9786;',
    2: '&#9786;',
    3: '&#9786;',
    4: '&#9786;',
    5: '&#9786;',
    6: '&#9786;',
    7: '&#9786;',
    8: '&#9786;',
    9: '&#9786;',
    10: '&#9786;',
    };

    window.localStorage.setItem('icons', JSON.stringify(icons));
}

fetch(templeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);
        const templecards = jsonObject['temples'];

        templecards.forEach((card, index) => {
            displayCards(card, index);
        });
    });

function displayCards(card, index) {
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
    p1.textContent = `Address: ${card.address}`;
    p2.textContent = `Phone Number: ${card.telephone}`;
    p3.textContent = `Email: ${card.email}`;
    p4.textContent = `Services: ${card.services}`;
    p5.textContent = `History - ${card.history}`;
    p6.textContent = `Ordinance Schedule: ${card.ordinanceschedule}`;
    p7.textContent = `Session Schedule: ${card.sessionschedule}`;
    p8.textContent = `Closure Schedule: ${card.closureschedule}`;
    //console.log(JSON.parse(window.localStorage.getItem('icons'))[index + 1]) || '&#9786;';
    button.innerHTML = '&#9786;';

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

    //Function to change button on click
    function buttonChanged() {
        if (button.innerHTML == '☺') {
            button.innerHTML = '&#9733;';
            let iconsModified = JSON.parse(window.localStorage.getItem('icons'));
            iconsModified[index + 1] = '&#9733;';
            window.localStorage.setItem('icons', JSON.stringify(iconsModified));
        } else {
            button.innerHTML = '&#9786;';
            let iconsModified = JSON.parse(window.localStorage.getItem('icons'));
            iconsModified[index + 1] = '&#9786;';
            window.localStorage.setItem('icons', JSON.stringify(iconsModified));
        };
    };

    // Add Event Listener to button
    button.addEventListener('click', buttonChanged);    
}

// Got help from Kevin for the localstorage parts but did everything else myself.
