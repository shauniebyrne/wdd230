const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=502854408fb5e148e3e7e1ca21917b63";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        //Display current temp in Fairbanks, Alaska
        document.getElementById('current-temp').textContent = (jsObject.main.temp).toFixed(1);

        //Create variables to display current weather conditions
        const iconsrc1 = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const iconsrc2 = `https://openweathermap.org/img/w/${jsObject.weather[1].icon}.png`;
        const weatherDescription1 = jsObject.weather[0].description;
        const weatherDescription2 = jsObject.weather[1].description;

        // Current weather condition one
        document.getElementById('icon-src').textContent = iconsrc1;
        document.getElementById('weathericon').setAttribute('src', iconsrc1);
        document.getElementById('weathericon').setAttribute('alt', weatherDescription1);
        document.getElementById('one').textContent = weatherDescription1;

        // Current weather condition two
        document.getElementById('icon-src2').textContent = iconsrc2;
        document.getElementById('weathericon2').setAttribute('src', iconsrc2);
        document.getElementById('weathericon2').setAttribute('alt', weatherDescription2);
        document.getElementById('two').textContent = weatherDescription2;
    });