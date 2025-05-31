const forcastApi = "https://api.openweathermap.org/data/2.5/onecall?lat=33.4223&lon=-111.8226&exclude=minutely,hourly&units=imperial&appid=502854408fb5e148e3e7e1ca21917b63"
const alertSpot = document.getElementById('alerts');
const forcast = document.querySelector('.forcast')

fetch(forcastApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.log(jsonObject);

        // Alert 
        if (jsonObject.alerts) {
            let alert = jsonObject.alerts.event;
            let alertDescription = jsonObject.alerts.description;
            let warning = document.createElement('p');
            let warningDescription = document.createElement('p');
            let warningBtn = document.createElement('button');

            warning.textContent = alert;
            warningDescription.textContent = alertDescription;
            warningBtn.innerHTML = "&#9746;"

            alertSpot.appendChild(warning);
            alertSpot.appendChild(warningDescription);
            alertSpot.appendChild(warningBtn);

            function remove () {
                alertSpot.classList.add('hidden');
            }

            warningBtn.onclick = remove;
        }

        //Current Weather Forcast
        //Get info from weather API
        let mesaTemp = jsonObject.current.temp;
        let mesaHum = jsonObject.current.humidity;
        
        // Add weather results to weather card (DOM)
        document.getElementById('temp').textContent = mesaTemp.toFixed();
        document.getElementById('humidity').textContent = mesaHum;
        
        // Add image and weather conditions
        let weatherImg = `https://openweathermap.org/img/wn/${jsonObject.current.weather[0].icon}@2x.png`;
        let description = jsonObject.current.weather[0].description;
        description = description.split(' ').map(capitalize).join(' ');
                
        document.getElementById('current-cond-img').setAttribute('src', weatherImg);
        document.getElementById('current-cond-img').setAttribute('alt', description);
        document.getElementById('current-conditions').textContent = description;

        // Three Day Weather Forcast
        // Pull info from weather API
        let temp1 = jsonObject.daily[1].temp.day;
        let temp2 = jsonObject.daily[2].temp.day;
        let temp3 = jsonObject.daily[3].temp.day;
        let humidity1 = jsonObject.daily[1].humidity;
        let humidity2 = jsonObject.daily[2].humidity;
        let humidity3 = jsonObject.daily[3].humidity;
        let windSpeed1 = jsonObject.daily[1].wind_speed;
        let windSpeed2 = jsonObject.daily[2].wind_speed;
        let windSpeed3 = jsonObject.daily[3].wind_speed;

        // Create Elements in Forcast Section
        let section1 = document.createElement('section');
        let section2 = document.createElement('section');
        let section3 = document.createElement('section');

        let heading1 = document.createElement('h3');
        let heading2 = document.createElement('h3');
        let heading3 = document.createElement('h3');

        let day1temp = document.createElement('p');
        let day1hum = document.createElement('p');
        let day1ws = document.createElement('p');

        let day2temp = document.createElement('p');
        let day2hum = document.createElement('p');
        let day2ws = document.createElement('p');

        let day3temp = document.createElement('p');
        let day3hum = document.createElement('p');
        let day3ws = document.createElement('p');

        // Calculate date for tomorrow
        const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        const currentDate2 = new Date(new Date().getTime() + (86400000) + (86400000))
        const currentDate3 = new Date(new Date().getTime() + (86400000) + (86400000) + (86400000))
        const day = currentDate.getDate();
        const dayTwo = currentDate2.getDate();
        const dayThree = currentDate3.getDate()
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear()

        // Add content to all created elements
        // Day 1 (tomorrow)
        heading1.textContent = `${month}/${day}/${year}`;
        day1temp.innerHTML = `Temperature: ${temp1.toFixed()}&#8457;`;
        day1hum.textContent = `Humidity: ${humidity1}%`;
        day1ws.textContent = `Wind Speed: ${windSpeed1.toFixed()}m/h`;

        // Day 2 
        heading2.textContent = `${month}/${dayTwo}/${year}`;
        day2temp.innerHTML = `Temperature: ${temp2.toFixed()}&#8457;`;
        day2hum.textContent = `Humidity: ${humidity2}%`;
        day2ws.textContent = `Wind Speed: ${windSpeed2.toFixed()}m/h`; 

        // Day 3
        heading3.textContent = `${month}/${dayThree}/${year}`;
        day3temp.innerHTML = `Temperature: ${temp3.toFixed()}&#8457;`;
        day3hum.textContent = `Humidity: ${humidity3}%`;
        day3ws.textContent = `Wind Speed: ${windSpeed3.toFixed()}m/h`;

        // Add content to the sections
        // Day 1
        section1.appendChild(heading1);
        section1.appendChild(day1temp);
        section1.appendChild(day1hum);
        section1.appendChild(day1ws);

        // Day 2
        section2.appendChild(heading2);
        section2.appendChild(day2temp);
        section2.appendChild(day2hum);
        section2.appendChild(day2ws);

        // Day 3
        section3.appendChild(heading3);
        section3.appendChild(day3temp);
        section3.appendChild(day3hum);
        section3.appendChild(day3ws);

        // Add created sections to DOM (forcast section)
        forcast.appendChild(section1);
        forcast.appendChild(section2);
        forcast.appendChild(section3);
    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`; 
    // Got this code from Bro. Blazzard
}
