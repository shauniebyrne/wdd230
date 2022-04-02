const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Mesa&units=imperial&appid=502854408fb5e148e3e7e1ca21917b63";

fetch(weatherAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
    })