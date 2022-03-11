const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Taber&units=metric&appid=502854408fb5e148e3e7e1ca21917b63";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // Get temp and speed from weather api
        let temp = jsObject.main.temp;
        let speed = jsObject.wind.speed;
        let windChill;

        // If/Then for HTML display for calulated wind chill
        if (temp <= 10 && speed > 4.8) {
             windChill = calculation(temp, speed);
             windChill = `${windChill} &#176;C`;
        } else {
             windChill = 'N/A';
        };

        // Wind Chill calculation
        function calculation(t, s) {
            let number = 13.12 + (0.6215 * t) - (11.37 * (s **  0.16)) + ((0.3965 * t) * (s ** 0.16));
            return Math.round(number);
        };

        // Add to the DOM
        document.querySelector('#temp').textContent = temp.toFixed();
        document.querySelector('#humidity').textContent = `${jsObject.main.humidity}%`;
        document.querySelector('#speed').textContent = speed.toFixed(1);
        document.querySelector('#wind-chill').innerHTML = windChill;

        // Adding the current weather conditions image and info to the DOM
        let iconImg = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        let description = jsObject.weather[0].description;
        description = description.split(' ').map(capitalize).join(' ');

        document.querySelector('#condition-img').setAttribute('src', iconImg);
        document.querySelector('#condition-img').setAttribute('alt', description);
        document.querySelector('#current-conditions').textContent = description;      
    });  

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`; 
    // Got this code from Bro. Blazzard
}