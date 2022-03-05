const requestURL = 'https://shauniebyrne.github.io/wdd230/chamber/json/data.json';

//Fetch the JSON file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const cards = jsonObject['directory'];

        cards.forEach(displayCards);
    });

function displayCards(card) {
        //Create elements to add to the document
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let portrait = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let a = document.createElement('a');
    
        //Add text content to the directory cards
        h3.textContent = `${card.name}`;
        p1.textContent = `${card.address}`;
        p2.textContent = `${card.phonenumber}`;
        a.textContent = `${card.website}`;
    
        //Build image attributes by using setAttribute method for src, alt, and loading attribute values.
        portrait.setAttribute('src', card.logo);
        portrait.setAttribute('alt', `Logo for ${card.name}`);
        portrait.setAttribute('loading', 'lazy');
        a.setAttribute('href', card.website);
    
        //Add/append the h2 and image to the section(card)
        section.appendChild(h3);
        section.appendChild(portrait);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(a);
        
    
        //Add/append the section(card) to the div with the card class
        document.querySelector('.cards').appendChild(section);
}

//document.getElementById('card-button').addEventListener('click', );