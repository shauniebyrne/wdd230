const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//Fetch the JSON file
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.table(jsonObject);
        const prophets = jsonObject['prophets'];

        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    //Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    //Change textContent to use Prophets full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    p2.textContent = `Birth Place: ${prophet.birthplace}`;

    //Build image attributes by using setAttribute method for src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of: ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    //Add/append the h2 and image to the section(card)
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    //Add/append the section(card) to the div with the card class
    document.querySelector('.cards').appendChild(card);
}


