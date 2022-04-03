const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Mesa&units=imperial&appid=502854408fb5e148e3e7e1ca21917b63";

fetch(weatherApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);

        //Get info from weather API
        let mesaTemp = jsonObject.main.temp;
        let mesaHum = jsonObject.main.humidity;

        // Add weather results to weather card (DOM)
        document.getElementById('temp').textContent = mesaTemp.toFixed();
        document.getElementById('humidity').textContent = mesaHum;

        // Add image and weather conditions
        let weatherImg = `https://openweathermap.org/img/wn/${jsonObject.weather[0].icon}@2x.png`;
        let description = jsonObject.weather[0].description;
        description = description.split(' ').map(capitalize).join(' ');
        
        document.getElementById('current-cond-img').setAttribute('src', weatherImg);
        document.getElementById('current-cond-img').setAttribute('alt', description);
        document.getElementById('current-conditions').textContent = description; 
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`; 
    // Got this code from Bro. Blazzard
    }