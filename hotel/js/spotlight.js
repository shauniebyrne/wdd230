const templeURL = 'https://shauniebyrne.github.io/wdd230/hotel/json/temple.json';
const spotlight = document.querySelector('.spotlight-temple');

fetch(templeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const spotlightcard = jsonObject['temples'];   
        
        spotlightcard.forEach(displayTempleCard);
    });

function displayTempleCard(tCard) {
    const pickedTemple = tCard.name;

    if (pickedTemple === "Mesa Arizona Temple") {
        // Create elements
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let telephone = document.createElement('p');
        let email = document.createElement('p');
        let image = document.createElement('img');
        let closures = document.createElement('p');

        // Add content to elements
        name.textContent = tCard.name;
        address.textContent = tCard.address;
        telephone.textContent = tCard.telephone;
        email.textContent = tCard.email;
        closures.textContent = `Temple Closures: ${tCard.closureschedule}`;

        // Add image content
        image.setAttribute('src', tCard.img);
        image.setAttribute('alt', tCard.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '250')

        // Add to section
        spotlight.appendChild(name);
        spotlight.appendChild(image);
        spotlight.appendChild(address);
        spotlight.appendChild(telephone);
        spotlight.appendChild(email);
        spotlight.appendChild(closures);
    };
}
