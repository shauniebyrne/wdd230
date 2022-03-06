const requestURL = 'https://shauniebyrne.github.io/wdd230/chamber/json/data.json';

//Fetch the JSON file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const cardsAndList = jsonObject['directory'];

        cardsAndList.forEach(displayCards);
        cardsAndList.forEach(displayList);
    });

function displayCards(card) {
    //Create elements to add to the document
    let section = document.createElement('section');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    
    //Add text content to the directory cards
    p1.textContent = `${card.address}`;
    p2.textContent = `${card.phonenumber}`;
    a.textContent = `${card.website}`;
    
    //Build image attributes by using setAttribute method for src, alt, and loading attribute values.
    portrait.setAttribute('src', card.logo);
    portrait.setAttribute('alt', `Logo for ${card.name}`);
    portrait.setAttribute('loading', 'lazy');
    a.setAttribute('href', card.website);
    
    //Add/append the h2 and image to the section(card)
    section.appendChild(portrait);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(a);
        
    
    //Add/append the section(card) to the div with the card class
    document.querySelector('.cards').appendChild(section);
}

function displayList(list) {
    //Create elements to add to the document
    let section = document.createElement('section');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    
    //Add text content to the directory cards
    h3.textContent = `${list.name}`;
    p1.textContent = `${list.address}`;
    p2.textContent = `${list.phonenumber}`;
    a.textContent = `${list.website}`;
    a.setAttribute('href', list.website);
    
    //Add/append the h2 and image to the section(card)
    section.appendChild(h3);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(a);
        
    
    //Add/append the section(card) to the div with the card class
    document.querySelector('.list').appendChild(section);
}