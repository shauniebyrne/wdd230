const spotlight = document.querySelector('.spotlight-holder');
const URL = 'https://shauniebyrne.github.io/wdd230/chamber/json/data.json';

fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        //console.log(jsonObject);
        const spotlightCards = jsonObject['directory'];
        
        spotlightCards.forEach(displaySpotlights);
    });

function displaySpotlights(sCards) {
    const membStat = sCards.membership;

    if (membStat === "silver" || membStat === "gold") {

        //Create Elements to add to the DOM
        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let logoImg = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let a = document.createElement('a');

        //Add textContent to the spotlights
        h3.textContent = sCards.name;
        p1.textContent = sCards.address;
        p2.textContent = sCards.phonenumber;
        a.textContent = sCards.website;

        //Add attributes by using setAttribute to logo and a
        logoImg.setAttribute('src', sCards.logo);
        logoImg.setAttribute('alt', `${sCards.name} Logo`);
        logoImg.setAttribute('loading', 'lazy');
        a.setAttribute('href', sCards.website);

        //Append all to the spotlight card
        section.appendChild(h3);
        section.appendChild(logoImg);
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(a);

        //Add all changes to the DOM in the spotlight holder box
        spotlight.appendChild(section);
    };
}